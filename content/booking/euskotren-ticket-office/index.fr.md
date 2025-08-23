---
draft: false
title: 'Euskotren-Ticket-Office' # Remplacez le titre par le nom de la plateforme de réservation
params:
    classes:
        # Définissez les classes et les tarifs correspondants aux réservations.
        # Assurez-vous que chaque classe existe sous `booking.classes` dans i18n.
        first: "X,XX€"
        second: "X,XX€"
    fip_50: true # Indique si les billets FIP 50 peuvent être réservés via cette plateforme
    fip_global_fare: true # Indique si les billets FIP Global Fare peuvent être réservés via cette plateforme
    reservations: true # Indique si des réservations peuvent être effectuées via cette plateforme
    booking_link: "https://example.com" # Ajoutez un lien vers la plateforme de réservation
    additional_info_link: "https://example.com/additional-info" # Ajoutez un lien vers des informations supplémentaires
    type: "onsite" # Types acceptés : website, onsite, phone, email et machine
---

{{% booking-section "fip_50" %}}
**Billets FIP 50**

<!--
    Expliquez les étapes pour réserver des billets FIP 50 via cette plateforme de réservation.
-->
{{% /booking-section %}}

{{% booking-section "fip_global_fare" %}}
**Tarif Global FIP**

<!--
    Expliquez les étapes pour réserver des billets au tarif global FIP via cette plateforme de réservation.
-->
{{% /booking-section %}}

{{% booking-section "reservations" %}}
**Réservations**

<!--
    Expliquez les étapes pour effectuer des réservations via cette plateforme de réservation.
-->
{{% /booking-section %}}
