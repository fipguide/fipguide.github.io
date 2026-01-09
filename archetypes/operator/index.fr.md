---
draft: false
title: "{{ .File.ContentBaseName | upper }}"
country:
  # Ajoutez les abréviations des pays dans lesquels la compagnie ferroviaire opère en anglais.
  - "country1"
  - "country2"
  - "country3"
operator: "{{ .File.ContentBaseName }}"
---

<!-- Supprimez ce message si la page est complète -->

{{< wip >}}

<!--
  Brève description de la compagnie ferroviaire. Par exemple, le nom complet dans la langue locale, les noms alternatifs, et si c’est une compagnie privée ou publique.
-->

## Résumé

<!--
  Liste à puces des principales caractéristiques / règles FIP de la compagnie ferroviaire.
  Par exemple :
  - Les Billets FIP 50 et les Coupons FIP sont-ils acceptés ?
  - Y a-t-il une obligation de réservation ?
  - Existe-t-il d’autres conditions tarifaires particulières ou des dérogations par rapport aux autres compagnies FIP ?
-->

## Validité des Billets FIP

<!--
  Les catégories de billets peuvent varier selon l’opérateur.
-->

Coupon FIP : <✅/⛔> \
Coupon FIP pour les ayants droit : <✅/⛔> \
Billets FIP 50 : <✅/⛔> \
Tarif Global FIP : <✅/⛔>

<!--
  Où les Billets FIP 50 / Coupons FIP sont-ils valables et quelles sont les restrictions ? Quel billet est nécessaire pour le voyage (par ex. Billet FIP 50 continu ou Coupons FIP des deux pays) ?
-->

## Catégories de trains et réservations

<!--
  Pour chaque catégorie de train, une section distincte peut être ajoutée selon le modèle suivant. Les paramètres suivants peuvent être utilisés :
  - `id` : Abréviation en minuscules avec traits d'union de la catégorie de train (par ex. "ice", "tgv-inoui")
  - `title` : Titre de la catégorie de train
  - `type` : `highspeed`, `regional`, `subway`, `bus`, `funicular`, `sleeper` ou `ship`
  - `fip_accepted` : true, false, partially
  - `reservation_required` : true, false, partially
  - `reservation_possible` : true, false, partially (défaut false, peut être omis si reservation_required est true)
  - `route_overview_url` : Lien vers une page avec un aperçu des lignes de cette catégorie (peut être omis si non disponible)
  - `additional_information_url` : Lien vers une page avec des informations supplémentaires sur cette catégorie (peut être omis si non disponible)
-->

{{% train-category
    id="expander-id"
    title="titre"
    type="highspeed"
    fip_accepted=true
    reservation_required=true
    reservation_possible=true
    route_overview_url="https://example.com"
    additional_information_url="https://example.com"
%}}

<!--
  Une description de la catégorie de train peut être ajoutée ici.
-->

{{% highlight confusion %}}
Ce bloc peut être ajouté s’il y a un risque que la catégorie de train soit confondue avec une autre.
{{% /highlight %}}

{{% highlight important %}}
D’autres informations importantes peuvent être ajoutées ici.
{{% /highlight %}}

#### Réservation

<!--
  Description des conditions de réservation pour cette catégorie de train.
-->

#### Lignes régulières

<!--
  Liste de toutes les lignes de cette catégorie de train en service régulier.

  Pour une validité FIP partielle, les sous-titres suivants peuvent être utilisés :
-->

<!--
##### Lignes avec validité FIP

- Ligne 1
- Ligne 2

##### Lignes sans validité FIP

- Ligne 3
- Ligne 4
-->

{{% /train-category %}}

## Catégories de classes

<!--
  Si les catégories de classes incluent des classes supplémentaires/différentes au-delà de la 1ère et 2ème classe, elles peuvent être décrites ici. Sinon, cette section peut être supprimée.
-->

<!--
**Standard** : Comparable à la 2ème classe. \
**Plus** : 1ère classe sans restauration. Un pass FIP pour la 1ère classe est requis. \
**Premium** : 1ère classe avec restauration. Non réservable avec FIP.
-->

## Achat de billets et réservations

### En ligne

<!--
  Intégrez ici les informations d’une plateforme de réservation définie.

  Vous pouvez remplacer individuellement les paramètres de réservation listés ci-dessous, mais ce n’est pas obligatoire.
  Si vous omettez certains paramètres, les valeurs par défaut de la plateforme de réservation seront utilisées.

  Pour plus d’informations sur la définition d’une plateforme de réservation, consultez l’archetype de réservation.
-->

{{% booking id="booking_id"
    subtitle="Ce sous-titre s’affiche dans le résumé de l’expander et doit rester concis."
    reservations=nil
    fip_50=false
    fip_global_fare=true
    classes.first="20€"
    classes.second="10€"
%}}

<!-- Ceci est un texte informatif qui peut contenir des informations spécifiques au pays et qui s’affiche dans la partie développée. -->

{{% /booking %}}

### Par téléphone

<!--
  Intégrez ici des plateformes de réservation supplémentaires pour la réservation par téléphone.
-->

### En gare

<!--
  Intégrez ici des plateformes de réservation supplémentaires pour la réservation en gare.
-->

### À bord du train

<!--
  Les billets avec réduction FIP peuvent-ils encore être achetés à bord du train ? Si oui, comment et y a-t-il un supplément ?
-->

## Réductions

<!--
  Quelles réductions les enfants peuvent-ils obtenir et dans quelles circonstances ?
  Quelles autres réductions peuvent exister ?
-->

## Conditions tarifaires spéciales

### <Trajet ou nom>

<!--
  Description de la condition spéciale, s’il existe des réglementations particulières sur certains trajets.
-->

## Recommandations

<!--
  Recommandations personnelles et conseils particuliers pour le voyage.
-->

## Sources

[^1]: [<Nom de la source 1>](Lien)

[^2]: [<Nom de la source 2>](Lien)
