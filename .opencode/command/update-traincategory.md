---
description: Update train category information
agent: build
---

Update the page $ARGUMENTS to new train category shortcodes.

A shortcode looks like:

```
{{% train-category
    id="train-id" (lowercase, hyphenated abbreviation of the train category)
    title="title"
    type="highspeed" (can be highspeed, regional, subway, bus, funicular, tram, sleeper, ship)
    fip_accepted=true (can be true, false, partially)
    reservation_required=true (can be true, false, partially)
    reservation_possible=true (can be true, false, partially; omit the attribute if false or if reservation_required is true)
    route_overview_url="https://example.com" (if there is an route overview link in the description, otherwise omit the attribute)
    additional_information_url="https://example.com" (if there is an additional information link in the description, otherwise omit the attribute)
%}}
{{% /train-category %}}
```

Do not use brackets around boolean attributes like true and false. Place each attribute in a new line.

Important information (previously paragraphs that started with ⚠️ in the text) should be changed to an important highlight shortcut (in the same position as the text was before):

```
{{% highlight important %}}
{{% /highlight %}}
```

If there is a risk of confusion (previously marked with ℹ️ in the text), add it as confusion highlight (in the same position the text was before):

```
{{% highlight confusion %}}
{{% /highlight %}}
```

Tranform the "**Reservation cost:**" (or language equivalent) section to a heading "#### Reservation" (de: Reservierung / fr: Réservation).

If there is additional information in the text that can't be represented in the shortcode, add the information to the text. For example "**Reservation required:** ⚠️ sometimes (marked with _R_)" becomes "A reservation is required for some trains (marked with _R_)."

If the expander mentions routes where FIP are valid, place them under a `#### Scheduled routes` (de: Strecken im Linienverkehr / fr: Lignes régulières) heading. Subheadings for `##### Strecken mit FIP-Gültigkeit` and `##### Strecken ohne FIP-Gültigkeit` are possible if needed.

Make sure to remove the old expanders after adding the shortcode.
