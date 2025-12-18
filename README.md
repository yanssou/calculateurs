# Calculateur de Haie

Application React/TypeScript pour calculer le coût d'installation d'une haie, incluant les végétaux, le terreau, le paillage et la main d'œuvre.

## 🎯 Fonctionnalités

- **Sélection du kit de plantes** : Choix parmi 10 kits différents avec compositions variées
- **Paramètres de calcul** :
  - Longueur de la haie
  - Mécanisation (manuel ou mécanisé)
  - Taille des arbustes (80/100 ou 100/120)
  - Volume de terreau
  - Épaisseur de paillage
  - Besoin d'engrais
  - Paramètres financiers (frais généraux, marge, taux horaire)
- **Calculs automatiques** :
  - Nombre de plantes nécessaires
  - Quantités de terreau et paillage
  - Estimation des temps de pose
  - Prix d'achat HT des végétaux et fournitures
  - Prix de vente HT (fourniture + main d'œuvre)
  - Prix au mètre linéaire

## 🚀 Installation et lancement

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (ou un autre port si celui-ci est occupé).

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

### Prévisualisation du build

```bash
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── StepSelectKit.tsx
│   ├── StepLongueurHaie.tsx
│   ├── StepMecanisation.tsx
│   ├── StepTailleArbuste.tsx
│   ├── StepTerreau.tsx
│   ├── StepPaillage.tsx
│   ├── StepEngrais.tsx
│   ├── StepParametresFinanciers.tsx
│   └── Results.tsx
├── calculations.ts     # Fonctions de calcul
├── constants.ts        # Constantes et données fixes
├── kits.ts             # Données des kits de plantes
├── types.ts            # Types TypeScript
└── App.tsx             # Composant principal
```

## 🛠️ Technologies utilisées

- **React 19** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Vite** : Build tool et serveur de développement
- **ESLint** : Linter pour la qualité du code

## 📝 Notes

- Les prix moyens des kits sont actuellement basés sur le kit 1. Ils peuvent être mis à jour dans `src/kits.ts`
- Les formules de calcul sont basées sur les spécifications du fichier Excel source
- La distance de plantation varie selon le kit choisi (entre 0.8 et 1.3 mètres)

## 📄 Licence

Ce projet est privé et propriétaire.
