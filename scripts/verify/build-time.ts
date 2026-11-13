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
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { ratchet } from './status.ts'
import { THEOREM_ATOM_SEED } from '../../src/4/6/index.ts'

/**
 * IS THE DIST THIS TREE'S, OR AN OLDER TREE'S? THIS GATE NEVER ASKED, AND THAT MADE ITS FLOORS FICTION.
 *
 * distWeight only READS .vitepress/dist — nothing here builds. In `land` the gate order is
 * verify:stream (which contains this gate) and only THEN docs:build, so every build.* ratchet has always
 * been measured against the dist left by an EARLIER tree. Run on its own it is worse: `npm run
 * verify:build-time` in a working tree reports the last build's numbers with no hint they are not this
 * tree's. 2026-09-27 I read three such reports as measurements of three different trees — a baseline with
 * the wave stashed, the wave, and the wave minus a vendor import — and all three printed the identical
 * 837 KiB with the identical chunk hash, because all three read one dist that was two and a half hours
 * old. A gate cannot be wrong in a more expensive way than by answering confidently about the wrong tree.
 *
 * So the freshness is computed and the ratchets are SKIPPED, loudly, when the dist predates the sources.
 * Skipped, not failed: refusing would make every land impossible, since land runs this before its build.
 * Skipped, not passed quietly: a floor recorded from the wrong tree is the transient-state defect that
 * has cost this corpus a witness, a seal and a day. land.sh now runs this gate again AFTER docs:build,
 * where the dist is this tree's and the numbers mean what they say.
 */
export function distIsThisTree(root: string = process.cwd()): { fresh: boolean; distMs: number; newestSourceMs: number; newestSource: string; changed: number } {
  const dist = join(root, '.vitepress', 'dist')
  let distMs = 0
  const walkDist = (dir: string) => {
    if (!existsSync(dir)) return
    for (const e of readdirSync(dir)) {
      const p = join(dir, e)
      const st = statSync(p)
      if (st.isDirectory()) walkDist(p)
      else if (st.mtimeMs > distMs) distMs = st.mtimeMs
    }
  }
  walkDist(join(dist, 'assets'))
  let newestSourceMs = 0
  let newestSource = ''
  let changed = 0
  const walkSrc = (dir: string) => {
    if (!existsSync(dir)) return
    for (const e of readdirSync(dir)) {
      // dist and cache are OUTPUT, and counting output as source makes everything look fresh forever.
      if (e === 'dist' || e === 'cache' || e === 'node_modules' || e.startsWith('.')) continue
      const p = join(dir, e)
      const st = statSync(p)
      if (st.isDirectory()) walkSrc(p)
      else if (/\.(ts|vue|mts|css|json|md)$/.test(e)) {
        if (st.mtimeMs > distMs) changed += 1
        if (st.mtimeMs > newestSourceMs) { newestSourceMs = st.mtimeMs; newestSource = p.replace(`${root}/`, '') }
      }
    }
  }
  walkSrc(join(root, 'src'))
  walkSrc(join(root, '.vitepress'))
  return { fresh: distMs > 0 && newestSourceMs <= distMs, distMs, newestSourceMs, newestSource, changed }
}

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
  const shellFiles: string[] = []
  const corpusFiles: string[] = []
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
        if (/diamonds/.test(file)) { corpusKb += statSync(file).size; corpusFiles.push(file) }
        else { machineryKb += statSync(file).size; shellFiles.push(file) }
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
    shellFiles,
    corpusFiles,
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
  const fresh = distIsThisTree(root)
  if (!fresh.fresh) {
    const age = Math.round((fresh.newestSourceMs - fresh.distMs) / 60000)
    console.log(`  ⚠ THE DIST IS NOT THIS TREE'S — ${fresh.changed} source file(s) are newer than the newest built asset, the most recent by ${age} minute(s) (${fresh.newestSource}).`)
    console.log('    The numbers above describe the LAST build, not this tree. The build.* ratchets are SKIPPED rather than')
    console.log('    recorded from another tree\'s output — run `npm run docs:build` and this gate again to measure this one.')
    console.log('    (land runs this gate a second time after docs:build, which is where these floors are actually enforced.)')
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
  assertTheShellCarriesNoTheorem(w.shellFiles, w.corpusFiles, w.machineryKb)
  assertTheShellIsAccountedFor(root, w.shellFiles)
  console.log(ratchet('build.corpus-hundred-bytes-per-theorem', w.corpusHundredBytesPerTheorem, { root, evidence: () => [`${w.corpusKb} KiB of corpus over ${w.theorems} theorems = ${w.corpusHundredBytesPerTheorem} hundred bytes each — a floor on the DENSITY, so adding a theorem is free and padding one is not`] }))
}

/**
 * THE SHELL IS GUARDED BY A THEOREM, NOT BY A FLOOR (owner, 2026-11-13: "remove and use theorems to guard. no other
 * logic is approved but coming from the textbook meaning of a theorem").
 *
 * build.shell-machinery-kilobytes was a remembered number — 836, then 728, then 630 — and a remembered number is not a
 * proposition: it is true of whichever tree last wrote it. It refused a landing at 635 against 630 when a cold build of
 * the commit underneath, alone, measured the same 635; the change in hand had put nothing in the shell. The floor had
 * been standing in for a statement it never made, and the statement can be made:
 *
 *   DEFINITIONS. C is the static import closure of the app entry (assets/app.*.js). The corpus K is the chunk of C
 *   that carries the registry; the shell is S = C \ K. N is the set of theorem names in THEOREM_ATOM_SEED.
 *
 *   THEOREM (separation). No file of S contains a member of N.
 *
 *   COROLLARY. The bytes of S are not a function of N: registering, renaming or removing a theorem cannot move the
 *   shell — "mathematics changes the corpus, never the shell", stated so that it can be false.
 *
 *   PROOF. By exhaustion: |S| × |N| substring decisions over the build on disk, each of which could fail. The lemma
 *   that keeps it from being vacuous is decided beside it: K contains members of N. A build whose corpus chunk
 *   carries none has not been read correctly, and that is NOT MEASURED — a throw — never a pass.
 *
 * WHAT THIS DOES NOT GUARD, said once: the SIZE of the shell. A heavier dependency, or fold code that carries no
 * theorem name, enters S without contradicting the theorem. The size is still measured and printed on every run;
 * nothing remembers it, and nothing refuses on it.
 */
export function assertTheShellCarriesNoTheorem(shellFiles: readonly string[], corpusFiles: readonly string[], machineryKb: number): void {
  const names = [...new Set(THEOREM_ATOM_SEED.map((row) => row.theorem))]
  // A name sits in a chunk as a JavaScript string, so it is compared in both spellings a bundler writes: raw, and
  // JSON-escaped (quotes, backslashes and non-ASCII as \u escapes).
  const spellings = (name: string) => [...new Set([name, JSON.stringify(name).slice(1, -1), JSON.stringify(name).slice(1, -1).replace(/[\u0080-\uffff]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))])]
  const carriedBy = (file: string) => { const text = readFileSync(file, 'utf8'); return names.filter((name) => spellings(name).some((sp) => text.includes(sp))) }
  const inCorpus = new Set(corpusFiles.flatMap(carriedBy))
  const inShell = shellFiles.map((file) => ({ file, names: carriedBy(file) })).filter((hit) => hit.names.length > 0)
  console.log(`  shell ${machineryKb} KiB across ${shellFiles.length} file(s) — MEASURED and printed; no number is remembered and none refuses`)
  console.log(`  theorem (separation): no shell file contains a registry theorem name — ${shellFiles.length} file(s) × ${names.length} name(s) decided; the corpus chunk carries ${inCorpus.size} of them`)
  if (corpusFiles.length === 0 || inCorpus.size === 0) {
    throw new Error(`separation NOT MEASURED: ${corpusFiles.length} corpus chunk(s) in the entry closure carrying ${inCorpus.size} registry name(s) — the build was not read as shell and corpus, so nothing was decided`)
  }
  if (inShell.length > 0) {
    for (const hit of inShell) console.log(`    ✗ ${hit.file.split('/').pop()} carries ${hit.names.length}: ${hit.names.slice(0, 3).map((n) => n.slice(0, 60)).join(' · ')}`)
    throw new Error(`separation is FALSE on this build: ${inShell.length} shell file(s) carry ${inShell.reduce((n, h) => n + h.names.length, 0)} registry theorem name(s) — the corpus has entered the shell every visitor loads`)
  }
  console.log('  ✓ separation holds: the shell is not a function of the registry')
}

/**
 * THE SHELL, ACCOUNTED FOR — three statements on the pattern of the thousand-bit crypto tests (owner, 2026-11-13:
 * "close all gaps" · "solve via 1000bit crypto tests"). The pattern is src/pair/formal/proofs/thousand.lean: a factor
 * route's PARTIAL answer on 2^999 + 1 is an IDENTITY — the found factors times the cofactor are the integer; no found
 * factor still divides the cofactor; and a wrong witness decodes nothing. The separation theorem above decides names
 * and left open what CODE is in the shell: the digit-root leak and the SHA-256 growth both passed it. The build now
 * writes a witness (.vitepress/dist/chunk-witness.json: for every client chunk, the source modules it was made from,
 * its byte length, and a 1024-bit seal — SHA-512 and SHA3-512 of the bytes as written), and these are decided on it.
 *
 *   I · THE ACCOUNT MULTIPLIES BACK. Every file of the shell S is named by the witness, and the bytes on disk have
 *       the length and the 1024-bit seal the build recorded. Both sides are computed now — the build's and the
 *       disk's — and nothing is remembered between builds.
 *
 *   II · THE SHELL CARRIES ONLY THE ROOT. H is the set of theorem homes (the module <home>/index.ts of every registry
 *       row); R ⊆ H is the homes that import no source module — the roots of the import graph, computed from the
 *       sources, not named. Then (modules of S) ∩ H ⊆ R. Measured when written: H has 57 members, R = {src/0}, and
 *       the intersection is {src/0} — the kernel every fold recomputes from, which is WHY the SHA-256 cutover moved
 *       the shell. Any other home entering the shell imports the kernel, is therefore not a root, and falsifies this:
 *       the digit-root leak, stated so that it can be false.
 *
 *   III · A WRONG WITNESS DECODES NOTHING. For every file of S, the same bytes with one bit flipped do not carry the
 *       recorded seal. The identity in I is sensitive at every shell file, not only true of it.
 *
 * WHAT IS STILL NOT GUARDED, and is not hidden: growth INSIDE the root. The shell is a function of src/0, and a larger
 * kernel is a larger shell — II says so in so many words and refuses nothing about it. A statement that the kernel
 * may not grow would be a remembered number again.
 */
export function assertTheShellIsAccountedFor(root: string, shellFiles: readonly string[]): void {
  const dist = join(root, '.vitepress', 'dist')
  const witnessFile = join(dist, 'chunk-witness.json')
  if (!existsSync(witnessFile)) throw new Error('the shell account is NOT MEASURED: .vitepress/dist/chunk-witness.json is absent — this dist was not written by a build that records its witness')
  const witness = JSON.parse(readFileSync(witnessFile, 'utf8')) as Record<string, { modules: string[]; bytes: number; seal: string }>
  const seal = (bytes: Buffer) => createHash('sha512').update(bytes).digest('hex') + createHash('sha3-512').update(bytes).digest('hex')
  const sealBits = 4 * seal(Buffer.alloc(0)).length

  // I — the account multiplies back
  const rel = (file: string) => file.slice(dist.length + 1)
  const unnamed = shellFiles.filter((file) => witness[rel(file)] === undefined)
  if (unnamed.length > 0) throw new Error(`I is FALSE: ${unnamed.length} shell file(s) are named by no witness entry — ${unnamed.map(rel).join(', ')}`)
  const read = shellFiles.map((file) => ({ file, bytes: readFileSync(file), entry: witness[rel(file)]! }))
  const drifted = read.filter((r) => r.bytes.length !== r.entry.bytes || seal(r.bytes) !== r.entry.seal)
  console.log(`  I   the account multiplies back: ${read.length} shell file(s), each with the length and the ${sealBits}-bit seal its build recorded — ${read.length - drifted.length}/${read.length}`)
  if (drifted.length > 0) throw new Error(`I is FALSE: ${drifted.map((r) => rel(r.file)).join(', ')} on disk is not the file the build sealed`)

  // II — the shell carries only the root
  const homes = [...new Set(THEOREM_ATOM_SEED.map((row) => (row as { home?: string }).home).filter((h): h is string => typeof h === 'string'))]
  const homeModule = (home: string) => `${home}/index.ts`
  const importsSource = (home: string) => {
    const file = join(root, homeModule(home))
    if (!existsSync(file)) return true // a home that cannot be read is not shown to be a root
    return [...readFileSync(file, 'utf8').matchAll(/^\s*(?:import|export)\b[^;'"]*?from\s*['"]([^'"]+)['"]/gm)].some((m) => m[1]!.startsWith('.') || m[1]!.startsWith('@src'))
  }
  const roots = homes.filter((home) => !importsSource(home))
  const shellModules = new Set(read.flatMap((r) => r.entry.modules))
  const homesInShell = homes.filter((home) => shellModules.has(homeModule(home)))
  const notRoots = homesInShell.filter((home) => !roots.includes(home))
  console.log(`  II  the shell carries only the root: ${homes.length} theorem home(s), ${roots.length} root(s) [${roots.join(', ')}], in the shell [${homesInShell.join(', ')}] across ${shellModules.size} module(s)`)
  if (homes.length === 0 || shellModules.size === 0) throw new Error(`II is NOT MEASURED: ${homes.length} home(s) read from the registry and ${shellModules.size} module(s) from the witness`)
  if (notRoots.length > 0) throw new Error(`II is FALSE: ${notRoots.join(', ')} prove(s) registered theorems, import(s) other source, and sit(s) in the shell every visitor loads`)

  // III — a wrong witness decodes nothing
  const insensitive = read.filter((r) => {
    if (r.bytes.length === 0) return true
    const flipped = Buffer.from(r.bytes)
    flipped[flipped.length >> 1] = flipped[flipped.length >> 1]! ^ 1
    return seal(flipped) === r.entry.seal
  })
  console.log(`  III a wrong witness decodes nothing: one bit flipped in each of ${read.length} shell file(s) — ${read.length - insensitive.length}/${read.length} no longer carry the recorded seal`)
  if (insensitive.length > 0) throw new Error(`III is FALSE: ${insensitive.map((r) => rel(r.file)).join(', ')} keeps its seal with a bit flipped (an empty file has no bit to flip and seals nothing)`)
  console.log('  ✓ the shell is accounted for: sealed as built, carrying no theorem home but the root')
}
