# Website Resmi GKJ (Gereja Kristen Jawa) - Wilayah Jawa Tengah

Website profil resmi gereja modern yang dibangun dengan arsitektur **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Bento UI Layout**, serta menerapkan prinsip **Anti-Slop Design** (desain autentik, elegan, bersahaja/ugahari, tanpa template klise AI).

Website ini siap dideploy langsung ke **Vercel** dengan konfigurasi zero-setup.

---

## Identitas & Revisi Sesuai Kebutuhan

1. **Nama Gereja**: **GKJ (Gereja Kristen Jawa)**
2. **Logo Resmi**: Menggunakan logo resmi Sinode Gereja-Gereja Kristen Jawa (Gunungan wayang dengan burung merpati Roh Kudus, tangan berdoa, dan pita pasamuwan).
3. **Simulasi Lokasi (Jawa Tengah)**: Menggunakan sampel lokasi representatif GKJ di Jawa Tengah:
   * **Gedung GKJ Manahan, Kota Surakarta (Solo), Jawa Tengah**
   * Alamat: Jl. MT Haryono No. 9, Manahan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57139
   * Dilengkapi embed interaktif Google Maps, akses Stasiun Solo Balapan / Purwosari, dan petunjuk Waze.

---

## Fitur Utama & Struktur Halaman Bento UI

1. **Header & Navigasi**:
   * Logo resmi Gunungan GKJ dan teks identitas *Sinode GKJ • Jawa Tengah*.
   * Status ibadah Basa Jawi & Basa Indonesia, akses live streaming YouTube, dan tombol WhatsApp kantor sekretariat.
   * Menu navigasi responsif dengan drawer mobile.

2. **Flagship Hero Bento Grid**:
   * Kompartemen visual ruang ibadah (*Sanctuary*) beresolusi tinggi dengan tipografi editorial.
   * **Countdown Ticker Interaktif**: Menghitung mundur waktu secara real-time menuju kebaktian hari Minggu terdekat.
   * **Sabda Pangandika / Ayat Renungan**: 1 Korintus 13:13 (Kitab Suci Basa Jawi) dengan tombol *Salin Ayat* ke clipboard.
   * **Pelayanan Doa & Majelis Siaga 24 Jam**: Akses WhatsApp langsung ke Majelis dan Pendeta Jemaat GKJ.

3. **Profil Gereja (*Company Profile*)**:
   * **Visi & Tri Tugas Gereja Sinode GKJ**: *Marturia* (Kesaksian), *Koinonia* (Persekutuan), dan *Diakonia* (Pelayanan).
   * **Paweling Majelis Pasamuwan**: Pesan dari Pendeta Jemaat GKJ.
   * **Nilai Pasamuwan GKJ**: *Pracaya* (Iman), *Paseduluran* (Guyub Rukun), *Ugahari* (Kesederhanaan), *Nguri-uri Budaya Jawi*, dan *Diakonia Asih*.
   * **Sejarah Sejak 1931**: Kilas sejarah pelembagaan Sinode Gereja-Gereja Kristen Jawa di Kebumen.
   * **Fasilitas & Sarana Ibadah**: Gedung ibadah arsitektur perpaduan Jawa-Modern, seperangkat gamelan slendro & pelog karawitan rohani, pendopo serbaguna, dan akses ramah warga adiyuswa (lansia) serta difabel.

4. **Jadwal Ibadah Rutin GKJ**:
   * Filter tab kategori: *Semua*, *Kebaktian Minggu*, *Komisi Pemuda & Anak*, dan *Adiyuswa & Doa*.
   * Rincian jadwal:
     * **Ibadah Basa Jawi**: Minggu 06:30 WIB (Kidung Pasamuwan Jawi / gamelan rohani).
     * **Ibadah Basa Indonesia 1**: Minggu 08:30 WIB (Kidung Jemaat & NKB, serentak Sekolah Minggu).
     * **Ibadah Basa Indonesia 2**: Minggu 17:00 WIB (Ibadah sore/mahasiswa).
     * **Sekolah Minggu (Komisi Anak GKJ)**: Minggu 08:30 WIB.
     * **Ibadah Pemuda & Remaja (KP / KR GKJ)**: Sabtu 17:30 WIB.
     * **Persekutuan Warga Adiyuswa (Lansia)**: Selasa 16:00 WIB di Pendopo Pasamuwan.
     * **Persekutuan Doa & Pendalaman Alkitab**: Rabu 18:30 WIB.
   * **Sinkronisasi Kalender**: Tombol *"+ Google Calendar"* otomatis membuat event ke kalender pengguna.

5. **Kegiatan Komisi & Paguyuban Wilayah**:
   * **Paguyuban Wilayah & Blok**: Filter wilayah Solo (Manahan, Kerten, Mangkubumen, Sumber, Nusukan) untuk persekutuan anjangsana keluarga.
   * **Karawitan & Seni Suara GKJ**: Latihan gamelan dan paduan suara gereja.
   * **Aksi Sosial & Diakonia Kasih Seta**: Lumbung beras, pankas (pangrukti layon), beasiswa pendidikan, dan tanggap bencana Jawa Tengah.
   * **Katekisasi Sidi & Baptis**: Pembinaan ajaran iman Kristen Reformis.
   * **Agenda Sinode**: Bulan Budaya & Festival Gamelan GKJ.

6. **Lokasi Peta, Media Sosial & Kontak**:
   * **Google Maps Interaktif**: Iframe peta lokasi GKJ Manahan Surakarta, Jawa Tengah.
   * Petunjuk transportasi lokal (Stasiun Solo Balapan, BST, parkir bebas biaya).
   * Tombol navigasi cepat: *Buka di Google Maps*, *Buka di Waze*, dan *Salin Alamat*.
   * **Hub Media Sosial Resmi**: YouTube, Instagram, TikTok, Facebook, Spotify Podcast, dan WhatsApp Kantor GKJ.
   * **Formulir Permohonan Doa & Warga Baru**: Validasi client-side dengan konfirmasi langsung.
   * **Rekening Persembahan / Pisungsung Resmi**: Bank Jateng (BPD) & Bank BCA Solo.

7. **Footer**:
   * Logo resmi Gunungan Sinode GKJ.
   * Kutipan Pengakuan Iman Rasuli (Efesus 4:5-6 Basa Jawi), jam kantor sekretariat, dan hak cipta.

---

## Cara Menjalankan Secara Lokal

```bash
# 1. Pastikan dependensi terpasang
npm install

# 2. Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) (atau port yang aktif) di browser Anda.

---

## Cara Deploy ke Vercel

1. Push repository ini ke akun GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: church website gkj bento ui"
   git branch -M main
   git remote add origin <URL_REPOSITORY_ANDA>
   git push -u origin main
   ```
2. Buka [https://vercel.com](https://vercel.com) dan login.
3. Klik **"Add New Project"** dan pilih repositori Anda.
4. Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
5. Klik **"Deploy"**. Proyek akan selesai di-deploy dalam waktu kurang dari 2 menit.
