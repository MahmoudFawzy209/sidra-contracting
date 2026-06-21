"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Coins, Timer, Users, HeartHandshake } from "lucide-react";

interface ReasonItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const reasons: ReasonItem[] = [
    {
      icon: <Award className="w-8 h-8 text-primary-orange" />,
      title: "خبرة عالية",
      description: "نمتلك سنوات طويلة من الخبرة في السوق السعودي مكّنتنا من التعامل مع أدق التفاصيل الفنية بكفاءة تامة.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-orange" />,
      title: "جودة مضمونة",
      description: "نستخدم مواد ذات جودة ممتازة وننفذ الأعمال وفق الكود السعودي والمعايير الفنية المعتمدة لضمان سلامة البناء.",
    },
    {
      icon: <Coins className="w-8 h-8 text-primary-orange" />,
      title: "أسعار تنافسية",
      description: "نحرص على توفير تسعيرات عادلة وشفافة تتناسب مع ميزانية العميل مع تحقيق التوازن المثالي بين السعر والجودة.",
    },
    {
      icon: <Timer className="w-8 h-8 text-primary-orange" />,
      title: "سرعة التنفيذ",
      description: "نلتزم بالخطة الزمنية المتفق عليها ونوزع الفنيين باحترافية لإنجاز الأعمال في وقت قياسي وبدون تأخير.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary-orange" />,
      title: "فريق متخصص",
      description: "نوظف طاقماً فنياً وهندسياً متمرساً ومدرباً على أحدث المعدات والطرق الإنشائية والتشطيبية الحديثة.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary-orange" />,
      title: "خدمة عملاء ممتازة",
      description: "نتابع مع عملائنا خطوة بخطوة أثناء التنفيذ ونقدم دعماً متواصلاً واستجابة سريعة لأي استفسارات أو ملاحظات.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-primary-navy relative overflow-hidden text-white">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy-light/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-orange font-bold text-lg mb-2 block">لماذا تختارنا</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            لماذا يفضل العملاء التعامل مع سدرة المعاني؟
          </h2>
          <div className="w-20 h-1.5 bg-primary-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            نحن لا نقدم مجرد خدمات إنشائية وصيانة، بل نقدم حلولاً حقيقية متكاملة تضمن راحة البال وأعلى قيم الجودة لعملائنا في كل خطوة.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card-dark p-8 rounded-2xl flex flex-col items-start text-right hover:border-primary-orange/30 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-orange/10 group-hover:border-primary-orange/20 transition-all">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
