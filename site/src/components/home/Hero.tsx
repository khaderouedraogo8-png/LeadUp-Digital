import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { waLink, waMessages } from "@/lib/wa";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(176,141,87,0.22),transparent_50%),linear-gradient(120deg,#0b0d10_0%,#1c2430_55%,#0b0d10_100%)]"
        aria-hidden
      />
      <div
        className="absolute -right-20 top-10 h-[420px] w-[420px] rounded-full border border-white/5"
        aria-hidden
      />
      <div
        className="absolute -right-8 top-28 h-[280px] w-[280px] rounded-full border border-accent/20"
        aria-hidden
      />

      <Container className="relative grid min-h-[78vh] items-end gap-10 py-16 sm:py-20 lg:min-h-[85vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div className="reveal max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            SAO Motors Luxury
          </p>
          <h1 className="mt-5 font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Diagnostic et réparation de véhicules chinois à Ouagadougou
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Thermiques et électriques. Pièces d&apos;origine. Un atelier organisé
            pour comprendre votre véhicule — et le remettre en route.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/diagnostic" variant="onDark">
              Demander un diagnostic
            </LinkButton>
            <LinkButton href={waLink(waMessages.diagnostic)} variant="whatsapp" external>
              WhatsApp
            </LinkButton>
          </div>
        </div>

        <div className="reveal relative border border-white/10 bg-white/5 p-6 backdrop-blur-[2px] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Spécialisation
          </p>
          <ul className="mt-5 space-y-4 text-sm text-white/85">
            <li className="border-b border-white/10 pb-4">
              Diagnostic mécanique & électronique
            </li>
            <li className="border-b border-white/10 pb-4">
              Véhicules chinois — marques confirmées à l&apos;atelier
            </li>
            <li className="border-b border-white/10 pb-4">
              Thermiques & électriques (périmètre transparent)
            </li>
            <li>Pièces d&apos;origine privilégiées</li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-white/45">
            Visuel atelier : photos réelles à intégrer après shooting. Aucune
            stock photo générique.
          </p>
        </div>
      </Container>
    </section>
  );
}
