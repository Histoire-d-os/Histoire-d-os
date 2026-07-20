# QA — Refonte de la navigation française

Date : 2026-07-20
Branche : `test/refonte-navigation-efficace`

## Captures

Les neuf pages canoniques ont été contrôlées en vue desktop 1440 × 1000 et mobile 390 × 844 :

- accueil ;
- Écoles ;
- Musées ;
- Ressources ;
- Le projet ;
- activités 1, 2, 3 et 4.

Les 18 captures PNG de ce dossier sont des pages complètes. Le navigateur a parcouru chaque page avant la capture afin de charger les images différées.

Les huit captures des activités 2, 3 et 4 et de la page Ressources, en desktop et mobile, ont été actualisées après l'ajout des mentions visibles sur les médias provisoires.

## Contrôles automatisés

Le fichier `resultats-tests.json` enregistre :

- 18 vues contrôlées ;
- aucun débordement horizontal ;
- aucune image manquante ;
- aucune erreur console ou JavaScript ;
- aucune réponse HTTP en erreur ;
- ouverture et fermeture du menu mobile avec la touche Échap ;
- initialisation du jeu de message codé ;
- absence d'iframe automatique sur la page Ressources ;
- masquage de la navigation avec la feuille d'impression.

## Parcours vérifiés

1. Accueil → Écoles.
2. Écoles → activité 2 → guide d'encadrement.
3. Musées → activité 4 → jeu de message codé.
4. Ressources → catégories et supports sans chargement automatique du jeu.

Les contrôles scientifiques, juridiques et pédagogiques encore humains sont détaillés dans `docs/rapports/refonte-navigation-efficace.md`.

## Médias provisoires

Les captures montrent sept médias conservés uniquement pour tester la maquette des activités 2 à 4. Leur rôle provisoire est indiqué dans la page, avec validation scientifique et juridique requise. Ils ne forment pas les corpus A-D, antique ou A-E définitifs et ne sont présents dans aucun imprimable ou PDF WIP.

Leur traçabilité détaillée se trouve dans `docs/rapports/medias-placeholders-refonte.md`.
