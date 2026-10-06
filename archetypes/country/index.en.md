---
title: "{{ .File.ContentBaseName | title }}" # Change the name to the English country name
country: "{{ .File.ContentBaseName }}"
params:
  operators_without_fip:
    -  # List operators without FIP here
content_images:
  - "image.webp"
---

<!-- Remove the WIP snippet if the page is complete -->

{{< wip >}}

## FIP Information

<!--
    A short summary text that should answer the following questions in this order:
    - Which FIP Tickets (FIP 50/FIP Coupon tickets) are recognized in the country and by which railway operator?
    - What are the special features of using FIP with the respective railway operator? (Add link to the railway operator)
    - Which railway operators do not recognize FIP Tickets and how can you identify these operators in the connection information?
-->

{{< identify-operator sources="" >}}
{{< /identify-operator >}}

## Interesting

<!--
    A short section about the general train situation in the country. The following topics can be covered, for example:
    - State of the railway network
    - Important connections
    - Quality and condition of the trains
    - Punctuality
    - Frequency
    - Special trains/routes/lines
    - Beautiful train stations
-->

## Arrival and Border Points

<!--
Only border points at the national border with other countries. They are maintained in `content/country/borderpoints.en.yaml` and rendered here automatically as a table. The row order is defined there via `order.<country>`, clockwise, starting in the north of the country.
-->

{{< border-points >}}

### <Country Name>

<!--
  Which routes can be used from the respective country?
  What tips & recommendations are there for entry from the country
-->
