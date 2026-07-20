# Refonte de la navigation française

Date : 2026-07-20
Branche : `test/refonte-navigation-efficace`
Statut : travail local non committé et non poussé

## Résumé

La partie française du site a été réorganisée autour de six entrées stables : Accueil, Activités, Écoles, Musées, Ressources et Le projet. Les pages Écoles et Musées rassemblent désormais les contenus auparavant dispersés. Les quatre activités utilisent une structure identique et rendent leur niveau de validation visible dès le début.

Aucun imprimable ou PDF existant n'a été supprimé. Les dossiers de traduction n'ont pas été modifiés.

## Pages canoniques

- `index.html` : présentation courte, deux publics, quatre activités et deux sorties finales.
- `acteurs/enseignants.html` : choix, séquence, repères PER prudents et documents.
- `acteurs/musees.html` : choix, adaptation aux collections, préparation et documents.
- `ressources/supports-en-ligne.html` : visuels, imprimables, jeu, modèles, approfondissements et crédits.
- `projet.html` : présentation, recherche, publications, méthode, équipe, droits et contact.
- Les quatre pages `ressources/activite-0*.html` : même ordre de lecture, mêmes ancres et statuts explicites.

Les anciennes pages de séquence, PER, préparation musée, matrice musée et approfondissement sont conservées comme pages de compatibilité `noindex,follow`, sans redirection automatique. La cartographie détaillée se trouve dans `docs/rapports/cartographie-pages-canoniques.md`.

## Médias provisoires conservés pour la maquette

Sept médias locaux sont conservés à la demande du projet pour éviter des pages vides et tester l'emplacement, le type et le futur parcours des supports. Ils sont signalés à l'écran par la mention : « Visuel provisoire — source, pertinence scientifique et droits à valider avant publication définitive. » Ils ne constituent pas des corpus validés et ne doivent déterminer aucune réponse, espèce, datation, fonction ou conclusion.

Le détail des sources, licences indiquées, validations et ressources finales recherchées se trouve dans `docs/rapports/medias-placeholders-refonte.md`. Aucun de ces médias n'a été ajouté aux imprimables HTML ou aux PDF WIP ; aucun PDF n'a été régénéré.

### Activité 2

Une figure comparative de cinq astragales de petits ruminants sert uniquement à tester un futur emplacement pour le guide ou la correction. Les espèces étant visibles, elle ne remplace pas le corpus d'enquête A-D et ne fournit pas sa réponse.

- Source : Vuillien et al., figure 1, *Topological Data Analysis and Multiple Kernel Learning for Species Identification of Modern and Archaeological Small Ruminants*.
- DOI : <https://doi.org/10.5334/jcaa.181>
- Statut affiché : visuel provisoire ; source, pertinence scientifique et droits à valider.

### Activité 3

Une photographie contemporaine d'un vase grec ancien montrant Achille combattant Memnon occupe provisoirement l'emplacement d'un futur document antique. La page distingue explicitement l'ancienneté de l'objet de la date moderne de la photographie et précise que l'image ne prouve aucune version du mythe.

- Institution : Rijksmuseum van Oudheden.
- Photographie : Jona Lendering / Livius.org, annoncée CC0 sur Wikimedia Commons.
- Source : <https://commons.wikimedia.org/wiki/File:Achilles_fighting_against_Memnon_Leiden_Rijksmuseum_voor_Oudheden.jpg>
- Statut affiché : visuel provisoire ; source, pertinence scientifique et droits à valider.

Une seconde image pertinente, tirée d'une planche de 1911 représentant un vase ancien, n'a pas été intégrée car le serveur Wikimedia a refusé le téléchargement. Aucun fichier partiel n'a été conservé.

### Activité 4

Cinq visuels du Metropolitan Museum of Art servent de maquette aux emplacements A à E. Les notices ci-dessous sont celles annoncées par la source et restent à contrôler ; elles ne constituent pas les réponses de l'activité :

| Objet | Notice | Identifiant |
| --- | --- | --- |
| A | Osselet en os, Égypte, vers 3100-2900 av. J.-C. | Met 01.4.92 |
| B | Astragale en bronze, monde grec ou romain | Met X.229 |
| C | Astragale en verre, vers 225 av. J.-C.-75 apr. J.-C. | Met 81.10.161 |
| D | Astragale en faïence, IIIe-IIe siècle av. J.-C. | Met 1970.11.3 |
| E | Vase en terre cuite en forme d'astragale, vers 460 av. J.-C. | Met 40.11.22 |

Le musée annonce ces images dans son programme Open Access et comme domaine public. Licence indiquée par la source, vérification humaine encore nécessaire. Chaque carte reste marquée comme visuel provisoire jusqu'au contrôle interne des notices, traductions, usages pédagogiques, pertinence scientifique et obligations de crédit.

## Cohérence scientifique et pédagogique

- L'activité 1 distingue le talus anatomique, l'astragale du vocabulaire historique et la planche ancienne de LeConte 1922.
- L'activité 2 n'annonce aucune identification experte et garde le corpus A-D manquant visible.
- L'activité 3 distingue sources antiques, tradition tardive et images modernes. Borel, Rubens, Rothaug et l'illustration contemporaine ne sont pas présentés comme sources antiques. BodyParts3D sert seulement au vocabulaire anatomique.
- L'activité 4 distingue observation, hypothèse, interprétation et vérification. Les cinq images ajoutées sont des placeholders de maquette, pas les objets A-E définitifs.
- Les formulations PER restent du type « contribue à », « mobilise certains éléments de » et « à vérifier et adapter ».
- Les règles de musée restent conditionnelles à l'institution et n'autorisent jamais implicitement la manipulation d'un objet patrimonial.

## Tests réalisés

### Statique

- `node --check script.js` : réussi.
- `node --check ressources/document-actions.js` : réussi.
- `git diff --check` : réussi.
- 15 pages HTML analysées.
- 428 liens locaux contrôlés.
- 56 ressources locales contrôlées.
- 121 ancres contrôlées.
- Second contrôle après signalement des placeholders : 15 pages, 484 références locales et 121 ancres, aucune cible absente.
- Les quatre activités conservent chacune les 14 champs attendus : objectif, âge, durée, matériel, statut, réussite, classe, musée, documents, PDF WIP, supports, évaluation, sources et version.
- Un seul `h1` par page et aucun identifiant dupliqué.
- Aucun chemin Windows, `file:///`, lien vers `_private-inputs/` ou lien vers `tmp/`.

### Navigateur

- 18 vues : 9 pages en desktop et mobile.
- Aucun débordement horizontal.
- Aucune image manquante.
- Aucune erreur console, JavaScript ou réponse HTTP en erreur.
- Menu mobile opérationnel ; Échap le ferme et remet `aria-expanded` à `false`.
- Jeu de message codé initialisé sans erreur.
- La page Ressources ne charge pas automatiquement le jeu dans une iframe.
- Navigation et éléments web inutiles masqués à l'impression.
- Contrôle ciblé des activités 2 à 4 et de la page Ressources, en desktop et mobile : 8 vues sans débordement ni erreur console.
- Huit occurrences visibles des placeholders contrôlées : une en activité 2, une en activité 3, cinq en activité 4 et une dans l'aperçu Ressources.
- Tous les médias locaux se chargent après activation du chargement différé ; aucune image distante n'est appelée.

Les captures et le résultat machine se trouvent dans `docs/qa/refonte-navigation-efficace/`.

## Validations humaines restantes

Priorité haute :

- confirmer la réutilisation de la figure scientifique de l'activité 2 ;
- constituer et valider le corpus d'os A-D avec orientation, échelle, espèce et provenance ;
- confirmer la notice du vase ancien et la réutilisation de sa photographie pour l'activité 3 ;
- relire les nuances sur la tradition tardive, le *talus*, l'astragale et le « talon d'Achille » ;
- constituer et valider les véritables objets A-E de l'activité 4 avant toute intégration aux imprimables ;
- tester les activités avec des élèves, enseignants et médiateurs.

Avant une publication finale :

- compléter les publications du projet, les partenaires, le financement et le contact quand ces informations sont confirmées ;
- produire ou valider le schéma anatomique moderne de l'activité 1 ;
- vérifier le modèle 3D, l'interprétation historique et l'alternative accessible du jeu ;
- traduire les nouvelles chaînes listées dans `docs/rapports/chaines-refonte-navigation-a-traduire.md`, puis faire relire EN, DE et IT ;
- mettre à jour les imprimables et PDF WIP lorsque les corpus définitifs sont validés.

## Conclusion

La navigation française et les parcours principaux sont cohérents et techniquement stables dans cette branche de test. La refonte peut être relue humainement sans masquer les limites scientifiques, juridiques ou pédagogiques encore ouvertes. Aucun commit ni push n'est réalisé dans cette mission.
