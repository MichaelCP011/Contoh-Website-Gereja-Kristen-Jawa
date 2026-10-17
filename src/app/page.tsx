import Navbar from "@/components/Navbar";
import HeroBento from "@/components/HeroBento";
import ProfileBento from "@/components/ProfileBento";
import ScheduleBento from "@/components/ScheduleBento";
import ActivitiesBento from "@/components/ActivitiesBento";
import LocationAndContactBento from "@/components/LocationAndContactBento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-stone-900 pattern-dots">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 space-y-6 sm:space-y-12">
        {/* 1. Flagship Hero Bento Grid */}
        <HeroBento />

        {/* 2. Profil Gereja / Company Profile Bento Grid */}
        <ProfileBento />

        {/* 3. Jadwal Ibadah Bento Grid */}
        <ScheduleBento />

        {/* 4. Macam-Macam Kegiatan & Pelayanan Bento Grid */}
        <ActivitiesBento />

        {/* 5. Alamat Maps & Media Sosial Bento Grid */}
        <LocationAndContactBento />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
