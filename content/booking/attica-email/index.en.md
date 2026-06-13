---
draft: false
title: "Attica Email"
description: "Booking information for booking by email with Attica."
params:
  fip_50: true
  reservations: false
  type: "email"
  mail_templates:
    fip_50:
      to: "helpdesk@attica-group.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket. I attach the completed FIP reservation form to this email.

        Number of passengers: [Number of passengers]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
          Passenger 2:
            Name: [Name (as in passport)]
          [... Add or remove passengers if needed]

        [Attach the completed FIP reservation form]

        Thank you in advance.
        Kind regards,

        [Your name]
---

FIP 50 Tickets can be ordered by email.
To do so, the [FIP reservation form](https://www.raildeliverygroup.com/files/Publications/services/rst/RST_90032_Attica.xls) must be completed and sent to the following email address:

helpdesk@attica-group.com
