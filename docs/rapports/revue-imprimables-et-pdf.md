# Revue des imprimables et opportunité PDF

Date de la revue : 2026-06-23

## Résumé exécutif

- 20 documents HTML de `ressources/print/` ont été contrôlés sur écran large, sur mobile et avec les styles d'impression.
- 31 images ont été chargées : aucune image cassée et aucun attribut `alt` manquant.
- Aucun lien local absent, chemin Windows, lien `file:///`, lien vers `tmp/` ou lien vers `_private-inputs/` n'a été trouvé.
- Chaque page possède un titre, un seul `h1`, un retour vers l'activité et un bouton d'impression.
- Les retours, boutons et métadonnées réservées à l'écran disparaissent correctement à l'impression.
- 16 PDF de contrôle ont été générés dans `tmp/pdf-preview/`, soit 39 pages A4 portrait examinées.
- Aucun chevauchement, texte coupé, média tronqué ou page blanche n'a été relevé dans les PDF examinés.
- Quatre documents trop dépendants de ressources manquantes n'ont volontairement pas reçu de PDF de contrôle.
- Aucun PDF public n'a été créé.
- Aucun document n'est publiable comme PDF définitif au sens strict tant que son statut reste « pilote », « prototype » ou dépend d'un corpus à compléter. Les quatre documents de l'activité 1 sont les candidats les plus proches d'une publication après relecture humaine.

Les captures de contrôle sont conservées dans `docs/qa/imprimables-review/`. Elles regroupent les rendus desktop, mobile et les pages des PDF temporaires par activité.

## Documents HTML testés

| Document | Écran et mobile | Impression A4 | Statut observé |
| --- | --- | --- | --- |
| `activite-01-corrige.html` | Lisible, sans débordement | Propre, 2 pages | Corrigé pilote |
| `activite-01-fiche-eleve.html` | Lisible, espaces de réponse adaptés | Propre, 2 pages | Fiche pilote |
| `activite-01-guide-enseignant.html` | Lisible, sections bien hiérarchisées | Propre, 3 pages | Guide pilote |
| `activite-01-support-images.html` | Images et crédits lisibles | Propre, 2 pages | Support pilote |
| `activite-02-cartes-animaux.html` | Cartes lisibles et empilées sur mobile | Propre, 2 pages | Cartes publiables, corpus d'os à valider |
| `activite-02-cartes-os.html` | Placeholders explicites | Émulation d'impression correcte, pas de PDF conservé | Images d'os non publiées |
| `activite-02-corrige.html` | Tableau à défilement horizontal interne sur mobile | Émulation d'impression correcte, pas de PDF conservé | Aucune association définitive |
| `activite-02-fiche-eleve.html` | Tableau à défilement horizontal interne sur mobile | Propre, 3 pages | Cartes A-D à compléter |
| `activite-02-guide-enseignant.html` | Lisible et prudent | Propre, 3 pages | Corpus d'os à valider |
| `activite-02-support-images.html` | Images, légendes et prolongement lisibles | Propre, 3 pages | Support pilote |
| `activite-03-cartes-chronologie.html` | Cartes lisibles | Propre, 3 pages, pagination peu dense | Corpus antique public à compléter |
| `activite-03-corrige.html` | Lisible, tableau contenu | Propre, 2 pages | Relecture scientifique à confirmer |
| `activite-03-fiche-eleve.html` | Tableau à défilement horizontal interne sur mobile | Propre, 2 pages | Corpus antique public à compléter |
| `activite-03-guide-enseignant.html` | Lisible, nuances et sources conservées | Propre, 2 pages | Formulations historiques à relire |
| `activite-03-support-images.html` | Statuts des images lisibles sur mobile | Propre, 3 pages | Corpus antique public à compléter |
| `activite-04-cartes-objets.html` | Placeholders A-E explicites | Émulation d'impression correcte, pas de PDF conservé | Images manquantes |
| `activite-04-corrige.html` | Tableau à défilement horizontal interne sur mobile | Propre, 2 pages | Validation scientifique nécessaire |
| `activite-04-fiche-eleve.html` | Lisible, espaces de réponse suffisants | Propre, 2 pages | Objets réels à valider |
| `activite-04-guide-enseignant.html` | Lisible, prudence interprétative visible | Propre, 3 pages | Corpus d'objets à valider |
| `activite-04-support-images.html` | Placeholders et avertissement explicites | Émulation d'impression correcte, pas de PDF conservé | Support sans médias |

Les tableaux larges restent contenus dans la page sur mobile grâce à un défilement horizontal interne. Ce comportement évite le débordement global, mais une indication visuelle de défilement pourrait être ajoutée ultérieurement si ces tableaux sont destinés à un usage mobile fréquent.

## Résultats des tests A4

- Les 16 PDF contrôlés mesurent tous environ 595 × 842 points, soit un A4 portrait.
- Les marges visibles sont régulières et proches des 12 mm demandés lors de l'export.
- Aucun bouton « Imprimer » ni lien « Retour à l'activité » n'apparaît dans les PDF.
- Les crédits ou attributions restent visibles sous les images ou dans les sections de sources.
- Les tableaux des fiches élèves et corrigés tiennent dans la largeur A4.
- Les espaces de réponse des fiches élèves restent exploitables.
- Les couleurs ne portent pas seules l'information : titres, bordures, libellés et statuts restent compréhensibles en niveaux de gris.
- Les pages contenant des images anciennes ou contemporaines conservent leurs légendes de statut.
- Aucune page blanche n'a été générée.

Les défauts observés sont mineurs :

- quelques dernières pages sont peu remplies ;
- les cartes chronologiques de l'activité 3 utilisent une page de titre presque vide ;
- certains documents de 3 pages pourraient être repaginés avant une publication définitive ;
- un test sur une imprimante réelle en noir et blanc reste nécessaire.

## PDF preview générés

Les fichiers suivants ont été générés uniquement dans `tmp/pdf-preview/` :

- `activite-01-corrige-preview.pdf`
- `activite-01-fiche-eleve-preview.pdf`
- `activite-01-guide-enseignant-preview.pdf`
- `activite-01-support-images-preview.pdf`
- `activite-02-cartes-animaux-preview.pdf`
- `activite-02-fiche-eleve-preview.pdf`
- `activite-02-guide-enseignant-preview.pdf`
- `activite-02-support-images-preview.pdf`
- `activite-03-cartes-chronologie-preview.pdf`
- `activite-03-corrige-preview.pdf`
- `activite-03-fiche-eleve-preview.pdf`
- `activite-03-guide-enseignant-preview.pdf`
- `activite-03-support-images-preview.pdf`
- `activite-04-corrige-preview.pdf`
- `activite-04-fiche-eleve-preview.pdf`
- `activite-04-guide-enseignant-preview.pdf`

PDF volontairement non générés :

- `activite-02-cartes-os.html` : photographies A-D absentes ;
- `activite-02-corrige.html` : associations A-D non validées ;
- `activite-04-cartes-objets.html` : objets A-E absents ;
- `activite-04-support-images.html` : aucun média validé intégré.

## Résultats de review PDF

| PDF temporaire | Pages | Résultat de la revue |
| --- | ---: | --- |
| `activite-01-corrige-preview.pdf` | 2 | Marges et hiérarchie propres ; attribution de l'image visible ; page 2 peu remplie. |
| `activite-01-fiche-eleve-preview.pdf` | 2 | Images nettes, légendes lisibles, espaces de réponse suffisants, crédits visibles. |
| `activite-01-guide-enseignant-preview.pdf` | 3 | Lecture confortable ; listes non coupées ; crédits sur la dernière page, qui reste peu dense. |
| `activite-01-support-images-preview.pdf` | 2 | Images non coupées ; légendes et crédits lisibles ; planche ancienne correctement qualifiée. |
| `activite-02-cartes-animaux-preview.pdf` | 2 | Cartes nettes et découpables ; attributions visibles ; seconde page peu remplie. |
| `activite-02-fiche-eleve-preview.pdf` | 3 | Tableau et zones de réponse propres ; cartes animales lisibles ; absence des os A-D clairement signalée. |
| `activite-02-guide-enseignant-preview.pdf` | 3 | Déroulement et limites lisibles ; traçabilité visible ; dernière page peu dense. |
| `activite-02-support-images-preview.pdf` | 3 | Images et crédits nets ; la chauve-souris reste un prolongement ; troisième page peu dense mais cohérente. |
| `activite-03-cartes-chronologie-preview.pdf` | 3 | Cartes et règle du jeu lisibles ; aucune coupure ; page de titre trop peu remplie pour une version définitive. |
| `activite-03-corrige-preview.pdf` | 2 | Tableau bien contenu ; nuances préservées ; seconde page peu remplie. |
| `activite-03-fiche-eleve-preview.pdf` | 2 | Tableau de tri lisible ; espaces de conclusion suffisants ; avertissement sur les images conservé. |
| `activite-03-guide-enseignant-preview.pdf` | 2 | Bonne hiérarchie ; sources adultes visibles ; aucune affirmation renforcée par l'export. |
| `activite-03-support-images-preview.pdf` | 3 | Images nettes et non coupées ; tradition tardive, œuvres modernes et appui anatomique restent séparés. |
| `activite-04-corrige-preview.pdf` | 2 | Tableau propre ; prudence interprétative visible ; seconde page peu remplie. |
| `activite-04-fiche-eleve-preview.pdf` | 2 | Tableau et espaces de réponse utilisables ; statut provisoire et traçabilité visibles. |
| `activite-04-guide-enseignant-preview.pdf` | 3 | Déroulement, relances et formulations prudentes lisibles ; sources visibles sur la dernière page. |

La revue visuelle a été faite à partir de rendus PNG de chaque page PDF. Les contrôles automatisés ont confirmé le nombre de pages, le format A4, l'absence de page blanche et l'absence des contrôles web.

## Problèmes bloquants

Il n'existe pas de problème bloquant de mise en page.

Les blocages avant publication de PDF définitifs sont éditoriaux, scientifiques ou documentaires :

1. activité 1 : relecture humaine scientifique et pédagogique finale ;
2. activité 2 : photographies et identification du corpus d'astragales A-D ;
3. activité 3 : corpus antique public et relecture des formulations historiques ;
4. activité 4 : objets A-E, notices, droits et validation des interprétations ;
5. toutes les activités : essai physique sur imprimante A4, notamment en noir et blanc.

## Corrections rapides recommandées

Aucune correction du site public n'a été jugée indispensable pendant cette mission.

Avant de publier des PDF, il serait utile de :

- réduire les pages très peu remplies, sans compacter les fiches élèves ;
- supprimer la page de titre isolée des cartes chronologiques de l'activité 3 ou la fusionner avec le début des cartes ;
- décider si les tableaux mobiles doivent afficher une courte indication « faire défiler horizontalement » ;
- effectuer un tirage réel en niveaux de gris ;
- remplacer le statut « pilote » par un statut validé seulement après relecture humaine.

Une requête de favicon a produit une erreur 404 sans effet sur les documents, leurs images ou leurs liens. Elle n'est pas un défaut d'impression.

## Documents prêts pour PDF public

Aucun document n'est prêt au sens éditorial strict, car tous les candidats gardent un statut pilote, prototype ou une dépendance explicite à un corpus manquant.

Les candidats techniquement les plus proches sont :

1. les quatre documents de l'activité 1 ;
2. les cartes animaux de l'activité 2, comme support autonome et non comme preuve d'identification ;
3. les guides enseignants, une fois les formulations et corpus validés.

### Décision par imprimable

| Document HTML | PDF public recommandé | Raison et conditions avant publication | Nom public recommandé |
| --- | --- | --- | --- |
| `activite-01-corrige.html` | Plus tard | Rendu propre ; confirmer la relecture humaine et le statut du corrigé. | `activite-01-corrige.pdf` |
| `activite-01-fiche-eleve.html` | Plus tard | Rendu propre ; valider l'usage 8-12 ans et le tirage noir et blanc. | `activite-01-fiche-eleve.pdf` |
| `activite-01-guide-enseignant.html` | Plus tard | Rendu propre ; terminer la relecture scientifique et pédagogique. | `activite-01-guide-enseignant.pdf` |
| `activite-01-support-images.html` | Plus tard | Crédits présents ; confirmer les légendes et le contraste en impression réelle. | `activite-01-support-images.pdf` |
| `activite-02-cartes-animaux.html` | Plus tard | Support autonome propre ; publier seulement avec la mention qu'il ne prouve pas l'identification d'un os. | `activite-02-cartes-animaux.pdf` |
| `activite-02-cartes-os.html` | Non pour la version actuelle | Les images A-D sont absentes. Générer un nouveau PDF après intégration et validation du corpus. | `activite-02-cartes-os.pdf` |
| `activite-02-corrige.html` | Non pour la version actuelle | Aucune association A-D n'est validée ; le document reste une grille de raisonnement. | `activite-02-corrige.pdf` |
| `activite-02-fiche-eleve.html` | Plus tard | Mise en page propre, mais la fiche dépend des cartes A-D manquantes. | `activite-02-fiche-eleve.pdf` |
| `activite-02-guide-enseignant.html` | Plus tard | Le guide reste utile, mais le corpus et les réponses doivent être validés. | `activite-02-guide-enseignant.pdf` |
| `activite-02-support-images.html` | Plus tard | Images et crédits propres ; confirmer la sélection finale du corpus et le rôle des supports adultes. | `activite-02-support-images.pdf` |
| `activite-03-cartes-chronologie.html` | Plus tard | Corpus antique incomplet et pagination à resserrer. | `activite-03-cartes-chronologie.pdf` |
| `activite-03-corrige.html` | Plus tard | Rendu propre ; relecture scientifique et corpus antique encore nécessaires. | `activite-03-corrige.pdf` |
| `activite-03-fiche-eleve.html` | Plus tard | Rendu propre ; valider la compréhension des catégories par des élèves. | `activite-03-fiche-eleve.pdf` |
| `activite-03-guide-enseignant.html` | Plus tard | Sources visibles ; relire les formulations historiques avant publication définitive. | `activite-03-guide-enseignant.pdf` |
| `activite-03-support-images.html` | Plus tard | Statuts des images clairs ; compléter le corpus antique et confirmer les légendes. | `activite-03-support-images.pdf` |
| `activite-04-cartes-objets.html` | Non pour la version actuelle | Les objets A-E et leurs notices sont absents. | `activite-04-cartes-objets.pdf` |
| `activite-04-corrige.html` | Plus tard | Rendu propre ; le corrigé ne peut devenir définitif avant validation des objets. | `activite-04-corrige.pdf` |
| `activite-04-fiche-eleve.html` | Plus tard | Fiche méthodologique utilisable ; corpus réel et test pédagogique encore requis. | `activite-04-fiche-eleve.pdf` |
| `activite-04-guide-enseignant.html` | Plus tard | Guide prudent et lisible ; valider le corpus, les notices et les interprétations. | `activite-04-guide-enseignant.pdf` |
| `activite-04-support-images.html` | Non pour la version actuelle | Aucun média validé n'est intégré. | `activite-04-support-images.pdf` |

## Documents à garder en HTML pour l'instant

Tous les documents de `ressources/print/` doivent rester accessibles en HTML, qui demeure la version de référence modifiable et immédiatement imprimable.

Les documents suivants gagnent particulièrement à rester en HTML tant que leur corpus évolue :

- cartes d'os et corrigé de l'activité 2 ;
- cartes chronologiques et support images de l'activité 3 ;
- cartes objets, corrigé et support images de l'activité 4.

Les pages principales des activités, `supports-en-ligne.html`, le récit d'Achille et les guides de parcours ne doivent pas être transformés automatiquement en PDF : leur navigation et leur fonction d'orientation sont mieux servies en HTML.

## Documents anciens à archiver, rediriger ou remplacer

Les pages actuelles des activités pointent désormais vers `ressources/print/`. Les anciens documents ci-dessous ne doivent pas être supprimés sans carte de redirection, car certains restent reliés depuis d'autres pages.

### Encore utiles comme contenus spécialisés

- `document-mission-astragale.html`
- `document-musee-ou-est-l-os.html`
- `document-vrai-prudent-verifier.html`
- `recit-achille-astragale.html`
- les fiches et guides spécifiquement destinés aux musées ;
- les exemples de production, albums et prolongements lorsqu'ils apportent un contenu absent des nouveaux imprimables.

### Probablement remplacés par les imprimables actuels

- activité 1 : `activite-01-corrige-evaluation.html`, `activite-01-fiche-eleve-classe.html`, `activite-01-fiche-reperage.html` ;
- activité 2 : `activite-02-cartes-animaux.html`, `activite-02-cartes-astragales.html`, `activite-02-corrige-evaluation.html`, `activite-02-fiche-eleve-classe.html`, `activite-02-grille-association.html`, `activite-02-guide-enseignant.html` ;
- activité 3 : `activite-03-cartes-chronologiques.html`, `activite-03-corrige-evaluation.html`, `activite-03-fiche-eleve-classe.html`, `activite-03-guide-enseignant.html`, `activite-03-questionnaire.html` ;
- activité 4 : `activite-04-cartes-objets.html`, `activite-04-corrige-evaluation.html`, `activite-04-fiche-eleve-classe.html`, `activite-04-fiche-observation.html`, `activite-04-grille-interpretation.html`, `activite-04-guide-enseignant.html`.

### Candidats à une archive ultérieure

Ces pages ne sont actuellement référencées par aucune autre page HTML et doivent être relues avant archivage :

- `activite-01-exemple-production.html`
- `activite-02-exemple-production.html`
- `activite-03-prolongement-illustration-ia.html`
- `activite-04-biographie-objet.html`
- `activite-04-exemple-production.html`
- `activite-04-prolongement-creation.html`

Les corpus, schémas, cartes de contextes et cartes d'usages encore provisoires doivent rester en HTML interne au parcours public ou être remplacés avant toute conversion PDF.

## Recommandations de nommage

- Conserver le préfixe `activite-XX-`.
- Employer des noms en minuscules, sans accent ni espace.
- Retirer `-preview` uniquement lors d'une publication réellement validée.
- Garder la version, la date et les statuts dans le document plutôt que dans le nom de fichier.
- Produire le PDF public depuis le HTML correspondant afin de conserver une relation claire entre les deux versions.

Exemples :

- `activite-01-fiche-eleve.pdf`
- `activite-02-cartes-animaux.pdf`
- `activite-03-guide-enseignant.pdf`
- `activite-04-support-images.pdf`

## Plan d'action proposé

1. Faire relire et tester physiquement les quatre imprimables de l'activité 1.
2. Resserrer la pagination des pages peu remplies avant tout export définitif.
3. Intégrer et valider le corpus A-D de l'activité 2, puis régénérer fiche, cartes et corrigé.
4. Compléter le corpus antique et relire les formulations historiques de l'activité 3.
5. Intégrer les objets A-E, notices et droits de l'activité 4.
6. Effectuer un tirage A4 réel en noir et blanc de chaque candidat.
7. Mettre à jour les statuts de validation.
8. Générer seulement alors les PDF publics, vérifier une dernière fois leurs rendus PNG et ajouter les liens depuis les pages HTML.
9. Préparer séparément une carte de redirection ou d'archivage pour les anciens documents, sans suppression immédiate.
