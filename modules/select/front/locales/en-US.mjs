/**
 * modules/select/front/locales/en-US.mjs —— 本模块 en-US 文案（namespace = "select"）
 *
 * 键路径：data-i18n="select.<key>" / ctx.i18n.t("select.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "pageTitle": "Y.Stage 4",
  "title": "Match Formats",
  "subtitle": "Select format to begin battle",
  "groups": {
    "solo": "Solo Battles",
    "team": "Team & Showcase",
    "custom": "Custom Stages"
  },
  "empty": "No match formats available. Please register modules in modules/modules.json first",
  "serverDisconnected": "Unable to connect to server. Please start 'node server.js' first"
};
