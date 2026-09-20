import { LinkButton } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { waLink, waMessages } from "@/lib/wa";

export function FinalCTA() {
  return (
    <Section className="bg-ink text-white">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Prêt à démarrer
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Un doute sur un voyant ? Parlez-nous de votre véhicule.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Diagnostic, entretien ou pièce : nous vous répondons par téléphone ou
          WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/diagnostic" variant="onDark">
            Demander un diagnostic
          </LinkButton>
          <LinkButton href={waLink(waMessages.diagnostic)} variant="whatsapp" external>
            WhatsApp
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
