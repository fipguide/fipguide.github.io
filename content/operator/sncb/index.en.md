---
draft: false
title: "SNCB / NMBS"
country:
  - "belgium"
operator: "sncb"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 coupon with 4 fields each per year. Each field is valid for two days."
      fip-coupon-relatives:
        status: valid
        text: "Available"
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
    sncf:
      fip-coupon:
        status: valid
        text: "4 coupons with 4 fields each per year. Each field is valid for two days."
      fip-coupon-relatives:
        status: valid
        text: "2 coupons with 4 fields each per year. Each field is valid for two days."
      fip-reduced-ticket:
        status: valid
        text: "50 % discount"
---

The SNCB (Société nationale des chemins de fer belges) or NMBS (Nationale Maatschappij der Belgische Spoorwegen) is the Belgian national railway operator and the most important railway operator in [Belgium](/country/belgium "Belgium").

## Summary

- SNCB accepts FIP Coupons and FIP 50 Tickets.
- No reservation required.
- Surcharge for trips to/from Brussels Zaventem Airport.

## Validity of FIP Tickets

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

FIP Coupons and FIP 50 Tickets are valid on SNCB connections. For cross-border trips, either a continuous FIP 50 ticket or FIP Coupons from both countries must be available.

## Train Categories and Reservations

Within Belgium, no reservation is required for SNCB and in many trains, it is not possible. For the cross-border ICE to Germany, a reservation is possible and was mandatory in summer 2024 (only for cross-border journeys).

{{% train-category
    id="ice"
    title="Intercity-Express (ICE)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

High-speed trains of Deutsche Bahn, operated by SNCB in Belgium. They run between Brussels (Midi) and Germany (Cologne / Frankfurt am Main), but can also be used with FIP Tickets without surcharge within Belgium between Brussels Midi and Liège-Guillemins.

{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Unlike in other countries, these are not real long-distance trains, but rather fast regional trains with few stops.

{{% /train-category %}}

{{% train-category
    id="ecd"
    title="Eurocity Direct (ECD)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}

International, supplement-required train between Lelystad, Amsterdam, and Brussels, stopping at Almere, Schiphol, Rotterdam, and Antwerp.

{{% highlight important %}}
**Supplement:**
Between Rotterdam and Schiphol, a [supplement](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) of € 3 must be paid for both FIP 50 Tickets and FIP Coupons.
This can be purchased [online](https://www.ns.nl/en/tickets/icd-supplement), in the NS app, or at ticket machines/counters. The supplement can be loaded onto an OV-chipkaart. Without an OV-chipkaart, an additional fee of € 1.50 is charged for a single-use ticket.
Holders of an OV-chipkaart can buy a discounted supplement for € 1.80 at the supplement counter in the station during [off-peak times](https://www.ns.nl/en/travel-information/off-peak-hours.html).
With FIP 50 Tickets, prices may vary by train category.
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="ec"
    title="Eurocity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}

International train between Rotterdam and Brussels with several intermediate stops.

{{% /train-category %}}

{{% train-category
    id="l"
    title="Train local oder Lokale trein (L)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Regional trains stopping at most stations, often simply referred to as `R` for regional train in connection information.

{{% /train-category %}}

{{% train-category
    id="s"
    title="Train S oder S-Trein (S)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

A suburban train in the metropolitan areas of Antwerp, Brussels, Charleroi, Ghent, or Liège. They connect the major cities with the suburbs and usually stop everywhere. Unlike in other countries, the S-trains here do not have denser schedules than other train categories. In the connection information, these are sometimes also summarized as `R` for regional train.

{{% /train-category %}}

{{% train-category
    id="p"
    title="Train d’heure de pointe oder Piekuurtrein (P)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Additional trains during peak hours from Monday to Friday mornings and late afternoons, often simply referred to as `R` for regional train in connection information.

{{% /train-category %}}

{{% train-category
    id="e"
    title="Express (E/EXP/EXTRA)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Additional trains during high traffic periods, especially in the summer months to the Belgian coast.

{{% /train-category %}}

{{% train-category
    id="t"
    title="Tourist (T)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Additional trains to certain tourist destinations, often simply referred to as `R` for regional train.

{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

Domestic journeys unfortunately cannot be purchased online.

{{% booking id="sncb-website"
    subtitle="Only for cross-border journeys to/from Belgium with FIP Coupon."
/%}}

{{% booking id="db-website-fip-db"
    subtitle="Cross-border FIP 50 Tickets between Germany and Belgium, with ticket portion only for the Belgian section. For Deutsche Bahn employees only."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Cross-border FIP 50 Tickets between Germany and Belgium for the entire route (not valid in the issuing country of the FIP Card)"
/%}}

### Telephone

{{% booking id="sncb-phone" /%}}

### On-site

{{% booking id="sncb-ticket-office" /%}}

{{% booking id="db-ticket-office" /%}}

### On the train

If no ticket counter is available or open, a ticket can be purchased on board the train from the conductor if approached immediately. The usual SNCB surcharge for on-board sales is not charged in this case. [^2]

## Discounts

Children up to 5 years old travel free on SNCB trains. Children aged 6 to 11 are entitled to a 50% discount on the adult fare, and from 12 years old, they pay the adult fare. If they are FIP eligible, they also pay only half the normal price with FIP 50. [^1]

## Special Tariff Conditions

### Brussels Zaventem Airport

For connections to and from Brussels Zaventem Airport, a surcharge must be paid for the FIP Coupon. This currently amounts to € 6.70 (see [SNCB info](https://www.belgiantrain.be/en/tickets-and-railcards/airports/brussels-airport)) and must also be paid if the note _No Supplement Necessary_ is indicated. For FIP 50 Tickets, this is already included in the price. [^1]

## Recommendations

{{% highlight tip %}}
The first class in SNCB / NMBS trains is often used with second class tickets. Also, the 1st class is usually not much more comfortable than the second class. Unlike in other countries, buying first class tickets to have more space and quiet is only worthwhile to a limited extent.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)

[^2]: [SNCB User Feedback](https://github.com/fipguide/fipguide.github.io/issues/275)
