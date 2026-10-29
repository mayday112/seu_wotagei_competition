/**
 * modules/game-composer/front/locales/zh-CN.mjs
 */
export default {
  "pageTitle": "可视化编排",
  "title": "可视化编排",
  "subtitle": "从左侧组件面板添加积木，编排成新的游戏模式，保存后可在组合舞台运行",
  "dirty": "未保存",
  "backSelect": "返回功能选择",
  "toolbar": {
    "aria": "布局操作",
    "newLayout": "新建布局",
    "savedLayouts": "已保存布局",
    "newLayoutOption": "—— 新建（未保存） ——",
    "selectAria": "选择要加载的已保存布局",
    "saving": "保存中…",
    "save": "保存",
    "delete": "删除",
    "deleteTitle": "删除当前布局",
    "deleteDisabledTitle": "先保存才有可删除的布局",
    "preview": "预览",
    "exitPreview": "退出预览",
    "openInStage": "在组合舞台打开",
    "stageTitle": "在组合舞台运行当前布局",
    "stageDisabledTitle": "请先保存布局"
  },
  "retry": "重试",
  "palette": {
    "title": "组件面板",
    "empty": "暂无已注册组件（可能均被禁用）",
    "advanced": "高级",
    "addAria": "添加组件 {label}",
    "addTitle": "添加 {label}",
    "components": {
      "music-source": {
        "label": "曲库数据源",
        "desc": "经 music-library API 拉取曲库；把「曲库列表（数据）」连到 抽签机/音乐播放 的「候选池」即可免手写 items",
        "outs": { "getList": "曲库列表（数据）" },
        "ins": {}
      },
      "player-list": {
        "label": "选手名单",
        "desc": "读取选手 JSON 并渲染可选名单网格",
        "outs": { "getSelected": "已选名单（数据）" },
        "ins": {}
      },
      "score-board": {
        "label": "计分板",
        "desc": "多队加减分与清零，状态仅内存",
        "outs": { "getScores": "各队比分（数据）" },
        "ins": {}
      },
      "countdown": {
        "label": "倒计时",
        "desc": "mm:ss 倒计时，可调分/开始暂停/重置",
        "outs": {},
        "ins": {}
      },
      "music-player": {
        "label": "音乐播放",
        "desc": "无 props 可用：无 trigger/startTrigger 时自建「抽取音乐/播放」按钮；候选池可经数据连线（选手名单→候选池）或 props.items 提供；抽取定格走 onDrawn 事件",
        "outs": { "onDrawn": "抽取定格（事件）" },
        "ins": {
          "items": "候选池（数据）",
          "play": "播放曲目（动作）"
        }
      },
      "draw-machine": {
        "label": "抽签机",
        "desc": "无 props 可用：无 trigger 时自建抽取按钮；候选池可经数据连线（选手名单→候选池）或 props.items 提供",
        "outs": {
          "onResult": "抽签定格（事件）",
          "getResult": "当前结果（数据）"
        },
        "ins": { "items": "候选池（数据）" }
      },
      "toast": {
        "label": "轻提示",
        "desc": "页面服务类组件，一般不排布",
        "outs": {},
        "ins": {}
      },
      "confirm-dialog": {
        "label": "确认对话框",
        "desc": "页面服务类组件，一般不排布",
        "outs": {},
        "ins": {}
      }
    }
  },
  "canvas": {
    "title": "布局内容",
    "nameLabel": "布局名称",
    "namePlaceholder": "例如：双人对战练习台",
    "nameAria": "布局名称（1 到 40 字符）",
    "unnamed": "未命名",
    "moveUpAria": "上移 {label}",
    "moveUpTitle": "上移",
    "moveDownAria": "下移 {label}",
    "moveDownTitle": "下移",
    "deleteAria": "删除 {label}",
    "deleteTitle": "删除",
    "emptyTitle": "画布为空",
    "emptyHint": "从左侧组件面板点「添加」按钮，把第一个组件排进布局"
  },
  "props": {
    "title": "属性",
    "unselectedTitle": "未选中组件",
    "unselectedHint": "点击画布中的卡片，在此编辑标题与 props",
    "cardTitleLabel": "标题（可选）",
    "cardTitlePlaceholder": "卡片头标题，如：上半场",
    "cardTitleAria": "选中组件的标题",
    "propsLabel": "props（JSON 对象）",
    "propsAria": "选中组件的 props JSON",
    "applyProps": "应用 props",
    "applyHint": "失焦或点「应用」时解析 JSON；解析失败会提示错误并保持旧值"
  },
  "wiring": {
    "title": "连线",
    "event": "事件",
    "data": "数据",
    "deleteAria": "删除连线：{from} 到 {to}",
    "deleteTitle": "删除连线",
    "empty": "暂无连线：用下方表单把一个实例的输出口接到另一实例的输入口",
    "fromLabel": "来源实例",
    "fromAria": "连线来源实例",
    "fromOption": "—— 实例 ——",
    "outLabel": "输出口（on 开头 = 事件）",
    "outAria": "连线输出口",
    "outOption": "—— 输出口 ——",
    "toLabel": "目标实例",
    "toAria": "连线目标实例",
    "toOption": "—— 实例 ——",
    "inLabel": "输入口",
    "inAria": "连线输入口",
    "inOption": "—— 输入口 ——",
    "addConnection": "添加连线",
    "addDisabledTitle": "四项都选择后才能添加",
    "hint": "输出口 on 开头 = 事件连线（触发目标动作）；否则 = 数据连线（目标惰性取来源数据）",
    "noStaged": "画布暂无可连线的实例（缺 id 的实例不参与装配与连线）",
    "itemDeleted": "实例已删除",
    "rawOut": "原始输出口",
    "rawIn": "原始输入口"
  },
  "preview": {
    "note": "预览模式：组件真实挂载，状态仅内存、不落盘",
    "mounting": "正在挂载组件…",
    "emptyHint": "画布为空：退出预览后从左侧组件面板添加组件",
    "slotAria": "组件插槽：{label}",
    "mountFailed": "组件挂载失败：{error}",
    "connSummary": "布局连线 {count} 条",
    "connWithDangling": "布局连线 {count} 条（{dangling} 条悬挂已跳过）"
  },
  "footer": "布局存于本站数据库；「在组合舞台打开」以当前布局 id 运行（/m/custom-stage/）",
  "status": {
    "loadFailed": "布局列表加载失败：{error}",
    "networkError": "网络错误",
    "unsavedConfirm": "当前布局有未保存的修改，继续将丢弃这些修改，是否继续？",
    "notFound": "未找到该布局（列表可能已变化）",
    "nameEmpty": "布局名称不能为空",
    "deletedElsewhere": "该布局已被删除（可能在其他页面操作），请点「新建布局」另存",
    "saveFailedHttp": "保存失败（HTTP {status}）",
    "saveConflict": "已保存，但保存期间有新的修改未入盘，请再次保存",
    "saved": "已保存",
    "saveNetworkError": "网络错误，保存失败：{error}",
    "deleteNotFound": "布局不存在（可能已被删除）",
    "deleteFailedHttp": "删除失败（HTTP {status}）",
    "deleted": "已删除",
    "deleteNetworkError": "网络错误，删除失败：{error}",
    "deleteConfirm": "删除布局「{name}」？此操作不可恢复。",
    "openStageNeedSave": "请先保存布局，才能在组合舞台打开",
    "jsonParseError": "JSON 解析失败：{error}",
    "propsMustBeObject": "props 必须为 JSON 对象（{}），不能是数组或原始值",
    "eventSourceOccupied": "该事件源已被另一条连线占用（同 来源实例 + 输出口），请先删除原连线",
    "dataTargetOccupied": "该数据目标已被另一条连线占用（同 目标实例 + 输入口），请先删除原连线",
    "initFailed": "编辑器初始化失败，请刷新重试"
  }
};

