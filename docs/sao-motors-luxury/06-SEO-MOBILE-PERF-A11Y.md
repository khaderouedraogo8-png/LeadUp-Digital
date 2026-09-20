# 06 — SEO · Local SEO · Mobile · Performance · Accessibilité

## 1. SEO Strategy

### Objectifs

1. Apparaître sur requêtes locales à intention transactionnelle  
2. Capturer le long-tail « véhicule chinois / EV » peu concurrentiel  
3. Renforcer la marque SAO Motors Luxury  

### Architecture SEO

- 1 H1 / page  
- Titles ≤ 60 car.  
- Meta descriptions ≤ 155 car.  
- URLs courtes FR sans accents problématiques  
- Canonical self  
- Sitemap.xml + robots.txt  
- Internal linking Services ↔ Chinois ↔ EV ↔ Diagnostic  
- Images : nom fichier descriptif + alt factuel  
- Open Graph / Twitter cards  

### Exemples title / meta

| Page | Title | Meta |
|------|-------|------|
| Home | SAO Motors Luxury \| Diagnostic & réparation véhicules chinois à Ouagadougou | Atelier à Ouagadougou : diagnostic électronique, entretien et réparation de véhicules chinois thermiques et électriques. Appelez +226 79 75 55 55. |
| Diagnostic | Diagnostic automobile Ouagadougou \| SAO Motors Luxury | Demandez un diagnostic mécanique ou électronique pour votre véhicule chinois ou électrique à Ouagadougou. |
| EV | Véhicules électriques Ouagadougou \| Entretien & diagnostic | Interventions sur véhicules électriques à Ouagadougou : périmètre clair, diagnostic, entretien. Contact WhatsApp. |
| Chinois | Réparation véhicules chinois Ouagadougou \| SAO Motors Luxury | Spécialistes du diagnostic et de la réparation des véhicules chinois à Ouagadougou. Pièces d’origine. |

### Mots-clés (intention — volumes non inventés)

Volumes exacts Google Ads BF souvent indisponibles / faibles : prioriser **intention** et pertinence locale.

**Cluster transactionnel local**

- garage Ouagadougou  
- diagnostic automobile Ouagadougou  
- réparation voiture Ouagadougou  
- garage Ouaga 2000  
- électricité automobile Ouagadougou  
- pièces automobiles Ouagadougou  

**Cluster différenciant**

- réparation véhicule chinois Ouagadougou  
- diagnostic véhicule chinois  
- entretien voiture électrique Burkina Faso  
- garage véhicule électrique Ouagadougou  
- Chery / Geely / Changan entretien Ouagadougou (pages P2)  

**Cluster informationnel (blog)**

- voyant moteur voiture chinoise  
- autonomie Geometry O Burkina  
- entretien clim Ouagadougou  

### Schema.org (JSON-LD)

Implémenter :

```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "SAO Motors Luxury",
  "image": "https://…/atelier.jpg",
  "telephone": "+22679755555",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ouagadougou",
    "addressCountry": "BF",
    "streetAddress": "[À VÉRIFIER]"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[À VÉRIFIER]",
    "longitude": "[À VÉRIFIER]"
  },
  "url": "https://www.saomotorsluxury.bf",
  "openingHoursSpecification": ["[À VÉRIFIER]"],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573984872787"
  ]
}
```

Aussi : `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`.

---

## 2. Local SEO

### Google Business Profile (priorité absolue)

Checklist :

1. Claim / verify fiche liée au Maps `3hmCATLt7anaEjYN9`  
2. NAP cohérent site / FB / GBP  
3. Catégorie : Auto repair shop (+ EV charging? seulement si vrai)  
4. Description = positionnement chinois + EV  
5. Photos atelier hebdomadaires  
6. Posts Google  
7. Réponses aux avis  
8. Produits/services GBP  
9. Horaires exacts  
10. Bouton WhatsApp si dispo  

### Citations locales

Annuaires BF / Afrique : cohérence NAP. Qualité > quantité.

---

## 3. Mobile Strategy

### Breakpoints

| Token | Width |
|-------|-------|
| xs | 360 |
| sm | 390 |
| md | 430 |
| tablet | 768 |
| desktop | 1024 |
| wide | 1280+ |

### Navigation mobile

- Burger full-screen panel  
- CTA Call + WA toujours visibles (header ou sticky bottom)  
- Pas de mega-menu  

### Formulaires mobile

- 1 colonne  
- `inputmode=tel`  
- Bouton submit sticky bas de formulaire  
- Upload photos via `capture` optionnel  

### Connexion moyenne

- Budget JS initial < 150 KB gzip  
- Fonts subset latin  
- Images responsive `srcset`  
- Lazy below fold  
- Prefetch RDV seulement au hover/intent  

---

## 4. Performance

### Objectifs mesurables (terrain BF 4G)

| Métrique | Objectif |
|----------|----------|
| LCP | ≤ 2.5 s |
| CLS | ≤ 0.1 |
| INP | ≤ 200 ms |
| TTFB | ≤ 800 ms |
| Page weight home | ≤ 1.5 MB |
| Lighthouse Perf mobile | ≥ 90 |

### Moyens

- Next.js SSG/ISR  
- Images AVIF/WebP via `next/image`  
- Pas de jQuery  
- CSS critique minimal  
- CDN (Cloudflare)  
- Compression Brotli  
- Cache immutable assets hashés  
- Éviter carousels lourds  
- Maps : charge au clic  

---

## 5. Accessibility (WCAG 2.2 AA)

| Domaine | Exigence |
|---------|----------|
| Contraste | Texte ≥ 4.5:1 ; UI ≥ 3:1 |
| Clavier | Tab order logique ; skip link |
| Focus | Visible accent ring |
| ARIA | Landmarks ; labels formulaires |
| Erreurs | Texte + association champ |
| Alt | Descriptif factuel photos atelier |
| Motion | `prefers-reduced-motion` |
| Sémantique | header/nav/main/footer ; headings hiérarchiques |
| Touch | Cibles ≥ 44×44 |
| Lang | `lang="fr"` |

Tests : axe DevTools + clavier + VoiceOver/TalkBack spot check.
