"use client";

import Image from "next/image";
import {
  Heart,
  Target,
  Compass,
  Award,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function ProfileBento() {
  const gkjValues = [
    {
      title: "Pracaya (Iman)",
      sub: "Berakar dalam Kristus",
      desc: "Ngugemi Injil Kasih Karunia Gusti Yesus minangka dhasar gesang padintenan.",
    },
    {
      title: "Paseduluran",
      sub: "Guyub Rukun Warga",
      desc: "Membangun persaudaraan jemaat yang erat, saling mengunjungi dan peduli (sambang-tinimbang).",
    },
    {
      title: "Ugahari",
      sub: "Kesederhanaan Hidup",
      desc: "Pola hidup bersahaja, tulus, dan bertanggung jawab menjaga kelestarian bumi ciptaan.",
    },
    {
      title: "Nguri-uri Budaya",
      sub: "Kontekstual Budaya Jawa",
      desc: "Menghargai seni budaya, bahasa Jawa, dan karawitan sebagai sarana memuliakan Tuhan.",
    },
    {
      title: "Diakonia Asih",
      sub: "Belarasa Kemanusiaan",
      desc: "Tanggap pada penderitaan sesama tanpa memandang latar belakang suku dan agama.",
    },
  ];

  const facilities = [
    { name: "Gedung Ibadah Utama (Arsitektur Perpaduan Jawa-Modern)", tag: "Kapasitas 1.000" },
    { name: "Seperangkat Gamelan Pelog Slendro Karawitan Rohani", tag: "Warisan Budaya" },
    { name: "Gedung Pertemuan / Pendopo Pasamuwan GKJ", tag: "Serbaguna" },
    { name: "Ruang Komisi Anak / Sekolah Minggu Ber-AC & Aman", tag: "Ramah Anak" },
    { name: "Ramp & Jalur Khusus Ramah Warga Adiyuswa (Lansia) / Kursi Roda", tag: "Aksesibilitas 100%" },
    { name: "Area Parkir Luas untuk Mobil, Sepeda Motor & Bus Rombongan", tag: "Aman & Terjaga" },
  ];

  return (
    <section id="profil" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
          <Target className="w-3.5 h-3.5 text-amber-700" />
          <span>Profil Pasamuwan</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4">
          Mengenal Lebih Dekat <br />
          <span className="text-amber-800">GKJ (Gereja Kristen Jawa)</span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Gereja Kristen Jawa (GKJ) minangka pasamuwan Kristen Reformis kanthi tata gereja Presbiterial Sinodal, tuwuh ngrembaka ing satengahing kabudayan Jawa Tengah lan Ngayogyakarta.
        </p>
      </div>

      {/* Bento Grid Layout for Profile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Bento Card 1: Visi & 3 Pilar Misi GKJ (Spans 2 cols on lg) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200/60">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  Pandom Gesang Pasamuwan
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Visi & Misi Sinode GKJ
                </h3>
              </div>
            </div>

            {/* Vision Banner */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                Visi Pasamuwan
              </div>
              <p className="font-serif text-base sm:text-lg text-stone-900 font-semibold leading-relaxed">
                &ldquo;Dados pasamuwan ingkang tansah nuwuhaken, ngrawat, lan ngrembakakaken kagesangan ing satengahing bebrayan agung kanthi dhasar katresnanipun Gusti Yesus Kristus.&rdquo;
              </p>
            </div>

            {/* 3 Mission Pillars */}
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Tiga Pilar Panggilan Pelayanan (Tri Tugas Gereja)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  01
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Marturia (Kesaksian)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Kekancingan Injil karukunan lan tentrem rahayu ing satengahing masyarakat maneka warna.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  02
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Koinonia (Persekutuan)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ngreksa paseduluran ing paguyuban wilayah, komisi kategorial, lan jemaat kanthi guyub rukun.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-2">
                  03
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Diakonia (Pelayanan)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Nyataake asih lumantar pitulungan sosial, beasiswa, kesehatan, lan njaga kalestaren alam.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Bernaung di Bawah Sinode Gereja-Gereja Kristen Jawa (GKJ)</span>
            <span className="font-mono text-stone-400">Efesus 4:15-16</span>
          </div>
        </div>

        {/* Bento Card 2: Pastoral Welcome (Pendeta & Majelis GKJ) */}
        <div className="bento-card p-6 sm:p-7 flex flex-col justify-between bg-stone-900 text-white relative">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-white/10 text-amber-400">
                <Heart className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Paweling Majelis Pasamuwan
              </span>
            </div>

            <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-white/10">
              <Image
                src="/images/fellowship.jpg"
                alt="Persekutuan Warga Pasamuwan GKJ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-xs font-semibold text-white drop-shadow-md">
                Pdt. Retno Rumpoko, S.Th & Majelis GKJ
              </div>
            </div>

            <h3 className="font-serif text-lg font-bold text-white mb-2">
              &ldquo;Gereja Minangka Bale Katresnan Gusti.&rdquo;
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Mboten wonten ingkang lamis ing ngarsanipun Gusti. Pasamuwan GKJ kabikak kagem sinten kemawon ingkang ngelak dhumateng toya kagesangan lan rindu paseduluran sejati.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-400">Pdt. Retno Rumpoko, S.Th</div>
              <div className="text-[10px] text-stone-400">Pendeta Jemaat GKJ</div>
            </div>
            <a
              href="#kontak"
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Hubungi Majelis
            </a>
          </div>
        </div>

        {/* Bento Card 3: Nilai-Nilai Luhur GKJ (Spans 2 cols on lg) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                Karakter & Nilai Luhur
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Nilai Pasamuwan GKJ
              </h3>
            </div>
            <span className="text-xs font-semibold text-stone-600 px-3 py-1 bg-stone-100 rounded-full">
              Paseduluran & Kasih
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {gkjValues.map((v, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#FBFBFA] border border-stone-200/70 hover:border-amber-400/60 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-700 text-white font-serif font-bold text-sm flex items-center justify-center mb-2 shadow-xs">
                  0{i + 1}
                </div>
                <div className="font-bold text-stone-900 text-sm">{v.title}</div>
                <div className="text-[11px] text-amber-800 font-medium mb-1">{v.sub}</div>
                <div className="text-xs text-stone-600 leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Card 4: Sejarah GKJ (1 Col) */}
        <div className="bento-card p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-amber-900 to-stone-900 text-white">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-white/10 text-amber-300">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Sejarah Pasamuwan
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-300 mb-1">
              Sejak 1931
            </div>
            <div className="text-sm font-semibold text-stone-200 mb-3">
              Pelembagaan Sinode GKJ
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
              Sinode Gereja-Gereja Kristen Jawa resmi dilembagakan pada 17 Februari 1931 di Kebumen, berakar dari gerakan kekristenan pribumi di Jawa Tengah sejak pertengahan abad ke-19.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs text-stone-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>&ldquo;Urip iku urup, dadi pepadhang tumrap sesama.&rdquo;</span>
          </div>
        </div>

        {/* Bento Card 5: Fasilitas Gedung GKJ & Aksesibilitas (Full Width / 3 cols) */}
        <div className="bento-card lg:col-span-3 p-6 sm:p-8 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-700" />
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  Fasilitas & Sarana Ibadah
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Sarana Gedung Pasamuwan GKJ
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 w-fit">
              100% Ramah Warga Adiyuswa (Lansia) & Difabel
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
