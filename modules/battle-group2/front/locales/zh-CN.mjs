/**
 * modules/battle-group2/front/locales/zh-CN.mjs —— 本模块 zh-CN 文案（namespace = "battle-group2"）
 *
 * 键路径：data-i18n="battle-group2.<key>" / ctx.i18n.t("battle-group2.<key>")；三语键集合必须一致
 * （node scripts/check-locales.js 守门）。由 ./index.mjs 的 registerLocales(ctx) 注入 ctx.i18n。
 */
export default {
  "rookiesTitle": "一年内组对战",
  "playerList": "选手列表",
  "playerPlaceholder": "打师名",
  "trickPlaceholder": "抽取技名",
  "musicPlaceholder": "抽取音乐",
  "trickList": "技名列表",
  "nextPlayer": "下一位",
  "enterRanking": "进入排名页面",
  "playMusic": "播放音乐",
  "stopMusic": "停止播放音乐",
  "pleaseDrawMusicFirst": "请先抽取音乐",
  "musicPlayFailed": "音乐播放失败，请重试",
  "musicListEmpty": "音乐列表为空",
  "musicSelected": "已选择音乐: {name}",
  "noPlayersToShuffle": "没有可排序的选手",
  "playersShuffled": "选手已随机排序",
  "drawTrickDisabled": "抽取动作功能已在设置页关闭",
  "noAvailableTricks": "没有可用的技名",
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
