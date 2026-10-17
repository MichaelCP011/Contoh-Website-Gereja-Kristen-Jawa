"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Radio,
  Users,
  Sparkles,
  ChevronRight,
  Baby,
  Flame,
  HeartHandshake,
  Check,
  ExternalLink,
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
  const [copiedScheduleId, setCopiedScheduleId] = useState<string | null>(null);

  const schedules: ScheduleItem[] = [
    {
      id: "ibadah-raya-1",
      category: "minggu",
      title: "Ibadah Raya 1 (Umum & Lansia)",
      day: "Setiap Hari Minggu",
      time: "07:00 - 08:30 WIB",
      location: "Main Sanctuary (Lantai 3)",
      target: "Jemaat Dewasa, Lansia & Keluarga",
      description: "Suasana ibadah khidmat dan teduh dengan nyanyian himne serta firman ekspositori. Tersedia penerjemahan langsung bahasa Mandarin.",
      badge: "Onsite Sanctuary",
      accent: "stone",
      calendarTime: {
        start: "20261025T070000",
        end: "20261025T083000",
      },
    },
    {
      id: "ibadah-raya-2",
      category: "minggu",
      title: "Ibadah Raya 2 (Keluarga & Utama)",
      day: "Setiap Hari Minggu",
      time: "09:30 - 11:15 WIB",
      location: "Main Sanctuary (Lantai 3)",
      target: "Keluarga, Profesional Muda & Jemaat Umum",
      description: "Ibadah pujian kontemporer penuh sukacita, khotbah tematik mendalam, disertai Sekolah Minggu Anak (Superbook Kids) serentak.",
      badge: "Onsite & Live Streaming",
      hasLivestream: true,
      accent: "amber",
      calendarTime: {
        start: "20261025T093000",
        end: "20261025T111500",
      },
    },
    {
      id: "ibadah-raya-3",
      category: "minggu",
      title: "Ibadah Raya 3 (Bilingual / English)",
      day: "Setiap Hari Minggu",
      time: "16:30 - 18:00 WIB",
      location: "Main Sanctuary (Lantai 3)",
      target: "Mahasiswa, Profesional & Jemaat Internasional",
      description: "Contemporary English & Indonesian service with modern acoustic worship, biblical preaching, and post-service coffee fellowship.",
      badge: "Bilingual Service",
      accent: "stone",
      calendarTime: {
        start: "20261025T163000",
        end: "20261025T180000",
      },
    },
    {
      id: "superbook-kids",
      category: "youth_kids",
      title: "Superbook Kids Church (Sekolah Minggu)",
      day: "Setiap Hari Minggu",
      time: "09:30 - 11:15 WIB",
      location: "Kids Center (Lantai 1)",
      target: "Anak Balita, Pratama (Kelas 1-3) & Madya (Kelas 4-6)",
      description: "Kurikulum interaktif Alkitab bergambar, animasi Superbook, kelas usia ber-AC, dan guru sekolah minggu berdedikasi tinggi.",
      badge: "Ramah Anak & Terjaga",
      accent: "emerald",
      calendarTime: {
        start: "20261025T093000",
        end: "20261025T111500",
      },
    },
    {
      id: "ignite-youth",
      category: "youth_kids",
      title: "Ignite Youth & Teen Service",
      day: "Setiap Hari Sabtu Sore",
      time: "17:00 - 19:00 WIB",
      location: "Youth Chapel (Lantai 2)",
      target: "Remaja SMP, SMA & Mahasiswa Kampus",
      description: "Worship energik, khotbah relevan pergumulan masa muda, kelompok tumbuh bersama, dan games seru.",
      badge: "Generasi Muda",
      accent: "amber",
      calendarTime: {
        start: "20261024T170000",
        end: "20261024T190000",
      },
    },
    {
      id: "menara-doa",
      category: "doa",
      title: "Menara Doa & Pemulihan (Midweek Prayer)",
      day: "Setiap Hari Rabu Malam",
      time: "19:00 - 20:30 WIB",
      location: "Chapel Daud (Lantai 2) / Hybrid Zoom",
      target: "Seluruh Jemaat & Siapa Saja yang Butuh Penguatan",
      description: "Waktu teduh di tengah pekan untuk berdoa syafaat bagi bangsa, keluarga, kesembuhan orang sakit, dan pendalaman Alkitab ayat demi ayat.",
      badge: "Doa & Syafaat",
      accent: "stone",
      calendarTime: {
        start: "20261028T190000",
        end: "20261028T203000",
      },
    },
  ];

  const filtered = schedules.filter((s) => {
    if (activeTab === "all") return true;
    return s.category === activeTab;
  });

  const generateGoogleCalendarUrl = (item: ScheduleItem) => {
    const title = encodeURIComponent(`${item.title} - GKKA Indonesia`);
    const details = encodeURIComponent(
      `${item.description}\n\nLokasi: ${item.location}\nAlamat: Gedung Gereja GKKA, Jl. Boulevard Kasih Harmoni No. 12-14, Jakarta Pusat.`
    );
    const location = encodeURIComponent("GKKA Indonesia, Jl. Boulevard Kasih Harmoni No. 12-14, Jakarta Pusat");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${item.calendarTime.start}/${item.calendarTime.end}&details=${details}&location=${location}`;
  };

  return (
    <section id="jadwal" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Waktu Kebaktian & Doa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Jadwal Ibadah Rutin
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-stone-200/70 p-1.5 rounded-2xl border border-stone-300/50">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Semua ({schedules.length})
          </button>
          <button
            onClick={() => setActiveTab("minggu")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "minggu"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Ibadah Minggu
          </button>
          <button
            onClick={() => setActiveTab("youth_kids")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "youth_kids"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Youth & Kids
          </button>
          <button
            onClick={() => setActiveTab("doa")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "doa"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Doa Tengah Pekan
          </button>
        </div>
      </div>

      {/* Bento Grid for Schedules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bento-card p-6 sm:p-7 flex flex-col justify-between bg-white border border-stone-200/80 group hover:border-amber-700/30 transition-all duration-300"
          >
            <div>
              {/* Card Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-lg">
                  {item.day}
                </span>
                <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-md">
                  {item.badge}
                </span>
              </div>

              {/* Title & Time */}
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-stone-900 font-mono font-bold text-lg mb-3">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{item.time}</span>
              </div>

              {/* Location & Audience */}
              <div className="space-y-1.5 mb-4 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{item.target}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
              <a
                href={generateGoogleCalendarUrl(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-amber-100/70 hover:text-amber-900 text-stone-700 text-xs font-semibold transition-colors"
                title="Tambahkan ke Google Calendar"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>+ Google Calendar</span>
              </a>

              {item.hasLivestream ? (
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700"
                >
                  <Radio className="w-3 h-3 text-red-600 animate-pulse" />
                  <span>Live Stream</span>
                </a>
              ) : (
                <a
                  href="#kontak"
                  className="text-xs font-semibold text-stone-500 hover:text-stone-800 inline-flex items-center gap-0.5"
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
      <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
            Panduan Jemaat Baru & Tamu Pertama Kali
          </div>
          <h4 className="font-serif text-xl sm:text-2xl font-bold mb-2">
            Pertama Kali Berkunjung ke GKKA?
          </h4>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Tidak perlu khawatir atau merasa sungkan. Kenakan pakaian santai yang sopan dan rapi. 
            Tim penyambut (Usher) kami akan menyapa di pintu masuk dan membantu Anda menemukan tempat duduk yang nyaman.
          </p>
        </div>
        <a
          href="https://wa.me/6281288997700?text=Halo%20GKKA,%20saya%20berencana%20hadir%20pertama%20kali%20pada%20ibadah%20minggu%20ini.%20Apakah%20bisa%20dibantu%20informasinya?"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-sm"
        >
          Konfirmasi Kunjungan Tamu
        </a>
      </div>
    </section>
  );
}
