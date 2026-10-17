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
  title: "GKJ (Gereja Kristen Jawa) | Mengakar dalam Kristus, Berbuah Bagi Sesama",
  description:
    "Situs resmi GKJ (Gereja Kristen Jawa) - Wilayah Jawa Tengah. Jadwal kebaktian Basa Jawi & Indonesia, profil gereja, kegiatan komisi kategorial, paguyuban wilayah, dan informasi lokasi.",
  keywords: [
    "GKJ",
    "Gereja Kristen Jawa",
    "GKJ Jawa Tengah",
    "GKJ Solo",
    "GKJ Manahan",
    "jadwal ibadah gkj",
    "kebaktian basa jawi",
    "sinode gkj",
  ],
  openGraph: {
    title: "GKJ (Gereja Kristen Jawa) | Mengakar dalam Kristus, Berbuah Bagi Sesama",
    description:
      "Ndherek Gusti Yesus ing satengahing bebrayan agung. Sugeng rawuh ing pasamuwan GKJ (Gereja Kristen Jawa).",
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
