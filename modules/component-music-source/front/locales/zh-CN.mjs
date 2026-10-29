/**
 * modules/component-music-source/front/locales/zh-CN.mjs —— 本模块 zh-CN 文案（namespace = "component-music-source"）
 *
 * 键路径：data-i18n="component-music-source.<key>" / ctx.i18n.t("component-music-source.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "title": "曲库数据源",
  "refresh": "刷新曲库",
  "retry": "重试",
  "loading": "曲库加载中…",
  "totalCount": "共 {count} 曲",
  "group": "曲库组别",
  "groups": {
    "1yearplus": "一年加组第一章节",
    "1yearplus_ex": "一年加组第二章节",
    "1yearminus": "一年内组",
    "games_musics": "搬化棒游戏音乐"
  },
  "loadFailed": "曲库加载失败（{label}）"
};
