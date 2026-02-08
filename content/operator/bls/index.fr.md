---
draft: false
title: "BLS"
country:
  - "switzerland"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
      fip-coupon-relatives:
        status: valid
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
      fip-reduced-ticket:
        status: valid
        text: "50 % de réduction"
    sncf:
      fip-coupon:
        status: valid
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
    gb:
      fip-coupon:
        status: valid
        text: "1 coupon par an"
      fip-coupon-relatives:
        status: valid
        text: "1 coupon par an"
      fip-reduced-ticket:
        status: valid
        text: "50 % de réduction"
---

La BLS (anciennement Bern-Lötschberg-Simplon-Bahn) est une entreprise ferroviaire publique de la [Suisse](/country/switzerland "Suisse"). Elle exploite de nombreuses liaisons de trains, de bus et de bateaux et circule principalement dans le canton de Berne.

Sur son site web, la BLS propose une [carte schématique des lignes](https://www.bls.ch/-/media/bls/pdf/fahrplaene/bahn/netzplaene/netzplan-bls-bahn.pdf).

## Résumé

- La BLS accepte les Coupons FIP et les Billets FIP 50.
- L'utilisation de tous les trains (sauf les trains motorail), bus et bateaux avec FIP est possible.
- Il n'y a pas d'obligation de réservation.

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

## Catégories de trains et réservations

Il n'y a pas d'obligation de réservation dans aucun train de la BLS.

{{% train-category
        id="ir"
        title="InterRegio (IR) / RegioExpress (RE)"
        type="regional"
        fip_accepted=true
        reservation_required=false
        reservation_possible=true
%}}
Trains nationaux avec arrêts dans les grandes villes.
{{% /train-category %}}

{{% train-category
        id="r"
        title="Regio (R) / S-Bahn (S)"
        type="regional"
        fip_accepted=true
        reservation_required=false
        reservation_possible=false
%}}
Trains s'arrêtant à toutes les stations. Dans les zones urbaines, également appelés S-Bahn.
{{% /train-category %}}

{{% train-category
        id="r"
        title="PanormaExpress (PE)"
        type="regional"
        fip_accepted=true
        reservation_required=partially
        reservation_possible=true
%}}
Le GoldenPassExpress est une liaison ferroviaire continue de Montreux à Interlaken Ost, exploitée par la BLS en coopération avec la [MOB](/operator/sp#mob). La MOB exploite le train sur le tronçon à voie métrique entre Montreux et Zweisimmen, et la BLS sur le tronçon à voie normale entre Zweisimmen et Interlaken Ost. Dans les informations de connexion, ces trains sont marqués comme `PE`.

Cela signifie que des Coupons FIP des deux, SP et BLS, doivent être présents pour parcourir l'ensemble du trajet. Les Billets FIP 50 peuvent être réservés en continu.

#### Réservations

Un voyage sans réservation de siège n'est possible que s'il reste des places disponibles. Sinon, une réservation payante peut être effectuée via le site Web de la MOB.
{{% /train-category %}}

{{% train-category
        id="at"
        title="Autoverlad (AT)"
        fip_accepted=false
        type="regional"
%}}
Trains motorail sur les lignes Kandersteg – Göppenstein, Brig – Iselle et Kandersteg – Iselle.

Le FIP n'est pas valable dans ces trains, mais les trains circulant parallèlement du `RE 1` peuvent être utilisés.
{{% /train-category %}}

### Autres moyens de transport

{{% train-category
        id="bus"
        title="Bus"
        type="bus"
        fip_accepted=true
        reservation_required=false
        reservation_possible=false
%}}
Le FIP est valable dans tous les bus de la BLS, y compris les bus de _Busland AG_.
{{% /train-category %}}

{{% train-category
        id="ship"
        title="Bateau"
        type="ship"
        fip_accepted=true
        reservation_required=false
        reservation_possible=false
%}}
Le FIP est valable sur les bateaux de la BLS sur le lac de Thoune et le lac de Brienz.
{{% /train-category %}}

## Achat de billets et réservations

### En ligne

{{% booking id="sbb-website"/%}}

{{% booking id="db-website"/%}}

{{% booking id="db-website-fip-db"
    subtitle="Billets FIP 50 transfrontaliers entre l'Allemagne et la Suisse, avec part de billet uniquement pour la section suisse. Réservé aux collaborateurs de la Deutsche Bahn."
%}}
Pour la BLS, des billets FIP 50 continus ne peuvent être réservés que pour certaines connexions sélectionnées.
{{% /booking %}}

{{% booking id="db-website-fip-international"
    subtitle="Billets FIP 50 transfrontaliers entre l'Allemagne et la Suisse pour l'ensemble du trajet (non valable dans le pays d'émission de la Carte FIP)"
%}}
Pour la BLS, des billets FIP 50 continus ne peuvent être réservés que pour certaines connexions sélectionnées.
{{% /booking %}}

### Sur place

{{% booking id="bls-ticket-office"/%}}

{{% booking id="sbb-ticket-office"/%}}

### Dans le train

L'achat de billets FIP dans le train n'est pas possible. Des frais de pénalité sont appliqués aux passagers sans billets.

## Réductions

Pour les trajets réguliers, les enfants jusqu'à 5 ans inclus voyagent gratuitement. Les enfants jusqu'à 15 ans inclus bénéficient d'une réduction de 50 % sur le tarif adulte. Les personnes de 16 ans et plus paient le tarif adulte normal.[^1]

## Conditions tarifaires particulières

### Téléphériques

Le FIP n'est pas valable dans les téléphériques et funiculaires exploités par la BLS. [^1]

### Reconnaissance mutuelle des Coupons FIP de la SBB et de la BLS

Les entreprises ferroviaires suisses SBB et BLS acceptent partiellement les Coupons FIP: [^2]

- Les Coupons FIP de la SBB sont acceptés dans tous les trains de la BLS.
- Les Coupons FIP de la BLS sont acceptés dans les trains de la SBB sur les lignes où circulent également des trains de la BLS, c'est-à-dire entre deux gares où circulent à la fois des trains de la SBB et de la BLS. Le réseau de la BLS est [consultable en ligne](https://www.bls.ch/-/media/bls/pdf/fahrplaene/bahn/netzplaene/netzplan-bls-bahn.pdf).

Cependant, les Coupons FIP de la SBB ne sont pas valables sur les bateaux de la BLS sur le lac de Thoune et le lac de Brienz, ni dans les bus de la BLS, qui circulent principalement dans l'Emmental.

## Recommandations

{{% highlight tip %}}
Les membres de la famille ne sont parfois pas éligibles aux Coupon FIP des SBB. Cependant, la Coupon FIP des BLS leur permet de découvrir une grande partie de la Suisse.
{{% /highlight %}}

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html)

[^2]: [FIP Guide Community - Feedback](https://discord.com/channels/1250522473188032512/1448243039398264893)
