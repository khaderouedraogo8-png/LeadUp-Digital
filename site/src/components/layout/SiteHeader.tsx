"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { waLink, waMessages } from "@/lib/wa";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          className="focus-ring flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="SAO Motors Luxury"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="hidden sm:block">
            <span className="font-display text-xl font-bold leading-none tracking-[0.06em] text-ink uppercase">
              SAO MOTORS
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Luxury · Ouagadougou
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principale">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-[13px] font-semibold uppercase tracking-wide text-muted transition hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="focus-ring inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold text-ink"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Appeler
          </a>
          <LinkButton href={waLink(waMessages.general)} variant="whatsapp" external>
            WhatsApp
          </LinkButton>
          <LinkButton href="/rendez-vous" variant="primary">
            Rendez-vous
          </LinkButton>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={`tel:${siteConfig.phone}`}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center text-ink"
            aria-label="Appeler"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="focus-ring py-3 font-display text-lg font-semibold tracking-wide text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <LinkButton href="/diagnostic" variant="primary" className="w-full">
                Demander un diagnostic
              </LinkButton>
              <LinkButton
                href={waLink(waMessages.general)}
                variant="whatsapp"
                className="w-full"
                external
              >
                WhatsApp
              </LinkButton>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
