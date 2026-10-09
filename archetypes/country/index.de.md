---
title: "{{ .File.ContentBaseName | title }}" # Ändere den Name auf den deutschen Ländernamen
country: "{{ .File.ContentBaseName }}"
params:
  operators_without_fip:
    -  # Liste Betreiber, die kein FIP akzeptieren
  border_points:
    -  # Grenzpunkt-IDs im Uhrzeigersinn, startend im Norden des Landes, wie in `content/country/borderpoints.de.yaml` definiert
  border_points_footnotes:
    -  # Optionale Fußnoten unter der Grenzpunkt-Tabelle
---

<!-- Entferne das "WIP" Snippet, wenn die Inhalte der Seite vollständig sind -->

{{< wip >}}

## FIP Nutzung

<!--
    Ein kurzer zusammenfassender Text, der folgende Fragen in dieser Reihenfolge beantworten sollte:
    - Welche FIP Fahrtkarten (FIP 50/FIP Freifahrtscheine) werden im Land anerkannt und bei welchen Bahngesellschaften?
    - Welche Besonderheiten bei der Nutzung von FIP gibt es bei den jeweiligen Bahngesellschaften? (Verlinkung zur Bahngesellschaft hinzufügen)
    - Welche Bahngesellschaften erkennen keine FIP-Fahrkarten an und wie erkennt man diese Bahngesellschaften in der Verbindungsaufkunft?
-->

{{< identify-operator sources="" >}}
{{< /identify-operator >}}

## Wissenswertes

<!--
    Ein kurzer Abschnitt über die allgemeine Zugsituation im Land. Folgende Themen können bspw. behandelt werden:
    - Ausbaustand des Bahnnetzes
    - wichtige Verbindungen
    - Qualität und Zustand der Züge
    - Pünktlichkeit
    - Taktung
    - Besondere Züge/Strecken/Linien
    - Schöne Bahnhöfe
-->

## Anreise und Grenzpunkte

<!--
Nur Grenzpunkte an der Landesgrenze zu anderen Ländern. Diese werden in `content/country/borderpoints.de.yaml` (Details pro Grenze) und über `params.border_points` im Frontmatter dieser Seite (Reihenfolge der Zeilen, im Uhrzeigersinn startend im Norden des Landes) gepflegt und hier automatisch als Tabelle ausgegeben.
-->

{{< border-points >}}

### <Name des Nachbarlandes>

<!--
  Welche Routen kann man aus dem entsprechenden Land nutzen.
  Welche Hinweise & Empfehlungen gibt es für die Einreise aus dem Land
-->
