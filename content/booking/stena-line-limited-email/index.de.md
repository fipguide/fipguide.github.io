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
        Travel route: [Reiseroute]
        Number of passengers: [Anzahl Reisende]
        Class: [Klasse]
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
        Travel route: [Reiseroute]
        Number of passengers: [Anzahl Reisende]
        Class: [Klasse]
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
---

Die Buchung der Stena Line ist per E-Mail unkompliziert möglich. Hierzu ist eine Mail an [info.cherbourg@stenaline.com](mailto:info.cherbourg@stenaline.com) zu schicken.[^1]
In der Mail sind folgende Daten anzugeben:

- Vor- und Nachname der Reisenden
- Geburtsdatum der Reisenden
- Reisedatum
- Reiseroute (z.B. Cairnryan – Belfast)
- Klassenkategorie

Von Stena Line erhält man in der Regel zwei Antwortmails. In der ersten Mail wird die Buchungsanfrage bestätigt. In der zweiten Mail erhält man eine Bezahloption über pay per link. Hier sind dann die Kreditkartendaten zu hinterlegen.
Nach Bezahlung bekommst du eine Mail mit der Resevierungsbestätigung, die auch als Ticket gilt – die FIP Fahrkarten sind natürlich mitzuführen.

{{% booking-section "fip_50" %}}

## FIP 50 Fahrkarten

FIP 50 Tickets können gebucht werden.

{{% /booking-section %}}

## Quellen

[^1]: [FIP Guide Community - Feedback](https://discord.com/channels/1250522473188032512/1433789686039707688/1481942947917467669)
