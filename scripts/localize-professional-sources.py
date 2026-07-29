from __future__ import annotations

import argparse
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

from lxml import html


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "ressources" / "print" / "pdf-sources"
LANGUAGES = {"en": "English", "de": "Deutsch", "it": "Italiano"}
TRANSLATABLE_ATTRIBUTES = ("alt", "aria-label", "data-kit-title", "data-title", "title")
SEGMENT_RE = re.compile(r"\n\[\[\[HDOS_SEG_(\d{4})\]\]\]\n")
FRENCH_HINTS = re.compile(
    r"\b(?:activité|fiche|guide|corrigé|sources|observer|hypothèse|musée|"
    r"élève|enseignant|crédits|imprimer|objet|trouver|comparer|vérifier)\b",
    re.IGNORECASE,
)

TERM_PATTERNS = [
    (re.compile(r"\btalus/astragale\b", re.IGNORECASE), "__HDOS_TALUS_ASTRAGALUS__"),
    (re.compile(r"\bastragales\b", re.IGNORECASE), "__HDOS_ASTRAGALUS_PLURAL__"),
    (re.compile(r"\bastragale\b", re.IGNORECASE), "__HDOS_ASTRAGALUS__"),
    (re.compile(r"\btalus\b", re.IGNORECASE), "__HDOS_TALUS__"),
    (re.compile(r"\bindices\b", re.IGNORECASE), "__HDOS_CLUES_PLURAL__"),
    (re.compile(r"\bindice\b", re.IGNORECASE), "__HDOS_CLUE__"),
    (re.compile(r"\borientation\b", re.IGNORECASE), "__HDOS_ORIENTATION__"),
    (re.compile(r"\bvues\b", re.IGNORECASE), "__HDOS_VIEWS__"),
    (re.compile(r"\bvue\b", re.IGNORECASE), "__HDOS_VIEW__"),
    (re.compile(r"\bcrédits\b", re.IGNORECASE), "__HDOS_CREDITS__"),
    (re.compile(r"\bcrédit\b", re.IGNORECASE), "__HDOS_CREDIT__"),
    (re.compile(r"\brepères\b", re.IGNORECASE), "__HDOS_LANDMARKS__"),
    (re.compile(r"\brepère\b", re.IGNORECASE), "__HDOS_LANDMARK__"),
    (re.compile(r"\btalon\b", re.IGNORECASE), "__HDOS_HEEL__"),
]

TERM_VALUES = {
    "en": {
        "__HDOS_TALUS_ASTRAGALUS__": "talus/astragalus",
        "__HDOS_ASTRAGALUS_PLURAL__": "astragali",
        "__HDOS_ASTRAGALUS__": "astragalus",
        "__HDOS_TALUS__": "talus",
        "__HDOS_LATIN_TALUS__": "talus",
        "__HDOS_CLUES_PLURAL__": "clues",
        "__HDOS_CLUE__": "clue",
        "__HDOS_ORIENTATION__": "orientation",
        "__HDOS_VIEWS__": "views",
        "__HDOS_VIEW__": "view",
        "__HDOS_CREDITS__": "credits",
        "__HDOS_CREDIT__": "credit",
        "__HDOS_LANDMARKS__": "landmarks",
        "__HDOS_LANDMARK__": "landmark",
        "__HDOS_HEEL__": "heel",
    },
    "de": {
        "__HDOS_TALUS_ASTRAGALUS__": "Talus/Astragalus",
        "__HDOS_ASTRAGALUS_PLURAL__": "Astragali",
        "__HDOS_ASTRAGALUS__": "Astragalus",
        "__HDOS_TALUS__": "Talus",
        "__HDOS_LATIN_TALUS__": "talus",
        "__HDOS_CLUES_PLURAL__": "Hinweise",
        "__HDOS_CLUE__": "Hinweis",
        "__HDOS_ORIENTATION__": "Orientierung",
        "__HDOS_VIEWS__": "Ansichten",
        "__HDOS_VIEW__": "Ansicht",
        "__HDOS_CREDITS__": "Bildnachweise",
        "__HDOS_CREDIT__": "Bildnachweis",
        "__HDOS_LANDMARKS__": "Orientierungspunkte",
        "__HDOS_LANDMARK__": "Orientierungspunkt",
        "__HDOS_HEEL__": "Ferse",
    },
    "it": {
        "__HDOS_TALUS_ASTRAGALUS__": "talo/astragalo",
        "__HDOS_ASTRAGALUS_PLURAL__": "astragali",
        "__HDOS_ASTRAGALUS__": "astragalo",
        "__HDOS_TALUS__": "talo",
        "__HDOS_LATIN_TALUS__": "talus",
        "__HDOS_CLUES_PLURAL__": "indizi",
        "__HDOS_CLUE__": "indizio",
        "__HDOS_ORIENTATION__": "orientamento",
        "__HDOS_VIEWS__": "viste",
        "__HDOS_VIEW__": "vista",
        "__HDOS_CREDITS__": "crediti",
        "__HDOS_CREDIT__": "credito",
        "__HDOS_LANDMARKS__": "punti di riferimento",
        "__HDOS_LANDMARK__": "punto di riferimento",
        "__HDOS_HEEL__": "tallone",
    },
}

POST_EDITS = {
    "de": {
        "Führen Sie ein Pooling durch.": "Führen Sie die Ergebnisse zusammen.",
        "Ausgabesatz": "Abschlusssatz",
        "In Bearbeitung": "Teilweise erreicht",
        "Um fortzufahren": "Zu überarbeiten",
        "1.0 Treiber": "Pilot 1.0",
        "Pooling": "Auswertung im Plenum",
        "Öffentlich": "Zielgruppe",
        "Studentenblatt": "Arbeitsblatt",
        "Studenten und Gruppen": "Lernende und Gruppen",
        "Studentengruppen": "Lerngruppen",
        "Lehrer und Vermittler": "Lehrpersonen und Vermittlung",
        "Einrahmungsanleitung": "Leitfaden",
        "Aufsichtsleitfaden": "Leitfaden",
        "Beaufsichtigung von Erwachsenen": "Begleitung durch Erwachsene",
        "Studentenaktion": "Aktion der Lernenden",
        "Finden Sie das Astragalus": "Finden Sie den Astragalus",
        "Beobachtungsunterstützung": "Beobachtungsmaterial",
        "Unterstützt und Karten": "Materialien und Karten",
        "Unterstützt –": "Materialien –",
        "Antwortschlüssel für Erwachsene": "Lösungshinweise für Erwachsene",
        "Titel für Erwachsene": "Lösungshinweise für Erwachsene",
        "Kollektive Korrektur": "Gemeinsame Auswertung",
        "Ranking und Debatte": "Einordnen und diskutieren",
    },
    "en": {
        "1.0 driver": "Pilot 1.0",
        "Pooling": "Group discussion",
        "Conduct pooling.": "Discuss the findings as a group.",
        "Public": "Audience",
        "Student sheet": "Learner sheet",
        "Students and groups": "Learners and groups",
        "Student groups": "Learner groups",
        "Teachers and mediators": "Teachers and museum educators",
        "Framing guide": "Facilitator guide",
        "Supervision guide": "Facilitator guide",
        "Associate a astragalus": "Associate an astragalus",
        "Adult tracks": "Adult guidance",
        "Collective correction": "Group review",
        "Ranking and debate": "Sequencing and discussion",
    },
    "it": {
        "Di successo": "Riuscito",
        "Per riprendere": "Da rivedere",
        "Condurre il pooling.": "Condividere i risultati con il gruppo.",
        "autista 1.0": "Pilota 1.0",
        "Digitare": "Tipo",
        "Guida all'inquadratura": "Guida per la conduzione",
        "Foglio dello studente": "Scheda allievo",
        "Chiave di risposta per adulti": "Indicazioni per la correzione",
        "Studenti e gruppi": "Allievi e gruppi",
        "Gruppi di studenti": "Gruppi di allievi",
        "Supervisione degli adulti": "Adulti responsabili",
    },
}


def translate_batch(parts: list[str], target: str) -> list[str]:
    payload = parts[0]
    for index, part in enumerate(parts[1:], start=1):
        payload += f"\n[[[HDOS_SEG_{index:04d}]]]\n{part}"
    query = urllib.parse.urlencode(
        {"client": "gtx", "sl": "fr", "tl": target, "dt": "t", "q": payload}
    )
    request = urllib.request.Request(
        f"https://translate.googleapis.com/translate_a/single?{query}",
        headers={"User-Agent": "Histoires-d-os-document-builder/1.0"},
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                data = json.loads(response.read().decode("utf-8"))
            translated = "".join(chunk[0] for chunk in data[0] if chunk[0])
            result = SEGMENT_RE.split(translated)
            values = [result[0]] + [result[i] for i in range(2, len(result), 2)]
            if len(values) != len(parts):
                raise RuntimeError(
                    f"Segmentation perdue pour {target}: {len(parts)} attendus, {len(values)} reçus"
                )
            return [value.strip() for value in values]
        except Exception:
            if attempt == 3:
                raise
            time.sleep(1.5 * (attempt + 1))
    raise AssertionError("unreachable")


def should_translate(value: str) -> bool:
    stripped = value.strip()
    return bool(stripped and not re.fullmatch(r"[\d\W_]+", stripped))


def collect_targets(document) -> list[tuple[object, str, str]]:
    targets: list[tuple[object, str, str]] = []
    for node in document.xpath("//body//*[not(self::script or self::style)]"):
        if node.text and should_translate(node.text):
            targets.append((node, "text", node.text))
        if node.tail and should_translate(node.tail):
            targets.append((node, "tail", node.tail))
        for attribute in TRANSLATABLE_ATTRIBUTES:
            value = node.get(attribute)
            if value and should_translate(value):
                targets.append((node, attribute, value))
    return targets


def batches(targets: list[tuple[object, str, str]], limit: int = 2600):
    current: list[tuple[object, str, str]] = []
    size = 0
    for target in targets:
        value_size = len(target[2]) + 28
        if current and size + value_size > limit:
            yield current
            current = []
            size = 0
        current.append(target)
        size += value_size
    if current:
        yield current


def preserve_whitespace(original: str, translated: str) -> str:
    leading = original[: len(original) - len(original.lstrip())]
    trailing = original[len(original.rstrip()) :]
    return f"{leading}{translated}{trailing}"


def protect_terms(node, field: str, value: str) -> str:
    if field == "text" and node.tag == "em" and value.strip().lower() == "talus":
        return value.replace(value.strip(), "__HDOS_LATIN_TALUS__")
    protected = value
    for pattern, token in TERM_PATTERNS:
        protected = pattern.sub(token, protected)
    return protected


def restore_terms(value: str, language: str) -> str:
    restored = value
    for token, replacement in TERM_VALUES[language].items():
        restored = restored.replace(token, replacement)
    for source, replacement in POST_EDITS[language].items():
        restored = restored.replace(source, replacement)
    return restored


def localize(source: Path, target_language: str) -> Path:
    parser = html.HTMLParser(encoding="utf-8")
    document = html.fromstring(source.read_bytes(), parser=parser)
    document.set("lang", target_language)
    body = document.xpath("//body")[0]
    body.set("data-language", target_language)

    targets = collect_targets(document)
    for batch in batches(targets):
        originals = [item[2] for item in batch]
        protected = [protect_terms(node, field, value) for node, field, value in batch]
        translated = translate_batch(protected, target_language)
        for (node, field, original), value in zip(batch, translated, strict=True):
            value = restore_terms(value, target_language)
            value = preserve_whitespace(original, value)
            if field == "text":
                node.text = value
            elif field == "tail":
                node.tail = value
            else:
                node.set(field, value.strip())

    sources = document.xpath('//section[@data-document="sources"]')
    if sources:
        note = html.Element("p", {"class": "translation-note"})
        notes = {
            "en": "Working translation: specialist scientific, educational and legal wording requires human review.",
            "de": "Arbeitsübersetzung: Wissenschaftliche, pädagogische und rechtliche Fachformulierungen müssen menschlich geprüft werden.",
            "it": "Traduzione di lavoro: la terminologia scientifica, pedagogica e giuridica specialistica richiede una revisione umana.",
        }
        note.text = notes[target_language]
        sources[0].append(note)

    destination = source.with_name(f"{source.stem}.{target_language}.html")
    serialized = html.tostring(document, encoding="unicode", method="html", doctype="<!doctype html>")
    destination.write_text(serialized + "\n", encoding="utf-8")
    return destination


def apply_post_edits_only(target_language: str) -> list[Path]:
    outputs = []
    for destination in sorted(SOURCE_DIR.glob(f"activite-0[1-4].{target_language}.html")):
        content = destination.read_text(encoding="utf-8")
        for source, replacement in POST_EDITS[target_language].items():
            content = content.replace(source, replacement)
        destination.write_text(content, encoding="utf-8")
        outputs.append(destination)
    return outputs


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--languages", nargs="+", choices=sorted(LANGUAGES), default=sorted(LANGUAGES))
    parser.add_argument("--post-edit-only", action="store_true")
    args = parser.parse_args()
    if args.post_edit_only:
        outputs = []
        for language in args.languages:
            outputs.extend(apply_post_edits_only(language))
        for output in outputs:
            print(output.relative_to(ROOT).as_posix())
        print(f"{len(outputs)} sources localisées corrigées sans appel réseau.")
        return
    sources = sorted(SOURCE_DIR.glob("activite-0[1-4].html"))
    outputs = []
    for language in args.languages:
        for source in sources:
            output = localize(source, language)
            outputs.append(output)
            print(output.relative_to(ROOT).as_posix())
    print(f"{len(outputs)} sources localisées créées.")


if __name__ == "__main__":
    main()
