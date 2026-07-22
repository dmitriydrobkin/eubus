'use client';

import { Dictionary } from '@/i18n/dictionaries';

export default function Footer({ dict, navDict }: { dict: Dictionary['footer'], navDict: Dictionary['nav'] }) {
  return (
    <>
      {/* Standalone Footer Section (Block 7) */}
      <footer className="bg-surface w-full pt-16 pb-24 md:pb-8 border-t border-outline-variant mt-section-gap">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand Column */}
            <div className="flex-1">
              <h2 className="font-display text-headline-sm text-ivory-text mb-2">EU BUS</h2>
              <p className="font-body-sm text-ash-text max-w-xs">{dict.desc}</p>
            </div>
            {/* Contacts Column */}
            <div className="flex-1">
              <h3 className="font-caption text-ivory-text mb-4 uppercase tracking-[0.15em]">{dict.contacts}</h3>
              <a className="font-body-lg text-ivory-text block mb-2 font-medium hover:text-primary transition-colors" href="tel:+380730030200">+38 073 003 02 00</a>
              <a className="font-body-lg text-ivory-text block mb-2 font-medium hover:text-primary transition-colors" href="tel:+380730367677">+38 073 036 76 77</a>
            </div>
            {/* Social/Messengers Column */}
            <div className="flex-1">
              <h3 className="font-caption text-ivory-text mb-4 uppercase tracking-[0.15em]">{dict.messengers}</h3>
              <nav className="flex flex-col gap-2">
                <a className="font-body-sm text-ash-text hover:text-ivory-text transition-colors cursor-pointer w-fit" href="#">Telegram</a>
                <a className="font-body-sm text-ash-text hover:text-ivory-text transition-colors cursor-pointer w-fit" href="#">Viber</a>
                <a className="font-body-sm text-ash-text hover:text-ivory-text transition-colors cursor-pointer w-fit" href="#">WhatsApp</a>
              </nav>
            </div>
          </div>
          {/* Legal Disclaimer Row */}
          <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-caption text-ash-text">© {new Date().getFullYear()} {dict.rights}</p>
            <div className="flex gap-element-gap items-center">
              <a className="font-caption text-ash-text hover:text-pure-white transition-colors" href="#">{dict.privacy}</a>
              <a className="font-caption text-ash-text hover:text-pure-white transition-colors" href="#">{dict.terms}</a>
              <a className="font-caption text-ash-text hover:text-pure-white transition-colors" href="#">{dict.help}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Nav Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-surface-variant/50 py-3 px-6 flex justify-between items-center z-50">
        <a href="#schedule" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">schedule</span>
          <span className="font-caption text-[10px]">{navDict.schedule}</span>
        </a>
        <a href="#fleet" className="flex flex-col items-center gap-1 text-ash-text">
          <span className="material-symbols-outlined">directions_car</span>
          <span className="font-caption text-[10px]">Автопарк</span>
        </a>
        <a href="#vip" className="flex flex-col items-center gap-1 text-ash-text">
          <span className="material-symbols-outlined">star</span>
          <span className="font-caption text-[10px]">{dict.mobileVip}</span>
        </a>
        <button onClick={() => window.dispatchEvent(new CustomEvent('openContacts'))} className="flex flex-col items-center gap-1 text-ash-text">
          <span className="material-symbols-outlined">support_agent</span>
          <span className="font-caption text-[10px]">{navDict.contacts}</span>
        </button>
      </div>
    </>
  );
}
