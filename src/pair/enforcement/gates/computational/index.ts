// ONE source for computational limit constants and checks — gate · weave · verify · folderLaw read here only.
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve, dirname } from 'node:path'
import { merkleFold, toUuid } from '../../../../0'
import { leafFromPathTail, methodNameFromFolderTail } from '../../../../9/1'
import { splitCamelSegment, EIGHT_FOLD_SCIENCES, RENDER_UI_SCIENCE_MASK } from '../../../../8/2'
import { harmonicBands } from '../../../../quantum/lake/icons'

function vaultSplitCamelSegment(segment: string): readonly string[] {
  const words: string[] = []
  let current = ''
  for (let i = 0; i < segment.length; i++) {
    const ch = segment[i]!
    if (ch >= 'A' && ch <= 'Z') {
      if (current) words.push(current.toLowerCase())
      current = ch.toLowerCase()
    } else {
      current += ch
    }
  }
  if (current) words.push(current.toLowerCase())
  return words.filter((w) => /^[a-z]+$/.test(w))
}

export function splitMethodWords(name: string, prefix = 'concept.'): readonly string[] {
  const stripped = name.startsWith(prefix) ? name.slice(prefix.length) : name
  return stripped.split('.').flatMap((seg) => vaultSplitCamelSegment(seg))
}

/** Method name → folder tail (concept.agent.stream.wire → agent/stream/wire). */
export function folderTailFromMethodName(name: string, prefix = 'concept.'): string {
  return splitMethodWords(name, prefix).join('/')
}

// methodNameFromFolderTail → pi-train wave 11 tier-A at src/9/1.
// leafFromPathTail → pi-train wave 11 tier-A at src/9/1.

// EIGHT_FOLD_SCIENCES · EightFoldScience · RENDER_UI_SCIENCE_MASK → pi-train wave 6 tier-A at src/8/2.

/** Education-portal curriculum — agent-voted top eight (naming vote root 681da0ff…). */
export const EIGHT_CURRICULUM_SCIENCES = ['see', 'hear', 'ask', 'prove', 'learn', 'pattern', 'sense', 'create'] as const
export type EightCurriculumScience = (typeof EIGHT_CURRICULUM_SCIENCES)[number]

export function isCurriculumScience(name: string): name is EightCurriculumScience {
  return (EIGHT_CURRICULUM_SCIENCES as readonly string[]).includes(name)
}

/** Three-level src schema — science / model / action (strict; no prefix chains). */
export type ScienceModelAction = { readonly science: string; readonly model: string; readonly action: string }

export const SRC_SCIENCE_MODEL_ACTION_SCHEMA = 'src/[science]/[action]' as const

/** Canonical mask — co-located index.ts + index.vue; no render/ui prefix. */
export const CANONICAL_SCIENCE_MASK = `src/<science>/<action>` as const

// The census / gate numeric constants are hosted in the zero-import leaf src/3/7 (imported + re-exported
// below) so they initialise before any cyclic consumer barrel runs — removing the SSR-bundle TDZ. This file
// remains the ONE public source (re-export); limits:verify + folder-law read the same values by import.
import { MAX_SUBFOLDERS_PER_FOLDER, ICHING_TRIGRAMS, ICHING_EIGHT_FOLD, ROSETTA_SIX, ROSETTA_SEVEN, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, FIBONACCI_CENSUS_BANDS, UNFOLDED_CENSUS, EULER_CHI, FOLDED_CENSUS, HOMOLOGY_LOOPS, DIMENSION_GATES, HARMONICS_LADDER_LENGTH, SIEGE_WAVES, SIEGE_PER_WAVE, SIEGE_TOTAL_FORGES } from '../../../../3/7'
export { MAX_SUBFOLDERS_PER_FOLDER, ICHING_TRIGRAMS, ICHING_EIGHT_FOLD, ROSETTA_SIX, ROSETTA_SEVEN, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, FIBONACCI_CENSUS_BANDS, UNFOLDED_CENSUS, EULER_CHI, FOLDED_CENSUS, HOMOLOGY_LOOPS, DIMENSION_GATES, HARMONICS_LADDER_LENGTH, SIEGE_WAVES, SIEGE_PER_WAVE, SIEGE_TOTAL_FORGES } from '../../../../3/7'

/** Folder names forbidden — every folder IS an index; index.ts is the stem file inside, never a folder name. */
export const FORBIDDEN_FOLDER_NAMES = ['index'] as const

export function isForbiddenFolderName(name: string): boolean {
  return (FORBIDDEN_FOLDER_NAMES as readonly string[]).includes(name)
}

/** Default model segment for 2-level tails (earth/architecture → science=earth, action=architecture). */
export const SCHEMA_TWO_LEVEL_MODEL = 'fold' as const

function assertScienceModelAction(sma: ScienceModelAction): ScienceModelAction {
  for (const seg of [sma.science, sma.model, sma.action]) {
    if (isForbiddenFolderName(seg)) {
      throw new Error(
        `folder "${seg}" is forbidden — every folder is an index; index.ts is the stem file inside, never a folder name (${FORBIDDEN_FOLDER_NAMES.join(', ')})`,
      )
    }
  }
  return sma
}

/** Path words → science/model/action — exactly three folder levels; action holds the meaning. */
export function scienceModelActionFromWords(words: readonly string[]): ScienceModelAction {
  const parts = words.filter(Boolean)
  if (parts.length >= 3) {
    return assertScienceModelAction({
      science: parts[parts.length - 3]!,
      model: parts[parts.length - 2]!,
      action: parts[parts.length - 1]!,
    })
  }
  if (parts.length === 2) {
    return assertScienceModelAction({ science: parts[0]!, model: SCHEMA_TWO_LEVEL_MODEL, action: parts[1]! })
  }
  if (parts.length === 1) {
    return assertScienceModelAction({ science: 'heaven', model: SCHEMA_TWO_LEVEL_MODEL, action: parts[0]! })
  }
  return assertScienceModelAction({ science: 'heaven', model: SCHEMA_TWO_LEVEL_MODEL, action: 'essence' })
}

/** Mind tail (earth/architecture, heaven/balance) → science/model/action. */
export function scienceModelActionFromMindTail(tail: string): ScienceModelAction {
  return scienceModelActionFromWords(tail.split('/'))
}

/** Method name → science/model/action (concept.earth.architecture → earth/architecture). */
export function scienceModelActionFromMethodName(name: string, prefix = 'concept.'): ScienceModelAction {
  return scienceModelActionFromWords(splitMethodWords(name, prefix))
}

export function scienceModelActionTail(sma: ScienceModelAction): string {
  if (sma.model === SCHEMA_TWO_LEVEL_MODEL) return `${sma.science}/${sma.action}`
  return `${sma.science}/${sma.model}/${sma.action}`
}

/** Target logic path — src/<science>/<model>/<action>/index.ts. */
export function srcLogicPathFromScienceModelAction(sma: ScienceModelAction): string {
  return `src/${scienceModelActionTail(sma)}/index.ts`
}

/** Co-located display — src/<science>/<model>/<action>/index.vue (same folder as logic). */
export function renderUiPathFromScienceModelAction(sma: ScienceModelAction): string {
  return `src/${scienceModelActionTail(sma)}/index.vue`
}

/** Alias — display gate path beside logic index.ts. */
export const displayPathFromScienceModelAction = renderUiPathFromScienceModelAction

/** One registry row — mind tail dissolves to logic target + render mirror (mask math only). */
export type ScienceModelActionMaskRow = {
  readonly mindTail: string
  readonly science: string
  readonly model: string
  readonly action: string
  readonly logicNow: string
  readonly logicTarget: string
  readonly renderPath: string
  readonly route: string
}

/** Dry rename table — every mind tail → science/model/action paths (recomputable, no hand lists). */
export function scienceModelActionMaskRowsFromMindTails(mindTails: readonly string[]): readonly ScienceModelActionMaskRow[] {
  return mindTails.map((mindTail) => {
    const sma = scienceModelActionFromMindTail(mindTail)
    const tail = scienceModelActionTail(sma)
    return {
      mindTail,
      science: sma.science,
      model: sma.model,
      action: sma.action,
      logicNow: `src/quantum/heaven/mind/${mindTail}/index.ts`,
      logicTarget: srcLogicPathFromScienceModelAction(sma),
      renderPath: renderUiPathFromScienceModelAction(sma),
      route: `/${tail}`,
    }
  })
}

/** Pure path math — logic index.ts rel → registry row (indices do not know VitePress). */
export function indexRegistryFromLogicRel(logicRel: string, mindMount = 'src/quantum/heaven/mind/'): {
  readonly logic: string
  readonly target: string
  readonly route: string
  readonly science: string
  readonly model: string
  readonly action: string
} | null {
  const rel = logicRel.replace(/\\/g, '/')
  if (!rel.startsWith('src/') || !rel.endsWith('/index.ts')) return null
  const sma = rel.startsWith(mindMount)
    ? scienceModelActionFromMindTail(rel.slice(mindMount.length, -'/index.ts'.length))
    : scienceModelActionFromWords(rel.slice('src/'.length, -'/index.ts'.length).split('/').filter(Boolean))
  return {
    logic: rel,
    target: srcLogicPathFromScienceModelAction(sma),
    route: `/${scienceModelActionTail(sma)}`,
    science: sma.science,
    model: sma.model,
    action: sma.action,
  }
}

function stripComments(text: string): string {
  return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/** Physical logic mount — transitional mind barrel until full dissolve. */
export const LOGIC_DISPLAY_MOUNT = 'src/quantum/heaven/mind/'
/** Co-located display — index.vue beside index.ts at src/<science>/<model>/<action>/. */
export const UI_DISPLAY_MOUNT = 'src/'
/** Hub words — transitional mount until logic dissolves to ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}. */
export const DISPLAY_LOGIC_HUB = 'mind'
export const DISPLAY_UI_HUB = 'mind'
export const DISPLAY_DUAL_LAW =
  `${SRC_SCIENCE_MODEL_ACTION_SCHEMA} — every folder is an index (index.ts + index.vue co-located)`

/** Display subpath — science/model/action (co-located with logic). */
export function displaySubpathFromLogicTail(tail: string, _allMindTails?: readonly string[]): string {
  void _allMindTails
  const { science, model, action } = scienceModelActionFromMindTail(tail)
  return `${science}/${model}/${action}`
}

function mindLogicTailsFromIndexFiles(indexTsFiles: readonly string[], root: string): string[] {
  const tails: string[] = []
  for (const full of indexTsFiles) {
    const logicRel = relative(root, full).replace(/\\/g, '/')
    if (!logicRel.startsWith(LOGIC_DISPLAY_MOUNT) || !logicRel.endsWith('/index.ts')) continue
    tails.push(logicRel.slice(LOGIC_DISPLAY_MOUNT.length, -'/index.ts'.length))
  }
  return tails
}

/** Compute co-located display path — src/<science>/<model>/<action>/index.vue. */
function displayUiPathFromLogicIndexComputed(logicRel: string, _allMindTails: readonly string[]): string | null {
  void _allMindTails
  const rel = logicRel.replace(/\\/g, '/')
  if (rel.startsWith(LOGIC_DISPLAY_MOUNT) && rel.endsWith('/index.ts')) {
    const tail = rel.slice(LOGIC_DISPLAY_MOUNT.length, -'/index.ts'.length)
    return renderUiPathFromScienceModelAction(scienceModelActionFromMindTail(tail))
  }
  if (CANONICAL_LOGIC_INDEX_RE.test(rel)) {
    return rel.replace(/\/index\.ts$/, '/index.vue')
  }
  return null
}

/** Consecutive Fibonacci bands for the gapless census (alias). */
export const FIBONACCI_BANDS = FIBONACCI_CENSUS_BANDS
/** Exact-count law — census and gates hold at one number, never a range. */
export const NOT_LESS_NOT_MORE_LAW =
  'not less, not more: exactly 110 unfolded index.ts (55+34+21 gapless), exactly 108 folded (χ=−2), exactly 432 dimension gates (4×108) — HARD at gate/weave/verify/precommit/build'
/** Dependency-free vault — agnostic concat (fold, UUID, merge) lives here only. */
export const VAULT_STATION = 'src/0'
/** Logic tree prefix — mind folds that must mirror a reusable Vue display gate. */
export const LOGIC_DISPLAY_PREFIX = LOGIC_DISPLAY_MOUNT
/** UI tree prefix — co-located at canonical science/model/action. */
export const UI_DISPLAY_PREFIX = UI_DISPLAY_MOUNT
export const COMPUTATIONAL_LIMITS_LAW =
  `${NOT_LESS_NOT_MORE_LAW}; vault only in src/0; index.ts under src/; index.vue co-located at ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}; paths computed at render — enforced from this fold only`

export type ComputationalViolation = {
  readonly file: string
  readonly reason: string
  readonly spec?: string
}

export type ComputationalLimitSnapshot = {
  readonly indexCount: number
  readonly targetUnfolded: number
  readonly targetFolded: number
  readonly gapless: boolean
  readonly bands: readonly number[]
  readonly bandsMatch: boolean
  readonly foldedOk: boolean
  readonly dimensionGatesOk: boolean
  readonly vaultViolations: readonly ComputationalViolation[]
  readonly renderViolations: readonly ComputationalViolation[]
  readonly displayDualViolations: readonly ComputationalViolation[]
  readonly staticPathViolations: readonly ComputationalViolation[]
  readonly forbiddenFolderViolations: readonly ComputationalViolation[]
  readonly incompleteIndexViolations: readonly ComputationalViolation[]
  /** I Ching eight-fold tree scan (≤8 subfolders per level — bāguà). */
  readonly ichingDistribution: IChingDistributionSnapshot
  readonly distributionGuidance: readonly string[]
  /** @deprecated use ichingDistribution — was misnamed (8-fold is I Ching, not Rosetta). */
  readonly rosettaDistribution: IChingDistributionSnapshot
  /** @deprecated use distributionGuidance */
  readonly rosettaGuidance: readonly string[]
  readonly passed: boolean
  readonly receipt: string
}

const VAULT_PRIMITIVE_DEF =
  /^\s*(?:export\s+)?function\s+(toUuid|merge|merkleFold|foldPair|hash32|bytesFromSeed|seedFromText)\s*\(/m
const REEXPORT_LINE = /^\s*export\s+(?:type\s+)?(?:\{[^}]*\}|[^;]+)\s+from\s+['"]/

function relativeImportSpecs(text: string): string[] {
  return [
    ...[...text.matchAll(/\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s+['"]([^'"]+)['"]/g)].map((m) => m[1]!),
  ]
}

function censusDelta(actual: number, target: number): { delta: number; detail: string } {
  const delta = target - actual
  if (delta === 0) return { delta: 0, detail: 'exact — not less, not more' }
  if (delta > 0) return { delta, detail: `${delta} short — not less: fold excess logic into the census (dissolve folders, no new files beyond ${target})` }
  return { delta, detail: `${-delta} over — not more: dissolve ${-delta} index.ts into the model until exactly ${target}` }
}

/** Gapless census — consecutive Fibonacci bands sum exactly to 110 (reuse harmonicBands from lake/icons). */
export function verifyGaplessCensus(count: number) {
  const n = Math.max(0, Math.floor(count))
  const harmonic = harmonicBands(n)
  const bandsMatch =
    harmonic.gapless &&
    harmonic.bands.length === FIBONACCI_BANDS.length &&
    harmonic.bands.every((band, i) => band === FIBONACCI_BANDS[i])
  const exact = n === UNFOLDED_CENSUS
  const { detail: deltaDetail } = censusDelta(n, UNFOLDED_CENSUS)
  return {
    count: n,
    target: UNFOLDED_CENSUS,
    gapless: harmonic.gapless,
    bands: harmonic.bands,
    bandsMatch,
    gaps: harmonic.gaps,
    exact,
    deltaDetail,
    ok: exact && bandsMatch,
    root: harmonic.root,
    statement: harmonic.statement,
  }
}

/** Folded census — unfolded + χ = −2; dry clean, no file added or removed. */
export function verifyFoldedCensus(unfolded: number = UNFOLDED_CENSUS) {
  const u = Math.max(0, Math.floor(unfolded))
  const folded = u + EULER_CHI
  return {
    unfolded: u,
    euler: EULER_CHI,
    folded,
    targetFolded: FOLDED_CENSUS,
    ok: folded === FOLDED_CENSUS && u === UNFOLDED_CENSUS,
    root: toUuid(`folded-census:${u}:${folded}:${folded === FOLDED_CENSUS && u === UNFOLDED_CENSUS}`),
  }
}

/** Exactly 432 = 4 × 108 — facet/gate count, not file count. */
export function verifyDimensionGates(folded: number = FOLDED_CENSUS) {
  const gates = HOMOLOGY_LOOPS * folded
  const exact = gates === DIMENSION_GATES && folded === FOLDED_CENSUS
  return {
    loops: HOMOLOGY_LOOPS,
    folded,
    gates,
    target: DIMENSION_GATES,
    exact,
    ok: exact,
    root: toUuid(`dimension-gates:${folded}:${gates}`),
  }
}

/** Vault primitives must be defined only under src/0; src/0 must not import outside the vault. */
export function scanVaultViolations(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): ComputationalViolation[] {
  const vaultAbs = join(root, VAULT_STATION)
  const offenders: ComputationalViolation[] = []

  for (const full of codeFiles) {
    const rel = relative(root, full).replace(/\\/g, '/')
    const text = stripComments(bodies.get(rel) ?? '')
    const inVault = full.startsWith(vaultAbs)

    if (inVault) {
      for (const spec of relativeImportSpecs(text)) {
        if (!spec.startsWith('.')) {
          offenders.push({
            file: rel,
            spec,
            reason: 'src/0 vault imports an external module — dependency-free leaf only',
          })
          continue
        }
        const resolved = resolve(dirname(full), spec)
        if (!resolved.startsWith(vaultAbs)) {
          offenders.push({
            file: rel,
            spec,
            reason: 'src/0 vault imports outside src/0 — agnostic concat lives only in the vault',
          })
        }
      }
      continue
    }

    for (const line of text.split('\n')) {
      if (REEXPORT_LINE.test(line)) continue
      if (VAULT_PRIMITIVE_DEF.test(line)) {
        offenders.push({
          file: rel,
          reason: `vault primitive defined outside ${VAULT_STATION} — fold/UUID/merge live in the dependency-free leaf only`,
        })
        break
      }
    }
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

/** No render/ui barrels — display is co-located index.vue only. */
export const RENDER_BARREL_ALLOWLIST = new Set<string>()

const LOGIC_DISPLAY_EXCLUDE =
  /^(?:src\/0\/|src\/pair\/|src\/render\/|src\/quantum\/lake\/|src\/quantum\/water\/(?:enforcement|cache)\/|src\/[0-9]+\/)/

/** Internal barrels — discovered but not VitePress-automounted (indices stay agnostic). */
const VITEPRESS_AUTOMOUNT_EXCLUDE =
  /^(?:src\/0\/|src\/pair\/|src\/render\/|src\/library\/|src\/spirit\/|src\/world\/|src\/quantum\/lake\/|src\/quantum\/water\/|src\/[0-9]+\/)/

export type DiscoveredIndexEntry = {
  readonly logic: string
  readonly target: string
  readonly route: string
  readonly science: string
  readonly model: string
  readonly action: string
  readonly automount: boolean
  readonly complete: boolean
  readonly reasons: readonly string[]
}

function collectIndexTsUnderSrc(root: string): string[] {
  const srcRoot = join(root, 'src')
  if (!existsSync(srcRoot)) return []
  const out: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name === 'index.ts') out.push(full)
    }
  }
  walk(srcRoot)
  return out
}

function indexAutomountEligible(logicRel: string): boolean {
  if (VITEPRESS_AUTOMOUNT_EXCLUDE.test(logicRel)) return false
  return (
    logicRel.startsWith(LOGIC_DISPLAY_MOUNT) ||
    /^src\/[^/]+\/[^/]+\/[^/]+\/index\.ts$/.test(logicRel)
  )
}

function indexCompleteness(
  root: string,
  logicRel: string,
  allMindTails: readonly string[],
): { readonly complete: boolean; readonly reasons: readonly string[] } {
  const reasons: string[] = []
  const full = join(root, logicRel)
  if (!existsSync(full)) reasons.push('missing index.ts')
  else if (readFileSync(full, 'utf8').trim().length < 8) reasons.push('empty index.ts')
  if (logicIndexRequiresDisplayGate(logicRel)) {
    const uiRel = displayUiPathFromLogicIndex(logicRel, allMindTails)
    if (uiRel && !existsSync(join(root, uiRel))) {
      reasons.push(`incomplete display dual — missing ${uiRel}`)
    }
  }
  return { complete: reasons.length === 0, reasons }
}

/** Discover every src index.ts — indices do not know VitePress; completeness is gate-only. */
export function discoverSrcIndexes(root: string, indexTsFiles?: readonly string[]): readonly DiscoveredIndexEntry[] {
  const files = indexTsFiles ?? collectIndexTsUnderSrc(root)
  const allMindTails = mindLogicTailsFromIndexFiles(files, root)
  const entries: DiscoveredIndexEntry[] = []
  for (const full of files) {
    const logicRel = relative(root, full).replace(/\\/g, '/')
    const reg = indexRegistryFromLogicRel(logicRel, LOGIC_DISPLAY_MOUNT)
    if (!reg) continue
    const { complete, reasons } = indexCompleteness(root, logicRel, allMindTails)
    entries.push({
      ...reg,
      automount: indexAutomountEligible(logicRel),
      complete,
      reasons,
    })
  }
  return entries.sort((a, b) => a.route.localeCompare(b.route))
}

/** Incomplete automount indexes fail the gate — complete ones are discovered and displayed. */
export function scanIncompleteIndexViolations(
  root: string,
  indexTsFiles: readonly string[],
): ComputationalViolation[] {
  return discoverSrcIndexes(root, indexTsFiles)
    .filter((entry) => entry.automount && !entry.complete)
    .map((entry) => ({
      file: entry.logic,
      reason: `incomplete index — ${entry.reasons.join('; ')} (complete indexes automount; no VitePress reconfiguration)`,
    }))
    .sort((a, b) => a.file.localeCompare(b.file))
}

/** VitePress automount — every complete discovered index; paths only, body at runtime. */
export function vitepressAutomountPaths(_locale?: 'gla' | 'en' | 'bg') {
  void _locale
  const root = process.cwd()
  return discoverSrcIndexes(root)
    .filter((entry) => entry.automount && entry.complete)
    .map((entry) => ({ params: { page: entry.route.replace(/^\//, '') } }))
}

/** Compute mirror UI path from a logic index.ts — paths computed at render, not hand-listed. */
export function displayUiPathFromLogicIndex(logicRel: string, allMindTails?: readonly string[]): string | null {
  const rel = logicRel.replace(/\\/g, '/')
  if (CANONICAL_LOGIC_INDEX_RE.test(rel)) {
    return rel.replace(/\/index\.ts$/, '/index.vue')
  }
  if (allMindTails) return displayUiPathFromLogicIndexComputed(logicRel, allMindTails)
  if (!rel.startsWith(LOGIC_DISPLAY_MOUNT) || !rel.endsWith('/index.ts')) return null
  const tail = rel.slice(LOGIC_DISPLAY_MOUNT.length, -'/index.ts'.length)
  return displayUiPathFromLogicIndexComputed(logicRel, [tail])
}

/** Logic index.ts folders that require a co-located display gate (mirror index.vue). */
export function logicIndexRequiresDisplayGate(logicRel: string): boolean {
  const rel = logicRel.replace(/\\/g, '/')
  if (LOGIC_DISPLAY_EXCLUDE.test(rel)) return false
  if (CANONICAL_LOGIC_INDEX_RE.test(rel)) return true
  return displayUiPathFromLogicIndex(rel) !== null
}

/** Each mind logic index.ts must have mirror-path index.vue — folder becomes reusable Vue component. */
export function scanLogicDisplayViolations(
  root: string,
  indexTsFiles: readonly string[],
): ComputationalViolation[] {
  const allMindTails = mindLogicTailsFromIndexFiles(indexTsFiles, root)
  const offenders: ComputationalViolation[] = []
  for (const full of indexTsFiles) {
    const logicRel = relative(root, full).replace(/\\/g, '/')
    if (!logicIndexRequiresDisplayGate(logicRel)) continue
    const uiRel = displayUiPathFromLogicIndex(logicRel, allMindTails)!
    if (!existsSync(join(root, uiRel))) {
      offenders.push({
        file: logicRel,
        reason: `display dual missing — add ${uiRel} (thin mount: ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}) so the folder is a reusable Vue component`,
      })
    }
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

/** Canonical display surface — index.vue only beside index.ts; no flat script siblings. */
export function scanRenderIndexViolations(root: string): ComputationalViolation[] {
  const offenders: ComputationalViolation[] = []
  for (const scienceRoot of canonicalScienceRoots(root)) {
    if (!existsSync(scienceRoot)) continue
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
        const full = join(dir, entry.name)
        if (entry.isDirectory()) walk(full)
        else if (entry.name.endsWith('.vue') && entry.name !== 'index.vue') {
          offenders.push({
            file: relative(root, full).replace(/\\/g, '/'),
            reason: 'canonical surface is index.vue only — dissolve flat .vue into <name>/index.vue',
          })
        } else if (/\.(ts|tsx|js|mjs)$/.test(entry.name) && entry.name !== 'index.ts') {
          offenders.push({
            file: relative(root, full).replace(/\\/g, '/'),
            reason: 'canonical logic routes through index.ts barrels — no flat script siblings',
          })
        }
      }
    }
    walk(scienceRoot)
  }
  return offenders
}

/** Canonical sciences — eight-fold only at src/<science>/; science/model/action depth; no components/lib/mind. */
export function scanRenderUiScienceMaskViolations(root: string): ComputationalViolation[] {
  const sciences = new Set(EIGHT_FOLD_SCIENCES as readonly string[])
  const offenders: ComputationalViolation[] = []
  const srcRoot = join(root, 'src')
  if (!existsSync(srcRoot)) return offenders

  for (const entry of readdirSync(srcRoot, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue
    const full = join(srcRoot, entry.name)
    const rel = relative(root, full).replace(/\\/g, '/')
    const hasCanonicalVue = existsSync(join(full, 'fold')) || existsSync(join(full, 'folds')) ||
      (EIGHT_FOLD_SCIENCES as readonly string[]).includes(entry.name)
    if (!sciences.has(entry.name) && hasCanonicalVue && entry.name !== 'quantum') continue
    if (sciences.has(entry.name)) {
      for (const sub of readdirSync(full, { withFileTypes: true })) {
        if (!sub.isDirectory()) continue
        if (CANONICAL_BANNED_FOLDERS.has(sub.name)) {
          offenders.push({
            file: `${rel}/${sub.name}`,
            reason: `forbidden under canonical mask — only ${CANONICAL_SCIENCE_MASK}; purge "${sub.name}"`,
          })
        }
      }
    }
  }

  for (const scienceRoot of canonicalScienceRoots(root)) {
    if (!existsSync(scienceRoot)) continue
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
        if (!entry.isDirectory()) continue
        const full = join(dir, entry.name)
        const rel = relative(root, full).replace(/\\/g, '/')
        if (CANONICAL_BANNED_FOLDERS.has(entry.name)) {
          offenders.push({
            file: rel,
            reason: `forbidden under canonical mask — only ${CANONICAL_SCIENCE_MASK}; purge "${entry.name}"`,
          })
        }
        const tail = rel.replace(/^src\/[^/]+\//, '')
        const depth = tail.split('/').filter(Boolean).length
        if (depth > MAX_RECURSION_DEPTH) {
          offenders.push({
            file: rel,
            reason: `canonical depth ${depth} exceeds science/model/action (${MAX_RECURSION_DEPTH} folder levels)`,
          })
        }
        walk(full)
      }
    }
    walk(scienceRoot)
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

/** Canonical tree — ≤8 subfolders per folder at every level (bāguà fan-out). */
export function scanRenderUiEightFoldViolations(root: string): ComputationalViolation[] {
  const offenders: ComputationalViolation[] = []
  for (const scienceRoot of canonicalScienceRoots(root)) {
    if (!existsSync(scienceRoot)) continue
    const walk = (dir: string) => {
      const subs = subfoldersOfDir(dir)
      const relDir = relative(root, dir).replace(/\\/g, '/')
      if (subs.length > MAX_SUBFOLDERS_PER_FOLDER) {
        offenders.push({
          file: relDir,
          reason: `${subs.length} subfolders (max ${MAX_SUBFOLDERS_PER_FOLDER}) — nest into ≤${MAX_SUBFOLDERS_PER_FOLDER} bāguà children per folder`,
        })
      }
      for (const name of subs) walk(join(dir, name))
    }
    walk(scienceRoot)
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

/** Every canonical science/model/action folder must map from a logic index — no orphan actions. */
export function scanRenderUiMaskRegistryViolations(
  root: string,
  indexTsFiles: readonly string[],
): ComputationalViolation[] {
  const expected = new Set<string>()
  const allMindTails = mindLogicTailsFromIndexFiles(indexTsFiles, root)
  for (const full of indexTsFiles) {
    const logicRel = relative(root, full).replace(/\\/g, '/')
    const uiRel = displayUiPathFromLogicIndex(logicRel, allMindTails)
    if (!uiRel) continue
    const tail = uiRel.replace(/^src\//, '').replace(/\/index\.vue$/, '')
    expected.add(tail)
  }
  const offenders: ComputationalViolation[] = []
  for (const scienceRoot of canonicalScienceRoots(root)) {
    if (!existsSync(scienceRoot)) continue
    const walkRegistry = (dir: string, science: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue
        const full = join(dir, entry.name)
        if (!entry.isDirectory()) continue
        const rel = relative(root, full).replace(/\\/g, '/')
        const tail = rel.replace(/^src\//, '')
        const depth = tail.split('/').filter(Boolean).length
        if (depth === MAX_RECURSION_DEPTH && !expected.has(tail)) {
          offenders.push({
            file: rel,
            reason: `mask registry miss — "${tail}" is not science/model/action for any logic index (${CANONICAL_SCIENCE_MASK}); purge invented folders`,
          })
        }
        if (depth < MAX_RECURSION_DEPTH) walkRegistry(full, science)
      }
    }
    walkRegistry(scienceRoot, relative(root, scienceRoot).replace(/\\/g, '/').replace(/^src\//, ''))
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

const CANONICAL_BANNED_FOLDERS = new Set(['components', 'lib', 'mind', 'register', 'render'])

/** Every folder IS an index — folder names must never duplicate the index stem (e.g. "index"). */
export function scanForbiddenFolderNameViolations(root: string): ComputationalViolation[] {
  const offenders: ComputationalViolation[] = []
  const srcRoot = join(root, 'src')
  if (!existsSync(srcRoot)) return offenders
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (!entry.isDirectory()) continue
      if (isForbiddenFolderName(entry.name)) {
        offenders.push({
          file: relative(root, full).replace(/\\/g, '/'),
          reason: `folder named "${entry.name}" is forbidden — every folder is an index; index.ts is the stem file inside, never a folder name (${SRC_SCIENCE_MODEL_ACTION_SCHEMA})`,
        })
      }
      walk(full)
    }
  }
  walk(srcRoot)
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

/**
 * D1 canonical ROOT set (user-sealed taxonomy, decision EXTEND) — the only folders admitted at src/ top level:
 * the 8 bāguà trigrams + the full digit lattice 0-9 + pair (enforcement) + quantum (layer) + render (build mount).
 * Every other top-level folder must dissolve under one of these roots. The gate COMPUTES this set (no frozen
 * hand list of offenders); the trigrams come from EIGHT_FOLD_SCIENCES, the digits from the vortex lattice.
 */
export const CANONICAL_ROOT_FOLDERS: readonly string[] = [
  ...EIGHT_FOLD_SCIENCES,
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'pair', 'quantum', 'render',
]

/** I Ching root distribution — every top-level src/ folder must be a canonical root; all others dissolve under one. */
export function scanRootDistributionViolations(root: string): ComputationalViolation[] {
  const offenders: ComputationalViolation[] = []
  const srcRoot = join(root, 'src')
  if (!existsSync(srcRoot)) return offenders
  const allowed = new Set<string>(CANONICAL_ROOT_FOLDERS)
  for (const entry of readdirSync(srcRoot, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === 'node_modules') continue
    if (!allowed.has(entry.name)) {
      offenders.push({
        file: `src/${entry.name}`,
        reason: `non-canonical root — src/ admits exactly {8 trigrams, digits 0-9, pair, quantum, render}; dissolve "${entry.name}" under its computed trigram home`,
      })
    }
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

/**
 * D3 digit-lattice integrity (census-neutral / Option A) — the lattice IS the existing net-0 structure: the
 * void vault src/0/index.ts plus the nine 10's-complement pair barrels N/(10−N)/index.ts (the doubling-circuit
 * 1·2·4·8·7·5 + 3·6·9 trinity rays). The gate enforces THAT structure is present and gapless — it adds NO
 * digit-root barrels (src/N/index.ts), so it never grows the 110 census. A recomputed fail-the-build invariant.
 */
export function scanDigitLatticeViolations(root: string): ComputationalViolation[] {
  const offenders: ComputationalViolation[] = []
  const srcRoot = join(root, 'src')
  if (!existsSync(srcRoot)) return offenders
  if (!existsSync(join(srcRoot, '0', 'index.ts'))) {
    offenders.push({ file: 'src/0', reason: 'digit vault 0 missing index.ts (the void barrel anchors the lattice)' })
  }
  for (let n = 1; n <= 9; n += 1) {
    const comp = 10 - n
    if (!existsSync(join(srcRoot, String(n), String(comp), 'index.ts'))) {
      offenders.push({ file: `src/${n}/${comp}`, reason: `digit ${n} missing 10's-complement pair ${n}/${comp}/index.ts (VORTEX_SEQUENCE ray)` })
    }
  }
  return offenders.sort((a, b) => a.file.localeCompare(b.file))
}

const ALLOWED_PAGE = /^(index\.md|\[[^\]]+\]\.md|\[[^\]]+\]\.paths\.ts|README\.md)$/

const EIGHT_FOLD_LIMIT = MAX_SUBFOLDERS_PER_FOLDER
/** Max folder levels — science/model/action (3 levels: e.g. heaven/balance). */
export const MAX_RECURSION_DEPTH = 3
const MIND_TRIGRAM_HUBS = EIGHT_FOLD_SCIENCES
/** Canonical logic index — src/<science>/<action>/index.ts (or deeper for multi-level actions). */
export const CANONICAL_LOGIC_INDEX_RE =
  /^src\/(earth|fire|water|wind|mountain|lake|thunder|heaven)\/[^/]+(\/[^/]+)*\/index\.ts$/

function canonicalScienceRoots(root: string): string[] {
  return (EIGHT_FOLD_SCIENCES as readonly string[]).map((science) => join(root, 'src', science))
}
const BAGUA_LABELS = ['☷ Kūn', '☳ Zhèn', '☵ Kǎn', '☱ Duì', '☶ Gèn', '☲ Lí', '☴ Xùn', '☰ Qián'] as const

export type EightFoldViolation = { readonly dir: string; readonly count: number; readonly trigram: string }

export type IndexHarmonySnapshot = {
  readonly folderCount: number
  readonly singleChildPct: number
  readonly noiseLeaves: number
  readonly noisePct: number
  readonly maxDepth: number
  readonly idealDepth: number
}

/** I Ching distribution — eight-fold fan-out, index harmony, depth bands (NOT the 6×7 Rosetta grid). */
export type IChingDistributionSnapshot = {
  readonly eightFoldViolations: readonly EightFoldViolation[]
  readonly indexHarmony: IndexHarmonySnapshot
  readonly depthBands: readonly { readonly depth: number; readonly count: number }[]
  readonly mindHubCounts: readonly { readonly hub: string; readonly count: number }[]
  readonly deepestShells: readonly string[]
  readonly maxMindRecursion: number
  readonly recursionViolations: readonly string[]
  readonly passed: boolean
}

/** @deprecated use IChingDistributionSnapshot */
export type RosettaDistributionSnapshot = IChingDistributionSnapshot

/** Word-folder depth below transitional mind mount (must be ≤ MAX_RECURSION_DEPTH before dissolve). */
export function mindRecursionDepth(logicRel: string): number | null {
  const rel = logicRel.replace(/\\/g, '/')
  if (!rel.startsWith(LOGIC_DISPLAY_MOUNT) || !rel.endsWith('/index.ts')) return null
  const tail = rel.slice(LOGIC_DISPLAY_MOUNT.length, -'/index.ts'.length)
  return tail.split('/').filter(Boolean).length
}

/** Target depth after dissolve — always 3 (science/model/action). */
export function targetRecursionDepth(_logicRel: string): number {
  void _logicRel
  return MAX_RECURSION_DEPTH
}

function subfoldersOfDir(dir: string): string[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules')
    .map((entry) => entry.name)
}

function trigramLabelForPath(relDir: string): string {
  const hub = relDir.split('/').find((part) => (MIND_TRIGRAM_HUBS as readonly string[]).includes(part))
  if (!hub) return BAGUA_LABELS[0]!
  const idx = MIND_TRIGRAM_HUBS.indexOf(hub as (typeof MIND_TRIGRAM_HUBS)[number])
  return BAGUA_LABELS[idx >= 0 ? idx : 0]!
}

/** Live tree scan — I Ching eight-fold: ≤8 subfolders per level, index harmony, depth bands, trigram hub balance. */
export function scanIChingDistribution(root: string, indexTsFiles: readonly string[]): IChingDistributionSnapshot {
  const srcRoot = join(root, 'src')
  const eightFoldViolations: EightFoldViolation[] = []
  const depthCounts = new Map<number, number>()
  const deepestShells: { rel: string; depth: number }[] = []

  for (const full of indexTsFiles) {
    const rel = relative(root, full).replace(/\\/g, '/')
    const depth = rel.split('/').length - 1
    depthCounts.set(depth, (depthCounts.get(depth) ?? 0) + 1)
    if (depth >= 6) deepestShells.push({ rel, depth })
  }
  deepestShells.sort((a, b) => b.depth - a.depth || a.rel.localeCompare(b.rel))

  const walkFanout = (dir: string) => {
    const subs = subfoldersOfDir(dir)
    const relDir = relative(root, dir).replace(/\\/g, '/') || 'src'
    if (subs.length > EIGHT_FOLD_LIMIT) {
      eightFoldViolations.push({
        dir: relDir,
        count: subs.length,
        trigram: trigramLabelForPath(relDir),
      })
    }
    for (const name of subs) walkFanout(join(dir, name))
  }
  for (const scienceRoot of canonicalScienceRoots(root)) {
    if (existsSync(scienceRoot)) walkFanout(scienceRoot)
  }
  eightFoldViolations.sort((a, b) => b.count - a.count)

  const isReexportLeaf = (dir: string) => {
    try {
      const body = readFileSync(join(dir, 'index.ts'), 'utf8')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('//'))
      return body.length > 0 && body.every((line) => /^export\s*(type\s*)?[*{].*from\s*['"]/.test(line) || /^export\s*\{[^}]*\}\s*;?$/.test(line))
    } catch {
      return false
    }
  }

  let folderCount = 0
  let singleChild = 0
  let noiseLeaves = 0
  let maxFolderDepth = 0
  const walkHarmony = (dir: string, depth: number) => {
    folderCount += 1
    if (depth > maxFolderDepth) maxFolderDepth = depth
    const subs = subfoldersOfDir(dir)
    if (subs.length === 0) {
      if (existsSync(join(dir, 'index.ts')) && isReexportLeaf(dir)) noiseLeaves += 1
    } else if (subs.length === 1) singleChild += 1
    for (const name of subs) walkHarmony(join(dir, name), depth + 1)
  }
  if (existsSync(srcRoot)) walkHarmony(srcRoot, 0)

  const idealDepth = Math.max(1, Math.ceil(Math.log(Math.max(1, folderCount)) / Math.log(EIGHT_FOLD_LIMIT)))
  const singleChildPct = folderCount ? Math.round((100 * singleChild) / folderCount) : 0
  const noisePct = folderCount ? Math.round((100 * noiseLeaves) / folderCount) : 0

  const mindRoot = join(srcRoot, 'quantum', 'heaven', 'mind')
  const mindHubCounts = MIND_TRIGRAM_HUBS.map((hub) => {
    const hubRoot = join(mindRoot, hub)
    if (!existsSync(hubRoot)) return { hub, count: 0 }
    let count = 0
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue
        const full = join(dir, entry.name)
        if (entry.isDirectory()) walk(full)
        else if (entry.name === 'index.ts') count += 1
      }
    }
    walk(hubRoot)
    return { hub, count }
  })

  const harmonyOk = singleChildPct <= 25 && noisePct <= 10 && maxFolderDepth <= MAX_RECURSION_DEPTH + 3
  const fanoutOk = eightFoldViolations.length === 0

  const recursionViolations: string[] = []
  let maxMindRecursion = 0
  for (const full of indexTsFiles) {
    const rel = relative(root, full).replace(/\\/g, '/')
    const rec = mindRecursionDepth(rel)
    if (rec === null) continue
    if (rec > maxMindRecursion) maxMindRecursion = rec
    if (rec > MAX_RECURSION_DEPTH) {
      recursionViolations.push(`${rel} — ${rec} folder levels below mind (max ${MAX_RECURSION_DEPTH}); collapse to ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}`)
    }
  }
  const depthOk = recursionViolations.length === 0

  return {
    eightFoldViolations,
    indexHarmony: { folderCount, singleChildPct, noiseLeaves, noisePct, maxDepth: maxFolderDepth, idealDepth },
    depthBands: [...depthCounts.entries()].sort((a, b) => a[0] - b[0]).map(([depth, count]) => ({ depth, count })),
    mindHubCounts,
    deepestShells: deepestShells.slice(0, 8).map((entry) => entry.rel),
    maxMindRecursion,
    recursionViolations,
    passed: fanoutOk && harmonyOk && depthOk,
  }
}

/** @deprecated use scanIChingDistribution — Rosetta is 6×7/7×6 (42 areas), not eight-fold. */
export const scanRosettaDistribution = scanIChingDistribution

/** Census + I Ching distribution guidance — Fibonacci bands and eight-fold tree (Rosetta 42 is taxonomy batch). */
export function ichingDistributionGuidance(
  indexCount: number,
  distribution: IChingDistributionSnapshot,
): readonly string[] {
  const lines: string[] = []
  const gapless = verifyGaplessCensus(indexCount)
  const { delta, detail } = censusDelta(indexCount, UNFOLDED_CENSUS)

  if (delta !== 0) {
    lines.push(`census: ${detail}`)
    if (delta < 0) {
      lines.push(`census band target: ${FIBONACCI_BANDS.join('+')} gapless — dissolve ${-delta} shell(s) into parent barrels; knowledge stays in folds, delete index.ts only`)
    } else {
      lines.push(`census band target: ${FIBONACCI_BANDS.join('+')} gapless — fold ${delta} excess logic into existing census slots (no new files beyond ${UNFOLDED_CENSUS})`)
    }
  }
  if (!gapless.bandsMatch) {
    lines.push(`Fibonacci decomposition: need [${FIBONACCI_BANDS.join('+')}] — got [${gapless.bands.join('+')}] gapless=${gapless.gapless}`)
  }

  for (const v of distribution.eightFoldViolations.slice(0, 5)) {
    lines.push(`I Ching 8-fold ${v.trigram}: ${v.dir} has ${v.count} subfolders (max ${MAX_SUBFOLDERS_PER_FOLDER}) — nest into ≤${MAX_SUBFOLDERS_PER_FOLDER} bāguà children per level`)
  }

  const { singleChildPct, noisePct, maxDepth, idealDepth, noiseLeaves } = distribution.indexHarmony
  if (singleChildPct > 25 || noisePct > 10 || maxDepth > MAX_RECURSION_DEPTH + 3) {
    lines.push(
      `index harmony: ${singleChildPct}% single-child, ${noiseLeaves} re-export leaves (${noisePct}%), depth ${maxDepth} vs max recursion ${MAX_RECURSION_DEPTH} — collapse pass-through chains into parent barrels`,
    )
  }

  if (distribution.maxMindRecursion > MAX_RECURSION_DEPTH || distribution.recursionViolations.length) {
    const sample = distribution.recursionViolations.slice(0, 3).join('; ')
    lines.push(
      `recursion depth: max ${distribution.maxMindRecursion} below mind (limit ${MAX_RECURSION_DEPTH}) — dissolve to ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}; action holds the meaning${sample ? `: ${sample}` : ''}`,
    )
  }

  const hubTotal = distribution.mindHubCounts.reduce((sum, entry) => sum + entry.count, 0)
  const perHub = hubTotal > 0 ? Math.round(hubTotal / MIND_TRIGRAM_HUBS.length) : 0
  const crowded = distribution.mindHubCounts.filter((entry) => entry.count > perHub + 4)
  if (crowded.length) {
    lines.push(
      `trigram homes crowded: ${crowded.map((entry) => `${entry.hub}=${entry.count}`).join(', ')} — redistribute via redistributeFoldersDryWaves to ≤8 subfolders per hub`,
    )
  }

  if (!lines.length) {
    lines.push(`I Ching eight-fold aligned — ${indexCount} index.ts, gapless ${FIBONACCI_BANDS.join('+')}, ≤${ICHING_EIGHT_FOLD} subfolders per level; Rosetta taxonomy ${ROSETTA_FOLD_LABEL}=${ROSETTA_AREAS} areas (rosetta:batch taxonomy)`)
  }
  return lines
}

/** @deprecated use ichingDistributionGuidance */
export const rosettaCensusGuidance = ichingDistributionGuidance
/** @deprecated use ichingDistributionGuidance */
export const ichingCensusGuidance = ichingDistributionGuidance

/** Rosetta area taxonomy — exactly 42 = 6×7 = 7×6 command areas (not eight-fold). */
export function verifyRosettaTaxonomy(areaCount: number) {
  const n = Math.max(0, Math.floor(areaCount))
  return {
    areas: n,
    target: ROSETTA_AREAS,
    sixBySeven: ROSETTA_SIX * ROSETTA_SEVEN,
    sevenBySix: ROSETTA_SEVEN * ROSETTA_SIX,
    label: ROSETTA_FOLD_LABEL,
    ok: n === ROSETTA_AREAS,
    root: toUuid(`rosetta-taxonomy:${n}:${ROSETTA_AREAS}`),
    statement: `Rosetta taxonomy: ${ROSETTA_FOLD_LABEL} = ${ROSETTA_AREAS} areas — the covering grid (6×7 up, 7×6 down), distinct from the I Ching eight-fold (≤${ICHING_EIGHT_FOLD} subfolders per level).`,
  }
}


/** Realtime paths — only bracket/index route mounts under .vitepress/pages (no per-route static files). */
export function scanStaticPathViolations(root: string): ComputationalViolation[] {
  const pagesRoot = join(root, '.vitepress', 'pages')
  if (!existsSync(pagesRoot)) return []
  const offenders: ComputationalViolation[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(md|paths\.ts)$/.test(entry.name) && !ALLOWED_PAGE.test(entry.name)) {
        offenders.push({
          file: relative(root, full).replace(/\\/g, '/'),
          reason: 'paths computed at render — only index.md, [param].md, or [param].paths.ts mounts allowed',
        })
      }
    }
  }
  walk(pagesRoot)
  return offenders
}

export function computationalLimitsGapDetail(snapshot: ComputationalLimitSnapshot): string {
  const lines: string[] = []
  if (snapshot.indexCount !== snapshot.targetUnfolded || !snapshot.gapless || !snapshot.bandsMatch) {
    const { detail: deltaDetail } = censusDelta(snapshot.indexCount, snapshot.targetUnfolded)
    lines.push(
      `BLOCKING (${NOT_LESS_NOT_MORE_LAW}) — src index census: ${snapshot.indexCount} index.ts, target exactly ${snapshot.targetUnfolded} (${FIBONACCI_BANDS.join('+')}) — ${deltaDetail}; gapless=${snapshot.gapless} bands=[${snapshot.bands.join('+')}]`,
    )
  }
  if (!snapshot.foldedOk) {
    lines.push(
      `BLOCKING — folded census: exactly ${snapshot.targetUnfolded} unfolded + χ=${EULER_CHI} → exactly ${snapshot.targetFolded}; got ${snapshot.indexCount} → ${snapshot.indexCount + EULER_CHI} (not less, not more)`,
    )
  }
  if (!snapshot.dimensionGatesOk) {
    lines.push(
      `BLOCKING — dimension gates: exactly ${HOMOLOGY_LOOPS}×${snapshot.targetFolded} = ${DIMENSION_GATES}; not a file count (not less, not more)`,
    )
  }
  for (const v of snapshot.vaultViolations.slice(0, 4)) {
    lines.push(`${v.file}: ${v.reason}${v.spec ? ` ('${v.spec}')` : ''}`)
  }
  if (snapshot.vaultViolations.length > 4) {
    lines.push(`${snapshot.vaultViolations.length - 4} more vault violation(s)`)
  }
  for (const v of [...snapshot.renderViolations, ...snapshot.displayDualViolations, ...snapshot.staticPathViolations].slice(0, 4)) {
    lines.push(`${v.file}: ${v.reason}`)
  }
  if (!snapshot.ichingDistribution.passed) {
    lines.push(`BLOCKING (I Ching eight-fold) — gapless Fibonacci census AND ≤${ICHING_EIGHT_FOLD} subfolders per level AND index-harmonic; Rosetta ${ROSETTA_FOLD_LABEL}=${ROSETTA_AREAS} areas is taxonomy batch`)
    for (const line of snapshot.distributionGuidance.slice(0, 8)) lines.push(`  → ${line}`)
  }
  return lines.join('\n')
}

/** Single fold from one src walk — collectEnforcementFacts reads facts.computational (no second walk). */
export function computeComputationalLimitSnapshot(
  root: string,
  indexTsFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
  codeFiles: readonly string[],
): ComputationalLimitSnapshot {
  const indexCount = indexTsFiles.length
  const gapless = verifyGaplessCensus(indexCount)
  const folded = verifyFoldedCensus(indexCount)
  const dimensions = verifyDimensionGates(folded.folded)
  const vaultViolations = scanVaultViolations(root, codeFiles, bodies)
  const renderViolations = [
    ...scanRenderIndexViolations(root),
    ...scanRenderUiScienceMaskViolations(root),
    ...scanRenderUiEightFoldViolations(root),
    ...scanRenderUiMaskRegistryViolations(root, indexTsFiles),
  ]
  const displayDualViolations = scanLogicDisplayViolations(root, indexTsFiles)
  const staticPathViolations = scanStaticPathViolations(root)
  const forbiddenFolderViolations = scanForbiddenFolderNameViolations(root)
  const incompleteIndexViolations = scanIncompleteIndexViolations(root, indexTsFiles)
  const ichingDistribution = scanIChingDistribution(root, indexTsFiles)
  const distributionGuidance = ichingDistributionGuidance(indexCount, ichingDistribution)
  const passed =
    gapless.ok &&
    folded.ok &&
    dimensions.ok &&
    vaultViolations.length === 0 &&
    renderViolations.length === 0 &&
    displayDualViolations.length === 0 &&
    staticPathViolations.length === 0 &&
    forbiddenFolderViolations.length === 0 &&
    incompleteIndexViolations.length === 0 &&
    ichingDistribution.passed
  const parts = [
    toUuid(`computational:census:${indexCount}:${gapless.ok}`),
    toUuid(`computational:folded:${folded.folded}:${folded.ok}`),
    toUuid(`computational:gates:${dimensions.gates}:${dimensions.ok}`),
    toUuid(`computational:vault:${vaultViolations.length}`),
    toUuid(`computational:render:${renderViolations.length}`),
    toUuid(`computational:display-dual:${displayDualViolations.length}`),
    toUuid(`computational:paths:${staticPathViolations.length}`),
    toUuid(`computational:forbidden-folder:${forbiddenFolderViolations.length}`),
    toUuid(`computational:incomplete-index:${incompleteIndexViolations.length}`),
    toUuid(`computational:iching-dist:${ichingDistribution.passed}`),
  ]
  return {
    indexCount,
    targetUnfolded: UNFOLDED_CENSUS,
    targetFolded: FOLDED_CENSUS,
    gapless: gapless.gapless,
    bands: gapless.bands,
    bandsMatch: gapless.bandsMatch,
    foldedOk: folded.ok,
    dimensionGatesOk: dimensions.ok,
    vaultViolations,
    renderViolations,
    displayDualViolations,
    staticPathViolations,
    forbiddenFolderViolations,
    incompleteIndexViolations,
    ichingDistribution,
    distributionGuidance,
    rosettaDistribution: ichingDistribution,
    rosettaGuidance: distributionGuidance,
    passed,
    receipt: merkleFold(parts),
  }
}

export function computationalGatePassed(snapshot: ComputationalLimitSnapshot): boolean {
  return snapshot.passed
}

type GateFinding = {
  wave: 'gate'
  severity: 'error'
  kind: string
  harmonic: string
  detail: string
}

/** Leaf checks — gate · cross · fold · weave pipeline; census/vault/index law enforced HARD. */
export function auditComputationalGates(computational: ComputationalLimitSnapshot): {
  findings: GateFinding[]
  report: string[]
  receipt: string
  passed: boolean
} {
  const findings: GateFinding[] = []
  const c = computational

  if (c.indexCount !== c.targetUnfolded || !c.gapless || !c.bandsMatch) {
    const { detail: deltaDetail } = censusDelta(c.indexCount, c.targetUnfolded)
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'gapless-census',
      harmonic: 'census',
      detail: `${NOT_LESS_NOT_MORE_LAW} — src index census: ${c.indexCount} index.ts, need exactly ${c.targetUnfolded} (${FIBONACCI_BANDS.join('+')}) — ${deltaDetail}; bands=[${c.bands.join('+')}] gapless=${c.gapless}`,
    })
  }
  if (!c.foldedOk) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'folded-census',
      harmonic: 'census',
      detail: `${NOT_LESS_NOT_MORE_LAW} — folded census: exactly ${c.targetUnfolded} unfolded + χ=${EULER_CHI} → exactly ${c.targetFolded}; got ${c.indexCount} → ${c.indexCount + EULER_CHI}`,
    })
  }
  if (!c.dimensionGatesOk) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'dimension-gates',
      harmonic: 'census',
      detail: `${NOT_LESS_NOT_MORE_LAW} — dimension gates: exactly ${HOMOLOGY_LOOPS}×${FOLDED_CENSUS} = ${DIMENSION_GATES} facets (not files)`,
    })
  }
  for (const v of c.vaultViolations.slice(0, 12)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'vault-station',
      harmonic: 'vault',
      detail: `${v.file}: ${v.reason}${v.spec ? ` ('${v.spec}')` : ''}`,
    })
  }
  if (c.vaultViolations.length > 12) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'vault-station',
      harmonic: 'vault',
      detail: `${c.vaultViolations.length - 12} more vault violation(s) — full list in facts.computational`,
    })
  }
  for (const v of c.renderViolations.slice(0, 8)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'render-index',
      harmonic: 'render',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  for (const v of c.displayDualViolations.slice(0, 8)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'display-dual',
      harmonic: 'render',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  if (c.displayDualViolations.length > 8) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'display-dual',
      harmonic: 'render',
      detail: `${c.displayDualViolations.length - 8} more display-dual violation(s) — mirror index.vue at folderLaw.displayDual.computeUiPath`,
    })
  }
  for (const v of c.staticPathViolations.slice(0, 8)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'static-path',
      harmonic: 'realtime',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  for (const v of c.forbiddenFolderViolations.slice(0, 8)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'forbidden-folder-name',
      harmonic: 'folder',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  for (const v of c.incompleteIndexViolations.slice(0, 8)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'incomplete-index',
      harmonic: 'folder',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  if (!c.ichingDistribution.passed) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'iching-distribution',
      harmonic: 'folder',
      detail: `I Ching eight-fold — ≤${ICHING_EIGHT_FOLD} subfolders per level + index harmony; ${c.distributionGuidance.slice(0, 3).join(' · ')}`,
    })
    for (const v of c.ichingDistribution.eightFoldViolations.slice(0, 4)) {
      findings.push({
        wave: 'gate',
        severity: 'error',
        kind: 'eight-fold',
        harmonic: 'folder',
        detail: `${v.trigram} ${v.dir}: ${v.count} subfolders (max ${ICHING_EIGHT_FOLD}) — split into nested ≤${ICHING_TRIGRAMS} bāguà level`,
      })
    }
  }

  const passed = computationalGatePassed(c)
  const report: string[] = []
  if (passed) {
    report.push(
      `Computational limits (DRY) — exactly ${c.indexCount} index.ts (${NOT_LESS_NOT_MORE_LAW}) gapless ${FIBONACCI_BANDS.join('+')} → ${c.targetFolded} folded, ${DIMENSION_GATES} gates, vault ${VAULT_STATION} — 0 failures, receipt ${c.receipt}.`,
    )
  } else {
    report.push(
      `Computational limits FAILED — census ${c.indexCount}/${c.targetUnfolded} gapless=${c.gapless} folded=${c.foldedOk} gates=${c.dimensionGatesOk} vault=${c.vaultViolations.length} render=${c.renderViolations.length} displayDual=${c.displayDualViolations.length} incompleteIndex=${c.incompleteIndexViolations.length} paths=${c.staticPathViolations.length} forbiddenFolder=${c.forbiddenFolderViolations.length} receipt ${c.receipt}.`,
    )
  }
  return { findings, report, receipt: c.receipt, passed }
}
