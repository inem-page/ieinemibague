import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contáctenos",
  description:
    "Contáctate con la Institución Educativa Técnica INEM Manuel Murillo Toro de Ibagué: dirección, teléfonos y formulario de contacto.",
};

export default function ContactenosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Estamos para ayudarte"
        title="Contacto Institucional"
        subtitle="Tus datos se procesan de forma segura y directa — sin intermediarios."
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2 lg:pt-4">
          <h2 className="font-display text-xl font-bold text-inem-navy">
            Información de contacto
          </h2>
          <ul className="mt-6 space-y-5 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-inem-navy/10 text-inem-navy">
                <MapPin size={18} />
              </span>
              <span>
                Cll 22 #9-02, Interlaken
                <br />
                Ibagué, Tolima, Colombia
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-inem-navy/10 text-inem-navy">
                <Mail size={18} />
              </span>
              ieinemibague@hotmail.com
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-inem-navy/10 text-inem-navy">
                <Clock size={18} />
              </span>
              Lunes a jueves
              <br />
              7:00am–11:30am y 2:00pm–5:00pm
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
