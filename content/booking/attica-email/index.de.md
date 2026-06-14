---
draft: false
title: "Attica E-Mail"
description: "Buchungsinformationen für die Buchung per E-Mail bei Attica."
params:
  fip_50: true
  reservations: false
  type: "email"
  email_templates:
    fip_50:
      to: "helpdesk@attica-group.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket. I attach the completed FIP reservation form to this email.

        Number of passengers: [Anzahl Reisende]
        Passengers:
          Passenger 1:
            Name: [Name (as in passport)]
          Passenger 2:
            Name: [Name (as in passport)]
          [... Reisende bei Bedarf hinzufügen oder entfernen]

        [Reservierungsformular als Anhang beifügen]

        Thank you in advance.
        Kind regards,

        [Dein Name]
---

FIP 50 Tickets können per E-Mail bestellt werden.
Hierzu muss das [FIP Reservierungsformular](https://www.raildeliverygroup.com/files/Publications/services/rst/RST_90032_Attica.xls) ausgefüllt und an folgende E-Mail-Adresse gesendet werden:

helpdesk@attica-group.com
