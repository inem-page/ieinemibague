"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/images/entrada.jpg", alt: "Entrada principal del INEM Ibagué" },
  { src: "/images/colegio.jpg", alt: "Fachada de la institución" },
  { src: "/images/estatua.jpg", alt: "Estatua conmemorativa del INEM" },
  { src: "/images/coliseo.jpg", alt: "Coliseo del INEM Ibagué" },
  { src: "/images/dia-del-idioma.jpg", alt: "Celebración del Día del Idioma" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    []
  );
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  // Swipe táctil
  let touchStartX = 0;
  const onTouchStart = (e) => (touchStartX = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) (diff > 0 ? prev : next)();
  };

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-hover sm:aspect-[16/11] lg:aspect-[4/5]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inem-navy/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Flechas */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-inem-navy backdrop-blur transition hover:bg-white"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-inem-navy backdrop-blur transition hover:bg-white"
      >
        <ChevronRight size={18} />
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-inem-amber" : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
