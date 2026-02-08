---
draft: false
title: "GySEV / Raaberbahn"
country:
  - "austria"
operator: "gysev"
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
    sncf:
      fip-coupon:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
---

The Raab-Oedenburg-Ebenfurter Eisenbahn AG (Hungarian: Győr-Sopron-Ebenfurti Vasút Zrt.), short: GySEV or Raaberbahn, is a private Hungarian railway company that operates regional trains in Hungary and [Austria](/country/austria "Austria"). They primarily operate passenger services south and east of Lake Neusiedl (Western Hungary), partly even on their own infrastructure.

## Summary

- FIP 50 and FIP Coupons are accepted without exception in Hungary.
- FIP 50 and FIP Coupons are valid in Austria only with restrictions.
- No reservation requirement.

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

{{% highlight important %}}
FIP is valid on all GySEV routes in Hungary. However, the GySEV FIP Coupon is primarily intended for Hungary and is valid on GySEV routes in Austria only with restrictions.
{{% /highlight %}}

The following lines can be used with the GySEV FIP Coupon in Austria in the specified sections:

- REX 63: Neusiedl am See – Fertőszentmiklós [^2]
- REX 6: Wien Hbf – Deutschkreuz – Sopron
- REX 65: Eisenstadt – Wulkapordersdorf (connection with REX6 and through service to Wien Hbf)

[Overview of all GySEV routes](https://www2.GySEV.hu/de/vasutvonalak) (incl. Hungary).

## Train Categories and Reservations

{{% train-category
    id="ic"
    title="InterCity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

GySEV operates Scarbantia IC trains between Sopron and Budapest.

{{% highlight confusion %}}
In Hungary, InterCity trains are also operated by MÁV, the Hungarian state railway.
{{% /highlight %}}

#### Reservation

Reservations are only mandatory between Győr and Budapest. For journeys between Sopron and Győr, no reservation is required.

{{% /train-category %}}

{{% train-category
    id="rex"
    title="Regionalexpress (REX)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Fast local train with fewer stops and modern rolling stock.

{{% highlight confusion %}}
Regionalexpress trains are sometimes also operated by ÖBB where GySEV FIP Tickets are not accepted. If in doubt, check the operator via the provider's website or [bahn.de](https://int.bahn.de/en).
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="r"
    title="Regionalzug (R)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Local train stopping at most stations.

{{% highlight confusion %}}
Regional trains are sometimes also operated by ÖBB where GySEV FIP Tickets are not accepted. If in doubt, check the operator via the provider's website or [bahn.de](https://int.bahn.de/en).
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="sz"
    title="Személyvonat (Sz)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Local train stopping at most stations.

{{% highlight confusion %}}
Személyvonat trains are sometimes also operated by MÁV where GySEV FIP Tickets are not accepted. If in doubt, check the operator via the provider's website or [bahn.de](https://int.bahn.de/en).
{{% /highlight %}}

{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

{{% booking id="mav-website" /%}}

### Phone

{{% booking id="oebb-phone" reservations=nil /%}}

### On-Site

{{% booking id="mav-ticket-office" /%}}

{{% booking id="mav-ticket-machine" /%}}

{{% booking id="oebb-ticket-office" reservations=nil /%}}

### On the train

Tickets with FIP discount cannot be purchased on board. [^1]

## Discounts

Discounts differ depending on the country in which you travel with GySEV.

### Hungary

With public fares, children under 6 travel free of charge. Children up to 14 years can receive a 50% discount on the adult fare. Persons from 14 years pay the adult fare.

### Austria

With public fares, children under 6 travel free of charge. Children up to 15 years can receive a 50% discount on the adult fare. Persons from 15 years pay the adult fare.

## Special Tariff Conditions

### Bus Services

FIP discounts are not valid on GySEV bus connections.

### Break of journey

For a break of journey, the ticket must be stamped at the station where the break should be.

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#Tips)

[^2]: [GySEV Support Neusiedel am See - Pamhagen](https://github.com/fipguide/fipguide.github.io/issues/278)
