/**
 * modules/plugin-manager/front/locales/zh-CN.mjs
 */
export default {
  "pageTitle": "Y.Stage 4 - 插件管理",
  "title": "插件管理",
  "subtitle": "插件装配管理与热替换",
  "backHome": "返回主页",
  "refreshSnapshot": "刷新快照",
  "placeholder": "正在装配插件管理界面…",
  "loadingSnapshot": "正在加载装配快照…",
  "snapshotLoadFailed": "装配快照读取失败：{error}（插件装配服务未就绪，请重启服务）",
  "tabs": {
    "front": "前端插件",
    "backend": "后端插件",
    "theme": "主题插件"
  },
  "search": {
    "aria": "搜索插件名称或标识",
    "placeholder": "搜索插件名称或标识..."
  },
  "filters": {
    "all": "全部",
    "mounted": "已挂载",
    "disabled": "已禁用",
    "unmounted": "未挂载"
  },
  "stats": {
    "mounted": "挂载",
    "disabled": "禁用",
    "unmounted": "未挂载"
  },
  "badges": {
    "backendLegacy": "后端·legacy",
    "backendPlugin": "后端·插件",
    "frontPage": "前端·页面",
    "frontComponent": "前端·组件",
    "currentTheme": "当前主题",
    "themeCore": "主题核心",
    "componentMember": "组件成员"
  },
  "stateLabels": {
    "mounted": "已挂载",
    "enabled": "已启用",
    "disabled": "已禁用",
    "unmounted": "未挂载"
  },
  "actions": {
    "enable": "启用",
    "disable": "禁用",
    "reload": "重载",
    "config": "配置",
    "collapseConfig": "收起配置",
    "saveConfig": "保存配置",
    "setAsSystemTheme": "设为系统主题",
    "enableWholeGroup": "启用整组",
    "disableWholeGroup": "禁用整组"
  },
  "hints": {
    "takeEffectAfterRefresh": "刷新页面后生效",
    "ctrlK": "聚焦搜索 · 修改即时生效",
    "noMatchingPlugins": "没有匹配的插件",
    "noMatchingPages": "没有匹配的页面插件",
    "noMatchingComponents": "没有匹配的组件插件",
    "noMatchingThemes": "没有匹配的主题插件",
    "tryClearingSearch": "试试清空搜索词，或切换「全部」筛选。",
    "noVisibleMembers": "当前搜索词或状态筛选下没有可见的组成员行。",
    "defaultThemeVirtual": "虚拟组 · 无插件条目",
    "themeGroupCount": "已启用 {enabled} / 共 {total}",
    "defaultThemeDesc": "本组无插件：默认皮肤由各页面自带，停用全部主题插件即回到默认外观。",
    "pagePluginDesc": "key = 模块 id，内核按 URL 自动渲染",
    "compPluginDesc": "注册进组件表，由页面按名取用（永不自动渲染）",
    "currentSystemTheme": "当前系统主题：",
    "switchAndPreview": "切换与预览请前往",
    "themeManagerLink": "主题管理",
    "createThemeHint": "自建主题：新建 modules/component-theme-<id>/ 组件插件并登记 web/front.json，本页与主题管理页都会自动出现（见主题管理页内指南）。",
    "footerBar": "共 {modules} 个模块 · 前端 {front} 个条目（页面 {pages} · 组件 {components} · 主题 {themes} 组）· 后端 {backend} 个插件 · 热替换无需重启进程"
  },
  "status": {
    "operationSuccess": "操作成功",
    "operationFailed": "操作失败",
    "diskWriteFailed": "；注意：清单写入磁盘失败（本次进程内已生效，请检查目录写权限）",
    "disabledSuccess": "已禁用",
    "enabledSuccess": "已启用",
    "reloadedSuccess": "已热重载",
    "frontDisabled": "前端插件已停用",
    "frontEnabled": "前端插件已启用",
    "setThemeSuccess": "已设为系统主题「{name}」，各页面刷新后生效",
    "themeAlreadyState": "主题组「{label}」内的插件已是{state}状态",
    "allEnabled": "全部启用",
    "allDisabled": "全部停用",
    "itemToggled": "「{id}」已{state}（{current}/{total}）",
    "themeGroupToggled": "主题组「{label}」整组已{state}（共 {count} 个插件，刷新页面后生效）",
    "themeGroupFailed": "主题组「{label}」有 {count} 个插件未能{state}：{list}",
    "jsonParseError": "配置 JSON 解析失败：{error}",
    "configSaved": "配置已保存并热重装"
  }
};

