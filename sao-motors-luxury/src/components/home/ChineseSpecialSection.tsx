import { LinkButton } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { chineseBrandExamplesPublic } from "@/lib/site";

export function ChineseSpecialSection() {
  return (
    <Section className="bg-steel text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            dark
            eyebrow="Spécialisation"
            title="Véhicules chinois"
            description="Chery, Geely, Changan et d'autres marques chinoises circulent de plus en plus à Ouagadougou. Notre positionnement : un atelier qui prend au sérieux leur électronique, leurs pièces et leur entretien."
          />
          <div>
            <p className="text-sm text-white/60">
              Exemples de marques présentes sur le marché burkinabè (liste
              publique — prise en charge atelier à confirmer modèle par modèle) :
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {chineseBrandExamplesPublic.map((b) => (
                <li
                  key={b}
                  className="border border-white/15 px-3 py-1.5 text-sm text-white/85"
                >
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LinkButton href="/vehicules-chinois" variant="onDark">
                En savoir plus
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
