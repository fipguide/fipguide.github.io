---
draft: false
title: "{{ .File.ContentBaseName | upper }}"
description: "" # Add a description for the railway company
country:
  # Add the abbreviations of the countries the railway company operates in.
  - "country1"
  - "country2"
  - "country3"
operator: "{{ .File.ContentBaseName }}"
---

<!-- Remove the WIP snippet if the page is complete -->

{{< wip >}}

<!--
  Short description of the railway company. For example, the full name in the local language, alternative names, and information about whether it is a private or state railway.
-->

## Summary

<!--
  Bullet point summary of the most important features/FIP regulations of the railway company.
  For example:
  - Are FIP 50 and FIP Coupons accepted?
  - Is there a reservation requirement?
  - Are there any other special tariff regulations or deviations from other FIP railway companies?
-->

## Validity of FIP Tickets

<!--
  The ticket categories may vary depending on the operator.
-->

FIP Coupon: <✅/⛔> \
FIP Coupon for relatives: <✅/⛔> \
FIP 50 Tickets: <✅/⛔> \
FIP Global Fare: <✅/⛔>

<!--
  Where are FIP 50 tickets/FIP Coupons valid and are there any restrictions? Which ticket is required for entry (e.g., continuous FIP 50 ticket or FIP Coupons of both countries)?
-->

## Train Categories and Reservations

<!--
  Are reservations possible and where is there a reservation requirement?
-->

<!--
  For each train category, a separate section can be added according to the following principle:
  In the title, the following emojis can be used:
  - ⚠️ for a general reservation requirement or supplements
  - 1️⃣ for a reservation requirement in 1st class
  - ⛔ for a non-acceptance of FIP
  - ℹ️ for confusion with other railway companies/train categories
-->

{{% expander "Train category" traincategory "category" %}}

<!-- Replace "Train category" with the name of the category, e.g. ICE. -->

**Description:**

<!-- Description of the category -->

**Reservation possible:** <yes/no> \
**Reservation required:** <⚠️ yes/no/⚠️1️⃣ only first class> \

<!-- If FIP is not valid, add the following:
**FIP:** ⛔ FIP is not accepted
-->
<!-- If there are FIP Global Fares, add the following:
**FIP Global Fare:**
-->

{{% /expander %}}

## Class Categories

<!--
  If the class categories include additional/different classes beyond 1st and 2nd class, they can be described here. Otherwise, this section can be removed.
-->

<!--
**Standard**: Comparable to 2nd class. \
**Plus**: 1st class without catering. An FIP pass for 1st class is required. \
**Premium**: 1st class including catering. Not bookable with FIP.
-->

## Ticket and Reservation Purchase

### Online

<!--
  Embed the information of a defined booking platform here.

  You can overwrite individual booking parameters as listed below, but you don't have to.
  If you leave some parameters out, the defined defaults of the booking platform will be used.

  For more information how to define a booking platform, check the booking archetype.
-->

{{% booking id="booking_id"
    subtitle="This subtitle is displayed in the summary of the expander and should not take too much space."
    reservations=nil
    fip_50=false
    fip_global_fare=true
    classes.first="€20"
    classes.second="€10"
%}}

<!-- This is an information text that can contain country specific information and is displayed in the expanded part. -->

{{% /booking %}}

### Telephone

<!--
  Embed additional booking platforms with booking via telephone here.
-->

### On-Site

<!--
  Embed additional booking platforms with booking on site here.
-->

### On the Train

<!--
  Can tickets with FIP discount still be purchased on the train, if so how and is there a surcharge?
-->

## Discounts

<!--
  What discounts can children receive and under what circumstances?
  What other discounts might there be?
-->

## Special Tariff Conditions

### <Route or Name>

<!--
  Description of the special condition, if there are special regulations on certain routes.
-->

## Recommendations

<!--
  Personal recommendations and special personal tips for the trip
-->

## Sources

[^1]: [<Source Name 1>](Link)

[^2]: [<Source Name 2>](Link)
