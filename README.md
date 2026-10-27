<<<<<<< HEAD
# TP - Routage Angular : MiniSite

Ce projet a été réalisé conformément au sujet du **TP - Routage Angular**.

## 🚀 Comment lancer le projet

1. Ouvrez un terminal dans le dossier `minisite` :
   ```bash
   cd minisite
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   ng serve
   ```
   ou
   ```bash
   npm start
   ```

4. Ouvrez votre navigateur sur [http://localhost:4200](http://localhost:4200).

---

## 📂 Architecture des fichiers créés

```
minisite/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── accueil/             # Page d'accueil (/)
│   │   │   ├── produits/            # Liste de produits (/produits)
│   │   │   ├── produit-detail/      # Détail avec paramètre (/produits/:id)
│   │   │   ├── apropos/             # Page À propos (/apropos)
│   │   │   └── not-found/           # Page d'erreur 404 (**)
│   │   ├── app.config.ts            # provideRouter(routes)
│   │   ├── app.routes.ts            # Configuration des routes
│   │   ├── app.ts                   # Composant racine (standalone)
│   │   ├── app.html                 # Navigation et <router-outlet>
│   │   └── app.scss
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 📝 Réponses aux Questions de Révision (Étape 8)

### 1. Quelle est la différence entre routerLink et Router.navigate() ?
- **`routerLink`** : C'est une directive utilisée directement dans le template **HTML** (navigation dite *déclarative*). Elle transforme un élément (souvent une balise `<a>` ou un bouton) en un lien qui intercepte le clic sans recharger toute la page web.
- **`Router.navigate()`** : C'est une méthode appelée en **TypeScript** (navigation dite *programmée* ou *impérative*). On l'utilise quand la navigation doit se faire suite à une logique métier (par exemple après avoir validé un formulaire, après une vérification de sécurité ou lors d'un clic avec passage d'arguments complexes).

### 2. Que signifie `path: '**'` ?
- Le symbole `**` est ce qu'on appelle un **joker** ou une **wildcard**.
- Il correspond à **n'importe quelle URL** saisie par l'utilisateur qui ne correspond à aucune des routes définies précédemment.
- On l'utilise généralement tout à la fin du tableau de routes pour rediriger l'utilisateur vers une page d'erreur **404 (Page introuvable)**.

### 3. Comment récupérer un paramètre de route ?
- On injecte le service **`ActivatedRoute`** dans le constructeur du composant.
- On peut ensuite récupérer la valeur du paramètre via :
  - **Instantané (Snapshot)** : `this.route.snapshot.params['id']` ou `this.route.snapshot.paramMap.get('id')` (idéal quand le composant est rechargé à chaque fois).
  - **Observable** : `this.route.paramMap.subscribe(params => ...)` (nécessaire si le paramètre change alors qu'on reste sur le même composant sans le recharger).

### 4. Quelle est la règle de correspondance des routes appliquée par Angular ?
- Angular applique la règle du **"First-Match Wins" (Premier arrivé, premier servi)**.
- Le routeur lit le tableau `routes` dans l'ordre, **du haut vers le bas**.
- Dès qu'il trouve une route qui correspond au chemin demandé, il s'arrête et affiche le composant associé. C'est pourquoi les routes les plus spécifiques doivent être placées au début, et les routes génériques (comme `**`) toujours à la fin.

### 5. Quelle est la différence entre navigation déclarative et programmée ?
- **Navigation déclarative** : Elle est écrite dans le fichier HTML à l'aide de directives comme `[routerLink]`. L'utilisateur clique sur un lien et navigue directement.
- **Navigation programmée** : Elle est écrite dans le code TypeScript (`.ts`) à l'aide du service `Router` (`router.navigate(...)`). Le développeur a le contrôle total pour exécuter du code avant de déclencher la navigation (ex. sauvegarder des données, appeler une API, tester si l'utilisateur est connecté).
=======
# tp2
>>>>>>> ac0635a2ec23207606ebf0b0baab60554bcf1bfc
