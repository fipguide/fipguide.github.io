---
draft: false
title: '{{ .File.ContentBaseName | title }}' # Change the title to the name of the booking platform
params:
    classes:
        # Define classes and prices for the corresponding reservations.
        # Make sure that each class exists under `booking.classes` in i18n.
        first: "X.XX€"
        second: "X.XX€"
    fip_50: true # Define if FIP 50 Tickets can be booked with this booking platform
    reservations: true # Define if Reservations can be booked with this booking platform
    link: "https://example.com" # Add a link to the booking platform
    type: "onsite" # Accepted types are: website, onsite, phone and email
---

**FIP 50 Fahrkarten**

<!--
    Explain the steps for booking FIP 50 Tickets with this booking platform.
-->

**Reservierungen**

<!--
    Explain the steps for booking reservations with this booking platform.
-->
