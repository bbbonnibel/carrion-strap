---
title: "Profiles: Units"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

The Units module offers a number of additonal classes for defining font sizes, margins, and other small things.

It's an extra module you need to import separately for your profile in your styles:

```html
<style>
@import url("https://bbbonnibel.github.io/carrion-strap/release/v0/units.css");
</style>
```

Some things to bear in mind:

- Each rule only supports a relatively small range of values, usually in increments. We can't support everything from 1 to 1000 or this CSS will be enormous. We just do a few rules with a few ranges and increments. Margins/padding use 5px increments for example, so you can do 5px or 10px but not 8px.
- Pixel units are implicit. `cs-font-size-25` is using pixels. Other units are stated outright, like `25pc` for percent.
- **This pretty much exists for convenience.** You can absolutely just use `style=""` to set all of these properties. Sometimes you just wanna write it out short-like.

**We want your opinions on this!** Should we keep it for v1? Is it doing enough to be worth it? Should it be doing more?  If you like it, or think it's not doing enough, give us feedback. :)

## Font size

The `cs-font-size-{value}` classes set the font size to pixels or percentage.

Supported values:

- `0`–`100`, even numbers only: Set the font size to a pixel value.
- `25%`–`250%`, 25% increments only: Set the font size to a percent value.

::: callout info Example
Set a font size to 44px:

```html
<span class="cs-font-size-44px">Bigger text!</span>
```
:::

## Spacing

The `cs-margin-{value}` and `cs-padding-{value}` classes support margin and padding.

Supported values:

- `auto`: Set spacing to `auto`.
- `0`–`100`, 5px increments only: Set the spacing to this pixel value.

::: callout info Example
Set an element's margin to 10px, and its padding to 25px:

```html
<div class="cs-margin-10 cs-padding-25"></div>
```
:::

You can also configure spacing for specific edges with `cs-margin-{edge}-{value}` classes:

- `h`: Horizontal spacing (left and right)
- `v`: Vertical spacing (top and bottom)
- `top`: Top spacing
- `right`: Right spacing
- `bottom`: Bottom spacing
- `right`: Right spacing

::: callout info Example
Give an element a left margin of 10px.

```html
<div class="cs-margin-left-10"></div>
```
:::
