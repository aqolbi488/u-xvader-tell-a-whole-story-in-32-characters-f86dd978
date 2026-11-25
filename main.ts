// Tell a Whole Story in 32 Characters — make.fun entry.
//
// The Wi-Fi name is the whole entry: a breakup told in one line.
// She left. She took the dog. The Wi-Fi — the one thing that never
// argued back — stayed behind with him.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "She took the dog, not the Wi-Fi";

// The gate allows 1–32 characters, not only whitespace. Fail loudly
// instead of writing an entry the judge will never see.
if ([...ENTRY].length < 1 || [...ENTRY].length > 32 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-32 characters, got ${[...ENTRY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
