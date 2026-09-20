export const siteConfig = {
  name: "SAO Motors Luxury",
  shortName: "SAO Motors",
  tagline: "Diagnostic et réparation de véhicules chinois à Ouagadougou",
  description:
    "Atelier à Ouagadougou : diagnostic électronique, entretien et réparation de véhicules chinois thermiques et électriques. Pièces d'origine. Appelez +226 79 75 55 55.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sao-motors-luxury.vercel.app",
  phone: "+22679755555",
  phoneDisplay: "+226 79 75 55 55",
  whatsapp: "22679755555",
  email: null as string | null, // [À VÉRIFIER]
  facebookUrl: "https://www.facebook.com/profile.php?id=61573984872787",
  mapsUrl: "https://maps.app.goo.gl/3hmCATLt7anaEjYN9",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Sao+Motors+LUXURY,+Ouaga+2000,+Ouagadougou&hl=fr&z=16&output=embed",
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Sao+Motors+LUXURY,+Ouaga+2000,+Ouagadougou",
  address: {
    line1: "Ouaga 2000",
    line2: "Ouagadougou, Burkina Faso",
    localityNote: "Sao Motors LUXURY — Ouaga 2000",
    areaHint: "Ouaga 2000",
    plusCode: "8F6H+VHF",
  },
  hours: [
    { days: "Lun – Sam", time: "Horaires à confirmer" }, // [À VÉRIFIER]
  ],
  socialProofNote:
    "Les avis et témoignages ne seront publiés qu'après validation client.",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/vehicules-chinois", label: "Véhicules chinois" },
  { href: "/vehicules-electriques", label: "Électriques" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  symptoms: string[];
  cta: { label: string; href: string };
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "diagnostic-automobile",
    title: "Diagnostic automobile",
    short: "Identifier la panne avant de remplacer des pièces.",
    intro:
      "Un voyant s'allume, un bruit apparaît, le comportement change. Avant toute réparation, nous établissons un diagnostic clair pour éviter les essais inutiles.",
    includes: [
      "Écoute du problème et historique",
      "Contrôle mécanique ciblé",
      "Restitution claire des constats",
      "Devis avant intervention",
    ],
    symptoms: [
      "Voyant moteur",
      "Perte de puissance",
      "Bruits anormaux",
      "Consommation inhabituelle",
    ],
    cta: { label: "Demander un diagnostic", href: "/diagnostic" },
    faq: [
      {
        q: "Faut-il prendre rendez-vous ?",
        a: "Oui, de préférence. En urgence, appelez ou écrivez sur WhatsApp.",
      },
      {
        q: "Le diagnostic est-il payant ?",
        a: "Les conditions tarifaires vous sont indiquées avant l'intervention. Aucun montant n'est inventé sur ce site.",
      },
    ],
  },
  {
    slug: "diagnostic-electronique",
    title: "Diagnostic électronique",
    short: "Lecture des calculateurs et analyse des codes défaut.",
    intro:
      "Les véhicules chinois récents embarquent une électronique dense. Notre approche combine lecture des codes, corrélation des symptômes et validation avant remplacement de pièces.",
    includes: [
      "Lecture multi-systèmes selon équipement",
      "Analyse des codes et données capteurs",
      "Repérage des pannes intermittentes",
      "Recommandations priorisées",
    ],
    symptoms: [
      "Voyants tableau de bord",
      "ABS / ESP",
      "Climatisation électronique",
      "Démarrage difficile",
    ],
    cta: { label: "Demander un diagnostic", href: "/diagnostic" },
    faq: [
      {
        q: "Tous les modèles chinois sont-ils couverts ?",
        a: "Indiquez marque et modèle : nous confirmons la prise en charge. La liste affichée sur le site ne contient que des marques confirmées.",
      },
    ],
  },
  {
    slug: "maintenance-entretien",
    title: "Maintenance & entretien",
    short: "Révisions, filtres, fluides — pour durer sous le climat de Ouaga.",
    intro:
      "Poussière, chaleur et usage urbain sollicitent filtres, clim et freins. Un entretien régulier coûte moins cher qu'une panne immobilisante.",
    includes: [
      "Révisions périodiques",
      "Vidange et filtres",
      "Contrôles freins / suspension",
      "Conseils d'usage local",
    ],
    symptoms: [
      "Kilométrage d'entretien atteint",
      "Clim moins efficace",
      "Freinage spongieux",
      "Vibrations",
    ],
    cta: { label: "Prendre rendez-vous", href: "/rendez-vous" },
    faq: [
      {
        q: "Proposez-vous des forfaits ?",
        a: "Les forfaits éventuels seront communiqués sur devis. Le site n'affiche pas de grille inventée.",
      },
    ],
  },
  {
    slug: "reparation",
    title: "Réparation",
    short: "Intervention après diagnostic et devis validé.",
    intro:
      "Nous intervenons une fois le diagnostic posé et le devis accepté. Transparence avant, suivi pendant, restitution claire après.",
    includes: [
      "Réparation mécanique",
      "Interventions électriques",
      "Remplacement de pièces d'origine lorsque disponibles",
      "Contrôle avant restitution",
    ],
    symptoms: [
      "Panne confirmée",
      "Pièce à remplacer",
      "Suite d'un diagnostic",
    ],
    cta: { label: "Demander un devis", href: "/devis" },
    faq: [
      {
        q: "Utilisez-vous des pièces d'origine ?",
        a: "Nous privilégions les pièces d'origine. En cas d'alternative, vous êtes informé avant montage.",
      },
    ],
  },
  {
    slug: "electricite-automobile",
    title: "Électricité automobile",
    short: "Batterie 12V, démarrage, éclairage, réseaux embarqués.",
    intro:
      "De la batterie 12V aux circuits d'éclairage et de charge, l'électricité reste une cause fréquente d'immobilisation — y compris sur véhicules électriques (circuit basse tension).",
    includes: [
      "Diagnostic batterie / charge",
      "Démarrage difficile",
      "Éclairage et accessoires",
      "Orientation si intervention haute tension hors périmètre",
    ],
    symptoms: [
      "Batterie à plat",
      "Alternateur suspect",
      "Fusibles",
      "Accessoires hors service",
    ],
    cta: { label: "Demander un diagnostic", href: "/diagnostic" },
    faq: [],
  },
  {
    slug: "pieces-accessoires",
    title: "Pièces & accessoires",
    short: "Recherche et fourniture de pièces d'origine pour votre modèle.",
    intro:
      "Trouver la bonne référence pour un véhicule chinois peut être long. Envoyez-nous marque, modèle, année et photo de la pièce : nous vous répondons sur la disponibilité.",
    includes: [
      "Identification de référence",
      "Pièces d'origine privilégiées",
      "Délais communiqués clairement",
      "Montage possible à l'atelier",
    ],
    symptoms: ["Pièce usée", "Référence constructeur", "Consommable entretien"],
    cta: { label: "Demander une pièce", href: "/devis" },
    faq: [
      {
        q: "Avez-vous un stock en ligne ?",
        a: "Pas de catalogue e-commerce pour le moment. Chaque demande est traitée individuellement.",
      },
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Contact",
    text: "Appelez, WhatsApp ou formulaire. Décrivez marque, modèle et symptôme.",
  },
  {
    n: "02",
    title: "Diagnostic",
    text: "Nous analysons le véhicule avant de proposer un remplacement de pièces.",
  },
  {
    n: "03",
    title: "Devis validé",
    text: "Vous validez le devis. Aucune intervention surprise.",
  },
  {
    n: "04",
    title: "Intervention",
    text: "Réparation ou entretien, puis restitution avec explications claires.",
  },
];

export const faqGeneral = [
  {
    q: "Quels véhicules prenez-vous en charge ?",
    a: "Nous sommes spécialisés dans le diagnostic et la réparation de véhicules chinois, thermiques et électriques. Pour les autres marques, contactez-nous : nous confirmons au cas par cas.",
  },
  {
    q: "Êtes-vous concessionnaire officiel d'une marque ?",
    a: "Non. SAO Motors Luxury est un atelier indépendant. Nous n'affichons aucun partenariat constructeur non vérifié.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Via le formulaire de rendez-vous, WhatsApp ou téléphone +226 79 75 55 55. Nous confirmons le créneau par appel ou message.",
  },
  {
    q: "Intervenez-vous sur les véhicules électriques ?",
    a: "Oui dans un périmètre défini (voir la page Véhicules électriques). Les interventions hors compétences sont orientées clairement.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "À Ouagadougou. L'adresse exacte et les horaires définitifs seront confirmés sur le site et Google Maps dès validation.",
  },
  {
    q: "Les prix sont-ils affichés ?",
    a: "Les interventions varient selon modèle et pièces. Nous établissons un devis clair avant travaux.",
  },
];

/** Marques — n'afficher que celles confirmées par le propriétaire */
export const chineseBrandsConfirmed: { name: string; note?: string }[] = [
  // Placeholder volontairement prudent — le propriétaire doit valider
  { name: "Marques chinoises", note: "Liste exacte à confirmer avec l'atelier" },
];

/** Marques visibles sur la façade atelier (Facebook / photo façade) */
export const chineseBrandExamplesPublic = [
  "Changan",
  "Maxus",
  "Chery",
  "BYD",
  "JMC",
  "JAC",
  "Haval",
  "Jetour",
];
