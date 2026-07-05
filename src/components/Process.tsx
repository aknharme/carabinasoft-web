import React from 'react';
import { Search, Compass, Palette, Rocket } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface Step {
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Process: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps: Step[] = [
    {
      num: '01',
      title: 'İhtiyacı Anlıyoruz',
      description: 'Kısa bir görüşme ile işletmenizin mevcut sürecini, hedeflerini ve ihtiyaçlarını analiz ediyoruz.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Çözümü Planlıyoruz',
      description: 'Web sitesi, panel, otomasyon veya B2B sistem için en doğru yapıyı belirleyip net bir yol haritası çıkarıyoruz.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Tasarlıyor ve Geliştiriyoruz',
      description: 'Modern arayüz, güçlü altyapı ve işletmenize özel fonksiyonlarla çözümü geliştiriyoruz.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Yayına Alıyor ve Destekliyoruz',
      description: 'Sistemi yayına alıyor, gerekli eğitim ve destek süreciyle işletmenizin yanında oluyoruz.',
      icon: Rocket,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="process" className="relative py-20 md:py-28 overflow-hidden bg-dark-900/40">
      {/* Decorative glows */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase">
            GELİŞTİRME SÜRECİMİZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Başlangıçtan yayına kadar şeffaf, planlı ve her aşamada sizi bilgilendirdiğimiz profesyonel bir süreç yürütüyoruz.
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative">
          
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[28%] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-brand/10 via-brand/35 to-brand/10 -z-10" />

          {/* Steps Grid with Stagger */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-85px' }}
            variants={containerVariants}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={stepVariants}
                className="flex flex-col items-center text-center group relative cursor-default"
              >
                
                {/* Step Icon Container */}
                <div className="relative mb-6">
                  {/* Number Badge */}
                  <span className="absolute -top-3 -right-3 text-xs font-extrabold bg-brand text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg shadow-brand/20 border border-[#030303] group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </span>
                  
                  {/* Icon Node */}
                  <div className="w-16 h-16 rounded-2xl bg-dark-950 border border-white/5 group-hover:border-brand/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.20)] flex items-center justify-center text-gray-400 group-hover:text-brand transition-all duration-350 relative z-10">
                    <step.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Ripple pulse on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-brand/5 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-350 -z-0 blur-sm" />
                </div>

                {/* Step Info */}
                <h3 className="text-lg font-bold text-white mb-3 font-sans group-hover:text-brand transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4 md:px-2">
                  {step.description}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
