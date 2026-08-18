"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { sedes } from "@/data/sedes";

export default function SedesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sedes.map((s, i) => (
          <Reveal key={s.nombre} delay={i * 0.1}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-hover">
              <Image
                src={s.imagen}
                alt={s.nombre}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inem-navy via-inem-navy/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-lg font-bold">{s.nombre}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <MapPin size={14} className="shrink-0" />
                  {s.direccion}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
