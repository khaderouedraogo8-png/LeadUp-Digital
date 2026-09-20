import { siteConfig } from "@/lib/site";
import { services } from "@/lib/site";

export default function sitemap() {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/services",
    "/vehicules-chinois",
    "/vehicules-electriques",
    "/a-propos",
    "/galerie",
    "/faq",
    "/contact",
    "/rendez-vous",
    "/diagnostic",
    "/devis",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
