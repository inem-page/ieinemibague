import PageHeader from "@/components/PageHeader";
import SedesGrid from "@/components/SedesGrid";

export const metadata = {
  title: "Sedes",
  description: "Sedes de la Institución Educativa Técnica INEM Manuel Murillo Toro en Ibagué.",
};

export default function SedesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Presencia en"
        title="Nuestras Sedes"
        subtitle="La institución cuenta con cuatro sedes ubicadas en diferentes áreas de la ciudad, donde se imparte educación primaria a niños de los sectores aledaños."
      />
      <SedesGrid />
    </>
  );
}
