---
draft: false
title: 'CP Ticketschalter'
description: 'Buchungsinformationen für die CP Ticketschalter.'
params:
    classes:
        first: "5,00€"
        second: "X.XX€"
    fip_50: true # Definiere, ob FIP 50 Tickets bei dem Buchungsanbieter gebucht werden können.
    fip_global_fare: true # Definiere, ob FIP Globalpreise bei dem Buchungsanbieter gebucht werden können.
    reservations: true
    additional_info_link: "https://www.cp.pt/passageiros/en/buy-tickets/Sales-points/ticket-offices"
    type: "onsite"
---

{{% booking-section "fip_50" %}}
**FIP 50 Fahrkarten**

<!--
    Erkläre hier die Buchungswege, um FIP 50 Tickets zu erwerben.
-->
{{% /booking-section %}}

{{% booking-section "fip_global_fare" %}}
**FIP Globalpreis**

<!--
    Erkläre hier die Buchungswege, um FIP Globalpreise zu erwerben.
-->
{{% /booking-section %}}

{{% booking-section "reservations" %}}
**Reservierungen**

Reservierungen für reservierungspflichtige Züge können zu einem Preis von 5€ erworben werden.
{{% /booking-section %}}
