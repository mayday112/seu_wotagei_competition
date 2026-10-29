/**
 * modules/games/front/locales/zh-CN.mjs —— 本模块 zh-CN 文案（namespace = "games"）
 *
 * 键路径：data-i18n="games.<key>" / ctx.i18n.t("games.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "pageTitle": "Y.Stage 4 - 游戏中心",
  "title": "游戏中心",
  "subtitle": "选择你想玩的小游戏",
  "noGames": "暂无小游戏，请在 modules/modules.json 中注册",
  "serverDisconnected": "无法连接服务器，请先启动 node server.js"
};
