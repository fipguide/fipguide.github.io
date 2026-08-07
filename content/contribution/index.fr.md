---
draft: false
title: "Contribution"
type: "general/generalinformation"
---

Le _FIP Guide_ est un projet open source et communautaire. Si vous souhaitez mettre à jour ou ajouter des informations, vous pouvez le faire de manière autonome. Afin de garantir l’exactitude des informations, toutes les modifications sont vérifiées par l’équipe du FIP Guide avant d’être publiées.

Les pages peuvent être modifiées directement dans le FIP Guide via le <a href="https://www.fipguide.org/admin">système de gestion de contenu (CMS)</a>. Vous trouverez plus d’informations à ce sujet dans la section [Modifier directement](#modifier-directement). Si vous avez déjà des connaissances techniques, vous pouvez effectuer les modifications directement via GitHub, plus d’informations à ce sujet sous [Contribution GitHub](#contribution-github).

## Modifier directement

Via le système de gestion de contenu (CMS), vous pouvez modifier directement le contenu des pages. Il est accessible à l’adresse <a href="https://www.fipguide.org/admin">https://www.fipguide.org/admin</a>.

Veuillez tenir compte des points suivants lors de la modification :

### Connexion

{{% float-image
  src="login.webp"
  alt="Connexion au CMS du FIP Guide"
  width="30%"
  position="left"
%}}
Pour vous connecter au CMS du FIP Guide, vous avez besoin d’un compte [GitHub](https://github.com/) gratuit. GitHub appartient à Microsoft et est une plateforme de collaboration pour les projets open source. Vous pouvez facilement créer le compte GitHub sur le [site web de GitHub](https://github.com/).

Il est possible de se connecter au CMS avec ce compte GitHub. Pendant la connexion, l’utilisation doit être confirmée avec « Authorize ».
{{% /float-image %}}

### Ouvrir des pages

Sur la <a href="https://www.fipguide.org/admin">page d’accueil</a> du CMS du FIP Guide, la catégorie de page peut être sélectionnée dans le menu de gauche, puis la page souhaitée peut être ouverte au centre ou une nouvelle page peut être créée.

![Page d’accueil du CMS du FIP Guide](startpage.webp)

Il est également possible d’ouvrir la page à modifier via le FIP Guide, puis de la modifier via le CMS au moyen du menu « Modifier la page ».

{{% columns %}}
{{% column width="50%" %}}
![Menu Modifier la page bureau](edit-button-desktop.webp)
{{% /column %}}
{{% column width="50%" %}}
![Menu Modifier la page mobile](edit-button-mobile.webp)
{{% /column %}}
{{% /columns %}}

### Modifier la page

{{% float-image
  src="language.webp"
  alt="Sélectionner la langue dans le CMS du FIP Guide"
  width="40%"
  position="right"
%}}
Dans la vue de modification, la page correspondante peut être mise à jour. Le FIP Guide est disponible en différentes langues. Celles-ci peuvent être sélectionnées via le menu déroulant correspondant.
{{% /float-image %}}

{{% highlight tip %}}
Si vous le souhaitez, vous pouvez mettre à jour de manière autonome toutes les langues de la page. Cela n’est toutefois pas absolument nécessaire. Vous pouvez également mettre à jour des informations dans une seule langue. L’équipe du FIP Guide vérifiera les modifications et mettra ensuite les informations à jour dans toutes les langues.
{{% /highlight %}}

{{% float-image
  src="language-view.webp"
  alt="Changer la vue des langues dans le CMS du FIP Guide"
  width="15%"
  position="left"
%}}
L’icône de page située à droite permet de basculer l’affichage entre _multilingue_ et _monolingue_.
{{% /float-image %}}

### Enregistrer et publier les modifications

{{% float-image
  src="save.webp"
  alt="Enregistrer les modifications dans le CMS du FIP Guide"
  width="50%"
  position="right"
%}}
Si vous souhaitez interrompre votre travail et l’enregistrer, vous pouvez le faire via le bouton _Save_. Les modifications sont alors enregistrées dans le CMS afin que vous puissiez les reprendre plus tard, mais elles ne sont pas encore publiées.
{{% /float-image %}}

{{% float-image
  src="status-review.webp"
  alt="Définir le statut sur review dans le CMS du FIP Guide"
  width="40%"
  position="left"
%}}
Si vous souhaitez publier vos modifications, vous pouvez définir le statut de la page sur _Review_. L’équipe du FIP Guide vérifiera les modifications et les publiera ensuite. Tant que les modifications n’ont pas été publiées, les pages peuvent être modifiées à tout moment.
{{% /float-image %}}

Chaque modification qui a été définie avec le statut _Review_ est visible sur GitHub : [Modifications GitHub du FIP Guide (pull requests)](https://github.com/fipguide/fipguide.github.io/pulls). Votre modification y est également visible et des commentaires peuvent être laissés sur la modification. L’équipe du FIP Guide vérifie les modifications et pose des questions si nécessaire via la fonction de commentaire.

### Reprendre le travail / Vue d’ensemble des modifications

{{% float-image
  src="workflow.webp"
  alt="Workflow du CMS du FIP Guide"
  width="60%"
  position="right"
%}}
Si vous avez enregistré votre travail sur une page et souhaitez le reprendre, ou si vous souhaitez avoir une vue d’ensemble du statut de toutes vos modifications, vous pouvez le faire via l’entrée de menu _Workflow_.

- **Draft:** Modifications sur lesquelles le travail se poursuit et qui ne sont pas encore prêtes pour la review.
- **Review:** Modifications qui sont vérifiées par l’équipe du FIP Guide.
- **Ready:** Modifications qui ont été vérifiées par l’équipe du FIP Guide et qui seront publiées prochainement.
  {{% /float-image %}}

### Preview

{{% float-image
  src="preview.webp"
  alt="Preview du CMS du FIP Guide"
  width="50%"
  position="right"
%}}
Après l’enregistrement des modifications dans le CMS, une preview de la page peut être consultée, dans laquelle vos propres modifications sont déjà visibles.
{{% /float-image %}}

{{% highlight important %}}
La génération de la preview peut prendre 5 à 10 minutes !
{{% /highlight %}}

Via _Check for Preview_, il est possible de vérifier si la preview a déjà été générée. La preview est régénérée à chaque modification, mais reste disponible si le travail sur les modifications est repris ultérieurement.

## Contribution GitHub

Le FIP Guide utilise le générateur de sites statiques [_Hugo_](https://gohugo.io/) pour créer le site web. La page peut être modifiée directement dans [GitHub](https://github.com/fipguide/fipguide.github.io/) via l’IDE web ou votre environnement de développement local. Vous trouverez plus d’informations et d’aide dans le [wiki GitHub](https://github.com/fipguide/fipguide.github.io/wiki) et le [guide de contribution](https://github.com/fipguide/fipguide.github.io/blob/main/CONTRIBUTING.md).

## Assistance

Si vous avez besoin d’aide pour la modification, vous pouvez nous contacter à tout moment par e-mail ou via la communauté FIP Guide. Vous trouverez plus d’informations sur la [page de contact](/contact).
