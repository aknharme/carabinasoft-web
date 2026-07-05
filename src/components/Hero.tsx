import React from 'react';
import { ArrowRight, Sparkles, Code, CheckCircle, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const trustBadges = [
    { text: 'Butik & Müşteri Odaklı', icon: CheckCircle },
    { text: 'B2B Sipariş ve Cari Çözümleri', icon: CheckCircle },
    { text: 'Güçlü & Ölçeklenebilir Kod', icon: CheckCircle },
    { text: 'Teknik Destek ve Bakım', icon: CheckCircle },
  ];

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

  // Fade-in slide-up configurations
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  // Stagger configurations for code lines
  const codeLineReveal = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Glow background elements */}
      <div className="absolute top-[10%] left-[25%] w-[50%] h-[350px] bg-[rgba(59,130,246,0.18)] rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-[15%] right-[25%] w-[40%] h-[300px] bg-[rgba(16,185,129,0.12)] rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Boutique Agency Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span>BUTİK YAZILIM VE TEKNOLOJİ STÜDYOSU</span>
            </motion.div>

            {/* Clean Typography Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-white font-sans leading-[1.15] !margin-top-4"
            >
              KOBİ’ler ve büyüyen işletmeler için <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-mint">web, B2B ve otomasyon</span> <br />
              sistemleri geliştiriyoruz.
            </motion.h1>

            {/* Clean Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Carabina Software; kurumsal web siteleri, bayi sipariş sistemleri, CRM, stok-satış takip panelleri ve işletmeye özel yazılımlar geliştirerek iş süreçlerinizi dijitale taşır.
            </motion.p>

            {/* CTA Buttons with micro interactions */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand/40 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Hizmetleri Gör</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <motion.a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, translateY: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand text-white font-bold text-sm shadow-lg shadow-brand/25 hover:shadow-brand/45 transition-all duration-300"
              >
                <span>Bizimle Görüşün</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Mockup Column (Code Editor + Clean Invoice Card) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-brand/5 blur-[80px] rounded-full -z-10 scale-90" />
            
            {/* Visual Container */}
            <motion.div
              className="space-y-4 max-w-md mx-auto relative z-10"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              
              {/* Card 1: Minimalist TypeScript Code Editor with staggered line entrances */}
              <motion.div
                variants={fadeInUp}
                className="glass-card rounded-xl border border-white/5 shadow-xl overflow-hidden text-left font-mono"
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-dark-950/60 border-b border-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[10px] text-gray-500">dealerService.ts</span>
                </div>
                
                {/* Code viewport with stagger */}
                <motion.div
                  className="p-4 text-[11px] leading-relaxed text-gray-400 overflow-x-auto whitespace-pre"
                  variants={staggerContainer}
                >
                  <motion.div variants={codeLineReveal}>
                    <span className="text-purple-400">import</span> {'{ db }'} <span className="text-purple-400">from</span> <span className="text-emerald-400">"./database"</span>;
                  </motion.div>
                  <motion.div variants={codeLineReveal} className="mt-1">
                    <span className="text-blue-400">export async function</span> <span className="text-yellow-400">approveDealerOrder</span>(
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    &nbsp;&nbsp;orderId: <span className="text-orange-400">string</span>
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    ) {'{'}
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> order = <span className="text-purple-400">await</span> db.orders.update({'{'}
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    &nbsp;&nbsp;&nbsp;&nbsp;where: {'{'} id: orderId {'}'},
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    &nbsp;&nbsp;&nbsp;&nbsp;data: {'{'} status: <span className="text-emerald-400">"APPROVED"</span>, approvedAt: <span className="text-purple-400">new</span> <span className="text-yellow-400">Date</span>() {'}'}
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    &nbsp;&nbsp;{'}'});
                  </motion.div>
                  <motion.div variants={codeLineReveal} className="mt-1">
                    &nbsp;&nbsp;<span className="text-purple-400">await</span> db.stocks.reduce(order.items);
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> order;
                  </motion.div>
                  <motion.div variants={codeLineReveal}>
                    {'}'}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Card 2: Clean Stripe-like B2B Invoice Card */}
              <motion.div
                variants={fadeInUp}
                className="glass-card rounded-xl p-4.5 border border-white/5 shadow-xl text-left space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center text-brand-mint">
                      <Code className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white">Carabina B2B Modülü</span>
                  </div>
                  <span className="text-[10px] text-brand-mint font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full animate-pulse">
                    Sistem Aktif
                  </span>
                </div>

                <div className="border-t border-white/5 pt-3.5 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Müşteri</span>
                    <span className="text-white font-semibold">Gültekin Hırdavat Tic. A.Ş.</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">İşlem / Cari</span>
                    <span className="text-white font-mono">FAT-2026-4012</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Tutar</span>
                    <span className="text-white font-extrabold text-sm">₺48.250,00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Ödeme Yöntemi</span>
                    <span className="text-white">Havale / EFT</span>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg mt-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 font-semibold">Bayi Siparişi Onaylandı</span>
                  </div>
                  <span className="text-[10px] text-gray-500">Az Önce</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Trust Badges Bottom Line */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center space-x-2.5 py-2 px-4 rounded-xl bg-white/[0.015] border border-white/5 hover:border-brand/20 transition-all duration-300 group"
              >
                <badge.icon className="w-4 h-4 text-brand-mint group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
