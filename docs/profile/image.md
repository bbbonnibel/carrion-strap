---
title: "Profiles: Image Utilities"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

carrion-strap offers a range of classes built specifically for image elements, which is either one of these:

```html
<!-- HTML -->
<img src="path/to/image.png">
<!-- Markdown -->
![](path/to/image.png)
```

Every single one of the classes on this page can be applied either to a specific image element, _or_ to an element that _contains_ image elements. For example, we have a `cs-img-square` class that turns images into squares. All of the following will make the image a square:

```html
<img class="cs-img-square" src="path/to/image.png">
<!-- or -->
<div class="cs-img-square">
  <img src="path/to/image.png">
</div>
<!-- or -->
<div class="cs-img-square">
  ![](path/to/image.png)
</div>
```

One advantage of this is that you can apply an image class _once_ to _multiple_ elements. The following snippet will make _all_ of its images squares:

```html
<div class="cs-img-square">
  <img src="...">
  <img src="...">
  <img src="...">
</div>
```

## Image shape

You can force images to follow a specific shape. When you do this, you only need to specify a width _or_ height property if you want to control image sizing, not both.

This automatically applies _contain_ to the image, which you can override with an object-fit option below.

| Shape | Class | Example |
| - | - | - |
| Square | `cs-img-square` | <img class="example-image cs-img-square" style="height: unset;" src="/carrion-strap/assets/images/she-ra.png">
| Circle | `cs-img-square` | <img class="example-image cs-img-circle" style="height: unset;" src="/carrion-strap/assets/images/she-ra.png">

::: callout info Example
Here's an image of She-Ra:

```html
<img src="/carrion-strap/assets/images/she-ra.png">
```

<img style="height: 150px;" src="/carrion-strap/assets/images/she-ra.png">

We can turn it into a circular shape with `cs-img-circle`:

```html
<img class="cs-img-circle" src="/carrion-strap/assets/images/she-ra.png">
```

<img class="cs-img-circle" style="height: 150px;" src="/carrion-strap/assets/images/she-ra.png">

:::

## Blur unless hovered

The `cs-img-blur-unless-hover` class will blur an element unless it's hovered over.

The blur unavoidably spills outside the bounds of the image slightly. Browsers don't give us a way to prevent that from happening straightforwardly. For more advanced blur behaviour, including preventing this blur from spilling, see [_Components: Image spoiler box_](/carrion-strap/profile/components/#image-spoiler-box).

```html
<img class="cs-img-blur-unless-hover" src="/carrion-strap/assets/images/she-ra.png">
```

<img class="cs-img-blur-unless-hover" style="height: 150px;" src="/carrion-strap/assets/images/she-ra.png">


## Object fit

The following classes will apply an object-fit rule to an element.

| Object fit | Class | Example | Details |
| - | - | - | - |
| Contain    | <code style="white-space: nowrap">cs-fit-contain</code> | <img class="example-image cs-fit-contain" src="/carrion-strap/assets/images/cuddles.png"> | Image is scaled down, maintaining aspect ratio, until it fits fully inside the image element.
| Cover      | <code style="white-space: nowrap">cs-fit-cover</code> | <img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/cuddles.png"> | Image is scaled down, maintaining aspect ratio, until it covers the image element.
| Fill<br><em style="white-space: nowrap">(browser default)</em> | <code style="white-space: nowrap">cs-fit-fill</code> | <img class="example-image cs-fit-fill" src="/carrion-strap/assets/images/cuddles.png"> | Image is resized and squashed if necessary to fit its width and height individually to the element.
| None       | <code style="white-space: nowrap">cs-fit-none</code> | <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/cuddles.png"> | Image is displayed at true size, with the image element just showing a piece of it.
| Scale-down | <code style="white-space: nowrap">cs-fit-scale-down</code> | <img class="example-image cs-fit-scale-down" src="/carrion-strap/assets/images/cuddles.png"> | When scaling down, behaves like contain. If the image element is large enough though, the image will just remain at its normal size inside the element.

::: callout info Example
The following will make the following image _cover_ its image element

```html
<img class="cs-fit-cover" style="width: 120px; height: 120px;" src="/carrion-strap/assets/images/cuddles.png">
```

<img class="cs-fit-cover" style="width: 120px; height: 120px;" src="/carrion-strap/assets/images/cuddles.png">
:::

::: callout tip Tip: Using object-position
You'll notice that when using `cs-fit-cover` or `cs-fit-none`, you only see a section of the image. You can control _which_ section you see using the object-position properties below.
:::

## Object position

The following classes will apply an object-fit rule to an element. This class is advisable when combined with `cs-fit-cover` or `cs-fit-none`.

The examples on this table use `cs-fit-cover` and `cs-fit-none` respectively, using this image:

<img class="pre-example-image cs-block-align-center" src="/carrion-strap/assets/images/skeletor-tall-md.png">

| Object position | Class | Alias |  Example |
| - | - | - | - |
| Top    | `cs-op-top`    | *none* | <div class="cs-flex cs-op-top"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Left   | `cs-op-left`   | *none* | <div class="cs-flex cs-op-left"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Bottom | `cs-op-bottom` | *none* | <div class="cs-flex cs-op-bottom"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Right  | `cs-op-right`  | *none* | <div class="cs-flex cs-op-right"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Center | `cs-op-center` | *none* | <div class="cs-flex cs-op-center"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Top left      | `cs-op-top-left`      | `cs-op-left-top` | <div class="cs-flex cs-op-top-left"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Top right     | `cs-op-top-right`     | `cs-op-right-top` | <div class="cs-flex  cs-op-top-right"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Bottom left   | `cs-op-bottom-left`   | `cs-op-left-bottom` | <div class="cs-flex  cs-op-bottom-left"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>
| Bottom right  | `cs-op-bottom-right`  | `cs-op-right-bottom` | <div class="cs-flex  cs-op-bottom-right"><img class="example-image cs-fit-cover" src="/carrion-strap/assets/images/skeletor-tall-md.png"> <img class="example-image cs-fit-none" src="/carrion-strap/assets/images/skeletor-tall-md.png"></div>

::: callout info Example
The following is a covered image, the same one we've been using in these examples:

```html
<img class="cs-fit-cover" style="width: 120px; height: 120px;" src="/carrion-strap/assets/images/skeletor-tall.png">
```

<img class="cs-fit-cover" style="width: 120px; height: 120px;" src="/carrion-strap/assets/images/skeletor-tall.png">

Let's make the crop snap to the top by adding `cs-op-top`:

```html
<img class="cs-fit-cover cs-op-top" style="width: 120px; height: 120px;" src="/carrion-strap/assets/images/skeletor-tall.png">
```

<img class="cs-fit-cover cs-op-top" style="width: 120px; height: 120px;" src="/carrion-strap/assets/images/skeletor-tall.png">

:::
