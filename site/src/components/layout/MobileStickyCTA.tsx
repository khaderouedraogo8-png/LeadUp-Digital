"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { waLink, waMessages } from "@/lib/wa";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${siteConfig.phone}`}
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-ink text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Appeler
        </a>
        <a
          href={waLink(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-wa text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
