---
draft: false
title: 'CP Ticket Office'
description: 'Booking information for the CP ticket offices.'
params:
    classes:
        # Define classes and prices for the corresponding reservations.
        # Make sure that each class exists under `booking.classes` in i18n.
        first: "€5,00"
        second: "€5,00"
    fip_50: true # Define if FIP 50 tickets can be booked with this booking platform
    fip_global_fare: false # Define if FIP Global Fare tickets can be booked with this booking platform
    reservations: true # Define if reservations can be booked with this booking platform
    additional_info_link: "https://www.cp.pt/info/en/w/ticket-offices" # Add a link with additional information
    type: "onsite" # Accepted types are: website, onsite, phone, email and machine
---

{{% booking-section "fip_50" %}}
**FIP 50 tickets**

At CP ticket offices you can purchase FIP 50 tickets for travel within Portugal. The ticket price is calculated on site using the fare calculator.
{{% /booking-section %}}

{{% booking-section "fip_global_fare" %}}
**FIP Global Fare**

FIP Global Fare tickets are not sold at CP ticket offices. For the Celta international service a special FIP Global Fare applies and tickets must be purchased via Spanish sales channels (see CP operator page for details).
{{% /booking-section %}}


{{% booking-section "reservations" %}}
**Reservations**

Reservations for reservation-required trains (e.g. AP and IC) can be purchased at the ticket office on site. A reservation fee of 5€ applies.
{{% /booking-section %}}
