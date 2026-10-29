/**
 * modules/battle-group2-2/front/locales/en-US.mjs —— 本模块 en-US 文案（namespace = "battle-group2-2"）
 *
 * 键路径：data-i18n="battle-group2-2.<key>" / ctx.i18n.t("battle-group2-2.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "rookiesTitle": "Rookies Division - First Half",
  "playerList": "Player List",
  "playerPlaceholder": "Player Name",
  "trickPlaceholder": "Draw Trick",
  "musicPlaceholder": "Draw Music",
  "trickList": "Trick List",
  "nextPlayer": "Next Player",
  "playMusic": "Play Music",
  "stopMusic": "Stop Music",
  "confirmReturnFirst": "Reached the last player. Return to the first player?",
  "confirm": "Confirm",
  "cancel": "Cancel",
  "atLastPlayer": "Reached the last player",
  "noPlayersToShuffle": "No players to shuffle",
  "playersShuffled": "Players shuffled randomly",
  "tricksNotLoaded": "Trick data not loaded, please try again later",
  "allTricksCrossed": "All tricks have been crossed out, please reset tricks",
  "trickDrawn": "Drawn trick: {name}",
  "pleaseDrawMusicFirst": "Please draw music first",
  "musicPlayFailed": "Unable to play music: {name}",
  "musicListEmpty": "Music list is empty",
  "musicDrawn": "Drawn music: {name}",
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
