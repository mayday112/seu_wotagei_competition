/**
 * modules/music-import/front/locales/id-ID.mjs
 */
export default {
  "pageTitle": "Y.Stage 4 - Impor Musik",
  "title": "Manajemen Impor Musik Massal",
  "subtitle": "Impor file musik untuk berbagai grup dan perbarui konfigurasi",
  "groups": {
    "1yearplus": "Grup >1 Tahun Bab 1",
    "1yearplus_ex": "Grup >1 Tahun Bab 2",
    "1yearminus": "Grup <1 Tahun",
    "games_musics": "Musik Game Tongkat"
  },
  "dropPrompt": "Tarik & lepas file musik ke sini",
  "orText": "atau",
  "selectFiles": "Pilih File",
  "formatHint": "Format didukung: MP3, WAV, FLAC, OGG (Maks 50MB)",
  "previewTitle": "Pratinjau File Musik ({count})",
  "targetGroupLabel": "Grup Target Unggahan",
  "targetGroupSelectAria": "Pilih grup target unggahan",
  "targetGroupHint": "Pastikan grup target unggahan sudah benar",
  "startUpload": "Mulai Unggah",
  "clearList": "Kosongkan Daftar",
  "currentGroupTitle": "Grup yang Dipilih Saat Ini",
  "folderLabel": "Folder: {folder}",
  "configLabel": "File konfigurasi: {file}",
  "countLabel": "Jumlah musik ada: {count}",
  "musicListTitle": "Daftar File Musik",
  "refreshAria": "Segarkan daftar file",
  "table": {
    "index": "#",
    "fileName": "Nama File",
    "actions": "Operasi",
    "loading": "Memuat daftar file musik...",
    "empty": "Tidak ada file musik di grup saat ini",
    "remove": "Hapus file",
    "moveToRecycle": "Pindah ke Tempat Sampah"
  },
  "nav": {
    "settings": "Kembali ke Pengaturan",
    "home": "Kembali ke Beranda"
  },
  "status": {
    "uploaderNotReady": "Komponen pengunggah belum siap: {error}. Hubungi admin untuk memasang multer.",
    "cannotConnect": "Gagal terhubung ke server, fitur unggah mungkin tidak tersedia",
    "loadCountFailed": "Gagal memuat jumlah musik: {error}",
    "loadFilesFailed": "Gagal memuat daftar file musik: {error}",
    "invalidFiles": "{count} file berikut bukan file audio yang valid: {files}",
    "cannotMoveDuringUpload": "Tidak dapat memindahkan file saat mengunggah",
    "confirmMoveToRecycle": "Yakin ingin memindahkan file \"{filename}\" ke tempat sampah?",
    "movingFile": "Sedang memindahkan file...",
    "moveSuccess": "File \"{filename}\" dipindahkan ke tempat sampah",
    "moveFailed": "Gagal memindahkan file: {error}",
    "startUploadMsg": "Mulai mengunggah file ke {group}...",
    "confirmOverwrite": "File berikut sudah ada. Timpa?\n{files}",
    "uploadCancelled": "Unggahan dibatalkan",
    "uploadSuccess": "Berhasil mengunggah {count} file",
    "uploadFailed": "Gagal mengunggah: {error}",
    "missingGroupParam": "Grup target tidak dikenali, silakan pilih ulang",
    "serverError500": "Kesalahan server: komponen pengunggah mungkin belum terpasang. Hubungi admin untuk memasang multer."
  }
};

