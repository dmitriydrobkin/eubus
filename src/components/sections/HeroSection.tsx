'use client';

import Image from 'next/image';
import { Dictionary } from '@/i18n/dictionaries';

export default function HeroSection({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* 1. ФОН И ГРАДИЕНТ (Используем next/image для надежности) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171721] via-[#171721]/90 to-[#171721]/30"></div>
      </div>

      {/* 2. КОНТЕНТ */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка: Текст */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ededf3] leading-tight">
              {dict.title}
            </h1>
            <p className="text-lg text-[#c3c3cc]">
              {dict.subtitle}
            </p>
          </div>

          {/* Правая колонка: Карточка расписания */}
          <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 bg-[#1e1e2a] rounded-2xl p-6 md:p-8 border border-white/5">
            <h3 className="text-xl font-semibold text-[#ededf3] mb-6">
              {dict.widget.header}
            </h3>
            
            {/* Блок маршрута (ИСПРАВЛЕНО НАЛОЖЕНИЕ) */}
            <div className="flex flex-col gap-4">
              
              {/* Элемент расписания 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#171721] rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-[#ededf3] shrink-0">
                    {dict.widget.time}
                  </div>
                  <div className="text-[#c3c3cc] text-sm md:text-base leading-tight">
                    {dict.widget.kyiv} <br className="hidden sm:block" /> — {dict.widget.warsaw}
                  </div>
                </div>
                
                <button className="w-full sm:w-auto shrink-0 bg-[#5266eb] hover:bg-[#3a4fd4] text-white px-6 py-3 rounded-full font-medium transition-colors">
                  {dict.widget.bookBtn}
                </button>
              </div>

              {/* Элемент расписания 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#171721] rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-[#ededf3] shrink-0">
                    20:00
                  </div>
                  <div className="text-[#c3c3cc] text-sm md:text-base leading-tight">
                    {dict.widget.kyiv} <br className="hidden sm:block" /> — {dict.widget.warsaw}
                  </div>
                </div>
                
                <button className="w-full sm:w-auto shrink-0 bg-[#5266eb] hover:bg-[#3a4fd4] text-white px-6 py-3 rounded-full font-medium transition-colors">
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
