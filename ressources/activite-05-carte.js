(() => {
  "use strict";

  const cases = [
    {
      id: "abydos", number: 1, year: -3000, date: "Vers 3100-2900 av. J.-C.", lat: 26.1844, lng: 31.9197, precision: "exact", kind: "object", kindLabel: "Objet archéologique", location: "Abydos, Égypte",
      title: "Un petit os d'Abydos", image: "../assets/images/activite-04/objet-a-osselet-os-met-a-valider.jpg", alt: "Petit astragale en os provenant d'Abydos, photographié sur fond gris.",
      observe: "La notice décrit un petit os animal trouvé à Abydos. Elle précise qu'il pourrait provenir de la tombe du roi Den.",
      propose: "La provenance proposée invite à étudier un possible contexte funéraire, sans le présenter comme certain.",
      limit: "La tombe exacte et la fonction restent incertaines. La forme seule ne prouve ni un jeu ni un rite.",
      check: "Relire la documentation de fouille, la position ancienne de l'objet et les traces visibles sur l'os.",
      sources: [{label: "Metropolitan Museum of Art, inv. 01.4.92", url: "https://www.metmuseum.org/art/collection/search/547397"}],
      credit: "Image : The Metropolitan Museum of Art, Open Access, CC0. Interprétation à valider."
    },
    {
      id: "thebes", number: 2, year: -1500, date: "Vers 1550-1458 av. J.-C.", lat: 25.7333, lng: 32.6000, precision: "exact", kind: "object", kindLabel: "Objets de jeu", location: "Thèbes, Égypte",
      title: "Trois osselets associés au jeu", image: "../assets/images/activite-05/egypte-trois-osselets-met.jpg", alt: "Trois petits osselets clairs alignés sur un fond gris.",
      observe: "Trois astragales en os proviennent d'une tombe fouillée par le musée dans la nécropole thébaine.",
      propose: "La notice les classe comme pièces de jeu et les rapproche des dispositifs servant à produire un résultat aléatoire.",
      limit: "Ces pièces ne permettent pas de reconstituer à elles seules les règles, les joueurs ou la fréquence du jeu.",
      check: "Comparer l'ensemble avec les jeux égyptiens mieux conservés et la publication complète du tombeau.",
      sources: [{label: "Metropolitan Museum of Art, inv. 16.10.505a-c", url: "https://www.metmuseum.org/art/collection/search/547051"}],
      credit: "Image : The Metropolitan Museum of Art, Open Access, CC0."
    },
    {
      id: "amathus", number: 3, year: -450, date: "VIe-IVe siècles av. J.-C. · deux ensembles distincts", lat: 34.7148, lng: 33.1419, precision: "exact", kind: "object", kindLabel: "Ensembles archéologiques", location: "Amathonte, Chypre",
      title: "Deux ensembles d'astragales dans des tombes d'Amathonte", image: "../assets/images/activite-05/chypre-amathonte-astragales.jpg", alt: "Vitrine présentant dix-sept astragales de mouton ou de chèvre et leur cartel au musée archéologique de Limassol.",
      media: [
        {type: "image", src: "../assets/images/activite-05/chypre-amathonte-astragales.jpg", alt: "Vue complète d'une vitrine : un cartel en haut et dix-sept astragales clairs disposés en quatre rangées dans la partie basse.", label: "Vue entière", role: "3A · Vitrine et 17 astragales.", caption: "La photographie est affichée entièrement : elle montre le cartel et les dix-sept astragales de la tombe 441/23 présentés à Limassol. Cet ensemble n'est pas l'objet du British Museum.", credit: "Catlemur, Amathus Astragaloi, Wikimedia Commons, CC BY-SA 4.0.", sourceUrl: "https://commons.wikimedia.org/wiki/File:Amathus_Astragaloi.jpg", view: "amathus-overview"},
        {type: "card", label: "Lecture du cartel", role: "3B · Informations de la vitrine.", kicker: "Limassol · tombe 441/23", headline: "17 astragales", body: "Mouton ou chèvre · Ve-IVe siècles av. J.-C. · photographie affichée sans recadrage.", caption: "Ce cartouche évite de répéter ou de découper la même photographie.", credit: "Données lues sur le cartel de la vitrine photographiée.", sourceUrl: "https://commons.wikimedia.org/wiki/File:Amathus_Astragaloi.jpg"},
        {type: "card", label: "Autre ensemble", role: "3C · Objet non photographié ici.", kicker: "British Museum · 1894,1101.560", headline: "600-500 av. J.-C.", body: "Un autre astragale d'Amathonte pourrait provenir de la tombe 281, mais cette attribution reste incertaine.", caption: "Cette notice ne décrit ni la tombe 441/23 ni les dix-sept os photographiés à Limassol.", credit: "Données : British Museum. Photographie de l'objet non reproduite.", sourceUrl: "https://www.britishmuseum.org/collection/object/G_1894-1101-560"}
      ],
      observe: "La photographie montre dix-sept astragales de mouton ou de chèvre disposés en vitrine. Le cartel les rattache à la tombe 441/23 et aux Ve-IVe siècles av. J.-C.",
      propose: "Une autre notice décrit un astragale daté de 600-500 av. J.-C., peut-être issu de la tombe 281. Cette provenance est proposée, tandis que l'ensemble de la tombe 441/23 est documenté par la photographie de la vitrine et son cartel.",
      limit: "Les deux documents ne montrent ni la même tombe ni exactement la même période. Le dépôt funéraire ne suffit pas à choisir entre jeu, protection, divination ou autre usage.",
      check: "Consulter l'inventaire et la publication de la tombe 441/23, puis les notes de fouille citées par le British Museum.",
      sources: [{label: "British Museum, inv. 1894,1101.560", url: "https://www.britishmuseum.org/collection/object/G_1894-1101-560"}, {label: "Photographie contextuelle sur Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Amathus_Astragaloi.jpg"}],
      credit: "Image contextuelle : Catlemur, Wikimedia Commons, CC BY-SA 4.0. Ensemble distinct conservé à Limassol ; validation scientifique finale requise."
    },
    {
      id: "attic-vase", number: 4, year: -460, date: "Vers 460 av. J.-C.", lat: 37.9838, lng: 23.7275, precision: "broad", kind: "object", kindLabel: "Objet en forme d'astragale", location: "Attique, Grèce",
      title: "Un vase qui imite un astragale", image: "../assets/images/activite-04/objet-e-vase-astragale-met-a-valider.jpg", alt: "Vase grec en terre cuite dont la forme agrandie imite un astragale.",
      observe: "Ce vase attique est en terre cuite et beaucoup plus grand qu'un os. Sa forme reprend pourtant celle d'un astragale.",
      propose: "Un artisan a choisi une forme osseuse reconnaissable pour fabriquer et décorer un récipient.",
      limit: "Un vase en forme d'astragale n'est pas un os animal. Sa forme ne révèle pas automatiquement son usage.",
      check: "Comparer ses dimensions, son ouverture, son décor et son contexte avec d'autres vases grecs.",
      sources: [{label: "Metropolitan Museum of Art, inv. 40.11.22", url: "https://www.metmuseum.org/art/collection/search/253610"}],
      credit: "Image : The Metropolitan Museum of Art, Open Access, CC0. Le repère indique la région de production, pas un lieu de fouille."
    },
    {
      id: "greek-players", number: 5, year: -215, date: "Vers 330-100 av. J.-C.", lat: 39.0742, lng: 21.8243, precision: "broad", kind: "representation", kindLabel: "Représentation antique", location: "Grèce, lieu précis inconnu",
      title: "Deux joueuses représentées en terre cuite", image: "../assets/images/activite-05/grece-joueuses-osselets-walters.jpg", alt: "Deux figurines grecques accroupies autour d'un jeu d'osselets.",
      observe: "Le groupe en terre cuite représente deux jeunes femmes accroupies. Le musée interprète leur geste comme un jeu d'osselets.",
      propose: "Cette œuvre documente une manière hellénistique de représenter des joueuses et un geste ludique.",
      limit: "Une image ne donne pas toutes les règles et ne prouve pas que toutes les personnes jouaient ainsi dans tout le monde grec.",
      check: "Comparer la position des mains, les pièces visibles et d'autres représentations antiques bien datées.",
      sources: [{label: "Walters Art Museum, VO.19 (48.303-48.304)", url: "https://art.thewalters.org/object/VO.19/"}],
      credit: "Image : Walters Art Museum, CC BY-SA 3.0. Lieu précis de découverte non documenté."
    },
    {
      id: "roman-weight", number: 6, year: 150, date: "Ier-IIIe siècle apr. J.-C.", lat: 41.0265, lng: 28.9748, precision: "collection", kind: "object", kindLabel: "Poids en forme d'astragale", location: "Pera Museum, Istanbul · provenance ancienne inconnue",
      title: "Une forme d'os devenue un poids", image: "../assets/images/activite-05/poids-astragale-nimes-landon.jpg", alt: "Poids romain en bronze en forme d'astragale avec une poignée, conservé à Nîmes et montré comme comparaison.",
      media: [
        {type: "card", label: "Objet exact", role: "6A · Données de l'objet exact.", kicker: "Pera Museum · PMA 6602A", headline: "27,7 cm · 33,8 kg", body: "Bronze coulé, poignée et trou de suspension. La photographie institutionnelle n'est pas reproduite faute d'autorisation documentée.", caption: "Document de données : ce cartouche n'est ni une photographie ni une restitution de l'objet.", credit: "Données : Pera Museum, CPAI III/2, no 001 ; Pondera no 1683.", sourceUrl: "https://pondera.uclouvain.be/artifact/1683/"},
        {type: "image", src: "../assets/images/activite-05/poids-astragale-nimes-landon.jpg", alt: "Grand poids romain en bronze dont le volume imite un astragale et qui porte une poignée rectangulaire.", label: "Comparaison", role: "6B · Objet comparable.", caption: "Ce poids de Nîmes montre la forme agrandie et la poignée, mais c'est un autre objet : son inscription indique trente livres, pas cent.", credit: "Mark Landon, Wikimedia Commons, CC BY 4.0.", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bronze_knucklebone_weight_(N%C3%AEmes,_Mus_Arch).jpg", view: "weight-nimes"},
        {type: "card", label: "Marques de valeur", role: "6C · Transcription de notice.", kicker: "PMA 6602A · marques incrustées", headline: "C + Ρ = 100", body: "Le C latin et le Ρ grec indiquent chacun le nombre cent. Cette transcription typographique n'est pas un fac-similé de l'inscription.", caption: "La masse et ces marques convergent pour identifier un poids de cent livres.", credit: "Données : catalogue du Pera Museum et Pondera.", sourceUrl: "https://www.peramuseum.org/images/pdf/digital-publications/cpai-part2-en.pdf"}
      ],
      observe: "Le document décrit un objet en bronze de 27,7 × 15,6 × 12,6 cm, pesant 33,8 kg et muni d'une poignée. Sa forme agrandie reprend celle d'un astragale.",
      propose: "Le C latin et le Ρ grec indiquent chacun cent. Ces marques et la masse permettent d'identifier un poids de cent livres, probablement associé à deux autres poids.",
      limit: "Acquis sur le marché des antiquités, l'objet n'a pas de lieu de découverte connu. Le rond indique son musée ; « Méditerranée orientale ou Égée » reste une attribution proposée.",
      check: "Comparer le catalogue, les marques de valeur et les deux autres poids de la série PMA 6602A-C. Une livre romaine est une unité de masse, pas un livre imprimé.",
      sources: [{label: "Base Pondera, Pera Museum PMA 6602A", url: "https://pondera.uclouvain.be/artifact/1683/"}, {label: "Catalogue officiel du Pera Museum, CPAI III/2, no 001", url: "https://www.peramuseum.org/images/pdf/digital-publications/cpai-part2-en.pdf"}, {label: "Poids comparable de Nîmes, Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Bronze_knucklebone_weight_(N%C3%AEmes,_Mus_Arch).jpg"}],
      credit: "Photographie de PMA 6602A non reproduite faute d'autorisation. Comparaison : Mark Landon, Wikimedia Commons, CC BY 4.0."
    },
    {
      id: "paris-gallo-roman", number: 7, year: 200, date: "Époque gallo-romaine", lat: 48.8566, lng: 2.3522, precision: "collection", kind: "object", kindLabel: "Objet archéologique", location: "Musée Carnavalet, Paris · lieu de découverte inconnu",
      title: "Un osselet de caprin conservé à Paris", image: "../assets/images/activite-05/france-osselet-gallo-romain-carnavalet.jpg", alt: "Petit osselet gallo-romain en os vu sur fond neutre.",
      observe: "L'objet YB21 est un astragale de chèvre ou de mouton. Le musée le classe parmi les objets liés au jeu et le date largement de l'époque gallo-romaine.",
      propose: "La notice permet de l'étudier comme objet archéologique lié au jeu dans le monde gallo-romain.",
      limit: "Son mode d'acquisition et son lieu de découverte sont inconnus. Le rond montre le musée, pas une fouille parisienne.",
      check: "Rechercher les anciens registres d'acquisition et comparer les marques avec des ensembles de fouille documentés.",
      sources: [{label: "Paris Musées, Musée Carnavalet, inv. YB21", url: "https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/osselet-0"}],
      credit: "Image : Paris Musées / Musée Carnavalet, politique CC0 annoncée par l'institution."
    },
    {
      id: "caistor", number: 8, year: 450, date: "Vers 425-475 apr. J.-C.", lat: 52.5814, lng: 1.2875, precision: "exact", kind: "object", kindLabel: "Objet inscrit", location: "Caistor St Edmund, Norfolk, Angleterre",
      title: "Un astragale de chevreuil portant des runes", image: "", alt: "",
      media: [
        {type: "card", label: "Données exactes", role: "8A · Objet documenté.", kicker: "RuneS · PreOE-GB-13", headline: "3,9 cm", body: "Astragale de chevreuil découvert en 1937 dans un contexte funéraire et daté par l'archéologie vers 425-475.", caption: "La photographie du Norwich Castle Museum n'est pas reproduite faute d'autorisation documentée.", credit: "Données RuneS sous CC BY-SA 4.0 ; image institutionnelle non reproduite.", sourceUrl: "https://www.runesdb.de/find/613"},
        {type: "card", label: "Transcription", role: "8B · Transcription savante.", kicker: "Six signes runiques", headline: "raïhan", body: "Une rune est un signe d'écriture. Cette suite typographique transcrit les signes gravés ; elle n'en reproduit ni la forme ni le tracé.", caption: "RuneS traduit principalement « du chevreuil » ; une lecture comme nom de personne a aussi été proposée.", credit: "Translittération et interprétations : RuneS, PreOE-GB-13, CC BY-SA 4.0.", sourceUrl: "https://www.runesdb.de/find/613"},
        {type: "card", label: "Voir l'objet", role: "8C · Source photographique.", kicker: "Photographie externe", headline: "Consulter RuneS", body: "La notice source permet d'examiner l'objet entier et les traits gravés sans republier ici la photographie protégée.", caption: "Décris d'abord les traits visibles, puis distingue transcription, traduction et hypothèse.", credit: "Photographie : Norwich Castle Museum and Art Gallery ; photographe inconnu ; autorisation requise.", sourceUrl: "https://www.runesdb.de/find/613"}
      ],
      observe: "RuneS décrit un astragale complet de chevreuil, long de 3,9 cm, découvert en contexte funéraire et daté vers 425-475. Six signes runiques y sont transcrits raïhan.",
      propose: "RuneS traduit principalement l'inscription par « du chevreuil ». Une interprétation comme nom de personne, « de Raiha », a également été proposée.",
      limit: "Les runes sont des signes d'écriture : elles ne prouvent ni une pratique magique ni une fonction de jeu. Le contexte funéraire ne révèle pas à lui seul l'histoire antérieure de l'objet.",
      check: "Examiner la photographie sur RuneS, la publication intégrale de la sépulture et l'étude runologique de Raymond I. Page avant de choisir une lecture.",
      sources: [{label: "RuneS, PreOE-GB-13, inv. NCM 1939.77.N59", url: "https://www.runesdb.de/find/613"}, {label: "Raymond I. Page, The Runic Inscription from N59, 1973", url: "https://www.runesdb.de/literature/3322"}, {label: "Coordonnées du site : Roman Inscriptions of Britain", url: "https://romaninscriptionsofbritain.org/place/1033"}],
      credit: "Données, dimensions et translittération : RuneS, CC BY-SA 4.0. Schémas typographiques Histoire d'os ; photographie de l'objet non reproduite faute d'autorisation."
    },
    {
      id: "taba", number: 9, year: 1878, date: "Vers 1878", lat: -34.9011, lng: -56.1645, precision: "broad", kind: "representation", kindLabel: "Source iconographique", location: "Région du Río de la Plata",
      title: "La taba dans une scène rurale", image: "../assets/images/activite-05/argentine-la-taba-blanes.jpg", alt: "Peinture de Juan Manuel Blanes montrant des personnes réunies autour d'une partie de taba.",
      observe: "Cette peinture de Juan Manuel Blanes montre une partie de taba dans un paysage rural du Río de la Plata.",
      propose: "L'œuvre témoigne de la place du jeu dans la culture visuelle régionale de la fin du XIXe siècle.",
      limit: "Une peinture construit une scène : elle ne restitue pas automatiquement tous les gestes et toutes les règles.",
      check: "Comparer l'œuvre avec des objets conservés, des règlements régionaux et des témoignages datés.",
      sources: [{label: "Museo Blanes, La taba", url: "https://blanes.montevideo.gub.uy/exposiciones/coleccion/la-coleccion-del-museo-blanes/pinacoteca/juan-manuel-blanes/la-taba"}, {label: "Patrimoine argentin, El juego de la taba", url: "https://patrimonioargentino.cultura.gob.ar/index.php/Detail/objects/78206"}],
      credit: "Œuvre : Juan Manuel Blanes, vers 1878. Statut de la reproduction numérique à valider."
    },
    {
      id: "pass-pigs", number: 10, year: 1977, date: "Depuis 1977", lat: 43.1525, lng: -77.6011, precision: "collection", kind: "modern", kindLabel: "Jeu commercial contemporain", location: "The Strong Museum, Rochester · lieu de conservation du prototype",
      title: "Des petits cochons lancés comme des dés", image: "../assets/images/activite-05/jeu-cochons-pass-the-pigs-ccby.jpg", alt: "Deux petites figurines de cochons utilisées comme dés, posées sur un fond sombre.",
      observe: "Deux petites figurines asymétriques sont lancées. Leur position d'arrivée, par exemple sur le côté, le dos ou le groin, détermine les points.",
      propose: "Ce jeu commercial transforme l'idée d'un objet irrégulier qui produit plusieurs résultats selon la face ou la position d'atterrissage.",
      limit: "Les cochons ne sont pas des osselets et le jeu ne prouve aucune continuité directe avec l'Antiquité ou l'Asie centrale.",
      check: "Étudier les règles éditées, l'histoire de Pig Mania en 1977 et les probabilités de chaque position.",
      sources: [{label: "The Strong Museum, prototype Pig Mania de 1977", url: "https://artsandculture.google.com/asset/game-prototype-pig-mania-david-moffat/YQGAXRLXnVkDRg?hl=fr"}, {label: "Winning Moves, page officielle Pass the Pigs", url: "https://winning-moves.com/product/PassThePigs.asp?mobile=no"}, {label: "T. Neller, étude mathématique et historique du jeu", url: "https://cs.gettysburg.edu/~tneller/papers/pig%2B.pdf"}, {label: "Photographie sur Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Pass_the_pigs_dice.jpg"}],
      credit: "Photographie : Larry D. Moore, 2013, CC BY 4.0, via Wikimedia Commons. Le rond indique le musée qui conserve le prototype, pas son lieu d'invention."
    },
    {
      id: "mongolia", number: 11, year: 2014, date: "Pratique actuelle · inscription UNESCO 2014", lat: 46.8625, lng: 103.8467, precision: "broad", kind: "practice", kindLabel: "Pratique culturelle vivante", location: "Mongolie",
      title: "Viser des osselets en équipe", image: "../assets/images/activite-05/mongolie-tir-osselets-unesco.jpg", alt: "Participants rassemblés autour d'une aire de tir aux osselets en Mongolie.",
      observe: "Des équipes lancent de petites tablettes vers des osselets de mouton servant de cibles. Chants et gestes accompagnent la partie.",
      propose: "Il s'agit d'une pratique collective transmise aujourd'hui en Mongolie et inscrite par l'UNESCO en 2014.",
      limit: "Une tradition actuelle ne prouve pas qu'une pratique antique identique aurait survécu sans changement.",
      check: "Écouter les praticiens, décrire les règles locales et comparer des témoignages de dates différentes.",
      sources: [{label: "UNESCO, Le tir mongol aux osselets, élément 00959", url: "https://ich.unesco.org/fr/RL/le-tir-mongol-aux-osselets-00959"}],
      credit: "Photographie : Tsogtbayar Ganbat, 2011, dossier UNESCO 00959. Droits de réutilisation à valider."
    },
    {
      id: "kazakhstan", number: 12, year: 2017, date: "Pratique actuelle · inscription UNESCO 2017", lat: 48.0196, lng: 66.9237, precision: "broad", kind: "practice", kindLabel: "Pratique culturelle vivante", location: "Kazakhstan",
      title: "Les assyks dans des jeux d'adresse", image: "../assets/images/activite-05/kazakhstan-assyk-geste-zuma-2026.jpg", alt: "Joueuse lançant un assyk vers une ligne de pièces jaunes sur un terrain intérieur.",
      media: [
        {type: "image", src: "../assets/images/activite-05/kazakhstan-assyk-geste-zuma-2026.jpg", alt: "Une joueuse se penche après son lancer ; l'assyk est encore en mouvement devant une ligne de pièces jaunes au sol.", label: "Vue entière — geste", role: "12A · Geste de lancer.", caption: "La photographie entière montre la joueuse, le lancer et l'espace de jeu. Elle a été prise au Kazakhstan en 2026 et reste indépendante du dossier UNESCO de 2015.", credit: "Mira Zhumaxanova, Асық-ату, 12 janvier 2026, Wikimedia Commons, CC BY-SA 4.0.", sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%90%D1%81%D1%8B%D2%9B-%D0%B0%D1%82%D1%83.jpg", view: "assyk-action"},
        {type: "image", src: "../assets/images/activite-05/kazakhstan-assyk-terrain-zuma-2026.jpg", alt: "Vue basse du terrain : une longue ligne d'assyks jaunes se détache entre des bandes blanches, avec des personnes floues au fond.", label: "Vue entière — terrain", role: "12B · Terrain et ligne d'assyks.", caption: "La photographie entière rend visibles l'alignement, l'espacement des pièces, les bandes blanches et les personnes au fond.", credit: "Mira Zhumaxanova, Асық ату, 12 janvier 2026, Wikimedia Commons, CC BY-SA 4.0.", sourceUrl: "https://commons.wikimedia.org/wiki/File:%D0%90%D1%81%D1%8B%D2%9B_%D0%B0%D1%82%D1%83.jpg", view: "assyk-field"},
        {type: "card", label: "Matériel", role: "12C · Vocabulaire du jeu.", kicker: "Dossier UNESCO", headline: "Assyks + saka", body: "Les assyks sont les pièces visées. Le saka est généralement plus grand et vivement coloré.", caption: "Ce cartouche complète les deux photographies entières sans les répéter ni les recadrer.", credit: "Données : dossier UNESCO 01086.", sourceUrl: "https://ich.unesco.org/fr/RL/les-jeux-traditionnels-d-assyks-kazakhs-01086"}
      ],
      observe: "Les photographies montrent une joueuse, un os lancé et une ligne d'assyks jaunes sur un terrain délimité. L'adresse du geste et l'organisation de l'espace sont visibles.",
      propose: "L'UNESCO décrit des jeux utilisant des astragales de mouton et un saka, généralement plus grand et vivement coloré. Déplacer les pièces et leur position finale comptent.",
      limit: "2017 est la date d'inscription à l'UNESCO, pas la naissance du jeu. Une photographie et une notice ne donnent pas une règle unique valable dans tout le Kazakhstan.",
      check: "Demander à des praticiens de documenter une variante précise : matériel, rôle du saka, terrain, vocabulaire, gestes et règles locales.",
      sources: [{label: "UNESCO, Jeux traditionnels kazakhs d'assyks, élément 01086", url: "https://ich.unesco.org/fr/RL/les-jeux-traditionnels-d-assyks-kazakhs-01086"}, {label: "Formulaire de candidature UNESCO, description de la pratique", url: "https://ich.unesco.org/doc/src/33553.pdf?t=1460455814"}, {label: "Photographie du geste, Mira Zhumaxanova, Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:%D0%90%D1%81%D1%8B%D2%9B-%D0%B0%D1%82%D1%83.jpg"}, {label: "Photographie du terrain, Mira Zhumaxanova, Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:%D0%90%D1%81%D1%8B%D2%9B_%D0%B0%D1%82%D1%83.jpg"}],
      credit: "Photographies contemporaines affichées en entier : Mira Zhumaxanova, 12 janvier 2026, Wikimedia Commons, CC BY-SA 4.0."
    }
  ];

  const colorAnchors = [
    {year: -3200, rgb: [36, 111, 115]}, {year: -1000, rgb: [63, 115, 128]},
    {year: 0, rgb: [138, 100, 31]}, {year: 500, rgb: [157, 65, 53]},
    {year: 1800, rgb: [106, 96, 56]}, {year: 2026, rgb: [53, 95, 129]}
  ];
  const minYear = -3200;
  const maxYear = 2026;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const caseById = new Map(cases.map((item) => [item.id, item]));

  function colorForYear(year) {
    const upperIndex = colorAnchors.findIndex((anchor) => year <= anchor.year);
    if (upperIndex <= 0) return `rgb(${colorAnchors[0].rgb.join(",")})`;
    if (upperIndex === -1) return `rgb(${colorAnchors.at(-1).rgb.join(",")})`;
    const lower = colorAnchors[upperIndex - 1];
    const upper = colorAnchors[upperIndex];
    const ratio = (year - lower.year) / (upper.year - lower.year);
    const rgb = lower.rgb.map((value, index) => Math.round(value + (upper.rgb[index] - value) * ratio));
    return `rgb(${rgb.join(",")})`;
  }

  function timelinePosition(year) {
    return Math.max(0, Math.min(100, ((year - minYear) / (maxYear - minYear)) * 100));
  }

  function clusterBackground(items) {
    const colors = items.map((item) => colorForYear(item.year));
    if (new Set(colors).size === 1) return colors[0];
    return `conic-gradient(${colors.map((color, index) => `${color} ${(index / colors.length) * 100}% ${((index + 1) / colors.length) * 100}%`).join(",")})`;
  }

  const panel = document.querySelector("#atlas-panel");
  const empty = document.querySelector("#panel-empty");
  const content = document.querySelector("#panel-content");
  const list = document.querySelector("#atlas-text-list");
  const timelinePoints = document.querySelector("#atlas-timeline-points");
  const filterCount = document.querySelector("#filter-count");
  const filters = [...document.querySelectorAll(".atlas-filters button")];
  const picker = document.querySelector("#panel-picker");
  const controls = document.querySelector("#panel-controls");
  const position = document.querySelector("#panel-position");
  const groupCount = document.querySelector("#panel-group-count");
  const mediaViewport = document.querySelector("#panel-media-viewport");
  const mediaCard = document.querySelector("#panel-media-card");
  const mediaControls = document.querySelector("#panel-media-controls");
  const mediaPosition = document.querySelector("#panel-media-position");
  const mediaPicker = document.querySelector("#panel-media-picker");
  const mediaSource = document.querySelector("#panel-media-source");
  let currentIds = [];
  let currentIndex = 0;
  let currentMediaIndex = 0;
  let lastTrigger = null;

  const fields = {
    image: document.querySelector("#panel-image"), number: document.querySelector("#panel-number"), period: document.querySelector("#panel-period"), kind: document.querySelector("#panel-kind"),
    location: document.querySelector("#panel-location"), title: document.querySelector("#panel-title"), observe: document.querySelector("#panel-observe"), propose: document.querySelector("#panel-propose"),
    limit: document.querySelector("#panel-limit"), check: document.querySelector("#panel-check"), sources: document.querySelector("#panel-sources"), credit: document.querySelector("#panel-credit"),
    mediaRole: document.querySelector("#panel-media-role"), mediaCaption: document.querySelector("#panel-media-caption"), mediaCredit: document.querySelector("#panel-media-credit"),
    mediaCardKicker: document.querySelector("#panel-media-card-kicker"), mediaCardHeadline: document.querySelector("#panel-media-card-headline"), mediaCardBody: document.querySelector("#panel-media-card-body")
  };

  function mediaFor(item) {
    if (item.media?.length) return item.media;
    return [{type: "image", src: item.image, alt: item.alt, label: "Vue de l'objet", role: "Document photographique.", caption: "", credit: item.credit, sourceUrl: item.sources[0]?.url, view: "default"}];
  }

  function renderMedia(item, {focusButton = false} = {}) {
    const mediaItems = mediaFor(item);
    currentMediaIndex = Math.max(0, Math.min(currentMediaIndex, mediaItems.length - 1));
    const media = mediaItems[currentMediaIndex];
    const isImage = media.type === "image";

    mediaViewport.dataset.view = media.view || "card";
    fields.image.hidden = !isImage;
    mediaCard.hidden = isImage;
    if (isImage) {
      fields.image.src = media.src;
      fields.image.alt = media.alt;
    } else {
      fields.image.removeAttribute("src");
      fields.image.alt = "";
      fields.mediaCardKicker.textContent = media.kicker || "";
      fields.mediaCardHeadline.textContent = media.headline || "";
      fields.mediaCardBody.textContent = media.body || "";
    }

    fields.mediaRole.textContent = media.role || "";
    fields.mediaCaption.textContent = media.caption || "";
    fields.mediaCredit.textContent = media.credit || "";
    mediaPosition.textContent = `${currentMediaIndex + 1}/${mediaItems.length}`;
    mediaControls.hidden = mediaItems.length < 2;
    mediaSource.href = media.sourceUrl || item.sources[0]?.url || "#";
    mediaSource.textContent = isImage ? "Consulter la source de cette image" : "Consulter la notice source";

    [...mediaPicker.children].forEach((button, index) => button.setAttribute("aria-pressed", String(index === currentMediaIndex)));
    if (focusButton) mediaPicker.children[currentMediaIndex]?.focus();
  }

  function buildMediaPicker(item) {
    mediaPicker.replaceChildren(...mediaFor(item).map((media, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = media.label || `Vue ${index + 1}`;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => { currentMediaIndex = index; renderMedia(item); });
      return button;
    }));
  }

  function renderCurrent({focusTitle = false} = {}) {
    const item = caseById.get(currentIds[currentIndex]);
    if (!item) return;
    currentMediaIndex = 0; buildMediaPicker(item); renderMedia(item);
    fields.number.textContent = `Élément ${item.number}`; fields.period.textContent = item.date; fields.kind.textContent = item.kindLabel;
    fields.location.textContent = item.location; fields.title.textContent = item.title; fields.observe.textContent = item.observe; fields.propose.textContent = item.propose;
    fields.limit.textContent = item.limit; fields.check.textContent = item.check; fields.credit.textContent = item.credit; position.textContent = `${currentIndex + 1}/${currentIds.length}`;
    fields.sources.replaceChildren(...item.sources.map((source) => {
      const li = document.createElement("li"); const a = document.createElement("a"); a.href = source.url; a.target = "_blank"; a.rel = "noreferrer"; a.textContent = source.label; li.append(a); return li;
    }));
    [...picker.children].forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.case === item.id)));
    if (focusTitle) fields.title.focus({preventScroll: window.innerWidth >= 1050});
  }

  function buildPicker() {
    picker.replaceChildren(...currentIds.map((id, index) => {
      const item = caseById.get(id); const button = document.createElement("button"); const label = document.createElement("span");
      button.type = "button"; button.dataset.case = id; button.title = item.title; button.setAttribute("aria-label", `${index + 1}. ${item.title}`); button.setAttribute("aria-pressed", "false");
      const thumbnail = item.image || mediaFor(item).find((media) => media.type === "image")?.src;
      if (thumbnail) { const image = document.createElement("img"); image.src = thumbnail; image.alt = ""; button.append(image); }
      else { const placeholder = document.createElement("span"); placeholder.className = "atlas-picker-placeholder"; placeholder.textContent = "doc."; button.append(placeholder); }
      label.textContent = index + 1; button.append(label);
      button.addEventListener("click", () => { currentIndex = index; renderCurrent({focusTitle: true}); }); return button;
    }));
  }

  function openGroup(ids, trigger) {
    currentIds = [...new Set(ids)].sort((a, b) => caseById.get(a).year - caseById.get(b).year);
    currentIndex = 0; lastTrigger = trigger || document.activeElement; buildPicker();
    groupCount.textContent = currentIds.length > 1 ? `${currentIds.length} éléments dans cette zone` : "1 élément dans cette zone";
    controls.hidden = currentIds.length < 2; empty.hidden = true; content.hidden = false; panel.classList.add("is-open");
    renderCurrent({focusTitle: true});
    panel.scrollTop = 0;
    if (window.innerWidth < 1050) panel.scrollIntoView({behavior: reduceMotion ? "auto" : "smooth", block: "start"});
  }

  function closePanel() {
    content.hidden = true; empty.hidden = false; panel.classList.remove("is-open"); currentIds = [];
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  }

  document.querySelector(".atlas-close").addEventListener("click", closePanel);
  document.querySelector("#panel-prev").addEventListener("click", () => { currentIndex = (currentIndex - 1 + currentIds.length) % currentIds.length; renderCurrent({focusTitle: true}); });
  document.querySelector("#panel-next").addEventListener("click", () => { currentIndex = (currentIndex + 1) % currentIds.length; renderCurrent({focusTitle: true}); });
  document.querySelector("#panel-media-prev").addEventListener("click", () => {
    const item = caseById.get(currentIds[currentIndex]); const length = mediaFor(item).length;
    currentMediaIndex = (currentMediaIndex - 1 + length) % length; renderMedia(item, {focusButton: true});
  });
  document.querySelector("#panel-media-next").addEventListener("click", () => {
    const item = caseById.get(currentIds[currentIndex]); const length = mediaFor(item).length;
    currentMediaIndex = (currentMediaIndex + 1) % length; renderMedia(item, {focusButton: true});
  });
  mediaPicker.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const item = caseById.get(currentIds[currentIndex]); const length = mediaFor(item).length;
    currentMediaIndex = (currentMediaIndex + (event.key === "ArrowRight" ? 1 : -1) + length) % length;
    renderMedia(item, {focusButton: true});
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !content.hidden) closePanel(); });

  if (!window.L || !L.markerClusterGroup) {
    document.querySelector("#atlas-map").innerHTML = '<p class="atlas-map-error">La carte n\'a pas pu être chargée. Utilise la liste ci-dessous.</p>';
    return;
  }

  const map = L.map("atlas-map", {zoomControl: false, minZoom: 2, maxZoom: 12, worldCopyJump: true}).setView([25, 12], 2);
  L.control.zoom({position: "topright", zoomInTitle: "Zoomer", zoomOutTitle: "Dézoomer"}).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

  const markersById = new Map();
  const clusterLayer = L.markerClusterGroup({
    showCoverageOnHover: false, zoomToBoundsOnClick: false, spiderfyOnMaxZoom: true, maxClusterRadius: 58,
    iconCreateFunction(cluster) {
      const items = cluster.getAllChildMarkers().map((marker) => caseById.get(marker.caseId));
      const accessibleLabel = `Zone regroupant ${items.length} éléments : ${items.map((item) => `${item.number}, ${item.title}`).join(" ; ")}`;
      return L.divIcon({className: "atlas-cluster-icon", html: `<span class="atlas-map-badge" aria-hidden="true" style="background:${clusterBackground(items)}"><b>${items.length}</b></span><span class="atlas-sr-only">${accessibleLabel}</span>`, iconSize: [54, 54], iconAnchor: [27, 27]});
    }
  });

  cases.forEach((item) => {
    const badgeClass = item.precision === "exact" ? "" : " is-broad";
    const marker = L.marker([item.lat, item.lng], {
      title: `${item.title}. ${item.location}. 1 élément.`,
      icon: L.divIcon({className: "atlas-map-icon", html: `<span class="atlas-map-badge${badgeClass}" style="background:${colorForYear(item.year)}"><b>1</b></span>`, iconSize: [46, 46], iconAnchor: [23, 23]})
    });
    marker.caseId = item.id; marker.bindTooltip(`${item.title}<br>${item.date}`);
    marker.on("add", () => {
      const element = marker.getElement();
      if (!element) return;
      element.setAttribute("role", "button");
      element.setAttribute("tabindex", "0");
      element.setAttribute("aria-label", `${item.number}. ${item.title}. ${item.location}. ${item.date}.`);
      element.addEventListener("keydown", (event) => {
        if (!['Enter', ' '].includes(event.key)) return;
        event.preventDefault();
        element.click();
      }, {once: false});
    });
    marker.on("click", (event) => {
      openGroup([item.id], event.target.getElement());
      const targetZoom = item.precision === "exact" ? Math.max(map.getZoom(), 7) : Math.max(map.getZoom(), 4);
      map.setView([item.lat, item.lng], targetZoom, {animate: !reduceMotion});
    });
    markersById.set(item.id, marker); clusterLayer.addLayer(marker);
  });
  map.addLayer(clusterLayer);
  map.getContainer().addEventListener("keydown", (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    const clusterElement = event.target.closest?.('.marker-cluster');
    if (!clusterElement) return;
    event.preventDefault();
    clusterElement.click();
  });

  clusterLayer.on("clusterclick", (event) => {
    const childMarkers = event.layer.getAllChildMarkers();
    openGroup(childMarkers.map((marker) => marker.caseId), event.layer.getElement());
    map.fitBounds(event.layer.getBounds(), {padding: [55, 55], maxZoom: Math.min(map.getZoom() + 2, 7), animate: !reduceMotion});
  });

  function revealCase(item, trigger) {
    const marker = markersById.get(item.id);
    map.setView(marker.getLatLng(), item.precision === "exact" ? 7 : 4, {animate: !reduceMotion});
    openGroup([item.id], trigger);
  }

  cases.forEach((item, index) => {
    const li = document.createElement("li"); li.dataset.kind = item.kind;
    const button = document.createElement("button"); const strong = document.createElement("strong"); const detail = document.createElement("span");
    button.type = "button"; button.style.setProperty("--case-color", colorForYear(item.year)); strong.textContent = `${item.number}. ${item.location}`; detail.textContent = `${item.date} — ${item.title}`;
    button.append(strong, detail); button.addEventListener("click", () => revealCase(item, button)); li.append(button); list.append(li);

    const point = document.createElement("button"); point.type = "button"; point.className = "atlas-time-point"; point.style.left = `${timelinePosition(item.year)}%`; point.style.top = `${[20, 50, 80][index % 3]}%`;
    point.setAttribute("aria-label", `${item.date} : ${item.title}`); point.title = `${item.date} · ${item.title}`; point.addEventListener("click", () => revealCase(item, point)); timelinePoints.append(point);
  });

  filters.forEach((button) => button.addEventListener("click", () => {
    const selected = button.dataset.kind;
    filters.forEach((filter) => { const active = filter === button; filter.classList.toggle("is-active", active); filter.setAttribute("aria-pressed", String(active)); });
    clusterLayer.clearLayers();
    const visibleCases = cases.filter((item) => selected === "all" || item.kind === selected);
    visibleCases.forEach((item) => clusterLayer.addLayer(markersById.get(item.id)));
    [...list.children].forEach((item) => { item.hidden = selected !== "all" && item.dataset.kind !== selected; });
    [...timelinePoints.children].forEach((point, index) => { point.hidden = !visibleCases.includes(cases[index]); });
    filterCount.textContent = `${visibleCases.length} ${visibleCases.length > 1 ? "éléments affichés" : "élément affiché"}.`;
    closePanel();
  }));
})();
