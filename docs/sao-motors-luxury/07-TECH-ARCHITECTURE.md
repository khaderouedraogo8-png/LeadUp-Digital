# 07 — Architecture technique · Données · API · CMS · Sécurité · Analytics

## 1. Comparaison de stacks

| Critère | A Next.js+TS+Tailwind+PG | B Vite+Flask | C Next+Headless CMS | D Statique+backend léger |
|---------|--------------------------|--------------|---------------------|--------------------------|
| SEO | Excellent (SSR/SSG) | Moyen (SPA) | Excellent | Excellent |
| Perf | Excellent | Moyen | Excellent | Excellent |
| Coût initial | Moyen | Faible | Moyen | Faible |
| Maintenance | Bonne | 2 stacks | Bonne | Très bonne MVP |
| Formulaires | API routes | Flask | API + CMS | Serverless functions |
| Admin contenu | Custom ou CMS | Custom | CMS natif | CMS git-based |
| Évolutivité | Haute | Moyenne | Haute | Moyenne |
| Sécurité | Mature | OK | Mature | OK |

### Recommandation principale

**Option hybride A+C :**

> **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Sanity (headless CMS) + PostgreSQL (leads) + Resend (email) + Cloudflare**

#### DECISION
Stack Next.js + Sanity + Postgres  

#### RATIONALE
SEO et perf critiques sur mobile BF ; CMS simple pour propriétaire ; Postgres pour leads structurés ; un seul langage (TS) côté app.  

#### EVIDENCE
Sites garage SPA purs rankent mal ; PROS-MOTORS-like conversion n’a pas besoin d’un monolithe ; DataReportal = mobile-first.  

#### PRIORITY
P0  

#### IMPLEMENTATION NOTES
- Hébergement : Vercel ou Cloudflare Pages + Neon/Supabase PG  
- Domaine : `.bf` si possible [À VÉRIFIER disponibilité `saomotorsluxury.bf`]  

### Pourquoi pas WordPress

- Perf et sécurité souvent médiocres sans hardcore tuning  
- Templates garage génériques = anti-différence  
- OK seulement si budget dev très bas — **non recommandé** pour proposition premium propriétaire  

---

## 2. Architecture applicative

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Navigateur │────▶│  Next.js     │────▶│  Sanity CMS │
│  Mobile/Desk│     │  SSG/ISR     │     │  (contenu)  │
└─────────────┘     │  API Routes  │────▶│  Postgres   │
                    │              │     │  (leads)    │
                    └──────┬───────┘     └─────────────┘
                           │
                    ┌──────▼───────┐
                    │ Resend Email │
                    │ WA deep link │
                    │ Plausible/GA4│
                    └──────────────┘
```

---

## 3. Modèles de données (PostgreSQL)

```
Admin
  id, email, password_hash, role, created_at

Customer (léger — pas de compte MVP)
  id, full_name, phone, whatsapp_same, email?, created_at

VehicleBrand
  id, name, slug, origin_region, is_chinese, active

VehicleModel
  id, brand_id, name, slug, energy_types[]

Service
  id, slug, title, summary, body, seo_*, category, active, sort_order
  (peut vivre dans Sanity — dualité : Sanity source of truth contenu)

AppointmentRequest
  id, ref_code, customer_id?, name, phone, service_type,
  brand, model, year?, energy, mileage?, preferred_date?,
  message, status (new|contacted|scheduled|done|cancelled),
  source (web|fb|wa), created_at

DiagnosticRequest
  id, ref_code, ...vehicle fields..., symptoms, photos[],
  status, created_at

QuoteRequest
  id, ref_code, service_needed, vehicle fields, photos[],
  status, created_at

ContactRequest
  id, name, phone, message, status, created_at

Review (si géré sur site)
  id, author, body, rating, source, published, created_at

GalleryItem → Sanity
BlogPost → Sanity
FAQ → Sanity
SiteSettings → Sanity (phone, hours, address, socials)
```

### Relations

- VehicleModel N—1 VehicleBrand  
- Requests optionnellement liées Customer par téléphone normalisé  
- Photos : stockage objet (S3/R2), URLs en JSON  

---

## 4. API

### Public

| Method | Endpoint | Body | Rate limit |
|--------|----------|------|------------|
| POST | `/api/diagnostics` | DiagnosticDTO | 5 / 15 min / IP |
| POST | `/api/appointments` | AppointmentDTO | 5 / 15 min / IP |
| POST | `/api/quotes` | QuoteDTO | 5 / 15 min / IP |
| POST | `/api/contact` | ContactDTO | 5 / 15 min / IP |
| GET | `/api/services` | — | cache CDN |
| GET | `/api/brands` | — | cache CDN |

### Admin (Premium)

| Method | Endpoint | Auth |
|--------|----------|------|
| GET/PATCH | `/api/admin/requests` | Session admin |
| PATCH | `/api/admin/requests/:id` | status update |

### Validation

- Zod schemas  
- Normaliser téléphone BF (`+226` + 8 digits)  
- Sanitize HTML (pas de HTML user)  
- Photos : MIME jpeg/png/webp, max 5 MB × 3  

### Réponses

```json
{ "ok": true, "ref": "SML-20260920-0042" }
{ "ok": false, "error": "VALIDATION_ERROR", "fields": { "phone": "…" } }
```

### Auth admin

- Magic link ou password + 2FA (P1)  
- Cookies httpOnly secure  
- RBAC simple `owner|editor`  

---

## 5. CMS Strategy

| Option | Verdict |
|--------|---------|
| Sanity | **Recommandé** — UX éditeur, preview, roles |
| Strapi | OK self-host ; plus d’ops |
| Directus | OK si déjà PG-centric |
| WordPress | Non pour front premium |
| Custom dashboard only | Trop cher MVP |
| Notion/Git | Fragile pour non-tech |

### Contenu éditable propriétaire (Sanity)

- Horaires, téléphone, WhatsApp, adresse  
- Services (titre, texte, ordre)  
- Galerie  
- FAQ  
- Témoignages  
- Articles  
- Marques affichées  
- Bannière promo (option)  

---

## 6. Sécurité

| Risque | Mitigation |
|--------|------------|
| Spam | Honeypot + rate limit + turnstile optionnel |
| XSS | React escape + CSP |
| CSRF | SameSite cookies ; tokens API routes |
| Injection | Prisma/SQL paramétré |
| Upload malware | MIME check + taille + scan optionnel + no exec |
| Secrets | Env vars ; jamais client |
| Admin brute force | Rate limit + lockout |
| Backups | PG daily + Sanity history |
| Logs | Request id ; pas de PII complète en clair logs publics |
| HTTPS | Obligatoire |
| Dépendances | npm audit CI |

Conformité données : politique confidentialité ; conservation leads 24 mois [À VÉRIFIER légal BF].

---

## 7. Analytics

### Outil

**Plausible** ou **GA4** + events (Plausible préférable privacy-light).

### Events

| Event | Trigger |
|-------|---------|
| `phone_click` | click tel: |
| `whatsapp_click` | click WA (prop: page) |
| `appointment_start` | focus form RDV |
| `appointment_submit` | succès |
| `quote_start` / `quote_submit` | devis |
| `diagnostic_start` / `diagnostic_submit` | diagnostic |
| `map_click` | itinéraire |
| `service_view` | view content service |
| `contact_submit` | contact |
| `cta_primary_click` | hero CTA |

### KPIs

- Taux clic Call+WA / session  
- Taux completion formulaires  
- Sources (FB / Organic / Direct)  
- Pages landings ads  

---

## 8. Notifications atelier

MVP :

1. Email à `atelier@[domaine]` à chaque lead  
2. Page succès avec ref + bouton WA  

P1 :

3. WhatsApp Business API message à l’atelier  
4. Auto-reply client  

---

## 9. Environnements

- `dev` / `staging` / `prod`  
- Preview deploy par PR  
- Feature flags : blog, pricing  
