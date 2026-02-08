---
draft: false
title: "DSB"
country:
  - "denmark"
operator: "dsb"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 Freifahrtschein mit jeweils 4 Feldern pro Jahr. Jedes Feld ist zwei Tage gültig."
      fip-coupon-relatives:
        status: invalid
        text: "Nicht verfügbar"
      fip-reduced-ticket:
        status: valid
        text: "50 % Rabatt"
    sncf:
      fip-coupon:
        status: valid
        text: "1 Freifahrtschein mit jeweils 4 Feldern pro Jahr. Jedes Feld ist zwei Tage gültig."
---

Die DSB (Danske Statsbaner) ist die staatliche Eisenbahngesellschaft in [Dänemark](/country/denmark "Dänemark"). Sie betreibt den Großteil des Personenverkehrs auf dem dänischen Schienennetz.

## Zusammenfassung

- FIP 50 und FIP Freifahrtscheine werden akzeptiert.
- Es besteht größtenteils keine Reservierungspflicht.

## Gültigkeit FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Freifahrtscheine und FIP 50 Tickets sind auf Verbindungen der DSB gültig. Bei grenzüberschreitenden Fahrten muss entweder ein durchgängiges FIP 50 Ticket oder FIP Freifahrtscheine beider Länder vorhanden sein.

## Zugkategorien und Reservierungen

Innerhalb von Dänemark sind Reservierungen möglich, aber nicht verpflichtend. Bei den grenzüberschreitenden Reisen von und nach Deutschland sind die `ECE` Züge Hamburg – Kopenhagen im Normalfall im Sommer reservierungspflichtig.

{{% train-category
    id="intercity-lyn"
    title="IntercityLyn (ICL)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

IntercityLyn-Züge sind die schnellsten Züge der DSB. Sie verkehren mit bis zu 180 km/h mit wenigen Halten auf den Hauptstrecken durch das Land. So verbinden sie beispielsweise Aalborg, Aarhus und Kopenhagen miteinander.

{{% /train-category %}}

{{% train-category
    id="intercity"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Intercity-Züge sind ähnlich wie die `ICL` Züge, halten jedoch öfter und sind langsamer. Sie verkehren auch grenzüberschreitend ins deutsche Flensburg.

{{% /train-category %}}

{{% train-category
    id="ece"
    title="Eurocity-Express (ECE)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Eurocity-Express-Züge verkehren grenzüberschreitend auf der Strecke zwischen Hamburg und Kopenhagen, die aktuell u. a. über Padborg, Kolding und Odense fahren.

#### Reservierung

Eine Reservierung ist bei einer grenzüberschreitenden Fahrt empfehlenswert, in der Hauptsaison (Sommer) meist auch verpflichtend.

{{% /train-category %}}

{{% train-category
    id="regional"
    title="Regionalzug (R)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Regional-Züge stellen den Nahverkehr zwischen verschiedenen Orten sicher. Sie halten außerhalb des S-Bahn-Netzes in Kopenhagen an allen Stationen und sind daher eher langsam.

{{% highlight confusion %}}
Auch Züge von anderen Anbietern werden als `R` angezeigt, daher unbedingt vorher schauen, ob der Betreiber des Zuges die DSB ist.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="s-tog"
    title="S-tog (S)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Die S-Bahn Kopenhagen wird ebenfalls von der DSB betrieben und kann daher auch mit FIP-Fahrkarten genutzt werden. Sie verkehrt im dichten Takt mit Halt an allen Stationen und ist mit S-Bahn-Systemen in anderen Ländern gut zu vergleichen.

{{% /train-category %}}

## Ticket- und Reservierungskauf

### Online

{{% booking id="dsb-website"
    subtitle="Nur für nationale Verbindungen"
/%}}

{{% booking id="dsb-international-website"
    subtitle="Für nationale und grenzüberschreitende Verbindungen"
/%}}

{{% booking id="db-website"
    subtitle="Für nationale und grenzüberschreitende Verbindungen"
/%}}

{{% booking id="oebb-website"
    subtitle="Für nationale und grenzüberschreitende Verbindungen"
/%}}

{{% booking id="db-website-fip-db"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Dänemark, mit Ticketanteil nur für den dänischen Abschnitt. Nur für Mitarbeitende der Deutschen Bahn."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Dänemark für die gesamte Strecke (keine Gültigkeit im Ausstellungsland des FIP Ausweises)"
/%}}

### Vor Ort

{{% booking id="dsb-ticket-office" /%}}

{{% booking id="db-ticket-office" /%}}

## Ermäßigungen

Kinder unter 5 Jahren reisen kostenlos. \
Kinder unter 16 Jahren erhalten 50% Rabatt auf den Erwachsenen-Tarif.[^1]

## Tarifliche Besonderheiten

### Fahrtunterberchungen

Bei FIP 50 Tickets kann die Reise zwischenzeitlich unterbrochen werden, muss jedoch vom Zugpersonal bestätigt werden.[^1]

### Kopenhagen Flughafen

FIP-Angebote sind nicht gültig in Øresundståg-Zügen von Københavns Hovedbanegård (Kopenhagen Hauptbahnhof) bis Københavns Lufthavn Station (Bahnhof Kopenhagen Flughafen), da diese nicht von der DSB betrieben werden.

### FIP 50 in Kopenhagen und Aarhus

FIP 50 Tickets können nicht zwischen Bahnhöfen im Großraum Kopenhagen oder im Raum Aarhus-Grenaa ausgestellt werden. Nur Fahrten über diese Regionen hinaus sind möglich. FIP Freifahrtscheine sind hingegen auch bei Fahrten nur innerhalb dieser Regionen gültig.

### Nutzung von Fähren

{{% highlight inofficial %}}
Angeblich sind FIP 50 Tickets gültig auf Fähren von Scandlines in Verbindung mit einer Zugreise durch Dänemark. Jedoch konnte dies bisher nicht von uns bestätigt werden. [^1]
{{% /highlight %}}

## Empfehlungen

{{% highlight tip %}}
Die DSB bietet einen zuverlässigen und komfortablen Service. Die 1. Klasse lohnt sich für FIP-Fahrten in Dänemark besonders, da hier jederzeit Tee, Kaffee, Wasser und Snacks zuschlagsfrei zur Verfügung stehen und morgens auch oft ein kleines Frühstück serviert wird. Zudem erlaubt sie Zugang zur DSB Lounge in Kopenhagen, Odense und Aarhus. Außerdem besteht die Möglichkeit am Bahnhof bei 7/11 ein kostenloses Getränk (Kaffee, Tee, Wasser) zu bekommen. [^2]
{{% /highlight %}}

## Quellen

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#Tips)

[^2]: [DSB 1'](https://www.dsb.dk/find-produkter-og-services/dsb-1-billetter/dsb-1-tillaeg/)
