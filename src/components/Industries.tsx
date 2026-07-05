import React from 'react';
import { UtensilsCrossed, Scissors, Factory, Home, Stethoscope, Store, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface Industry {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export const Industries: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const industries: Industry[] = [
    {
      title: 'Restoran ve Kafeler',
      icon: UtensilsCrossed,
      features: ['QR menü', 'Dijital sipariş', 'Masa yönetimi', 'Kampanya paneli'],
    },
    {
      title: 'Kuaför ve Güzellik Merkezleri',
      icon: Scissors,
      features: ['Randevu sistemi', 'Hizmet listesi', 'Personel takvimi', 'Müşteri takibi'],
    },
    {
      title: 'Toptancılar ve Üreticiler',
      icon: Factory,
      features: ['B2B bayi sistemi', 'Toptan ürün kataloğu', 'Bayiye özel fiyat', 'Sipariş paneli'],
    },
    {
      title: 'Emlak Ofisleri',
      icon: Home,
      features: ['İlan yönetimi', 'Satılık/kiralık filtreleme', 'Danışman profilleri', 'WhatsApp teklif alma'],
    },
    {
      title: 'Klinikler ve Danışmanlar',
      icon: Stethoscope,
      features: ['Randevu sistemi', 'Hizmet sayfaları', 'SSS alanı', 'Güven veren kurumsal tasarım'],
    },
    {
      title: 'Mağazalar ve Kırtasiyeler',
      icon: Store,
      features: ['Ürün kataloğu', 'Online sipariş', 'Stok takibi', 'Kampanya alanı'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="industries" className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative accent background glows */}
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute left-[5%] top-[10%] w-[320px] h-[320px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase">
            SEKTÖREL ÇÖZÜMLER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Hangi Sektörlere Çözüm Sunuyoruz?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Sektörünüze özel, iş modelinizi tam olarak destekleyen ve günlük iş yükünüzü hafifleten akıllı dijital araçlar geliştiriyoruz.
          </p>
        </motion.div>

        {/* Industries Grid with Stagger Reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : {
                y: -6,
                borderColor: 'rgba(59, 130, 246, 0.28)',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(59, 130, 246, 0.05)',
              }}
              className="glass-card rounded-2xl p-6.5 text-left flex flex-col justify-between group overflow-hidden border border-white/5 cursor-default transition-all duration-300"
            >
              {/* Top Row with icon and title */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-brand/40 group-hover:bg-brand/10 text-gray-300 group-hover:text-brand flex items-center justify-center transition-all duration-350">
                    <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-brand transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Features Bullet List */}
                <ul className="space-y-3.5 mb-8">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/75 mr-3 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Interactive Link */}
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-bold text-gray-500 group-hover:text-brand group-hover:border-brand/10 transition-all duration-300"
              >
                <span>Sektörünüze Özel Teklif Alın</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
