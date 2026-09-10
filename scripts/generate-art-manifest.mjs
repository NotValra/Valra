import { readdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const artDirectory = join("static", "imgs", "art");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const files = (await readdir(artDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && imageExtensions.has(extname(entry.name).toLowerCase()))
  .map((entry) => entry.name)
  .sort((left, right) => left.localeCompare(right));

await writeFile(join(artDirectory, "index.json"), `${JSON.stringify(files, null, 2)}\n`);
