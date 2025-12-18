import { CONSTANTS } from './constants';
import { KITS } from './kits';
import type { CalculateurData, Resultats, CalculsIntermediaires, PrixAchat, PrixVente } from './types';

/**
 * Calcule tous les résultats du calculateur
 */
export function calculerResultats(data: CalculateurData): Resultats {
  const calculsIntermediaires = calculerIntermediaires(data);
  const prixAchat = calculerPrixAchat(data, calculsIntermediaires);
  const prixVente80100 = calculerPrixVente(data, calculsIntermediaires, prixAchat, '80/100');
  const prixVente100120 = calculerPrixVente(data, calculsIntermediaires, prixAchat, '100/120');

  return {
    calculsIntermediaires,
    prixAchat,
    prixVente80100,
    prixVente100120,
  };
}

/**
 * Calcule les valeurs intermédiaires
 */
function calculerIntermediaires(data: CalculateurData): CalculsIntermediaires {
  // Récupérer le kit choisi
  const kit = KITS.find(k => k.id === data.kitId) || KITS[0];
  const distancePlantation = kit.distancePlantation;
  
  // Nombre de plantes = Arrondi(longueur de la haie / distance de plantation)
  const nombrePlantes = Math.round(data.longueurHaie / distancePlantation);

  // Terreau (m3) = (nombre de plante x volume de terreau (en l)) / 1000
  const terreauM3 = (nombrePlantes * data.volumeTerreau) / 1000;

  // Nombre de sacs terreau = Arrondi(terreaux (en m3) / 0.04)
  const nombreSacsTerreau = Math.round(terreauM3 / CONSTANTS.VOLUME_SAC_TERREAU_M3);

  // Paillage (m3) = (longueur de la haie x 0.6) x (ep de paillage (en cm) / 100)
  const paillageM3 = (data.longueurHaie * CONSTANTS.LARGEUR_PAILLAGE) * (data.epaisseurPaillage / 100);

  // Nombre de sacs paillage = Arrondi sup(paillage(en m3) / 0.14)
  const nombreSacsPaillage = Math.ceil(paillageM3 / CONSTANTS.VOLUME_SAC_PAILLAGE_M3);

  // Rendement selon mécanisation
  const rendement = data.mecanisation === 'mecanise' 
    ? CONSTANTS.RENDEMENT_MECANISE 
    : CONSTANTS.RENDEMENT_MANUEL;

  // Jours estimés = (nombre de plante / rendement)
  // Pas d'arrondi ici, on garde la précision pour les heures
  const joursEstimes = nombrePlantes / rendement;

  // Heures totales = (jours estimés x 14)
  // On garde la précision maximale pour le calcul de la main d'œuvre
  const heuresTotales = joursEstimes * CONSTANTS.HEURES_PAR_JOUR;

  return {
    distancePlantation,
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
function calculerPrixAchat(
  data: CalculateurData,
  calculs: CalculsIntermediaires
): PrixAchat {
  // Récupérer le kit choisi pour obtenir les prix moyens
  const kit = KITS.find(k => k.id === data.kitId) || KITS[0];
  
  // Prix végétaux 80/100 = (nombre de plante x prix moyen d'achat d'une plantes de taille 80/100)
  const vegetaux80100 = calculs.nombrePlantes * kit.prixMoyen80100;

  // Prix végétaux 100/120 = (nombre de plante x prix moyen d'achat d'une plantes de taille 100/120)
  const vegetaux100120 = calculs.nombrePlantes * kit.prixMoyen100120;

  // Prix terreau = (nombre de sac de terreaux x prix sac de terreaux)
  const terreau = calculs.nombreSacsTerreau * CONSTANTS.PRIX_SAC_TERREAU_40L;

  // Prix paillage = (nombre de sac de paillage x prix sac de paillage)
  const paillage = calculs.nombreSacsPaillage * CONSTANTS.PRIX_SAC_PAILLAGE_140L;

  return {
    vegetaux80100,
    vegetaux100120,
    terreau,
    paillage,
  };
}

/**
 * Calcule le prix de vente pour une taille donnée
 */
function calculerPrixVente(
  data: CalculateurData,
  calculs: CalculsIntermediaires,
  prixAchat: PrixAchat,
  taille: '80/100' | '100/120'
): PrixVente {
  // Prix d'achat total des végétaux selon la taille
  const prixVegetaux = taille === '80/100' 
    ? prixAchat.vegetaux80100 
    : prixAchat.vegetaux100120;

  // Total fourniture = ((Estimation du prix d'achat TOTAL des végétaux + terreau + paillage) 
  //                    x (1 + Frais généraux) x (1 + marge))
  const fourniture = (prixVegetaux + prixAchat.terreau + prixAchat.paillage) 
    * (1 + data.fraisGeneraux) 
    * (1 + data.marge);

  // Main d'œuvre = (heures totales x taux horaire)
  const mainOeuvre = calculs.heuresTotales * data.tauxHoraire;

  // Total = Fourniture + Main d'œuvre
  const total = fourniture + mainOeuvre;

  // Prix au mètre = Total / longueur de la haie
  const prixAuMetre = total / data.longueurHaie;

  return {
    fourniture,
    mainOeuvre,
    total,
    prixAuMetre,
  };
}

