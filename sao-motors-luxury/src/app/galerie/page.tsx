import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Galerie atelier",
  description: "Galerie de l'atelier SAO Motors Luxury à Ouagadougou — photos réelles à venir.",
};

const items = [
  "Façade / entrée",
  "Réception",
  "Baie diagnostic",
  "Ponts / atelier",
  "Équipements",
  "Équipe",
  "Véhicule chinois",
  "Zone électrique",
  "Pièces",
];

export default function GalleryPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Galerie"
            title="L'atelier en images"
            description="Emplacements réservés aux photos réelles. Aucune stock photo de garage générique ne sera utilisée."
          />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {items.map((label, i) => (
              <li
                key={label}
                className="relative aspect-square overflow-hidden border border-border bg-gradient-to-br from-steel via-ink to-steel"
              >
                <div className="absolute inset-0 hero-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-white">{label}</span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
