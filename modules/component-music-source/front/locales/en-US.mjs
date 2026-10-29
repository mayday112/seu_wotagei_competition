/**
 * modules/component-music-source/front/locales/en-US.mjs —— 本模块 en-US 文案（namespace = "component-music-source"）
 *
 * 键路径：data-i18n="component-music-source.<key>" / ctx.i18n.t("component-music-source.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "title": "Music Source",
  "refresh": "Refresh",
  "retry": "Retry",
  "loading": "Loading music library...",
  "totalCount": "{count} tracks in total",
  "group": "Music Category",
  "groups": {
    "1yearplus": "1 Year+ Chapter 1",
    "1yearplus_ex": "1 Year+ Chapter 2",
    "1yearminus": "1 Year-",
    "games_musics": "Mini-game Music"
  },
  "loadFailed": "Failed to load music library ({label})"
};
