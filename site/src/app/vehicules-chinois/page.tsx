import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/home/FinalCTA";
import { chineseBrandExamplesPublic } from "@/lib/site";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Réparation véhicules chinois Ouagadougou",
  description:
    "Diagnostic et réparation de véhicules chinois à Ouagadougou. Thermiques et électriques. Pièces d'origine. SAO Motors Luxury.",
};

const faq = [
  {
    q: "Quelles marques chinoises prenez-vous en charge ?",
    a: "Indiquez votre marque et modèle. Nous confirmons la prise en charge. Les marques listées sur cette page illustrent le marché burkinabè ; la liste atelier exacte sera validée avec le propriétaire.",
  },
  {
    q: "Les pièces sont-elles disponibles ?",
    a: "Nous privilégions les pièces d'origine. Les délais dépendent de la référence : nous vous les communiquons avant commande.",
  },
  {
    q: "Mon véhicule est importé hors réseau officiel. Pouvez-vous aider ?",
    a: "Oui, c'est un cas fréquent. Envoyez-nous les détails via WhatsApp ou le formulaire de diagnostic.",
  },
];

export default function ChineseVehiclesPage() {
  return (
    <>
      <Section className="pb-8">
        <Container>
          <SectionHeading
            eyebrow="Spécialisation"
            title="Véhicules chinois à Ouagadougou"
            description="Le marché accueille Chery, Geely, Changan, JMC et d'autres. Le frein n°1 pour les propriétaires : trouver un atelier qui comprend l'électronique et sait sourcer les pièces."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/diagnostic" variant="primary">
              Demander un diagnostic
            </LinkButton>
            <LinkButton href={waLink(waMessages.diagnostic)} variant="whatsapp" external>
              WhatsApp
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-steel text-white">
        <Container>
          <h2 className="font-display text-2xl font-semibold">
            Marques présentes sur le marché (références publiques)
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/65">
            Ces marques sont documentées dans la presse et chez des distributeurs
            au Burkina. Leur apparition ici ne signifie pas un partenariat
            officiel avec SAO Motors Luxury.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {chineseBrandExamplesPublic.map((b) => (
              <li key={b} className="border border-white/15 px-3 py-1.5 text-sm">
                {b}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Ce que nous apportons
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>Diagnostic électronique adapté aux systèmes embarqués récents</li>
              <li>Entretien sous climat chaud et poussiéreux</li>
              <li>Recherche de pièces d&apos;origine</li>
              <li>Explications claires avant réparation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Ce que nous ne promettons pas
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>Aucun statut de concessionnaire inventé</li>
              <li>Aucune garantie constructeur revendiquée sans preuve</li>
              <li>Aucune prise en charge « toutes marques toutes pannes »</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container className="max-w-3xl">
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink">FAQ</h2>
          <Accordion items={faq} />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
