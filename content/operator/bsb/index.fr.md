---
draft: false
title: "BSB"
country:
  - "austria"
  - "germany"
  - "switzerland"
operator: "bsb"
Params:
  fip-validity:
    db:
      fip-coupon:
        status: valid
        text: "1 coupon avec 4 champs chacun par an. Chaque champ est valable deux jours."
      fip-coupon-relatives:
        status: invalid
        text: "Non disponible"
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
        status: invalid
        text: "Non disponible"
---

Les BSB - Bodensee-Schiffsbetriebe (Vereinigten Schifffahrtsunternehmen für den Bodensee und Rhein) exploitent les ferries sur le lac de Constance entre l’[Allemagne](/country/germany "Allemagne"), l’[Autriche](/country/austria "Autriche") et la [Suisse](/country/switzerland "Suisse").

Les remises FIP sont valables auprès des opérateurs suivants :

- BSB (Bodensee-Schiffsbetriebe GmbH)
- VLB (Vorarlberg Lines Walter Klaus Bodenseeschifffahrt GmbH)
- SBS (Schweizerische SBS Schifffahrt AG)
- URh (Schweizerische Schifffahrtsgesellschaft Untersee und Rhein)

## Résumé

- Les Billets FIP 50 et les Coupons FIP sont acceptés
- Achat possible au guichet et à bord du ferry

## Validité des Billets FIP

{{< fip-validity type="fip-coupon" status="valid" >}}
{{< fip-validity type="fip-coupon-relatives" status="unknown" >}}
{{< fip-validity type="fip-reduced-ticket" status="valid" >}}

## Catégories de trains et réservations

{{% train-category
  id="ferry"
  title="Fähre"
  type="ship"
  fip_accepted=true
  reservation_possible=false
  route_overview_url="https://www.bsb.de/sites/default/files/2025-11/VSU%20Fahrplan_2026_WEB.pdf"
%}}

Ferries sur le lac de Constance.

Sur les itinéraires suivants, il est possible d’embarquer des voitures :

- Constance/Staad – Meersburg
- Friedrichshafen – Romanshorn

Certains navires disposent d’un restaurant ou proposent des snacks et des boissons.

{{% /train-category %}}

## Catégories de classes

Il existe une classe unique, accessible avec les Cartes FIP de 1ère et 2ème classe.[^1]

## Achat de billets et de réservations

### En gare

{{% booking id="bsb-ticket-office" %}}
{{% /booking %}}

### À bord du ferry

Les Billets FIP 50 peuvent être achetés à bord du ferry.

## Réductions

Pour les tarifs publics, les enfants jusqu’à 6 ans voyagent gratuitement, les enfants de 6 à 16 ans bénéficient d’une réduction de 50 % sur le tarif adulte. À partir de 16 ans, le tarif adulte s’applique.[^1]

Toute personne fêtant son anniversaire voyage gratuitement sur les lignes régulières le jour de son anniversaire, sur présentation de la carte d’identité (original).
Le billet anniversaire doit être retiré avant le départ aux points de vente.[^2]

## Conditions tarifaires spéciales

### Interruption de voyage

Une interruption de voyage est autorisée sans formalités.[^1]

### Transport de véhicules [^1]

Le tarif plein s’applique pour les vélos.
Aucune réduction n’est accordée pour les véhicules entre Friedrichshafen et Romanshorn.

## Sources

[^1]: [Rail Delivery Group](https://www.raildeliverygroup.com/rst/europe-and-fip.html#uk-accordion-69)

[^2]: [Bodensee-Schiffsbetriebe](https://www.bsb.de/de/fahrplan/preise)
