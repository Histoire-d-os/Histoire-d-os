# Plan priorisé

## P0 - Bloquant

Aucun P0 confirmé pendant l'audit : pas de contenu privé exposé, pas de lien local cassé, pas d'ancre manquante, pas d'erreur console, pas de 404 local.

## P1 - Indispensable avant communication publique élargie

| ID | Problème | Public touché | Fichier ou URL | Action recommandée | Automatisation Codex | Validation humaine | Dépendance | Effort | Critère d'acceptation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1-01 | Statuts publics trop optimistes | Tous | `index.html`, pages activités | Remplacer "prêtes à lancer" par statuts réels : prototype, contenu en cours, prêt à imprimer, prêt à utiliser | Oui | Éditoriale | Décision sur vocabulaire statuts | Faible | Aucune activité incomplète n'est présentée comme prête. |
| P1-02 | Activité 2 annoncée validée malgré corpus incomplet | Enseignants, musées | `ressources/activite-02-associer-astragale-animal.html` | Renommer le bloc "Jeu actuellement validé" et afficher les validations restantes | Oui | Archéozoologie, pédagogie | Espèces et corpus final | Faible | Le statut de l'activité 2 correspond au registre des ressources. |
| P1-03 | Multilinguisme annoncé avant traduction complète | Tous | `index.html`, `script.js` | Masquer DE/IT/EN ou indiquer "interface partielle" jusqu'à traduction des parcours et ressources | Oui | Éditoriale, traduction | Décision sur stratégie multilingue | Moyen | Le sélecteur ne crée plus de fausse attente. |
| P1-04 | Quatre publics non matérialisés en accueil | Enseignants, musées, familles, approfondissement | `index.html` | Créer quatre accès clairs avec promesse, ressources clés et statut | Oui | Éditoriale | Architecture de refonte | Moyen | Chaque public atteint ses ressources en 1-2 clics. |
| P1-05 | Traçabilité incomplète | Enseignants, musées, chercheurs | `ressources/*.html` | Ajouter un bloc normalisé version/date/public/statuts/sources/crédits | Oui | Juridique et scientifique | Sources et droits | Important | Chaque page imprimable expose ses statuts et crédits. |
| P1-06 | Images générées ou contemporaines non signalées | Tous | `index.html`, `ressources/recit-achille-astragale.html` | Ajouter la mention de statut des illustrations et conserver les métadonnées | Oui | Juridique, éditoriale | Droits et provenance | Moyen | Toute image non-source est explicitement qualifiée. |
| P1-07 | Schéma du talus présenté avant validation | Élèves, enseignants | `ressources/activite-03-schema-talus.html` | Marquer le schéma comme pédagogique provisoire ou le remplacer par une source validée | Oui | Anatomie | Image/source validée | Faible à moyen | Aucun schéma provisoire n'est présenté comme référence scientifique. |
| P1-08 | Contraste et focus perfectibles | Tous, accessibilité | `styles.css` | Renforcer contraste des boutons et focus visible non dépendant de la couleur | Oui | Accessibilité | Palette validée | Faible | Contrastes AA et focus visible au clavier. |
| P1-09 | Impression A4 non validée pour 47 pages | Enseignants, musées | `ressources/*.html`, `styles.css` | Créer une campagne de tests A4, corriger débordements et consommation d'encre | Partiel | Enseignement, musée | Tests imprimante | Important | Pages imprimables testées en couleur et niveaux de gris. |
| P1-10 | Liens externes 404 ou 403 à vérifier | Adultes, approfondissement | Sources dans `ressources/*.html` | Remplacer 404, documenter les 403 ou utiliser DOI/notice stable | Partiel | Scientifique | Sources fiables | Moyen | Aucun lien source important ne répond 404. |

## P2 - Niveau best practice

| ID | Problème | Public touché | Fichier ou URL | Action recommandée | Automatisation Codex | Validation humaine | Dépendance | Effort | Critère d'acceptation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P2-01 | Liens publics vers Markdown brut | Tous | `index.html`, pages activités | Convertir les `.md` utiles en HTML ou signaler document brut | Oui | Éditoriale | Choix de publication docs | Moyen | Aucun parcours public principal n'ouvre un Markdown brut par surprise. |
| P2-02 | Absence de page enseignant centrale | Enseignants | Accueil, ressources | Créer un tableau par activité : fiche élève, guide, corrigé, PER | Oui | Pédagogie | Alignement PER validé | Moyen | Les 3 ressources clés sont accessibles directement. |
| P2-03 | Absence de page musée centrale | Musées | Accueil, ressources | Créer un tableau : activité, matériel, procédure, conservation, imprimables | Oui | Médiation muséale | Contraintes institutionnelles | Moyen | Le musée identifie vite ce qui est adaptable. |
| P2-04 | Tables sans `caption` | Accessibilité | Activité 4 et corrections | Ajouter des captions ou `aria-labelledby` cohérents | Oui | Accessibilité | Aucun | Faible | Toutes les tables ont un titre programmatique. |
| P2-05 | Menu mobile incomplet au clavier | Mobile, accessibilité | `script.js` | Ajouter `Escape`, retour focus, état ARIA robuste | Oui | Accessibilité | Aucun | Moyen | Menu mobile utilisable au clavier. |
| P2-06 | Onglets sans Home/End | Accessibilité | `script.js` | Ajouter gestion Home/End conforme ARIA tabs | Oui | Accessibilité | Aucun | Faible | Navigation onglets complète au clavier. |
| P2-07 | Grille d'interprétation déborde en impression | Élèves | `styles.css`, activité 4 | Neutraliser `min-width: 920px` en print, simplifier colonnes ou fractionner | Oui | Pédagogie | Test A4 | Moyen | La grille tient en A4 sans coupe horizontale. |
| P2-08 | Back-to-top non confirmé en script headless | Tous | `script.js`, `styles.css` | Retester et fiabiliser l'apparition après scroll | Oui | UX | Aucun | Faible | Le bouton apparaît et ramène en haut après scroll. |
| P2-09 | Bibliographie et sources dispersées | Approfondissement | `#recherche`, pages sources | Créer une page de sources/bibliographie structurée | Oui | Scientifique | Bibliographie validée | Moyen | Les sources centrales sont consultables en un endroit. |
| P2-10 | Statuts PER non publiables tels quels | Enseignants | `docs/per-index.md`, futur public | Préparer une version publique validée, sans codes incertains | Partiel | PER/pédagogie | Validation humaine | Moyen | Formulations PER prêtes à publication. |

## P3 - Enrichissements futurs

| ID | Problème | Public touché | Fichier ou URL | Action recommandée | Automatisation Codex | Validation humaine | Dépendance | Effort | Critère d'acceptation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P3-01 | Galerie et modèles 3D absents | Élèves, musées | Section modèles 3D | Intégrer modèles GLB validés avec alternatives | Partiel | Anatomie, droits | Modèles validés | Important | Modèles utiles et documentés. |
| P3-02 | Traductions complètes absentes | Publics multilingues | Tout le site | Traduire parcours et ressources essentielles | Partiel | Traduction humaine | Version FR stabilisée | Important | Langue annoncée = parcours réellement traduit. |
| P3-03 | Architecture de gabarits copiés | Maintenance | `ressources/*.html` | Définir une convention stricte de gabarits statiques | Oui | Technique | Aucun | Moyen | Nouvelles pages cohérentes sans framework. |
| P3-04 | Financement et gouvernance publique peu visibles | Approfondissement | `#recherche` | Ajouter gouvernance, crédits, financement, versions | Oui | Projet | Données projet | Faible | Page de gouvernance publiable. |
