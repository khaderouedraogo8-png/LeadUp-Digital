import { siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export function MapBlock() {
  return (
    <Section className="border-t border-border bg-sand/30">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Localisation"
              title="Nous trouver à Ouagadougou"
              description="Appelez, écrivez sur WhatsApp ou demandez l'itinéraire. L'adresse exacte sera affichée dès confirmation."
            />
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Adresse</dt>
                <dd className="mt-1 text-muted">
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.areaHint}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Téléphone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-muted underline-offset-2 hover:text-ink hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Horaires</dt>
                <dd className="mt-1 text-muted">
                  {siteConfig.hours.map((h) => (
                    <span key={h.days}>
                      {h.days} — {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={siteConfig.mapsUrl} variant="primary" external>
                Itinéraire
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact
              </LinkButton>
            </div>
          </div>
          <div className="flex min-h-[280px] items-center justify-center border border-border bg-steel p-8 text-center">
            <div>
              <p className="font-display text-lg font-semibold text-white">
                Carte Google Maps
              </p>
              <p className="mt-2 max-w-xs text-sm text-white/60">
                Chargée sur demande pour préserver les performances mobiles.
              </p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-6 inline-flex min-h-11 items-center border border-white/20 px-5 text-sm font-semibold text-white hover:border-accent"
              >
                Ouvrir dans Maps
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
