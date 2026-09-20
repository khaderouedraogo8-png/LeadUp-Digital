import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { LinkButton } from "@/components/ui/Button";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demande de devis réparation, entretien ou pièces — SAO Motors Luxury Ouagadougou.",
};

export default function QuotePage() {
  return (
    <Section>
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Devis"
          title="Demander un devis"
          description="Décrivez le besoin. Nous revenons vers vous avec une estimation claire avant intervention."
        />
        <div className="mb-8">
          <LinkButton href={waLink(waMessages.piece)} variant="whatsapp" external>
            Devis via WhatsApp
          </LinkButton>
        </div>
        <div className="border border-border bg-paper/80 p-6 sm:p-8">
          <LeadForm
            endpoint="/api/quotes"
            submitLabel="Envoyer la demande"
            waFallback="piece"
            fields={[
              { name: "name", label: "Nom", required: true },
              { name: "phone", label: "Téléphone", type: "tel", required: true },
              {
                name: "serviceNeeded",
                label: "Service / pièce souhaité(e)",
                required: true,
                placeholder: "Ex. plaquettes, clim, révision…",
              },
              { name: "brand", label: "Marque", required: true },
              { name: "model", label: "Modèle", required: true },
              {
                name: "energy",
                label: "Énergie",
                type: "select",
                required: true,
                options: [
                  { value: "thermique", label: "Thermique" },
                  { value: "hybride", label: "Hybride" },
                  { value: "electrique", label: "Électrique" },
                ],
              },
              {
                name: "message",
                label: "Détails",
                type: "textarea",
                required: true,
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
