---
draft: false
title: "PKP"
country:
  - "poland"
operator: "pkp"
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
---

Die polnische Staatsbahn PKP (Polskie Koleje Państwowe) betreibt mit ihren Tochtergesellschaften PKP Intercity und Polregio einen Großteil des Schienenpersonenverkehrs in [Polen](/country/poland "Polen").

## Zusammenfassung

- PKP akzeptiert FIP Freifahrt und FIP 50 Tickets.
- Reservierungspflicht für `EIP` und `EIC` sowie teilweise in `IC` und `TLK` Zügen.
- Gültigkeit der PKP FIP-Tickets auch im S-Bahn System von Danzig (Dreistadt), bei der Warszawska Kolej Dojazdowa (WKD), der Koleje Mazowieckie (KM) sowie einigen Strecken der Koleje Śląskie (KŚ).

## Gültigkeit FIP-Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Freifahrtscheine und FIP 50 Tickets sind bei der PKP gültig. Dazu gehören:

- PKP InterCity
- POLREGIO S.A
- Koleje Mazowieckie (KM) (Regionalzüge um Warschau bzw. der Woiwodschaft Masowien)
- PKP Szybka Kolej Miejska w Trojmiescie (SKM) (S-Bahnen zwischen Danzig, Gdingen und Sopot)
- Warszawska Kolej Dojazdowa (WKD) (Regionalzüge im Großraum Warschau)
- Einige Strecken der Koleje Śląskie (KŚ), siehe [Nutzung von PKP Freifahrtscheinen auf KŚ Routen](#nutzung-von-pkp-freifahrtscheinen-auf-kś-routen)

Bei grenzüberschreitenden Fahrten muss entweder ein durchgängiges FIP 50 Ticket oder FIP Freifahrtscheine beider Länder vorhanden sein.

Die PKP FIP Tickets haben keine Gültigkeit im S-Bahn System von Warschau, welches von Szybka Kolej Miejska w Warszawie (SKM) betrieben wird. Hier sind reguläre Stadtfahrkarten wie bei U-Bahn, Straßenbahn und Bus zu kaufen.

## Zugkategorien und Reservierungen

{{% highlight important %}}
Polnische Fernzüge sind teilweise reservierungspflichtig. Die Reservierungspflicht gilt für alle EIP und EIC Züge sowie teilweise für IC und TLK Züge.
{{% /highlight %}}

{{% train-category
    id="eip"
    title="Express Intercity Premium (EIP)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
%}}

Hochgeschwindigkeitszüge mit Neigetechnik (Pendolino), die von PKP Intercity betrieben werden und hauptsächlich zwischen Gdynia/Gdańsk und Kraków/Katowice über Warschau fahren, aber auch vereinzelt auf anderen Routen zu finden sind.
In der 1. Klasse sind kleine Speisen und Getränke am Platz im Ticketpreis inkludiert. [^2]

#### Reservierung

Die Züge sind aufpreispflichtig mit einem erhöten Reservierungsentgelt. Tickets und Reservierungen können nicht an Bord des Zuges gekauft werden.

Bei Reservierungen, die nicht zu einem entsprechenden Preis durch die PKP verkauft wurden, kann die Zahlung eines Zuschlags an Bord des Zuges erforderlich sein. [^1]

**Kosten für Reservierung:** 43 PLN (zum Festpreis und nur über die PKP buchbar)

{{% /train-category %}}

{{% train-category
    id="eic"
    title="Express InterCity (EIC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Komfortable Züge mit modernisierten Reisezugwagen, die von PKP Intercity betrieben werden und nur in den wichtigsten Städten halten. Grenzüberschreitende EICs werden in anderen Ländern auch als EC bezeichnet. [^3]
In der 1. und 2. Klasse gibt es eine kostenlose Flasche Wasser pro Person.

#### Reservierung

Einige Züge sind reservierungspflichtig. Die Reservierungspflicht kann in der [Reiseauskunft der PKP](https://ebilet.intercity.pl/) geprüft werden.

{{% /train-category %}}

{{% train-category
    id="ic"
    title="InterCity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Schnellzüge mit Reisezugwagen oder modernen Triebzügen, die von PKP Intercity betrieben werden und nur an wichtigen Bahnhöfen halten. [^4]

Teilweise fahren die Züge auch mit Schlaf- und Liegewagen (siehe [Kategorie "EN"](#en)).

#### Reservierung

Einige Züge sind reservierungspflichtig. Die Reservierungspflicht kann in der [Reiseauskunft der PKP](https://ebilet.intercity.pl/) geprüft werden.

{{% /train-category %}}

{{% train-category
    id="tlk"
    title="Twoje Linie Kolejowe (TLK)"
    type="regional"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Überregionale Züge, die von PKP Intercity betrieben werden und sich durch besonders günstige Ticketpreise mit einfachen Komfortmerkmalen auszeichnen. [^5]

Teilweise fahren die Züge auch mit Schlaf- und Liegewagen (siehe [Kategorie "EN"](#en)).

#### Reservierung

Einige Züge sind reservierungspflichtig. Die Reservierungspflicht kann in der [Reiseauskunft der PKP](https://www.intercity.pl/en/) geprüft werden.

{{% /train-category %}}

{{% train-category
    id="en"
    title="EuroNight (EN)"
    type="sleeper"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Internationale Nachtzugverbindungen, betrieben von PKP Intercity, die aus oder in Richtung Deutschland, Tschechien, Östereich, Ungarn und in die Ukraine verkehren.
Nachtzugverbindungen, die nur innerhalb von Polen fahren, werden als `IC` oder `TLK` geführt. Verbindungen in die Ukraine sind als `D` gekennzeichnet.

#### Reservierung

Es besteht Reservierungspflicht in Schlaf- und Liegewagen.

**Kosten für Reservierung:**

Innerhalb Polens:

- Schlafwagen: Single 299 PLN, Double 159 PLN, Triple 79 PLN
- Liegewagen: 3er/4er Abteil 69 PLN, 6er Abteil 59 PLN [^1]

Abweichende Preise für internationale Verbindungen. [Weitere Informationen](https://www.intercity.pl/en/site/for-passengers/buy-a-ticket/where-to-buy-the-ticket/przejazdy-z-fip-en.html)
{{% /train-category %}}

{{% train-category
    id="r"
    title="Regio (R)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Regionalzugverbindungen mit Halten an den meisten Bahnhöfen, die von Polregio betrieben werden. Diese Züge haben keine 1. Klasse.

{{% highlight confusion %}}
Regionalzüge werden in Polen teilweise auch von anderen Bahngesellschaften als Polregio betrieben. Diese haben teilweise ihre eigenen FIP-Ermäßigungen ([siehe Polen](/country/poland "Polen")).
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="sr"
    title="superREGIO (sR)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Überregionale Züge, die von Polregio betrieben werden und mit höherem Komfort als normale Regiozüge ausgestattet sind.

{{% /train-category %}}

## Ticket- und Reservierungskauf

### Online

{{% booking id="pkp-website"
    subtitle="Für nationale Verbindungen und grenzüberschreitende Verbindungen inkl. EIP"
%}}
FIP 50 Tickets können nur für nationale Verbindungen verkauft werden.
{{% /booking %}}

{{% booking id="koleo-website"
    subtitle="Für nationale Verbindungen Verbindungen inkl. EIP"
%}}
FIP 50 Tickets können nur für nationale Verbindungen verkauft werden.

Alternativ kann auch direkt über die [Website von Polregio](https://bilety.polregio.pl/) gebucht werden. Die Funktionsweise ist identisch zu Koleo.
{{% /booking %}}

{{% booking id="db-website"
    subtitle="Außer EIP"
/%}}

{{% booking id="db-website-fip-db"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Polen, mit Ticketanteil nur für den polnischen Abschnitt. Nur für Mitarbeitende der Deutschen Bahn."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Polen für die gesamte Strecke (keine Gültigkeit im Ausstellungsland des FIP Ausweises)"
/%}}

### Vor Ort

{{% booking id="pkp-ticket-office" /%}}

{{% booking id="pkp-ticket-machine" /%}}

{{% booking id="db-ticket-office"
    subtitle="Außer EIP"
/%}}

### Im Zug

#### PKP Intercity (EIC, IC, TLK)

Gegen einen Aufschlag von 20 PLN können Fahrkarten im Zug erworben, wenn das Zugbegleitpersonal direkt nach Abfahrt des Zuges aufgesucht wird. [^1]

#### Polregio

FIP 50 Fahrkarten können im Zug ausgestellt werden, unterliegen jedoch einer speziellen Gebühr (außer der Fahrgast steigt an einem Bahnhof ohne Fahrkartenverkauf zu). Fahrgäste müssen an der vorderen Tür des Zuges (in Fahrtrichtung) einsteigen und unmittelbar nach dem Einsteigen das Ticket beim Zugpersonal kaufen.

#### Koleje Mazowieckie (KM)

Fahrgäste, die an Bahnhöfen mit Fahrkartenschalter zusteigen und nicht nachweisen können, dass sie dort kein Ticket kaufen konnten, müssen zusätzlich zum Fahrpreis ein Zuschlagsentgelt zahlen.

Fahrgäste ohne entwertetes Ticket müssen an der vorderen Tür des Zuges (in Fahrtrichtung) einsteigen und das Ticket unverzüglich beim Zugpersonal im ersten Abteil kaufen oder entwerten lassen. Ist kein Personal sichtbar, sollen Fahrgäste im ersten Abteil warten. Andernfalls gilt der Fahrgast als ohne gültigen Fahrschein unterwegs und muss mit einem erhöhten Beförderungsentgelt rechnen.

#### PKP Szybka Koleje Miejska w Trójmieśce (SKM)

Ein Fahrgast, der vor Fahrtantritt kein Ticket erworben hat, ist verpflichtet, sich unmittelbar nach dem Einsteigen beim Zugbegleiter oder Kontrolleur zu melden, um ein Ticket zu kaufen. Dazu muss der Fahrgast die vordere Tür des Zuges (in Fahrtrichtung) benutzen und, falls sich das Personal nicht in diesem Zugteil befindet, dort auf das Personal warten.

Die Ausstellung eines Tickets im Zug ist gebührenpflichtig. Die Höhe der Gebühr ist im Tarif online unter [www.skm.pkp.pl](https://www.skm.pkp.pl/) (C-PKP SKM) einsehbar.

Keine Gebühr wird für die Ausstellung eines Tickets im Zug für folgende Fahrgäste erhoben:

- Menschen mit Behinderung und deren Begleitpersonen
- Personen über 60 Jahre
- Personen mit eingeschränkter Mobilität
- Personen mit Kindern unter 6 Jahren
- Schwangere
- Minderjährige – gemäß den Beförderungsbedingungen (RPO-PKP SKM) auf der Website [www.skm.pkp.pl](https://www.skm.pkp.pl/)

## Ermäßigungen

Uns sind keine weiteren Ermäßigungen bekannt.

## Tarifliche Besonderheiten

### Gültigkeitsdauer im Nahverkehr

#### Polregio

Ein Fahrschein für eine einfache Fahrt ist bis Mitternacht am Ausstellungstag gültig. Die Gültigkeit von FIP 50 Einzelfahrscheinen richtet sich nach der Entfernung:

- bis 50 km: 3 Stunden ab Ausstellungsdatum und -uhrzeit (oder ab einem Zeitpunkt der Wahl des Fahrgasts)
- 51 km bis 100 km: 6 Stunden ab Ausstellungsdatum und -uhrzeit (oder ab einem Zeitpunkt der Wahl des Fahrgasts)
- ab 101 km: bis Mitternacht am Ausstellungstag (der Tag gilt von 00:01 Uhr bis 24:00 Uhr)

#### Koleje Mazowieckie (KM)

Die Gültigkeit von Einzelfahrkarten oder Rückfahrkarten beträgt 1 Tag und beginnt mit dem aufgedruckten/ausgefüllten Datum und Uhrzeit. Der Tag gilt von 00:01 bis 24:00 Uhr.

Fahrten mit Einzelfahrkarten müssen am ersten Gültigkeitstag (auf dem Ticket als Reisetag angegeben) begonnen werden, und zwar:

- Fahrten mit Einzelfahrkarten und Hinfahrten von Rückfahrkarten müssen innerhalb einer Stunde nach Ticketausstellung oder nach Wahl des Fahrgasts angetreten werden. Die Tarifbedingungen der KM können andere Gültigkeitszeiträume vorsehen.
- Rückfahrten von Rückfahrkarten für Entfernungen über 100 km können an jedem Tag innerhalb der Gültigkeit des Tickets erfolgen.

#### PKP Szybka Koleje Miejska w Trójmieśce (SKM)

Fahrkarten für Einzelfahrten, die am Automaten ausgestellt werden, sind ab dem Zeitpunkt der Ausstellung/Entwertung gültig. Fahrkarten, die am Schalter gekauft werden, sind entsprechend der vom Verkaufspersonal festgelegten Zeit und Zone gültig.

Die Gültigkeit der Fahrkarten richtet sich nach der Entfernung:

- bis 50 km: 3 Stunden ab Ausstellungsdatum und -uhrzeit oder nach Wahl des Fahrgasts,
- 51 km bis 100 km: 6 Stunden ab Ausstellungsdatum und -uhrzeit oder nach Wahl des Fahrgasts,
- ab 101 km: 1 Tag (ein Tag gilt von 00:01 Uhr bis 24:00 Uhr).

### Fahrtunterbrechung

#### PKP Intercity (EIP, EIC, IC, TLK)

Die Unterbrechung einer Fahrt ist nicht erlaubt.

#### Polregio

Eine Fahrtunterbrechung ist einmalig ohne Bestätigung möglich.

#### Koleje Mazowieckie (KM)

Eine Fahrtunterbrechung ist grundsätzlich erlaubt, es gibt jedoch Ausnahmen. Im Zweifelsfall sollte beim Fahrkartenkauf nachgefragt werden, ob eine Unterbrechung möglich ist.

#### PKP Szybka Koleje Miejska w Trójmieśce (SKM)

Eine Fahrtunterbrechung ist erlaubt, unterliegt jedoch den Beförderungsbedingungen (RPO-PKP SKM) auf der Website [www.skm.pkp.pl](https://www.skm.pkp.pl/)

### Nutzung von PKP Freifahrtscheinen auf KŚ Routen

Auf folgenden Routen der [KŚ](/operator/ks) sind sowohl FIP-Tickets der KŚ als auch der PKP gültig:

- Gliwice – Katowice – Częstochowa
- Częstochowa – Lubliniec
- Katowice – Tychy – Pszczyna – Czechowice Dziedzice – Bielsko Biała – Zwardoń
- Żywiec – Sucha Beskidzka – Zakopane
- Czechowice Dziedzice – Zebrzydowice
- Pszczyna – Wisła Głębce
- Kluczbork – Katowice

### Busse Warschau Modlin

FIP Fahrkarten sind in den KM-Bussen zwischen Modlin und Flughafen Warschau Modlin nicht gültig.

### Sonderzüge Słoneczny

FIP Fahrkarten sind im Słoneczny Sonderzug der KM (Warschau nach Danzig/Gdingen) nicht gültig.

### Busse und Ersatzverkehr

FIP-Fahrkarten gelten auch auf von der PKP betriebenen Schienenersatzverkehren (Busse).

### Seilbahnen und Zahnradbahnen

FIP-Fahrkarten gelten nicht auf von der PKP betriebenen Seil- und Zahnradbahnen.

## Empfehlungen

{{% highlight tip %}}
FIP-Freifahrtscheine für die 1. Klasse lohnen sich bei der PKP nur bedingt. Sind Fahrten mit dem EIP geplant, sind sie sich durch den erhöhten Komfort und den zusätzlichen Snacks in der 1. Klasse empfehlenswert. In den anderen Zügen gibt es teilweise nur zwei 1. Klasse 6er-Abteile, die oft auch schnell ausgebucht sind. Auch bei größeren 1. Klasse Bereichen kommt es vor, dass diese vom Komfort her schlechter sind als die Bereiche der 2. Klasse im selben Zug. Bei Fahrten im Regionalverkehr wird grundsätzlich keine 1. Klasse angeboten.
{{% /highlight %}}

## Quellen

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)

[^2]: [PKP Intercity - EIP](https://www.intercity.pl/de/site/fur-fahrgast/informacje/unsere-zuge/express-intercity-premium-eip.html)

[^3]: [PKP Intercity - EIC](https://www.intercity.pl/de/site/fur-fahrgast/informacje/unsere-zuge/express-intercity-eic.html)

[^4]: [PKP Intercity - IC](https://www.intercity.pl/de/site/fur-fahrgast/informacje/unsere-zuge/intercity-ic.html)

[^5]: [PKP Intercity - TLK](https://www.intercity.pl/de/site/fur-fahrgast/informacje/unsere-zuge/twoje-linie-kolejowe-tlk.html)
