---
draft: false
title: "BLS"
country:
  - "switzerland"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
      fip-coupon-relatives:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
    sncf:
      fip-coupon:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
    gb:
      fip-coupon:
        status: valid
        text: "1 coupon per year"
      fip-coupon-relatives:
        status: valid
        text: "1 coupon per year"
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
---

The BLS (formerly Bern-Lötschberg-Simplon-Bahn) is a public railway company in [Switzerland](/country/switzerland "Switzerland"). It operates many train, bus and ship connections and primarily runs in the Canton of Bern.

The BLS offers a [network map of its routes](https://www.bls.ch/-/media/bls/pdf/fahrplaene/bahn/netzplaene/netzplan-bls-bahn.pdf) on its website.

## Summary

- BLS accepts FIP Coupon and FIP 50 Tickets.
- The use of all trains (except for car trains), buses, and ships with FIP is possible.
- No reservation is required.

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

## Train Categories and Reservations

There is no reservation requirement on any BLS train.

{{% train-category
        id="ir"
        title="InterRegio (IR) / RegioExpress (RE)"
        type="regional"
        fip_accepted=true
        reservation_required=false
        reservation_possible=true
%}}
National trains with stops in larger cities.
{{% /train-category %}}

{{% train-category
        id="r"
        title="Regio (R) / S-Bahn (S)"
        type="regional"
        fip_accepted=true
        reservation_required=false
        reservation_possible=false
%}}
Trains that stop at all stations. In urban areas also referred to as S-Bahn.
{{% /train-category %}}

{{% train-category
        id="r"
        title="Panorama Express (PE)"
        type="regional"
        fip_accepted=true
        reservation_required=partially
        reservation_possible=true
%}}
The GoldenPassExpress is a continuous train connection from Montreux to Interlaken Ost operated by the BLS in cooperation with the [MOB](/operator/sp#mob). The MOB operates the train on the narrow-gauge section between Montreux and Zweisimmen, and the BLS on the standard-gauge section between Zweisimmen and Interlaken Ost. In the connection information, these trains are marked as `PE`.

This means that both the SP and BLS Coupons must be present to travel the entire route. FIP 50 Tickets can be booked continuously.

#### Reservations

Traveling without a seat reservation is only possible if there are free seats available. Otherwise, a paid reservation can be purchased through the MOB website.
{{% /train-category %}}

{{% train-category
        id="at"
        title="Car Transport (AT)"
        fip_accepted=false
        type="regional"
%}}
Car trains on the routes Kandersteg – Göppenstein, Brig – Iselle, and Kandersteg – Iselle.

FIP is not valid on these trains, but the parallel running trains of the `RE 1` can be used.
{{% /train-category %}}

### Other Transport Means

{{% train-category
        id="bus"
        title="Bus"
        type="bus"
        fip_accepted=true
        reservation_required=false
        reservation_possible=false
%}}
FIP is valid on all BLS buses, including those of _Busland AG_.
{{% /train-category %}}

{{% train-category
        id="ship"
        title="Ship"
        type="ship"
        fip_accepted=true
        reservation_required=false
        reservation_possible=false
%}}
FIP is valid on BLS ships on Lake Thun and Lake Brienz.
{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

{{% booking id="sbb-website"/%}}

{{% booking id="db-website"/%}}

{{% booking id="db-website-fip-db"
    subtitle="Cross-border FIP 50 Tickets between Germany and Switzerland, with ticket portion only for the Swiss section. Only for Deutsche Bahn employees."
%}}
For BLS, continuous FIP 50 Tickets can only be booked for selected connections.
{{% /booking %}}

{{% booking id="db-website-fip-international"
    subtitle="Cross-border FIP 50 Tickets between Germany and Switzerland for the entire route (not valid in the country of issuance of the FIP Card)"
%}}
For BLS, continuous FIP 50 Tickets can only be booked for selected connections.
{{% /booking %}}

### On-Site

{{% booking id="bls-ticket-office"/%}}

{{% booking id="sbb-ticket-office"/%}}

### On the Train

Purchasing FIP tickets on the train is not possible. A penalty fee is charged for passengers without tickets.

## Discounts

For regular journeys, children up to and including 5 years travel for free. Children up to and including 15 years receive a 50% discount on the adult fare. Persons aged 16 and older pay the regular adult fare.[^1]

## Special Tariff Conditions

### Cable Cars

FIP is not valid on cable cars and funiculars operated by the BLS. [^1]

### Mutual Recognition of Coupons between SBB and BLS

The Swiss railway companies SBB and BLS partially accept each other's FIP Coupons: [^2]

- The FIP Coupons of the SBB are accepted on all BLS trains.
- The FIP Coupons of the BLS are accepted on SBB trains on routes where BLS trains also run, i.e. between two stations where both SBB and BLS trains operate. The BLS network is [available online](https://www.bls.ch/-/media/bls/pdf/fahrplaene/bahn/netzplaene/netzplan-bls-bahn.pdf).

However, the SBB Coupons are not valid on BLS ships on Lake Thun and Lake Brienz, nor on BLS buses that primarily operate in the Emmental.

## Recommendations

{{% highlight tip %}}
At some operators, family members are not entitled to FIP Coupons from SBB. With the Coupons from BLS, it is nevertheless possible to explore large parts of Switzerland together with family members.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)

[^2]: [FIP Guide Community - Feedback](https://discord.com/channels/1250522473188032512/1448243039398264893)
