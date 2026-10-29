/**
 * modules/theme-manager/front/locales/id-ID.mjs
 */
export default {
  "pageTitle": "Manajemen Tema",
  "title": "Manajemen Tema",
  "subtitle": "SYSTEM THEME · Pengaturan tingkat sistem disinkronkan ke semua layar",
  "guide": {
    "summary": "Bagaimana cara membuat plugin tema kustom?",
    "step1": "Buat direktori modules/component-theme-<id>/ (hanya front/plugin.js + front/view.js, tanpa index.html atau plugin backend);",
    "step2": "Tambahkan entri ke web/front.json: { \"target\": \"modules/component-theme-<id>\", \"enabled\": true, \"kind\": \"component\", \"pages\": [ …id halaman target… ] };",
    "step3": "Di apply: ctx.ui.registerComponent(\"theme:<id>\", factory) — factory merender kartu pratinjau;",
    "step4": "Aktivasi mandiri: injeksikan stylesheet dan tambahkan class tema ke <html> (lihat modules/component-theme-neon/); baca/tulis tema via localStorage[\"ystage:theme\"] dan GET/PUT /api/theme/active;",
    "step5": "Segarkan untuk melihat kartu tema baru; sembunyikan semua dekorasi selama battle-mode."
  },
  "backHome": "Kembali ke Beranda",
  "status": {
    "switching": "Sedang berganti…",
    "unreachableLocalOnly": "Server tidak terjangkau ({error}), hanya berlaku secara lokal, menyegarkan…",
    "serverRejected": "Server menolak tema (HTTP {status}), tidak ada perubahan",
    "switchSuccess": "Berhasil berganti ke \"{theme}\", menyegarkan…",
    "unreachableLocalMemory": "Layanan tema tidak terjangkau: menampilkan memori lokal",
    "renderFailed": "Pratinjau tema \"{id}\" gagal dirender: {error}",
    "noThemePlugins": "Tidak ada plugin tema ditemukan (menampilkan tema tersimpan)",
    "initFailed": "Inisialisasi halaman gagal: {error}"
  },
  "buttons": {
    "currentSystemTheme": "Tema Sistem Saat Ini",
    "setAsSystemTheme": "Jadikan Tema Sistem"
  },
  "defaultCard": {
    "name": "Tema Bawaan",
    "tag": "CLASSIC",
    "desc": "Tampilan gelap tradisional: latar foto + panel abu-abu + tombol warna semantik.",
    "note": "Cocok untuk stabilitas; menonaktifkan semua animasi dekoratif.",
    "activeBadge": "Tema Saat Ini"
  }
};

