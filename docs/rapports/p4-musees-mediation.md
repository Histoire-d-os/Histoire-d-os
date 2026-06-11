# P4 — Parcours musées et médiation

Date : 2026-06-11

## Objectif

Renforcer le parcours destiné aux musées, médiateur·rices et institutions culturelles sans créer de nouveau contenu scientifique non sourcé.

Le parcours doit aider à :

- choisir une activité selon les collections disponibles ;
- trouver rapidement les supports musée existants ;
- préparer l'espace, la circulation et les règles de manipulation ;
- adapter une médiation avec ou sans objet manipulable ;
- conserver les statuts de validation visibles.

## Fichiers créés

- `acteurs/musees-preparation.html` : guide pratique de préparation d'une médiation.
- `acteurs/musees-matrice.html` : matrice d'adaptation selon les collections et supports disponibles.
- `docs/qa/p4-musees-mediation/` : captures et résumé JSON de test navigateur.

## Fichiers modifiés

- `acteurs/musees.html` : transformation en tableau de bord rapide pour choisir une activité, préparer une médiation et imprimer les supports existants.
- `ressources/activite-01-trouver-astragale.html` : ajout de liens vers la préparation musée et la matrice.
- `ressources/activite-02-associer-astragale-animal.html` : ajout de liens vers la préparation musée et la matrice.
- `ressources/activite-03-achille-histoire-transformee.html` : ajout de liens vers la préparation musée et la matrice.
- `ressources/activite-04-un-os-plusieurs-vies.html` : ajout de liens vers la préparation musée et la matrice.
- `styles.css` : composants P4 pour formats d'atelier, checklist, procédure de médiation, matrice, relances et avertissement manipulation.

## Structure des pages musée

### Tableau de bord

La page `acteurs/musees.html` propose :

- trois accès rapides ;
- un avertissement permanent sur la manipulation ;
- quatre cartes d'activités avec question directrice, collection utile, durée, taille de groupe, matériel minimal, version sans manipulation, statut et liens existants ;
- un tableau des supports musée existants ;
- un rappel des validations locales nécessaires.

### Préparation

La page `acteurs/musees-preparation.html` contient :

- une introduction courte ;
- un tableau de choix selon collections disponibles ;
- trois formats d'atelier : station, atelier guidé, atelier + production ;
- un encadré de règles de manipulation et conservation ;
- une checklist imprimable ;
- une procédure en 7 étapes ;
- des relances classées ;
- des adaptations d'accessibilité ;
- un bloc sur ce qui reste à adapter par chaque institution.

### Matrice

La page `acteurs/musees-matrice.html` contient :

- une matrice croisant ressources disponibles et activités 1 à 4 ;
- une section pour les musées sans astragale visible ;
- une section pour objets sensibles ou non manipulables ;
- une explicitation des niveaux "recommandé", "possible", "à adapter" et "non prioritaire".

## Procédures et règles ajoutées

La procédure de médiation suit 7 étapes :

1. accroche ;
2. observation silencieuse ;
3. description collective ;
4. hypothèses ;
5. indices ;
6. vérification ou apport de contexte ;
7. conclusion prudente.

Règle visible :

> Seuls les objets explicitement intégrés à une collection pédagogique manipulable peuvent être touchés.

Les pages rappellent aussi de ne pas toucher les objets patrimoniaux, ne pas poser les fiches sur les socles, utiliser des crayons si nécessaire, manipuler les répliques au-dessus d'un plateau et prévoir une alternative sans manipulation.

## Tests effectués

Playwright CLI n'a pas pu être utilisé car `npx` échoue localement avec un module npm manquant. Le test a donc été réalisé avec Chrome DevTools en mode headless, comme pour P2 et P3.

Pages testées sous le préfixe local `/Histoire-d-os/` :

- `index.html`
- `acteurs/musees.html`
- `acteurs/musees-preparation.html`
- `acteurs/musees-matrice.html`
- `ressources/activite-01-trouver-astragale.html`
- `ressources/activite-04-un-os-plusieurs-vies.html`

Résultats :

- aucun lien PDF public détecté ;
- aucun lien vers `tmp/`, `_private-inputs/`, `file:///` ou chemin Windows absolu ;
- aucun lien interne P4 absent ;
- aucun débordement horizontal détecté ;
- une seule balise `h1` par page testée ;
- les tableaux testés ont des captions ;
- les boutons d'impression déclenchent `window.print()` ;
- le menu mobile s'ouvre et se ferme avec Échap ;
- le lien d'évitement pointe vers une cible existante ;
- pas d'erreur console ni de ressource 404.

## Impression A4

Les deux nouvelles pages ont été testées en média `print`.

| Page | Pages PDF temporaires | Format | Résultat |
| --- | ---: | --- | --- |
| `acteurs/musees-preparation.html` | 9 | A4 | Actions et header masqués, statuts et encadrés visibles, pas de débordement horizontal. |
| `acteurs/musees-matrice.html` | 4 | A4 | Actions et header masqués, matrice lisible, pas de débordement horizontal. |

Les PDFs temporaires ont été générés dans `tmp/pdfs/` et ne doivent pas être suivis par Git.

## Captures produites

- `docs/qa/p4-musees-mediation/home-prefix-desktop.png`
- `docs/qa/p4-musees-mediation/musees-desktop.png`
- `docs/qa/p4-musees-mediation/musees-mobile.png`
- `docs/qa/p4-musees-mediation/musees-preparation-desktop.png`
- `docs/qa/p4-musees-mediation/musees-preparation-mobile.png`
- `docs/qa/p4-musees-mediation/musees-preparation-print.png`
- `docs/qa/p4-musees-mediation/musees-matrice-desktop.png`
- `docs/qa/p4-musees-mediation/musees-matrice-mobile.png`
- `docs/qa/p4-musees-mediation/musees-matrice-print.png`
- `docs/qa/p4-musees-mediation/activity-01-museum-links.png`
- `docs/qa/p4-musees-mediation/activity-04-museum-links.png`
- `docs/qa/p4-musees-mediation/browser-summary.json`

## Limites et validations humaines

- Les règles de manipulation doivent être validées par chaque institution.
- Les objets, notices, photographies, crédits et droits restent à confirmer.
- Les supports de l'activité 2 doivent encore être validés archéozoologiquement.
- Le schéma du talus et les corpus de l'activité 3 restent à relire humainement.
- Les objets et interprétations de l'activité 4 restent à valider scientifiquement.
- Les impressions PDF headless ne remplacent pas un test réel sur imprimante et en conditions de visite.
- Les langues, adaptations d'accessibilité et durées doivent être ajustées localement.
