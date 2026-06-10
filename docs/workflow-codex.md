# Workflow Codex pour Histoire d'os

Ce workflow décrit comment lancer une mission Codex dans le dépôt `Histoire-d-os/Histoire-d-os`.

## 1. Démarrer une mission

1. Vérifier que le dépôt ouvert est la racine du projet.
2. Lire `AGENTS.md`.
3. Vérifier l'état Git avec `git status --short`.
4. Identifier les fichiers publics, privés ou de documentation concernés.
5. Annoncer brièvement les fichiers prévus avant toute édition.

Documents de fondation à mobiliser lorsque la mission touche aux sources, aux médias, au PER, aux activités ou à la validation :

- `.agents/skills/histoire-os-publisher/SKILL.md`
- `docs/validation-checklist.md`
- `docs/decisions-editoriales.md`
- `docs/per-index.md`
- `docs/registre-ressources-manquantes.md`
- `docs/registre-ressources-manquantes.csv`
- `docs/rapports/preparation-sources-privees.md`
- `_private-inputs/README.md`

## 2. Vérifier les compétences actives

Compétences locales attendues pour ce projet :

- `$histoire-os-publisher` : compétence propre au dépôt.
- `$playwright` : tests fonctionnels dans un navigateur réel.
- `$playwright-interactive` : QA visuelle et fonctionnelle avec session persistante quand disponible.
- `$screenshot` : capture système ou fallback visuel.
- `$pdf` : lecture, rendu et contrôle de PDF.
- `$imagegen` : illustrations contemporaines non scientifiques seulement.
- `$skill-creator` : création ou mise à jour de compétences.
- `$skill-installer` : installation de compétences manquantes.

Si une compétence utile est absente, utiliser `$skill-installer` seulement après avoir vérifié qu'elle manque réellement.

## 3. Utiliser `$histoire-os-publisher`

Utiliser la compétence locale pour toute modification liée à :

- navigation ;
- activité pédagogique ;
- fiche imprimable ;
- guide enseignant ou musée ;
- corrigé ;
- source scientifique ;
- média, image ou modèle 3D ;
- métadonnée ;
- accessibilité ;
- contenu lié au Plan d'études romand.

La compétence impose de consulter les références privées disponibles, sans publier automatiquement leur contenu.

## 4. Produire ou modifier une ressource

1. Lire les pages déjà existantes pour éviter les doublons.
2. Réutiliser les classes CSS, composants et scripts du site.
3. Préserver les URL publiques existantes.
4. Ajouter des placeholders si les assets, droits ou validations manquent.
5. Indiquer clairement les sources, crédits et statuts.
6. Éviter toute formulation scientifique non vérifiée.

## 5. Contrôler les changements

Contrôles minimaux selon le type de mission :

- `git diff --check`
- `node --check script.js`
- `node --check ressources/document-actions.js`
- vérification des liens locaux et des ancres ;
- vérification `h1`, titres, textes alternatifs et tables ;
- test navigateur si une page publique change ;
- capture ou screenshot si la présentation change ;
- contrôle A4 si une ressource est imprimable ;
- rendu ou inspection PDF si un PDF est produit ou utilisé comme référence.

Ne pas annoncer un test comme réussi s'il n'a pas été exécuté.

## 6. Publier sur GitHub Pages

1. Vérifier que les changements appartiennent tous à la mission.
2. Expliquer les fichiers créés ou modifiés.
3. Lancer les contrôles pertinents.
4. Montrer les points qui nécessitent une décision humaine.
5. Commit uniquement après accord explicite de l'utilisateur.
6. Push uniquement après demande explicite de l'utilisateur.

Le site étant statique, GitHub Pages publie les fichiers suivis par Git depuis la branche configurée du dépôt.
