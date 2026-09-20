import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Diagnostic & réparation véhicules chinois à Ouagadougou`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_BF",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${syne.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="contenu" className="pb-20 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
