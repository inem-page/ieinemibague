import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-inem-navy/10 text-inem-navy">
        <Compass size={28} />
      </div>
      <h1 className="mt-6 font-display text-3xl font-extrabold text-inem-navy">
        Página no encontrada
      </h1>
      <p className="mt-3 text-slate-600">
        La página que buscas no existe o fue movida. Vuelve al inicio para
        seguir explorando el sitio del INEM Ibagué.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-inem-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-inem-blue"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
