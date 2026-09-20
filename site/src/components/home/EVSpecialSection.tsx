import { LinkButton } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { waLink, waMessages } from "@/lib/wa";

export function EVSpecialSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Mobilité électrique"
            title="Véhicules électriques"
            description="L'électrique arrive à Ouagadougou. Nous affichons clairement ce que nous prenons en charge — et ce que nous orientons ailleurs."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-border bg-paper/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-success">
                On intervient
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Diagnostic selon équipement</li>
                <li>Entretien hors pack HV</li>
                <li>Batterie 12V, freins, clim, pneus</li>
                <li>Lecture symptômes / voyants</li>
              </ul>
            </div>
            <div className="border border-border bg-paper/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">
                On oriente
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Travaux hors périmètre atelier</li>
                <li>Interventions HV non couvertes</li>
                <li>SAV garantie constructeur officiel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/vehicules-electriques" variant="primary">
            Voir le périmètre EV
          </LinkButton>
          <LinkButton href={waLink(waMessages.ev)} variant="whatsapp" external>
            WhatsApp EV
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
