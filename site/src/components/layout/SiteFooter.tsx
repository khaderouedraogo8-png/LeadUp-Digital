import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks, services } from "@/lib/site";
import { Container } from "@/components/ui/Section";
import { waLink, waMessages } from "@/lib/wa";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={52}
              height={52}
              className="h-13 w-13 rounded-full"
            />
            <div>
              <p className="font-display text-xl font-bold tracking-wide">SAO MOTORS</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                Luxury · Ouagadougou
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Diagnostic, maintenance et réparation de véhicules chinois —
            thermiques et électriques.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold tracking-widest text-accent">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/galerie" className="hover:text-white">
                Galerie
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold tracking-widest text-accent">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold tracking-widest text-accent">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Itinéraire Google Maps
              </a>
            </li>
            <li>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </li>
            <li>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/80">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white/80">
              Confidentialité
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
