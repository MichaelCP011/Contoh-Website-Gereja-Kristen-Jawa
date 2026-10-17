# Website GKKA Indonesia (Gereja Komunitas Kasih Anugerah)

Website profil resmi gereja modern yang dibangun dengan arsitektur **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Bento UI Layout**, serta menerapkan prinsip **Anti-Slop Design** (desain autentik, elegan, tanpa template klise AI).

Website ini siap dideploy langsung ke **Vercel** dengan konfigurasi zero-setup.

---

## Fitur Utama & Struktur Halaman

1. **Header & Navigasi**:
   - Status badge kebaktian real-time (*"Minggu Ini • Pk 09:30 WIB"*).
   - Akses cepat ke Hotline Doa 24 Jam dan Live Streaming YouTube.
   - Menu navigasi responsif dengan drawer mobile interaktif.

2. **Flagship Hero Bento Grid**:
   - Kompartemen visual ruang ibadah (*Sanctuary*) beresolusi tinggi dengan tipografi editorial.
   - **Countdown Ticker Interaktif**: Menghitung mundur waktu secara real-time menuju ibadah raya hari Minggu berikutnya.
   - **Ayat Renungan Harian**: Disertai tombol *Salin Ayat* ke clipboard.
   - **Pastoral Hotline 24 Jam**: Akses langsung ke WhatsApp Tim Konseling Pastoral.

3. **Profil Gereja (Company Profile)**:
   - **Visi & Misi**: 3 Pilar Misi Gereja (Penyembahan, Persekutuan, dan Pelayanan).
   - **Sambutan Gembala Sidang**: Pesan dari Pdt. Dr. Andreas Santoso, M.Th & Ibu Maria.
   - **5 Nilai Inti (G.R.A.C.E)**: *Generous, Relational, Authentic, Christ-Centered, Empowering*.
   - **28 Tahun Perjalanan Iman**: Sejarah berdiri sejak 1998 melayani 1.800+ jemaat.
   - **Fasilitas Gedung**: Ruang ibadah ber-AC kapasitas 800 jemaat, Kids Church, ruang laktasi, dan akses 100% ramah disabilitas/lansia.

4. **Jadwal Ibadah Interaktif**:
   - Filter tab kategori: *Semua*, *Ibadah Minggu*, *Youth & Kids*, dan *Doa Tengah Pekan*.
   - Detail sesi: Ibadah Raya 1, Ibadah Raya 2, Ibadah Raya 3 Bilingual/English, Superbook Kids Church, Ignite Youth & Teens, serta Menara Doa & Pemulihan.
   - **Sinkronisasi Kalender**: Tombol *"+ Google Calendar"* otomatis membuat event ke kalender pengguna.
   - Panduan jemaat baru dan tamu pertama kali.

5. **Macam-Macam Kegiatan & Pelayanan**:
   - **Komunitas Sel (CARE Cell)**: Filter wilayah interaktif (Jakarta Pusat, Selatan, Barat, Utara, Timur).
   - **Praise, Worship & Creative Media**: Wadah pelayanan musik, choir, vokal, dan live broadcast.
   - **Kasih Peduli Sesama**: Aksi sosial lumbung sembako, klinik kesehatan gratis, dan beasiswa anak asuh.
   - **Sekolah Orientasi Melayani (SOM)**: Kelas baptisan, sidi, dan bimbingan pra-nikah.
   - **Event Mendatang**: Family Camp & KKR 2026 dengan info pendaftaran online.

6. **Lokasi Peta, Media Sosial & Kontak**:
   - **Google Maps Interaktif**: Iframe peta responsif lokasi gedung gereja.
   - Panduan transportasi umum (MRT, TransJakarta) dan fasilitas parkir 300 mobil bebas biaya.
   - Tombol cepat navigasi: *Buka di Google Maps*, *Buka di Waze*, dan *Salin Alamat*.
   - **Saluran Media Sosial Resmi**: YouTube, Instagram, TikTok, Facebook, Spotify Podcast, dan WhatsApp Care.
   - **Formulir Permohonan Doa & Tamu Baru**: Validasi client-side dengan konfirmasi langsung.
   - **Rekening Persembahan Resmi**: Rekening Bank BCA & Bank Mandiri a/n GKKA Indonesia dengan tombol salin instan.

7. **Footer**:
   - Kutipan Pengakuan Iman Rasuli & Firman (Efesus 4:5-6).
   - Link cepat, jam operasional sekretariat, dan informasi hak cipta.

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
   git commit -m "feat: initial church website with bento ui"
   git branch -M main
   git remote add origin <URL_REPOSITORY_ANDA>
   git push -u origin main
   ```
2. Buka [https://vercel.com](https://vercel.com) dan login.
3. Klik **"Add New Project"** dan pilih repositori Anda.
4. Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
5. Klik **"Deploy"**. Proyek akan selesai di-deploy dalam waktu kurang dari 2 menit.
