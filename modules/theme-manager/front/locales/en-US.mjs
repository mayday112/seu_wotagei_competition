/**
 * modules/theme-manager/front/locales/en-US.mjs
 */
export default {
  "pageTitle": "Theme Management",
  "title": "Theme Management",
  "subtitle": "SYSTEM THEME · System-level setting synced across all screens",
  "guide": {
    "summary": "How to create a custom theme plugin?",
    "step1": "Create directory modules/component-theme-<id>/ (front/plugin.js + front/view.js only, no index.html or backend plugin);",
    "step2": "Add entry to web/front.json: { \"target\": \"modules/component-theme-<id>\", \"enabled\": true, \"kind\": \"component\", \"pages\": [ …target page ids… ] };",
    "step3": "In apply: ctx.ui.registerComponent(\"theme:<id>\", factory) — factory renders preview card;",
    "step4": "Self-activation: inject stylesheet and apply theme class to <html> (see modules/component-theme-neon/); read/write theme via localStorage[\"ystage:theme\"] and GET/PUT /api/theme/active;",
    "step5": "Refresh to see new theme card; please hide decorative layers during battle-mode."
  },
  "backHome": "Back to Home",
  "status": {
    "switching": "Switching…",
    "unreachableLocalOnly": "Server unreachable ({error}), applied locally only, refreshing…",
    "serverRejected": "Server rejected the theme (HTTP {status}), no changes made",
    "switchSuccess": "Switched to \"{theme}\", refreshing…",
    "unreachableLocalMemory": "Theme service unreachable: showing from local storage",
    "renderFailed": "Theme \"{id}\" preview render failed: {error}",
    "noThemePlugins": "No theme plugins found (showing remembered theme)",
    "initFailed": "Page initialization failed: {error}"
  },
  "buttons": {
    "currentSystemTheme": "Current System Theme",
    "setAsSystemTheme": "Set as System Theme"
  },
  "defaultCard": {
    "name": "Default Theme",
    "tag": "CLASSIC",
    "desc": "Traditional dark skin: photo background + grayscale panels + semantic buttons.",
    "note": "Best for stability-first scenarios; closes all decorative animations.",
    "activeBadge": "Current Theme"
  }
};

