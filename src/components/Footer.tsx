import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-transparent border-t border-white/5 pt-16 pb-8 overflow-hidden">
      
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 left-[20%] w-[250px] h-[250px] bg-[rgba(59,130,246,0.12)] rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Left Column */}
          <div className="md:col-span-6 space-y-4 text-left">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="group inline-block">
              <Logo className="transition-transform duration-300 group-hover:scale-105" />
            </a>
            
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Esnaf, KOBİ ve şirketler için web, B2B, otomasyon ve yapay zeka destekli yazılım çözümleri.
            </p>
          </div>

          {/* Links Right Column */}
          <div className="md:col-span-6 flex flex-col md:flex-row md:justify-end gap-10 md:gap-16 text-left">
            <div className="space-y-4">
              <h4 className="text-white text-xs font-extrabold tracking-wider uppercase">Hızlı Linkler</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    className="text-gray-400 hover:text-brand text-xs font-semibold transition-colors duration-200"
                  >
                    Hizmetler
                  </a>
                </li>
                <li>
                  <a
                    href="#b2b"
                    onClick={(e) => handleScrollTo(e, '#b2b')}
                    className="text-gray-400 hover:text-brand text-xs font-semibold transition-colors duration-200"
                  >
                    B2B Çözümler
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white text-xs font-extrabold tracking-wider uppercase">Çözümler</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#industries"
                    onClick={(e) => handleScrollTo(e, '#industries')}
                    className="text-gray-400 hover:text-brand text-xs font-semibold transition-colors duration-200"
                  >
                    Sektörler
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, '#contact')}
                    className="text-gray-400 hover:text-brand text-xs font-semibold transition-colors duration-200"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom row (Copyright & Scroll To Top) */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-semibold tracking-wide">
            © 2026 Carabina Software. Tüm hakları saklıdır.
          </p>

          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-brand hover:border-brand/40 flex items-center justify-center transition-all duration-350 hover:-translate-y-0.5 group focus:outline-none"
            title="Yukarı Git"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
