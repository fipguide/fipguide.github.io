---
title: "{{ .File.ContentBaseName | title }}" # Change le nom par le nom du pays français
country: "{{ .File.ContentBaseName }}"
params:
  operators_without_fip:
    -  # Listez ici les opérateurs ne participant pas au FIP
  border_points:
    -  # IDs des points frontières dans le sens horaire, en commençant par le nord du pays, comme défini dans `content/country/borderpoints.fr.yaml`
  border_points_footnotes:
    -  # Notes de bas de page facultatives sous le tableau des points frontières
---

<!-- Supprimez ce message si la page est complète -->

{{< wip >}}

## Informations FIP

<!--
    Un court résumé qui doit répondre aux questions suivantes, dans cet ordre :
    - Quels Billets FIP (FIP 50 / Coupons FIP) sont reconnus dans le pays et par quels opérateurs ferroviaires ?
    - Quelles sont les particularités de l’utilisation des Billets FIP avec ces opérateurs ? (Ajoutez un lien vers l’opérateur ferroviaire)
    - Quels opérateurs ne reconnaissent pas les Billets FIP et comment les identifier dans les informations de correspondance ?
-->

{{< identify-operator sources="" >}}
{{< /identify-operator >}}

## Informations générales

<!--
    Une courte section sur la situation générale du transport ferroviaire dans le pays. Voici quelques exemples de sujets à traiter :
    - État du réseau ferroviaire
    - Liaisons importantes
    - Qualité et état des trains
    - Ponctualité
    - Fréquence
    - Trains/itinéraires/lignes spéciaux
    - Belles gares ferroviaires
-->

## Arrivée et points frontières

<!--
Uniquement les points frontaliers situés à la frontière nationale avec d’autres pays. Ils sont gérés dans `content/country/borderpoints.fr.yaml` (détails par frontière) et via `params.border_points` dans le frontmatter de cette page (ordre des lignes, dans le sens horaire en commençant par le nord du pays), et affichés ici automatiquement sous forme de tableau.
-->

{{< border-points >}}

### <Nom du pays>

<!--
  Quelles lignes permettent de venir depuis ce pays ?
  Quels conseils et recommandations pour entrer depuis ce pays ?
-->
