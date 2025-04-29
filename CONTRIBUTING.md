# Contributing

Thanks for your interest in the FIP guide. Contributions are always welcome!

This guide is intended for developers.
If you just want to contribute content, you can find more information in the [Wiki](/../../wiki/English).

We are committed to fostering a welcoming, respectful, and harassment-free
environment. Be kind!
If you have questions, ideas or want to report a bug, feel free to
[open an issue](/../../issues). Or go ahead and
[open a pull request](/../../pulls) to contribute code.

## Getting Started

### Prerequisites

The project uses Hugo as framework for the website. Therefore, hugo must first be installed.
You can find the instructions in the official [Hugo documentation](https://gohugo.io/installation/).

Validate the installation by running `hugo version` in the command line.

In addition, we use some node packages, for example bootstrap as UI toolkit. To install the packages,
install the node package manager `npm` on your machine. Instructions are available in the [official documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Validate the installation by running `npm --version` in the command line.

### Start the development server

First of all, we have to the install the node packages by running: 

```zsh
npm i
```

Then, we can start the integrated hugo server with:


```zsh
hugo server
```

Check the output and follow the link to see a local preview of the changes.

To initialize the search index, run the following command in a separate terminal window:

```zsh
npx -y pagefind --site public
```