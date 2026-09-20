import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Ouagadougou",
      addressRegion: "Centre",
      addressCountry: "BF",
    },
    hasMap: siteConfig.mapsUrl,
    sameAs: [siteConfig.facebookUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
