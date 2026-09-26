/**
 * THE BUILD'S WALL CLOCK IS A MEASUREMENT, AND IT RATCHETS.
 *
 * The in-tree slow-build gate reported "HARD open=0 WARN open=0 closed=15/15" on builds taking 126 to
 * 221 seconds, because its wall-clock check sat behind `if (timing.mode === 'quantum-respawn')` and
 * every build this repository runs reports mode=warm-seal. The gap was never created — not closed,
 * not open, absent — so a gate named for slow builds had never once evaluated the duration of one.
 * That is fixed at the source; this is the sharper instrument beside it.
 *
 * A fixed lattice band answers "is the build catastrophically slow" and nothing else. The useful
 * question is "is it slower than it was", and only a RATCHET asks that: the recorded floor is the last
 * good build, so a regression is caught at the first commit that causes it rather than after it has
 * doubled. Build time is a cost every contributor and every deploy pays, and it degrades the way every
 * unmeasured number degrades — a little at a time, with no single commit to blame.
 *
 * The phases are ratcheted separately, because they fail for different reasons and a total hides them:
 * the merkle seal, the type check, and the VitePress render.
 *
 * WALL TIME IS REPORTED, NOT GATED, and the size ratchet took THREE attempts because the gate kept
 * refuting me. Worth recording, because each attempt was wrong for a different reason and only the
 * last survives measurement.
 *
 * FIRST: wall-clock seconds. Forty-nine builds in one session ranged 126 to 221 seconds on identical
 * input, a 75% spread; the ratchet fired at 146 against a floor of 134 having caught nothing but
 * machine load. Wall time is not reproducible, so it is printed and never gated.
 *
 * SECOND: page count and total bytes. Both would have failed the moment a publication was added —
 * gating against the site GROWING, which is the opposite of the point.
 *
 * THIRD: kilobytes per page. This is the one that sounded right, and it fired at 188 against 184 the
 * next time six theorem pages were added. A mean is only invariant to insertion if what you insert is
 * exactly average, and nothing ever is. The gate caught my reasoning, which is what it is for.
 *
 * WHAT IS ACTUALLY INVARIANT is the APP ENTRY CHUNK: the JavaScript every visitor loads whatever page
 * they land on. It grows when the shell gets heavier — a new dependency, a fatter theme — and it does
 * not move when content is added, because VitePress emits content as separate per-page chunks. The
 * local search index (7.9 MiB here) and the per-page chunks are excluded deliberately: they grow with
 * the corpus by design, and a gate that punished that would be punishing the work.
 *
 * Everything else is MEASURED AND PRINTED — wall time, phases, page count, total weight — because a
 * number worth watching is not automatically a number worth failing on.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { ratchet } from './status.ts'

/** What the build actually produced: the deterministic cause of its duration. */
export function distWeight(root: string = process.cwd()): { pages: number; kilobytes: number; appChunkKb: number } {
  const dist = join(root, '.vitepress', 'dist')
  let pages = 0
  let bytes = 0
  const walk = (dir: string) => {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e)
      const st = statSync(p)
      if (st.isDirectory()) walk(p)
      else {
        bytes += st.size
        if (e.endsWith('.html')) pages += 1
      }
    }
  }
  if (existsSync(dist)) walk(dist)
  // The entry chunk every visitor loads, whatever page they land on: assets/app.<hash>.js.
  let appChunkKb = 0
  let entryClosureKb = 0
  let entryClosureFiles = 0
  let corpusKb = 0
  let machineryKb = 0
  const assets = join(dist, 'assets')
  if (existsSync(assets)) {
    let entry = ''
    for (const e of readdirSync(assets)) {
      if (/^app\.[A-Za-z0-9_-]+\.js$/.test(e)) { entry = join(assets, e); appChunkKb = Math.round(statSync(entry).size / 1024) }
    }
    // WHAT A VISITOR ACTUALLY FETCHES BEFORE THE APP RUNS.
    //
    // appChunkKb above is app.<hash>.js and nothing else — its own bytes. But that file STATICALLY
    // imports other chunks, and a static import is not optional: the browser must have every one of
    // them before the module evaluates. Measured on this tree the entry file is 484 KiB and its static
    // closure is 9.00 MiB across ten files, 19x larger, because one of them (the corpus graph pulled
    // through the render barrel) is 7.94 MiB on its own. The ratchet guarding "the shell every visitor
    // loads" was reading one nineteenth of the shell.
    //
    // Dynamic import() is deliberately NOT followed: it is the split working, and counting it would
    // punish the very thing that fixes this.
    //
    // AND THE FLOOR MOVES WITH CHUNK BOUNDARIES, NOT ONLY WITH THE CORPUS. Measured 2026-09-26 on a clean
    // tree at 146b742f with .vitepress/cache and dist both deleted: 8980 against its own recorded floor of
    // 8977, so HEAD failed a floor recorded against HEAD's own source. The breakdown says why — the closure
    // was 12 files and is now 10: movie-canvas (10 KiB) left it, Badge (7 KiB) joined, and diamonds went
    // 8142 → 8145. The corpus grew about thirty bytes in that span (repointed paths are longer, a tautology
    // was removed); the three kilobytes are rollup redistributing code across chunk boundaries.
    //
    // The number is still the right thing to measure — a static import is not optional, and 8 MiB is what a
    // visitor fetches. But it holds to a few kilobytes, not to one, and this session read three refusals as
    // regressions caused by the change in hand before measuring HEAD itself and finding the same 8980.
    // A floor recorded at KiB resolution against a chunker that moves KiB will keep doing that.
    if (entry) {
      const seen = new Set<string>()
      const queue = [entry]
      while (queue.length > 0) {
        const file = queue.pop()!
        if (seen.has(file) || !existsSync(file)) continue
        seen.add(file)
        entryClosureKb += statSync(file).size
        // THE SHELL AND THE CORPUS ARE TWO DIFFERENT THINGS AND ONLY ONE OF THEM SHOULD BE FLAT.
        // Measured 2026-09-26: of 8982 KiB, the corpus chunk is 8146 and the machinery around it is 836. The
        // corpus grows every time a theorem, an identity or a formula is added — which is the work — so a
        // floor on the TOTAL refuses novelty and calls it a regression. It did exactly that three times in
        // one day: two curated identities, a computed site formula, and a witness quantity.
        if (/diamonds/.test(file)) corpusKb += statSync(file).size
        else machineryKb += statSync(file).size
        const text = readFileSync(file, 'utf8')
        const specs = new Set<string>()
        for (const m of text.matchAll(/(?<!\.)\b(?:import|export)\b[^;()]*?from\s*["']([^"']+)["']/g)) specs.add(m[1]!)
        for (const m of text.matchAll(/^\s*import\s*["']([^"']+)["']/gm)) specs.add(m[1]!)
        for (const spec of specs) if (spec.startsWith('.')) queue.push(join(dirname(file), spec))
      }
      entryClosureFiles = seen.size
      entryClosureKb = Math.round(entryClosureKb / 1024)
    }
  }
  // The theorem count is read from the registry, so the density below is bytes of corpus per theorem the
  // corpus actually carries — not per file, not per page.
  const seedText = existsSync(join(root, 'src/4/6/index.ts')) ? readFileSync(join(root, 'src/4/6/index.ts'), 'utf8') : ''
  const seedStart = seedText.indexOf('export const THEOREM_ATOM_SEED')
  const seedBlock = seedStart >= 0 ? seedText.slice(seedStart, seedText.indexOf('\n]', seedStart)) : ''
  const theorems = (seedBlock.match(/^\s*\{ theorem: /gmu) ?? []).length
  return {
    pages,
    kilobytes: Math.round(bytes / 1024),
    appChunkKb,
    entryClosureKb,
    entryClosureFiles,
    machineryKb: Math.round(machineryKb / 1024),
    corpusKb: Math.round(corpusKb / 1024),
    theorems,
    // HUNDREDS OF BYTES PER THEOREM, AND THE UNIT IS THE WHOLE POINT.
    // KiB-per-theorem was the first attempt and it was no guard at all: 751 theorems × 1 KiB is 751 KiB of
    // slack, so a perturbation padding ONE theorem by 118 KiB moved the corpus 8146 → 8264 and the ceiling
    // stayed at 11. Hundreds of bytes is small against a theorem (which averages ~11,100 bytes) and large
    // against the variation of adding one, so padding trips it and growth does not.
    corpusHundredBytesPerTheorem: theorems > 0 ? Math.round(corpusKb / theorems / 100) : 0, // corpusKb is bytes at this point
  }
}

export type BuildTiming = {
  readonly mode: string
  readonly wallMs: number
  readonly merkleMs?: number
  readonly typesMs?: number
  readonly vitepressMs?: number
}

export function readTiming(root: string = process.cwd()): BuildTiming | null {
  const p = join(root, '.vitepress', 'dist', 'docs-build-timing.json')
  if (!existsSync(p)) return null
  const raw = JSON.parse(readFileSync(p, 'utf8')) as Partial<BuildTiming>
  if (typeof raw.wallMs !== 'number' || typeof raw.mode !== 'string') return null
  return raw as BuildTiming
}

export function assertBuildIsNotSlower(root: string = process.cwd()): void {
  const t = readTiming(root)
  if (!t) {
    // Unmeasured is its own outcome, never silently a pass.
    console.log('build timing — no receipt at .vitepress/dist/docs-build-timing.json, NOT MEASURED (run docs:build)')
    return
  }
  const secs = (ms: number) => Math.ceil(ms / 1000)
  console.log(`build timing (mode=${t.mode}): wall ${secs(t.wallMs)}s` +
    (t.vitepressMs ? ` · vitepress ${secs(t.vitepressMs)}s` : '') +
    (t.typesMs ? ` · types ${secs(t.typesMs)}s` : '') +
    (t.merkleMs !== undefined ? ` · merkle ${secs(t.merkleMs)}s` : ''))

  // Reported, never gated: not reproducible run to run.
  console.log('  wall-clock is MEASURED, not ratcheted — it varies with machine load, not with the build')

  const w = distWeight(root)
  console.log(`build weight: ${w.pages} pages, ${w.kilobytes} KiB — deterministic, and the actual cause of the duration above`)
  const perPage = Math.round(w.kilobytes / Math.max(1, w.pages))
  console.log(`  ${perPage} KiB per page (mean) — MEASURED, not gated: a mean shifts whenever what you add is not average`)
  if (!w.appChunkKb) {
    console.log('  app entry chunk NOT FOUND in assets/ — NOT MEASURED rather than passed')
    return
  }
  console.log(`  app entry chunk ${w.appChunkKb} KiB — the shell every visitor loads; this is what may not regress`)
  console.log(ratchet('build.app-chunk-kilobytes', w.appChunkKb, { root, evidence: () => [`app entry chunk ${w.appChunkKb} KiB in ${root}/.vitepress/dist/assets (app.*.js) — the shell every visitor loads, across ${w.pages} page(s) totalling ${w.kilobytes} KiB`] }))
  console.log(`  entry STATIC CLOSURE ${w.entryClosureKb} KiB across ${w.entryClosureFiles} files — the app chunk PLUS every chunk it statically imports, which the browser must fetch before the module evaluates`)
  console.log(`  the gap is ${Math.round(w.entryClosureKb / Math.max(1, w.appChunkKb))}x: the line above this one measures one file, and a static import is not optional`)
  // ZERO RESISTANCE TO NOVELTY, AND STILL NO ROOM FOR BLOAT.
  //
  // The total is MEASURED and reported, never ratcheted: it is the sum of a shell that must stay flat and a
  // corpus that is supposed to grow, so a floor on the sum makes adding a theorem indistinguishable from
  // shipping a heavier shell. What ratchets instead are the two numbers that each mean one thing —
  //   machineryKb        the shell every visitor loads, which no amount of new mathematics should change;
  //   corpusKbPerTheorem the DENSITY, which holds when a theorem is added and rises when one gets fatter.
  // Adding a theorem adds bytes AND a theorem, so the density is unmoved and nothing refuses. Adding
  // machinery, or padding a theorem, still refuses — which is the whole of what the old floor was for.
  console.log(`  entry closure ${w.entryClosureKb} KiB = ${w.machineryKb} KiB shell + ${w.corpusKb} KiB corpus over ${w.theorems} theorems — MEASURED, and only the parts below are ratcheted`)
  console.log(ratchet('build.shell-machinery-kilobytes', w.machineryKb, { evidence: () => [`${w.machineryKb} KiB of shell in the entry closure across ${w.entryClosureFiles} files — the corpus chunk excluded, so this number does not move when a theorem is added`] }))
  console.log(ratchet('build.corpus-hundred-bytes-per-theorem', w.corpusHundredBytesPerTheorem, { root, evidence: () => [`${w.corpusKb} KiB of corpus over ${w.theorems} theorems = ${w.corpusHundredBytesPerTheorem} hundred bytes each — a floor on the DENSITY, so adding a theorem is free and padding one is not`] }))
}
