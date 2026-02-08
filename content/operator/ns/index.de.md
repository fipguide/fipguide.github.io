---
draft: false
title: "NS"
country:
  - "netherlands"
operator: "ns"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "4 Felder mit jeweils zwei Tagen"
      fip-coupon-relatives:
        status: valid
        text: "Verfügbar"
      fip-reduced-ticket:
        status: valid
        text: "50 % Rabatt"
    sncf:
      fip-coupon:
        status: valid
        text: "4 Freifahrtscheine mit jeweils 4 Feldern pro Jahr. Jedes Feld ist zwei Tage gültig."
      fip-coupon-relatives:
        status: valid
        text: "1 Freifahrtschein mit jeweils 4 Feldern pro Jahr. Jedes Feld ist zwei Tage gültig."
      fip-reduced-ticket:
        status: valid
        text: "50 % Rabatt"
---

Die Nederlandse Spoorwegen (NS) ist die staatliche Eisenbahngesellschaft der [Niederlande](/country/netherlands "Niederlande") und betreibt den Großteil des Personenverkehrs auf dem niederländischen Schienennetz.

## Zusammenfassung

- NS akzeptiert FIP Freifahrt und FIP 50 Tickets.
- Reservierung ist grundsätzlich nicht erforderlich.
- Zuschlag für Eurocity Direct (`ECD`) und teilweise Intercity Direct (`ICD`) erforderlich.
- Zur FIP Freifahrt ist ein Gate-Pass-Coupon für Zugang durch die Schranken an den Stationen erforderlich.

## Gültigkeit FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Freifahrtscheine und FIP 50 Tickets sind auf Verbindungen der NS gültig. Bei grenzüberschreitenden Fahrten muss entweder ein durchgängiges FIP 50 Ticket oder FIP Freifahrtscheine beider Länder vorhanden sein.

## Zugkategorien und Reservierungen

Innerhalb der Niederlande ist bei der NS keine Reservierung erforderlich und in vielen Zügen auch nicht möglich. Bei grenzüberschreitenden `ICE` und `IC` nach Deutschland ist eine Reservierung möglich und beispielsweise im Sommer 2025 auch verpflichtend (nur bei grenzüberschreitenden Reisen).

Zuschläge müssen für Eurocity Direct und teilweise Intercity Direct Züge gezahlt werden.

{{% train-category
    id="ice"
    title="Intercity-Express (ICE)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
    additional_information_url="https://www.nsinternational.com/en/trains/ice"
%}}
Hochgeschwindigkeitszüge der Deutschen Bahn, die in den Niederlanden von der NS übernommen werden. Sie verkehren zwischen Amsterdam und Deutschland (Köln / Frankfurt am Main bzw. Hannover / Berlin), können jedoch auch innerhalb der Niederlande zwischen Amsterdam und Arnhem bzw. Hengelo mit FIP Freifahrtschein ohne Aufschlag genutzt werden. Bei FIP 50 Tickets ist jedoch ein Zuschlag erforderlich.

{{% highlight important %}}
Bei der Nutzung von FIP 50 Tickets im niederländischen Binnenverkehr muss ein [ICE Aufschlag](https://www.ns.nl/en/tickets/ice-supplement) in Höhe von 3 € pro Fahrt gezahlt werden. Bei Nutzung der FIP Freifahrt ist der Zuschlag nicht erforderlich.

Der Aufschlag kann [Online](https://www.ns.nl/en/tickets/ice-supplement) bzw. in der NS-App oder vor Ort am Automaten bzw. Schalter gekauft werden. Vor Ort kann der Aufschlag auf eine OV-Chipkarte geladen werden. Ohne OV-Chipkarte wird eine zusätzliche Gebühr von 1,50 € für ein Einmalticket erhoben.
{{% /highlight %}}

#### Reservierung

Bei grenzüberschreitenden Reisen zur Hochsaison ist eine Reservierung erforderlich.

{{% /train-category %}}

{{% train-category
    id="ecd"
    title="Eurocity Direct (ECD)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}
Internationaler, zuschlagspflichtiger Zug zwischen Lelystad, Amsterdam und Brüssel mit Halt in Almere, Schiphol, Rotterdam und Antwerpen.

{{% highlight important %}}
Zwischen Rotterdam und Schiphol ist ein [Zuschlag](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) zum FIP 50 Ticket und FIP Freifahrtschein in Höhe von 3 € zu entrichten.

Dieser kann [Online](https://www.ns.nl/en/tickets/icd-supplement) bzw. in der NS-App oder vor Ort am Automaten bzw. Schalter gekauft werden. Dort kann der Aufschlag auf eine OV-Chipkarte geladen werden. Ohne OV-Chipkarte für eine zusätzliche Gebühr von 1,50 € für ein Einmalticket erhoben.

Inhaber einer OV-Chipkarte können am Zuschlagsschalter im Bahnhof zu [Off-Peak Zeiten](https://www.ns.nl/en/travel-information/off-peak-hours.html) einen vergünstigten Zuschlag für 1,80 € erwerben.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="ec"
    title="Eurocity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}
Internationaler Zug zwischen Rotterdam und Brüssel mit mehreren Unterwegshalten.
{{% /train-category %}}

{{% train-category
    id="icd"
    title="Intercity Direct (ICD)"
    type="highspeed"
    fip_accepted=partially
    reservation_required=false
    additional_information_url="https://www.ns.nl/en/travel-information/special-routes/intercity-direct.html"
%}}
Teilweise zuschlagspflichtiger Schnellzug zwischen Lelystad oder Amersfoort, Amsterdam Zuid, Schiphol Airport, Rotterdam Centraal und Breda.

{{% highlight important %}}
Bei der Nutzung von FIP 50 Tickets zwischen Rotterdam und Schiphol ist ein [Zuschlag](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) in Höhe von 3 € zu entrichten. Bei Nutzung der FIP Freifahrt ist der Zuschlag nicht erforderlich.

Dieser kann [Online](https://www.ns.nl/en/tickets/icd-supplement) bzw. in der NS-App oder vor Ort am Automaten bzw. Schalter gekauft werden. Dort kann der Aufschlag auf eine OV-Chipkarte geladen werden. Ohne OV-Chipkarte für eine zusätzliche Gebühr von 1,50 € für ein Einmalticket erhoben.

Inhaber einer OV-Chipkarte können am Zuschlagsschalter im Bahnhof zu [Off-Peak Zeiten](https://www.ns.nl/en/travel-information/off-peak-hours.html) einen vergünstigten Zuschlag für 1,80 € erwerben.

{{% /highlight %}}

Bei FIP 50 Tickets kommt es allgemein zu abweichenden Preisen für die Zugkategorie.
{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
%}}
Anders als in anderen Ländern keine wirklichen Fernzüge, sondern eher schnelle Regionalzüge mit wenigen Halten.
{{% /train-category %}}

{{% train-category
    id="re"
    title="Sneltrein (RE)"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Regionalzüge mit mehr Halten als beim Intercity, aber trotzdem nur an wichtigeren Stationen.

{{% highlight confusion %}}
Die Züge der Kategorie Sneltrein / Regional-Express `RE`, unter anderem die Verbindungen Venlo – Hamm (Deutschland), Maastricht – Aachen (Deutschland) und Arnhem – Düsseldorf (Deutschland) sowie andere RE-Verbindungen werden nicht von der NS betrieben und sind mit FIP nicht nutzbar.
{{% /highlight %}}
{{% /train-category %}}

{{% train-category
    id="sprinter"
    title="Sprinter"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Regionalzüge für kurze Verbindungen mit Halt an jedem Bahnhof auf der Strecke.
{{% /train-category %}}

## Ticket- und Reservierungskauf

### Online

Nationale Verbindungen können online leider nicht erworben werden.

{{% booking id="sncb-website"
    subtitle="Nur für grenzüberschreitende Verbindungen von/nach Belgien mit FIP Freifahrtschein."
/%}}

{{% booking id="db-website"
    subtitle="Für internationale ICE und IC Züge"
/%}}

{{% booking id="db-website-fip-db"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und den Niederlanden, mit Ticketanteil nur für den niederländischen Abschnitt. Nur für Mitarbeitende der Deutschen Bahn."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und den Niederlanden für die gesamte Strecke (keine Gültigkeit im Ausstellungsland des FIP Ausweises)"
/%}}

### Telefon

{{% booking id="ns-phone" /%}}

### Vor Ort

{{% booking id="ns-ticket-office" /%}}

{{% booking id="db-ticket-office" /%}}

### Im Zug

FIP 50 Tickets können nicht im Zug gekauft werden. [^1]

## Ermäßigungen

Uns sind keine Ermäßigungen bekannt.

## Tarifliche Besonderheiten

### Ticket Schranken im Bahnhof

Mit einem FIP-Coupon erhältst du einen NS-Zugangscoupon mit Barcode, um die Bahnhofsschranken zu öffnen. \
Dies ist kein Ticket, sondern ein Zugangspass, gültig für:

- Bis zu 8 einzelne Tage innerhalb eines Zeitraums von 3 Monaten.
- Pro Tag (von 00:00 bis 23:59):
  - Bis zu 6 Ein- oder Ausgänge am selben Bahnhof.
  - Insgesamt bis zu 12 Durchgänge pro Tag.

Falls benötigt, kann ein neuer Zugangscoupon am NS-Schalter angefordert werden.

## Empfehlungen

{{% highlight tip %}}
Die NS überzeugt durch einen dichten Takt und guten Anschlüssen. Verspätungen und Ausfälle kommen vor, sind jedoch durch die hohe Taktrate oft nicht allzu schlimm. Trotzdem sollte nicht mit zu knappen Anschlüssen geplant werden, da Züge nur selten aufeinander warten. Die 1. Klasse in den NS-Zügen ist oft nicht viel bequemer als die 2. Klasse.
{{% /highlight %}}

## Quellen

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)
