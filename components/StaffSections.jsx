"use client";

import { User } from "lucide-react";
import Reveal from "@/components/Reveal";
import { staffAreas } from "@/data/staff";

export default function StaffSections() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-2xl rounded-2xl border border-inem-amber/30 bg-inem-amber/10 p-5 text-center text-sm text-inem-navy">
        Esta sección muestra la estructura del equipo docente por área. Los
        nombres se actualizarán próximamente con la información real de cada
        directivo y docente.
      </Reveal>

      {staffAreas.map((section, sIdx) => (
        <section key={section.area}>
          <Reveal>
            <h2 className="border-l-4 border-inem-amber pl-4 font-display text-2xl font-bold text-inem-navy">
              {section.area}
            </h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: section.count }).map((_, i) => (
              <Reveal key={i} delay={(i % 5) * 0.05}>
                <div className="group rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-inem-navy/10 text-inem-navy transition-colors duration-300 group-hover:bg-inem-navy group-hover:text-white">
                    <User size={26} />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold text-inem-navy">
                    Nombre por asignar
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {section.isDirector ? "Rector(a) / Coordinador(a)" : section.subject}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
