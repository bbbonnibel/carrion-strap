---
title: "Profiles: Getting started"
description: "carrion-strap is a CSS library for carrion.chat. come get some strap."
---

carrion-strap provides a range of CSS classes you can use to help style your profiles. All of them are prefixed with `cs-`, so they stay out of the way of  your own styling. If you see a class in these docs that starts with `cs-`, that's a class you can use in your code.

Profile CSS might be updated from time to time. New features will get added, and old ones might be modified a little bit to fix things, but will remain backwards compatible — we won't break your stuff.

To get started, import carrion-strap's current version at the top of your profile code:

```html
<style>
@import url("https://bbbonnibel.github.io/carrion-strap/release/v0/profile/main.css");
/* your own CSS continues */
</style>
```

Then you can start applying carrion-strap classes to your profile:

```html
<style>
@import url("https://bbbonnibel.github.io/carrion-strap/release/v0/profile/main.css");

h2 {
  font-size: 150%;
}
</style>

<div class="cs-profile">
  <div class="cs-picture">
    <img src="/carrion-strap/assets/images/evil-lyn.png">
  </div>

  <div class="cs-main">
    <header class="cs-text-align-center cs-font-serif">
      <h2 class="cs-smallcaps cs-no-margin">Character name!</h2>
      <div>Character subtitle</div>
    </header>
    <p>Aperiam cumque adipisci omnis tempore molestiae quibusdam. Magnam est impedit rerum perferendis quasi qui. Blanditiis voluptatem quod quod tempore minima quibusdam est dolores.</p>
    <p>Eligendi eius provident ea. Fugiat cumque qui qui distinctio tenetur dolor qui minima. Aut iusto qui saepe sit. Eum cupiditate voluptates earum. Libero et et eum libero vel. Excepturi voluptates eos quo minus.</p>
  </div>

</div>
```

<div class="cs-profile">
  <div class="cs-picture">
    <img src="/carrion-strap/assets/images/evil-lyn.png">
  </div>

  <div class="cs-main">
    <header class="cs-text-align-center cs-font-serif">
      <h2 class="cs-smallcaps cs-no-margin" style="font-size: 150%">Character name!</h2>
      <div>Character subtitle</div>
    </header>
    <p>Aperiam cumque adipisci omnis tempore molestiae quibusdam. Magnam est impedit rerum perferendis quasi qui. Blanditiis voluptatem quod quod tempore minima quibusdam est dolores.</p>
    <p>Eligendi eius provident ea. Fugiat cumque qui qui distinctio tenetur dolor qui minima. Aut iusto qui saepe sit. Eum cupiditate voluptates earum. Libero et et eum libero vel. Excepturi voluptates eos quo minus.</p>
  </div>

</div>

There you go!

Start exploring the utilities or components via links in 👈 the sidebar, or by hitting “next” below 👇 to read about the text utilities.
