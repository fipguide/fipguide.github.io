---
description: Check a page for common mistakes
agent: plan
---

Check the page $ARGUMENTS for errors. List ALL errors you can find. Run the analysis step by step.
When a language is provided in this prompt, only check check the specified language. Otherwise check all languages of the page.

Before starting the check of German pages, read & understand the styleguide defined in `styleguide_de.md`.

Common errors are:

- Grammatical, typographical, or spelling errors
- Not following the common terms as defined in the glossary of `AGENTS.md`
- Content differs between the different languages. The content should always be the same.
- The page structure doesn't follow the archetype defined in `archetypes`
- Anchors of internal links are not matching the referenced and translated title
- Keywords are not translated as defined in the translations table in `AGENTS.md`

DO NOT report correct information. In the error report, only show errors.
