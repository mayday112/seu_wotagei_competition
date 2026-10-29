/**
 * games 前端插件（P4 迁移，原 app.js 逻辑整体迁入）
 *
 * 游戏中心（导航页）：游戏卡片由 /api/modules 清单动态渲染，
 * nav 含 "games" 的模块按 order 展示。行为与原版保持一致。
 *
 * 形态适配说明（逻辑逐行保留）：
 *   - 原 DOMContentLoaded 包裹已去除（kernel 装配完成后调用 component，DOM 早已就绪）
 *   - 静态骨架监听（#home-btn）按 P3 定稿约定经 AbortController signal 登记
 *   - cleanup：abort 解绑静态监听 + 清空动态渲染容器 #games-grid
 *   - fetch("/api/modules")、"/m/home" 均为 origin 相对路径（AGENTS §5-2）
 */

import { icon, ICON_NAMES } from "/web/icons.mjs";
import { registerLocales } from "./locales/index.mjs";

export default {
  name: "games", // key 必须 = 模块 id，kernel 装配完按它 render
  inject: ["ui", "api", "i18n"],
  apply(ctx) {
    registerLocales(ctx);
    ctx.ui.register({
      key: "games",
      component(el, meta, ctx2) {
        const grid = document.getElementById("games-grid");
        const homeButton = document.getElementById("home-btn");

        // cleanup 契约：静态骨架监听经 signal 登记，重渲染时 abort 统一解绑
        const bindAbort = new AbortController();
        const { signal } = bindAbort;

        // 返回主页
        if (homeButton) {
          homeButton.addEventListener("click", () => {
            window.location.href = "/m/home";
          }, { signal });
        }

        // 渲染游戏卡片
        fetch("/api/modules")
          .then((r) => r.json())
          .then((modules) => {
            if (!grid) return;
            const list = modules
              .filter((m) => (m.nav || []).includes("games") && m.id !== "games")
              .sort((a, b) => (a.order || 0) - (b.order || 0));

            if (list.length === 0) {
              const emptyText = ctx2 && ctx2.i18n ? ctx2.i18n.t("games.noGames", "暂无小游戏，请在 modules/modules.json 中注册") : "暂无小游戏，请在 modules/modules.json 中注册";
              grid.innerHTML = `<p>${emptyText}</p>`;
              return;
            }

            list.forEach((m) => {
              const card = document.createElement("button");
              card.type = "button";
              card.className = "game-card";
              card.dataset.game = m.id;
              const translatedDesc = ctx2 && ctx2.i18n ? ctx2.i18n.t(`modules.${m.id}.desc`, m.description || "") : (m.description || "");
              const translatedName = ctx2 && ctx2.i18n ? ctx2.i18n.t(`modules.${m.id}.name`, m.name) : m.name;
              card.title = translatedDesc;
              card.addEventListener("click", () => {
                window.location.href = m.route;
              });
              card.addEventListener("mouseover", () => {
                card.style.transform = "translateY(-8px)";
              });
              card.addEventListener("mouseout", () => {
                card.style.transform = "translateY(-5px)";
              });

              // 模块名/描述虽来自仓库清单（modules.json），仍按外部输入对待：
              // 一律 DOM 构建 + textContent（与 home/select 渲染同纪律），icon 为受控 SVG 除外
              const iconWrap = document.createElement("div");
              iconWrap.className = "game-icon";
              iconWrap.innerHTML = icon(
                ICON_NAMES.includes(m.icon) ? m.icon : "device-gamepad-2",
                { size: 48 }
              );
              const nameEl = document.createElement("h2");
              nameEl.textContent = translatedName;
              const descEl = document.createElement("p");
              descEl.textContent = translatedDesc;
              card.append(iconWrap, nameEl, descEl);
              grid.appendChild(card);
            });
          })
          .catch(() => {
            if (!grid) return;
            const errText = ctx2 && ctx2.i18n ? ctx2.i18n.t("games.serverDisconnected", "无法连接服务器，请先启动 node server.js") : "无法连接服务器，请先启动 node server.js";
            grid.innerHTML = `<p>${errText}</p>`;
          });

        // 页面淡入效果
        document.body.classList.add("fade-in");

        // 重渲染/卸载时解绑静态监听并清空动态内容（卡片节点及其监听器一并释放）
        return () => {
          bindAbort.abort();
          if (grid) grid.innerHTML = "";
        };
      },
    });
  },
};
