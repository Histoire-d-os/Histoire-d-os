# Intégration des PDF WIP

Date de contrôle : 23 juin 2026.

## Résumé

Vingt PDF de travail ont été générés depuis les vingt pages HTML présentes dans
`ressources/print/`. Le lot représente 48 pages A4 et environ 10,24 Mo.

Chaque PDF porte la mention :

> Version de travail — test interne — relecture humaine nécessaire

Les PDF complètent les versions HTML imprimables. Ils ne les remplacent pas et
ne constituent pas des versions finales.

## PDF générés

| Activité | Document | Pages | Contrôle |
| --- | --- | ---: | --- |
| 1 | `activite-01-fiche-eleve-WIP.pdf` | 2 | A4, lisible, crédits conservés |
| 1 | `activite-01-guide-enseignant-WIP.pdf` | 3 | A4, lisible, crédits conservés |
| 1 | `activite-01-support-images-WIP.pdf` | 2 | A4, images et crédits conservés |
| 1 | `activite-01-corrige-WIP.pdf` | 2 | A4, lisible |
| 2 | `activite-02-fiche-eleve-WIP.pdf` | 3 | A4, lisible |
| 2 | `activite-02-guide-enseignant-WIP.pdf` | 3 | A4, lisible, traçabilité conservée |
| 2 | `activite-02-support-images-WIP.pdf` | 3 | A4, images et crédits conservés |
| 2 | `activite-02-cartes-animaux-WIP.pdf` | 2 | A4, attributions conservées |
| 2 | `activite-02-cartes-os-WIP.pdf` | 2 | A4, statut provisoire visible |
| 2 | `activite-02-corrige-WIP.pdf` | 2 | A4, prudence et traçabilité conservées |
| 3 | `activite-03-fiche-eleve-WIP.pdf` | 2 | A4, lisible |
| 3 | `activite-03-guide-enseignant-WIP.pdf` | 2 | A4, sources adultes conservées |
| 3 | `activite-03-support-images-WIP.pdf` | 3 | A4, statuts et crédits conservés |
| 3 | `activite-03-cartes-chronologie-WIP.pdf` | 3 | A4, traçabilité conservée |
| 3 | `activite-03-corrige-WIP.pdf` | 2 | A4, prudence et traçabilité conservées |
| 4 | `activite-04-fiche-eleve-WIP.pdf` | 2 | A4, statut de prototype conservé |
| 4 | `activite-04-guide-enseignant-WIP.pdf` | 3 | A4, lisible |
| 4 | `activite-04-cartes-objets-WIP.pdf` | 3 | A4, objets A à E signalés comme provisoires |
| 4 | `activite-04-corrige-WIP.pdf` | 2 | A4, corrigé prudent |
| 4 | `activite-04-support-images-WIP.pdf` | 2 | A4, placeholders visibles |

Le dossier `ressources/pdf-wip/` contient aussi un `README.md` qui définit
l'usage interne et le statut non définitif du lot.

## Pages activités modifiées

Les quatre pages d'activité conservent leurs liens vers les versions HTML et
ajoutent un bloc secondaire « PDF de travail » :

- activité 1 : 4 PDF ;
- activité 2 : 6 PDF ;
- activité 3 : 5 PDF ;
- activité 4 : 5 PDF.

Chaque bloc rappelle que les fichiers servent aux tests d'impression et de
relecture et qu'ils ne sont pas encore validés pour une diffusion finale.

## Intégration dans Supports en ligne

La page `ressources/supports-en-ligne.html` conserve les familles de supports
existantes en premier. Une tuile secondaire « Fiches imprimables — toutes
activités » mène à la section `#fiches-imprimables`.

Cette section regroupe, activité par activité :

- les pages HTML imprimables ;
- les liens PDF clairement identifiés comme « PDF WIP ».

Les modèles 3D restent signalés comme en cours de vérification et non publiés.
Aucune entrée PDF n'a été ajoutée au menu principal.

## Vérification des PDF

Les vingt PDF ont été ouverts, analysés et rendus en images page par page.

- format : A4 portrait pour 20 fichiers sur 20 ;
- marquage WIP : présent dans 20 fichiers sur 20 ;
- pages blanches : aucune ;
- boutons et liens de retour web : absents à l'impression ;
- images manquantes : aucune ;
- chevauchement ou coupe incohérente observée : aucun ;
- marges minimales : conformes à la règle d'impression de 12 mm ;
- crédits : conservés auprès des médias ; les documents principalement
  textuels conservent leur footer ou leur ligne de traçabilité lorsqu'elle
  existe.

Les quatre planches de contact dans `docs/qa/pdf-wip-integration/` montrent les
48 pages contrôlées.

## Problèmes observés

La première génération ajoutait une page blanche au support images de
l'activité 1 et une page presque vide au guide enseignant de l'activité 3. La
mention WIP a été compactée et la variante d'impression compacte existante a
été appliquée à ces deux documents. La seconde génération ne contient plus de
page blanche ni de page de footer isolée.

Le serveur local de test a émis une erreur 404 pour `/favicon.ico`. Cette
requête annexe automatique du navigateur n'affecte aucune page, image, fiche ou
PDF contrôlé.

## Points à relire humainement

- imprimer physiquement un exemplaire de chaque famille de document ;
- confirmer la lisibilité pour les élèves de 8 à 12 ans ;
- relire les consignes, corrigés et guides avec les responsables pédagogiques ;
- confirmer les formulations anatomiques, historiques et archéologiques ;
- vérifier une dernière fois les notices de droits et les attributions ;
- compléter les os A à D de l'activité 2, le corpus antique de l'activité 3 et
  les objets A à E de l'activité 4.

## Conditions avant publication de PDF définitifs

1. validation scientifique et pédagogique humaine ;
2. confirmation des droits, licences et crédits de chaque média ;
3. remplacement des corpus et objets encore provisoires ;
4. essai d'impression réel en couleur et en niveaux de gris ;
5. relecture d'accessibilité et de lisibilité ;
6. retrait de la mention WIP seulement après ces validations ;
7. nouvelle génération et nouveau contrôle intégral du lot final.
