'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Reset loader state when pathname changes
    setShowLoader(true);
    setIsFading(false);
    
    // Smooth scroll to top on route change
    window.scrollTo(0, 0);

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname]);

  return (
    <>
      {showLoader && (
        <div 
          className={`fixed inset-0 z-[200] bg-[#12131b] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="font-display text-5xl md:text-7xl font-bold flex items-center overflow-hidden tracking-tight drop-shadow-2xl">
            <span className="text-[#FFD700] animate-logo-reveal" style={{ animationDelay: '0ms' }}>E</span>
            <span className="text-[#FFD700] animate-logo-reveal" style={{ animationDelay: '100ms' }}>U</span>
            <span className="text-[#24A1DE] animate-logo-reveal" style={{ animationDelay: '200ms' }}>B</span>
            <span className="text-[#24A1DE] animate-logo-reveal" style={{ animationDelay: '300ms' }}>U</span>
            <span className="text-[#24A1DE] animate-logo-reveal" style={{ animationDelay: '400ms' }}>S</span>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
}
