---
draft: false
title: "CFL"
country:
  - "luxembourg"
operator: "cfl"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "4 champs avec 2 jours chacun"
      fip-coupon-relatives:
        status: invalid
        text: "Non disponible"
      fip-reduced-ticket:
        status: valid
        text: "50 % de réduction"
---

La CFL (Société nationale des chemins de fer luxembourgeois) est la compagnie ferroviaire nationale du [Luxembourg](/country/luxembourg "Luxembourg") et la principale société ferroviaire du pays.

## Résumé

- Voyage gratuit également sans FIP en deuxième classe
- Supplément possible pour la première classe

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="invalid" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

{{< highlight important >}}
Le Luxembourg offre la gratuité des transports publics pour les trajets intérieurs, indépendamment du FIP. Cela inclut tous les trains (sauf TGV), les tramways et les bus. Le voyage avec la CFL est donc gratuit en deuxième classe et aucun billet supplémentaire n'est requis. Le voyage en première classe nécessite un Coupon FIP ou un Billet FIP 50 de première classe. Pour les trajets au-delà du Luxembourg, par exemple vers l'Allemagne ou la Belgique, un billet est nécessaire à partir du point frontière tarifaire. Cela signifie, par exemple, qu'un billet direct, un coupon FIP valide ou une réduction nationale est requis pour voyager jusqu'au pays voisin. Un billet à partir de la première gare après la frontière n'est pas suffisant.
{{< /highlight >}}

## Catégories de trains et réservations

{{% train-category
  id="intercity"
  title="InterCity (IC)"
  type="highspeed"
  fip_accepted=true
  reservation_possible=true
  reservation_required=false
%}}

Les trains InterCity relient Luxembourg à Liège et Bruxelles en Belgique.

{{% /train-category %}}

{{% train-category
  id="regionalexpress"
  title="Regionalexpress (RE)"
  type="regional"
  fip_accepted=true
  reservation_possible=false
%}}

Trains avec arrêt dans certaines gares.

{{% /train-category %}}

{{% train-category
  id="regionalbahn"
  title="Regionalbahn (RB)"
  type="regional"
  fip_accepted=true
  reservation_possible=false
%}}

Trains avec arrêt dans toutes les gares.

{{% /train-category %}}

{{% train-category
  id="bus"
  title="Bus"
  type="bus"
  fip_accepted=false
  reservation_possible=false
%}}

La CFL exploite également des lignes de bus interurbaines. Celles-ci n’acceptent pas le FIP, mais grâce à la gratuité des transports publics, aucun billet n’est requis.

{{% /train-category %}}

{{% train-category
  id="standseilbahn"
  title="Funiculaire Pfaffenthal-Kirchberg"
  type="funicular"
  fip_accepted=true
  reservation_possible=false
%}}

Le funiculaire relie la halte ferroviaire Pfaffenthal-Kirchberg à la plateforme de correspondance sur le plateau du Kirchberg.

{{% /train-category %}}

## Achat de billets et de réservations

L’achat de billets n’est pertinent que pour la première classe.

{{% highlight tip %}}
La CFL propose des options de billets avantageuses pour la première classe à partir de 3 €. Ces billets ne sont pas liés à un trajet spécifique, mais sont valables pour une durée déterminée sur l’ensemble du réseau. Ces billets peuvent être achetés sur le [site Web de la CFL](https://www.cfl.lu/fr-fr/ticket/national).

Aux [Guichets CFL](#en-gare), les billets de première classe sont disponibles avec une remise de 50 % sur présentation de la Carte FIP.
{{% /highlight %}}

### En ligne

{{% booking id="db-website-fip-international"
    subtitle="Billets FIP 50 transfrontaliers entre l’Allemagne et le Luxembourg pour l’ensemble du trajet (non valables dans le pays d’émission de la Carte FIP)"
/%}}

{{% booking id="sncb-website"
subtitle="Uniquement pour les liaisons transfrontalières depuis/vers la Belgique"
/%}}

### Par téléphone

{{% booking id="cfl-phone"
fip_global_fare=nil
fip_50=true
%}}

En raison des frais de réservation, il peut être avantageux d’acheter un billet de première classe régulier via l’application CFL ou un distributeur automatique.

{{% /booking %}}

### En gare

{{% booking id="cfl-ticket-office" /%}}

### À bord du train

Les billets pour voyager en première classe ou pour un surclassement de la deuxième à la première classe doivent être achetés avant de monter dans le train.

## Réductions

Pour les tarifs publics, les enfants jusqu’à 6 ans voyagent gratuitement, les enfants de 6 à 12 ans bénéficient d’une réduction de 50 % sur le tarif adulte. À partir de 12 ans, le tarif adulte s’applique.[^1]
En deuxième classe, le voyage est généralement gratuit, ceci ne concerne donc que la première classe.

### Conditions tarifaires spéciales

### Bus CFL Luxembourg - Sarrebruck

Dans le bus express CFL entre Luxembourg et Sarrebruck, le voyage gratuit n’est pas possible. Les tarifs sont disponibles sur le [site de la CFL](https://www.cfl.lu/fr-fr/ticket/internationaldetail/saarbrueckenexpress/1000). \
Il n’y a pas d’autres réductions FIP sur cette liaison.

### Bus CFL Lorraine Express

La CFL exploite un bus express entre Luxembourg et la gare _Lorraine TGV_ en France comme correspondance TGV. Dans ce bus, le voyage gratuit n’est pas possible. Les tarifs sont disponibles sur le [site de la CFL](https://www.cfl.lu/fr-fr/ticket/internationaldetail/gare-lorraine). Les bus sont soumis à réservation obligatoire et un billet peut être acheté jusqu’à 2,5 heures avant le départ du bus. \
Nous n’avons pas d’informations officielles concernant la validité des réductions FIP sur cette liaison.

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#uk-accordion-75)
