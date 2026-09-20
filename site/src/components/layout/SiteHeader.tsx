"use client";

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
    <header className="sticky top-0 z-40 border-b border-border/80 bg-paper/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link href="/" className="focus-ring group shrink-0" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
            SAO<span className="text-accent">.</span>Motors
          </span>
          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            Luxury · Ouagadougou
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principale">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-sm font-medium text-muted transition hover:text-ink"
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
        <div
          id="mobile-nav"
          className="border-t border-border bg-paper lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="focus-ring py-3 text-base font-medium text-ink"
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
