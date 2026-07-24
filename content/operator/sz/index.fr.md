---
draft: false
title: "SŽ"
country:
  - "slovenia"
operator: "sz"
params:
  transitous_mapping:
    - query: agencyName == "Slovenske železnice"
    - query: agencyName == "SŽ"
---

Les Slovenske železnice (SŽ) sont la compagnie ferroviaire nationale de [Slovénie](/country/slovenia "Slovénie") et exploitent la majorité des services de voyageurs sur le réseau ferroviaire slovène.

## Résumé

- Les billets FIP réduits et les Coupons FIP sont acceptés.
- Les réservations et/ou les suppléments sont obligatoires pour de nombreuses catégories de trains avec un Billet FIP 50.
- Aucun billet FIP n’est vendu en ligne.

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

Les Coupons FIP et les Billets FIP 50 sont valables sur les services SŽ. Pour les trajets transfrontaliers, soit un Billet FIP 50 continu, soit des Coupons FIP pour les deux pays sont requis.

## Catégories de trains et réservations

{{% highlight important %}}
Les catégories de trains SŽ sont affichées dans les horaires comme décrit ci-dessous. Dans d’autres recherches d’itinéraire, les désignations peuvent différer nettement. Par exemple, les trains régionaux sont souvent indiqués simplement comme `R`. En cas de doute, comparez le numéro de train avec l’horaire SŽ.

Dans la recherche d’horaires en ligne de SŽ, les liaisons transfrontalières sont parfois affichées uniquement jusqu’à la frontière.
{{% /highlight %}}

{{% train-category
    id="ics"
    title="InterCity Slovenia (ICS)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
%}}

Trains nationaux grandes lignes exploités avec le type de train [SŽ 310 “Pendolino”](https://potniski.sz.si/en/train/emg-310-316-pendolino/). Ces trains utilisent la technologie pendulaire, offrent des temps de trajet plus courts et peu d’arrêts intermédiaires. En semaine, un petit bistrot propose également des snacks et des boissons. La ligne est principalement exploitée entre Ljubljana et Maribor.

#### Réservation

Sur les trains `ICS`, une réservation et un supplément sont obligatoires. Le supplément coûte actuellement 3 € et doit être payé pour les Billets FIP réduits comme pour les Coupons FIP.[^1]
{{% /train-category %}}

{{% train-category
    id="ic"
    title="InterCity (IC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Trains grandes lignes avec peu d’arrêts intermédiaires qui relient les grandes villes. Ils circulent généralement uniquement en Slovénie ; les trains internationaux vers Budapest via l’Autriche sont également parfois indiqués comme `IC` sur certains tronçons.

#### Réservation

Aucune réservation n’est obligatoire, mais un supplément de 1,50 € s’applique aux Billets FIP réduits. Lors de l’utilisation de Coupons FIP, ce supplément n’est pas dû.[^1]
{{% /train-category %}}

{{% train-category
    id="ec"
    title="EuroCity (EC)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Trains internationaux relativement rapides qui relient la Slovénie à l’Autriche ou à la Croatie.

#### Réservation

Aucune réservation n’est obligatoire, mais un supplément de 1,50 € s’applique aux Billets FIP réduits. Lors de l’utilisation de Coupons FIP, ce supplément n’est pas dû.[^1]
{{% /train-category %}}

{{% train-category
    id="mv"
    title="Mednarodni vlaki (MV)"
    type="highspeed"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}

Trains internationaux qui circulent entre la Slovénie et l’Autriche, la Hongrie ou la Croatie. Ils effectuent peu d’arrêts intermédiaires.

#### Réservation

Aucune réservation n’est obligatoire, mais un supplément de 1,50 € s’applique aux Billets FIP réduits lorsque le trajet se déroule uniquement en Slovénie.[^2] Lors de l’utilisation de Coupons FIP, ce supplément n’est pas dû.
{{% /train-category %}}

{{% train-category
    id="en"
    title="EuroNight (EN)"
    type="sleeper"
    fip_accepted=true
    reservation_required=true
%}}

Trains de nuit internationaux vers la Croatie, l’Autriche et l’Allemagne. Les trains proposent des voitures-couchettes et des voitures-lits ainsi que des voitures assises, et sont exploités à l’étranger en coopération avec d’autres compagnies ferroviaires.

#### Réservation

Des réservations / suppléments pour les voitures-couchettes et les voitures-lits peuvent être achetés sur les trains EuroNight. Un Coupon FIP est requis pour les pays / compagnies ferroviaires traversés. Si aucun Coupon FIP n’est utilisé, un billet au Tarif Global FIP pour l’ensemble du trajet peut être acheté.

**Coût :** dépend du trajet, du taux de remplissage et de la catégorie de voiture.

Pour les voyages entièrement en Slovénie, un supplément de 1,50 € s’applique aux Billets FIP réduits.[^2] Lors de l’utilisation de Coupons FIP, ce supplément n’est pas dû.
{{% /train-category %}}

{{% train-category
    id="lpv"
    title="Lokalni potniški vlaki (LP ou LPV)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Trains régionaux nationaux qui desservent généralement aussi les petites gares.
{{% /train-category %}}

{{% train-category
    id="rg"
    title="Regionalni (RG)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Trains régionaux nationaux, similaires à [LP/LPV](#lpv).
{{% /train-category %}}

{{% train-category
    id="mo"
    title="Maloobmejnia (MO)"
    type="regional"
    fip_accepted=true
    reservation_possible=false
%}}

Trains régionaux qui circulent en correspondance transfrontalière.
{{% /train-category %}}

{{% train-category
    id="avt"
    title="Avtovlak (AVT)"
    type="highspeed"
    fip_accepted=false
%}}

Trains automobiles qui traversent le plus long tunnel ferroviaire de Slovénie (tunnel de Bohinj). FIP n’est pas valable ici.
{{% /train-category %}}

{{% train-category
    id="bus"
    title="Bus"
    type="bus"
    fip_accepted=false
%}}

Bus SŽ. FIP n’est pas valable, sauf s’il s’agit d’un service de remplacement ferroviaire.
{{% /train-category %}}

## Achat de billets et de réservations

### En ligne

{{% booking id="db-website"
    subtitle="Réservations de siège uniquement pour certains trains (sauf ICS)"
/%}}

### Sur place

{{% booking id="sz-ticket-office" /%}}

### À bord du train

Des billets FIP nationaux peuvent également être achetés à bord, notamment lorsque l’on entre en Slovénie avec un billet valable uniquement jusqu’à la frontière slovène.[^1]
Les passagers montant dans une gare disposant d’un guichet qui ne peuvent pas prouver qu’ils n’ont pas pu acheter de billet sur place doivent payer une surtaxe supplémentaire.[^2]

Des suppléments pour les catégories de trains ICS, IC, MV, EC et EN peuvent également être achetés à bord à prix fixe, même si un guichet est disponible à la gare.[^2] Les réservations doivent être effectuées avant le départ.

Le paiement à bord ne peut se faire qu’en espèces et en euros.

## Réductions

Les enfants jusqu’à 5 ans inclus voyagent gratuitement. À partir de 6 ans, le tarif adulte FIP régulier s’applique.[^1]

## Conditions tarifaires spéciales

### Interruption de trajet

Une interruption de voyage est possible à tout moment pendant la période de validité du billet.[^1]

### Service de remplacement ferroviaire

Les concessions FIP s’appliquent aux bus de remplacement ferroviaire lorsqu’ils remplacent un train sur lequel FIP aurait été valable.

## Recommandations

{{% highlight tip %}}
SŽ exploite un service ferroviaire relativement fiable dans tout le pays. Cependant, en raison de vastes travaux de modernisation et de sections à voie unique, des retards se produisent parfois. Les plus grandes villes et les attractions touristiques les plus connues sont accessibles par rail.

Il n’y a pas de véritable horaire cadencé. Une bonne planification est donc importante. Alors que les liaisons vers l’Autriche ont été nettement améliorées ces dernières années, il y a encore très peu de trains vers l’Italie et la Hongrie. Vers la Croatie, l’offre de base est solide. Hormis les suppléments et les réservations requis, l’utilisation de FIP reste assez simple. Le personnel est généralement sympathique et parle souvent anglais.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip/countries/469782292-slovenia.html)

[^2]: [Informations sur les suppléments SŽ](https://potniski.sz.si/en/tickets/supplements-to-the-ticket-price/)
