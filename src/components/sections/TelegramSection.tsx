'use client';

export default function TelegramSection() {
  return (
    <section className="max-w-container-max mx-auto px-8 py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-ivory-text mb-6">
              Бронювання за 30 секунд у вашому смартфоні
            </h2>
            <p className="font-body-lg text-body-lg text-ash-text">
              Наш Telegram-бот дозволяє миттєво знаходити найзручніші рейси, обирати місця та здійснювати оплату без переходу на інші сайти. Швидко, безпечно та завжди під рукою.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="font-subheading text-subheading text-ivory-text">Миттєве підтвердження</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
              <span className="font-subheading text-subheading text-ivory-text">Електронні квитки</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              <span className="font-subheading text-subheading text-ivory-text">Цілодобова підтримка</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="bg-primary-container text-pure-white px-8 py-4 rounded-full font-body text-body hover:bg-inverse-primary transition-colors duration-300 flex items-center justify-center space-x-2 w-max">
              <span className="material-symbols-outlined">send</span>
              <span>ВІДКРИТИ TELEGRAM-БРОНЮВАННЯ</span>
            </button>
          </div>
        </div>
        {/* Right Column: Cinematic Graphic/Mockup */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-surface flex items-center justify-center group border border-outline-variant/30">
          {/* Subtle glow effect behind phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            className="relative z-10 w-3/4 max-w-sm h-auto object-contain drop-shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105 duration-700 ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3vNhMFPN_xoI_BOXg8pqVAGO7-250sGbzxv3D6ehZJ391433pqzOZtKz6_sTMb-0OhYQkgH5pORYoblfxLyit49UXnGoEkzNegKXR_6ZQojbtv2TQYu9dKeKufibAc01b2JOTp1ohupEYrSmmSPuhSkLRZdumDS0hbdu-d_YN5j9cU-VWVSe942G4XVNE5SedJynoEjUH4L72ku8HH0d6yZU0befsMYvyM_6bCLZBFU8pT95YTDkI"
            alt="Telegram Bot Mockup"
          />
        </div>
      </div>
    </section>
  );
}
