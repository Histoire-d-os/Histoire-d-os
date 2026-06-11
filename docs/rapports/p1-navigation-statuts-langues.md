# Rapport P1 - navigation, statuts et langues

Date : 2026-06-11

## Fichiers créés

- `acteurs/enseignants.html`
- `acteurs/musees.html`
- `acteurs/familles.html`
- `acteurs/approfondir.html`
- `docs/qa/p1-navigation/browser-summary.json`
- Captures dans `docs/qa/p1-navigation/`

## Fichiers modifiés

- `index.html`
- `styles.css`
- `script.js`
- `ressources/activite-01-trouver-astragale.html`
- `ressources/activite-01-fiche-reperage.html`
- `ressources/activite-02-associer-astragale-animal.html`
- `ressources/activite-02-cartes-animaux.html`
- `ressources/activite-02-cartes-astragales.html`
- `ressources/activite-03-achille-histoire-transformee.html`
- `ressources/activite-03-corpus-images.html`
- `ressources/activite-03-schema-talus.html`
- `ressources/activite-04-un-os-plusieurs-vies.html`
- `ressources/activite-04-cartes-objets.html`
- `ressources/recit-achille-astragale.html`

## Problèmes P1 traités

- Statuts publics trop optimistes : ajout de notes de statut visibles sur l'accueil, les activités 1 à 4 et les ressources prioritaires avec placeholders.
- Activité 2 : remplacement de l'intitulé "Jeu actuellement validé" par "Jeu à valider avant publication".
- Langues : suppression du sélecteur FR/DE/IT/EN de l'interface publique et remplacement par une mention indiquant que la version française est en cours de stabilisation.
- Parcours d'entrée : création des quatre pages `enseignants`, `musees`, `familles` et `approfondir`.
- Accès direct : l'accueil affiche quatre cartes de parcours très tôt dans la page ; les pages enseignants et musées centralisent les liens vers fiches, guides et corrigés existants.
- Schéma du talus : statut explicite de schéma pédagogique provisoire avec validation anatomique à confirmer.
- Images contemporaines : le récit d'Achille et le corpus d'images signalent que les illustrations du site ne sont pas des sources historiques, archéologiques ou anatomiques.

## Problèmes P1 non traités entièrement

- La traçabilité complète version/date/statut/droits/crédits sur chaque page imprimable reste à faire page par page.
- La campagne d'impression A4 complète n'est pas réalisée ; seule une capture rapide en média print d'une page acteur a été produite.
- Les liens externes 403/404 relevés par l'audit initial n'ont pas été corrigés dans cette mission.
- Les validations scientifiques, pédagogiques, juridiques, muséales et PER restent humaines.

## Changements de navigation

- Navigation principale de l'accueil : `Parcours`, `Activités`, `Enseignant·es`, `Musées`, `Ressources`, `Approfondir`.
- Cartes d'entrée ajoutées dans la section `Parcours` : enseignant·es, musées et médiation, familles, approfondissement.
- Les pages acteurs ont un lien de retour vers l'accueil et, lorsque pertinent, vers les activités ou parcours voisins.

## Décision de langue

Le site reste en français. Le sélecteur FR/DE/IT/EN a été retiré pour ne pas laisser croire que les parcours et ressources sont traduits. La mention publique indique :

> Version française en cours de stabilisation. Les traductions DE/IT/EN seront ajoutées après validation des contenus.

Le code de traduction historique reste neutralisé sans interface de sélection ; aucune traduction automatique n'a été ajoutée.

## Tests effectués

- `node --check script.js`
- `node --check ressources/document-actions.js`
- `git diff --check`
- Audit statique interne : 52 pages HTML, 0 lien ou ancre locale manquante, 0 page avec nombre de `h1` différent de 1, 0 chemin racine incompatible GitHub Pages.
- Test navigateur Chrome headless via DevTools, car `npx` reste inutilisable : accueil desktop, accueil mobile, menu mobile, quatre pages acteurs, test local avec préfixe `/Histoire-d-os/`, liens d'entrée depuis accueil, liens de retour des pages acteurs, contrôle console et réponses réseau locales.
- Capture rapide en média `print` de `acteurs/enseignants.html`, sans produire de PDF public.

## Captures produites

- `docs/qa/p1-navigation/home-desktop.png`
- `docs/qa/p1-navigation/home-mobile.png`
- `docs/qa/p1-navigation/home-mobile-menu.png`
- `docs/qa/p1-navigation/home-prefix-desktop.png`
- `docs/qa/p1-navigation/enseignants-desktop.png`
- `docs/qa/p1-navigation/musees-desktop.png`
- `docs/qa/p1-navigation/familles-desktop.png`
- `docs/qa/p1-navigation/approfondir-desktop.png`
- `docs/qa/p1-navigation/enseignants-print-preview.png`
- `docs/qa/p1-navigation/browser-summary.json`

## Validations humaines nécessaires

- Relire les formulations de statuts publics et décider du vocabulaire officiel.
- Valider les correspondances PER avant toute publication de codes ou objectifs précis.
- Valider les médias, licences, crédits et droits avant remplacement des placeholders.
- Relire scientifiquement le schéma du talus et les formulations liées à Achille, `talus`, astragale et talon.
- Tester réellement l'impression A4 en couleur et en niveaux de gris.
- Définir les informations publiques de financement, gouvernance et procédure de signalement.
