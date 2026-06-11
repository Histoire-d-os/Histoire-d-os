# Audit accessibilité, responsive et interactions

## Contrôles exécutés

- Largeurs testées : 375 x 812, 768 x 1024, 1440 x 1000.
- Pages testées : 48 pages HTML.
- Erreurs console : 0.
- 404 réseau local : 0.
- Débordements horizontaux détectés en écran : 0.
- Images sans `alt` : 0 dans l'inventaire HTML.
- `h1` : 1 par page dans l'inventaire.
- Interactions testées : menu mobile, onglets, sélecteur de langue, filtre glossaire, retour haut.

## Résultats interactions

| Interaction | Résultat |
| --- | --- |
| Menu mobile | Ouverture au clic OK ; `aria-expanded=true`, navigation visible. |
| Onglets | Clics vers musée et enseignants OK ; état sélectionné mis à jour. |
| Sélecteur de langue | Change le `lang`, le titre et l'interface d'accueil ; risque éditorial car traduction partielle. |
| Filtre glossaire | Recherche vide et recherche "astragale" OK. |
| Retour en haut | Test headless non concluant : le bouton n'est pas devenu visible après scroll dans la mesure automatisée. À retester et fiabiliser. |

## Problèmes

| Priorité | Problème | Fichier | Recommandation |
| --- | --- | --- | --- |
| P1 | Contraste insuffisant du bouton primaire blanc sur `#b6763f`, environ 3.72:1 | `styles.css` | Utiliser une teinte plus sombre ou un texte sombre selon contexte. |
| P1 | Focus clavier parfois trop discret ou basé sur hover/couleur | `styles.css` | Ajouter un focus visible dédié avec outline ou box-shadow contrasté. |
| P2 | Pas de lien d'évitement vers le contenu principal | `index.html`, pages ressources | Ajouter un lien "Aller au contenu". |
| P2 | Menu mobile sans gestion `Escape`, retour focus ou confinement minimal | `script.js` | Ajouter comportement clavier robuste. |
| P2 | Plusieurs tableaux sans `caption` explicite | Activité 4, corrections | Ajouter captions ou `aria-labelledby`. |
| P2 | Grille d'interprétation déborde en A4 print | `styles.css`, activité 4 | Adapter largeur en impression. |
| P3 | Onglets sans touches `Home` et `End` | `script.js` | Compléter le pattern ARIA tabs. |
| P3 | Liens répétés "Ouvrir le dossier" peu distincts hors contexte | `index.html` | Ajouter `aria-label` précis. |

## Points positifs

- Structure générale claire.
- Pas de débordement responsive mesuré.
- `prefers-reduced-motion` présent.
- Navigation principale et onglets ont déjà des attributs ARIA.
- Les pages restent consultables sans erreur JavaScript au chargement.
