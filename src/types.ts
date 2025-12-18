// Types pour le calculateur de haie

export type Mecanisation = 'mecanise' | 'manuel';
export type TailleArbuste = '80/100' | '100/120';
export type Engrais = 'OUI' | 'NON';

export interface CalculateurData {
  // Données saisies par l'utilisateur
  kitId: number; // ID du kit choisi
  longueurHaie: number; // en mètres
  mecanisation: Mecanisation;
  tailleArbuste: TailleArbuste;
  volumeTerreau: number; // en litres
  epaisseurPaillage: number; // en cm
  engrais: Engrais;
  
  // Données modifiables (préremplies mais ajustables)
  fraisGeneraux: number; // en pourcentage (ex: 0.15 = 15%)
  marge: number; // en pourcentage (ex: 0.25 = 25%)
  tauxHoraire: number; // en euros
}

export interface CalculsIntermediaires {
  distancePlantation: number; // donnée fixe: 1.2 mètres
  nombrePlantes: number;
  terreauM3: number;
  nombreSacsTerreau: number;
  paillageM3: number;
  nombreSacsPaillage: number;
  rendement: number; // pce/jours
  joursEstimes: number;
  heuresTotales: number;
}

export interface PrixAchat {
  vegetaux80100: number;
  vegetaux100120: number;
  terreau: number;
  paillage: number;
}

export interface PrixVente {
  fourniture: number;
  mainOeuvre: number;
  total: number;
  prixAuMetre: number;
}

export interface Resultats {
  calculsIntermediaires: CalculsIntermediaires;
  prixAchat: PrixAchat;
  prixVente80100: PrixVente;
  prixVente100120: PrixVente;
}

