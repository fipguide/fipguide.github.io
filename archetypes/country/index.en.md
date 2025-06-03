---
draft: false
title: '{{ .File.ContentBaseName | title }}'
country: '{{ .File.ContentBaseName }}'
---

<!-- Remove the WIP snippet if the page is complete -->
{{< snippet wip >}}

## FIP Information

<!--
    A short summary text that should answer the following questions in this order:
    - Which FIP tickets (FIP 50/FIP Coupon tickets) are recognized in the country and by which railway operator?
    - What are the special features of using FIP with the respective railway operator? (Add link to the railway operator)
    - Which railway operators do not recognize FIP tickets and how can you identify these operators in the connection information?
-->

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
Only border points at the national border with other countries. These should be listed as country (railway operator) and their border points.
-->

{{% expander "Border Points" %}}
| Country | Border Points |
| --- | --- |
{{% /expander %}}

### <Country Name>

<!--
  Which routes can be used from the respective country?
  What tips & recommendations are there for entry from the country
-->

## FIP Rating

<!--
    The rating criteria are still under development
-->

## Operators without FIP
<!-- Replace the general link with a link to the operator -->
- [Name of the operator](../../operator)
