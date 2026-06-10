# Registre des ressources manquantes et validations

Document de travail pour préparer les dépôts privés, les validations scientifiques et les futures intégrations publiques. Il ne télécharge aucune ressource et ne crée aucun faux média. Les chemins indiqués sont des emplacements de dépôt prévus dans `_private-inputs/`, qui reste ignoré par Git.

Le fichier `docs/registre-ressources-manquantes.csv` contient la version détaillée exploitable en tableur. Les tableaux ci-dessous sont une synthèse lisible par activité.

## Colonnes du registre détaillé

| Champ CSV | Fonction |
| --- | --- |
| `identifiant` | Code stable de suivi. |
| `activite` | Activité 1, 2, 3, 4 ou transversal. |
| `page_cible` | Fichier public ou ensemble concerné. |
| `emplacement` | Section, carte ou bloc précis. |
| `type` | Photo, schéma, modèle 3D, illustration, document ou métadonnées. |
| `sujet_precis` | Ce qui doit être représenté ou documenté. |
| `fonction_pedagogique` | Pourquoi la ressource est nécessaire. |
| `public` | Élève, enseignant, musée, famille ou approfondissement. |
| `caractere_obligatoire` | Obligatoire, recommandé ou facultatif. |
| `source_souhaitee` | Musée, université, publication, production interne ou source institutionnelle. |
| `exigences_scientifiques` | Orientation, échelle, espèce, période, contexte ou prudence attendue. |
| `exigences_techniques` | Format, résolution, fond, dimensions ou impression. |
| `metadonnees_necessaires` | Auteur, institution, inventaire, date, licence et modifications. |
| `statut_scientifique` | À trouver, à vérifier ou validé. |
| `statut_juridique` | À vérifier, autorisation demandée ou droits confirmés. |
| `statut_production` | Manquant, reçu, intégré ou testé. |
| `dossier_de_depot_attendu` | Chemin privé prévu. |
| `nom_fichier_recommande` | Nom en kebab-case. |
| `validation_humaine_requise` | Expertise attendue. |
| `notes` | Compléments utiles. |

## Règles de saisie

- Une ressource ne peut passer en statut `validée` que si l'auteur, la source, la licence, le droit de réutilisation, les éventuelles modifications et la validation scientifique sont documentés.
- Une image générée ou une illustration contemporaine ne doit jamais être présentée comme une source antique ou anatomique.
- Les modèles 3D doivent préciser l'objet représenté, l'échelle, l'orientation, la méthode de numérisation ou de production, les modifications et la licence.
- Les supports publics doivent garder une formulation prudente tant que les notices, images ou objets ne sont pas validés.

## Activité 1 - Trouver l'astragale

| ID | Ressource à obtenir | Usage public concerné | Dépôt privé prévu | Priorité | Validation attendue | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| A01-IMG-001 | Schéma ou photographie du pied humain montrant la région du tarse | `ressources/activite-01-fiche-reperage.html`, fiche classe et fiche musée | `_private-inputs/activite-01/images/` | Haute | Anatomie humaine, lisibilité élève, licence | À trouver |
| A01-IMG-002 | Vue isolée d'un astragale humain ou animal | Page centrale, corrigé, lexique illustré | `_private-inputs/activite-01/images/` | Haute | Identification de l'os, orientation, licence | À trouver |
| A01-IMG-003 | Membre postérieur de mouton ou squelette montrant le tarse | Fiche musée et planche de repérage | `_private-inputs/activite-01/images/` | Haute | Archéozoologie, espèce, échelle, licence | À trouver |
| A01-IMG-004 | Troisième mammifère de comparaison | Transfert et différenciation | `_private-inputs/activite-01/images/` | Moyenne | Choix cohérent avec les collections ou sources disponibles | À définir |
| A01-3D-001 | Modèle 3D d'astragale au format GLB ou GLTF | Bloc 3D réservé dans `ressources/activite-01-trouver-astragale.html` | `_private-inputs/activite-01/modeles-3d/` | Moyenne | Échelle, orientation, origine, droits, validation anatomique | À trouver |
| A01-DOC-001 | Notice de crédits et légendes validées | Sources, alt text, exports PDF futurs | `_private-inputs/activite-01/sources/` | Haute | Cohérence scientifique et juridique | À produire |

## Activité 2 - Associer un astragale à un animal

| ID | Ressource à obtenir | Usage public concerné | Dépôt privé prévu | Priorité | Validation attendue | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| A02-IMG-001 | Photographies Os A à D, avec échelle et orientation | Cartes astragales, grille d'association | `_private-inputs/activite-02/images/` | Haute | Espèce ou groupe, côté, orientation, échelle, licence | À trouver |
| A02-IMG-002 | Images des animaux A à D | Cartes animaux | `_private-inputs/activite-02/images/` | Haute | Correspondance avec les os, droit d'usage | À trouver |
| A02-IMG-003 | Squelettes ou pattes des animaux retenus | Vérification anatomique et corrigé | `_private-inputs/activite-02/images/` | Haute | Source institutionnelle ou collection validée | À trouver |
| A02-IMG-004 | Images de détail des surfaces articulaires | Niveau expert, médiation musée | `_private-inputs/activite-02/images/` | Moyenne | Lisibilité morphologique, légendes neutres | À produire ou trouver |
| A02-3D-001 | Modèles 3D éventuels des astragales comparés | Comparaison spatiale, manipulation numérique | `_private-inputs/activite-02/modeles-3d/` | Moyenne | GLB/GLTF, orientation, échelle, licence | Facultatif, à trouver |
| A02-DOC-001 | Fiche de critères distinctifs et limites d'identification | Guide enseignant, guide musée, corrigé | `_private-inputs/activite-02/sources/` | Haute | Relecture archéozoologique, prudence des critères | À produire |

## Activité 3 - Achille, talus et histoire transformée

| ID | Ressource à obtenir | Usage public concerné | Dépôt privé prévu | Priorité | Validation attendue | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| A03-IMG-001 | Image antique liée à la mort ou aux blessures d'Achille | Corpus d'images, cartes chronologiques | `_private-inputs/activite-03/images/` | Haute | Institution, objet, datation, lien stable, licence | À trouver |
| A03-IMG-002 | Représentation de Thétis et Achille dans une tradition plus tardive | Comparaison des versions | `_private-inputs/activite-03/images/` | Haute | Statut tardif explicite, source fiable, licence | À trouver |
| A03-IMG-003 | Illustration moderne du "talon d'Achille" | Comparaison critique, non-source antique | `_private-inputs/activite-03/images/` | Moyenne | Mention du statut moderne, droits | À trouver |
| A03-IMG-004 | Photographie d'un talus ou astragale documenté | Appui anatomique | `_private-inputs/activite-03/images/` | Haute | Anatomie, source, licence, orientation | À trouver |
| A03-SCH-001 | Schéma du talus humain | Fiche anatomique et questionnaire | `_private-inputs/activite-03/images/` | Haute | Validation anatomique, lisibilité, droits | À trouver |
| A03-DOC-001 | Dossier bibliographique sur Achille, `talus`, talon et tradition latine | Guide enseignant, corrigé, notes adultes | `_private-inputs/activite-03/sources/` | Haute | Sources savantes, formulation prudente | À produire |
| A03-ILL-001 | Illustrations contemporaines éventuelles pour album ou récit | Couverture ou support de narration, jamais comme preuve | `_private-inputs/activite-03/illustrations/` | Basse | Mention du statut contemporain ou généré | À produire seulement si demandé |
| A03-TXT-001 | Reformulations très courtes de textes ou traditions | Cartes chronologiques et questionnaire | `_private-inputs/activite-03/sources/` | Moyenne | Fidélité, niveau élève, références | À produire |

## Activité 4 - Un os, plusieurs vies

| ID | Ressource à obtenir | Usage public concerné | Dépôt privé prévu | Priorité | Validation attendue | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| A04-IMG-001 | Astragale animal non transformé | Carte objet A, comparaison anatomique | `_private-inputs/activite-04/images/` | Haute | Espèce, contexte, échelle, licence | À trouver |
| A04-IMG-002 | Astragale travaillé ou perforé | Carte objet B | `_private-inputs/activite-04/images/` | Haute | Notice de collection, interprétation prudente | À trouver |
| A04-IMG-003 | Ensemble d'astragales en contexte documenté | Carte objet C | `_private-inputs/activite-04/images/` | Haute | Contexte archéologique, datation, publication | À trouver |
| A04-IMG-004 | Astragale inscrit ou marqué | Carte objet D | `_private-inputs/activite-04/images/` | Haute | Inventaire, lecture, datation, source primaire | À trouver |
| A04-IMG-005 | Objet contemporain ou reproduction de comparaison | Carte objet E et prolongement créatif | `_private-inputs/activite-04/images/` | Moyenne | Statut contemporain explicite, droits | À documenter |
| A04-3D-001 | Modèle 3D éventuel d'un objet réel ou d'une reproduction | Médiation numérique, fiche observation | `_private-inputs/activite-04/modeles-3d/` | Basse | Échelle, orientation, original/reconstruction, licence | Facultatif, à trouver |
| A04-DOC-001 | Notices complètes des objets A à E | Guides adultes, corrigé, crédits | `_private-inputs/activite-04/sources/` | Haute | Institution, inventaire, datation, provenance, bibliographie | À produire |
| A04-TXT-001 | Fiches de prudence interprétative par objet | Cartes usages, contextes, grille d'interprétation | `_private-inputs/activite-04/sources/` | Haute | Niveau élève, limites claires, validation scientifique | À produire |

## Ressources transversales

| ID | Ressource à obtenir | Usage public concerné | Dépôt privé prévu | Priorité | Validation attendue | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| TR-DOC-001 | Charte de crédits et droits pour les images et modèles 3D | Section "Droits et sources" du site | `_private-inputs/scientifique/` | Haute | Licence, attribution, modifications, traçabilité | À produire |
| TR-IMG-001 | Dossier de provenance et droits du logo officiel | Page d'accueil et identité visuelle | `_private-inputs/identite-visuelle/` | Moyenne | Accord de réutilisation, auteur, date, usages autorisés | À documenter |

## Décompte de préparation

| Ensemble | Ressources à chercher ou produire |
| --- | ---: |
| Activité 1 | 6 |
| Activité 2 | 6 |
| Activité 3 | 8 |
| Activité 4 | 8 |
| Transversal | 2 |
| **Total** | **30** |
