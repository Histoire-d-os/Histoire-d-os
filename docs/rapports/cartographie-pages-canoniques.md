# Cartographie des pages canoniques

Date de préparation : 2026-07-20
Branche de travail : `test/refonte-navigation-efficace`

Cette cartographie décrit l'architecture française proposée. Elle ne modifie pas les variantes anglaise, allemande ou italienne.

## Navigation principale

| Entrée | Page canonique | Rôle |
| --- | --- | --- |
| Accueil | `index.html` | Présenter le projet, les deux publics et les quatre activités. |
| Activités | `index.html#activites` | Comparer rapidement les quatre propositions. |
| Écoles | `acteurs/enseignants.html` | Choisir une activité, préparer une séquence et consulter les repères PER. |
| Musées | `acteurs/musees.html` | Choisir, adapter et préparer une médiation. |
| Ressources | `ressources/supports-en-ligne.html` | Retrouver visuels, imprimables, jeu, modèles et approfondissements. |
| Le projet | `projet.html` | Présenter recherche, publications, méthode, équipe, droits et contact. |

## Activités canoniques

| Activité | Page canonique | Statut public affiché |
| --- | --- | --- |
| 1 — Trouver l'astragale | `ressources/activite-01-trouver-astragale.html` | Prête à tester ; schéma moderne et validation finale encore nécessaires. |
| 2 — Associer un astragale à un animal | `ressources/activite-02-associer-astragale-animal.html` | Corpus A-D à compléter ; méthode utilisable sans identification experte. |
| 3 — Achille : une histoire qui change | `ressources/activite-03-achille-histoire-transformee.html` | Support pilote ; corpus antique à compléter. |
| 4 — Un os, plusieurs vies | `ressources/activite-04-un-os-plusieurs-vies.html` | Objets candidats A-E et interprétations à valider. |

Chaque activité suit le même ordre : `#en-bref`, `#classe`, `#musee`, `#documents`, `#supports`, `#sources`.

## Pages complémentaires

| Contenu | Page canonique |
| --- | --- |
| Jeu de message codé | `ressources/jeu-message-secret.html` |
| Récit d'ouverture sur Achille | `ressources/recit-achille-astragale.html` |
| Crédits des ressources | `docs/credits-ressources.md` |

Les imprimables HTML de `ressources/print/` et les exports de travail de `ressources/pdf-wip/` restent accessibles depuis la page Ressources et depuis l'activité concernée. Aucun fichier existant n'est supprimé.

## Anciennes URL conservées

| Ancienne URL | Destination canonique | Traitement |
| --- | --- | --- |
| `acteurs/enseignants-sequence.html` | `acteurs/enseignants.html#sequence` | Page de compatibilité, `noindex,follow`, lien explicite sans redirection automatique. |
| `acteurs/enseignants-per.html` | `acteurs/enseignants.html#per` | Page de compatibilité, `noindex,follow`, lien explicite sans redirection automatique. |
| `acteurs/musees-preparation.html` | `acteurs/musees.html#preparer` | Page de compatibilité, `noindex,follow`, lien explicite sans redirection automatique. |
| `acteurs/musees-matrice.html` | `acteurs/musees.html#adapter` | Page de compatibilité, `noindex,follow`, lien explicite sans redirection automatique. |
| `acteurs/approfondir.html` | `projet.html#recherche` | Page de compatibilité, `noindex,follow`, lien explicite sans redirection automatique. |

`acteurs/familles.html` reste une page publique accessible par son URL historique, mais n'est plus une entrée principale de la navigation proposée. Son maintien ou son repositionnement demande une décision éditoriale distincte.

## Principes de maintenance

- Les liens internes futurs doivent cibler les pages canoniques et leurs ancres.
- Les pages de compatibilité sont conservées tant que les anciens liens externes n'ont pas été évalués.
- Une ressource WIP garde un statut visible et ne devient pas une version finale par simple changement de navigation.
- Les candidats visuels marqués « Source et droits à valider » ne doivent pas être repris dans les imprimables définitifs avant validation humaine.
