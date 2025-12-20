// Constantes et données fixes du calculateur de massif vivace

export const CONSTANTS_VIVACE = {
  // Prix moyens d'achat (HT)
  PRIX_MOYEN_PLANTE_GODET_9CM: 4.29, // € par plante en godet de 9cm
  
  // Prix des fournitures (HT)
  PRIX_SAC_TERREAU_40L: 7.3, // €
  PRIX_SAC_PAILLAGE_140L: 11, // €
  
  // Heures par jour
  HEURES_PAR_JOUR: 14,
  
  // Valeurs par défaut (modifiables)
  FRAIS_GENERAUX_DEFAULT: 0.15, // 15%
  MARGE_DEFAULT: 0.60, // 60%
  TAUX_HORAIRE_DEFAULT: 55, // €/heure
  
  // Volumes
  VOLUME_SAC_TERREAU_M3: 0.04, // 40L = 0.04 m3
  VOLUME_SAC_PAILLAGE_M3: 0.14, // 140L = 0.14 m3
  
  // Recommandations
  TERREAU_RECOMMANDE_L_PAR_M2: 50, // litres par m² (valeur par défaut dans Excel)
  PAILLAGE_RECOMMANDE_CM: 5, // cm
  
  // Surfaces suggérées
  SURFACES_SUGGEREES: [5, 20, 40, 80, 150], // en m²
  
  // Rendements selon la surface (m²/jours pour 2 personnes)
  // Format: { surface: rendement }
  RENDEMENTS: [
    { surface: 5, rendement: 18 },
    { surface: 20, rendement: 30 },
    { surface: 40, rendement: 36 },
    { surface: 80, rendement: 41 },
    { surface: 150, rendement: 46 }
  ]
} as const;

