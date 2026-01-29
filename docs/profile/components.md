---
title: "Profiles: Components"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

## Gallery

You can use `cs-gallery` to create a gallery. This will default to three columns. When the window gets too narrow, it will drop down to two columns automatically.

::: callout info Example
<div class="cs-gallery cs-block-align-center">
  <a href="/carrion-strap/assets/images/cuddles.png"><img src="/carrion-strap/assets/images/cuddles.png"></a>
  <a href="/carrion-strap/assets/images/evil-lyn.png"><img src="/carrion-strap/assets/images/evil-lyn.png"></a>
  <a href="/carrion-strap/assets/images/skeletor.png"><img src="/carrion-strap/assets/images/skeletor.png"></a>
  <a href="/carrion-strap/assets/images/orko.png"><img src="/carrion-strap/assets/images/orko.png"></a>
  <a href="/carrion-strap/assets/images/skeletor-tall.png"><img src="/carrion-strap/assets/images/skeletor-tall.png"></a>
  <a href="/carrion-strap/assets/images/she-ra.png"><img src="/carrion-strap/assets/images/she-ra.png"></a>
</div>
:::

<!-- -->

```html
<div class="cs-gallery cs-block-align-center">
  <a href="/carrion-strap/assets/images/cuddles.png"><img src="/carrion-strap/assets/images/cuddles.png"></a>
  <a href="/carrion-strap/assets/images/evil-lyn.png"><img src="/carrion-strap/assets/images/evil-lyn.png"></a>
  <a href="/carrion-strap/assets/images/skeletor.png"><img src="/carrion-strap/assets/images/skeletor.png"></a>
  <a href="/carrion-strap/assets/images/orko.png"><img src="/carrion-strap/assets/images/orko.png"></a>
  <a href="/carrion-strap/assets/images/skeletor-tall.png"><img src="/carrion-strap/assets/images/skeletor-tall.png"></a>
  <a href="/carrion-strap/assets/images/she-ra.png"><img src="/carrion-strap/assets/images/she-ra.png"></a>
</div>
```

### Styling your images

Your images will, by default, be sized to snap to the edges of the square they're in, meaning it'll zoom in on the center of the image. If you want to adjust individual images to focus on a particular edge or corner instead, apply one of these classes to the `<a>` or the `<img>` (either works):

| Desired snap position | Class to use |
| - | - |
| Top    | `cs-op-top` |
| Left   | `cs-op-left` |
| Bottom | `cs-op-bottom` |
| Right  | `cs-op-right` |
| Center | `cs-op-center` |
| Top left      | `cs-op-top-left` |
| Top right     | `cs-op-top-right` |
| Bottom left   | `cs-op-bottom-left` |
| Bottom right  | `cs-op-bottom-right` |

::: callout info Example
One of those Skeletor images above looked kind of badly cropped.

<div class="cs-gallery">
  <a href="/carrion-strap/assets/images/orko.png"><img src="/carrion-strap/assets/images/orko.png"></a>
  <a href="/carrion-strap/assets/images/skeletor-tall.png"><img src="/carrion-strap/assets/images/skeletor-tall.png"></a>
  <a href="/carrion-strap/assets/images/she-ra.png"><img src="/carrion-strap/assets/images/she-ra.png"></a>
</div>

See that middle one? ☝️ We can do better. Let's fix that by applying `cs-op-top` to the middle image:

```html
<div class="cs-gallery">
  <a href="/carrion-strap/assets/images/orko.png"><img src="/carrion-strap/assets/images/orko.png"></a>
  <a class="cs-op-top"  href="/carrion-strap/assets/images/skeletor-tall.png"><img src="/carrion-strap/assets/images/skeletor-tall.png"></a>
  <a href="/carrion-strap/assets/images/she-ra.png"><img src="/carrion-strap/assets/images/she-ra.png"></a>
</div>
```

<div class="cs-gallery">
  <a href="/carrion-strap/assets/images/orko.png"><img src="/carrion-strap/assets/images/orko.png"></a>
  <a class="cs-op-top"  href="/carrion-strap/assets/images/skeletor-tall.png"><img src="/carrion-strap/assets/images/skeletor-tall.png"></a>
  <a href="/carrion-strap/assets/images/she-ra.png"><img src="/carrion-strap/assets/images/she-ra.png"></a>
</div>

Much better. Now the image is positioned over the top part of the image that shows his face.
:::

::: callout tip More information
The “op” stands for “object position”. It's a technical CSS thing! Don't worry about it.

For more information on the `cs-op` classes used here, see [*Advanced Utilities: Object Position*](../advanced#object-position)
:::

### Configuring your gallery

You can use `cs-gallery cs-gallery-columns-4` to default to four columns wide instead of three.

By default, the gallery snippet above is center-aligned with the `cs-block-align-center` class. You can remove that alignment, or specifically set it to left/right with `cs-block-align-left` or `cs-block-align-right`, which will push the gallery to the left or right edge. (See: [*Advanced Utilities: Blocks](../advanced#blocks))


## Profile side-by-side structure

One of the common profile patterns is to display text and a single large inline image side-by-side. This component is designed to do that. If the screen gets too narrow, the profile will wrap, placing the image above or below the text.

This component uses:
- `cs-profile` on an element
- `cs-picture` on a child element that will contain the profile image
- `cs-main` on another child element that will contain the text and description.

::: callout info Example

<div class="cs-profile">

  <div class="cs-picture">
    <img src="/carrion-strap/assets/images/skeletor-tall.png">
  </div>

  <div class="cs-main">
    <header class="cs-text-align-center">
      <h2>Your character name!</h2>
    </header>
  </div>

</div>
:::

<!-- -->

```html
<div class="cs-profile">

  <div class="cs-picture">
    <img src="(Your image URL here)">
  </div>

  <div class="cs-main">
    (Your profile text here)
  </div>

</div>
```

You can put the picture or main element either way around. Whichever appears first will appear on the left.

Alternately, you can force either one into either position regardless of which order they appear in your code:

- `cs-first` (or `cs-left`) forces the picture or main element into the first/left position: `<div class="cs-picture cs-first">`
- `cs-second` (or `cs-right`) forces the picture or main element into the second/right position: `<div class="cs-picture cs-second">`

## Censor

The censor component just censors text, like this: <span class="cs-censor">tada!</span>

```html
<span class="cs-censor">tada!</span>
```

## Static

This applies a background to an element that resembles static.

<div class="cs-static" style="width: 150px; height: 50px;"></div>

```html
<div class="cs-static" style="width: 150px; height: 50px;"></div>
```

That's it! That's the component.

:::callout tip How's this work?
`cs-static` applies a repeating background of black-and-white dots that's so tiny it can't be rendered accurately, and then it moves that background. What you're seeing is rounding errors in rendering.
:::

### Static censor

You can combine this with the [Censor](#censor) component to create a static censor: <span class="cs-censor cs-static">tada!</span>

```html
<span class="cs-censor cs-static">tada!</span>
```

### Configuration

You can change the colors of the static by providing `--color-1` and/or `--color-2`. These default to <span class="swatch" style="color: #999"></span> `#999` and <span class="swatch" style="color: #333"></span> `#333`, but can be set to anything at all.

This static is configured to teal and aqua:

```html
<div class="cs-static" style="--color-1: teal; --color-2: aqua; width: 150px; height: 50px;"></div>
```

<div class="cs-static" style="--color-1: teal; --color-2: aqua; width: 150px; height: 50px;"></div>
