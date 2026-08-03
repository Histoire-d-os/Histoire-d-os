# Smoke tests des agents spécialisés

Date du test : 2026-07-29

## Protocole

Les six rôles persistants ont été testés en parallèle sur :

- `ressources/activite-01-trouver-astragale.html` ;
- `ressources/print/activite-01-*.html` ;
- les sources et documents de référence propres à chaque rôle.

Chaque agent a lu son fichier `.codex/agents/*.toml`, travaillé en lecture seule,
cité ses sources ou signalé leur absence, et distingué ses constats des
validations humaines. Aucun agent n'a modifié un fichier.

Ces tests vérifient le comportement des rôles. Ils ne constituent ni une
validation scientifique, ni une validation PER, ni une validation juridique,
ni une homologation d'accessibilité.

## `per-reviewer`

1. Le public `8-12 ans` couvre plusieurs degrés du cycle 2. Le repérage du
   squelette et la comparaison avec d'autres vertébrés ne sont pas placés au
   même niveau dans le PER. Source : `PER MSN SHS.pdf`, p. 48 du PDF.
2. L'activité mobilise certains éléments de MSN 27, mais ne couvre pas
   l'ensemble du système locomoteur ni les conséquences pour la santé. Source :
   `PER MSN SHS.pdf`, p. 48-49.
3. L'observation et la formulation d'hypothèses contribuent à la démarche
   scientifique, sans suffire à couvrir MSN 26 dans son ensemble. Source :
   `PER MSN SHS.pdf`, p. 34 et 36.
4. La comparaison humain/autre mammifère est demandée sur la page et la fiche,
   mais n'est pas reprise avec la même précision dans les critères du guide.
   Source : `PER MSN SHS.pdf`, p. 48.
5. Les critères de la fiche sont observables, mais doivent rester présentés
   comme des critères locaux à l'activité. Source : `PER MSN SHS.pdf`, p. 36,
   44 et 49.
6. L'ancrage L1 21 reste secondaire : les documents soutiennent la lecture
   documentaire sans traiter toutes ses composantes. Source : `PER L1.pdf`,
   p. 24, 32 et 33.
7. L1 24 ne peut être revendiqué sans situation de communication orale plus
   précise. Source : `PER L1.pdf`, p. 50, 54 et 55.
8. Un schéma anatomique moderne validé, une validation enseignante et un essai
   avec des élèves restent absents. Statut recommandé : contribution provisoire,
   à adapter et à valider humainement.

## `pedagogy-reviewer`

1. La consigne « entourer la zone » est ambiguë parce que l'image cible n'est
   pas nommée et que l'une des images montre déjà un talus isolé.
2. Les critères de réussite ne sont pas parfaitement alignés entre page, fiche
   et guide.
3. Le corrigé donne des éléments globaux, mais ne répond pas explicitement aux
   quatre questions de la fiche.
4. La progression observer, situer, comparer et conclure est pertinente, mais
   l'ordre de la fiche peut encourager une réponse trop précoce.
5. Le lexique reste exigeant pour les plus jeunes : `indice`, `probable`,
   `confirmer`, `surfaces articulaires` et certains noms de vues demandent un
   étayage. Cadre utile : `CAST-UDL-30`.
6. La différenciation existe, mais gagnerait à proposer directement réponse
   orale, pointage, amorce de phrase et défi séparé.
7. Les durées et le nombre d'images diffèrent selon les supports ; trois
   scénarios clairement nommés faciliteraient la préparation.
8. Il manque une source pédagogique spécifique aux 8-12 ans, une relecture
   enseignante et un essai en classe. Le test ne vaut pas validation par une
   personne enseignante.

## `scientific-reviewer`

1. La section publique « Sources » contient surtout des crédits d'images ; les
   références anatomiques devraient être séparées et reliées aux affirmations.
2. La localisation du talus dans le tarse est soutenue par `BC-001`, p. 10, et
   `NCBI-TALUS`, sections « Introduction » et « Structure and Function ».
3. La distinction moderne entre `talus` et l'usage historique ou
   archéologique d'`astragale` reste une convention de projet à faire valider
   par Barbara Carè et une personne anatomiste francophone.
4. Les expressions « petit os » et surtout « os court, compact » sont trop
   fragiles sans source morphologique précise. `NCBI-TALUS` décrit un os
   irrégulier portant de nombreuses surfaces articulaires.
5. « Stabilité, appui et mouvement » serait plus contrôlable que le seul terme
   général « équilibre ». Sources : `BC-001`, p. 10 et 12 ; `NCBI-TALUS`.
6. La comparaison avec mouton ou bovin exige une validation vétérinaire ou
   archéozoologique. `UNAL-ET-AL-2025` est pertinent, mais son résumé ne valide
   pas à lui seul les images et localisations utilisées.
7. La séparation entre description, hypothèse et vérification est correctement
   maintenue dans les supports.
8. Les planches anciennes sont bien présentées comme comparaisons et non comme
   anatomie moderne validée.
9. Les validations de Barbara Carè, d'une personne anatomiste et d'une personne
   archéozoologue restent nécessaires.

## `museum-mediation-reviewer`

1. Le matériel annoncé est surtout scolaire. Chaque institution doit confirmer
   les crayons, la projection, l'espace et les variantes orales autorisées.
2. Les durées `10-20 min`, `30-45 min` et `30-60 min` devraient être rattachées
   à des scénarios clairement distincts.
3. La procédure détaillée pour la classe n'a pas d'équivalent aussi précis pour
   une station de musée.
4. La règle interdisant la manipulation sans autorisation est nécessaire, mais
   ne remplace pas un protocole institutionnel de conservation.
5. Chaque support doit être identifié comme original, copie, photographie ou
   modèle. Une réplique n'est manipulable que si le musée l'autorise.
6. Aucun corpus muséal réel, notice d'objet, provenance, datation ou jauge
   validée n'est associé à cette activité.
7. Les variantes de musée sont présentes, mais le guide reste très centré sur
   le vocabulaire scolaire.
8. Source de cadrage : `ICOM-ETHICS-2026`. Les règles du musée, l'accord des
   équipes et un essai en situation restent prioritaires.

## `media-rights-reviewer`

1. Les fichiers médias existent, mais leurs métadonnées locales ne suffisent
   pas à prouver auteur, licence et correspondance avec l'original.
2. Les deux vues BodyParts3D sont publiables sous conditions sous CC BY-SA 2.1
   JP. Source : `BODYPARTS3D`. Les notices originales et transformations
   doivent encore être consignées.
3. Le pied de mouton de l'University of Dundee est annoncé sous CC BY-SA 4.0,
   mais la notice source et l'identité exacte du concédant restent à vérifier.
4. Le squelette du MAV-USP est annoncé sous CC BY-SA 4.0. La page principale
   omet une partie de la chaîne d'attribution présente dans l'imprimable.
5. Le domaine public de la planche Ellenberger, Baum et Dittrich doit être
   documenté par l'édition, la date et la notice d'origine.
6. « No known restrictions » pour LeConte 1922 n'est pas une licence. Le
   fondement juridique et l'auteur de l'illustration restent à valider.
7. L'auteur, le titulaire et l'origine de l'élément osseux du logo doivent être
   documentés.
8. Les crédits d'images et les sources scientifiques doivent rester séparés.
   Ce contrôle documentaire n'est pas un avis juridique.

## `print-accessibility-reviewer`

1. Les `alt` sont présents, mais les images annotées et comparatives demandent
   une description détaillée ou un parcours non visuel équivalent. Source :
   `WCAG-22`, critère 1.1.1.
2. La consigne fondée sur le talus « montré en rouge » n'offre pas de repère
   alternatif manifeste. Risque au regard de `WCAG-22`, critère 1.4.1.
3. Les styles de focus de la navigation sont trop peu contrastés. Risque au
   regard de `WCAG-22`, critères 1.4.11 et 2.4.7.
4. Le tableau du guide et `overflow-x: hidden` exigent un test réel à 200 % et
   à faible largeur. Sources : `WCAG-22`, critères 1.4.4 et 1.4.10.
5. Les commandes utilisent des liens et boutons natifs ; le test complet du
   menu mobile au clavier reste hors de ce smoke test.
6. Les cinq pages contrôlées ont chacune un seul `h1`, des cibles d'évitement
   présentes et aucun identifiant dupliqué.
7. Les principaux contrastes textuels statiques atteignent le niveau AA ; le
   contraste interne des images reste à contrôler humainement.
8. Les règles A4, de masquage des commandes web et d'anti-coupure sont
   présentes, sans valider le rendu imprimé réel.
9. Le tableau et certaines sections compactes peuvent encore se couper. Un
   aperçu A4 page par page et un test en niveaux de gris restent nécessaires.

## Résultat

- Agents testés : 6 sur 6.
- Format demandé : 5 à 10 constats par agent.
- Sources citées ou absences signalées : oui.
- Validations humaines distinguées : oui.
- Fichiers publics modifiés : aucun.
- Fichiers modifiés par les agents : aucun.
