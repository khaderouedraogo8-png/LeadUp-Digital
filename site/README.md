# SAO Motors Luxury — Site web

Site officiel MVP de **SAO Motors Luxury** (Ouagadougou).

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- Zod (validation formulaires)
- Leads stockés en fichier `.data/leads.jsonl` (remplacer par Postgres + email en prod)

## Démarrage

```bash
cd site
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — développement
- `npm run build` — build production
- `npm run start` — serveur production
- `npm run lint` — ESLint

## Pages P0

Accueil, Services (+ détails), Véhicules chinois, Véhicules électriques, À propos, Galerie, FAQ, Contact, Diagnostic, Rendez-vous, Devis, Mentions légales, Confidentialité.

## Spécification

Voir `../docs/sao-motors-luxury/` à la racine du dépôt.
