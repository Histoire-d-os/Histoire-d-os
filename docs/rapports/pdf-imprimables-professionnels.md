# Imprimables professionnels PDF et Word

Date : 20 juillet 2026
Branche : `test/pdf-imprimables-professionnels`
Statut : lot pilote généré et contrôlé ; impression physique et validations humaines restantes

## Résumé

Le lot comprend **80 PDF A4** et **80 documents Word éditables**, soit 20 livrables dans chacune des quatre langues : français, anglais, allemand et italien. Pour chaque activité, cinq formats sont proposés : fiche élève, guide d'encadrement, supports, corrigé et kit complet.

Les PDF sont composés pour l'impression. Les DOCX utilisent de vrais styles Word, des tableaux éditables, des listes natives, des champs de pagination et des règles de conservation des blocs. Les anciens fichiers de `ressources/pdf-wip/` et les imprimables HTML sont conservés.

## Inventaire final

| Langue | PDF | DOCX | Pages PDF |
| --- | ---: | ---: | ---: |
| Français | 20 | 20 | 124 |
| Anglais | 20 | 20 | 124 |
| Allemand | 20 | 20 | 124 |
| Italien | 20 | 20 | 124 |
| **Total** | **80** | **80** | **496** |

| Livrable | Nombre | Pages PDF cumulées |
| --- | ---: | ---: |
| Corrigé | 16 | 32 |
| Fiche élève | 16 | 48 |
| Guide d'encadrement | 16 | 80 |
| Supports | 16 | 72 |
| Kit complet | 16 | 264 |

Dans chaque langue, les kits complets comptent 16 pages pour les activités 1, 3 et 4, et 18 pages pour l'activité 2.

## Règles de pagination

- paragraphes, éléments de liste, figures et cartes conservés ensemble lorsqu'ils tiennent sur une page ;
- lignes de tableau non sécables et en-têtes répétés sur les tableaux longs ;
- titres attachés au contenu qui les suit ;
- sauts explicites entre guide, fiche, supports, corrigé et sources dans les kits ;
- zones de réponse et grilles dimensionnées pour l'A4 ;
- couverture compacte afin d'éviter une page parasite avec les titres allemands plus longs ;
- sources et crédits maintenus en fin de document et dans les pieds de page utiles.

Une partie trop longue pour une seule page peut continuer sur la suivante, mais la rupture est placée entre deux blocs logiques plutôt qu'au milieu d'une ligne de tableau ou d'un court paragraphe.

## Décisions éditoriales

### Activité 1

Les visualisations BodyParts3D, le pied et le squelette de mouton, le schéma bovin ancien et la planche LeConte 1922 sont intégrés avec leurs crédits. La planche LeConte est présentée comme ancienne et ne remplace pas un schéma anatomique moderne validé.

### Activité 2

Les cartes animaux sont intégrées. Les os A-D restent des emplacements neutres portant la mention qu'un corpus scientifique doit être intégré après validation. Aucun corrigé d'espèce n'est fourni ; le corrigé porte sur la qualité du raisonnement. La chauve-souris reste un prolongement.

### Activité 3

Borel est présenté comme image moderne d'une tradition tardive. Rubens et Rothaug sont présentés comme œuvres post-antiques. L'illustration contemporaine est signalée comme telle. BodyParts3D sert au vocabulaire anatomique et ne prouve aucun récit. Les figures d'articles non publiables restent exclues.

### Activité 4

Le lot reste un support de méthode distinguant observation, hypothèse, interprétation et vérification. Les cartes A-E sont des gabarits neutres à compléter par une institution. Aucun objet archéologique réel ou usage n'est annoncé comme certain.

## Génération

Fichiers principaux :

- `ressources/print/pdf-styles.css` et `pdf-components.css` : composition A4 et composants ;
- `ressources/print/pdf-source.js` : sélection du livrable et composition du kit ;
- `ressources/print/pdf-sources/` : seize sources éditoriales, quatre activités dans quatre langues ;
- `scripts/generate-professional-pdfs.cjs` et `finalize-professional-pdfs.py` : génération et métadonnées PDF ;
- `scripts/generate-professional-docx.py` : génération des documents Word éditables ;
- `scripts/audit-professional-pdfs.py` et `audit-professional-docx.py` : contrôles automatisés.

## Résultats QA PDF

- 80 PDF attendus et trouvés ;
- 496 pages rendues et analysées ;
- format A4, texte sélectionnable et signets présents dans les 80 PDF ;
- 0 page vide ou presque vide détectée ;
- 0 caractère placé hors page ;
- aucune ressource distante chargée pendant la composition ;
- aucune URL locale Windows, aucun lien `file:///`, `_private-inputs/` ou `tmp/` dans les sources ;
- inspection visuelle des planches de contact, dont les quatre kits allemands et des kits anglais et italiens ;
- contrôles représentatifs en niveaux de gris.

Les résultats détaillés sont dans `docs/qa/pdf-imprimables-professionnels/`. Les PNG page par page sont reproductibles et ignorés par Git ; les planches de contact et les résultats structurés sont conservés.

## Résultats QA Word

- 80 DOCX attendus et trouvés, 20 par langue ;
- format A4, marges, en-têtes, pieds de page et champs `PAGE` / `NUMPAGES` vérifiés ;
- tableaux éditables à largeur fixe, lignes non sécables et en-têtes répétés ;
- paragraphes et listes configurés pour éviter les coupures maladroites ;
- images intégrées et relations internes contrôlées ;
- quatre kits représentatifs rendus dans un aperçu navigateur : FR activité 1, EN activité 2, DE activité 3 et IT activité 4.

Le moteur LibreOffice portable disponible dans l'environnement n'a pas terminé le rendu de contrôle. La validation structurelle et les aperçus de secours sont concluants, mais une ouverture finale dans Microsoft Word ou LibreOffice sur la machine cible reste requise avant diffusion définitive.

## Limites restantes

1. Relire humainement les traductions anglaise, allemande et italienne, en particulier le vocabulaire scientifique, pédagogique et juridique.
2. Effectuer la checklist d'impression physique en couleur et en niveaux de gris.
3. Ouvrir un échantillon de DOCX dans Microsoft Word ou LibreOffice et vérifier les sauts automatiques après modification.
4. Faire relire l'ensemble par les responsables scientifique et pédagogique.
5. Valider ou produire le schéma anatomique moderne du talus/astragale.
6. Intégrer et valider le corpus A-D de l'activité 2.
7. Intégrer un corpus antique validé pour l'activité 3.
8. Choisir et documenter les objets A-E de l'activité 4 avec l'institution concernée.
9. Vérifier les licences et notices finales avant de retirer le statut pilote.

## Conclusion

Le lot est techniquement prêt pour une phase de test encadrée. Il ne doit pas être présenté comme une édition scientifique, pédagogique ou linguistique définitive tant que l'impression physique, les corpus manquants et les validations humaines ne sont pas achevés.
