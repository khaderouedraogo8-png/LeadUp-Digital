import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/home/FinalCTA";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Véhicules électriques Ouagadougou",
  description:
    "Entretien et diagnostic de véhicules électriques à Ouagadougou. Périmètre d'intervention transparent. SAO Motors Luxury.",
};

const faq = [
  {
    q: "Touchez-vous la batterie de traction ?",
    a: "Uniquement dans le périmètre confirmé par l'atelier. Hors compétence, nous orientons clairement — sans ambiguïté.",
  },
  {
    q: "Puis-je venir pour une Geometry O ou un autre EV ?",
    a: "Oui pour un diagnostic / entretien dans le périmètre. Précisez marque, modèle et symptômes via le formulaire ou WhatsApp.",
  },
  {
    q: "La clim et les freins d'un EV, c'est différent ?",
    a: "Oui en partie (freinage régénératif, clim électrique). Ces points font partie des sujets fréquents abordés à l'atelier.",
  },
];

export default function EVPage() {
  return (
    <>
      <Section className="pb-8">
        <Container>
          <SectionHeading
            eyebrow="Mobilité électrique"
            title="Véhicules électriques à Ouagadougou"
            description="L'électrique se développe (ex. Geometry O, bornes solaires). Notre engagement : un périmètre transparent, pas de promesses creuses."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/diagnostic" variant="primary">
              Décrire mon problème EV
            </LinkButton>
            <LinkButton href={waLink(waMessages.ev)} variant="whatsapp" external>
              WhatsApp EV
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-sand/40">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Périmètre d&apos;intervention
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-border bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-success">
                Interventions typiques
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Diagnostic électronique selon équipement atelier</li>
                <li>Batterie 12V / accessoires basse tension</li>
                <li>Freins, pneus, suspension, géométrie</li>
                <li>Climatisation</li>
                <li>Entretien périodique hors pack HV</li>
              </ul>
            </div>
            <div className="border border-border bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">
                Orientation / hors périmètre
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Travaux haute tension non couverts par l&apos;atelier</li>
                <li>SAV sous garantie concessionnaire officiel</li>
                <li>Toute intervention pour laquelle nous n&apos;avons pas la compétence confirmée</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
            Le détail exact du périmètre HV doit être validé avec l&apos;équipe atelier
            avant communication marketing définitive.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink">FAQ EV</h2>
          <Accordion items={faq} />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
