import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { modalidades } from "@/data/modalidades";

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-inem.png"
              alt="Logo INEM Ibagué"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-base font-bold text-white">
              INEM Ibagué
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Institución Educativa Técnica Manuel Murillo Toro. Formando
            hombres y mujeres creadores de conocimiento desde 1969.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Institución
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            <li>
              <Link href="/historia" className="transition-colors hover:text-inem-amber">
                Nuestra Historia
              </Link>
            </li>
            <li>
              <Link href="/mision-vision" className="transition-colors hover:text-inem-amber">
                Misión y Visión
              </Link>
            </li>
            <li>
              <Link href="/sedes" className="transition-colors hover:text-inem-amber">
                Sedes
              </Link>
            </li>
            <li>
              <Link href="/equipo" className="transition-colors hover:text-inem-amber">
                Nuestro Equipo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Modalidades
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {modalidades.slice(0, 4).map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/modalidades/${m.slug}`}
                  className="transition-colors hover:text-inem-amber"
                >
                  {m.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-inem-amber" />
              Ibagué, Tolima, Colombia
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-inem-amber" />
              ieinemibague@hotmail.com
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-inem-amber" />
              Lun-Jue: 7:00am-11:30am y 2:00pm-5:00pm
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Institución Educativa INEM Manuel Murillo Toro — Ibagué. Resolución 002001 del 25 de julio de 2017.
      </div>
    </footer>
  );
}
