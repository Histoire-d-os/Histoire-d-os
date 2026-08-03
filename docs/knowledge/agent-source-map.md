# Cartographie des agents et des sources

Les six agents sont des relecteurs en lecture seule. Ils héritent du modèle et de
l'effort de raisonnement de la session principale. L'agent principal reste seul
responsable de la synthèse et des modifications.

| Agent exact | Sources obligatoires ou prioritaires | Fonction | Limite humaine |
| --- | --- | --- | --- |
| `per-reviewer` | `docs/per-index.md`, `_private-inputs/per/*.pdf`, version officielle du PER si disponible | Vérifier cycle, objectifs, composantes, tâches, traces, critères et portée réelle | Validation finale par une personne enseignante ou formatrice |
| `pedagogy-reviewer` | Pages françaises, fiches, guides, supports, corrigés, PER, `source-manifest.csv`, CAST UDL 3.0 | Évaluer lisibilité, charge cognitive, progression, consignes, différenciation et faisabilité 8-12 ans | Relecture par une personne enseignante et essai en classe |
| `scientific-reviewer` | `barbara-care-bibliography.csv`, `barbara-care-source-map.md`, textes privés disponibles, sources primaires, anatomie et archéozoologie | Vérifier faits, chronologie, terminologie, certitude et interprétations | Validation scientifique de Barbara Carè ou d'une personne spécialiste |
| `museum-mediation-reviewer` | Guides, notices institutionnelles, règles de l'institution, ICOM 2026, corpus muséal validé | Vérifier matérialité, manipulation, provenance, durée et adaptation à la collection | Accord de l'institution et de ses équipes de conservation/médiation |
| `media-rights-reviewer` | Registres de médias, notices originales, licences, politiques institutionnelles, IPI | Qualifier provenance, attribution et usages web/PDF/DOCX/GitHub | Autorisation des ayants droit ou conseil juridique si nécessaire |
| `print-accessibility-reviewer` | Sources HTML, rendus PDF/DOCX, rapports QA, WCAG 2.2, CAST UDL 3.0 | Contrôler A4, Word, structure, contraste, lecture, découpe et accessibilité web | Tests d'impression, tests utilisateurs et relecture humaine |

## Séquence

1. Revue préalable ciblée.
2. Synthèse et modification par l'agent principal.
3. Seconde revue ciblée par les mêmes spécialistes.
4. Validation humaine selon le domaine.

## Sources privées

Les agents peuvent lire `_private-inputs/` pour leur mission, sans déplacer, publier
ou committer son contenu. Toute absence de texte intégral, page, licence, notice ou
validation doit apparaître explicitement dans leur rapport.
