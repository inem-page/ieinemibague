import PageHeader from "@/components/PageHeader";
import HistoryContent from "@/components/HistoryContent";

export const metadata = {
  title: "Nuestra Historia",
  description:
    "Conoce la historia del INEM Manuel Murillo Toro de Ibagué, desde su fundación hasta la actualidad.",
};

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Un legado de"
        title="Nuestra Historia"
        subtitle="Más de cinco décadas formando técnicos para Ibagué y el Tolima."
      />
      <HistoryContent />
    </>
  );
}
