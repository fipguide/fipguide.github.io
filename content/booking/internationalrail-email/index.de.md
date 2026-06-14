---
draft: false
title: "International Rail Ltd. E-Mail"
description: "Buchungsinformationen für die Buchung per E-Mail bei International Rail Ltd."

params:
  fip_global_fare: true
  fip_50: true
  fip_75: true
  type: "email"
  fee: 10 £
  email_templates:
    fip_global_fare:
      to: "uktravel@bookmyrst.co.uk"
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

    fip_50:
      to: "uktravel@bookmyrst.co.uk"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP 50 Ticket.

        Travel date: [Reisedatum]
        Preferred departure time: [Gewünschte Abfahrtszeit]
        Departure station: [Abfahrtsbahnhof]
        Destination station: [Zielbahnhof]
        Travel direction: [Fahrtrichtung]
        Number of passengers: [Anzahl Reisende]
        Passengers:
          Passenger 1:
            Name: [Name (wie im Reisepass)]
          Passenger 2:
            Name: [Name (wie im Reisepass)]
          [... Reisende bei Bedarf hinzufügen oder entfernen]
        Class (according to FIP Card entitlement): [Klasse (laut FIP-Ausweisberechtigung)]
        Additional information: [Zusätzliche Angaben]

        Photo(s) of the FIP Card(s) for all travelers are attached.

        [Foto(s) der FIP-Ausweise aller Reisenden als Anhang beifügen]

        Thank you in advance.
        Kind regards,

        [Dein Name]

aliases:
  - uk_mail
  - uk-mail
---

{{% booking-section "fip_global_fare" %}}

## FIP Globalpreis

Über International Rail Ltd. können FIP Globalpreistickets erworben werden. Dazu muss eine Mail an [uktravel@bookmyrst.co.uk](mailto:uktravel@bookmyrst.co.uk) gesendet werden. Die Buchung ist nur in Englisch möglich. Bei der Buchung müssen folgende Angaben gemacht werden:

- Reisetag und Zeit
- Abfahrts- und Zielbahnhof
- Anzahl der Fahrgäste
- Reiseklasse (analog Berechtigung des FIP-Ausweises)
- Foto des FIP Ausweises aller reisender Personen

{{% /booking-section %}}

{{% booking-section "fip_50" %}}

## FIP 50 Fahrkarten

Über International Rail Ltd. können FIP 50 Fahrkarten erworben werden. Dazu muss eine Mail an [uktravel@bookmyrst.co.uk](mailto:uktravel@bookmyrst.co.uk) gesendet werden. Die Buchung ist nur auf Englisch möglich. Bei der Buchung müssen folgende Angaben gemacht werden:

- Reisetag und Zeit
- Abfahrts- und Zielbahnhof
- Anzahl der Fahrgäste
- Reiseklasse (analog Berechtigung des FIP-Ausweises)
- Foto des FIP Ausweises aller reisender Personen

{{% /booking-section %}}

**Pro Buchung wird eine Buchungsgebühr von 10 £ erhoben.**
