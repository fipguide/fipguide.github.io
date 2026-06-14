---
draft: false
title: "Stena Line BV E-Mail"
description: "Buchungsinformationen für die Buchung per E-Mail bei Stena Line BV"
params:
  fip_50: true
  fip_global_fare: nil
  reservations: true
  type: "email"
  email_templates:
    fip_50:
      to: "contact.nl@stenaline.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket.
        Please find my details below:

        Travel date: [Reisedatum]
        Travel time: [Uhrzeit]
        Travel direction: [Fahrtrichtung (Harwich -> Hoek van Holland oder Hoek van Holland -> Harwich)]
        Number of passengers: [Anzahl Reisende]
        Cabin type: [Kabinentyp (Standard, Superior oder Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
            Passport number and expiry date: [Reisepassnummer und Gültigkeitsdatum]
          Passenger 2:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
            Passport number and expiry date: [Reisepassnummer und Gültigkeitsdatum]
          [... Reisende bei Bedarf hinzufügen oder entfernen]
        Additional information: [Zusätzliche Informationen]

        Copy/copies of the FIP Card(s) (front and back) for all travelers are attached.

        [Kopie(n) der FIP-Ausweise (Vorder- und Rückseite) aller Reisenden als Anhang beifügen]

        Thank you in advance.
        Kind regards,

        [Dein Name]
    reservations:
      to: "contact.nl@stenaline.com"
      subject: "Reservation booking request"
      body: |-
        Hello,

        I would like to book a reservation.
        Please find my details below:

        Travel date: [Reisedatum]
        Travel time: [Uhrzeit]
        Travel direction: [Fahrtrichtung (Harwich -> Hoek van Holland oder Hoek van Holland -> Harwich)]
        Number of passengers: [Anzahl Reisende]
        Cabin type: [Kabinentyp (Standard, Superior oder Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
            Passport number and expiry date: [Reisepassnummer und Gültigkeitsdatum]
          Passenger 2:
            Name: [Name (wie im Reisepass)]
            Date of birth: [Geburtsdatum]
            Passport number and expiry date: [Reisepassnummer und Gültigkeitsdatum]
          [... Reisende bei Bedarf hinzufügen oder entfernen]
        FIP Coupon number(s): [Nummer(n) des Stena Line BV FIP Freifahrtscheins, der/die bei der Fahrt genutzt werden soll(en)]
        Additional information: [Zusätzliche Informationen]

        Thank you in advance.
        Kind regards,

        [Dein Name]

aliases:
  - stena-line-email
---

Die Buchung der Stena Line ist per E-Mail unkompliziert möglich. Hierzu ist eine Mail auf englisch oder niederländisch an [contact.nl@stenaline.com](mailto:contact.nl@stenaline.com) zu schicken.
In der Mail sind folgende Daten anzugeben:

- Reisedatum und Uhrzeit
- Geburtsdatum
- Kabinentyp (Standard, Superior oder Deluxe)
- Name der Reisenden wie auf dem Reisepass
- Reisepassnummer und Gültigkeitsdatum
- **Nur für FIP 50 Tickets:** Kopie(n) der FIP-Ausweise (Vorder- und Rückseite) aller Reisenden
- **Nur für Reservierungen mit FIP Freifahrtschein:** Nummer des Stena Line BV FIP Freifahrtscheins, der bei der Fahrt genutzt werden soll

Von Stena Line erhält man in der Regel zwei Antwortmails. In der ersten Mail wird die Buchungsanfrage bestätigt. In der zweiten Mail erhält man eine Bezahloption über pay per link. Hier sind dann die Kreditkartendaten zu hinterlegen.
Nach Bezahlung bekommst du eine Mail mit der Reservierungsbestätigung, die auch als Ticket gilt - die FIP Fahrkarten sind natürlich mitzuführen.

{{% highlight important %}}
Die Bezahlung über pay per link ist nur am selben Tag möglich, an dem die entsprechende Mail zur Zahlungsaufforderung erhalten wurde. Der Link verliert um Mitternacht seine Gültigkeit. Sollte dem so sein, ist erneut Kontakt zu Stena Line aufzunehmen.
{{% /highlight %}}

{{% booking-section "fip_50" %}}

## FIP 50 Fahrkarten

FIP 50 Tickets können gebucht werden.

{{% /booking-section %}}

{{% booking-section "reservations" %}}

## Reservierungen

Kabinenreservierungen sind erhältlich und bei Übernachtfahrten obligatorisch.

{{% highlight warning %}}
Für Reservierungen ist außerdem die Nummer des Stena Line BV FIP Freifahrtscheins erforderlich, der bei der Fahrt genutzt werden soll. Eine Buchung ist daher erst möglich, sobald der FIP Freifahrtschein vorliegt.
{{% /highlight %}}

{{% /booking-section %}}
