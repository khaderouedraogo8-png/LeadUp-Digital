import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/site";
import { Container, Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/home/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Ouagadougou`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Section className="pb-8">
        <Container>
          <nav className="mb-6 text-sm text-muted">
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{service.title}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Service
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{service.intro}</p>
          <div className="mt-8">
            <LinkButton href={service.cta.href} variant="primary">
              {service.cta.label}
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-sand/30 py-12">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Ce que comprend le service
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Symptômes / situations fréquentes
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              {service.symptoms.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-steel" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {service.faq.length > 0 ? (
        <Section>
          <Container className="max-w-3xl">
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">FAQ</h2>
            <Accordion items={service.faq} />
          </Container>
        </Section>
      ) : null}

      <FinalCTA />
    </>
  );
}
