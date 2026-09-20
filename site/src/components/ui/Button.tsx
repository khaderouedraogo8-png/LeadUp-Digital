import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost" | "call" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-steel border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink/80 hover:border-accent hover:text-accent-hover",
  whatsapp:
    "bg-wa text-white border border-wa hover:brightness-95",
  ghost:
    "bg-transparent text-ink border border-transparent hover:border-border",
  call:
    "bg-paper text-ink border border-border-strong hover:border-ink",
  onDark:
    "bg-white text-ink border border-white hover:bg-sand",
};

type Common = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-150 disabled:cursor-not-allowed disabled:opacity-40 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
  external,
}: Common & { href: string; external?: boolean }) {
  const cls = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-150 ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
