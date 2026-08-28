# Revue de l'activité 1 - kit français v2

Date de revue : 4 août 2026
Branche : `content/kits-fr-scientifiques-v2`
Commit de départ : `f5cfcfc`

## Périmètre

La revue porte uniquement sur l'activité française 1, sa page publique, sa source HTML canonique, ses cinq PDF, ses cinq DOCX, ses médias retenus et les registres associés. Les activités 2 à 4 et les traductions n'ont pas été régénérées.

## Revues spécialisées

Les six agents ont été consultés en lecture seule avant modification, puis sur la version corrigée.

| Domaine | Problèmes initiaux traités | État après correction | Validation humaine restante |
| --- | --- | --- | --- |
| scientifique | terminologie, position talus/calcanéum/talon, portée du mouton, sources exactes | terminologie stabilisée et comparaison limitée à une région; schémas fondés sur BodyParts3D, FIPAT et NCBI | validation anatomique des annotations et validation comparative |
| pédagogie | révélation trop précoce, transfert peu visible, variantes temporelles insuffisamment opérationnelles | fiche neutre avant révélation, trace avant/après, formats 27/45/70 min explicités | test enseignant ou médiateur, puis test élève après validation |
| PER | portée MSN 27 trop large et composantes insuffisamment délimitées | contribution partielle à MSN 27; aucun objectif ni attente déclarés couverts entièrement | relecture par une personne compétente du PER |
| musée | contraintes matérielles et de circulation insuffisantes | scénario guidé de 38 min, matériel, ligne de vue, manipulation et solution de secours documentés | adaptation et test dans une institution |
| médias et droits | notices et transformations incomplètes; anciens médias encore accessibles | sources, crédits, licences et transformations consignés; médias incertains retirés du parcours recommandé | revue juridique et décision sur les anciens PDF WIP conservés |
| impression et accessibilité | textes alternatifs révélateurs, langue Word, tableaux Word sans en-têtes, réponse numérique ambiguë | textes alternatifs neutres, langue `fr-FR`, tableaux structurés, alternative Word explicite | ouverture Word native, technologies d'assistance et impression physique |

## PDF générés et inspectés

| Fichier | Pages | A4 | Texte sélectionnable | Signets | Inspection visuelle |
| --- | ---: | --- | --- | --- | --- |
| `activite-01-fiche-eleve.pdf` | 5 | oui | oui | oui | sans débordement; page de révélation séparée |
| `activite-01-guide-encadrement.pdf` | 7 | oui | oui | oui | tableaux et coupures cohérents |
| `activite-01-supports.pdf` | 5 | oui | oui | oui | images et légendes lisibles; niveaux de gris contrôlés |
| `activite-01-corrige.pdf` | 3 | oui | oui | oui | tableau complet sans coupure incohérente |
| `activite-01-kit-complet.pdf` | 24 | oui | oui | oui | aucune page blanche; sections complètes |

Contrôles automatisés communs : aucune page blanche, aucun caractère hors page, métadonnées présentes, aucun chemin local ou privé, aucun texte interdit et au moins un lien par document. Les planches de contact sont conservées dans `docs/qa/kits-fr-v2/activite-01/`.

La revue finale pré-commit a repris les **44 pages à taille réelle** : 5 pages de fiche, 7 pages de guide, 5 pages de supports, 3 pages de corrigé et 24 pages de kit complet. Les couvertures et certaines pages de transition sont volontairement aérées; aucun débordement, crédit illisible, image pixelisée, espace de réponse manifestement insuffisant ou révélation prématurée n'a été relevé. Les pages les plus denses sont les tableaux de progression, de médiation et de corrigé; elles restent lisibles sans coupure incohérente.

## DOCX générés et contrôlés

Les cinq DOCX sont des archives OOXML valides au format A4. Ils utilisent `fr-FR` dans les styles et valeurs par défaut, contiennent les champs `PAGE` et `NUMPAGES`, et ne contiennent ni chemin local ni mention `À calculer`. Les six images des supports et du kit disposent toutes d'un texte alternatif. L'audit d'accessibilité automatisé ne relève plus d'anomalie haute, moyenne ou basse; toutes les premières lignes de tableaux sont marquées comme en-têtes.

L'ouverture native et le rendu PNG des DOCX n'ont pas pu être réalisés : ni Microsoft Word ni LibreOffice ne sont disponibles dans l'environnement. La stabilité visuelle Word doit donc encore être contrôlée sur un poste équipé.

## Page web

La page `ressources/activite-01-trouver-astragale.html` a été testée en Chromium à 1440 × 1000 px et 390 × 844 px. Résultats : code HTTP 200, un seul `h1`, aucune erreur console, aucune requête échouée, aucun débordement horizontal, six images chargées avec texte alternatif, dix téléchargements PDF/DOCX accessibles et aucun lien interne cassé. Les captures desktop et mobile sont conservées dans le dossier QA de l'activité.

## Contrôles non réalisés

- impression physique couleur et niveaux de gris;
- ouverture et pagination natives dans Microsoft Word;
- test avec lecteur d'écran ou autres technologies d'assistance;
- test avec une personne enseignante ou médiatrice;
- test pilote avec des élèves;
- test dans une institution muséale;
- validation anatomique, comparative, PER et juridique humaines.

## Correction de cohérence pendant la revue finale

Le statut de la ressource `A1-PERM-008`, « Jambe de vache historique », a été harmonisé de `publiable sous conditions` vers `non déterminé` dans `docs/permissions/activite-01-permissions.csv`. Ce statut correspond désormais au registre médias, à son exclusion des livrables et à l'action encore requise : établir l'édition exacte et la preuve du domaine public. Aucun média ni contenu d'activité n'a été modifié à cette occasion.

La revue spécialisée a ensuite relevé et fait corriger trois autres problèmes de traçabilité :

- la référence FIPAT pointe désormais vers la partie 2 de *Terminologia Anatomica*, qui contient « Ossa pedis », `Talus` et `Calcaneus`;
- la notice NCBI `NBK557447` est attribuée à Robert MacGregor et Doug W. Byerly, avec sa mise à jour du 24 mai 2026;
- le registre général de crédits ne classe plus la jambe de vache parmi les ressources publiables et le manifeste contient une entrée explicite `à localiser` sans inventer de source.

Les registres transversaux des ressources manquantes indiquent maintenant que les prototypes BodyParts3D, les vues isolées, le support régional du mouton et la notice de crédits ont été produits pour le kit v2, tout en conservant les validations anatomique, comparative et juridique requises. Le générateur DOCX utilise aussi un vrai `Heading 1` pour la couverture du kit; le premier `Heading 2` n'apparaît donc plus avant le premier niveau 1.

Les pages d'entrée `acteurs/enseignants.html` et `acteurs/musees.html` dirigent maintenant l'activité 1 vers les cinq PDF et les cinq DOCX candidats. Les activités 2 à 4 conservent leurs liens HTML et PDF de travail; aucun de leurs contenus n'a été modifié. Les liens ont été contrôlés localement après cette correction.

La durée de la carte d'entrée musées a été alignée sur le scénario candidat de 38 minutes. L'ancienne mention d'une station de 10 à 20 minutes a été retirée, car cette variante courte n'est pas encore formalisée.

Après ces corrections, les cinq PDF et les cinq DOCX ont été régénérés depuis la source canonique. Les PDF conservent 44 pages A4 au total, sans page blanche ni caractère hors page. Le tableau de progression répète bien visuellement son en-tête sur sa deuxième page. Les planches de contact et les captures web desktop/mobile ont été régénérées.

## Décision de maturité

Niveau proposé : **3 renforcé, candidat pour test adulte**. L'activité dispose d'un scénario cohérent, de tous ses supports, d'un corrigé aligné, d'une variante musée exécutable et de livrables générés et inspectés. Elle n'est pas déclarée scientifiquement définitive et ne doit pas être testée avec des élèves avant les validations anatomique et pédagogique humaines.

## Recommandations non appliquées

Les anciens PDF WIP et anciennes sources localisées contenant Dundee, LeConte ou la jambe de vache ont été retirés du parcours français recommandé mais n'ont pas été supprimés, conformément à la consigne de conservation. Les versions EN, DE et IT conservent encore certaines anciennes mentions : elles sont explicitement hors du périmètre de ce lot français et devront être harmonisées avant toute diffusion multilingue globale. Le maintien des fichiers historiques déjà suivis doit faire l'objet d'une décision éditoriale et juridique humaine. L'absence de Word et de LibreOffice empêche aussi de conclure à une mise en page Word parfaitement stable.
