"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "المهندس خالد العتيبي",
      role: "مالك فيلا سكنية - الرياض",
      comment: "تعاملت مع المؤسسة لترميم وتشطيب فيلا سكنية بالكامل، وكان العمل غاية في الاحترافية والدقة. التزام تام بالمواعيد وجودة المواد ممتازة وأسعارهم عادلة جداً.",
      rating: 5,
    },
    {
      id: 2,
      name: "الأستاذ عبد الله الشمري",
      role: "صاحب مبنى تجاري",
      comment: "أنصح بشدة بخدمات العزل والسباكة لديهم. قاموا بحل مشكلة تسريب المياه وعزل الأسطح نهائياً وبسرعة فائقة. فريق عملهم فني ومتعاون للغاية.",
      rating: 5,
    },
    {
      id: 3,
      name: "أبو فهد الحارثي",
      role: "مالك منزل سكتي",
      comment: "خدمة ممتازة وسرعة استجابة عالية. قمنا بعمل تمديدات كهربائية وتشطيب دهانات حديثة، النتيجة فاقت توقعاتنا مع تنظيم وسرعة في التسليم.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-orange font-bold text-lg mb-2 block">آراء العملاء</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy mb-4">
            ماذا يقول عملاؤنا عن خدماتنا؟
          </h2>
          <div className="w-20 h-1.5 bg-primary-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            نسعى دائماً لنيل رضا عملائنا وتقديم خدمة تفوق تطلعاتهم. إليكم بعض التقييمات من عملائنا الكرام.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-light-gray p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 left-6 text-gray-200 group-hover:text-primary-orange/10 transition-colors">
                <Quote size={40} className="transform rotate-180" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary-orange text-primary-orange" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 relative z-10">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-gray-200/60 pt-5 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-navy/5 flex items-center justify-center font-extrabold text-primary-navy text-lg">
                  {item.name.charAt(0)}
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-primary-navy text-base">{item.name}</h4>
                  <span className="text-gray-500 text-xs font-semibold">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
