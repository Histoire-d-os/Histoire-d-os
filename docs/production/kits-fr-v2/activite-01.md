# Activité 1 - Trouver l'astragale

## État de la mission

- Branche de travail : `content/kits-fr-scientifiques-v2`.
- Commit de départ : `f5cfcfc`.
- Source française canonique : `ressources/print/pdf-sources/activite-01.html`.
- Page publique de présentation : `ressources/activite-01-trouver-astragale.html`.
- Maturité proposée après revues finales et QA : niveau 3 renforcé, candidat pour une validation scientifique ciblée et un test adulte.
- Test avec des élèves : non autorisé par cette documentation avant validation anatomique et pédagogique humaine.

Les anciennes pages HTML imprimables et les PDF WIP sont conservés sans suppression. Ils ne constituent plus la source éditoriale ni le parcours recommandé depuis la page de l'activité.

## Décisions consolidées

1. Une seule progression centrale organise la fiche, le guide, les supports et le corrigé.
2. Les durées sont 27 minutes, 45 minutes et 70 minutes. La version courte s'arrête après la vérification et une conclusion orale; la version principale ajoute le transfert sur une seconde orientation humaine; la version approfondie réalise les neuf étapes et la comparaison animale écrite.
3. La révélation est progressive : os mystère, pied neutre, schéma légendé, vues BodyParts3D, puis comparaison animale.
4. La fiche comporte six tâches. Le corrigé reprend ces six tâches dans le même ordre et avec un critère observable.
5. Le prolongement animal porte sur une région comparable et non sur l'identification experte d'un talus de mouton.
6. Le lien au PER est limité à certains éléments de MSN 27. Aucun alignement autonome n'est retenu pour MSN 26, SHS 22, L1 25 ou Arts visuels.
7. Les médias aux droits non déterminés sont exclus du kit test.
8. Aucun modèle 3D n'est indispensable à l'activité.

## Progression pédagogique

| Étape | Courte | Principale | Approfondie | Production |
| --- | ---: | ---: | ---: | --- |
| Mission | 2 min | 4 min | 5 min | question ou idée initiale |
| Observer | 3 min | 4 min | 6 min | détails visibles |
| Décrire | 4 min | 5 min | 7 min | phrase ou liste descriptive |
| Localiser | 5 min | 6 min | 8 min | zone précise et hypothèse |
| Justifier | 4 min | 5 min | 7 min | deux indices distincts |
| Vérifier | 5 min | 6 min | 9 min | distinction talus, calcanéum, talon |
| Comparer | — | 4 min, oral facultatif | 7 min | ressemblance, différence visible, limite |
| Transférer | — | 4 min | 7 min | réponse révisée ou confirmée sur une seconde orientation humaine |
| Conclure | 2 min, oral | 4 min | 8 min | conclusion prudente |
| Transitions | 2 min | 3 min | 6 min | distribution et changements de supports |
| **Total** | **27 min** | **45 min** | **70 min** | |

## Matrice terminologique

| Terme | Formulation adulte | Formulation 8-12 ans | Source et repère | Nuance | Statut |
| --- | --- | --- | --- | --- | --- |
| Talus | Os du tarse articulé avec le tibia, la fibula, le calcanéum et le naviculaire. | Os du tarse situé sous la jambe et au-dessus du calcanéum. | NCBI-TALUS, sections `Introduction` et `Structure and Function`; FIPAT TA2, `Ossa pedis`. | Ne pas le présenter comme le talon visible. | Appui publié; formulation et schéma à valider par une personne anatomiste. |
| Astragale | Terme historique, archéologique et nom conservé dans le projet; relation terminologique avec le talus. | Autre nom employé dans le projet pour le talus. | BC-001, article p. 202-216, copie de travail interne p. 10-12. | Attribuer l'analyse historique à Barbara Carè. | Appui publié; validation Barbara Carè recommandée. |
| Calcanéum | Os du tarse placé sous le talus, vers l'arrière du pied. | Grand os sous le talus, vers l'arrière du pied. | NCBI-FOOT-BONES, sections sur le tarse et le calcanéum; FIPAT TA2, `Ossa pedis`. | Employer `calcanéum` en français; ne pas en faire un synonyme du talus. | Appui publié; validation anatomique du schéma requise. |
| Talon | Région postérieure du pied autour du calcanéum. | Région à l'arrière du pied. | NCBI-FOOT-BONES, organisation du pied; terminologie française à confirmer humainement. | Région du corps, pas nom d'un seul os. | Formulation prudente; validation humaine requise. |
| Tarse | Ensemble d'os entre la jambe et le reste du pied. | Groupe d'os entre la jambe et le reste du pied. | FIPAT TA2, `Ossa pedis`. | Le schéma simplifie le groupe. | Appui publié. |
| Articulation de la cheville | Articulation impliquant notamment tibia, fibula et talus. | Région où la jambe rencontre le pied. | NCBI-TALUS, `Structure and Function`. | Distinguer articulation anatomique et région courante. | Appui publié; adaptation enfant à tester. |
| Arrière-pied | Terme de repérage adulte pour la partie postérieure du pied; son usage détaillé n'est pas nécessaire dans la fiche élève. | Partie arrière du pied, près du talon. | NCBI-FOOT-BONES, organisation du pied. | Employer seulement si nécessaire et faire valider la formulation française. | Prolongement adulte. |

## Supports anatomiques dérivés et annotés

Fichiers sources modifiables :

- `assets/images/activite-01/silhouette-os-enquete.svg` ;
- `assets/images/activite-01/schema-pied-enquete.svg` ;
- `assets/images/activite-01/schema-localisation-talus.svg`.

Les PNG portant les mêmes noms sont des dérivés mécaniques destinés au web, aux PDF et aux DOCX. Le script `scripts/build-activite-01-anatomy-assets.cjs` part des deux rendus BodyParts3D déjà présents : il extrait le talus pour l'observation isolée, neutralise le surlignage rouge pour l'enquête, puis rasterise les annotations SVG. La géométrie osseuse du modèle n'est donc pas redessinée approximativement.

Les compositions sont des dérivés sous CC BY-SA 2.1 JP. Les annotations ont été confrontées à FIPAT TA2 et NCBI-TALUS, mais elles ne constituent pas une source anatomique autonome et ne doivent pas être déclarées définitives avant validation par une personne anatomiste.

La version élève indique la jambe, le pied, la cheville et la zone du talon sans nommer l'os recherché. La version adulte identifie le tibia, le talus/astragale, le calcanéum et les autres os du pied. La fibula n'est pas nommée dans cette vue latérale car elle n'y est pas suffisamment distincte. Un contour discontinu, une flèche et une légende doublent le repérage par la couleur.

## Correspondance PER provisoire

| Domaine | Objectif | Composante ou progression retenue | Cycle | Tâche | Production | Portée | Preuve | Limite |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MSN | MSN 27 - Identifier les différentes parties de son corps, en décrire le fonctionnement et en tirer des conséquences pour sa santé | Progression 5e-6e : construction de la représentation du squelette par schématisation et vérification avec différents médias | Cycle 2, surtout 5e-6e | localiser le talus et distinguer les repères | schéma annoté et conclusion | contribue à certains éléments | `PER MSN SHS.pdf`, p. 42-44 et 48-49 | aucun fonctionnement locomoteur ni conséquence sanitaire; aucune attente fondamentale validée par cette activité seule; les os principaux et types d'articulations ne sont pas étudiés dans leur ensemble |
| MSN | MSN 27 - Identifier les différentes parties de son corps, en décrire le fonctionnement et en tirer des conséquences pour sa santé | Progression 7e-8e : comparaison de squelettes humain/autres vertébrés | Cycle 2, prolongement exploratoire 7e-8e | repérer une région comparable chez le mouton | ressemblance, différence visible, limite | peut s'intégrer comme prolongement, à vérifier et adapter | `PER MSN SHS.pdf`, p. 48-49 | aucun os principal identifié; fonctionnement locomoteur et mode de vie non étudiés; validation comparative requise |

MSN 26 n'est pas retenu comme objectif autonome : l'activité observe, argumente et révise, mais ne met pas en place une expérimentation complète ni une confrontation à des résultats expérimentaux. SHS 22, L1 25 et Arts visuels ne correspondent pas aux tâches réelles de cette activité.

## Variante musée

Le scénario guidé dure 38 minutes et doit être adapté à l'institution. Il fonctionne devant un squelette, une vitrine, une photographie, une réplique ou un modèle validé par l'institution et une personne compétente. Il commence par nommer le statut du support et les règles de conservation. La photographie agrandie constitue la solution de secours systématique. Aucun objet patrimonial n'est manipulé sans autorisation de l'institution.

Le matériel minimal comprend les supports neutres et légendés, une photographie agrandie ou une projection, des cartes de vote ou un support collectif, des crayons et une trace courte. La taille du groupe, les lignes de vue, la circulation, l'accessibilité et la visibilité éventuelle d'un cartel-réponse doivent être confirmées sur place. Si 38 minutes devant une vitrine gênent le parcours, l'enquête peut se dérouler sur reproduction avant une observation brève de l'objet, si les règles du musée l'autorisent.

Le scénario ne suppose ni collection particulière ni partenariat. La validation d'une institution concerne son contexte, son public, sa circulation de groupe et ses règles; elle ne transforme pas automatiquement le kit en ressource validée par tous les musées.

## Inventaire 3D

| Candidat | Source | Format | Licence ou permission | Rôle possible | Décision actuelle |
| --- | --- | --- | --- | --- | --- |
| Modèles présents dans `_private-inputs/activite-01/modeles-3d/` | privée, provenance à documenter | GLB / BLEND selon fichiers | non déterminée | observation de l'orientation | conception privée uniquement; aucune publication |
| Modèle bovin MorphoSource / Smithsonian | manifeste privé | à confirmer | autorisation à demander | comparaison anatomique | exclu du web, PDF, DOCX et GitHub |
| BodyParts3D | DBCLS | modèle source et rendus fixes | CC BY-SA 2.1 JP | vocabulaire et orientation | deux vues fixes utilisées sous conditions; modèle interactif non requis |

Aucun lien ou QR code 3D n'est ajouté tant qu'une destination stable et publiable n'est pas validée. L'activité reste complète sans appareil numérique.

## Médias et droits

Le détail fichier par fichier figure dans `docs/permissions/activite-01-permissions.csv`.

- inclus sous conditions : deux vues BodyParts3D et le squelette de mouton MAV-USP, avec notices exactes et transformations consignées ;
- inclus comme dérivés BodyParts3D à valider scientifiquement : trois compositions SVG et leurs PNG ;
- exclus du kit test : pied de mouton Dundee, planche LeConte 1922, modèles privés et modèle MorphoSource ;
- conservés dans le dépôt sans être supprimés : les anciens médias et livrables non retenus.

## Préparation au transfert WordPress

| Champ futur | Contenu canonique |
| --- | --- |
| Titre | Trouver l'astragale |
| Résumé | enquête progressive d'observation, localisation, justification et vérification |
| Objectifs | section 2 du guide |
| Déroulement | progression centrale en neuf étapes |
| Téléchargements | cinq PDF et cinq DOCX français de l'activité 1 |
| Images | trois schémas dérivés de BodyParts3D, deux vues BodyParts3D, un squelette de mouton |
| Crédits | section Sources du kit et registre de permissions |
| Liens 3D | aucun lien public validé |
| Variante musée | scénario de 38 minutes |
| Sources | NCBI-TALUS, FIPAT TA2, BC-001 et notices de médias |
| Interactifs facultatifs | future visionneuse 3D validée, non nécessaire au scénario |

Le contenu ne dépend pas des classes CSS ou des URL du site statique pour rester compréhensible.

## Recommandations non appliquées à ce stade

| Agent | Recommandation | Décision | Justification |
| --- | --- | --- | --- |
| scientific-reviewer | faire valider le schéma par une personne anatomiste | non réalisable automatiquement | validation humaine explicitement maintenue comme condition de sortie |
| pedagogy-reviewer | effectuer un test réel avec une personne enseignante puis des élèves | non réalisé | nécessite recrutement, consentement et observation humaine |
| per-reviewer | faire relire l'alignement par une personne enseignante ou formatrice PER | non réalisé | correspondance documentée comme provisoire et partielle |
| museum-mediation-reviewer | tester le scénario dans une institution | non réalisé | aucune institution partenaire n'est confirmée pour cette mission |
| media-rights-reviewer | archiver les preuves juridiques de chaque fichier | partiellement appliqué | URLs et conditions consignées; revue juridique humaine encore nécessaire |
| media-rights-reviewer | retirer de la diffusion les anciens PDF WIP contenant Dundee ou LeConte | parcours public corrigé, fichiers conservés | les liens recommandés ont été retirés, mais aucun fichier public antérieur n'a été supprimé conformément à la consigne de conservation; décision éditoriale et juridique humaine requise |
| print-accessibility-reviewer | impression physique et test avec technologies d'assistance | non réalisé | contrôles humains et matériels hors de la génération automatisée |

## Validations humaines restantes

1. Barbara Carè : vocabulaire historique, portée de BC-001 et cohérence scientifique générale.
2. Personne anatomiste : forme, position et légendes des trois schémas.
3. Personne compétente en anatomie comparée : portée du support mouton.
4. Personne enseignante : lecture 8-12 ans, durées, différenciation, espaces de réponse et évaluation.
5. Institution muséale : faisabilité locale et conservation.
6. Responsable droits : preuve de licence par fichier et conformité des redistributions.
7. Responsable accessibilité : Word natif, lecteur d'écran, impression couleur et niveaux de gris.
