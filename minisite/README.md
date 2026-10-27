# TP2 - MiniSite Angular

Mini-site web développé avec Angular 19. Il présente une page d'accueil, une liste de produits avec accès à leurs détails, une page « À propos » et une page 404.

## Prérequis

- Node.js et npm

## Installation

À la racine du projet, installez les dépendances :

```bash
npm install
```

## Démarrer le serveur de développement

```bash
npm start
```

Ouvrez ensuite [http://localhost:4200](http://localhost:4200). L'application se recharge automatiquement lorsque les fichiers source sont modifiés.

## Pages disponibles

| URL | Page |
| --- | --- |
| `/` | Accueil |
| `/home` | Redirection vers l'accueil |
| `/produits` | Liste des produits |
| `/produits/1` | Détail du produit 1 |
| `/produits/2` | Détail du produit 2 |
| `/produits/3` | Détail du produit 3 |
| `/apropos` | À propos |
| Toute autre URL | Page introuvable |

## Commandes utiles

```bash
npm start       # Lance le serveur de développement
npm run build   # Compile l'application dans dist/minisite
npm run watch   # Recompile à chaque modification (mode développement)
```

## Technologies

- Angular 19
- TypeScript
- SCSS
