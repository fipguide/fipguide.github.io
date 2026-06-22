---
draft: false
title: "Stena Line Email"
description: "Booking information for booking by email with Stena Line BV"
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

        Travel date: [Travel date]
        Travel time: [Travel time]
        Departure port: [Departure port]
        Destination port: [Destination port]
        Cabin type: [Cabin type (Standard, Superior or Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
            Passport number and expiry date: [Passport number and expiry date]
          Passenger 2:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
            Passport number and expiry date: [Passport number and expiry date]
          [... Add or remove passengers if needed]
        Additional information: [Additional information]

        Copy/copies of the FIP Card(s) (front and back) for all travelers are attached.

        [Attach copy/copies of the FIP Card(s) (front and back) for all travelers]

        Thank you in advance.
        Kind regards,

        [Your name]
    reservations:
      to: "contact.nl@stenaline.com"
      subject: "Reservation booking request"
      body: |-
        Hello,

        I would like to book a reservation.
        Please find my details below:

        Travel date: [Travel date]
        Travel time: [Travel time]
        Departure port: [Departure port]
        Destination port: [Destination port]
        Cabin type: [Cabin type (Standard, Superior or Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
            Passport number and expiry date: [Passport number and expiry date]
          Passenger 2:
            Name: [Name (as in passport)]
            Date of birth: [Date of birth]
            Passport number and expiry date: [Passport number and expiry date]
          [... Add or remove passengers if needed]
        FIP Coupon number(s): [Stena Line BV FIP Coupon number(s) used for the journey]
        Additional information: [Additional information]

        Thank you in advance.
        Kind regards,

        [Your name]

aliases:
  - stena-line-email
---

Booking Stena Line is easy via email. Simply send an email in English or Dutch to [contact.nl@stenaline.com](mailto:contact.nl@stenaline.com).
The email must contain the following information:

- Travel date and time
- Date of birth
- Cabin type (Standard, Superior or Deluxe)
- Name of travellers as stated on their passports
- Passport number and expiry date
- **Only for FIP 50 Tickets:** Copy/copies of the FIP Card(s) (front and back) for all travelers
- **Only for reservations with FIP Coupon:** Number of the Stena Line BV FIP Coupon to be used for the journey

You will usually receive two reply emails from Stena Line. The first email confirms your booking request. The second email provides you with a payment option via pay per link. You will then need to enter your credit card details.
After payment, you will receive an email with your booking confirmation, which also serves as your ticket – you must of course bring your FIP tickets with you.

{{% highlight important %}}
Payment via pay per link is only possible on the same day that the corresponding payment request email is received. The link expires at midnight. If this is the case, please contact Stena Line again.
{{% /highlight %}}

{{% booking-section "fip_50" %}}

## FIP 50 Tickets

FIP 50 Tickets can be booked.

{{% /booking-section %}}

{{% booking-section "reservations" %}}

## Reservations

Cabin reservations are available and mandatory for overnight journeys.

{{% highlight warning %}}
For reservations, the number of the Stena Line BV FIP Coupon to be used for the journey is also required. Booking is therefore only possible once the FIP Coupon is available.
{{% /highlight %}}

{{% /booking-section %}}
