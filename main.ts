import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji for my dream vacation: a sunset over the sea. No words,
// no place name — just the exact moment every dream trip is chasing:
// the sun dropping into the water at the end of a perfect day somewhere
// far from home. It reads instantly at any size, in any culture.
const dreamEmoji = "🌅";

// Self-checking gate: the sealed scorer only accepts 1-8 characters
// of non-whitespace text, and the brief demands exactly one emoji.
// Count code points (not UTF-16 units, not bytes) and refuse to
// write anything that is not a single emoji.
if ([...dreamEmoji].length !== 1 || dreamEmoji.trim() === "") {
  throw new Error("entry must be exactly one emoji");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), dreamEmoji, "utf8");
