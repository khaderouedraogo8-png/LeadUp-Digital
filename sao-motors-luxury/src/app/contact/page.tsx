import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { MapEmbed } from "@/components/maps/MapEmbed";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter SAO Motors Luxury à Ouaga 2000, Ouagadougou : téléphone, WhatsApp, carte, formulaire.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Parlons de votre véhicule"
                description="Appelez, WhatsApp, ou laissez un message. Nous vous répondons rapidement."
              />
              <ul className="space-y-5 text-sm">
                <li>
                  <p className="font-semibold text-ink">Téléphone</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-1 inline-block text-base text-muted hover:text-accent"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink">WhatsApp</p>
                  <a
                    href={waLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-muted hover:text-accent"
                  >
                    Ouvrir une conversation
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink">Adresse</p>
                  <p className="mt-1 text-muted">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-ink">Facebook</p>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-muted hover:text-accent"
                  >
                    SAO Motors luxury
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton href={`tel:${siteConfig.phone}`} variant="call">
                  Appeler
                </LinkButton>
                <LinkButton href={waLink(waMessages.general)} variant="whatsapp" external>
                  WhatsApp
                </LinkButton>
                <LinkButton href={siteConfig.mapsUrl} variant="secondary" external>
                  Itinéraire
                </LinkButton>
              </div>
            </div>

            <div className="border border-border bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold tracking-wide text-ink">
                Formulaire
              </h2>
              <p className="mt-2 text-sm text-muted">
                Remplissez — on vous rappelle.
              </p>
              <div className="mt-6">
                <LeadForm
                  endpoint="/api/contact"
                  submitLabel="Envoyer"
                  waFallback="general"
                  fields={[
                    { name: "name", label: "Nom", required: true },
                    {
                      name: "phone",
                      label: "Téléphone",
                      type: "tel",
                      required: true,
                      placeholder: "79 75 55 55",
                    },
                    { name: "message", label: "Message", type: "textarea", required: true },
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-white pt-0">
        <Container>
          <h2 className="mb-4 font-display text-2xl font-bold tracking-wide text-ink">
            Sur la carte
          </h2>
          <MapEmbed className="min-h-[360px]" />
        </Container>
      </Section>
    </>
  );
}
