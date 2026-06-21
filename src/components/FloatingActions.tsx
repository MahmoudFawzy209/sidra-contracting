"use client";

import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Show floating actions after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappUrl =
    "https://wa.me/966542693935?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D9%87%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%85%D9%86%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%B3%D8%AF%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%86%D9%8A";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 sm:gap-4 pointer-events-auto">
          
          {/* WhatsApp Floating Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
            aria-label="تواصل معنا عبر واتساب"
          >
            {/* Pulsing ring animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
            <MessageCircle size={28} className="relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-primary-navy text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 shadow-lg">
              تحدث معنا واتساب
            </span>
          </motion.a>

          {/* Direct Call Floating Button */}
          <motion.a
            href="tel:+966542693935"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-primary-orange hover:bg-primary-orange-hover text-primary-navy rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
            aria-label="اتصل بنا هاتفياً"
          >
            <span className="absolute inset-0 rounded-full bg-primary-orange/40 animate-pulse pointer-events-none" />
            <PhoneCall size={24} className="relative z-10" />

            {/* Tooltip */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-primary-navy text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 shadow-lg">
              اتصال هاتفي مباشر
            </span>
          </motion.a>

        </div>
      )}
    </AnimatePresence>
  );
}
