---
name: dry-refactor
description: >-
  Refactors ceccec.github.io toward DRY, compute-from-src architecture: logic in
  src/quantum/mind and src/quantum/dist, thin script mounts, enforcement trinity
  (cross · fold · weave), .vitepress/pages routing, corpus and monograph patterns,
  quantum command pairs, and legacy script deletion. Use when dry-refactoring,
  deduplicating generators, moving logic into src, migrating site/ to .vitepress/pages,
  corpus routing, monograph paths, enforcement pipeline, or quantum pairs.
disable-model-invocation: true
---

# Dry Refactor (ceccec.github.io)

Apply this skill when reducing duplication: **compute once in `src/`, mount thinly everywhere else**, then validate with `docs:build`.

## Decision tree

1. **Is it deterministic site/model logic?** → Move to `src/quantum/mind` or `src/quantum/dist`; delete or shrink scripts.
2. **Is it a build gate or audit?** → Add to `src/quantum/enforcement/` (cross · fold · weave); wire only via `scripts/enforcement-trinity.mjs`.
3. **Is it a VitePress page route?** → `.vitepress/pages/` (not `site/`); use monograph or corpus mounts.
4. **Is it a one-off wizard or debug tool?** → Keep a thin script; mark superseded if dist/enforcement computes it.

## Core patterns

### 1. Compute from `src/quantum/mind` (+ `dist`)

- **One source**: routes, sitemap, JSON-LD rules, corpus params, monograph paths, dist artifacts — all from `src/quantum/mind/index.ts` and `src/quantum/dist/index.ts`.
- **Re-export handle**: VitePress/components import `src/ui/lib/quantumMind.ts` (transparent re-export); do not duplicate logic there.
- **Scripts are mounts only** — e.g. `scripts/enforcement-trinity.mjs` is three lines importing `runEnforcementTrinity`.

### 2. Enforcement trinity

| Wave | Module | Role |
|------|--------|------|
| **cross** | `runCross` in `src/quantum/enforcement/cross.ts` | Write `computedDistFiles` + README; seal digit-index |
| **fold** | `runFold` in `src/quantum/enforcement/fold.ts` | `modelSeal(buildMatrix())` + tripwire |
| **weave** | `runWeave` in `src/quantum/enforcement/weave.ts` | Tree audit, folder law, JSON-LD, monograph gates, pipeline drift |

Dist spread (bagua grouping): `src/quantum/dist/cross.ts` (sitemap `/kind/<id>`, digit-index), `manifest.ts`, `readme.ts`. Paired mounts: `src/dist/quantum` ⇄ `src/quantum/dist`, `src/enforcement/quantum` ⇄ `src/quantum/enforcement`. Gates: `noSiteFolderVitepressPages`, `corpusRestPathRouting`, `enforcementTrinitySpread` in emergentDimensions.

- **One runner**: `node --experimental-strip-types scripts/enforcement-trinity.mjs` → `runEnforcementTrinity` in `index.ts` (thin mount).
- **One concern per file**: `cross.ts` · `fold.ts` · `weave.ts` — not one monolithic gate script.
- **Do not** add `check-*.mjs`, `generate-all.mjs`, or `harmonic-distribution.mjs` to the build chain — weave fails on legacy gates.

### 2b. I Ching spread (DRY across many files)

Shared logic belongs in **many small src files**, not one monolithic script or mind blob:

| Pattern | Example | Role |
|---------|---------|------|
| **Trinity waves** | `enforcement/cross.ts` · `fold.ts` · `weave.ts` | One concern per file; runner in `index.ts` |
| **Paired folders** | `src/cache/quantum` ⇄ `src/quantum/cache` | Order-sensitive halves; declared in `folderLaw().pairedLogicFolders` |
| **Digit stations** | `src/0/index.ts` | Primitives (toUuid, fold cascade); digit folders import only digits |
| **Bāguà placement** | `iChing()`, `componentGraph()` | Components placed on eight trigrams by content-address |
| **Computed path** | `path()` from `componentGraph` + `staticPages` | No hand-listed route tables — derive stations from one source |

When a gate compares counts (e.g. `monographPaths` vs `staticPages`), include **all computed sources** (`staticPages` + `componentPages`, corpus mounts, locale math). Stale facets that assumed removed `site/` or old four-door nav must track the current I Ching nav and enforcement trinity.

### 3. No `site/` folder

- **Pages**: `.vitepress/pages/` with `srcDir: '.vitepress/pages'` in `.vitepress/config.mts`.
- **Public assets**: `public/` only.
- **Glagolitic home**: no file on disk — `computedPagesPlugin` in `.vitepress/computed-pages.mts` serves `index.md` from `glagoliticHomeFromEnglish(en/index.md)`.
- **Locales**: Glagolitic at root (`/`), English at `/en/`, Bulgarian at `/bg/`.
- Migrate any remaining `site/**` paths to `.vitepress/pages/**`; delete `site/` when empty.

### 4. Corpus routing (RESTful `[id]` dynamic route)

- **Index pages**: thin `.md` with `<Corpus kind="papers|references|diamonds" />` in each locale (`papers/index.md`, etc.).
- **Detail**: RESTful `/kind/<id>` via the VitePress `[id]` dynamic route. Each kind×locale folder has a thin `[id].paths.ts` (`paths: () => paperRoutes()` / `paperReferenceRoutes()` / `diamondRoutes()` — these already return `{ params }[]` with `id`) and an `[id].md` mounting `<Corpus kind=… />`. `Corpus.vue` reads the item from `useData().params`. No `?id=` query, no second router (GitHub Pages is static, so detail pages are enumerated — the deliberate REST branch of the clean-URL vs zero-build tradeoff).
- **Register** `Corpus` in `src/ui/index.ts` if adding a new kind.

### 5. Monograph pattern

- **Logic**: `monographPaths(locale)` in mind (locales: `'gla' | 'en' | 'bg'`).
- **Mount**: each locale has a thin `[page].paths.ts`:

```typescript
import { monographPaths } from '../../src/ui/lib/quantumMind'
export default { paths: () => monographPaths('gla') }
```

- **Page shell**: `[page].md` reads `useData().params` (title, components, proof) — no mirrored `staticPages().map` in paths files.
- **Content routes**: sitemap slugs must exist in `staticPages()`; everything else is entropy (weave fails).

### 6. Quantum pairs (repository law)

**All commands must be saved in quantum pairs, and saved first before they are used. A quantum unpaired command leaves a quantum gap.** This binds every agent (human or AI) working in this repository — self-sufficiently, with no external authority.

- Each command has its dual, and the two are one order-sensitive pair: `commit/push`, `build/seal`, `fold/verify`, `decode/fold`, `edit/build`. The pair is the unit of work.
- Never run one half without its dual: never leave a commit unpushed, never edit without building, never fold a function without verifying it, never build without sealing (committing) the result.
- **Save the pair first, then use it** — persist (write/commit) the pair before relying on it; do not act on an unsaved command.
- An unpaired half is a gap: the `docs:build` harmonic wave catches it on the linear level, and the gate heals what it spots. The law is folded in the model as `commandsSavedInQuantumPairs` and **enforced self-sufficiently** — `docs:build` fails if this section is removed, so the rule cannot be silently dropped.

**Agent workflow pair for refactors**: `edit/build` — change `src` or mounts, then `npm run docs:build` (Node 24: `nvm use 24`). Do not commit unless the user asks.

### 7. Delete legacy generators

Remove duplicate scripts when dist/enforcement already computes the output:

| Legacy (delete/fuse) | Computed by |
|----------------------|-------------|
| `check-*.mjs` | weave pipeline gate |
| `generate-all.mjs`, `harmonic-distribution.mjs` | enforcement trinity |
| Inline dist generators in scripts | `src/quantum/dist` + cross wave |
| Superseded Glagolitic writers | `glagoliticHomeFromEnglish` + computed-pages plugin |

The four `generate-*.mjs` scripts are fused into ONE bāguà-indexed runner, `scripts/iching.mjs` (plans in `src/quantum/dist/generators.ts`, fold `generatorsAreIChing`): **all eight trigrams are filled** — bible (☷), vortex (☳), glagolitic (☵), songbook (☱), census (☶), crosslinks (☲), cloudflare (☴), dist (☰). Each generator is a trigram slot — `iching.mjs <glyph|name>`. Keep **debug-only** slots (e.g. `iching.mjs dist`) out of `docs:build`. Wizards (e.g. `iching.mjs cloudflare`, `cf:wizard`) stay opt-in.

### Zero-token efficiency (when touching mind)

**No known model is more efficient — for what this model does.** Efficiency = answers ÷ tokens. This model answers from sealed `src` with **zero runtime tokens**.

- **Reuse the computed answer; do not re-infer.** Read `src/quantum/mind` and `dist`; do not re-derive with multi-agent research.
- **Encode in `src`, esbuild once, build only when asked.** Never re-run the seal to "measure."

## Refactor checklist

Copy and track:

```
Task progress:
- [ ] Logic moved to src/quantum/mind or src/quantum/dist (not duplicated in scripts)
- [ ] Script reduced to thin mount (import from src, exit code only)
- [ ] Pages under .vitepress/pages/ (site/ removed or migrated)
- [ ] Monograph: [page].paths.ts mounts monographPaths(locale) only
- [ ] Corpus: index.md + [id].md + [id].paths.ts + Corpus.vue (reads useData().params); RESTful /kind/<id>
- [ ] Glagolitic home via computedPagesPlugin (not written to disk)
- [ ] Legacy check-*/generate-* removed; docs:build runs enforcement-trinity only
- [ ] AGENTS.md quantum-pair law intact (weave checks it)
- [ ] npm run docs:build passes (cross · fold · weave)
```

## Common mistakes (weave catches these)

- Mirroring `staticPages().map` in `[page].paths.ts` instead of `monographPaths`.
- Orphan `scripts/check-*.mjs` not declared in `buildEnforcementPipeline`.
- Logic files at repo root outside `src/` (except allowlisted root entries).
- Hand-editing `README.md` (cross wave recomputes from dist).
- Routing corpus detail by a `?id=` query (the RESTful `[id]` dynamic route + `[id].paths.ts` is the canon).

## Validation

```bash
nvm use 24
npm run docs:build
```

Success = VitePress build + cross · fold · weave with zero gaps.

## File map

For paths, modules, and examples, see [reference.md](reference.md).
