'use client';

import { Dictionary } from '@/i18n/dictionaries';

export default function ScheduleSection({ dict }: { dict: Dictionary['schedule'] }) {
  return (
    <section id="schedule" className="max-w-container-max mx-auto py-12 md:py-24 px-6 md:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-display text-3xl md:text-headline-lg font-bold text-ivory-text mb-4 leading-tight">{dict.title}</h2>
        <p className="font-body text-body text-ash-text max-w-2xl mx-auto">
          {dict.subtitle}
        </p>
      </div>
      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Route Card 1: Kyiv -> Warsaw */}
        <article className="bg-graphite-card rounded-xl p-6 md:p-10 flex flex-col justify-between h-full border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-1">
          <div>
            <div className="flex flex-wrap justify-between items-start mb-8 gap-6 w-full">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-display text-[28px] md:text-[32px] font-bold text-ivory-text leading-none">{dict.kyivWarsaw.depStation.includes('Київ') || dict.kyivWarsaw.depStation.includes('Киев') ? 'Київ' : 'Киев'}</span>
                  <span className="font-display text-[28px] md:text-[32px] font-bold text-ash-text/50 leading-none">{dict.kyivWarsaw.arrStation.includes('Варшава') || dict.kyivWarsaw.arrStation.includes('Варшава') ? 'Варшава' : 'Варшава'}</span>
                </div>
                <div className="flex flex-col items-center justify-center text-primary-fixed h-full mt-2">
                  <span className="material-symbols-outlined rotate-90 text-[32px]" style={{ fontVariationSettings: "'wght' 300" }}>arrow_right_alt</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 bg-surface-variant text-ivory-text font-caption text-[12px] rounded-full mb-2">{dict.daily}</span>
                <p className="font-headline-sm text-2xl md:text-headline-sm text-primary-fixed leading-tight">{dict.priceKyivWarsaw}</p>
                <p className="font-caption text-[12px] text-ash-text">{dict.oneWay}</p>
              </div>
            </div>
            {/* Timeline */}
            <div className="relative pl-6 border-l border-white/10 space-y-8 mb-8">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary-fixed shadow-[0_0_10px_rgba(223,224,255,0.5)]"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1 leading-tight">{dict.departureStr} <span className="font-bold">{dict.kyivWarsaw.depTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.kyivWarsaw.depStation}</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-surface-variant border-2 border-background"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1 leading-tight">{dict.arrivalStr} <span className="font-bold">{dict.kyivWarsaw.arrTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.kyivWarsaw.arrStation}</p>
              </div>
            </div>
          </div>
          {/* Footer Area */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="material-symbols-outlined text-ash-text">timer</span>
              <div>
                <p className="font-body text-body-sm text-ivory-text">{dict.durationStr} {dict.kyivWarsaw.duration}</p>
                <p className="font-caption text-[12px] text-ash-text">*{dict.kyivWarsaw.durationNote}</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-primary-container text-pure-white px-8 py-3 rounded-full font-subheading text-[14px] hover:bg-inverse-primary transition-colors">
              {dict.bookBtn}
            </button>
          </div>
        </article>
        {/* Route Card 2: Warsaw -> Kyiv */}
        <article className="bg-graphite-card rounded-xl p-6 md:p-10 flex flex-col justify-between h-full border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-1">
          <div>
            <div className="flex flex-wrap justify-between items-start mb-8 gap-6 w-full">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-display text-[28px] md:text-[32px] font-bold text-ivory-text leading-none">Варшава</span>
                  <span className="font-display text-[28px] md:text-[32px] font-bold text-ash-text/50 leading-none">Київ</span>
                </div>
                <div className="flex flex-col items-center justify-center text-primary-fixed h-full mt-2">
                  <span className="material-symbols-outlined rotate-90 text-[32px]" style={{ fontVariationSettings: "'wght' 300" }}>arrow_right_alt</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 bg-surface-variant text-ivory-text font-caption text-[12px] rounded-full mb-2">{dict.daily}</span>
                <p className="font-headline-sm text-2xl md:text-headline-sm text-primary-fixed leading-tight">{dict.priceWarsawKyiv}</p>
                <p className="font-caption text-[12px] text-ash-text">{dict.oneWay}</p>
              </div>
            </div>
            {/* Timeline */}
            <div className="relative pl-6 border-l border-white/10 space-y-8 mb-8">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary-fixed shadow-[0_0_10px_rgba(223,224,255,0.5)]"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1 leading-tight">{dict.departureStr} <span className="font-bold">{dict.warsawKyiv.depTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.warsawKyiv.depStation}</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-surface-variant border-2 border-background"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1 leading-tight">{dict.arrivalStr} <span className="font-bold">{dict.warsawKyiv.arrTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.warsawKyiv.arrStation}</p>
              </div>
            </div>
          </div>
          {/* Footer Area */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="material-symbols-outlined text-ash-text">timer</span>
              <div>
                <p className="font-body text-body-sm text-ivory-text">{dict.durationStr} {dict.warsawKyiv.duration}</p>
                <p className="font-caption text-[12px] text-ash-text">*{dict.warsawKyiv.durationNote}</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-primary-container text-pure-white px-8 py-3 rounded-full font-subheading text-[14px] hover:bg-inverse-primary transition-colors">
              {dict.bookBtn}
            </button>
          </div>
        </article>
      </div>
      <div className="mt-8 text-center max-w-3xl mx-auto">
        <p className="font-body text-body-sm text-ash-text flex items-start sm:items-center justify-center gap-2 text-left sm:text-center">
          <span className="material-symbols-outlined text-[16px] mt-0.5 sm:mt-0">info</span>
          <span>{dict.note}</span>
        </p>
      </div>
    </section>
  );
}
