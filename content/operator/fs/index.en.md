---
draft: false
title: "Trenitalia"
country:
  - "italy"
operator: "trenitalia"
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
        text: "Active staff and retired staff (safeguarded only): 1 coupon per year"
      fip-coupon-relatives:
        status: valid
        text: "Active staff and retired staff (safeguarded only): 1 coupon per year"
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
---

Ferrovie dello Stato Italiane (FS) is the Italian state railway. FIP discounts only apply to its subsidiary Trenitalia in [Italy](/country/italy "Italy").

## Summary

- Reservation required (with surcharges) on long-distance trains
- Partial train binding for FIP 50 Tickets on regional trains
- No validity on FS subsidiaries (Trenord and Ferrovie Sud Est)

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

{{% highlight important %}}
FIP Coupons and FIP 50 Tickets are valid on Trenitalia trains. For subsidiaries other than Trenitalia (e.g. Trenord, Ferrovie Sud Est), FIP discounts do not apply, even if trains display Trenitalia logos. Exception: TPER in Emilia-Romagna. [See Regional trains in Emilia-Romagna](#regional-trains-in-emilia-romagna)
{{% /highlight %}}

## Train Categories and Reservations

Reservations (with surcharges) are mandatory on long-distance trains.

### Le Frecce

{{% train-category
  id="fr-av"
  title="Frecciarossa (FR AV)"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

Highest Italian train category for long-distance high-speed trains. Frecciarossa 1000 is marked for higher speed and service.

{{% highlight confusion %}}
Trains of the private operator Italo are also marked as AV but cannot be used with FIP.
{{% /highlight %}}

Prices [see Ticket and Reservation Purchase](#ticket-and-reservation-purchase)

#### Reservation

The variable reservation price always includes a surcharge when using a FIP Coupon.

{{% /train-category %}}

{{% train-category
  id="fa-av"
  title="Frecciargento (FA AV)"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

High-speed tilting trains.

{{% highlight confusion %}}
Trains of the private operator Italo are also marked as AV but cannot be used with FIP.
{{% /highlight %}}

Prices [see Ticket and Reservation Purchase](#ticket-and-reservation-purchase)

#### Reservation

The variable reservation price always includes a surcharge when using a FIP Coupon.

{{% /train-category %}}

{{% train-category
  id="fb"
  title="Frecciabianca (FB)"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

Fast trains outside high-speed lines.

Prices [see Ticket and Reservation Purchase](#ticket-and-reservation-purchase)

#### Reservation

The variable reservation price always includes a surcharge when using a FIP Coupon.

{{% /train-category %}}

{{% train-category
  id="fl"
  title="FrecciaLink (FL)"
  type="bus"
  fip_accepted=false
  reservation_required=false
  reservation_possible=false
%}}

Connecting buses for high-speed trains.

{{% /train-category %}}

### Other Long-Distance

{{% train-category
  id="ic"
  title="InterCity (IC)"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

Fast trains mostly outside high-speed lines.

#### Reservierung

**Cost:** € 3 (1st/2nd class)

The reservation price always includes a surcharge when using a FIP Coupon.

{{% /train-category %}}

{{% train-category
  id="icn"
  title="InterCity Notte (ICN)"
  type="sleeper"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

National night train with sleeper, couchette, and seat cars.

**Cost:** € 25 (1st/2nd class, seat car)

The reservation price always includes a surcharge when using a FIP Coupon. For couchette or sleeper, an additional supplement applies.

{{% /train-category %}}

### International Long-Distance

{{% train-category
  id="ec"
  title="Eurocity (EC) / Railjet (RJ) / Railjet Xpress (RJX)"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

International fast trains to Germany, Austria, and Switzerland.

#### Reservation

**Cost**: Prices [see Ticket and Reservation Purchase](#ticket-and-reservation-purchase)

Different costs for Brenner route (Brenner supplement):

- 1st class: € 15
- 2nd class: € 10

Reservations for the Brenner route can be purchased on the train or at FS ticket offices.

The reservation price always includes a surcharge when using a FIP Coupon.

{{% /train-category %}}

{{% train-category
  id="nj"
  title="Nightjet (NJ) / Euronight (EN)"
  type="sleeper"
  fip_accepted=true
  reservation_required=true
  reservation_possible=true
%}}

International night trains to Germany, Austria, and Switzerland.

{{% highlight important %}}
National free travel for Deutsche Bahn staff is not recognized in Germany. If any part of the Nightjet journey is in Germany, DB staff must buy a ticket at the FIP global fare for the entire route. For journeys outside Germany with a FIP Coupon, a reservation/supplement is required.
{{% /highlight %}}

_Tip:_ For trips from Germany to Italy, use national free travel to Salzburg and board the Nightjet there to avoid the FIP global fare.

#### Reservation

The variable reservation price always includes a surcharge when using a FIP Coupon.

{{% /train-category %}}

### Regional Trains

{{% train-category
  id="rv"
  title="Regionale Veloce (RV)"
  type="regional"
  fip_accepted=true
  reservation_required=false
  reservation_possible=false
%}}

Fast regional trains stopping at main stations.

{{% highlight important %}}
Tickets for regional trains may be train-bound. See [Train binding in regional trains](#train-binding-in-regional-trains)
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
  id="r"
  title="Regionale (R / REG)"
  type="regional"
  fip_accepted=true
  reservation_required=false
  reservation_possible=false
%}}

Regional trains stopping at most stations.

{{% highlight important %}}
Tickets for regional trains may be train-bound. See [Train binding in regional trains](#train-binding-in-regional-trains)
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
  id="m"
  title="Metropolitano (M) / Servizio Ferroviario Metropolitano (sfm)"
  type="regional"
  fip_accepted=true
  reservation_required=false
  reservation_possible=false
%}}

Suburban rail systems in Naples (`M`) and Turin (`sfm`).

{{% highlight confusion %}}
Metro lines are sometimes also marked as `M` and cannot be used with FIP.
{{% /highlight %}}

{{% /train-category %}}

## Class Categories

Le Frecce long-distance trains have special class categories. [^1]

**Standard**: Comparable to 2nd class. \
**Premium**: 1st class, 2–2 seating. In Frecciarossa 1000 includes welcome drink and snacks (except Saturdays). Requires a 1st class FIP pass. \
**Business**: 1st class, 2–1 seating. In Frecciarossa 1000 includes welcome drink and snacks (except Saturdays). Not bookable with FIP. \
**Executive**: Luxury class with private compartment for 10 people and meeting room. Not bookable with FIP.

## Ticket and Reservation Purchase

### Online

{{% booking id="fs-website" /%}}

{{% booking id="db-website-fip-db"
    subtitle="Only ECE trains from Milan to Germany or EC trains on the Brenner route between Italy and Germany. Cross-border FIP 50 Tickets, with ticket portion only for the Swiss/Austrian and Italian section, for Deutsche Bahn employees."
%}}
For the `ECE` Frankfurt – Milan, through FIP 50 Tickets to Milan can be booked. For the `EC` on the Brenner route between Munich and Italy, this is also possible. Both have no validity in the German section.
{{% /booking %}}

{{% booking id="db-website-fip-international"
    subtitle="Only ECE trains from Milan to Germany or EC trains on the Brenner route between Italy and Germany. For national and cross-border journeys. Cross-border FIP 50 Tickets for the entire route (not valid in your own country)."
%}}
For the `ECE` Frankfurt – Milan or the `EC` on the Brenner route between Munich and Italy, through FIP 50 Tickets to Milan can be booked.
{{% /booking %}}

### On-site

{{% booking id="fs-ticket-machine" /%}}

{{% booking id="fs-ticket-office" /%}}

{{% booking id="db-ticket-office"
  classes.first="€ 3 / € 25"
  classes.second="€ 3 / € 25"
%}}
The surcharge or reservation price for cross-border `EC`/`ECE` trains between Switzerland and Italy at the DB Reisezentrum (ticket office) is only € 10 (2nd class) or € 13 (1st class) and includes a seat reservation (e.g., to Frankfurt).
{{% /booking %}}

### On the train

If supplements are not purchased before travel, an additional on-board surcharge is applied (except where no sales points or ticket machines are available at the departure station).

## Discounts

Children up to 4 years old travel free on public fares. On regional trains, children up to 12 years receive a 50% discount on the adult fare. From 12 years, the regular adult fare applies. On long-distance trains, children up to 15 years receive a 50% discount on the adult fare. From 15 years, the regular adult fare applies.

## Special Tariff Conditions

### Travel to Austria

On international long-distance trains from Italy to Austria, ÖBB FIP Coupons are also recognized in the Italian section (not on regional trains), but a supplement (as in other Italian long-distance trains) must be paid. This can be purchased on the train or at FS or ÖBB ticket counters.

#### Brenner – Bolzano – Verona – Venice/Ancona/Bologna

ÖBB or FS FIP Coupons are valid in the Italian section on `EC` and `RJ` trains. For journeys to/from Italy or entirely within Italy, a supplement of € 10 (2nd class) or € 15 (1st class) must be paid. The [ÖBB supplement](/operator/oebb#validity-of-fip-tickets) is not charged on Brenner services.

#### Railjet Tarvisio Boscoverde – Venice

ÖBB or FS FIP Coupons are valid in the Italian section on `RJ` trains. For trips to/from Italy or entirely within Italy, a supplement of € 10 (2nd class) or € 15 (1st class) must be paid. The [ÖBB supplement](/operator/oebb#validity-of-fip-tickets) is not charged on Brenner services.

### Regional trains in Emilia-Romagna

FIP discounts also apply to trains operated by Trenitalia TPER in Emilia-Romagna.

### Strait of Messina Ferry

FIP discounts apply for crossing the Strait of Messina only if the journey is made by train using the train ferry from Villa San Giovanni to Messina.

### Leonardo Express (Rome Fiumicino Airport Shuttle)

FIP discounts do not apply on the Leonardo Express to/from Rome Fiumicino Airport. Regular regional trains can be used as an alternative.

### Trinacria Express (Palermo Airport)

FIP discounts do not apply on the Trinacria Express to/from Palermo Falcone Borsellino Airport.

### International Frecciarossa trains to Paris

FIP discounts do not apply on international Frecciarossa trains between Paris and Italy.

### Treni Touristici (Tourist Trains)

FIP discounts do not apply on [Treni Touristici](https://www.fstrenituristici.it/) (Tourist Trains), even if operated by Trenitalia.

### Buses and Replacement Services

Buses are excluded from FIP discounts, except when replacing a train where FIP would have been recognized (rail replacement services).

### Break of Journey

Break of journey is not permitted on long-distance trains. On regional trains, break of journey is possible without notice or formalities, except for train-bound FIP 50 Tickets with printed train number (see [Train binding in regional trains](#train-binding-in-regional-trains)).

### Train Binding in Regional Trains

On Italian regional trains (`R`/`RV`), tickets may be train-bound. This applies to FIP 50 Tickets, but not to FIP Coupons.

Regional trains are classified as train-bound (_prenotabile_) and not train-bound (_non prenotabile_). Train-bound trains may only be used with tickets issued specifically for that train.

{{% expander "Identifying train-bound tickets" info %}}
**Train-bound:** \
Tickets for train-bound trains are valid only for the train indicated on the ticket. Train-bound trains are identified by:

{{% float-image
  src="prenotabile_2.webp"
  alt="FS Prenotabile Ticket"
  width="60%"
  position="right"
%}}
The note "prenotabile" in the train information:
{{% /float-image %}}

{{% float-image
  src="prenotabile_1.webp"
  alt="FS Prenotabile Ticket"
  width="60%"
  position="right"
%}}
Ticket label "Prenotazione - Ordinaria":
{{% /float-image %}}

**Not train-bound:** \
Tickets for not train-bound trains are valid on the booked train and all other not train-bound trains on the route, but not on train-bound trains.

{{% float-image
  src="ordinaria_2.webp"
  alt="FS Ordinaria Ticket"
  width="60%"
  position="right"
%}}
The note "non prenotabile" in the train information:
{{% /float-image %}}

{{% float-image
  src="ordinaria_1.webp"
  alt="FS Ordinaria Ticket"
  width="60%"
  position="right"
%}}
Ticket label "Ordinaria":
{{% /float-image %}}

{{% /expander %}}

### Validation of Regional Train Tickets

Tickets for not train-bound regional trains (_non prenotabile_) must be validated at the platform (obliteratrici).

## Recommendations

{{% highlight tip %}}
For long-distance travel, the FIP Coupon is only worthwhile to a limited extent, as the price difference between FIP 50 and Coupon for long-distance trains is minimal. The only exception is `IC` connections, whose reservation is usually much cheaper. On regional trains, the Coupon can be fully used. As 1st class is rarely available on these trains, a 1st class Coupon is usually not worthwhile.
{{% /highlight %}}

## Sources

[^1]: [Frecciarossa Classes](https://www.trenitalia.com/de/frecce/frecciarossa-1000.html)
