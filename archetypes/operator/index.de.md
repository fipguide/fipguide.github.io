---
draft: false
title: '{{ .File.ContentBaseName | upper }}'
country:
  # Füge die englischen Abkürzungen der Länder hinzu, in denen die Bahngesellschaft fährt.
  - 'country1'
  - 'country2'
  - 'country3'
operator: '{{ .File.ContentBaseName }}'
---

<!-- Entferne das "WIP" Snippet, wenn die Inhalte der Seite vollständig sind -->
{{< snippet wip >}}

<!--
  Kurze Beschreibung der Bahngesellschaft. Z.B. Der vollstandige Name in Landessprache, alternative Namen und Angabe über Privat/Staatsbahn
-->

## Zusammenfassung

<!--
  Stichpunktartige Zusammenfassung der wichtigsten Besonderheiten/FIP-Reglungen der Bahngesellschaft.
  Z.B.
  - Werden FIP 50 und FIP Freifahrtsscheine akzeptiert?
  - Gibt es eine Reservierungspflicht?
  - Gibt es sonstige tarifliche Sonderregelungen oder Abweichungen zu anderen FIP Bahngesellschaften?
-->

## Gültigkeit FIP-Tickets

FIP Freifahrtsschein: <✅/⛔> \
FIP Freifahrt Angehörige: <✅/⛔> \
FIP 50 Tickets: <✅/⛔> \
FIP Globalpreis: <✅/⛔>

<!--
  Wo gelten FIP 50 Tickets/FIP Freifahrtsscheine und gibt es Einschränkungen? Welches Ticket wird bei Einreise benötigt (z.B. durchgehendes FIP 50 Ticket oder FIP Freifahrtscheine beider Länder)
-->

## Zugkategorien und Reservierungen

<!--
  Sind Reservierungen möglich und wo besteht eine Reservierungspflicht?
-->

<!--
  Für jede Zugkategorie kann ein eigene Abschnitt nach dem folgenden Prinzip eingefügt werden.
  Im Titel können folgende Emojis verwendet werden:
  - ⚠️ für eine generelle Reservierungspflicht oder Zuschläge
  - 1️⃣ für eine Reservierungspflicht in der 1. Klasse
  - ⛔ für eine Nichtanerkennung von FIP
  - ℹ️ für Verwechslungsgefahr mit anderen Bahngesellschaften/Zugkategorien
-->
{{% expander "Zugkategorie" "category" %}}
<!-- Ersetze Zugkategorie mit dem Name der Zugkategorie, z.B. ICE. -->
**Beschreibung:**
<!-- Füge hier eine Beschreibung der Zugkategorie ein -->
**Reservierung möglich:** Ja/Nein \
**Reservierungspflicht:** Ja/Nein \
**Kosten für Reservierung:** <!-- Füge hier die Kosten nach Klasse, Strecke, etc. hinzu. Gibt es keine Festpreise, dann eine Preisspanne oder Beispiele angeben. --> \
2\. Klasse: XX€ \
1\. Klasse: XX€
<!-- Wenn FIP nicht gültig ist, ergänze folgendes:
**FIP:** ⛔ FIP wird nicht anerkannt
-->
<!-- Wenn es FIP Globalpreise gibt, ergänze folgendes:
**FIP Globalpreis:**
-->
{{% /expander %}}

## Klassenkategorien

<!--
  Wenn die Klassenkategorien zusätzliche/andere Klassen zu 1. und 2. Klasse haben, dann können diese hier beschrieben werden. Ansonsten kann dieser Abschnitt entfernt werden.
-->

<!--
**Standard**: Vergleichbar mit der 2. Klasse. \
**Plus**: 1. Klasse ohne Verpflegung. Ein FIP-Ausweis für die 1. Klasse wird benötigt. \
**Premium**: 1. Klasse inkl. Verpflegung. Nicht mit FIP buchbar.
-->

## Ticket- und Reservierungskauf

### Online

- [Website des Buchungsanbieters](https://example.com): \
  **Reservierung:** <✅/⛔> \
  **FIP 50 Fahrkarten:** <✅/⛔>
  <!-- Optionale Buchungshinweise, wie kann man FIP Tickets oder Reservierungen kaufen? -->
- [Website eines weiteren Buchungsanbieters](https://example.com): \
  **Reservierung:** <✅/⛔> \
  **FIP 50 Fahrkarten:** <✅/⛔>
  <!-- Optionale Buchungshinweise, wie kann man FIP Tickets oder Reservierungen kaufen? -->
- Weitere Möglichkeiten:
  <!-- Sonstige Hinweise und weitere Seiten für die Onlinebuchung/-reservierung. -->

### Telefon

- Name des Buchungsanbieters: \
  Telefonnummer: <Telefonnummer einfügen> \
  **Reservierung:** <✅/⛔> \
  **FIP 50 Fahrkarten:** <✅/⛔>
  <!-- Weitere Hinweise zur Buchung am Telefon> -->
- Name eines weiteren Betreibers: \
  Telefonnummer: <Telefonnummer einfügen> \
  **Reservierung:** <✅/⛔> \
  **FIP 50 Fahrkarten:** <✅/⛔>
  <!-- Weitere Hinweise zur Buchung am Telefon> -->

### Vor Ort

- Schalter der <Bahngesellschaft>: \
  **Reservierung:** ✅ \
  **FIP 50 Fahrkarten:** ✅
  <!-- Wo gibt es Ticketschalter allgemein? Wenn möglich, ergänze ein Link zu einer Übersicht. Ergänze zusätzliche Informationen zum Kauf am Schalter. -->
- Weitere Möglichkeiten:
  <!-- Können die Tickets auch z.B. an anderen Schaltern im Ausland gekauft werden, wenn ja wo? -->

### Im Zug

<!--
  Können im Zug noch Fahrkarten mit FIP Rabatt gekauft werden, wenn ja wie und gibt einen Preisaufschlag?
-->

## Ermäßigungen

<!--
  Welche Ermäßigungen können Kinder bekommen und unter welchen Umständen?
  Welche Ermäßigungen kann es sonst noch geben?
-->

## Tarifliche Besonderheiten

### <Route bzw. Name>

<!--
  Beschreibung der Besonderheit, wenn es auf bestimmten Routen z.B. Sonderregelungen gibt.
-->

## Empfehlungen

<!--
  Persönliche Empfehlungen und besondere persönliche Hinweise für die Fahrt
-->

## Quellen

[^1]: [<Quellenname 1>](<Link>)
[^2]: [<Quellenname 2](<Link>)
