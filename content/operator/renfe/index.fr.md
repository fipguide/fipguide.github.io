---
draft: false
title: "Renfe"
country:
  - "spain"
  - "france"
operator: "renfe"
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

Renfe Operadora est la compagnie ferroviaire publique en [Espagne](/country/spain "Espagne"). Elle exploite des trains à grande vitesse confortables, divers trains régionaux et des trains de banlieue.

## Résumé

- Les FIP Coupons sont acceptés uniquement sur les trains de banlieue (Cercanías), pas sur les trains avec réservation obligatoire.
- Pour les trains avec réservation obligatoire, un billet au Tarif Global FIP (indépendant de la distance) peut être acheté, incluant la réservation ; les Coupons FIP ne sont pas nécessaires.
- Les Billets FIP ne sont pas acceptés dans les trains Avlo.
- Pour les AVE internationaux entre Madrid et Marseille ou Lyon et Barcelone, les mêmes tarifs FIP Global s’appliquent que pour les AVE nationaux.

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" text="Sauf trains à réservation obligatoire" >}}
{{< fip-validity type="fip-coupon-relatives" status="invalid" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" text="Sauf trains à réservation obligatoire" >}}
{{< fip-validity type="fip-global-fare" status="valid" text="Pour les trains à réservation obligatoire (sauf Avlo)" disable_dialog=true >}}

## Catégories de trains et réservations

{{% highlight important %}}
Seuls les trains de banlieue (Cercanías) sont accessibles sans restriction avec les Coupons FIP gratuits. Pour les autres trains, il faut généralement acheter un billet au Tarif Global FIP.
{{% /highlight %}}

### Longue distance

{{% train-category
    id="ave"
    title="AVE"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Trains à grande vitesse à voie normale (jusqu’à 300 km/h). Les Coupons FIP gratuits ne sont pas acceptés.

Les AVE internationaux vers/depuis la France sont réservables aux mêmes conditions que les AVE nationaux, mais il n’existe pas de catégorie Premium. La réservation des liaisons internationales se fait uniquement auprès de Renfe, donc les billets doivent être achetés dans une gare espagnole. L’achat à bord devrait être possible lors de l’embarquement en France, mais il n’existe pas encore de retour d’expérience.

**Tarif Global FIP (indépendant de la distance) :**

- Elige : 10 €
- Elige Confort : 13 €
- Premium : 23,50 €

{{% /train-category %}}

{{% train-category
    id="avlo"
    title="Avlo"
    type="highspeed"
    fip_accepted=false
    reservation_required=true
    reservation_possible=true
%}}

Trains à grande vitesse à bas prix (jusqu’à 300 km/h).

{{% /train-category %}}

{{% train-category
    id="euromed"
    title="Euromed"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Trains à grande vitesse à écartement variable (Figueres <-> Alicante). Les Coupons FIP gratuits ne sont pas acceptés.

**Tarif Global FIP (indépendant de la distance) :**

- Elige : 6,50 €
- Elige Confort : 10 €
- Premium : 23,50 €

{{% /train-category %}}

{{% train-category
    id="alvia"
    title="Alvia"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Trains à grande vitesse à écartement variable (jusqu’à 250 km/h). Les Coupons FIP gratuits ne sont pas acceptés.

**Tarif Global FIP (indépendant de la distance) :**

- Elige : 6,50 €
- Elige Confort : 10 €

{{% /train-category %}}

{{% train-category
    id="ic"
    title="Intercity (IC)"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Trains de voyageurs entre le régional et la grande vitesse (jusqu’à 250 km/h). Les Coupons FIP gratuits ne sont pas acceptés.

**Tarif Global FIP (indépendant de la distance) :**

- Elige : 6,50 €
- Elige Confort : 10 €

{{% /train-category %}}

{{% train-category
    id="celta"
    title="Celta: Porto – Vigo"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Le Celta est un train international entre Renfe et CP (Portugal) de Porto à Vigo. Les Coupons FIP gratuits ne sont pas acceptés.

**Tarif Global FIP (indépendant de la distance) :** 4 €

{{% /train-category %}}

### Moyenne distance

{{% train-category
    id="avant"
    title="Avant"
    type="highspeed"
    fip_accepted=partially
    reservation_required=true
    reservation_possible=true
%}}

Trains à grande vitesse, durée de trajet < 90 minutes. Les Coupons FIP gratuits ne sont pas acceptés.

**Tarif Global FIP (indépendant de la distance) :** 4 €

{{% /train-category %}}

{{% train-category
    id="md"
    title="MD"
    type="highspeed"
    fip_accepted=partially
    reservation_required=partially
    reservation_possible=true
%}}

Trains régionaux accélérés. Les Coupons FIP gratuits ne sont acceptés que sur les trains non soumis à réservation obligatoire de cette catégorie. Actuellement, cela ne concerne que la ligne Barcelone(-Girona-Figueres)-Port Bou.

**Tarif Global FIP (indépendant de la distance) :** 4 €

#### Réservation

Les réservations sont obligatoires, sauf sur la ligne Barcelone(-Gérone-Figueres)-Port Bou[^1].

{{% /train-category %}}

### Trains de banlieue

{{% train-category
    id="regional"
    title="Cercanías / Rodalia / Aldiriak"
    type="regional"
    fip_accepted=true
    reservation_required=false
    reservation_possible=false
%}}

Trains de banlieue, comparables à un RER/S-Bahn. Les Coupons FIP gratuits sont valables sans restriction.

- Cercanías Asturias
- Cercanías Bilbao – Bilboko Aldiriak
- Cercanías Cádiz
- Cercanías Madrid
- Cercanías Málaga
- Cercanías Murcia/Alicante – Rodalia de Múrcia/Alacant
- Cercanías Sevilla
- Cercanías Santander
- Cercanías San Sebastián – Renfe Aldiriak/Donostia
- Cercanías Valencia – Rodalia de València
- Cercanías Zaragoza
- Rodalies de Catalunya

{{% /train-category %}}

## Catégories de classes

- **Elige Estándar / Turista** : équivalent à la 2de classe
- **Elige Confort** : siège XL en 1ʳᵉ classe sans service à bord – FIP 1ʳᵉ requis
- **Premium** : siège XL avec service + repas – FIP 1ʳᵉ requis (non réservable via DB)

## Achat de billets et réservations

### En ligne

Les Billets FIP Global et FIP 50 ne peuvent pas être achetés en ligne.

### Par téléphone

Non disponible – il faut se rendre au guichet Renfe.

### En gare

{{% booking id="db-ticket-office"
    fip_global_fare=true
    reservations="nil"
%}}

#### Tarif Global FIP

Dans les centres de services DB, il est possible d’acheter des billets pour les trains à réservation obligatoire. Il est important de sélectionner la classe « T » (pour Turista) ou « P » (pour Preferente). Si l’on choisit « 1re classe » ou « 2de classe », l’émission du billet échoue avec un message d’erreur. Il a également été signalé que la réservation en classe « P » échoue parfois ; dans ce cas, la réservation en classe « T » fonctionne généralement. Aucun frais de réservation n’est appliqué.
![Billet AVE exemple de Malaga à Madrid en classe T](./images/ave_ticket.webp)
{{% /booking %}}

{{% booking id="renfe-ticket-office" /%}}

### À bord du train

Si aucun guichet n’est disponible, l’achat est possible à bord (à confirmer localement).

Les billets pour les trains `AVE` internationaux peuvent être achetés à bord lors de la montée en France. [^3]

## Réductions

Les enfants de moins de 4 ans voyagent gratuitement sans siège propre. Pour les enfants de moins de 12 ans, une réduction de 40 % s’applique. À partir de 12 ans, le plein tarif est facturé.

## Conditions tarifaires spécifiques

### Arrêts intermédiaires

Les trajets avec Billets FIP 50 ou FIP Global ne peuvent pas être interrompus. [^2]

### Renfe Feve

Les bénéfices FIP s’appliquent également au réseau à voie métrique de Renfe Feve (Ferrocarriles de Vía Estrecha) entre Ferrol et Bilbao, dans le nord de l’Espagne.

## Recommandations

{{% highlight tip %}}
Renfe fonctionne souvent comme une compagnie aérienne : contrôle des bagages, accès limité, peu de flexibilité. Les Coupons FIP sont donc peu utiles, sauf pour les Cercanías. Des portiques sont présents dans de nombreuses gares – il faut demander l’ouverture manuelle par le personnel. En particulier dans la région de Madrid, les FIP gratuits ne sont pas toujours acceptés.
{{% /highlight %}}

## Sources

[^1]: [ShowMeTheJourney](https://showmethejourney.com/travel-on/train/129-md-media-distancia-spain/)

[^2]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#Tips)

[^3]: [Retour utilisateur](https://github.com/fipguide/fipguide.github.io/issues/449)
