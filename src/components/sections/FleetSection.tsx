"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Dictionary } from '@/i18n/dictionaries';

const photos = [
  "/fleet/bus-1.png",
  "/fleet/bus-2.jpg",
  "/fleet/bus-5.png",
  "/fleet/bus-3.jpg",
  "/fleet/bus-4.png",
];

export default function FleetSection({ dict }: { dict: Dictionary['fleet'] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // @ts-ignore
  if (!dict) return null;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.0; // Normal 1:1 drag ratio
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleItemClick = (index: number) => {
    if (hasDragged) {
      setHasDragged(false);
      return;
    }
    setSelectedIndex(index);
  };

  // Lightbox navigation
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container border-b border-white/5 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-container/20 border border-primary-fixed/20 text-primary-fixed font-caption tracking-[0.2em] text-xs font-bold uppercase mb-6">
              {/* @ts-ignore */}
              {dict.badge || 'НАШ АВТОПАРК'}
            </span>
            {/* @ts-ignore */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory-text leading-tight mb-4">
              {dict.title || 'Сучасні та комфортні мікроавтобуси'}
            </h2>
            {/* @ts-ignore */}
            <p className="font-body text-ash-text text-lg leading-relaxed max-w-xl">
              {dict.subtitle || 'Ми використовуємо лише перевірені, надійні та спеціально обладнані для далеких подорожей автомобілі.'}
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-surface-variant hover:bg-surface-container-highest transition-colors group"
            >
              <span className="material-symbols-outlined text-ivory-text group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-surface-variant hover:bg-surface-container-highest transition-colors group"
            >
              <span className="material-symbols-outlined text-ivory-text group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative -mx-6 px-6 lg:-mx-8 lg:px-8">
          <div 
            ref={scrollContainerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className={`flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide select-none ${isDragging ? 'snap-none cursor-grabbing' : 'snap-x snap-mandatory cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((src, index) => (
              <div 
                key={index}
                className="relative flex-none w-[85vw] md:w-[450px] lg:w-[500px] h-[300px] md:h-[350px] rounded-2xl overflow-hidden group snap-center"
                onClick={() => handleItemClick(index)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">zoom_in</span>
                  </div>
                </div>
                <Image 
                  src={src} 
                  alt={`Fleet photo ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
          
          {/* Prev/Next Buttons */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-[110]"
            onClick={prevImage}
          >
            <span className="material-symbols-outlined text-[28px]">arrow_back</span>
          </button>
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-[110]"
            onClick={nextImage}
          >
            <span className="material-symbols-outlined text-[28px]">arrow_forward</span>
          </button>

          {/* Main Image */}
          <div 
            className="relative w-full max-w-6xl h-[85vh]" 
            onClick={(e) => e.stopPropagation()}
          >
      <Image 
  src={photos[selectedIndex]!} 
  alt={`Full screen view ${selectedIndex + 1}`} 
  fill 
  className="object-contain"
/>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
