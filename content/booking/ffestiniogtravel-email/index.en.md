---
draft: false
title: "Ffestiniog Travel Email"
description: "Booking information for booking by email with Ffestiniog Travel."
params:
  fee: 12 % p.p. (min. £ 5, max. £ 60)
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

        Travel date: [Travel date]
        Preferred departure time: [Preferred departure time]
        Departure station: [Departure station]
        Destination station: [Destination station]
        Travel direction: [Travel direction]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
          Passenger 2:
            Name: [Name (as in passport)]
          [... Add or remove passengers if needed]
        Class (according to FIP Card entitlement): [Class (according to FIP Card entitlement)]
        Additional information: [Additional information]

        Photo(s) of the FIP Card(s) for all travelers are attached.

        [Attach photo(s) of the FIP Card(s) for all travelers]

        Thank you in advance.
        Kind regards,

        [Your name]
    fip_50:
      to: "rail@ffestiniogtravel.co.uk"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP 50 Ticket.

        Travel date: [Travel date]
        Preferred departure time: [Preferred departure time]
        Departure station: [Departure station]
        Destination station: [Destination station]
        Travel direction: [Travel direction]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
          Passenger 2:
            Name: [Name (as in passport)]
          [... Add or remove passengers if needed]
        Class (according to FIP Card entitlement): [Class (according to FIP Card entitlement)]
        Additional information: [Additional information]

        Photo(s) of the FIP Card(s) for all travelers are attached.

        [Attach photo(s) of the FIP Card(s) for all travelers]

        Thank you in advance.
        Kind regards,

        [Your name]
---

Ffestiniog Travel has direct access to the booking systems of many railway operators and can offer tickets for many trains in Europe.
Exceptions are France (SNCF) and Norway (Vy Group).

On request, staff create a suitable offer for the journey:

- The request should be sent in English to the following email address: [rail@ffestiniogtravel.co.uk](mailto:rail@ffestiniogtravel.co.uk)
- Initially, a photo of your FIP Card (or Staff Travel Card for Safeguarded) must be sent.
- **A booking fee of 12 % per person of the booking value applies (minimum £5, maximum £60).**

{{% booking-section "fip_global_fare" %}}

## FIP Global Fare

Eurostar tickets can be purchased via Ffestiniog Travel.

{{% /booking-section %}}

## Sources

[Feedback: FIP reduced Ticket booking](https://github.com/fipguide/fipguide.github.io/issues/710)
