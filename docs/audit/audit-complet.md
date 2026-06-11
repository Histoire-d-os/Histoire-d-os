# Audit complet avant refonte

Date : 2026-06-11
Commit local analysé : `dfd4b31`
URL locale : `http://127.0.0.1:8000/`
URL publique : `https://histoire-d-os.github.io/Histoire-d-os/`

## Méthode

- Site servi localement avec le Python bundlé : `python -m http.server 8000 --bind 127.0.0.1`.
- Audit statique du dépôt : HTML, liens, ancres, médias, Markdown public, statuts, placeholders.
- Audit navigateur avec Chrome headless via DevTools Protocol, car `npx` était présent mais cassé et le package Playwright du runtime ne chargeait pas `playwright-core`.
- Captures enregistrées dans `docs/qa/audit-initial/`.
- Exports PDF temporaires créés dans `tmp/pdfs/` pour inspection A4 ; aucun PDF public n'a été créé.
- Quatre sous-agents ont produit des analyses parallèles : architecture, pédagogie/musées, accessibilité/impression, technique/gouvernance.

## Chiffres clés

| Mesure | Résultat |
| --- | ---: |
| Pages HTML inspectées | 48 |
| Liens inspectés | 287 |
| Médias référencés | 8 |
| Liens locaux manquants | 0 |
| Ancres locales manquantes | 0 |
| Erreurs console navigateur | 0 |
| 404 réseau local navigateur | 0 |
| Liens externes répondant 404 | 6 |
| Liens externes répondant 403 | 7 |
| Liens publics vers fichiers Markdown | 11 |
| Pages avec placeholders | 9 |
| Pages avec bouton d'impression | 47 |
| Différences HTML local/GitHub Pages | 0 |

## Dix problèmes prioritaires

1. Les statuts publics sont trop optimistes : l'accueil annonce des activités "prêtes à lancer" alors que les registres et placeholders montrent des ressources obligatoires encore manquantes.
2. L'activité 2 parle de "jeu actuellement validé" alors que les animaux, critères, cartes et corrigés restent à valider.
3. Le sélecteur FR/DE/IT/EN donne une attente de multilinguisme complet, mais seules l'interface et une partie de l'accueil sont traduites.
4. Les quatre publics définis par les décisions éditoriales ne disposent pas encore de quatre portes d'entrée nettes.
5. Les correspondances PER restent internes et provisoires ; elles ne sont pas accessibles publiquement comme parcours enseignant validé.
6. La traçabilité version/date/statut/droits/crédits est incomplète sur de nombreuses pages imprimables.
7. Les illustrations générées ou contemporaines, notamment le visuel d'accueil et le récit d'Achille, ne sont pas toujours signalées publiquement comme telles.
8. Le schéma public du talus est présenté comme schéma anatomique alors que la validation anatomique obligatoire reste à obtenir.
9. L'accessibilité visuelle doit être renforcée : contraste de certains boutons, focus clavier, lien d'évitement, tables sans caption.
10. L'impression est prometteuse mais pas encore validée : 47 pages ont un bouton d'impression, la grille d'interprétation de l'activité 4 déborde en A4 et le récit d'Achille produit un PDF lourd.

## Points positifs

- Site statique compatible GitHub Pages, sans framework ni build tool.
- 48 pages HTML accessibles localement et publiquement.
- Aucun lien local cassé et aucune ancre locale manquante.
- Aucune erreur JavaScript observée au chargement sur les 3 largeurs testées.
- Un seul `h1` par page dans l'inventaire.
- Les placeholders sont conservés au lieu d'être remplacés par de faux médias.
- Les pages d'activités sont déjà riches : fiches élèves, guides, corrigés, cartes, grilles, prolongements.
- Les règles de gouvernance et de validation sont désormais documentées dans `AGENTS.md`, la compétence locale et `docs/`.

## Limites de l'audit

- Le test navigateur a utilisé Chrome DevTools directement, pas le wrapper Playwright CLI, à cause de l'état cassé de `npx` et du paquet Playwright incomplet.
- Les statuts 403 sur certaines sources externes peuvent provenir d'un blocage anti-bot ; ils demandent une vérification humaine dans un navigateur classique.
- Les impressions PDF ont été produites en headless pour audit ; elles ne remplacent pas un test imprimante réel couleur et niveaux de gris.
- Les captures sont des artefacts d'audit internes, non intégrés au site.
- Les validations scientifiques, pédagogiques, juridiques et muséales restent humaines.

## Livrables liés

- `docs/audit/plan-priorise.md`
- `docs/audit/inventaire-pages.csv`
- `docs/audit/inventaire-liens.csv`
- `docs/audit/inventaire-medias.csv`
- `docs/audit/parcours-utilisateurs.md`
- `docs/audit/audit-impression.md`
- `docs/audit/audit-accessibilite.md`
- `docs/audit/audit-scientifique-editorial.md`
- `docs/audit/url-legacy-map.csv`
- `docs/audit/audit-static-summary.json`
- `docs/audit/audit-browser-summary.json`
- `docs/audit/audit-responsive.csv`
- `docs/audit/audit-console.csv`
