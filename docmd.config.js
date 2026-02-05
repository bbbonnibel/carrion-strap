// docmd.config.js
module.exports = {
  // --- Core Metadata ---
  siteTitle: "carrion-strap",
  siteUrl: "https://bbbonnibel.github.io/carrion-strap",

  // --- Branding ---
  logo: {
    light: "assets/images/docmd-logo-dark.png",
    dark: "assets/images/docmd-logo-light.png",
    alt: "Logo",
    href: "./",
  },
  favicon: "assets/favicon.ico",

  // --- Source & Output ---
  srcDir: "docs",
  outputDir: "site",

  // --- Theme & Layout ---
  theme: {
    name: "default", // Options: 'default', 'sky', 'ruby', 'retro'
    defaultMode: "dark", // 'light', 'dark', or 'system'
    enableModeToggle: true, // Show mode toggle button
    positionMode: "top", // 'top' or 'bottom'
    codeHighlight: true, // Enable Highlight.js
    customCss: [
      "assets/css/docmd-highlight-system.css",
      "assets/css/docmd-highlight-light.css",
      "assets/css/docmd-highlight-dark.css",
      "assets/css/main.css",
      "release/v0/profile/main.css",
    ],
  },

  // --- Features ---
  search: true, // Built-in offline search
  minify: true, // Minify HTML/CSS/JS in build
  autoTitleFromH1: true, // Auto-generate page title from first H1
  copyCode: true, // Show "copy" button on code blocks
  pageNavigation: true, // Prev/Next buttons at bottom

  // --- Navigation (Sidebar) ---
  navigation: [
    { title: "Introduction", path: "/", icon: "home" },
    {
      title: "Profiles",
      icon: "user-round",
      collapsible: true,
      children: [
        {
          title: "Getting Started",
          path: "/profile",
          icon: "rocket",
        },
        {
          title: "Text",
          path: "/profile/text",
          icon: "pencil-line",
        },
        {
          title: "Images",
          path: "/profile/image",
          icon: "image",
        },
        {
          title: "Advanced utilities",
          path: "/profile/advanced",
          icon: "pickaxe",
        },
        {
          title: "Components",
          path: "/profile/components",
          icon: "puzzle",
        },
      ],
    },
    {
      title: "Extra modules",
      icon: "cog",
      collapsible: true,
      children: [
        {
          title: "Units",
          icon: "ruler",
          path: "/extra/units",
        },
      ],
    },
    {
      title: "Chat",
      icon: "message-circle-heart",
      path: "/chat",
    },
    {
      title: "GitHub",
      path: "https://github.com/bbbonnibel/carrion-strap",
      icon: "github",
      external: true,
    },
  ],

  // --- Plugins ---
  plugins: {
    seo: {
      defaultDescription: "carrion-strap, a CSS library for carrion.",
      openGraph: {
        defaultImage: "", // e.g. 'assets/images/og-image.png'
      },
      twitter: {
        cardType: "summary_large_image",
      },
    },
    sitemap: {
      defaultChangefreq: "w", // e.g. 'daily', 'weekly', 'monthly'
      defaultPriority: 0.8, // Priority between 0.0 and 1.0
    },
  },

  // --- Footer ---
  footer: `© ${new Date().getFullYear()} carrion-strap. This library is a community work and is not produced or endorsed by carrion.`,

  // --- Edit Link ---
  editLink: {
    enabled: false,
    baseUrl: "https://github.com/bbbonnibel/carrion-strap/edit/main/docs",
    text: "Edit this page",
  },
};
