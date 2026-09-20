import { processSteps } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export function ProcessSteps() {
  return (
    <Section className="border-y border-border bg-sand/40">
      <Container>
        <SectionHeading
          eyebrow="Processus"
          title="Comment ça se passe"
          description="Quatre étapes simples. Vous gardez le contrôle à chaque validation."
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.n}>
              <p className="font-display text-sm font-bold text-accent">{step.n}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <LinkButton href="/diagnostic" variant="primary">
            Commencer
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
