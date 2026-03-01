---
draft: false
title: "Irish Rail Website" # Ändere den Titel auf den Name der Buchungsplattform
description: "" # Ergänze eine Beschreibung für die Buchungsplattform
params:
  classes:
    # Definiere Klassen und entsprechende Preise für die zugehörigen Reservierungen.
    # Stelle sicher, dass die Klassen auch in den i18n-Dateien unter `booking.classes` definiert sind.
    first: "-"
    second: "0€ / 2,50€"
  fip_50: false # Definiere, ob FIP 50 Tickets bei dem Buchungsanbieter gebucht werden können.
  reservations: true # Definiere, ob Reservierungen bei dem Buchungsanbieter gebucht werden können.
  booking_link: "https://www.irishrail.ie/en-ie/" # Füge ein Link zur Buchungsplattform hinzu
  type: "website" # Akzeptierte Typen sind: website, onsite, phone, email und machine
---

{{% booking-section "reservations" %}}

## Reservierungen

Online können Reservierungen für die 2. Klasse erworben werden. Hierzu muss zunächst die Passagieroption ausgewählt werden:

![Passagieroptionen öffnen](./reservation-step-1.png)

Im Anschluss kann die Auswahl "Adults" abgewählt und die Option "Free Travel Pass" ausgewählt werden:

![Auswahl Free Travel Pass](./reservation-step-2.png)

Reservierungen für die 2. Klasse werden kostenfrei ausgegeben. Lediglich auf einigen stark ausgelasteten Verbindungen werden Reservierungsgebühren von 2,50€ erhoben.

Die angezeigten Preise für die Premier Class enthalten die Preisdifferenz zwischen der 1. und 2. Klasse, sodass diese Reservierungen gebucht werden können, um mit einem FIP Ausweis der 2. Klasse in der Premier Class zu reisen.

Reservierungen für FIP Freifahrtscheine der 1. Klasse können nicht online gebucht werden.

In Irland wird grundsätzlich der Name der Passagiere an den Reservierungsanzeigen in den Zügen angezeigt. Wenn das nicht gewünscht wird, kann bei der Buchung angegeben werden, dass stattdessen die Ticketnummer angezeigt wird.

{{% /booking-section %}}
