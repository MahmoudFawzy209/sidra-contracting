"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Nav links definitions
  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
  ];

  // Detect scroll to toggle sticky styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-lg py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex flex-col items-start select-none">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <span className="text-primary-orange">سدرة</span> المعاني
              </span>
              <span className="text-[10px] text-gray-300 font-medium tracking-wide">
                للمقاولات والتشطيبات والصيانة
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-x-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-100 hover:text-primary-orange text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+966542693935"
              className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors font-medium text-sm"
            >
              <Phone size={16} className="text-primary-orange" />
              <span>0542693935</span>
            </a>
            <a
              href="https://wa.me/966542693935?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D9%87%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%85%D9%86%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%B3%D8%AF%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%86%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-orange hover:bg-primary-orange-hover text-primary-navy font-bold px-5 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>طلب خدمة</span>
              <ArrowLeft size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-orange focus:outline-none p-2 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3 text-right">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-100 hover:text-primary-orange px-3 py-2 rounded-md text-base font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <a
                  href="tel:+966542693935"
                  className="flex items-center justify-center gap-2 text-white hover:text-primary-orange transition-colors font-semibold"
                >
                  <Phone size={18} className="text-primary-orange" />
                  <span>0542693935</span>
                </a>
                <a
                  href="https://wa.me/966542693935?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D9%87%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D9%85%D9%86%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%B3%D8%AF%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%86%D9%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary-orange hover:bg-primary-orange-hover text-primary-navy font-bold py-3 px-4 rounded-lg text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>اطلب خدمة الآن</span>
                  <ArrowLeft size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
