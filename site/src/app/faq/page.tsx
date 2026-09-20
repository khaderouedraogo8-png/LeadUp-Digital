import type { Metadata } from "next";
import { faqGeneral } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur SAO Motors Luxury : véhicules chinois, EV, rendez-vous, devis, localisation.",
};

export default function FAQPage() {
  return (
    <>
      <Section>
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions fréquentes"
            description="Des réponses directes. Si la vôtre n'y figure pas, WhatsApp ou téléphone."
          />
          <Accordion items={faqGeneral} />
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
