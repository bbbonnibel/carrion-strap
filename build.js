const fs = require("fs-extra");
const path = require("path");
const sass = require("sass");

const PATH_RELEASE = path.join(__dirname, "release");
const PATH_SRC = path.join(__dirname, "src");
fs.emptyDirSync(PATH_RELEASE);

const files = [["main.scss", "main.css"]];

for (const [source, out] of files) {
  const filepath = path.join(PATH_SRC, source);
  if (!fs.existsSync(filepath)) {
    console.error(`Cannot build this file because it doesn't exist:`, source);
    break;
  }
  let style;
  try {
    style = sass.compile(filepath);
  } catch (ex) {
    console.error(`Failed to build "${source}". Reason:`, ex);
    break;
  }
  fs.writeFileSync(path.join(PATH_RELEASE, out), style.css);
  console.log("Created:", out);
}
