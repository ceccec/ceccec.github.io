# Dry refactor — file map

## Source of truth

| Concern | Primary module | Re-export |
|---------|----------------|-----------|
| Matrix, routes, staticPages, monographPaths, corpusParams | `src/quantum/mind/index.ts` | `src/ui/lib/quantumMind.ts` |
| Dist artifacts (sitemap, robots, mcp.json, digit-index, README) | `src/quantum/dist/index.ts` | — |
| Enforcement cross · fold · weave | `src/quantum/enforcement/cross.ts`, `fold.ts`, `weave.ts`, `index.ts` | `scripts/enforcement-trinity.mjs` |
| VitePress theme + Corpus | `src/ui/index.ts`, `src/ui/components/Corpus.vue` | `.vitepress/theme/` |

## Page tree (target layout)

```
.vitepress/
  config.mts              # srcDir: '.vitepress/pages'
  computed-pages.mts      # Glagolitic index.md from en/index.md
  computed-dist.mts       # dev-time dist artifacts from src/quantum/dist
  pages/
    index.md              # computed (Glagolitic home) — not hand-edited
    [page].md             # monograph shell (useData().params)
    [page].paths.ts       # monographPaths('gla')
    papers/index.md       # <Corpus kind="papers" />
    references/index.md
    diamonds/index.md
    en/
      index.md
      [page].md
      [page].paths.ts     # monographPaths('en')
      papers/index.md
      ...
    bg/
      (mirror of en)
public/                   # static assets only
```

**Deprecated**: `site/**` — migrate to `.vitepress/pages/**` and remove.

## Monograph mount (all locales)

```typescript
// .vitepress/pages/[page].paths.ts  (gla)
// .vitepress/pages/en/[page].paths.ts  (en)
// .vitepress/pages/bg/[page].paths.ts  (bg)
import { monographPaths } from '../../src/ui/lib/quantumMind' // adjust depth
export default { paths: () => monographPaths('gla') }
```

```markdown
<!-- .vitepress/pages/[page].md -->
---
outline: deep
---
<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>
# {{ params.title }}
<!-- components from params.components -->
```

## Corpus mount

```markdown
<!-- .vitepress/pages/papers/index.md (and en/, bg/) -->
---
layout: doc
aside: false
---
<Corpus kind="papers" />
```

Detail URL: `/papers/<id>` — the VitePress `[id]` dynamic route; `[id].paths.ts` → `paperRoutes()` enumerates the paths, `Corpus.vue` reads the item from `useData().params`.

## Enforcement pipeline

```
docs:build
  └─ vitepress build
  └─ scripts/enforcement-trinity.mjs
       └─ runEnforcementTrinity(root)  ← src/quantum/enforcement/index.ts
            ├─ runCross   → src/quantum/dist/cross.ts (sitemap /kind/<id>, digit-index, robots)
            ├─ runFold    → modelSeal + tripwire (src/quantum/mind)
            └─ runWeave   → src/quantum/enforcement/weave.ts (harmonic.json gaps)
```

**I Ching dry spread (trinity · bagua · paired folders)**

| Concern | Primary modules | Dual mount |
|---------|-----------------|------------|
| Enforcement cross · fold · weave | `src/quantum/enforcement/{cross,fold,weave,index}.ts` | `src/enforcement/quantum/index.ts` |
| Dist artifacts | `src/quantum/dist/{cross,manifest,readme,index}.ts` | `src/dist/quantum/index.ts` |
| Model seal (fold wave) | `modelSeal()` in `src/quantum/mind/index.ts` | — |

`folderLaw().pairedLogicFolders` includes dist and enforcement pairs; weave verifies each has `index.ts`.

**Session gates (emergentDimensions):** `no.site.folder.vitepress.pages`, `corpus.rest.path.routing`, `enforcement.trinity.spread.paired`.

Declared gates: `buildEnforcementPipeline()` in mind — must match `scripts/` and `package.json` `docs:build`.

## Scripts policy

| Script | Role |
|--------|------|
| `enforcement-trinity.mjs` | **Production** post-build gate (keep) |
| `iching.mjs` | ONE bāguà-indexed runner — all 8 slots filled; plans live in `src/quantum/dist/generators.ts` |
| ↳ `iching.mjs bible` | Bible in Glagolitic — ☷ Earth slot |
| ↳ `iching.mjs vortex` | Vortex fold manifest — ☳ Thunder slot |
| ↳ `iching.mjs glagolitic` | Superseded demo — home is computed — ☵ Water slot |
| ↳ `iching.mjs songbook` | ПесноПойка folk songbook — ☱ Lake slot |
| ↳ `iching.mjs census` | Proven-or-purged census — ☶ Mountain slot |
| ↳ `iching.mjs crosslinks` | I Ching domain peer map — ☲ Fire slot |
| ↳ `iching.mjs cloudflare` | Opt-in wizard (`cf:wizard`) — ☴ Wind slot |
| ↳ `iching.mjs dist` | Debug dist recompute (not in docs:build) — ☰ Heaven slot |
| `generate-*.mjs` (4 files) | **Deleted** — fused into the `iching.mjs` trigram registry |
| `check-*.mjs` | **Delete** — fuse into trinity |
| `generate-all.mjs`, `harmonic-distribution.mjs` | **Delete** — fused into trinity |

## Adding new computed behavior

1. Implement function in `src/quantum/mind/index.ts` (or `dist/index.ts` if artifact).
2. Export via `quantumMind.ts` if VitePress/components need it.
3. If build output: add to `computedDistFiles()`; cross wave writes it.
4. If invariant: add weave gap check with a detailed `why`.
5. Thin mount in scripts only if CLI entry is required.
6. Run `npm run docs:build`.

## Locale routing (config)

- Default locale Glagolitic at `/` — nav labels transliterated, links stay at root.
- `/en/` — Latin labels, links prefixed with `/en/`.
- `/bg/` — Cyrillic mirror under `pages/bg/`.
