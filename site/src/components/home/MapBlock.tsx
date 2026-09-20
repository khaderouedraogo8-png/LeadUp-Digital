import { siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { MapEmbed } from "@/components/maps/MapEmbed";
import { waLink, waMessages } from "@/lib/wa";

export function MapBlock() {
  return (
    <Section className="border-t border-border bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Localisation"
              title="Ouaga 2000, Ouagadougou"
              description="Venez nous trouver à Ouaga 2000. Itinéraire disponible sur Google Maps."
            />
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Adresse</dt>
                <dd className="mt-1 text-muted">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Téléphone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-muted underline-offset-2 hover:text-accent hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={waLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted underline-offset-2 hover:text-accent hover:underline"
                  >
                    Écrire sur WhatsApp
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
              <LinkButton href={siteConfig.mapsUrl} variant="primary" external>
                Itinéraire Google Maps
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact
              </LinkButton>
            </div>
          </div>
          <MapEmbed className="min-h-[320px] lg:min-h-full" />
        </div>
      </Container>
    </Section>
  );
}
