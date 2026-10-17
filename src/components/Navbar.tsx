"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Menu,
  X,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Profil Gereja", href: "#profil" },
    { name: "Jadwal Ibadah", href: "#jadwal" },
    { name: "Kegiatan & Komisi", href: "#kegiatan" },
    { name: "Lokasi & Media Sosial", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F7F4]/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      {/* Top Banner - Announcement / Warta Pasamuwan */}
      <div className="bg-stone-900 text-stone-200 px-4 py-2 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-semibold border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Jawa Tengah
            </span>
            <span>Ibadah Basa Jawi (06:30 WIB) • Ibadah Basa Indonesia (08:30 WIB & 17:00 WIB)</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <a
              href="#kontak"
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Sekretariat GKJ</span>
            </a>
            <span className="hidden sm:inline text-stone-600">|</span>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>Live Streaming YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity with Official GKJ Gunungan Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-2xl bg-white border border-stone-200/80 p-1 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-amber-600/40 transition-all duration-300">
              <Image
                src="/images/gkj-logo.png"
                alt="Logo Resmi Gereja-Gereja Kristen Jawa (GKJ)"
                width={42}
                height={42}
                priority
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                  GKJ
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-amber-100 text-amber-900 rounded-md border border-amber-200/60">
                  SINODE GKJ
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-medium tracking-tight">
                Gereja Kristen Jawa • Jawa Tengah
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-amber-900 hover:bg-stone-200/60 rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#jadwal"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-white border border-stone-300 text-stone-800 hover:border-amber-700 hover:text-amber-900 hover:bg-amber-50/50 shadow-xs transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>Jadwal Ibadah</span>
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-stone-900 text-stone-50 hover:bg-amber-900 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Peta Lokasi Solo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-200/80 focus:outline-hidden focus:ring-2 focus:ring-amber-600"
              aria-label="Buka menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF9F6] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-amber-100/60 hover:text-amber-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="#jadwal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-white border border-stone-300 text-stone-800"
            >
              <Calendar className="w-4 h-4 text-amber-800" />
              <span>Lihat Jadwal Ibadah</span>
            </a>
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-stone-900 text-white"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Peta Lokasi Gereja</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
