# Etat initial des kits francais v2

Date de l'audit : 3 aout 2026
Branche : `content/kits-fr-scientifiques-v2`
Commit de depart : `3d84a82`
Statut : diagnostic multi-agent, sans validation humaine definitive

## Perimetre

L'audit porte sur les quatre activites francaises existantes et sur le cadrage de
l'activite 5, *Les osselets a travers le temps et l'espace*. Il examine les pages
web, les sources editoriales francaises sous `ressources/print/pdf-sources/`, les
PDF et DOCX existants, les imprimables HTML, les scripts de generation, les
rapports QA, les registres publics et les sources privees autorisees.

Six agents ont travaille en lecture seule :

- `scientific-reviewer` : termine ;
- `pedagogy-reviewer` : termine ;
- `per-reviewer` : termine ;
- `museum-mediation-reviewer` : termine ;
- `media-rights-reviewer` : termine ;
- `print-accessibility-reviewer` : termine.

Leurs avis documentent des risques et des actions. Ils ne remplacent pas la
validation de Barbara Care, d'une personne enseignante, d'une personne
archeozoologue, d'une institution museale ou d'un conseil juridique.

## Conclusion generale

Le dispositif est techniquement avance : les quatre kits complets francais sont
generes en PDF A4 et en DOCX editable, les sources et credits sont visibles, et
les controles automatises n'ont detecte ni page vide ni debordement. Cette
qualite technique ne doit cependant pas etre confondue avec la maturite du
contenu.

Les activites 2, 3 et 4 restent dependantes de corpus absents ou provisoires.
L'activite 1 est la plus avancee, mais un schema anatomique moderne valide, une
harmonisation des supports et un test avec les eleves restent necessaires.
L'activite 5 dispose d'un objectif et d'une structure, mais d'aucun corpus ni
livrable.

## Sources editoriales canoniques a stabiliser

Les sources professionnelles sous `ressources/print/pdf-sources/` sont les
versions les plus coherentes pour la future reecriture. Des ressources HTML plus
anciennes conservent cependant des scenarios, productions, durees et statuts
concurrents. Avant toute reecriture, une decision editoriale doit designer la
source canonique et preciser le sort de chaque ressource secondaire.

## Activite 1 - Trouver l'astragale

### Etat verifie

- La progression decrire, localiser, justifier et comparer est coherente.
- Le talus est correctement distingue du calcaneum et du talon visible dans la
  source professionnelle.
- Les vues BodyParts3D et les images animales sont integrees avec des legendes.
- La planche LeConte 1922 est presentee comme ancienne et non comme reference
  anatomique moderne.
- Le kit complet compte 16 pages et son rendu A4 est techniquement stable.

### Problemes

- La caracterisation `os court, compact` dans l'ancien corrige est fragile et
  doit etre retiree ou validee.
- Le schema moderne talus-calcaneum-talon manque.
- Le transfert humain-mouton-bovin n'est pas encore appuye par une validation
  anatomique comparative explicite.
- La fiche, le support et le corrige ne sont pas parfaitement alignes question
  par question.
- Le statut public parait plus avance que les validations restantes.
- Le PER distingue la representation du squelette en 5e-6e de la comparaison
  avec d'autres vertebres en 7e-8e.
- Les conditions juridiques exactes de la planche LeConte et la chaine de
  derivation de plusieurs images restent a documenter.

### Maturite

**Niveau 3 - test adulte possible.** La methode et les supports permettent une
simulation par un adulte. Un test avec eleves ne doit intervenir qu'apres
harmonisation, validation anatomique et choix d'un ordre de revelation qui ne
donne pas la reponse.

## Activite 2 - Associer un astragale a un animal

### Etat verifie

- La promesse porte sur une association argumentee et non sur une identification
  experte.
- Le corrige evalue la demarche : observation, indices, degre de confiance et
  donnees manquantes.
- Les cartes animaux sont presentes ; la chauve-souris reste un prolongement.
- Les cartes A-D sont explicitement neutres dans le kit professionnel.
- Le kit complet compte 18 pages et son rendu A4 est techniquement stable.

### Problemes

- La tache centrale n'est pas realisable sans un corpus reel A-D.
- Chaque os futur doit disposer d'un taxon verifie, d'une lateralite, d'une
  orientation constante, d'une echelle, de dimensions, d'un age ou etat de
  fusion, d'une provenance, de vues multiples et d'une reference comparative.
- La portee de Zeder et Lapham (2010) est actuellement resumee de facon
  incomplete : l'article montre a la fois les limites d'un usage non forme et la
  fiabilite possible de criteres combines avec formation et collection de
  reference.
- La figure comparative Vuillien est visible publiquement alors que ses droits
  et son role pedagogique ne sont pas valides.
- Les credits du cheval, du mouton et du porc divergent entre page web et source
  PDF.
- Quatre os multiplies par quatre animaux constituent une charge excessive pour
  une partie du public ; le format principal devrait commencer par deux os et
  trois animaux.

### Maturite

**Niveau 2 - prototype.** La methode est construite et imprimable, mais aucun
test de l'activite centrale n'est possible avant constitution et validation du
corpus A-D.

## Activite 3 - Achille et la transformation d'un recit

### Etat verifie

- Borel est traite comme une oeuvre moderne representant une tradition tardive.
- Rubens et Rothaug sont traites comme des oeuvres post-antiques.
- L'illustration contemporaine est signalee comme telle.
- BodyParts3D sert uniquement au vocabulaire anatomique.
- Le kit distingue date, statut, portee et limite d'un document.
- Le kit complet compte 16 pages et son rendu A4 est techniquement stable.

### Problemes

- La source PDF associe a l'URL OpenEdition `puc/27266` un titre inexistant sur
  Achille. Cette URL correspond a `BC-002`, *L'astragale reexamine : jeu, rites
  et violence dans l'Antiquite classique*. La source principale sur Achille est
  `BC-001`, DOI `10.1093/bics/qbag009`.
- Le corpus antique est vide. Il faut au minimum des extraits courts et
  references de l'*Iliade*, de Stace et d'une source latine mentionnant le
  `talus`, plus une image antique dont la portee est explicitee.
- Les formulations doivent distinguer l'absence d'invulnerabilite dans
  l'*Iliade*, la tradition tardive de l'immersion et l'interpretation moderne de
  Barbara Care.
- La seance de 45 minutes est surchargee si chronologie, statut documentaire,
  latin, anatomie et transfert sont traites ensemble.
- Un transfert vers un nouveau document ou un autre recit transforme manque.
- Les droits des reproductions modernes et des illustrations contemporaines ne
  sont pas entierement documentes.

### Maturite

**Niveau 2 - prototype.** Le raisonnement documentaire est solide, mais la
reference principale doit etre corrigee et le corpus antique constitue avant
un test avec eleves.

## Activite 4 - Un os, plusieurs vies

### Etat verifie

- Observation, hypothese, interpretation et verification sont bien distinguees.
- La conclusion `etabli / plausible / inconnu` est pedagogiquement pertinente.
- Les imprimables professionnels utilisent des gabarits neutres A-E.
- La revelation progressive du contexte est adaptee a la classe et au musee.
- Le kit complet compte 16 pages et son rendu A4 est techniquement stable.

### Problemes

- La page web, les anciens imprimables et le kit professionnel presentent trois
  etats concurrents du corpus.
- Les cinq images du Metropolitan Museum of Art sont des visuels de maquette et
  non un corpus archeologique valide.
- Deux ou trois cas reels sont preferables a cinq objets pour une seance de
  60-75 minutes ; un seul objet suffit pour 45 minutes.
- Chaque cas doit posseder provenance, datation, dimensions, inventaire,
  contexte, interpretation publiee, interpretation concurrente et degre de
  certitude.
- Le modele 3D du jeu de codage a une origine et des droits non determines ; le
  jeu n'est pas une preuve d'usage antique.
- Le dispositif attribue a Enee le Tacticien exige une edition critique et un
  passage exact avant toute affirmation publique.
- La selection complete des trous du jeu n'est pas accessible sans pointage.

### Maturite

**Niveau 2 - prototype.** Le protocole peut etre simule par des adultes avec un
objet de remplacement, mais l'activite archeologique ne peut pas etre testee
avec des eleves avant selection des cas reels.

## Activite 5 - Les osselets a travers le temps et l'espace

### Etat verifie

Aucun kit, page, registre de cas, carte, frise ou media n'existe. Le present
audit fournit uniquement le cahier des charges initial. Le jeu de codage ne
constitue pas l'activite 5 ; il peut rester un prolongement contemporain separe.

### Direction retenue

L'activite doit faire enqueter les eleves sur une affirmation generale, par
exemple `les astragales etaient des jouets`, a partir de six a huit cas. Chaque
groupe analyse un cas, le place sur une carte et une frise, qualifie la portee de
ses sources, puis le compare avec un autre cas qui confirme, nuance ou contredit
l'interpretation initiale.

### Corpus candidat, non valide

- Achille, le `talus` et la transformation du recit ;
- astragales et mysteres dionysiaques ;
- tombe de Tarente ;
- base en forme d'astragale d'Olympie ;
- memorial de Thespies ;
- necropole de Locres ;
- jeu, valeurs et gestes de lancer ;
- dispositif attribue a Enee le Tacticien.

Cette liste sert a orienter la recherche. Aucun cas n'est retenu avant lecture
du texte integral, notice d'objet, validation scientifique et statut des droits.

### Maturite

**Niveau 1 - structure.** La question, le modele de donnees et la progression
sont definis, mais le corpus et les livrables n'existent pas.

## Contradictions et arbitrages

1. **Technique contre contenu.** Les PDF et DOCX sont techniquement stables,
   mais les corpus restent incomplets. Arbitrage : la maturite est attribuee au
   contenu, pas au fichier genere.
2. **Sources concurrentes.** Les anciens HTML et les sources professionnelles
   divergent. Arbitrage : choisir explicitement une source canonique avant
   reecriture, sans supprimer les autres avant migration.
3. **Zeder-Lapham.** Le registre insiste sur les limites ; le texte integral
   montre aussi une forte fiabilite sous conditions. Arbitrage : presenter les
   deux aspects et limiter la portee a mouton-chevre.
4. **Achille.** `BC-001` et `BC-002` sont confondus dans le kit. Arbitrage :
   corriger la bibliographie avant toute generation.
5. **PER.** L'index actuel est prudent mais incomplet ou trop large sur SHS 22,
   L1 25 et Arts visuels. Arbitrage : conserver les formulations prudentes et
   corriger les pages et portees dans une mission dediee.
6. **Activite 5.** Une revue a envisage le jeu de codage comme A5. Arbitrage :
   cette hypothese est rejetee car le cahier des charges definit A5 comme une
   synthese geographique et chronologique.

## Blocages transversaux

- textes alternatifs absents dans les proprietes des images de plusieurs DOCX ;
- impression physique, Word natif, lecteur d'ecran et tests avec publics non
  realises ;
- chaine source-fichier-transformation non documentee pour plusieurs medias ;
- permissions et preuves de licence non stabilisees ;
- source pedagogique canonique non designee ;
- validation scientifique, enseignante et museale non realisee.

## Sources scientifiques deja suffisantes pour cadrer

- `BC-001` : cadrage Achille, invulnerabilite, `talus` et astragale, avec pages
  internes ciblees ;
- `BC-002` : cadrage jeu, rites, violence et certains cas, p. 105-127 ;
- `BC-003` : cadrage du projet et de la mediation ;
- Zeder et Lapham (2010) : methode et limites mouton-chevre, texte integral ;
- `NCBI-TALUS` : anatomie generale du talus ;
- PDF PER prives : libelles et progressions du cycle 2.

## Textes integraux necessaires en priorite

1. `BC-006`, memorial de Thespies ;
2. `BC-004`, base d'Olympie ;
3. `BC-007` ou `BC-008`, Locres ;
4. `BC-011`, jeu et pratiques ;
5. `BC-005`, uniquement si une image de vase est retenue ;
6. edition critique d'Enee le Tacticien pour le passage pertinent.

`BC-019` et `BC-020` restent inutilisables pour valider une affirmation tant
que publication et texte integral ne sont pas confirmes.

## Prochaines validations humaines

- Barbara Care : terminologie, corpus, portee des sources et degres de certitude ;
- personne enseignante ou formatrice : niveaux 5e-6e / 7e-8e, consignes,
  durees, criteres et charge cognitive ;
- personne archeozoologue : corpus A-D et test aveugle ;
- institution museale : corpus local, manipulation, revelation et notices ;
- responsable des droits : licences, permissions, transformations et canaux ;
- publics : impression physique, Word, lecteur d'ecran, adultes puis eleves.

## Documents associes

- [Matrice des livrables](matrice-livrables.csv)
- [Registre des validations](registre-validations.csv)
- [Registre des medias](registre-medias.csv)
- [Registre PER](registre-per.csv)
- [Registre des affirmations](registre-affirmations.csv)
- [Registre des sources manquantes](registre-sources-manquantes.csv)
- [Questions scientifiques](questions-scientifiques.md)
- [Cahier des charges de l'activite 5](cahier-des-charges-activite-05.md)
- [Plan de finalisation](plan-de-finalisation.md)
