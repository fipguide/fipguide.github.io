---
draft: false
title: MÁV
country:
  - hungary
operator: mav
---

MÁV (Magyar Államvasutak, Hungarian State Railways) is the main railway company in [Hungary](/country/hungary) and operates the majority of long-distance and regional traffic.

An overview of the offered traffic is provided by the [route network map of Hungary](https://www.mavcsoport.hu/sites/default/files/upload/page/trkp_mav_palyahalozat_2023_a0_1211_web.pdf) as well as the [line map of MÁV](https://www.mavcsoport.hu/sites/default/files/res/vasuthalozat_trkp_hu_2022_a3_0701_web.pdf).

## Summary

- FIP Coupons and FIP 50 Tickets are accepted at MÁV.
- FIP is not valid on MÁV buses, except in substitute rail service.
- Booking of FIP 50 and reservations is possible online, at the ticket office and at the machine.

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}

{{< fip-validity type="fip-reduced-ticket" status="valid" subtitle="FIP 50" >}}

FIP Coupons and FIP 50 Tickets are valid on MÁV connections. For cross-border journeys, either a continuous FIP 50 ticket or FIP Coupons from both countries must be available.

## Train Categories and Reservations

### Long-Distance Traffic

{{% train-category
    id="rj"
    title="Railjet (RJ) / Railjet Xpress (RJX)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

International long-distance trains in cooperation with ÖBB and other partner railways, for example on the Vienna – Budapest axis and Prague – Bratislava – Budapest. Economy Class (2nd class), First Class (1st class) and Business Class are available. A [dining car from ÖBB](https://www.oebb.at/de/reiseplanung-services/im-zug/bordservice) or [dining car from ČD](https://www.cd.cz/en/dalsi-sluzby/jidelni-vozy-a-obcerstveni-ve-vlaku/-27986/) is carried.

Business Class is not available for domestic journeys within Hungary. For international journeys, Business Class can be used with a 1st-class FIP Coupon pass or FIP 50 ticket; a supplement of € 22 applies.

{{< highlight confusion >}}
`RJ` can also stand for RegioJet. FIP tickets for MÁV are not valid on RegioJet trains.
{{< /highlight >}}

#### Reservations

Seat reservations are mandatory for domestic traffic, optional for international traffic.

{{% /train-category %}}

{{% train-category
    id="ic"
    title="InterCity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
%}}

National express trains with 2nd class passenger cars, some also with 1st class and premium class 1+ cars. Occasionally [restaurant cars](https://www.mavcsoport.hu/en/mav-szemelyszallitas/domestic-travels/utasellato-dining-cars) and/or [bistro cars](https://www.mavcsoport.hu/en/mav-szemelyszallitas/domestic-travels/utasellato-bistro-cars) are carried.

{{< highlight confusion >}}
`IC` trains in Hungary are sometimes also operated by [GySEV](/operator/gysev#ic).
{{< /highlight >}}

There are sometimes up to three car classes:

- **2nd Class**: Standard category on most national connections, usable with FIP authorization for 2nd class.
- **1st Class**: Premium category on some connections, usable with FIP authorization for 1st class.
- **Premium Class (1+)**: Premium category on the most important InterCity routes, offering a higher standard than 1st class. A surcharge applies for use.[^1] [Further information about the premium class can be found on the MÁV website.](https://www.mavcsoport.hu/mav-szemelyszallitas/szolgaltatasok/premium-osztaly)

#### Reservations

A reservation is mandatory.

{{% /train-category %}}

{{% train-category
    id="ec"
    title="EuroCity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
%}}

EuroCity trains are international express trains on routes between Budapest and Bratislava, Prague, Berlin or Warsaw. Most trains consist of Czech Railway cars, while the train to/from Berlin is formed from Hungarian cars and the train to/from Warsaw from Polish cars.
Sometimes a [restaurant car](https://www.mavcsoport.hu/en/mav-szemelyszallitas/domestic-travels/utasellato-dining-cars) is carried.

#### Reservations

Seat reservations are mandatory for domestic traffic, optional for international traffic.

{{% /train-category %}}

{{% train-category
    id="en"
    title="EuroNight (EN)"
    type="sleeper"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
    additional_information_url="https://www.mavcsoport.hu/en/mav-szemelyszallitas/international-travels/travel-night-trains"
%}}

Night trains in cooperation with partner railways, which either start/end in Budapest or pass through the capital (e.g. the `EN` between Vienna and Bucharest). The trains usually consist of sleeping, couchette and seat cars. Occasionally restaurant/bistro cars are carried.

#### Reservations

Reservations are mandatory.

{{% /train-category %}}

{{% train-category
    id="ir"
    title="InterRegio (IR)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

InterRegio connections are express trains in domestic traffic and form the basic schedule outside the international corridors. Usually only 2nd class is offered.

{{% /train-category %}}

{{% train-category
    id="ex"
    title="Expresszug (EX)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
%}}

Express trains that usually only run on weekends and during holidays. Various car types are used and most trains have 2nd and 1st class.

In connection information systems outside of MÁV, the trains may be listed with a different train category.

#### Reservations

A reservation is mandatory.

{{% /train-category %}}

{{% train-category
    id="gy"
    title="Györsvonat (GY)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Express trains used on many main routes – primarily where no InterCity trains operate. The trains stop in medium-sized and larger cities.
Usually older, but modernized compartment cars are used.

In connection information systems outside of MÁV, the trains may be listed as `IC`.

{{% /train-category %}}

### Regional Traffic

{{% train-category
    id="sz"
    title="Személyvonat (SZ)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Classic regional trains that stop at all intermediate stations.

{{< highlight confusion >}}
`SZ` trains in Hungary are sometimes also operated by [GySEV](/operator/gysev#sz).
{{< /highlight >}}

{{% /train-category %}}

{{% train-category
    id="sebesvonat"
    title="Sebesvonat (S)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Express trains that serve both regional and long-distance traffic. They therefore stop in some route sections almost everywhere, while for example near Budapest they only stop at the most important stations.

The S-Bahn trains in the Budapest region are also abbreviated as `S`, though these are always followed by a line number.

{{% /train-category %}}

{{% train-category
    id="er"
    title="EuRegio (ER)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Regional trains on the route Győr – Hegyeshalom – Bruck an der Leitha (– Vienna).

{{% /train-category %}}

{{% train-category
    id="bhev"
    title="Budapesti Helyiérdekű Vasút (BHÉV)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

The BHÉV or short HÉV lines connect Budapest with the suburbs in the surrounding area. They are identified by the letter H followed by the line number (H5 – H9).

{{% /train-category %}}

### Budapest S-Bahn

{{% train-category
    id="s"
    title="Személyvonat (S)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

S-trains are part of the Budapest S-Bahn and are the slowest trains. They are identified by the letter S followed by the line number.

The express trains _Sebesvonat_ of MÁV are also abbreviated with `S`, but these are not followed by a line number.

{{% /train-category %}}

{{% train-category
    id="g"
    title="Gyorsított személy (G)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

G-trains are part of the Budapest S-Bahn and are accelerated trains, i.e. they do not stop at all stations. They are identified by the letter G followed by the line number.

{{% /train-category %}}

{{% train-category
    id="z"
    title="Zónázó személy (Z)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Z-trains are part of the Budapest S-Bahn and are zone trains, i.e. they only stop at the most important stations in Budapest's city area and then at selected major suburban stations. They are identified by the letter Z followed by the line number.

{{% /train-category %}}

### Other

{{% train-category
    id="tramtrain"
    title="TramTrain Szeged – Hódmezővásárhely"
    type="tram"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
    additional_information_url="https://www.stadlerrail.com/de/loesungen/referenzen/citylink-mav"
%}}

The TramTrain between Szeged and Hódmezővásárhely can be used with FIP.[^1] Modern Stadler Citylink vehicles are used.

{{% /train-category %}}

{{% train-category
    id="balatonfenyves"
    title="Balatonfenyves Narrow Gauge Railway"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
    additional_information_url="https://www.mavcsoport.hu/mav-szemelyszallitas/szolgaltatasok/balatonfenyvesi-kisvasut"
%}}

The narrow-gauge railway from Balatonfenyves to Somogyszentpál and Csisztafürdő on the south shore of Lake Balaton is the last narrow-gauge railway operated by MÁV. It can be used with FIP.[^1]

{{% /train-category %}}

{{% train-category
    id="bus"
    title="Bus"
    type="bus"
    fip_accepted=false
    reservation_required=false
    reservation_possible=false
%}}

FIP tickets are not valid on MÁV buses. On buses in substitute rail service, FIP benefits apply if they replace a train in which FIP would have been valid.[^1]

{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

{{% booking id="mav-website" /%}}

### On-Site

{{% booking id="mav-ticket-office" /%}}

{{% booking id="mav-ticket-machine" /%}}

### On the Train

When purchasing FIP-discounted tickets or when changing class from 2nd to 1st class on the train, a surcharge applies.[^1]

## Discounts

{{< children-discount >}}

| Age                                  | Discount           |
| ------------------------------------ | ------------------ |
| {{< icon "child_care" >}} 0–13 years | Free of charge[^2] |
| {{< icon "child_hat" >}} 14–25 years | 50% discount[^2]   |
| {{< icon "person" >}} from 26 years  | Regular price[^2]  |

### Accompaniment of Children on International Journeys

On international journeys, children under 10 years of age may not travel unaccompanied by an adult. Children from 10 years of age must carry a signed [parental consent form](https://www.raildeliverygroup.com/files/Publications/services/rst/RST_FIP_MAV_Parental_Consent_form_v2.pdf). MÁV does not assume responsibility for unaccompanied children. Parents are liable for all damages caused by the child. If a child is found traveling unaccompanied and without a parental consent form, the authorities will be notified.[^1]

## Special Tariff Conditions

### 1st Class and 1+ Class

Since the 2024 fare reform, 1st Class travel in Hungary is available only on trains requiring a seat reservation. The surcharge for upgrading from 2nd to 1st Class is a flat rate of 1,000 HUF.
A seat reservation costs HUF 990 in 2nd Class and HUF 1,990 in 1st Class, unless the passenger holds a 1st Class FIP card; in that case, the 1st Class reservation costs HUF 990.

Reservations for 1+ Class cost HUF 3,990 and can be booked regardless of whether the passenger holds a 2nd Class or 1st Class FIP card. The reservation fee already includes the class upgrade surcharge, meaning it can also be purchased in conjunction with a 2nd Class FIP Coupon or FIP 50 ticket.

### No Reservation Requirement between Budapest-Keleti and Budapest-Kelenföld

On RJ, RJX, IC, EC and EX trains, a reservation is generally mandatory for domestic traffic. The Budapest-Keleti – Budapest-Kelenföld relation is exempted from this rule. The regulations for the respective train should be checked in MÁV's connection information before traveling.

### Premium Lounge in Budapest-Keleti

At Budapest-Keleti, the lounge is accessible to passengers holding sleeper reservations (Single, Double, Triple), including those traveling with FIP. Access is available for a duration of two hours, both prior to departure and upon arrival.

Full details and further information can be found on the [lounge information page](https://www.mavcsoport.hu/en/mav-szemelyszallitas/domestic-travels/premium-lounge).

### Break of Journey

A break of journey is possible at MÁV without additional formalities.[^1]

### Substitute Rail Service

On buses in substitute rail service, FIP benefits apply if they replace a train in which FIP would have been valid.[^1]

## Recommendations

{{% highlight tip %}}
For long-distance journeys, early booking of reservations is worthwhile, especially on the international axes to Vienna, Bratislava (and further to Prague) and Romania. For regional excursions in western Hungary, a combination of MÁV and GySEV connections is the most flexible solution. The rolling stock of MÁV is very different. Both modern passenger cars are used in long-distance traffic and Stadler trains on regional connections, as well as quite aged rolling stock without air conditioning, but with opening windows. Long-distance trains with dining cars are particularly recommended, as fresh cooking is sometimes done here and the menu offers a large selection.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group – Hungary](https://www.raildeliverygroup.com/rst/europe-and-fip/countries/469782275-hungary.html)

[^2]: [MÁV Domestic Travel - Prices and discounts](https://www.mavcsoport.hu/en/mav-szemelyszallitas/domestic-travels/faq-domestic-travel)
