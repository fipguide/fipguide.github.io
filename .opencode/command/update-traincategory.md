---
description: Update train category information
agent: build
---

Update the page $ARGUMENTS to new train category shortcodes.

A shortcode looks like:

```
{{% train-category
    title="title"
    type="highspeed" (can be highspeed, regional, bus, funicular, sleeper)
    fip_accepted=true (can be true, false, partially)
    reservation_required=true (can be true, false, partially)
    reservation_possible=true (omit the attribute if false or if reservation_required is true)
    risk_of_confusion=true (previously marked with ℹ️ in the title, omit the attribute if false)
    important_info=true (if an important highlight is part of the train category, omit the attribute if false)
    route_overview_url="https://example.com" (if there is an route overview link in the description, otherwise omit the attribute)
    additional_information_url="https://example.com" (if there is an additional information link in the description, otherwise omit the attribute)
%}}
{{% /train-category %}}
```

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

Tranform the "**Reservation cost:**" (or language equivalent) section to a heading "### Reservation".
