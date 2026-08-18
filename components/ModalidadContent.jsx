"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PenLine, ArrowRight } from "lucide-react";
import { modalidades } from "@/data/modalidades";
import { icons } from "@/lib/icons";
import Reveal from "@/components/Reveal";

// Fotografías institucionales genéricas usadas como respaldo en las
// modalidades que aún no cuentan con fotografía propia de sus talleres.
const FOTOS_GENERICAS = ["/images/colegio.jpg", "/images/entrada.jpg", "/images/estatua.jpg"];

function HeroGallery({ modalidad }) {
  const fotos = modalidad.galeria && modalidad.galeria.length > 0 ? modalidad.galeria : FOTOS_GENERICAS;
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-hover">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={fotos[index]}
              alt={`${modalidad.nombre} — fotografía institucional`}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {fotos.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {fotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mascota INEMita flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
        className="absolute -bottom-10 -left-6 h-36 w-24 overflow-hidden rounded-2xl border-4 border-white shadow-hover sm:h-44 sm:w-28"
        style={{ backgroundColor: modalidad.color }}
      >
        <Image
          src={modalidad.mascota}
          alt={`Mascota INEMita de ${modalidad.nombre}`}
          fill
          sizes="130px"
          className="object-contain object-bottom"
        />
      </motion.div>
    </div>
  );
}

export default function ModalidadContent({ modalidad }) {
  const HeroIcon = icons[modalidad.icon];
  const otras = modalidades.filter((m) => m.slug !== modalidad.slug).slice(0, 3);

  return (
    <>
      <section
        className="relative overflow-hidden py-16 text-white sm:py-20"
        style={{
          background: `linear-gradient(135deg, ${modalidad.color}, ${modalidad.color}cc)`,
        }}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {HeroIcon && (
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur lg:mx-0">
                <HeroIcon size={28} />
              </div>
            )}
            <span className="mt-5 block text-sm font-semibold uppercase tracking-widest text-white/80">
              Modalidad técnica
            </span>
            <h1 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">
              {modalidad.nombre}
            </h1>
            <p className="mt-3 text-white/85">{modalidad.tagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-sm pb-14 lg:mx-0 lg:pb-0"
          >
            <HeroGallery modalidad={modalidad} />
          </motion.div>
        </div>
      </section>


      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-600">
            {modalidad.descripcion}
          </p>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-2xl font-extrabold text-inem-navy sm:text-3xl">
              Objetivos de Formación
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modalidad.objetivos.map((o, i) => {
              const Icon = icons[o.icon];
              return (
                <Reveal key={o.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-xl text-white"
                      style={{ backgroundColor: modalidad.color }}
                    >
                      {Icon && <Icon size={20} />}
                    </div>
                    <h3 className="mt-4 font-display text-sm font-bold text-inem-navy">
                      {o.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{o.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-extrabold text-inem-navy sm:text-3xl">
            Perfil Ocupacional
          </h2>
          <p className="mt-3 text-slate-600">
            Egresados de esta modalidad pueden desempeñarse como:
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modalidad.perfil.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: modalidad.color }}
                />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/contactenos"
            className="inline-flex items-center gap-2 rounded-full bg-inem-navy px-7 py-3.5 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-inem-amber hover:text-inem-navy hover:shadow-hover"
          >
            <PenLine size={18} /> Matricúlate en esta modalidad
          </Link>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-extrabold text-inem-navy sm:text-3xl">
              Otras Modalidades
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otras.map((m, i) => {
              const Icon = icons[m.icon];
              return (
                <Reveal key={m.slug} delay={i * 0.1}>
                  <Link href={`/modalidades/${m.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                      <div
                        className="grid h-11 w-11 place-items-center rounded-xl text-white"
                        style={{ backgroundColor: m.color }}
                      >
                        {Icon && <Icon size={20} />}
                      </div>
                      <h3 className="mt-4 font-display text-sm font-bold text-inem-navy">
                        {m.nombre}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{m.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-inem-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Ver más <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
