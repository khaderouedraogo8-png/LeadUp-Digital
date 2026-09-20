import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { LinkButton } from "@/components/ui/Button";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Demande de rendez-vous atelier SAO Motors Luxury à Ouagadougou. Confirmation par téléphone ou WhatsApp.",
};

export default function AppointmentPage() {
  return (
    <Section>
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Rendez-vous"
          title="Demander un rendez-vous"
          description="Pas de calendrier en ligne complexe : vous proposez, nous confirmons. Idéal pour un atelier local."
        />
        <div className="mb-8">
          <LinkButton href={waLink(waMessages.rdv)} variant="whatsapp" external>
            Réserver via WhatsApp
          </LinkButton>
        </div>
        <div className="border border-border bg-paper/80 p-6 sm:p-8">
          <LeadForm
            endpoint="/api/appointments"
            submitLabel="Envoyer la demande"
            waFallback="rdv"
            fields={[
              { name: "name", label: "Nom", required: true },
              { name: "phone", label: "Téléphone", type: "tel", required: true },
              {
                name: "serviceType",
                label: "Type de service",
                type: "select",
                required: true,
                options: [
                  { value: "diagnostic", label: "Diagnostic" },
                  { value: "entretien", label: "Entretien / révision" },
                  { value: "reparation", label: "Réparation" },
                  { value: "pieces", label: "Pièces" },
                  { value: "autre", label: "Autre" },
                ],
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
              { name: "preferredDate", label: "Date souhaitée", type: "date", required: false },
              {
                name: "slot",
                label: "Créneau",
                type: "select",
                required: false,
                options: [
                  { value: "matin", label: "Matin" },
                  { value: "apres-midi", label: "Après-midi" },
                  { value: "indifferent", label: "Indifférent" },
                ],
              },
              { name: "message", label: "Message", type: "textarea", required: false },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
