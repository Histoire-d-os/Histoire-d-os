# Audit impression

Méthode : Chrome headless avec média `print`, format A4, export PDF temporaire dans `tmp/pdfs/`, puis lecture avec `pypdf`.

## Pages testées

| Page | Pages PDF | Menus/actions masqués | Débordement de tableau | Sources/crédits | Observations |
| --- | ---: | --- | --- | --- | --- |
| `ressources/document-mission-astragale.html` | 7 | Oui | Non | Oui, source-box présente | Lisible ; consommation d'encre modérée grâce au style print clair. |
| `ressources/document-musee-ou-est-l-os.html` | 6 | Oui | Non | Oui, source-box présente | Lisible ; procédure assez longue mais imprimable. |
| `ressources/document-vrai-prudent-verifier.html` | 4 | Oui | Non | Oui, source-box présente | Format court satisfaisant. |
| `ressources/recit-achille-astragale.html` | 5 | Oui | Non | Non, pas de `source-box` | PDF très lourd, environ 17 Mo, à cause des images ; crédits/statut des illustrations à rendre visibles. |

## Captures produites

- `docs/qa/audit-initial/print-fiche-mission-astragale.png`
- `docs/qa/audit-initial/print-guide-musee-os.png`

## Problèmes d'impression

| Priorité | Problème | Page | Action recommandée |
| --- | --- | --- | --- |
| P1 | 47 pages ont un bouton d'impression mais aucune campagne A4 complète n'est documentée | `ressources/*.html` | Ne pas déclarer "prêt à imprimer" avant validation couleur, niveaux de gris et imprimante scolaire. |
| P1 | Récit d'Achille lourd en PDF et crédits/statut non visibles dans l'impression | `ressources/recit-achille-astragale.html` | Ajouter crédits/statut des illustrations ; prévoir compression ou version print allégée. |
| P2 | Grille d'interprétation avec tableau à 920 px en mode print | `ressources/activite-04-grille-interpretation.html` | Neutraliser `min-width` en print ou diviser le tableau. |
| P2 | Certains bandeaux et couleurs restent présents en impression | Plusieurs documents | Vérifier consommation d'encre en imprimante réelle ; simplifier les fonds si nécessaire. |

## Limites

L'audit a utilisé des PDF temporaires générés en headless. Il ne remplace pas un essai réel sur imprimante ni une vérification physique des niveaux de gris.
