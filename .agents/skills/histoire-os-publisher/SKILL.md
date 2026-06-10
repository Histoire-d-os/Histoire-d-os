---
name: histoire-os-publisher
description: Publier, auditer et tester les ressources pédagogiques et muséales du projet Histoire-d-os. À utiliser pour toute modification de navigation, activité, fiche imprimable, source, média, modèle 3D, métadonnée, accessibilité ou contenu PER dans ce dépôt.
---

# Histoire-d-os Publisher

## Overview

Utiliser cette compétence pour travailler sur le site statique Histoire-d-os sans casser sa structure, sa rigueur scientifique, son accessibilité ou sa traçabilité. Elle complète `AGENTS.md`, qui reste la référence prioritaire du dépôt.

## Documents de référence du dépôt

À consulter selon la mission :

- `AGENTS.md` : règles générales du dépôt.
- `docs/workflow-codex.md` : déroulement recommandé des missions Codex.
- `docs/validation-checklist.md` : contrôles avant livraison.
- `docs/decisions-editoriales.md` : décisions éditoriales, scientifiques, pédagogiques et juridiques.
- `docs/per-index.md` : index PER interne, pages consultées et correspondances provisoires.
- `docs/registre-ressources-manquantes.md` : synthèse des ressources, médias, sources et validations à obtenir.
- `docs/registre-ressources-manquantes.csv` : registre détaillé exploitable en tableur.
- `docs/rapports/preparation-sources-privees.md` : rapport de préparation du socle privé.
- `_private-inputs/README.md` : organisation locale des références privées ignorées par Git.

## Workflow obligatoire

1. Lire `AGENTS.md`.
2. Vérifier l'état Git avec `git status --short`.
3. Lire les fichiers existants concernés avant de créer un doublon.
4. Consulter les références privées disponibles dans `_private-inputs/` lorsque la mission touche aux sources, au PER, aux activités ou à l'identité visuelle.
5. Annoncer brièvement les fichiers qui seront modifiés.
6. Produire ou modifier les pages, ressources ou métadonnées.
7. Vérifier les liens locaux, les ancres et les retours de navigation.
8. Utiliser `$playwright` pour les tests fonctionnels quand une page publique ou une interaction change.
9. Utiliser `$screenshot` pour les vérifications visuelles ou comme fallback de capture.
10. Utiliser `$pdf` pour inspecter les PDF de référence, rendre les exports ou contrôler la mise en page PDF.
11. Utiliser `$imagegen` seulement pour des illustrations contemporaines non scientifiques et jamais pour produire un schéma anatomique présenté comme source.
12. Générer un rapport de validation honnête.

## Règles de production

- Garder le projet compatible avec GitHub Pages : HTML, CSS et JavaScript statiques.
- Ne pas ajouter de framework, package manager ou build tool sans justification explicite.
- Réutiliser les composants existants : `document-header`, `document-main`, `document-hero`, `doc-card`, `doc-section`, `resource-card`, `document-actions`, `source-box`, `answer-lines`.
- Ne pas déplacer une URL publique sans compatibilité.
- Ne pas créer de lien vers un PDF, une image, un modèle 3D ou une ressource absente.
- Préserver les placeholders lorsque les assets ou droits ne sont pas validés.

## Rigueur scientifique

- Ne jamais inventer de fait scientifique, anatomique, historique, archéologique ou pédagogique.
- Distinguer observation, hypothèse, interprétation, vérification et incertitude.
- Ne jamais attribuer la fonction d'un objet à partir de sa seule forme.
- Ne pas présenter les astragales comme les "premiers dés naturels".
- Ne pas généraliser un usage attesté dans une période, région ou culture.
- Ne pas traiter une image générée comme source historique ou scientifique.
- Marquer clairement les statuts : source validée, hypothèse, exemple pédagogique, placeholder, à vérifier.

## PER et références privées

Les références dans `_private-inputs/` servent à préparer le travail, pas à être publiées automatiquement.

Avant tout contenu lié au Plan d'études romand :

- consulter `_private-inputs/per/` ;
- ne pas inventer de code PER ;
- citer publiquement seulement des références vérifiables et acceptées ;
- signaler les correspondances prudentes lorsqu'elles ne sont pas encore validées.

## Validation minimale

Selon la mission, exécuter les contrôles pertinents :

- `git diff --check`
- `node --check script.js`
- `node --check ressources/document-actions.js`
- vérification des liens locaux et des ancres ;
- vérification d'un seul `h1`, titres, textes alternatifs et tables ;
- test navigateur avec `$playwright` pour une page publique modifiée ;
- capture avec `$screenshot` ou outil intégré pour un changement visuel ;
- inspection PDF avec `$pdf` quand un PDF est utilisé ou produit ;
- contrôle A4 pour toute ressource annoncée comme imprimable.

## Rapport final attendu

Le compte rendu doit indiquer :

- fichiers créés ;
- fichiers modifiés ;
- tests réellement exécutés ;
- tests non exécutés et raison ;
- limites scientifiques ou juridiques ;
- points nécessitant une décision humaine ;
- statut Git.
