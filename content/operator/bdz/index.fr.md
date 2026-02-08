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
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
---

Balgarski Darschawni Schelesnizi (BDŽ) est la compagnie ferroviaire nationale de [Bulgarie](/country/bulgaria "Bulgarie") et exploite actuellement presque tous les services voyageurs sur le réseau ferroviaire bulgare.

## Résumé

- Les Billets FIP 50 et les Coupons FIP sont acceptés
- Réservation obligatoire dans certains trains
- Possibilités de réservation très limitées

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

Les Coupons FIP et les Billets FIP 50 sont valables sur les services BDŽ. Pour les trajets transfrontaliers, un Billet FIP 50 continu ou des Coupons FIP valables dans chaque pays sont nécessaires.

## Catégories de trains et réservations

{{% highlight important %}}
Les catégories de trains sont affichées dans les horaires BDŽ comme décrit ci-dessous. Dans d'autres horaires, les trains sont souvent simplement indiqués comme `R` ou `IR`.
{{% /highlight %}}

{{% train-category
    id="ic-int"
    title="Cross-country International Train (IC-INT)"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
%}}
Trains internationaux reliant Bucarest (Roumanie) à Sofia ou Varna. Ces trains ne circulent directement qu'en été ; sinon, une correspondance à Ruse est nécessaire. Dans d'autres horaires, ils peuvent aussi être indiqués comme `IR`.

Certains trains de nuit comprennent également des voitures-couchettes ou des voitures-lits, qui peuvent être utilisées avec une réservation appropriée.

#### Réservation

La réservation de siège est obligatoire en 1ère et 2ᵉ classe.
{{% /train-category %}}

{{% train-category
    id="icf"
    title="Intercity Fast Train (ICF)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
%}}
Trains relativement rapides reliant les grandes villes avec peu d'arrêts. Ils utilisent souvent du matériel plus moderne, par exemple d'anciennes voitures IC de la DB. Les trains de nuit peuvent inclure des voitures-couchettes ou lits, nécessitant une réservation.

#### Réservation

Une réservation est obligatoire pour certains trains (indiqué par _R_).
{{% /train-category %}}

{{% train-category
    id="exp"
    title="Express train (EXP)"
    type="highspeed"
    fip_accepted=true
    reservation_required=partially
%}}
Trains nationaux reliant des villes avec peu d'arrêts.

#### Réservation

Une réservation est obligatoire pour certains trains (indiqué par _R_).
{{% /train-category %}}

{{% train-category
    id="reg"
    title="Regional Train (REG)"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=true
%}}
Trains régionaux en trafic intérieur, généralement avec de nombreux arrêts et peu rapides. Seules des voitures de 2ᵉ classe sont disponibles.
{{% /train-category %}}

{{% train-category
    id="sub"
    title="Suburban Commuter Train (SUB)"
    type="regional"
    fip_accepted=true
    reservation_required=false
%}}
Trains régionaux en trafic intérieur desservant la plupart des gares, circulant souvent à une fréquence plus élevée que les autres trains.
{{% /train-category %}}

{{% train-category
    id="night-train"
    title="Train de nuit"
    type="sleeper"
    fip_accepted=true
    reservation_required=true
%}}
Trains circulant de nuit et nécessitant une réservation.

{{% highlight important %}}
Les prix de réservation pour les couchettes ou voitures-lits sont plus élevés que pour les réservations classiques.
{{% /highlight %}}
{{% /train-category %}}

## Achat de billets et réservations

### En gare

{{% booking id="bdz-ticket-office" /%}}

### À bord du train

Les billets à tarif réduit FIP ne peuvent être achetés à bord que si le départ a lieu d’une gare où le guichet est fermé ou inexistant. Pour les trains à réservation obligatoire, la réservation doit être obtenue avant le voyage.

## Réductions

Pour les billets ordinaires, les enfants de moins de 7 ans voyagent gratuitement. Sur les trajets nationaux, les enfants de moins de 10 ans, et sur les trajets internationaux, les enfants de moins de 12 ans bénéficient d’une réduction de 50 % sur le tarif adulte. Les enfants plus âgés paient le tarif adulte complet.

## Conditions tarifaires spéciales

### Supplément pour prolongation de trajet

Si vous souhaitez voyager au-delà de la destination réservée, un supplément doit être payé en plus du billet pour la distance supplémentaire. [^1]

### Interruption de voyage

L’interruption de voyage n’est pas autorisée avec un billet continu.

## Recommandations

{{% highlight tip %}}
La BDŽ propose encore une offre relativement large sur un réseau vieillissant. Il est conseillé de planifier ses trajets à l’avance, car de nombreuses lignes ne voient que quelques trains par jour. Les voitures les plus modernes sont d’anciennes voitures IC de la DB, utilisées sur certaines liaisons longue distance entre Sofia et Varna ou Burgas. Un point fort est la ligne à voie étroite des Rhodopes entre Septemvri et Dobrinichte, également exploitée par la BDŽ.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)
