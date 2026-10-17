"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Music,
  HeartHandshake,
  BookOpen,
  Calendar,
  Sparkles,
  ChevronRight,
  MapPin,
  Trophy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ActivitiesBento() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeFilter, setActiveFilter] = useState<"all" | "care" | "service" | "social" | "event">("all");

  const careCells = [
    { name: "CARE Menteng & Harmoni", day: "Kamis 19:30 WIB", leader: "Bp. Hendra & Ibu Lisa", region: "pusat" },
    { name: "CARE Kemang & Fatmawati", day: "Jumat 19:30 WIB", leader: "Sdr. Kevin & Sdri. Grace", region: "selatan" },
    { name: "CARE Puri Indah & Kebon Jeruk", day: "Jumat 19:30 WIB", leader: "Bp. Daniel & Ibu Stephanie", region: "barat" },
    { name: "CARE Kelapa Gading & Sunter", day: "Kamis 19:30 WIB", leader: "Bp. Robert & Ibu Meliana", region: "utara" },
    { name: "CARE Rawamangun & Cempaka Putih", day: "Jumat 19:30 WIB", leader: "Bp. Samuel & Ibu Maria", region: "timur" },
    { name: "CARE Youth & Campus (Kuningan)", day: "Sabtu 14:00 WIB", leader: "Sdr. Michael Tan", region: "pusat" },
  ];

  const filteredCareCells = careCells.filter((c) => {
    if (selectedRegion === "all") return true;
    return c.region === selectedRegion;
  });

  return (
    <section id="kegiatan" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-amber-700" />
            <span>Kehidupan Berkomunitas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Kegiatan & Pelayanan Jemaat
          </h2>
        </div>
        <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
          Gereja bukan hanya ibadah akhir pekan. Kami memiliki ragam kelompok fellowship, kelas pemuridan, aksi sosial kemanusiaan, serta wadah pelayanan talenta.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Bento 1: Komunitas Sel (CARE Cell) - Flagship Spans 2 cols */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-white flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-2xl bg-amber-100 text-amber-900">
                  <Users className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                    Kelompok Kecil Mingguan
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    Komunitas Sel (CARE Cell Fellowship)
                  </h3>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-stone-100 text-stone-700 rounded-full w-fit">
                18 Kelompok Aktif
              </span>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Di Komunitas Sel, kami belajar firman Allah secara interaktif, saling mendoakan kebutuhan pribadi, dan makan bersama dalam suasana hangat seperti keluarga sendiri.
            </p>

            {/* Region Filter Selector */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="text-xs font-bold text-stone-500 mr-1">Pilih Wilayah:</span>
              {[
                { id: "all", label: "Semua" },
                { id: "pusat", label: "Jakarta Pusat" },
                { id: "selatan", label: "Jakarta Selatan" },
                { id: "barat", label: "Jakarta Barat" },
                { id: "utara", label: "Jakarta Utara" },
                { id: "timur", label: "Jakarta Timur" },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedRegion === r.id
                      ? "bg-amber-700 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Care Cell Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {filteredCareCells.map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 hover:border-amber-400 transition-colors"
                >
                  <div className="font-bold text-stone-900 text-sm mb-1">{c.name}</div>
                  <div className="text-xs text-amber-800 font-medium mb-1">{c.day}</div>
                  <div className="text-[11px] text-stone-500">Pemimpin: {c.leader}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-stone-500">
              Belum memiliki kelompok? Kami siap menghubungkan Anda dengan ketua terdekat.
            </span>
            <a
              href="https://wa.me/6281288997700?text=Halo%20GKKA,%20saya%20tertarik%20bergabung%20dengan%20Komunitas%20Sel%20terdekat."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white transition-colors shrink-0"
            >
              Gabung Komunitas Sel
            </a>
          </div>
        </div>

        {/* Bento 2: Praise & Worship (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-stone-950 text-white flex flex-col justify-between relative group overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
            <Image
              src="/images/worship.jpg"
              alt="Praise and Worship Ministry"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-stone-950/80" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-white/10 text-amber-400">
                <Music className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Departemen Pelayanan
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Praise, Worship & Creative Media
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
              Melayani Tuhan melalui musik, vokal, choir, sound engineer, lighting, dan siaran langsung multimedia.
            </p>

            <div className="space-y-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Audisi Terbuka Tiap 3 Bulan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Latihan & Doa Bersama Tiap Sabtu</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-stone-400">Punya talenta musik / media?</span>
            <a
              href="#kontak"
              className="text-xs font-bold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
            >
              <span>Daftar Pelayanan</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bento 3: Aksi Sosial Kasih Peduli (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-white flex flex-col justify-between border border-stone-200/80">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-red-50 text-red-700 border border-red-200/50">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-800">
                Aksi Sosial & Diakonia
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Kasih Peduli Sesama
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
              Menghadirkan kasih Kristus secara nyata lewat perbuatan baik bagi masyarakat yang membutuhkan tanpa memandang suku dan agama.
            </p>

            <ul className="space-y-2.5 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                <span><strong>Lumbung Sembako:</strong> 250 paket sembako bulanan untuk keluarga prasejahtera.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                <span><strong>Klinik & Pengobatan Gratis:</strong> Pemeriksaan kesehatan berkala 3 bulan sekali.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                <span><strong>Beasiswa Anak Asuh:</strong> Mendukung biaya sekolah anak-anak berprestasi.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-500 font-medium">Berminat Berdonasi?</span>
            <a href="#kontak" className="font-bold text-amber-800 hover:underline">
              Info Rekening Kasih
            </a>
          </div>
        </div>

        {/* Bento 4: Kelas Pembinaan & Katekisasi (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-white flex flex-col justify-between border border-stone-200/80">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                Pemuridan & Pengajaran
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Sekolah Orientasi Melayani (SOM)
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
              Program pembinaan rohani terstruktur untuk memperdalam pemahaman doktrin Alkitab dan menemukan panggilan hidup.
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                <div className="font-bold text-stone-900">Kelas Baptisan & Sidi</div>
                <div className="text-stone-500 text-[11px]">4 Minggu • Sebelum Baptisan Kudus</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                <div className="font-bold text-stone-900">Bimbingan Pra-Nikah</div>
                <div className="text-stone-500 text-[11px]">8 Sesi • Bersama Konselor Pernikahan</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-500 font-medium">Gelombang Baru Segera Buka</span>
            <a href="#kontak" className="font-bold text-amber-800 hover:underline">
              Daftar Kelas
            </a>
          </div>
        </div>

        {/* Bento 5: Event Mendatang: Family Camp 2026 (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-gradient-to-br from-amber-800 to-amber-950 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-white/10 text-amber-300">
                <Calendar className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-400 text-stone-950">
                Event Utama 2026
              </span>
            </div>

            <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
              14 - 16 November 2026 • Puncak, Bogor
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Family Camp & KKR: &ldquo;Restorasi Bahtera&rdquo;
            </h3>
            <p className="text-amber-100/90 text-xs sm:text-sm leading-relaxed mb-4">
              Tiga hari dua malam penuh sukacita, penguatan ikatan keluarga, sesi khusus pasutri & remaja, serta KKR penyembuhan dan pemulihan iman.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/6281288997700?text=Halo%20Panitia%20Family%20Camp%20GKKA,%20saya%20ingin%20mendaftar%20atau%20bertanya%20mengenai%20paket%20kamar:"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs tracking-wide transition-colors"
            >
              <span>Info & Registrasi Online</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-800" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
