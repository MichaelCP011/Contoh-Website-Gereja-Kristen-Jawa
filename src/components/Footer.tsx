"use client";

import { Church, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { YoutubeIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Apostles' Creed Citation Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <Church className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pernyataan Iman Kami
              </div>
              <p className="font-serif text-sm text-stone-200 italic mt-0.5">
                &ldquo;Satu Tuhan, satu iman, satu baptisan, satu Allah dan Bapa dari semua.&rdquo; — Efesus 4:5-6
              </p>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors shrink-0"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                <Church className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-tight">
                  GKKA INDONESIA
                </span>
                <p className="text-[10px] text-stone-400">
                  Gereja Komunitas Kasih Anugerah
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Sebuah rumah rohani yang berakar dalam firman, bertumbuh dalam kasih Kristus, dan menghadirkan terang bagi transformasi masyarakat.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-amber-600/20 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-amber-600/20 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-amber-600/20 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Jelajahi Gereja
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Visi & Misi Kami
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Sambutan Gembala Sidang
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  5 Nilai Inti (G.R.A.C.E)
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Fasilitas & Ramah Disabilitas
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Panduan Jemaat Baru
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Pelayanan & Ibadah */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Ibadah & Komunitas
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Ibadah Raya 1 (Minggu 07:00 WIB)
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Ibadah Raya 2 & Kids Church (09:30 WIB)
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Ibadah Raya 3 Bilingual (16:30 WIB)
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-white transition-colors">
                  Ignite Youth (Sabtu 17:00 WIB)
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-white transition-colors">
                  Komunitas Sel (CARE Cell)
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-white transition-colors">
                  Aksi Sosial Kasih Peduli
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Sekretariat Pusat
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Boulevard Kasih Harmoni No. 12-14, Gambir, Jakarta Pusat 10120
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(021) 388-9900 / 0812-8899-7700</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>sekretariat@gkkaindonesia.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 GKKA Indonesia (Gereja Komunitas Kasih Anugerah). Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">
              Didesain dengan Prinsip Bento UI & Anti-Slop
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
