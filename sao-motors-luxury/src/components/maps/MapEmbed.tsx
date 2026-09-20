"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { LinkButton } from "@/components/ui/Button";

export function MapEmbed({
  className = "",
  title = "Carte SAO Motors Luxury — Ouaga 2000",
}: {
  className?: string;
  title?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative min-h-[300px] overflow-hidden border border-border bg-sand sm:min-h-[360px] ${className}`}
    >
      {!loaded ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-ink p-6 text-center">
          <p className="font-display text-lg font-bold tracking-wide text-white">
            SAO Motors Luxury
          </p>
          <p className="text-sm text-white/65">Ouaga 2000, Ouagadougou</p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="focus-ring mt-2 inline-flex min-h-11 items-center border border-white/25 bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Afficher la carte
          </button>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 underline-offset-2 hover:text-white hover:underline"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      ) : (
        <>
          <iframe
            title={title}
            src={siteConfig.mapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute bottom-3 left-3 z-10">
            <LinkButton href={siteConfig.mapsUrl} variant="onDark" external>
              Itinéraire
            </LinkButton>
          </div>
        </>
      )}
    </div>
  );
}
