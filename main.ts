import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single hilarious line, at most 200 characters.
// The joke: a Roomba named after an ex, behaving exactly like one.
const ENTRY =
  "I named my Roomba after my ex. It also leaves, comes back dirty, and bumps into everything I love.";

// Gate: 1 to 200 characters. Fail loudly rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
