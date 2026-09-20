# 04 — Information Architecture · Sitemap · Blueprints

## Principe

Moins de pages, plus de profondeur utile.  
Chaque page = objectif business OU SEO OU conversion. Sinon : supprimer.

---

## Sitemap finale

```
/
├── /services
│   ├── /services/diagnostic-automobile
│   ├── /services/diagnostic-electronique
│   ├── /services/maintenance-entretien
│   ├── /services/reparation
│   ├── /services/electricite-automobile
│   └── /services/pieces-accessoires
├── /vehicules-chinois
├── /vehicules-electriques
├── /a-propos
├── /galerie
├── /temoignages          (P1 — peut fusionner Accueil/À propos en MVP)
├── /faq
├── /conseils             (P1 blog index)
│   └── /conseils/[slug]
├── /contact
├── /rendez-vous
├── /diagnostic
├── /devis
├── /mentions-legales
├── /confidentialite
└── /plan-du-site
```

### Priorités

| URL | Priorité | Objectif | Audience | CTA | SEO |
|-----|----------|----------|----------|-----|-----|
| `/` | **P0** | Orienter + convertir | Tous | Diagnostic / WA | Local brand |
| `/services` | **P0** | Hub services | Tous | Voir service | « services garage Ouagadougou » |
| `/services/diagnostic-*` | **P0** | Convertir panne | P1,P5,P6 | Demander diagnostic | « diagnostic auto Ouaga » |
| `/services/maintenance-*` | **P0** | RDV entretien | P3 | RDV | « entretien voiture Ouaga » |
| `/services/reparation` | **P0** | Devis réparation | P1,P3 | Devis | réparation |
| `/services/electricite-*` | **P1** | Expertise élec | P1,P2 | Diagnostic | électricité auto |
| `/services/pieces-*` | **P0** | Lead pièces | P6 | WA pièce | pièces auto Ouaga |
| `/vehicules-chinois` | **P0** | Différenciation | P1,P8 | Diagnostic | véhicule chinois BF |
| `/vehicules-electriques` | **P0** | Différenciation EV | P2 | Diagnostic EV | EV Burkina |
| `/a-propos` | **P0** | Confiance | Tous | Contact | marque |
| `/galerie` | **P0** | Preuve visuelle | Tous | RDV | — |
| `/faq` | **P0** | Objections | Tous | WA | long-tail |
| `/contact` | **P0** | NAP + Maps | Tous | Call/WA/Maps | local |
| `/rendez-vous` | **P0** | Conversion | Tous | Submit | — |
| `/diagnostic` | **P0** | Conversion | Panne | Submit | — |
| `/devis` | **P0** | Conversion | Prix | Submit | — |
| `/temoignages` | **P1** | Preuve sociale | Hésitants | RDV | — |
| `/conseils` | **P1** | SEO | Informationnels | Soft CTA | blog |
| Légal | **P0** | Conformité | — | — | — |
| Pages modèles (Chery Tiggo…) | **P2** | SEO fine | Owners | Diagnostic | modèle |
| Espace client | **P2** | Rétention | Récurrents | Login | — |
| Catalogue e-commerce pièces | **P2** | Vente | DIY | Achat | — |

---

## Homepage Blueprint (section par section)

**Décision :** une composition unique, brand-first, mobile-first.  
**Pas de dashboard. Pas de stats inventées. Pas de cards en hero.**

### 1. Header

| Aspect | Spec |
|--------|------|
| Objectif | Orientation + accès contact |
| Contenu | Logo · Nav · Appeler · WhatsApp |
| Mobile | Logo + burger + icônes Call/WA |
| Sticky | Oui, hauteur compacte |
| SEO | — |

Nav desktop : Services · Véhicules chinois · Électriques · À propos · Contact · **RDV** (bouton)

### 2. Hero

| Aspect | Spec |
|--------|------|
| Objectif | Répondre QUI / QUOI / POUR QUI en 5s |
| Contenu | Brand « SAO Motors Luxury » dominant · H1 · 1 phrase · CTA primary + secondary |
| Media | Photo atelier réelle full-bleed (pas inset card) |
| CTA primary | Demander un diagnostic |
| CTA secondary | WhatsApp |
| Mobile | Image en background overlay sombre léger pour lisibilité ; texte stack |
| Animation | Fade-in contenu 300ms ; pas de ken burns agressif |
| UX | Brand test : sans nav, on sait encore que c’est SAO |
| Business | Première conversion |
| SEO | H1 unique avec « Ouagadougou » |

**H1 proposé :**  
`Diagnostic et réparation de véhicules chinois à Ouagadougou`

**Sous-ligne :**  
`Thermiques et électriques. Pièces d’origine. Un atelier organisé pour votre véhicule.`

### 3. Bandeau confiance (sous hero)

| Contenu | 3–4 preuves courtes |
|---------|---------------------|
| Ex. | Diagnostic électronique · Véhicules chinois · Thermiques & EV · Ouagadougou |
| Media | Icônes linéaires sobres |
| Pas de | Chiffres inventés |

### 4. Services (3–6 entrées max sur home)

| Objectif | Scanner l’offre |
| Contenu | Diagnostic · Maintenance · Réparation · EV · Pièces |
| CTA | Lien page service |
| Mobile | Liste ou grille 1 col |
| Raison | SEO + orientation |

### 5. Spécialisation véhicules chinois

| Objectif | Différenciateur #1 |
| Contenu | Texte court + logos marques **uniquement si autorisés / marques réellement servies** |
| CTA | Voir véhicules chinois |
| Media | Photo véhicule chinois réel en atelier [À VÉRIFIER shooting] |

### 6. Section EV

| Objectif | Différenciateur #2 + honnêteté |
| Contenu | Ce que nous faisons / ce que nous orientons ailleurs |
| CTA | Diagnostic EV |
| SEO | « véhicule électrique Ouagadougou » |

### 7. Processus (Comment ça marche)

4 étapes : Contact → Diagnostic → Devis validé → Intervention & restitution  
CTA : Commencer

### 8. Atelier / preuve visuelle

Galerie 3–6 images réelles + lien Galerie  
**Pas de stock.**

### 9. Témoignages / avis

Uniquement avis réels Google ou clients consentants  
CTA : Voir avis Google

### 10. Localisation

Adresse [À VÉRIFIER] · carte · horaires · itinéraire  
CTA : Appeler · WA · Maps

### 11. CTA final

Bandeau sobre : « Un doute sur un voyant ? Parlez-nous de votre véhicule. »  
Boutons Diagnostic + WhatsApp

### 12. Footer

NAP · liens · légal · réseaux · horaires

### Sections volontairement absentes du hero viewport

Stats, planning, promos, adresse détaillée, listings événements, multi-CTA, badges flottants.

---

## Pages Blueprint (extraits critiques)

### `/vehicules-chinois`

- H1 : Réparation et diagnostic de véhicules chinois à Ouagadougou  
- Intro : problème pièces / électronique  
- Marques prises en charge [liste propriétaire]  
- Services associés  
- FAQ (pièces, import, voyants)  
- CTA Diagnostic  
- Internal links → EV, pièces, diagnostic électronique  

### `/vehicules-electriques`

- H1 : Entretien et diagnostic de véhicules électriques à Ouagadougou  
- Bloc **Périmètre d’intervention** (obligatoire)  
- Bloc sécurité HV (langage prudent)  
- FAQ autonomie / batterie 12V vs traction / clim  
- CTA « Décrire mon problème EV »  
- Lien Geely Geometry owners sans se dire partenaire  

### `/diagnostic`

- Formulaire court (voir Master Spec)  
- Alternative WA  
- Temps de réponse annoncé [À VÉRIFIER : ex. « sous 2h ouvrées »]  

### `/a-propos`

- Histoire factuelle uniquement  
- Lien Groupe SAO / SIAF **seulement si confirmé**  
- Photos équipe  
- Valeurs opérationnelles (transparence, diagnostic avant réparation)  

### `/contact`

- Téléphone, WA, email [si existe], Maps, horaires, formulaire court  

---

## Wireframe textuel Homepage (mobile)

```
┌─────────────────────────┐
│ LOGO      ☎  WA  ☰      │
├─────────────────────────┤
│                         │
│  [PHOTO ATELIER FULL]   │
│  SAO MOTORS LUXURY      │
│  H1 Diagnostic...       │
│  Sous-ligne             │
│  [Diagnostic] [WhatsApp]│
│                         │
├─────────────────────────┤
│ Preuves × 4 (icônes)    │
├─────────────────────────┤
│ Services                │
│ → Diagnostic            │
│ → Maintenance           │
│ → ...                   │
├─────────────────────────┤
│ Véhicules chinois       │
│ texte + CTA             │
├─────────────────────────┤
│ Véhicules électriques   │
├─────────────────────────┤
│ Process 1-2-3-4         │
├─────────────────────────┤
│ Galerie (scroll H)      │
├─────────────────────────┤
│ Avis                    │
├─────────────────────────┤
│ Carte + adresse         │
├─────────────────────────┤
│ CTA final               │
├─────────────────────────┤
│ Footer                  │
├─────────────────────────┤
│ [Appeler] [WhatsApp]    │ sticky
└─────────────────────────┘
```
