export default function Footer() {
  return (
    <>
      {/* Standalone Footer Section (Block 7) */}
      <footer className="bg-surface w-full pt-16 pb-8 border-t border-outline-variant mt-section-gap">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand Column */}
            <div className="flex-1">
              <h2 className="font-display text-headline-sm text-ivory-text mb-2">EU BUS</h2>
              <p className="font-body-sm text-ash-text max-w-xs">Міжнародні пасажирські перевезення.</p>
            </div>
            {/* Contacts Column */}
            <div className="flex-1">
              <h3 className="font-caption text-ivory-text mb-4 uppercase tracking-[0.15em]">Контакти</h3>
              <a className="font-body-lg text-ivory-text block mb-2 font-medium hover:text-primary transition-colors" href="tel:+380730030200">+38 073 003 02 00</a>
              <a className="font-body-lg text-ivory-text block mb-2 font-medium hover:text-primary transition-colors" href="tel:+380730367677">+38 073 036 76 77</a>
            </div>
            {/* Social/Messengers Column */}
            <div className="flex-1">
              <h3 className="font-caption text-ivory-text mb-4 uppercase tracking-[0.15em]">Месенджери</h3>
              <nav className="flex flex-col gap-2">
                <a className="font-body-sm text-ash-text hover:text-ivory-text transition-colors cursor-pointer w-fit" href="#">Telegram</a>
                <a className="font-body-sm text-ash-text hover:text-ivory-text transition-colors cursor-pointer w-fit" href="#">Viber</a>
                <a className="font-body-sm text-ash-text hover:text-ivory-text transition-colors cursor-pointer w-fit" href="#">WhatsApp</a>
              </nav>
            </div>
          </div>
          {/* Legal Disclaimer Row */}
          <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-caption text-ash-text">© {new Date().getFullYear()} EU BUS. Усі права захищено.</p>
            <div className="flex gap-element-gap items-center">
              <a className="font-caption text-ash-text hover:text-pure-white transition-colors" href="#">Політика конфіденційності</a>
              <a className="font-caption text-ash-text hover:text-pure-white transition-colors" href="#">Умови надання послуг</a>
              <a className="font-caption text-ash-text hover:text-pure-white transition-colors" href="#">Допомога</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Nav Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-surface-variant/50 py-3 px-6 flex justify-between items-center z-50">
        <a href="#schedule" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">schedule</span>
          <span className="font-caption text-[10px]">Розклад</span>
        </a>
        <a href="#services" className="flex flex-col items-center gap-1 text-ash-text">
          <span className="material-symbols-outlined">directions_bus</span>
          <span className="font-caption text-[10px]">Послуги</span>
        </a>
        <a href="#vip" className="flex flex-col items-center gap-1 text-ash-text">
          <span className="material-symbols-outlined">star</span>
          <span className="font-caption text-[10px]">VIP</span>
        </a>
        <a href="#contacts" className="flex flex-col items-center gap-1 text-ash-text">
          <span className="material-symbols-outlined">support_agent</span>
          <span className="font-caption text-[10px]">Контакти</span>
        </a>
      </div>
    </>
  );
}
