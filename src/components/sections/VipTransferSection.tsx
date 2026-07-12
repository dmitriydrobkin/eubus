'use client';

import { Dictionary } from '@/i18n/dictionaries';

export default function VipTransferSection({ dict }: { dict: Dictionary['vip'] }) {
  return (
    <section id="vip" className="w-full py-section-gap bg-onyx-canvas">
      <div className="max-w-container-max mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tertiary/30 bg-tertiary-container/10 mb-6">
              <span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span className="font-caption text-tertiary tracking-wider">{dict.badge}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-ivory-text mb-6 leading-tight">
              {dict.title}
            </h2>
            <p className="font-body text-body-lg text-ash-text mb-10 max-w-xl">
              {dict.subtitle}
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-tertiary text-[16px]">location_on</span>
                </div>
                <p className="font-body text-ivory-text pt-1">{dict.f1}</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-tertiary text-[16px]">directions_car</span>
                </div>
                <p className="font-body text-ivory-text pt-1">{dict.f2}</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-tertiary text-[16px]">verified_user</span>
                </div>
                <p className="font-body text-ivory-text pt-1">{dict.f3}</p>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="w-full sm:w-auto bg-tertiary-container text-white px-8 py-4 rounded-full font-body font-medium hover:bg-[#9a4800] transition-colors duration-300 shadow-[0_0_20px_rgba(185,88,1,0.3)]">
                {dict.btn}
              </button>
              <div className="flex items-center gap-2">
                <span className="font-caption text-ash-text">{dict.fixedPrice}:</span>
                <span className="font-headline-sm text-tertiary">{dict.price}</span>
              </div>
            </div>
          </div>
          {/* Image Right (Placeholder) */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
              {/* Fake Image Background */}
              <div className="w-full h-full bg-[#1e1e2a] flex items-center justify-center border border-white/5 relative">
                <span className="material-symbols-outlined text-white/5 text-[120px]">directions_car</span>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-tertiary/20 blur-[80px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
