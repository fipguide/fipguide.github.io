---
draft: false
title: "ČD"
country:
  - "czechia"
operator: "cd"
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

České dráhy (ČD) is the state railway company of the [Czech Republic](/country/czechia "Czech Republic") and operates a large part of passenger services on the Czech rail network.

## Summary

- FIP 50 Tickets and FIP Coupons are accepted
- Reservation requirement only in SuperCity trains
- Surcharges for _commercial trains_
- In some regions, FIP is not valid on selected ČD trains (Pilsen and Brno)

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Coupons and FIP 50 Tickets are valid on ČD services. For cross-border journeys, either a continuous FIP 50 Ticket or FIP Coupons for both countries are required.

{{% highlight important %}}
On some routes and in some regions, FIP Tickets are not valid, even if the services are operated by ČD.

Further information: [ČD services without FIP](#čd-services-without-fip)
{{% /highlight %}}

## Train Categories and Reservations

Seat reservations are only mandatory on SuperCity `SC` and some `IC` trains.

{{% train-category
    id="sc"
    title="SuperCity (SC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
    additional_information_url="https://www.cd.cz/en/nase-vlaky/supercity/pendolino/-27274/"
%}}
SuperCity trains offer the fastest connections on the Prague – Pardubice – Olomouc – Ostrava route. Twice daily, trains continue from Ostrava to Slovakia. They stop only at major stations and offer very comfortable travel in both 1st and 2nd class. The modern tilting trains ("Pendolino") feature a bistro and a high service standard. Bicycles, prams, and other bulky luggage can be taken on board.

In 1st class, passengers receive a small refreshment; in 2nd class, a bottle of water. Free newspapers are available in both classes. During the journey, an on-board entertainment and information portal is available, allowing passengers to order food and drinks to their seat, read books, listen to music, play games, or watch movies.

#### Reservation

A seat reservation is mandatory in both classes.

Reservation prices are variable (see [trains with mandatory reservations](#trains-with-mandatory-reservations)).
{{% /train-category %}}

{{% train-category
    id="rj"
    title="Railjet (RJ)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
    additional_information_url="https://www.cd.cz/en/nase-vlaky/railjet/railjet/-27275/"
%}}
Railjet trains connect Brno and Prague quickly and comfortably and also offer a direct connection via Břeclav to Vienna and Graz. They stop only at major stations. From December 2025, international ComfortJet trains between Prague and Germany/Denmark will also fall under this category. There are usually three classes:

**Economy**: Comparable to 2nd class. \
**First Class**: Comparable to 1st class. An FIP pass for 1st class is required. \
**Business**: 1st class with welcome drink and private compartments. Not usable with FIP Coupon (even with surcharge).

The trains feature modern rolling stock in the ÖBB Railjet style, but with blue exterior. Bicycles, prams, and other bulky luggage can be taken on board. Food and drinks are available in the restaurant car or via at-seat service. In 1st class, passengers receive a free bottle of water and a newspaper; in Business Class, additionally a welcome drink and a 50 CZK voucher for the restaurant (within Czechia only). For children, there is a dedicated children's cinema.

{{% highlight confusion %}}
Not to be confused with RegioJet trains, which are sometimes also marked as `RJ`. This private operator does not accept FIP Tickets.
{{% /highlight %}}

#### Reservation

Seat reservations are possible, and mandatory in Business Class.
{{% /train-category %}}

{{% train-category
    id="ec"
    title="Eurocity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
    additional_information_url="https://www.cd.cz/en/nase-vlaky/ec-ic/armpee/-27279/"
%}}
International long-distance trains with high comfort and regular-interval service. The air-conditioned coaches come from various railway companies and often include a popular restaurant car.
{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
    additional_information_url="https://www.cd.cz/en/nase-vlaky/ec-ic/armpee/-27279/"
%}}
Long-distance trains with high comfort, stopping only at major stations. Some are equipped with a restaurant car or minibar.

#### Reservation

A reservation is required for some trains (see [trains with mandatory reservations](#trains-with-mandatory-reservations)).
{{% /train-category %}}

{{% train-category
    id="ex"
    title="Expres (Ex)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
    additional_information_url="https://www.cd.cz/en/nase-vlaky/rychlik/interpanter/-27301/"
%}}
Fast trains in domestic traffic and between Prague and Žilina or Košice. They usually have modernized rolling stock and on-board catering.
{{% /train-category %}}

{{% train-category
    id="r"
    title="Rychlík (R)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.cd.cz/en/nase-vlaky/rychlik/interpanter/-27301/"
%}}
Fast trains in regional and long-distance traffic with more frequent stops than Express trains. They sometimes use older rolling stock and connect Prague with holiday regions in the Giant and Jizera Mountains as well as spa towns in Moravia and West Bohemia.
{{% /train-category %}}

{{% train-category
    id="sp"
    title="Spěšný vlak (Sp)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.cd.cz/en/nase-vlaky/regionalni-vlak-cd/regiopanter/-27532/"
%}}
Semi-fast trains in local traffic, often only with 2nd class.
{{% /train-category %}}

{{% train-category
    id="os"
    title="Osobní vlak (Os)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.cd.cz/en/nase-vlaky/regionalni-vlak-cd/regiopanter/-27532/"
%}}
Local trains stopping at all stations, often only with 2nd class.
{{% /train-category %}}

{{% train-category
    id="nj-en"
    title="Nightjet (NJ) / EuroNight (EN)"
    type="sleeper"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
    route_overview_url="https://www.cd.cz/en/nase-vlaky/nocni-vlaky/-27543/"
%}}
Night trains connect Czechia with Germany, Austria, Poland, Switzerland, Slovakia, and Hungary. The trains offer sleeping, couchette, and seated coaches and are operated abroad in cooperation with other railway companies.

For Nightjet trains, reservations/supplements for sleeping and couchette cars can be booked. For this, an FIP Coupon for the countries/railways being travelled through is required. If no FIP Coupon is used, a ticket at the FIP Global Fare for the entire route can be purchased.

{{% highlight important %}}
National free travel for Deutsche Bahn employees is not recognized in Germany. If any part of the Nightjet journey is in Germany (start, end, or transit), DB employees must purchase a ticket at the FIP Global Fare for the entire route. For journeys outside Germany with an FIP Coupon, a reservation/supplement for sleeping and couchette cars is required. The only exception is if the train also operates as an IC or EC on the German section, then this part can be used with DB free travel.
{{% /highlight %}}

#### Reservation

Depends on route, occupancy, and coach category.
{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

{{% booking id="cd-website" /%}}

{{% booking id="db-website-fip-db"
    subtitle="Cross-border FIP 50 Tickets between Germany and Czechia, with ticket portion only for the Czech section. For Deutsche Bahn employees only."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Cross-border FIP 50 Tickets between Germany and Czechia for the entire route (not valid in the issuing country of the FIP Card)"
/%}}

### On Site

{{% booking id="cd-ticket-office" /%}}

### On the Train

FIP-discounted tickets can only be purchased on the train if departure is from a station where the ticket office is closed.

## Discounts

For regular tickets, children up to 6 years travel free in 2nd class. Children up to 18 years receive a 50% discount on the adult fare. Persons aged 18 and over pay the full adult fare.

## Special Tariff Conditions

### ČD Commercial Services (Surcharge Required)

On so-called _commercial_ services operated by ČD, a surcharge must be purchased. These usually include only certain trains in the `SC`, `IC`, and `Ex` categories (and `R` trains marked "NATO Days"). [^3]

ČD provides an overview of affected services: [ČD commercial trains and selected lines 2024-2025](https://www.raildeliverygroup.com/images/RST/CD%20kommerzielle%20Zuge%20und%20ausgewahlte%20Linien%202024-2025.pdf)

For trains with mandatory reservations listed there, special rules apply—see [Trains with Mandatory Reservations](#trains-with-mandatory-reservations).

The surcharge costs about 125 CZK (as of November 2025) and can be purchased before departure at a ČD ticket office or on board (please contact the train staff directly). The validity of the surcharge matches the current field on the FIP Coupon (2 days) and is valid on all commercial services. [^3]

Refunds for surcharges are possible until 23:59 on the day before the first day of validity (no deduction) or within 15 minutes of purchase (no deduction). If an unused surcharge is returned by 08:00 on the first day of validity, a handling fee of 100 CZK is charged. In all other cases, no refund is possible. [^1]

#### Trains with Mandatory Reservations

Some ČD trains require a seat reservation. This includes all `SC` and some `IC` trains (all services are listed in the [commercial services](#čd-commercial-services-surcharge-required)). The affected `IC` trains mainly operate on the Prague – Ostrava route.

These trains require a special seat reservation (including surcharge). ČD currently does not offer a dedicated fare option for this. The following options for seat reservations are generally accepted: [^3]

- Purchase a reservation for ČD staff (fare: _Rail card ČD_) via the ČD website ([ČD eshop](https://www.cd.cz/en/eshop/default.htm)) or the ČD app (Můj vlak)
- Purchase a regular reservation (see [Ticket and Reservation Purchase](#ticket-and-reservation-purchase)) and additionally the [commercial surcharge](#čd-commercial-services-surcharge-required)

Before boarding, it may be helpful to inform the train staff.

### ČD Services without FIP

In principle, FIP is not valid on any ČD trains that operate under public tenders and where at least part of the route is not directly contracted by the Ministry of Transport. Trains in the `EC` and `RJ` categories are generally not affected and can always be used with FIP within Czechia. All other long-distance services (e.g. `SC`, `IC`, `Ex`) are considered [commercial services](#čd-commercial-services-surcharge-required) and can only be used with a surcharge.

For services contracted by regional authorities (trains in the `SP` and `OS` categories), ČD does not provide a list of eligible services. In case of doubt, you can ask ČD support or at a ČD ticket office which services accept FIP. However, the most important non-eligible services are as follows:

#### Regional Trains in the South Moravia Region (Brno)

FIP tickets are not valid on regional trains in South Moravia, even if operated by ČD.

Overview of the services: [Exclusion list CD JMK 2024-2025](https://www.raildeliverygroup.com/images/RST/Sperrliste%20CD%20JMK%202024-2025.pdf)

#### Regional Trains in the Pilsen Region

FIP tickets are not valid on some regional trains in the Pilsen area.

Overview of the services: [Exclusion list CD Region Pilsen 2024-2025](https://www.raildeliverygroup.com/images/RST/Sperrliste%20CD%20Region%20Pilsen%202024%20-%202025.pdf)

### Buses and Replacement Services

FIP Coupons are not valid on buses operated by ČD, except for rail replacement services.

For some connections, discounted tickets are available:

- Václav Havel Airport Prague – Praha hl. n. (Prague Main Station)
- Hranice na Moravĕ – Nový Jičin – Příbor – Frýdek-Místek

No FIP discounts apply on other connections.

A ticket (reservation required) must be purchased at least 15 minutes before departure at a ČD ticket office, ticket machine (no FIP available), or in the ČD eShop (no FIP available).

### Cable Cars

FIP discounts are not valid on cable cars operated by ČD.

### Special Trains and Historic Services

FIP discounts are not valid on special trains and historic services operated by ČD.

### Foreign Section (Děčín – Rumburk)

FIP Tickets are valid on the through routes 083 and 098 (Děčín – Rumburk via Dolní Žleb and Dolní Poustevna and back) even for journeys that leave and re-enter Czechia. However, boarding or alighting at an international station is not permitted.

### Journey Interruption

A journey interruption is not permitted on domestic journeys up to 100 km. For journeys of 101 km or more, interruption is possible (but not at an international station).

## Recommendations

The ČD Lounges in Praha hl. n., Olomouc hl. n., Břeclav, and Brno hl. n. can be used with a first-class FIP 50 Ticket or a FIP Coupon. They can also be accessed with a second-class ticket in combination with a seat reservation. [^2]

{{% highlight tip %}}
České dráhy enjoys a good reputation among passengers for reliable and mostly comfortable travel with very good service. Railway staff are usually very friendly and helpful. Connections often wait in case of delays, except at major hubs like Praha hl. n. Using the ČD app ("Můj vlak") is highly recommended, as it provides live data, coach compositions, and other important information.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)

[^2]: [ČD Lounges](https://www.cd.cz/en/dalsi-sluzby/sluzby-ve-stanici/-27959/)

[^3]: [Feedback: ČD reservations and commercial service](https://github.com/fipguide/fipguide.github.io/issues/467)
