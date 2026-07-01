# Intégration du jeu interactif — message secret

## Résumé

Le prototype 3D de message secret avec astragale percé a été intégré comme prolongement WIP de l'activité 4, sans l'ajouter au menu principal et sans modifier les traductions EN/DE/IT. Il est présenté comme une adaptation pédagogique moderne, non comme une reconstitution antique définitive.

## Fichiers importés

- `ressources/jeux/message-secret/astragale-secret-game.js` : moteur standalone du prototype.
- `ressources/jeux/message-secret/astragale-secret.css` : styles du prototype.
- `ressources/jeux/message-secret/vendor/three-0.147.0.min.js` : dépendance locale Three.js.
- `ressources/jeux/message-secret/vendor/GLTFLoader-0.147.0.js` : dépendance locale GLTFLoader.
- `assets/models/astragale/astragalus_holes_anchors_copy.glb` : modèle 3D de travail.

## Page créée

- `ressources/jeu-message-secret.html` : page française du prototype, avec introduction, statut, objectif pédagogique, principe du jeu, usages classe/musée, prudence historique, zone interactive et sources/crédits.

## Pages modifiées

- `ressources/activite-04-un-os-plusieurs-vies.html` : ajout d'une section dédiée "Usage possible : coder un message".
- `ressources/supports-en-ligne.html` : ajout d'une tuile secondaire "Jeu interactif — message secret".
- `acteurs/approfondir.html` : ajout d'un lien discret vers le prototype dans les sources et approfondissements.

## Choix techniques

Le moteur utilisé est la version standalone `prototypes/astragale-secret-game.js` issue du projet source, car elle contient la logique du jeu, le rendu Three.js, le chargement GLB, les anchors `Hole_*`, les niveaux et les interactions. La version portfolio `osselets-level2.js` n'a pas été utilisée : elle sert surtout à embarquer le prototype dans une iframe et ne porte pas le moteur complet.

Le modèle est chargé depuis `../assets/models/astragale/astragalus_holes_anchors_copy.glb`, chemin relatif correct depuis `ressources/jeu-message-secret.html`. Les dépendances Three.js et GLTFLoader sont servies depuis `ressources/jeux/message-secret/vendor/`, sans CDN.

## Place dans l'activité 4

Le prototype est relié à l'activité 4 comme exemple d'usage possible d'un osselet : un support percé pouvant servir à coder un message. Les textes rappellent que cette version est une adaptation pédagogique moderne et que la validation historique et scientifique reste nécessaire.

## Image d'illustration

Image de référence non intégrée : capture Reddit ou droits/source non clarifiés. Illustration propre à produire.

## Fonctionnement local

Testé avec un serveur statique local :

- URL : `http://127.0.0.1:8765/ressources/jeu-message-secret.html`
- Three.js local : chargé en HTTP 200.
- GLTFLoader local : chargé en HTTP 200.
- Modèle GLB : chargé en HTTP 200.
- État observé du jeu : `Modèle chargé : 24 anchors de trous détectés.`
- Interaction vérifiée : boutons de face/zoom et touches fléchées sans erreur console bloquante.

Un seul 404 non bloquant a été observé : demande automatique de `/favicon.ico` par le navigateur. La page possède déjà un `rel="icon"` vers le logo du projet.

## Points historiques à valider

- Formulation exacte du passage attribué à Énée le Tacticien.
- Nombre de trous, répartition par face et association aux lettres grecques.
- Choix des mots proposés dans le jeu.
- Statut du modèle 3D par rapport à une reconstitution ou à une adaptation.

## Points juridiques à valider

- Droits et crédits précis du modèle `astragalus_holes_anchors_copy.glb`.
- Licence et provenance exacte de `GLTFLoader-0.147.0.js`, non documentées dans l'en-tête copié.
- Three.js indique une licence MIT dans l'en-tête du fichier copié.
- Aucune image Reddit ou image sans droits clarifiés n'a été intégrée.

## Points d'accessibilité restants

- Le canvas possède un libellé accessible et un focus clavier.
- Les commandes clavier de rotation/zoom fonctionnent partiellement.
- La manipulation reste surtout pensée pour souris ou tactile.
- Une alternative textuelle est à prévoir pour une version finale.
- Le message de fallback reste visible dans le code et le moteur affiche un message clair si Three.js, GLTFLoader ou le GLB ne chargent pas.

## Tests réalisés

- `node --check script.js` : OK.
- `node --check ressources/document-actions.js` : OK.
- `node --check ressources/jeux/message-secret/astragale-secret-game.js` : OK.
- `git diff --check` : OK, avec avertissements CRLF non bloquants sur des fichiers HTML déjà concernés.
- Test navigateur Chrome via serveur local : OK.
- Desktop : un seul `h1`, jeu visible, pas de débordement horizontal.
- Mobile : un seul `h1`, jeu visible, pas de débordement horizontal.
- Liens internes ciblés : activité 4, Supports en ligne et Approfondir pointent vers le prototype.
- Vérification locale des `href` et `src` dans les pages ciblées : aucun fichier absent.
- Recherche de chemins interdits : aucun lien local absolu, chemin privé ou dossier temporaire ajouté dans les fichiers ciblés.

## Captures QA

Captures créées dans `docs/qa/integration-jeu-message-secret/` :

- `page-desktop.png`
- `page-mobile.png`
- `jeu-charge.png`
- `lien-activite-04.png`
- `lien-supports-en-ligne.png`
- `lien-approfondir.png`
- `note-accessibilite.png`
