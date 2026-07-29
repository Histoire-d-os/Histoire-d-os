from __future__ import annotations

import csv
import json
import math
import os
import shutil
import subprocess
from pathlib import Path

import pdfplumber
from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF_DIRS = {
    "fr": ROOT / "ressources" / "pdf",
    "en": ROOT / "en" / "ressources" / "pdf",
    "de": ROOT / "de" / "ressources" / "pdf",
    "it": ROOT / "it" / "ressources" / "pdf",
}
QA_DIR = ROOT / "docs" / "qa" / "pdf-imprimables-professionnels"
PAGES_DIR = QA_DIR / "pages"
CONTACT_DIR = QA_DIR / "contact-sheets"
GRAY_DIR = QA_DIR / "grayscale"

EXPECTED_KINDS = {
    "fiche-eleve",
    "guide-encadrement",
    "supports",
    "corrige",
    "kit-complet",
}

BLOCKED_MEDIA = [
    "comparaison-astragales-vuillien-et-al-a-valider",
    "achille-memnon-vase-antique-a-valider",
    "objet-a-osselet-os-met-a-valider",
    "objet-b-osselet-bronze-met-a-valider",
    "objet-c-osselet-verre-met-a-valider",
    "objet-d-osselet-faience-met-a-valider",
    "objet-e-vase-astragale-met-a-valider",
]

FORBIDDEN_TEXT = ["file:///", "_private-inputs/", "_private-inputs\\", "tmp/", "tmp\\"]
WINDOWS_PATH_MARKERS = ["C:\\", "D:\\", "E:\\"]
GRAYSCALE_EXAMPLES = [
    ("fr", "activite-01-fiche-eleve.pdf"),
    ("en", "activite-02-guide-encadrement.pdf"),
    ("de", "activite-03-supports.pdf"),
    ("it", "activite-04-kit-complet.pdf"),
]


def find_pdftoppm() -> Path:
    command = shutil.which("pdftoppm")
    if command and not command.lower().endswith(".cmd"):
        return Path(command)
    bundled = (
        Path.home()
        / ".cache"
        / "codex-runtimes"
        / "codex-primary-runtime"
        / "dependencies"
        / "native"
        / "poppler"
        / "Library"
        / "bin"
        / "pdftoppm.exe"
    )
    if bundled.exists():
        return bundled
    raise FileNotFoundError("pdftoppm est requis pour le rendu QA")


def ensure_expected_files() -> list[tuple[str, Path]]:
    expected = {
        f"activite-{activity}-{kind}.pdf"
        for activity in ("01", "02", "03", "04")
        for kind in EXPECTED_KINDS
    }
    collected = []
    for language, directory in PDF_DIRS.items():
        pdfs = sorted(directory.glob("activite-*.pdf"))
        names = {path.name for path in pdfs}
        missing = sorted(expected - names)
        extras = sorted(names - expected)
        if missing or extras:
            raise RuntimeError(
                f"Inventaire PDF invalide ({language}). Manquants={missing}, extras={extras}"
            )
        collected.extend((language, pdf) for pdf in pdfs)
    return collected


def render_pdf(pdftoppm: Path, language: str, pdf: Path) -> list[Path]:
    target = PAGES_DIR / language / pdf.stem
    target.mkdir(parents=True, exist_ok=True)
    for stale in target.glob("page-*.png"):
        stale.unlink()
    prefix = target / "page"
    subprocess.run(
        [str(pdftoppm), "-png", "-r", "110", str(pdf), str(prefix)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
    )
    rendered = sorted(target.glob("page-*.png"))
    for index, path in enumerate(rendered, start=1):
        normalized = target / f"page-{index:03d}.png"
        if path != normalized:
            path.replace(normalized)
    return sorted(target.glob("page-*.png"))


def contact_sheet(images: list[Path], destination: Path, title: str) -> None:
    opened = [Image.open(path).convert("RGB") for path in images]
    try:
        thumb_width = 310
        thumb_height = 438
        columns = 4
        rows = math.ceil(len(opened) / columns)
        sheet = Image.new("RGB", (columns * thumb_width + 40, rows * (thumb_height + 34) + 70), "white")
        draw = ImageDraw.Draw(sheet)
        draw.text((20, 18), title, fill="#1f2523", font=ImageFont.load_default())
        for index, image in enumerate(opened):
            image.thumbnail((thumb_width - 20, thumb_height - 20), Image.Resampling.LANCZOS)
            column = index % columns
            row = index // columns
            x = column * thumb_width + (thumb_width - image.width) // 2 + 10
            y = 56 + row * (thumb_height + 34)
            sheet.paste(image, (x, y))
            draw.rectangle((x - 1, y - 1, x + image.width, y + image.height), outline="#8b8f8c", width=1)
            draw.text((column * thumb_width + 18, y + thumb_height + 2), f"Page {index + 1}", fill="#38403d", font=ImageFont.load_default())
        destination.parent.mkdir(parents=True, exist_ok=True)
        sheet.save(destination, optimize=True)
    finally:
        for image in opened:
            image.close()


def grayscale_copy(images: list[Path], destination: Path, title: str) -> None:
    destination.mkdir(parents=True, exist_ok=True)
    for stale in destination.glob("page-*.png"):
        stale.unlink()
    grayscale_pages = []
    for index, image_path in enumerate(images, start=1):
        target = destination / f"page-{index:03d}.png"
        with Image.open(image_path) as image:
            image.convert("L").save(target, optimize=True)
        grayscale_pages.append(target)
    contact_sheet(grayscale_pages, destination / "contact-sheet.png", f"Niveaux de gris - {title}")


def inspect_pdf(pdf: Path, language: str) -> dict:
    reader = PdfReader(pdf)
    metadata = reader.metadata
    page_rows = []
    full_text = []
    link_count = 0
    outside_characters = 0

    with pdfplumber.open(pdf) as document:
        for index, page in enumerate(document.pages, start=1):
            text = page.extract_text() or ""
            full_text.append(text)
            width_mm = page.width * 25.4 / 72
            height_mm = page.height * 25.4 / 72
            chars = page.chars
            outside = [
                char
                for char in chars
                if char["x0"] < -0.5
                or char["x1"] > page.width + 0.5
                or char["top"] < -0.5
                or char["bottom"] > page.height + 0.5
            ]
            outside_characters += len(outside)
            body_characters = [
                char
                for char in chars
                if char["top"] >= 40 and char["bottom"] <= page.height - 40
            ]
            body_text = "".join(char.get("text", "") for char in body_characters).strip()
            page_rows.append(
                {
                    "language": language,
                    "file": pdf.name,
                    "page": index,
                    "width_mm": round(width_mm, 2),
                    "height_mm": round(height_mm, 2),
                    "text_characters": len(text.strip()),
                    "body_text_characters": len(body_text),
                    "blank": len(body_text) < 80,
                    "characters_outside_page": len(outside),
                }
            )

    for page in reader.pages:
        annotations = page.get("/Annots") or []
        for annotation_reference in annotations:
            annotation = annotation_reference.get_object()
            if annotation.get("/Subtype") == "/Link":
                link_count += 1

    combined = "\n".join(full_text)
    media_box = reader.pages[0].mediabox
    width_mm = float(media_box.width) * 25.4 / 72
    height_mm = float(media_box.height) * 25.4 / 72
    a4 = abs(width_mm - 210) < 1 and abs(height_mm - 297) < 1
    forbidden_hits = [marker for marker in FORBIDDEN_TEXT + WINDOWS_PATH_MARKERS if marker.lower() in combined.lower()]
    return {
        "language": language,
        "file": pdf.name,
        "pages": len(reader.pages),
        "bytes": pdf.stat().st_size,
        "a4": a4,
        "selectable_text": len(combined.strip()) > 100,
        "blank_pages": [row["page"] for row in page_rows if row["blank"]],
        "characters_outside_page": outside_characters,
        "title": metadata.title if metadata else None,
        "author": metadata.author if metadata else None,
        "has_outline": bool(reader.outline),
        "links": link_count,
        "forbidden_text_hits": forbidden_hits,
        "page_rows": page_rows,
    }


def audit_sources() -> dict:
    source_files = sorted((ROOT / "ressources" / "print" / "pdf-sources").glob("*.html"))
    combined = "\n".join(path.read_text(encoding="utf-8") for path in source_files)
    blocked_hits = [name for name in BLOCKED_MEDIA if name in combined]
    forbidden_hits = [marker for marker in FORBIDDEN_TEXT + WINDOWS_PATH_MARKERS if marker.lower() in combined.lower()]
    remote_assets = [line.strip() for line in combined.splitlines() if "src=\"http" in line or "@import" in line]
    return {
        "files": [path.relative_to(ROOT).as_posix() for path in source_files],
        "blocked_media_hits": blocked_hits,
        "forbidden_text_hits": forbidden_hits,
        "remote_asset_lines": remote_assets,
    }


def main() -> None:
    pdfs = ensure_expected_files()
    pdftoppm = find_pdftoppm()
    PAGES_DIR.mkdir(parents=True, exist_ok=True)
    CONTACT_DIR.mkdir(parents=True, exist_ok=True)
    GRAY_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    rendered_by_name: dict[tuple[str, str], list[Path]] = {}
    for language, pdf in pdfs:
        result = inspect_pdf(pdf, language)
        pages = render_pdf(pdftoppm, language, pdf)
        if len(pages) != result["pages"]:
            raise RuntimeError(f"Rendu incomplet pour {pdf.name}")
        contact_sheet(pages, CONTACT_DIR / language / f"{pdf.stem}.png", f"{language.upper()} - {pdf.name}")
        rendered_by_name[(language, pdf.name)] = pages
        results.append(result)

    for language, name in GRAYSCALE_EXAMPLES:
        grayscale_copy(
            rendered_by_name[(language, name)],
            GRAY_DIR / language / Path(name).stem,
            f"{language.upper()} - {name}",
        )

    page_rows = [row for result in results for row in result.pop("page_rows")]
    with (QA_DIR / "pages.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=page_rows[0].keys())
        writer.writeheader()
        writer.writerows(page_rows)

    source_audit = audit_sources()
    failures = []
    for result in results:
        if not result["a4"]:
            failures.append(f"{result['file']}: format non A4")
        if not result["selectable_text"]:
            failures.append(f"{result['file']}: texte non sélectionnable")
        if result["blank_pages"]:
            failures.append(f"{result['file']}: pages vides {result['blank_pages']}")
        if result["characters_outside_page"]:
            failures.append(f"{result['file']}: caractères hors page")
        if result["author"] != "Histoires d'os" or not result["title"]:
            failures.append(f"{result['file']}: métadonnées incomplètes")
        if result["forbidden_text_hits"]:
            failures.append(f"{result['file']}: texte interdit {result['forbidden_text_hits']}")
    if source_audit["blocked_media_hits"]:
        failures.append(f"Médias provisoires dans les sources : {source_audit['blocked_media_hits']}")
    if source_audit["forbidden_text_hits"]:
        failures.append(f"Chemins interdits dans les sources : {source_audit['forbidden_text_hits']}")
    if source_audit["remote_asset_lines"]:
        failures.append("Ressources distantes chargées dans les sources HTML")

    summary = {
        "pdf_count": len(results),
        "page_count": sum(result["pages"] for result in results),
        "all_a4": all(result["a4"] for result in results),
        "all_selectable": all(result["selectable_text"] for result in results),
        "all_have_outlines": all(result["has_outline"] for result in results),
        "blank_page_count": sum(len(result["blank_pages"]) for result in results),
        "failures": failures,
        "source_audit": source_audit,
        "documents": results,
    }
    (QA_DIR / "test-results.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")

    overflow_lines = [
        "# Contrôle des débordements et des pages",
        "",
        f"- PDF contrôlés : {summary['pdf_count']} (20 par langue)",
        f"- Pages rendues : {summary['page_count']}",
        f"- Pages vides détectées : {summary['blank_page_count']}",
        f"- Caractères hors page : {sum(result['characters_outside_page'] for result in results)}",
        f"- Format A4 : {'oui' if summary['all_a4'] else 'non'}",
        f"- Texte sélectionnable : {'oui' if summary['all_selectable'] else 'non'}",
        "",
        "## Résultat automatisé",
        "",
        "Aucune anomalie automatisée détectée." if not failures else "\n".join(f"- {failure}" for failure in failures),
        "",
        "Ce contrôle automatisé complète, mais ne remplace pas, l'inspection visuelle des rendus PNG et un test d'impression physique.",
    ]
    (QA_DIR / "overflow-report.md").write_text("\n".join(overflow_lines) + "\n", encoding="utf-8")
    print(json.dumps({"pdfs": len(results), "pages": summary["page_count"], "failures": failures}, ensure_ascii=False))
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
