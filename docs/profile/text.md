---
title: "Profiles: Text Utilities"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

carrion-strap offers a range of simple utility classes for common formatting options. Rather than having to write out the same little styles every time, you can use these.

## Text formatting

You can use the below classes to quickly format text.

For example, `<span class="cs-bold cs-italic cs-underline">this</span>` produces <span class="cs-bold cs-italic cs-underline">this</span>.

| Format | Class
| - | - |
| <span class="cs-italic">Italic</span>       | `cs-italic` |
| <span class="cs-bold">Bold</span>           | `cs-bold` |
| <span class="cs-superbold">Superbold</span> | `cs-superbold` |
| <span class="cs-superthin">Superthin</span> | `cs-superthin` |
| <span class="cs-underline">Underline</span> | `cs-underline` |
| <span class="cs-smallcaps">Smallcaps</span> | `cs-smallcaps` |

You can also specify any weight between `100` and `900` with `cs-weight-###`. For example, `cs-bold` is equivalent to `cs-weight-800`, and `cs-superbold` is equivalent to `cs-weight-900`. (Weights only come in hundreds, so `cs-weight-420` isn't a thing.)

You can also use `cs-unitalic`, `cs-unbold`, `cs-unsmallcaps` to unset that property for a span of text.

## Font

carrion currently only reliably supports the three core web fonts: sans-serif, serif, and monospace. You can use these classes to apply them.

| Font | Class | Aliases
| - | - | - |
| <span class="cs-font-sans-serif">Sans-serif font</span> | `cs-font-sans-serif` | `cs-sans-serif` |
| <span class="cs-font-serif">Serif font</span>           | `cs-font-serif`      | `cs-serif`      |
| <span class="cs-font-monospace">Monospace font</span>   | `cs-font-monospace`  | `cs-monospace`  |

If carrion adds built-in support for additional webfonts, we'll add `cs-font-*` aliases for them.

## Color

You can color your text with Carrion's standard color variables. These correspond to the colors used in character names, and the colors used in `{color:pink}` etc, which are currently the same set of colors.

Use the `cs-fg-red` class to set the text color to the standard red, or `cs-bg-red` to set the _background_ color to the standard red.

These same colors are also provided as CSS variables for those interested in using them.

| Foreground color | Background color | CSS variable
| - | - | - |
| <span class="cs-fg-red">cs-fg-red</span>        | <span class="swatch cs-bg-red"></span> cs-bg-red       | `--cs-color-red`
| <span class="cs-fg-orange">cs-fg-orange</span>  | <span class="swatch cs-bg-orange"></span> cs-bg-orange | `--cs-color-orange`
| <span class="cs-fg-yellow">cs-fg-yellow</span>  | <span class="swatch cs-bg-yellow"></span> cs-bg-yellow | `--cs-color-yellow`
| <span class="cs-fg-green">cs-fg-green</span>    | <span class="swatch cs-bg-green"></span> cs-bg-green   | `--cs-color-green`
| <span class="cs-fg-blue">cs-fg-blue</span>      | <span class="swatch cs-bg-blue"></span> cs-bg-blue     | `--cs-color-blue`
| <span class="cs-fg-purple">cs-fg-purple</span>  | <span class="swatch cs-bg-purple"></span> cs-bg-purple | `--cs-color-purple`
| <span class="cs-fg-pink">cs-fg-pink</span>      | <span class="swatch cs-bg-pink"></span> cs-bg-pink     | `--cs-color-pink`
| <span class="cs-fg-brown">cs-fg-brown</span>    | <span class="swatch cs-bg-brown"></span> cs-bg-brown   | `--cs-color-brown`
| <span class="cs-fg-teal">cs-fg-teal</span>      | <span class="swatch cs-bg-teal"></span> cs-bg-teal     | `--cs-color-teal`
| <span class="cs-fg-white">cs-fg-white</span>    | <span class="swatch cs-bg-white"></span> cs-bg-white   | `--cs-color-white`
| <span class="cs-fg-black">cs-fg-black</span>    | <span class="swatch cs-bg-black"></span> cs-bg-black   | `--cs-color-black`
| <span class="cs-fg-gray">cs-fg-gray</span>      | <span class="swatch cs-bg-gray"></span> cs-bg-gray     | `--cs-color-gray`
| <span class="cs-fg-dull-red">cs-fg-dull-red</span>        | <span class="swatch cs-bg-dull-red"></span> cs-bg-dull-red       | `--cs-color-dull-red`
| <span class="cs-fg-dull-orange">cs-fg-dull-orange</span>  | <span class="swatch cs-bg-dull-orange"></span> cs-bg-dull-orange | `--cs-color-dull-orange`
| <span class="cs-fg-dull-yellow">cs-fg-dull-yellow</span>  | <span class="swatch cs-bg-dull-yellow"></span> cs-bg-dull-yellow | `--cs-color-dull-yellow`
| <span class="cs-fg-dull-green">cs-fg-dull-green</span>    | <span class="swatch cs-bg-dull-green"></span> cs-bg-dull-green   | `--cs-color-dull-green`
| <span class="cs-fg-dull-blue">cs-fg-dull-blue</span>      | <span class="swatch cs-bg-dull-blue"></span> cs-bg-dull-blue     | `--cs-color-dull-blue`
| <span class="cs-fg-dull-purple">cs-fg-dull-purple</span>  | <span class="swatch cs-bg-dull-purple"></span> cs-bg-dull-purple | `--cs-color-dull-purple`
| <span class="cs-fg-dull-pink">cs-fg-dull-pink</span>      | <span class="swatch cs-bg-dull-pink"></span> cs-bg-dull-pink     | `--cs-color-dull-pink`
| <span class="cs-fg-dull-brown">cs-fg-dull-brown</span>    | <span class="swatch cs-bg-dull-brown"></span> cs-bg-dull-brown   | `--cs-color-dull-brown`
| <span class="cs-fg-dull-teal">cs-fg-dull-teal</span>      | <span class="swatch cs-bg-dull-teal"></span> cs-bg-dull-teal     | `--cs-color-dull-teal`

## Text alignment

Align blocks of text by applying an alignment class to one of them. For example, `<div class="cs-text-right">` will contain right-aligned text, even for nested paragraphs.

| Alignment | Class | Aliases |
| - | - | - |
| Left-aligned  | `cs-text-align-left`    | `cs-text-left`    |
| Right-aligned | `cs-text-align-right`   | `cs-text-right`   |
| Centered      | `cs-text-align-center`  | `cs-text-center`  |
| Justified     | `cs-text-align-justify` | `cs-text-justify` |


:::callout info Alignment examples

Justified text is the unusual one here. It's left-aligned, _but_ tries to fit text to the left and right edges. You can combine justify with other alignments to produce justified, aligned text.

::: tabs
== tab "Left"
with `class="cs-text-align-left"` ...
<div class="cs-text-align-left">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien nisi, faucibus malesuada finibus eget, eleifend id quam. Etiam non mattis nisl. Donec sem lectus, elementum eu tellus consequat, finibus lacinia nisi. Praesent ultrices vel tellus et finibus. Fusce faucibus blandit diam, et tincidunt mauris maximus ac. Maecenas in faucibus mi. Suspendisse accumsan condimentum odio, at sollicitudin lorem fermentum a. Proin maximus nibh consequat quam laoreet faucibus. Ut purus elit, facilisis vitae placerat facilisis, hendrerit eu quam. Curabitur sed convallis leo. Phasellus finibus felis ac placerat malesuada. Fusce pharetra justo cursus pharetra tincidunt. Suspendisse potenti. Nullam feugiat odio sed feugiat mattis. Nunc pellentesque mollis nibh a mollis.</p>
</div>

== tab "Center"
with `class="cs-text-align-center"` ...
<div class="cs-text-align-center">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien nisi, faucibus malesuada finibus eget, eleifend id quam. Etiam non mattis nisl. Donec sem lectus, elementum eu tellus consequat, finibus lacinia nisi. Praesent ultrices vel tellus et finibus. Fusce faucibus blandit diam, et tincidunt mauris maximus ac. Maecenas in faucibus mi. Suspendisse accumsan condimentum odio, at sollicitudin lorem fermentum a. Proin maximus nibh consequat quam laoreet faucibus. Ut purus elit, facilisis vitae placerat facilisis, hendrerit eu quam. Curabitur sed convallis leo. Phasellus finibus felis ac placerat malesuada. Fusce pharetra justo cursus pharetra tincidunt. Suspendisse potenti. Nullam feugiat odio sed feugiat mattis. Nunc pellentesque mollis nibh a mollis.</p>
</div>

== tab "Right"
with `class="cs-text-align-right"` ...
<div class="cs-text-align-right">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien nisi, faucibus malesuada finibus eget, eleifend id quam. Etiam non mattis nisl. Donec sem lectus, elementum eu tellus consequat, finibus lacinia nisi. Praesent ultrices vel tellus et finibus. Fusce faucibus blandit diam, et tincidunt mauris maximus ac. Maecenas in faucibus mi. Suspendisse accumsan condimentum odio, at sollicitudin lorem fermentum a. Proin maximus nibh consequat quam laoreet faucibus. Ut purus elit, facilisis vitae placerat facilisis, hendrerit eu quam. Curabitur sed convallis leo. Phasellus finibus felis ac placerat malesuada. Fusce pharetra justo cursus pharetra tincidunt. Suspendisse potenti. Nullam feugiat odio sed feugiat mattis. Nunc pellentesque mollis nibh a mollis.</p>
</div>

== tab "Justify"
with `class="cs-text-align-justify"` ...
<div class="cs-text-align-justify">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien nisi, faucibus malesuada finibus eget, eleifend id quam. Etiam non mattis nisl. Donec sem lectus, elementum eu tellus consequat, finibus lacinia nisi. Praesent ultrices vel tellus et finibus. Fusce faucibus blandit diam, et tincidunt mauris maximus ac. Maecenas in faucibus mi. Suspendisse accumsan condimentum odio, at sollicitudin lorem fermentum a. Proin maximus nibh consequat quam laoreet faucibus. Ut purus elit, facilisis vitae placerat facilisis, hendrerit eu quam. Curabitur sed convallis leo. Phasellus finibus felis ac placerat malesuada. Fusce pharetra justo cursus pharetra tincidunt. Suspendisse potenti. Nullam feugiat odio sed feugiat mattis. Nunc pellentesque mollis nibh a mollis.</p>
</div>

== tab "Justify center"
with `class="cs-text-align-justify cs-text-align-center"` ...
<div class="cs-text-align-justify cs-text-align-center">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien nisi, faucibus malesuada finibus eget, eleifend id quam. Etiam non mattis nisl. Donec sem lectus, elementum eu tellus consequat, finibus lacinia nisi. Praesent ultrices vel tellus et finibus. Fusce faucibus blandit diam, et tincidunt mauris maximus ac. Maecenas in faucibus mi. Suspendisse accumsan condimentum odio, at sollicitudin lorem fermentum a. Proin maximus nibh consequat quam laoreet faucibus. Ut purus elit, facilisis vitae placerat facilisis, hendrerit eu quam. Curabitur sed convallis leo. Phasellus finibus felis ac placerat malesuada. Fusce pharetra justo cursus pharetra tincidunt. Suspendisse potenti. Nullam feugiat odio sed feugiat mattis. Nunc pellentesque mollis nibh a mollis.</p>
</div>

== tab "Justify right"
with `class="cs-text-align-justify cs-text-align-right"` ...
<div class="cs-text-align-justify cs-text-align-right">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien nisi, faucibus malesuada finibus eget, eleifend id quam. Etiam non mattis nisl. Donec sem lectus, elementum eu tellus consequat, finibus lacinia nisi. Praesent ultrices vel tellus et finibus. Fusce faucibus blandit diam, et tincidunt mauris maximus ac. Maecenas in faucibus mi. Suspendisse accumsan condimentum odio, at sollicitudin lorem fermentum a. Proin maximus nibh consequat quam laoreet faucibus. Ut purus elit, facilisis vitae placerat facilisis, hendrerit eu quam. Curabitur sed convallis leo. Phasellus finibus felis ac placerat malesuada. Fusce pharetra justo cursus pharetra tincidunt. Suspendisse potenti. Nullam feugiat odio sed feugiat mattis. Nunc pellentesque mollis nibh a mollis.</p>
</div>
:::
:::
