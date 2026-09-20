import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { LinkButton } from "@/components/ui/Button";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Demander un diagnostic",
  description:
    "Demandez un diagnostic automobile à Ouagadougou pour votre véhicule chinois ou électrique — SAO Motors Luxury.",
};

export default function DiagnosticPage() {
  return (
    <Section>
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Diagnostic"
          title="Demander un diagnostic"
          description="Décrivez votre véhicule et le problème. Nous vous recontactons pour confirmer."
        />
        <div className="mb-8">
          <LinkButton href={waLink(waMessages.diagnostic)} variant="whatsapp" external>
            Préférer WhatsApp
          </LinkButton>
        </div>
        <div className="border border-border bg-paper/80 p-6 sm:p-8">
          <LeadForm
            endpoint="/api/diagnostics"
            submitLabel="Envoyer la demande"
            waFallback="diagnostic"
            fields={[
              { name: "name", label: "Nom", required: true },
              { name: "phone", label: "Téléphone / WhatsApp", type: "tel", required: true },
              { name: "brand", label: "Marque", required: true, placeholder: "Ex. Chery, Geely…" },
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
                name: "symptoms",
                label: "Problème / symptômes",
                type: "textarea",
                required: true,
                placeholder: "Voyants, bruits, comportement…",
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
