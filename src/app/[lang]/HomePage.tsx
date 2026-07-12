import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import TelegramSection from '@/components/sections/TelegramSection';
import VipTransferSection from '@/components/sections/VipTransferSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function HomePage({ lang }: { lang: string }) {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow w-full">
        <HeroSection />
        <ScheduleSection />
        <TelegramSection />
        <VipTransferSection />
        <FeaturesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}