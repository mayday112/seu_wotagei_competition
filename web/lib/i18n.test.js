/**
 * web/lib/i18n.mjs 单测
 *
 * 覆盖：getByPath, interpolate, createI18n (defaultLocale, storage, fallback, translation, DOM tree walk).
 */
const { test, runTests, assert } = require("../../server/test-lib");

const importI18n = () => import("./i18n.mjs");

test("getByPath: 支持深层属性查找与异常安全", async () => {
  const { getByPath } = await importI18n();
  const obj = { a: { b: { c: "hello" } }, x: 123 };
  assert.strictEqual(getByPath(obj, "a.b.c"), "hello");
  assert.strictEqual(getByPath(obj, "x"), 123);
  assert.strictEqual(getByPath(obj, "a.b.unknown"), undefined);
  assert.strictEqual(getByPath(obj, "not.exist.path"), undefined);
  assert.strictEqual(getByPath(null, "a"), undefined);
  assert.strictEqual(getByPath(obj, null), undefined);
});

test("interpolate: 支持花括号占位符替换与空参数保护", async () => {
  const { interpolate } = await importI18n();
  assert.strictEqual(
    interpolate("Hello {name}, welcome to {place}!", { name: "Alice", place: "Stage" }),
    "Hello Alice, welcome to Stage!"
  );
  assert.strictEqual(interpolate("No params {unmatched}", {}), "No params {unmatched}");
  assert.strictEqual(interpolate("Simple text", null), "Simple text");
});

test("createI18n: 默认语言为 en-US，且优先从 storage 读取", async () => {
  const { createI18n, DEFAULT_LOCALE } = await importI18n();

  // 1. 无 storage -> 默认 en-US
  const i18nDefault = createI18n();
  assert.strictEqual(i18nDefault.getLocale(), DEFAULT_LOCALE);
  assert.strictEqual(i18nDefault.getLocale(), "en-US");

  // 2. 模拟 Storage
  const store = new Map();
  store.set("ystage:lang", "id-ID");
  const fakeStorage = {
    getItem: (k) => store.get(k) || null,
    setItem: (k, v) => store.set(k, v),
  };

  const i18nStored = createI18n({ storage: fakeStorage });
  assert.strictEqual(i18nStored.getLocale(), "id-ID");

  // 3. setLocale 持久化与监听器
  let notified = null;
  const unbind = i18nStored.onChange((cur, prev) => {
    notified = { cur, prev };
  });
  i18nStored.setLocale("zh-CN");
  assert.strictEqual(i18nStored.getLocale(), "zh-CN");
  assert.strictEqual(store.get("ystage:lang"), "zh-CN");
  assert.deepStrictEqual(notified, { cur: "zh-CN", prev: "id-ID" });

  unbind();
  i18nStored.setLocale("en-US");
  assert.strictEqual(notified.cur, "zh-CN"); // unbind 后不再收到新通知
});

test("t: 支持当前语言、fallback 语言及缺省兜底", async () => {
  const { createI18n } = await importI18n();
  const locales = {
    "en-US": {
      welcome: "Welcome {user}!",
      common: { ok: "OK" },
    },
    "zh-CN": {
      welcome: "欢迎 {user}！",
      common: { ok: "确定", cancel: "取消" },
      onlyInZh: "仅中文存在",
    },
    "id-ID": {
      welcome: "Selamat datang {user}!",
      common: { ok: "Oke" },
    },
  };

  const i18n = createI18n({ locales, defaultLocale: "en-US", fallbackLocale: "zh-CN" });

  // 1. 命中 en-US
  assert.strictEqual(i18n.t("common.ok"), "OK");
  assert.strictEqual(i18n.t("welcome", { user: "Bob" }), "Welcome Bob!");

  // 2. en-US 中没有 common.cancel，但 zh-CN 有 -> 回退到 zh-CN
  assert.strictEqual(i18n.t("common.cancel"), "取消");
  assert.strictEqual(i18n.t("onlyInZh"), "仅中文存在");

  // 3. 任何语言都没有 -> 回退到提供的 fallback 字符串，若无则返回 key 本身
  assert.strictEqual(i18n.t("unknown.key", "Default Fallback"), "Default Fallback");
  assert.strictEqual(i18n.t("unknown.key"), "unknown.key");

  // 4. 切换语言到 id-ID
  i18n.setLocale("id-ID");
  assert.strictEqual(i18n.t("common.ok"), "Oke");
  assert.strictEqual(i18n.t("welcome", { user: "Budi" }), "Selamat datang Budi!");
});

test("translateTree: 能够批量翻译 DOM 树的文本内容与指定属性", async () => {
  const { createI18n } = await importI18n();
  const locales = {
    "en-US": {
      btn: { save: "Save", title: "Click to save" },
      header: "Stage Header",
    },
    "zh-CN": {
      btn: { save: "保存", title: "点击保存" },
      header: "舞台头部",
    },
  };

  const i18n = createI18n({ locales, defaultLocale: "en-US" });

  // 构造 Fake DOM Element
  function createFakeElement(tag, attrs = {}, textContent = "") {
    const attributes = new Map(Object.entries(attrs));
    const children = [];
    return {
      tagName: tag,
      textContent,
      children,
      getAttribute(k) {
        return attributes.get(k) || null;
      },
      setAttribute(k, v) {
        attributes.set(k, String(v));
      },
      hasAttribute(k) {
        return attributes.has(k);
      },
      querySelectorAll(selector) {
        const res = [];
        function walk(node) {
          for (const child of node.children) {
            if (selector === "[data-i18n]" && child.hasAttribute("data-i18n")) {
              res.push(child);
            }
            if (selector === "[data-i18n-attr]" && child.hasAttribute("data-i18n-attr")) {
              res.push(child);
            }
            walk(child);
          }
        }
        walk(this);
        return res;
      },
      appendChild(child) {
        children.push(child);
      },
    };
  }

  const root = createFakeElement("div");
  const h1 = createFakeElement("h1", { "data-i18n": "header" }, "原中文标题");
  const btn = createFakeElement(
    "button",
    {
      "data-i18n": "btn.save",
      "data-i18n-attr": "title:btn.title",
      title: "原中文提示",
    },
    "原中文保存"
  );

  root.appendChild(h1);
  root.appendChild(btn);

  // 执行翻译为 en-US
  i18n.translateTree(root);

  assert.strictEqual(h1.textContent, "Stage Header");
  assert.strictEqual(btn.textContent, "Save");
  assert.strictEqual(btn.getAttribute("title"), "Click to save");
  assert.strictEqual(h1.getAttribute("data-i18n-original"), "原中文标题");

  // 切换为 zh-CN 后重新翻译
  i18n.setLocale("zh-CN");
  i18n.translateTree(root);

  assert.strictEqual(h1.textContent, "舞台头部");
  assert.strictEqual(btn.textContent, "保存");
  assert.strictEqual(btn.getAttribute("title"), "点击保存");
});

runTests("web/lib/i18n.test.js");
