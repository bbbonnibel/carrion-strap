---
title: "Profiles: Text Utilities"
description: "Text utility classes"
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

## Font choice

carrion currently only reliably supports the three core web fonts: sans-serif, serif, and monospace. You can use these classes to apply them.

| Font | Class | Aliases
| - | - | - |
| <span class="cs-font-sans-serif">Sans-serif font</span> | `cs-font-sans-serif` | `cs-sans-serif` |
| <span class="cs-font-serif">Serif font</span>           | `cs-font-serif`      | `cs-serif`      |
| <span class="cs-font-monospace">Monospace font</span>   | `cs-font-monospace`  | `cs-monospace`  |

If carrion adds built-in support for additional webfonts, we'll add `cs-font-*` aliases for them.

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
