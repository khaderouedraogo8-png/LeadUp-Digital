# 08 — Stratégies opérationnelles (EV · Chinois · WhatsApp · RDV · Devis · Prix)

## 1. EV Strategy

### Contexte marché (FAITS)

- Geometry O commercialisée via DIACFA/Geely BF (autonomie annoncée 200 km)  
- Bornes solaires Alioth à Ouaga 2000 / Koulouba  
- Adoption encore émergente → **anxiété SAV** élevée  

### Positionnement site (sans inventer d’expertise)

Utiliser un cadre **périmètre transparent** :

#### Ce que le site peut afficher (si confirmé par l’atelier)

- Diagnostic électronique compatible modèles EV reçus  
- Entretien périodique non HV (suspension, freins, clim, 12V, pneus, géométrie…)  
- Lecture codes / analyse symptômes  
- Orientation vers concession si intervention HV hors compétence  

#### Ce qu’il ne faut PAS afficher sans preuve

- « Spécialiste certifié BYD/Geely »  
- Remplacement pack batterie traction  
- Installation borne sans partenariat  
- Chiffres d’autonomie « garantis »  

### UX page EV

1. Hero clair  
2. **Périmètre** (2 colonnes : On fait / On oriente)  
3. Symptômes fréquents  
4. Sécurité (ne pas ouvrir pack ; atelier formé procédures [À VÉRIFIER])  
5. FAQ  
6. CTA diagnostic EV  
7. Lien WhatsApp message EV  

### Contenu rassurant propriétaires EV

Checklist pré-visite : niveau charge, messages tableau, photos écran, historique charge.

---

## 2. Chinese Vehicle Strategy

### Marques présentes au Burkina (FAITS publics)

| Marque | Acteur | Source |
|--------|--------|--------|
| Changan | Easy Auto | L’Économiste du Faso 2024 |
| Geely (+ Geometry) | DIACFA | geely.bf / leFaso 2025 |
| Chery | RIMCO Motors | Pravda BF 2026 |
| JMC | SPB International Ouaga 2000 | LinkedIn |

Autres marques chinoises en import privé : **probables** (MG, Haval, BYD, JAC, Dongfeng…) — **[À VÉRIFIER]** présence atelier SAO.

### Douleurs propriétaires (synthèse marché AO)

- Pièces lentes / chères hors réseau  
- Diagnostic électronique propriétaire  
- Méfiance qualité perçue  
- SAV concession saturé / éloigné  

### Comment le site présente la spécialisation

**Bien :**  
> Nous intervenons régulièrement sur des véhicules de marques chinoises commercialisées ou importées au Burkina. Indiquez votre marque et modèle : nous vous confirmons la prise en charge.

**Mal :**  
> Partenaire officiel de toutes les marques chinoises.

### UI marques

- Grille logos uniquement pour marques **confirmées**  
- Lien « Votre marque n’apparaît pas ? Écrivez-nous »  

---

## 3. WhatsApp Strategy

### Rôle au Burkina

Canal de confiance n°1 pour PME de services (preuve régionale : PROS-MOTORS CI, GIG, CarSos).  
Le site **qualifie** et **structure** ; WhatsApp **humanise** et **conclut**.

### Implémentation

| Emplacement | Type |
|-------------|------|
| Header | Icône + texte « WhatsApp » |
| Sticky mobile | Bouton fixe |
| Fin de chaque service | CTA contextuel |
| Succès formulaire | « Continuer sur WhatsApp » |
| Floating desktop | Optionnel bas-droite — ne pas doubler sticky mobile |

Numéro : **+226 79 75 55 55** (Facebook) — confirmer WhatsApp Business.

### Messages préremplis exacts

**Général**
```
Bonjour SAO Motors Luxury,
Je vous contacte via le site web.
Besoin : 
Marque/Modèle : 
Mon numéro :
```

**Diagnostic**
```
Bonjour SAO Motors Luxury,
Je souhaite un diagnostic.
Marque/Modèle/Année : 
Énergie (thermique/hybride/électrique) : 
Symptômes : 
Disponibilité :
```

**EV**
```
Bonjour SAO Motors Luxury,
Je vous contacte pour un véhicule électrique.
Marque/Modèle : 
Problème / message tableau : 
Niveau de charge approx. :
```

**Pièce**
```
Bonjour SAO Motors Luxury,
Je cherche une pièce.
Marque/Modèle/Année : 
Pièce / référence : 
Photo disponible : oui/non
```

**Urgence**
```
Bonjour SAO Motors Luxury — URGENCE
Localisation : 
Marque/Modèle : 
Problème :
```

**RDV**
```
Bonjour SAO Motors Luxury,
Je souhaite prendre rendez-vous pour : (entretien/réparation/diagnostic)
Marque/Modèle : 
Date souhaitée :
```

---

## 4. Appointment Strategy

### Options

| Option | Description | Verdict |
|--------|-------------|---------|
| A | Demande de RDV simple | **MVP — OUI** |
| B | Créneaux proposés (matin/après-midi) | **P1** |
| C | Calendrier complet type Bosch | **Non MVP** — charge ops |
| D | WhatsApp only | Complément, pas seul canal SEO |
| E | Hybride A+D | **Recommandé** |

### Architecture recommandée (Hybride E)

1. Formulaire site → lead structuré + email atelier  
2. Confirmation humaine par appel/WA  
3. Option « Préférer WhatsApp » qui ouvre message prérempli  

### Champs RDV

**Obligatoires :** Nom, Téléphone, Type de service, Marque, Modèle, Énergie  
**Optionnels :** Année, Km, Date souhaitée, Créneau (matin/aprem), Message, Photos  

---

## 5. Diagnostic form (intelligent)

### Obligatoires

1. Nom  
2. Téléphone  
3. Marque  
4. Modèle  
5. Type énergie (thermique / hybride / électrique)  
6. Description problème (max 500 car.)  

### Optionnels

- WhatsApp différent ?  
- Année  
- Kilométrage  
- Date souhaitée  
- Photos (max 3)  
- Plaque (P1)  
- VIN (P1, jamais obligatoire MVP)  

### Anti-spam / validation / confirmation

- Honeypot `company_website`  
- Rate limit IP  
- Cloudflare Turnstile si spam  
- Confirmation page + email atelier  
- Ref `SML-YYYYMMDD-XXXX`  

### Stockage / données

- Postgres chiffré at rest (hébergeur)  
- Photos R2 privées  
- Politique confidentialité liée  

---

## 6. Quote Strategy

Même squelette que diagnostic, champ « service souhaité » + « budget indicatif ? » optionnel.  
Réponse atelier = devis écrit (photo/PDF WA).

---

## 7. Pricing Strategy

| Approche | Pros | Cons | Verdict |
|----------|------|------|---------|
| Prix publics complets | Transparence (PROS-MOTORS) | Variabilité pièces chinoises | Risqué MVP |
| « À partir de » | Ancre | Peut tromper | **P1 si validé** |
| Devis personnalisé | Sûr | Friction | **MVP** |
| Aucun prix | Simple | Objection coût | À compenser par devis rapide |

**Recommandation :** MVP = pas de grille complète ; promesse « devis clair avant intervention ».  
P1 = forfaits entretien courants (vidange, diag entrée) **si** le propriétaire valide des montants stables.
