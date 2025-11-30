# DPA-KMA-Kridaya-FPTI-UPI

Berikut adalah draft tutorial lengkap yang menggabungkan panduan untuk ketiga halaman (`peraturan-dokumen.html`, `laporan-pengawasan.html`, dan `dokumen-lainnya.html`).


-----

## 📄 Panduan Menambahkan Dokumen ke Website

Tutorial ini menjelaskan cara menambahkan file baru (SK, Laporan, atau Dokumen Lainnya) yang bersumber dari **Google Drive** ke dalam website.

### ⚠️ Persiapan Utama (Wajib)

Sebelum memasukkan kode, pastikan file dokumen sudah siap:

1.  Upload file ke **Google Drive**.
2.  Klik kanan file \> **Share** \> **General Access**.
3.  Ubah menjadi **"Anyone with the link"**.
4.  Klik **Copy Link**.

-----

### A. Menambahkan ke Halaman "Peraturan & Dokumen"

Gunakan cara ini khusus untuk file **`peraturan-dokumen.html`** yang memiliki kolom kategori.

1.  Buka file `peraturan-dokumen.html`.
2.  Cari elemen `<tbody id="documentList">`.
3.  Copy kode di bawah ini dan Paste di urutan yang diinginkan (biasanya paling atas).

<!-- end list -->

```html
<tr class="document-item">
    <td class="document-title-col">
        <i class="fas fa-file-alt"></i>
        <a href="LINK_GDRIVE_DISINI" target="_blank">JUDUL_DOKUMEN_DISINI</a>
    </td>
    <td><i class="fas fa-calendar-alt"></i> TANGGAL_BULAN_TAHUN</td>
    <td><span class="category-tag KELAS_TAG_DISINI">NAMA_KATEGORI</span></td>
    <td><a href="LINK_GDRIVE_DISINI" target="_blank" download><i class="fas fa-download"></i></a></td>
</tr>
```

**Daftar Pilihan `KELAS_TAG_DISINI` (Untuk Warna Label):**

  * `tag-keputusan` (Surat Keputusan)
  * `tag-organisasi` (Peraturan Organisasi)
  * `tag-sop` (SOP)
  * `tag-gbpk` (GBPK)
  * `tag-mko` (MKO)
  * `tag-adart` (AD/ART)
  * `tag-musyawarah` (Rekomendasi Musyawarah)
  * `tag-tatib` (Tata Tertib)
  * `tag-proleg` (Program Legislasi)

-----

### B. Menambahkan ke "Laporan Pengawasan" atau "Dokumen Lainnya"

Gunakan cara ini untuk file **`laporan-pengawasan.html`** dan **`dokumen-lainnya.html`** (Format tabel lebih sederhana, tanpa kolom kategori).

1.  Buka file target (`laporan-pengawasan.html` ATAU `dokumen-lainnya.html`).
2.  Cari elemen `<tbody id="documentList">`.
3.  Copy kode di bawah ini dan Paste di dalam `tbody`.

<!-- end list -->

```html
<tr class="document-item">
    <td class="document-title-col">
        <i class="fas fa-file-alt"></i>
        <a href="LINK_GDRIVE_DISINI" target="_blank">JUDUL_DOKUMEN_DISINI</a>
    </td>
    <td><i class="fas fa-calendar-alt"></i> TANGGAL_BULAN_TAHUN</td>
    
    <td><a href="LINK_GDRIVE_DISINI" target="_blank" download><i class="fas fa-download"></i></a></td>
</tr>
```

-----

### C. Update Jumlah Dokumen (Penting\!)

Setelah menambahkan baris tabel baru, jangan lupa memperbarui angka penghitung dokumen di bagian atas tabel pada file HTML yang Anda edit.

Cari kode berikut:

```html
Menampilkan <span id="displayedDocsCount">10</span> dari <span id="totalDocsCount">10</span> dokumen
```

  * Ubah angka **10** menjadi jumlah total dokumen yang baru (misal: 11).

### D. Simpan Perubahan

1.  Klik **Commit changes**.
2.  Tunggu beberapa menit hingga website ter-deploy ulang.
