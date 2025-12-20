// Types pour le calculateur de massif vivace

export interface VivaceKit {
  id: number;
  titre: string;
  sousTitre: string;
  prixMoyenPlante: number; // Prix moyen d'achat d'une plante en godet de 9cm (HT)
  plantes: Array<{
    nom: string;
    type: string;
    nombreParM2Repartition: number; // Pour calculer la surface allouée (colonne G)
    nombreParM2Quantite: number; // Pour calculer la quantité finale (colonne F depuis O)
  }>;
}

export interface CalculateurVivaceData {
  // Données saisies par l'utilisateur
  kitId: number; // ID du kit choisi
  surfaceMassif: number; // en m²
  volumeTerreau: number; // en litres par m²
  epaisseurPaillage: number; // en cm
  
  // Données modifiables (préremplies mais ajustables)
  fraisGeneraux: number; // en pourcentage (ex: 0.15 = 15%)
  marge: number; // en pourcentage (ex: 0.60 = 60%)
  tauxHoraire: number; // en euros
}

export interface CalculsIntermediairesVivace {
  nombrePlantes: number;
  terreauM3: number;
  nombreSacsTerreau: number;
  paillageM3: number;
  nombreSacsPaillage: number;
  rendement: number; // m²/jours
  joursEstimes: number;
  heuresTotales: number;
}

export interface PrixAchatVivace {
  vegetaux: number;
  terreau: number;
  paillage: number;
}

export interface PrixVenteVivace {
  fourniture: number;
  mainOeuvre: number;
  total: number;
  prixAuMetre: number;
}

export interface ResultatsVivace {
  calculsIntermediaires: CalculsIntermediairesVivace;
  prixAchat: PrixAchatVivace;
  prixVente: PrixVenteVivace;
}

