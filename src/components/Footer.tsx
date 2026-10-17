"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
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
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/15 p-1 flex items-center justify-center shrink-0">
              <Image
                src="/images/gkj-logo.png"
                alt="Logo Resmi Gereja-Gereja Kristen Jawa (GKJ)"
                width={38}
                height={38}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pangaken Pitados Rasuli & Pandom Pasamuwan
              </div>
              <p className="font-serif text-sm text-stone-200 italic mt-0.5">
                &ldquo;Gusti iku siji, pracaya iku siji, baptis iku siji, Gusti Allah lan Ramane kabeh iku siji.&rdquo; — Efesus 4:5-6 (Kitab Suci Basa Jawi)
              </p>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors shrink-0"
          >
            <span>Mumbul Manginggil (Ke Atas)</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/images/gkj-logo.png"
                  alt="Logo GKJ"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-tight">
                  GKJ (Gereja Kristen Jawa)
                </span>
                <p className="text-[10px] text-amber-400 font-medium">
                  Sinode Gereja-Gereja Kristen Jawa
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Pasamuwan Reformis kanthi tata gereja Presbiterial Sinodal ingkang ngrembaka ing satengahing kabudayan Jawa Tengah lan Ngayogyakarta.
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
              Jelajahi Pasamuwan
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Visi & Misi Sinode GKJ
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Paweling Majelis Jemaat
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Nilai Pasamuwan & Sejarah 1931
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Sarana Ramah Warga Adiyuswa
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Panduan Warga Rawuh Enggal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Pelayanan & Ibadah */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Pangibadah & Paguyuban
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Ibadah Basa Jawi (Minggu 06:30 WIB)
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Ibadah Basa Indonesia 1 (08:30 WIB)
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Ibadah Basa Indonesia 2 (17:00 WIB)
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">
                  Komisi Anak / Sekolah Minggu GKJ
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-white transition-colors">
                  Komisi Pemuda (KP GKJ)
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-white transition-colors">
                  Karawitan & Macapat Rohani
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Kantor Sekretariat GKJ
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Jl. MT Haryono No. 9, Manahan, Banjarsari, Kota Surakarta, Jawa Tengah 57139
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(0271) 714-889 / 0812-2600-1931</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>kantor@gkjmanahan.or.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 GKJ (Gereja Kristen Jawa) - Jawa Tengah. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">
              Bento UI & Anti-Slop Design
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
