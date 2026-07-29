from __future__ import annotations

import argparse
import re
import tempfile
from pathlib import Path

from pypdf import PdfReader, PdfWriter


ACTIVITIES = {
    "fr": {"01": "Trouver l'astragale", "02": "Associer un astragale à un animal", "03": "Achille : une histoire qui change", "04": "Un os, plusieurs vies"},
    "en": {"01": "Find the astragalus", "02": "Match an astragalus to an animal", "03": "Achilles: a story that changes", "04": "One bone, many lives"},
    "de": {"01": "Den Astragalus finden", "02": "Einen Astragalus einem Tier zuordnen", "03": "Achilles: eine Geschichte im Wandel", "04": "Ein Knochen, viele Leben"},
    "it": {"01": "Trovare l'astragalo", "02": "Associare un astragalo a un animale", "03": "Achille: una storia che cambia", "04": "Un osso, molte vite"},
}

KINDS = {
    "fr": {"fiche-eleve": "Fiche élève", "guide-encadrement": "Guide d'encadrement", "supports": "Supports", "corrige": "Corrigé", "kit-complet": "Kit complet"},
    "en": {"fiche-eleve": "Learner sheet", "guide-encadrement": "Facilitator guide", "supports": "Resources", "corrige": "Answer guide", "kit-complet": "Complete kit"},
    "de": {"fiche-eleve": "Arbeitsblatt", "guide-encadrement": "Leitfaden", "supports": "Materialien", "corrige": "Lösungshinweise", "kit-complet": "Komplettes Set"},
    "it": {"fiche-eleve": "Scheda alunno", "guide-encadrement": "Guida", "supports": "Materiali", "corrige": "Correzione", "kit-complet": "Kit completo"},
}


def describe(path: Path, language: str) -> tuple[str, str, str]:
    match = re.fullmatch(r"activite-(0[1-4])-(.+)\.pdf", path.name)
    if not match:
        raise ValueError(f"Nom PDF inattendu : {path.name}")
    activity_id, kind_id = match.groups()
    return activity_id, kind_id, f"{KINDS[language][kind_id]} - {ACTIVITIES[language][activity_id]}"


def finalize(path: Path, language: str) -> None:
    activity_id, kind_id, title = describe(path, language)
    reader = PdfReader(path)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)
    writer.add_metadata(
        {
            "/Title": title,
            "/Author": "Histoires d'os",
            "/Subject": f"Histoires d'os - educational pilot resource ({language.upper()})",
            "/Keywords": f"Histoires d'os, astragalus, talus, activity {activity_id}, {kind_id}, {language}",
            "/Creator": "Histoires d'os - Chromium et Playwright",
        }
    )

    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False, dir=path.parent) as temp_file:
        temporary_path = Path(temp_file.name)
    try:
        with temporary_path.open("wb") as output:
            writer.write(output)
        temporary_path.replace(path)
    finally:
        temporary_path.unlink(missing_ok=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--count", type=Path)
    parser.add_argument("--directory", type=Path)
    parser.add_argument("--language", choices=sorted(ACTIVITIES), default="fr")
    args = parser.parse_args()

    if args.count:
        print(len(PdfReader(args.count).pages))
        return
    if not args.directory:
        parser.error("--count ou --directory est requis")

    pdfs = sorted(args.directory.glob("activite-*.pdf"))
    if len(pdfs) != 20:
        raise SystemExit(f"20 PDF attendus, {len(pdfs)} trouvés dans {args.directory}")
    for pdf in pdfs:
        finalize(pdf, args.language)
    print(f"Métadonnées finalisées pour {len(pdfs)} PDF.")


if __name__ == "__main__":
    main()
