# Styleguide Deutsch — Typografie & Sprache

## Zweck

Ein praxisorientierter Leitfaden für einheitliche Texte: Bindestrich/Durchkopplung, Gedankenstrich/En-Dash, genderneutrale Formulierungen, Abstände (z. B. Währung), Listen‑Punktation und technische Hinweise für Mitarbeitende.

**Standard:** neutrale Partizipialformen (z. B. „Mitarbeitende")  
**Optional:** Gender‑Doppelpunkt nach Accessibility‑Prüfung (z. B. „Mitarbeiter:innen")

## Grundprinzipien

1. **Lesbarkeit** vor stilistischer Spielerei
2. **Konsistenz** über alle Publikationen hinweg
3. **Barrierefreiheit** beachten (Screen‑Reader‑Kompatibilität prüfen)

## 1. Bindestrich und Durchkopplung

**Regel:** Abkürzung + Wort = Bindestrich, kein Leerzeichen

**Beispiele:**

- `DB‑Mitarbeitende`
- `TGV‑Verbindung`
- `FIP‑Freifahrtschein`

**Hinweis:** Non‑breaking hyphen (U+2011) im CMS verwenden, um Zeilenumbruch zu vermeiden

## 2. Striche — Bindestrich vs. Gedankenstrich

| Strich         | Zeichen | Unicode | Verwendung        | Beispiel                        |
| -------------- | ------- | ------- | ----------------- | ------------------------------- |
| Bindestrich    | `-`     | U+002D  | Zusammensetzungen | `E‑Mail`, `DB‑Mitarbeitende`    |
| En‑Dash        | `–`     | U+2013  | Bereiche          | `1999–2005`, `Hamburg–Berlin`   |
| Gedankenstrich | `–`     | U+2013  | Einschübe         | „Das Projekt – Einschub – Text“ |

**Hinweis:** Em‑Dash (—) wird im Deutschen selten verwendet

## 3. Geschlechtergerechte Sprache

**Standard (empfohlen):** Partizipialform (neutral)

- `Mitarbeitende`, `Studierende`, `Lehrende`

**Alternative (nur nach Prüfung):** Gender‑Doppelpunkt

- `Mitarbeiter:innen`, `Student:innen`

**Regeln:**

- Keine Mischung von Formen im selben Dokument
- Doppelpunkt besser für Screen‑Reader als Sternchen
- Entscheidung dokumentieren

## 4. Abkürzungen und „z. B."

- „z. B." immer mit Punkten und **mit** folgendem Leerzeichen: `z. B. Beispiel`
- Bei Zeilenumbruch: geschütztes Leerzeichen verwenden: `z. B.&nbsp;Beispiel`

## 5. Zahlen, Währung, Maßeinheiten

- Abstand zwischen Zahl und Einheit: `10 €`, `50 km` (geschütztes Leerzeichen U+00A0)
- Prozent: `10 %` (konsistent bleiben)
- Zahlenbereich: En‑Dash ohne Leerzeichen: `10–20`, `1999–2005`

## 6. Listen / Aufzählungen

- Überschriften: kein Satzpunkt
- Stichwortlisten: keine Punkte am Ende
- Satzlisten: jedes Element mit Punkt abschließen
- Konsistenz: innerhalb einer Liste einheitliche Form

## 7. Interpunktion / Leerzeichen

- Bindestriche: keine Leerzeichen vor/nach Bindestrich (`DB‑Mitarbeitende`)
- Gedankenstriche: in DE oft mit Leerzeichen („Text – Einschub – Text“)
- Konsistenzregel festhalten (z. B. Gedankenstrich mit/ohne Leerzeichen)

## 8. Beispiele — vorher → nachher

| Vorher         | Nachher                       |
| -------------- | ----------------------------- |
| DB Mitarbeiter | DB‑Mitarbeitende              |
| TGV Verbindung | TGV‑Verbindung                |
| 1999 - 2005    | 1999–2005                     |
| 10€            | 10 €                          |
| z.B.           | z. B. (mit NBSP: z. B.&nbsp;) |

## 9. Technische Hinweise

- Geschütztes Leerzeichen: U+00A0 — HTML: `&nbsp;`
- Non‑breaking hyphen: U+2011 — verhindert Zeilenumbruch am Bindestrich
- En‑Dash: U+2013 — für Bereiche und Verbindungen
- CMS: Vorlagen mit NBSP und non‑breaking hyphen vorgeben; Unicode‑Zeichen prüfen
- Barrierefreiheit: Screen‑Reader mit Genderzeichen testen; Dokumentation ergänzen

## 10. Schnell‑Referenz

| Regel                | Beispiel            |
| -------------------- | ------------------- |
| Abkürzung + Wort     | `DB‑Mitarbeitende`  |
| Gender (neutral)     | `Mitarbeitende`     |
| Gender (Doppelpunkt) | `Mitarbeiter:innen` |
| Währung              | `10 €` (NBSP)       |
| „z. B."              | `z. B.&nbsp;`       |
| Zahlenbereich        | `10–20`             |
