import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";

const homeServices = [
  "diagnostic-automobile",
  "diagnostic-electronique",
  "maintenance-entretien",
  "reparation",
  "pieces-accessoires",
];

export function ServiceList() {
  const list = services.filter((s) => homeServices.includes(s.slug));

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Ce que nous faisons"
          description="Du diagnostic à la restitution : des interventions structurées, sans jargon inutile."
        />
        <ul className="divide-y divide-border border-y border-border">
          {list.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="focus-ring group flex items-start justify-between gap-4 py-5 sm:py-6"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent-hover">
                    {s.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-muted sm:text-base">
                    {s.short}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-silver transition group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href="/services"
            className="focus-ring text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            Voir tous les services
          </Link>
        </div>
      </Container>
    </Section>
  );
}
