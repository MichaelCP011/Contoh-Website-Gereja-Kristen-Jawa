"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Phone,
  Mail,
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
    "Gedung GKKA Indonesia, Jl. Boulevard Kasih Harmoni No. 12-14, Kel. Gambir, Jakarta Pusat 10120";

  const copyToClipboard = (text: string, type: "address" | "bca" | "mandiri") => {
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
      name: "YouTube",
      handle: "@GKKAOfficial",
      role: "Live Streaming & Rekaman Khotbah Mingguan",
      href: "https://youtube.com",
      icon: YoutubeIcon,
      accent: "hover:bg-red-50 hover:border-red-200 text-red-600",
    },
    {
      name: "Instagram",
      handle: "@gkkaindonesia",
      role: "Renungan Harian, Ayat Firman & Info Acara",
      href: "https://instagram.com",
      icon: InstagramIcon,
      accent: "hover:bg-pink-50 hover:border-pink-200 text-pink-600",
    },
    {
      name: "TikTok",
      handle: "@gkka.youth",
      role: "Klip Khotbah 60 Detik & Inspirasi Remaja",
      href: "https://tiktok.com",
      icon: TikTokIcon,
      accent: "hover:bg-stone-100 hover:border-stone-300 text-stone-900",
    },
    {
      name: "Facebook",
      handle: "GKKA Indonesia Community",
      role: "Dokumentasi Foto Jemaat & Kabar Misi",
      href: "https://facebook.com",
      icon: FacebookIcon,
      accent: "hover:bg-blue-50 hover:border-blue-200 text-blue-600",
    },
    {
      name: "Spotify Podcast",
      handle: "Suara Kasih Anugerah",
      role: "Podcast Renungan Audio On-The-Go",
      href: "https://spotify.com",
      icon: SpotifyIcon,
      accent: "hover:bg-emerald-50 hover:border-emerald-200 text-emerald-600",
    },
    {
      name: "WhatsApp Hotline",
      handle: "+62 812-8899-7700",
      role: "Layanan Konseling & Doa 24 Jam",
      href: "https://wa.me/6281288997700",
      icon: WhatsAppIcon,
      accent: "hover:bg-emerald-50 hover:border-emerald-200 text-emerald-700",
    },
  ];

  return (
    <section id="kontak" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Lokasi & Terhubung</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Peta Lokasi & Media Sosial
          </h2>
        </div>
        <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
          Temukan rute tercepat menuju gedung gereja kami, pantau saluran media sosial resmi, atau kirimkan pokok doa Anda langsung kepada tim pastoral.
        </p>
      </div>

      {/* Main Bento Grid for Location & Socials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Bento 1: Interactive Google Maps & Address (Spans 2 cols, 2 rows on lg) */}
        <div className="bento-card lg:col-span-2 lg:row-span-2 p-6 sm:p-8 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 rounded-2xl bg-amber-100 text-amber-900">
                  <Navigation className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                    Peta Interaktif
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    Lokasi Gedung Gereja
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Akses Strategis
              </span>
            </div>

            {/* Google Maps Responsive Embed Container */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-200/80 mb-5 relative bg-stone-100">
              <iframe
                title="Peta Lokasi GKKA Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666395922316!2d106.82294467586828!3d-6.175392393812034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[105%]"
              ></iframe>
            </div>

            {/* Address Details */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Alamat Fisik Lengkap
              </div>
              <div className="font-medium text-stone-900 text-sm leading-relaxed mb-3">
                {fullAddress}
              </div>

              {/* Transportation Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-200/60 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>300m dari Stasiun MRT / Halte TransJakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Parkir Luas 300 Mobil (Bebas Biaya)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <a
              href="https://maps.google.com/?q=Monumen+Nasional+Jakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://waze.com/ul?q=Monumen+Nasional"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 hover:bg-stone-100 font-semibold text-xs transition-colors"
            >
              <span>Navigasi Waze</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
            <button
              onClick={() => copyToClipboard(fullAddress, "address")}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Alamat Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bento 2: Media Sosial Hub (Spans 2 cols on lg) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-white border border-stone-200/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                Saluran Digital Resmi
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Media Sosial Gereja
              </h3>
            </div>
            <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
              Terhubung Setiap Hari
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialChannels.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60 transition-all duration-200 flex items-start gap-3 group ${s.accent}`}
                >
                  <div className="p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-stone-900 font-bold text-xs">
                      <span>{s.name}</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[11px] font-mono text-amber-800 font-semibold truncate">
                      {s.handle}
                    </div>
                    <div className="text-[10px] text-stone-500 leading-tight mt-0.5 line-clamp-1">
                      {s.role}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bento 3: Prayer Request & Connect Form (Spans 2 cols on lg) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-gradient-to-br from-[#FAFAF8] to-white border border-stone-200/80">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-800 border border-amber-500/20">
              <Mail className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                Formulir Doa & Jemaat Baru
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Kirim Permohonan Doa
              </h3>
            </div>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 my-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-emerald-950">
                Terima Kasih, Pokok Doa Telah Kami Terima
              </h4>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                Tim pendoa syafaat dan hamba Tuhan GKKA akan membawa pokok doa Saudara <strong>{formData.name}</strong> ke hadapan Tuhan. Kami siap menghubungi nomor WhatsApp Anda untuk penguatan rohani.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", phone: "", category: "doa", message: "" });
                  }}
                  className="text-xs font-semibold px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  Kirim Doa Lainnya
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Jonathan Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Kategori Kebutuhan
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                >
                  <option value="doa">Permohonan Doa (Kesehatan / Keluarga / Pekerjaan)</option>
                  <option value="komunitas">Ingin Bergabung Komunitas Sel (CARE Cell)</option>
                  <option value="konseling">Konseling Pastoral dengan Hamba Tuhan</option>
                  <option value="tamu">Saya Tamu Pertama Kali & Ingin Informasi</option>
                  <option value="baptisan">Pendaftaran Baptisan Kudus / Sidi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Pokok Doa / Pesan Anda
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan pokok doa atau pertanyaan Anda secara rahasia..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white resize-none"
                ></textarea>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  Semua data dijaga kerahasiaannya oleh Badan Penggembalaan.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim ke Tim Pastoral</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bento 4: Rekening Persembahan & Jam Kantor (Spans 2 cols on lg) */}
        <div className="bento-card lg:col-span-2 p-6 sm:p-8 bg-white border border-stone-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-800" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Rekening Persembahan Resmi
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                Gereja Komunitas Kasih Anugerah
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Bagi jemaat yang rindu mendukung kelangsungan pelayanan firman, misi sosial, dan operasional gereja melalui transfer bank:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {/* Bank BCA */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="text-[11px] font-bold text-stone-500 uppercase">Bank BCA</div>
                <div className="font-mono text-base font-bold text-stone-900 tracking-wider my-0.5">
                  542-0199-881
                </div>
                <div className="text-[11px] text-stone-600 mb-2">a/n GKKA Indonesia</div>
                <button
                  onClick={() => copyToClipboard("5420199881", "bca")}
                  className="w-full text-center py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-[11px] transition-colors"
                >
                  {copiedBank === "bca" ? "Nomor Tersalin!" : "Salin Rekening BCA"}
                </button>
              </div>

              {/* Bank Mandiri */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="text-[11px] font-bold text-stone-500 uppercase">Bank Mandiri</div>
                <div className="font-mono text-base font-bold text-stone-900 tracking-wider my-0.5">
                  122-00-889977-0
                </div>
                <div className="text-[11px] text-stone-600 mb-2">a/n GKKA Indonesia</div>
                <button
                  onClick={() => copyToClipboard("122008899770", "mandiri")}
                  className="w-full text-center py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-[11px] transition-colors"
                >
                  {copiedBank === "mandiri" ? "Nomor Tersalin!" : "Salin Rekening Mandiri"}
                </button>
              </div>
            </div>

            {/* Jam Operasional Kantor */}
            <div className="pt-3 border-t border-stone-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 mb-2">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Jam Pelayanan Kantor Sekretariat Gereja</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                <div>
                  <span className="font-semibold text-stone-900">Selasa - Sabtu:</span> 08:30 - 17:00 WIB
                </div>
                <div>
                  <span className="font-semibold text-stone-900">Minggu:</span> 06:30 - 19:00 WIB
                </div>
                <div className="col-span-2 text-[11px] text-stone-500 italic">
                  *Hari Senin & Libur Nasional tutup (Layanan darurat melalui WhatsApp).
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
