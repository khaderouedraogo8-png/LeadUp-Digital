# 10 — MASTER SPECIFICATION

**Produit :** Site officiel SAO Motors Luxury  
**Audience doc :** Développeur senior + designer  
**Objectif :** Implémenter sans décisions fondamentales manquantes  

Toute info `[À VÉRIFIER]` = placeholder CMS, pas hardcodée comme fait.

---

## 0. Décisions structurantes

| # | DECISION | RATIONALE | EVIDENCE | PRIORITY | IMPLEMENTATION NOTES |
|---|----------|-----------|----------|----------|----------------------|
| D1 | Site atelier premium WhatsApp-first | Comportement digital BF | DataReportal 2025 ; PROS-MOTORS | P0 | Sticky Call+WA global |
| D2 | Différenciation chinois + EV | Gap concurrentiel BF | Entrée Chery/Geely/Changan ; sites locaux sans niche | P0 | 2 pages P0 + hero mentions |
| D3 | Pas de claims non vérifiés | Risque confiance/légal | Brief + éthique | P0 | Feature flags contenu |
| D4 | Stack Next.js+Sanity+PG | SEO+perf+CMS | Comparatif doc 07 | P0 | App Router TS |
| D5 | RDV = demande hybride | Ops atelier local | Bosch trop lourd ; GIG/PROS patterns | P0 | Forms + WA |
| D6 | FR only | Marché Ouaga | Usage | P0 | `lang=fr` |
| D7 | No dark mode | Coût / marque | Doc 05 | P0 | — |
| D8 | No e-commerce MVP | Complexité pièces | Variabilité stock | P0 | Lead pièces WA |
| D9 | Photos réelles only (UI marketing) | Confiance | Erreurs concurrents | P0 | Bloquant launch ads |
| D10 | Pricing = devis, pas grille MVP | Risque | Doc 08 | P0 | Copy « devis avant intervention » |

---

## 1. Domaine & branding technique

- Domaine cible : `saomotorsluxury.bf` ou `.com` **[À VÉRIFIER]**  
- Favicon : logo crop  
- Apple touch icon  
- Couleur theme-color : `#0B0D10`  

---

## 2. Sitemap implémentable (routes)

```ts
const routes = [
  '/',
  '/services',
  '/services/diagnostic-automobile',
  '/services/diagnostic-electronique',
  '/services/maintenance-entretien',
  '/services/reparation',
  '/services/electricite-automobile',
  '/services/pieces-accessoires',
  '/vehicules-chinois',
  '/vehicules-electriques',
  '/a-propos',
  '/galerie',
  '/faq',
  '/contact',
  '/rendez-vous',
  '/diagnostic',
  '/devis',
  '/mentions-legales',
  '/confidentialite',
] as const;
```

P1 add : `/temoignages`, `/conseils`, `/conseils/[slug]`

---

## 3. Composants UI (design system)

### Primitives

`Button`, `LinkButton`, `Input`, `Textarea`, `Select`, `Checkbox`, `FileUpload`, `Badge`, `Icon`, `Section`, `Container`, `Heading`, `Text`, `Divider`, `Accordion`, `Alert`, `Spinner`, `Toast`

### Composés

`SiteHeader`, `SiteFooter`, `MobileStickyCTA`, `WhatsAppButton`, `CallButton`, `Hero`, `TrustStrip`, `ServiceList`, `ProcessSteps`, `GalleryStrip`, `TestimonialList`, `MapBlock`, `FinalCTA`, `ServiceHero`, `PerimeterEV`, `BrandGrid`, `LeadForm`, `SuccessPanel`, `SeoJsonLd`, `Breadcrumbs`

### Règles cards

Cards **uniquement** pour interaction (item service cliquable, FAQ).  
Hero = pas de card.

---

## 4. Layout global

```
<Header sticky />
<main id="contenu">{children}</main>
<Footer />
<MobileStickyCTA /> // Call | WhatsApp
```

Skip link : « Aller au contenu »

---

## 5. Homepage — spec sections (ordre)

1. `Hero`  
2. `TrustStrip` (4 items)  
3. `ServiceList` (5)  
4. `ChineseSpecialSection`  
5. `EVSpecialSection`  
6. `ProcessSteps` (4)  
7. `GalleryStrip`  
8. `TestimonialList` (si data)  
9. `MapBlock`  
10. `FinalCTA`  

### Copy figée recommandée (modifiable CMS)

- Brand line : `SAO Motors Luxury`  
- H1 : `Diagnostic et réparation de véhicules chinois à Ouagadougou`  
- Sub : `Thermiques et électriques. Pièces d’origine. Un atelier organisé pour votre véhicule.`  
- Primary CTA : `Demander un diagnostic` → `/diagnostic`  
- Secondary : `WhatsApp`  

---

## 6. Lead forms — schémas Zod

```ts
const phoneBF = z.string().regex(/^(\+226)?[0-9]{8}$/);

const diagnosticSchema = z.object({
  name: z.string().min(2).max(80),
  phone: phoneBF,
  brand: z.string().min(1).max(60),
  model: z.string().min(1).max(60),
  energy: z.enum(['thermique', 'hybride', 'electrique']),
  symptoms: z.string().min(10).max(500),
  year: z.number().int().min(1990).max(2100).optional(),
  mileage: z.number().int().min(0).max(2000000).optional(),
  preferredDate: z.string().optional(), // ISO date
  honeypot: z.string().max(0).optional(),
});
```

Appointment & Quote : extensions du même noyau + `serviceType`.

### UX form

- Étape unique (pas multi-step MVP)  
- Progress non nécessaire  
- Bouton submit full width mobile  
- Succès : ref + WA continue  

---

## 7. WhatsApp helper

```ts
function waLink(message: string) {
  const phone = '22679755555'; // from CMS
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

Templates : voir doc 08.

---

## 8. Sanity schemas (minimal)

```
siteSettings { phone, whatsapp, email, address, geo, hours[], facebookUrl, mapsUrl }
service { title, slug, excerpt, body, icon, seo }
galleryImage { image, alt, category }
faqItem { question, answer, category }
testimonial { author, role?, body, rating?, source? }
brand { name, logo?, active }
post { title, slug, excerpt, body, publishedAt } // P1
```

---

## 9. API contracts

### POST `/api/diagnostics`

Request: `multipart/form-data` ou JSON + URLs upload pré-signées  

Response 201:
```json
{ "ok": true, "ref": "SML-20260920-0042" }
```

Side effects:

1. Insert PG  
2. Email atelier (Resend)  
3. Optional Slack/webhook  

Errors: 400 validation, 429 rate, 500  

Idempotency : header optionnel `Idempotency-Key`.

---

## 10. Email template atelier

Sujet : `[SAO] Diagnostic {ref} — {brand} {model}`  

Corps : champs + liens photos + source page + UTM.

---

## 11. SEO technique

- `app/sitemap.ts`  
- `app/robots.ts`  
- `generateMetadata` par page  
- JSON-LD `AutomotiveBusiness` sur layout contact/home  
- FAQPage sur `/faq`  
- BreadcrumbList services  

---

## 12. Performance budget

| Asset | Budget |
|-------|--------|
| JS total first load | ≤ 150 KB gzip |
| Fonts | ≤ 2 familles, subset |
| Hero image | ≤ 200 KB AVIF |
| Third parties | Analytics only MVP |

---

## 13. Accessibilité checklist build

- [ ] Contraste tokens validés  
- [ ] Focus visibles  
- [ ] Formulaires labelés  
- [ ] Erreurs annoncées  
- [ ] Alt images  
- [ ] `prefers-reduced-motion`  
- [ ] Sticky ne masque pas focus  

---

## 14. Environnement & secrets

```
DATABASE_URL=
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=
RESEND_API_KEY=
LEADS_INBOX_EMAIL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WA_NUMBER=22679755555
TURNSTILE_SECRET= (opt)
```

---

## 15. Admin / ops

MVP admin = Sanity Studio (`/studio` protégé) + inbox email.  

P1 = table leads NextAdmin ou Retool.

---

## 16. Content freeze rules

Avant mise en prod marketing :

1. Adresse + horaires confirmés  
2. Liste marques confirmée  
3. Périmètre EV confirmé  
4. Photos atelier uploadées  
5. Lien SIAF/Groupe SAO tranché (oui/non)  
6. Numéro WA testé  
7. Mentions légales rédigées  

---

## 17. Wireflows critiques

### Landing FB → Diagnostic

`utm_source=facebook` → `/diagnostic?src=fb` → submit → success → event `diagnostic_submit`

### Urgence

Home sticky `tel:` → event `phone_click` → appel  

---

## 18. Responsive behavior notes

| Component | <390 | ≥1024 |
|-----------|------|-------|
| Hero | Text over image, CTAs stack | Text left 45% / visual full-bleed |
| Services | List | 3-col grid sans card shadow lourde |
| Sticky CTA | Visible | Hidden (header CTAs suffisent) |
| Map | Button then iframe | Embed visible |

---

## 19. Animation spec

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal { animation: reveal 0.25s var(--ease) both; }
}
```

IntersectionObserver once. Pas de scrolljacking.

---

## 20. Definition of Done (MVP)

- [ ] Toutes routes P0 live  
- [ ] Lighthouse mobile Perf ≥ 90 staging  
- [ ] 3 formulaires → email reçus  
- [ ] WA deep links OK iOS/Android  
- [ ] Schema validé  
- [ ] GBP aligné NAP  
- [ ] Aucun placeholder `[À VÉRIFIER]` visible public (remplacé ou retiré)  
- [ ] Consentement photos  
- [ ] Analytics events QA  

---

## 21. Complete implementation specification — page `/diagnostic`

| Élément | Spec |
|---------|------|
| URL | `/diagnostic` |
| Title | Diagnostic automobile Ouagadougou \| SAO Motors Luxury |
| H1 | Demander un diagnostic |
| Intro | Décrivez votre véhicule et le problème. Nous vous recontactons pour confirmer. |
| Form fields | voir schema |
| Secondary | Bouton WA message Diagnostic |
| Success | Ref + délais [CMS] + WA |
| SEO | Service schema |
| Analytics | start/submit |

---

## 22. Risques & mitigations

| Risque | Mitigation |
|--------|------------|
| Propriétaire ne fournit pas photos | Soft launch sans ads jusqu’à shooting |
| Spam leads | Turnstile + rate limit |
| Confusion avec Garage SAO Zad | Clarifier adresse ; éventuelle mention groupe si confirmée |
| Survente EV | Périmètre CMS obligatoire |
| Domaine .bf lent | CDN Cloudflare |

---

*Fin Master Specification — se référer aux docs 01–09 pour justifications étendues.*
