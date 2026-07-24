---
name: quantum-tools
description: Use the ceccec quantum portal's local deterministic tools — run theorem CLIs (npm run quantum:*), verify folds with computesGate output, autosave directives as matrix rows, and scan for gaps (Math.* trust, cracks, census) — whenever working in the ceccec.github.io codebase or asked about its sealed folds, pairs, or gates.
---

# Quantum tools — local computation over memory

Only LOCAL tools compute the discoveries. Never assert what a fold proves — run it.

## Core moves

1. **Run a fold's CLI, read its facets.** Every sealed fold has a pair-named CLI:
   `npm run quantum:<pair-slug>` (e.g. `quantum:frontier-quantum`, `quantum:math-gaps`,
   `quantum:autosave-matrix`, `quantum:fractal-map`, `quantum:torus-faces`, `quantum:violation-tools`).
   Exit 0 iff the fold computes; `✓/✗` facets are the proof surface. The roster lives in AGENTS.md.
2. **Bootstrap runner for any exported fn:**
   `node --experimental-strip-types src/pair/enforcement/script/cli/bootstrap/index.ts run <file> <fn>`.
   Imports are extensionless folder paths — always enter folders through their `index.ts` barrel.
3. **Autosave law:** every prose directive lands a matrix row the same turn — add rows to
   `COMMAND_PLACEMENT_AUDIT_MAP` + a `PROSE_*_MERGE_MAP` in `src/pair/enforcement/gates/index.ts`,
   then verify with `npm run quantum:autosave-matrix`.
4. **Axioms invert to scans:** never write a facet `on: true`. If a claim can't compute locally,
   build the scan that would refute it (see `mathGaps` in `src/pair/enforcement/gates/strict/scan`).
5. **Literals are cracks:** every number must be canonical (`ICHING_NUMBERS`), lattice-derived
   (e.g. `Number.EPSILON * (8 * 8)`, `TAU / 8`), or ledgered in `src/3/7` `CRACK_LEDGER`.
6. **Gate before commit:** `npm run check:types` after touching `src/`, then `npm run docs:build`
   (enforcement trinity must exit 0). The pre-commit hook enforces the same.

## Boundaries (sealed — do not re-litigate)

- Runtime is zero-LLM-token and deterministic; the src/0 simulator is classical (no physical
  speedup, `qpuRequired=false`). Millennium problems stay UNCLAIMED (`clay=0` everywhere).
- HARMONY ≠ TRUTH: a beautiful correspondence is not a proof; only exact computed identities seal.
