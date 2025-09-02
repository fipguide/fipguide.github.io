---
draft: false
title: '{{ .File.ContentBaseName | title }}' # Ändere den Titel auf den Name der Buchungsplattform
description: '' # Ergänze eine Beschreibung für die Buchungsplattform
params:
    classes:
        # Definiere Klassen und entsprechende Preise für die zugehörigen Reservierungen.
        # Stelle sicher, dass die Klassen auch in den i18n-Dateien unter `booking.classes` definiert sind.
        first: "X.XX€"
        second: "X.XX€"
    fip_50: true # Definiere, ob FIP 50 Tickets bei dem Buchungsanbieter gebucht werden können.
    fip_global_fare: true # Definiere, ob FIP Globalpreise bei dem Buchungsanbieter gebucht werden können.
    reservations: true # Definiere, ob Reservierungen bei dem Buchungsanbieter gebucht werden können.
    booking_link: "https://example.com" # Füge ein Link zur Buchungsplattform hinzu
    additional_info_link: "https://example.com/additional-info" # Füge einen Link zu zusätzlichen Informationen hinzu
    type: "onsite" # Akzeptierte Typen sind: website, onsite, phone, email und machine
---

{{% booking-section "fip_50" %}}
**FIP 50 Fahrkarten**

<!--
    Erkläre hier die Buchungswege, um FIP 50 Tickets zu erwerben.
-->
{{% /booking-section %}}

{{% booking-section "fip_global_fare" %}}
**FIP Globalpreis**

<!--
    Erkläre hier die Buchungswege, um FIP Globalpreise zu erwerben.
-->
{{% /booking-section %}}

{{% booking-section "reservations" %}}
**Reservierungen**

<!--
    Erkläre hier die Buchungswege, um Reservierungen zu erwerben.
-->
{{% /booking-section %}}
