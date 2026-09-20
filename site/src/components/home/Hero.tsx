import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { waLink, waMessages } from "@/lib/wa";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/atelier-facade.jpg"
        alt="Façade SAO Motors Luxury — Ouagadougou"
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/55" aria-hidden />
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden />

      <Container className="relative grid min-h-[78vh] items-end gap-10 py-16 sm:py-20 lg:min-h-[82vh] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
            SAO Motors Luxury
          </p>
          <h1 className="mt-4 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-wide sm:text-5xl lg:text-[3.6rem]">
            Diagnostic et réparation de véhicules chinois à Ouagadougou
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
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

        <div className="reveal border border-white/15 bg-black/50 p-6 backdrop-blur-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Spécialisation
          </p>
          <ul className="mt-5 space-y-4 text-sm font-medium text-white/90">
            <li className="border-b border-white/10 pb-4">
              Diagnostic mécanique & électronique
            </li>
            <li className="border-b border-white/10 pb-4">
              Véhicules chinois — Changan, Chery, BYD, Haval…
            </li>
            <li className="border-b border-white/10 pb-4">
              Thermiques & électriques
            </li>
            <li>Pièces d&apos;origine privilégiées</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
