'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Dictionary } from '@/i18n/dictionaries';

export default function Header({ dict }: { dict: Dictionary['nav'] }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={clsx(
        'fixed top-0 w-full z-50 flex justify-between items-center mx-auto px-8 h-20 transition-all duration-300 backdrop-blur-md',
        isScrolled
          ? 'bg-surface-container/80 border-b border-surface-variant/30'
          : 'bg-transparent'
      )}
    >
      <div className="w-full max-w-container-max mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="#"
          className="font-display text-headline-sm font-bold text-ivory-text tracking-wider hover:text-primary transition-colors duration-300"
        >
          EU BUS
        </Link>
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#schedule" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.schedule}</Link>
          <Link href="#services" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.services}</Link>
          <Link href="#vip" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.vip}</Link>
          <Link href="#contacts" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.contacts}</Link>
        </div>
        {/* Trailing Action */}
        <div className="flex items-center">
          <button className="px-6 py-2 border border-mist-border rounded-full text-ivory-text font-body hover:bg-mist-border/10 transition-colors duration-300 scale-95 hover:scale-100">
            {dict.login}
          </button>
        </div>
      </div>
    </nav>
  );
}
