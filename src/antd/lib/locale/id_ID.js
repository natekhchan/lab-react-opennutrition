"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _id_ID = _interopRequireDefault(require("rc-pagination/lib/locale/id_ID"));
var _id_ID2 = _interopRequireDefault(require("../calendar/locale/id_ID"));
var _id_ID3 = _interopRequireDefault(require("../date-picker/locale/id_ID"));
var _id_ID4 = _interopRequireDefault(require("../time-picker/locale/id_ID"));
/* eslint-disable no-template-curly-in-string */

const typeTemplate = '${label} tidak valid ${type}';
const localeValues = {
  locale: 'id',
  Pagination: _id_ID.default,
  DatePicker: _id_ID3.default,
  TimePicker: _id_ID4.default,
  Calendar: _id_ID2.default,
  global: {
    placeholder: 'Silahkan pilih'
  },
  Table: {
    filterTitle: 'Menu filter',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'Tidak ada filter',
    filterCheckall: 'Pilih semua item',
    filterSearchPlaceholder: 'Cari di filter',
    emptyText: 'Tidak ada data',
    selectAll: 'Pilih halaman saat ini',
    selectInvert: 'Balikkan halaman saat ini',
    selectNone: 'Hapus semua data',
    selectionAll: 'Pilih semua data',
    sortTitle: 'Urutkan',
    expand: 'Perluas baris',
    collapse: 'Perkecil baris',
    triggerDesc: 'Klik untuk mengurutkan secara menurun',
    triggerAsc: 'Klik untuk mengurutkan secara menaik',
    cancelSort: 'Klik untuk membatalkan pengurutan'
  },
  Tour: {
    Next: 'Selanjutnya',
    Previous: 'Sebelumnya',
    Finish: 'Selesai'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Batal',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Batal'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Cari di sini',
    itemUnit: 'data',
    itemsUnit: 'data',
    remove: 'Hapus',
    selectCurrent: 'Pilih halaman saat ini',
    removeCurrent: 'Hapus halaman saat ini',
    selectAll: 'Pilih semua data',
    deselectAll: 'Batal pilih semua data',
    removeAll: 'Hapus semua data',
    selectInvert: 'Balikkan halaman saat ini'
  },
  Upload: {
    uploading: 'Mengunggah...',
    removeFile: 'Hapus file',
    uploadError: 'Kesalahan pengunggahan',
    previewFile: 'Pratinjau file',
    downloadFile: 'Unduh file'
  },
  Empty: {
    description: 'Tidak ada data'
  },
  Icon: {
    icon: 'ikon'
  },
  Text: {
    edit: 'Ubah',
    copy: 'Salin',
    copied: 'Disalin',
    expand: 'Perluas',
    collapse: 'Perkecil'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Kesalahan validasi untuk ${label}',
      required: 'Tolong masukkan ${label}',
      enum: '${label} harus menjadi salah satu dari [${enum}]',
      whitespace: '${label} tidak boleh berupa karakter kosong',
      date: {
        format: '${label} format tanggal tidak valid',
        parse: '${label} tidak dapat diubah menjadi tanggal',
        invalid: '${label} adalah tanggal yang tidak valid'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} harus berupa ${len} karakter',
        min: '${label} harus minimal ${min} karakter',
        max: '${label} harus maksimal ${max} karakter',
        range: '${label} harus diantara ${min}-${max} karakter'
      },
      number: {
        len: '${label} harus sama dengan ${len}',
        min: '${label} harus minimal ${min}',
        max: '${label} harus maksimal ${max}',
        range: '${label} harus di antara ${min}-${max}'
      },
      array: {
        len: 'Harus ${len} ${label}',
        min: 'Minimal ${min} ${label}',
        max: 'Maksimal ${max} ${label}',
        range: 'Jumlah ${label} harus di antara ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} tidak sesuai dengan pola ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Pratinjau'
  },
  QRCode: {
    expired: 'Kode QR sudah habis masa berlakunya',
    refresh: 'Segarkan',
    scanned: 'Dipindai'
  },
  ColorPicker: {
    presetEmpty: 'Kosong',
    transparent: 'Transparan',
    singleColor: 'Warna tunggal',
    gradientColor: 'Warna gradien'
  }
};
var _default = exports.default = localeValues;