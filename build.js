const fs = require("fs-extra");
const path = require("path");
const sass = require("sass");
const package = require("./package.json");
const prettier = require("@prettier/sync");

const VERSION = package.version.split(".").slice(0, 2).join(".");
const PATH_RELEASE = path.join(__dirname, "release", VERSION);
const PATH_SRC = path.join(__dirname, "src");

console.log("Building version", VERSION);

fs.emptyDirSync(PATH_RELEASE);

const files = [
  { source: "profile/main.scss", out: "profile/main.css" },
  { source: "chat/theme.scss", out: "chat/theme.css" },
  // { source: "chat/themes/reset.scss", out: "chat/themes/reset.css" },
];

for (const config of files) {
  const { source, out } = config;

  const sourcePath = path.join(PATH_SRC, source);

  if (!fs.existsSync(sourcePath)) {
    console.error(`Cannot build this file because it doesn't exist:`, source);
    break;
  }
  let style;
  try {
    style = sass.compile(sourcePath, { style: "expanded" });
  } catch (ex) {
    console.error(`Failed to build "${source}". Reason:`, ex);
    break;
  }

  const outPath = path.join(PATH_RELEASE, out);
  const outFolder = path.join(outPath, "..");
  fs.ensureDirSync(outFolder);
  const pretty = prettier.format(style.css, { parser: "css" });
  fs.writeFileSync(outPath, pretty);
  console.log("Created:", out);
}
