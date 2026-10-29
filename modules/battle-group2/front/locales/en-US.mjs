/**
 * modules/battle-group2/front/locales/en-US.mjs —— 本模块 en-US 文案（namespace = "battle-group2"）
 *
 * 键路径：data-i18n="battle-group2.<key>" / ctx.i18n.t("battle-group2.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "rookiesTitle": "Rookies Division Battle",
  "playerList": "Player List",
  "playerPlaceholder": "Player Name",
  "trickPlaceholder": "Draw Trick",
  "musicPlaceholder": "Draw Music",
  "trickList": "Trick List",
  "nextPlayer": "Next Player",
  "enterRanking": "Go to Rankings",
  "playMusic": "Play Music",
  "stopMusic": "Stop Music",
  "pleaseDrawMusicFirst": "Please draw music first",
  "musicPlayFailed": "Music playback failed, please try again",
  "musicListEmpty": "Music list is empty",
  "musicSelected": "Selected music: {name}",
  "noPlayersToShuffle": "No players to shuffle",
  "playersShuffled": "Players shuffled randomly",
  "drawTrickDisabled": "Draw move feature is disabled in Settings",
  "noAvailableTricks": "No available tricks",
  "clearCacheConfirm": "Are you sure you want to clear all cached data? This will reset all match progress.",
  "initializingData": "Initializing match data...",
  "loadPlayersFailed": "Failed to load player data",
  "dataInitialized": "Match data initialized",
  "initServerError": "Failed to initialize server data: {error}",
  "clearCacheError": "Failed to clear cache: {error}",
  "loadPlayersError": "Failed to load player data, using default data",
  "loadTricksError": "Failed to load trick data, using default data",
  "loadMusicError": "Failed to load music list, using default data"
};
