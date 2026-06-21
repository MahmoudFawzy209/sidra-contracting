"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  category: "plumbing" | "electrical" | "insulation" | "plastering" | "finishing" | "restoration";
  categoryAr: string;
  imageUrl: string;
  aspectRatio: string; // Tailwind aspect class for visual variety
}

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = [
    { key: "all", name: "الكل" },
    { key: "plumbing", name: "سباكة وصحي" },
    { key: "electrical", name: "أعمال كهرباء" },
    { key: "insulation", name: "عزل حراري ومائي" },
    { key: "plastering", name: "لياسة وتجهيز" },
    { key: "finishing", name: "نقاشة وتشطيبات" },
    { key: "restoration", name: "ترميم ورفع كفاءة" },
  ];

  const items: PortfolioItem[] = [
    {
      id: 1,
      title: "تأسيس شبكات الصرف والتغذية النحاسية",
      category: "plumbing",
      categoryAr: "سباكة وصحي",
      imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&h=800&q=80",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: 2,
      title: "تركيب ديكورات جبسية وإنارة مخفية للأسقف",
      category: "electrical",
      categoryAr: "أعمال كهرباء",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&h=700&q=80",
      aspectRatio: "aspect-[6/7]",
    },
    {
      id: 3,
      title: "تشطيب صالة جلوس مودرن كاملة",
      category: "finishing",
      categoryAr: "نقاشة وتشطيبات",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=800&q=80",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: 4,
      title: "عزل الأسطح بلفائف البيتومين المقاوم للمياه",
      category: "insulation",
      categoryAr: "عزل حراري ومائي",
      imageUrl: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&h=600&q=80",
      aspectRatio: "aspect-square",
    },
    {
      id: 5,
      title: "تركيب وصيانة لوحات التوزيع والتحكم الذكي",
      category: "electrical",
      categoryAr: "أعمال كهرباء",
      imageUrl: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=600&h=500&q=80",
      aspectRatio: "aspect-[6/5]",
    },
    {
      id: 6,
      title: "لياسة خارجية احترافية لواجهة فيلا سكنية",
      category: "plastering",
      categoryAr: "لياسة وتجهيز",
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&h=750&q=80",
      aspectRatio: "aspect-[4/5]",
    },
    {
      id: 7,
      title: "صيانة صحية وتركيب خلاطات وإكسسوارات فاخرة",
      category: "plumbing",
      categoryAr: "سباكة وصحي",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&h=600&q=80",
      aspectRatio: "aspect-square",
    },
    {
      id: 8,
      title: "أعمال دهانات حوائط داخلية وتأثيرات ديكورية",
      category: "finishing",
      categoryAr: "نقاشة وتشطيبات",
      imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&h=600&q=80",
      aspectRatio: "aspect-square",
    },
    {
      id: 9,
      title: "ترميم وتجديد واجهة مبنى تجاري بالكامل",
      category: "restoration",
      categoryAr: "ترميم ورفع كفاءة",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&h=700&q=80",
      aspectRatio: "aspect-[6/7]",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  // Modal navigation handlers
  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  }, [selectedImage, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  }, [selectedImage, filteredItems]);

  // Handle keyboard events (Escape, Left, Right arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <section id="portfolio" className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-orange font-bold text-lg mb-2 block">معرض الأعمال</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy mb-4">
            شاهد مشاريعنا المنفذة على أرض الواقع
          </h2>
          <div className="w-20 h-1.5 bg-primary-orange mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            نحن نفخر بكل تفصيلة ننفذها. استعرض بعضاً من أعمالنا الأخيرة في مجالات السباكة، الكهرباء، العزل، اللياسة، والتشطيبات الفاخرة للفلل والمؤسسات.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat.key
                  ? "bg-primary-navy text-white shadow-md shadow-primary-navy/20"
                  : "bg-white text-primary-navy border border-gray-200/80 hover:bg-gray-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid Layout using columns */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`break-inside-avoid relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${item.aspectRatio}`}
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-primary-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none">
                  <div className="bg-primary-orange/20 self-start text-primary-orange text-xs font-bold px-3 py-1 rounded-md border border-primary-orange/30 mb-3">
                    {item.categoryAr}
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-xs flex items-center gap-1.5 mt-1">
                    <ZoomIn size={14} className="text-primary-orange" />
                    <span>انقر لتكبير الصورة</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-navy-dark/95 backdrop-blur-md"
            >
              {/* Close Area */}
              <div className="absolute inset-0 cursor-default" onClick={() => setSelectedImage(null)} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all focus:outline-none"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Slider Navigation (Right/Next in RTL is Next image) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Content Panel */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center z-10"
              >
                <div className="relative w-full h-[50vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-primary-navy border border-white/10">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Image Details */}
                <div className="text-right w-full mt-5 px-2">
                  <span className="text-primary-orange text-sm font-bold block mb-1">
                    {selectedImage.categoryAr}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl font-extrabold leading-tight">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
