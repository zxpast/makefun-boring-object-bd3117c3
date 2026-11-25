// make.fun entry — The Most Boring Object, Reviewed in One Line
// (u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
//
// Writes exactly one line — a funny, true review of a dustpan — to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sweeps up everything except the last line of dust, which it leaves as a signature.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
