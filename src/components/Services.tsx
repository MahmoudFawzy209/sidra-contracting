"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Paintbrush,
  Hammer,
  Layers,
  Wrench,
  ChevronLeft,
  Waves,
} from "lucide-react";
import Image from "next/image";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Droplet className="w-6 h-6 text-primary-navy" />,
      title: "السباكة والصحي",
      description: "خدمات متكاملة لتأسيس وصيانة شبكات المياه والصرف الصحي للمنازل والمنشآت.",
      features: ["تأسيس شبكات المياه", "تركيب الأدوات الصحية", "إصلاح التسربات", "صيانة المواسير"],
      imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-primary-navy" />,
      title: "النقاشة والتشطيبات",
      description: "تنفيذ أعمال الدهانات والتشطيبات الداخلية والخارجية بأحدث الأساليب الفنية.",
      features: ["دهانات داخلية وخارجية", "تركيب ورق جدران وبديل الخشب", "ديكورات حديثة وجبس بورد", "معالجة التشققات وتقشير الجدران"],
      imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Hammer className="w-6 h-6 text-primary-navy" />,
      title: "أعمال اللياسة",
      description: "تنفيذ أعمال اللياسة الداخلية والخارجية باحترافية عالية وتجهيز الأسطح للتشطيب النهائي.",
      features: ["لياسة داخلية ناعمة", "لياسة واجهات خارجية متطابقة", "معالجة واستعدال الجدران المائلة", "تجهيز الأسطح وتأميم الزوايا"],
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Layers className="w-6 h-6 text-primary-navy" />,
      title: "العزل المائي والحراري",
      description: "حلول احترافية للعزل المائي والحراري لحماية المباني وزيادة عمرها الافتراضي.",
      features: ["عزل الأسطح من مياه الأمطار", "العزل المائي للحمامات والمطابخ", "العزل الحراري للواجهات والجدران", "معالجة الرطوبة والملوحة بالأقبية"],
      imageUrl: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary-navy" />,
      title: "رفع الكفاءة والترميم",
      description: "تطوير وتحسين المباني القائمة ورفع كفاءتها التشغيلية والإنشائية والجمالية.",
      features: ["ترميم وتدعيم المباني القديمة", "صيانة شاملة وتأهيل المنشآت", "إعادة تأهيل الأنظمة الميكانيكية والكهربائية", "تطوير المرافق والواجهات"],
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Waves className="w-6 h-6 text-primary-navy" />,
      title: "شلالات مياه ونوافير",
      description: "تصميم وتنفيذ شلالات المياه والنوافير المنزلية والخارجية بأحدث الديكورات العصرية.",
      features: ["تصميم شلالات جدارية حديثة", "تركيب نوافير مضيئة ذكية", "تنسيق مساحات مائية وحدائق", "صيانة المضخات وفلاتر المياه"],
      imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-orange font-bold text-lg mb-2 block">خدماتنا</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy mb-4">
            نقدم أفضل الخدمات الفنية والحلول المتكاملة
          </h2>
          <div className="w-20 h-1.5 bg-primary-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            نتميز بتقديم باقة واسعة من الخدمات المتخصصة في أعمال المقاولات العامة والتشطيبات والصيانة بأعلى معايير الدقة والمهنية تحت إشراف نخبة من المختصين.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-light-gray rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy-dark/70 to-transparent" />
                
                {/* Floating Icon inside Image */}
                <div className="absolute bottom-4 right-4 bg-primary-orange p-3 rounded-xl shadow-lg flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col text-right">
                <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-auto border-t border-gray-200/60 pt-5">
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 justify-start text-xs sm:text-sm text-gray-700">
                        <ChevronLeft className="w-4 h-4 text-primary-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 font-medium mb-4 text-sm sm:text-base">
            هل تحتاج إلى استشارة فنية مجانية عن خدمة معينة أو عرض سعر مخصص لمشروعك؟
          </p>
          <a
            href="https://wa.me/966542693935?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D9%87%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-navy hover:bg-primary-navy-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <span>طلب معاينة مجانية للموقع</span>
            <ChevronLeft size={16} className="text-primary-orange" />
          </a>
        </div>
      </div>
    </section>
  );
}
