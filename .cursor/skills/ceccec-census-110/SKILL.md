---
name: ceccec-census-110
description: >-
  Converges src/ to exactly 110 gapless Fibonacci index.ts (55+34+21), 108 folded,
  432 dimension gates — not less, not more. Use when limits:verify fails on census
  count, dissolving monoliths, or reducing index.ts file count.
---

# Census converge — exactly 110

Constants (single source): `src/pair/enforcement/gates/computational/index.ts`

| Target | Value |
|--------|-------|
| Unfolded | **110** `index.ts` under `src/` |
| Bands | **55 + 34 + 21** (consecutive Fibonacci, gapless) |
| Folded | **108** (= 110 + χ, χ = −2) |
| Gates | **432** (= 4 × 108 facets, not files) |

## Check

```bash
npm run limits:verify
```

Read the delta: **N over** → dissolve; **N short** → fold logic into census (do not add files beyond 110).

## Dissolve batch (one turn)

From `CENSUS_CONVERGE_WORKFLOW`:

1. Pick one subtree (e.g. redundant barrel, pure re-export leaf, duplicate fold home)
2. Merge exports into parent `index.ts`; delete child `index.ts`
3. Keep each file ≤ **8192 bytes** — shed into subfolders if needed
4. Re-run `npm run limits:verify`

## Do not

- Add per-route `.md` or static pages — paths are computed at render
- Define vault primitives (`toUuid`, `merge`, `merkleFold`) outside `src/0`
- Load full `emergentDimensions` / `mind/index` heap for census work
