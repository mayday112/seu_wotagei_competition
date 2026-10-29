/**
 * modules/game-composer/front/locales/id-ID.mjs
 */
export default {
  "pageTitle": "Komposer Visual",
  "title": "Komposer Visual",
  "subtitle": "Tambahkan blok dari panel komponen, rancang mode game baru, dan jalankan di Panggung Kustom",
  "dirty": "Belum disimpan",
  "backSelect": "Kembali ke Pilihan",
  "toolbar": {
    "aria": "Operasi Tata Letak",
    "newLayout": "Tata Letak Baru",
    "savedLayouts": "Tata Letak Tersimpan",
    "newLayoutOption": "—— Baru (Belum Disimpan) ——",
    "selectAria": "Pilih tata letak tersimpan untuk dimuat",
    "saving": "Menyimpan…",
    "save": "Simpan",
    "delete": "Hapus",
    "deleteTitle": "Hapus tata letak saat ini",
    "deleteDisabledTitle": "Simpan terlebih dahulu untuk menghapus",
    "preview": "Pratinjau",
    "exitPreview": "Keluar Pratinjau",
    "openInStage": "Buka di Panggung",
    "stageTitle": "Jalankan tata letak saat ini di Panggung Kustom",
    "stageDisabledTitle": "Harap simpan tata letak terlebih dahulu"
  },
  "retry": "Coba Lagi",
  "palette": {
    "title": "Panel Komponen",
    "empty": "Belum ada komponen terdaftar (mungkin dinonaktifkan)",
    "advanced": "Lanjutan",
    "addAria": "Tambah komponen {label}",
    "addTitle": "Tambah {label}",
    "components": {
      "music-source": {
        "label": "Sumber Musik",
        "desc": "Ambil pustaka musik via API music-library; hubungkan 'Daftar Musik (data)' ke Mesin Undian atau Pemutar Musik",
        "outs": { "getList": "Daftar Musik (Data)" },
        "ins": {}
      },
      "player-list": {
        "label": "Daftar Peserta",
        "desc": "Baca JSON peserta dan render grid peserta yang dapat dipilih",
        "outs": { "getSelected": "Daftar Terpilih (Data)" },
        "ins": {}
      },
      "score-board": {
        "label": "Papan Skor",
        "desc": "Penambahan/pengurangan skor multi-tim dan reset, hanya di memori",
        "outs": { "getScores": "Skor Tim (Data)" },
        "ins": {}
      },
      "countdown": {
        "label": "Hitung Mundur",
        "desc": "Timer hitung mundur mm:ss dengan pengaturan menit dan reset",
        "outs": {},
        "ins": {}
      },
      "music-player": {
        "label": "Pemutar Musik",
        "desc": "Pemutar musik dengan tombol undian otomatis jika tidak ditentukan trigger; sumber lagu via props.items atau koneksi data",
        "outs": { "onDrawn": "Hasil Undian (Event)" },
        "ins": {
          "items": "Kumpulan Kandidat (Data)",
          "play": "Putar Lagu (Aksi)"
        }
      },
      "draw-machine": {
        "label": "Mesin Undian",
        "desc": "Mesin undian kandidat; hubungkan dari kumpulan kandidat atau sediakan props.items",
        "outs": {
          "onResult": "Hasil Undian (Event)",
          "getResult": "Hasil Saat Ini (Data)"
        },
        "ins": { "items": "Kumpulan Kandidat (Data)" }
      },
      "toast": {
        "label": "Pesan Cepat",
        "desc": "Komponen layanan halaman, umumnya tidak ditaruh di panggung",
        "outs": {},
        "ins": {}
      },
      "confirm-dialog": {
        "label": "Dialog Konfirmasi",
        "desc": "Komponen layanan halaman, umumnya tidak ditaruh di panggung",
        "outs": {},
        "ins": {}
      }
    }
  },
  "canvas": {
    "title": "Kanvas Tata Letak",
    "nameLabel": "Nama Tata Letak",
    "namePlaceholder": "mis. Panggung Latihan Pertarungan 2 Pemain",
    "nameAria": "Nama tata letak (1 hingga 40 karakter)",
    "unnamed": "Tanpa Nama",
    "moveUpAria": "Pindah ke atas {label}",
    "moveUpTitle": "Ke Atas",
    "moveDownAria": "Pindah ke bawah {label}",
    "moveDownTitle": "Ke Bawah",
    "deleteAria": "Hapus {label}",
    "deleteTitle": "Hapus",
    "emptyTitle": "Kanvas kosong",
    "emptyHint": "Klik tombol 'Tambah' di panel komponen kiri untuk menyusun komponen"
  },
  "props": {
    "title": "Properti",
    "unselectedTitle": "Tidak Ada Komponen Terpilih",
    "unselectedHint": "Klik kartu pada kanvas untuk mengedit judul dan propertinya",
    "cardTitleLabel": "Judul (Opsional)",
    "cardTitlePlaceholder": "Judul kartu, mis. Babak Pertama",
    "cardTitleAria": "Judul komponen terpilih",
    "propsLabel": "props (Objek JSON)",
    "propsAria": "JSON props komponen terpilih",
    "applyProps": "Terapkan props",
    "applyHint": "JSON diurai saat blur atau 'Terapkan'; nilai lama dipertahankan jika gagal"
  },
  "wiring": {
    "title": "Koneksi",
    "event": "Event",
    "data": "Data",
    "deleteAria": "Hapus koneksi: {from} ke {to}",
    "deleteTitle": "Hapus koneksi",
    "empty": "Belum ada koneksi: gunakan formulir di bawah untuk menghubungkan port keluaran ke masukan",
    "fromLabel": "Instans Sumber",
    "fromAria": "Instans sumber koneksi",
    "fromOption": "—— Instans ——",
    "outLabel": "Port Keluaran (awalan 'on' = event)",
    "outAria": "Port keluaran koneksi",
    "outOption": "—— Port Keluaran ——",
    "toLabel": "Instans Target",
    "toAria": "Instans target koneksi",
    "toOption": "—— Instans ——",
    "inLabel": "Port Masukan",
    "inAria": "Port masukan koneksi",
    "inOption": "—— Port Masukan ——",
    "addConnection": "Tambah Koneksi",
    "addDisabledTitle": "Pilih keempat opsi untuk menambahkan",
    "hint": "Port keluaran berawalan 'on' = koneksi event (memicu aksi); lainnya = koneksi data",
    "noStaged": "Belum ada instans yang dapat dihubungkan pada kanvas",
    "itemDeleted": "Instans terhapus",
    "rawOut": "Keluaran Mentah",
    "rawIn": "Masukan Mentah"
  },
  "preview": {
    "note": "Mode Pratinjau: komponen dipasang langsung di memori tanpa disimpan ke basis data",
    "mounting": "Memasang komponen…",
    "emptyHint": "Kanvas kosong: keluar dari pratinjau dan tambahkan komponen dari panel",
    "slotAria": "Slot komponen: {label}",
    "mountFailed": "Pemasangan komponen gagal: {error}",
    "connSummary": "Koneksi tata letak {count} jalur",
    "connWithDangling": "Koneksi tata letak {count} jalur ({dangling} terputus dilewati)"
  },
  "footer": "Tata letak disimpan di SQLite; 'Buka di Panggung' menjalankan tata letak (/m/custom-stage/)",
  "status": {
    "loadFailed": "Gagal memuat daftar tata letak: {error}",
    "networkError": "Kesalahan Jaringan",
    "unsavedConfirm": "Tata letak saat ini memiliki perubahan yang belum disimpan. Buang perubahan dan lanjutkan?",
    "notFound": "Tata letak tidak ditemukan (daftar mungkin berubah)",
    "nameEmpty": "Nama tata letak tidak boleh kosong",
    "deletedElsewhere": "Tata letak telah dihapus di tempat lain, klik 'Tata Letak Baru' untuk menyimpan baru",
    "saveFailedHttp": "Gagal menyimpan (HTTP {status})",
    "saveConflict": "Tersimpan, namun ada editan baru selama proses simpan. Harap simpan ulang.",
    "saved": "Tersimpan",
    "saveNetworkError": "Kesalahan jaringan, gagal menyimpan: {error}",
    "deleteNotFound": "Tata letak tidak ada (mungkin sudah terhapus)",
    "deleteFailedHttp": "Gagal menghapus (HTTP {status})",
    "deleted": "Terhapus",
    "deleteNetworkError": "Kesalahan jaringan, gagal menghapus: {error}",
    "deleteConfirm": "Hapus tata letak \"{name}\"? Tindakan ini tidak dapat dibatalkan.",
    "openStageNeedSave": "Harap simpan tata letak terlebih dahulu sebelum membuka di Panggung Kustom",
    "jsonParseError": "Gagal mengurai JSON: {error}",
    "propsMustBeObject": "props harus berupa objek JSON ({}), bukan array atau nilai primitif",
    "eventSourceOccupied": "Sumber event ini telah digunakan oleh koneksi lain (sumber & keluaran sama). Hapus koneksi lama dulu.",
    "dataTargetOccupied": "Target data ini telah digunakan oleh koneksi lain (target & masukan sama). Hapus koneksi lama dulu.",
    "initFailed": "Inisialisasi editor gagal, silakan segarkan halaman"
  }
};

