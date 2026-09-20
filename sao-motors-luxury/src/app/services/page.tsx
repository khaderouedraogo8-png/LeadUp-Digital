import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services automobile Ouagadougou",
  description:
    "Diagnostic, entretien, réparation, électricité et pièces pour véhicules chinois à Ouagadougou — SAO Motors Luxury.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Tous nos services"
            description="Choisissez l'entrée qui correspond à votre besoin. Chaque page détaille le process et le CTA adapté."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="focus-ring group flex h-full flex-col justify-between border border-border bg-paper/70 p-6 transition hover:border-ink"
                >
                  <div>
                    <h2 className="font-display text-xl font-semibold text-ink group-hover:text-accent-hover">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{s.short}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                    Voir le détail
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
