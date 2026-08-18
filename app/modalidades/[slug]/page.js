import { notFound } from "next/navigation";
import { modalidades, getModalidad } from "@/data/modalidades";
import ModalidadContent from "@/components/ModalidadContent";

export function generateStaticParams() {
  return modalidades.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const modalidad = getModalidad(params.slug);
  if (!modalidad) return {};
  return {
    title: `${modalidad.nombre} — Modalidad Técnica`,
    description: modalidad.descripcion,
  };
}

export default function ModalidadPage({ params }) {
  const modalidad = getModalidad(params.slug);
  if (!modalidad) notFound();

  return <ModalidadContent modalidad={modalidad} />;
}
