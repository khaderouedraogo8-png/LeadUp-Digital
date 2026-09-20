import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = Barlow({
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
    images: [{ url: "/logo.png" }],
  },
  icons: {
    icon: "/logo-64.png",
    apple: "/logo-192.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
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
