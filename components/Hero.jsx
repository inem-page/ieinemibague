"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PenLine, GraduationCap } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Formas decorativas de fondo */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-inem-amber/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-inem-green/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block rounded-full bg-inem-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-inem-green">
            Formando desde 1969
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-inem-navy sm:text-5xl lg:text-[3.2rem]">
            Institución Educativa Técnica{" "}
            <span className="text-inem-blue">INEM Manuel Murillo Toro</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Formamos personas emprendedoras para una vida digna, el trabajo
            creativo y la educación superior — con ocho modalidades técnicas
            en Ibagué.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contactenos"
              className="inline-flex items-center gap-2 rounded-full bg-inem-navy px-7 py-3.5 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-inem-amber hover:text-inem-navy hover:shadow-hover"
            >
              <PenLine size={18} /> Matricúlate ahora
            </Link>
            <a
              href="#modalidades"
              className="inline-flex items-center gap-2 rounded-full border-2 border-inem-navy px-7 py-3.5 font-semibold text-inem-navy transition-all hover:-translate-y-0.5 hover:bg-inem-navy hover:text-white"
            >
              <GraduationCap size={18} /> Ver modalidades
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  );
}
