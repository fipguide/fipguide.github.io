---
draft: false
title: '{{ .File.ContentBaseName | title }}' # Ändere den Titel auf den Name der Buchungsplattform
params:
    classes:
        # Definiere Klassen und entsprechende Preise für die zugehörigen Reservierungen.
        # Stelle sicher, dass die Klassen auch in den i18n-Dateien unter `booking.classes` definiert sind.
        first: "X.XX€"
        second: "X.XX€"
    fip_50: true # Definiere, ob FIP 50 Tickets mit dem Buchungsanbieter gebucht werden können.
    reservations: true # Definiere, ob Reservierungen mit dem Buchungsanbieter gebucht werden können.
    link: "https://example.com" # Füge ein Link zur Buchungsplattform hinzu
    type: "onsite" # Akzeptierte Typen sind: website, onsite, phone and email
---

**FIP 50 Fahrkarten**

<!--
    Erkläre hier die Buchungswege, um FIP 50 Tickets zu erwerben.
-->

**Reservierungen**

<!--
    Erkläre hier die Buchungswege, um Reservierungen zu erwerben.
-->
