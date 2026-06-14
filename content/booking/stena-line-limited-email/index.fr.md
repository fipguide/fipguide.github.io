---
draft: false
title: "Stena Line Limited E-Mail"
description: "Informations relatives à la réservation par e-mail auprès de Stena Line Limited"
params:
  fip_50: true
  fip_global_fare: nil
  reservations: true
  type: "email"
  email_templates:
    fip_50:
      to: "info.cherbourg@stenaline.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket.
        Please find my details below:

        Travel date: [Date du voyage]
        Travel route: [Itinéraire du voyage]
        Number of passengers: [Nombre de voyageurs]
        Class: [Classe]
        Passengers:
          Passenger 1:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
          Passenger 2:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
          [... Ajouter ou supprimer des voyageurs si nécessaire]
        Additional information: [Informations complémentaires]

        Thank you in advance.
        Kind regards,

        [Votre nom]
    reservations:
      to: "info.cherbourg@stenaline.com"
      subject: "Reservation booking request"
      body: |-
        Hello,

        I would like to book a reservation.
        Please find my details below:

        Travel date: [Date du voyage]
        Travel time: [Heure du voyage]
        Travel route: [Itinéraire du voyage]
        Number of passengers: [Nombre de voyageurs]
        Class: [Classe]
        Passengers:
          Passenger 1:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
          Passenger 2:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
          [... Ajouter ou supprimer des voyageurs si nécessaire]
        Additional information: [Informations complémentaires]

        Thank you in advance.
        Kind regards,

        [Votre nom]
---

La réservation auprès de Stena Line est facilement possible par e-mail. Pour ce faire, envoyez un e-mail à [info.cherbourg@stenaline.com](mailto:info.cherbourg@stenaline.com).[^1]
L’e-mail doit contenir les informations suivantes:

- Prénom et nom des voyageurs
- Date de naissance des voyageurs
- Date du voyage
- Itinéraire de voyage (p. ex. Cairnryan – Belfast)
- Catégorie de classe

En règle générale, vous recevrez deux e-mails de réponse de Stena Line. Le premier e-mail confirme votre demande de réservation. Le deuxième e-mail vous propose une option de paiement via pay per link. Vous devez alors saisir les données de votre carte de crédit.
Après le paiement, vous recevez un e-mail avec la confirmation de réservation, qui fait également office de billet. Vous devez bien sûr emporter les billets FIP avec vous.

{{% booking-section "fip_50" %}}

## Billets FIP 50

Les billets FIP 50 peuvent être réservés.

{{% /booking-section %}}

## Sources

[^1]: [Communauté FIP Guide - Retour d’information](https://discord.com/channels/1250522473188032512/1433789686039707688/1481942947917467669)
