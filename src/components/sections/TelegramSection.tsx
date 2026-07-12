'use client';

import { Dictionary } from '@/i18n/dictionaries';

export default function TelegramSection({ dict }: { dict: Dictionary['telegram'] }) {
  return (
    <section className="max-w-container-max mx-auto px-6 md:px-8 py-12 md:py-24">
      <div className="bg-gradient-to-br from-[#1e1e2a] to-[#12131b] rounded-3xl p-6 md:p-16 border border-white/5 relative overflow-hidden group">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Left Text Content */}
          <div className="flex-1 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </div>
              <span className="font-subheading text-primary-fixed tracking-wide">EU BUS BOT</span>
            </div>
            <h2 className="font-display text-3xl md:text-headline-lg font-bold text-ivory-text mb-6 leading-tight whitespace-pre-line">
              {dict.title}
            </h2>
            <p className="font-body text-body-lg text-ash-text mb-8 max-w-xl">
              {dict.subtitle}
            </p>
            <ul className="space-y-4 mb-10 text-left self-center lg:self-start">
              <li className="flex items-center gap-3 font-body text-ivory-text">
                <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                {dict.f1}
              </li>
              <li className="flex items-center gap-3 font-body text-ivory-text">
                <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                {dict.f2}
              </li>
              <li className="flex items-center gap-3 font-body text-ivory-text">
                <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                {dict.f3}
              </li>
            </ul>
            <button className="w-full sm:w-auto bg-primary-container text-pure-white px-8 py-4 rounded-full font-body font-medium hover:bg-inverse-primary transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
              {dict.btn}
              <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">send</span>
            </button>
          </div>
          {/* Right Image/Mockup Content */}
          <div className="flex-1 w-full flex justify-center items-center relative perspective-1000 mt-8 lg:mt-0">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[1/2] bg-[#1a1a26] rounded-[40px] border-[8px] border-surface-variant shadow-none overflow-hidden group-hover:-rotate-y-12 transition-transform duration-700 ease-out">
              {/* Fake UI Header */}
              <div className="absolute top-0 w-full h-16 bg-graphite-card border-b border-white/5 flex items-center px-4 gap-3 z-20">
                <div className="w-10 h-10 bg-primary-fixed/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>directions_bus</span>
                </div>
                <div>
                  <p className="font-subheading text-[14px] text-ivory-text">EU BUS</p>
                  <p className="font-caption text-[10px] text-primary-fixed">bot</p>
                </div>
              </div>
              {/* Fake UI Chat Area */}
              <div className="absolute inset-0 pt-20 p-4 bg-onyx-canvas flex flex-col gap-4">
                <div className="bg-graphite-card p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] border border-white/5">
                  <p className="font-body text-[12px] text-ivory-text">Оберіть напрямок поїздки 🚌</p>
                </div>
                <div className="bg-primary-container p-3 rounded-2xl rounded-tr-sm self-end max-w-[85%]">
                  <p className="font-body text-[12px] text-white">Київ — Варшава</p>
                </div>
                <div className="bg-graphite-card p-3 rounded-2xl rounded-tl-sm self-start max-w-[85%] border border-white/5 w-full">
                  <p className="font-body text-[12px] text-ivory-text mb-2">Знайдено рейс на завтра:</p>
                  <div className="bg-onyx-canvas p-2 rounded-lg border border-white/5">
                    <p className="font-subheading text-[12px] text-primary-fixed">08:00 - 22:00</p>
                    <p className="font-caption text-[10px] text-ash-text">Залишилось 4 місця</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <div className="absolute right-0 md:-right-8 bottom-4 md:bottom-12 bg-surface-container-low/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4CAF50] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <p className="font-subheading text-[14px] text-ivory-text">Квиток оплачено</p>
                  <p className="font-caption text-[12px] text-ash-text">Місце 14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
