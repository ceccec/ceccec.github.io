---
name: ceccec-limits-verify
description: >-
  Runs npm run limits:verify and interprets computational limit failures for
  ceccec.github.io — 110/108/432 census, vault src/0, render index.vue law.
  Use when checking enforcement gates without loading the mind bundle.
---

# limits:verify

Fast gate — no `mind/index` bundle.

```bash
npm run limits:verify
```

Pair: `limits/verify` (saved in `src/quantum/heaven/mind/thunder/commands/quantum/pairs/index.ts`)

## What it checks (HARD)

- Exactly **110** `src/**/index.ts` with gapless bands **55+34+21**
- **I Ching eight-fold** — ≤8 subfolders per level (bāguà), index harmony, depth-6 band ≤21
- **Rosetta taxonomy** — **42** areas = **6×7** / **7×6** (`rosetta:batch taxonomy`)
- Folded image **108** and dimension gates **432**
- Vault primitives only in **`src/0`**
- `src/<science>/<model>/<action>/index.vue` co-located with `index.ts` (no `render/ui/`)
- `.vitepress/pages` — bracket/index mounts only (realtime paths)

## After green

Run `npm run verify:structure` for import law, monolith 8KB, script shells, fold homes.

## Implementation

- Constants: `src/pair/enforcement/gates/computational/index.ts`
- Runner: `src/pair/enforcement/ops/verify/limits/index.ts`
- Agent fold: `computationalLimitsNotLessNotMore()` in `agent/tools/index.ts`
