// Données des kits de haie extraites de la feuille 2

export interface Kit {
  id: number;
  titre: string;
  sousTitre: string;
  distancePlantation: number; // en mètres
  plantes: Array<{
    nom: string;
    quantite: number;
  }>;
  prixMoyen80100: number; // Prix moyen HT pour taille 80/100
  prixMoyen100120: number; // Prix moyen HT pour taille 100/120
}

export const KITS: Kit[] = [
  {
    id: 1,
    titre: "Un refuge pour pollinisateurs",
    sousTitre: "Composition fleurie mellifère haute",
    distancePlantation: 1.2,
    plantes: [
      { nom: "Abelia grandiflora", quantite: 6 },
      { nom: "Amelanchier Ovalis", quantite: 6 },
      { nom: "Osmanthus x burkwoodii", quantite: 5 },
      { nom: "Philadelphus coronarius", quantite: 5 },
      { nom: "Photinia fraseri 'Red Robin'", quantite: 5 },
      { nom: "Prunus lusitanica 'Angustifiolia'", quantite: 5 },
      { nom: "'Viburnum Opulus 'Roseum'", quantite: 5 },
      { nom: "Viburnum tinus", quantite: 5 },
    ],
    prixMoyen80100: 48.4, // À mettre à jour avec les vrais prix
    prixMoyen100120: 72.7, // À mettre à jour avec les vrais prix
  },
  {
    id: 2,
    titre: "Un paradis pour les papillons 🌸",
    sousTitre: "Haie vive mellifère basse et écologique",
    distancePlantation: 1.0,
    plantes: [
      { nom: "Abelia grandiflora", quantite: 1 },
      { nom: "Amelanchier Ovalis", quantite: 2 },
      { nom: "Berberis thunbergii Atropurpurea", quantite: 3 },
      { nom: "Osmanthus x burkwoodii", quantite: 4 },
      { nom: "Physocarpus opulifolius Red Baron", quantite: 5 },
      { nom: "Viburnum plicatum 'Mariesii", quantite: 6 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 3,
    titre: "Haie de séparation naturelle et fleurie",
    sousTitre: "Composition pour une haie de séparation haute",
    distancePlantation: 1.2,
    plantes: [
      { nom: "Abelia grandiflora", quantite: 1 },
      { nom: "Amelanchier Ovalis", quantite: 2 },
      { nom: "Philadelphus coronarius", quantite: 3 },
      { nom: "Rhamnus catharticus", quantite: 4 },
      { nom: "'Viburnum Opulus 'Roseum'", quantite: 5 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 4,
    titre: "Haie de séparation naturelle et fleurie",
    sousTitre: "Composition pour une haie de séparation basse",
    distancePlantation: 1.0,
    plantes: [
      { nom: "Abelia grandiflora", quantite: 1 },
      { nom: "Amelanchier Ovalis", quantite: 2 },
      { nom: "Berberis thunbergii Atropurpurea", quantite: 3 },
      { nom: "NANDINA domestica 'Fire", quantite: 4 },
      { nom: "Spiraea japonica 'Gold Mound'", quantite: 5 },
      { nom: "Viburnum plicatum 'Mariesii", quantite: 6 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 5,
    titre: "Composition 'Intimité et verdure'",
    sousTitre: "Haie d'occultation persistante",
    distancePlantation: 1.2,
    plantes: [
      { nom: "Carpinus betulus", quantite: 1 },
      { nom: "Eleagnus Ebengei", quantite: 2 },
      { nom: "Ligustrum vulgare", quantite: 3 },
      { nom: "Photinia fraseri 'Red Robin'", quantite: 4 },
      { nom: "'Prunus laurocerasus 'Dart's'", quantite: 5 },
      { nom: "Viburnum tinus", quantite: 6 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 6,
    titre: "Compositions 'Spécial bord de mer'",
    sousTitre: "Haie persistante et robuste",
    distancePlantation: 1.2,
    plantes: [
      { nom: "Carpinus betulus", quantite: 1 },
      { nom: "Eleagnus Ebengei", quantite: 2 },
      { nom: "EUONYMUS japonicus", quantite: 3 },
      { nom: "Photinia fraseri 'Red Robin'", quantite: 4 },
      { nom: "Prunus lusitanica 'Angustifiolia'", quantite: 5 },
      { nom: "'Viburnum Opulus 'Roseum'", quantite: 6 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 7,
    titre: "Composition 'haie méditerranéenne'",
    sousTitre: "Élégance et résistante",
    distancePlantation: 1.2,
    plantes: [
      { nom: "Arbutus unedo 'Compac", quantite: 1 },
      { nom: "Eleagnus Ebengei", quantite: 2 },
      { nom: "Laurus naubilis", quantite: 3 },
      { nom: "Nerium oleander", quantite: 4 },
      { nom: "PHILLYREA angustifolia", quantite: 5 },
      { nom: "Griselinia littoralis'", quantite: 6 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 8,
    titre: "Compostions monospécifique",
    sousTitre: "Une haie élégante, harmonieuse et uniforme",
    distancePlantation: 1.0,
    plantes: [
      { nom: "Arbutus unedo 'Compac", quantite: 1 },
      { nom: "Carpinus betulus", quantite: 2 },
      { nom: "Eleagnus Ebengei", quantite: 3 },
      { nom: "EUONYMUS japonicus", quantite: 4 },
      { nom: "fagus sylvatica", quantite: 5 },
      { nom: "Laurus naubilis", quantite: 6 },
      { nom: "Ligustrum vulgare", quantite: 7 },
      { nom: "Osmanthus x burkwoodii", quantite: 8 },
      { nom: "PHILLYREA angustifolia", quantite: 9 },
      { nom: "Photinia fraseri 'Red Robin'", quantite: 10 },
      { nom: "'Prunus laurocerasus 'Dart's'", quantite: 11 },
      { nom: "Prunus lusitanica 'Angustifiolia'", quantite: 12 },
      { nom: "Taxus bacata", quantite: 13 },
      { nom: "Temu divaricatum Heaven Scent", quantite: 14 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 9,
    titre: "Une haie gourmande et généreuse",
    sousTitre: "Alliez intimité et récoltes avec cette haie fruitière haute",
    distancePlantation: 1.3,
    plantes: [
      { nom: "Amelanchier alnifolia", quantite: 1 },
      { nom: "Amelanchier Ovalis", quantite: 2 },
      { nom: "Corylus avellana", quantite: 3 },
      { nom: "Laurus naubilis", quantite: 4 },
      { nom: "Osmanthus x burkwoodii", quantite: 5 },
      { nom: "Rubus fruticosus", quantite: 6 },
      { nom: "Sambucus nigra", quantite: 7 },
      { nom: "Malus domestica Reine des Reinettes", quantite: 8 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
  {
    id: 10,
    titre: "Une haie fruitière basse et productive",
    sousTitre: "Profitez de récoltes généreuses même dans un petit jardin",
    distancePlantation: 0.8,
    plantes: [
      { nom: "Amelanchier alnifolia", quantite: 1 },
      { nom: "Lycium barbarum", quantite: 2 },
      { nom: "Rubus fruticosus", quantite: 3 },
      { nom: "Ribes rubrum", quantite: 4 },
      { nom: "Rubus idaeus", quantite: 5 },
    ],
    prixMoyen80100: 48.4,
    prixMoyen100120: 72.7,
  },
];

