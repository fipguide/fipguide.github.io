---
title: "Beitragen"
type: "general/generalinformation"
---

Der _FIP Guide_ ist ein Open-Source und Community-Projekt. Wenn du Informationen aktualisieren oder hinzufügen möchtest, kannst du dies selbständig tun. Um die Richtigkeit der Informationen sicherzustellen, werden alle Änderungen vom FIP Guide Team überprüft, bevor sie veröffentlicht werden.

Seiten können direkt im FIP Guide über das [Content-Management-System (CMS)](https://www.fipguide.org/admin) angepasst werden. Mehr dazu im Abschnitt [Direkte Bearbeitung](#direkte-bearbeitung). Wenn du schon technisches Hintergrundwissen hast, kannst du Änderungen direkt über GitHub vornehmen, mehr dazu unter [GitHub Contribution](#github-contribution).

## Direkte Bearbeitung

Über das Content-Management-System (CMS) kannst du direkt die Inhalte der Seiten bearbeiten. Diese ist unter [fipguide.org/admin](https://www.fipguide.org/admin) erreichbar.

Bitte beachte folgende Punkte bei der Bearbeitung:

### Anmeldung

{{% float-image
  src="login.webp"
  alt="FIP Guide CMS Login"
  width="30%"
  position="left"
%}}
Um dich im FIP Guide CMS anzumelden, benötigst du einen kostenlosen [GitHub](https://github.com/) Account. GitHub gehört zu Microsoft und ist eine Plattform zur Kollaboration in Open-Source-Projekten. Den GitHub Account kannst du einfach auf der [GitHub Website](https://github.com/) erstellen.

Im CMS kann sich mit diesem GitHub Account angemeldet werden. Während der Anmeldung muss die Nutzung mit "Authorize" bestätigt werden.
{{% /float-image %}}

{{% highlight important %}}
Bei der erstmaligen Anmeldung wird gefragt, ob ein sogenannter _Fork_ erstellt werden soll. Dadurch wird automatisch eine eigene Kopie der Seite erstellt. Dies ist notwendig, damit Änderungen im CMS gespeichert werden können. Bitte bestätige dies mit "Create Fork".
{{% /highlight %}}

### Seiten öffnen

Auf der [Startseite](https://www.fipguide.org/admin) des FIP Guide CMS kann im linken Menü die Seitenkategorie ausgewählt und anschließend in der Mitte die gewünschte Seite geöffnet oder eine neue Seite erstellt werden.

![FIP Guide CMS Startseite](startpage.webp)

Alternativ kann auch über den FIP Guide die zu bearbeitende Seite geöffnet werden und anschließend über das Menü "Seite bearbeiten" über das CMS modifiziert werden.

{{% columns %}}
{{% column width="50%" %}}
![Seite bearbeiten Menü Desktop](edit-button-desktop.webp)
{{% /column %}}
{{% column width="50%" %}}
![Seite bearbeiten Menü Mobil](edit-button-mobile.webp)
{{% /column %}}
{{% /columns %}}

### Seite bearbeiten

{{% float-image
  src="language.webp"
  alt="FIP Guide CMS Sprache auswählen"
  width="40%"
  position="right"
%}}
In der Bearbeitungsansicht kann die entsprechende Seite aktualisiert werden. Der FIP Guide ist in verschiedenen Sprachen verfügbar. Diese können über das entsprechende Drop-Down-Menü ausgewählt werden.
{{% /float-image %}}

{{% highlight tip %}}
Wenn du möchtest, kannst du selbstständig alle Sprachen der Seite aktualisieren. Das ist jedoch nicht unbedingt notwendig. Du kannst auch Informationen nur in einer Sprache aktualisieren. Das FIP Guide Team wird die Änderungen überprüfen und anschließend die Informationen in allen Sprachen aktualisieren.
{{% /highlight %}}

{{% float-image
  src="language-view.webp"
  alt="FIP Guide CMS Sprach-Ansicht umstellen"
  width="15%"
  position="left"
%}}
Über das Seiten-Symbol auf der rechten Seite kann die Ansicht zwischen _mehrsprachig_ und _einsprachig_ umgestellt werden.
{{% /float-image %}}

### Änderungen speichern und veröffentlichen

{{% float-image
  src="save.webp"
  alt="FIP Guide CMS Änderungen speichern"
  width="50%"
  position="right"
%}}
Wenn du deine Arbeiten unterbrechen und speichern möchtest, kannst du dies über den _Save_ Button tun. Die Änderungen werden dann im CMS gespeichert, damit du sie später weiter bearbeiten kannst, jedoch noch nicht veröffentlicht.
{{% /float-image %}}

{{% float-image
  src="status-review.webp"
  alt="FIP Guide CMS Status auf Review setzen"
  width="40%"
  position="left"
%}}
Wenn du deine Änderungen veröffentlichen möchtest, kannst du den Status der Seite auf _Review_ setzen. Das FIP Guide Team wird die Änderungen überprüfen und anschließend veröffentlichen. Solange die Änderungen nicht veröffentlicht wurden, können die Seiten jederzeit bearbeitet werden.
{{% /float-image %}}

Jede Änderung, die in den Status _Review_ gesetzt wurde, ist auf GitHub sichtbar: [FIP Guide GitHub Änderungen (Pull Requests)](https://github.com/fipguide/fipguide.github.io/pulls). Hier ist auch deine Anpassung sichtbar und es können Kommentare zur Änderung hinterlassen werden. Das FIP Guide Team prüft die Änderungen und stellt bei Bedarf über die Kommentarfunktion Rückfragen.

### Arbeit fortsetzen / Überblick über Änderungen

{{% float-image
  src="workflow.webp"
  alt="FIP Guide CMS Workflow"
  width="60%"
  position="right"
%}}
Wenn du deine Arbeit an einer Seite gespeichert hast und fortsetzen willst oder einen Überblick über den Status all deiner Änderungen haben möchtest, kannst du dies über den Menüpunkt _Workflow_ tun.

- **Draft:** Änderungen, an denen noch gearbeitet wird und noch nicht bereit zum Review sind.
- **Review:** Änderungen, die vom FIP Guide Team überprüft werden.
- **Ready:** Änderungen, die vom FIP Guide Team überprüft wurden und in Kürze veröffentlicht werden.
  {{% /float-image %}}

### Preview

{{% float-image
  src="preview.webp"
  alt="FIP Guide CMS Preview"
  width="50%"
  position="right"
%}}
Nachdem Änderungen im CMS gespeichert wurden, kann eine Preview der Seite angesehen werden, auf der die eigenen Änderungen bereits sichtbar sind.
{{% /float-image %}}

{{% highlight important %}}
Das Erzeugen der Preview kann 5-10 Minuten in Anspruch nehmen!
{{% /highlight %}}

Über _Check for Preview_ kann geprüft werden, ob die Preview bereits erzeugt wurde. Die Preview wird bei jeder Anpassung neu erzeugt, bleibt aber bestehen, wenn die Änderungen zu einem späteren Zeitpunkt fortgesetzt werden.

## GitHub Contribution

Der FIP Guide nutzt den Static Website Generator [_Hugo_](https://gohugo.io/) zum Erstellen der Website. Die Seite kann direkt in [GitHub](https://github.com/fipguide/fipguide.github.io/) über die Web-IDE oder deine lokale Entwicklungsumgebung bearbeitet werden. Weitere Informationen und Hilfe sind im [GitHub Wiki](https://github.com/fipguide/fipguide.github.io/wiki) und [Contribution-Guide](https://github.com/fipguide/fipguide.github.io/blob/main/CONTRIBUTING.md) verfügbar.

## Unterstützung

Wenn du Hilfe bei der Bearbeitung benötigst, kannst du dich jederzeit per Mail oder über die FIP Guide Community bei uns melden. Weitere Informationen dazu findest du auf der [Kontakt-Seite](/contact).
