---
draft: false
title: MÁV Website
description: Buchungsinformationen für Buchungswebsite und -app der MÁV.
params:
  classes:
    first: 990 HUF
    second: 990 HUF
  fip_50: true
  reservations: true
  booking_link: https://jegy.mav.hu/?lang=en
  type: online
---

Auf der Buchungswebsite der MÁV werden FIP 50 Tickets und Reservierungen für Verbindungen der MÁV und GySEV verkauft.

Die MÁV bietet auch eine [App](https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/mav-applikacio) an, über welche FIP 50 Tickets und Reservierungen gekauft werden können.

{{% booking-section "fip_50" %}}

## FIP 50 Fahrkarten

Auf der Buchungswebsite der MÁV werden FIP 50 Tickets für Verbindungen der MÁV und GySEV verkauft, bei internationalen Verbindungen wird jedoch nur der ungarische Abschnitt rabattiert.

Wie der Rabatt in der Verbindungsauskunft hinterlegt werden kann, wird im Abschnitt [Rabatt auswählen](#mav-website:rabatt-auswählen) beschrieben.

| <div style="width:105px">Fahrt</div> | Klassenberechtigung gem. FIP Ausweis | 2. Klasse                                   | 1. / 1+ Klasse                                 |
| ------------------------------------ | ------------------------------------ | ------------------------------------------- | ---------------------------------------------- |
| National                             | 1. Klasse                            | „FIP 50% domestic discount 1st class (50%)" | „FIP 50% domestic discount 1st class (50%)"    |
| National                             | 2. Klasse                            | „FIP 50% domestic discount 2nd class (50%)" | „FIP 50% domestic discount 2nd class (50%)" \* |
| International                        | 1. Klasse                            | „FIP 50% domestic discount (50%)" †         | „FIP 50% domestic discount (50%)" †            |
| International                        | 2. Klasse                            | „FIP 50% domestic discount (50%)" †         | Nicht online verfügbar                         |

† Bei internationalen Fahrten wird der FIP-50-Rabatt nur für den ungarischen Abschnitt angewendet.\
\* Der Klassenzuschlag (_különbözeti díj_) wird automatisch zum Preis hinzugerechnet. Es muss keine separate Option ausgewählt werden.[^1]

{{% /booking-section %}}

{{% booking-section "reservations" %}}

## Reservierungen

Reservierungen für Züge der MÁV sowie GySEV können Online zu einem Preis von 990 HUF erworben werden.

Die richtige Rabattoption kann der folgenden Tabelle entnommen werden. Wie der Rabatt in der Verbindungsauskunft hinterlegt werden kann, wird im Abschnitt [Rabatt auswählen](#mav-website:rabatt-auswählen) beschrieben.

| <div style="width:105px">Fahrt</div> | Freifahrtscheinklasse | 2. Klasse                           | 1. / 1+ Klasse                                             |
| ------------------------------------ | --------------------- | ----------------------------------- | ---------------------------------------------------------- |
| National                             | 1. Klasse             | „I only need seat reservation"      | „International ticket or pass, 1st class (free-of-charge)" |
| National                             | 2. Klasse             | „I only need seat reservation"      | „I only need seat reservation" \*                          |
| International                        | 1. Klasse             | „FIP free ticket (leisure journey)" | „FIP free ticket (leisure journey)"                        |
| International                        | 2. Klasse             | „FIP free ticket (leisure journey)" | nicht online verfügbar                                     |

\* Der Klassenzuschlag (_különbözeti díj_) wird automatisch zum Preis hinzugerechnet. Es muss keine separate Option ausgewählt werden.[^1]

Für internationale Fahrten mit FIP Freifahrtscheinen müssen Freifahrtscheine für alle Betreiber entlang der Route vorliegen (z. B. für Budapest–Wien sowohl ein MÁV- als auch ein ÖBB-Freifahrtschein). Wenn ein Freifahrtschein nur für ein Land vorliegt, ist die Buchung von durchgängigen grenzüberschreitenden Verbindungen über die MÁV-Website nicht möglich. Eine Buchung zu Grenztarifpunkten ist ebenfalls nicht über die Website möglich.

## Rabatt auswählen

### Rabattoptionen auswählen

{{% float-image
  src="mav-website-birthday.webp"
  alt="MÁV Geburtsdatum"
  width="50%"
  position="right"
%}}
Um eine Rabattoption hinzuzufügen, muss auf der Startseite der Verbindungssuche unter _Passengers and Discounts_ die Übersicht der Reisenden geöffnet werden. Erst nachdem das Geburtsdatum eingegeben wurde, kann mit _Add Discounts_ die Ermäßigung hinzugefügt werden.
{{% /float-image %}}

{{% float-image
  src="mav-website-discounts.webp"
  alt="MÁV Ermäßigungen"
  width="50%"
  position="right"
%}}
Hier kann nun die Rabattoption ausgewählt werden und mit OK bestätigt werden.
{{% /float-image %}}

### Reservierungen buchen

{{% float-image
  src="only-seat-reservation.webp"
  width="50%"
  position="right"
%}}
Die Option „I only need seat reservation" ist in den Verbindungsinformationen zu finden. Bei FIP 50 Tickets wird die Reservierung bei reservierungspflichtigen Zügen automatisch ergänzt und mit berechnet.
{{% /float-image %}}

{{< highlight "important" >}}

Die Option „FIP egyországos szabadjegy" wird möglicherweise noch im MÁV-System angezeigt. Es handelt sich um einen veralteten Eintrag, der **nicht verwendet werden darf**, auch wenn eine Info-Box behauptet, dass er für internationale Fahrten nicht gültig ist. Die MÁV arbeitet an der Entfernung.[^1]

{{< /highlight >}}

{{% /booking-section %}}

[^1]: [Feedback about MAV booking website](https://github.com/fipguide/fipguide.github.io/issues/1178)
