---
title: "Fonts guide"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

carrion now supports **webfonts**. That's a fancy way of saying you can bring other fonts to your profile beside the defaults.

Currently the following font providers are supported:

- [Google Fonts](https://fonts.google.com/) (Recommended): A fairly comprehensive font resource with more advanced filtering.
- [Bunny Fonts](https://fonts.bunny.net/): A font provider with zero tracking.

Google Fonts provides an easier experience for newbies, so if you're not sure what you're doing, use Google Fonts. If you have strong opinions about Google (justified!), use Bunny.

You can use fonts from multiple font providers, e.g. you can use a font from Bunny Fonts and another from Google Fonts. You're not locked into just one or the other.

## Why does this matter? Why do I need them?

You have a lot of fonts on your computer, after all! You have Georgia and Comic Sans and all these other cool fonts. Why not just use those?

Well, here's the thing: if you want _anyone else_ to see that font, the person _reading_ your profile _also_ needs to have that font installed on their system. Mac won't have Comic Sans. Someone's machine might not have Georgia. In fact, Android phones have _none_ of these fonts at all. The only fonts all these sysetms have reliably are: `serif`, `sans-serif`, `monospace`, and you won't even know _which_ serif/sans-serif/monospace exactly.

This is why we use _webfonts._ It's a CSS thing where we say “that font file right there, I want to use that one.” This is like the way we share images: we put it somewhere and point people to it. Now everyone gets to see that font.

**Basically:** If you're configuring a font, but you're not using webfonts, just assume that most people cannot see the font you picked, they'll see Times New Roman or something instead. So use webfonts.

## Picking out a font

Browse through the fonts on display. You may want to use the filters to narrow down the kind of thing you're looking for.

Both font providers will have a default phrase shown for an example, but it'll let you provide your own: in Google that's via the “Preview” text box at the top of the filters; in Bunny that's via the “Sample Text” input near the top. We recommend adding some text from your profile that you're looking to apply this font to.

Once you've found some fonts you're interested in, hit “Add font” (Google) or “Add variant” (Bunny).

In Bunny Fonts, if the font has multiple variants and you're not sure what to choose, add the following variants (whichever are available): *Normal 400, Italic 400, Normal 800, Italic 800*. That lets you use bold and italic text.

## Putting it in your profile

Once you have the fonts you want—you can pick out multiple!—you'll want to add them to your profile.

- Google Fonts: Hit the bag in the top right, then **Get embed code**.
- Bunny Fonts: Hit **Fonts +** in the upper right.

You'll get presented with the option to embed your font with either HTML or CSS. Both of them work and are almost totally equivalent. *(Nerd stuff: The HTML option loads slightly more efficiently, but that's about it.)*

### If you choose CSS...

You'll see code like this:

```
@import url(https://fonts.bunny.net/css?family=suez-one:400);
```

Copy and paste that into your profile like this:

```html
<style>
@import url(https://fonts.bunny.net/css?family=suez-one:400);
</style>
```

If you already have a style element, you can just put it inside the top of that one on its own line.

### If you choose HTML...

You'll see a _lot_ of code, like this:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
```

See all those preconnect lines? We don't care about those. Just copy the last line:

```
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
```

Put that at the very top of your profile.

## Applying your font

Bunny will give you a font family to copy.

```
font-family: 'Suez One', serif;
```

Google will be a little more complicated. It's going to give you a whole lot of extra stuff, like this:

```
// <weight>: Use a value from 100 to 900
// <uniquifier>: Use a unique and descriptive class name

.inter-<uniquifier> {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

We don't care about any of that. Just copy the font-family line. In the above snippet, that's this.

```css
font-family: "Inter", sans-serif;
```

**Then, use that font-family in your CSS.** You can do that like this:

```css
.some-style-you-already-have {
  font-family: 'Suez One', serif;
}
```

Or directly on an element like this:

```html
<div style="font-family: 'Suez One', serif;">some text</div>
```

## Summary

That was a lot, but it comes down to some pretty simple stuff. Here's what we just did:

1. We picked out a fun font we wanted to use on our profile.
1. We embedded a reference to that font on our page.
1. We styled an element to use that font via the font-family attribute.
1. That element is now styled! Hooray!

## Troubleshooting

If you're having trouble, ask for assistance in the help channel.

If you're using Bunny Fonts, make sure you picked the variant you're trying to use! Are you trying to apply bold text? Make sure you included the 800 variant! In fact, make sure that variant of the font even exists.

Certain fonts are known not to load because they come from an unapproved CDN, so you'll just have to use a different one. The known list right now is:

- Bodoni Moda

(That's it.)
