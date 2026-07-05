import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Web sitesi yaptırmak için teknik bilgiye sahip olmam gerekir mi?',
      answer: 'Hayır. İhtiyacınızı birlikte belirliyoruz, teknik süreci biz yönetiyoruz. Size sadece işletmenizle ilgili temel bilgileri paylaşmak kalıyor.',
    },
    {
      question: 'B2B bayi sistemi kimler için uygundur?',
      answer: 'Toptan satış yapan, bayileri olan, distribütörlük sistemiyle çalışan veya müşterilerine özel fiyat sunan firmalar için uygundur.',
    },
    {
      question: 'Sadece web sitesi mi yapıyorsunuz?',
      answer: 'Hayır. Web sitesinin yanında e-ticaret, CRM, stok-satış takip, randevu sistemi, B2B bayi portalı ve işletmeye özel yazılım çözümleri geliştiriyoruz.',
    },
    {
      question: 'Proje süreci nasıl ilerliyor?',
      answer: 'Önce ihtiyacınızı analiz ediyoruz, ardından tasarım ve geliştirme sürecine geçiyoruz. Sistem tamamlandıktan sonra yayına alıp destek sürecini başlatıyoruz.',
    },
    {
      question: 'Aylık destek hizmeti veriyor musunuz?',
      answer: 'Evet. Site güncellemeleri, bakım, küçük revizeler, güvenlik kontrolleri ve teknik destek için aylık destek hizmeti sunabiliriz.',
    },
    {
      question: 'Yapay zeka çözümleri her işletmeye uygun mu?',
      answer: 'Her işletme için aynı çözüm gerekmez. İhtiyaca göre müşteri asistanı, otomatik yanıt sistemi, öneri motoru veya raporlama destekli yapay zeka çözümleri geliştirilebilir.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden bg-dark-900/40">
      {/* Decorative background glows */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase">
            MERAK EDİLENLER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Aklınıza takılan temel soruların cevaplarını burada bulabilirsiniz. Daha fazla detay için bizimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        {/* Accordions Container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`glass-card rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand/35 shadow-[0_0_20px_rgba(59,130,246,0.04)]' : 'hover:border-white/10'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors duration-300 font-sans pr-4 ${
                    isOpen ? 'text-brand' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-brand/10 border-brand/20 text-brand' : 'bg-white/[0.02] border-white/5 text-gray-400'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Accordion Expandable Content with Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden border-t border-white/5 bg-white/[0.01]"
                    >
                      <div className="p-5 text-sm sm:text-base text-gray-400 leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
