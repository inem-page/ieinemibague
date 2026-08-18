"use client";

import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-16 text-center text-white sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-inem-amber/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-inem-green/15 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-6"
      >
        {eyebrow && (
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-amber">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-slate-300 sm:text-lg">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}
