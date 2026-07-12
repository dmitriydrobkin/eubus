'use client';

import { Dictionary } from '@/i18n/dictionaries';

export default function HeroSection({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-20">
      {/* Background with Grid and Glow */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0zOSAzOUgwVjFoMzl2Mzh6IiBmaWxsPSIjMWUxZjI3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-fixed-dim/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-fixed/30 bg-surface-container/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
            <span className="font-caption text-primary-fixed">{dict.badge}</span>
          </div>
          <h1 className="font-display text-display-lg font-bold text-ivory-text leading-tight drop-shadow-lg">
            {dict.title}
          </h1>
          <p className="font-body-lg text-ash-text max-w-xl">
            {dict.subtitle}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary-container text-pure-white px-8 py-4 rounded-full font-body font-medium hover:bg-inverse-primary transition-colors duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
              {dict.cta}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        {/* Right Content / Quick Widget */}
        <div className="w-full md:w-[420px] shrink-0">
          <div className="bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant/50">
              <span className="font-subheading text-ivory-text">{dict.widget.header}</span>
              <span className="px-3 py-1 bg-surface-variant rounded-full text-[12px] text-primary-fixed">{dict.widget.today}</span>
            </div>
            {/* Route Timeline */}
            <div className="relative pl-6 border-l border-surface-variant space-y-6">
              {/* Point A */}
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary-fixed shadow-[0_0_10px_rgba(223,224,255,0.5)]"></span>
                <p className="font-subheading text-lg text-ivory-text leading-none">{dict.widget.kyiv}</p>
                <p className="font-body-sm text-ash-text mt-1">{dict.widget.kyivStation}</p>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[20px] bg-background px-2 font-caption text-[10px] text-ash-text border border-surface-variant rounded-full">
                {dict.widget.duration}
              </div>
              {/* Point B */}
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-on-tertiary border-2 border-background"></span>
                <p className="font-subheading text-lg text-ivory-text leading-none">{dict.widget.warsaw}</p>
                <p className="font-body-sm text-ash-text mt-1">{dict.widget.warsawStation}</p>
              </div>
            </div>
            {/* Action Area */}
            <div className="mt-8 bg-background/50 rounded-xl p-4 border border-outline-variant/30 flex justify-between items-center">
              <div>
                <p className="font-caption text-ash-text mb-1">{dict.widget.departure}</p>
                <p className="font-display text-2xl font-bold text-ivory-text">{dict.widget.time}</p>
              </div>
              <div className="text-right">
                <p className="font-caption text-error mb-2">{dict.widget.seatsLeft}</p>
                <button className="bg-ivory-text text-background px-5 py-2 rounded-lg font-body-sm font-medium hover:bg-white transition-colors">
                  {dict.widget.bookBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
