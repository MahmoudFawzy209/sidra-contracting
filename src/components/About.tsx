"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, Award, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  const specializations = [
    "المقاولات العامة والإنشاءات",
    "أعمال التشطيبات والديكورات الداخلية والخارجية",
    "صيانة وترميم المباني السكنية والتجارية",
    "رفع الكفاءة التشغيلية والإنشائية للمنشآت",
    "أعمال اللياسة والدهانات والعوازل المتكاملة",
  ];

  const coreValues = [
    {
      icon: <Award className="w-8 h-8 text-primary-orange" />,
      title: "الجودة العالية",
      description: "نلتزم بأعلى المواصفات الهندسية ومواد البناء المعتمدة لضمان جودة تدوم طويلاً.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-orange" />,
      title: "الالتزام بالمواعيد",
      description: "نحن نقدّر وقت عملائنا، ونعمل بجدول زمني دقيق لإنهاء المشاريع في وقتها المحدد.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-orange" />,
      title: "الأسعار المناسبة",
      description: "نقدم حلولاً اقتصادية وخطط تسعير واضحة ومنافسة دون المساس بجودة التنفيذ.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary-orange" />,
      title: "فريق عمل متخصص",
      description: "نضم نخبة من المهندسين والفنيين ذوي الخبرة الطويلة والمهارة العالية في كل تخصص.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-light-gray relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-navy/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-orange/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] sm:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="مهندس يشرف على موقع بناء"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay statistics badge */}
            <div className="absolute bottom-6 right-6 left-6 sm:right-auto bg-primary-navy text-white p-6 rounded-xl shadow-xl max-w-xs border border-white/10 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-primary-orange mb-1">15+ سنة</p>
              <p className="text-sm font-semibold text-gray-200">خبرة في قطاع المقاولات، التشطيبات والترميم بالمملكة</p>
            </div>
          </motion.div>

          {/* Right Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-right"
          >
            <span className="text-primary-orange font-bold text-lg mb-2">من نحن</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy mb-6 leading-tight">
              شريككم الموثوق في البناء والتشطيب والتطوير
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              تأسست <strong>مؤسسة سدرة المعاني للمقاولات العامة</strong> لتكون علامة فارقة في قطاع الإنشاءات والتشطيبات بالمملكة العربية السعودية. نحن نؤمن بأن كل مشروع هو قصة نجاح جديدة، لذلك نحرص على تقديم خدمات متكاملة تغطي كافة متطلبات البناء والصيانة ورفع الكفاءة التشغيلية والإنشائية للمباني بأعلى مستويات الاحترافية والدقة.
            </p>

            <h3 className="text-lg font-bold text-primary-navy mb-4">مجالات تخصصنا:</h3>
            <ul className="space-y-3 mb-10">
              {specializations.map((spec, index) => (
                <li key={index} className="flex items-start gap-3 justify-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Values / Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary-navy/5 flex items-center justify-center mb-6 group-hover:bg-primary-orange/10 transition-colors">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-primary-navy mb-3">{value.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
