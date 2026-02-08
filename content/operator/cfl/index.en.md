---
draft: false
title: "CFL"
country:
  - "luxembourg"
operator: "cfl"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "4 fields with 2 days each"
      fip-coupon-relatives:
        status: invalid
        text: "Not available"
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
    sncf:
      fip-coupon:
        status: valid
        text: "6 coupons with 4 fields each per year. Each field is valid for two days."
      fip-coupon-relatives:
        status: valid
        text: "6 coupons with 4 fields each per year. Each field is valid for two days."
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
---

CFL (Société nationale des chemins de fer luxembourgeois) is the Luxembourgish state railway and the main railway company in [Luxembourg](/country/luxembourg "Luxembourg").

## Summary

- Free travel also without FIP in second class
- Surcharge for first class possible

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

{{< highlight important >}}
Luxembourg offers free public transport for domestic journeys regardless of FIP. This includes all train services (except TGV), trams, and buses. Travel with CFL is therefore free of charge in second class and no additional ticket is required. Travel in first class requires a FIP Coupon or FIP 50 Ticket for first class. For journeys beyond Luxembourg, e.g. towards Germany or Belgium, a ticket from the border point is required. This means that, for example, a through ticket, a valid FIP Coupon, or a national travel concession is needed for journeys to Germany to travel into the neighboring country. A ticket from the first station after the border is not sufficient.
{{< /highlight >}}

## Train Categories and Reservations

{{% train-category
  id="intercity"
  title="InterCity (IC)"
  type="highspeed"
  fip_accepted=true
  reservation_possible=true
  reservation_required=false
%}}

InterCity trains connect Luxembourg with Liège and Brussels in Belgium.

{{% /train-category %}}

{{% train-category
  id="regionalexpress"
  title="Regionalexpress (RE)"
  type="regional"
  fip_accepted=true
  reservation_possible=false
%}}

Trains stopping at some stations.

{{% /train-category %}}

{{% train-category
  id="regionalbahn"
  title="Regionalbahn (RB)"
  type="regional"
  fip_accepted=true
  reservation_possible=false
%}}

Trains stopping at all stations.

{{% /train-category %}}

{{% train-category
  id="bus"
  title="Bus"
  type="bus"
  fip_accepted=false
  reservation_possible=false
%}}

CFL also operates interregional bus lines. These do not accept FIP, but due to free public transport, no ticket is required.

{{% /train-category %}}

{{% train-category
  id="standseilbahn"
  title="Funicular Pfaffenthal-Kirchberg"
  type="funicular"
  fip_accepted=true
  reservation_possible=false
%}}

The funicular connects the Pfaffenthal-Kirchberg railway stop with the interchange platform on the Kirchberg plateau.

{{% /train-category %}}

## Ticket and Reservation Purchase

Ticket purchase is only relevant for first class.

{{% highlight tip %}}
CFL offers affordable first class ticket options starting from €3. These tickets are not route-dependent, but valid for a specific period for the entire network. Tickets can be purchased on the [CFL website](https://www.cfl.lu/en-gb/ticket/national).

At [CFL Ticket Offices](#on-site), first class tickets are available with a 50% discount on presentation of your FIP Card.
{{% /highlight %}}

### Online

{{% booking id="db-website-fip-international"
    subtitle="Cross-border FIP 50 Tickets between Germany and Luxembourg for the entire route (not valid in the issuing country of the FIP Card)"
/%}}

{{% booking id="sncb-website"
subtitle="Only for cross-border connections to/from Belgium"
/%}}

### Telephone

{{% booking id="cfl-phone"
fip_global_fare=nil
fip_50=true
%}}

Due to the booking fee, it may be worthwhile to purchase a regular first class ticket via the CFL app or ticket machine.

{{% /booking %}}

### On-site

{{% booking id="cfl-ticket-office" /%}}

### On the Train

Tickets for first class travel or upgrades from second to first class must be purchased before boarding the train.

## Discounts

For public fares, children up to 6 years travel free of charge, children between 6 and 12 years receive a 50% discount on the adult fare. From 12 years, the regular adult fare applies.[^1]
Travel in second class is generally free of charge, so this is only relevant for first class.

### Special Tariff Conditions

### CFL Bus Luxembourg - Saarbrücken

On the CFL express bus between Luxembourg and Saarbrücken, free travel is not generally possible. Fares can be found on the [CFL website](https://www.cfl.lu/en-gb/ticket/internationaldetail/saarbrueckenexpress/1000). \
There are no further FIP discounts on this connection.

### CFL Bus Lorraine Express

CFL operates an express bus between Luxembourg and _Lorraine TGV_ station in France as a TGV feeder. Free travel is not generally possible on this bus. Fares can be found on the [CFL website](https://www.cfl.lu/en-gb/ticket/internationaldetail/gare-lorraine). The buses require a reservation and a ticket can be purchased up to 2.5 hours before departure. \
We have no official information regarding the validity of FIP discounts.

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#uk-accordion-75)
