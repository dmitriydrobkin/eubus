'use client';

import { Dictionary } from '@/i18n/dictionaries';

export default function ScheduleSection({ dict }: { dict: Dictionary['schedule'] }) {
  return (
    <section id="schedule" className="max-w-container-max mx-auto py-section-gap px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-headline-lg font-bold text-ivory-text mb-4">{dict.title}</h2>
        <p className="font-body text-body text-ash-text max-w-2xl mx-auto">
          {dict.subtitle}
        </p>
      </div>
      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Route Card 1: Kyiv -> Warsaw */}
        <article className="bg-[#1e1e2a] rounded-[12px] p-card-padding flex flex-col justify-between h-full border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-1">
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <span className="font-display text-[28px] font-semibold text-ivory-text">{dict.kyivWarsaw.depStation.includes('Київ') || dict.kyivWarsaw.depStation.includes('Киев') ? 'Київ' : 'Киев'}</span>
                <span className="material-symbols-outlined text-ash-text">arrow_right_alt</span>
                <span className="font-display text-[28px] font-semibold text-ivory-text">{dict.kyivWarsaw.arrStation.includes('Варшава') || dict.kyivWarsaw.arrStation.includes('Варшава') ? 'Варшава' : 'Варшава'}</span>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-[#2f3038] text-ivory-text font-caption text-[12px] rounded-full mb-2">{dict.daily}</span>
                <p className="font-headline-sm text-headline-sm text-primary-fixed">{dict.priceKyivWarsaw}</p>
                <p className="font-caption text-[12px] text-ash-text">{dict.oneWay}</p>
              </div>
            </div>
            {/* Timeline */}
            <div className="relative pl-6 border-l border-white/10 space-y-8 mb-8">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary-fixed shadow-[0_0_10px_rgba(223,224,255,0.5)]"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1">{dict.departureStr} <span className="font-bold">{dict.kyivWarsaw.depTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.kyivWarsaw.depStation}</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-surface-variant border-2 border-background"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1">{dict.arrivalStr} <span className="font-bold">{dict.kyivWarsaw.arrTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.kyivWarsaw.arrStation}</p>
              </div>
            </div>
          </div>
          {/* Footer Area */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-ash-text">timer</span>
              <div>
                <p className="font-body text-body-sm text-ivory-text">{dict.durationStr} {dict.kyivWarsaw.duration}</p>
                <p className="font-caption text-[12px] text-ash-text">*{dict.kyivWarsaw.durationNote}</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-ivory-text text-background px-6 py-3 rounded-[8px] font-subheading text-[14px] hover:bg-white transition-colors">
              {dict.bookBtn}
            </button>
          </div>
        </article>
        {/* Route Card 2: Warsaw -> Kyiv */}
        <article className="bg-[#1e1e2a] rounded-[12px] p-card-padding flex flex-col justify-between h-full border border-outline-variant/30 transition-transform duration-300 hover:-translate-y-1">
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <span className="font-display text-[28px] font-semibold text-ivory-text">Варшава</span>
                <span className="material-symbols-outlined text-ash-text">arrow_right_alt</span>
                <span className="font-display text-[28px] font-semibold text-ivory-text">Київ</span>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-[#2f3038] text-ivory-text font-caption text-[12px] rounded-full mb-2">{dict.daily}</span>
                <p className="font-headline-sm text-headline-sm text-primary-fixed">{dict.priceWarsawKyiv}</p>
                <p className="font-caption text-[12px] text-ash-text">{dict.oneWay}</p>
              </div>
            </div>
            {/* Timeline */}
            <div className="relative pl-6 border-l border-white/10 space-y-8 mb-8">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary-fixed shadow-[0_0_10px_rgba(223,224,255,0.5)]"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1">{dict.departureStr} <span className="font-bold">{dict.warsawKyiv.depTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.warsawKyiv.depStation}</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-surface-variant border-2 border-background"></span>
                <p className="font-subheading text-[16px] text-ivory-text mb-1">{dict.arrivalStr} <span className="font-bold">{dict.warsawKyiv.arrTime}</span></p>
                <p className="font-body text-body-sm text-ash-text">{dict.warsawKyiv.arrStation}</p>
              </div>
            </div>
          </div>
          {/* Footer Area */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-ash-text">timer</span>
              <div>
                <p className="font-body text-body-sm text-ivory-text">{dict.durationStr} {dict.warsawKyiv.duration}</p>
                <p className="font-caption text-[12px] text-ash-text">*{dict.warsawKyiv.durationNote}</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-ivory-text text-background px-6 py-3 rounded-[8px] font-subheading text-[14px] hover:bg-white transition-colors">
              {dict.bookBtn}
            </button>
          </div>
        </article>
      </div>
      {/* Bottom Note */}
      <div className="mt-8 text-center">
        <p className="font-body text-body-sm text-ash-text flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[16px]">info</span>
          {dict.note}
        </p>
      </div>
    </section>
  );
}
