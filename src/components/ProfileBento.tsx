"use client";

import Image from "next/image";
import {
  Heart,
  Target,
  Sparkles,
  ShieldCheck,
  Compass,
  Users,
  Award,
  BookOpen,
  Coffee,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function ProfileBento() {
  const coreValues = [
    {
      letter: "G",
      title: "Generous",
      desc: "Murah hati dalam waktu, talenta, dan sumber daya untuk sesama.",
    },
    {
      letter: "R",
      title: "Relational",
      desc: "Membangun persahabatan yang tulus, bukan sekadar relasi seremonial.",
    },
    {
      letter: "A",
      title: "Authentic",
      desc: "Hidup jujur dan apa adanya di hadapan Tuhan dan sesama jemaat.",
    },
    {
      letter: "C",
      title: "Christ-Centered",
      desc: "Yesus Kristus adalah pusat ajaran, teladan kasih, dan tujuan hidup kami.",
    },
    {
      letter: "E",
      title: "Empowering",
      desc: "Memperlengkapi setiap anggota agar menemukan panggilan dan melayani.",
    },
  ];

  const facilities = [
    { name: "Main Sanctuary Ber-AC (Kapasitas 800 Jemaat)", tag: "Akustik Nyaman" },
    { name: "Superbook Kids Church Ramah & Aman", tag: "Area Terpisah" },
    { name: "Ruang Laktasi / Nursing Room Khusus Ibu & Bayi", tag: "Privat" },
    { name: "Lift & Akses Ramah Disabilitas / Lansia", tag: "Akses Kursi Roda" },
    { name: "Parkir Basement Luas (300 Mobil & 500 Motor)", tag: "Gratis & Terjaga" },
    { name: "Ruang Konseling & Fellowship Café", tag: "Kopi & Teh Gratis" },
  ];

  return (
    <section id="profil" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
          <Target className="w-3.5 h-3.5 text-amber-700" />
          <span>Profil & Identitas Gereja</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4">
          Mengenal Lebih Dekat <br />
          <span className="text-amber-800">GKKA Indonesia</span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Kami adalah gereja lokal yang berkomitmen memuliakan Allah dengan memberitakan Injil kasih karunia Yesus Kristus, mendewasakan jemaat, dan membawa dampak nyata bagi lingkungan sekitar.
        </p>
      </div>

      {/* Bento Grid Layout for Profile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Bento Card 1: Visi & 3 Pilar Misi (Spans 2 cols on lg) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/60">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  Arah & Panduan Rohani
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Visi & Misi Kami
                </h3>
              </div>
            </div>

            {/* Vision Banner */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                Visi Kerajaan Allah
              </div>
              <p className="font-serif text-base sm:text-lg text-stone-900 font-semibold leading-relaxed">
                &ldquo;Menjadi jemaat yang berakar dalam Firman, berakar dalam kasih Kristus, dan berbuah nyata bagi transformasi kota dan bangsa.&rdquo;
              </p>
            </div>

            {/* 3 Mission Pillars */}
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Tiga Pilar Misi Gereja
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  01
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Penyembahan</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Menyembah Allah Bapa, Anak, dan Roh Kudus dalam roh dan kebenaran secara autentik.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  02
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Persekutuan</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Membangun jemaat saling mengasihi, peduli, dan mendoakan dalam kelompok kecil Komunitas Sel.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  03
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Pelayanan & Misi</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Menjadi garam dan terang melalui aksi sosial, beasiswa, dan pemberitaan Injil ke segala bangsa.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Berlandaskan Alkitab sebagai Firman Allah yang Hidup</span>
            <span className="font-mono text-stone-400">2 Timotius 3:16-17</span>
          </div>
        </div>

        {/* Bento Card 2: Pastoral Welcome (Senior Pastor) */}
        <div className="bento-card p-6 sm:p-7 flex flex-col justify-between bg-stone-900 text-white relative">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-white/10 text-amber-400">
                <Heart className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Sambutan Gembala Sidang
              </span>
            </div>

            <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-white/10">
              <Image
                src="/images/fellowship.jpg"
                alt="Persekutuan Jemaat dan Pastoral Gereja"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-xs font-semibold text-white drop-shadow-md">
                Pdt. Dr. Andreas Santoso, M.Th & Ibu Maria
              </div>
            </div>

            <h3 className="font-serif text-lg font-bold text-white mb-2">
              &ldquo;Gereja Bukanlah Gedung, Melainkan Keluarga.&rdquo;
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Kami percaya tidak ada kebetulan saat Anda berkunjung ke situs ini. 
              Kerinduan kami adalah setiap jiwa yang melangkah masuk ke pintu gereja merasakan penerimaan, pengharapan baru, dan kasih karunia Kristus.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-400">Pdt. Dr. Andreas Santoso</div>
              <div className="text-[10px] text-stone-400">Gembala Sidang GKKA Indonesia</div>
            </div>
            <a
              href="#kontak"
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Hubungi Pastoral
            </a>
          </div>
        </div>

        {/* Bento Card 3: 5 Nilai Inti (Core Values G-R-A-C-E) - Spans 2 cols on lg */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                Budaya & Karakter Jemaat
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                5 Nilai Inti: G.R.A.C.E
              </h3>
            </div>
            <span className="text-xs font-semibold text-stone-600 px-3 py-1 bg-stone-100 rounded-full">
              Karakter Kristus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {coreValues.map((v) => (
              <div
                key={v.letter}
                className="p-4 rounded-2xl bg-[#FBFBFA] border border-stone-200/70 hover:border-amber-400/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-700 text-white font-serif font-bold text-lg flex items-center justify-center mb-3 shadow-xs">
                  {v.letter}
                </div>
                <div className="font-bold text-stone-900 text-sm mb-1">{v.title}</div>
                <div className="text-xs text-stone-600 leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Card 4: 28 Tahun Perjalanan Iman (1 Col) */}
        <div className="bento-card p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-amber-900 to-stone-900 text-white">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-white/10 text-amber-300">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Sejarah & Tonggak Sejarah
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-300 mb-1">
              28 Tahun
            </div>
            <div className="text-sm font-semibold text-stone-200 mb-3">
              Kesetiaan Allah Sejak 1998
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
              Bermula dari persekutuan doa sederhana 12 jemaat di sebuah rumah tinggal, Tuhan memimpin GKKA hingga kini menjadi rumah rohani bagi lebih dari 1.800 jiwa dari berbagai suku dan generasi.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs text-stone-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>&ldquo;Eben-Haezer: Sampai di sini Tuhan menolong kita.&rdquo;</span>
          </div>
        </div>

        {/* Bento Card 5: Fasilitas Gereja & Aksesibilitas (Full Width / 3 cols) */}
        <div className="bento-card lg:col-span-3 p-6 sm:p-8 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-700" />
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  Kenyamanan & Keamanan Ibadah
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Fasilitas Gedung Gereja & Layanan Jemaat
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 w-fit">
              100% Akses Ramah Difabel & Lansia
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/60 flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900 text-xs sm:text-sm leading-snug">
                      {f.name}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-200/80 text-stone-700 shrink-0">
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
