# Checklist de validation

Utiliser cette liste avant de livrer une mission Codex pour Histoire d'os.

## Portée

- [ ] `AGENTS.md` a été lu.
- [ ] L'état Git a été vérifié.
- [ ] Les fichiers concernés ont été inspectés avant modification.
- [ ] Aucun doublon de page, dossier ou ressource n'a été créé.
- [ ] Aucun contenu privé de `_private-inputs/` n'a été publié automatiquement.

## Architecture

- [ ] Le site reste statique et compatible avec GitHub Pages.
- [ ] Aucun framework, build tool ou package manager n'a été ajouté sans justification.
- [ ] Les classes CSS et scripts existants ont été réutilisés.
- [ ] Les URL publiques existantes sont préservées.
- [ ] Aucun faux lien PDF, 3D ou média n'a été ajouté.

## Rigueur scientifique

- [ ] Les affirmations scientifiques, historiques ou pédagogiques sont sourcées ou marquées comme à vérifier.
- [ ] Observation, hypothèse, interprétation et incertitude sont distinguées.
- [ ] La fonction d'un objet n'est jamais déduite de sa seule apparence.
- [ ] Les astragales ne sont pas présentés comme les "premiers dés naturels".
- [ ] Les usages ne sont pas généralisés entre cultures, régions ou périodes.
- [ ] Les images générées sont marquées comme contemporaines et non scientifiques.

## PER et pédagogie

- [ ] Les références PER privées ont été consultées si la mission touche aux objectifs scolaires.
- [ ] Aucun code PER précis n'est inventé.
- [ ] Les correspondances PER publiques restent prudentes ou vérifiées.
- [ ] Les consignes sont adaptées au public cible.
- [ ] Une version enseignant et une version musée sont distinguées quand nécessaire.

## Accessibilité

- [ ] Chaque page contient un seul `h1`.
- [ ] Les titres suivent une hiérarchie cohérente.
- [ ] Les images ont des textes alternatifs.
- [ ] Les images complexes ont une description suffisante.
- [ ] Les tables ont des en-têtes.
- [ ] La navigation clavier reste possible.
- [ ] Le focus visible est conservé.
- [ ] Aucune information n'est portée uniquement par la couleur.
- [ ] Le zoom à 200 % ne casse pas la lecture.
- [ ] `prefers-reduced-motion` est respecté.

## Impression et PDF

- [ ] Les menus, boutons et éléments web inutiles disparaissent à l'impression.
- [ ] Les cartes, tableaux et consignes ne sont pas coupés de façon incohérente.
- [ ] Le rendu A4 a été testé pour les ressources annoncées comme imprimables.
- [ ] Les documents restent lisibles en niveaux de gris.
- [ ] Aucun PDF n'est annoncé s'il n'existe pas.
- [ ] Tout PDF produit a été rendu ou inspecté visuellement.

## Tests techniques

- [ ] `git diff --check`
- [ ] `node --check script.js`
- [ ] `node --check ressources/document-actions.js`
- [ ] Vérification des liens locaux.
- [ ] Vérification des ancres.
- [ ] Test navigateur avec `$playwright` si une page publique change.
- [ ] Capture avec `$screenshot` ou outil équivalent si la présentation change.

## Compte rendu

- [ ] Fichiers créés listés.
- [ ] Fichiers modifiés listés.
- [ ] Tests réellement exécutés listés.
- [ ] Tests non exécutés explicitement signalés.
- [ ] Points nécessitant une décision humaine listés.
- [ ] Aucun commit n'est fait sans accord explicite.
