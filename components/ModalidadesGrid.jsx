"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modalidades } from "@/data/modalidades";
import { icons } from "@/lib/icons";
import Reveal from "@/components/Reveal";

export default function ModalidadesGrid() {
  return (
    <section id="modalidades" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-green">
          Formación técnica
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-inem-navy sm:text-4xl">
          Nuestras Modalidades Técnicas
        </h2>
        <p className="mt-4 text-slate-600">
          Ocho especialidades para que nuestros estudiantes construyan su
          proyecto de vida con una base técnica sólida.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modalidades.map((m, i) => {
          const Icon = icons[m.icon];
          return (
            <Reveal key={m.slug} delay={(i % 4) * 0.08}>
              <Link href={`/modalidades/${m.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-shadow duration-300 group-hover:shadow-hover"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: m.color }}
                  />
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-inem-navy">
                    {m.nombre}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{m.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-inem-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ver más <ArrowRight size={14} />
                  </span>
                </motion.div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
