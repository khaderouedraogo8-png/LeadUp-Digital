# 05 — Design Direction · Design System · Photo · Contenu · Branding

## 1. Direction artistique

### Concept

**« Atelier de précision sous le soleil du Sahel »**

- Premium technique, pas showroom luxe ostentatoire  
- Métallique, mat, lumineux, chaleureux (poussière d’or / acier)  
- Africain contemporain + standards internationaux  
- Masculin sans caricature garage « graisse et néon »

### Mots d’ordre

PREMIUM · TECHNIQUE · FIABLE · SOBRE · RAPIDE · LOCAL

### Interdits (alignés règles design + brief)

- Violet/indigo gradient « IA »  
- Cream + terracotta + serif générique  
- Broadsheet newspaper layout  
- Cyberpunk / neon / gamer  
- Glassmorphism excessif  
- Cards partout  
- Glow multi-layer shadows  
- Emojis UI  
- Dark mode par défaut  

---

## 2. Branding & logo

### État actuel [À VÉRIFIER visuellement avec assets propriétaire]

Le nom **SAO Motors Luxury** combine :

- **SAO** — ancrage personne / groupe [À VÉRIFIER]  
- **Motors** — automobile  
- **Luxury** — ambition qualitative (atelier soigné), **pas** concession ultra-luxe  

### Recommandations logo

| Action | Décision |
|--------|----------|
| Refonte logo | **Non**, sauf si illisible en favicon / header |
| Conservation | Marque existante + espace de respiration |
| Usage | Logo mono sombre sur fond clair ; version claire sur photo sombre |
| Clear space | ≥ 0.5× hauteur du logo |
| Tailles | Header 28–36px hauteur ; footer 24px |

### Couleurs compatibles (hypothèses — calibrer sur logo réel)

Si le logo actuel utilise noir / or / rouge / blanc (fréquent auto), caler le système dessus.  
**[À VÉRIFIER]** : fournir hex exacts du logo.

---

## 3. Design System — tokens

### 3.1 Couleur

```css
:root {
  /* Brand */
  --sml-ink: #0B0D10;          /* quasi-noir technique */
  --sml-steel: #1C2430;        /* anthracite */
  --sml-silver: #8B95A5;       /* métal */
  --sml-sand: #E8E2D6;         /* fond chaud léger — pas cream #F4F1EA cliché */
  --sml-paper: #F7F6F3;        /* surface */
  --sml-white: #FFFFFF;

  /* Accent — OR TECHNIQUE (pas or bling) */
  --sml-accent: #B08D57;       /* calibrer sur logo */
  --sml-accent-hover: #967846;

  /* Semantic */
  --sml-success: #2F6B4F;
  --sml-error: #9B2C2C;
  --sml-warning: #9A6B2F;
  --sml-info: #2C527A;

  /* Text */
  --sml-text: #0B0D10;
  --sml-text-muted: #5C6570;
  --sml-text-on-dark: #F7F6F3;

  /* Borders */
  --sml-border: #D9D4CB;
  --sml-border-strong: #B7B1A6;
}
```

**Fond :** dégradé subtil `paper → sand` ou texture grain très faible (2–3 % opacity), **plus** photo hero. Pas de flat #FFF partout.

### 3.2 Typographie

**Interdit :** Inter, Roboto, Arial, system-ui seul.

| Rôle | Police recommandée | Fallback | Poids |
|------|-------------------|----------|-------|
| Display / Brand | **Syne** ou **Outfit** | sans-serif | 600–700 |
| Body | **Source Serif 4** NON — plutôt **Manrope** ou **Sora** | sans | 400–500 |
| UI / labels | **IBM Plex Sans** | sans | 500 |

Alternative premium locale-feel : **DM Sans** (titres) + **Literata** uniquement pour articles blog (pas UI).

**Échelle (rem, base 16)**

| Token | Size | Line |
|-------|------|------|
| display | clamp(2.5rem, 6vw, 4rem) | 1.05 |
| h1 | clamp(2rem, 4vw, 3rem) | 1.1 |
| h2 | clamp(1.5rem, 3vw, 2rem) | 1.2 |
| h3 | 1.25rem | 1.3 |
| body | 1rem | 1.6 |
| small | 0.875rem | 1.5 |
| micro | 0.75rem | 1.4 |

### 3.3 Spacing & grille

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
```

Grille : 12 colonnes desktop · gutter 24 · max-width **1200px** contenu (full-bleed media hors grille).

### 3.4 Radius & ombres

```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px   /* formulaires, images secondaires — PAS cards hero */
--radius-full: 999px /* UNIQUEMENT pills si indispensables — éviter */

--shadow-sm: 0 1px 2px rgba(11,13,16,0.06)
--shadow-md: 0 8px 24px rgba(11,13,16,0.08) /* hover rare */
```

Pas de multi-layer glow.

### 3.5 Boutons

| Variant | Style |
|---------|-------|
| Primary | Fond `--sml-ink`, texte blanc, hover accent underline/border gold |
| Secondary | Bordure ink, fond transparent |
| WhatsApp | Vert WhatsApp officiel `#25D366` (exception brand) — icône + label |
| Call | Outline ou ink soft |
| Disabled | opacity 0.4, cursor not-allowed |
| Loading | spinner 16px + label « Envoi… » |
| Focus | outline 2px `--sml-accent` offset 2px |

Hauteur min touch : **44px**. Padding 16–24.

### 3.6 Formulaires

- Labels au-dessus  
- Erreurs sous champ, liées `aria-describedby`  
- Autocomplete approprié (`tel`, `name`)  
- Inputs height 48px mobile  

### 3.7 Icônes

Lucide ou Phosphor **outline** 1.5px · taille 20/24 · pas d’emoji.

### 3.8 Motion

| Token | Valeur |
|-------|--------|
| duration-fast | 150ms |
| duration | 250ms |
| ease | cubic-bezier(0.22, 1, 0.36, 1) |

Motions autorisées (2–3 max sitewide) :

1. Fade/slide-up reveal sections (once, 250ms)  
2. Hover underline / opacity boutons  
3. Sticky bar appear  

`prefers-reduced-motion: reduce` → désactiver reveals.

### 3.9 Dark mode

**Décision : NON pour MVP et V1.**  
Rationale : marque light premium ; coût contraste photos ; pas demandé par usage local.  
Réévaluer en P2 si app client.

---

## 4. Photographie

### Doivent être RÉELLES (non négociable)

- Façade / entrée atelier  
- Intérieur atelier (baies, ponts, outils diag)  
- Techniciens au travail (avec consentement)  
- Réception / accueil  
- Véhicules chinois réellement reçus  
- Équipements de diagnostic  
- Localisation / rue  

### Stock acceptable (limité)

- Textures abstraites métal / carbone (background subtil)  
- Illustrations schéma frein/batterie **éducatives** (blog)  

### Stock INTERDIT

- Mécanicien souriant studio US  
- Showroom Mercedes générique  
- Femme d’affaires avec clés chrome  
- Neon garage cyber  

### Brief shooting (recommandé)

| Setup | Spec |
|-------|------|
| Lumière | Naturelle + LED atelier ; éviter flash plat |
| Style | Reportage documentaire premium |
| Ratio | 16:9 hero · 4:5 social · 1:1 avatar équipe |
| Couleur | Léger désaturé, ombres profondes, highlights contrôlés |
| Modèles | Équipe réelle ; clients consentants uniquement |
| EV | Montrer prise / diag tablet — **pas** ouvrir pack HV pour la photo |

---

## 5. Content strategy & ton

### Ton

Professionnel · Direct · Confiant · Technique compréhensible · Premium · Local · Humain  
**Anti-bullshit.**

### Exemples copy

**Bien :**  
> Un voyant s’allume. Avant de remplacer des pièces, nous diagnostiquons. Vous validez le devis. Ensuite seulement, on intervient.

**Mal :**  
> Chez SAO Motors Luxury, l’excellence est notre ADN synergique au service de votre mobilité premium.

### Pages — structure contenu type service

1. H1 + intro 2 phrases  
2. Pour qui / symptômes  
3. Ce que comprend le service  
4. Process  
5. FAQ 3–5  
6. CTA  
7. Liens internes  

### Blog — utile ? **OUI en P1**, pas MVP bloquant

Stratégie : 2 articles/mois, SEO local + chinois + EV.

#### 30 sujets SEO proposés

1. Diagnostic véhicule chinois Ouagadougou : comment ça se passe  
2. Voyant moteur Chery / Geely : que faire  
3. Entretenir une Geometry O au Burkina  
4. Batterie 12V vs batterie de traction  
5. Clim qui ne refroidit plus à Ouagadougou  
6. Filtres et poussière : rythme d’entretien  
7. Freins et freinage régénératif EV  
8. Pièces d’origine vs compatibles : risques  
9. Préparer son véhicule chinois avant saison des pluies  
10. Codes OBD fréquents (éducatif, non exhaustif)  
11. Que vérifier avant d’acheter une voiture chinoise d’occasion  
12. Autonomie EV chaleur extrême  
13. Charge solaire et usage quotidien Ouaga  
14. Suspension et routes du Burkina  
15. Entretien préventif vs réparation d’urgence  
16. Comment lire un devis atelier  
17. Immobiliser une EV en sécurité  
18. Capteurs ABS / ESP : symptômes  
19. Huile moteur : viscosité chaleur  
20. Batterie qui se décharge (parasites)  
21. Diagnostic climatisation automobile  
22. Import pièces Chine : délais réalistes  
23. Différence garage généraliste / spécialiste chinois  
24. Checklist révision 10 000 km  
25. Bruits suspension : causes courantes  
26. Électricité automobile : démarrage difficile  
27. Hybrides chinois : points de vigilance  
28. Garantie atelier : ce que ça couvre [si applicable]  
29. Flotte entreprise : planning entretien  
30. Sécurité routière Burkina : entretien freins/pneus  

---

## 6. Micro-interactions (seulement si utiles)

| Endroit | Interaction | Pourquoi |
|---------|-------------|---------|
| Submit form | Bouton loading + disable double submit | Évite doublons leads |
| Upload photo | Preview thumbnail | Confirme le fichier |
| WA button | Léger scale 1.02 | Affordabilité tactile |
| Accordion FAQ | Height animate 200ms | Lisibilité |
| Maps | Lazy iframe on click « Afficher la carte » | Perf |

Pas de counters animés. Pas de cursor custom. Pas de particules.
