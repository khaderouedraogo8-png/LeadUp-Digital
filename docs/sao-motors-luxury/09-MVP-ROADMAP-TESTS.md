# 09 — Gap · MVP · Premium · Roadmap · Tests · Recommandations finales

## 1. Synthèse gap (rappel)

Voir aussi `03-UX-PERSONAS-JOURNEYS.md` §5 (55 opportunités).

| Eux | Mal | SAO | Différenciation |
|-----|-----|-----|-----------------|
| Services génériques | Templates + stock photos | Spécialiste chinois + EV | Niche claire BF |
| Téléphone | Pas de WA | WA structuré | Conversion AO |
| Claims vagues | Compteurs faux | Preuves photos | Confiance |
| SEO faible | Pas de schema | Local SEO + pages niche | Trafic durable |

---

## 2. MVP — livrable rapide

### Scope

**Pages :** Home, Services hub + 5 services, Véhicules chinois, EV, À propos, Galerie, FAQ, Contact, RDV, Diagnostic, Devis, Légal  

**Features :** Sticky Call/WA, 3 formulaires, Sanity settings, schema LocalBusiness, GBP setup guide, analytics events, OG images  

**Hors scope MVP :** Blog, espace client, e-commerce pièces, calendrier live, multilingue, dark mode, paiement, PWA  

### Pourquoi ce découpage

Maximise conversion + différenciation + SEO de base sans surcharger l’ops atelier.

---

## 3. Version Premium

| Module | Valeur |
|--------|--------|
| Blog /conseils (30 sujets) | SEO long-tail |
| Pages modèles (Tiggo, Coolray…) | Intent précis |
| Créneaux matin/aprem | Moins d’allers-retours |
| WA Business API | Notifs atelier |
| Dashboard leads | Suivi commercial |
| Avis Google sync | Preuve sociale |
| Pack flotte entreprise | B2B |
| Avant/après galerie | Persuasion |
| PWA + offline FAQ | Perf 3G |
| Catalogue pièces (demande) | Lead gen |

---

## 4. Roadmap

### Phase 1 — Research ✅ (ce dossier)

Audit marché, benchmarks, personas, spec.

### Phase 2 — UX

Wireframes hi-fi mobile, flows formulaires, proto Figma, tests 5 utilisateurs Ouaga (WhatsApp remote OK).

### Phase 3 — UI

Design system tokens, maquettes pages P0, assets photo brief.

### Phase 4 — Development

Next.js setup, pages, API leads, intégrations email, WA links.

### Phase 5 — CMS

Sanity schemas, formation propriétaire 1h.

### Phase 6 — SEO

Titles, schema, sitemap, GBP, NAP, Search Console.

### Phase 7 — Testing

Voir §5.

### Phase 8 — Launch

DNS, HTTPS, soft launch FB, monitoring.

### Phase 9 — Optimization

Analytics review bi-hebdo, A/B CTA, contenus blog, pages P1.

---

## 5. Testing Strategy

| Domaine | Tests |
|---------|-------|
| UX | 5 tasks : trouver WA, demander diagnostic, trouver adresse, page EV, page chinois |
| Responsive | 360 / 390 / 430 / 768 / 1280 |
| Browser | Chrome Android, Safari iOS, Samsung Internet, Firefox |
| A11y | axe + clavier + contraste |
| Perf | Lighthouse + WebPageTest 4G Fast |
| Security | headers, rate limit, upload |
| Forms | validation, double submit, spam |
| SEO | rich results test, crawl |
| Analytics | debug events |
| Mobile | sticky, safe-area |
| WhatsApp | deep links iOS/Android |
| Phone | tel: links |
| Maps | itinerary link |

---

## 6. Final Recommendations (top 15)

1. **Mobile + WhatsApp first** — non négociable au BF  
2. **Spécialisation chinois + EV** au-dessus de la fold  
3. **Aucune claim non vérifiée**  
4. **Photos réelles atelier** avant lancement marketing  
5. **Demande de RDV hybride**, pas calendrier Tesla  
6. **Page EV avec périmètre honnête**  
7. **Next.js + Sanity + Postgres**  
8. **GBP + NAP** dès J-14 avant launch  
9. **Design tokens sobres** (ink/steel/sand/accent or technique)  
10. **Formulaires courts** + upload photos  
11. **Schema AutomotiveBusiness**  
12. **Analytics events Call/WA/forms**  
13. **Blog en P1**, pas bloquant MVP  
14. **Confirmer lien Groupe SAO / SIAF** avant storytelling  
15. **Mesurer leads/semaine**, pas vanity metrics  

---

## 7. Proposition commerciale (pour le propriétaire)

Ce dossier constitue une **proposition d’agence** : recherche + stratégie + UX/UI + architecture + spec.  
L’étape suivante est un atelier de validation (checklist §7 du doc 01) puis design/build MVP.
