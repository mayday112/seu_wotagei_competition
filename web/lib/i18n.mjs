/**
 * web/lib/i18n.mjs —— 国际化/多语言纯函数基座（L1 共享资产）
 *
 * 分层归属：L1 资产 —— 纯逻辑（无强制 DOM/无定时器/无网络/无模块级可变状态），
 * 默认 locale 为 "en-US"，fallback 为 "zh-CN"。
 * storage 与 document 均由外部注入（Node 环境可注入 mock 进行全流程单测）。
 */

export const SUPPORTED_LOCALES = ["en-US", "id-ID", "zh-CN"];
export const DEFAULT_LOCALE = "en-US";
export const FALLBACK_LOCALE = "zh-CN";
export const STORAGE_KEY = "ystage:lang";

/**
 * 深入取值辅助：支持 "a.b.c" 形式的路径索引
 * @param {Record<string, any>} obj
 * @param {string} path
 * @returns {any}
 */
export function getByPath(obj, path) {
  if (!obj || typeof obj !== "object" || typeof path !== "string") return undefined;
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

/**
 * 字符串模板参数替换：将 "{name}" 替换为 params.name
 * @param {string} tmpl
 * @param {Record<string, any>} [params]
 * @returns {string}
 */
export function interpolate(tmpl, params) {
  if (typeof tmpl !== "string") return String(tmpl ?? "");
  if (!params || typeof params !== "object") return tmpl;
  return tmpl.replace(/\{(\w+)\}/g, (match, key) => {
    return Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : match;
  });
}

/**
 * 创建 i18n 实例（L1 依赖注入模式）
 * @param {object} [opts]
 * @param {string} [opts.defaultLocale="en-US"]
 * @param {string} [opts.fallbackLocale="zh-CN"]
 * @param {Record<string, any>} [opts.locales={}]
 * @param {Storage|{getItem:(k:string)=>string|null, setItem:(k:string,v:string)=>void}|null} [opts.storage]
 * @param {string} [opts.storageKey="ystage:lang"]
 */
export function createI18n(opts = {}) {
  const defaultLoc = opts.defaultLocale || DEFAULT_LOCALE;
  const fallbackLoc = opts.fallbackLocale || FALLBACK_LOCALE;
  const storage = opts.storage || null;
  const storageKey = opts.storageKey || STORAGE_KEY;

  // 内部字典存储：深拷贝/浅合并各语言包
  const dictionaries = { ...(opts.locales || {}) };

  // 读取初始 locale
  let currentLocale = defaultLoc;
  if (storage && typeof storage.getItem === "function") {
    try {
      const saved = storage.getItem(storageKey);
      if (saved && typeof saved === "string") {
        currentLocale = saved;
      }
    } catch {
      // 忽略存储读取异常（如无痕模式权限问题）
    }
  }

  const listeners = new Set();

  return {
    /** 获取当前语言 */
    getLocale() {
      return currentLocale;
    },

    /**
     * 设置当前语言并持久化
     * @param {string} loc
     * @returns {string} 新的 locale
     */
    setLocale(loc) {
      if (typeof loc !== "string" || !loc.trim()) return currentLocale;
      const prev = currentLocale;
      currentLocale = loc.trim();
      if (storage && typeof storage.setItem === "function") {
        try {
          storage.setItem(storageKey, currentLocale);
        } catch {
          // 忽略存储写入异常
        }
      }
      if (prev !== currentLocale) {
        listeners.forEach((fn) => {
          try {
            fn(currentLocale, prev);
          } catch {
            // 忽略监听器内部异常
          }
        });
      }
      return currentLocale;
    },

    /**
     * 注册语言变更监听器
     * @param {(locale: string, prevLocale: string) => void} fn
     * @returns {() => void} unbind 函数
     */
    onChange(fn) {
      if (typeof fn === "function") {
        listeners.add(fn);
        return () => listeners.delete(fn);
      }
      return () => {};
    },

    /**
     * 加载/扩展指定语言字典
     * @param {string} loc
     * @param {Record<string, any>} dict
     */
    loadDictionary(loc, dict) {
      if (!loc || typeof loc !== "string" || !dict || typeof dict !== "object") return;
      dictionaries[loc] = {
        ...(dictionaries[loc] || {}),
        ...dict,
      };
    },

    /**
     * 获取指定语言字典
     * @param {string} [loc] 缺省为当前 locale
     */
    getDictionary(loc) {
      const target = loc || currentLocale;
      return dictionaries[target] || null;
    },

    /**
     * 翻译核心函数：支持层级 key、参数插值与降级
     * @param {string} key
     * @param {Record<string, any>|string} [paramsOrFallback]
     * @param {string} [fallback]
     * @returns {string}
     */
    t(key, paramsOrFallback, fallback) {
      if (typeof key !== "string" || !key) return "";

      let params = null;
      let fb = fallback;

      if (typeof paramsOrFallback === "string") {
        fb = paramsOrFallback;
      } else if (paramsOrFallback && typeof paramsOrFallback === "object") {
        params = paramsOrFallback;
      }

      // 1. 尝试从当前 locale 获取
      const curDict = dictionaries[currentLocale];
      let val = getByPath(curDict, key);

      // 2. 尝试从 fallbackLocale 获取
      if (val === undefined && currentLocale !== fallbackLoc) {
        const fbDict = dictionaries[fallbackLoc];
        val = getByPath(fbDict, key);
      }

      // 3. 都不存在，则取 fallback 参数，若仍无则取 key 本身
      if (val === undefined) {
        val = fb !== undefined ? fb : key;
      }

      // 4. 若值为字符串，执行插值；否则转为字符串
      if (typeof val === "string") {
        return interpolate(val, params);
      }
      return String(val ?? "");
    },

    /**
     * 批量翻译 DOM 节点树（支持 data-i18n 及 data-i18n-attr）
     * @param {Element} root
     */
    translateTree(root) {
      if (!root || typeof root.querySelectorAll !== "function") return;

      // 1. 文本节点翻译：data-i18n="path.to.key"
      const textNodes = [];
      if (typeof root.hasAttribute === "function" && root.hasAttribute("data-i18n")) {
        textNodes.push(root);
      }
      const matchedText = root.querySelectorAll("[data-i18n]");
      for (let i = 0; i < matchedText.length; i++) {
        textNodes.push(matchedText[i]);
      }

      for (const el of textNodes) {
        const key = el.getAttribute("data-i18n");
        if (key) {
          // 记录或保留初始文本作为 fallback
          if (!el.hasAttribute("data-i18n-original")) {
            el.setAttribute("data-i18n-original", el.textContent || "");
          }
          const orig = el.getAttribute("data-i18n-original") || "";
          el.textContent = this.t(key, orig);
        }
      }

      // 2. 属性翻译：data-i18n-attr="title:path.to.key,placeholder:path.to.key"
      const attrNodes = [];
      if (typeof root.hasAttribute === "function" && root.hasAttribute("data-i18n-attr")) {
        attrNodes.push(root);
      }
      const matchedAttr = root.querySelectorAll("[data-i18n-attr]");
      for (let i = 0; i < matchedAttr.length; i++) {
        attrNodes.push(matchedAttr[i]);
      }

      for (const el of attrNodes) {
        const raw = el.getAttribute("data-i18n-attr");
        if (!raw) continue;
        const pairs = raw.split(",");
        for (const pair of pairs) {
          const [attr, key] = pair.split(":").map((s) => s.trim());
          if (attr && key) {
            const origKey = `data-i18n-orig-${attr}`;
            if (!el.hasAttribute(origKey)) {
              el.setAttribute(origKey, el.getAttribute(attr) || "");
            }
            const orig = el.getAttribute(origKey) || "";
            el.setAttribute(attr, this.t(key, orig));
          }
        }
      }
    },
  };
}
