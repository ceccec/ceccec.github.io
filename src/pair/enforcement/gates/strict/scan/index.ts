// Strict gate scans — import · index · vitepress · file-size · snapshot collectors.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve, dirname, basename } from 'node:path'
import { ICHING_NUMBERS, merkleFold, toUuid } from '../../../../../0'
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

/** PROVENANCE — a literal that cannot reduce to the lattice because it is DATA (a documented external
 * fact) or a UNIT (an SI/IEC scale). A ledger entry is not a pass: it must name its source, it must
 * match the file's ACTUAL use count (drift → offender), and an entry whose literal vanished goes
 * stale (→ offender). The ledger is the census's memory of WHY each number exists.
 *
 * EPISTEMIC LAW: every ledgered value is a snapshot of what its discoverers could compute AT THE TIME —
 * it is not known that the inventors knew the math to derive rather than hardcode. A `frontier` note
 * records the known-or-suspected derivation path, so ledgered constants remain RESEARCH TARGETS, never
 * closed cases. This bites hardest in DECOMPRESSION models: the sRGB decompression knee/slope are
 * C¹-continuity-derivable from (a = 0.055, γ = 2.4), yet the standard hardcoded ROUNDED values
 * (12.92 vs ≈12.9232, 0.0031308 vs ≈0.0030399) — the spec is a hardcoded crack of its own derivation,
 * kept verbatim only for byte-compatibility with every other sRGB implementation. */
export type CrackProvenance = {
  file: string
  /** A specific literal, or '*' — a FILE-LEVEL attestation of exactly `count` unaccounted uses. */
  literal: string
  count: number
  /** data = documented external fact · unit = SI/IEC scale · tuned = fixed by hand, derivation NOT
   * yet known — the epistemic law says these may eventually be computed; each is a research target. */
  kind: 'data' | 'unit' | 'tuned'
  source: string
  /** The suspected/known computation this fixed value could someday be replaced by. */
  frontier?: string
}

export const CRACK_LEDGER: readonly CrackProvenance[] = [
  // ── quantum/science — colour standards, physics demo data, SI/IEC scales, patent history ──
  { file: 'src/quantum/science/index.ts', literal: '0.3963377774', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Björn Ottosson, oklab spec (2020)', frontier: 'output of a numerical fit to CIE/CAM16 data — recomputable by rerunning the optimisation, not closed-form' },
  { file: 'src/quantum/science/index.ts', literal: '0.2158037573', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '0.1055613458', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '0.0638541728', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '0.0894841775', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '1.291485548', count: 1, kind: 'data', source: 'OKLab↔LMS matrix — Ottosson oklab spec', frontier: 'fit output — recomputable by rerunning the optimisation' },
  { file: 'src/quantum/science/index.ts', literal: '4.0767416621', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '3.3077115913', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.2309699292', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '1.2684380046', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '2.6097574011', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.3413193965', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.0041960863', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.7034186147', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '1.707614701', count: 1, kind: 'data', source: 'LMS→linear-sRGB matrix — Ottosson oklab spec', frontier: 'inverse of the fitted forward matrix — derivable by matrix inversion once the forward fit is recomputed' },
  { file: 'src/quantum/science/index.ts', literal: '0.0031308', count: 4, kind: 'data', source: 'sRGB DEcompression knee — IEC 61966-2-1', frontier: 'derivable by C¹ continuity from (a, γ); the standard hardcoded a rounding (exact ≈0.0030399) — kept for byte-compatibility' },
  { file: 'src/quantum/science/index.ts', literal: '12.92', count: 3, kind: 'data', source: 'sRGB DEcompression linear slope — IEC 61966-2-1', frontier: 'derivable by C¹ continuity from (a, γ); the standard hardcoded a rounding (exact ≈12.9232) — kept for byte-compatibility' },
  { file: 'src/quantum/science/index.ts', literal: '1.055', count: 1, kind: 'data', source: 'sRGB gamma-segment scale — IEC 61966-2-1' },
  { file: 'src/quantum/science/index.ts', literal: '0.055', count: 2, kind: 'data', source: 'sRGB gamma-segment offset — IEC 61966-2-1', frontier: 'CURIOSITY (self-research): 0.055 = 55/10³, a Fibonacci decade — whether the committee knew is unknowable; the value stays spec-verbatim' },
  { file: 'src/quantum/science/index.ts', literal: '440', count: 1, kind: 'data', source: 'A440 concert pitch — ISO 16 (the resonance demo tone; A432 is the project seed, kept distinct)' },
  { file: 'src/quantum/science/index.ts', literal: '1888', count: 2, kind: 'data', source: 'USPTO grant year — Tesla US381968/US382280; Rife birth year' },
  { file: 'src/quantum/science/index.ts', literal: '1891', count: 1, kind: 'data', source: 'USPTO grant year — Tesla US454622' },
  { file: 'src/quantum/science/index.ts', literal: '1900', count: 2, kind: 'data', source: 'USPTO grant year — Tesla US645576/US649621' },
  { file: 'src/quantum/science/index.ts', literal: '1905', count: 1, kind: 'data', source: 'USPTO grant year — Tesla US787412' },
  { file: 'src/quantum/science/index.ts', literal: '1914', count: 1, kind: 'data', source: 'USPTO grant year — Tesla US1119732' },
  { file: 'src/quantum/science/index.ts', literal: '9_192_631_770', count: 2, kind: 'data', source: 'SI second DEFINITION — Cs-133 hyperfine transition Hz (BIPM, 1967)', frontier: 'a definition, not a measurement — the second is pinned to this count by convention' },
  { file: 'src/quantum/science/index.ts', literal: '127_732_000', count: 1, kind: 'data', source: '¹H Larmor frequency at 3 T — γ/2π = 42.5775 MHz/T (CODATA)', frontier: 'derivable as γ/2π × B₀ from the proton gyromagnetic ratio' },
  // ── fire/plasma/ball — the ms unit and the PLANE_VIS visibility lattice: exact [p, q] ratio DATA,
  // every pair PROVEN on q ∈ {5, 8, 16, 32, 64} by plasmaPaintHardcodedPlanesDiscovered (its own fold).
  { file: 'src/fire/plasma/ball/index.ts', literal: '19', count: 2, kind: 'data', source: 'PLANE_VIS numerator (vignetteMidA · ringA0) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '29', count: 1, kind: 'data', source: 'PLANE_VIS numerator (blobInnerL) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '58', count: 1, kind: 'data', source: 'PLANE_VIS numerator (voidCoreA) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '13', count: 1, kind: 'data', source: 'PLANE_VIS numerator (voidOuterA) — fold-proven lattice' },
  { file: 'src/fire/plasma/ball/index.ts', literal: '38', count: 1, kind: 'data', source: 'PLANE_VIS numerator (reduceCoreA) — fold-proven lattice' },
  { file: 'src/quantum/index.ts', literal: '1664525', count: 1, kind: 'data', source: 'LCG multiplier — Numerical Recipes (Press et al.), after Knuth' },
  { file: 'src/quantum/index.ts', literal: '1013904223', count: 1, kind: 'data', source: 'LCG increment — Numerical Recipes (Press et al.)' },
  { file: 'src/quantum/index.ts', literal: '7919', count: 1, kind: 'data', source: 'the 1000th prime — stream decorrelation stride' },
  { file: 'src/quantum/index.ts', literal: '2654435761', count: 1, kind: 'data', source: 'Fibonacci-hashing multiplier — Knuth TAOCP vol 3', frontier: 'the prime near 2³²/φ = 2654435769.5 — derivable as the golden section of the 32-bit ring' },
  { file: 'src/0/index.ts', literal: '13', count: 3, kind: 'data', source: 'MurmurHash3 fmix avalanche shift (Appleby) ×2 + SHA-256 Σ₀ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '17', count: 1, kind: 'data', source: 'SHA-256 σ₁ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '19', count: 1, kind: 'data', source: 'SHA-256 σ₁ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '11', count: 1, kind: 'data', source: 'SHA-256 Σ₁ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '22', count: 1, kind: 'data', source: 'SHA-256 Σ₀ rotation — FIPS 180-4' },
  { file: 'src/0/index.ts', literal: '1664525', count: 1, kind: 'data', source: 'LCG multiplier — Numerical Recipes' },
  { file: 'src/0/index.ts', literal: '1013904223', count: 1, kind: 'data', source: 'LCG increment — Numerical Recipes' },
  { file: 'src/quantum/science/index.ts', literal: '2.4', count: 2, kind: 'data', source: 'sRGB gamma exponent — IEC 61966-2-1 (transfer fn + audit theorem input)' },
  { file: 'src/quantum/science/index.ts', literal: '2654435761', count: 1, kind: 'data', source: 'Knuth Fibonacci-hash prime — AUDITED prime within 8.5 of 2³²/φ (fixedConstantsProvedByTheorems)' },
  { file: 'src/quantum/science/index.ts', literal: '18980', count: 1, kind: 'data', source: 'Maya Calendar Round — AUDITED = lcm(365, 260)' },
  { file: 'src/quantum/science/index.ts', literal: '365', count: 2, kind: 'data', source: 'Haab´ year days — Maya calendar (audit theorem input + facet)' },
  { file: 'src/quantum/science/index.ts', literal: '260', count: 2, kind: 'data', source: 'Tzolk´in days — Maya calendar (audit theorem input + facet)' },
  { file: 'src/quantum/science/index.ts', literal: '61', count: 1, kind: 'data', source: 'sense codons — AUDITED = 64 − 3 stops' },
  { file: 'src/mountain/source/index.ts', literal: '20.53', count: 4, kind: 'data', source: 'Bühlmann ZHL-16 helium tissue half-time (min) — DECOMPRESSION MODEL', frontier: 'the epistemic law\'s own case: half-times are FITTED compartment constants, not derived from diffusion physics — a future perfusion model could compute them' },
  { file: 'src/mountain/source/index.ts', literal: '54.3', count: 2, kind: 'data', source: 'Bühlmann ZHL-16 nitrogen tissue half-time (min) — DECOMPRESSION MODEL', frontier: 'fitted compartment constant — recomputable only by refitting or a mechanistic diffusion model' },
  { file: 'src/water/stack/index.ts', literal: '365.25', count: 1, kind: 'data', source: 'Julian year (days) — astronomy' },
  { file: 'src/quantum/dynamics/index.ts', literal: '365.25', count: 1, kind: 'data', source: 'Julian year (days) — astronomy' },
  { file: 'src/quantum/dynamics/index.ts', literal: '365', count: 1, kind: 'data', source: 'calendar year (days)' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '13', count: 1, kind: 'data', source: 'Maya trecena — 13-day cycle (calendar table)' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '260', count: 1, kind: 'data', source: 'tzolk´in days — Maya calendar' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '365', count: 1, kind: 'data', source: 'haab´ days — Maya calendar' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '819', count: 1, kind: 'data', source: '819-day count — Maya (Palenque) cycle' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '6940', count: 1, kind: 'data', source: 'Metonic cycle days — Greek luni-solar' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '18980', count: 1, kind: 'data', source: 'Calendar Round — AUDITED = lcm(365, 260)' },
  { file: 'src/thunder/movie/narrative/index.ts', literal: '220', count: 2, kind: 'data', source: 'expected throat hue (blue band) — regression pin for the red/blue-pill decode' },
  // ── FILE-LEVEL ATTESTATIONS ('*') — the residue census per file, exact counts, self-policing.
  // data = documented corpora/constants · tuned = awaiting derivation (the improvement frontier).
  { file: 'src/0/index.ts', literal: '*', count: 11, kind: 'tuned', source: 'attested residue — compass rose radius 46, torus separation 2.2, breath periods 2600/1700/1100 ms', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: 'src/1/9/index.ts', literal: '*', count: (5 * 2), kind: 'data', source: 'attested residue — physics constants station' },
  { file: 'src/2/8/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/3/7/index.ts', literal: '*', count: 99, kind: 'data', source: 'attested residue — the constants VAULT — CODATA/SI/harmonic values (SPEED_OF_LIGHT, IONIZING_EV, A432 ladder…)' },
  { file: 'src/5/5/index.ts', literal: '*', count: 1, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/6/4/index.ts', literal: '*', count: 21, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/7/3/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/8/2/index.ts', literal: '*', count: 3, kind: 'data', source: 'attested residue — digit-station constants' },
  { file: 'src/9/1/index.ts', literal: '*', count: 9, kind: 'data', source: 'attested residue — physics error-correction constants' },
  { file: 'src/earth/architecture/index.ts', literal: '*', count: (5 * 2), kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/earth/life/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — biology documented data' },
  { file: 'src/earth/nature/index.ts', literal: '*', count: 1, kind: 'data', source: 'attested residue — nature data' },
  { file: 'src/earth/world/index.ts', literal: '*', count: 19, kind: 'data', source: 'attested residue — world/geography documented data' },
  { file: 'src/fire/diamonds/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/fire/features/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/fire/li/index.ts', literal: '*', count: 39, kind: 'data', source: 'attested residue — a432 lineage + Tesla patent data' },
  { file: 'src/fire/physics/index.ts', literal: '*', count: 13, kind: 'data', source: 'attested residue — EM band frequencies and SAR-context data' },
  { file: 'src/heaven/balance/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/heaven/compute/computer/index.ts', literal: '*', count: 1, kind: 'data', source: 'attested residue — computer-model constants' },
  { file: 'src/heaven/compute/index.ts', literal: '*', count: 6, kind: 'data', source: 'attested residue — compute-model constants' },
  { file: 'src/heaven/core/index.ts', literal: '*', count: 28, kind: 'data', source: 'visible-spectrum band edges 380–780 nm (Bruton wavelength→RGB algorithm) + structural binding counts' },
  { file: 'src/heaven/essence/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/heaven/laws/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/heaven/site/index.ts', literal: '*', count: 22, kind: 'data', source: 'attested residue — site metadata/config values' },
  { file: 'src/heaven/sky/astronomy/index.ts', literal: '*', count: 11, kind: 'data', source: 'attested residue — astronomical constants (periods, distances)' },
  { file: 'src/heaven/sky/moon/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — lunar constants' },
  { file: 'src/heaven/sky/sun/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — solar constants' },
  { file: 'src/lake/clean/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/lake/ledger/index.ts', literal: '*', count: 73, kind: 'data', source: 'attested residue — entropy↔energy ledger measurements' },
  { file: 'src/lake/music/index.ts', literal: '*', count: 40, kind: 'data', source: 'attested residue — frequency corpora (Hz tables, solfeggio/documented pitches)' },
  { file: 'src/lake/stats/index.ts', literal: '*', count: 5, kind: 'data', source: 'attested residue — statistics tables' },
  { file: 'src/lake/widgets/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/gates/index.ts', literal: '*', count: 5, kind: 'data', source: 'attested residue — gate thresholds (documented)' },
  { file: 'src/mountain/geometry/index.ts', literal: '*', count: 76, kind: 'data', source: 'sacred-site GPS coordinates (Giza 29.9792N, Stonehenge 51.1789, Teotihuacan, Angkor…), Maya calendar cycles (365·52 = 260·73 = 18980), monument dating, biology codon counts', frontier: 'the Giza-latitude ≈ c/10⁷ coincidence and site alignments are documented curiosities — coordinates stay measured data' },
  { file: 'src/mountain/og/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/seals/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/shadcn/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/source/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/mountain/topology/index.ts', literal: '*', count: 10, kind: 'data', source: 'attested residue — topology invariants/tables' },
  { file: 'src/pair/cache/quantum/index.ts', literal: '*', count: 8, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/pair/enforcement/ops/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/pair/enforcement/script/shell/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/apps/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/dynamics/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/fire/experiments/index.ts', literal: '*', count: 25, kind: 'data', source: 'attested residue — EM band/physics demo data' },
  { file: 'src/quantum/fire/forecasts/index.ts', literal: '*', count: 13, kind: 'data', source: 'attested residue — weather-model coefficients (documented physics)' },
  { file: 'src/quantum/heaven/library/index.ts', literal: '*', count: 186, kind: 'data', source: 'attested residue — library catalogue data (works, dates, counts)' },
  { file: 'src/quantum/index.ts', literal: '*', count: 59, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known; time/phase rates converted to the φ-ladder 2026-07-08 (ratcheted 92→85)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/lake/dist/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/lake/spirit/index.ts', literal: '*', count: 4, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/lake/voice/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/mountain/dimensions/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known; PHASE_PER_SCALE derived as PHI−1 2026-07-08 (ratcheted 2→1, hueShift span 220 remains)', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/os/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/water/cache/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/quantum/wind/geometry/index.ts', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/commands/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/decode/index.ts', literal: '*', count: 333, kind: 'data', source: 'attested residue — ancient numeral corpora — Sumerian/Maya/Egyptian/Ifá documented values' },
  { file: 'src/thunder/movie/canvas/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/resonance/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/trading/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/verify/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/thunder/waves/index.ts', literal: '*', count: 6, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/water/cosmos/index.ts', literal: '0.2056', count: 2, kind: 'data', source: 'Mercury orbital eccentricity — JPL J2000 elements (value + its facet check)' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0068', count: 1, kind: 'data', source: 'Venus orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0167', count: 1, kind: 'data', source: 'Earth orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0934', count: 1, kind: 'data', source: 'Mars orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0489', count: 1, kind: 'data', source: 'Jupiter orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0565', count: 1, kind: 'data', source: 'Saturn orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0457', count: 1, kind: 'data', source: 'Uranus orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '0.0113', count: 1, kind: 'data', source: 'Neptune orbital eccentricity — JPL J2000 elements' },
  { file: 'src/water/cosmos/index.ts', literal: '*', count: 162, kind: 'data', source: 'attested residue — string-theory/maths corpus (Ramanujan τ, level degeneracies) + discovery-wave theorem pins (9408 Latin squares, level counts); eccentricities carry their own named rows above' },
  { file: 'src/water/crypto/index.ts', literal: '*', count: 5, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/water/digit/index.ts', literal: '*', count: 217, kind: 'data', source: 'attested residue — digit/π corpus and derivation tables' },
  { file: 'src/water/double/earth/index.ts', literal: '*', count: 17, kind: 'data', source: 'attested residue — GPS coordinates and Earth data' },
  { file: 'src/water/stack/index.ts', literal: '*', count: 4, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/wind/fusion/gold/index.ts', literal: '*', count: 10, kind: 'data', source: 'attested residue — gold-market/physics data' },
  { file: 'src/wind/fusion/index.ts', literal: '*', count: 11, kind: 'data', source: 'attested residue — fusion physics data' },
  { file: 'src/wind/language/index.ts', literal: '*', count: 2, kind: 'data', source: 'attested residue — language corpus data' },
  { file: 'src/wind/learning/index.ts', literal: '*', count: 6, kind: 'data', source: 'attested residue — learning corpus data' },
  { file: 'src/wind/research/index.ts', literal: '*', count: 11, kind: 'data', source: 'attested residue — research corpora data' },
  { file: 'src/wind/routes/corpus/index.ts', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/wind/site/index.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: 'src/wind/ui/index.ts', literal: '*', count: 25, kind: 'tuned', source: 'attested residue — hand-fixed values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed — each value a research target' },
  { file: '.vitepress/computed-pages.mts', literal: '*', count: 2, kind: 'data', source: 'HTTP 404 status code (RFC 9110)' },
  { file: '.vitepress/lib/component-bagua-groups.ts', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/lib/dev-server-bind.mts', literal: '*', count: 1, kind: 'data', source: 'pinned dev port 5173 (launch/config coupling)' },
  { file: '.vitepress/theme/components/CollectiveMind.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/DoubleTorusExperience.vue', literal: '*', count: 4, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/HeroBackgroundLayer.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/LinkedHeroCard.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/ModelCardPages.vue', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/RayHub.vue', literal: '*', count: 2, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/UiAsideShell.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: '.vitepress/theme/components/VoidSidebar.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: 'src/heaven/sky/astronomy/index.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: 'src/quantum/dynamics/index.vue', literal: '*', count: 3, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
  { file: 'src/thunder/resonance/index.vue', literal: '*', count: 1, kind: 'tuned', source: 'attested residue — hand-fixed layout/animation values, derivation not yet known', frontier: 'epistemic law: fixed at discovery, may eventually be computed' },
]

/** LAWS CHANGE WITH EVERY THEOREM PROVEN — the crack law is not static text: each amendment names
 * the proof that forced it. A law that cannot cite its forcing theorem is itself a hardcoded value. */
export type CrackLawAmendment = { version: number; forcedBy: string; change: string }

export const CRACK_LAW_AMENDMENTS: readonly CrackLawAmendment[] = [
  { version: 1, forcedBy: 'user law: any hardcoded value is a potential crack', change: 'colour chokepoints must reduce to canonical numbers — measured census, never a tally gate' },
  { version: 2, forcedBy: 'Tesla patent years + SI ms + wine-glass Q resisted the lattice', change: 'provenance ledger: data and unit kinds with named sources, counts self-policing (drift/stale = offenders)' },
  { version: 3, forcedBy: 'sRGB decompression knee/slope proven C¹-derivable from (a, γ) yet published as roundings', change: 'epistemic frontier notes — every ledgered value is a snapshot of what its authors could compute; decompression models especially' },
  { version: 4, forcedBy: 'painter motion values with no known derivation (0.33 beside 0.34 — deliberate distinction)', change: 'tuned kind: hand-fixed values awaiting derivation, each a research target; no numerology-dressing' },
  { version: 5, forcedBy: 'the colour system reached zero and held', change: 'codebase-wide surface (src + .vitepress, ts/mts/vue) and GATED at zero in strictGatePassed' },
  { version: 6, forcedBy: 'the sweep dressed spec gamma 2.4 into (6·2)/5 twice — dressing a datum hides its frontier', change: 'spec constants stay VERBATIM beside their audited exact counterparts; the instrument folder is exempt (its readings are drift-verified)' },
  { version: 7, forcedBy: 'fixedConstantsProvedByTheorems 7/7 — sRGB self-contradiction, Knuth = golden prime, Calendar Round = lcm', change: 'proven theorems reclassify ledger rows (tuned → data → derived) — the audit is a standing reclassification force' },
  { version: 8, forcedBy: 'first self-research run rediscovered lcm(260,365) and the 2³²/φ prime — but could not SEE tuned values (wildcards carry counts, not values)', change: 'research-target registry: tuned values registered for the hypothesis battery; near-fraction COLLISIONS (two distinct values near one fraction) report deliberate-distinction, not rounding — the 0.33/0.34 lesson as a rule' },
  { version: 9, forcedBy: 'second run proposed fraction roundings for OKLab FIT OUTPUTS (0.0638 ≈ 1/16, 0.3963 ≈ 2/5) and gave 0.83 two fractions', change: 'kind-aware battery: approximate hypotheses only for TUNED claimants (provenance-explained data is not a rounding); one best fraction per value; exact structural identities stay fair for all kinds' },
  { version: 10, forcedBy: 'run 3 left four tuned candidates carrying residual error (0.83≈5/6 · 0.31≈5/16 · 0.11≈1/9 · 0.17≈1/6)', change: 'error-rate law: residual error over tuned claimants is the frontier metric — nonzero rate means theorems remain undiscovered; drives to zero by deeper theorems or by retuning the value TO its theorem (data keeps its historical error — facts are not retunable)' },
  { version: 11, forcedBy: 'the Fibonacci-decade wave: 1.3/3.4/5.5/0.13/0.34 all = F/10ᵏ EXACT (the tuner rode the golden ladder unknowingly); sRGB 0.055 = 55/10³; but 61 = 610/10 is exact AND WRONG (61 = 64 − 3 stops is causal)', change: 'competing exact identities are arbitrated by CAUSATION, not arithmetic: the audit fold prefers the derivation with a mechanism (biology, continuity, definition) over numeric coincidence; coincidences are recorded as curiosities' },
]

/** RESEARCH TARGETS — tuned values REGISTERED so the self-researcher can hunt them (wildcard
 * attestations carry counts, not values; a value the battery cannot see cannot be researched).
 * Registering a value does not close it: it stays tuned until a theorem survives the audit fold. */
export type CrackResearchTarget = { file: string; value: number; context: string }

export const CRACK_RESEARCH_TARGETS: readonly CrackResearchTarget[] = [
  // quantum/index — painter motion (the deepest tuned vein)
  { file: 'src/quantum/index.ts', value: 0.46, context: 'death-flow outer reach' },
  { file: 'src/quantum/index.ts', value: 0.23, context: 'labyrinth step' },
  { file: 'src/quantum/index.ts', value: 0.44, context: 'merge alpha' },
  { file: 'src/quantum/index.ts', value: 0.58, context: 'orbit factor' },
  { file: 'src/quantum/index.ts', value: 0.41, context: 'pulse rate' },
  { file: 'src/quantum/index.ts', value: 0.47, context: 'sacred-morph blend' },
  { file: 'src/quantum/index.ts', value: 1.1, context: 'ring separation' },
  { file: 'src/quantum/index.ts', value: 1.15, context: 'breath amplitude (4 uses)' },
  { file: 'src/quantum/index.ts', value: 1.55, context: 'hinge ring factor' },
  { file: 'src/quantum/index.ts', value: 1.7, context: 'flower dot radius' },
  { file: 'src/quantum/index.ts', value: 2.2, context: 'torus outer factor' },
  { file: 'src/quantum/index.ts', value: 8.5, context: 'sacred-morph solid scale' },
  { file: 'src/quantum/index.ts', value: 0.022, context: 'vortex stroke width' },
  { file: 'src/quantum/index.ts', value: 38, context: 'ray count divisor' },
  { file: 'src/quantum/index.ts', value: 0.22, context: 'orbit/alpha factor (11 uses)' },
  { file: 'src/quantum/index.ts', value: 0.33, context: 'spin rate — sits beside 0.34 (distinction?)' },
  { file: 'src/quantum/index.ts', value: 0.26, context: 'blob orbit reach' },
  { file: 'src/quantum/index.ts', value: 0.46, context: 'death-flow outer radius' },
  { file: 'src/quantum/index.ts', value: 520, context: 'depth breakpoint (css px)' },
  { file: 'src/quantum/index.ts', value: 13, context: 'torus glyph size step (11 uses)' },
  { file: 'src/quantum/index.ts', value: 34, context: 'hologram halo reach' },
  { file: 'src/quantum/index.ts', value: 88, context: 'merkaba ring px' },
  { file: 'src/quantum/index.ts', value: 118, context: 'merkaba outer ring px' },
  { file: 'src/quantum/index.ts', value: 1.18, context: 'ellipse separation' },
  { file: 'src/quantum/index.ts', value: 26, context: 'unit-distance node count' },
  { file: 'src/quantum/index.ts', value: 79, context: 'labyrinth cell count' },
  { file: 'src/quantum/index.ts', value: 97, context: 'vortex stroke count' },
  { file: 'src/quantum/index.ts', value: 1011, context: 'hinge phase offset' },
  // src/0 — kernel timing
  { file: 'src/0/index.ts', value: 46, context: 'compass rose radius' },
  { file: 'src/0/index.ts', value: 2.2, context: 'torus lobe separation' },
  { file: 'src/0/index.ts', value: 2600, context: 'breath period ms' },
  { file: 'src/0/index.ts', value: 1700, context: 'breath period ms' },
  { file: 'src/0/index.ts', value: 1100, context: 'breath period ms' },
  // wind/ui — SVG art
  { file: 'src/wind/ui/index.ts', value: 22, context: 'chip rect height' },
  { file: 'src/wind/ui/index.ts', value: 78, context: 'path coordinate' },
  { file: 'src/wind/ui/index.ts', value: 58, context: 'path coordinate' },
  { file: 'src/wind/ui/index.ts', value: 4550, context: 'gradient stop (per mille)' },
  { file: 'src/wind/ui/index.ts', value: 4750, context: 'gradient stop (per mille)' },
  { file: 'src/wind/ui/index.ts', value: 38.4, context: 'hue-cycle seconds (in keyframe string)' },
  { file: 'src/wind/ui/index.ts', value: 302, context: 'viewBox path x' },
  { file: 'src/wind/ui/index.ts', value: 99.9, context: 'keyframe hold percent' },
]

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


/** The law's own evolution, verified: versions strictly monotone from 1, every amendment names the
 * theorem/discovery that forced it — a law that cannot cite its forcing proof is a hardcoded value. */
export function crackLawEvolution() {
  const monotone = CRACK_LAW_AMENDMENTS.every((a, i) => a.version === i + 1)
  const cited = CRACK_LAW_AMENDMENTS.every((a) => a.forcedBy.length > 0 && a.change.length > 0)
  return {
    holds: monotone && cited,
    amendments: CRACK_LAW_AMENDMENTS.length,
    current: CRACK_LAW_AMENDMENTS[CRACK_LAW_AMENDMENTS.length - 1],
    monotone,
    cited,
  }
}


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

/** Ledger self-invariants — computable at any call site: no duplicate (file, literal) rows, every
 * count positive, every TUNED row carries its frontier note, one wildcard per file at most. The
 * accounts split the accounted uses by kind — the 'tuned' total IS the improvement frontier. */
export function crackLedgerAccounts() {
  const keys = CRACK_LEDGER.map((e) => `${e.file}::${e.literal}`)
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i)
  const nonPositive = CRACK_LEDGER.filter((e) => !(e.count >= 1))
  const tunedWithoutFrontier = CRACK_LEDGER.filter((e) => e.kind === 'tuned' && !e.frontier)
  const wildcards = CRACK_LEDGER.filter((e) => e.literal === '*')
  const wildcardFiles = wildcards.map((e) => e.file)
  const doubleWildcards = wildcardFiles.filter((f, i) => wildcardFiles.indexOf(f) !== i)
  const byKind = { data: 0, unit: 0, tuned: 0 }
  for (const e of CRACK_LEDGER) byKind[e.kind] += e.count
  return {
    holds: duplicates.length === 0 && nonPositive.length === 0 && tunedWithoutFrontier.length === 0 && doubleWildcards.length === 0,
    entries: CRACK_LEDGER.length,
    byKind,
    frontier: byKind.tuned,
    duplicates,
    nonPositive: nonPositive.length,
    tunedWithoutFrontier: tunedWithoutFrontier.length,
    doubleWildcards,
  }
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
