---
draft: false
title: "ÖBB"
country:
  - "austria"
  - "liechtenstein"
operator: "oebb"

aliases:
  - obb
---

Die ÖBB (Österreichische Bundesbahnen) ist die nationale Eisenbahngesellschaft [Österreich](/country/austria "Österreich") und die wichtigste Bahngesellschaft des Landes. Sie betreiben einen Großteil des Personenverkehrs in Österreich.

## Zusammenfassung

- ÖBB akzeptiert FIP Freifahrt und FIP 50 Tickets.
- Aufpassen bei Zügen anderer Betreiber ohne FIP Akzeptanz.
- Kein FIP im Wiener Flughafenexpress `CAT`.
- Besondere Regeln gelten in Zügen nach Italien, Nightjets und Autozügen.
- FIP Freifahrt der ÖBB gilt auch in Liechtenstein.

## Gültigkeit FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Freifahrtscheine und FIP 50 Tickets sind auf Verbindungen der ÖBB gültig. Bei grenzüberschreitenden Fahrten muss entweder ein durchgängiges FIP 50 Ticket oder FIP Freifahrtscheine beider Länder vorhanden sein.

{{% highlight important %}}
Bei der Fahrt mit FIP Freifahrtschein ist die Nutzung von Fernverkehrszügen der ÖBB in Österreich (`RJX`, `RJ`, `EC`, `ICE`, `IC`, `IR`, `D`) zuschlagspflichtig. Der Zuschlag kann im Zug während Fahrkartenkontrolle erworben werden. Alternativ kann der Zuschlag auch am Fahrkartenschalter und Fahrkartenautomaten der ÖBB erworben werden. Der Zuschlag ist maximal 2 Tage analog zum eingetragenen Datum im FIP Freifahrtschein gültig. Sitzplatzreservierungen sind im Zuschlag nicht enthalten und müssen separat erworben werden. Bei FIP 50 Tickets ist kein zusätzlicher Zuschlag erforderlich.

Kosten: \
1\. Klasse: 15 € \
2\. Klasse: 10 €
{{% /highlight %}}

## Zugkategorien und Reservierungen

### Fernverkehr

{{% train-category
    id="rj"
    title="Railjet (RJ) / Railjet Xpress (RJX)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Nationale und internationale Schnellzüge der höchsten Kategorie der ÖBB. Die Züge verkehren regelmäßig zwischen den wichtigsten Städten Österreichs, aber auch nach Deutschland, Italien, Tschechien, Ungarn, in die Slowakei und Schweiz. Die Züge besitzen 3 Wagenklassen und ein Bistro. Railjets mit weniger Halten werden als Railjet Xpress vermarktet.

**Economy**: Vergleichbar mit der 2. Klasse. \
**First Class**: Vergleichbar mit der 1. Klasse. Ein FIP-Ausweis für die 1. Klasse wird benötigt. \
**Business**: 1. Klasse mit Begrüßungsgetränk und eigenen Abteilen. Mit FIP Freifahrtschein nicht nutzbar (auch nicht mit dem dazugehörigen Zuschlag)

[Detaillierter Überblick über die Klassen bei der ÖBB](https://www.oebb.at/de/reiseplanung-services/im-zug/abteile-komfortklassen)

Für Railjets nach Italien ist ab der italienischen Grenze ein Zuschlag zu zahlen. Siehe [Tarifliche Besonderheiten](#verkehr-nach-italien).

{{% highlight confusion %}}
`RJ` ist gleichzeitig auch die Abkürzung für RegioJet, dort gelten keinerlei FIP-Farscheine.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC) / Intercity-Express (ICE)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Die meisten `IC` Züge auf den Hauptstrecken wurden nach und nach durch Railjets ersetzt. `IC` Züge verkehren weiterhin auf Nebenstrecken wie Graz – Linz, Graz – Salzburg, Graz – Innsbruck, Klagenfurt – Salzburg, Wien – Gmunden – Stainach-Irdning sowie ergänzend zu Railjets auf der Verbindung Wien–Lienz (Osttirol). Zudem gibt es `IC` Züge und `ICE` Züge auf einigen internationalen Strecken nach Deutschland in Zusammenarbeit mit der Deutschen Bahn, wobei der österreichische Abschnitt von der ÖBB betrieben wird.

{{% highlight confusion %}}
Teilweise werden auch Regiojet Züge innerhalb von Österreich als `IC` gekennzeichnet, in diesen Züge sind FIP Tickets nicht gültig.
{{% /highlight %}}

#### Reservierung

Es besteht Reservierungspflicht teilweise in der Hauptsaison (Sommer) auf internationalen Verbindungen nach Deutschland nur für grenzüberschreitende Fahrten.

{{% /train-category %}}

{{% train-category
    id="ir"
    title="InterRegio (IR)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Ab August 2025 wird der InterRegio `IR` als neue Fernverkehrszuggattung auf Nebenstrecken eingeführt und ersetzt größtenteils die bisherigen `IC`-Verbindungen. Beispiele hierfür sind Verbindungen wie Graz – Unzmarkt oder Graz – Linz. Ziel ist es, Orte mit dem Fernverkehr zu erschließen, die bislang nur wenige oder keine Direktverbindungen hatten. Die Züge verkehren im Zwei- oder Vierstundentakt.

{{% /train-category %}}

{{% train-category
    id="ec"
    title="Eurocity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Internationale Züge in Nachbarländern von der ÖBB, die in Kooperation mit anderen Bahngesellschaften betrieben werden. Teilweise werden diese Verbindungen auch als `IC` gekennzeichnet.

Für Eurocitys nach Italien ist ab der italienischen Grenze ein Zuschlag zu zahlen. Siehe [Tarifliche Besonderheiten](#verkehr-nach-italien).

{{% /train-category %}}

{{% train-category
    id="nj"
    title="Nightjet (NJ) / EuroNight (EN)"
    type="sleeper"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
%}}

Nachtzüge der ÖBB in verschiedene europäische Länder. Die Züge bieten Schlaf- und Liegewagen sowie Sitzwagen an und werden im Ausland in Kooperation mit anderen Bahngesellschaften betrieben.

{{% highlight important %}}
Nationale Freifahrten für Mitarbeitende der Deutschen Bahn werden in Deutschland nicht anerkannt. Liegt ein Teil der Nightjet Fahrt also in Deutschland (Start, Ende oder Durchreise) müssen Mitarbeiter der Deutschen Bahn für die gesamte Strecke ein Ticket zum FIP Globalpreis erwerben. Für Fahrten außerhalb Deutschlands mit FIP Freifahrtschein ist eine Reservierung/Aufpreis erforderlich.
{{% /highlight %}}

**FIP Globalpreis:** ja \
_Tipp:_ Für Fahrten von Deutschland nach Italien, die nationalen Freifahrten bis Salzburg nutzen und dort in den Nightjet steigen, um den FIP Globalpreis zu vermeiden.

#### Reservierung

Für Nightjet Züge können Reservierungen/Aufpreise für Schlaf- und Liegewagen gebucht werden. Dafür ist ein FIP Freifahrtschein für die Länder/Bahngesellschaften erforderlich, die auf der Reise durchfahren werden. Wenn kein FIP Freifahrtschein genutzt wird, kann ein Ticket zum FIP Globalpreis für die gesamte Strecke erworben werden.

**Kosten:** abhängig von Strecke und Auslastung sowie Wagenkategorie.

{{% /train-category %}}

{{% train-category
    id="d"
    title="D-Zug (D)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

`D` Züge werden hauptsächlich als Entlastungszüge zu verkehrsstarken Zeiten (z. B. freitags und sonntags) eingesetzt, verfügen in der Regel nur über die 2. Klasse und bieten keinen besonderen Komfort, da sie mit älterem Wagenmaterial verkehren.

{{% /train-category %}}

### Nahverkehr

{{% train-category
    id="rex"
    title="Regionalexpress (REX) / Cityjet Xpress (CJX)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Schneller Nahverkehrszug mit weniger Halten und modernem Wagenmaterial.

{{% highlight confusion %}}
Regionalexpress-Züge werden teilweise auch von anderen privaten Bahngesellschaften betrieben bei denen FIP Fahrtkarten der ÖBB nicht anerkannt werden. Im Zweifelsfall kann der Beförderer über die jeweilige Anbieterwebsite oder über [bahn.de](https://www.bahn.de) geklärt werden.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="r"
    title="Regionalzug (R)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Nahverkehrszug mit Halten an den meisten Stationen.

{{% highlight confusion %}}
Regionalzüge werden teilweise auch von anderen privaten Bahngesellschaften betrieben bei denen FIP Fahrtkarten der ÖBB nicht anerkannt werden. Im Zweifelsfall kann der Beförderer über die jeweilige Anbieterwebsite oder über [bahn.de](https://www.bahn.de) geklärt werden.

Die Bezeichnung `R` Regionalzug wird in der Fahrplanauskunft der ÖBB auch für rein touristische Verkehre verwendet, bei denen keine FIP Fahrkarten gültig sind. Diese sind mit Fußnoten mit dem Hinweis „Sondertarif“ gekennzeichnet.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="s"
    title="Schnellbahn (S)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Nahverkehrszug mindestens im Stundentakt mit Halt an allen Stationen. Vergleichbar mit einer S-Bahn.

{{% highlight confusion %}}
Schnellbahnen werden teilweise auch von anderen privaten Bahngesellschaften betrieben, bei denen FIP Fahrtkarten der ÖBB nicht anerkannt werden. Im Zweifelsfall kann der Beförderer über die jeweilige Anbieterwebsite oder über [bahn.de](https://www.bahn.de) geklärt werden.

Dazu gehören unter anderem:

- S-Bahn Oberösterreich: S5 Linz – Eferding (Linzer Lokalbahn)
- S-Bahn Salzburg: S1 Salzburg – Lamprechtshausen, S11 Salzburg – Ostermiething (Salzburger Lokalbahn)
- S-Bahn Steiermark: S11 Graz – Übelbach (Steiermarkbahn)
- S6, S61 Graz – Wies-Eibiswald, S7 Graz – Köflach (Graz-Köflacher Eisenbahn)
  {{% /highlight %}}

{{% /train-category %}}

## Ticket- und Reservierungskauf

### Online

{{% booking id="oebb-website" /%}}

{{% booking id="db-website" %}}
Die Reservierung von einzelnen Zügen ohne Umstieg ist über die ÖBB günstiger.
{{% /booking %}}

{{% booking id="db-website-fip-db"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Österreich, mit Ticketanteil nur für den österreichischen Abschnitt. Nur für Mitarbeitende der Deutschen Bahn."
%}}
Die Reservierung von einzelnen Zügen ohne Umstieg ist über die ÖBB günstiger.
{{% /booking %}}

{{% booking id="db-website-fip-international"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Österreich für die gesamte Strecke (keine Gültigkeit im Ausstellungsland des FIP Ausweises)"
%}}
Die Reservierung von einzelnen Zügen ohne Umstieg ist über die ÖBB günstiger.
{{% /booking %}}

### Telefon

{{% booking id="oebb-phone" subtitle="Inkl. Nightjet Buchung" /%}}

### Vor Ort

{{% booking id="oebb-ticket-office" subtitle="Inkl. Nightjet Buchung" /%}}

{{% booking id="oebb-ticket-machine" /%}}

{{% booking id="db-ticket-office" subtitle="Inkl. Nightjet Buchung" %}}
Die Reservierung von einzelnen Zügen ohne Umstieg ist über die ÖBB günstiger.
{{% /booking %}}

### Im Zug

Ein Verkauf von Tickets im Zug ist möglich, wenn der Zugbegleiter sofort aufgesucht wird. Jedoch sind sie der Regel teurer als Tickets, die vorab über andere Verkaufsstellen erworben werden. Auf S-Bahn-Strecken ist der Ticketkauf vor dem Einsteigen verpflichtend.

## Ermäßigungen

Kinder unter 6 werden kostenfrei mitgenommen, ab dem 6. Lebensjahr ist bei Reisen mit FIP Freifahrtschein im Fernverkehr für jedes Kind auch der [Zuschlag](#gültigkeit-fip-tickets) zu bezahlen.

{{% highlight tip %}}
Mit Kindern lohnt sich schnell die ÖBB Vorteilscard Family für 19 €. \
[Siehe ÖBB](https://www.oebb.at/de/tickets-kundenkarten/kundenkarten/vorteilscard)
{{% /highlight %}}

## Tarifliche Besonderheiten

### Züge nach Italien

Auf internationalen Fernzügen von Österreich nach Italien werden FIP Freifahrtscheine der ÖBB zusätzlich zu den FIP Freifahrtscheinen der FS bei auch im italienischen Abschnitt anerkannt (nicht in Regionalzügen), jedoch ist bei beiden Freifahrtscheinen ein Zuschlag zu zahlen. Dieser kann im Zug oder an den Fahrkartenschaltern der FS oder ÖBB erworben werden.

#### Brenner – Bozen – Verona - Venedig/Ancona/Bologna

FIP Freifahrtscheine der ÖBB oder FS gelten im italienischen Abschnitt in `EC` und `RJ` Zügen. Für Fahrten von/nach Italien oder komplett im italienischen Abschnitt ist ein Zuschlag in Höhe von 10 € für die 2. Klasse und 15 € für die 1. Klasse zu zahlen. Der [ÖBB Zuschlag](/operator/oebb#gültigkeit-fip-tickets) wird im Brennerverkehr nicht erhoben.

#### Railjet Tarvisio Boscoverde – Venedig

FIP Freifahrtscheine der ÖBB oder FS gelten im italienischen Abschnitt in `RJ` Zügen. Für Fahrten von/nach Italien oder komplett im italienischen Abschnitt ist ein Zuschlag in Höhe von 10 € für die 2. Klasse und 15 € für die 1. Klasse zu zahlen. Der [ÖBB Zuschlag](/operator/oebb#gültigkeit-fip-tickets) wird im Brennerverkehr nicht erhoben.

#### Eurocity Triest

FIP Freifahrtscheine der ÖBB, **jedoch nicht der FS**, gelten im italienischen Abschnitt bis Triest. Für Fahrten von/nach Italien oder komplett im italienischen Abschnitt ist ein Zuschlag in Höhe von 2,60 € für die 2. Klasse und 4,60 € für die 1. Klasse zu zahlen. Für den slowenischen Abschnitt ist ein FIP Freifahrtschein der SŽ bzw. FIP 50 Ticket erforderlich.

### REX63 (Pamhagen – Neusiedl am See)

Auf der Linie REX63 werden zwischen Pamhagen und Neusiedl am See werden sowohl FIP Fahrkarten der ÖBB als auch der GySEV anerkannt.

### Liechtenstein

Die Eisenbahn in Liechtenstein wird von der ÖBB betrieben. FIP Fahrkarten sind hier zu den österreichischen Konditionen und ohne Aufpreis gültig (Feldkirchen-Buchs SG).

### Wien Flughafen: City Airport Train (CAT)

FIP Fahrkarten sind im `CAT` City Airport Train zwischen Wien Flughafen und Wien Mitte nicht gültig.

FIP-Fahrscheine werden jedoch auf den von der ÖBB betriebenen Nahverkehrszügen der S-Bahn-Linie S7 anerkannt.

Die Fahrkartenschalter für ÖBB und `CAT` befinden sich im Terminal 3.

{{% highlight tip %}}
Wer mit regulären Wiener Öffi-Tickets (z. B. Einzelfahrten oder 24/48/72-Stunden-Tickets über die WienMobil-App) mit der S-Bahn fährt, kann diese nur bis zur Stadtgrenze Schwechat nutzen. Für den Abschnitt zwischen Schwechat und Flughafen Wien ist ein zusätzliches Ticket am Schalter oder Automaten erforderlich. WienMobil-App-Tickets zum Normaltarif sind für Fahrten mit dem `CAT` oder den Vienna Airport Lines VAL Bussen nur mit dem CAT- bzw. VAL-Zusatzticket in der App gültig.
{{% /highlight %}}

### Schneebergbahn

Die Schneebergbahn ist zwar kein Teil der ÖBB oder FIP gewährt jedoch bei Vorlage des FIP Ausweises 50% Rabatt auf Tickets.

### ÖBB Postbus

FIP Fahrkarten sind im ÖBB Postbus nicht gültig, außer bei Schienenersatzverkehren (SEV).

### Motorail

FIP Fahrkarten gelten in Autoreisezügen der ÖBB. Die Kosten für den Fahrzeugtransport sind zusätzlich zu bezahlen und vom FIP Ermäßigung ausgeschlossen.

### Autoschleuse Tauerntunnel (ASTB)

Mit einem FIP Freifahrtschein kann die Autoschleuse Tauerntunnel (Böckstein–Mallnitz-Obervellach) genutzt werden. Das Fahrzeug muss auf einen der mitreisenden FIP Freifahrtschein-Inhaber zugelassen sein, um kostenlos befördert zu werden. Für Mitreisende ohne FIP Freifahrtschein gilt der reguläre Fahrpreis.

FIP 50 Ermäßigungen sind nicht erhältlich.

### Korridorverkehr Salzburg - Kufstein

Fernzüge der ÖBB verkehren zwischen Salzburg und Kufstein auf dem deutschen Streckennetz ohne Halt. FIP Freifahrtscheine der ÖBB sind hier gültig.

### Fahrtunterbrechung

Eine Unterbrechung von einer Fahrt ist nur bei Distanzen von 101 km und mehr möglich und erfordert keine zusätzlichen Formalitäten.

### Unterscheidung zwischen Nah- und Fernverkehr

Es findet abgesehen vom Zuschlag zum FIP Freifahrtschein keine Unterscheidung zwischen Nah- und Fernverkehr statt. Alle Fahrkarten inklusive FIP 50 Tickets sind für alle Züge der ÖBB gültig.

## Quellen

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)
