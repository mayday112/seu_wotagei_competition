/**
 * modules/select/front/locales/zh-CN.mjs —— 本模块 zh-CN 文案（namespace = "select"）
 *
 * 键路径：data-i18n="select.<key>" / ctx.i18n.t("select.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "pageTitle": "Y.Stage 4",
  "title": "赛制",
  "subtitle": "选择赛制，开始对战",
  "groups": {
    "solo": "单人赛",
    "team": "团体与表演",
    "custom": "自制赛制"
  },
  "empty": "暂无赛制，请先在 modules/modules.json 中注册模块",
  "serverDisconnected": "无法连接服务器，请先启动 node server.js"
};
