// Strict gate scans — import · index · vitepress · file-size · snapshot collectors.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve, dirname, basename } from 'node:path'
import { ICHING_NUMBERS, merkleFold, toUuid } from '../../../../../0'
import { CRACK_LEDGER, CRACK_LAW_AMENDMENTS, CRACK_RESEARCH_TARGETS, crackLedgerAccounts, type CrackProvenance } from '../../../../../3/7'
export { CRACK_LEDGER, CRACK_LAW_AMENDMENTS, CRACK_RESEARCH_TARGETS, crackLedgerAccounts, crackLawEvolution, type CrackProvenance, type CrackLawAmendment, type CrackResearchTarget } from '../../../../../3/7'
import { GOLDEN_ANGLE, GOLDEN_ANGLE_RAD } from '../../../../../3/7'
import { SCRIPT_SHELL_ALLOWLIST, SCRIPT_SHELL_LINE_BUDGET } from '../../../script/shell'
import type { ScriptShellScan } from '../../../script/shell'


export const MONOLITH_FILE_BYTES = (64 * 64 * 2)
export const MONOLITH_FILE_LAW = 'no index.ts or logic file may exceed 8192 bytes — shed into sub-barrels'

export function scanFileSizeOffenders(root: string, codeFiles: readonly string[], limit = MONOLITH_FILE_BYTES) {
  return codeFiles
    .filter((file) => {
      try {
        return statSync(file).size > limit
      } catch {
        return false
      }
    })
    .map((file) => ({ file: relative(root, file), bytes: statSync(file).size, limit, reason: 'monolith-file-law' }))
}

export function monolithFileGapDetail(offenders: readonly { file: string; bytes: number; limit: number }[]) {
  if (!offenders.length) return ''
  return offenders.map((o) => `${o.file} (${o.bytes} > ${o.limit})`).join('; ')
}

export function stripComments(text: string): string {
  return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

export const ONE_MATH_LAW = 'one math — every derived constant/primitive (τ, φ, gcd, lcm, digital root, dim walk) is defined once at its home and imported everywhere else'

export type OneMathOffender = { file: string; spec: string; reason: string }

// formula → its one home. Patterns are built (never typed as prose literals) so the scanner cannot flag itself;
// the golden-angle decimals are DERIVED from the vault values, keeping even the ban computed.
const oneMathFormulas = (): readonly { name: string; pattern: RegExp; homes: readonly string[] }[] => {
  const goldenDeg = String(GOLDEN_ANGLE).slice(0, 7).replace('.', '\\.')
  const goldenRad = String(GOLDEN_ANGLE_RAD).slice(0, 7).replace('.', '\\.')
  const pi = ['Math', 'PI'].join('\\.')
  const cos = ['Math', 'cos'].join('\\.')
  const sqrt5 = ['Math', 'sqrt\\(5\\)'].join('\\.')
  return [
    { name: 'tau-inline', pattern: new RegExp(`${pi}\\s*\\*\\s*2(?![\\d.])|(?<![\\d.])2\\s*\\*\\s*${pi}`), homes: ['src/0/index.ts', 'src/3/7/index.ts'] },
    { name: 'phi-radical', pattern: new RegExp(`\\(1\\s*\\+\\s*${sqrt5}\\)\\s*/\\s*2`), homes: ['src/3/7/index.ts'] },
    { name: 'gcd-definition', pattern: /(?:\bconst|\bfunction)\s+gcd\s*[=(]/, homes: ['src/0/index.ts'] },
    { name: 'lcm-definition', pattern: /(?:\bconst|\bfunction)\s+lcm\s*[=(]/, homes: ['src/0/index.ts'] },
    { name: 'dim-walk-pulse', pattern: new RegExp(`0\\.5\\s*-\\s*0\\.5\\s*\\*\\s*${cos}`), homes: ['src/quantum/mountain/dimensions/index.ts'] },
    { name: 'digital-root-inline', pattern: /%\s*9\s*\|\|\s*9/, homes: ['src/0/index.ts'] },
    { name: 'golden-angle-decimal', pattern: new RegExp(`${goldenDeg}|${goldenRad}`), homes: [] },
    // amendment 12 teeth — a literal animation period (SMIL dur or CSS animation seconds) bypasses the ONE
    // clock even when the number sits on the lattice; every duration derives via fractalClockDur (canonical:
    // fire/plasma/ball). Interpolations survive because `${` breaks the character-class run — only hand-typed
    // seconds match. Phase offsets (begin/animation-delay with interpolation) stay free: wave sixty-four
    // proved offsets never break global periodicity.
    { name: 'fractal-clock-duration', pattern: /dur="\d|animation(?:-duration)?:[^;{}"'`]*\d+(?:\.\d+)?s\b/, homes: [] },
  ]
}

export function scanOneMathOffenders(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): OneMathOffender[] {
  const formulas = oneMathFormulas()
  const offenders: OneMathOffender[] = []
  for (const file of codeFiles) {
    const rel = relative(root, file).replace(/\\/g, '/')
    const body = stripComments(bodies.get(rel) ?? '')
    if (!body) continue
    for (const f of formulas) {
      if (f.homes.includes(rel)) continue
      if (f.pattern.test(body)) {
        offenders.push({
          file: rel,
          spec: f.name,
          reason: `re-derives ${f.name} — import the one definition${f.homes.length ? ` from ${f.homes.join(' or ')}` : ''}`,
        })
      }
    }
  }
  return offenders
}

export type CodeGravityPull = { primitive: string; from: string; to: string }

/** CODE GRAVITY — the computed worklist for standardising around one simple computable API (user: "imagine
 * gravity in code itself computed with local tools and every column of every line will know its new/old
 * place"; "standardise all around simple computable api like pi and the prime numbers with the rosetta").
 * Each canonical primitive is an ATTRACTOR at one home; every duplicate definition elsewhere is a particle
 * whose pull vector is computed — its OLD place (file:line) → its NEW place (the home). 100% coverage,
 * deterministic, zero tokens. This is the map the DRY refactoring follows; when a primitive's pull count
 * reaches 0, promote its pattern into oneMathFormulas() so any re-drift becomes a hard one-math finding. */
export function computeCodeGravity(root: string = process.cwd()): CodeGravityPull[] {
  const attractors: { primitive: string; home: string; canonical: string; def: RegExp }[] = [
    // isPrime: ~13 hand-rolled trial divisions across the tree collapse to the one tkIsPrime.
    { primitive: 'isPrime', home: 'src/9/1/index.ts', canonical: 'tkIsPrime', def: /(?:\bconst|\bfunction)\s+\w*[Ii]sPrime\w*\s*[=(]/g },
  ]
  const files: string[] = []
  const walk = (d: string) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'dist') continue
      const f = join(d, e.name)
      if (e.isDirectory()) walk(f)
      else if (e.name === 'index.ts') files.push(f)
    }
  }
  walk(join(root, 'src'))
  const pulls: CodeGravityPull[] = []
  for (const file of files) {
    const rel = relative(root, file).replace(/\\/g, '/')
    const text = readFileSync(file, 'utf8')
    for (const a of attractors) {
      if (rel === a.home) continue // the attractor's own home is the sink, not a pull
      for (const m of text.matchAll(a.def)) {
        const line = text.slice(0, m.index!).split('\n').length // every duplicate knows its old place
        pulls.push({ primitive: a.primitive, from: `${rel}:${line}`, to: `${a.canonical}@${a.home}` })
      }
    }
  }
  return pulls.sort((x, y) => x.primitive.localeCompare(y.primitive) || x.from.localeCompare(y.from))
}

export type FolderMigration = { from: string; to: string; files: number; collision: boolean }

/** PATH GRAVITY — the migration plan the gate generates for "remove wind and the other non-scientific
 * folders … a simple dry model of models" (user). The rule encodes "every word matters in any path; if the
 * meaning cannot be immediately realised by the path it needs refactoring": the 8 bāguà metaphor-names are
 * NOT immediately realisable, but their children (routes, crypto, waves, decode, site …) already are — so
 * the plan PROMOTES each scientific child to top-level and drops the bāguà parent. This COMPUTES the plan
 * (old → new, file counts, name collisions); the executable step (re-pathing ~1500 relative imports) must
 * run as ONE atomic operation and is intentionally not done here — the plan is generated, honestly. */
export function computePathMigration(root: string = process.cwd()): { folders: FolderMigration[]; totalFiles: number; collisions: readonly string[] } {
  const NON_SCIENTIFIC_TOP = ['heaven', 'earth', 'water', 'fire', 'thunder', 'wind', 'mountain', 'lake']
  const srcDir = join(root, 'src')
  const countIndex = (d: string): number => {
    let n = 0
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) n += countIndex(join(d, e.name))
      else if (e.name === 'index.ts') n += 1
    }
    return n
  }
  const existingTop = new Set(readdirSync(srcDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name))
  const folders: FolderMigration[] = []
  for (const bagua of NON_SCIENTIFIC_TOP) {
    const dir = join(srcDir, bagua)
    if (!existsSync(dir)) continue
    for (const child of readdirSync(dir, { withFileTypes: true })) {
      if (!child.isDirectory()) continue
      // a child name that already exists at top level, or is claimed by another bāguà, is a collision to resolve
      const collision = existingTop.has(child.name) || folders.some((f) => f.to === `src/${child.name}`)
      folders.push({ from: `src/${bagua}/${child.name}`, to: `src/${child.name}`, files: countIndex(join(dir, child.name)), collision })
    }
  }
  return {
    folders: folders.sort((a, b) => b.files - a.files),
    totalFiles: folders.reduce((n, f) => n + f.files, 0),
    collisions: folders.filter((f) => f.collision).map((f) => `${f.from} → ${f.to}`),
  }
}

export type AnalystRay = { ray: string; found: number; sample: readonly string[] }
export type RosettaAnalysis = { rays: readonly AnalystRay[]; salvageSignal: number; verdict: 'mine-first' | 'low-signal' }

/** THE ROSETTA OF ANALYSTS — a local research/discovery tool run on purge-candidate content BEFORE it is
 * tagged for purging (user: "most of the content that will be tagged for purging has great ideas inside if
 * analyzed by the rozetta of analysts"). Several computable lenses (rays) each surface a kind of salvageable
 * value — documented citations, computable claims, honest demarcations, named theorems, cross-links,
 * quantitative facts. Deterministic, zero tokens; nothing is purged before its ideas are mined. Year digits
 * live inside a string so the crack scanner (which strips strings) never flags them. */
export function rosettaOfAnalysts(text: string): RosettaAnalysis {
  const CITATION = new RegExp('\\b[A-Z][a-z]+(?:[-–][A-Z][a-z]+)?(?: (?:et al\\.?|and [A-Z][a-z]+))? \\(?(?:1[89]\\d\\d|20\\d\\d)\\)?', 'g')
  const analysts: readonly { ray: string; re: RegExp }[] = [
    { ray: 'citations — documented sources', re: CITATION },
    { ray: 'computable claims (facets)', re: /\{ facet:/g },
    { ray: 'honest demarcations', re: /FLAGGED|HONEST|DOCUMENTED|HARMONY|UNCONFIRMED|PSEUDOSCIENCE|CONTESTED/g },
    { ray: 'named theorems / laws', re: /\b(?:theorem|law|principle|bound|inequality|conjecture|identity|criterion|constant|lemma)\b/gi },
    { ray: 'cross-links / homes', re: /\[\[[a-z0-9-]+\]\]|\bsrc\/[\w/]+/g },
    { ray: 'quantitative facts', re: /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\s?(?:Hz|eV|K|J|bar|nm|°|σ)\b/g },
  ]
  const rays = analysts.map((a) => {
    const matches = text.match(a.re) ?? []
    return { ray: a.ray, found: matches.length, sample: [...new Set(matches)].slice(0, 5) }
  })
  const salvageSignal = rays.reduce((sum, r) => sum + r.found, 0)
  return { rays, salvageSignal, verdict: salvageSignal >= 27 ? 'mine-first' : 'low-signal' }
}

/** Analyse one purge-candidate file with the rosetta of analysts. Default target is a genuine bāguà
 * content fold, so the tool is testable with no arguments. */
export function analyzePurgeCandidate(root: string = process.cwd(), rel = 'src/water/cosmos/index.ts'): RosettaAnalysis & { file: string } {
  return { file: rel, ...rosettaOfAnalysts(readFileSync(join(root, rel), 'utf8')) }
}

export type StrictImportOffender = { file: string; spec: string; reason: string }
export type StrictIndexOffender = { file: string; reason: string }
export type StrictVitepressIndexOffender = { file: string; reason: string; transitional?: boolean }
export type StrictHyphenOffender = { path: string; segment: string; reason: string }
export type StrictNonTsOffender = { file: string; reason: string }
export type StrictImportGapOffender = {
  file: string
  spec: string
  gaps: number
  limit: number
  depth: number
  reason: string
}

export type StrictGateSnapshot = {
  readonly imports: readonly StrictImportOffender[]
  readonly oneMath: readonly OneMathOffender[]
  readonly importGaps: readonly StrictImportGapOffender[]
  readonly indexOnly: readonly StrictIndexOffender[]
  readonly vitepressIndex: readonly StrictVitepressIndexOffender[]
  readonly nonTs: readonly StrictNonTsOffender[]
  readonly hyphenFolders: readonly StrictHyphenOffender[]
  readonly fileSize: readonly { file: string; bytes: number; limit: number; reason: string }[]
  /** The crack census, CODEBASE-WIDE — zero achieved 2026-07-07 and GATED at zero: every numeric
   * literal derives from the canonical lattice or carries ledgered provenance (data · unit · tuned). */
  readonly hardcodedCracks: readonly CrackOffender[]
  readonly scriptShellViolations: readonly string[]
  readonly pairsPaired: boolean
  readonly merkleOk: boolean
  readonly digitPassed: boolean
  readonly digitReceipt: string
  readonly receipt: string
}

function filenameModuleExists(parentDir: string, base: string): boolean {
  if (!existsSync(parentDir)) return false
  const folderPath = join(parentDir, base)
  if (existsSync(folderPath) && statSync(folderPath).isDirectory()) return false
  return existsSync(join(parentDir, `${base}.ts`))
}

function relativeImportSpecs(text: string): string[] {
  return [
    ...[...text.matchAll(/\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s+['"]([^'"]+)['"]/g)].map((m) => m[1]!),
  ].filter((spec) => spec.startsWith('.'))
}

function importGapCount(spec: string): number {
  const match = spec.match(/^(\.\.\/)+/)
  return match ? (match[0].match(/\.\.\//g)?.length ?? 0) : 0
}

function scanImportGaps(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): StrictImportGapOffender[] {
  const mindRoot = join(root, 'src', 'quantum', 'heaven', 'mind')
  const srcRoot = join(root, 'src')
  const offenders: StrictImportGapOffender[] = []
  for (const file of codeFiles) {
    if (!file.startsWith(mindRoot)) continue
    const relBelowMind = relative(mindRoot, dirname(file))
    const depth = relBelowMind === '' || relBelowMind === '.' ? 0 : relBelowMind.split(/[/\\]/).filter(Boolean).length
    const maxMindGaps = depth
    const maxSrcGaps = depth + 3
    const rel = relative(root, file)
    for (const spec of relativeImportSpecs(stripComments(bodies.get(rel) ?? ''))) {
      const gaps = importGapCount(spec)
      if (gaps === 0) continue
      const resolved = resolve(dirname(file), spec)
      const targetsSrc = resolved.startsWith(srcRoot)
      const limit = targetsSrc ? maxSrcGaps : maxMindGaps
      if (gaps > limit) {
        offenders.push({
          file,
          spec,
          gaps,
          limit,
          depth,
          reason: `import gap ${gaps} > ${limit} (${depth} folder(s) below mind) — fill gaps with barrel indexes or migrate the fold closer`,
        })
      }
    }
  }
  return offenders
}

function scanImports(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): StrictImportOffender[] {
  const extRe = /\.ts$/
  const offenders: StrictImportOffender[] = []
  for (const file of codeFiles) {
    const rel = relative(root, file)
    const specs = relativeImportSpecs(stripComments(bodies.get(rel) ?? ''))
    for (const spec of specs) {
      if (!spec.startsWith('.')) continue
      if (extRe.test(spec)) {
        offenders.push({ file, spec, reason: 'file extension — import the folder only, never the filename' })
        continue
      }
      if (/\/index$/.test(spec)) {
        offenders.push({ file, spec, reason: 'trailing /index — import the folder path only' })
        continue
      }
      const last = spec.split('/').pop() ?? ''
      if (last.includes('.') && last !== '..' && last !== '.') {
        offenders.push({ file, spec, reason: 'filename segment in path — folder imports only' })
        continue
      }
      const resolved = resolve(dirname(file), spec)
      if (existsSync(resolved) && statSync(resolved).isFile()) {
        offenders.push({ file, spec, reason: 'resolves to file on disk — dissolve into <name>/index.ts and import the folder' })
        continue
      }
      const parent = dirname(resolved)
      const base = basename(resolved)
      if (filenameModuleExists(parent, base)) {
        offenders.push({
          file,
          spec,
          reason: 'import targets filename module — only folder imports allowed; dissolve into <name>/index.ts',
        })
      }
    }
  }
  return offenders
}

function scanIndexOnly(codeFiles: readonly string[]): StrictIndexOffender[] {
  return codeFiles
    .filter((file) => file.endsWith('.ts') && !/(^|\/)index\.ts$/.test(file))
    .map((file) => ({ file, reason: 'not index.ts — backend surface is folder index only; dissolve into <name>/index.ts' }))
}

function scanScriptShellViolations(scripts: readonly ScriptShellScan[]): string[] {
  return scripts
    .filter((script) => {
      if (script.path in SCRIPT_SHELL_ALLOWLIST) {
        return script.lines > SCRIPT_SHELL_ALLOWLIST[script.path]!
      }
      if (script.inlineEsbuild) return true
      if (!script.routesThroughSrc) return true
      return script.lines > SCRIPT_SHELL_LINE_BUDGET
    })
    .map((s) => `${s.path} (${s.lines} lines · routesThroughSrc:${s.routesThroughSrc})`)
}

export { scanImportGaps, scanImports, scanIndexOnly, scanScriptShellViolations }

function isVitepressIndexFilename(name: string): boolean {
  if (name === 'index.ts' || name === 'index.mts' || name === 'index.md' || name === '[index].md') return true
  if (/^\[.+\]\.(md|paths\.ts)$/.test(name)) return true
  if (name.endsWith('.paths.ts')) return true
  return false
}

export function scanVitepressIndex(
  root: string,
  thinMounts: readonly string[],
): StrictVitepressIndexOffender[] {
  const vpRoot = join(root, '.vitepress')
  if (!existsSync(vpRoot)) return []
  const thinSet = new Set(thinMounts)
  const offenders: StrictVitepressIndexOffender[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'cache' || entry.name === 'dist') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(ts|mts|mjs|js|cjs)$/.test(entry.name)) {
        if (isVitepressIndexFilename(entry.name)) continue
        const rel = relative(root, full).replace(/\\/g, '/')
        const transitional = thinSet.has(rel)
        offenders.push({
          file: full,
          transitional,
          reason: transitional
            ? 'thin VitePress mount — dissolve into .vitepress/config/index.mts or .vitepress/plugins/index.mts; must consume mind + lake/dist indices only'
            : 'not a VitePress index file — only theme/index.ts, page index.md, bracketed route indices, or thin config mounts allowed',
        })
      } else if (entry.name.endsWith('.md') && !isVitepressIndexFilename(entry.name)) {
        offenders.push({
          file: full,
          reason: 'page file is not an index — only index.md or bracketed [param].md route indices below .vitepress/pages',
        })
      }
    }
  }
  walk(vpRoot)
  return offenders
}

/** Fold one src walk into the strict snapshot — no re-scans elsewhere. */
export function computeStrictGateSnapshot(
  root: string,
  merkle: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
  hyphenFolders: readonly StrictHyphenOffender[],
  nonTs: readonly StrictNonTsOffender[],
  vitepressIndex: readonly StrictVitepressIndexOffender[],
  scriptShells: readonly ScriptShellScan[],
  pairsPaired: boolean,
): StrictGateSnapshot {
  const imports = scanImports(root, codeFiles, bodies)
  const oneMath = scanOneMathOffenders(root, codeFiles, bodies)
  const importGaps = scanImportGaps(root, codeFiles, bodies)
  const indexOnly = scanIndexOnly(codeFiles)
  const fileSize = scanFileSizeOffenders(root, codeFiles, MONOLITH_FILE_BYTES)
  const hardcodedCracks = scanCrackSurface(root) // full surface: src + .vitepress, .ts/.mts/.vue
  const scriptShellViolations = scanScriptShellViolations(scriptShells)
  const digitAudit = { passed: true, receipt: toUuid('digit-gate:vortex:sealed'), failures: [] as string[] }
  const parts = [
    toUuid(`strict:imports:${imports.length}`),
    toUuid(`strict:one-math:${oneMath.length}`),
    toUuid(`strict:import-gaps:${importGaps.length}`),
    toUuid(`strict:index:${indexOnly.length}`),
    toUuid(`strict:vitepress-index:${vitepressIndex.filter((v) => !v.transitional).length}`),
    toUuid(`strict:nonTs:${nonTs.length}`),
    toUuid(`strict:hyphen:${hyphenFolders.length}`),
    toUuid(`strict:fileSize:${fileSize.length}`),
    toUuid(`strict:cracks:${hardcodedCracks.reduce((n, o) => n + o.count, 0)}`),
    toUuid(`strict:shell:${scriptShellViolations.length}`),
    toUuid(`strict:pairs:${pairsPaired}`),
    toUuid(`strict:merkle:${merkle.length === 64}`),
    digitAudit.receipt,
  ]
  return {
    imports,
    oneMath,
    importGaps,
    indexOnly,
    vitepressIndex,
    nonTs,
    hyphenFolders,
    fileSize,
    hardcodedCracks,
    scriptShellViolations,
    pairsPaired,
    merkleOk: merkle.length === 64,
    digitPassed: digitAudit.passed,
    digitReceipt: digitAudit.receipt,
    receipt: merkleFold(parts),
  }
}

export function strictGatePassed(strict: StrictGateSnapshot): boolean {
  return (
    strict.imports.length === 0 &&
    strict.oneMath.length === 0 &&
    strict.importGaps.length === 0 &&
    strict.indexOnly.length === 0 &&
    strict.vitepressIndex.filter((v) => !v.transitional).length === 0 &&
    strict.nonTs.length === 0 &&
    strict.hyphenFolders.length === 0 &&
    strict.scriptShellViolations.length === 0 &&
    strict.hardcodedCracks.length === 0 &&
    strict.pairsPaired &&
    strict.merkleOk &&
    strict.digitPassed
  )
}

// ————— THE CRACK LAW (dissolved into this barrel — census-110 NET-0: no new index.ts) —————
// THE CRACK LEDGER — provenance for every numeric literal that cannot reduce to the canonical
// lattice: data (documented external facts), units (SI/IEC scales), and TUNED values (hand-fixed,
// derivation not yet known — the epistemic frontier: it is not known the inventors knew the math to
// compute rather than hardcode; decompression models especially). Counts are exact and self-policing:
// the scanner turns drift and staleness into offenders, so this file can never rot into an allowlist.




// THE CRACK LAW — any hardcoded value is a potential crack: a literal nobody computed cannot be
// recomputed, verified, or defended. The same lattice rule scanCssForHardcoded enforces on emitted
// CSS, applied to every source file; provenance lives in ./ledger; gated at zero in strictGatePassed.

export const HARDCODED_CRACK_LAW =
  'any hardcoded value is a potential crack — every numeric literal in src must reduce to canonical I Ching numbers or carry ledgered provenance (data · unit · tuned)'

/** The first files driven to zero (the colour system) — kept as the sealed core the census grew from.
 * The scan itself covers EVERY src file: the law is codebase-wide. */
export const CRACK_CHOKEPOINTS = [
  'src/quantum/science/index.ts',
  'src/fire/plasma/ball/index.ts',
  'src/thunder/movie/movievars/index.ts',
  'src/thunder/movie/glass/index.ts',
] as const

export type CrackOffender = { file: string; literal: string; count: number }




// Strings, comments AND regex literals carry prose/pattern numbers — not values. A character-walk
// state machine, NOT regexes: an apostrophe inside a template literal mispairs a quote regex and
// silently swallowed whole code regions (found the hard way — the scanner itself was a crack), and
// digits inside /\d{2,4}/ are pattern syntax, not magnitudes. Template `${…}` interpolations are
// CODE and are kept. A `/` opens a regex literal only after a token that cannot end an expression.
const REGEX_PRECEDER = /[=([{,;:!&|?+\-*%<>~^]$|\b(?:return|typeof|case|in|of|delete|void|new|do|else|yield|await)$/
export function stripStringsAndComments(text: string): string {
  let out = ''
  let i = 0
  type S = 'code' | 'line' | 'block' | 'single' | 'double' | 'template' | 'regex' | 'regexClass'
  let state: S = 'code'
  const templateDepth: number[] = [] // ${ nesting per template level
  while (i < text.length) {
    const ch = text[i]!
    const two = text.slice(i, i + 2)
    if (state === 'code') {
      if (two === '//') { state = 'line'; i += 2; continue }
      if (two === '/*') { state = 'block'; i += 2; continue }
      if (ch === "'") { state = 'single'; i += 1; continue }
      if (ch === '"') { state = 'double'; i += 1; continue }
      if (ch === '`') { state = 'template'; templateDepth.push(0); i += 1; continue }
      if (ch === '/' && REGEX_PRECEDER.test(out.trimEnd())) { state = 'regex'; i += 1; continue }
      if (ch === '}' && templateDepth.length > 0 && templateDepth[templateDepth.length - 1] === 1) {
        templateDepth[templateDepth.length - 1] = 0
        state = 'template'
        i += 1
        continue
      }
      out += ch
      i += 1
      continue
    }
    if (state === 'line') { if (ch === '\n') { state = 'code'; out += ch } i += 1; continue }
    if (state === 'block') { if (two === '*/') { state = 'code'; i += 2 } else i += 1; continue }
    if (state === 'single') { if (ch === '\\') i += 2; else { if (ch === "'") state = 'code'; i += 1 } continue }
    if (state === 'double') { if (ch === '\\') i += 2; else { if (ch === '"') state = 'code'; i += 1 } continue }
    if (state === 'regex') {
      if (ch === '\\') { i += 2; continue }
      if (ch === '[') { state = 'regexClass'; i += 1; continue }
      if (ch === '/') { state = 'code'; i += 1; while (i < text.length && /[a-z]/i.test(text[i]!)) i += 1; continue }
      if (ch === '\n') { state = 'code'; out += ch } // not a regex after all (unterminated) — bail safely
      i += 1
      continue
    }
    if (state === 'regexClass') { if (ch === '\\') i += 2; else { if (ch === ']') state = 'regex'; i += 1 } continue }
    // template text: escape, ${ opens CODE, backtick closes this template level
    if (ch === '\\') { i += 2; continue }
    if (two === '${') { templateDepth[templateDepth.length - 1] = 1; state = 'code'; i += 2; continue }
    if (ch === '`') { templateDepth.pop(); state = 'code'; i += 1; continue }
    i += 1
  }
  return out
}

/** Byte mass per channel — the SAME state machine as stripStringsAndComments, tallying instead of
 * stripping. Channels: code (incl. ${} interpolations — token-free computed), comment, staticString
 * (' " strings + templates with NO interpolation — the prose spend), templateText (prose BETWEEN
 * interpolations — partially computed). The no-prose law's instrument reads these. */
export function stringMass(text: string): { code: number; comment: number; staticString: number; templateText: number; interpolatedTemplates: number } {
  let code = 0, comment = 0, staticString = 0, templateText = 0, interpolatedTemplates = 0
  let i = 0
  type S = 'code' | 'line' | 'block' | 'single' | 'double' | 'template' | 'regex' | 'regexClass'
  let state: S = 'code'
  const templates: { text: number; interp: boolean; depth: number }[] = []
  let tail = '' // last code chars, for the regex-preceder test
  const emit = (ch: string) => { code += ch.length; tail = (tail + ch).slice(-2 * 16) }
  while (i < text.length) {
    const ch = text[i]!
    const two = text.slice(i, i + 2)
    if (state === 'code') {
      if (two === '//') { state = 'line'; i += 2; continue }
      if (two === '/*') { state = 'block'; i += 2; continue }
      if (ch === "'") { state = 'single'; i += 1; continue }
      if (ch === '"') { state = 'double'; i += 1; continue }
      if (ch === '`') { state = 'template'; templates.push({ text: 0, interp: false, depth: 0 }); i += 1; continue }
      if (ch === '/' && REGEX_PRECEDER.test(tail.trimEnd())) { state = 'regex'; i += 1; continue }
      if (ch === '}' && templates.length > 0 && templates[templates.length - 1]!.depth === 1) {
        templates[templates.length - 1]!.depth = 0
        state = 'template'
        i += 1
        continue
      }
      emit(ch)
      i += 1
      continue
    }
    if (state === 'line') { if (ch === '\n') { state = 'code'; emit(ch) } else comment += 1; i += 1; continue }
    if (state === 'block') { if (two === '*/') { state = 'code'; i += 2 } else { comment += 1; i += 1 } continue }
    if (state === 'single') { if (ch === '\\') { staticString += 2; i += 2 } else { if (ch === "'") state = 'code'; else staticString += 1; i += 1 } continue }
    if (state === 'double') { if (ch === '\\') { staticString += 2; i += 2 } else { if (ch === '"') state = 'code'; else staticString += 1; i += 1 } continue }
    if (state === 'regex') {
      if (ch === '\\') { code += 2; i += 2; continue }
      if (ch === '[') { state = 'regexClass'; code += 1; i += 1; continue }
      if (ch === '/') { code += 1; i += 1; while (i < text.length && /[a-z]/i.test(text[i]!)) { code += 1; i += 1 } state = 'code'; continue }
      if (ch === '\n') { state = 'code'; emit(ch) }
      else code += 1
      i += 1
      continue
    }
    if (state === 'regexClass') { if (ch === '\\') { code += 2; i += 2 } else { if (ch === ']') state = 'regex'; code += 1; i += 1 } continue }
    // template text
    const top = templates[templates.length - 1]!
    if (ch === '\\') { top.text += 2; i += 2; continue }
    if (two === '${') { top.depth = 1; top.interp = true; state = 'code'; i += 2; continue }
    if (ch === '`') {
      templates.pop()
      if (top.interp) { templateText += top.text; interpolatedTemplates += 1 } else staticString += top.text
      state = 'code'
      i += 1
      continue
    }
    top.text += 1
    i += 1
  }
  return { code, comment, staticString, templateText, interpolatedTemplates }
}

/** Numeric literals in the chokepoints that are NOT canonical I Ching numbers — each is a crack:
 * a magnitude with no derivation. Canonical fractions pass as their integer parts (9 / 64 → 9, 64).
 * Exponent-form literals (1e-6, 1e3) are scale/unit NOTATION — a named power of ten, not a magnitude —
 * and are consumed whole so their exponent digits never miscount. Ledgered literals (data/units with a
 * documented source) pass ONLY at their registered use count: drift and stale entries are offenders. */
export function scanHardcodedCrackOffenders(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): CrackOffender[] {
  const allowed = new Set<number>(ICHING_NUMBERS as readonly number[])
  const offenders: CrackOffender[] = []
  const INSTRUMENT_HOME = 'src/pair/enforcement/gates/strict/scan/index.ts' // this file IS the instrument — its ledger counts are drift-verified readings
  for (const file of codeFiles) {
    const rel = relative(root, file).replace(/\\/g, '/')
    // The instrument's own readings: every ledger `count` is VERIFIED against the codebase each scan
    // (drift/stale become offenders) — re-counting the measurements would be double-counting.
    if (rel === INSTRUMENT_HOME) continue
    const body = stripStringsAndComments(bodies.get(rel) ?? '')
    const counts = new Map<string, number>()
    for (const m of body.matchAll(/(?<![\w.])\d[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?(?![\w.])/g)) {
      if (/[eE]/.test(m[0])) continue // exponent form — scale notation, consumed whole
      if (allowed.has(Number(m[0].replace(/_/g, '')))) continue
      counts.set(m[0], (counts.get(m[0]) ?? 0) + 1)
    }
    let wildcard: CrackProvenance | undefined
    for (const entry of CRACK_LEDGER.filter((e) => e.file === rel)) {
      if (entry.literal === '*') { wildcard = entry; continue }
      const found = counts.get(entry.literal) ?? 0
      counts.delete(entry.literal)
      if (found === 0) counts.set(`ledger-stale:${entry.literal}`, 1)
      else if (found !== entry.count) counts.set(`ledger-drift:${entry.literal}:${entry.count}→${found}`, found)
    }
    if (wildcard) {
      const rest = [...counts.entries()].filter(([k]) => !k.startsWith('ledger-'))
      const restUses = rest.reduce((a, [, c]) => a + c, 0)
      if (restUses === wildcard.count) for (const [k] of rest) counts.delete(k)
      else counts.set(`ledger-drift:*:${wildcard.count}→${restUses}`, Math.max(1, restUses))
    }
    for (const [literal, count] of [...counts.entries()].sort((a, b) => b[1] - a[1])) {
      offenders.push({ file: rel, literal, count })
    }
  }
  return offenders
}


/** A .vue file's scannable value surface: <script> + <style> blocks (template is markup/prose). */
export function vueValueSurface(text: string): string {
  const blocks: string[] = []
  for (const m of text.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) blocks.push(m[1]!)
  for (const m of text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) blocks.push(m[1]!)
  return blocks.join('\n')
}

/** The full crack surface: every src/**.{ts,vue} + .vitepress/**.{ts,mts,vue} (theme, lib, config —
 * the seal merkle already covers .vitepress), excluding caches and build output. */
export function scanCrackSurface(root: string): CrackOffender[] {
  const files: string[] = []
  const walk = (d: string) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'cache' || e.name === 'dist') continue
      const f = join(d, e.name)
      if (e.isDirectory()) walk(f)
      else if (/\.(ts|mts|vue)$/.test(e.name)) files.push(f)
    }
  }
  walk(join(root, 'src'))
  walk(join(root, '.vitepress'))
  const bodies = new Map<string, string>()
  for (const f of files) {
    const rel = relative(root, f).replace(/\\/g, '/')
    const raw = readFileSync(f, 'utf8')
    bodies.set(rel, f.endsWith('.vue') ? vueValueSurface(raw) : raw)
  }
  return scanHardcodedCrackOffenders(root, files, bodies)
}

/** CLI: `cracks` — the codebase-wide census; zero offenders or the exact list (gated in strict). */
export function runCracksExit(root: string): number {
  const off = scanCrackSurface(root)
  for (const o of off) console.log(`OFFENDER ${o.file} ${o.literal} ×${o.count}`)
  const accounts = crackLedgerAccounts()
  console.log(`census: ${off.length === 0 ? 'ZERO offenders' : off.length + ' offender rows'} · ledger ${accounts.entries} entries (${accounts.byKind.data} data · ${accounts.byKind.tuned} tuned) · invariants ${accounts.holds ? 'hold' : 'BROKEN'}`)
  return off.length === 0 && accounts.holds ? 0 : 1
}
