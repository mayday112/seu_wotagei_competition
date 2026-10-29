/**
 * modules/battle-group2-2/front/locales/zh-CN.mjs —— 本模块 zh-CN 文案（namespace = "battle-group2-2"）
 *
 * 键路径：data-i18n="battle-group2-2.<key>" / ctx.i18n.t("battle-group2-2.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "rookiesTitle": "一年内组比赛界面 - 上半场",
  "playerList": "选手列表",
  "playerPlaceholder": "打师名",
  "trickPlaceholder": "抽取技名",
  "musicPlaceholder": "抽取音乐",
  "trickList": "技名列表",
  "nextPlayer": "下一位",
  "playMusic": "播放音乐",
  "stopMusic": "停止播放音乐",
  "confirmReturnFirst": "已到达最后一位选手，是否返回第一位选手?",
  "confirm": "确认",
  "cancel": "取消",
  "atLastPlayer": "已到最后一位选手",
  "noPlayersToShuffle": "没有可排序的选手",
  "playersShuffled": "选手已随机排序",
  "tricksNotLoaded": "技名数据未加载，请稍后再试",
  "allTricksCrossed": "所有技名都已划线，请重置技名",
  "trickDrawn": "已抽取技名: {name}",
  "pleaseDrawMusicFirst": "请先抽取音乐",
  "musicPlayFailed": "音乐无法播放: {name}",
  "musicListEmpty": "音乐列表为空",
  "musicDrawn": "已抽取音乐: {name}",
  "clearCacheConfirm": "确定要清除所有缓存数据吗？此操作将重置所有比赛进度。",
  "initializingData": "正在初始化比赛数据...",
  "loadPlayersFailed": "无法加载选手数据",
  "dataInitialized": "比赛数据已初始化",
  "initServerError": "初始化服务器数据失败: {error}",
  "clearCacheError": "清除缓存失败: {error}",
  "loadPlayersError": "无法加载选手数据，将使用默认数据",
  "loadTricksError": "无法加载技名数据，将使用默认数据",
  "loadMusicError": "无法加载音乐列表，将使用默认数据"
};
