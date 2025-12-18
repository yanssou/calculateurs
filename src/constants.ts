// Constantes et données fixes du calculateur

export const CONSTANTS = {
  // Données fixes
  DISTANCE_PLANTATION: 1.2, // en mètres
  
  // Prix moyens d'achat (HT)
  PRIX_MOYEN_80100: 48.4, // € par plante
  PRIX_MOYEN_100120: 72.7, // € par plante
  
  // Prix des fournitures (HT)
  PRIX_SAC_TERREAU_40L: 7.3, // €
  PRIX_SAC_PAILLAGE_140L: 11, // €
  
  // Rendements
  RENDEMENT_MANUEL: 20, // pce/jours à 2 personnes
  RENDEMENT_MECANISE: 40, // pce/jours à 2 personnes
  
  // Heures par jour
  HEURES_PAR_JOUR: 14,
  
  // Valeurs par défaut (modifiables)
  FRAIS_GENERAUX_DEFAULT: 0.15, // 15%
  MARGE_DEFAULT: 0.25, // 25%
  TAUX_HORAIRE_DEFAULT: 55, // €/heure
  
  // Volumes
  VOLUME_SAC_TERREAU_M3: 0.04, // 40L = 0.04 m3
  VOLUME_SAC_PAILLAGE_M3: 0.14, // 140L = 0.14 m3
  
  // Largeur de paillage
  LARGEUR_PAILLAGE: 0.6, // en mètres
} as const;

