# 03 — UX · Personas · Journeys · Conversion · Erreurs · Gaps

## 1. Personas principaux

### Persona 1 — « Amadou », propriétaire Chery / Geely / Changan récent

| Dimension | Détail |
|-----------|--------|
| Profil | 28–45 ans, Ouaga, cadre / commerçant, véhicule chinois < 5 ans |
| Problème | Voyant moteur / panne électronique ; concessionnaire loin / cher / saturé |
| Motivation | Remettre la voiture en route sans se faire arnaquer |
| Peur | « Ils ne connaissent pas les voitures chinoises » ; pièces contrefaites |
| Besoin | Diagnostic clair + devis + délai |
| Objection | « Combien ça va coûter ? » |
| Info recherchée | Marques prises en charge, outils diag, pièces d’origine |
| Action | WhatsApp ou RDV diagnostic |
| Appareil | Android mid-range, 4G |
| Niveau auto | Faible à moyen |
| CTA idéal | « Demander un diagnostic » + WhatsApp |

### Persona 2 — « Fatou », propriétaire EV (Geometry O ou import)

| Dimension | Détail |
|-----------|--------|
| Problème | Autonomie baisse / clim / charge / erreur tableau |
| Peur | Endommager la batterie HV ; atelier non formé |
| Besoin | Savoir **exactement** ce que SAO peut faire sur EV |
| Objection | « Seul le concessionnaire peut toucher mon EV » |
| CTA | « Besoin EV — décrire le problème » |
| Contenu clé | Périmètre interventions EV + sécurité |

### Persona 3 — « Ibrahim », thermique quotidien (taxi / usage intensif)

| Dimension | Détail |
|-----------|--------|
| Problème | Vidange, freins, clim, batterie 12V, suspension (routes) |
| Peur | Immobilisation longue = perte de revenus |
| Besoin | Rapidité + prix juste |
| CTA | Appeler / WhatsApp urgence + RDV révision |

### Persona 4 — « Mme Kaboré », responsable flotte PME / ONG

| Dimension | Détail |
|-----------|--------|
| Problème | Plusieurs véhicules chinois / mixtes ; factures ; planning |
| Besoin | Interlocuteur pro, devis écrits, historique |
| CTA | « Demande entreprise » (formulaire + rappel) |
| Feature future | Contrats / espace flotte (Premium) |

### Persona 5 — « Urgence panne » (soir / week-end)

| Dimension | Détail |
|-----------|--------|
| Problème | Véhicule immobilisé |
| Besoin | Numéro immédiat + indication dépannage [si offert] |
| CTA | `tel:` sticky + WhatsApp « Urgence » |
| Friction à supprimer | Menu trop long, pas de numéro visible |

### Persona 6 — Chercheur de pièce

| Dimension | Détail |
|-----------|--------|
| Problème | Filtre / plaquettes / capteur pour modèle chinois rare |
| Action | Photo pièce + modèle WhatsApp |
| CTA | « Demander une pièce » |

### Persona 7 — Habitant Ouaga 2000 / zones sud

| Dimension | Détail |
|-----------|--------|
| Motivation | Proximité |
| Info | Itinéraire, parking, horaires |
| CTA | Maps + « Comment venir » |

### Persona 8 — Acheteur potentiel véhicule chinois (prévente)

| Dimension | Détail |
|-----------|--------|
| Motivation | « Si j’achète Chery, qui répare ? » |
| Contenu | Page confiance / FAQ SAV indépendant |
| CTA | Contact conseil |

### Persona 9 — Femme conductrice / décideuse foyer

| Dimension | Détail |
|-----------|--------|
| Besoin | Ton rassurant, non condescendant, transparence |
| Peur | Jargon pour masquer surfacturation |
| UX | Explications plain language + process |

### Persona 10 — Diaspora / acheteur à distance

| Dimension | Détail |
|-----------|--------|
| Besoin | Photos atelier, WhatsApp, devis PDF |
| CTA | WhatsApp international friendly |

---

## 2. Customer Journeys

### Convention étapes

Découverte → Confiance → Recherche → Considération → Action → Confirmation → Suivi

### A. Google « garage Ouagadougou » / « diagnostic véhicule chinois »

| Étape | Expérience cible | Friction à supprimer |
|-------|------------------|----------------------|
| Découverte | Résultat Maps + site avec title local | GBP non claimé / NAP incohérent |
| Confiance | Photos + avis + adresse | Stock photos |
| Recherche | Pages services / chinois | Homepage vague |
| Considération | Process + FAQ | Prix absent **et** aucun devis |
| Action | WA / RDV / Appel | Formulaire trop long |
| Confirmation | Message « on vous rappelle sous X h » | Silence |
| Suivi | SMS/WA statut | Aucune nouvelle |

### B. Facebook

| Étape | Cible |
|-------|-------|
| Découverte | Post / pub → lien site ou WA |
| Confiance | Page FB About = cohérente avec site |
| Action | Bouton « Prendre RDV » site + WA deep link |

**Règle :** chaque post stratégique renvoie vers une **landing** (diagnostic / EV / chinois), pas seulement la homepage.

### C. Instagram [si activé — À VÉRIFIER]

Stories atelier → swipe-up / link in bio → RDV.

### D. Recherche spécialiste EV

Landing `/vehicules-electriques` avec périmètre clair + CTA « Décrire mon problème EV ».

### E. Panne

Homepage sticky Call/WA ; hero secondaire « Panne ? Appelez maintenant ».

### F. Diagnostic

Flow dédié `/diagnostic` : 4 champs obligatoires → confirmation → notif atelier.

### G. Révision

Page maintenance + RDV type « Révision ».

### H. Pièce

`/pieces` + WA prérempli marque/modèle/réf.

### I. Devis

`/devis` : service + véhicule + photos optionnelles.

### J. RDV

`/rendez-vous` : demande (pas inventaire créneaux live en MVP).

---

## 3. Stratégie de conversion

### Pyramide CTA

```
PRIMARY (1 seul dominant contextuel)
  ├─ Demander un diagnostic   (pages tech / hero)
  ├─ Prendre rendez-vous      (entretien)
  └─ Demander un devis        (pièces / réparation connue)

SECONDARY
  ├─ WhatsApp
  └─ Appeler

TERTIARY
  ├─ Itinéraire
  └─ Voir les services
```

### Sticky mobile (toujours)

| Bouton | Action |
|--------|--------|
| Appeler | `tel:+22679755555` |
| WhatsApp | `https://wa.me/22679755555?text=...` |

Hauteur sticky ≤ 56px ; ne pas masquer le contenu (safe-area iOS).

### Quand utiliser quel CTA

| Situation | CTA |
|-----------|-----|
| Problème inconnu | Diagnostic |
| Entretien planifié | RDV |
| Prix / pièce | Devis + WA |
| Urgence | Appel |
| Après lecture service | CTA contextualisé (« Diagnostic électronique ») |

### Microcopy confirmation (exemple)

> Merci. Votre demande a bien été reçue.  
> Un conseiller SAO Motors Luxury vous contacte par téléphone ou WhatsApp.  
> En urgence : **+226 79 75 55 55**.

---

## 4. CE QUE SAO MOTORS NE DOIT ABSOLUMENT PAS FAIRE

(≥ 30 erreurs)

1. Utiliser un template WordPress « Auto Repair » générique  
2. Mettre des stock photos de mécaniciens occidentaux  
3. Afficher des compteurs à 0 ou faux (voir CarSos)  
4. Inventer des certifications ou partenariats constructeurs  
5. Se prétendre concessionnaire BYD/Geely/Chery  
6. Hero avec 6 CTA  
7. Navigation de 15 items  
8. Formulaire de 20 champs obligatoires  
9. Absencer WhatsApp  
10. Cacher le numéro de téléphone  
11. Omettre l’adresse / Maps  
12. Textes interminables « Notre passion de l’excellence »  
13. Néons cyberpunk / gamer / glassmorphism excessif  
14. Animations TikTok / parallax lourd  
15. Mode sombre par défaut sans raison  
16. Prix inventés non tenables  
17. Promettre « toutes marques, toutes pannes »  
18. Pages services d’un paragraphe vide  
19. Ignorer le mobile  
20. Images non compressées (LCP > 4s)  
21. Autoplay vidéo lourde  
22. Pop-ups newsletter agressifs  
23. Chatbot IA inutile qui remplace WA  
24. Horaires faux / non mis à jour  
25. Avis clients fictifs  
26. Logos marques sans autorisation comme « partenaires »  
27. Jargon pour intimider  
28. Parcours RDV type Tesla trop complexe  
29. Site anglais-first  
30. Footer vide sans NAP  
31. Liens Facebook cassés  
32. Ignorer accessibilité contraste  
33. Captcha illisible sur mobile  
34. Demander VIN obligatoire dès le premier écran  
35. Publier des infos SIAF/Groupe SAO non confirmées  
36. Section « Nos chiffres » sans données  
37. Carousel hero de 8 slides  
38. Cards partout sans nécessité  
39. Gradient violet « IA default »  
40. Promettre garantie constructeur  

---

## 5. Gap Analysis — 50+ opportunités

### Ce que les autres font

1. Lister des services génériques  
2. Mettre un numéro  
3. Parler « expertise » sans preuve  
4. Copier des templates  
5. Négliger EV  
6. Négliger véhicules chinois  
7. Oublier WhatsApp  
8. SEO local faible  
9. Photos médiocres  

### Ce qu’ils font mal

10. Compteurs cassés  
11. Incohérence NAP  
12. Pas de process  
13. Pas de FAQ  
14. Pas de pages locales  
15. Formulaires morts  
16. Design daté  
17. Claims trop larges  
18. Zero analytics  
19. Zero schema.org  

### Ce que SAO devrait faire

20. Positionnement **chinois + EV** au-dessus de la fold  
21. Sticky Call + WhatsApp  
22. Flow diagnostic intelligent (4 champs)  
23. Page EV honnête (périmètre)  
24. Page véhicules chinois (marques vérifiées)  
25. Photos atelier réelles  
26. Process 4 étapes  
27. FAQ locale (poussière, chaleur, pièces)  
28. GBP impeccable  
29. Schema AutomotiveBusiness  
30. Landing Facebook ads  
31. Messages WA préremplis contextuels  
32. Upload photo panne  
33. Confirmation < 1 écran  
34. Horaires CMS-éditables  
35. Page Ouaga 2000 / localisation  
36. Contenu pièces d’origine (sans stock e-commerce MVP)  
37. Témoignages réels + avis Google  
38. Accessibilité AA  
39. Perf < 2.5s LCP 4G  
40. Admin Sanity simple  

### Différenciation

41. Premier site atelier BF clairement **spécialiste chinois**  
42. Premier à traiter EV atelier indépendant avec périmètre transparent  
43. Design premium africain (pas template US)  
44. Conversion WhatsApp structurée (pas juste icône)  
45. Contenu « avant d’acheter une chinoise » (SEO + confiance)  
46. Diagnostic comme produit (pas sous-menu)  
47. Comparateur mental vs concession (sans dénigrer)  
48. Guide voyants tableau de bord (blog P1)  
49. Pack entreprise flotte chinoise (P2)  
50. Intégration Maps + itinéraire « depuis Ouaga 2000 / Zad / Patte d’oie »  
51. Checklist pré-visite téléchargeable (PDF léger)  
52. Vidéos atelier courtes (< 15s) compressées  
53. Page « Ce que nous ne faisons pas » (confiance radicale)  
54. Suivi demande par référence (#SML-2026-0042)  
55. Remarketing FB vers landing diagnostic  

---

## 6. User flows ASCII

### Flow Diagnostic MVP

```
[Landing /diagnostic]
        │
        ├─ Nom*
        ├─ Téléphone* (= WhatsApp?)
        ├─ Marque* + Modèle*
        ├─ Thermique / Hybride / EV*
        ├─ Symptôme* (textarea court)
        ├─ Photos (opt, max 3, 5 Mo)
        └─ Date souhaitée (opt)
                │
                ▼
        [Anti-spam honeypot + rate limit]
                │
                ▼
        [POST /api/diagnostics]
                │
        ┌───────┴───────┐
        ▼               ▼
  Email/SMS atelier   Page succès
  + fiche CRM light   + WA deep link
```

### Flow WhatsApp contextuel

```
Bouton « WhatsApp » sur page EV
   → wa.me/22679755555?text=
      "Bonjour SAO Motors Luxury,%0A
       Je vous contacte depuis la page Véhicules électriques.%0A
       Marque/Modèle : %0A
       Problème : %0A
       Mon numéro : "
```
