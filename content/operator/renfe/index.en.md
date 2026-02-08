---
draft: false
title: "Renfe"
country:
  - "spain"
  - "france"
operator: "renfe"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
      fip-coupon-relatives:
        status: invalid
        text: "Not available"
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
    sncf:
      fip-coupon:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
---

Renfe Operadora is the state-owned railroad company in [Spain](/country/spain "Spain"). It operates comfortable high-speed trains, various regional trains and suburban trains.

## Summary

- FIP free tickets are accepted on commuter trains (mainly suburban trains), but not on trains requiring reservations.
- For trains requiring reservations, tickets can be purchased at the FIP Global Fare (regardless of distance), including the reservation; FIP Coupons are not needed.
- FIP is not accepted on Avlo trains.
- For international AVEs between Madrid and Marseille as well as Lyon and Barcelona, the same FIP Global Fares apply as for domestic AVEs.

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" text="Exceptions: trains requiring reservations" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" text="Exceptions: trains requiring reservations" >}}
{{< fip-validity type="fip-global-fare" status="valid" text="For trains subject to reservation except Avlo" disable_dialog=true >}}

## Train Categories and Reservations

{{% highlight important %}}
Only commuter trains can be used without restrictions with FIP Coupons. For other trains, a ticket at the FIP Global Fare usually needs to be purchased.
{{% /highlight %}}

### Long distance

{{% train-category
    id="ave"
    title="AVE"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Long-distance connections with high-speed trains (up to 300 km/h). FIP Coupons are not accepted.

International connections from / to France can be booked at the same conditions as domestic AVEs, although there is no premium category. Booking is only possible directly via Renfe, which is why tickets must be purchased at a ticket counter in Spain. It should be possible to buy tickets on the train when boarding in France, but there is no practical experience of this yet.

**FIP Global Fare (regardless of distance):**

- € 10 (Elige Estándar)
- € 13 (Elige Confort)
- € 23,50 (Premium)

{{% /train-category %}}

{{% train-category
    id="avlo"
    title="Avlo"
    type="highspeed"
    fip_accepted=false
    reservation_required=true
    reservation_possible=true
%}}

Low-cost high-speed trains (up to 300 km/h).

{{% /train-category %}}

{{% train-category
    id="euromed"
    title="Euromed"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

High-speed trains that can be re-gauged (Figueres <-> Alicante). FIP Coupons are not accepted.

**FIP Global Fare (regardless of distance):**

- € 6,50 (Elige Estándar)
- € 10 (Elige Confort)
- € 23,50 (Premium)

{{% /train-category %}}

{{% train-category
    id="alvia"
    title="Alvia"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

High-speed trains that can be re-gauged (up to 250 km/h). FIP Coupons are not accepted.

**FIP Global Fare (regardless of distance):**

- € 6,50 (Elige Estándar)
- € 10 (Elige Confort)

{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Passenger trains between regional and high-speed services (up to 250 km/h). FIP Coupons are not accepted.

**FIP Global Fare (regardless of distance):**

- € 6,50 (Elige Estándar)
- € 10 (Elige Confort)

{{% /train-category %}}

{{% train-category
    id="celta"
    title="Celta: Porto – Vigo"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

The Celta is an international cooperation train between Renfe and the Portuguese CP from Porto to Vigo. FIP Coupons are not accepted.

**FIP Global Fare (regardless of distance):** € 4

{{% /train-category %}}

### Middle distance

{{% train-category
    id="avant"
    title="Avant"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

High-speed trains, travel time < 90 minutes. FIP Coupons are not accepted.

**FIP Global Fare (regardless of distance):** € 4

{{% /train-category %}}

{{% train-category
    id="md"
    title="MD"
    type="highspeed"
    fip_accepted=partially
    reservation_required=partially
    reservation_possible=true
%}}

Accelerated regional transport. FIP Coupons are only accepted on trains that do not require reservations. Currently, this is only the case on the Barcelona (Girona-Figueres)-Port Bou route.

**FIP Global Fare (regardless of distance):** € 4

#### Reservation

Reservations are required, except on the Barcelona(-Girona-Figueres)-Port Bou route[^1].

{{% /train-category %}}

### Local transportation

{{% train-category
    id="regional"
    title="Cercanías / Rodalia / Aldiriak"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Commuter trains, comparable to suburban trains. FIP Coupons are valid without restrictions.

- Cercanías Asturias
- Cercanías Bilbao – Bilboko Aldiriak
- Cercanías Cádiz
- Cercanías Madrid
- Cercanías Málaga
- Cercanías Murcia/Alicante – Rodalia de Múrcia/Alacant
- Cercanías Sevilla
- Cercanías Santander
- Cercanías San Sebastián – Renfe Aldiriak/Donostia
- Cercanías Valencia – Rodalia de València
- Cercanías Zaragoza
- Rodalies de Catalunya

{{% /train-category %}}

## Class Categories

**Elige Estándar / Turista**: Comparable to 2nd class. [More Information](https://www.renfe.com/es/en/travel/prepare-your-trip/billetes-ave-y-largadistancia/elige) \
**Elige Confort**: An XL Comfort seat without catering. Is comparable to 1st class. A 1st class FIP Card is required. [More Information](https://www.renfe.com/es/en/travel/prepare-your-trip/billetes-ave-y-largadistancia/elige) \
**Premium**: An XL Comfort seat including catering. Comparable to 1st class. A FIP-Card 1st class is required. [More Information](https://www.renfe.com/es/en/travel/prepare-your-trip/billetes-ave-y-largadistancia/premium)

## Ticket and Reservation Purchase

### Online

It is not possible to book reservations, FIP Global Fare or FIP 50 online.

### By telephone

It seems to be not possible to book FIP-Tickets by telephone with Renfe. The hotline asks you to use the on-site ticket counters.

### On-site

{{% booking id="db-ticket-office"
    fip_global_fare=true
    reservations="nil"
%}}

#### FIP Global Fare

Tickets for trains requiring reservations can be sold at DB Reisezentrum (ticket office). Please ensure that either "T" (for Elige Estándar / Turista) or "P" (for Elige Confort) is specified as the class. If 1st class or 2nd class is selected as the class, tickets will not be issued with an error message. A booking of Premium class tickets is not possible through Deutsche Bahn's sales channels. It has also been reported that the booking of class "P" sometimes fails, in which case a booking of class "T" often works. There is no booking fee.
![Example ticket AVE from Malaga to Madrid](./images/ave_ticket.webp)
{{% /booking %}}

{{% booking id="renfe-ticket-office" /%}}

### On the train

If there is no Renfe sales outlet at the departure station, tickets can be purchased on the train.

Tickets for international `AVE` trains can be purchased on board when boarding in France. [^3]

## Discounts

Children under 4 years travel free of charge without their own seat. For children under 12 years, a 40% discount applies. From 12 years onwards, the full fare is charged.

## Special Tariff Conditions

### Break of journey

With FIP 50 and FIP Global Fare tickets, the journey may not be interrupted along the way.[^2]

### Renfe Feve

FIP discounts also apply to the narrow-gauge network of Renfe Feve (Ferrocarriles de Vía Estrecha) between Ferrol and Bilbao in northern Spain.

## Recommendations

{{% highlight tip %}}
Renfe can often be compared more to an airline than to other railway companies. Luggage checks are common on long-distance routes, and there are few trains that allow spontaneous boarding. Therefore, an FIP Coupon is only marginally worthwhile, as it can be used in only a few cases. Due to ticket barriers at many stations, staff must be contacted each time in order to open them with the FIP Coupon. Personal experience shows that especially in the greater Madrid area, the free travel option is sometimes not recognized, and access is consequently denied.
{{% /highlight %}}

## Sources

[^1]: [ShowMeTheJourney](https://showmethejourney.com/travel-on/train/129-md-media-distancia-spain/)

[^2]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#Tips)

[^3]: [User feedback](https://github.com/fipguide/fipguide.github.io/issues/449)
