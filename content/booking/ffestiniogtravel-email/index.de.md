---
draft: false
title: "Ffestiniog Travel E-Mail"
description: "Buchungsinformationen für die Buchung per E-Mail bei Ffestiniog Travel."
params:
  fee: 12 % p. P. (min. 5 £, max. 60 £)
  fip_50: true
  fip_global_fare: true
  type: "email"
  email_templates:
    fip_global_fare:
      to: "rail@ffestiniogtravel.co.uk"
      subject: "FIP Global Fare booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP Global Fare ticket.

        Travel date: [Reisedatum]
        Preferred departure time: [Gewünschte Abfahrtszeit]
        Departure station: [Abfahrtsbahnhof]
        Destination station: [Zielbahnhof]
        Travel direction: [Fahrtrichtung]
        Number of passengers: [Anzahl Reisende]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
          Passenger 2:
            Name: [Name (as in passport)]
          [... Reisende bei Bedarf hinzufügen oder entfernen]
        Class (according to FIP Card entitlement): [Klasse (laut FIP-Ausweisberechtigung)]
        Additional information: [Zusätzliche Angaben]

        Photo(s) of the FIP Card(s) for all travelers are attached.

        [Foto(s) der FIP-Ausweise aller Reisenden als Anhang beifügen]

        Thank you in advance.
        Kind regards,

        [Dein Name]
---

Ffestiniog Travel hat direkten Zugriff auf die Buchungssysteme vieler Bahnbetreiber und kann Tickets für viele Züge in Europa anbieten.
Ausnahmen sind Frankreich (SNCF) und Norwegen (Vy Group).

Auf Anfrage erstellen die Mitarbeitenden das passende Angebot für die Reise:

- Die Anfrage ist auf englisch an folgende E-Mail-Adresse zu richten: [rail@ffestiniogtravel.co.uk](mailto:rail@ffestiniogtravel.co.uk)
- Initial muss ein Foto des FIP-Ausweises (bzw. Staff Travel Card für Safeguarded) mitgeschickt werden.
- **Es fällt eine Buchungsgebühr pro Person von 12 % des Buchungswertes an (mindestens 5 £, maximal 60 £).**

{{% booking-section "fip_global_fare" %}}

## FIP Globalpreis

Über Ffestiniog Travel können Eurostar-Tickets erworben werden.

{{% /booking-section %}}

## Quellen

[Feedback: FIP reduced Ticket booking](https://github.com/fipguide/fipguide.github.io/issues/710)
