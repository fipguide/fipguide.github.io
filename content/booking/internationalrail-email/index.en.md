---
draft: false
title: "International Rail Ltd. Email"
description: "Booking information for booking by email with International Rail Ltd."

params:
  fip_global_fare: true
  fip_50: true
  fip_75: true
  type: "email"
  fee: £ 10
  email_templates:
    fip_global_fare:
      to: "uktravel@bookmyrst.co.uk"
      subject: "FIP Global Fare booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP Global Fare ticket.

        Travel date: [Travel date]
        Preferred departure time: [Preferred departure time]
        Departure station: [Departure station]
        Destination station: [Destination station]
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
      to: "uktravel@bookmyrst.co.uk"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP 50 Ticket.

        Travel date: [Travel date]
        Preferred departure time: [Preferred departure time]
        Departure station: [Departure station]
        Destination station: [Destination station]
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
aliases:
  - uk_mail
  - uk-mail
---

{{% booking-section "fip_global_fare" %}}

## FIP Global Fare

FIP Global Fare tickets can be purchased via International Rail Ltd. To do so, send an email to [uktravel@bookmyrst.co.uk](mailto:uktravel@bookmyrst.co.uk). Booking is only possible in English. The following information must be provided when booking:

- Date and time of travel
- Departure and destination station
- Number of passengers
- Class of travel (according to FIP Card entitlement)
- Photo of the FIP Card for all traveling persons

{{% /booking-section %}}

{{% booking-section "fip_50" %}}

## FIP 50 Tickets

FIP 50 tickets can be purchased via International Rail Ltd. To do so, send an email to [uktravel@bookmyrst.co.uk](mailto:uktravel@bookmyrst.co.uk). Booking is only possible in English. The following information must be provided when booking:

- Date and time of travel
- Departure and destination station
- Number of passengers
- Class of travel (according to FIP Card entitlement)
- Photo of the FIP Card for all traveling persons

{{% /booking-section %}}

**A booking fee of £ 10 is charged per booking.**
