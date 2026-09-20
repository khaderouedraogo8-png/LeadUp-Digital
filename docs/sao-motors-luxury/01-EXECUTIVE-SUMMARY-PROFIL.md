# 01 — Executive Summary · Profil vérifié · Marché

## 1. Executive Summary

### Le problème

SAO Motors Luxury dispose déjà d’une présence Facebook active et d’un positionnement clair (« spécialiste diagnostic et réparation de véhicules chinois, thermiques & électriques »), mais **aucun site web officiel** n’a été identifié lors de cette recherche. Sur un marché où :

- les marques chinoises (Chery, Geely, Changan, JMC…) accélèrent leur implantation à Ouagadougou ;
- les véhicules électriques apparaissent (Geometry O, bornes solaires Alioth à Ouaga 2000) ;
- les propriétaires peinent à trouver un atelier qui « parle » leurs calculateurs et leurs pièces ;

…l’absence de site premium = perte de confiance, de SEO local, et de conversion hors Facebook.

### La réponse produit

Concevoir un site **atelier premium** qui, en moins de 8 secondes sur mobile 4G, répond à :

1. Qui ? — SAO Motors Luxury, Ouagadougou  
2. Quoi ? — Diagnostic, réparation, maintenance, pièces d’origine  
3. Pour quels véhicules ? — Véhicules chinois (thermiques & électriques) + [autres marques : À VÉRIFIER]  
4. Pourquoi faire confiance ? — Preuves réelles (atelier, process, avis, photos)  
5. Où / comment contacter ? — Carte + téléphone + WhatsApp + demande de RDV  

### Différenciation clé (vs concurrents locaux)

| Concurrent type | Ce qu’ils font | Ce que SAO doit faire mieux |
|-----------------|----------------|------------------------------|
| Garages généraux (Technik, GKMF, CarSos) | Multimarque générique | Spécialisation **véhicules chinois + EV** explicitée |
| Concessionnaires (CFAO, DIACFA/Geely, SEAB) | SAV officiel marque | Indépendance + couverture multi-marques chinoises [À VÉRIFIER] |
| Sites Afrique Ouest (PROS-MOTORS CI) | WhatsApp + transparence prix | WhatsApp + preuves techniques + SEO local BF |
| Templates garage WordPress | Stock photos + « Contactez-nous » | Identité réelle, parcours diagnostic intelligent |

### Stack recommandée (aperçu)

**Next.js (App Router) + TypeScript + Tailwind + PostgreSQL + Sanity CMS + Resend/WhatsApp Business API** — SSG/ISR pour SEO et perf sur connexions mobiles burkinabè.

### MVP vs Premium (aperçu)

- **MVP (6–8 semaines de build)** : Accueil, Services (5 pages), Chinois, EV, À propos, Contact, RDV demande, Devis, WhatsApp sticky, SEO local, GBP  
- **Premium** : Blog SEO, espace client, suivi véhicule, catalogue pièces, calendrier créneaux, PWA offline light  

---

## 2. Profil vérifié de SAO Motors Luxury

### 2.1 Informations confirmées (FAIT)

| Champ | Valeur | Source |
|-------|--------|--------|
| Nom public | **SAO Motors luxury** | [Facebook](https://www.facebook.com/profile.php?id=61573984872787) |
| Positionnement | Spécialiste diagnostic & réparation véhicules chinois, thermiques & électriques | Facebook About |
| Offre annoncée | Pièces et accessoires d’origine ; service fiable ; expertise | Facebook About |
| Téléphone | **+226 79 75 55 55** (affiché « 79755555 ») | Facebook About |
| Google Maps | Lien partagé `https://maps.app.goo.gl/3hmCATLt7anaEjYN9` | Facebook About |
| Activité sociale | Posts actifs (ex. quiz code de la route, sept. 2026) | Facebook |

### 2.2 Entités liées — ne pas confondre sans vérification

| Entité | Infos | Lien avec SAO Motors Luxury |
|--------|-------|------------------------------|
| **Groupe SAO AUTO International / Garage SAO** | PDG Ali Sao Ouédraogo ; promoteur SIAF ; présence médiatique 2024–2025 | **[À VÉRIFIER]** — proximité nominale forte, relation juridique non prouvée pour le site |
| **Sao Auto Services Garage** (LinkedIn) | Diagnostic mécanique/électronique ; adresse **Zad en face station Oryx** ; tél. +226 78 87 05 12 / 69 20 84 00 | **[À VÉRIFIER]** — même « famille » SAO possible, téléphones différents |
| Sao Ouedraogo (VOA Afrique, août 2024) | Mécanicien à Ouagadougou, personnalisation / limousine | **[À VÉRIFIER]** — même personne / groupe ? |

**Règle éditoriale :** le site de SAO Motors Luxury ne doit mentionner SIAF, Garage SAO Zad, distinctions, ou « Groupe SAO AUTO International » **que si le propriétaire confirme** le lien et autorise la communication.

### 2.3 Informations du brief non encore confirmées indépendamment

| Affirmation brief | Statut |
|-------------------|--------|
| Nouvelle implantation / unité à **Ouaga 2000** | **[À VÉRIFIER]** — cohérent avec écosystème SIAF/Ouaga 2000 et concurrence CarSos/GKMF à Ouaga 2000, mais adresse exacte à confirmer via Maps + propriétaire |
| « Luxury » = positionnement premium atelier | **HYPOTHÈSE** — nom de marque ; ne pas sur-promettre « luxe concessionnaire » |

### 2.4 Ce que le site NE DOIT PAS afficher sans preuve

- Nombre d’années d’expérience  
- Nombre de véhicules réparés  
- Partenariats constructeurs (BYD, Chery, Geely, etc.)  
- Certifications  
- Garanties chiffrées  
- « Expert n°1 au Burkina »  
- Témoignages inventés  
- Marques prises en charge non listées par le propriétaire  

---

## 3. Analyse du marché automobile (contexte)

### 3.1 Dynamique Burkina Faso 2024–2026 (FAITS)

1. **Entrée accélérée des marques chinoises**  
   - **Changan** via Easy Auto (lancement déc. 2023) — [L’Économiste du Faso](https://leconomistedufaso.com/2024/01/02/lancement-easy-auto-lautomobile-chinoise-a-la-conquete-du-marche-burkinabe/)  
   - **Geely** via DIACFA (juin 2025), dont Geometry O électrique — [geely.bf](https://geely.bf/geometry/), [leFaso.net](https://lefaso.net/spip.php?article138839=)  
   - **Chery** via RIMCO Motors (juin 2026) — [Pravda BF](https://burkina-faso.news-pravda.com/burkina-faso/2026/06/05/67276.html)  
   - **JMC** via SPB International, Ouaga 2000 — LinkedIn JMC Burkina  

2. **Électrification émergente**  
   - Geometry O : autonomie annoncée 200 km, batterie ~17 kWh — [geely.bf/geometry](https://geely.bf/geometry/)  
   - Bornes solaires Alioth Mobility (Koulouba, Ouaga 2000) — [Filinfos](https://filinfos.net/2026/07/03/mobilite-electrique-a-ouagadougou-lenergie-solaire-comme-alternative/)  
   - Motos électriques Orange Énergies × Alioth (oct. 2025) — [Wakat Séra](https://www.wakatsera.com/orange-burkina-faso-a-travers-orange-energies-et-alioth-system-lance-la-mobilite-verte/)  

3. **Écosystème événementiel**  
   - SIAF 4 (11–14 déc. 2025), Ouaga 2000, Chine pays invité d’honneur, focus EV — [Burkina24](https://burkina24.com/2025/12/04/la-4e-edition-du-salon-international-de-lautomobile-du-faso-siaf-prevue-du-11-au-14-decembre-2025/)  

### 3.2 Implication produit pour SAO Motors

| Tendance marché | Opportunité site |
|-----------------|------------------|
| Plus de Chery/Geely/Changan sur les routes | Pages « véhicules chinois » + FAQ pièces/diagnostic |
| Premiers EV particuliers | Page EV honnête (ce qu’on fait / ce qu’on ne fait pas) |
| SAV concessionnaire coûteux / saturé | Positionnement atelier spécialisé indépendant |
| Peur « personne ne saura réparer ma voiture chinoise » | Contenu confiance + process diagnostic transparent |
| Ouaga 2000 = zone affluent + EV infra | SEO local Ouaga 2000 + Maps optimisé |

---

## 4. Analyse du marché burkinabè digital

### 4.1 Données Digital 2025 (DataReportal / synthèse locale)

Sources : [DataReportal Digital 2025 Burkina Faso](https://datareportal.com/reports/digital-2025-burkina-faso), [Digital Magazine BF](https://digitalmagazine.bf/2025/03/10/burkina-faso-digital-report-2025-les-statistiques-dinternet-des-medias-sociaux-de-la-telephonie-mobile-du-e-commerce-et-linclusion-financiere/)

| Indicateur (début 2025) | Valeur |
|-------------------------|--------|
| Population | ~23,8 M |
| Utilisateurs Internet | **5,75 M** (24,2 %) |
| Connexions mobiles | **28,1 M** (118 % — multi-SIM) |
| Reach Facebook ads | **3,40 M** (~59 % des internautes) |
| Couverture mobile 3G/4G | ~91 % (rapport local) |

**Implication :** presque tout le trafic qualifié arrive sur **mobile + Facebook + WhatsApp**. Un site desktop-first ou sans WhatsApp est un échec commercial.

### 4.2 Comportements à designer pour

| Comportement local | Conséquence UX |
|--------------------|----------------|
| Contact préféré = appel / WhatsApp | Sticky Call + WhatsApp ; formulaires courts qui préparent WhatsApp |
| Facebook = découverte | Open Graph soigné ; contenus partageables ; lien site dans bio FB |
| Connexion 3G/4G irrégulière | Images AVIF/WebP, budgets JS stricts, SSG |
| Confiance = preuve locale | Photos atelier réelles, adresse claire, Maps, numéro local |
| Langue = français (principal) | FR d’abord ; mooré/dioula = P2 si besoin (contenu oral/WhatsApp) |
| Climat poussière / chaleur | Contenu entretien adapté (filtres, clim, batterie, freins) |
| Routes / usage intensif | Messages maintenance préventive |

### 4.3 Paiement & commerce

**[À VÉRIFIER avec propriétaire]** : Orange Money / Moov Money pour acomptes ?  
Recommandation MVP : **pas de paiement en ligne** — devis + règlement à l’atelier. Évite complexité KYC et litiges.

---

## 5. Analyse Afrique de l’Ouest

### Patterns des meilleurs sites garage régionaux

| Pattern | Exemple | À retenir pour SAO |
|---------|---------|-------------------|
| WhatsApp comme conversion primaire | [PROS-MOTORS CI](https://www.pros-motors-civ.com/) | Formulaire → message WhatsApp prérempli |
| Transparence prix (forfaits) | PROS-MOTORS | Afficher « à partir de » **seulement si validé** |
| Process en 3–4 étapes | PROS-MOTORS, Bosch | Réduire l’anxiété |
| RDV en ligne simple | [Garage GIG Dakar](https://garage-gig.com/) | Demande de créneau, pas calendrier Tesla |
| Spécialisation marque | Diallo Toyota (SN), ChinaDrive (BJ) | SAO = « chinois + EV » comme identité |
| SAV constructeur chinois | [Geely SOCIDA CI](https://geely.ci/services/atelier/), BYD SN | Ne pas se faire passer pour SAV officiel |

### Gap régional

Très peu d’ateliers **indépendants** en Afrique de l’Ouest ont un site qui combine :

1. Spécialisation véhicules chinois  
2. Capacité EV clairement décrite  
3. Design premium mobile  
4. SEO local sérieux  
5. WhatsApp + demande diagnostic structurée  

**C’est exactement le vide que SAO Motors Luxury peut occuper à Ouagadougou.**

---

## 6. Proposition de valeur (formulations candidates)

Toutes les formulations ci-dessous évitent les chiffres non vérifiés.

### Formulation A — Technique (recommandée hero)

> **Diagnostic et réparation de véhicules chinois à Ouagadougou.**  
> Thermiques et électriques. Pièces d’origine. Un atelier organisé pour comprendre votre véhicule — et le remettre en route.

### Formulation B — Confiance

> **Votre véhicule chinois mérite un atelier qui le connaît.**  
> Diagnostic électronique, maintenance et pièces — à Ouagadougou.

### Formulation C — Local + contact

> **SAO Motors Luxury — Ouagadougou.**  
> Spécialistes du diagnostic et de la réparation des véhicules chinois (thermiques & électriques). Appelez ou écrivez sur WhatsApp.

### Ce qu’il faut éviter

- « Le meilleur garage du Burkina »  
- « Experts certifiés [marque] » sans preuve  
- « Luxury » sur-vendu comme concession Mercedes/BMW  
- Anglicismes marketing creux (« excellence redefined »)  

---

## 7. Questions à poser au propriétaire avant production (checklist)

1. Adresse exacte (quartier, rue, repère) et GPS définitif ?  
2. Lien juridique avec Groupe SAO AUTO International / Garage SAO Zad / SIAF ?  
3. Liste exacte des marques chinoises réellement prises en charge ?  
4. Périmètre EV : diagnostic OBD, batterie 12V, HV, clim, freins régénératifs — jusqu’où ?  
5. Autres marques (Toyota, Hyundai…) ou focus exclusif chinois ?  
6. Horaires d’ouverture ?  
7. WhatsApp Business = même numéro 79 75 55 55 ?  
8. Photos atelier disponibles / shooting possible ?  
9. Avis Google existants ?  
10. Garantie atelier éventuelle (durée) ?  
11. Stock pièces : catalogue public ou sur demande ?  
12. Langues souhaitées ?  

Sans ces réponses, le site peut être designé et structuré, mais **le contenu factuel doit rester placeholder `[À VÉRIFIER]`**.
