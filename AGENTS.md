# FIP Guide Guidelines

## Content Guidelines

- Content MUST support all three languages (en, de, fr)
- NEVER change the meaning of content when translating. Always translate as 1:1.
- ALWAYS align the content with the corresponding base (defined in `archetypes`)
- ALWAYS use the exact translations for headlines (defined in `archetypes`)
- ALWAYS create new content pages with `hugo new {base}/{name}` where base can be `country`, `operator` or `booking`.

### Glossary

- Use "Freifahrtschein" instead of "Freifahrtsschein"
- Use "FIP Coupon" instead of "FIP free travel"
- Use "Motorail train" instead of "car train"
- Use "Break of journey" instead of "Journey Interruption"

### Translations

| Deutsch                      | Englisch                  | Französisch                         |
| ---------------------------- | ------------------------- | ----------------------------------- |
| FIP Freifahrtschein          | FIP Coupon                | Coupon FIP                          |
| FIP Globalpreis              | FIP Global Fare           | Tarif Global FIP                    |
| FIP 50 Ticket                | FIP 50 Ticket             | Billet FIP 50                       |
| FIP Ausweis                  | FIP Card                  | Carte FIP                           |
| <operator> Ticketschalter    | <operator> Ticket Office  | Guichet <operator>                  |
| <operator> Website           | <operator> Website        | Site Web <operator>                 |
| <operator> Telefon           | <operator> Telephone      | Téléphone <operator>                |
| <operator> Fahrkartenautomat | <operator> Ticket Machine | Distributeurs de billets <operator> |

## Development Guidelines

### Build/Test Commands

- `hugo serve`: Start local development server
- `hugo --gc --minify`: Build for production
- `npx prettier --write .`: Format code
- `npx pagefind --site public`: Generate search index
- `pre-commit run --all-files`: Run all pre-commit checks

### Code Style & Conventions

- **HTML Templates**: Use Hugo / Go template syntax
- **JavaScript**: ES6 modules with relative imports (`./filename.js`).
- **CSS/SCSS**: Use SCSS with BEM-like naming, variables defined in `_variables.scss`
- **Markdown**: Frontmatter in YAML format, use shortcodes for complex layouts
- **i18n**: Files in `i18n/` sorted alphabetically by key, support en/de/fr languages

### File Structure

- Content in `content/` with multilingual structure (`index.en.md`, `index.de.md`, `index.fr.md`)
- Layouts in `layouts/` following Hugo conventions:
  - Partials for reusable components in HTML files in `layouts/partials/`
  - Shortcodes for reusable components in Markdown files in `layouts/shortcodes/`
- Assets in `assets/` (processed) and `static/` (copied as-is)

## Quality Standards

- All commits MUST pass the pre-commit hooks defined in `.pre-commit-config.yaml`
- HTML templates must be valid Go template syntax
- Do NOT add any comments to the code
- NEVER create markdown files outside the content directory
