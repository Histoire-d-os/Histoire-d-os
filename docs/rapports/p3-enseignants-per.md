# P3 — Parcours enseignant et repères PER

Date : 2026-06-11

## Objectif

Renforcer l'entrée enseignant·es sans modifier le contenu des activités publiques elles-mêmes :

- donner un accès plus direct aux fiches, guides et corrigés existants ;
- créer une page de séquence modulable ;
- créer une page de repères PER prudente, sans codes inventés ni validation officielle implicite ;
- conserver les statuts de validation visibles ;
- vérifier le rendu avec le préfixe GitHub Pages `/Histoire-d-os/`.

## Fichiers créés

- `acteurs/enseignants-sequence.html` : page de construction de séquence, avec formats 1 séance, 3 séances, 5-6 séances et variante musée.
- `acteurs/enseignants-per.html` : repères PER publics pour la planification, formulés comme contributions possibles.
- `docs/qa/p3-enseignants-per/` : captures et résumé JSON du test navigateur.

## Fichiers modifiés

- `acteurs/enseignants.html` : transformation en tableau de bord enseignant·es avec choix d'activités, accès rapides, tableau de ressources à imprimer et statuts.
- `acteurs/approfondir.html` : ajout d'un accès aux repères PER publics, signalés comme pistes à adapter.
- `styles.css` : composants de cartes, listes de détail, grilles de séquence, tableaux de planification, styles PER, responsive et impression.

## Formulations PER

Les formulations restent volontairement prudentes :

- "peut contribuer à" ;
- "mobilise certains éléments de" ;
- "peut s'intégrer dans" ;
- "à adapter au degré, à la progression de classe et aux choix de l'enseignant·e".

Aucun code PER précis n'a été ajouté. Aucun extrait long des documents PER n'a été copié. La page rappelle que les repères ne constituent pas une validation officielle.

## Vérifications navigateur

Playwright CLI n'a pas pu être utilisé car `npx` échoue localement avec un module npm manquant. Le test a donc été réalisé avec Chrome DevTools en mode headless, conformément au fallback déjà utilisé pour P2.

Pages testées sous le préfixe local `/Histoire-d-os/` :

- `index.html`
- `acteurs/enseignants.html`
- `acteurs/enseignants-sequence.html`
- `acteurs/enseignants-per.html`
- `ressources/activite-01-trouver-astragale.html`
- `ressources/activite-02-associer-astragale-animal.html`

Résultats :

- aucun lien PDF public détecté ;
- aucun lien vers `tmp/`, `_private-inputs/`, `file:///` ou chemin Windows absolu ;
- aucun lien interne ciblé absent ;
- aucun débordement horizontal détecté en desktop ou mobile ;
- une seule balise `h1` par page testée ;
- les boutons d'impression déclenchent `window.print()` ;
- le menu mobile s'ouvre et se ferme avec Échap ;
- le lien d'évitement pointe vers une cible existante ;
- pas d'erreur console ni de ressource 404 après relance du serveur de test.

## Impression et PDF temporaire

La page `acteurs/enseignants-sequence.html` a été testée en média `print`.

- les actions et en-têtes web disparaissent à l'impression ;
- les sources et statuts restent visibles ;
- aucun débordement horizontal n'a été détecté ;
- un PDF temporaire A4 a été généré dans `tmp/` pour contrôle, sans création de PDF public ;
- format contrôlé : 595,92 x 841,92 pt ;
- longueur observée : 9 pages.

## Captures conservées

- `docs/qa/p3-enseignants-per/home-prefix-desktop.png`
- `docs/qa/p3-enseignants-per/enseignants-desktop.png`
- `docs/qa/p3-enseignants-per/enseignants-mobile.png`
- `docs/qa/p3-enseignants-per/enseignants-sequence-desktop.png`
- `docs/qa/p3-enseignants-per/enseignants-sequence-mobile.png`
- `docs/qa/p3-enseignants-per/enseignants-sequence-print.png`
- `docs/qa/p3-enseignants-per/enseignants-per-desktop.png`
- `docs/qa/p3-enseignants-per/enseignants-per-mobile.png`
- `docs/qa/p3-enseignants-per/activity-01-linked.png`
- `docs/qa/p3-enseignants-per/activity-02-linked.png`
- `docs/qa/p3-enseignants-per/browser-summary.json`

## Validations humaines restantes

- valider les correspondances PER avec l'équipe pédagogique ou le cadre institutionnel visé ;
- relire les formulations scientifiques sur l'astragale, le talus, les usages archéologiques et les espèces de l'activité 2 ;
- confirmer les droits des images avant diffusion large ;
- tester physiquement l'impression A4 des fiches destinées aux élèves ;
- finaliser les ressources signalées comme prototypes avant toute mention "prête à utiliser".
