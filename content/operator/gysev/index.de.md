---
draft: false
title: "GySEV / Raaberbahn"
country:
  - "austria"
operator: "gysev"
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

Die Raab-Oedenburg-Ebenfurter Eisenbahn AG (ungarisch Győr-Sopron-Ebenfurti Vasút Zrt.), kurz GySEV oder Raaberbahn ist ein privates ungarisches Eisenbahnunternehmen, welches Regionalzüge in Ungarn und [Österreich](/country/austria "Österreich") betreibt. Die Züge verkehren hauptsächlich südlich und östlich des Neusiedlersees (Westungarn), teilweise sind sie sogar auf eigener Infrastruktur unterwegs.

## Zusammenfassung

- FIP 50 und FIP Freifahrtscheine werden in Ungarn ausnahmslos akzeptiert.
- FIP 50 und FIP Freifahrtscheine gelten in Österreich nur eingeschränkt.
- Es besteht keine Reservierungspflicht.

## Gültigkeit FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="invalid" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

{{% highlight important %}}
FIP gilt auf allen Strecken der GySEV in Ungarn. Der FIP Freifahrtschein der GySEV ist jedoch primär für Ungarn gedacht und gilt auf den Strecken der GySEV in Österreich nur eingeschränkt.
{{% /highlight %}}

Folgende Linien sind mit dem FIP Freifahrtschein der GySEV in Österreich in den genannten Abschnitten nutzbar:

- REX 63: Neusiedl am See – Fertőszentmiklós [^2]
- REX 6: Wien Hbf – Deutschkreuz – Sopron
- REX 65: Eisenstadt – Wulkapordersdorf (Vereinigung mit REX6 und Durchbindung nach Wien Hbf)

[Übersicht über alle GySEV Strecken](https://www2.GySEV.hu/de/vasutvonalak) (inkl. Ungarn).

## Zugkategorien und Reservierungen

{{% train-category
    id="ic"
    title="InterCity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

Die GySEV betreibt Scarbantia `IC` Züge zwischen Sopron und Budapest.

{{% highlight confusion %}}
In Ungarn verkehren auch InterCity Züge der ungarischen Staatsbahn MÁV.
{{% /highlight %}}

#### Reservierung

Reservierungen sind nur zwischen Győr und Budapest verpflichtend. Bei Fahrten zwischen Sopron und Győr ist keine Reservierung erforderlich.

{{% /train-category %}}

{{% train-category
    id="rex"
    title="Regionalexpress (REX)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Schneller Nahverkehrszug mit weniger Halten und modernem Wagenmaterial.

{{% highlight confusion %}}
Regionalexpress-Züge werden teilweise auch von der ÖBB betrieben, bei denen FIP Fahrtkarten der GySEV nicht anerkannt werden. Im Zweifelsfall kann der Beförderer über die jeweilige Anbieterwebsite oder über [bahn.de](https://www.bahn.de) geklärt werden.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="r"
    title="Regionalzug (R)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Nahverkehrszug mit Halten an den meisten Stationen.

{{% highlight confusion %}}
Regionalzüge werden teilweise auch von der ÖBB betrieben, bei denen FIP Fahrkarten der GySEV nicht anerkannt werden. Im Zweifelsfall kann der Beförderer über die jeweilige Anbieterwebsite oder über [bahn.de](https://www.bahn.de) geklärt werden.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="sz"
    title="Személyvonat (Sz)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Nahverkehrszug mit Halten an den meisten Stationen.

{{% highlight confusion %}}
Személyvonat werden teilweise auch von der MÀV betrieben, bei denen FIP Fahrtkarten der GySEV nicht anerkannt werden. Im Zweifelsfall kann der Beförderer über die jeweilige Anbieterwebsite oder über [bahn.de](https://www.bahn.de) geklärt werden.
{{% /highlight %}}

{{% /train-category %}}

## Ticket- und Reservierungskauf

### Online

{{% booking id="mav-website" /%}}

### Telefon

{{% booking id="oebb-phone" reservations=nil /%}}

### Vor Ort

{{% booking id="mav-ticket-office" /%}}

{{% booking id="mav-ticket-machine" /%}}

{{% booking id="oebb-ticket-office" reservations=nil /%}}

### Im Zug

Tickets mit FIP Ermäßigung können nicht im Zug erworben werden. [^1]

## Ermäßigungen

Die Ermäßigungen unterscheiden sich je nach Land, in dem man mit GySEV unterwegs ist.

### Ungarn

Bei öffentlichen Tarifen fahren Kinder bis 6 Jahren kostenlos. Kinder bis 14 Jahre können 50% Ermäßigung auf den Erwachsenenfahrpreis erhalten. Personen ab 14 Jahre zahlen den Erwachsenenpreis.

### Österreich

Bei öffentlichen Tarifen fahren Kinder bis 6 Jahren kostenlos. Kinder bis 15 Jahre können 50% Ermäßigung auf den Erwachsenenfahrpreis erhalten. Personen ab 15 Jahre zahlen den Erwachsenenpreis.

## Tarifliche Besonderheiten

### Busverkehr

FIP Vergünstigungen sind nicht gültig auf Busverbindungen der GySEV.

### Fahrtunterbrechung

Im Falle einer Fahrtunterbrechung muss das Ticket an dem Bahnhof, an dem die Unterbrechung erfolgt, abgestempelt werden.

## Quellen

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#Tips)

[^2]: [GySEV Support Neusiedel am See - Pamhagen](https://github.com/fipguide/fipguide.github.io/issues/278)
