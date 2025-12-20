import { CONSTANTS_VIVACE } from './constants-vivace';
import { KITS_VIVACE } from './kits-vivace';
import type { CalculateurVivaceData, ResultatsVivace, CalculsIntermediairesVivace, PrixAchatVivace, PrixVenteVivace } from './types-vivace';

/**
 * Calcule le rendement selon la surface du massif
 * Utilise une interpolation linéaire par segments
 */
function calculerRendement(surface: number): number {
  const rendements = CONSTANTS_VIVACE.RENDEMENTS;
  
  // Si la surface est inférieure ou égale à la première valeur
  if (surface <= rendements[0].surface) {
    return rendements[0].rendement;
  }
  
  // Si la surface est supérieure ou égale à la dernière valeur
  if (surface >= rendements[rendements.length - 1].surface) {
    return rendements[rendements.length - 1].rendement;
  }
  
  // Interpolation linéaire entre deux points
  for (let i = 0; i < rendements.length - 1; i++) {
    const current = rendements[i];
    const next = rendements[i + 1];
    
    if (surface >= current.surface && surface <= next.surface) {
      // Interpolation linéaire: y = y1 + (y2 - y1) * (x - x1) / (x2 - x1)
      const rendement = current.rendement + 
        (next.rendement - current.rendement) * 
        (surface - current.surface) / 
        (next.surface - current.surface);
      return rendement;
    }
  }
  
  // Par défaut, retourner le dernier rendement
  return rendements[rendements.length - 1].rendement;
}

/**
 * Calcule tous les résultats du calculateur vivace
 */
export function calculerResultatsVivace(data: CalculateurVivaceData): ResultatsVivace {
  const calculsIntermediaires = calculerIntermediairesVivace(data);
  const prixAchat = calculerPrixAchatVivace(data, calculsIntermediaires);
  const prixVente = calculerPrixVenteVivace(data, calculsIntermediaires, prixAchat);

  return {
    calculsIntermediaires,
    prixAchat,
    prixVente,
  };
}

/**
 * Calcule les valeurs intermédiaires
 */
function calculerIntermediairesVivace(data: CalculateurVivaceData): CalculsIntermediairesVivace {
  // Récupérer le kit choisi
  const kit = KITS_VIVACE.find(k => k.id === data.kitId) || KITS_VIVACE[0];
  
  // Calcul du nombre de plantes selon la méthode Excel :
  // 1. Calculer la somme totale des nombreParM2Repartition (colonne G)
  const totalPlantesParM2Repartition = kit.plantes.reduce((sum, plante) => sum + plante.nombreParM2Repartition, 0);
  
  // 2. Pour chaque plante :
  //    - Surface allouée = surface_massif × (nombreParM2Repartition / somme_tous_nombreParM2Repartition)
  //    - Quantité = ROUND(surface_allouée × nombreParM2Quantite, 0)
  //    Note: nombreParM2Quantite vient de la colonne O de "1-fichier Vivace" (colonne F dans le calculateur)
  // 3. Total = somme de toutes les quantités
  let nombrePlantes = 0;
  for (const plante of kit.plantes) {
    const surfaceAllouee = data.surfaceMassif * (plante.nombreParM2Repartition / totalPlantesParM2Repartition);
    const quantite = Math.round(surfaceAllouee * plante.nombreParM2Quantite);
    nombrePlantes += quantite;
  }

  // Terreau (m3) = (surface du massif × volume de terreau par m² (en l)) / 1000
  const terreauM3 = (data.surfaceMassif * data.volumeTerreau) / 1000;

  // Nombre de sacs terreau = Arrondi(terreau (en m3) / 0.04)
  const nombreSacsTerreau = Math.round(terreauM3 / CONSTANTS_VIVACE.VOLUME_SAC_TERREAU_M3);

  // Paillage (m3) = surface du massif × (épaisseur de paillage (en cm) / 100)
  const paillageM3 = data.surfaceMassif * (data.epaisseurPaillage / 100);

  // Nombre de sacs paillage = Arrondi sup(paillage(en m3) / 0.14)
  const nombreSacsPaillage = Math.ceil(paillageM3 / CONSTANTS_VIVACE.VOLUME_SAC_PAILLAGE_M3);

  // Rendement selon la surface
  const rendement = calculerRendement(data.surfaceMassif);

  // Jours estimés = (surface du massif / rendement)
  const joursEstimes = data.surfaceMassif / rendement;

  // Heures totales = (jours estimés × 14)
  const heuresTotales = joursEstimes * CONSTANTS_VIVACE.HEURES_PAR_JOUR;

  return {
    nombrePlantes,
    terreauM3,
    nombreSacsTerreau,
    paillageM3,
    nombreSacsPaillage,
    rendement,
    joursEstimes,
    heuresTotales,
  };
}

/**
 * Calcule les prix d'achat
 */
function calculerPrixAchatVivace(
  data: CalculateurVivaceData,
  calculs: CalculsIntermediairesVivace
): PrixAchatVivace {
  // Prix végétaux = (nombre de plantes × prix moyen d'achat d'une plante en godet de 9cm)
  const vegetaux = calculs.nombrePlantes * CONSTANTS_VIVACE.PRIX_MOYEN_PLANTE_GODET_9CM;

  // Prix terreau = (nombre de sacs de terreau × prix sac de terreau)
  const terreau = calculs.nombreSacsTerreau * CONSTANTS_VIVACE.PRIX_SAC_TERREAU_40L;

  // Prix paillage = (nombre de sacs de paillage × prix sac de paillage)
  const paillage = calculs.nombreSacsPaillage * CONSTANTS_VIVACE.PRIX_SAC_PAILLAGE_140L;

  return {
    vegetaux,
    terreau,
    paillage,
  };
}

/**
 * Calcule le prix de vente
 */
function calculerPrixVenteVivace(
  data: CalculateurVivaceData,
  calculs: CalculsIntermediairesVivace,
  prixAchat: PrixAchatVivace
): PrixVenteVivace {
  // Total fourniture = ((Estimation du prix d'achat TOTAL des végétaux + terreau + paillage) 
  //                    × (1 + Frais généraux) × (1 + marge))
  const fourniture = (prixAchat.vegetaux + prixAchat.terreau + prixAchat.paillage) 
    * (1 + data.fraisGeneraux) 
    * (1 + data.marge);

  // Main d'œuvre = (heures totales × taux horaire)
  const mainOeuvre = calculs.heuresTotales * data.tauxHoraire;

  // Total = Fourniture + Main d'œuvre
  const total = fourniture + mainOeuvre;

  // Prix au mètre carré = Total / surface du massif
  const prixAuMetre = total / data.surfaceMassif;

  return {
    fourniture,
    mainOeuvre,
    total,
    prixAuMetre,
  };
}

