"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import { historiaIntro, historiaCards, timeline } from "@/data/history";

function QuoteCard() {
  const [index, setIndex] = useState(0);
  const card = historiaCards[index];

  const change = (dir) =>
    setIndex((i) => (i + dir + historiaCards.length) % historiaCards.length);

  return (
    <div className="rounded-2xl bg-slate-50 p-8 shadow-soft">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-slate-600">&ldquo;{card.quote}&rdquo;</p>
          <p className="mt-4 font-display text-sm font-semibold text-inem-navy">
            — {card.author}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          onClick={() => change(-1)}
          aria-label="Cita anterior"
          className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-inem-navy transition-colors hover:bg-white"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="grid h-11 w-11 place-items-center rounded-full bg-inem-navy text-white">
          <BookOpen size={18} />
        </div>
        <button
          onClick={() => change(1)}
          aria-label="Siguiente cita"
          className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-inem-navy transition-colors hover:bg-white"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function HistoryContent() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-green">
            Un legado de
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-inem-navy">
            Nuestra Historia
          </h2>
          <div className="mt-5 space-y-4 text-slate-600">
            {historiaIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <QuoteCard />
        </Reveal>
      </section>

      <section className="bg-slate-50 py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-green">
            Momentos clave en
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-inem-navy">
            Nuestra Trayectoria
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl px-6">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-6 sm:items-center ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden flex-1 sm:block ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    {i % 2 === 0 && (
                      <p className="inline-block max-w-sm rounded-xl bg-white p-4 text-sm text-slate-600 shadow-soft">
                        {item.text}
                      </p>
                    )}
                  </div>

                  <div className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-inem-navy text-white ring-4 ring-slate-50">
                    <CalendarDays size={15} />
                  </div>

                  <div className="flex-1">
                    <span className="font-display text-lg font-extrabold text-inem-blue">
                      {item.year}
                    </span>
                    <p className="mt-1 rounded-xl bg-white p-4 text-sm text-slate-600 shadow-soft sm:hidden">
                      {item.text}
                    </p>
                    {i % 2 !== 0 && (
                      <p className="mt-1 hidden max-w-sm rounded-xl bg-white p-4 text-sm text-slate-600 shadow-soft sm:block">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <h3 className="mt-16 text-center font-display text-2xl font-extrabold text-inem-navy">
              Orgullosamente INEMita
            </h3>
          </Reveal>
        </div>
      </section>
    </>
  );
}
