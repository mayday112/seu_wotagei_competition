/**
 * modules/battle-group1/front/locales/index.mjs —— 模块级语言包注册入口
 *
 * 用法（front/plugin.js）：
 *   import { registerLocales } from "./locales/index.mjs";
 *   export default { inject: ["ui", "i18n"], apply(ctx) { registerLocales(ctx); ... } };
 *
 * 语义：把三语字典挂到 ctx.i18n 的 "battle-group1" 命名空间下（loadDictionary 为顶层浅合并，
 * 命名空间 = 模块 id 保证各模块互不覆盖）；ctx.i18n 缺失时静默跳过（优雅降级，页面回落 fallback 文案）。
 */
import enUS from "./en-US.mjs";
import idID from "./id-ID.mjs";
import zhCN from "./zh-CN.mjs";

export const NAMESPACE = "battle-group1";
export const LOCALES = Object.freeze({ "en-US": enUS, "id-ID": idID, "zh-CN": zhCN });

export function registerLocales(ctx) {
  const i18n = ctx && ctx.i18n;
  if (!i18n || typeof i18n.loadDictionary !== "function") return;
  for (const [loc, dict] of Object.entries(LOCALES)) {
    i18n.loadDictionary(loc, { [NAMESPACE]: dict });
  }
}
