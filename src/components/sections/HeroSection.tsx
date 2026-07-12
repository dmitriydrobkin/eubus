'use client';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAT3SKPkFyqsz8H0Ofpdddy3XnGORncl3I9RNtdUxLeIIv474FUH0700jnVi2FZXW_-YcU0h1-p7aAw0w47X91K3nD2I76uI-wgODd3FanN_3JXbnXgJr-FMeaYqEqEVfjHxKrQdK42vpvL6xjBLhtv2jOD2Zqd39oAn-483iAFzEiSoUBUESzvR8nFroVM6mVtYI5o25epN_Hcwcw3zxFUGXa4TjQRHiqFNNK8sTsd1LqzFmKox42s')" }}
        />
        <div className="absolute inset-0 bg-onyx-canvas/90 hero-bg-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column (Text & CTA) */}
        <div className="md:col-span-7 flex flex-col items-start gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-ash-text font-caption uppercase tracking-wider border border-surface-variant/50">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            Щоденні рейси
          </div>
          {/* Headline */}
          <h1 className="font-display text-display text-ivory-text leading-[1.1]">
            Прямі та комфортні рейси Київ — Варшава.
          </h1>
          {/* Body Text */}
          <p className="font-body-lg text-ash-text max-w-2xl">
            Без піших переходів кордону. Wi-Fi, клімат-контроль та ортопедичні крісла. Ваша подорож бізнес-класу за ціною звичайного квитка.
          </p>
          {/* Primary CTA */}
          <button className="bg-primary-container text-pure-white px-8 py-4 rounded-full font-body font-medium hover:bg-inverse-primary transition-colors duration-300 shadow-lg shadow-primary-container/20 flex items-center gap-3 mt-4 group">
            ЗНАЙТИ РЕЙС ТА ЗАБРОНЮВАТИ
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* Right Column (Widget) */}
        <div className="md:col-span-5 w-full flex justify-end">
          {/* Graphite Card Widget */}
          <div className="bg-surface-container rounded-[12px] p-card-padding w-full max-w-md border border-surface-variant/30 flex flex-col gap-6 backdrop-blur-sm">
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-surface-variant/50">
              <span className="font-caption text-ash-text uppercase tracking-widest">Найближчий рейс</span>
              <span className="font-body-sm text-ivory-text font-medium bg-surface-variant/40 px-3 py-1 rounded-full">Сьогодні</span>
            </div>
            {/* Route details */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-headline-md text-ivory-text">КИЇВ</span>
                  <span className="font-caption text-ash-text">Автостанція "Київ"</span>
                </div>
                <div className="flex flex-col items-center justify-center px-4 text-primary-container">
                  <span className="material-symbols-outlined text-3xl">trending_flat</span>
                  <span className="font-caption text-ash-text mt-1 text-[10px]">14 год 30 хв</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-headline-md text-ivory-text">ВАРШАВА</span>
                  <span className="font-caption text-ash-text">Автовокзал "Заходня"</span>
                </div>
              </div>
              {/* Time & Status */}
              <div className="flex justify-between items-end mt-4 pt-4 border-t border-surface-variant/30">
                <div>
                  <span className="font-caption text-ash-text block mb-1">Відправлення</span>
                  <span className="font-headline-md text-primary-container">16:30</span>
                </div>
                <div className="flex items-center gap-2 text-right">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container" />
                  </div>
                  <span className="font-body-sm text-ivory-text">Залишилось 4 місця</span>
                </div>
              </div>
            </div>
            {/* Action Button */}
            <button className="w-full py-4 mt-2 border border-mist-border rounded-full text-ivory-text font-body hover:bg-mist-border/10 transition-colors duration-300">
              Бронювати місце
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
