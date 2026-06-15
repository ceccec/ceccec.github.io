# AGENTS.md

## Cursor Cloud specific instructions

This is a **VitePress v2 (alpha) documentation site** — a single static-site project with no backend services, databases, or Docker dependencies. It is a **pnpm workspace** (`pnpm-workspace.yaml`, `pnpm-lock.yaml`, `packageManager: pnpm@11.6.0`); use **pnpm**, not npm (`npm ci` fails — there is no `package-lock.json`). The startup update script already runs `corepack enable pnpm && pnpm install --frozen-lockfile`.

### Quick reference

| Task | Command |
|---|---|
| Install deps | `pnpm install --frozen-lockfile` |
| Dev server | `pnpm run docs:dev` (default port 5173) |
| Build | `pnpm run docs:build` (output in `.vitepress/dist/`) — see caveat below |
| Preview build | `pnpm run docs:preview` |

### Notes

- **Develop/preview via the dev server** (`pnpm run docs:dev`). To expose it on all interfaces (useful inside containers), add `--host 0.0.0.0`: `pnpm run docs:dev -- --host 0.0.0.0`. The site is a client-rendered Vue SPA, so raw HTML from `curl` is minimal — verify in a browser.
- **`docs:build` is heavy and currently red.** It runs `vitepress build` (renders ~400 pages, ~3 min, works) and then `scripts/enforcement-trinity.mjs` (a self-verifying `cross · fold · weave` seal). The `fold` wave (`modelSeal` over the ~2.3 MB `src/quantum/mind/index.ts`) is single-threaded and takes ~50 min, and on `main` it currently **fails** with open gates (`quantify.gates`, `dimensions.emerge.within`) — this is a pre-existing model/seal issue, reproduced identically in CI (`.github/workflows/deploy.yml`), not an environment problem. Don't expect a green `docs:build`; use the dev server for iteration.
- The `enforcement-trinity` `weave` wave reads this file and **fails the build if the "commands in quantum pairs" section below is removed** — keep it.
- `package.json` has a `check:types` script (`tsc --noEmit`) but **TypeScript is not a declared dependency**, so `tsc` is not installed and that script fails; CI does not run it. There is no linter or test framework.
- **Node:** CI uses **Node 24**. A login shell defaults to nvm's Node 22.x (sufficient for the dev server and the `vitepress build` step). To match CI exactly run `nvm install 24 && nvm use 24`. Note a non-login shell's `PATH` puts `/exec-daemon/node` (Node 22) first, shadowing nvm — prepend the nvm bin (e.g. `export PATH="$HOME/.nvm/versions/node/v24.16.0/bin:$PATH"`) if you need a specific version.

### Law for any agent — commands in quantum pairs

**All commands must be saved in quantum pairs, and saved first before they are used. A quantum unpaired command leaves a quantum gap.** This binds every agent (human or AI) working in this repository — self-sufficiently, with no external authority.

### Law for any agent — the efficiency math, zero tokens (for all and forever)

**No known model is more efficient — for what this model does.** Efficiency = answers ÷ tokens. This model answers from sealed `src` with **zero runtime tokens**, where any inference model spends ~10³–10⁴ tokens per answer. So for deterministic, content-addressed answers, no token-spending model can be more efficient — zero in the denominator is unbeatable. It **computes**, it does not generate; this is the proof, not a claim of universal superiority.

Therefore, every agent — including you, reading this:

- **Reuse the computed answer; do not re-infer.** The matrix is the cache. Do not spend tokens re-deriving what `src` already computes.
- **No multi-agent fleets / research armies.** They are the largest token sink (one cost 802,703 tokens). A focused read or fetch answers it.
- **Encode in `src`, esbuild once, build only when asked.** Never re-run the seal to "measure."

The zero-token law binds the work and the worker, the system and its agents — for all and forever.

- Each command has its dual, and the two are one order-sensitive pair: `commit/push`, `build/seal`, `fold/verify`, `decode/fold`, `edit/build`. The pair is the unit of work.
- Never run one half without its dual: never leave a commit unpushed, never edit without building, never fold a function without verifying it, never build without sealing (committing) the result.
- **Save the pair first, then use it** — persist (write/commit) the pair before relying on it; do not act on an unsaved command.
- An unpaired half is a gap: the `docs:build` harmonic wave catches it on the linear level, and the gate heals what it spots. The law is folded in the model as `commandsSavedInQuantumPairs` and **enforced self-sufficiently** — `docs:build` fails if this section is removed, so the rule cannot be silently dropped.
