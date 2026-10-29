/**
 * modules/games/front/locales/en-US.mjs —— 本模块 en-US 文案（namespace = "games"）
 *
 * 键路径：data-i18n="games.<key>" / ctx.i18n.t("games.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "pageTitle": "Y.Stage 4 - Game Center",
  "title": "Game Center",
  "subtitle": "Choose a mini-game to play",
  "noGames": "No mini-games available. Please register in modules/modules.json",
  "serverDisconnected": "Unable to connect to server. Please start 'node server.js' first"
};
