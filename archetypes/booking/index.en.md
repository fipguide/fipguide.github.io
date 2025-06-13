---
draft: false
title: '{{ .File.ContentBaseName | title }}' # Change the title to the name of the booking platform
params:
    classes:
        # Define classes and prices for the corresponding reservations.
        # Make sure that each class exists under `booking.classes` in i18n.
        first: "X.XX€"
        second: "X.XX€"
    fip_50: true # Define if FIP 50 tickets can be booked with this booking platform
    fip_global_fare: true # Define if FIP global fare tickets can be booked with this booking platform
    reservations: true # Define if reservations can be booked with this booking platform
    booking_link: "https://example.com" # Add a link to the booking platform
    additional_info_link: "https://example.com/additional-info" # Add a link with additional information
    type: "onsite" # Accepted types are: website, onsite, phone and email
---

{{% booking-section "fip_50" %}}
**FIP 50 Fahrkarten**

<!--
    Explain the steps for booking FIP 50 tickets with this booking platform.
-->
{{% /booking-section %}}

{{% booking-section "fip_global_fare" %}}
**FIP Global Fare**

<!--
    Explain the steps for booking FIP global fares with this booking platform.
-->
{{% /booking-section %}}


{{% booking-section "reservations" %}}
**Reservierungen**

<!--
    Explain the steps for booking reservations with this booking platform.
-->
{{% /booking-section %}}
