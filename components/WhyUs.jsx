"use client";

import { Target, Users, Award, Compass } from "lucide-react";
import Reveal from "@/components/Reveal";

const valores = [
  {
    icon: Target,
    title: "Formación con Propósito",
    text: "Inspirados en los valores INEMitas: autonomía, laboriosidad y sentido de responsabilidad para la vida profesional y productiva.",
  },
  {
    icon: Users,
    title: "Comunidad INEMita",
    text: "Una comunidad educativa comprometida con el crecimiento integral de cada estudiante, dentro y fuera del aula.",
  },
  {
    icon: Award,
    title: "8 Modalidades Técnicas",
    text: "Un abanico de especialidades que permite a cada estudiante descubrir y desarrollar su vocación técnica.",
  },
  {
    icon: Compass,
    title: "Proyección a Futuro",
    text: "Bases sólidas para continuar en educación superior o incorporarse con éxito al mundo laboral y productivo.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-inem-blue">
            Nuestra razón de ser
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-inem-navy sm:text-4xl">
            ¿Por qué elegir el INEM?
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-hover">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-inem-navy text-white transition-colors duration-300 group-hover:bg-inem-amber group-hover:text-inem-navy">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-inem-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
