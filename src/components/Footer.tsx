"use client";

import { Phone, Mail, MapPin, ArrowUp, ChevronLeft } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-navy-dark text-gray-300 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative architectural grid lines in background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-right">
          
          {/* Logo & Company Description (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <span className="text-primary-orange">سدرا</span> المعاني
              </span>
              <p className="text-xs text-gray-400 mt-1 font-semibold">
                للمقاولات والتشطيبات والصيانة ورفع الكفاءة
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              شريكك الإنشائي المعتمد في المنطقة الشرقية لتأسيس وتطوير وتشطيب المباني السكنية والتجارية وأعمال الديكورات والشلالات والنوافير وخدمات المرافق والصيانة بأعلى مستويات الجودة.
            </p>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-extrabold text-base border-r-2 border-primary-orange pr-3">
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-primary-orange transition-colors flex items-center gap-1.5 justify-start">
                  <ChevronLeft size={14} className="text-primary-orange/50" />
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-orange transition-colors flex items-center gap-1.5 justify-start">
                  <ChevronLeft size={14} className="text-primary-orange/50" />
                  <span>خدماتنا</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-extrabold text-base border-r-2 border-primary-orange pr-3">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>سباكة وصرف صحي</li>
              <li>لياسة وتجهيز حوائط</li>
              <li>عزل مائي وحراري</li>
              <li>دهانات وتشطيبات</li>
              <li>شلالات مياه ونوافير</li>
            </ul>
          </div>

          {/* Contact Details (3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-extrabold text-base border-r-2 border-primary-orange pr-3">
              بيانات التواصل
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 justify-start">
                <MapPin size={18} className="text-primary-orange mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  المنطقة الشرقية (الدمام والخبر)<br />
                  <span className="text-xs text-gray-500 block mt-1 leading-normal">
                    حي طيبة، حي الفيصلية، حي 91، حي الشاطئ، الحزام الذهبي، الخبر
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Phone size={18} className="text-primary-orange flex-shrink-0" />
                <a href="tel:+966542693935" className="text-gray-400 hover:text-white transition-colors">
                  0542693935
                </a>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Mail size={18} className="text-primary-orange flex-shrink-0" />
                <a href="mailto:info@sedra-almaani.com" className="text-gray-400 hover:text-white transition-colors">
                  info@sedra-almaani.com
                </a>
              </li>
            </ul>
          </div>

        </div>


        {/* Footer Bottom (Border Line + Copyrights + Back to Top) */}
        <div className="border-t border-white/10 pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 font-semibold">
            &copy; {new Date().getFullYear()} سدرا المعاني للمقاولات والتشطيبات والصيانة. جميع الحقوق محفوظة.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-primary-orange hover:text-primary-navy text-white p-3 rounded-xl border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
            aria-label="Back to top"
          >
            <span className="text-xs font-bold hidden sm:inline select-none">الرجوع للأعلى</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
