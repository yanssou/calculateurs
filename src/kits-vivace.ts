// Données des kits de massif vivace

import type { VivaceKit } from './types-vivace';

export const KITS_VIVACE: VivaceKit[] = [
  {
    id: 1,
    titre: "Un jeu de textures et de mouvements",
    sousTitre: "Massif de graminée",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm
    plantes: [
      // nombreParM2Repartition (colonne G) : pour calculer la surface allouée
      // nombreParM2Quantite (colonne F depuis O) : pour calculer la quantité finale
      { nom: "Calamagrostis brachytricha", type: "Vivace", nombreParM2Repartition: 1, nombreParM2Quantite: 5 },
      { nom: "Deschampsia cespitosa", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 6 },
      { nom: "Melica ciliata", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Pennisetum Alopecuroides", type: "Vivace", nombreParM2Repartition: 1, nombreParM2Quantite: 5 },
      { nom: "Sesleria autumnalis", type: "Vivace", nombreParM2Repartition: 0.9, nombreParM2Quantite: 4 },
      { nom: "Sporobolus heterolepis", type: "Vivace", nombreParM2Repartition: 0.7, nombreParM2Quantite: 5 },
      { nom: "Stipa tenuifolia", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 6 },
    ],
  },
  {
    id: 2,
    titre: "Un jardin fleuri pour des bouquets toute l'année",
    sousTitre: "Massif bouquetier",
    prixMoyenPlante: 4.34, // € par plante en godet de 9cm
    plantes: [
      // Les valeurs nombreParM2Quantite viennent de "1-fichier Vivace" colonne O
      { nom: "Achillea millefolium Lilac Beauty", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Aster dumosus Augenweide", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Astrantia major Shaggy", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Echinacea purpurea", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 5 },
      { nom: "Echinops ritro 'Veitch Blue'", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Gaura lindheimeri Blanche", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 5 },
      { nom: "Gypsophila paniculata Schneeflocke", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Lavandula x intermedia Phenomenal", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 3 },
      { nom: "Leucanthemum maximum x superbum Etoile d'Anvers", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Monarda bradburiana", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Sedum 'Matrona'", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Lilium Muscadet", type: "Bulbe", nombreParM2Repartition: 0.6, nombreParM2Quantite: 15 },
      { nom: "Gladiolus x colvillei Mix", type: "Bulbe", nombreParM2Repartition: 0.6, nombreParM2Quantite: 25 },
      { nom: "Paeonia x lactiflora Peter Brand", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 1 },
      { nom: "Dahlia Peace Pact", type: "Bulbe", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Allium Summer Drummer", type: "Bulbe", nombreParM2Repartition: 0.6, nombreParM2Quantite: 10 },
      { nom: "Cosmos x bipinnatus Sonata Rose", type: "Annuelle", nombreParM2Repartition: 0.8, nombreParM2Quantite: 1 },
      { nom: "Nigella damascena Mix (en mélange)", type: "Annuelle", nombreParM2Repartition: 0.8, nombreParM2Quantite: 1 },
    ],
  },
  {
    id: 3,
    titre: "Panache de blanc : un jardin tout en grâce et légèreté",
    sousTitre: "Composition de graminées et vivaces à floraison blanche",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Astrantia major Shaggy", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Deschampsia cespitosa", type: "Vivace", nombreParM2Repartition: 0.7, nombreParM2Quantite: 6 },
      { nom: "Gaura lindheimeri Blanche", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Gypsophila paniculata Schneeflocke", type: "Vivace", nombreParM2Repartition: 0.7, nombreParM2Quantite: 0.7 },
      { nom: "Leucanthemum maximum x superbum Etoile d'Anvers", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Pennisetum Alopecuroides", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 5 },
      { nom: "Salvia Spires Snow Kiss", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
    ],
  },
  {
    id: 4,
    titre: "Panache de rose et violet : un jardin tout en douceur et contraste",
    sousTitre: "Composition de graminées et vivaces à floraison rose et violette",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Deschampsia cespitosa", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 6 },
      { nom: "Echinacea purpurea", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Eupatorium canabinum Plenum", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Monarda bradburiana", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Pennisetum Alopecuroides", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 5 },
      { nom: "SALVIA nemorosa 'New dimension Blue'", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Sedum 'Matrona'", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
    ],
  },
  {
    id: 5,
    titre: "Éclat de violet : un massif lumineux et résistant à la sécheresse",
    sousTitre: "Composition de graminées et vivaces à floraison violette, idéale pour sols secs",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Hysope officinale", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Lavandula x intermedia Phenomenal", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Pennisetum Alopecuroides", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 5 },
      { nom: "Perovskia atriplicifolia 'Blue Spire'", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "SALVIA nemorosa 'New dimension Blue'", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Sesleria autumnalis", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 4 },
      { nom: "Verbena bonariensis", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
    ],
  },
  {
    id: 7,
    titre: "Éclats d'été : un massif aux teintes chaudes et lumineuses",
    sousTitre: "Composition de vivaces à floraison dominante orange et ocre",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Stipa tenuifolia", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 6 },
      { nom: "Rudbeckia fulgida var.", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Echinacea purpurea 'Big Kahuna'", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Euphorbia amygdaloides purpurea", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Pennisetum Alopecuroides", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5 },
      { nom: "Helenium 'Rubinzwerg'", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
    ],
  },
  {
    id: 8,
    titre: "Éclat du Sud",
    sousTitre: "Une composition adaptée au climat sud de la France",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Lavandula x intermedia Phenomenal", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Pennisetum Alopecuroides", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 5 },
      { nom: "Perovskia atriplicifolia 'Blue Spire'", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Stipa tenuifolia", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 6 },
      { nom: "Verbena bonariensis", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 0.8 },
      { nom: "Allium christophii", type: "Vivace", nombreParM2Repartition: 0.4, nombreParM2Quantite: 0.4 },
    ],
  },
  {
    id: 9,
    titre: "Éclat d'ombre : un massif lumineux et raffiné",
    sousTitre: "Composition de vivaces et arbustes adaptés aux zones ombragées",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Astilbe x arendsii Bumalda", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Astrantia major Shaggy", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 0.8 },
      { nom: "Dryopteris cycadina", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Hedera helix", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Hydrangea arborescens Strong Annabelle", type: "Arbuste", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
    ],
  },
  {
    id: 10,
    titre: "Jardin d'ombre : un écrin de fraîcheur et de lumière",
    sousTitre: "Composition de vivaces adaptée aux zones ombragées et mi-ombragées",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Dryopteris cycadina", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Hakonechloa macra Aureola", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Hosta Devon Green", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 5.0 },
      { nom: "Hosta sieboldiana Frances williams", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
      { nom: "Hosta tardiana Halcyon", type: "Vivace", nombreParM2Repartition: 0.8, nombreParM2Quantite: 0.8 },
    ],
  },
  {
    id: 11,
    titre: "Parfum et saveurs : un massif aux mille vertus",
    sousTitre: "Composition de plantes comestibles et médicinales",
    prixMoyenPlante: 4.29, // € par plante en godet de 9cm (valeur par défaut)
    plantes: [
      { nom: "Allium schoenoprasum", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Artemisia dracunculus", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Borago officinalis", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Foeniculum vulgare", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Hysope officinale", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 0.8 },
      { nom: "Mélissa officinalis", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Mentha sp", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Origanum vulgare", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Rosmarinus officinalis", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Salvia officinalis", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Satureja montana", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Thymus vulgaris", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
      { nom: "Verbena officinalis", type: "Vivace", nombreParM2Repartition: 1.0, nombreParM2Quantite: 1.0 },
    ],
  },
];
