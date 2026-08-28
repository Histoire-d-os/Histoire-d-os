# Refonte publique simple

Date : 27 août 2026

## Architecture retenue

Le menu public français comporte cinq entrées : Accueil, Écoles, Musées,
Ressources et Sources & prolongements. La structure repose sur des titres,
paragraphes courts, grilles, cartes, boutons, visionneuses natives et embeds
externes afin de rester transposable dans WordPress Gutenberg.

## Correspondance des anciennes pages

| Ancienne destination | Nouvelle destination | Conservation |
| --- | --- | --- |
| Accueil et section Activités | `index.html` | Accueil réécrit et raccourci. |
| Tableau de bord enseignants | `acteurs/enseignants.html` | Remplacé par quatre tuiles et les documents actualisés. |
| Tableau de bord musées | `acteurs/musees.html` | Limité aux trois adaptations réellement disponibles. |
| Bibliothèque de supports | `ressources/supports-en-ligne.html` | Recentrée sur les ressources numériques. |
| Le projet | `projet.html` | URL conservée comme page de transition. |
| Approfondir | `acteurs/approfondir.html` | URL conservée comme page de transition. |
| Pages détaillées d'activités | `ressources/activite-*.html` | Conservées; retirées du menu principal. |

## Documents actualisés

Les PDF du lot fourni par l'utilisateur ont été copiés sous des noms stables
dans `ressources/pdf/`. Les anciens PDF génériques restent présents afin de ne
pas casser leurs URLs. Les numéros affichés suivent les nouveaux documents :
activité 1, activité 2 pour Achille, activité 3 pour Un os plusieurs vies et
activité 4 pour la carte-frise. Les identifiants techniques historiques
`activite-05` restent provisoirement dans les noms de fichiers, les registres
et les PDF fournis afin de préserver les liens et la traçabilité. Les PDF
seront renumérotés lors de leur prochaine régénération depuis une source
éditable.

Les miniatures sont des rendus de la première page des PDF, enregistrés dans
`assets/images/documents/`.

## Archives ZIP

Les ensembles scolaires sont dans `downloads/ecoles/` et les ensembles musée
dans `downloads/musees/`. Chaque archive contient uniquement les PDF liés dans
la tuile correspondante. Pour les régénérer, recréer l'archive à partir des
fichiers nommés dans les listes « Documents inclus » des pages Écoles et
Musées; aucune compression côté navigateur n'est utilisée.

## Ressources 3D et animation

Les modèles Sketchfab restent hébergés par leurs institutions ou auteurs et
sont intégrés par iframe. Aucune copie de modèle n'a été téléchargée. La page
OrthoInfo est proposée par lien externe seulement, conformément à sa politique
qui interdit l'affichage dans une frame tierce.

Les scènes Ozboneviz mouton-chèvre et vache-mule sont réunies dans une boîte
comparative unique. La comparaison chiffrée des tailles a été retirée : les
quatre os restent observables ensemble, mais leur taille apparente à l'écran
n'est pas présentée comme une mesure anatomique.

Le talus humain isolé et les os du pied humain gauche sont placés côte à côte
dans une seconde boîte. Le cadrage du talus est adapté à l'observation, sans
prétendre fournir une échelle commune entre les deux visionneuses. Ces modèles
restent hébergés par Sketchfab; aucune copie locale n'a été créée.

## Contrôles réalisés

- quatorze pages publiques et de compatibilité contrôlées : aucun lien local
  absent, aucun chemin Windows, `file:///`, lien vers `_private-inputs/` ou
  vers `tmp/` ;
- vues desktop (1440 x 900) et mobile (390 x 844) contrôlées sans débordement
  horizontal, avec cinq liens dans le menu principal ;
- capture desktop régénérée après chargement progressif de chaque visionneuse ;
  la capture pleine page mobile peut montrer en noir les iframes WebGL sorties
  du viewport, alors que leur chargement dans le viewport a été contrôlé ;
- menu mobile testé à l'ouverture et à la fermeture par la touche Échap ;
- aperçus PDF testés : sélection des deux documents, fermeture par Échap,
  nettoyage de l'iframe et restitution du focus ;
- dix PDF contrôlés avec `pdfinfo`, pour un total de 80 pages ;
- sept archives ZIP ouvertes et vérifiées : deux PDF attendus dans chaque lot ;
- cinq modèles Sketchfab et le jeu intégrés; un message externe
  `MutationObserver` apparaît parfois au chargement des visionneuses, sans
  équivalent dans les scripts locaux ni effet visible constaté ;
- syntaxe JavaScript et `git diff --check` validés ;
- captures conservées dans `docs/qa/refonte-site-simple/`.

## Limites

- validation anatomique humaine des schémas, du talus isolé et du pied humain ;
- validation scientifique des interprétations sensibles des activités 3 et 4 ;
- contrôle juridique distinct des figures du dossier Un os, plusieurs vies ;
- conditions de republication des modèles Ozboneviz à confirmer ;
- auteur, source et licence du modèle 3D visible dans la capture du jeu à confirmer ;
- preuve d'acquisition ou autorisation pour tout usage du pied humain hors iframe ;
- test utilisateur final des aperçus PDF sur les navigateurs institutionnels ;
- dépendance au chargement externe de Sketchfab pour les visionneuses 3D ;
- traduction de la nouvelle architecture à traiter dans une mission séparée.
