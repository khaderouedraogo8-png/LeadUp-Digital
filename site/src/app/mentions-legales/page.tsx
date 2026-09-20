import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function LegalPage() {
  return (
    <Section>
      <Container className="prose-sm max-w-3xl text-muted">
        <h1 className="font-display text-3xl font-bold text-ink">Mentions légales</h1>
        <p className="mt-6">
          Éditeur : SAO Motors Luxury — Ouagadougou, Burkina Faso.
        </p>
        <p className="mt-4">
          Téléphone : +226 79 75 55 55
        </p>
        <p className="mt-4">
          Forme juridique, RCCM, NIF et adresse complète : à compléter par le
          propriétaire avant mise en production.
        </p>
        <p className="mt-4">
          Hébergement : à préciser selon le prestataire choisi (ex. Vercel /
          Cloudflare).
        </p>
      </Container>
    </Section>
  );
}
