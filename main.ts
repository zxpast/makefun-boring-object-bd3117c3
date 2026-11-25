// make.fun entry — The Most Boring Object, Reviewed in One Line
// (u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
//
// Writes exactly one line — a funny, true review of a dustpan — to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review is built from two halves so the punchline lands as one
// sentence: the sweep, then the signature it leaves behind.
const ENTRY_HEAD = "Sweeps up everything except the last line of dust,";
const ENTRY_TAIL = " which it leaves as a signature.";
const ENTRY = ENTRY_HEAD + ENTRY_TAIL;

// Gate guard: the sealed scorer accepts 1–200 UTF-8 characters, not only
// whitespace, and a single line. Count code points, the way the gate does.
const len = [...ENTRY].length;
if (len < 1 || len > 200 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(
    `entry violates the 1-200 char single-line gate (got ${len} chars)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
