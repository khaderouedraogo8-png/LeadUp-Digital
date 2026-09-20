import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { waLink, waMessages } from "@/lib/wa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter SAO Motors Luxury à Ouagadougou : téléphone, WhatsApp, itinéraire, formulaire.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Parlons de votre véhicule"
              description="Le canal le plus rapide reste le téléphone ou WhatsApp."
            />
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold text-ink">Téléphone</p>
                <a href={`tel:${siteConfig.phone}`} className="text-muted hover:text-ink">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="font-semibold text-ink">WhatsApp</p>
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink"
                >
                  Ouvrir une conversation
                </a>
              </li>
              <li>
                <p className="font-semibold text-ink">Adresse</p>
                <p className="text-muted">
                  Ouagadougou, Burkina Faso
                  <br />
                  {siteConfig.address.localityNote}
                </p>
              </li>
              <li>
                <p className="font-semibold text-ink">Facebook</p>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink"
                >
                  SAO Motors luxury
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="border border-border bg-paper/80 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">
              Formulaire de contact
            </h2>
            <p className="mt-2 text-sm text-muted">
              Nous vous rappelons. Champs obligatoires uniquement.
            </p>
            <div className="mt-6">
              <LeadForm
                endpoint="/api/contact"
                submitLabel="Envoyer"
                waFallback="general"
                fields={[
                  { name: "name", label: "Nom", required: true },
                  { name: "phone", label: "Téléphone", type: "tel", required: true, placeholder: "70 00 00 00" },
                  { name: "message", label: "Message", type: "textarea", required: true },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
