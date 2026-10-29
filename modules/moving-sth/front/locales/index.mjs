/**
 * modules/moving-sth/front/locales/index.mjs —— 模块级语言包注册入口
 *
 * 用法（front/plugin.js）：
 *   import { registerLocales } from "./locales/index.mjs";
 *   export default { inject: ["ui", "api", "i18n"], apply(ctx) { registerLocales(ctx); ... } };
 */
import enUS from "./en-US.mjs";
import idID from "./id-ID.mjs";
import zhCN from "./zh-CN.mjs";

export const NAMESPACE = "moving-sth";
export const LOCALES = Object.freeze({ "en-US": enUS, "id-ID": idID, "zh-CN": zhCN });

export function registerLocales(ctx) {
  const i18n = ctx && ctx.i18n;
  if (!i18n || typeof i18n.loadDictionary !== "function") return;
  for (const [loc, dict] of Object.entries(LOCALES)) {
    i18n.loadDictionary(loc, { [NAMESPACE]: dict });
  }
}
