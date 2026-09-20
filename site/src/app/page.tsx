import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceList } from "@/components/home/ServiceList";
import { ChineseSpecialSection } from "@/components/home/ChineseSpecialSection";
import { EVSpecialSection } from "@/components/home/EVSpecialSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { GalleryStrip } from "@/components/home/GalleryStrip";
import { MapBlock } from "@/components/home/MapBlock";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceList />
      <ChineseSpecialSection />
      <EVSpecialSection />
      <ProcessSteps />
      <GalleryStrip />
      <MapBlock />
      <FinalCTA />
    </>
  );
}
