'use client';

import { Dictionary } from '@/i18n/dictionaries';
import Image from 'next/image';

export default function VipTransferSection({ dict }: { dict: Dictionary['vip'] }) {
  return (
    <section id="vip" className="w-full py-12 lg:py-24 bg-onyx-canvas">
      <div className="max-w-container-max mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Left */}
          <div className="w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-fixed/30 bg-primary-container/10 mb-6">
              <span className="material-symbols-outlined text-primary-fixed text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span className="font-caption text-primary-fixed tracking-wider">{dict.badge}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-headline-lg font-bold text-ivory-text mb-6 leading-tight">
              {dict.title}
            </h2>
            <p className="font-body text-body-lg text-ash-text mb-10 max-w-xl mx-auto lg:mx-0">
              {dict.subtitle}
            </p>
            <ul className="space-y-6 mb-12 text-left w-fit mx-auto lg:mx-0">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-fixed/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-fixed text-[16px]">location_on</span>
                </div>
                <p className="font-body text-ivory-text pt-1">{dict.f1}</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-fixed/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-fixed text-[16px]">directions_car</span>
                </div>
                <p className="font-body text-ivory-text pt-1">{dict.f2}</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-fixed/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-fixed text-[16px]">verified_user</span>
                </div>
                <p className="font-body text-ivory-text pt-1">{dict.f3}</p>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-primary-container text-white px-8 py-4 rounded-full font-body font-medium hover:bg-inverse-primary transition-colors duration-300">
                {dict.btn}
              </button>
              <div className="flex items-center gap-2">
                <span className="font-caption text-ash-text">{dict.fixedPrice}:</span>
                <span className="font-headline-sm text-primary-fixed">{dict.price}</span>
              </div>
            </div>
          </div>
          {/* Image Right */}
          <div className="w-full">
            <div className="relative h-64 lg:h-full min-h-[300px] w-full rounded-xl overflow-hidden group border border-outline-variant/30">
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-canvas via-onyx-canvas/20 to-transparent z-10 opacity-90"></div>
              {/* Actual Image using next/image with project portfolio photo */}
              <Image 
                src="/vip-mercedes.jpeg" 
                alt="VIP Transfer" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
