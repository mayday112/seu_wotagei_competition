/**
 * web/components/lang-switcher.mjs —— 语言切换器 UI 组件
 *
 * 全局挂载至页面右上角，支持点击下拉选择语言并触发刷新与存储。
 */
import { icon } from "../icons.mjs";

const LANGUAGES = [
  { code: "en-US", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "id-ID", label: "Indonesia", short: "ID", flag: "🇮🇩" },
  { code: "zh-CN", label: "简体中文", short: "中文", flag: "🇨🇳" },
];

const SWITCHER_CSS = `
.ystage-lang-switcher {
  position: fixed;
  top: 14px;
  right: 16px;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  user-select: none;
}
body.battle-mode .ystage-lang-switcher {
  display: none !important;
}
.ystage-lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(18, 22, 32, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  color: #e2e8f0;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
}
.ystage-lang-btn:hover {
  background: rgba(28, 35, 52, 0.9);
  border-color: rgba(99, 179, 237, 0.4);
  color: #ffffff;
  box-shadow: 0 4px 18px rgba(66, 153, 225, 0.25);
  transform: translateY(-1px);
}
.ystage-lang-btn:active {
  transform: translateY(0);
}
.ystage-lang-btn .ystage-lang-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #90cdf4;
}
.ystage-lang-btn .ystage-lang-label {
  letter-spacing: 0.3px;
}
.ystage-lang-btn .ystage-lang-arrow {
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease;
  color: #a0aec0;
}
.ystage-lang-switcher.open .ystage-lang-arrow {
  transform: rotate(180deg);
}
.ystage-lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background: rgba(18, 24, 38, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: none;
  flex-direction: column;
  gap: 3px;
  animation: ystageFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}
.ystage-lang-switcher.open .ystage-lang-dropdown {
  display: flex;
}
@keyframes ystageFadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.ystage-lang-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: #cbd5e1;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
  width: 100%;
}
.ystage-lang-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}
.ystage-lang-item.active {
  background: rgba(66, 153, 225, 0.18);
  color: #63b3ed;
  font-weight: 600;
}
.ystage-lang-item-content {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ystage-lang-item .ystage-lang-check {
  display: inline-flex;
  align-items: center;
  opacity: 0;
  color: #63b3ed;
}
.ystage-lang-item.active .ystage-lang-check {
  opacity: 1;
}
`;

/**
 * 注入组件样式
 */
function ensureStyle() {
  const STYLE_ID = "ystage-lang-switcher-style";
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = SWITCHER_CSS;
  document.head.appendChild(style);
}

/**
 * 挂载全局语言切换器
 * @param {object} ctx Cordis context (需含 ctx.i18n)
 * @returns {() => void} cleanup 函数
 */
export function mountLanguageSwitcher(ctx) {
  if (typeof document === "undefined") return () => {};

  const EXISTING_ID = "ystage-lang-switcher";
  if (document.getElementById(EXISTING_ID)) {
    return () => {};
  }

  ensureStyle();

  const currentCode = (ctx && ctx.i18n && typeof ctx.i18n.getLocale === "function")
    ? ctx.i18n.getLocale()
    : "en-US";

  const currentLang = LANGUAGES.find((l) => l.code === currentCode) || LANGUAGES[0];

  const container = document.createElement("div");
  container.id = EXISTING_ID;
  container.className = "ystage-lang-switcher";

  // 主按钮
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "ystage-lang-btn";
  btn.setAttribute("aria-label", "Language Switcher");
  btn.innerHTML = `
    <span class="ystage-lang-icon">${icon("world", { size: 16 })}</span>
    <span class="ystage-lang-label">${currentLang.short}</span>
    <span class="ystage-lang-arrow">${icon("chevron-down", { size: 14 })}</span>
  `;

  // 下拉列表
  const dropdown = document.createElement("div");
  dropdown.className = "ystage-lang-dropdown";

  LANGUAGES.forEach((item) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `ystage-lang-item${item.code === currentCode ? " active" : ""}`;
    option.setAttribute("data-lang", item.code);
    option.innerHTML = `
      <div class="ystage-lang-item-content">
        <span>${item.flag}</span>
        <span>${item.label}</span>
      </div>
      <span class="ystage-lang-check">${icon("check", { size: 14 })}</span>
    `;

    option.addEventListener("click", (e) => {
      e.stopPropagation();
      container.classList.remove("open");
      if (item.code !== currentCode) {
        if (ctx && ctx.i18n && typeof ctx.i18n.setLocale === "function") {
          ctx.i18n.setLocale(item.code);
        }
        // MPA 整体刷新保证所有模块的动态 JS 渲染与 DOM 保持一致
        window.location.reload();
      }
    });

    dropdown.appendChild(option);
  });

  // 展开/收起下拉
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    container.classList.toggle("open");
  });

  // 点击外部收起
  const onDocClick = (e) => {
    if (!container.contains(e.target)) {
      container.classList.remove("open");
    }
  };
  document.addEventListener("click", onDocClick);

  container.appendChild(btn);
  container.appendChild(dropdown);
  document.body.appendChild(container);

  return () => {
    document.removeEventListener("click", onDocClick);
    container.remove();
  };
}
