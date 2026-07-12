import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import TelegramSection from '@/components/sections/TelegramSection';
import VipTransferSection from '@/components/sections/VipTransferSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LeadFormSection from '@/components/sections/LeadFormSection';

export default function HomePage({ lang }: { lang: string }) {
  // TODO: Загрузить словарь для локализации на основе `lang`
  // const dict = await getDictionary(lang);

  return (
    <>
      {/* TODO: Передать dict в Header: <Header dict={dict.header} /> */}
      <Header />
      <main className="flex flex-col flex-grow w-full">
        {/* TODO: Передать тексты из словаря в каждую секцию */}
        <HeroSection />
        <ScheduleSection />
        <VipTransferSection />
        <FeaturesSection />
        <TelegramSection />
        <ReviewsSection />
        <LeadFormSection />
      </main>
      {/* TODO: Передать dict в Footer: <Footer dict={dict.footer} /> */}
      <Footer />
    </>
  );
}