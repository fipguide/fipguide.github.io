---
draft: false
title: "Stena Line Limited E-Mail"
description: "Buchungsinformationen für die Buchung per E-Mail bei Stena Line Limited"
params:
  fip_50: true
  fip_global_fare: nil
  reservations: true
  type: "email"
  email_templates:
    fip_50:
      to: "info.cherbourg@stenaline.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket.
        Please find my details below:

        Travel date: [Reisedatum]
        Departure port: [Abfahrtshafen]
        Destination port: [Zielhafen]
        Cabin type: [Kabinentyp (Standard, Superior oder Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
          Passenger 2:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
          [... Reisende bei Bedarf hinzufügen oder entfernen]
        Additional information: [Zusätzliche Angaben]

        Thank you in advance.
        Kind regards,

        [Dein Name]
    reservations:
      to: "info.cherbourg@stenaline.com"
      subject: "Reservation booking request"
      body: |-
        Hello,

        I would like to book a reservation.
        Please find my details below:

        Travel date: [Reisedatum]
        Travel time: [Reisezeit]
        Departure port: [Abfahrtshafen]
        Destination port: [Zielhafen]
        Cabin type: [Kabinentyp (Standard, Superior oder Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
          Passenger 2:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
          [... Reisende bei Bedarf hinzufügen oder entfernen]
        FIP Coupon number(s): [Nummer(n) des Stena Line BV FIP Freifahrtscheins, der/die bei der Fahrt genutzt werden soll(en)]
        Additional information: [Zusätzliche Angaben]

        Thank you in advance.
        Kind regards,

        [Dein Name]
---

Die Buchung der Stena Line ist per E-Mail unkompliziert möglich. Hierzu ist eine Mail an [info.cherbourg@stenaline.com](mailto:info.cherbourg@stenaline.com) zu schicken.[^1]
In der Mail sind folgende Daten anzugeben:

- Vor- und Nachname der Reisenden
- Geburtsdatum der Reisenden
- Reisedatum
- Abfahrtshafen
- Zielhafen
- Kabinentyp (Standard, Superior oder Deluxe)
- **Nur für FIP 50 Tickets:** Kopie(n) der FIP-Ausweise (Vorder- und Rückseite) aller Reisenden
- **Nur für Reservierungen mit FIP Freifahrtschein:** Nummer des Stena Line BV FIP Freifahrtscheins, der bei der Fahrt genutzt werden soll

Von Stena Line erhält man in der Regel zwei Antwortmails. In der ersten Mail wird die Buchungsanfrage bestätigt. In der zweiten Mail erhält man eine Bezahloption über pay per link. Hier sind dann die Kreditkartendaten zu hinterlegen.
Nach Bezahlung bekommst du eine Mail mit der Resevierungsbestätigung, die auch als Ticket gilt – die FIP Fahrkarten sind natürlich mitzuführen.

{{% booking-section "fip_50" %}}

## FIP 50 Fahrkarten

FIP 50 Tickets können gebucht werden.

{{% /booking-section %}}

## Reservierungen

Kabinenreservierungen sind optional erhältlich.

{{% highlight warning %}}
Für Reservierungen ist außerdem die Nummer des Stena Line BV FIP Freifahrtscheins erforderlich, der bei der Fahrt genutzt werden soll. Eine Buchung ist daher erst möglich, sobald der FIP Freifahrtschein vorliegt.
{{% /highlight %}}

## Quellen

[^1]: [FIP Guide Community - Feedback](https://discord.com/channels/1250522473188032512/1433789686039707688/1481942947917467669)
