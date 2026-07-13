---
draft: false
title: "Hellenic Train Website / App"
description: "Booking information for the Hellenic Train website and app."
params:
  classes:
    first: "free"
    second: "free"
  fip_50: true
  fip_global_fare: false
  reservations: true
  booking_link: "https://newtickets.hellenictrain.gr/"
  type: "online"
---

Hellenic Train also offers an [app](https://www.hellenictrain.gr/en/ht-new-platform-new-ticket-platform-has-its-own-mobile-app) through which FIP 50 Tickets can be booked.

{{% booking-section "fip_50" %}}

## FIP 50 Tickets

FIP 50 Tickets can be booked on the website and in the app.

## Booking process website

{{% float-image
    src="step-1.webp"
    alt="Language selection"
    width="50%"
    position="right"
%}}

**Step 1**

Change the language to English or Italian if needed.

{{% /float-image %}}

{{% float-image
    src="step-2.webp"
    alt="Connection selection"
    width="50%"
    position="right"
%}}

**Step 2**

Select a suitable connection. The regular ticket price is shown initially.
Station names must be entered in the English spelling.

{{% /float-image %}}

{{% float-image
    src="step-3.webp"
    alt="FIP CARD selection"
    width="50%"
    position="right"
%}}

**Step 3**

In the next step, select "FIP CARD" in the "Offer" field and enter the FIP Card number.
The regular ticket price is then reduced by 50%.

For services requiring a reservation, a reservation is added free of charge. Optionally, a seat can be selected by choosing the "Choose seat" option.

{{% /float-image %}}

{{% highlight inofficial %}}
When purchasing a ticket via the Hellenic Train app, the following message may appear:

_“The purchase was completed successfully; however, an error occurred while sending the email. You can retrieve your ticket by accessing your customer area, or—if you made the purchase without logging in—by ​​using the ‘Retrieve Ticket’ function with your PNR/ticket code and email address, or your PNR and CP.”_

This error occurs regardless of whether the user is logged in or not—in either case, no confirmation email is delivered. If the user is logged in, the ticket still appears under “My Trips” within the app; however, neither the PNR nor the recovery code is displayed. If the purchase is made without a user account, the ticket is effectively considered lost.

To resolve this issue, an unofficial tool is available that displays the ticket information. It can be found on GitHub at:

https://github.com/MartinLangbecker/bookmarklets/tree/main/hellenic_train
{{% /highlight %}}

{{% /booking-section %}}

{{% booking-section "reservations" %}}

## Reservations

For IC trains, reservations can be purchased in combination with an FIP 50 Ticket.
Reservations for FIP Coupons are not available online.

{{% /booking-section %}}
