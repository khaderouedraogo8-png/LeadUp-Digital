import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-accent" : "text-accent-hover"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
