"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const servicesList = [
    "سباكة وصحي",
    "كهرباء",
    "لياسة وتجهيز",
    "عزل مائي وحراري",
    "نقاشة وتشطيبات",
    "ترميم ورفع كفاءة",
    "أخرى / استفسار عام",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert("الرجاء ملء جميع الحقول المطلوبة (الاسم، الجوال، الخدمة)");
      return;
    }

    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", service: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-orange font-bold text-lg mb-2 block">تواصل معنا</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy mb-4">
            نحن جاهزون لخدمتكم، اتصل بنا الآن
          </h2>
          <div className="w-20 h-1.5 bg-primary-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            تواصل معنا مباشرة عبر وسائل الاتصال المتاحة أو أرسل طلبك من خلال النموذج أدناه، وسيقوم مهندس مختص بالتواصل معك في أقرب وقت.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details (4 columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Info Cards */}
            <div className="space-y-6">
              
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-navy/5 flex items-center justify-center text-primary-navy flex-shrink-0">
                  <Phone size={22} className="text-primary-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-navy text-base mb-1">اتصال مباشر</h3>
                  <a href="tel:+966500000000" className="text-gray-600 font-semibold text-sm hover:text-primary-orange transition-colors">
                    0500000000
                  </a>
                  <p className="text-xs text-gray-400 mt-1">متاح طوال اليوم لاستقبال مكالماتكم</p>
                </div>
              </div>

              {/* Whatsapp Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-navy/5 flex items-center justify-center text-primary-navy flex-shrink-0">
                  <MessageSquare size={22} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-navy text-base mb-1">راسلنا عبر واتساب</h3>
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-semibold text-sm hover:text-green-500 transition-colors"
                  >
                    0500000000
                  </a>
                  <p className="text-xs text-gray-400 mt-1">اضغط للتحدث المباشر مع الدعم الفني</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-navy/5 flex items-center justify-center text-primary-navy flex-shrink-0">
                  <Mail size={22} className="text-primary-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-navy text-base mb-1">البريد الإلكتروني</h3>
                  <a href="mailto:info@sedra-almaani.com" className="text-gray-600 font-semibold text-sm hover:text-primary-orange transition-colors">
                    info@sedra-almaani.com
                  </a>
                  <p className="text-xs text-gray-400 mt-1">راسلنا لعروض الأسعار الرسمية والمناقصات</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-navy/5 flex items-center justify-center text-primary-navy flex-shrink-0">
                  <MapPin size={22} className="text-primary-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-navy text-base mb-1">مقر المؤسسة</h3>
                  <p className="text-gray-600 text-sm font-semibold leading-relaxed">
                    طريق الملك فهد، الرياض، المملكة العربية السعودية
                  </p>
                  <p className="text-xs text-gray-400 mt-1">نغطي كافة أحياء الرياض والمناطق المجاورة</p>
                </div>
              </div>

            </div>

            {/* Visual reassurance banner */}
            <div className="hidden lg:block bg-primary-navy text-white p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-primary-orange/10 rounded-full" />
              <h4 className="font-bold text-base text-primary-orange mb-2">معاينة مجانية للمشروع</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                نقوم بإرسال مهندس فني لمعاينة الموقع وتحديد مقايسة مبدئية مجاناً ودون أي التزامات.
              </p>
            </div>

          </div>

          {/* Contact Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-xl text-right">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary-navy mb-6">
                أرسل طلب خدمة سريع
              </h3>
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl flex flex-col items-center text-center gap-4"
                >
                  <CheckCircle size={48} className="text-green-600 animate-bounce" />
                  <div>
                    <h4 className="font-extrabold text-lg mb-2 text-green-950">تم إرسال طلبك بنجاح!</h4>
                    <p className="text-sm text-green-700 leading-relaxed">
                      شكراً لتواصلك مع سدرا المعاني. سيقوم مهندسنا الفني بمراجعة طلبك والاتصال بك هاتفياً خلال 24 ساعة كحد أقصى.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors"
                  >
                    إرسال طلب آخر
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary-navy mb-2">
                      الاسم بالكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="اكتب اسمك الثلاثي"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-primary-navy mb-2">
                      رقم الجوال <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="مثال: 050XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none transition-all text-sm text-left dir-ltr"
                    />
                  </div>

                  {/* Service selector */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-primary-navy mb-2">
                      الخدمة المطلوبة <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none transition-all text-sm bg-white"
                    >
                      <option value="">اختر التخصص المطلوب</option>
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-primary-navy mb-2">
                      تفاصيل المشروع أو الرسالة (اختياري)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب هنا تفاصيل مشروعك أو أي استفسار آخر..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-primary-orange hover:bg-primary-orange-hover disabled:bg-gray-300 disabled:cursor-not-allowed text-primary-navy font-extrabold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base"
                  >
                    <span>{status === "sending" ? "جاري الإرسال..." : "إرسال طلب الخدمة"}</span>
                    <Send size={18} className="transform rotate-180" />
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
