"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Music,
  HeartHandshake,
  BookOpen,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ActivitiesBento() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const gkjWilayah = [
    { name: "Wilayah Manahan & Tirtonadi", day: "Kamis 19:00 WIB", leader: "Pnt. Budi Nugroho & Dkn. Sri Rahayu", region: "tengah" },
    { name: "Wilayah Kerten & Purwosari", day: "Jumat 19:00 WIB", leader: "Pnt. Slamet Hartono & Ibu Endang", region: "selatan" },
    { name: "Wilayah Mangkubumen & Banjarsari", day: "Kamis 19:00 WIB", leader: "Pnt. Agus Wibowo & Ibu Tri", region: "tengah" },
    { name: "Wilayah Sumber & Baturan", day: "Jumat 19:00 WIB", leader: "Pnt. Joko Sutrisno & Dkn. Wahyu", region: "barat" },
    { name: "Wilayah Nusukan & Kadipiro", day: "Kamis 19:00 WIB", leader: "Pnt. Bambang Prasetyo & Ibu Rita", region: "utara" },
    { name: "Komisi Pemuda (Youth Fellowship)", day: "Sabtu 15:30 WIB", leader: "Sdr. Bagus Saputra & Sdri. Arum", region: "tengah" },
  ];

  const filteredWilayah = gkjWilayah.filter((c) => {
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
            <span>Kridhaning Pasamuwan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Kegiatan Komisi & Paguyuban GKJ
          </h2>
        </div>
        <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
          Gereja Kristen Jawa nyawiji lumantar paguyuban wilayah, pambinaan komisi kategorial, pelestarian seni gamelan rohani, lan pakaryan diakonia asih.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Bento 1: Paguyuban Wilayah / Blok GKJ - Flagship Spans 2 cols */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-white flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-2xl bg-amber-100 text-amber-900">
                  <Users className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                    Paseduluran Warga Pasamuwan
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    Paguyuban Wilayah & Blok GKJ
                  </h3>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-stone-100 text-stone-700 rounded-full w-fit">
                Wilayah Solo & Sekitarnya
              </span>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Persekutuan doa rutin di rumah warga jemaat (anjangsana) untuk saling mendoakan, belajar firman Tuhan, dan mempererat ikatan paseduluran guyub rukun.
            </p>

            {/* Region Filter Selector */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="text-xs font-bold text-stone-500 mr-1">Pilih Wilayah:</span>
              {[
                { id: "all", label: "Sedaya Wilayah" },
                { id: "tengah", label: "Solo Pusat / Manahan" },
                { id: "selatan", label: "Kerten & Purwosari" },
                { id: "barat", label: "Sumber & Baturan" },
                { id: "utara", label: "Nusukan & Kadipiro" },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedRegion === r.id
                      ? "bg-amber-800 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Care Cell Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {filteredWilayah.map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 hover:border-amber-400 transition-colors"
                >
                  <div className="font-bold text-stone-900 text-sm mb-1">{c.name}</div>
                  <div className="text-xs text-amber-800 font-medium mb-1">{c.day}</div>
                  <div className="text-[11px] text-stone-500">Majelis Pendamping: {c.leader}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-stone-500">
              Dereng kagungan paguyuban wilayah? Majelis GKJ siap mbiyantu panyambunging wilayah.
            </span>
            <a
              href="https://wa.me/6281226001931?text=Sugeng%20rawuh%20GKJ,%20kula%20warga%20enggal%20nyuwun%20katrangan%20paguyuban%20wilayah%20caket%20griyo."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white transition-colors shrink-0"
            >
              Info Paguyuban Wilayah
            </a>
          </div>
        </div>

        {/* Bento 2: Karawitan Rohani & Seni Suara GKJ (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-stone-950 text-white flex flex-col justify-between relative group overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
            <Image
              src="/images/worship.jpg"
              alt="Karawitan dan Musik Rohani GKJ"
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
                Seni Budaya & Rohani
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Karawitan & Seni Suara GKJ
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
              Pangibadah kairing gamelan laras slendro & pelog, tembang macapat rohani, keroncong, sarta Paduan Suara Jemaat.
            </p>

            <div className="space-y-2 text-xs text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Gladhi Karawitan saben Kemis Dalu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Latihan Paduan Suara saben Setu Sonten</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-stone-400">Kersa ngladosi seni gamelan?</span>
            <a
              href="#kontak"
              className="text-xs font-bold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
            >
              <span>Hubungi Pengurus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bento 3: Aksi Sosial & Diakonia Kasih Seta (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-white flex flex-col justify-between border border-stone-200/80">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-red-50 text-red-700 border border-red-200/50">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-800">
                Pelayanan Diakonia
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Diakonia & Kasih Seta
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
              Nyatakaken asih lumantar pitulungan warga prasejahtera, beasiswa pendidikan, sarta tanggap darurat bencana ing Jawa Tengah.
            </p>

            <ul className="space-y-2.5 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                <span><strong>Lumbung Beras Warga:</strong> Distribusi bantuan sembako rutin bagi warga sekitar gereja.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                <span><strong>Pelayanan Pankas:</strong> Pendampingan kedukaan & pemakaman warga jemaat.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                <span><strong>Beasiswa Pendidikan:</strong> Bantuan dana sekolah siswa berprestasi.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-500 font-medium">Berminat Berdonasi?</span>
            <a href="#kontak" className="font-bold text-amber-800 hover:underline">
              Rekening Diakonia GKJ
            </a>
          </div>
        </div>

        {/* Bento 4: Katekisasi Sidi & Pembinaan Warga (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-white flex flex-col justify-between border border-stone-200/80">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                Pambinaan Iman GKJ
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Katekisasi Sidi & Baptis
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
              Kelas pambinaan piwulang iman Kristen Reformis kagem calon sidi (pengakuan percaya), baptis dewasa, sarta konseling palakrama (pra-nikah).
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                <div className="font-bold text-stone-900">Kelas Katekisasi Sidi Remaja</div>
                <div className="text-stone-500 text-[11px]">Saben Minggu Sonten sesampunipun Ibadah</div>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60">
                <div className="font-bold text-stone-900">Pambinaan Palakrama (Pra-Nikah)</div>
                <div className="text-stone-500 text-[11px]">Kanthi Pendeta Jemaat & Konselor Kulawarga</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-500 font-medium">Pendaftaran Angkatan Baru</span>
            <a href="#kontak" className="font-bold text-amber-800 hover:underline">
              Daftar Katekisasi
            </a>
          </div>
        </div>

        {/* Bento 5: Event Utama: Bulan Budaya & Kemitraan GKJ 2026 (1 Col) */}
        <div className="bento-card p-6 sm:p-7 bg-gradient-to-br from-amber-800 to-amber-950 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-white/10 text-amber-300">
                <Calendar className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-400 text-stone-950">
                Agenda Sinode GKJ
              </span>
            </div>

            <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
              Agustus - Oktober 2026 • Wilayah Jawa Tengah
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Bulan Budaya & Festival Gamelan GKJ 2026
            </h3>
            <p className="text-amber-100/90 text-xs sm:text-sm leading-relaxed mb-4">
              Rangkaian ibadah nuansa busana adat Jawi, pagelaran wayang wahyu rohani, temu paduan suara se-Klasis, lan pasar murah rakyat.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/6281226001931?text=Sugeng%20rawuh%20Panitia%20Bulan%20Budaya%20GKJ,%20kula%20nyuwun%20informasi%20adicara:"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs tracking-wide transition-colors"
            >
              <span>Info Lengkap & Warta Acara</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-800" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
