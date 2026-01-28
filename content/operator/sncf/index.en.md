---
draft: false
title: "SNCF Voyageurs"
country:
  - "france"
  - "monaco"
  - "italy"
  - "spain"
  - "belgium"
  - "luxembourg"
operator: "sncf"
---

SNCF (Société Nationale des Chemins de fer Français) is the French national railway company and the main rail operator in [France](/country/france "France"). It operates almost all long-distance and regional trains in France.

## Summary

- Reservations are always required for long-distance trains (`TGV` inOui and Intercités).
- FIP discounts are not valid on OUIGO trains.
- Some suburban trains and tram lines in Paris can be used under special conditions.
- Global fares apply for international long-distance trains.
- FIP discounts also apply on SNCF buses (except long-distance buses).

## Validity of FIP Tickets

FIP Coupon: ✅ \
FIP Coupon for relatives: ⛔ \
FIP 50 Ticket: ✅ \
FIP Global Fare: ✅ (For international `TGV` trains, see [International TGV inOui / ICE trains](#international-tgv-inoui--ice-trains))

FIP Coupons and FIP 50 Tickets are valid on SNCF services. For cross-border journeys on local trains, either a continuous FIP 50 Ticket or FIP Coupons for both countries are required. For international long-distance services (`TGV` or `ICE`), global fares apply (see [International TGV inOui / ICE trains](#international-tgv-inoui--ice-trains)).

## Train Categories and Reservations

Reservations are mandatory on all `TGV`, almost all `IC` trains, and some regional trains (`TER`). FIP is not valid on OUIGO trains. For trains requiring reservations, the FIP 50 Ticket price always includes a reservation.

### Long-distance

{{% train-category
  id="tgv-inoui"
  title="Train à grande vitesse inOui (TGV inOui) / TGV Lyria"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
  route_overview_url="https://www.sncf-connect.com/assets/media/2021-05/2014_axes-tgv_0.pdf"
%}}
The `TGV` inOui is SNCF Voyageurs's high-speed train, connecting many cities in France and international destinations (e.g. Munich, Frankfurt am Main, Barcelona, Luxembourg, Brussels, Milan). Additionally, `TGV` Lyria trains run from France to Switzerland (Basel, Zurich, Lausanne, Geneva).

{{% highlight confusion %}}
SNCF also operates low-cost long-distance trains under the OUIGO brand, but these are not valid with FIP.
{{% /highlight %}}

{{% highlight important %}}
Special conditions apply for international connections, see [International TGV inOui / ICE trains](#international-tgv-inoui--ice-trains).

{{% /highlight %}}

#### Reservation

Prices differ between peak and off-peak trains for national journeys. The classification is not publicly available.

|                   | 1st class | 2nd class |
| ----------------- | --------- | --------- |
| National Off-peak | €2        | €2        |
| National Peak     | €16       | €11       |

{{% /train-category %}}

{{% train-category
  id="ouigo"
  title="OUIGO (Grande Vitesse / Train Classique)"
  type="highspeed"
  fip_accepted=false
  reservation_required=true
%}}

OUIGO (Grande Vitesse) is SNCF's low-cost high-speed train connecting numerous cities in France and some international destinations. There are also OUIGO Classique trains composed of conventional coaching stock.

{{% highlight confusion %}}
SNCF also operates `TGV` trains under the inOui brand, which are valid with FIP.
{{% /highlight %}}
{{% /train-category %}}

{{% train-category
  id="ice"
  title="Intercity-Express (ICE)"
  type="highspeed"
  fip_accepted=true
  reservation_required=true
%}}
International high-speed trains operated by SNCF in cooperation with Deutsche Bahn, running between France (Paris Est, Strasbourg) and Germany (Karlsruhe, Mannheim, Frankfurt am Main, Erfurt, Halle (Saale) and Berlin or Stuttgart and Munich).

{{% highlight important %}}
Special conditions apply for international connections, see [International TGV inOui / ICE trains](#international-tgv-inoui--ice-trains).
{{% /highlight %}}

#### Reservation

Prices differ between peak and off-peak trains for national journeys. The classification is not publicly available.

|                   | 1st class | 2nd class |
| ----------------- | --------- | --------- |
| National Off-peak | €2        | €2        |
| National Peak     | €16       | €11       |
| International     | €40       | €20       |

{{% /train-category %}}

{{% train-category
  id="intercites"
  title="Intercité (IC)"
  type="highspeed"
  fip_accepted=true
  reservation_required=partially
%}}
Intercity trains operated by SNCF, connecting various cities in France, mostly requiring reservations.

On the [Intercités website](https://www.sncf-voyageurs.com/en/voyagez-avec-nous/en-france/intercites/nos-destinations-intercites/) of SNCF, you can find a list of routes with and without mandatory reservations. Alternatively, you can use the [train search](https://www.sncf-voyageurs.com/en/voyagez-avec-nous/horaires-et-itineraires/recherche-de-train/) on the SNCF website to check the reservation requirements for each train number.

#### Reservation

Prices differ between peak and off-peak trains for national journeys. The classification is not publicly available.

|                   | 1st class | 2nd class |
| ----------------- | --------- | --------- |
| National Off-peak | €2        | €2        |
| National Peak     | €16       | €11       |

{{% /train-category %}}

{{% train-category
  id="intercites-de-nuit"
  title="Intercité de nuit"
  type="sleeper"
  fip_accepted=true
  reservation_required=true
%}}
SNCF night trains within France. International Nightjet connections ended in December 2025.

#### Reservation

Cost depends on route and occupancy.

{{% /train-category %}}

### Regional

{{% train-category
  id="ter"
  title="Train express régional (TER)"
  type="regional"
  fip_accepted=true
  reservation_required=partially
%}}
`TER` is SNCF's regional train, connecting various cities in France.
Some lines from Paris require reservations, see [Reservation requirement in regional trains](#reservation-requirement-in-regional-trains).

{{% highlight confusion %}}
On the Marseille – Nice route, Transdev operates the trains, so FIP is not accepted. However, on the Marseille – Toulon route, SNCF trains are also used, where FIP is accepted. Prior verification of the operator is essential here.
{{% /highlight %}}
{{% /train-category %}}

{{% train-category
  id="rer"
  title="Réseau Express Régional (RER)"
  type="regional"
  fip_accepted=partially
  reservation_possible=false
%}}
RER is a suburban train operated by SNCF in Île de France (Greater Paris) and surrounding cities.

{{% highlight important %}}
FIP is only valid on certain RER lines, see [Trains in Greater Paris](#trains-in-greater-paris)
{{% /highlight %}}
{{% /train-category %}}

## Ticket and Reservation Purchase

### Online

Domestic journeys unfortunately cannot be purchased online.

{{% booking id="db-website-fip-db"
  subtitle="Cross-border FIP 50 Tickets for TGV/ICE and regional trains between Germany and France, with ticket valid only for the French section. Only for Deutsche Bahn employees."
  reservations=false
  classes.first="nil"
  classes.second="nil"
/%}}

{{% booking id="db-website-fip-international"
  subtitle="Cross-border FIP 50 Tickets for regional trains between Germany and France for the entire route (not valid in the country of issue of the FIP Card)."
  reservations=false
  classes.first="nil"
  classes.second="nil"
/%}}

{{% booking id="sncb-website"
  subtitle="Cross-border tickets with FIP Coupon for SNCB"
/%}}

### By Phone

{{% booking id="sncf-phone" /%}}

### On Site

{{% booking id="sncf-ticket-office" /%}}

{{% booking id="transilien-ticket-office" subtitle="For tram lines and trains in Greater Paris" /%}}

{{% booking id="db-ticket-office" subtitle="For cross-border TGV/ICE trains between Germany and France"
    reservations="nil"
    classes.first="nil"
    classes.second="nil"
%}}
At DB Reisezentrum, cross-border FIP 50 Tickets for TGV/ICE trains between Germany and France can be purchased. It is currently unknown if booking for domestic French trains is possible.
{{% /booking %}}

### On the Train

FIP tickets cannot be purchased on board.

## Discounts

With regular tickets, children up to and including 4 years travel free. Children up to and including 12 years receive a 50% discount on the adult fare. From 12 years, the full adult fare applies.

## Special Tariff Conditions

### Reservation requirement in regional trains

On some `TER` regional train lines there is a reservation requirement. This applies only to journeys to or from Paris. There is no reservation requirement for all other journeys. [^2]

This reservation requirement applies to the following lines:

#### Normandie TER NOMAD _Krono +_ trains:

- Paris – Rouen – Le Havre
- Paris – Caen – Cherbourg
- Paris – Caen
- Paris – Trouville-Deauville

#### Normandie TER NOMAD _Krono_ trains:

- Paris – Argentan – Granville
- Paris – Dieppe

#### TER Grand Est

- Line 1: Paris – Épernay – Châlons – Strasbourg
- Line 4: Paris – Troyes – Chaumont – Mulhouse

### International TGV inOui / ICE trains

{{% train-category
  id="tgv-ice-germany"
  title="TGV/ICE trains to Germany"
  type="highspeed"
  fip_accepted=true
  reservation_required=partially
%}}
International `TGV` and `ICE` trains are reservation-required in the French section. In Germany, reservations are not required and FIP Coupons are valid.

For journeys within France, the standard domestic `TGV` reservation fees apply. International journeys require a cross-border reservation:

|                        | 1st class | 2nd class |
| ---------------------- | --------- | --------- |
| Within France Off-peak | €2        | €2        |
| Within France Peak     | €16       | €11       |
| International          | €40       | €20       |

{{% /train-category %}}

{{% train-category
  id="tgv-italy-spain-belgium"
  title="TGV trains to Italy, Spain, and Belgium"
  type="highspeed"
  fip_accepted=partially
  reservation_required=true
%}}
International `TGV` services from France to Italy, Spain, or Belgium are reservation-required throughout and FIP Coupons are not valid. Instead, FIP Global Fares can be purchased, which can be expensive (up to €130).
{{% /train-category %}}

{{% train-category
  id="tgv-luxembourg"
  title="TGV trains to Luxembourg"
  type="highspeed"
  fip_accepted=partially
  reservation_required=true
%}}
Cross-border `TGV` connections from France to Luxembourg require reservations for the entire journey, and FIP Coupons are not valid. Instead, FIP Global Fares can be purchased.

Prices as of 2026: [^11]

|                        | 1st class | 2nd class |
| ---------------------- | --------- | --------- |
| Paris – Luxembourg     | €61       | €88       |
| Marseille – Luxembourg | €74       | €113      |

{{% /train-category %}}

{{% train-category
  id="tgv-lyria"
  title="TGV Lyria trains to Switzerland"
  type="highspeed"
  fip_accepted=partially
  reservation_required=partially
%}}
International `TGV` Lyria services from France to Switzerland are reservation-required in the French section and FIP Coupons are not valid. FIP Global Fares can be purchased. In Switzerland, reservations are not required and FIP Coupons are valid.
{{% /train-category %}}

### Trains in Greater Paris

Île-de-France Mobilités (ÎDF Mobilités) coordinates various transport operators in Greater Paris, including RATP and SNCF.

RATP operates the Paris Métro, bus lines, and part of the tram and RER networks. SNCF operates the rest of the RER network and some tram lines. FIP discounts do not apply on RATP services.

{{% train-category
  id="rer-paris"
  title="RER trains"
  type="regional"
  fip_accepted=partially
  reservation_possible=nil
%}}
Some RER lines are operated by SNCF. FIP discounts apply on the following sections:

- RER Line A – only branches A3 & A5 west of Nanterre Préfecture to Poissy or Cergy-le-Haut
- RER Line B – only branches B3 & B5 north of Gare du Nord to Aéroport Charles de Gaulle or Mitry-Claye
- RER Line C – entire line
- RER Line D – entire line
- RER Line E – entire line

Note: For journeys between Gare du Nord and Châtelet – Les Halles, only SNCF-operated RER Line D can be used. FIP discounts are not valid on RATP-operated RER Line B on the same section.

Access to some stations is restricted by ticket barriers. When using FIP Coupons, a temporary access pass is required, see [Ticket barriers](#ticket-barriers).
{{% /train-category %}}

{{% train-category
  id="transilien"
  title="Transilien trains"
  type="regional"
  fip_accepted=true
  reservation_possible=nil
%}}
FIP discounts apply on all Transilien lines H, J, K, L, N, P, R, U, and V.

Access to some stations is restricted by ticket barriers. When using FIP Coupons, a temporary access pass is required, see [Ticket barriers](#ticket-barriers).
{{% /train-category %}}

{{% train-category
  id="trams-paris"
  title="Trams"
  type="tram"
  fip_accepted=partially
  reservation_possible=nil
%}}
The following tram lines accept FIP:[^4]

- T4, T11, T14: Operated by Stretto (joint venture of SNCF and Keolis)[^5]<sup>,</sup>[^7]<sup>,</sup>[^8]
- T9: Operated by Keolis[^6]

FIP discounts are no longer valid on tram lines T12 and T13 since December 2025.[^3]<sup>,</sup>[^10] FIP discounts do not apply on other tram lines, as these are operated by RATP.

Access to some stations is restricted by ticket barriers. When using FIP Coupons, a temporary access pass is required, see [Ticket barriers](#ticket-barriers).
{{% /train-category %}}

#### Ticket barriers

{{% float-image
  src="contramarquedePassage.webp"
  alt="Contramarque de Passage"
  width="60%"
  position="right"
%}}
Discounted FIP tickets for `RER`, Transilien trains, and trams can be purchased at Transilien ticket counters. When using these services with an SNCF FIP Coupon, a free _Contremarque de Passage_ (temporary access card) must be collected at the Transilien ticket counter for each journey. Usually, only a few are issued at a time.
{{% /float-image %}}

{{% highlight important %}}
Many stations with ticket barriers are not staffed. While there are help intercoms, they work unreliably. Without the _Contremarque de Passage_ (temporary access card), there is often no way to gain access to the stations.
{{% /highlight %}}

### Bus Services

FIP discounts also apply on buses operated by SNCF, except for long-distance buses (e.g. BlaBlaCar Bus). [^1]

## Recommendations

{{% highlight tip %}}
SNCF is not the easiest railway company for FIP, as reservations are often required. It is recommended to plan journeys at least a few days in advance, as trains may be fully booked. However, SNCF is known for fast connections from Paris in all directions, e.g. the 406 km journey between Paris and Strasbourg takes only about 1 hour and 45 minutes.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)

[^2]: [SNCF NOMAD](https://www.ter.sncf.com/normandie/tarifs-cartes/offre-krono-plus/reservation)

[^3]: [Le Parisien](https://www.leparisien.fr/info-paris-ile-de-france-oise/transports/keolis-exploitera-la-ligne-18-du-grand-paris-express-et-ratp-dev-recuperera-les-trams-t12-et-t13-05-06-2024-Y24JESM3Q5FJREHDTNCN2MSAQU.php)

[^4]: [Wikipedia: Tramway d'Île-de-France](https://fr.wikipedia.org/wiki/Tramway_d%27%C3%8Ele-de-France#Principales_caract%C3%A9ristiques)

[^5]: [Wikipedia: Ligne 4 du tramway d'Île-de-France](https://fr.wikipedia.org/wiki/Ligne_4_du_tramway_d%27%C3%8Ele-de-France)

[^6]: [Wikipedia: Ligne 9 du tramway d'Île-de-France](https://fr.wikipedia.org/wiki/Ligne_9_du_tramway_d%27%C3%8Ele-de-France)

[^7]: [Wikipedia: Ligne 11 du tramway d'Île-de-France](https://fr.wikipedia.org/wiki/Ligne_11_du_tramway_d%27%C3%8Ele-de-France)

[^8]: [Wikipedia: Ligne 14 du tramway d'Île-de-France](https://fr.wikipedia.org/wiki/Ligne_14_du_tramway_d%27%C3%8Ele-de-France)

[^9]: [Discord](https://discord.com/channels/1250522473188032512/1459083587361046702/1459089440118145065)

[^10]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/stop-press/469780253-changes-to-fip-on-the-paris-tramway.html)

[^11]: [FIP Guide Community: TGV to Luxembourg](https://discord.com/channels/1250522473188032512/1456387852836274240)
