import React from 'react';
import { Globe, ShoppingCart, Users2, Briefcase, BarChart3, CalendarRange, Cpu, Settings2, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const Services: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const services: Service[] = [
    {
      title: 'Kurumsal Web Siteleri',
      description: 'İşletmenizin internette güven vermesini, müşterilerin size daha kolay ulaşmasını ve hizmetlerinizi profesyonel şekilde sunmasını sağlıyoruz.',
      icon: Globe,
    },
    {
      title: 'E-Ticaret Altyapıları',
      description: 'Ürünlerinizi internetten kolayca satmanızı, sipariş ve ödemeleri tek panelden zahmetsizce yöneterek cironuzu büyütmenizi sağlıyoruz.',
      icon: ShoppingCart,
    },
    {
      title: 'B2B Bayi Sipariş Sistemleri',
      description: 'Bayilerinizin WhatsApp yerine sistem üzerinden sipariş vermesini sağlayarak sipariş karmaşasını azaltıyoruz.',
      icon: Users2,
      badge: 'Çözüm',
    },
    {
      title: 'CRM ve Teklif Yönetimi',
      description: 'Tekliflerinizi, müşteri görüşmelerinizi ve satış sürecinizi Excel/WhatsApp dağınıklığından kurtarıp tek panelde topluyoruz.',
      icon: Briefcase,
    },
    {
      title: 'Stok ve Satış Takip Yazılımları',
      description: 'Stok kaçaklarını önlemenizi, anlık ürün durumunu görmenizi ve günlük cironuzu izleyerek finansal kontrolü elinizde tutmanızı sağlıyoruz.',
      icon: BarChart3,
    },
    {
      title: 'Randevu ve Rezervasyon Sistemleri',
      description: 'Telefon trafiğini azaltıp müşterilerinizin 7/24 online randevu almasını sağlayarak doluluk oranlarınızı artırıyoruz.',
      icon: CalendarRange,
    },
    {
      title: 'Yapay Zeka Entegrasyonları',
      description: 'Web sitenize gelen soruları anında yanıtlayan asistanlar kurarak müşteri memnuniyetini artıyor, destek yükünüzü hafifletiyoruz.',
      icon: Cpu,
      badge: 'Yapay Zeka',
    },
    {
      title: 'İş Süreci Otomasyonları',
      description: 'Tekrarlayan manuel işleri dijital otomasyonlara devrederek operasyonel hataları sıfıra indiriyor, ekibinize zaman kazandırıyoruz.',
      icon: Settings2,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Glow decorative items */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-brand/5 rounded-full filter blur-[90px] pointer-events-none -z-10" />

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
            HİZMETLERİMİZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Sizlere Neler Sunuyoruz?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Basit web sitelerinden karmaşık B2B entegrasyonlarına kadar işletmenizin ihtiyaç duyduğu tüm dijital çözümleri tek çatı altında tasarlıyor ve geliştiriyoruz.
          </p>
        </motion.div>

        {/* Services Grid with Stagger Reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : {
                y: -6,
                borderColor: 'rgba(59, 130, 246, 0.28)',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(59, 130, 246, 0.05)',
              }}
              className="glass-card rounded-2xl p-6 text-left relative flex flex-col justify-between group overflow-hidden border border-white/5 cursor-default transition-all duration-300"
            >
              {/* Radial gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Header line inside card */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-brand/35 group-hover:bg-brand/10 text-gray-300 group-hover:text-brand flex items-center justify-center transition-all duration-350"
                  >
                    <service.icon className="w-6 h-6 transition-transform duration-300" />
                  </motion.div>
                  {service.badge && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      service.badge === 'Yapay Zeka' 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-brand-mint' 
                        : 'bg-brand/10 border-brand/30 text-brand'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 font-sans group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-gray-300 group-hover:text-brand transition-colors duration-350 mt-auto"
              >
                <span>Bilgi Alın</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
