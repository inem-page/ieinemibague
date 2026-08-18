"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy-gradient px-8 py-14 text-center text-white sm:px-16">
          <motion.div
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-inem-amber/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2 className="relative font-display text-2xl font-extrabold sm:text-3xl">
            ¿Quieres hacer parte de la comunidad INEMita?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-slate-300">
            Conoce el proceso de matrícula y da el siguiente paso en tu
            formación técnica.
          </p>
          <Link
            href="/contactenos"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-inem-amber px-7 py-3.5 font-semibold text-inem-navy shadow-hover transition-all hover:-translate-y-0.5 hover:brightness-105"
          >
            Contáctanos ahora <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
