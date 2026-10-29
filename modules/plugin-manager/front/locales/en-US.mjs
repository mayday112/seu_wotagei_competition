/**
 * modules/plugin-manager/front/locales/en-US.mjs
 */
export default {
  "pageTitle": "Y.Stage 4 - Plugin Manager",
  "title": "Plugin Manager",
  "subtitle": "Plugin assembly management and hot-swapping",
  "backHome": "Back to Home",
  "refreshSnapshot": "Refresh Snapshot",
  "placeholder": "Assembling plugin manager interface…",
  "loadingSnapshot": "Loading assembly snapshot…",
  "snapshotLoadFailed": "Failed to read snapshot: {error} (plugin service not ready, restart server)",
  "tabs": {
    "front": "Frontend Plugins",
    "backend": "Backend Plugins",
    "theme": "Theme Plugins"
  },
  "search": {
    "aria": "Search plugin name or ID",
    "placeholder": "Search plugin name or ID..."
  },
  "filters": {
    "all": "All",
    "mounted": "Mounted",
    "disabled": "Disabled",
    "unmounted": "Unmounted"
  },
  "stats": {
    "mounted": "Mounted",
    "disabled": "Disabled",
    "unmounted": "Unmounted"
  },
  "badges": {
    "backendLegacy": "Backend·Legacy",
    "backendPlugin": "Backend·Plugin",
    "frontPage": "Frontend·Page",
    "frontComponent": "Frontend·Component",
    "currentTheme": "Current Theme",
    "themeCore": "Theme Core",
    "componentMember": "Component Member"
  },
  "stateLabels": {
    "mounted": "Mounted",
    "enabled": "Enabled",
    "disabled": "Disabled",
    "unmounted": "Unmounted"
  },
  "actions": {
    "enable": "Enable",
    "disable": "Disable",
    "reload": "Reload",
    "config": "Config",
    "collapseConfig": "Collapse",
    "saveConfig": "Save Config",
    "setAsSystemTheme": "Set as System Theme",
    "enableWholeGroup": "Enable Group",
    "disableWholeGroup": "Disable Group"
  },
  "hints": {
    "takeEffectAfterRefresh": "Takes effect after refresh",
    "ctrlK": "Focus search · Changes apply immediately",
    "noMatchingPlugins": "No matching plugins",
    "noMatchingPages": "No matching page plugins",
    "noMatchingComponents": "No matching component plugins",
    "noMatchingThemes": "No matching theme plugins",
    "tryClearingSearch": "Try clearing search or switching to 'All' filter.",
    "noVisibleMembers": "No visible group members under current search or filter.",
    "defaultThemeVirtual": "Virtual Group · No plugin entries",
    "themeGroupCount": "Enabled {enabled} / Total {total}",
    "defaultThemeDesc": "No plugins in this group: default skin is built-in to pages; disabling all theme plugins reverts to default look.",
    "pagePluginDesc": "key = module id, kernel renders automatically by URL",
    "compPluginDesc": "Registered in component registry, used by page on demand",
    "currentSystemTheme": "Current system theme: ",
    "switchAndPreview": "Switch & preview in",
    "themeManagerLink": "Theme Manager",
    "createThemeHint": "Custom Theme: Create modules/component-theme-<id>/ and register in web/front.json. It will appear here and in theme manager.",
    "footerBar": "Total {modules} modules · Frontend {front} entries (Pages {pages} · Components {components} · Themes {themes} groups) · Backend {backend} plugins · Hot-swap without restart"
  },
  "status": {
    "operationSuccess": "Operation successful",
    "operationFailed": "Operation failed",
    "diskWriteFailed": "; Warning: Failed to write manifest to disk (in-memory changes effective)",
    "disabledSuccess": "Disabled",
    "enabledSuccess": "Enabled",
    "reloadedSuccess": "Hot reloaded",
    "frontDisabled": "Frontend plugin disabled",
    "frontEnabled": "Frontend plugin enabled",
    "setThemeSuccess": "Set system theme to \"{name}\", refresh to take effect",
    "themeAlreadyState": "Plugins in theme group \"{label}\" are already {state}",
    "allEnabled": "all enabled",
    "allDisabled": "all disabled",
    "itemToggled": "\"{id}\" {state} ({current}/{total})",
    "themeGroupToggled": "Theme group \"{label}\" {state} ({count} plugins, refresh to take effect)",
    "themeGroupFailed": "Theme group \"{label}\" had {count} plugins fail to {state}: {list}",
    "jsonParseError": "Config JSON parse failed: {error}",
    "configSaved": "Config saved and hot reloaded"
  }
};

