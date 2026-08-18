import PageHeader from "@/components/PageHeader";
import GeniallyMap from "@/components/GeniallyMap";

export const metadata = {
  title: "Mapa Institucional",
  description: "Mapa institucional interactivo del INEM Manuel Murillo Toro de Ibagué.",
};

export default function MapaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Explora"
        title="Mapa Institucional"
        subtitle="Recorre de forma interactiva las instalaciones de la sede principal."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <GeniallyMap />
      </section>
    </>
  );
}
