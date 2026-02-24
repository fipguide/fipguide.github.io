# Contributing

Thanks for your interest in the FIP Guide. Contributions are always welcome!

This guide is intended for developers.
If you just want to contribute content, you can find more information in the [Wiki](/../../wiki).

We are committed to fostering a welcoming, respectful, and harassment-free
environment. Be kind!
If you have questions, ideas or want to report a bug, feel free to
[open an issue](/../../issues). Or go ahead and
[open a pull request](/../../pulls) to contribute code.

## Getting Started

### Prerequisites

The project uses Hugo as framework for the website. Therefore, Hugo must first be installed.
You can find the instructions in the official [Hugo documentation](https://gohugo.io/installation/).

Validate the installation by running `hugo version` in the command line.

In addition, we use some node packages, for example pagefind for the search. To install the packages,
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

### Run prek hooks

We use the [prek framework](https://prek.dev/) to run some checks to ensure a consistent code quality.

First of all, install the package manager uv: [Installing uv](https://docs.astral.sh/uv/getting-started/installation/).

Then, install the `prek` tool:

```zsh
uv tool install prek --force-reinstall
```

Now, enable `prek` to run the check every time you want to commit changes:

```zsh
prek install
```

## Content Contributions

### Add new pages

To add a new country:

```zsh
hugo new country/${COUNTRY} # Replace ${COUNTRY} with the English country name in lowercase
```

To add a new operator:

```zsh
hugo new operator/${OPERATOR} # Replace ${OPERATOR} with the English operator name in lowercase
```

To add a new booking platform:

```zsh
hugo new booking/${PLATFORM} # Replace ${PLATFORM} with the name of the booking platform
```

### Use AI for translation and quality checks

We provide commands to automatically translate and check pages. To define the commands, we use the [OpenCode AI framework](https://opencode.ai/). It's open source and can be used with different providers, models (OpenAI, Github Copilot, Anthropic), and [IDEs](https://opencode.ai/docs/ide/#installation).

#### Installation

1. Install OpenCode: https://opencode.ai/docs#install.
2. Run `opencode auth login` in a terminal, select the provider and log in.
3. Open the OpenCode CLI with `opencode` in a terminal.
4. Run `/models` to select the model you want to use.

Inside the OpenCode Terminal, you can ask any question, similarly to Github Copilot or Claude Chat. In addition, we provide helpful commands:

- `/translate {page}`: Update the translations and add missing translations of the page. `{page}` can be the name of an operator, a country, a booking plattform, or a path to a file.
- `/check {page}`: Check the page for common mistakes and report them. `{page}` can be the name of an operator, a country, a booking plattform, or a path to a file.

That's the recommended way. However, you can still use other frontend ends like GitHub Copilot Chat and Claude Code. We provide an [`AGENTS.md`](https://agents.md/) file for these providers in the repository, but the custom commands are not available without OpenCode.
