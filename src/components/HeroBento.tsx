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
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function HeroBento() {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate next Sunday service countdown (Minggu 08:30 WIB)
  useEffect(() => {
    function calculateTimeUntilNextService() {
      const now = new Date();
      const target = new Date();
      const currentDay = now.getDay(); // 0 is Sunday
      let daysUntilSunday = (7 - currentDay) % 7;

      if (currentDay === 0) {
        const todayService = new Date(now);
        todayService.setHours(8, 30, 0, 0);
        if (now > todayService) {
          daysUntilSunday = 7;
        }
      }

      target.setDate(now.getDate() + daysUntilSunday);
      target.setHours(8, 30, 0, 0);

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
      "\"Mulané saiki tetep ana telung prakara iki: yaiku pracaya, pangarep-arep lan katresnan; lan kang pinunjul dhéwé yaiku katresnan.\" (1 Korintus 13:13)";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="beranda" className="py-6 sm:py-10 md:py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro Header */}
      <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700" />
            <span>Pasamuwan GKJ • Jawa Tengah</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Ngrembaka ing Iman, <br className="hidden sm:inline" />
            <span className="text-amber-800">Manunggal ing Katresnan</span> Gusti.
          </h1>
        </div>
        <p className="text-stone-600 text-xs sm:text-base max-w-md leading-relaxed">
          Gereja Kristen Jawa (GKJ) ngugemi piwulang Injil Kristus ing satengahing kabudayan Jawi lan bebrayan agung. Sugeng rawuh ing pasamuwan dalem Gusti.
        </p>
      </div>

      {/* Main Bento Grid: Preserves 2-column mobile bento rhythm */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        
        {/* Bento 1: Flagship Hero Sanctuary (Spans 2 cols on mobile, 2 cols on desktop) */}
        <div className="bento-card col-span-2 lg:col-span-2 lg:row-span-2 min-h-[380px] sm:min-h-[460px] md:min-h-[540px] flex flex-col justify-end p-4 sm:p-7 md:p-8 text-white relative group">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sanctuary.jpg"
              alt="Gedung Ibadah GKJ Jawa Tengah"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
            <div className="absolute inset-0 bg-stone-950/20 backdrop-brightness-95" />
          </div>

          <div className="relative z-10 mb-auto flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 border border-white/15 text-[10px] sm:text-xs font-medium">
              <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
              <span>Gereja Terbuka • Berakar dalam Tradisi Injili</span>
            </span>
            <span className="text-[10px] sm:text-xs text-stone-300 font-mono hidden xs:inline-block bg-black/40 px-2 py-0.5 sm:py-1 rounded-md backdrop-blur-xs">
              JAWA TENGAH • SINODE GKJ
            </span>
          </div>

          <div className="relative z-10 space-y-2.5 sm:space-y-4 pt-10 sm:pt-16">
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Sugeng Rawuh ing Pasamuwan GKJ.
            </h2>
            <p className="text-stone-200 text-xs sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
              Kami menyambut Saudara dan keluarga dengan penuh sukacita. 
              Mari bertumbuh bersama dalam kebaktian Basa Jawi maupun Basa Indonesia, mendalami firman Tuhan, dan memelihara paseduluran yang rukun.
            </p>

            <div className="pt-1.5 sm:pt-2 flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#jadwal"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-950" />
                <span>Jadwal Kebaktian Minggu</span>
              </a>
              <a
                href="#profil"
                className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 font-semibold text-xs sm:text-sm transition-all duration-200"
              >
                <span>Mengenal GKJ</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bento 2: Next Service Countdown & Livestream (Spans 2 cols on mobile & desktop) */}
        <div className="bento-card col-span-2 lg:col-span-2 p-4 sm:p-6 md:p-7 flex flex-col justify-between bg-gradient-to-br from-white to-stone-50">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 sm:p-2 rounded-xl bg-amber-500/10 text-amber-800 border border-amber-500/20">
                  <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">
                  Kebaktian Minggu Mendatang
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-red-500/10 text-red-700 text-[10px] sm:text-xs font-semibold border border-red-500/20">
                <Radio className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-red-600 animate-pulse" />
                Live Stream
              </span>
            </div>

            <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 mb-1">
              Ibadah Raya: Minggu Pk 08:30 WIB
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Ibadah Basa Indonesia &middot; Tersedia Ibadah Basa Jawi Pk 06:30 WIB (Kidung Pasamuwan Jawi)
            </p>

            {/* Countdown Grid Units - Stays on 1 row on mobile */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 py-1 sm:py-2 mb-3 sm:mb-4">
              <div className="bg-stone-100/90 border border-stone-200/80 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                <div className="text-base sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.days}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-500 font-medium">Dinten</div>
              </div>
              <div className="bg-stone-100/90 border border-stone-200/80 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                <div className="text-base sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.hours}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-500 font-medium">Jam</div>
              </div>
              <div className="bg-stone-100/90 border border-stone-200/80 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                <div className="text-base sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.minutes}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-500 font-medium">Menit</div>
              </div>
              <div className="bg-stone-100/90 border border-stone-200/80 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                <div className="text-base sm:text-2xl font-bold font-mono text-stone-900">{timeLeft.seconds}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-500 font-medium">Detik</div>
              </div>
            </div>
          </div>

          <div className="pt-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wide transition-colors"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>YouTube Streaming</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#jadwal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs tracking-wide transition-colors"
            >
              <span>Jadwal Basa Jawi & Indo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bento 3: Ayat Renungan (1 Col on mobile, sits side by side with Bento 4) */}
        <div className="bento-card col-span-1 p-3.5 sm:p-6 flex flex-col justify-between bg-white border border-stone-200/70">
          <div>
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="p-1.5 sm:p-2 rounded-xl bg-amber-100/60 text-amber-800">
                <BookOpen className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </span>
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                Sabda
              </span>
            </div>

            <p className="font-serif italic text-stone-800 text-xs sm:text-sm leading-relaxed mb-2 line-clamp-4 sm:line-clamp-none">
              &ldquo;Mulané saiki tetep ana telung prakara iki: yaiku pracaya, pangarep-arep lan katresnan; lan kang pinunjul dhéwé yaiku katresnan.&rdquo;
            </p>
            <div className="text-[10px] sm:text-xs font-semibold text-amber-800 tracking-wide">
              — 1 Korintus 13:13
            </div>
          </div>

          <div className="pt-2 sm:pt-4 mt-auto border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={copyScripture}
              className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-stone-600 hover:text-amber-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Salin</span>
                </>
              )}
            </button>
            <span className="text-[9px] sm:text-[11px] text-stone-400 hidden xs:inline">Alkitab Jawi</span>
          </div>
        </div>

        {/* Bento 4: Layanan Doa & Pastoral (1 Col on mobile, sits side by side with Bento 3) */}
        <div className="bento-card col-span-1 p-3.5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-stone-900 to-stone-950 text-white">
          <div>
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="p-1.5 sm:p-2 rounded-xl bg-white/10 text-amber-300">
                <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Siaga
              </span>
            </div>

            <h4 className="font-serif text-sm sm:text-lg font-bold text-white mb-1 leading-snug">
              Doa & Pastoral
            </h4>
            <p className="text-stone-300 text-[11px] sm:text-sm leading-relaxed mb-3 line-clamp-3 sm:line-clamp-none">
              Pendeta Jemaat dan Majelis GKJ siap melayani perkunjungan dan penguatan.
            </p>
          </div>

          <div className="pt-1">
            <a
              href="https://wa.me/6281226001931?text=Sugeng%20rawuh%20Majelis%20GKJ,%20kula%20nyuwun%20panyengkuyung%20pandonga%20kagem:"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[10px] sm:text-xs tracking-wide transition-all shadow-sm"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
