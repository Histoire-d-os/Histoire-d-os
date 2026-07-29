# Contrôle des documents Word éditables

Date : 20 juillet 2026

## Portée

- 80 documents DOCX contrôlés ;
- 20 documents par langue : français, anglais, allemand et italien ;
- cinq livrables par activité : fiche élève, guide d'encadrement, supports, corrigé et kit complet.

## Contrôle structurel

Le contrôle automatisé vérifie notamment :

- format A4 et marges ;
- styles de titres et de texte ;
- en-têtes, pieds de page et champs de pagination ;
- tableaux à largeur fixe ;
- lignes de tableau non sécables et en-têtes répétés ;
- conservation des paragraphes et des listes ;
- images intégrées et relations internes valides ;
- absence de fichiers manquants dans le lot.

Résultat : **80 documents trouvés, 0 échec structurel**.

## Contrôle visuel

Quatre kits représentatifs ont été rendus avec un moteur d'aperçu DOCX dans le navigateur :

- français, activité 1 ;
- anglais, activité 2 ;
- allemand, activité 3 ;
- italien, activité 4.

Les captures se trouvent dans `browser-preview/`. Elles confirment la hiérarchie, les tableaux, les images, les titres, les zones de réponse et les crédits. Elles ne recalculent pas exactement la pagination propre à Microsoft Word.

## Limite du rendu natif

Le script officiel de rendu DOCX a été essayé avec un LibreOffice portable. Ce moteur n'a pas terminé la conversion dans l'environnement de travail, et l'installation système n'était pas disponible. Aucun résultat de rendu natif n'est donc revendiqué.

Avant diffusion définitive, ouvrir au minimum un kit par langue dans Microsoft Word ou LibreOffice, actualiser les champs de page, puis vérifier l'aperçu avant impression en A4. Ce contrôle humain est particulièrement important après toute modification du texte ou des tableaux.
