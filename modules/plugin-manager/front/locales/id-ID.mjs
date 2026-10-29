/**
 * modules/plugin-manager/front/locales/id-ID.mjs
 */
export default {
  "pageTitle": "Y.Stage 4 - Manajemen Plugin",
  "title": "Manajemen Plugin",
  "subtitle": "Manajemen perakitan plugin dan penggantian panas",
  "backHome": "Kembali ke Beranda",
  "refreshSnapshot": "Segarkan Snapshot",
  "placeholder": "Memasang antarmuka manajer plugin…",
  "loadingSnapshot": "Memuat snapshot perakitan…",
  "snapshotLoadFailed": "Gagal membaca snapshot: {error} (layanan plugin belum siap, mulai ulang server)",
  "tabs": {
    "front": "Plugin Frontend",
    "backend": "Plugin Backend",
    "theme": "Plugin Tema"
  },
  "search": {
    "aria": "Cari nama atau ID plugin",
    "placeholder": "Cari nama atau ID plugin..."
  },
  "filters": {
    "all": "Semua",
    "mounted": "Terpasang",
    "disabled": "Nonaktif",
    "unmounted": "Lepas"
  },
  "stats": {
    "mounted": "Terpasang",
    "disabled": "Nonaktif",
    "unmounted": "Lepas"
  },
  "badges": {
    "backendLegacy": "Backend·Legacy",
    "backendPlugin": "Backend·Plugin",
    "frontPage": "Frontend·Halaman",
    "frontComponent": "Frontend·Komponen",
    "currentTheme": "Tema Saat Ini",
    "themeCore": "Inti Tema",
    "componentMember": "Anggota Komponen"
  },
  "stateLabels": {
    "mounted": "Terpasang",
    "enabled": "Aktif",
    "disabled": "Nonaktif",
    "unmounted": "Lepas"
  },
  "actions": {
    "enable": "Aktifkan",
    "disable": "Nonaktifkan",
    "reload": "Muat Ulang",
    "config": "Konfigurasi",
    "collapseConfig": "Tutup Konfigurasi",
    "saveConfig": "Simpan Konfigurasi",
    "setAsSystemTheme": "Jadikan Tema Sistem",
    "enableWholeGroup": "Aktifkan Semua",
    "disableWholeGroup": "Nonaktifkan Semua"
  },
  "hints": {
    "takeEffectAfterRefresh": "Berlaku setelah menyegarkan halaman",
    "ctrlK": "Fokus pencarian · Perubahan langsung diterapkan",
    "noMatchingPlugins": "Tidak ada plugin yang cocok",
    "noMatchingPages": "Tidak ada plugin halaman yang cocok",
    "noMatchingComponents": "Tidak ada plugin komponen yang cocok",
    "noMatchingThemes": "Tidak ada plugin tema yang cocok",
    "tryClearingSearch": "Coba kosongkan pencarian atau pilih filter 'Semua'.",
    "noVisibleMembers": "Tidak ada anggota grup yang terlihat di filter/pencarian ini.",
    "defaultThemeVirtual": "Grup Virtual · Tanpa entri plugin",
    "themeGroupCount": "Aktif {enabled} / Total {total}",
    "defaultThemeDesc": "Tanpa plugin: tampilan bawaan halaman; menonaktifkan semua plugin tema mengembalikan tampilan bawaan.",
    "pagePluginDesc": "key = id modul, kernel merender otomatis berdasarkan URL",
    "compPluginDesc": "Terdaftar dalam registri komponen, dipanggil halaman sesuai kebutuhan",
    "currentSystemTheme": "Tema sistem saat ini: ",
    "switchAndPreview": "Ganti & pratinjau di",
    "themeManagerLink": "Manajemen Tema",
    "createThemeHint": "Buat Tema Kustom: Buat modul modules/component-theme-<id>/ dan daftarkan di web/front.json.",
    "footerBar": "Total {modules} modul · Frontend {front} entri (Halaman {pages} · Komponen {components} · Tema {themes} grup) · Backend {backend} plugin · Hot-swap tanpa restart"
  },
  "status": {
    "operationSuccess": "Operasi berhasil",
    "operationFailed": "Operasi gagal",
    "diskWriteFailed": "; Perhatian: Gagal menulis manifes ke disk (perubahan memori tetap berlaku)",
    "disabledSuccess": "Dinonaktifkan",
    "enabledSuccess": "Diaktifkan",
    "reloadedSuccess": "Dimuat ulang",
    "frontDisabled": "Plugin frontend dinonaktifkan",
    "frontEnabled": "Plugin frontend diaktifkan",
    "setThemeSuccess": "Tema sistem diubah ke \"{name}\", segarkan halaman",
    "themeAlreadyState": "Plugin dalam grup \"{label}\" sudah dalam status {state}",
    "allEnabled": "semua diaktifkan",
    "allDisabled": "semua dinonaktifkan",
    "itemToggled": "\"{id}\" telah {state} ({current}/{total})",
    "themeGroupToggled": "Grup tema \"{label}\" telah {state} ({count} plugin, segarkan halaman)",
    "themeGroupFailed": "Grup tema \"{label}\" memiliki {count} plugin yang gagal {state}: {list}",
    "jsonParseError": "Gagal mengurai JSON konfigurasi: {error}",
    "configSaved": "Konfigurasi disimpan dan dimuat ulang"
  }
};

