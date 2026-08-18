import PageHeader from "@/components/PageHeader";
import StaffSections from "@/components/StaffSections";

export const metadata = {
  title: "Nuestro Equipo",
  description: "Conoce al equipo directivo, docente y administrativo del INEM Manuel Murillo Toro de Ibagué.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conoce a"
        title="Nuestro Equipo"
        subtitle="Directivos y docentes comprometidos con la formación técnica y humana de cada estudiante INEMita."
      />
      <StaffSections />
    </>
  );
}
