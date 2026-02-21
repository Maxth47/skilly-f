import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const html = readFileSync(join(root, "example.html"), "utf8");

// Find first occurrence of each Logo 1-6 and extract the data URI
const logos = [];
for (let n = 1; n <= 6; n++) {
  const re = new RegExp(
    `data-framer-name="Logo ${n}"[^>]*>\\s*</div>\\s*</li>\\s*<li[^>]*>\\s*<div[^>]*>[^>]*>[^>]*>[^>]*>\\s*style="\\s*[^"]*background-image: url\\('(data:image/svg\\+xml,[^']+)'\\)`,
    "s"
  );
  const altRe = new RegExp(
    `data-framer-name="Logo ${n}"[\\s\\S]*?background-image: url\\('(data:image/svg\\+xml,[^']+)'\\)`,
    "s"
  );
  let m = html.match(altRe);
  if (!m) {
    console.error(`Logo ${n} not found`);
    continue;
  }
  const dataUri = m[1];
  const encoded = dataUri.replace(/^data:image\/svg\+xml,/, "");
  const decoded = encoded
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
  logos.push({ n, svg: decoded });
}

const outDir = join(root, "public", "images", "limitless");
mkdirSync(outDir, { recursive: true });

for (const { n, svg } of logos) {
  const path = join(outDir, `logo-${n}.svg`);
  writeFileSync(path, svg, "utf8");
  console.log(`Wrote ${path}`);
}

console.log(`Done. Extracted ${logos.length} logos.`);
