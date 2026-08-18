"use client";

import Image from "next/image";
import { Flag, Eye, HandHeart, Users, Handshake, BookOpen, Brain, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const valores = [
  {
    icon: HandHeart,
    title: "Garantía de derechos y deberes",
    text: "Promovemos el cumplimiento efectivo de los derechos y deberes consagrados en la Constitución y la Ley 115 de 1994.",
  },
  {
    icon: Users,
    title: "Participación democrática",
    text: "Fomentamos la participación activa de la comunidad educativa en las decisiones que los afectan.",
  },
  {
    icon: Handshake,
    title: "Convivencia pacífica y justicia",
    text: "Impulsamos el respeto, la convivencia armónica y la vigilancia de un orden social justo.",
  },
  {
    icon: BookOpen,
    title: "Respeto por la diversidad",
    text: "Reconocemos y garantizamos la diversidad como un valor esencial dentro de la comunidad educativa.",
  },
  {
    icon: Brain,
    title: "Formación integral para la vida",
    text: "Desarrolla conocimientos, valores y competencias que preparan al estudiante para la educación superior y el mundo laboral.",
  },
  {
    icon: Sparkles,
    title: "Transformación social",
    text: "Concebimos al estudiante como un ser en permanente evolución, protagonista de cambios sociales, culturales, económicos y políticos.",
  },
];

export default function MisionVisionContent() {
  return (
    <>
      {/* RAZÓN DE SER */}
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-inem-amber/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-inem-green/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-green">
              Nuestra
            </span>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-inem-navy sm:text-4xl">
              Razón de Ser
            </h1>
            <p className="mt-5 text-slate-600">
              Nuestra misión y visión son los pilares que guían el quehacer
              diario de la Institución Educativa INEM Manuel Murillo Toro.
            </p>
            <p className="mt-4 rounded-r-xl border-l-4 border-inem-amber bg-white p-4 text-slate-700 shadow-soft">
              <strong className="font-display">
                Inspirados en los valores INEMitas
              </strong>
              , formar a sus estudiantes como hombres y mujeres creadores de
              conocimiento, autónomos, laboriosos, emprendedores,
              responsables, cumplidos, honrados y justos para desempeñarse en
              el campo profesional y/o productivo.
            </p>
            <p className="mt-4 text-slate-600">
              Estas declaraciones definen nuestro propósito y nos orientan
              hacia el futuro.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid aspect-[6/5] grid-cols-[1.3fr_1fr] grid-rows-2 gap-4">
              <div className="relative row-span-2 overflow-hidden rounded-2xl shadow-hover">
                <Image
                  src="/images/resena.jpg"
                  alt="Reseña histórica INEM"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-hover">
                <Image
                  src="/images/entrada.jpg"
                  alt="Entrada INEM"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-hover">
                <Image
                  src="/images/noche.jpg"
                  alt="INEM de noche"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="bg-white py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-green">
            Nuestra
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-inem-navy">
            Misión
          </h2>
          <div className="mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-inem-navy text-white">
            <Flag size={22} />
          </div>
          <p className="mt-6 text-slate-600">
            La Institución Educativa Técnica INEM Manuel Murillo Toro de
            Ibagué tiene como misión formar estudiantes desde las modalidades
            técnicas y académicas, del orden local y regional, para que
            desarrollen valores tales como: creación y construcción de
            conocimiento científico y tecnológico, autónomos, laboriosos,
            responsables, cumplidores, honrados, justos, emprendedores para
            el desarrollo, respetuosos de sí mismos, de sus conciudadanos, su
            entorno y ambiente; conscientes de sus deberes y de su identidad
            sociocultural.
          </p>
        </Reveal>
      </section>

      {/* VISIÓN */}
      <section className="bg-slate-50 py-20">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-green">
            Nuestra
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-inem-navy">
            Visión
          </h2>
          <div className="mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-inem-navy text-white">
            <Eye size={22} />
          </div>
          <p className="mt-6 text-slate-600">
            La Institución Educativa Técnica INEM Manuel Murillo Toro de
            Ibagué busca consolidarse como una de las instituciones
            educativas más importantes del departamento del Tolima, en
            programas de preescolar, básica primaria, básica secundaria y
            media diversificada. Su apuesta por la jornada única permite
            aprovechar académica y socialmente la mayor parte del tiempo, a
            través de una educación centrada en la inclusión, la
            optimización de la calidad integral del servicio educativo, el
            bilingüismo en inglés como segunda lengua, y el logro de la
            excelencia personal y social de los estudiantes, para ser
            gestores del desarrollo del medio en el cual se desenvuelvan.
          </p>
        </Reveal>
      </section>

      {/* VALORES */}
      <section className="bg-white py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-inem-navy sm:text-4xl">
            Valores que Nos Definen
          </h2>
          <p className="mt-4 text-slate-600">
            Nuestra misión y visión están profundamente conectadas con los
            principios que guían todas nuestras acciones. Estos principios
            no solo son enseñados, sino vividos a diario en nuestra
            comunidad educativa.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {valores.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.1}>
              <div className="flex h-full gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-hover">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-inem-navy text-white">
                  <v.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-inem-navy">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {v.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
