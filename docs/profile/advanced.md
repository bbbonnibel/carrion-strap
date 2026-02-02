---
title: "Profiles: Advanced Utilities"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

These utility classes are built for those fairly familiar with HTML and CSS, to give them a way to shortcut more detailed behaviours.

## Blocks

You can align a block left, center, or right, using `cs-block-align-left`, `cs-block-align-center`, and `cs-block-align-right`. This is done by setting the left and right margins. If you set the `margin` property on the same element, that might override this class.

<div>

<div class="cs-block-align-left" style="width: max-content; padding: 16px; border: 1px dashed currentColor; border-radius: 4px;">
  <code>cs-block-align-left</code>
</div>
<div class="cs-block-align-center" style="width: max-content; padding: 16px; border: 1px dashed currentColor; border-radius: 4px;">
  <code>cs-block-align-center</code>
</div>
<div class="cs-block-align-right" style="width: max-content; padding: 16px; border: 1px dashed currentColor; border-radius: 4px;">
  <code>cs-block-align-right</code>
</div>

</div>

## Details-related classes

This relates to the `:::` syntax that creates an accordion.

### Show or hide an element if a details element is open

Place a details element on your profile, then apply one of these classes to an element immediately after it:

- `cs-if-closed-above` — This element only shows if the details element is closed. If it's open, this element will be hidden.
- `cs-if-open-above` — This element only shows if the details element is open. If it's closed, this element will be hidden.

These must follow **immediately** after a details element. You can chain these together, so you may have one or both elements immediately follow the details element.

:::callout info Example

This following snippet on carrion:

```html
::: Try me!
Look below!
:::

<div class="cs-if-closed-above">
  The container above is <strong>closed</strong>.
</div>
<div class="cs-if-open-above">
  The container above is <strong>open</strong>.
</div>
```

Produces this effect:

<details style="margin-bottom: 10px"><summary style="cursor: pointer;">Try me!</summary>
Look below!
</details>

<div class="cs-if-closed-above">The container above is <strong>closed</strong>.</div>
<div class="cs-if-open-above">The container above is <strong>open</strong>.</div>

:::

## Display

The following classes impose `display` rules. For example, `cs-inline` simply applies `display: inline`.

| Display rule | Class | Aliases |
| - | - | - |
| Inline block | `cs-display-inline-block` | `cs-inline-block` |
| Inline       | `cs-display-inline`       | `cs-inline`       |
| Block        | `cs-display-block`        | `cs-block`        |
| Display none<br><em>(hides an element completely)</em> | `cs-display-none` | *none* |

## Flex

You can make a class into a flexbox using the following classes:

- `cs-flex` — applies only `display: flex`.
- `cs-flex-column` — applies `display: flex; flex-direction: column`.
- `cs-flex-row` — applies `display: flex; flex-direction: row`. Since row is the default behaviour, this is usually equivalent to using `cs-flex`.
- `cs-flex-center` — applies `display: flex; align-items: center; justify-content: center`. Use this as a shortcut to just center the content.

Once you have a column or row, you can further apply `align` or `justify-content` using any of the following classes:

| Alignment | flex-align class | justify-content class |
| - | - | - |
| Flex-start    | `cs-flex-align-flex-start`    | `cs-flex-justify-flex-start` |
| Flex-end      | `cs-flex-align-flex-end`      | `cs-flex-justify-flex-end` |
| Center        | `cs-flex-align-center`        | `cs-flex-justify-center` |
| Stretch       | `cs-flex-align-stretch`       | `cs-flex-justify-stretch` |
| Space-between | `cs-flex-align-space-between` | `cs-flex-justify-space-between` |
| Space-around  | `cs-flex-align-space-around`  | `cs-flex-justify-space-around` |
| Space-evenly  | `cs-flex-align-space-evenly`  | `cs-flex-justify-space-evenly` |


::: callout info Example

You can compose these together, e.g.

```html
<div class="cs-flex cs-flex-align-center cs-flex-justify-space-between" style="width: 300px; border: 1px dashed;">
  <div>your</div>
  <div>elements</div>
  <div>here</div>
</div>
```

<div class="cs-flex cs-flex-align-center cs-flex-justify-space-between" style="width: 300px; border: 1px dashed;">
  <div>your</div>
  <div>elements</div>
  <div>here</div>
</div>
:::

## Spacing

The following classes unset margin and/or padding:

- `cs-no-margin`: Removes margin.
- `cs-no-padding`: Removes padding.
- `cs-no-spacing`: Removes margin _and_ padding.

You can also combine these with a direction, e.g. `cs-no-top-margin` or `cs-no-left-spacing`.
