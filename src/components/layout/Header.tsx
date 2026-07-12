'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Dictionary } from '@/i18n/dictionaries';

export default function Header({ dict }: { dict: Dictionary['nav'] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Слушатель кастомного события для открытия контактов из других компонентов
  useEffect(() => {
    const handleOpenContacts = () => setIsContactsOpen(true);
    window.addEventListener('openContacts', handleOpenContacts);
    return () => window.removeEventListener('openContacts', handleOpenContacts);
  }, []);

  // Блокировка скролла при открытом попапе
  useEffect(() => {
    if (isContactsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactsOpen]);

  return (
    <>
      <nav
        id="main-nav"
        className={clsx(
          'w-full z-50 flex justify-between items-center mx-auto px-6 lg:px-8 h-20 transition-colors duration-300',
          isScrolled
            ? 'fixed top-0 bg-surface-container/90 border-b border-surface-variant/30 backdrop-blur-md shadow-lg animate-slide-down'
            : 'absolute top-0 bg-transparent'
        )}
      >
        <div className="w-full max-w-container-max mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="relative flex items-center h-12 w-40 shrink-0">
            <Image 
              src="/logo.png" 
              alt="StarBus" 
              fill 
              className="object-contain object-left" 
              priority 
            />
          </Link>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#schedule" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.schedule}</a>
            <a href="#services" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.services}</a>
            <a href="#vip" className="text-ivory-text font-body hover:text-primary transition-colors duration-300">{dict.vip}</a>
            <button onClick={() => setIsContactsOpen(true)} className="text-ivory-text font-body hover:text-primary transition-colors duration-300 cursor-pointer">{dict.contacts}</button>
          </div>
          {/* Trailing Action */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsContactsOpen(true)} className="md:hidden text-ivory-text">
              <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
            </button>
            <a href="#contact-form" className="hidden sm:inline-block px-6 py-2 border border-primary-fixed/30 bg-primary-container/10 rounded-full text-primary-fixed font-body hover:bg-primary-container/20 transition-colors duration-300 scale-95 hover:scale-100">
              {/* @ts-ignore - dictionary keys are manually added */}
              {dict.callback || 'Зворотний дзвінок'}
            </a>
          </div>
        </div>
      </nav>

      {/* Contacts Modal */}
      {isContactsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0d0e15]/80 backdrop-blur-sm" onClick={() => setIsContactsOpen(false)}></div>
          <div className="relative bg-surface-container rounded-2xl w-full max-w-sm border border-outline-variant/30 shadow-2xl p-6 md:p-8 animate-fade-in-down max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsContactsOpen(false)}
              className="absolute top-4 right-4 text-ash-text hover:text-ivory-text transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            {/* @ts-ignore */}
            <h2 className="font-display text-2xl font-bold text-ivory-text mb-6">{dict.contactsModalTitle || 'Контакти'}</h2>
            
            <div className="space-y-6">
              <div>
                {/* @ts-ignore */}
                <p className="font-caption text-ash-text uppercase tracking-wider mb-3">{dict.contactsModalPhones || 'Телефони'}</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+380730030200" className="flex items-center gap-3 p-3 rounded-lg bg-surface-variant border border-white/5 hover:border-primary-fixed/50 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-fixed text-[20px]">call</span>
                    </div>
                    <span className="font-subheading text-ivory-text group-hover:text-primary-fixed transition-colors">+38 073 003 02 00</span>
                  </a>
                  <a href="tel:+380730367677" className="flex items-center gap-3 p-3 rounded-lg bg-surface-variant border border-white/5 hover:border-primary-fixed/50 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-fixed text-[20px]">call</span>
                    </div>
                    <span className="font-subheading text-ivory-text group-hover:text-primary-fixed transition-colors">+38 073 036 76 77</span>
                  </a>
                </div>
              </div>
              
              <div>
                {/* @ts-ignore */}
                <p className="font-caption text-ash-text uppercase tracking-wider mb-3">{dict.contactsModalSocials || 'Месенджери'}</p>
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://t.me/ukraine_europe_d" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#24A1DE]/10 border border-[#24A1DE]/20 hover:bg-[#24A1DE]/20 transition-colors">
                    <Image src="/icon-telegram.svg" alt="Telegram" width={28} height={28} className="mb-1" />
                    <span className="font-caption text-[11px] text-ivory-text">Telegram</span>
                  </a>
                  <a href="viber://chat?number=%2B380730030200" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#7360F2]/10 border border-[#7360F2]/20 hover:bg-[#7360F2]/20 transition-colors">
                    <Image src="/icon-viber.svg" alt="Viber" width={28} height={28} className="mb-1" />
                    <span className="font-caption text-[11px] text-ivory-text">Viber</span>
                  </a>
                  <a href="https://wa.me/380730030200" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors">
                    <Image src="/icon-whatsapp.svg" alt="WhatsApp" width={28} height={28} className="mb-1" />
                    <span className="font-caption text-[11px] text-ivory-text">WhatsApp</span>
                  </a>
                  <a href="https://www.instagram.com/kyiv_warszawa/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#E1306C]/10 border border-[#E1306C]/20 hover:bg-[#E1306C]/20 transition-colors col-span-3 mt-1">
                    <Image src="/icon-instagram.svg" alt="Instagram" width={28} height={28} className="mb-1" />
                    <span className="font-caption text-[11px] text-ivory-text">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
