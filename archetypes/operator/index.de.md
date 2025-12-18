---
draft: false
title: "{{ .File.ContentBaseName | upper }}"
country:
  # Füge die englischen Abkürzungen der Länder hinzu, in denen die Bahngesellschaft fährt.
  - "country1"
  - "country2"
  - "country3"
operator: "{{ .File.ContentBaseName }}"
---

<!-- Entferne das "WIP" Snippet, wenn die Inhalte der Seite vollständig sind -->

{{< wip >}}

<!--
  Kurze Beschreibung der Bahngesellschaft. z. B. Der vollstandige Name in Landessprache, alternative Namen und Angabe über Privat/Staatsbahn
-->

## Zusammenfassung

<!--
  Stichpunktartige Zusammenfassung der wichtigsten Besonderheiten/FIP-Reglungen der Bahngesellschaft.
  z. B.
  - Werden FIP 50 und FIP Freifahrtscheine akzeptiert?
  - Gibt es eine Reservierungspflicht?
  - Gibt es sonstige tarifliche Sonderregelungen oder Abweichungen zu anderen FIP Bahngesellschaften?
-->

## Gültigkeit FIP Tickets

<!--
  Die Ticketkategorien können je nach Betreiber abweichen.
-->

FIP Freifahrtschein: <✅/⛔> \
FIP Freifahrt Angehörige: <✅/⛔> \
FIP 50 Tickets: <✅/⛔> \
FIP Globalpreis: <✅/⛔>

<!--
  Wo gelten FIP 50 Tickets/FIP Freifahrtscheine und gibt es Einschränkungen? Welches Ticket wird bei Einreise benötigt (z. B. durchgehendes FIP 50 Ticket oder FIP Freifahrtscheine beider Länder)
-->

## Zugkategorien und Reservierungen

<!--
  Für jede Zugkategorie kann ein eigene Abschnitt nach dem folgenden Prinzip eingefügt werden. Folgende Parameter können übergeben werden:
  - `id`: Kleingeschriebene, mit Bindestrichen getrennte Abkürzung der Zugkategorie (z.B. "ice", "tgv-inoui")
  - `title`: Titel der Zugkategorie
  - `type`: `highspeed`, `regional`, `subway`, `bus`, `funicular`, `sleeper` oder `ship`
  - `fip_accepted`: true, false, partially
  - `reservation_required`: true, false, partially
  - `reservation_possible`: true, false, partially (default false, kann weggelassen werden, wenn  reservation_required true ist)
  - `route_overview_url`: Link zu einer Seite mit einer Übersicht der Routen dieser Kategorie (kann weggelassen werden, wenn nicht vorhanden)
  - `additional_information_url`: Link zu einer Seite mit zusätzlichen Informationen zu dieser Kategorie (kann weggelassen werden, wenn nicht vorhanden)
-->

{{% train-category
    id="zug-id"
    title="title"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
    route_overview_url="https://example.com"
    additional_information_url="https://example.com"
%}}

<!--
  Hier kann eine Beschreibung der Zugkategorie ergänzt werden.
-->

{{% highlight confusion %}}
Dieses Highlight kann ergänzt werden, wenn es das Risiko gibt, dass die Zugkategorie mit einer anderen verwechselt wird.
{{% /highlight %}}

{{% highlight important %}}
Hier können weitere wichtige Informationen ergänzt werden.
{{% /highlight %}}

#### Reservierung

<!--
  Beschreibung der Reservierungsbedingung für diese Zugkategorie.
-->

#### Strecken im Linienverkehr

<!--
  Auflistung aller Strecken dieser Zugkategorie im Linienverkehr.

  Bei teilweiser FIP-Gültigkeit können die folgenden Unterüberschriften verwendet werden:
-->

<!--
##### Strecken mit FIP-Gültigkeit

- Route 1
- Route 2

##### Strecken ohne FIP-Gültigkeit

- Route 3
- Route 4
-->

{{% /train-category %}}

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

<!--
  Bette hier Buchungsplattformen mit Onlinebuchung ein.

  Individuelle Buchungsparameter können überschrieben werden, aber müssen nicht überschrieben werden.
  Wenn sie nicht übergeben werden, dann werden die definieren defaults der Seite der Buchungsplattform verwendet.

  Mehr Informationen sind im booking archetype zu finden.
-->

{{% booking id="booking_id"
    subtitle="Hier kann ein Untertitel ergänzt werden, der in der Zusammenfassung des expanders angezeigt wird und nicht zu viel Platz einnehmen sollte."
    reservations=nil
    fip_50=false
    fip_global_fare=true
    classes.first="€20"
    classes.second="€10"
%}}

<!-- Hier können zusätzliche landesspezifische Details zur Buchungsplattform ergänzt werden. -->

{{% /booking %}}

### Telefon

<!--
  Füge hier weitere Buchungsplattformen mit Buchung per Telefon hinzu.
-->

### Vor Ort

<!--
  Füge hier weitere Buchungsplattformen mit Buchung vor Ort hinzu.
-->

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
  Beschreibung der Besonderheit, wenn es auf bestimmten Routen z. B. Sonderregelungen gibt.
-->

## Empfehlungen

<!--
  Persönliche Empfehlungen und besondere persönliche Hinweise für die Fahrt
-->

## Quellen

[^1]: [<Quellenname 1>](Link)

[^2]: [<Quellenname 2](Link)
