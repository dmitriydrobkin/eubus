"use client";

import { Dictionary } from '@/i18n/dictionaries';
import { useEffect, useRef, useState } from 'react';

const ICONS = [
  'ac_unit',
  'cleaning_services',
  'airline_seat_recline_extra',
  'workspace_premium',
  'child_care',
  'local_cafe',
  'wifi',
  'verified_user',
  'payments'
];

export default function FeaturesSection({ dict }: { dict: Dictionary['features'] }) {
  // @ts-ignore - dictionary interface hasn't caught up with JSON updates yet
  const items = dict.items || [];
  
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="w-full py-12 lg:py-24 bg-onyx-canvas border-t border-b border-white/5 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 lg:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-headline-lg font-bold text-ivory-text leading-tight max-w-4xl mx-auto">
            {dict.title}
          </h2>
          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-6 text-ash-text/70 animate-pulse">
            <span className="material-symbols-outlined text-[20px]">swipe_left</span>
            <span className="font-caption text-xs tracking-widest uppercase">{dict.swipeHint || 'Гортайте вбік'}</span>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 -mt-4 md:mt-0 md:pt-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-x-visible md:snap-none md:pb-0 [&::-webkit-scrollbar]:hidden -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {items.map((item: any, index: number) => (
            <div 
              key={index} 
              className={`flex-none w-[85vw] sm:w-[320px] md:w-auto snap-center flex flex-col p-8 rounded-2xl bg-surface-container border border-outline-variant/30 hover:border-primary-fixed/50 hover:bg-surface-variant/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-fixed/10 ${isInView ? 'animate-mobile-jump' : ''}`}
              style={isInView ? { animationDelay: `${2 + index * 0.15}s` } : {}}
            >
              <div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center mb-6 group-hover:bg-primary-container/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                <span className="material-symbols-outlined text-primary-fixed text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {ICONS[index] || 'star'}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-ivory-text mb-3 group-hover:text-primary-fixed transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-ash-text leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
