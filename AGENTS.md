# Instructions Codex — Histoire d'os

Ces instructions s'appliquent à toutes les futures missions Codex dans ce dépôt.

## Documents complémentaires

- `.agents/skills/histoire-os-publisher/SKILL.md` décrit le workflow opérationnel propre au projet.
- `docs/workflow-codex.md` détaille le déroulement recommandé d'une mission.
- `docs/validation-checklist.md` sert de checklist avant livraison.
- `docs/decisions-editoriales.md` fixe les décisions éditoriales, scientifiques, pédagogiques et juridiques.
- `docs/per-index.md` conserve les correspondances PER provisoires et les pages consultées.
- `docs/registre-ressources-manquantes.md` et `docs/registre-ressources-manquantes.csv` suivent les médias, sources et validations manquants.

## Architecture

- Conserver un site statique compatible avec GitHub Pages.
- Ne pas ajouter de framework, de package manager ou de système de build sans nécessité démontrée.
- Réutiliser les composants, classes CSS et scripts existants avant de créer une nouvelle structure.
- Ne pas déplacer ou renommer une URL publique sans préserver une redirection ou une compatibilité.
- Ne pas introduire de dépendance de production sans l'indiquer explicitement dans le compte rendu.

## Rigueur scientifique

- Ne jamais inventer une information scientifique, anatomique, historique, archéologique ou pédagogique.
- Ne jamais déduire la fonction d'un objet archéologique de sa seule apparence.
- Distinguer systématiquement observation, hypothèse, interprétation, vérification et incertitude.
- Ne pas considérer une image générée comme une source historique ou scientifique.
- Ne pas générer avec une IA un schéma anatomique présenté comme scientifique.
- Ne pas présenter les astragales comme les "premiers dés naturels".
- Ne pas généraliser un usage attesté dans une culture, une région ou une période.
- Conserver les placeholders lorsqu'aucun asset validé n'est fourni.
- Utiliser les contenus de `_private-inputs/` comme références privées, sans les publier automatiquement.

## Publics

Le site doit rester lisible pour quatre parcours :

- enseignant·es ;
- musées et médiation ;
- familles et grand public ;
- approfondissement scientifique.

Un enseignant doit pouvoir trouver et imprimer une fiche élève, un guide et un corrigé en deux clics maximum depuis sa page d'entrée.

Un musée doit pouvoir identifier rapidement le matériel, la procédure, la durée, les contraintes de conservation et les variantes.

## Impression

- Toute ressource annoncée comme imprimable doit être réellement testée en A4.
- Les menus, boutons et éléments web inutiles doivent disparaître à l'impression.
- Les cartes, tableaux, consignes et légendes ne doivent pas être coupés de façon incohérente.
- Les ressources doivent rester lisibles en niveaux de gris.
- Ne jamais créer un faux PDF ou un lien vers un PDF inexistant.

## Accessibilité

- Un seul `h1` par page.
- Hiérarchie correcte des titres.
- Navigation clavier complète.
- Focus visible.
- Contrastes suffisants.
- Textes alternatifs pour les images.
- Descriptions longues pour les images complexes.
- Tables avec en-têtes.
- Compatibilité avec un zoom à 200 %.
- Respect de `prefers-reduced-motion`.
- Aucune information portée uniquement par la couleur.

## Traçabilité

Toute ressource publique doit indiquer ou permettre de retrouver :

- version ;
- date de révision ;
- public ;
- statut scientifique ;
- statut des droits ;
- statut d'impression ;
- sources ;
- crédits.

## Méthode de travail

Avant toute modification :

1. Lire ce fichier `AGENTS.md`.
2. Lire les fichiers concernés.
3. Vérifier l'état Git.
4. Annoncer brièvement les fichiers prévus.
5. Effectuer la modification.
6. Lancer les tests pertinents.
7. Ouvrir le résultat dans un navigateur quand une page publique change.
8. Prendre des captures si la présentation change.
9. Vérifier l'impression lorsqu'un document est imprimable.
10. Fournir un compte rendu honnête.

Ne pas déclarer une validation, un test ou un fichier comme terminé s'il n'a pas réellement été vérifié.

## Revue par agents spécialistes

Pour toute modification substantielle d'une activité française, appliquer la séquence suivante :

1. `scientific-reviewer` et `pedagogy-reviewer` interviennent en lecture seule avant la modification.
2. `per-reviewer` intervient dès qu'un alignement avec le PER est annoncé ou modifié.
3. `media-rights-reviewer` intervient dès qu'un média est ajouté, remplacé ou republié dans un autre format.
4. `museum-mediation-reviewer` intervient pour toute variante destinée à un musée ou à une collection.
5. `print-accessibility-reviewer` intervient après génération ou modification d'un rendu web, PDF ou DOCX.
6. Les agents spécialistes commencent par une revue en lecture seule, citent leurs preuves et signalent les sources absentes.
7. L'agent principal synthétise leurs rapports et reste seul responsable des modifications.
8. Les mêmes spécialistes effectuent une seconde revue ciblée après modification.
9. Aucun rapport d'agent ne remplace la validation de Barbara Carè, d'une personne enseignante, d'une institution muséale ou d'un conseil juridique.

Les noms exacts, sources attribuées et limites de ces agents sont documentés dans
`docs/knowledge/agent-source-map.md`. Le workflow éditorial reste défini par
`.agents/skills/histoire-os-publisher/SKILL.md`, `docs/workflow-codex.md` et
`docs/validation-checklist.md`.
