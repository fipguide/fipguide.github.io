---
draft: false
title: "NS"
country:
  - "netherlands"
operator: "ns"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
      fip-coupon-relatives:
        status: valid
        text: "Disponible"
      fip-reduced-ticket:
        status: valid
        text: "50 % de réduction"
    sncf:
      fip-coupon:
        status: valid
        text: "4 coupons avec 4 champs chacun par an. Chaque champ est valable deux jours."
      fip-coupon-relatives:
        status: valid
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
      fip-reduced-ticket:
        status: valid
        text: "50 % de réduction"
---

Les Nederlandse Spoorwegen (NS) sont la compagnie ferroviaire nationale des [Pays-Bas](/country/netherlands "Pays-Bas") et assurent la majorité du trafic voyageurs dans le pays.

## Résumé

- NS accepte les Coupons FIP et les Billets FIP 50.
- Les réservations ne sont généralement pas nécessaires.
- Un supplément est requis pour l’Eurocity Direct (`ECD`) et partiellement pour l’Intercity Direct (`ICD`).
- Avec un Coupon FIP, un coupon d’accès aux portiques est requis pour entrer dans les gares.

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

Les Coupons FIP et Billets FIP 50 sont valables sur les trains NS. Pour les trajets transfrontaliers, il faut un Billet FIP 50 continu ou des Coupons FIP valables dans les deux pays.

## Catégories de trains et réservations

Aucune réservation n'est requise pour les trains NS aux Pays-Bas, et elle n'est généralement pas possible. Pour les trains internationaux `ICE` et `IC` vers l'Allemagne, la réservation est possible et sera obligatoire en été 2025 (uniquement pour les trajets transfrontaliers).

Un supplément est nécessaire pour les trains Eurocity Direct et, partiellement, pour les trains Intercity Direct.

{{% train-category
    id="ice"
    title="Intercity-Express (ICE)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
    reservation_possible=true
    additional_information_url="https://www.nsinternational.com/en/trains/ice"
%}}
Trains à grande vitesse de la Deutsche Bahn, exploités aux Pays-Bas par NS. Ils circulent entre Amsterdam et l'Allemagne (Cologne / Francfort-sur-le-Main ou Hanovre / Berlin), mais peuvent également être utilisés à l'intérieur des Pays-Bas entre Amsterdam et Arnhem ou Hengelo avec un Coupon FIP sans supplément. Avec un Billet FIP 50, un supplément est toutefois requis.

{{% highlight important %}}
Lors de l'utilisation de Billets FIP 50 pour des trajets nationaux aux Pays-Bas, un [supplément ICE](https://www.ns.nl/en/tickets/ice-supplement) de 3 € par trajet doit être payé. Aucun supplément n'est requis avec un Coupon FIP.

Le supplément peut être acheté [en ligne](https://www.ns.nl/en/tickets/ice-supplement), via l'application NS ou sur place au guichet ou au distributeur. Sur place, il peut être chargé sur une carte OV-chipkaart. Sans carte OV-chipkaart, des frais supplémentaires de 1,50 € s'appliquent pour un billet unique.
{{% /highlight %}}

#### Réservation

Une réservation est obligatoire pour les trajets transfrontaliers en haute saison.

{{% /train-category %}}

{{% train-category
    id="ecd"
    title="Eurocity Direct (ECD)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}
Train international avec supplément entre Lelystad, Amsterdam et Bruxelles, avec arrêts à Almere, Schiphol, Rotterdam et Anvers.

{{% highlight important %}}
Entre Rotterdam et Schiphol, un [supplément](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) de 3 € est requis pour les Billets FIP 50 et les Coupons FIP.

Ce supplément peut être acheté [en ligne](https://www.ns.nl/en/tickets/icd-supplement), via l'application NS ou sur place au guichet ou au distributeur. Il peut être chargé sur une carte OV-chipkaart. Sans carte OV-chipkaart, des frais supplémentaires de 1,50 € s'appliquent pour un billet unique.

Les détenteurs d'une carte OV-chipkaart peuvent acheter un supplément à tarif réduit (1,80 €) au guichet pendant les [heures creuses](https://www.ns.nl/en/travel-information/off-peak-hours.html).
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="ec"
    title="Eurocity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    additional_information_url="https://www.nsinternational.com/en/trains/eurocity"
%}}
Train international entre Rotterdam et Bruxelles avec plusieurs arrêts intermédiaires.
{{% /train-category %}}

{{% train-category
    id="icd"
    title="Intercity Direct (ICD)"
    type="highspeed"
    fip_accepted=partially
    reservation_required=false
    additional_information_url="https://www.ns.nl/en/travel-information/special-routes/intercity-direct.html"
%}}
Train rapide, partiellement avec supplément, entre Lelystad ou Amersfoort, Amsterdam Zuid, Schiphol Airport, Rotterdam Centraal et Breda.

{{% highlight important %}}
Avec un Billet FIP 50 entre Rotterdam et Schiphol, un [supplément](https://www.ns.nl/en/season-tickets/other/intercity-direct-supplement.html) de 3 € est requis. Avec un Coupon FIP, le supplément n'est pas nécessaire.

Ce supplément peut être acheté [en ligne](https://www.ns.nl/en/tickets/icd-supplement), via l'application NS ou sur place au guichet ou au distributeur. Il peut être chargé sur une carte OV-chipkaart. Sans carte OV-chipkaart, des frais supplémentaires de 1,50 € s'appliquent pour un billet unique.

Les détenteurs d'une carte OV-chipkaart peuvent acheter un supplément à tarif réduit (1,80 €) au guichet pendant les [heures creuses](https://www.ns.nl/en/travel-information/off-peak-hours.html).
{{% /highlight %}}

{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
%}}
Contrairement à d'autres pays, il ne s'agit pas de véritables trains longue distance, mais plutôt de trains régionaux rapides avec peu d'arrêts.
{{% /train-category %}}

{{% train-category
    id="re"
    title="Sneltrein (RE)"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Trains régionaux avec plus d'arrêts que les Intercity, mais uniquement dans les gares principales.

{{% highlight confusion %}}
Les trains de la catégorie Sneltrein / Regional-Express `RE`, notamment les liaisons Venlo – Hamm (Allemagne), Maastricht – Aix-la-Chapelle (Allemagne) et Arnhem – Düsseldorf (Allemagne), ainsi que d'autres liaisons RE, ne sont pas exploités par NS et ne sont pas accessibles avec FIP.
{{% /highlight %}}
{{% /train-category %}}

{{% train-category
    id="sprinter"
    title="Sprinter"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Trains régionaux pour les courtes distances, avec arrêt dans toutes les gares du parcours.
{{% /train-category %}}

## Achat de billets et réservations

### En ligne

Les trajets nationaux ne peuvent malheureusement pas être achetés en ligne.

{{% booking id="sncb-website"
  subtitle="Uniquement pour les trajets transfrontaliers à destination ou en provenance de la Belgique avec un Coupon FIP."
/%}}

{{% booking id="db-website"
    subtitle="Pour les connexions ICE et IC transfrontalières"
/%}}

{{% booking id="db-website-fip-db"
    subtitle="Billets FIP 50 transfrontaliers entre l’Allemagne et les Pays-Bas, avec part de billet uniquement pour la section néerlandaise. Réservé aux employés de la Deutsche Bahn."
/%}}

{{% booking id="db-website-fip-international"
    subtitle="Billets FIP 50 transfrontaliers entre l’Allemagne et les Pays-Bas pour l’ensemble du trajet (non valables dans le pays d’émission de la Carte FIP)"
/%}}

### Par téléphone

{{% booking id="ns-phone" /%}}

### En gare

{{% booking id="ns-ticket-office" /%}}

{{% booking id="db-ticket-office" /%}}

### À bord du train

Les Billets FIP 50 ne peuvent pas être achetés à bord. [^1]

## Réductions

Aucune réduction particulière connue.

## Conditions tarifaires spéciales

### Portiques d’accès dans les gares

Avec un Coupon FIP, un coupon d’accès NS avec code-barres vous est fourni pour ouvrir les portiques. \
Ce n’est pas un billet, mais un badge d’accès, valable :

- Pendant 8 jours distincts, sur une période de 3 mois.
- Chaque jour (de 00h00 à 23h59) :
  - Jusqu’à 6 passages (entrée/sortie) à la même gare.
  - Jusqu’à 12 passages en tout par jour.

Si nécessaire, un nouveau coupon d’accès peut être demandé au guichet NS.

## Recommandations

{{% highlight tip %}}
NS se distingue par une grande fréquence et des connexions efficaces. Des retards et annulations peuvent survenir, mais ils sont souvent compensés par des fréquences élevées. Évitez de planifier des correspondances serrées, car les trains n’attendent généralement pas. La 1ʳᵉ classe NS offre peu de différences par rapport à la 2ᵉ classe.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)
