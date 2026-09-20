import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "SAO Motors Luxury — atelier de diagnostic et réparation de véhicules chinois à Ouagadougou.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="À propos"
            title="Un atelier organisé pour les véhicules chinois"
            description="SAO Motors Luxury se présente publiquement comme spécialiste du diagnostic et de la réparation de véhicules chinois — thermiques et électriques — avec des pièces et accessoires d'origine."
          />
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Notre approche est simple : diagnostiquer avant de réparer, expliquer
              avant de facturer, privilégier les pièces d&apos;origine lorsque c&apos;est
              possible.
            </p>
            <p>
              Toute information historique (années d&apos;expérience, certifications,
              liens avec d&apos;autres entités du secteur automobile à Ouagadougou)
              ne sera publiée qu&apos;après validation explicite de la direction.
            </p>
          </div>
          <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Contact
              </dt>
              <dd className="mt-2 text-ink">{siteConfig.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Localisation
              </dt>
              <dd className="mt-2 text-ink">
                Ouagadougou, Burkina Faso
                <br />
                <span className="text-sm text-muted">
                  {siteConfig.address.localityNote}
                </span>
              </dd>
            </div>
          </dl>
          <div className="mt-8">
            <LinkButton href="/contact" variant="primary">
              Nous contacter
            </LinkButton>
          </div>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
