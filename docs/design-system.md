# Design system léger

Ce document fixe les conventions publiques du site **Histoires d'os**. Il complète le workflow éditorial et la checklist de validation sans remplacer les validations scientifiques, juridiques et pédagogiques.

## Intention visuelle

- Palette archéologique sobre : os, calcaire, ocre, terre cuite, patine verte, encre.
- Interfaces utiles avant décoratives : cartes simples, rayons de 8 px, ombres discrètes, pas de doublons visuels.
- Les images pédagogiques contemporaines ne sont jamais présentées comme sources.
- Les ressources en prototype gardent un statut visible jusqu'à validation.

## Couleurs principales

| Jeton CSS | Usage |
| --- | --- |
| `--bone` | fonds secondaires chauds |
| `--limestone` | fond général du site |
| `--chalk` | cartes et surfaces de lecture |
| `--ochre` | actions et alertes d'impression |
| `--terracotta` | accents, titres de tableaux, prototypes |
| `--patina` / `--patina-dark` | validation, navigation, focus |
| `--ink` | texte principal |
| `--smoke` | texte secondaire |
| `--line` | bordures |

Les couleurs ne portent jamais seules une information : chaque statut doit rester textuel.

## Statuts

Les statuts utilisent `.status-note` avec un attribut `data-status` quand le niveau est connu.

| Variante | Valeur `data-status` | Sens |
| --- | --- | --- |
| Prototype | `prototype` | contenu structuré mais non validé complètement |
| En cours | `en-cours` | contenu disponible, stabilisation en cours |
| Visuels manquants | `visuels-manquants` | images, schémas ou modèles à produire ou valider |
| Droits | `droits` | crédits, licences ou autorisations à confirmer |
| Impression | `impression` | rendu A4 à tester ou à relire |
| Validation scientifique | `validation-scientifique` | corpus, formulation ou expertise à confirmer |

Une ressource ne doit pas être marquée comme prête à utiliser tant que sources, droits, impression et relecture humaine ne sont pas documentés.

## Actions document

Les pages de ressources réutilisent `ressources/document-actions.js`.

Convention :

- bouton ou lien de retour ;
- bouton `data-print-document` qui appelle `window.print()` ;
- bandeau automatique `Statut`, `Version`, `Date` ;
- bloc caché à l'impression avec `.no-print`.

Les pages importantes peuvent préciser :

```html
<nav
  class="document-actions no-print"
  data-document-status="prototype avancé, impression A4 à confirmer"
  data-document-version="v0.2"
  data-document-date="2026-06-11"
>
```

## Impression A4

Le CSS d'impression doit conserver :

- format A4 avec marges de 12 mm ;
- fond blanc et couleurs lisibles en niveaux de gris ;
- menus, actions, boutons et liens d'évitement masqués ;
- cartes, encadrés, tableaux et pages de récit non coupés quand possible ;
- titres solidaires du contenu suivant ;
- tableaux en largeur 100 %, sans largeur minimale en impression ;
- URLs longues limitées aux blocs de sources.

Les PDF générés pour test restent temporaires dans `tmp/pdfs/` et ne sont pas publiés.

## Accessibilité

- Chaque page publique structurante doit proposer un lien d'évitement vers `#main-content`.
- Les focus visibles utilisent un contour perceptible, pas seulement une couleur de fond.
- Les menus au clavier se ferment avec Échap et rendent le focus au bouton d'ouverture.
- Les onglets acceptent les flèches, `Home` et `End`.
- Les tableaux portent une légende quand ils structurent une activité.
- Les statuts sont lisibles en texte, même sans couleur.

## Validation avant publication

Avant tout commit de contenu public :

- vérifier les liens internes ;
- lancer les contrôles syntaxiques ;
- tester les impressions critiques ;
- confirmer que `_private-inputs/`, `tmp/` et les PDF privés ne sont pas suivis ;
- documenter les validations humaines restantes dans le rapport de mission.
