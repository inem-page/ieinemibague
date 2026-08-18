import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ModalidadesGrid from "@/components/ModalidadesGrid";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ModalidadesGrid />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
