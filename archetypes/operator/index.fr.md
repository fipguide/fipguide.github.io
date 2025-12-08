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
  Brève description de la compagnie ferroviaire. Par exemple, le nom complet dans la langue locale, les noms alternatifs, et si c'est une compagnie privée ou publique.
-->

## Résumé

<!--
  Liste à puces des principales caractéristiques / règles FIP de la compagnie ferroviaire.
  Par exemple :
  - Les Billets FIP 50 et les Coupons FIP sont-ils acceptés ?
  - Y a-t-il une obligation de réservation ?
  - Existe-t-il d'autres conditions tarifaires particulières ou des dérogations par rapport aux autres compagnies FIP ?
-->

## Validité des Billets FIP

<!--
  Les catégories de billets peuvent varier selon l'opérateur.
-->

Coupon FIP : <✅/⛔> \
Coupon FIP accompagnant : <✅/⛔> \
Billets FIP 50 : <✅/⛔> \
Tarif Global FIP : <✅/⛔>

<!--
  Où les Billets FIP 50 / Coupons FIP sont-ils valables et quelles sont les restrictions ? Quel billet est nécessaire pour le voyage (par ex. Billet FIP 50 continu ou Coupons FIP des deux pays) ?
-->

## Catégories de trains et réservations

<!--
  Les réservations sont-elles possibles et où sont-elles obligatoires ?
-->

<!--
  Pour chaque catégorie de train, une section distincte peut être ajoutée selon le modèle suivant :
  Dans le titre, les emojis suivants peuvent être utilisés :
  - ⚠️ pour une obligation générale de réservation ou des suppléments
  - 1️⃣ pour une obligation de réservation en 1ère classe uniquement
  - ⛔ pour une non-validité FIP
  - ℹ️ pour des confusions possibles avec d'autres compagnies ferroviaires / catégories de train
-->

{{% expander "Catégorie de train" traincategory "category" %}}

<!-- Remplacez "Catégorie de train" par le nom de la catégorie, par ex. TGV, ICE -->

**Description :** \

<!-- Description de la catégorie -->

**Réservation possible :** <oui/non> \
**Réservation obligatoire :** <⚠️ oui / non / ⚠️1️⃣ seulement en 1ère classe> \

<!-- Si FIP n’est pas accepté, ajoutez ceci :
**FIP :** ⛔ FIP non accepté
-->
<!-- Si les Tarifs Globaux FIP sont disponibles, ajoutez ceci :
**Tarif Global FIP :**
-->

{{% /expander %}}

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
  Intégrez ici les informations d'une plateforme de réservation définie.

  Vous pouvez remplacer individuellement les paramètres de réservation listés ci-dessous, mais ce n'est pas obligatoire.
  Si vous omettez certains paramètres, les valeurs par défaut de la plateforme de réservation seront utilisées.

  Pour plus d'informations sur la définition d'une plateforme de réservation, consultez l'archetype de réservation.
-->

{{% booking id="booking_id"
    subtitle="Ce sous-titre s'affiche dans le résumé de l'expander et doit rester concis."
    reservations=nil
    fip_50=false
    fip_global_fare=true
    classes.first="20€"
    classes.second="10€"
%}}

<!-- Ceci est un texte informatif qui peut contenir des informations spécifiques au pays et qui s'affiche dans la partie développée. -->

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
  Description de la condition spéciale, s'il existe des réglementations particulières sur certains trajets.
-->

## Recommandations

<!--
  Recommandations personnelles et conseils particuliers pour le voyage.
-->

## Sources

[^1]: [<Nom de la source 1>](Lien)

[^2]: [<Nom de la source 2>](Lien)
