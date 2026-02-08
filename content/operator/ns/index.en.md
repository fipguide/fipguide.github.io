---
draft: false
title: "NS"
country:
  - "netherlands"
operator: "ns"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "4 fields with 2 days each"
      fip-coupon-relatives:
        status: valid
        text: "Available"
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
---

Nederlandse Spoorwegen (NS) is the state railway company of the [Netherlands](/country/netherlands "Netherlands") and operates the majority of passenger traffic on the Dutch rail network.

## Summary

- NS accepts FIP Coupons and FIP 50 Tickets.
- Reservations are generally not required.
- Supplement required for Eurocity Direct (`ECD`) and partly for Intercity Direct (`ICD`).
- For FIP Coupons, a gate-pass coupon is required for access through station gates.

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Coupons and FIP 50 Tickets are valid on NS services. For cross-border journeys, either a continuous FIP 50 ticket or FIP Coupons for both countries are required.

## Train Categories and Reservations

Within the Netherlands, reservations are not required on NS and are often not possible. For cross-border ICE and IC trains to Germany, reservations are possible and, for example, mandatory in summer 2025 (only for cross-border journeys).

Supplements must be paid for Eurocity Direct and partly for Intercity Direct trains.

{{% train-category
    id="ice"
    title="Intercity-Express (ICE)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
    additional_information_url="https://www.nsinternational.com/en/trains/ice"
%}}
High-speed trains of Deutsche Bahn, operated by NS in the Netherlands. They run between Amsterdam and Germany (Cologne / Frankfurt am Main or Hanover / Berlin), but can also be used within the Netherlands between Amsterdam and Arnhem or Hengelo with an FIP Coupon without a supplement. However, with FIP 50 Tickets, a supplement is required.

{{% highlight important %}}
When using FIP 50 Tickets for domestic travel within the Netherlands, an [ICE supplement](https://www.ns.nl/en/tickets/ice-supplement) of 3 € per journey must be paid. No supplement is required with FIP Coupons.

The supplement can be purchased [online](https://www.ns.nl/en/tickets/ice-supplement), in the NS app, or at ticket machines/counters. On site, the supplement can be loaded onto an OV-chipkaart. Without an OV-chipkaart, an additional fee of 1.50 € is charged for a single-use ticket.
{{% /highlight %}}

#### Reservation

A reservation is required for cross-border journeys during high season.

{{% /train-category %}}

{{% train-category
    id="ecd"
    title="Eurocity Direct (ECD)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}
International, supplement-required train between Lelystad, Amsterdam, and Brussels, stopping at Almere, Schiphol, Rotterdam, and Antwerp.

{{% highlight important %}}
Between Rotterdam and Schiphol, a [supplement](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) of 3 € must be paid for both FIP 50 Tickets and FIP Coupons.

The supplement can be purchased [online](https://www.ns.nl/en/tickets/icd-supplement), in the NS app, or at ticket machines/counters. The supplement can be loaded onto an OV-chipkaart. Without an OV-chipkaart, an additional fee of 1.50 € is charged for a single-use ticket.

Holders of an OV-chipkaart can buy a discounted supplement for 1.80 € at the supplement counter in the station during [off-peak times](https://www.ns.nl/en/travel-information/off-peak-hours.html).

{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="ec"
    title="Eurocity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}
International train between Rotterdam and Brussels with several intermediate stops.
{{% /train-category %}}

{{% train-category
    id="icd"
    title="Intercity Direct (ICD)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.ns.nl/en/travel-information/special-routes/intercity-direct.html"
%}}
Partly supplement-required fast train between Lelystad or Amersfoort, Amsterdam Zuid, Schiphol Airport, Rotterdam Centraal, and Breda.

{{% highlight important %}}
When using FIP 50 Tickets between Rotterdam and Schiphol, a [supplement](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) of 3 € must be paid. No supplement is required with FIP Coupons.

The supplement can be purchased [online](https://www.ns.nl/en/tickets/icd-supplement), in the NS app, or at ticket machines/counters. The supplement can be loaded onto an OV-chipkaart. Without an OV-chipkaart, an additional fee of 1.50 € is charged for a single-use ticket.

Holders of an OV-chipkaart can buy a discounted supplement for 1.80 € at the supplement counter in the station during [off-peak times](https://www.ns.nl/en/travel-information/off-peak-hours.html).

{{% /highlight %}}

With FIP 50 Tickets, prices may vary by train category.

{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
%}}
Unlike in other countries, these are not true long-distance trains, but rather fast regional trains with few stops.
{{% /train-category %}}

{{% train-category
    id="re"
    title="Sneltrein (RE)"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Regional trains with more stops than Intercity, but still only at important stations.

{{% highlight confusion %}}
Trains of the Sneltrein / Regional-Express `RE` category, including the connections Venlo – Hamm (Germany), Maastricht – Aachen (Germany), and Arnhem – Düsseldorf (Germany), as well as other RE connections, are not operated by NS and cannot be used with FIP.
{{% /highlight %}}
{{% /train-category %}}

{{% train-category
    id="sprinter"
    title="Sprinter"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Regional trains for short connections, stopping at every station along the route.
{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

Domestic journeys unfortunately cannot be purchased online.

{{% booking id="sncb-website"
    subtitle="Only for cross-border journeys to/from Belgium with FIP Coupon."
/%}}

{{% booking id="db-website"
    subtitle="For cross-border ICE and IC connections"
/%}}

{{% booking id="db-website-fip-db"
    subtitle="Cross-border FIP 50 Tickets between Germany and the Netherlands, with ticket portion only for the Dutch section. For Deutsche Bahn employees only."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Cross-border FIP 50 Tickets between Germany and the Netherlands for the entire route (not valid in the issuing country of the FIP Card)"
/%}}

### Phone

{{% booking id="ns-phone" /%}}

### On-Site

{{% booking id="ns-ticket-office" /%}}

{{% booking id="db-ticket-office" /%}}

### On the Train

FIP 50 Tickets cannot be purchased on the train. [^1]

## Discounts

No discounts are known.

## Special Tariff Conditions

### Ticket Barriers at Stations

With an FIP coupon, you will receive an NS access coupon with a barcode to open the station gates. \
This is not a ticket, but an access pass, valid for:

- Up to 8 separate days within a 3-month period.
- Each day (from 00:00 to 23:59):
  - Up to 6 entries/exits at the same station.
  - Up to 12 passages in total per day.

If needed, a new access coupon can be requested at the NS ticket office.

## Recommendations

{{% highlight tip %}}
NS impresses with a dense schedule and good connections. Delays and cancellations do occur, but due to the high frequency, they are often not too problematic. Nevertheless, you should not plan with tight connections, as trains rarely wait for each other. The 1st class in NS trains is often not much more comfortable than 2nd class.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)
