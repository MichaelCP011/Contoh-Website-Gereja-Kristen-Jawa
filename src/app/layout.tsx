import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GKKA Indonesia | Gereja Komunitas Kasih Anugerah",
  description:
    "Gereja yang berakar dalam firman, bertumbuh dalam kasih Kristus, dan menghadirkan terang bagi kota. Jadwal ibadah, profil gereja, kegiatan komunitas sel, dan alamat lokasi.",
  keywords: [
    "gereja kristen",
    "jadwal ibadah",
    "GKKA",
    "komunitas sel",
    "profil gereja",
    "kebaktian minggu",
    "youth church",
  ],
  openGraph: {
    title: "GKKA Indonesia | Gereja Komunitas Kasih Anugerah",
    description:
      "Tempat bertumbuh dalam iman dan mengalami kasih Kristus yang nyata. Selamat datang di rumah Tuhan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8F7F4] text-stone-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
