---
draft: false
title: "Ffestiniog Travel e-mail"
description: "Informations de réservation pour la réservation par e-mail auprès de Ffestiniog Travel."
params:
  fee: 12 % p/p (min. 5 £, max. 60 £)
  fip_50: true
  fip_global_fare: true
  type: "email"
  email_templates:
    fip_global_fare:
      to: "rail@ffestiniogtravel.co.uk"
      subject: "FIP Global Fare booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP Global Fare ticket.

        Travel date: [Date du voyage]
        Preferred departure time: [Heure de départ souhaitée]
        Departure station: [Gare de départ]
        Destination station: [Gare de destination]
        Travel direction: [Sens du voyage]
        Passengers:
          Passenger 1:
            Name: [Nom (tel qu’il figure sur le passeport)]
          Passenger 2:
            Name: [Nom (tel qu’il figure sur le passeport)]
          [... Ajouter ou supprimer des voyageurs si nécessaire]
        Class (according to FIP Card entitlement): [Classe (selon les droits de la Carte FIP)]
        Additional information: [Informations complémentaires]

        Photo(s) of the FIP Card(s) for all travelers are attached.

        [Joindre la/les photo(s) des Cartes FIP de tous les voyageurs]

        Thank you in advance.
        Kind regards,

        [Votre nom]
    fip_50:
      to: "rail@ffestiniogtravel.co.uk"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to request an offer for a FIP 50 Ticket.

        Travel date: [Date du voyage]
        Preferred departure time: [Heure de départ souhaitée]
        Departure station: [Gare de départ]
        Destination station: [Gare de destination]
        Travel direction: [Sens du voyage]
        Passengers:
          Passenger 1:
            Name: [Nom (tel qu’il figure sur le passeport)]
          Passenger 2:
            Name: [Nom (tel qu’il figure sur le passeport)]
          [... Ajouter ou supprimer des voyageurs si nécessaire]
        Class (according to FIP Card entitlement): [Classe (selon les droits de la Carte FIP)]
        Additional information: [Informations complémentaires]

        Photo(s) of the FIP Card(s) for all travelers are attached.

        [Joindre la/les photo(s) des Cartes FIP de tous les voyageurs]

        Thank you in advance.
        Kind regards,

        [Votre nom]
---

Ffestiniog Travel a un accès direct aux systèmes de réservation de nombreux opérateurs ferroviaires et peut proposer des billets pour de nombreux trains en Europe.
Les exceptions sont la France (SNCF) et la Norvège (Vy Group).

Sur demande, le personnel établit l’offre adaptée au voyage :

- La demande doit être envoyée en anglais à l’adresse e-mail suivante : [rail@ffestiniogtravel.co.uk](mailto:rail@ffestiniogtravel.co.uk)
- Initialement, une photo de votre Carte FIP (ou Staff Travel Card pour Safeguarded) doit être envoyée.
- **Des frais de réservation de 12 % par personne du montant de la réservation s’appliquent (minimum 5 £, maximum 60 £).**

{{% booking-section "fip_global_fare" %}}

## Tarif Global FIP

Des billets Eurostar peuvent être achetés via Ffestiniog Travel.

{{% /booking-section %}}

## Sources

[Feedback: FIP reduced Ticket booking](https://github.com/fipguide/fipguide.github.io/issues/710)
