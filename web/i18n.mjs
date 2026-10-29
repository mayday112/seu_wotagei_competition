/**
 * web/i18n.mjs —— 前端 Cordis i18n 服务适配器
 *
 * 将 L1 i18n 纯函数与预置静态字典装配为 ctx.i18n 服务。
 * 字典通过构建期 bundle 内联，零网络开销、100% 离线支持。
 */
import { createI18n, DEFAULT_LOCALE, FALLBACK_LOCALE, STORAGE_KEY } from "./lib/i18n.mjs";
import zhCN from "./locales/zh-CN.mjs";
import enUS from "./locales/en-US.mjs";
import idID from "./locales/id-ID.mjs";

export function installI18n(ctx, opts = {}) {
  const storage = opts.storage || (typeof window !== "undefined" ? window.localStorage : null);
  const locales = {
    "zh-CN": zhCN,
    "en-US": enUS,
    "id-ID": idID,
    ...(opts.locales || {}),
  };

  const i18n = createI18n({
    defaultLocale: opts.defaultLocale || DEFAULT_LOCALE,
    fallbackLocale: opts.fallbackLocale || FALLBACK_LOCALE,
    storage,
    storageKey: opts.storageKey || STORAGE_KEY,
    locales,
  });

  const service = {
    getLocale: () => i18n.getLocale(),
    setLocale: (loc) => {
      const next = i18n.setLocale(loc);
      ctx.emit("i18n:changed", { locale: next });
      return next;
    },
    t: (key, paramsOrFallback, fallback) => i18n.t(key, paramsOrFallback, fallback),
    translateTree: (root) => i18n.translateTree(root),
    loadDictionary: (loc, dict) => i18n.loadDictionary(loc, dict),
    getDictionary: (loc) => i18n.getDictionary(loc),
    onChange: (fn) => i18n.onChange(fn),
    _raw: i18n,
  };

  ctx.provide("i18n", service);
  return service;
}
