---
draft: false
title: "Autriche"
country: "austria"
params:
  operators_without_fip:
    - name: Achenseebahn
      query:
    - name: ’[CAT (City Airport Train) Vienne](/operator/oebb#aéroport-de-vienne--city-airport-train-cat "CAT")’
      query:
    - name: Graz–Köflacher Bahn (GKB)
      query:
    - name: Montafonerbahn
      query:
    - name: NÖVOG
      query:
    - name: Pinzgauer Lokalbahn
      query:
    - name: RegioJet
      query:
    - name: Salzburger Lokalbahn
      query:
    - name: Steiermärkische Landesbahnen
      query:
    - name: WESTbahn
      query:
    - name: Wiener Lokalbahn (Badner Bahn)
      query:
    - name: Zillertalbahn
      query:
---

## Informations FIP

En Autriche, les trains des [Chemins de fer fédéraux autrichiens (ÖBB)](/operator/oebb "ÖBB") sont accessibles avec les Billets FIP. Westbahn et RegioJet exploitent également des trains grandes lignes en parallèle avec l’ÖBB, mais ne sont pas utilisables avec des Billets FIP. Dans les planificateurs de trajet, ces trains sont abrégés en `IC` ou `WB` (à ne pas confondre avec les `IC` de l’ÖBB).

Il existe aussi plusieurs opérateurs régionaux de trains locaux qui n’acceptent pas les Billets FIP. Ils utilisent souvent les mêmes catégories que l’ÖBB : `RE`, `REX` et `S`. En cas de doute, consultez le site de l’opérateur ou [Bahn.de](https://int.bahn.de/fr/).

La [GySEV / Raaberbahn](/operator/gysev "GySEV") est une deuxième compagnie ferroviaire qui accepte les Billets FIP en Autriche et en Hongrie. Les Coupons FIP GySEV sont principalement destinés à la Hongrie et ne sont valables que de façon limitée sur les lignes GySEV en Autriche.

{{< identify-operator sources="db-website,vagonweb" >}}
Dans la [recherche d’horaires en ligne de l’ÖBB](https://fahrplan.oebb.at/), seuls les types de trains sont indiqués, sans distinction entre les opérateurs.
{{< /identify-operator >}}

## Informations générales

L’Autriche dispose d’un réseau ferroviaire dense, structuré autour de deux lignes principales :

- **La ligne sud** : de Vienne via Graz vers la Slovénie, Klagenfurt/Villach et l’Italie (dès décembre 2025 via la nouvelle ligne à grande vitesse _Koralmbahn_, auparavant par l’ancienne ligne).
- **La ligne ouest** : de Vienne via Salzbourg/Innsbruck jusqu’au lac de Constance (Bregenz) et plus loin vers la Suisse (Zurich).

Ces deux lignes sont bien développées, avec une fréquence d’un train toutes les 30 minutes entre les grandes gares. On y trouve aussi de nombreuses lignes secondaires ou pittoresques : la spectaculaire ligne du Tauern (Salzbourg–Villach), ligne de l’Ennstal (Salzbourg–Schladming–Leoben), ou la ligne du Brenner (Munich–Innsbruck–Bolzano–Vérone).

## Arrivée et points frontières

{{% expander "Points frontières" border %}}

| Pays                                                          | Points frontières                                                                                                      |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [République tchèque](/country/czechia) ([ČD](/operator/cd))   | Bernhardsthal (Gr), Unterretzbach (Gr), Gmünd NÖ (Gr), Summerau (Gr)                                                   |
| [Slovaquie](/country/slovakia) ([ZSSK / ŽSR](/operator/zssk)) | Marchegg (Gr), Kittsee (Gr)                                                                                            |
| Hongrie ([GySEV](/operator/gysev))                            | Pamhagen (Gr), Szentgotthárd, Sopron                                                                                   |
| Hongrie (MÁV)                                                 | Hegyeshalom (Gr), Sopron                                                                                               |
| [Slovénie](/country/slovenia) ([SŽ](/operator/sz))            | Bleiburg (Gr), Spielfeld-Strass (Gr), Rosenbach (Gr)                                                                   |
| [Italie](/country/italy) ([FS](/operator/fs))                 | Brennero/Brenner, San Candido/Innichen, Tarvisio Boscoverde                                                            |
| [Suisse](/country/switzerland) ([CFF](/operator/sbb))         | Buchs SG, St. Margrethen                                                                                               |
| [Allemagne](/country/germany) ([DB](/operator/db))            | Passau, Salzbourg (trains régionaux vers Salzburg Liefering), Simbach am Inn, Kufstein, Mittenwald (Gr), Lindau-Reutin |

{{% /expander %}}

### République tchèque

Depuis la Tchéquie, des trains transfrontaliers exploités par České dráhy (ČD) peuvent être utilisés avec un Billet FIP 50 ou un Coupon FIP ČD. Les trains opérés par RegioJet ne sont pas valables. Il existe des liaisons grandes lignes entre Linz et Prague, ainsi que des Railjets entre Vienne et Prague via Brno.

### Slovaquie

Depuis la Slovaquie, il existe deux liaisons régionales possibles pour rejoindre l’Autriche :

- Une liaison part du nord du Danube depuis la gare principale de Bratislava (Bratislava hl.st.) via Marchegg jusqu’à Vienne.
- Une autre liaison démarre au sud de Bratislava (Bratislava Petrzalka) et passe par Kittsee jusqu’à Vienne.

Pour les deux itinéraires, un Billet FIP 50 de la [ŽSR / ZSSK](/operator/zssk "ŽSR / ZSSK") est requis pour la section slovaque.

Il existe également quelques liaisons `EC`.

### Hongrie

Depuis la Hongrie, des trains régionaux et EuroCity/Railjet sont disponibles. Sur la ligne Vienne–Budapest via Hegyeshalom, un Billet FIP MÁV est nécessaire à partir de la frontière.
Sinon, un Billet FIP GySEV est requis pour les lignes GySEV.

### Slovénie

Les trois points de passage ferroviaires existants depuis la Slovénie sont desservis plusieurs fois par jour. Depuis Ljubljana et parfois même depuis la Croatie, on peut voyager via Jesenice jusqu’à Villach. Les liaisons sont généralement au moins toutes les deux heures.

Depuis Maribor, Graz est accessible directement et chaque heure en trains grandes lignes et régionaux via Spielfeld-Strass. Plus rarement, et uniquement en trafic régional, la liaison entre Bleiburg (Autriche) et Maribor est assurée. Sur toutes ces lignes, les Coupons FIP ÖBB et SŽ ou un Billet FIP 50 continu sont nécessaires.

### Italie

Il existe deux itinéraires internationaux entre l’Italie et l’Autriche :

- La ligne du Brenner : avec des EuroCity de Bolzano et Vérone via le col du Brenner et Innsbruck jusqu’à Munich, ainsi que des trains S3 de Brenner à Innsbruck. Des trains régionaux depuis Bolzano peuvent également être utilisés jusqu’au Brenner.
- La route via Tarvisio Boscoverde : avec des Railjets depuis Venise à destination de Vienne et quelques trains régionaux depuis Trieste jusqu’à Villach.

Sur ces itinéraires, le Coupon FIP ÖBB est valable en Italie pour les trains grandes lignes (`EC` et `RJ`), mais un supplément est à payer à partir de la frontière italienne sur ces deux liaisons.

### Liechtenstein

Le Liechtenstein et l’Autriche ne sont reliés que par quelques trains en semaine. Ces trains S-Bahn transfrontaliers circulent uniquement aux heures de pointe et sont exploités par les [Chemins de fer fédéraux autrichiens (ÖBB)](/operator/oebb#liechtenstein "ÖBB"). Les Coupons FIP ÖBB et les Billets FIP 50 sont donc également valables au Liechtenstein.

Sinon, le trafic transfrontalier est principalement assuré par des bus, sur lesquels les Billets FIP ne sont pas valables.

### Suisse

L’Autriche et la Suisse ne sont reliées que par un seul passage frontalier principal, à St. Margrethen. Ce point est desservi principalement par des trains régionaux, mais aussi par des EuroCity qui ne s’arrêtent qu’à Bregenz côté autrichien et circulent sinon depuis l’Allemagne (Munich).

L’entrée depuis la Suisse est également possible via Buchs SG et Feldkirch en traversant le Liechtenstein. Au Liechtenstein, les [Billets FIP ÖBB](/operator/oebb#liechtenstein "ÖBB") sont valables. Il est donc possible d’obtenir un billet continu entre l’Autriche et la Suisse en utilisant des Coupons FIP ÖBB et SBB. La ligne principale entre les deux pays passe ici, avec des trains Railjet autrichiens et EuroCity entre Vienne/Graz et Zurich, ainsi que des trains régionaux.

### Allemagne

Entre l’Allemagne et l’Autriche, on trouve plusieurs liaisons régionales et deux grandes lignes principales :

- Une ligne `ICE` de Vienne via Linz, Passau, Nuremberg vers Francfort/Cologne (et certains trains jusqu’à Berlin).
- Des trains `ICE`, `RJ` et `IC` de Munich via Salzbourg vers plusieurs destinations en Autriche.

Pour la section allemande, un Billet FIP DB est requis.

Il existe aussi des liaisons régionales nécessitant toujours des Coupons FIP ÖBB et DB ou un billet FIP 50 valable sur tout le trajet.

#### Außenfernbahn

Sur la ligne de l’[Außenfernbahn](https://en.wikipedia.org/wiki/Ausserfern_Railway) entre Garmisch-Partenkirchen et Pfronten-Steinach via Reutte in Tirol, des trains de DB Regio circulent d’Allemagne vers l’Autriche et inversement. Les Coupons FIP de la DB (ainsi que les avantages nationaux pour les employés DB) sont valables pour les trajets suivants :

- trajets directs d’Allemagne via l’Autriche vers l’Allemagne (transit)
- trajets commençant ou se terminant en Allemagne (trajets transfrontaliers)

Les trajets purement internes à l’Autriche (départ et arrivée en Autriche) sont exclus. Les Coupons FIP de l’ÖBB ne sont valables pour aucun trajet sur cette ligne.

Les règles sont analogues à celles du Deutschlandticket ou de la Bahncard 100. [^1] [^2]

## Évaluation FIP

L’Autriche dispose d’une infrastructure exemplaire et de lignes particulièrement pittoresques. La majorité des trains étant opérée par l’ÖBB, il est possible de parcourir une grande partie du pays avec les Billets FIP. Cependant, le supplément obligatoire (même sans réservation) sur les trains grandes lignes — 10 € en 2ᵉ classe, 15 € en 1ʳᵉ classe — réduit légèrement l’attrait du FIP en Autriche.

## Sources

[^1]: [Conditions de transport DB Regio Außenfernbahn](https://assets.static-bahn.de/dam/jcr:c1a8a3da-1cdf-43a2-abea-21483a20b01b/2023_BB%20Au%C3%9Ferfernbahn_final.pdf)

[^2]: [Retour d’expérience Außenfernbahn](https://github.com/fipguide/fipguide.github.io/issues/606)
