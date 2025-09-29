---
draft: false
title: 'Guichet CP'
description: 'Informations de réservation aux guichets CP.'
params:
    classes:
        # Définissez les classes et les tarifs correspondants aux réservations.
        # Assurez-vous que chaque classe existe sous `booking.classes` dans i18n.
        first: "5,00€"
        second: "5,00€"
    fip_50: true # Indique si les billets FIP 50 peuvent être réservés via cette plateforme
    fip_global_fare: false # Indique si les billets FIP Global Fare peuvent être réservés via cette plateforme
    reservations: true # Indique si des réservations peuvent être effectuées via cette plateforme
    additional_info_link: "https://www.cp.pt/info/en/w/ticket-offices" # Ajoutez un lien vers des informations supplémentaires
    type: "onsite" # Types acceptés : website, onsite, phone, email et machine
---

{{% booking-section "fip_50" %}}
**Billets FIP 50**

Aux guichets CP, il est possible d'acheter des billets FIP 50 pour des voyages à l'intérieur du Portugal. Le tarif est calculé sur place à l'aide du calculateur de prix.
{{% /booking-section %}}

{{% booking-section "fip_global_fare" %}}
**Tarif Global FIP**

Les billets Tarif Global FIP ne sont pas vendus aux guichets CP. Pour le service international Celta, un tarif global FIP spécial s'applique et les billets doivent être achetés via les canaux de vente espagnols (voir la page opérateur CP pour plus de détails).
{{% /booking-section %}}

{{% booking-section "reservations" %}}
**Réservations**

Les réservations pour les trains nécessitant une réservation (p.ex. AP et IC) peuvent être effectuées au guichet. Des frais de réservation de 5€ s'appliquent.
{{% /booking-section %}}
