---
draft: false
title: "Stena Line BV e-Mail"
description: "Informations relatives à la réservation par e-mail auprès de Stena Line BV"
params:
  fip_50: true
  fip_global_fare: nil
  reservations: true
  type: "email"
  email_templates:
    fip_50:
      to: "contact.nl@stenaline.com"
      subject: "FIP 50 Ticket booking request"
      body: |-
        Hello,

        I would like to book a FIP 50 Ticket.
        Please find my details below:

        Travel date: [Date du voyage]
        Travel time: [Heure du voyage]
        Travel direction: [Sens du voyage (Harwich -> Hoek van Holland ou Hoek van Holland -> Harwich)]
        Number of passengers: [Nombre de voyageurs]
        Cabin type: [Type de cabine (Standard, Superior or Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
            Passport number and expiry date: [Numéro du passeport et date d’expiration]
          Passenger 2:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
            Passport number and expiry date: [Numéro du passeport et date d’expiration]
          [... Ajouter ou supprimer des voyageurs si nécessaire]
        Additional information: [Informations complémentaires]

        Copy/copies of the FIP Card(s) (front and back) for all travelers are attached.

        [Joindre la/les copie(s) des Cartes FIP (recto et verso) de tous les voyageurs]

        Thank you in advance.
        Kind regards,

        [Votre nom]
    reservations:
      to: "contact.nl@stenaline.com"
      subject: "Reservation booking request"
      body: |-
        Hello,

        I would like to book a reservation.
        Please find my details below:

        Travel date: [Date du voyage]
        Travel time: [Heure du voyage]
        Travel direction: [Sens du voyage (Harwich -> Hoek van Holland ou Hoek van Holland -> Harwich)]
        Number of passengers: [Nombre de voyageurs]
        Cabin type: [Type de cabine (Standard, Superior or Deluxe)]
        Passengers:
          Passenger 1:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
            Passport number and expiry date: [Numéro du passeport et date d’expiration]
          Passenger 2:
            Name: [Nom (tel qu’il figure sur le passeport)]
            Date of birth: [Date de naissance]
            Passport number and expiry date: [Numéro du passeport et date d’expiration]
          [... Ajouter ou supprimer des voyageurs si nécessaire]
        FIP Coupon number(s): [Numéro(s) du/des Coupon(s) FIP Stena Line BV utilisé(s) pour le voyage]
        Additional information: [Informations complémentaires]

        Thank you in advance.
        Kind regards,

        [Votre nom]

aliases:
  - stena-line-email
---

La réservation auprès de Stena Line peut être effectuée facilement par e-mail. Pour cela, il suffit d’envoyer un e-mail en anglais ou en néerlandais à [contact.nl@stenaline.com](mailto:contact.nl@stenaline.com).
Les informations suivantes doivent être indiquées dans l’e-mail:

- Date et heure du voyage
- Date de naissance
- Type de cabine (Standard, Supérieure et Deluxe)
- Nom de voyageurs tel qu’il figure sur leur passeport
- Numéro et date d’expiration du passeport
- **Uniquement pour les Billets FIP 50:** Copie(s) des Cartes FIP (recto et verso) de tous les voyageurs
- **Uniquement pour les réservations avec Coupon FIP:** Numéro du Coupon FIP Stena Line BV qui doit être utilisé pour le voyage

En règle générale, Stena Line vous envoie deux e-mails de réponse. Le premier e-mail confirme la demande de réservation. Le deuxième e-mail vous propose une option de paiement via pay per link. Vous devez alors saisir les données de votre carte de crédit.
Une fois le paiement effectué, vous recevez un e-mail avec la confirmation de réservation, qui fait également office de billet. Vous devez bien sûr emporter avec vous les billets FIP.

{{% highlight important %}}
Le paiement via pay per link n’est possible que le jour même où l’e-mail correspondant à la demande de paiement a été reçu. Le lien expire à minuit. Si tel est le cas, veuillez recontacter Stena Line.
{{% /highlight %}}

{{% booking-section "fip_50" %}}

## Billets FIP 50

Les billets FIP 50 peuvent être réservés.

{{% /booking-section %}}

{{% booking-section "reservations" %}}

## Réservations

Les réservations de cabine sont disponibles et obligatoires pour les traversées de nuit.

{{% highlight warning %}}
Pour les réservations, le numéro du Coupon FIP Stena Line BV qui doit être utilisé pour le voyage est également requis. Une réservation n’est donc possible que lorsque le Coupon FIP est disponible.
{{% /highlight %}}

{{% /booking-section %}}
