const fs = require("fs-extra");
const path = require("path");
const sass = require("sass");
const prettier = require("@prettier/sync");
const package = require("./package.json");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");

async function build(buildConfig) {
  const { version, files, folders } = buildConfig;

  console.log();
  console.log("⚒️  Building version", version.minor, "for", folders.out);
  fs.emptyDirSync(folders.out);

  for (const config of files) {
    const { source, out } = config;

    const sourcePath = path.join(folders.src, source);

    if (!fs.existsSync(sourcePath)) {
      console.error(`Cannot build this file because it doesn't exist:`, source);
      break;
    }

    try {
      const style = await compileCss(sourcePath, version);
      const outPath = path.join(folders.out, out);
      const outFolder = path.join(outPath, "..");
      fs.ensureDirSync(outFolder);
      fs.writeFileSync(outPath, style);
    } catch (ex) {
      console.error(`Failed to build "${source}". Reason:`, ex);
      break;
    }

    console.log(" • Created:", out);
  }

  console.log("✔️  Build done.");
  console.log();
}

async function compileCss(sourcePath, version) {
  let { css } = sass.compile(sourcePath, { style: "expanded" });
  const prefixed = await postcss([autoprefixer]).process(css, {
    from: "./.browserslistrc",
  });
  prefixed.warnings().forEach((warn) => {
    console.warn("CSS warning:", warn.toString());
  });
  css = prefixed.css;
  css = prettier.format(css, { parser: "css" });

  const header = [
    `/**`,
    ` * carrion-strap version ${version.minor}`,
    ` * documentation: https://bbbonnibel.github.io/carrion-strap`,
    ` */`,
  ].join("\n");
  return [header, css].join("\n");
}

function getVersion() {
  const [major, minor] = package.version.split(".");
  return {
    major,
    minor: [major, minor].join("."),
  };
}

async function main() {
  const version = getVersion();

  console.log("Building carrion-strap version", version.minor);

  const files = [
    { source: "profile/main.scss", out: "profile/main.css" },
    { source: "chat/theme.scss", out: "chat/theme.css" },
    // { source: "chat/themes/reset.scss", out: "chat/themes/reset.css" },
  ];

  const PATH_SRC = "./src";
  const PATH_OUT = "./out";
  const PATH_SITE = `./site/release/v${version.major}`;

  await build({
    version,
    files,
    folders: {
      src: PATH_SRC,
      out: PATH_OUT,
    },
  });

  await build({
    version: version,
    files,
    folders: {
      src: PATH_SRC,
      out: PATH_SITE,
    },
  });
}

main();
