---
draft: false
title: "Stena Line Limited Email"
description: "Booking information for booking by email with Stena Line Limited"
params:
  fip_50: true
  fip_global_fare: nil
  reservations: true
  type: "email"
  mail_templates:
    fip_50:
      to: "info.cherbourg@stenaline.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket.
        Please find my details below:

        Travel date: [Travel date]
        Travel route: [Travel route]
        Number of passengers: [Number of passengers]
        Class: [Class]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
          Passenger 2:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
          [... Add or remove passengers if needed]
        Additional information: [Additional information]

        Thank you in advance.
        Kind regards,

        [Your name]
    reservations:
      to: "info.cherbourg@stenaline.com"
      subject: "Reservation booking request"
      body: |-
        Hello,

        I would like to book a reservation.
        Please find my details below:

        Travel date: [Travel date]
        Travel time: [Travel time]
        Travel route: [Travel route]
        Number of passengers: [Number of passengers]
        Class: [Class]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
          Passenger 2:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
          [... Add or remove passengers if needed]
        Additional information: [Additional information]

        Thank you in advance.
        Kind regards,

        [Your name]
---

Booking with Stena Line is easily possible via email. To do so, send an email to [info.cherbourg@stenaline.com](mailto:info.cherbourg@stenaline.com).[^1]
The email must contain the following information:

- First and last name of passengers
- Date of birth of passengers
- Travel date
- Travel route (e.g. Cairnryan – Belfast)
- Class category

You will usually receive two reply emails from Stena Line. The first email confirms your booking request. The second email provides you with a payment option via pay per link. You will then need to enter your credit card details.
After payment, you will receive an email with your booking confirmation, which also serves as your ticket – you must of course bring your FIP tickets with you.

{{% booking-section "fip_50" %}}

## FIP 50 Tickets

FIP 50 Tickets can be booked.

{{% /booking-section %}}

## Sources

[^1]: [FIP Guide Community - Feedback](https://discord.com/channels/1250522473188032512/1433789686039707688/1481942947917467669)
