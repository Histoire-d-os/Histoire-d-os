const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const glossarySearch = document.querySelector("#glossary-search");
const glossaryItems = document.querySelectorAll("[data-glossary-list] article");
const emptyState = document.querySelector("[data-empty-state]");
const languageSelect = document.querySelector("[data-language-select]");
const backToTop = document.querySelector("[data-back-to-top]");
const year = document.querySelector("[data-year]");
const supportedLanguages = new Set(["fr", "de", "it", "en"]);
const defaultLanguage = "fr";
const translatedTextNodes = new WeakMap();
const translatedAttributes = new WeakMap();
const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const textTranslations = {
  de: {
    "Parcours": "Rundgänge",
    "Activités": "Aktivitäten",
    "Atelier": "Werkstatt",
    "Ressources": "Materialien",
    "Glossaire": "Glossar",
    "Recherche": "Forschung",
    "Langue": "Sprache",
    "Menu": "Menü",
    "Archéozoologie et médiation": "Archäozoologie und Vermittlung",
    "Histoires d'os": "Knochengeschichten",
    "L'astragale n'est pas seulement un osselet de jeu. C'est un indice pour lire les animaux, les corps, les gestes, les croyances et les récits à travers les époques.": "Der Astragalus ist nicht nur ein Spielknöchelchen. Er ist ein Hinweis, mit dem man Tiere, Körper, Gesten, Glaubensvorstellungen und Erzählungen durch die Zeiten lesen kann.",
    "Choisir un parcours": "Rundgang wählen",
    "Consulter le glossaire": "Glossar öffnen",
    "Observer": "Beobachten",
    "Identifier la forme et les indices visibles.": "Die Form und sichtbare Hinweise erkennen.",
    "Situer": "Einordnen",
    "Replacer l'os dans le corps et dans le mouvement.": "Den Knochen im Körper und in der Bewegung verorten.",
    "Interpréter": "Deuten",
    "Distinguer ce que l'os prouve de ce qu'il invite à questionner.": "Unterscheiden, was der Knochen belegt und was er zur Frage macht.",
    "Deux lieux, deux manières d'apprendre": "Zwei Orte, zwei Arten zu lernen",
    "Le projet se déploie en classe et au musée avec des temporalités distinctes, mais un même noyau scientifique : comprendre comment un os devient un support de raisonnement.": "Das Projekt entfaltet sich im Klassenzimmer und im Museum in unterschiedlichen Zeitformen, aber mit demselben wissenschaftlichen Kern: verstehen, wie ein Knochen zum Ausgangspunkt von Denken wird.",
    "Écoles": "Schulen",
    "Musées": "Museen",
    "Enseignant·es": "Lehrpersonen",
    "8-12 ans": "8-12 Jahre",
    "Observer, situer, interpréter": "Beobachten, einordnen, deuten",
    "La séquence scolaire part de la manipulation et monte vers l'argumentation : reconnaître l'astragale, le replacer dans le corps, puis discuter les usages culturels sans confondre époque, région et tradition.": "Die Unterrichtssequenz beginnt mit dem Umgang mit Objekten und führt zur Argumentation: den Astragalus erkennen, ihn im Körper verorten und anschließend kulturelle Nutzungen besprechen, ohne Epoche, Region und Tradition zu vermischen.",
    "Découverte": "Entdeckung",
    "Comparer des formes, classer, formuler des hypothèses.": "Formen vergleichen, ordnen, Hypothesen formulieren.",
    "Identification": "Identifikation",
    "Associer un astragale à un animal par indices simples.": "Einen Astragalus anhand einfacher Hinweise einem Tier zuordnen.",
    "Localisation": "Lokalisierung",
    "Retrouver l'os dans le tarse et comprendre la locomotion.": "Den Knochen im Tarsus finden und Fortbewegung verstehen.",
    "Inférence": "Schlussfolgerung",
    "Dire ce que l'os permet d'affirmer, et ce qui reste prudent.": "Sagen, was der Knochen aussagen kann und wo Vorsicht nötig bleibt.",
    "Culture": "Kultur",
    "Examiner jeux, amulettes, mythes et récits transformés.": "Spiele, Amulette, Mythen und veränderte Erzählungen untersuchen.",
    "Visite libre ou accompagnée": "Freier oder begleiteter Besuch",
    "Une mission d'enquête dans les collections": "Eine Forschungsmission in den Sammlungen",
    "Le visiteur apprend à repérer l'astragale du mouton, puis transfère ce savoir à d'autres animaux. Chaque station suit une règle courte : une question, une action, une validation.": "Besucherinnen und Besucher lernen, den Astragalus des Schafs zu erkennen, und übertragen dieses Wissen dann auf andere Tiere. Jede Station folgt einer kurzen Regel: eine Frage, eine Handlung, eine Bestätigung.",
    "Regarder": "Anschauen",
    "Identifier deux repères visuels sur un astragale modèle.": "Zwei sichtbare Merkmale an einem Modell-Astragalus erkennen.",
    "Comparer": "Vergleichen",
    "Chercher les ressemblances sur un autre squelette.": "Ähnlichkeiten an einem anderen Skelett suchen.",
    "Placer": "Platzieren",
    "Situer la zone de la cheville ou du tarse.": "Den Bereich von Knöchel oder Tarsus lokalisieren.",
    "Expliquer": "Erklären",
    "Justifier la réponse avec un indice anatomique.": "Die Antwort mit einem anatomischen Hinweis begründen.",
    "Prolonger": "Vertiefen",
    "Accéder aux contenus longs par fiche ou QR code.": "Über Arbeitsblatt oder QR-Code zu längeren Inhalten gelangen.",
    "Préparation de séance": "Unterrichtsvorbereitung",
    "Des ressources courtes, sourçables et réutilisables": "Kurze, belegbare und wiederverwendbare Materialien",
    "La version enseignant·e privilégie les objectifs, le matériel, le déroulé, les erreurs fréquentes et le corrigé raisonné. La version complète garde la bibliographie, les sources et les nuances scientifiques.": "Die Version für Lehrpersonen stellt Ziele, Material, Ablauf, häufige Fehler und begründete Lösungen in den Vordergrund. Die vollständige Version bewahrt Bibliografie, Quellen und wissenschaftliche Nuancen.",
    "Objectifs": "Ziele",
    "Nommer les compétences sans afficher de codes incertains.": "Kompetenzen benennen, ohne unsichere Codes anzuzeigen.",
    "Matériel": "Material",
    "Images, reproductions, fiche de vocabulaire, traces écrites.": "Bilder, Reproduktionen, Wortschatzblatt, schriftliche Spuren.",
    "Questions": "Fragen",
    "Faire verbaliser les indices et les limites de l'hypothèse.": "Hinweise und Grenzen der Hypothese versprachlichen lassen.",
    "Corrections": "Korrekturen",
    "Distinguer récit simplifié et état des connaissances.": "Vereinfachte Erzählung und Wissensstand unterscheiden.",
    "Prolongements": "Weiterführungen",
    "Relier sciences du vivant, histoire culturelle et musée.": "Lebenswissenschaften, Kulturgeschichte und Museum verbinden.",
    "Premières activités prêtes à lancer": "Erste sofort einsetzbare Aktivitäten",
    "Ces formats courts transforment l'astragale en support d'enquête : les élèves et les visiteurs observent, placent, justifient, puis distinguent ce qui est attesté de ce qui reste à vérifier.": "Diese kurzen Formate machen den Astragalus zum Gegenstand einer Untersuchung: Schülerinnen, Schüler und Besucher beobachten, verorten, begründen und unterscheiden dann, was belegt ist und was noch überprüft werden muss.",
    "École": "Schule",
    "25 min": "25 Min.",
    "45-60 min": "45-60 Min.",
    "Mission astragale": "Mission Astragalus",
    "Les élèves comparent trois formes osseuses, repèrent l'astragale, puis expliquent deux indices qui justifient leur choix.": "Die Schülerinnen und Schüler vergleichen drei Knochenformen, erkennen den Astragalus und erklären zwei Hinweise, die ihre Wahl begründen.",
    "Activité 1 — Trouver l'astragale en classe": "Aktivität 1 — Den Astragalus im Klassenzimmer finden",
    "Les élèves localisent la région du tarse, formulent une hypothèse, justifient avec des indices et comparent avec un autre mammifère.": "Die Schülerinnen und Schüler lokalisieren den Tarsusbereich, formulieren eine Hypothese, begründen sie mit Hinweisen und vergleichen mit einem anderen Säugetier.",
    "Classer par ressemblances visibles.": "Nach sichtbaren Ähnlichkeiten ordnen.",
    "Nommer deux repères morphologiques.": "Zwei morphologische Merkmale benennen.",
    "Formuler une hypothèse prudente.": "Eine vorsichtige Hypothese formulieren.",
    "Observer un mouvement ou un document.": "Eine Bewegung oder ein Dokument beobachten.",
    "Situer l'articulation entre jambe et pied.": "Das Gelenk zwischen Bein und Fuß verorten.",
    "Conclure avec prudence.": "Vorsichtig schließen.",
    "Ouvrir le document": "Dokument öffnen",
    "Ouvrir le dossier": "Dossier öffnen",
    "Musée": "Museum",
    "Familles": "Familien",
    "Familles · groupes": "Familien · Gruppen",
    "15 min": "15 Min.",
    "30-45 min": "30-45 Min.",
    "Où est l'os ?": "Wo ist der Knochen?",
    "Une mission de visite courte : partir d'un mouton, retrouver la zone de l'astragale sur un autre animal, puis valider avec un indice anatomique.": "Eine kurze Besuchsmission: vom Schaf ausgehen, den Bereich des Astragalus an einem anderen Tier finden und mit einem anatomischen Hinweis bestätigen.",
    "Activité 1 — Trouver l'astragale au musée": "Aktivität 1 — Den Astragalus im Museum finden",
    "Une mission de visite : partir d'un mammifère de référence, retrouver la région de l'astragale sur un second animal, puis verbaliser les indices.": "Eine Besuchsmission: von einem Referenzsäugetier ausgehen, den Astragalusbereich an einem zweiten Tier finden und die Hinweise versprachlichen.",
    "Observer une image modèle.": "Ein Modellbild betrachten.",
    "Repérer le membre postérieur.": "Das Hinterglied erkennen.",
    "Transférer le repère vers une autre espèce.": "Das Merkmal auf eine andere Art übertragen.",
    "Expliquer le lien avec la locomotion.": "Den Zusammenhang mit Fortbewegung erklären.",
    "Distinguer région localisée et os identifié.": "Lokalisierte Region und identifizierten Knochen unterscheiden.",
    "10-12 ans": "10-12 Jahre",
    "30 min": "30 Min.",
    "Vrai, prudent, à vérifier": "Richtig, vorsichtig, zu prüfen",
    "Les élèves trient des phrases sur l'osselet, Achille et les usages culturels pour distinguer preuve, hypothèse et récit simplifié.": "Die Schülerinnen und Schüler ordnen Sätze über Knöchelchen, Achilles und kulturelle Nutzungen, um Beleg, Hypothese und vereinfachte Erzählung zu unterscheiden.",
    "Repérer les affirmations trop rapides.": "Zu schnelle Aussagen erkennen.",
    "Reformuler avec nuance.": "Nuanciert umformulieren.",
    "Relier vocabulaire, source et contexte.": "Wortschatz, Quelle und Kontext verbinden.",
    "Atelier de raisonnement": "Denkwerkstatt",
    "Ce que l'on croyait, ce que l'on sait mieux aujourd'hui": "Was man glaubte, was man heute genauer weiß",
    "Le site installe un réflexe critique : ne pas répéter les récits commodes quand les sources demandent de distinguer les périodes, les régions et les usages.": "Die Seite fördert einen kritischen Reflex: bequeme Erzählungen nicht wiederholen, wenn die Quellen dazu auffordern, Zeiten, Regionen und Nutzungen zu unterscheiden.",
    "Osselets et dés": "Knöchelchen und Würfel",
    "Récit trop simple": "Zu einfache Erzählung",
    "Les osselets seraient les premiers dés naturels, partout et depuis toujours.": "Knöchelchen seien überall und seit jeher die ersten natürlichen Würfel gewesen.",
    "Formulation retenue": "Bevorzugte Formulierung",
    "Un même os a pu servir de support biologique, ludique, rituel ou symbolique selon les contextes.": "Derselbe Knochen konnte je nach Kontext biologischer Hinweis, Spielobjekt, ritueller oder symbolischer Träger sein.",
    "Achille": "Achilles",
    "Le talon vulnérable serait une évidence homérique.": "Die verwundbare Ferse sei eine homerische Selbstverständlichkeit.",
    "Le talon d'Achille est un cas de réception tardive et de transformation des récits antiques.": "Die Achillesferse ist ein Fall später Rezeption und Umformung antiker Erzählungen.",
    "Vocabulaire": "Wortschatz",
    "Astragale, talus et osselet pourraient être employés indifféremment.": "Astragalus, Talus und Knöchelchen könnten beliebig verwendet werden.",
    "Chaque terme dépend du contexte : anatomie, archéozoologie, jeu, langue et période.": "Jeder Begriff hängt vom Kontext ab: Anatomie, Archäozoologie, Spiel, Sprache und Zeitraum.",
    "Un écosystème de supports": "Ein Ökosystem von Materialien",
    "Chaque ressource a un rôle distinct afin que le site reste lisible pour les enfants, utile pour les enseignant·es et transférable aux musées.": "Jede Ressource hat eine eigene Rolle, damit die Seite für Kinder lesbar, für Lehrpersonen nützlich und für Museen übertragbar bleibt.",
    "Dossier complet — Activité 1": "Vollständiges Dossier — Aktivität 1",
    "Page centrale avec fiches élèves, guides, corrigé, planche de repérage et suivi des validations.": "Zentrale Seite mit Schülerblättern, Leitfäden, Lösung, Orientierungstafel und Validierungsübersicht.",
    "Fiche activité école": "Aktivitätsblatt Schule",
    "Déroulé prêt à utiliser pour observer, comparer et justifier l'identification.": "Ein sofort nutzbarer Ablauf zum Beobachten, Vergleichen und Begründen der Identifikation.",
    "Guide enseignant": "Leitfaden für Lehrpersonen",
    "Déroulement complet, analyse a priori, relances, différenciation et évaluation formative.": "Vollständiger Ablauf, Vorabanalyse, Impulse, Differenzierung und formative Bewertung.",
    "Fiche mission musée": "Museumsmission",
    "Consigne courte pour retrouver l'astragale dans les collections ou les vitrines.": "Kurze Anleitung, um den Astragalus in Sammlungen oder Vitrinen wiederzufinden.",
    "Guide du musée": "Museumsleitfaden",
    "Organisation de station, contraintes de vitrine, sécurité, accessibilité et médiation orale.": "Stationsorganisation, Vitrinenbedingungen, Sicherheit, Zugänglichkeit und mündliche Vermittlung.",
    "Fiche raisonnement": "Denkblatt",
    "Activité sourcée pour distinguer affirmation, hypothèse et récit trop simplifié.": "Quellenbasierte Aktivität zur Unterscheidung von Aussage, Hypothese und zu vereinfachter Erzählung.",
    "Glossaire de départ": "Einstiegsglossar",
    "Termes essentiels pour éviter les confusions entre os, jeu, talus et astragale.": "Zentrale Begriffe, um Verwechslungen zwischen Knochen, Spiel, Talus und Astragalus zu vermeiden.",
    "Corrigé raisonné": "Begründete Lösung",
    "Réponses-types qui expliquent le raisonnement plutôt que de donner seulement le résultat.": "Musterantworten, die den Denkweg erklären, statt nur das Ergebnis zu geben.",
    "Banque d'activités": "Aktivitätensammlung",
    "Trois premières activités visibles sur le site, prêtes à compléter avec images et modèles.": "Drei erste Aktivitäten auf der Seite, bereit zur Ergänzung mit Bildern und Modellen.",
    "Petit livre d'ouverture": "Kleines Einstiegsbuch",
    "Un récit illustré pour entrer dans l'astragale par Achille et le fameux \"talon\".": "Eine illustrierte Erzählung, die über Achilles und die berühmte „Ferse“ zum Astragalus führt.",
    "Droits et sources": "Rechte und Quellen",
    "Espace prévu pour les crédits, les références, les versions et les droits d'images.": "Bereich für Bildnachweise, Referenzen, Versionen und Bildrechte.",
    "Modèles 3D": "3D-Modelle",
    "Comprendre l'orientation de l'os": "Die Ausrichtung des Knochens verstehen",
    "Les futurs modèles 3D devront servir le raisonnement spatial : surfaces articulaires, orientation, comparaison entre espèces et mouvement. La page réserve déjà cette place dans l'architecture du site.": "Die künftigen 3D-Modelle sollen räumliches Denken unterstützen: Gelenkflächen, Ausrichtung, Vergleich zwischen Arten und Bewegung. Die Seite hält diesen Platz in der Seitenarchitektur bereits frei.",
    "Nommer sans confondre": "Benennen ohne zu verwechseln",
    "Les termes sont courts pour rester accessibles, mais assez précis pour protéger le projet des raccourcis fréquents.": "Die Begriffe sind kurz, um zugänglich zu bleiben, aber präzise genug, um häufige Abkürzungen zu vermeiden.",
    "Filtrer les termes": "Begriffe filtern",
    "Astragale": "Astragalus",
    "Os du tarse impliqué dans l'articulation et la locomotion, observé chez de nombreux animaux.": "Ein Tarsusknochen, der an Gelenk und Fortbewegung beteiligt ist und bei vielen Tieren vorkommt.",
    "Talus": "Talus",
    "Nom courant en anatomie humaine moderne pour l'os anciennement appelé astragale.": "Moderner anatomischer Name beim Menschen für den früher Astragalus genannten Knochen.",
    "Osselet": "Knöchelchen",
    "Mot qui peut désigner un petit os, une pièce de jeu, ou les osselets de l'oreille.": "Ein Wort, das einen kleinen Knochen, ein Spielstück oder die Gehörknöchelchen bezeichnen kann.",
    "Archéozoologie": "Archäozoologie",
    "Étude des restes animaux pour comprendre espèces, pratiques, milieux et usages humains.": "Untersuchung tierischer Überreste, um Arten, Praktiken, Lebensräume und menschliche Nutzungen zu verstehen.",
    "Homologie": "Homologie",
    "Relation entre structures comparables chez des espèces différentes, sans les rendre identiques.": "Beziehung zwischen vergleichbaren Strukturen verschiedener Arten, ohne sie gleichzusetzen.",
    "Exemple de récit antique transformé par des traditions postérieures autour de la vulnérabilité.": "Beispiel einer antiken Erzählung, die durch spätere Traditionen zur Verwundbarkeit verändert wurde.",
    "Talos": "Talos",
    "Figure mythique dont la vulnérabilité près de la cheville permet d'aborder corps et mouvement.": "Mythische Figur, deren Verwundbarkeit nahe dem Knöchel Körper und Bewegung thematisiert.",
    "Raisonnement qui part d'un indice observé, tout en distinguant preuve, hypothèse et limite.": "Denken, das von einem beobachteten Hinweis ausgeht und Beleg, Hypothese und Grenze unterscheidet.",
    "Aucun terme ne correspond à cette recherche.": "Kein Begriff entspricht dieser Suche.",
    "Recherche et gouvernance": "Forschung und Verwaltung",
    "Un site fait pour durer après l'exposition": "Eine Website, die über die Ausstellung hinaus Bestand hat",
    "La prochaine étape éditoriale consiste à relier chaque exemple public à un dossier de sources : bibliographie, images autorisées, modèles 3D, crédits et date de mise à jour.": "Der nächste redaktionelle Schritt besteht darin, jedes öffentliche Beispiel mit einem Quellendossier zu verbinden: Bibliografie, freigegebene Bilder, 3D-Modelle, Nachweise und Aktualisierungsdatum.",
    "Cette première version prépare la structure, la direction visuelle et les parcours. Les contenus longs pourront ensuite être ajoutés sans mélanger les publics ni les usages.": "Diese erste Version bereitet Struktur, visuelle Richtung und Rundgänge vor. Längere Inhalte können später ergänzt werden, ohne Zielgruppen und Nutzungen zu vermischen.",
    "Première version du site -": "Erste Version der Website -"
  },
  it: {
    "Parcours": "Percorsi",
    "Activités": "Attività",
    "Atelier": "Laboratorio",
    "Ressources": "Risorse",
    "Glossaire": "Glossario",
    "Recherche": "Ricerca",
    "Langue": "Lingua",
    "Menu": "Menu",
    "Archéozoologie et médiation": "Archeozoologia e mediazione",
    "Histoires d'os": "Storie d'ossa",
    "L'astragale n'est pas seulement un osselet de jeu. C'est un indice pour lire les animaux, les corps, les gestes, les croyances et les récits à travers les époques.": "L'astragalo non è soltanto un osso usato nel gioco. È un indizio per leggere animali, corpi, gesti, credenze e racconti attraverso le epoche.",
    "Choisir un parcours": "Scegliere un percorso",
    "Consulter le glossaire": "Consultare il glossario",
    "Observer": "Osservare",
    "Identifier la forme et les indices visibles.": "Identificare la forma e gli indizi visibili.",
    "Situer": "Collocare",
    "Replacer l'os dans le corps et dans le mouvement.": "Ricollocare l'osso nel corpo e nel movimento.",
    "Interpréter": "Interpretare",
    "Distinguer ce que l'os prouve de ce qu'il invite à questionner.": "Distinguere ciò che l'osso dimostra da ciò che invita a interrogare.",
    "Deux lieux, deux manières d'apprendre": "Due luoghi, due modi di imparare",
    "Le projet se déploie en classe et au musée avec des temporalités distinctes, mais un même noyau scientifique : comprendre comment un os devient un support de raisonnement.": "Il progetto si sviluppa in classe e al museo con tempi diversi, ma con lo stesso nucleo scientifico: capire come un osso diventi un supporto per ragionare.",
    "Écoles": "Scuole",
    "Musées": "Musei",
    "Enseignant·es": "Insegnanti",
    "8-12 ans": "8-12 anni",
    "Observer, situer, interpréter": "Osservare, collocare, interpretare",
    "La séquence scolaire part de la manipulation et monte vers l'argumentation : reconnaître l'astragale, le replacer dans le corps, puis discuter les usages culturels sans confondre époque, région et tradition.": "La sequenza scolastica parte dalla manipolazione e arriva all'argomentazione: riconoscere l'astragalo, ricollocarlo nel corpo, poi discutere gli usi culturali senza confondere epoca, regione e tradizione.",
    "Découverte": "Scoperta",
    "Comparer des formes, classer, formuler des hypothèses.": "Confrontare forme, classificare, formulare ipotesi.",
    "Identification": "Identificazione",
    "Associer un astragale à un animal par indices simples.": "Associare un astragalo a un animale tramite indizi semplici.",
    "Localisation": "Localizzazione",
    "Retrouver l'os dans le tarse et comprendre la locomotion.": "Ritrovare l'osso nel tarso e comprendere la locomozione.",
    "Inférence": "Inferenza",
    "Dire ce que l'os permet d'affirmer, et ce qui reste prudent.": "Dire che cosa l'osso permette di affermare e che cosa richiede prudenza.",
    "Culture": "Cultura",
    "Examiner jeux, amulettes, mythes et récits transformés.": "Esaminare giochi, amuleti, miti e racconti trasformati.",
    "Visite libre ou accompagnée": "Visita libera o accompagnata",
    "Une mission d'enquête dans les collections": "Una missione d'indagine nelle collezioni",
    "Le visiteur apprend à repérer l'astragale du mouton, puis transfère ce savoir à d'autres animaux. Chaque station suit une règle courte : une question, une action, une validation.": "Il visitatore impara a riconoscere l'astragalo della pecora, poi trasferisce questo sapere ad altri animali. Ogni stazione segue una regola breve: una domanda, un'azione, una verifica.",
    "Regarder": "Guardare",
    "Identifier deux repères visuels sur un astragale modèle.": "Identificare due riferimenti visivi su un astragalo modello.",
    "Comparer": "Confrontare",
    "Chercher les ressemblances sur un autre squelette.": "Cercare somiglianze su un altro scheletro.",
    "Placer": "Posizionare",
    "Situer la zone de la cheville ou du tarse.": "Collocare la zona della caviglia o del tarso.",
    "Expliquer": "Spiegare",
    "Justifier la réponse avec un indice anatomique.": "Giustificare la risposta con un indizio anatomico.",
    "Prolonger": "Approfondire",
    "Accéder aux contenus longs par fiche ou QR code.": "Accedere ai contenuti lunghi tramite scheda o QR code.",
    "Préparation de séance": "Preparazione della lezione",
    "Des ressources courtes, sourçables et réutilisables": "Risorse brevi, documentabili e riutilizzabili",
    "La version enseignant·e privilégie les objectifs, le matériel, le déroulé, les erreurs fréquentes et le corrigé raisonné. La version complète garde la bibliographie, les sources et les nuances scientifiques.": "La versione per insegnanti privilegia obiettivi, materiale, svolgimento, errori frequenti e correzione ragionata. La versione completa conserva bibliografia, fonti e sfumature scientifiche.",
    "Objectifs": "Obiettivi",
    "Nommer les compétences sans afficher de codes incertains.": "Nominare le competenze senza mostrare codici incerti.",
    "Matériel": "Materiale",
    "Images, reproductions, fiche de vocabulaire, traces écrites.": "Immagini, riproduzioni, scheda lessicale, tracce scritte.",
    "Questions": "Domande",
    "Faire verbaliser les indices et les limites de l'hypothèse.": "Far verbalizzare gli indizi e i limiti dell'ipotesi.",
    "Corrections": "Correzioni",
    "Distinguer récit simplifié et état des connaissances.": "Distinguere racconto semplificato e stato delle conoscenze.",
    "Prolongements": "Prolungamenti",
    "Relier sciences du vivant, histoire culturelle et musée.": "Collegare scienze della vita, storia culturale e museo.",
    "Premières activités prêtes à lancer": "Prime attività pronte da avviare",
    "Ces formats courts transforment l'astragale en support d'enquête : les élèves et les visiteurs observent, placent, justifient, puis distinguent ce qui est attesté de ce qui reste à vérifier.": "Questi formati brevi trasformano l'astragalo in un supporto d'indagine: allievi e visitatori osservano, collocano, giustificano, poi distinguono ciò che è attestato da ciò che resta da verificare.",
    "École": "Scuola",
    "25 min": "25 min",
    "45-60 min": "45-60 min",
    "Mission astragale": "Missione astragalo",
    "Les élèves comparent trois formes osseuses, repèrent l'astragale, puis expliquent deux indices qui justifient leur choix.": "Gli allievi confrontano tre forme ossee, individuano l'astragalo, poi spiegano due indizi che giustificano la scelta.",
    "Activité 1 — Trouver l'astragale en classe": "Attività 1 — Trovare l'astragalo in classe",
    "Les élèves localisent la région du tarse, formulent une hypothèse, justifient avec des indices et comparent avec un autre mammifère.": "Gli allievi localizzano la regione del tarso, formulano un'ipotesi, la giustificano con indizi e confrontano con un altro mammifero.",
    "Classer par ressemblances visibles.": "Classificare per somiglianze visibili.",
    "Nommer deux repères morphologiques.": "Nominare due riferimenti morfologici.",
    "Formuler une hypothèse prudente.": "Formulare un'ipotesi prudente.",
    "Observer un mouvement ou un document.": "Osservare un movimento o un documento.",
    "Situer l'articulation entre jambe et pied.": "Collocare l'articolazione tra gamba e piede.",
    "Conclure avec prudence.": "Concludere con prudenza.",
    "Ouvrir le document": "Aprire il documento",
    "Ouvrir le dossier": "Aprire il dossier",
    "Musée": "Museo",
    "Familles": "Famiglie",
    "Familles · groupes": "Famiglie · gruppi",
    "15 min": "15 min",
    "30-45 min": "30-45 min",
    "Où est l'os ?": "Dov'è l'osso?",
    "Une mission de visite courte : partir d'un mouton, retrouver la zone de l'astragale sur un autre animal, puis valider avec un indice anatomique.": "Una breve missione di visita: partire da una pecora, ritrovare la zona dell'astragalo su un altro animale, poi validare con un indizio anatomico.",
    "Activité 1 — Trouver l'astragale au musée": "Attività 1 — Trovare l'astragalo al museo",
    "Une mission de visite : partir d'un mammifère de référence, retrouver la région de l'astragale sur un second animal, puis verbaliser les indices.": "Una missione di visita: partire da un mammifero di riferimento, ritrovare la regione dell'astragalo su un secondo animale, poi verbalizzare gli indizi.",
    "Observer une image modèle.": "Osservare un'immagine modello.",
    "Repérer le membre postérieur.": "Individuare l'arto posteriore.",
    "Transférer le repère vers une autre espèce.": "Trasferire il riferimento a un'altra specie.",
    "Expliquer le lien avec la locomotion.": "Spiegare il legame con la locomozione.",
    "Distinguer région localisée et os identifié.": "Distinguere regione localizzata e osso identificato.",
    "10-12 ans": "10-12 anni",
    "30 min": "30 min",
    "Vrai, prudent, à vérifier": "Vero, prudente, da verificare",
    "Les élèves trient des phrases sur l'osselet, Achille et les usages culturels pour distinguer preuve, hypothèse et récit simplifié.": "Gli allievi ordinano frasi sugli osseleti, Achille e gli usi culturali per distinguere prova, ipotesi e racconto semplificato.",
    "Repérer les affirmations trop rapides.": "Individuare affermazioni troppo rapide.",
    "Reformuler avec nuance.": "Riformulare con sfumature.",
    "Relier vocabulaire, source et contexte.": "Collegare lessico, fonte e contesto.",
    "Atelier de raisonnement": "Laboratorio di ragionamento",
    "Ce que l'on croyait, ce que l'on sait mieux aujourd'hui": "Ciò che si credeva, ciò che oggi si sa meglio",
    "Le site installe un réflexe critique : ne pas répéter les récits commodes quand les sources demandent de distinguer les périodes, les régions et les usages.": "Il sito introduce un riflesso critico: non ripetere racconti comodi quando le fonti chiedono di distinguere periodi, regioni e usi.",
    "Osselets et dés": "Osseleti e dadi",
    "Récit trop simple": "Racconto troppo semplice",
    "Les osselets seraient les premiers dés naturels, partout et depuis toujours.": "Gli osseleti sarebbero i primi dadi naturali, ovunque e da sempre.",
    "Formulation retenue": "Formulazione scelta",
    "Un même os a pu servir de support biologique, ludique, rituel ou symbolique selon les contextes.": "Uno stesso osso può aver funzionato da supporto biologico, ludico, rituale o simbolico secondo i contesti.",
    "Achille": "Achille",
    "Le talon vulnérable serait une évidence homérique.": "Il tallone vulnerabile sarebbe un'evidenza omerica.",
    "Le talon d'Achille est un cas de réception tardive et de transformation des récits antiques.": "Il tallone d'Achille è un caso di ricezione tardiva e trasformazione dei racconti antichi.",
    "Vocabulaire": "Vocabolario",
    "Astragale, talus et osselet pourraient être employés indifféremment.": "Astragalo, talo e osseletto potrebbero essere usati indistintamente.",
    "Chaque terme dépend du contexte : anatomie, archéozoologie, jeu, langue et période.": "Ogni termine dipende dal contesto: anatomia, archeozoologia, gioco, lingua e periodo.",
    "Un écosystème de supports": "Un ecosistema di supporti",
    "Chaque ressource a un rôle distinct afin que le site reste lisible pour les enfants, utile pour les enseignant·es et transférable aux musées.": "Ogni risorsa ha un ruolo distinto perché il sito resti leggibile per i bambini, utile per gli insegnanti e trasferibile ai musei.",
    "Dossier complet — Activité 1": "Dossier completo — Attività 1",
    "Page centrale avec fiches élèves, guides, corrigé, planche de repérage et suivi des validations.": "Pagina centrale con schede per allievi, guide, correzione, tavola di orientamento e monitoraggio delle validazioni.",
    "Fiche activité école": "Scheda attività scuola",
    "Déroulé prêt à utiliser pour observer, comparer et justifier l'identification.": "Sequenza pronta da usare per osservare, confrontare e giustificare l'identificazione.",
    "Guide enseignant": "Guida per insegnanti",
    "Déroulement complet, analyse a priori, relances, différenciation et évaluation formative.": "Svolgimento completo, analisi a priori, rilanci, differenziazione e valutazione formativa.",
    "Fiche mission musée": "Scheda missione museo",
    "Consigne courte pour retrouver l'astragale dans les collections ou les vitrines.": "Consegna breve per ritrovare l'astragalo nelle collezioni o nelle vetrine.",
    "Guide du musée": "Guida del museo",
    "Organisation de station, contraintes de vitrine, sécurité, accessibilité et médiation orale.": "Organizzazione della postazione, vincoli della vetrina, sicurezza, accessibilità e mediazione orale.",
    "Fiche raisonnement": "Scheda di ragionamento",
    "Activité sourcée pour distinguer affirmation, hypothèse et récit trop simplifié.": "Attività fondata su fonti per distinguere affermazione, ipotesi e racconto troppo semplificato.",
    "Glossaire de départ": "Glossario iniziale",
    "Termes essentiels pour éviter les confusions entre os, jeu, talus et astragale.": "Termini essenziali per evitare confusioni tra osso, gioco, talo e astragalo.",
    "Corrigé raisonné": "Correzione ragionata",
    "Réponses-types qui expliquent le raisonnement plutôt que de donner seulement le résultat.": "Risposte modello che spiegano il ragionamento invece di dare soltanto il risultato.",
    "Banque d'activités": "Banca di attività",
    "Trois premières activités visibles sur le site, prêtes à compléter avec images et modèles.": "Tre prime attività visibili sul sito, pronte da completare con immagini e modelli.",
    "Petit livre d'ouverture": "Piccolo libro d'apertura",
    "Un récit illustré pour entrer dans l'astragale par Achille et le fameux \"talon\".": "Un racconto illustrato per entrare nell'astragalo attraverso Achille e il famoso \"tallone\".",
    "Droits et sources": "Diritti e fonti",
    "Espace prévu pour les crédits, les références, les versions et les droits d'images.": "Spazio previsto per crediti, riferimenti, versioni e diritti d'immagine.",
    "Modèles 3D": "Modelli 3D",
    "Comprendre l'orientation de l'os": "Capire l'orientamento dell'osso",
    "Les futurs modèles 3D devront servir le raisonnement spatial : surfaces articulaires, orientation, comparaison entre espèces et mouvement. La page réserve déjà cette place dans l'architecture du site.": "I futuri modelli 3D dovranno servire il ragionamento spaziale: superfici articolari, orientamento, confronto tra specie e movimento. La pagina riserva già questo spazio nell'architettura del sito.",
    "Nommer sans confondre": "Nominare senza confondere",
    "Les termes sont courts pour rester accessibles, mais assez précis pour protéger le projet des raccourcis fréquents.": "I termini sono brevi per restare accessibili, ma abbastanza precisi da proteggere il progetto dalle scorciatoie frequenti.",
    "Filtrer les termes": "Filtrare i termini",
    "Astragale": "Astragalo",
    "Os du tarse impliqué dans l'articulation et la locomotion, observé chez de nombreux animaux.": "Osso del tarso coinvolto nell'articolazione e nella locomozione, osservato in molti animali.",
    "Talus": "Talo",
    "Nom courant en anatomie humaine moderne pour l'os anciennement appelé astragale.": "Nome corrente nell'anatomia umana moderna per l'osso un tempo chiamato astragalo.",
    "Osselet": "Osseletto",
    "Mot qui peut désigner un petit os, une pièce de jeu, ou les osselets de l'oreille.": "Parola che può indicare un piccolo osso, un pezzo di gioco o gli ossicini dell'orecchio.",
    "Archéozoologie": "Archeozoologia",
    "Étude des restes animaux pour comprendre espèces, pratiques, milieux et usages humains.": "Studio dei resti animali per comprendere specie, pratiche, ambienti e usi umani.",
    "Homologie": "Omologia",
    "Relation entre structures comparables chez des espèces différentes, sans les rendre identiques.": "Relazione tra strutture comparabili in specie diverse, senza renderle identiche.",
    "Exemple de récit antique transformé par des traditions postérieures autour de la vulnérabilité.": "Esempio di racconto antico trasformato da tradizioni posteriori intorno alla vulnerabilità.",
    "Talos": "Talo",
    "Figure mythique dont la vulnérabilité près de la cheville permet d'aborder corps et mouvement.": "Figura mitica la cui vulnerabilità vicino alla caviglia permette di affrontare corpo e movimento.",
    "Raisonnement qui part d'un indice observé, tout en distinguant preuve, hypothèse et limite.": "Ragionamento che parte da un indizio osservato, distinguendo prova, ipotesi e limite.",
    "Aucun terme ne correspond à cette recherche.": "Nessun termine corrisponde a questa ricerca.",
    "Recherche et gouvernance": "Ricerca e governance",
    "Un site fait pour durer après l'exposition": "Un sito pensato per durare dopo la mostra",
    "La prochaine étape éditoriale consiste à relier chaque exemple public à un dossier de sources : bibliographie, images autorisées, modèles 3D, crédits et date de mise à jour.": "La prossima tappa editoriale consiste nel collegare ogni esempio pubblico a un dossier di fonti: bibliografia, immagini autorizzate, modelli 3D, crediti e data di aggiornamento.",
    "Cette première version prépare la structure, la direction visuelle et les parcours. Les contenus longs pourront ensuite être ajoutés sans mélanger les publics ni les usages.": "Questa prima versione prepara la struttura, la direzione visiva e i percorsi. I contenuti lunghi potranno poi essere aggiunti senza mescolare pubblici e usi.",
    "Première version du site -": "Prima versione del sito -"
  },
  en: {
    "Parcours": "Pathways",
    "Activités": "Activities",
    "Atelier": "Workshop",
    "Ressources": "Resources",
    "Glossaire": "Glossary",
    "Recherche": "Research",
    "Langue": "Language",
    "Menu": "Menu",
    "Archéozoologie et médiation": "Archaeozoology and mediation",
    "Histoires d'os": "Bone Stories",
    "L'astragale n'est pas seulement un osselet de jeu. C'est un indice pour lire les animaux, les corps, les gestes, les croyances et les récits à travers les époques.": "The astragalus is not just a knucklebone used in games. It is a clue for reading animals, bodies, gestures, beliefs and stories across time.",
    "Choisir un parcours": "Choose a pathway",
    "Consulter le glossaire": "Open the glossary",
    "Observer": "Observe",
    "Identifier la forme et les indices visibles.": "Identify the shape and visible clues.",
    "Situer": "Locate",
    "Replacer l'os dans le corps et dans le mouvement.": "Place the bone back in the body and in movement.",
    "Interpréter": "Interpret",
    "Distinguer ce que l'os prouve de ce qu'il invite à questionner.": "Distinguish what the bone proves from what it invites us to question.",
    "Deux lieux, deux manières d'apprendre": "Two places, two ways of learning",
    "Le projet se déploie en classe et au musée avec des temporalités distinctes, mais un même noyau scientifique : comprendre comment un os devient un support de raisonnement.": "The project unfolds in the classroom and in the museum with different rhythms, but the same scientific core: understanding how a bone becomes a tool for reasoning.",
    "Écoles": "Schools",
    "Musées": "Museums",
    "Enseignant·es": "Teachers",
    "8-12 ans": "Ages 8-12",
    "Observer, situer, interpréter": "Observe, locate, interpret",
    "La séquence scolaire part de la manipulation et monte vers l'argumentation : reconnaître l'astragale, le replacer dans le corps, puis discuter les usages culturels sans confondre époque, région et tradition.": "The school sequence begins with handling and observation, then moves toward argumentation: recognizing the astragalus, placing it in the body, and discussing cultural uses without confusing period, region and tradition.",
    "Découverte": "Discovery",
    "Comparer des formes, classer, formuler des hypothèses.": "Compare shapes, sort them, formulate hypotheses.",
    "Identification": "Identification",
    "Associer un astragale à un animal par indices simples.": "Link an astragalus to an animal using simple clues.",
    "Localisation": "Location",
    "Retrouver l'os dans le tarse et comprendre la locomotion.": "Find the bone in the tarsus and understand locomotion.",
    "Inférence": "Inference",
    "Dire ce que l'os permet d'affirmer, et ce qui reste prudent.": "Say what the bone allows us to claim, and where caution remains necessary.",
    "Culture": "Culture",
    "Examiner jeux, amulettes, mythes et récits transformés.": "Examine games, amulets, myths and transformed stories.",
    "Visite libre ou accompagnée": "Self-guided or guided visit",
    "Une mission d'enquête dans les collections": "An investigation mission in the collections",
    "Le visiteur apprend à repérer l'astragale du mouton, puis transfère ce savoir à d'autres animaux. Chaque station suit une règle courte : une question, une action, une validation.": "Visitors learn to identify the sheep astragalus, then transfer that knowledge to other animals. Each station follows a simple rule: one question, one action, one check.",
    "Regarder": "Look",
    "Identifier deux repères visuels sur un astragale modèle.": "Identify two visual landmarks on a model astragalus.",
    "Comparer": "Compare",
    "Chercher les ressemblances sur un autre squelette.": "Look for similarities on another skeleton.",
    "Placer": "Place",
    "Situer la zone de la cheville ou du tarse.": "Locate the ankle or tarsus area.",
    "Expliquer": "Explain",
    "Justifier la réponse avec un indice anatomique.": "Justify the answer with an anatomical clue.",
    "Prolonger": "Go further",
    "Accéder aux contenus longs par fiche ou QR code.": "Access longer content through a sheet or QR code.",
    "Préparation de séance": "Lesson preparation",
    "Des ressources courtes, sourçables et réutilisables": "Short, sourceable and reusable resources",
    "La version enseignant·e privilégie les objectifs, le matériel, le déroulé, les erreurs fréquentes et le corrigé raisonné. La version complète garde la bibliographie, les sources et les nuances scientifiques.": "The teacher version foregrounds objectives, materials, sequence, common mistakes and reasoned answers. The full version keeps the bibliography, sources and scientific nuance.",
    "Objectifs": "Objectives",
    "Nommer les compétences sans afficher de codes incertains.": "Name competencies without displaying uncertain codes.",
    "Matériel": "Materials",
    "Images, reproductions, fiche de vocabulaire, traces écrites.": "Images, replicas, vocabulary sheet, written traces.",
    "Questions": "Questions",
    "Faire verbaliser les indices et les limites de l'hypothèse.": "Have learners verbalize clues and the limits of the hypothesis.",
    "Corrections": "Corrections",
    "Distinguer récit simplifié et état des connaissances.": "Distinguish simplified story from the current state of knowledge.",
    "Prolongements": "Extensions",
    "Relier sciences du vivant, histoire culturelle et musée.": "Connect life sciences, cultural history and the museum.",
    "Premières activités prêtes à lancer": "First ready-to-use activities",
    "Ces formats courts transforment l'astragale en support d'enquête : les élèves et les visiteurs observent, placent, justifient, puis distinguent ce qui est attesté de ce qui reste à vérifier.": "These short formats turn the astragalus into an investigation tool: pupils and visitors observe, locate, justify, then distinguish what is attested from what still needs checking.",
    "École": "School",
    "25 min": "25 min",
    "45-60 min": "45-60 min",
    "Mission astragale": "Astragalus mission",
    "Les élèves comparent trois formes osseuses, repèrent l'astragale, puis expliquent deux indices qui justifient leur choix.": "Pupils compare three bone shapes, identify the astragalus, then explain two clues that justify their choice.",
    "Activité 1 — Trouver l'astragale en classe": "Activity 1 — Find the astragalus in class",
    "Les élèves localisent la région du tarse, formulent une hypothèse, justifient avec des indices et comparent avec un autre mammifère.": "Pupils locate the tarsus area, formulate a hypothesis, justify it with clues, and compare with another mammal.",
    "Classer par ressemblances visibles.": "Sort by visible similarities.",
    "Nommer deux repères morphologiques.": "Name two morphological landmarks.",
    "Formuler une hypothèse prudente.": "Formulate a cautious hypothesis.",
    "Observer un mouvement ou un document.": "Observe a movement or a document.",
    "Situer l'articulation entre jambe et pied.": "Locate the joint between leg and foot.",
    "Conclure avec prudence.": "Conclude cautiously.",
    "Ouvrir le document": "Open the document",
    "Ouvrir le dossier": "Open the dossier",
    "Musée": "Museum",
    "Familles": "Families",
    "Familles · groupes": "Families · groups",
    "15 min": "15 min",
    "30-45 min": "30-45 min",
    "Où est l'os ?": "Where is the bone?",
    "Une mission de visite courte : partir d'un mouton, retrouver la zone de l'astragale sur un autre animal, puis valider avec un indice anatomique.": "A short visit mission: start from a sheep, find the astragalus area on another animal, then validate with an anatomical clue.",
    "Activité 1 — Trouver l'astragale au musée": "Activity 1 — Find the astragalus at the museum",
    "Une mission de visite : partir d'un mammifère de référence, retrouver la région de l'astragale sur un second animal, puis verbaliser les indices.": "A visit mission: start from a reference mammal, find the astragalus area on a second animal, then verbalize the clues.",
    "Observer une image modèle.": "Observe a model image.",
    "Repérer le membre postérieur.": "Identify the hind limb.",
    "Transférer le repère vers une autre espèce.": "Transfer the landmark to another species.",
    "Expliquer le lien avec la locomotion.": "Explain the link with locomotion.",
    "Distinguer région localisée et os identifié.": "Distinguish a located region from an identified bone.",
    "10-12 ans": "Ages 10-12",
    "30 min": "30 min",
    "Vrai, prudent, à vérifier": "True, cautious, to check",
    "Les élèves trient des phrases sur l'osselet, Achille et les usages culturels pour distinguer preuve, hypothèse et récit simplifié.": "Pupils sort statements about knucklebones, Achilles and cultural uses to distinguish evidence, hypothesis and simplified story.",
    "Repérer les affirmations trop rapides.": "Spot statements that move too quickly.",
    "Reformuler avec nuance.": "Rephrase with nuance.",
    "Relier vocabulaire, source et contexte.": "Connect vocabulary, source and context.",
    "Atelier de raisonnement": "Reasoning workshop",
    "Ce que l'on croyait, ce que l'on sait mieux aujourd'hui": "What people believed, what we know better today",
    "Le site installe un réflexe critique : ne pas répéter les récits commodes quand les sources demandent de distinguer les périodes, les régions et les usages.": "The site builds a critical habit: not repeating convenient stories when sources ask us to distinguish periods, regions and uses.",
    "Osselets et dés": "Knucklebones and dice",
    "Récit trop simple": "Oversimplified story",
    "Les osselets seraient les premiers dés naturels, partout et depuis toujours.": "Knucklebones would be the first natural dice, everywhere and forever.",
    "Formulation retenue": "Preferred wording",
    "Un même os a pu servir de support biologique, ludique, rituel ou symbolique selon les contextes.": "The same bone may have served as a biological, playful, ritual or symbolic support depending on context.",
    "Achille": "Achilles",
    "Le talon vulnérable serait une évidence homérique.": "The vulnerable heel would be an obvious Homeric fact.",
    "Le talon d'Achille est un cas de réception tardive et de transformation des récits antiques.": "The Achilles heel is a case of later reception and transformation of ancient stories.",
    "Vocabulaire": "Vocabulary",
    "Astragale, talus et osselet pourraient être employés indifféremment.": "Astragalus, talus and knucklebone could be used interchangeably.",
    "Chaque terme dépend du contexte : anatomie, archéozoologie, jeu, langue et période.": "Each term depends on context: anatomy, archaeozoology, game, language and period.",
    "Un écosystème de supports": "An ecosystem of resources",
    "Chaque ressource a un rôle distinct afin que le site reste lisible pour les enfants, utile pour les enseignant·es et transférable aux musées.": "Each resource has a distinct role so the site remains readable for children, useful for teachers and transferable to museums.",
    "Dossier complet — Activité 1": "Complete dossier — Activity 1",
    "Page centrale avec fiches élèves, guides, corrigé, planche de repérage et suivi des validations.": "Central page with pupil sheets, guides, answer key, location sheet and validation tracking.",
    "Fiche activité école": "School activity sheet",
    "Déroulé prêt à utiliser pour observer, comparer et justifier l'identification.": "A ready-to-use sequence to observe, compare and justify identification.",
    "Guide enseignant": "Teacher guide",
    "Déroulement complet, analyse a priori, relances, différenciation et évaluation formative.": "Full sequence, a priori analysis, prompts, differentiation and formative assessment.",
    "Fiche mission musée": "Museum mission sheet",
    "Consigne courte pour retrouver l'astragale dans les collections ou les vitrines.": "A short prompt to find the astragalus in collections or display cases.",
    "Guide du musée": "Museum guide",
    "Organisation de station, contraintes de vitrine, sécurité, accessibilité et médiation orale.": "Station setup, display-case constraints, safety, accessibility and oral mediation.",
    "Fiche raisonnement": "Reasoning sheet",
    "Activité sourcée pour distinguer affirmation, hypothèse et récit trop simplifié.": "A source-based activity to distinguish claim, hypothesis and oversimplified story.",
    "Glossaire de départ": "Starter glossary",
    "Termes essentiels pour éviter les confusions entre os, jeu, talus et astragale.": "Essential terms to avoid confusion between bone, game, talus and astragalus.",
    "Corrigé raisonné": "Reasoned answer key",
    "Réponses-types qui expliquent le raisonnement plutôt que de donner seulement le résultat.": "Model answers that explain reasoning instead of giving only the result.",
    "Banque d'activités": "Activity bank",
    "Trois premières activités visibles sur le site, prêtes à compléter avec images et modèles.": "Three first activities visible on the site, ready to complete with images and models.",
    "Petit livre d'ouverture": "Opening booklet",
    "Un récit illustré pour entrer dans l'astragale par Achille et le fameux \"talon\".": "An illustrated story that introduces the astragalus through Achilles and the famous \"heel\".",
    "Droits et sources": "Rights and sources",
    "Espace prévu pour les crédits, les références, les versions et les droits d'images.": "A space for credits, references, versions and image rights.",
    "Modèles 3D": "3D models",
    "Comprendre l'orientation de l'os": "Understanding the bone's orientation",
    "Les futurs modèles 3D devront servir le raisonnement spatial : surfaces articulaires, orientation, comparaison entre espèces et mouvement. La page réserve déjà cette place dans l'architecture du site.": "Future 3D models should support spatial reasoning: articular surfaces, orientation, comparison between species and movement. The page already reserves this place in the site architecture.",
    "Nommer sans confondre": "Name without confusing",
    "Les termes sont courts pour rester accessibles, mais assez précis pour protéger le projet des raccourcis fréquents.": "The terms are short enough to remain accessible, but precise enough to protect the project from common shortcuts.",
    "Filtrer les termes": "Filter terms",
    "Astragale": "Astragalus",
    "Os du tarse impliqué dans l'articulation et la locomotion, observé chez de nombreux animaux.": "A tarsal bone involved in articulation and locomotion, observed in many animals.",
    "Talus": "Talus",
    "Nom courant en anatomie humaine moderne pour l'os anciennement appelé astragale.": "The modern anatomical name in humans for the bone formerly called astragalus.",
    "Osselet": "Knucklebone",
    "Mot qui peut désigner un petit os, une pièce de jeu, ou les osselets de l'oreille.": "A word that can refer to a small bone, a game piece, or the ossicles of the ear.",
    "Archéozoologie": "Archaeozoology",
    "Étude des restes animaux pour comprendre espèces, pratiques, milieux et usages humains.": "The study of animal remains to understand species, practices, environments and human uses.",
    "Homologie": "Homology",
    "Relation entre structures comparables chez des espèces différentes, sans les rendre identiques.": "A relationship between comparable structures in different species, without making them identical.",
    "Exemple de récit antique transformé par des traditions postérieures autour de la vulnérabilité.": "An example of an ancient story transformed by later traditions around vulnerability.",
    "Talos": "Talos",
    "Figure mythique dont la vulnérabilité près de la cheville permet d'aborder corps et mouvement.": "A mythical figure whose vulnerability near the ankle opens a discussion about body and movement.",
    "Raisonnement qui part d'un indice observé, tout en distinguant preuve, hypothèse et limite.": "Reasoning that starts from an observed clue while distinguishing evidence, hypothesis and limit.",
    "Aucun terme ne correspond à cette recherche.": "No term matches this search.",
    "Recherche et gouvernance": "Research and governance",
    "Un site fait pour durer après l'exposition": "A site designed to last beyond the exhibition",
    "La prochaine étape éditoriale consiste à relier chaque exemple public à un dossier de sources : bibliographie, images autorisées, modèles 3D, crédits et date de mise à jour.": "The next editorial step is to connect each public example to a source file: bibliography, authorized images, 3D models, credits and update date.",
    "Cette première version prépare la structure, la direction visuelle et les parcours. Les contenus longs pourront ensuite être ajoutés sans mélanger les publics ni les usages.": "This first version prepares the structure, visual direction and pathways. Longer content can then be added without mixing audiences or uses.",
    "Première version du site -": "First version of the site -"
  }
};

const attributeTranslations = {
  title: {
    de: "Knochengeschichten | Astragalus, Archäozoologie und Vermittlung",
    it: "Storie d'ossa | Astragalo, archeozoologia e mediazione",
    en: "Bone Stories | Astragalus, archaeozoology and mediation"
  },
  description: {
    de: "Knochengeschichten erkundet den Astragalus als wissenschaftliches, archäozoologisches und kulturelles Objekt für Schulen, Museen und neugierige Besucher.",
    it: "Storie d'ossa esplora l'astragalo come oggetto scientifico, archeozoologico e culturale per scuole, musei e pubblici curiosi.",
    en: "Bone Stories explores the astragalus as a scientific, archaeozoological and cultural object for schools, museums and curious audiences."
  },
  placeholders: {
    "glossary-search": {
      de: "z. B. Astragalus, Achilles, Talus",
      it: "Es. astragalo, Achille, talo",
      en: "E.g. astragalus, Achilles, talus"
    }
  },
  labels: {
    ".brand": {
      de: "Startseite Knochengeschichten",
      it: "Home Storie d'ossa",
      en: "Bone Stories home"
    },
    ".site-nav": {
      de: "Hauptnavigation",
      it: "Navigazione principale",
      en: "Main navigation"
    },
    ".language-select": {
      de: "Sprache wählen",
      it: "Scegliere la lingua",
      en: "Choose language"
    },
    ".hero-media": {
      de: "Ein Astragalus auf einem archäologischen Arbeitstisch.",
      it: "Un astragalo su un tavolo di studio archeologico.",
      en: "An astragalus on an archaeological study table."
    },
    ".hero-actions": {
      de: "Schnellzugriffe",
      it: "Accessi rapidi",
      en: "Quick links"
    },
    ".hero-threads": {
      de: "Rote Fäden des Projekts",
      it: "Fili conduttori del progetto",
      en: "Core threads of the project"
    },
    ".tabs": {
      de: "Vermittlungsrundgänge",
      it: "Percorsi di mediazione",
      en: "Mediation pathways"
    },
    ".tab-list": {
      de: "Rundgang wählen",
      it: "Scegliere un percorso",
      en: "Choose a pathway"
    },
    ".belief-grid": {
      de: "Korrektur von Erzählungen",
      it: "Correzioni dei racconti",
      en: "Story corrections"
    },
    "[data-back-to-top]": {
      de: "Zurück zum Seitenanfang",
      it: "Tornare in cima alla pagina",
      en: "Back to top"
    }
  }
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setBackToTopState = () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 360);
};

setHeaderState();
setBackToTopState();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("scroll", setBackToTopState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
});

const readSavedLanguage = () => {
  try {
    return localStorage.getItem("histoire-os-language");
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem("histoire-os-language", language);
  } catch {
    // Local file previews can block storage; the selector should still work.
  }
};

const translateTextNode = (node, language) => {
  const currentText = node.nodeValue;
  if (!currentText.trim()) return;

  const original = translatedTextNodes.get(node) || normalizeText(currentText);
  translatedTextNodes.set(node, original);

  const replacement = language === defaultLanguage
    ? original
    : textTranslations[language]?.[original] || original;

  const leading = currentText.match(/^\s*/)?.[0] || "";
  const trailing = currentText.match(/\s*$/)?.[0] || "";
  node.nodeValue = `${leading}${replacement}${trailing}`;
};

const translateTextContent = (language) => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "SELECT", "OPTION"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.trim()
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    }
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => translateTextNode(node, language));
};

const setTranslatedAttribute = (element, attribute, value, language) => {
  if (!element) return;
  let originals = translatedAttributes.get(element);
  if (!originals) {
    originals = {};
    translatedAttributes.set(element, originals);
  }
  if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);

  element.setAttribute(
    attribute,
    language === defaultLanguage ? originals[attribute] : value
  );
};

const translateAttributes = (language) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    setTranslatedAttribute(
      metaDescription,
      "content",
      attributeTranslations.description[language],
      language
    );
  }

  const originalTitle = document.documentElement.dataset.originalTitle || document.title;
  document.documentElement.dataset.originalTitle = originalTitle;
  document.title = language === defaultLanguage
    ? originalTitle
    : attributeTranslations.title[language] || originalTitle;

  Object.entries(attributeTranslations.placeholders).forEach(([id, translations]) => {
    const element = document.getElementById(id);
    setTranslatedAttribute(element, "placeholder", translations[language], language);
  });

  Object.entries(attributeTranslations.labels).forEach(([selector, translations]) => {
    const element = document.querySelector(selector);
    const attribute = element?.tagName === "IMG" ? "alt" : "aria-label";
    setTranslatedAttribute(element, attribute, translations[language], language);
  });
};

const translatePage = (language) => {
  translateTextContent(language);
  translateAttributes(language);
};

const applyLanguage = (language) => {
  const nextLanguage = supportedLanguages.has(language) ? language : "fr";
  document.documentElement.lang = nextLanguage;
  document.documentElement.dataset.activeLanguage = nextLanguage;
  languageSelect.value = nextLanguage;
  translatePage(nextLanguage);
  saveLanguage(nextLanguage);
};

applyLanguage(readSavedLanguage() || "fr");

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

const activateTab = (target) => {
  tabButtons.forEach((item) => {
    const isSelected = item.dataset.tab === target;
    item.classList.toggle("is-active", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
    item.tabIndex = isSelected ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isTarget = panel.dataset.panel === target;
    panel.classList.toggle("is-active", isTarget);
    panel.hidden = !isTarget;
  });
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });

  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const currentIndex = [...tabButtons].indexOf(button);
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + offset + tabButtons.length) % tabButtons.length;
    const nextButton = tabButtons[nextIndex];
    nextButton.focus();
    activateTab(nextButton.dataset.tab);
  });
});

activateTab("ecole");

glossarySearch.addEventListener("input", () => {
  const query = glossarySearch.value.trim().toLocaleLowerCase("fr");
  let visibleCount = 0;

  glossaryItems.forEach((item) => {
    const text = `${item.textContent} ${item.dataset.term}`.toLocaleLowerCase("fr");
    const isVisible = text.includes(query);
    item.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount > 0;
});

year.textContent = new Date().getFullYear();
