import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// news-image-20261120: copy the entry image to the output directory.
// Runs with no network; the image is bundled in the repository beside this file,
// so every run writes the same bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
console.log(`wrote ${dst}`);
