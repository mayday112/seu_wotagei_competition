/**
 * modules/music-import/front/locales/en-US.mjs
 */
export default {
  "pageTitle": "Y.Stage 4 - Music Import",
  "title": "Batch Music Import Management",
  "subtitle": "Import music files for different groups and update configuration",
  "groups": {
    "1yearplus": "Over 1 Year Chapter 1",
    "1yearplus_ex": "Over 1 Year Chapter 2",
    "1yearminus": "Under 1 Year Group",
    "games_musics": "Stick Game Music"
  },
  "dropPrompt": "Drag & drop music files here",
  "orText": "or",
  "selectFiles": "Select Files",
  "formatHint": "Supported formats: MP3, WAV, FLAC, OGG (Max 50MB)",
  "previewTitle": "Music Files Preview ({count})",
  "targetGroupLabel": "Upload Target Group",
  "targetGroupSelectAria": "Select upload target group",
  "targetGroupHint": "Please confirm if the upload target group is correct",
  "startUpload": "Start Upload",
  "clearList": "Clear List",
  "currentGroupTitle": "Currently Selected Group",
  "folderLabel": "Folder: {folder}",
  "configLabel": "Config file: {file}",
  "countLabel": "Existing music count: {count}",
  "musicListTitle": "Music File List",
  "refreshAria": "Refresh file list",
  "table": {
    "index": "#",
    "fileName": "File Name",
    "actions": "Actions",
    "loading": "Loading music files...",
    "empty": "No music files in current group",
    "remove": "Remove file",
    "moveToRecycle": "Move to Recycle"
  },
  "nav": {
    "settings": "Back to Settings",
    "home": "Back to Home"
  },
  "status": {
    "uploaderNotReady": "Uploader not ready: {error}. Please contact administrator to install multer.",
    "cannotConnect": "Cannot connect to server, upload may be unavailable",
    "loadCountFailed": "Failed to load music count: {error}",
    "loadFilesFailed": "Failed to load music file list: {error}",
    "invalidFiles": "The following {count} files are not valid audio files: {files}",
    "cannotMoveDuringUpload": "Cannot move files while uploading",
    "confirmMoveToRecycle": "Are you sure you want to move file \"{filename}\" to recycle folder?",
    "movingFile": "Moving file...",
    "moveSuccess": "File \"{filename}\" moved to recycle folder",
    "moveFailed": "Failed to move file: {error}",
    "startUploadMsg": "Starting upload to {group}...",
    "confirmOverwrite": "The following files already exist. Overwrite them?\n{files}",
    "uploadCancelled": "Upload cancelled",
    "uploadSuccess": "Successfully uploaded {count} files",
    "uploadFailed": "Upload failed: {error}",
    "missingGroupParam": "Cannot recognize target group, please reselect and try again",
    "serverError500": "Server error: uploader component might not be installed. Contact administrator to install multer."
  }
};

