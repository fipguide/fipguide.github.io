---
draft: false
title: "CFL"
country:
  - "luxembourg"
operator: "cfl"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "4 Felder mit jeweils zwei Tagen"
      fip-coupon-relatives:
        status: invalid
        text: "Nicht verfügbar"
      fip-reduced-ticket:
        status: valid
        text: "50 % Rabatt"
---

Die CFL (Société nationale des chemins de fer luxembourgeois) ist die luxemburgische Staatsbahn und die wichtigste Bahngesellschaft in [Luxemburg](/country/luxembourg "Luxemburg").

## Zusammenfassung

- Kostenfreie Fahrt auch ohne FIP in der zweiten Klasse
- Aufpreis für die erste Klasse möglich

## Gültigkeit FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

{{< highlight important >}}
Luxemburg bietet kostenlosen öffentlichen Nahverkehr für Inlandsfahrten unabhängig von FIP an. Dies umfasst alle Zugverbindungen (außer TGV), Straßenbahnen und Busse. Die Fahrt mit der CFL ist somit in der zweiten Klasse kostenlos und es muss kein zusätzliches Ticket erworben werden. Die Fahrt in der ersten Klasse erfordert einen FIP Freifahrtschein oder FIP 50 Ticket der ersten Klasse. Für Fahrten über Luxemburg hinaus z. B. Richtung Deutschland oder Belgien wird eine Fahrkarte ab dem Grenztarifpunkt benötigt. Das bedeutet, dass beispielsweise ein durchgehendes Ticket, ein gültiger Freifahrtschein oder eine nationale Fahrvergünstigung bei Fahrten nach Deutschland nötig sind, um bis ins Nachbarland zu fahren. Eine Fahrkarte ab dem ersten Bahnhof nach der Grenze ist nicht ausreichend.
{{< /highlight >}}

## Zugkategorien und Reservierungen

{{% train-category
  id="intercity"
  title="InterCity (IC)"
  type="highspeed"
  fip_accepted=true
  reservation_possible=true
  reservation_required=false
%}}

InterCity-Züge verbinden Luxemburg mit Liège und Brüssel in Belgien.

{{% /train-category %}}

{{% train-category
  id="regionalexpress"
  title="Regionalexpress (RE)"
  type="regional"
  fip_accepted=true
  reservation_possible=false
%}}

Züge mit Halt an manchen Stationen.

{{% /train-category %}}

{{% train-category
  id="regionalbahn"
  title="Regionalbahn (RB)"
  type="regional"
  fip_accepted=true
  reservation_possible=false
%}}

Züge mit Halt an allen Stationen.

{{% /train-category %}}

{{% train-category
  id="bus"
  title="Bus"
  type="bus"
  fip_accepted=false
  reservation_possible=false
%}}

Die CFL betreibt auch überregionale Buslinien. Diese akzeptieren zwar kein FIP, durch den kostenlosen öffentlichen Nahverkehr ist jedoch kein Fahrschein erforderlich.

{{% /train-category %}}

{{% train-category
  id="standseilbahn"
  title="Standseilbahn Pfaffenthal-Kirchberg"
  type="funicular"
  fip_accepted=true
  reservation_possible=false
%}}

Die Standseilbahn verbindet die Bahnhaltestelle Pfaffenthal-Kirchberg mit der Umsteigeplattform auf dem Kirchberg-Plateau.

{{% /train-category %}}

## Ticket- und Reservierungskauf

Der Ticketkauf ist nur für die erste Klasse relevant.

{{% highlight tip %}}
Die CFL bietet günstige Ticketoptionen für die erste Klasse bereits ab 3 € an. Diese Tickets sind nicht streckenabhängig, sondern gelten für einen bestimmten Zeitraum für das gesamte Streckennetz. Diese Tickets können auf der [Website der CFL](https://www.cfl.lu/de-de/ticket/national) erworben werden.

An [CFL-Ticketschaltern](#vor-ort) sind die erste Klasse Tickets bei Vorlage des FIP Ausweises mit 50 % Rabatt erhältlich.
{{% /highlight %}}

### Online

{{% booking id="db-website-fip-international"
    subtitle="Grenzüberschreitende FIP 50 Tickets zwischen Deutschland und Luxemburg für die gesamte Strecke (keine Gültigkeit im Ausstellungsland des FIP Ausweises)"
/%}}

{{% booking id="sncb-website"
subtitle="Nur für grenzüberschreitende Verbindungen von/nach Belgien"
/%}}

### Telefon

{{% booking id="cfl-phone"
fip_global_fare=nil
fip_50=true
%}}

Aufgrund der anfallenden Buchungsgebühr lohnt sich ggf. der Kauf einer regulären erste Klasse Fahrkarte via CFL-App oder Fahrkartenautomat.

{{% /booking %}}

### Vor Ort

{{% booking id="cfl-ticket-office" /%}}

### Im Zug

Tickets für die Fahrt in der ersten Klasse bzw. Upgrades von der zweiten in die ersten Klasse müssen vor dem Einsteigen in den Zug gekauft werden.

## Ermäßigungen

Bei öffentlichen Fahrpreisen reisen Kinder bis 6 Jahre kostenlos, Kinder zwischen 6 und 12 Jahren erhalten eine Ermäßigung von 50 % auf den Erwachsenenpreis. Ab 12 Jahren gilt der reguläre Erwachsenenfahrpreis.[^1]
In der zweiten Klasse ist die Fahrt generell kostenfrei möglich, daher ist dies nur für die erste Klasse relevant.

### Tarifliche Besonderheiten

### CFL Bus Luxemburg - Saarbrücken

Im Expressbus der CFL zwischen Luxemburg und Saarbrücken ist keine allgemeine kostenlose Fahrt möglich. Die Fahrpreise können auf der [Website der CFL](https://www.cfl.lu/de-de/ticket/internationaldetail/saarbrueckenexpress/1000) eingesehen werden. \
Es gibt auf dieser Verbindung keine weiteren FIP-Vergünstigungen.

### CFL Bus Lorraine Express

Die CFL betreibt einen Expressbus zwischen Luxemburg und dem Bahnhof _Lorraine TGV_ in Frankreich als `TGV` Zubringer. In diesem Bus ist keine allgemeine kostenlose Fahrt möglich. Die Fahrpreise können auf der [Website der CFL](https://www.cfl.lu/de-de/ticket/internationaldetail/gare-lorraine) eingesehen werden. Die Busse sind reservierungspflichtig und ein Ticket kann bis zu 2,5 Stunden vor Abfahrt des Busses erworben werden. \
Zur Gültigkeit von FIP Vergünstigungen sind uns keine offiziellen Informationen bekannt.

## Quellen

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#uk-accordion-75)
