import { type FC } from 'react';
import { ShieldCheck, DollarSign, PackageCheck, FileText, ClipboardList, Database, FileBarChart2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const B2BSolutions: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const b2bFeatures = [
    { name: 'Bayi Sipariş Portalı', desc: 'Bayileriniz 7/24 hızlıca sipariş girsin.', icon: PackageCheck },
    { name: 'Toptan Ürün Kataloğu', desc: 'Ürünlerinizi resimli ve kategorili listeyin.', icon: Database },
    { name: 'Bayiye Özel Fiyatlandırma', desc: 'Farklı bayi gruplarına özel iskontolar tanımlayın.', icon: DollarSign },
    { name: 'Teklif ve Onay Sistemi', desc: 'Büyük hacimli siparişlerde teklif sürecini yönetin.', icon: FileText },
    { name: 'Cari Müşteri Takibi', desc: 'Bakiye, ödeme ve cari ekstreleri şeffaf izleyin.', icon: ClipboardList },
    { name: 'Sipariş Durumu Takibi', desc: 'Hazırlanıyor, onaylandı, kargolandı durumları.', icon: ShieldCheck },
    { name: 'Admin Yönetim Paneli', desc: 'Tüm sipariş ve bayileri tek merkezden yönetin.', icon: FileBarChart2 },
    { name: 'Stok ve Raporlama', desc: 'Kritik stok seviyeleri ve detaylı satış analizleri.', icon: FileBarChart2 },
  ];

  return (
    <section id="b2b" className="relative py-20 md:py-28 overflow-hidden bg-dark-900/40">
      {/* Background radial accent glow */}
      <div className="absolute left-[-5%] top-[20%] w-[400px] h-[400px] bg-[rgba(37,99,235,0.12)] rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute right-[5%] bottom-[10%] w-[350px] h-[350px] bg-[rgba(16,185,129,0.10)] rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Features Grid Column */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase">
              B2B YAZILIM SİSTEMLERİ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              B2B İşletmeler İçin <br />
              Özel Yazılım Çözümleri
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Toptancılar, üreticiler, distribütörler ve bayilik sistemiyle çalışan firmalar için sipariş, teklif, stok ve müşteri süreçlerini dijitalleştiren sistemler geliştiriyoruz.
            </p>

            {/* Features Sub-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {b2bFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand/15 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-brand/5 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">
                      {feature.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Layout - Live Panel Mockup */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent blur-[80px] rounded-full -z-10 scale-95" />
            
            <div className="glass-card rounded-2xl p-5 border border-white/5 shadow-2xl relative max-w-md mx-auto text-left">
              {/* Header Mockup */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4">
                <div>
                  <h4 className="text-xs font-extrabold text-white">B2B BAYİ PORTALI</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">Sipariş & Cari Durumu</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span className="text-[10px] text-gray-400 font-semibold bg-white/5 px-2 py-0.5 rounded">
                    Admin Ekranı
                  </span>
                </div>
              </div>

              {/* Order Info Panel Items */}
              <div className="space-y-3.5">
                
                {/* Active Order Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium block">Bayi Adı</span>
                      <span className="text-sm font-bold text-white block mt-0.5">Aksoy Kırtasiye Ltd. Şti.</span>
                    </div>
                    <span className="text-[10px] text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-semibold animate-pulse">
                      Onay Bekliyor
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-3">
                    <div>
                      <span className="text-[9px] text-gray-500 block">Sipariş İçeriği</span>
                      <span className="text-xs font-bold text-white block mt-0.5">24 Farklı Ürün</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-gray-500 block">Toplam Tutar</span>
                      <span className="text-xs font-extrabold text-brand block mt-0.5">₺18.450,00</span>
                    </div>
                  </div>
                </div>

                {/* Stock Warning Box */}
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-3 flex items-center space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 text-sm">
                    ⚠️
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-amber-500 block">Kritik Stok Uyarısı</span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">A4 Fotokopi kağıdı dahil 3 ürün azaldı.</span>
                  </div>
                </div>

                {/* Recent Transactions Mini List */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider block uppercase px-1">
                    Son Bayi İşlemleri
                  </span>
                  
                  <div className="flex items-center justify-between bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] p-2.5 rounded-xl transition-all duration-200">
                    <div className="text-left">
                      <span className="text-[11px] font-bold text-white block">Yıldız Ticaret</span>
                      <span className="text-[9px] text-gray-500 block">Ödeme Alındı (Havale/EFT)</span>
                    </div>
                    <span className="text-xs font-bold text-brand-mint">
                      +₺32.000
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] p-2.5 rounded-xl transition-all duration-200">
                    <div className="text-left">
                      <span className="text-[11px] font-bold text-white block">Esen Hırdavat</span>
                      <span className="text-[9px] text-gray-500 block">Yeni Sipariş Oluşturuldu</span>
                    </div>
                    <span className="text-xs font-bold text-white">
                      ₺8.900
                    </span>
                  </div>
                </div>

                {/* Quick Quick-action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button className="text-[10px] text-gray-400 font-bold border border-white/5 hover:border-white/20 bg-white/[0.02] py-2 rounded-lg text-center transition-colors">
                    Reddet
                  </button>
                  <button className="text-[10px] text-white font-bold bg-brand hover:bg-brand/90 py-2 rounded-lg text-center transition-colors shadow-lg shadow-brand/15">
                    Siparişi Onayla
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
