---
description: Translate a page
agent: build
---

Translate the page $ARGUMENTS into the other languages.
If the page already exists, only translate the added or changed parts. Find out which changes need to be translated using the Git version control system. Usually, the changes are not yet committed.
If the page doesn't exist, create it.

Follow these rules:

- Do not modify the meaning of content. Translate as 1:1 where possible.
- Use names of the translation language for cities (e.g., Köln in German, "Cologne" in English and "Cologne" in French).
- Enforce the glossary and translations as defined in `AGENTS.md`.
- Do not translate the keys of the front matter section, the keys of shortcodes or partials.
- Use the corresponding archetype (defined in `archetypes`) as base for the translated page.
- Update anchors of internal links to the corresponding section in the target language.
