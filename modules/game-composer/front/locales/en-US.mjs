/**
 * modules/game-composer/front/locales/en-US.mjs
 */
export default {
  "pageTitle": "Visual Composer",
  "title": "Visual Composer",
  "subtitle": "Add building blocks from palette, compose new game modes, and run in Custom Stage",
  "dirty": "Unsaved",
  "backSelect": "Back to Selection",
  "toolbar": {
    "aria": "Layout Actions",
    "newLayout": "New Layout",
    "savedLayouts": "Saved Layouts",
    "newLayoutOption": "—— New (Unsaved) ——",
    "selectAria": "Select saved layout to load",
    "saving": "Saving…",
    "save": "Save",
    "delete": "Delete",
    "deleteTitle": "Delete current layout",
    "deleteDisabledTitle": "Save first to delete layout",
    "preview": "Preview",
    "exitPreview": "Exit Preview",
    "openInStage": "Open in Stage",
    "stageTitle": "Run current layout in Custom Stage",
    "stageDisabledTitle": "Please save layout first"
  },
  "retry": "Retry",
  "palette": {
    "title": "Component Palette",
    "empty": "No registered components available (may be disabled)",
    "advanced": "Advanced",
    "addAria": "Add component {label}",
    "addTitle": "Add {label}",
    "components": {
      "music-source": {
        "label": "Music Source",
        "desc": "Fetch music libraries via music-library API; wire 'Music List (data)' to Draw Machine or Player",
        "outs": { "getList": "Music List (Data)" },
        "ins": {}
      },
      "player-list": {
        "label": "Player List",
        "desc": "Read player JSON and render selectable player grid",
        "outs": { "getSelected": "Selected List (Data)" },
        "ins": {}
      },
      "score-board": {
        "label": "Score Board",
        "desc": "Multi-team scoring and reset, memory-only state",
        "outs": { "getScores": "Team Scores (Data)" },
        "ins": {}
      },
      "countdown": {
        "label": "Countdown",
        "desc": "mm:ss countdown timer with minute adjustments and reset",
        "outs": {},
        "ins": {}
      },
      "music-player": {
        "label": "Music Player",
        "desc": "Music playback with auto draw button when no trigger specified; candidate pool via items prop or wiring",
        "outs": { "onDrawn": "Drawn Freeze (Event)" },
        "ins": {
          "items": "Candidate Pool (Data)",
          "play": "Play Track (Action)"
        }
      },
      "draw-machine": {
        "label": "Draw Machine",
        "desc": "Candidate draw machine; wire from candidate pool or provide props.items",
        "outs": {
          "onResult": "Result Freeze (Event)",
          "getResult": "Current Result (Data)"
        },
        "ins": { "items": "Candidate Pool (Data)" }
      },
      "toast": {
        "label": "Toast",
        "desc": "Page service component, normally not placed on stage",
        "outs": {},
        "ins": {}
      },
      "confirm-dialog": {
        "label": "Confirm Dialog",
        "desc": "Page service component, normally not placed on stage",
        "outs": {},
        "ins": {}
      }
    }
  },
  "canvas": {
    "title": "Layout Canvas",
    "nameLabel": "Layout Name",
    "namePlaceholder": "e.g., 2-Player Battle Practice Stage",
    "nameAria": "Layout Name (1 to 40 characters)",
    "unnamed": "Unnamed",
    "moveUpAria": "Move Up {label}",
    "moveUpTitle": "Move Up",
    "moveDownAria": "Move Down {label}",
    "moveDownTitle": "Move Down",
    "deleteAria": "Delete {label}",
    "deleteTitle": "Delete",
    "emptyTitle": "Canvas is empty",
    "emptyHint": "Click 'Add' button on the left palette to add components"
  },
  "props": {
    "title": "Properties",
    "unselectedTitle": "No Component Selected",
    "unselectedHint": "Click a card in the canvas to edit its title and props",
    "cardTitleLabel": "Title (Optional)",
    "cardTitlePlaceholder": "Card header title, e.g., First Half",
    "cardTitleAria": "Selected component title",
    "propsLabel": "props (JSON Object)",
    "propsAria": "Selected component props JSON",
    "applyProps": "Apply props",
    "applyHint": "JSON parsed on blur or 'Apply'; on error, old value is kept"
  },
  "wiring": {
    "title": "Wiring",
    "event": "Event",
    "data": "Data",
    "deleteAria": "Delete wire: {from} to {to}",
    "deleteTitle": "Delete wire",
    "empty": "No wires yet: use the form below to connect an output port to an input port",
    "fromLabel": "Source Instance",
    "fromAria": "Wiring source instance",
    "fromOption": "—— Instance ——",
    "outLabel": "Output Port (starts with 'on' = event)",
    "outAria": "Wiring output port",
    "outOption": "—— Output Port ——",
    "toLabel": "Target Instance",
    "toAria": "Wiring target instance",
    "toOption": "—— Instance ——",
    "inLabel": "Input Port",
    "inAria": "Wiring input port",
    "inOption": "—— Input Port ——",
    "addConnection": "Add Wire",
    "addDisabledTitle": "Select all four options to add wire",
    "hint": "Output port with 'on' = event wire (triggers action); otherwise = data wire",
    "noStaged": "No wireable instances on canvas (instances without ID are skipped)",
    "itemDeleted": "Instance deleted",
    "rawOut": "Raw Output",
    "rawIn": "Raw Input"
  },
  "preview": {
    "note": "Preview Mode: components are mounted live in-memory without saving to database",
    "mounting": "Mounting components…",
    "emptyHint": "Canvas is empty: exit preview and add components from palette",
    "slotAria": "Component slot: {label}",
    "mountFailed": "Component mount failed: {error}",
    "connSummary": "Layout wires: {count}",
    "connWithDangling": "Layout wires: {count} ({dangling} dangling skipped)"
  },
  "footer": "Layouts stored in local SQLite database; 'Open in Stage' runs layout (/m/custom-stage/)",
  "status": {
    "loadFailed": "Failed to load layouts: {error}",
    "networkError": "Network Error",
    "unsavedConfirm": "You have unsaved changes. Discard changes and continue?",
    "notFound": "Layout not found (list might have changed)",
    "nameEmpty": "Layout name cannot be empty",
    "deletedElsewhere": "Layout was deleted elsewhere, click 'New Layout' to save as new",
    "saveFailedHttp": "Save failed (HTTP {status})",
    "saveConflict": "Saved, but there were edits during save. Please save again.",
    "saved": "Saved",
    "saveNetworkError": "Network error, save failed: {error}",
    "deleteNotFound": "Layout does not exist (may already be deleted)",
    "deleteFailedHttp": "Delete failed (HTTP {status})",
    "deleted": "Deleted",
    "deleteNetworkError": "Network error, delete failed: {error}",
    "deleteConfirm": "Delete layout \"{name}\"? This cannot be undone.",
    "openStageNeedSave": "Please save layout before opening in Custom Stage",
    "jsonParseError": "JSON parse error: {error}",
    "propsMustBeObject": "props must be a JSON object ({}), not an array or primitive",
    "eventSourceOccupied": "Event source is already occupied by another wire (same source + output). Remove original wire first.",
    "dataTargetOccupied": "Data target is already occupied by another wire (same target + input). Remove original wire first.",
    "initFailed": "Composer initialization failed, please refresh"
  }
};

