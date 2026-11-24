import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The code you ship on Friday will keep you company all weekend.";

// Gate: the entry must be one line, 1-120 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
