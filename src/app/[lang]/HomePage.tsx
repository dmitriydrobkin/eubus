import HeroSection from '@/components/sections/HeroSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import TelegramSection from '@/components/sections/TelegramSection';
import VipTransferSection from '@/components/sections/VipTransferSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LeadFormSection from '@/components/sections/LeadFormSection';
import { getDictionary } from '@/i18n/dictionaries';

export default function HomePage({ lang }: { lang: string }) {
  const dict = getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict.hero} />
      <ScheduleSection dict={dict.schedule} />
      <VipTransferSection dict={dict.vip} />
      <FeaturesSection dict={dict.features} />
      <TelegramSection dict={dict.telegram} />
      <ReviewsSection dict={dict.reviews} />
      <LeadFormSection dict={dict.leadForm} />
    </>
  );
}