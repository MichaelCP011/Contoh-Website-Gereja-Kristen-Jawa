"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Radio,
  Users,
  ChevronRight,
} from "lucide-react";

interface ScheduleItem {
  id: string;
  category: "minggu" | "youth_kids" | "doa";
  title: string;
  time: string;
  day: string;
  location: string;
  target: string;
  description: string;
  badge: string;
  hasLivestream?: boolean;
  accent: string;
  calendarTime: {
    start: string;
    end: string;
  };
}

export default function ScheduleBento() {
  const [activeTab, setActiveTab] = useState<"all" | "minggu" | "youth_kids" | "doa">("all");

  const schedules: ScheduleItem[] = [
    {
      id: "ibadah-basa-jawi",
      category: "minggu",
      title: "Ibadah Basa Jawi (Kebaktian Bahasa Jawa)",
      day: "Saben Dinten Minggu",
      time: "06:30 - 08:00 WIB",
      location: "Gedhong Ibadah Utama (Lantai 1)",
      target: "Warga Sepuh (Adiyuswa), Kulawarga & Warga Pasamuwan",
      description: "Kebaktian khidmat migunakaken Basa Jawi, Kidung Pasamuwan Jawi (KPJ) kairing gamelan karawitan rohani lan ungeling orgen.",
      badge: "Basa Jawi & Gamelan",
      accent: "amber",
      calendarTime: {
        start: "20261025T063000",
        end: "20261025T080000",
      },
    },
    {
      id: "ibadah-basa-indonesia-1",
      category: "minggu",
      title: "Ibadah Basa Indonesia 1 (Utama & Keluarga)",
      day: "Setiap Hari Minggu",
      time: "08:30 - 10:00 WIB",
      location: "Gedhong Ibadah Utama (Lantai 1)",
      target: "Keluarga, Dewasa & Jemaat Umum",
      description: "Ibadah raya menggunakan Bahasa Indonesia, Kidung Jemaat (KJ) dan Nyanyikanlah Kidung Baru (NKB). Berbarengan dengan Sekolah Minggu Anak.",
      badge: "Onsite & Live Streaming",
      hasLivestream: true,
      accent: "amber",
      calendarTime: {
        start: "20261025T083000",
        end: "20261025T100000",
      },
    },
    {
      id: "ibadah-basa-indonesia-2",
      category: "minggu",
      title: "Ibadah Basa Indonesia 2 (Sore)",
      day: "Setiap Hari Minggu",
      time: "17:00 - 18:30 WIB",
      location: "Gedhong Ibadah Utama (Lantai 1)",
      target: "Profesional Muda, Mahasiswa & Jemaat Sore",
      description: "Suasana ibadah teduh sore hari dengan pujian kontemporer akustik dan khotbah eksposisi firman aplikatif bagi kehidupan kerja dan kampus.",
      badge: "Ibadah Sore",
      accent: "stone",
      calendarTime: {
        start: "20261025T170000",
        end: "20261025T183000",
      },
    },
    {
      id: "komisi-anak-sekolah-minggu",
      category: "youth_kids",
      title: "Sekolah Minggu (Komisi Anak GKJ)",
      day: "Setiap Hari Minggu",
      time: "08:30 - 10:00 WIB",
      location: "Gedung Grha Kasih / Ruang Komisi Anak",
      target: "Anak Balita, Pratama (Kelas 1-3) & Madya (Kelas 4-6)",
      description: "Pembinaan iman anak dengan nyanyian rohani, kisah tokoh Alkitab, prakarya, dan pendampingan Guru Sekolah Minggu (GSM) GKJ berdedikasi.",
      badge: "Komisi Anak (KA)",
      accent: "emerald",
      calendarTime: {
        start: "20261025T083000",
        end: "20261025T100000",
      },
    },
    {
      id: "komisi-pemuda-remaja",
      category: "youth_kids",
      title: "Ibadah Pemuda & Remaja (KP / KR GKJ)",
      day: "Setiap Hari Sabtu",
      time: "17:30 - 19:30 WIB",
      location: "Ruang Pemuda (Lantai 2)",
      target: "Remaja SMP-SMA, Mahasiswa & Pemuda GKJ",
      description: "Wadah persekutuan dinamis generasi muda GKJ dengan worship band, diskusi isu aktual, sharing kelompok kecil, dan paseduluran hangat.",
      badge: "Komisi Pemuda (KP)",
      accent: "amber",
      calendarTime: {
        start: "20261024T173000",
        end: "20261024T193000",
      },
    },
    {
      id: "adiyuswa-doa",
      category: "doa",
      title: "Persekutuan Warga Adiyuswa (Lansia GKJ)",
      day: "Setiap Hari Selasa Sore",
      time: "16:00 - 17:30 WIB",
      location: "Pendopo Pasamuwan GKJ",
      target: "Para Sesepuh Jemaat & Warga Senior (Adiyuswa)",
      description: "Persekutuan guyub rukun tembang macapat rohani, kidung jemaat, saling menanyakan kabar (sambang-tinimbang), dan siraman rohani penguat usia senja.",
      badge: "Guyub Warga Adiyuswa",
      accent: "stone",
      calendarTime: {
        start: "20261027T160000",
        end: "20261027T173000",
      },
    },
    {
      id: "menara-doa-gkj",
      category: "doa",
      title: "Persekutuan Doa & Pendalaman Alkitab (PA)",
      day: "Setiap Hari Rabu Malam",
      time: "18:30 - 20:00 WIB",
      location: "Ruang Ibadah / Paguyuban Wilayah",
      target: "Seluruh Warga Pasamuwan & Sahabat",
      description: "Mendoakan pokok doa warga, pergumulan bangsa, jemaat yang sakit, serta bedah Alkitab sistematis bersama Pendeta dan Majelis GKJ.",
      badge: "Doa & Pendalaman Alkitab",
      accent: "stone",
      calendarTime: {
        start: "20261028T183000",
        end: "20261028T200000",
      },
    },
  ];

  const filtered = schedules.filter((s) => {
    if (activeTab === "all") return true;
    return s.category === activeTab;
  });

  const generateGoogleCalendarUrl = (item: ScheduleItem) => {
    const title = encodeURIComponent(`${item.title} - GKJ Jawa Tengah`);
    const details = encodeURIComponent(
      `${item.description}\n\nLokasi: ${item.location}\nAlamat: Gedung GKJ Manahan, Jl. MT Haryono No. 9, Manahan, Kota Surakarta, Jawa Tengah 57139.`
    );
    const location = encodeURIComponent("GKJ Manahan, Jl. MT Haryono No. 9, Manahan, Kota Surakarta, Jawa Tengah 57139");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${item.calendarTime.start}/${item.calendarTime.end}&details=${details}&location=${location}`;
  };

  return (
    <section id="jadwal" className="py-8 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-700" />
            <span>Wanci Pangibadah Pasamuwan</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Jadwal Kebaktian Rutin GKJ
          </h2>
        </div>

        {/* Filter Tabs with horizontal smooth scrolling on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-stone-200/70 p-1.5 rounded-xl sm:rounded-2xl border border-stone-300/50 overflow-x-auto no-scrollbar max-w-full">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all shrink-0 ${
              activeTab === "all"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Semua ({schedules.length})
          </button>
          <button
            onClick={() => setActiveTab("minggu")}
            className={`px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all shrink-0 ${
              activeTab === "minggu"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Kebaktian Minggu
          </button>
          <button
            onClick={() => setActiveTab("youth_kids")}
            className={`px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all shrink-0 ${
              activeTab === "youth_kids"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Pemuda & Anak
          </button>
          <button
            onClick={() => setActiveTab("doa")}
            className={`px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all shrink-0 ${
              activeTab === "doa"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Adiyuswa & Doa
          </button>
        </div>
      </div>

      {/* Bento Grid for Schedules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bento-card p-4 sm:p-6 md:p-7 flex flex-col justify-between bg-white border border-stone-200/80 group hover:border-amber-700/30 transition-all duration-300"
          >
            <div>
              {/* Card Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                  {item.day}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 sm:px-2.5 py-0.5 rounded-md">
                  {item.badge}
                </span>
              </div>

              {/* Title & Time */}
              <h3 className="font-serif text-base sm:text-xl font-bold text-stone-900 mb-1.5 sm:mb-2 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-900 font-mono font-bold text-base sm:text-lg mb-2.5 sm:mb-3">
                <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-700" />
                <span>{item.time}</span>
              </div>

              {/* Location & Audience */}
              <div className="space-y-1 mb-3 sm:mb-4 text-[11px] sm:text-xs text-stone-600">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-stone-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Users className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-stone-400 shrink-0" />
                  <span>{item.target}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 sm:mb-6">
                {item.description}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-3 sm:pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
              <a
                href={generateGoogleCalendarUrl(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-stone-100 hover:bg-amber-100/70 hover:text-amber-900 text-stone-700 text-[11px] sm:text-xs font-semibold transition-colors"
                title="Tambahkan ke Google Calendar"
              >
                <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-700" />
                <span>+ Google Cal</span>
              </a>

              {item.hasLivestream ? (
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-red-600 hover:text-red-700"
                >
                  <Radio className="w-3 h-3 text-red-600 animate-pulse" />
                  <span>Live Stream</span>
                </a>
              ) : (
                <a
                  href="#kontak"
                  className="text-[11px] sm:text-xs font-semibold text-stone-500 hover:text-stone-800 inline-flex items-center gap-0.5"
                >
                  <span>Petunjuk Rute</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Visitor FAQ Quick Banner */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        <div>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
            Panduan Warga rawuh enggal (Tamu Pertama Kali)
          </div>
          <h4 className="font-serif text-lg sm:text-2xl font-bold mb-1.5 sm:mb-2">
            Sepisanan Rawuh ing GKJ?
          </h4>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Mboten sah kuwatos, sedaya warga tansah nampi kanthi kebak kabingahan. 
            Busana santai, rapi, lan sopan (utawi batik). Tim Penerima Tamu Majelis GKJ badhe mbiyantu Panjenengan manggihaken papan palungguhan ingkang kepenak.
          </p>
        </div>
        <a
          href="https://wa.me/6281226001931?text=Sugeng%20rawuh%20GKJ,%20kula%20badhe%20ndherek%20ngibadah%20sepisanan%20minggu%20punika."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-full sm:w-auto text-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-sm"
        >
          Konfirmasi Kehadiran Tamu
        </a>
      </div>
    </section>
  );
}
