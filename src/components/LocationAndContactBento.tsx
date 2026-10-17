"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Send,
  CreditCard,
  CheckCircle2,
  Car,
  Train,
} from "lucide-react";
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  SpotifyIcon,
  WhatsAppIcon,
} from "./SocialIcons";

export default function LocationAndContactBento() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "doa",
    message: "",
  });

  const fullAddress =
    "Gedung GKJ Manahan, Jl. MT Haryono No. 9, Kel. Manahan, Kec. Banjarsari, Kota Surakarta (Solo), Jawa Tengah 57139";

  const copyToClipboard = (text: string, type: "address" | "jateng" | "bca") => {
    navigator.clipboard.writeText(text);
    if (type === "address") {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } else {
      setCopiedBank(type);
      setTimeout(() => setCopiedBank(null), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const socialChannels = [
    {
      name: "YouTube GKJ",
      handle: "@GKJManahanOfficial",
      role: "Live Streaming Ibadah Basa Jawi & Indo",
      href: "https://youtube.com",
      icon: YoutubeIcon,
      accent: "hover:bg-red-50 hover:border-red-200 text-red-600",
    },
    {
      name: "Instagram GKJ",
      handle: "@gkjmanahan",
      role: "Renungan Harian & Pawarta Pasamuwan",
      href: "https://instagram.com",
      icon: InstagramIcon,
      accent: "hover:bg-pink-50 hover:border-pink-200 text-pink-600",
    },
    {
      name: "TikTok Pemuda",
      handle: "@kpgkjmanahan",
      role: "Inspirasi Rohani Remaja-Pemuda GKJ",
      href: "https://tiktok.com",
      icon: TikTokIcon,
      accent: "hover:bg-stone-100 hover:border-stone-300 text-stone-900",
    },
    {
      name: "Facebook GKJ",
      handle: "GKJ Manahan Solo",
      role: "Kabar Pasamuwan & Album Foto Jemaat",
      href: "https://facebook.com",
      icon: FacebookIcon,
      accent: "hover:bg-blue-50 hover:border-blue-200 text-blue-600",
    },
    {
      name: "Spotify Podcast",
      handle: "Kidung Rohani GKJ",
      role: "Audio Khotbah & Gamelan Rohani",
      href: "https://spotify.com",
      icon: SpotifyIcon,
      accent: "hover:bg-emerald-50 hover:border-emerald-200 text-emerald-600",
    },
    {
      name: "WhatsApp Kantor",
      handle: "+62 812-2600-1931",
      role: "Sekretariat & Pelayanan Doa Majelis",
      href: "https://wa.me/6281226001931",
      icon: WhatsAppIcon,
      accent: "hover:bg-emerald-50 hover:border-emerald-200 text-emerald-700",
    },
  ];

  return (
    <section id="kontak" className="py-8 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-700" />
            <span>Papan Dununging Pasamuwan</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Lokasi Peta & Saluran Media Sosial
          </h2>
        </div>
        <p className="text-stone-600 text-xs sm:text-base max-w-md leading-relaxed">
          Papan dununging gedhong pasamuwan GKJ ing Jawa Tengah, pitedah lampah tumuju greja, saluran warta resmi, sarta panyuwunan pandonga.
        </p>
      </div>

      {/* Main Bento Grid: 2 cols on mobile, 4 cols on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">

        {/* Bento 1: Interactive Google Maps & Address (Spans 2 cols on mobile, 2 cols on lg) */}
        <div className="bento-card col-span-2 lg:col-span-2 lg:row-span-2 p-4 sm:p-7 md:p-8 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-900">
                  <Navigation className="w-4 sm:w-5 h-4 sm:h-5" />
                </span>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                    Peta Interaktif Jawa Tengah
                  </span>
                  <h3 className="font-serif text-base sm:text-2xl font-bold text-stone-900">
                    Gedhong Pasamuwan GKJ
                  </h3>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-amber-900 bg-amber-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-200">
                Surakarta
              </span>
            </div>

            {/* Google Maps Responsive Embed Container for Central Java */}
            <div className="w-full h-52 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/80 mb-3 sm:mb-5 relative bg-stone-100">
              <iframe
                title="Peta Lokasi GKJ Manahan Surakarta Jawa Tengah"
                src="https://maps.google.com/maps?q=GKJ%20Manahan%20Surakarta%20Jawa%20Tengah&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[10%] contrast-[105%]"
              ></iframe>
            </div>

            {/* Address Details */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200/80 mb-3 sm:mb-4">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500 mb-0.5 sm:mb-1">
                Alamat Gedung Lengkap
              </div>
              <div className="font-medium text-stone-900 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                {fullAddress}
              </div>

              {/* Transportation Details for Central Java / Solo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-2 border-t border-stone-200/60 text-[11px] sm:text-xs text-stone-600">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Train className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-700 shrink-0" />
                  <span>800m saka Stasiun Solo Balapan / Purwosari</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Car className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-700 shrink-0" />
                  <span>Caket Stadion Manahan, Parkir Jembar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="pt-1 flex flex-wrap gap-2">
            <a
              href="https://maps.google.com/?q=GKJ+Manahan+Surakarta+Jawa+Tengah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[11px] sm:text-xs transition-colors"
            >
              <Navigation className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://waze.com/ul?q=GKJ+Manahan+Surakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold text-[11px] sm:text-xs transition-colors"
            >
              <span>Waze</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
            <button
              onClick={() => copyToClipboard(fullAddress, "address")}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-[11px] sm:text-xs transition-colors"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>Salin Alamat</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bento 2: Media Sosial Hub (Spans 2 cols, 2-column buttons on mobile!) */}
        <div className="bento-card col-span-2 lg:col-span-2 p-4 sm:p-7 md:p-8 bg-white border border-stone-200/80">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                Saluran Informasi Resmi
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900">
                Media Sosial Pasamuwan GKJ
              </h3>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
              Warta Dinten Punika
            </span>
          </div>

          {/* Preserves 2-column grid layout on mobile! */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {socialChannels.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200/60 transition-all duration-200 flex items-start gap-2 sm:gap-3 group ${s.accent}`}
                >
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white border border-stone-200/80 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-stone-900 font-bold text-[11px] sm:text-xs truncate">
                      <span>{s.name}</span>
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" />
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-amber-800 font-semibold truncate">
                      {s.handle}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-stone-500 leading-tight mt-0.5 line-clamp-1 hidden xs:block">
                      {s.role}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bento 3: Prayer Request & Connect Form (Spans 2 cols) */}
        <div className="bento-card col-span-2 lg:col-span-2 p-4 sm:p-7 md:p-8 bg-gradient-to-br from-[#FAFAF8] to-white border border-stone-200/80">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-800 border border-amber-500/20">
              <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                Panyuwunan Pandonga
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900">
                Kirim Pokok Doa / Warta Majelis
              </h3>
            </div>
          </div>

          {formSubmitted ? (
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2.5 sm:space-y-3 my-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-emerald-950">
                Matur Nuwun, Pokok Doa Sampun Ditampi
              </h4>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                Pendeta Jemaat sarta Majelis GKJ badhe ngaturaken panyuwunan pandonga panjenengan <strong>{formData.name}</strong> wonten ing ngarsanipun Gusti.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", phone: "", category: "doa", message: "" });
                  }}
                  className="text-xs font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  Kirim Pandonga Sanesipun
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Raden Mas Wahyu Nugroho"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                  Kategori Kebutuhan
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                >
                  <option value="doa">Panyuwunan Pandonga (Kesehatan / Kulawarga / Pakaryan)</option>
                  <option value="wilayah">Pendaftaran Paguyuban Wilayah / Blok GKJ</option>
                  <option value="konseling">Konseling Pastoral kaliyan Pendeta Jemaat</option>
                  <option value="tamu">Kula Warga Enggal / Tamu Sepisanan</option>
                  <option value="sidi">Pendaftaran Katekisasi Sidi / Baptis Dewasa</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                  Pokok Doa / Warta Panjenengan
                </label>
                <textarea
                  rows={2}
                  placeholder="Serataken pokok pandonga utawi pitakenan panjenengan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white resize-none"
                ></textarea>
              </div>

              <div className="pt-0.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[10px] sm:text-[11px] text-stone-500">
                  Data kajagi rahasia dening Majelis Pasamuwan GKJ.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Dateng Majelis</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bento 4: Rekening Persembahan & Jam Kantor GKJ (Spans 2 cols, 2-column bank cards on mobile!) */}
        <div className="bento-card col-span-2 lg:col-span-2 p-4 sm:p-7 md:p-8 bg-white border border-stone-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 sm:w-5 h-4 sm:h-5 text-amber-800" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                  Rekening Pisungsung GKJ
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                GKJ Jawa Tengah
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed mb-3 sm:mb-4">
              Kagem warga pasamuwan ingkang ngaturaken pisungsung bulanan, perpuluhan, sarta diakonia lumantar transfer bank:
            </p>

            {/* Preserves 2-column grid layout on mobile phones! */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-5">
              {/* Bank Jateng */}
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-amber-900 uppercase">Bank Jateng</div>
                  <div className="font-mono text-xs sm:text-base font-bold text-stone-900 tracking-wider my-0.5">
                    1012-00889-1
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-stone-600 mb-2 truncate">a/n GKJ Manahan</div>
                </div>
                <button
                  onClick={() => copyToClipboard("1012008891", "jateng")}
                  className="w-full text-center py-1 sm:py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-[10px] sm:text-[11px] transition-colors"
                >
                  {copiedBank === "jateng" ? "Tersalin!" : "Salin Bank Jateng"}
                </button>
              </div>

              {/* Bank BCA */}
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-stone-500 uppercase">Bank BCA Solo</div>
                  <div className="font-mono text-xs sm:text-base font-bold text-stone-900 tracking-wider my-0.5">
                    015-392-8811
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-stone-600 mb-2 truncate">a/n GKJ Solo</div>
                </div>
                <button
                  onClick={() => copyToClipboard("0153928811", "bca")}
                  className="w-full text-center py-1 sm:py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-[10px] sm:text-[11px] transition-colors"
                >
                  {copiedBank === "bca" ? "Tersalin!" : "Salin BCA"}
                </button>
              </div>
            </div>

            {/* Jam Operasional Kantor Sekretariat GKJ */}
            <div className="pt-2 sm:pt-3 border-t border-stone-100">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-stone-800 mb-1 sm:mb-2">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Jam Pelayanan Kantor Sekretariat GKJ</span>
              </div>
              <div className="grid grid-cols-2 gap-1 sm:gap-2 text-[10px] sm:text-xs text-stone-600">
                <div>
                  <span className="font-semibold text-stone-900">Selasa - Sabtu:</span> 08:00 - 16:00 WIB
                </div>
                <div>
                  <span className="font-semibold text-stone-900">Minggu:</span> 06:00 - 19:00 WIB
                </div>
                <div className="col-span-2 text-[9px] sm:text-[11px] text-stone-400 italic">
                  *Hari Senin & Libur Nasional kantor tutup (Standby via WhatsApp).
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
