## Nama & NIM:
Aji Prasetyo Nugroho_2211104049

## Deskripsi Tugas:
Refactoring kode game sederhana berbasis state machine menjadi struktur modular dengan standar penulisan kode yang baik.

## Perubahan Refactoring:
1. Modularisasi Kode
   - Memisahkan class `Game` ke dalam folder `controllers/gameController.js`.
   - `index.js` menjadi entry point utama, hanya mengatur interaksi user.

2. Penyesuaian Naming Convention
   - Mengganti nama method `transition()` menjadi `handleTransition()`.
   - Menggunakan `camelCase` untuk nama variabel dan fungsi.
   - Menggunakan `PascalCase` untuk nama class (`Game`).

3. Penggantian var
   - Tidak ada penggunaan `var`, seluruhnya diganti ke `const`/`let` sesuai konteks.

4. Penggunaan const/let
   - `const` digunakan untuk nilai tetap seperti `game`, `readline`, dll.
   - `let` digunakan jika variabel bisa berubah (meskipun tidak digunakan di kasus ini).

5. Komentar dan Dokumentasi
   - Menambahkan komentar di setiap fungsi.
   - Menambahkan komentar JSDoc pada class `Game` dan method `handleTransition()`.

6. Perbaikan Indentasi dan Spasi
   - Menggunakan indentasi 2 spasi.
   - Menambahkan spasi antar operator, antar fungsi, dan antar blok logika.

7. Penghapusan Kode Duplikat
   - Logika global seperti perintah `EXIT` diletakkan di luar switch agar tidak duplikatif.

8. Peningkatan Interaksi Terminal
   - Input dari pengguna kini dipanggil berulang (recursive prompt).
   - Meningkatkan user experience dibanding hanya satu input.

## Cara Menjalankan:
node index.js
