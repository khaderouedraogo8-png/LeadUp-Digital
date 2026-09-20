"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-lg font-semibold text-ink">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transition ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <p className="pb-5 pr-8 text-muted leading-relaxed">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
