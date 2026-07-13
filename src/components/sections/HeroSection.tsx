'use client';

import Image from 'next/image';
import { Dictionary } from '@/i18n/dictionaries';

export default function HeroSection({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="relative w-full pt-20 pb-12 lg:pt-24 lg:pb-16 flex flex-col justify-center overflow-hidden bg-[#12131b]">
      {/* Акцентное свечение на фоне */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-[#5266eb]/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Левая колонка: Оффер и конверсионные элементы */}
          <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl relative z-20">
            
            {/* Бейдж доверия */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <span className="text-[#5266eb]">⭐</span>
              <span className="text-sm font-medium text-[#e3e1ed]">
                {dict.trustBadge}
              </span>
            </div>

            {/* Главный заголовок */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
              {dict.titleLine1} <br className="hidden sm:block" />
              <span className="text-[#5266eb] mr-2">{dict.titleLine2}</span>
              <span className="inline-block relative w-[100px] h-[36px] sm:w-[140px] sm:h-[48px] lg:hidden align-middle -mt-2">
                <Image src="/premium-bus-transparent.png" alt="Bus" fill className="object-contain object-left scale-[1.3] sm:scale-150 origin-left" />
              </span>
            </h1>

            {/* Подзаголовок */}
            <p className="font-sans text-lg sm:text-xl text-[#c5c5d7] leading-relaxed max-w-xl">
              {dict.subtitle}
            </p>

            {/* Кнопки действия (Primary & Secondary) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openContacts'))}
                className="font-sans px-8 py-4 bg-[#5266eb] hover:bg-[#3a4fd4] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#5266eb]/25 text-center"
              >
                {dict.btnBook}
              </button>
              <a 
                href="#schedule"
                className="inline-flex items-center justify-center font-sans px-8 py-4 bg-transparent border border-[#454654] text-white hover:bg-white/5 rounded-full font-semibold transition-all text-center"
              >
                {dict.btnSchedule}
              </a>
            </div>

            {/* Блок Social Proof (Триггеры доверия) */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-12 mt-6 pt-8 border-t border-white/10">
              <div>
                <p className="font-display text-3xl font-bold text-white">{dict.stat1Value}</p>
                <p className="font-sans text-sm text-[#8f8fa0] mt-1">{dict.stat1Label}</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-white">{dict.stat2Value}</p>
                <p className="font-sans text-sm text-[#8f8fa0] mt-1">{dict.stat2Label}</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-white">{dict.stat3Value}</p>
                <p className="font-sans text-sm text-[#8f8fa0] mt-1">{dict.stat3Label}</p>
              </div>
            </div>

          </div>

          {/* Правая колонка: Изображение */}
          <div className="hidden lg:block relative w-full lg:w-full h-[600px] z-10 lg:mt-0">
            {/* Desktop Transparent Bus (lg and up) */}
            <div className="relative w-[110%] -ml-[5%] lg:w-full lg:ml-0 h-full">
              <Image 
                src="/premium-bus-transparent.png" 
                alt="VIP Transfer Bus" 
                fill 
                className="object-contain object-right scale-125 transition-transform duration-700 hover:scale-105" 
                priority 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
