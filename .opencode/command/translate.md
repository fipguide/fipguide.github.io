---
description: Translate a page
agent: build
---

The following line provides user-provided input. If no arguments are passed, the line will be `ARGUMENTS:`. If arguments are passed, you'll see them after `ARGUMENTS:`
ARGUMENTS: $ARGUMENTS

If ARGUMENTS are passed:
The ARGUMENTS are the pages which should be translated into the other languages.
If the page already exists, only translate the added or changed parts. If the translated page doesn't exist yet, create it.

If you don't get ARGUMENTS:
Find out which changes need to be translated using the Git version control system.
For this do a diff of the branch against the main branch and also check for not yet commited local changes.
If the page already exists, only translate the added or changed parts. If the translated page doesn't exist yet, create it.

Follow these rules:

- Do not modify the meaning of content. Translate as 1:1 where possible.
- Use names of the translation language for cities (e.g., Köln in German, "Cologne" in English and "Cologne" in French).
- Enforce the glossary and translations as defined in `AGENTS.md`.
- Do not translate the keys of the front matter section, the keys of shortcodes or partials.
- Use the corresponding archetype (defined in `archetypes`) as base for the translated page.
- Update anchors of internal links to the corresponding section in the target language.
