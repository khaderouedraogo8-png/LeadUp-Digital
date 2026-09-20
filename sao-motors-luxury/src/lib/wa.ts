import { siteConfig } from "./site";

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: `Bonjour SAO Motors Luxury,
Je vous contacte via le site web.
Besoin : 
Marque/Modèle : 
Mon numéro :`,
  diagnostic: `Bonjour SAO Motors Luxury,
Je souhaite un diagnostic.
Marque/Modèle/Année : 
Énergie (thermique/hybride/électrique) : 
Symptômes : 
Disponibilité :`,
  ev: `Bonjour SAO Motors Luxury,
Je vous contacte pour un véhicule électrique.
Marque/Modèle : 
Problème / message tableau : 
Niveau de charge approx. :`,
  piece: `Bonjour SAO Motors Luxury,
Je cherche une pièce.
Marque/Modèle/Année : 
Pièce / référence : 
Photo disponible : oui/non`,
  urgence: `Bonjour SAO Motors Luxury — URGENCE
Localisation : 
Marque/Modèle : 
Problème :`,
  rdv: `Bonjour SAO Motors Luxury,
Je souhaite prendre rendez-vous pour : (entretien/réparation/diagnostic)
Marque/Modèle : 
Date souhaitée :`,
};
