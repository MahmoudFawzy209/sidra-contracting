"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-navy pt-28 pb-16"
    >
      {/* Background Image with Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt="Sidra Al-Ma'ani contracting background"
          fill
          priority
          className="object-cover opacity-30 object-center"
        />
        {/* Gradients overlay for visual premium feeling */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-primary-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy-dark/90 to-transparent" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-orange/15 border border-primary-orange/30 text-primary-orange mb-6 text-sm font-semibold tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
          تشطيبات - صيانة - رفع كفاءة وخدمات متكاملة
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          مؤسسة <span className="text-primary-orange text-gradient">سدرا المعاني</span>
          <br className="hidden sm:inline" />{" "}
          سباك.. وتشطيبات وشلالات مياه  ونوافير منزليه  وعزل  ولياسه ونقاشه وصيانه منازل ورفع كفائه
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold mb-6 max-w-4xl mx-auto leading-relaxed"
        >
          <span className="text-primary-orange font-bold text-lg sm:text-xl mt-2 block">
            سباكه - عزل - شلالات مياه - نوافير - نقاشه - لياسه - صيانه عامه للمنازل
          </span>
        </motion.h2>



        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href="tel:+966542693935"
            className="w-full sm:w-auto bg-primary-orange hover:bg-primary-orange-hover text-primary-navy font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-primary-orange/20 transition-all duration-300 flex items-center justify-center gap-2 text-base group"
          >
            <span>اطلب خدمة الآن</span>
            <PhoneCall size={18} className="group-hover:translate-x-[-4px] transition-transform" />
          </a>
          <a
            href="https://wa.me/966542693935?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D9%87%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%85%D9%86%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%B3%D8%AF%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%86%D9%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-base backdrop-blur-md"
          >
            <MessageCircle size={18} className="text-green-400" />
            <span>تواصل عبر واتساب</span>
          </a>
        </motion.div>

        {/* Stats Row (Replacer for About Us) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass-card-dark p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-orange mb-1">15+ سنة خبرة</span>
            <span className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed">فريق عمل فني متخصص في المقاولات والأعمال الفنية والتشطيبات والصيانة</span>
          </div>
          <div className="glass-card-dark p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-orange mb-1">جودة مضمونة</span>
            <span className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed">تنفيذ فني احترافي مطابق للمواصفات الفنية</span>
          </div>
          <div className="glass-card-dark p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-orange mb-1">سرعة وإنجاز</span>
            <span className="text-xs sm:text-sm text-gray-300 font-semibold leading-relaxed">التزام تام بالمواعيد وتسليم أسرع للمشاريع</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
