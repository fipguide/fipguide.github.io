---
draft: false
title: "Contribution"
type: "general/generalinformation"
---

The _FIP Guide_ is an open-source and community project. If you would like to update or add information, you can do this independently. To ensure the accuracy of the information, all changes are reviewed by the FIP Guide team before they are published.

Pages can be adjusted directly in the FIP Guide via the <a href="https://www.fipguide.org/admin">Content Management System (CMS)</a>. More about this in the section [Direct Editing](#direct-editing). If you already have technical background knowledge, you can make changes directly via GitHub, more about this under [GitHub Contribution](#github-contribution).

## Direct Editing

You can edit the content of the pages directly via the Content Management System (CMS). It is available at <a href="https://www.fipguide.org/admin">https://www.fipguide.org/admin</a>.

Please note the following points when editing:

### Login

{{% float-image
  src="login.webp"
  alt="FIP Guide CMS login"
  width="30%"
  position="left"
%}}
To log in to the FIP Guide CMS, you need a free [GitHub](https://github.com/) account. GitHub belongs to Microsoft and is a platform for collaboration in open-source projects. You can easily create the GitHub account on the [GitHub website](https://github.com/).

You can log in to the CMS with this GitHub account. During the login, the use must be confirmed with "Authorize".
{{% /float-image %}}

### Open Pages

On the <a href="https://www.fipguide.org/admin">homepage</a> of the FIP Guide CMS, the page category can be selected in the left menu and then the desired page can be opened in the center or a new page can be created.

![FIP Guide CMS homepage](startpage.webp)

Alternatively, the page to be edited can also be opened via the FIP Guide and then modified via the CMS using the "Edit page" menu.

{{% columns %}}
{{% column width="50%" %}}
![Edit page menu desktop](edit-button-desktop.webp)
{{% /column %}}
{{% column width="50%" %}}
![Edit page menu mobile](edit-button-mobile.webp)
{{% /column %}}
{{% /columns %}}

### Edit Page

{{% float-image
  src="language.webp"
  alt="Select language in FIP Guide CMS"
  width="40%"
  position="right"
%}}
In the editing view, the corresponding page can be updated. The FIP Guide is available in different languages. These can be selected via the corresponding drop-down menu.
{{% /float-image %}}

{{% highlight tip %}}
If you want, you can independently update all languages of the page. However, this is not absolutely necessary. You can also update information in only one language. The FIP Guide team will review the changes and then update the information in all languages.
{{% /highlight %}}

{{% float-image
  src="language-view.webp"
  alt="Switch language view in FIP Guide CMS"
  width="15%"
  position="left"
%}}
Using the page icon on the right side, the view can be switched between _multilingual_ and _single-language_.
{{% /float-image %}}

### Save and Publish Changes

{{% float-image
  src="save.webp"
  alt="Save changes in FIP Guide CMS"
  width="50%"
  position="right"
%}}
If you want to pause your work and save it, you can do this via the _Save_ button. The changes are then saved in the CMS so that you can continue editing them later, but they are not yet published.
{{% /float-image %}}

{{% float-image
  src="status-review.webp"
  alt="Set status to review in FIP Guide CMS"
  width="40%"
  position="left"
%}}
If you want to publish your changes, you can set the status of the page to _Review_. The FIP Guide team will review the changes and then publish them. As long as the changes have not been published, the pages can be edited at any time.
{{% /float-image %}}

Every change that has been set to the _Review_ status is visible on GitHub: [FIP Guide GitHub changes (pull requests)](https://github.com/fipguide/fipguide.github.io/pulls). Your change is also visible there and comments can be left on the change. The FIP Guide team reviews the changes and, if necessary, asks questions via the comment function.

### Continue Working / Overview of Changes

{{% float-image
  src="workflow.webp"
  alt="FIP Guide CMS workflow"
  width="60%"
  position="right"
%}}
If you have saved your work on a page and want to continue, or if you want an overview of the status of all your changes, you can do this via the _Workflow_ menu item.

- **Draft:** Changes that are still being worked on and are not yet ready for review.
- **Review:** Changes that are being reviewed by the FIP Guide team.
- **Ready:** Changes that have been reviewed by the FIP Guide team and will be published shortly.
  {{% /float-image %}}

### Preview

{{% float-image
  src="preview.webp"
  alt="FIP Guide CMS preview"
  width="50%"
  position="right"
%}}
After changes have been saved in the CMS, a preview of the page can be viewed in which your own changes are already visible.
{{% /float-image %}}

{{% highlight important %}}
Generating the preview can take 5-10 minutes!
{{% /highlight %}}

Use _Check for Preview_ to check whether the preview has already been generated. The preview is regenerated with every adjustment, but remains available if the changes are continued at a later point in time.

## GitHub Contribution

The FIP Guide uses the static website generator [_Hugo_](https://gohugo.io/) to create the website. The page can be edited directly in [GitHub](https://github.com/fipguide/fipguide.github.io/) via the web IDE or your local development environment. Further information and help are available in the [GitHub wiki](https://github.com/fipguide/fipguide.github.io/wiki) and [contribution guide](https://github.com/fipguide/fipguide.github.io/blob/main/CONTRIBUTING.md).

## Support

If you need help with editing, you can contact us at any time by email or via the FIP Guide Community. Further information can be found on the [contact page](/contact).
