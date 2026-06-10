# Rapport - préparation des sources privées

Date de préparation : 2026-06-10

Intervention réalisée sans modification du contenu public du site. Aucun média n'a été téléchargé, généré ou intégré.

## Fichiers PER trouvés et inspectés

Les trois fichiers privés suivants ont été trouvés dans `_private-inputs/per/` et inspectés localement. Ils sont listés ci-dessous avec leur chemin relatif dans le dossier privé :

| Fichier | Pages | Statut |
| --- | ---: | --- |
| `per/PER MSN SHS.pdf` | 116 | Trouvé et inspecté |
| `per/PER AV.pdf` | 72 | Trouvé et inspecté |
| `per/PER L1.pdf` | 120 | Trouvé et inspecté |

Ces fichiers restent dans `_private-inputs/per/` et ne doivent pas être ajoutés à Git.

## Sections PER pertinentes repérées

- `PER MSN SHS.pdf` : démarche scientifique, observation, collecte de données, corps humain, squelette, locomotion, comparaison humain/animal, traces du passé, patrimoine, histoire, Antiquité, distinction entre mythe, représentation et réalité historique.
- `PER L1.pdf` : lecture de textes documentaires, organisation d'un document, production écrite documentaire, compréhension et production orales, présentation d'une recherche, discussion et interprétation.
- `PER AV.pdf` : observation d'objets, images, volumes et supports, description de formes et matériaux, références culturelles, production visuelle ou plastique, lien possible avec les traces et représentations.

Le détail est consigné dans `docs/per-index.md`.

## Dossiers créés pour les dépôts futurs

```text
_private-inputs/activite-01/images/
_private-inputs/activite-01/modeles-3d/
_private-inputs/activite-01/sources/
_private-inputs/activite-02/images/
_private-inputs/activite-02/modeles-3d/
_private-inputs/activite-02/sources/
_private-inputs/activite-03/images/
_private-inputs/activite-03/illustrations/
_private-inputs/activite-03/sources/
_private-inputs/activite-04/images/
_private-inputs/activite-04/modeles-3d/
_private-inputs/activite-04/sources/
```

Ces dossiers sont dans `_private-inputs/`, donc ignorés par Git.

## Documents créés ou mis à jour

- `docs/per-index.md`
- `docs/registre-ressources-manquantes.md`
- `docs/registre-ressources-manquantes.csv`
- `docs/decisions-editoriales.md`
- `docs/rapports/preparation-sources-privees.md`
- `_private-inputs/README.md`

Les documents de gouvernance déjà présents avant l'intervention restent inchangés par cette mission, sauf vérification de cohérence.

## Ressources manquantes inventoriées

| Ensemble | Nombre |
| --- | ---: |
| Activité 1 | 6 |
| Activité 2 | 6 |
| Activité 3 | 8 |
| Activité 4 | 8 |
| Transversal | 2 |
| **Total** | **30** |

Les besoins couvrent notamment les images anatomiques, photographies d'objets, modèles 3D éventuels, notices, métadonnées, crédits, sources scientifiques, critères de validation et dossiers de droits.

## Décisions éditoriales intégrées

Le document `docs/decisions-editoriales.md` formalise notamment :

- la mission scientifique et pédagogique du projet ;
- les quatre publics principaux : enseignement, musées, familles, approfondissement scientifique ;
- l'architecture des activités en niveaux d'accès ;
- la progression pédagogique : observer, décrire, hypothétiser, comparer, vérifier, conclure prudemment ;
- les règles de lien au PER, sans prétendre couvrir entièrement un objectif ;
- la distinction entre observation, hypothèse, interprétation et conclusion ;
- les catégories d'images et l'interdiction de confondre illustration, source antique et preuve scientifique ;
- l'usage limité des images générées ;
- la gestion des placeholders ;
- les règles sur modèles 3D, impression, accessibilité, ton rédactionnel, multilinguisme et statuts de publication ;
- le principe de gouvernance humaine pour toute validation scientifique, juridique, pédagogique ou PER.

## Décisions encore ouvertes

Restent à décider ou confirmer :

- licence du code ;
- licence des textes pédagogiques ;
- statut des traductions ;
- composition de l'équipe de validation ;
- politique de versionnement ;
- méthode de génération et d'archivage des PDF ;
- modèles 3D retenus ;
- espèces retenues pour l'activité 2 ;
- corpus historique final de l'activité 3 ;
- objets archéologiques finaux de l'activité 4 ;
- formulaire ou adresse de signalement ;
- niveau de publication des dossiers encore incomplets.

## Compétences et outils mobilisés

- Compétence locale `histoire-os-publisher` : règles de publication, gouvernance, validation et absence de modification publique.
- Compétence `pdf` : inspection locale des PDF et extraction de repères textuels avec les bibliothèques disponibles.
- `playwright` et `screenshot` : non exécutés, car la mission ne modifiait pas l'interface publique ni le rendu visuel.
- `imagegen` : non utilisé ; seuls les futurs besoins d'illustrations contemporaines ont été documentés.

## Difficultés rencontrées

- Les fichiers Markdown existants ont parfois été affichés avec un encodage dégradé dans PowerShell, sans empêcher leur exploitation.
- Le premier patch contextuel sur `_private-inputs/README.md` n'a pas accroché à cause de cette différence d'encodage affiché ; le fichier a été remplacé proprement par une version complète.
- Aucun média définitif n'a été ajouté, conformément à la consigne.

## Validations humaines nécessaires

- Validation pédagogique des correspondances PER.
- Validation anatomique des schémas et images du talus ou de l'astragale.
- Validation archéozoologique des espèces, critères distinctifs et comparaisons.
- Validation historique et philologique des formulations sur Achille, `talus`, astragale et talon.
- Validation archéologique des objets de l'activité 4.
- Validation juridique des droits d'image, licences, crédits et modèles 3D.
- Validation d'impression A4 avant tout statut "prêt à imprimer".

## État de publication

La mission prépare le socle de suivi. Elle ne rend aucune activité "prête à utiliser" et ne remplace aucun placeholder existant.
