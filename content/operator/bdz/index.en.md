---
draft: false
title: "BDŽ"
country:
  - "bulgaria"
operator: "bdz"
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

Balgarski Darschawni Schelesnizi (BDŽ) is the state railway company of [Bulgaria](/country/bulgaria "Bulgaria") and currently operates almost all passenger services on the Bulgarian rail network.

## Summary

- FIP 50 Tickets and FIP Coupons are accepted
- Reservation required on selected trains
- Very limited booking options

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="valid" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Coupons and FIP 50 Tickets are valid on BDŽ services. For cross-border journeys, either a continuous FIP 50 Ticket or FIP Coupons for both countries are required.

## Train Categories and Reservations

{{% highlight important %}}
Train categories are shown in BDŽ journey planners as described below. In other planners, trains are often simply listed as `R` or `IR`.
{{% /highlight %}}

{{% train-category
    id="ic-int"
    title="Cross-country International Train (IC-INT)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
%}}
International trains running between Bucharest in Romania and Sofia or Varna. These trains run directly only in the summer; otherwise, a change in Ruse is required. In other planners, they may also be shown as `IR`.

Some overnight trains also include couchette or sleeper cars, which can be used with a corresponding reservation.

#### Reservation

A seat reservation is mandatory in both classes.
{{% /train-category %}}

{{% train-category
    id="icf"
    title="Intercity Fast Train (ICF)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
%}}
Relatively fast trains connecting major cities with few stops. They often use more modern rolling stock, e.g., former DB IC coaches. Overnight trains may include couchette or sleeper cars, which require a reservation.

#### Reservation

A reservation is required for some trains (marked with _R_).
{{% /train-category %}}

{{% train-category
    id="exp"
    title="Express train (EXP)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
%}}
National trains connecting cities with few stops.

#### Reservation

A reservation is required for some trains (marked with _R_).
{{% /train-category %}}

{{% train-category
    id="reg"
    title="Regional Train (REG)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}
Regional trains in domestic traffic, usually with many stops and not very fast. Only 2nd class coaches are available.
{{% /train-category %}}

{{% train-category
    id="sub"
    title="Suburban Commuter Train (SUB)"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Regional trains in domestic traffic stopping at most stations, often running more frequently than other trains.
{{% /train-category %}}

## Ticket and Reservation Purchase

### On Site

{{% booking id="bdz-ticket-office" /%}}

### On the Train

FIP-discounted tickets can only be purchased on board if departing from a station where the ticket office is closed or does not exist. For reservation-required trains, the reservation must be obtained before travel.

## Discounts

For regular tickets, children under 7 years travel free. On domestic routes, children under 10 years, and on international routes, children under 12 years, receive a 50% discount on the adult fare. Older children pay the full adult fare.

## Special Tariff Conditions

### Surcharge for Extended Journeys

If you wish to travel beyond the booked destination, you must pay a surcharge in addition to the ticket for the extra distance. [^1]

### Journey Interruption

A journey interruption is not permitted with a continuous ticket.

## Recommendations

{{% highlight tip %}}
BDŽ still offers a relatively wide range of services on an aging rail network. It is worth planning your routes in advance, as many lines have only a few trains per day. The most modern coaches are former DB IC cars, used on some long-distance routes between Sofia and Varna or Burgas. A special highlight is the narrow-gauge Rhodope railway between Septemvri and Dobrinishte, also operated by BDŽ.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)
