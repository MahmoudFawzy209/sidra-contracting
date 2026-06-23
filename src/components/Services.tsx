"use client";

import { useState, useEffect } from "react";
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
  imageUrls?: string[];
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Droplet className="w-6 h-6 text-primary-navy" />,
      title: "السباكة والصحي",
      description: "خدمات تأسيس وصيانة شبكات المياه والصرف الصحي، نوفر لكم أفضل سباك بالدمام وفني سباكه محترف لتشطيب وصيانة منازل بالدمام.",
      features: ["تأسيس شبكات المياه", "تركيب الأدوات الصحية", "إصلاح التسربات", "صيانة المواسير"],
      imageUrl: "/images/plumbing.png",
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-primary-navy" />,
      title: "النقاشة والتشطيبات",
      description: "تنفيذ أعمال الدهانات والتشطيبات الداخلية والخارجية بواسطة نقاش بالدمام ذو خبرة، مع خدمات مؤسسه تشطيبات بالدمام للفلل والمنشآت.",
      features: ["دهانات داخلية وخارجية", "تركيب ورق جدران وبديل الخشب", "ديكورات حديثة وجبس بورد", "معالجة التشققات وتقشير الجدران"],
      imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Hammer className="w-6 h-6 text-primary-navy" />,
      title: "أعمال اللياسة",
      description: "تنفيذ أعمال اللياسة الداخلية والخارجية باحترافية وتجهيز الأسطح؛ نوفر مقاول لياسه بالدمام لتأمين واستعدال الجدران المائلة.",
      features: ["لياسة داخلية ناعمة", "لياسة واجهات خارجية متطابقة", "معالجة واستعدال الجدران المائلة", "تجهيز الأسطح وتأميم الزوايا"],
      imageUrl: "/images/plastering.png",
    },
    {
      icon: <Layers className="w-6 h-6 text-primary-navy" />,
      title: "العزل المائي والحراري",
      description: "حلول احترافية يقدمها مقاول عوازل بالدمام لحماية الأسطح وعزل الحمامات والمطابخ، معتمدين من مؤسسه عوازل بالدمام متخصصة.",
      features: ["عزل الأسطح من مياه الأمطار", "العزل المائي للحمامات والمطابخ", "العزل الحراري للواجهات والجدران", "معالجة الرطوبة والملوحة بالأقبية"],
      imageUrl: "/images/insulation.jpg",
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary-navy" />,
      title: "رفع الكفاءة والترميم",
      description: "تطوير وتحسين وتأهيل المباني القائمة؛ نقدم خدمات صيانة منازل بالدمام وترميم وتدعيم المنشآت السكنية والتجارية باحترافية.",
      features: ["ترميم وتدعيم المباني القديمة", "صيانة شاملة وتأهيل المنشآت", "إعادة تأهيل الأنظمة الميكانيكية والكهربائية", "تطوير المرافق والواجهات"],
      imageUrl: "/images/renovation.png",
    },
    {
      icon: <Waves className="w-6 h-6 text-primary-navy" />,
      title: "شلالات مياه ونوافير",
      description: "تصميم وتركيب نوافير وشلالات منزلية بأحدث الديكورات العصرية، تحت إشراف معلم نوافير و شلالات بالدمام لضمان الجمال والفاعلية.",
      features: ["تصميم شلالات جدارية حديثة", "تركيب نوافير مضيئة ذكية", "تنسيق مساحات مائية وحدائق", "صيانة المضخات وفلاتر المياه"],
      imageUrl: "/images/waterfall1.jpg",
      imageUrls: ["/images/waterfall1.jpg", "/images/waterfall2.jpg"],
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
            <ServiceCard
              key={index}
              service={service}
              index={index}
              cardVariants={cardVariants}
            />
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

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  cardVariants: import("framer-motion").Variants;
}

function ServiceCard({ service, cardVariants }: ServiceCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = service.imageUrls || [service.imageUrl];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length]);

  return (
    <motion.div
      variants={cardVariants}
      className="bg-light-gray rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100 hover:-translate-y-2"
    >
      {/* Card Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        {images.map((imgUrl, imgIdx) => (
          <Image
            key={imgUrl}
            src={imgUrl}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={imgIdx === 0}
            className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 absolute inset-0"
            style={{
              opacity: imgIdx === currentImageIndex ? 1 : 0,
              pointerEvents: imgIdx === currentImageIndex ? "auto" : "none",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy-dark/70 to-transparent pointer-events-none z-10" />
        
        {/* Floating Icon inside Image */}
        <div className="absolute bottom-4 right-4 bg-primary-orange p-3 rounded-xl shadow-lg flex items-center justify-center z-20">
          {service.icon}
        </div>

        {/* Small Slider Dots indicators */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-4 flex gap-1 z-20 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
            {images.map((_, imgIdx) => (
              <button
                key={imgIdx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImageIndex(imgIdx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  imgIdx === currentImageIndex ? "bg-primary-orange w-3.5" : "bg-white/60"
                }`}
                aria-label={`Go to slide ${imgIdx + 1}`}
              />
            ))}
          </div>
        )}
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
  );
}
