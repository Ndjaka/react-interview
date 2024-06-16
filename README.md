
## Installation

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé avant de suivre ces étapes.

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/Ndjaka/react-interview.git

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Lancer le projet :**

   ```bash 
   npm run dev
   ```

## Scripts disponibles

- npm run test : Exécute les tests avec Vitest.
- npm run dev : Démarre l'environnement de développement avec Vite.
- npm run coverage : Exécute les tests avec la couverture de code.
- npm run build : Compile le code avec TypeScript et construit le projet avec Vite.
- npm run lint : Exécute ESLint pour le linting.
- npm run preview : Démarre un aperçu de production avec Vite.


# react-interview

1. Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.

2. Ajouter un bouton dans les cartes permettant de supprimer celle-ci

3. Ajouter un bouton toggle like/dislike

4. Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître.

5. Ajouter un système de pagination avec les fonctionnalités suivantes: 
    * Boutons précédent/suivant
    * Choix du nombre d'élements affichés par page (4, 8 ou 12).

Prenez des initiatives, il y a des points bonus si

* C'est joli
* Vous utilisez correctement REDUX 
* Il y a une attention aux détails

/!\ La suppression du comportement asynchrone dans `movies.js` entraînera une annulation du test.
