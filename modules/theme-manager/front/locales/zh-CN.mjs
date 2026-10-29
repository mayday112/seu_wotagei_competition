/**
 * modules/theme-manager/front/locales/zh-CN.mjs
 */
export default {
  "pageTitle": "主题管理",
  "title": "主题管理",
  "subtitle": "SYSTEM THEME · 切换为系统级设置，全场屏幕同步生效",
  "guide": {
    "summary": "如何自建主题插件？",
    "step1": "新建目录 modules/component-theme-<id>/（仅 front/plugin.js + front/view.js，无 index.html、无后端插件）；",
    "step2": "在 web/front.json 追加条目：{ \"target\": \"modules/component-theme-<id>\", \"enabled\": true, \"kind\": \"component\", \"pages\": [ …要生效的页面 id… ] }；",
    "step3": "apply 内 ctx.ui.registerComponent(\"theme:<id>\", factory)——factory 渲染本页可见的主题预览卡；",
    "step4": "自带激活逻辑：注入自己的样式表并给 <html> 挂主题类（参考 modules/component-theme-neon/）；读写主题选择用 localStorage[\"ystage:theme\"] 与 GET/PUT /api/theme/active；",
    "step5": "刷新本页即可看到新主题卡；比赛演出（battle-mode）期间请隐藏全部装饰只留背景图。"
  },
  "backHome": "回到主页面",
  "status": {
    "switching": "正在切换…",
    "unreachableLocalOnly": "服务端不可达（{error}），已仅在本机生效，即将刷新…",
    "serverRejected": "服务端拒绝了该主题（HTTP {status}），未做更改",
    "switchSuccess": "已切换为「{theme}」，即将刷新…",
    "unreachableLocalMemory": "主题服务不可达：当前按本机记忆显示",
    "renderFailed": "主题「{id}」预览渲染失败：{error}",
    "noThemePlugins": "未发现任何主题插件（主题已按记忆回退显示）",
    "initFailed": "页面初始化失败：{error}"
  },
  "buttons": {
    "currentSystemTheme": "当前系统主题",
    "setAsSystemTheme": "设为系统主题"
  },
  "defaultCard": {
    "name": "默认主题",
    "tag": "CLASSIC",
    "desc": "各页面自带的传统深色皮肤：照片背景 + 灰阶面板 + 语义色按钮。",
    "note": "适合稳定优先的场合；关闭全部装饰动画与氛围层。",
    "activeBadge": "当前主题"
  }
};

