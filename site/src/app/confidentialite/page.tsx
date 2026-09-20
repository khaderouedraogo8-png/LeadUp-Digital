import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl text-muted">
        <h1 className="font-display text-3xl font-bold text-ink">
          Politique de confidentialité
        </h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed">
          <p>
            Les formulaires du site collectent les données nécessaires au
            traitement de votre demande (nom, téléphone, informations véhicule,
            message).
          </p>
          <p>
            Ces données sont utilisées uniquement pour vous recontacter et
            organiser le service demandé. Elles ne sont pas vendues à des tiers.
          </p>
          <p>
            Conservation indicative : 24 mois après le dernier échange — durée à
            confirmer avec la direction et le cadre légal applicable au Burkina
            Faso.
          </p>
          <p>
            Pour toute demande d&apos;accès ou de suppression : contactez{" "}
            <a href="tel:+22679755555" className="text-ink underline">
              +226 79 75 55 55
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
