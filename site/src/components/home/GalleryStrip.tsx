import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui/Section";

const placeholders = [
  "Façade / entrée atelier",
  "Baie de diagnostic",
  "Équipe au travail",
  "Réception",
  "Véhicule chinois en atelier",
  "Équipements",
];

export function GalleryStrip() {
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Atelier"
            title="Preuves visuelles"
            description="La confiance se construit avec des photos réelles. Ces emplacements seront remplacés après le shooting professionnel."
          />
          <Link
            href="/galerie"
            className="focus-ring hidden shrink-0 text-sm font-semibold text-ink underline-offset-4 hover:underline sm:inline"
          >
            Voir la galerie
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {placeholders.map((label, i) => (
            <li
              key={label}
              className="relative aspect-[4/3] overflow-hidden border border-border bg-gradient-to-br from-steel to-ink"
            >
              <div className="absolute inset-0 hero-grid opacity-40" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-sm font-medium text-white/90">{label}</span>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/galerie"
          className="focus-ring mt-6 inline-block text-sm font-semibold text-ink underline-offset-4 hover:underline sm:hidden"
        >
          Voir la galerie
        </Link>
      </Container>
    </Section>
  );
}
