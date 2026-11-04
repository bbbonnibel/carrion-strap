---
title: "Fonts guide"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

carrion supports **webfonts**. That's a fancy way of saying you can bring other fonts to your profile beside the defaults.

Currently the following font providers are supported:

- [Google Fonts](https://fonts.google.com/) (Recommended): A fairly comprehensive font resource with more advanced filtering.
- [Bunny Fonts](https://fonts.bunny.net/): A font provider with zero tracking.

Google Fonts provides an easier experience for newbies, so if you're not sure what you're doing, use Google Fonts. If you have strong opinions about Google (justified!), use Bunny.

You can use fonts from multiple font providers, e.g. you can use a font from Bunny Fonts and another from Google Fonts. You're not locked into just one or the other.

## Step 1: Pick out a font

Browse through the fonts on display. You may want to use the filters to narrow down the kind of thing you're looking for.

Both font providers will have a default phrase shown for an example, but it'll let you provide your own: in Google that's via the “Preview” text box at the top of the filters; in Bunny that's via the “Sample Text” input near the top. We recommend adding some text from your profile that you're looking to apply this font to.

Once you've found some fonts you're interested in, hit “Add font” (Google) or “Add variant” (Bunny).

In Bunny Fonts, if the font has multiple variants and you're not sure what to choose, add the following variants (whichever are available): *Normal 400, Italic 400, Normal 800, Italic 800*. That lets you use bold and italic text.

## Step 2: Reference it in your profile

Once you have the fonts you want—you can pick out multiple!—you'll want to add them to your profile.

- Google Fonts: Hit the bag in the top right, then **Get embed code**.
- Bunny Fonts: Hit **Fonts +** in the upper right.

You'll get presented with the option to embed your font with either HTML or CSS. They're totally equivalent, so which one is completely up to your personal preference. *(Nerd stuff: carrion converts either one into a `<link>` element at the top of the page no matter which one you use.)*

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

## Step 3: Apply your font

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

We don't care about any of that. Just copy the font-family line. In the above snippet, that's this bit:

```
font-family: "Inter", sans-serif;
```

Then, use that font-family in your CSS. You can do that like this:

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

## Appendix

### Troubleshooting

If you're having trouble, ask for assistance in the help channel.

Make sure you spelled the font name correctly. If the font is multiple words, you _must_ use quotes: `font-family: Seuz One` won't work, it _must_ be `font-family: 'Suez One'`.

If you're using Bunny Fonts, make sure you picked the variant you're trying to use! Are you trying to apply bold text? Make sure you included the 800 variant! In fact, make sure that variant of the font even exists.

Certain fonts on Bunny are known not to load because the font file gets served from an unapproved CDN. That list right now is just _Bodoni Moda SC_, but there could be others. If your font doesn't load altogether, try a different one just to check. (And let us know if one of them is broken so we can build a list!)

### Why is all of this necessary?

If you're happy just using the default carrion font, you don't have to do any of this. If you want to be more fancy with it and use other fonts, you might have to.

The main thing people wonder about is this: “I have a lot of fonts on your computer, after all! I have Georgia and Comic Sans and all these other cool fonts. Why can't I just use those?”

Well, here's the thing: if you want _anyone else_ to see that font, the person _reading_ your profile _also_ needs to have that font installed on their system, and they might not have it. Mac won't have Comic Sans. Someone's machine might not have Georgia. In fact, Android phones have _none_ of these fonts at all. If someone doesn't have your font, they're going to load in Times New Roman or something instead.

This is why we use _webfonts._ It's a CSS thing where we say “that font file right there, I want to use that one.” That way I see the font, you see the font, we all see the font, because we're all referencing the same font file stored on a server somewhere instead of relying on it already being on our PC.

### Nerd stuff for CSS authors

Webfonts can't actually be used within shadow DOM\*, so in the beginning you just couldn't use webfonts on carrion profiles. As of October 2026, carrion works around this by looking at any CSS files you import. If they're Google Fonts or Bunny Fonts imports that declare fonts, they get hoisted up to the page head to make the font import work.

This has one side effect to be mindful of: **fonts have to be referenced on the profile page itself.** If you have one CSS file used on all your characters, and you reuse the same font on a lot of them, then you might think you could move the `@import url(https://fonts.bunny.net/...)` into that shared CSS file and it'll work, but it won't get hoisted and won't load.

(\* Webfonts _should_ work by the spec, but Chrome and Firefox both require major changes and it's extremely low priority: [Chrome ticket](https://issues.chromium.org/issues/41085401), [Firefox ticket](https://bugzilla.mozilla.org/show_bug.cgi?id=1077396).)
