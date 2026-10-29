/**
 * modules/music-import/front/locales/zh-CN.mjs
 */
export default {
  "pageTitle": "Y.Stage 4 - 音乐导入管理",
  "title": "音乐批量导入管理",
  "subtitle": "导入不同组别的音乐文件并更新配置",
  "groups": {
    "1yearplus": "一年加组第一章节",
    "1yearplus_ex": "一年加组第二章节",
    "1yearminus": "一年内组",
    "games_musics": "搬化棒游戏音乐"
  },
  "dropPrompt": "拖放音乐文件到这里",
  "orText": "或者",
  "selectFiles": "选择文件",
  "formatHint": "支持格式: MP3, WAV, FLAC, OGG (最大50MB)",
  "previewTitle": "音乐文件预览 ({count})",
  "targetGroupLabel": "上传目标组别",
  "targetGroupSelectAria": "选择上传目标组别",
  "targetGroupHint": "请确认上传目标组别是否正确",
  "startUpload": "开始上传",
  "clearList": "清空列表",
  "currentGroupTitle": "当前所选组别",
  "folderLabel": "文件夹: {folder}",
  "configLabel": "配置文件: {file}",
  "countLabel": "已有音乐数量: {count}",
  "musicListTitle": "音乐文件列表",
  "refreshAria": "刷新文件列表",
  "table": {
    "index": "#",
    "fileName": "文件名",
    "actions": "操作",
    "loading": "加载音乐文件列表中...",
    "empty": "当前组别没有音乐文件",
    "remove": "移除文件",
    "moveToRecycle": "移到回收文件夹"
  },
  "nav": {
    "settings": "返回设置中心",
    "home": "返回主页"
  },
  "status": {
    "uploaderNotReady": "上传组件未就绪: {error}。请联系管理员安装multer。",
    "cannotConnect": "无法连接到服务器，上传功能可能不可用",
    "loadCountFailed": "加载音乐数量失败: {error}",
    "loadFilesFailed": "加载音乐文件列表失败: {error}",
    "invalidFiles": "以下{count}个文件不是有效的音频文件: {files}",
    "cannotMoveDuringUpload": "上传过程中不能移动文件",
    "confirmMoveToRecycle": "确定要将文件 \"{filename}\" 移动到回收文件夹吗？",
    "movingFile": "正在移动文件...",
    "moveSuccess": "文件 \"{filename}\" 已移动到回收文件夹",
    "moveFailed": "移动文件失败: {error}",
    "startUploadMsg": "开始上传文件到 {group}...",
    "confirmOverwrite": "以下文件已存在，确定要覆盖吗？\n{files}",
    "uploadCancelled": "上传已取消",
    "uploadSuccess": "成功上传 {count} 个文件",
    "uploadFailed": "上传失败: {error}",
    "missingGroupParam": "无法识别目标组别，请重新选择组别后再试",
    "serverError500": "服务器错误：上传组件可能未正确安装。请联系管理员安装multer模块。"
  }
};

