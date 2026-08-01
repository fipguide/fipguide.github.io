---
draft: false
title: "Hellenic Train Website / App"
description: "Buchungsinformationen für die Hellenic Train Website und App."
params:
  classes:
    first: "kostenlos"
    second: "kostenlos"
  fip_50: true
  fip_global_fare: false
  reservations: true
  booking_link: "https://newtickets.hellenictrain.gr/"
  type: "online"
---

Hellenic Train bietet auch eine [App](https://www.hellenictrain.gr/en/ht-new-platform-new-ticket-platform-has-its-own-mobile-app) an, über welche FIP 50 Tickets gebucht werden können.

{{% booking-section "fip_50" %}}

## FIP 50 Fahrkarten

FIP 50 Tickets können auf der Website und in der App gebucht werden.

## Buchungsweg Website

{{% float-image
    src="step-1.webp"
    alt="Sprachauswahl"
    width="50%"
    position="right"
%}}

**Schritt 1**

Ändere die Sprache bei Bedarf auf englisch oder italienisch.

{{% /float-image %}}

{{% float-image
    src="step-2.webp"
    alt="Verbindungsauswahl"
    width="50%"
    position="right"
%}}

**Schritt 2**

Wähle eine passende Verbindung aus. Hierbei wird zunächst der reguläre Ticketpreis gezeigt.
Die Stationsnamen müssen hierbei in der englischen Schreibweise eingegeben werden.

{{% /float-image %}}

{{% float-image
    src="step-3.webp"
    alt="Auswahl FIP CARD"
    width="50%"
    position="right"
%}}

**Schritt 3**

Wähle im folgenden Schritt im Feld "Offer" die Auswahl "FIP CARD" und trage die Nummer des FIP Ausweises ein.
Der reguläre Ticketpreis wird dann um 50 % reduziert.

Bei reservierungspflichtigen Angeboten wird eine Reservierung kostenfrei hinzugefügt. Optional kann der Sitzplatz ausgewählt werden, wenn die Option "Choose seat" ausgewählt wird.

{{% /float-image %}}

{{% highlight inofficial %}}
Beim Kauf eines Tickets über die Hellenic Train-App kann folgende Meldung erscheinen:

_„Der Kauf wurde erfolgreich abgeschlossen, jedoch ist beim Versand der E-Mail ein Fehler aufgetreten. Sie können Ihr Ticket abrufen, indem Sie Ihren Kundenbereich aufrufen oder – falls Sie den Kauf ohne Anmeldung getätigt haben – über die Funktion ‚Ticket abrufen‘ unter Verwendung von PNR/Ticketcode und E-Mail-Adresse bzw. PNR und CP.“_

Dieser Fehler tritt unabhängig davon auf, ob der Nutzer angemeldet ist oder nicht – in beiden Fällen wird keine Bestätigungs-E-Mail zugestellt. Im angemeldeten Zustand erscheint das Ticket zwar weiterhin unter „Meine Reisen“ in der App, es werden jedoch weder PNR noch Wiederherstellungscode angezeigt. Erfolgt der Kauf ohne Benutzerkonto, gilt das Ticket faktisch als verloren.

Zur Lösung dieses Problems gibt es ein inoffizelles Tool, welches die Ticketinformationen anzeigt. Es ist auf GitHub verfügbar unter:

https://github.com/MartinLangbecker/bookmarklets/tree/main/hellenic_train
{{% /highlight %}}

{{% /booking-section %}}

{{% booking-section "reservations" %}}

## Reservierungen

Für IC‑Züge können Reservierungen in Kombination mit einem FIP 50 Ticket gekauft werden.
Reservierungen für FIP Freifahrtscheine sind online nicht erhältlich.

{{% /booking-section %}}
