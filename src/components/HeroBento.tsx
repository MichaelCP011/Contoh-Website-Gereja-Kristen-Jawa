"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Radio,
  BookOpen,
  Copy,
  Check,
  Heart,
  ChevronRight,
  ShieldCheck,
  Users,
  Compass,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function HeroBento() {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate next Sunday 09:30 WIB countdown
  useEffect(() => {
    function calculateTimeUntilNextService() {
      const now = new Date();
      // Target: Next Sunday at 09:30:00
      const target = new Date();
      const currentDay = now.getDay(); // 0 is Sunday
      let daysUntilSunday = (7 - currentDay) % 7;
      
      // If today is Sunday and it's already past 09:30, target next Sunday
      if (currentDay === 0) {
        const todayService = new Date(now);
        todayService.setHours(9, 30, 0, 0);
        if (now > todayService) {
          daysUntilSunday = 7;
        }
      }

      target.setDate(now.getDate() + daysUntilSunday);
      target.setHours(9, 30, 0, 0);

      const diff = target.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }

    calculateTimeUntilNextService();
    const timer = setInterval(calculateTimeUntilNextService, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyScripture = () => {
    const text =
      "\"Aku memberikan perintah baru kepada kamu, yaitu supaya kamu saling mengasihi; sama seperti Aku telah mengasihi kamu demikian pula kamu harus saling mengasihi. Dengan hal itu semua orang akan tahu, bahwa kamu adalah murid-murid-Ku, yaitu jikalau kamu saling mengasihi.\" — Yohanes 13:34-35";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="beranda" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Keluarga Allah di Tengah Kota</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Bertumbuh dalam Iman, <br className="hidden sm:inline" />
            <span className="text-amber-800">Menyatakan Kasih</span> yang Nyata.
          </h1>
        </div>
        <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
          Gereja yang berkomitmen menyajikan firman yang mendalam, pujian yang menyembah, serta komunitas hangat tempat setiap orang diterima apa adanya.
        </p>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
        
        {/* Bento 1: Flagship Hero Sanctuary (Spans 2 cols, 2 rows on desktop) */}
        <div className="bento-card lg:col-span-2 lg:row-span-2 min-h-[460px] md:min-h-[540px] flex flex-col justify-end p-6 sm:p-8 text-white relative group">
          {/* Background Image with optimized Next.js Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sanctuary.jpg"
              alt="Gedung Ruang Ibadah Gereja GKKA"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Architectural gradient overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
            <div className="absolute inset-0 bg-stone-950/20 backdrop-brightness-95" />
          </div>

          {/* Top Floating Badge inside Image Card */}
          <div className="relative z-10 mb-auto flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 border border-white/15 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Gereja Terbuka & Ramah Semua Generasi</span>
            </span>
            <span className="text-xs text-stone-300 font-mono hidden sm:inline-block bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
              EST. 1998 • JAKARTA
            </span>
          </div>

          {/* Bottom Card Content */}
          <div className="relative z-10 space-y-4 pt-16">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Selamat Datang di Rumah Tuhan.
            </h2>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
              Kami menyambut Anda, keluarga Anda, dan sahabat Anda untuk beribadah bersama. 
              Temukan kedamaian, penghiburan firman Tuhan, dan persahabatan sejati di tengah hiruk-pikuk kehidupan kota.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#jadwal"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 text-stone-950" />
                <span>Lihat 4 Sesi Ibadah</span>
              </a>
              <a
                href="#profil"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 font-semibold text-sm transition-all duration-200"
              >
                <span>Mengenal Kami</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bento 2: Next Service Countdown & Livestream (Spans 2 cols on desktop) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-white to-stone-50">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-800 border border-amber-500/20">
                  <Clock className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Ibadah Raya Berikutnya
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 text-red-700 text-xs font-semibold border border-red-500/20">
                <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                Live Broadcast
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-1">
              Ibadah Raya 2: Minggu Pk 09:30 WIB
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-4">
              Tema Khotbah: <strong className="text-stone-800">“Berakar Teguh di Tengah Badai Hidup”</strong> (Pdt. Dr. Andreas Santoso)
            </p>

            {/* Countdown Grid Units */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 py-2 mb-4">
              <div className="bg-stone-100/80 border border-stone-200/80 rounded-2xl p-2.5 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.days}</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Hari</div>
              </div>
              <div className="bg-stone-100/80 border border-stone-200/80 rounded-2xl p-2.5 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.hours}</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Jam</div>
              </div>
              <div className="bg-stone-100/80 border border-stone-200/80 rounded-2xl p-2.5 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.minutes}</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Menit</div>
              </div>
              <div className="bg-stone-100/80 border border-stone-200/80 rounded-2xl p-2.5 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.seconds}</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Detik</div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wide transition-colors"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Kanal YouTube Streaming</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#jadwal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs tracking-wide transition-colors"
            >
              <span>Semua Jam Ibadah</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bento 3: Daily Scripture / Ayat Firman (1 Col) */}
        <div className="bento-card p-6 flex flex-col justify-between bg-white border border-stone-200/70">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-amber-100/60 text-amber-800">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                Ayat Renungan
              </span>
            </div>

            <p className="font-serif italic text-stone-800 text-sm sm:text-base leading-relaxed mb-3">
              &ldquo;Aku memberikan perintah baru kepada kamu, yaitu supaya kamu saling mengasihi; sama seperti Aku telah mengasihi kamu demikian pula kamu harus saling mengasihi.&rdquo;
            </p>
            <div className="text-xs font-semibold text-amber-800 tracking-wide">
              — Yohanes 13:34
            </div>
          </div>

          <div className="pt-4 mt-auto border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={copyScripture}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-amber-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Ayat</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-stone-600">Alkitab Terjemahan Baru</span>
          </div>
        </div>

        {/* Bento 4: Pastoral Hotline / Doa 24 Jam (1 Col) */}
        <div className="bento-card p-6 flex flex-col justify-between bg-gradient-to-br from-stone-900 to-stone-950 text-white">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-white/10 text-amber-300">
                <Heart className="w-4 h-4" />
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Siap Melayani
              </span>
            </div>

            <h4 className="font-serif text-lg font-bold text-white mb-1.5">
              Butuh Dukungan Doa?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
              Tim pendoa syafaat dan hamba Tuhan kami siap mendengarkan, mendoakan, dan menguatkan Anda dalam setiap pergumulan.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/6281288997700?text=Halo%20Pastoral%20Care%20GKKA,%20saya%20rindu%20didukung%20dalam%20doa%20untuk%20perkara:"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-all shadow-sm"
            >
              <span>WhatsApp Pastoral Care</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
