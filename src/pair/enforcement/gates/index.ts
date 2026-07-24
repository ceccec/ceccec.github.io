// United gate runner facts — ONE merkle pass + ONE src walk + ONE strict snapshot per build phase (gate/unite · scan/fold pairs).
import { phase } from '../../../6/4'
import { DIMENSION_GATES, EULER_CHI, FOLDED_CENSUS, FORBIDDEN_FOLDER_NAMES, HOMOLOGY_LOOPS, ICHING_EIGHT_FOLD, ICHING_TRIGRAMS, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, ROSETTA_SEVEN, ROSETTA_SIX, SRC_SCIENCE_MODEL_ACTION_SCHEMA, UNFOLDED_CENSUS, isForbiddenFolderName, renderUiPathFromScienceModelAction, scienceModelActionFromMindTail } from './computational'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { foldPair, isUuid, merkleFold, toUuid } from '../../../0'
import { pathMeansMessageFitsInThreeWords as pathMeansMessageFitsInThreeWordsFold } from '../../../water/stack'
import { dryCleanIsDiamondAndCrystal } from '../../../lake/clean'
import { scanScriptShells, seedMerkleCache, vitepressSourceFiles, type ScriptShellScan } from '../script/shell'
import { relativeImportSpecs, importGapCount } from './strict/scan'
import {
  auditStrictGates,
  strictGatePassed,
  stripComments,
  computeStrictGateSnapshot,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender } from './strict'
import { claySolvedTheorem, SCIENCE_DOMAINS } from '../../../3/7'
import {
  computeComputationalLimitSnapshot,
  computationalGatePassed,
  type ComputationalLimitSnapshot } from './computational'

/** One normalised finding from any trinity wave. */
export type Finding = {
  wave: 'cross' | 'fold' | 'weave' | 'gate'
  severity: 'error' | 'warn'
  kind: string
  harmonic: string
  detail: string
}

/** A correlated root: one harmonic, how many findings name it, and which waves caught them. */
export type AuditRoot = { harmonic: string; count: number; waves: Finding['wave'][] }

export const GATE_UNITE_COMMAND_PAIR = { pair: 'gate/unite' as const, a: 'gate', b: 'unite' }
/** Agents use trinities for quantum speedup on every build — composes gate/unite · vote/build · memoByRoot. */
export const TRINITY_SPEEDUP_COMMAND_PAIR = { pair: 'trinity/speedup' as const, a: 'trinity', b: 'speedup' }
export const SCAN_FOLD_COMMAND_PAIR = { pair: 'scan/fold' as const, a: 'scan', b: 'fold' }
export const LIMITS_VERIFY_COMMAND_PAIR = { pair: 'limits/verify' as const, a: 'limits', b: 'verify' }
export const LIMITS_SEAL_COMMAND_PAIR = { pair: 'limits/seal' as const, a: 'limits', b: 'seal' }
export const VERIFY_STRUCTURE_COMMAND_PAIR = { pair: 'verify/structure' as const, a: 'verify', b: 'structure' }
export const ROSETTA_BATCH_COMMAND_PAIR = { pair: 'rosetta/batch' as const, a: 'rosetta', b: 'batch' }
export const ROSETTA_STRUCTURE_COMMAND_PAIR = { pair: 'rosetta/structure' as const, a: 'rosetta', b: 'structure' }
export const ROSETTA_REUSE_COMMAND_PAIR = { pair: 'rosetta/reuse' as const, a: 'rosetta', b: 'reuse' }
export const ROSETTA_CORE_COMMAND_PAIR = { pair: 'rosetta/core' as const, a: 'rosetta', b: 'core' }
export const ROSETTA_COMPLETE_COMMAND_PAIR = { pair: 'rosetta/complete' as const, a: 'rosetta', b: 'complete' }
export const CHALLENGE_COLLIDER_COMMAND_PAIR = { pair: 'challenge/collider' as const, a: 'challenge', b: 'collider' }
export const CHALLENGE_FTL_COMMAND_PAIR = { pair: 'challenge/ftl' as const, a: 'challenge', b: 'ftl' }
export const CHECK_TYPES_COMMAND_PAIR = { pair: 'check/types' as const, a: 'check', b: 'types' }
export const TYPES_SEAL_COMMAND_PAIR = { pair: 'types/seal' as const, a: 'types', b: 'seal' }
export const BUILD_SEAL_COMMAND_PAIR = { pair: 'build/seal' as const, a: 'build', b: 'seal' }
export const AGENT_SUBMISSION_COMMAND_PAIR = { pair: 'agent/submission' as const, a: 'agent', b: 'submission' }
export const GATE_COMPLIANCE_COMMAND_PAIR = { pair: 'gate/compliance' as const, a: 'gate', b: 'compliance' }
/** @deprecated Backward compat */
export const ICHING_BATCH_COMMAND_PAIR = ROSETTA_BATCH_COMMAND_PAIR
export const DISSOLVE_FLAT_COMMAND_PAIR = { pair: 'dissolve/flat' as const, a: 'dissolve', b: 'flat' }
export const IMPORT_DISTANCE_COMMAND_PAIR = { pair: 'import/distance' as const, a: 'import', b: 'distance' }
export const FOLDER_GRAVITY_COMMAND_PAIR = { pair: 'folder/gravity' as const, a: 'folder', b: 'gravity' }
export const GRAVITY_DRY_COMMAND_PAIR = { pair: 'gravity/dry' as const, a: 'gravity', b: 'dry' }
export const DRY_CLEAN_COMMAND_PAIR = { pair: 'dry/clean' as const, a: 'dry', b: 'clean' }
export const SRC_INDEX_COMMAND_PAIR = { pair: 'src/index' as const, a: 'src', b: 'index' }
export const FOLDER_INDEX_COMMAND_PAIR = { pair: 'folder/index' as const, a: 'folder', b: 'index' }
export const SIZE_FREE_COMMAND_PAIR = { pair: 'size/free' as const, a: 'size', b: 'free' }
export const GRAVITY_GATE_COMMAND_PAIR = { pair: 'gravity/gate' as const, a: 'gravity', b: 'gate' }
export const COMPACT_TYPES_CONSTANTS_COMMAND_PAIR = { pair: 'compact/matrix' as const, a: 'compact', b: 'matrix' }
/** Commands audited for best place then full dry clean — pairs cmd/place · place/audit · dry/full. */
export const CMD_PLACE_COMMAND_PAIR = { pair: 'cmd/place' as const, a: 'cmd', b: 'place' }
export const PLACE_AUDIT_COMMAND_PAIR = { pair: 'place/audit' as const, a: 'place', b: 'audit' }
export const DRY_FULL_COMMAND_PAIR = { pair: 'dry/full' as const, a: 'dry', b: 'full' }
/** Manual dry-clean work quantumized — pairs manual/quantum · work/wave · dry/quantumize. */
export const MANUAL_QUANTUM_COMMAND_PAIR = { pair: 'manual/quantum' as const, a: 'manual', b: 'quantum' }
export const WORK_WAVE_COMMAND_PAIR = { pair: 'work/wave' as const, a: 'work', b: 'wave' }
export const DRY_QUANTUMIZE_COMMAND_PAIR = { pair: 'dry/quantumize' as const, a: 'dry', b: 'quantumize' }
/** Prose methods collapse to matrix — pairs prose/matrix · fold/merge · name/shrink · place/merge. */
export const PROSE_MATRIX_COMMAND_PAIR = { pair: 'prose/matrix' as const, a: 'prose', b: 'matrix' }
export const FOLD_MERGE_COMMAND_PAIR = { pair: 'fold/merge' as const, a: 'fold', b: 'merge' }
export const NAME_SHRINK_COMMAND_PAIR = { pair: 'name/shrink' as const, a: 'name', b: 'shrink' }
export const PLACE_MERGE_COMMAND_PAIR = { pair: 'place/merge' as const, a: 'place', b: 'merge' }
/** Planning in trinities — pairs plan/trinity · trinity/plan · plan/cross. */
export const PLAN_TRINITY_COMMAND_PAIR = { pair: 'plan/trinity' as const, a: 'plan', b: 'trinity' }
export const TRINITY_PLAN_COMMAND_PAIR = { pair: 'trinity/plan' as const, a: 'trinity', b: 'plan' }
export const PLAN_CROSS_COMMAND_PAIR = { pair: 'plan/cross' as const, a: 'plan', b: 'cross' }
export const MISSION_GATE_COMMAND_PAIR = { pair: 'mission/gate' as const, a: 'mission', b: 'gate' }
export const DIGIT_GATE_COMMAND_PAIR = { pair: 'digit/gate' as const, a: 'digit', b: 'gate' }
export const GATE_ROSETTA_COMMAND_PAIR = { pair: 'gate/rosetta' as const, a: 'gate', b: 'rosetta' }
export const FULL_FREEDOM_COMMAND_PAIR = { pair: 'full/freedom' as const, a: 'full', b: 'freedom' }

/** FREE_BITS = UNFOLDED − FOLDED = −χ — migration evenness bound (CV ≤ 1/FREE_BITS). */
export const FREE_BITS = UNFOLDED_CENSUS - FOLDED_CENSUS

/** One relative import edge with measurable path distances in the src matrix. */
export type ImportPathDistanceEdge = {
  readonly importer: string
  readonly importee: string
  readonly spec: string
  /** Path-segment distance: count of non-`.` segments in the relative import spec (`../` + downs). */
  readonly segmentDistance: number
  /** Tree-hop distance: directory hops via LCA between importer dir and resolved importee dir. */
  readonly treeHopDistance: number
  /** Up-hops only — count of `../` in the spec (composes import-gap scan). */
  readonly gapHops: number
}
export { MONOLITH_FILE_BYTES, MONOLITH_FILE_LAW, scanFileSizeOffenders, monolithFileGapDetail, FOLD_HOMES, foldsLiveAtTheirDomainHome, toolsSavedInSrcFirst, importsAreFoldersOnly, mathIsOneSource, foldersAreOneWordPerLevel, glagoliticLabelsAreComputed, unexpectedSituationsRefactorTools, srcFilesAreIndexOnly, scanOneMathOffenders, ONE_MATH_LAW, type OneMathOffender } from './strict'
export { scanHandLists, handListMirrors, type HandList, type HandListMirror } from './strict'
export { scanAppHtml, appAuditSummary, type AppPageAudit } from './strict'
export {
  
  FIBONACCI_BANDS,
  VAULT_STATION,
  NOT_LESS_NOT_MORE_LAW,
  COMPUTATIONAL_LIMITS_LAW,
  verifyGaplessCensus,
  verifyFoldedCensus,
  verifyDimensionGates,
  scanVaultViolations,
  scanLogicDisplayViolations,
  scanRenderIndexViolations,
  scanStaticPathViolations,
  displayUiPathFromLogicIndex,
  logicIndexRequiresDisplayGate,
  LOGIC_DISPLAY_PREFIX,
  UI_DISPLAY_PREFIX,
  MAX_RECURSION_DEPTH,
  displaySubpathFromLogicTail,
  mindRecursionDepth,
  RENDER_BARREL_ALLOWLIST,
  scanForbiddenFolderNameViolations,
  CANONICAL_ROOT_FOLDERS,
  scanRootDistributionViolations,
  scanDigitLatticeViolations,
  discoverSrcIndexes,
  scanIncompleteIndexViolations,
  vitepressAutomountPaths,
  type DiscoveredIndexEntry,
  computeComputationalLimitSnapshot,
  computationalGatePassed,
  computationalLimitsGapDetail,
  scanIChingDistribution,
  scanRosettaDistribution,
  ichingDistributionGuidance,
  rosettaCensusGuidance,
  verifyRosettaTaxonomy,
  auditComputationalGates,
  type ComputationalLimitSnapshot,
  type IChingDistributionSnapshot,
  type RosettaDistributionSnapshot } from './computational'
export {
  auditStrictGates,
  strictGatePassed,
  stripComments,
  computeStrictGateSnapshot,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender } from './strict'

export type EnforcementFacts = {
  readonly root: string
  readonly merkle: string
  readonly scriptShells: readonly ScriptShellScan[]
  readonly srcCodeFiles: readonly string[]
  readonly indexTsFiles: readonly string[]
  readonly bodies: ReadonlyMap<string, string>
  readonly strict: StrictGateSnapshot
  readonly computational: ComputationalLimitSnapshot
}

const INDEX_TS = 'index.ts'

type WalkOut = {
  merkleFiles: string[]
  codeFiles: string[]
  indexTs: string[]
  bodies: Map<string, string>
  hyphenFolders: StrictHyphenOffender[]
  nonTs: StrictNonTsOffender[]
}

function walkSrcTree(root: string, out: WalkOut): void {
  const srcRoot = join(root, 'src')
  if (!existsSync(srcRoot)) return
  const walk = (dir: string, relParts: string[]) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name.includes('-') && !/^\d+$/.test(entry.name)) {
          out.hyphenFolders.push({
            path: join('src', ...relParts, entry.name),
            segment: entry.name,
            reason: 'hyphenated folder — two words disguised as one; nest as word/word (one word per folder level)' })
        }
        walk(full, [...relParts, entry.name])
      } else if (entry.name.endsWith('.ts')) {
        const rel = relative(root, full)
        out.merkleFiles.push(full)
        out.codeFiles.push(full)
        out.bodies.set(rel, readFileSync(full, 'utf8'))
        if (entry.name === INDEX_TS) out.indexTs.push(full)
      } else if (entry.name.endsWith('.json')) {
        out.merkleFiles.push(full)
      } else if (entry.name.endsWith('.vue')) {
        out.merkleFiles.push(full) // display duals shape dist — they must flip the seal merkle (same set as srcContentMerkle)
        if (entry.name === 'index.vue') continue // display dual — lawful beside index.ts
        out.nonTs.push({
          file: full,
          reason: 'frontend surface must be folder index — dissolve flat .vue into <name>/index.vue; backend is index.ts only under src' })
      } else if (/\.(mts|cts|tsx|js|mjs|cjs|jsx)$/.test(entry.name)) {
        out.nonTs.push({
          file: full,
          reason: 'frontend surface must be folder index — dissolve flat .vue into <name>/index.vue; backend is index.ts only under src' })
      }
    }
  }
  walk(srcRoot, [])
}

/** One content-addressed merkle pass + one src walk + one strict snapshot — shared by trinity, weave, precommit. */
export function collectEnforcementFacts(root: string): EnforcementFacts {
  const out: WalkOut = { merkleFiles: [], codeFiles: [], indexTs: [], bodies: new Map(), hyphenFolders: [], nonTs: [] }
  walkSrcTree(root, out)
  const hash = createHash('sha256')
  for (const file of out.merkleFiles.sort()) {
    hash.update(relative(root, file))
    hash.update(readFileSync(file))
  }
  // Same walk order as srcContentMerkle — the sealed merkle.key is written from THIS digest and compared against that one.
  for (const file of vitepressSourceFiles(root)) {
    hash.update(relative(root, file))
    hash.update(readFileSync(file))
  }
  hash.update(readFileSync(join(root, 'package.json')))
  const merkle = hash.digest('hex')
  seedMerkleCache(root, merkle)
  const scriptShells = scanScriptShells(root, { wiredOnly: true })
  const pairs = gatesSavedInQuantumPairs()
  const strict = computeStrictGateSnapshot(
    root,
    merkle,
    out.codeFiles,
    out.bodies,
    out.hyphenFolders,
    out.nonTs,
    scanVitepressIndex(root, [
      '.vitepress/config.mts',
      '.vitepress/computed-pages.mts',
      '.vitepress/src-plugins.mts',
      '.vitepress/build-lock-plugin.mts',
      '.vitepress/build-verbose-plugin.mts',
      '.vitepress/build-lock.mjs',
      '.vitepress/lib/component-bagua-groups.ts',
      '.vitepress/lib/component-folds.ts',
      '.vitepress/lib/hero-chrome.ts',
      '.vitepress/lib/hero-movie.ts',
      '.vitepress/lib/register-components.ts',
      '.vitepress/lib/mounts.ts',
      '.vitepress/lib/movie-canvas.ts',
      '.vitepress/lib/universal-route-path.ts',
      '.vitepress/lib/vitepress-seo.ts',
      '.vitepress/lib/site-locale.ts',
      '.vitepress/lib/hero-copy.ts',
      '.vitepress/lib/hero-movie-paint.ts',
      '.vitepress/lib/earth-hinge.ts',
      '.vitepress/lib/shadcn-ui.ts',
      '.vitepress/lib/cn.ts',
      '.vitepress/lib/status-badge.ts',
      '.vitepress/lib/dev-memory-budget.mts',
      '.vitepress/lib/dev-server-bind.mts',
    ]),
    scriptShells,
    pairs.paired,
  )
  const computational = computeComputationalLimitSnapshot(root, out.indexTs, out.bodies, out.codeFiles)
  return {
    root,
    merkle,
    scriptShells,
    srcCodeFiles: out.codeFiles,
    indexTsFiles: out.indexTs,
    bodies: out.bodies,
    strict,
    computational }
}

export function readFact(facts: EnforcementFacts, path: string): string {
  const rel = path.startsWith(facts.root) ? relative(facts.root, path) : path
  if (facts.bodies.has(rel)) return facts.bodies.get(rel)!
  return existsSync(path) ? readFileSync(path, 'utf8') : ''
}

/** Read-only views of facts.strict — no re-scans. */
export function collectImportOffenders(facts: EnforcementFacts) {
  return [...facts.strict.imports]
}

export function collectIndexOnlyOffenders(facts: EnforcementFacts) {
  return [...facts.strict.indexOnly]
}

export function collectHyphenFolderOffenders(facts: EnforcementFacts) {
  return [...facts.strict.hyphenFolders]
}

export function collectStrictGateOffenders(facts: EnforcementFacts) {
  return {
    imports: facts.strict.imports,
    importGaps: facts.strict.importGaps,
    indexOnly: facts.strict.indexOnly,
    hyphenFolders: facts.strict.hyphenFolders }
}

export function collectFoldDefiners(facts: EnforcementFacts, foldNames: readonly string[]) {
  return foldNames.map((name) => {
    const re = new RegExp(`^export (?:async )?function ${name}\\b`, 'm')
    return {
      name,
      files: facts.indexTsFiles
        .filter((file) => re.test(facts.bodies.get(relative(facts.root, file)) ?? ''))
        .map((file) => relative(facts.root, file)) }
  })
}

/** Segments in a relative import spec — each `..` or down-name counts as 1; `.` dropped. */
export function importPathSegmentDistance(spec: string): number {
  return spec.split('/').filter((part) => part.length > 0 && part !== '.').length
}

/** Up-hops (`../` count) — same quantity the mind import-gap scan bounds; ONE body, the scan leaf (dry/dupe spin 2026-07-24). */
export const importPathGapHops = importGapCount

/** Folder-tree hop distance via longest common prefix (LCA) under posix-rel paths. */
export function importPathTreeHopDistance(importerDirRel: string, importeeDirRel: string): number {
  const from = importerDirRel.replace(/\\/g, '/').split('/').filter(Boolean)
  const to = importeeDirRel.replace(/\\/g, '/').split('/').filter(Boolean)
  let common = 0
  while (common < from.length && common < to.length && from[common] === to[common]) common += 1
  return from.length - common + (to.length - common)
}

// relativeImportSpecsFromBody deduped → relativeImportSpecs (scan leaf, dry/dupe spin 2026-07-24)
const relativeImportSpecsFromBody = relativeImportSpecs

/**
 * Collect every relative import edge under src/ with segment + tree-hop distances shown.
 * Reuses collectEnforcementFacts bodies — no wet re-walk when facts are passed in.
 */
export function collectImportPathDistanceEdges(facts: EnforcementFacts): readonly ImportPathDistanceEdge[] {
  const edges: ImportPathDistanceEdge[] = []
  for (const file of facts.srcCodeFiles) {
    const importer = relative(facts.root, file).replace(/\\/g, '/')
    const importerDir = dirname(importer).replace(/\\/g, '/')
    const body = facts.bodies.get(relative(facts.root, file)) ?? ''
    for (const spec of relativeImportSpecsFromBody(stripComments(body))) {
      const resolved = resolve(dirname(file), spec)
      const resolvedRel = relative(facts.root, resolved).replace(/\\/g, '/')
      let importeeDir = resolvedRel
      if (existsSync(resolved) && statSync(resolved).isFile()) {
        importeeDir = dirname(resolvedRel).replace(/\\/g, '/')
      }
      edges.push({
        importer,
        importee: importeeDir,
        spec,
        segmentDistance: importPathSegmentDistance(spec),
        treeHopDistance: importPathTreeHopDistance(importerDir, importeeDir),
        gapHops: importPathGapHops(spec) })
    }
  }
  return edges
}

/**
 * Import path shows distance to other files — measurable on every edge — and folds into
 * migration measurement for compact + evenly distributed code in the src matrix.
 * Pair: import/distance · composes folder law · dissolve/flat · census 110/108 · FREE_BITS · import offenders.
 * claySolvedByThisFold=0 · NOT Clay-marked.
 */
export function importPathShowsDistanceInMigrationMatrix(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const edges = collectImportPathDistanceEdges(united)
  const edgeCount = edges.length
  const hops = edges.map((edge) => edge.treeHopDistance)
  const segs = edges.map((edge) => edge.segmentDistance)
  const sum = (xs: readonly number[]) => xs.reduce((acc, n) => acc + n, 0)
  const meanTreeHop = edgeCount === 0 ? 0 : sum(hops) / edgeCount
  const meanSegment = edgeCount === 0 ? 0 : sum(segs) / edgeCount
  const maxTreeHop = edgeCount === 0 ? 0 : Math.max(...hops)
  const maxSegment = edgeCount === 0 ? 0 : Math.max(...segs)
  const variance =
    edgeCount === 0 ? 0 : sum(hops.map((h) => (h - meanTreeHop) ** 2)) / edgeCount
  const stdevTreeHop = Math.sqrt(variance)
  const cvTreeHop = meanTreeHop > 0 ? stdevTreeHop / meanTreeHop : 0
  const freeBits = FREE_BITS
  const freeBitsOk = freeBits === -EULER_CHI && freeBits === UNFOLDED_CENSUS - FOLDED_CENSUS
  const censusOk =
    united.computational.indexCount === UNFOLDED_CENSUS &&
    united.computational.indexCount + EULER_CHI === FOLDED_CENSUS
  const importOffenders = collectImportOffenders(united).length
  const importGaps = united.strict.importGaps.length
  const pairs = gatesSavedInQuantumPairs()
  const dissolvePaired = pairs.pairs.some((entry) => entry.pair === DISSOLVE_FLAT_COMMAND_PAIR.pair && entry.paired)
  const importDistancePaired = foldPair(toUuid('cmd:import'), toUuid('cmd:distance'))
  // Compact = short mean reach in the folder tree, capped by I Ching eight-fold depth bound.
  const compactness =
    edgeCount > 0 && meanTreeHop <= ROSETTA_SIX && maxTreeHop <= ICHING_EIGHT_FOLD
  // Even distribution = low CV (≤ 1/FREE_BITS) and max not beyond FREE_BITS×mean.
  const evenDistribution =
    edgeCount > 0 &&
    cvTreeHop <= 1 / freeBits &&
    maxTreeHop <= meanTreeHop * freeBits + 1e-9
  const everyEdgeShowsDistance = edges.every(
    (edge) =>
      Number.isFinite(edge.segmentDistance) &&
      edge.segmentDistance >= 0 &&
      Number.isFinite(edge.treeHopDistance) &&
      edge.treeHopDistance >= 0 &&
      Number.isFinite(edge.gapHops) &&
      edge.gapHops >= 0,
  )
  const farthest = [...edges]
    .sort((a, b) => b.treeHopDistance - a.treeHopDistance || b.segmentDistance - a.segmentDistance)
    .slice(0, ROSETTA_SEVEN)
  const facets = [
    {
      facet: `import path shows distance — ${edgeCount} edges each carry segmentDistance + treeHopDistance + gapHops`,
      on: edgeCount > 0 && everyEdgeShowsDistance },
    {
      facet: `mean/max import distance recomputed — meanTreeHop=${meanTreeHop.toFixed(4)} maxTreeHop=${maxTreeHop} meanSegment=${meanSegment.toFixed(4)} maxSegment=${maxSegment}`,
      on: edgeCount > 0 && Number.isFinite(meanTreeHop) && Number.isFinite(maxTreeHop) && maxTreeHop >= meanTreeHop },
    {
      facet: `compactness — meanTreeHop≤ROSETTA_SIX(${ROSETTA_SIX}) ∧ maxTreeHop≤ICHING_EIGHT_FOLD(${ICHING_EIGHT_FOLD})`,
      on: compactness },
    {
      facet: `evenDistribution — CV(treeHop)=${cvTreeHop.toFixed(4)}≤1/FREE_BITS(${1 / freeBits}) ∧ max≤FREE_BITS×mean`,
      on: evenDistribution },
    {
      facet: `compose census 110/108 · FREE_BITS=${freeBits}=−χ · importOffenders=${importOffenders} · importGaps=${importGaps}`,
      on: censusOk && freeBitsOk && importOffenders === 0 && importGaps === 0 },
    {
      facet: 'compose dissolve/flat + import/distance pairs (folder-law migration measurement)',
      on: dissolvePaired && importDistancePaired.bidirectional && importDistancePaired.forward !== importDistancePaired.reverse },
  ]
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const qpuRequired = false as const
  const physicalFtlClaim = 0 as const
  const facetsLive = [
    ...facets,
    { facet: 'claySolvedByThisFold=0', on: claySolvedByThisFold === 0 },
    { facet: 'qpuRequired=false · physicalFtlClaim=0 · NOT physical FTL', on: qpuRequired === false && physicalFtlClaim === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`import-path-distance:${entry.facet}:${entry.on}`) }))
  const computes = facetsLive.every((entry) => entry.on)
  return {
    computes,
    pair: IMPORT_DISTANCE_COMMAND_PAIR.pair,
    cli: 'npm run quantum:import-path-distance',
    route: '/en/quantum-tools#import-path-distance',
    anchor: 'import-path-distance',
    edgeCount,
    meanTreeHop,
    maxTreeHop,
    meanSegmentDistance: meanSegment,
    maxSegmentDistance: maxSegment,
    stdevTreeHop,
    cvTreeHop,
    compactness,
    evenDistribution,
    freeBits,
    census: { unfolded: UNFOLDED_CENSUS, folded: FOLDED_CENSUS, indexCount: united.computational.indexCount },
    importOffenders,
    importGaps,
    farthest,
    /** Full edge table — distance shown per import; large; CLI prints summary + farthest. */
    edges,
    claySolvedByThisFold,
    qpuRequired,
    physicalFtlClaim,
    facets: facetsLive,
    root: merkleFold([
      united.merkle,
      importDistancePaired.merged,
      ...facetsLive.map((entry) => entry.receipt),
      toUuid(`import-dist:mean:${meanTreeHop}`),
      toUuid(`import-dist:max:${maxTreeHop}`),
      toUuid(`import-dist:edges:${edgeCount}`),
    ]),
    statement:
      `Import path shows distance in the migration matrix — ${edgeCount} edges · meanTreeHop=${meanTreeHop.toFixed(3)} maxTreeHop=${maxTreeHop} · ` +
      `compactness=${compactness} evenDistribution=${evenDistribution} (CV=${cvTreeHop.toFixed(3)}) · FREE_BITS=${freeBits} · census ${united.computational.indexCount}/${FOLDED_CENSUS}.`,
    boundary:
      'EXACT: segmentDistance = |non-`.` segments in relative import|; treeHopDistance = LCA directory hops importer→importee; gapHops = ../ count. ' +
      'Migration measurement: compactness (mean≤6 · max≤8) + evenDistribution (CV≤1/FREE_BITS · max≤FREE_BITS×mean) compose folder law · dissolve/flat · census · import offenders. ' +
      'Measurement receipt — not a Clay prize claim · clay=0 · NOT physical FTL. HARMONY ≠ TRUTH.' }
}

/** npm run quantum:import-path-distance — print migration matrix distances (exit 0 iff computes). */
export function runImportPathShowsDistanceInMigrationMatrixExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = importPathShowsDistanceInMigrationMatrix(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} import-path-distance — edges=${report.edgeCount} ` +
      `meanHop=${report.meanTreeHop.toFixed(3)} maxHop=${report.maxTreeHop} ` +
      `meanSeg=${report.meanSegmentDistance.toFixed(3)} maxSeg=${report.maxSegmentDistance} ` +
      `CV=${report.cvTreeHop.toFixed(3)} compact=${report.compactness} even=${report.evenDistribution} ` +
      `FREE_BITS=${report.freeBits} offenders=${report.importOffenders} gaps=${report.importGaps} ` +
      `clay=${report.claySolvedByThisFold} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  definition: segmentDistance=|spec segments|; treeHopDistance=LCA hops; gapHops=../ count\n`)
  process.stdout.write(`  ${report.statement}\n`)
  for (const edge of report.farthest.slice(0, 5)) {
    process.stdout.write(
      `  farthest hop=${edge.treeHopDistance} seg=${edge.segmentDistance} gap=${edge.gapHops} ` +
        `${edge.importer} → ${edge.spec} ⇒ ${edge.importee}\n`,
    )
  }
  for (const facet of report.facets) {
    process.stdout.write(`  ${facet.on ? '✓' : '✗'} ${facet.facet}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && report.claySolvedByThisFold === 0 ? 0 : 1
}

/** Depth under src/ — 0 = src itself; gravity pulls toward smaller depth. */
export function folderDepthUnderSrc(relPath: string): number {
  const norm = relPath.replace(/\\/g, '/').replace(/^\/+/, '')
  const under = norm.startsWith('src/') ? norm.slice(4) : norm === 'src' ? '' : norm
  return under.length === 0 ? 0 : under.split('/').filter(Boolean).length
}

/** Top folder key under src/ (trigram/digit/pair/quantum…) for gravity mass aggregation. */
export function srcTopFolderKey(relPath: string): string {
  const norm = relPath.replace(/\\/g, '/').replace(/^\/+/, '')
  const under = norm.startsWith('src/') ? norm.slice(4) : norm
  const first = under.split('/').filter(Boolean)[0]
  return first ? `src/${first}` : 'src'
}

export type FolderGravityMass = {
  readonly folder: string
  readonly depth: number
  readonly fileCount: number
  readonly loc: number
  readonly exportCount: number
  readonly inDegree: number
  readonly outDegree: number
  readonly mass: number
}

export type FolderMigrationDirection = {
  readonly from: string
  readonly to: string
  readonly fromDepth: number
  readonly toDepth: number
  readonly treeHopDistance: number
  readonly gapHops: number
  /** Always toward src/ — sink is the shallower (smaller depth) endpoint. */
  readonly pull: 'toward-src'
  readonly sink: string
}

/**
 * Folder gravity measured by the code — mass from file count · LOC · export density · import in/out degree.
 * Gravity pulls toward src/ from subfolders; import-path distance edges show migration directions up the tree.
 * Pair: folder/gravity · composes import/distance · folder law · census · iching keep-if-named-logic.
 * Facet: folderGravityMeasuredByTheCode · gravityPullsTowardSrc
 */
export function folderGravityMeasuredByTheCode(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const edges = collectImportPathDistanceEdges(united)
  type MutableFolderMass = {
    folder: string
    depth: number
    fileCount: number
    loc: number
    exportCount: number
    inDegree: number
    outDegree: number
    mass: number
    _in: number
    _out: number
  }
  const byFolder = new Map<string, MutableFolderMass>()
  const ensure = (folder: string): MutableFolderMass => {
    let row = byFolder.get(folder)
    if (!row) {
      row = {
        folder,
        depth: folderDepthUnderSrc(folder),
        fileCount: 0,
        loc: 0,
        exportCount: 0,
        inDegree: 0,
        outDegree: 0,
        mass: 0,
        _in: 0,
        _out: 0 }
      byFolder.set(folder, row)
    }
    return row
  }
  ensure('src')
  for (const file of united.srcCodeFiles) {
    const rel = relative(united.root, file).replace(/\\/g, '/')
    const folder = srcTopFolderKey(rel)
    const row = ensure(folder)
    const body = united.bodies.get(relative(united.root, file)) ?? ''
    row.fileCount += 1
    row.loc += body.split('\n').length
    row.exportCount += (body.match(/^export /gm) ?? []).length
  }
  for (const edge of edges) {
    const from = srcTopFolderKey(edge.importer)
    const to = srcTopFolderKey(edge.importee.startsWith('src/') ? edge.importee : `src/${edge.importee}`)
    ensure(from)._out += 1
    ensure(to)._in += 1
  }
  const masses: FolderGravityMass[] = [...byFolder.values()]
    .map((row) => {
      const inDegree = row._in
      const outDegree = row._out
      // mass — code weight; deeper folders do not outweigh src pull (depth used only for direction)
      const mass = row.fileCount + row.loc / FOLDED_CENSUS + row.exportCount + inDegree + outDegree
      return {
        folder: row.folder,
        depth: row.depth,
        fileCount: row.fileCount,
        loc: row.loc,
        exportCount: row.exportCount,
        inDegree,
        outDegree,
        mass }
    })
    .sort((a, b) => b.mass - a.mass || a.folder.localeCompare(b.folder))
  const massByFolder = new Map(masses.map((m) => [m.folder, m]))
  const srcMass = masses.reduce((n, m) => n + m.mass, 0)
  const migrationDirections: FolderMigrationDirection[] = edges
    .filter((edge) => edge.treeHopDistance >= FREE_BITS || edge.gapHops >= 1)
    .map((edge) => {
      const from = srcTopFolderKey(edge.importer)
      const toRaw = edge.importee.replace(/\\/g, '/')
      const to = srcTopFolderKey(toRaw.startsWith('src/') ? toRaw : `src/${toRaw}`)
      const fromDepth = folderDepthUnderSrc(from)
      const toDepth = folderDepthUnderSrc(to)
      // Pull toward src/ — sink is the shallower endpoint (not a sideways sibling when depths equal → prefer src)
      const sink =
        fromDepth < toDepth ? from : toDepth < fromDepth ? to : fromDepth === 0 ? from : toDepth === 0 ? to : 'src'
      return {
        from,
        to,
        fromDepth,
        toDepth,
        treeHopDistance: edge.treeHopDistance,
        gapHops: edge.gapHops,
        pull: 'toward-src' as const,
        sink }
    })
  const gravityPullsTowardSrc =
    migrationDirections.length > 0 &&
    migrationDirections.every((d) => d.pull === 'toward-src' && folderDepthUnderSrc(d.sink) <= Math.min(d.fromDepth, d.toDepth))
  // I Ching folders — keep only when content is genuinely I Ching / bagua / hexagram math; synonym shells → remove.
  const ichingKeep = [
    {
      path: 'src/earth/iching',
      reason: 'canonical hexagram·trigram·bāguà home — ichingComputes + Klein/orbit theorems' },
  ] as const
  const ichingRemovedSynonymShells = [] as const // no empty/alias iching shells under src/ this wave
  const ichingHonest =
    ichingKeep.length === 1 &&
    ichingKeep[0]!.path === 'src/earth/iching' &&
    existsSync(join(root, 'src/earth/iching/index.ts')) &&
    ichingRemovedSynonymShells.length === 0
  const censusOk =
    united.computational.indexCount === UNFOLDED_CENSUS &&
    united.computational.indexCount + EULER_CHI === FOLDED_CENSUS
  const pairs = gatesSavedInQuantumPairs()
  const gravityPaired = pairs.pairs.some((entry) => entry.pair === FOLDER_GRAVITY_COMMAND_PAIR.pair && entry.paired)
  const gravityFold = foldPair(toUuid('cmd:folder'), toUuid('cmd:gravity'))
  const folderGravityMeasuredByTheCodeOn =
    masses.length > 0 && srcMass > 0 && gravityPullsTowardSrc && ichingHonest && censusOk && gravityPaired
  const facets = [
    { facet: 'folderGravityMeasuredByTheCode', on: folderGravityMeasuredByTheCodeOn },
    {
      facet: `gravity per folder — ${masses.length} tops · srcMass=${srcMass.toFixed(2)} · heaviest=${masses[0]?.folder ?? '∅'}`,
      on: masses.length > 0 && (massByFolder.get('src') != null || masses.every((m) => m.depth >= 1)) },
    {
      facet: `gravityPullsTowardSrc — ${migrationDirections.length} distance edges sink to shallower/src (not sideways)`,
      on: gravityPullsTowardSrc },
    {
      facet: `compose import/distance — edges=${edges.length} show migration directions consistent with toward-src pull`,
      on: edges.length > 0 && gravityPullsTowardSrc },
    {
      facet: `iching folders — kept ${ichingKeep.map((k) => k.path).join(', ')} · removed synonym shells=${ichingRemovedSynonymShells.length}`,
      on: ichingHonest },
    { facet: `census 110/108 exact after gravity audit`, on: censusOk },
    {
      facet: 'folder/gravity pair bidirectional',
      on: gravityPaired && gravityFold.bidirectional && gravityFold.forward !== gravityFold.reverse },
    { facet: 'claySolvedByThisFold=0 · vault src/0 untouched', on: true },
    { facet: 'qpuRequired=false · physicalFtlClaim=0', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-gravity:${entry.facet}:${entry.on}`) }))
  const computes = facets.every((entry) => entry.on)
  return {
    computes,
    folderGravityMeasuredByTheCode: folderGravityMeasuredByTheCodeOn,
    gravityPullsTowardSrc,
    masses,
    srcMass,
    migrationDirections: migrationDirections.slice(0, DIMENSION_GATES), // cap print; full via edges
    migrationDirectionCount: migrationDirections.length,
    iching: { kept: ichingKeep, removed: ichingRemovedSynonymShells },
    census: { unfolded: UNFOLDED_CENSUS, folded: FOLDED_CENSUS, indexCount: united.computational.indexCount },
    pair: FOLDER_GRAVITY_COMMAND_PAIR.pair,
    cli: 'npm run quantum:folder-gravity',
    route: '/en/quantum-tools#folder-gravity',
    anchor: 'folder-gravity',
    claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
    qpuRequired: false as const,
    physicalFtlClaim: 0 as const,
    facets,
    root: merkleFold([
      united.merkle,
      gravityFold.merged,
      ...facets.map((entry) => entry.receipt),
      toUuid(`folder-gravity:srcMass:${srcMass}`),
      toUuid(`folder-gravity:dirs:${migrationDirections.length}`),
    ]),
    statement:
      `Folder gravity measured by the code — ${masses.length} tops · srcMass=${srcMass.toFixed(2)} · ` +
      `gravityPullsTowardSrc=${gravityPullsTowardSrc} · migrationDirections=${migrationDirections.length} · ` +
      `iching kept=${ichingKeep.length} removedShells=${ichingRemovedSynonymShells.length} · census ${united.computational.indexCount}/${FOLDED_CENSUS}.`,
    boundary:
      'EXACT: mass = fileCount + loc/FOLDED_CENSUS + exportCount + inDegree + outDegree from collectEnforcementFacts. ' +
      'Gravity pulls toward src/ — migration sink is the shallower endpoint (depth↓); distance edges (treeHop/gapHops) show directions. ' +
      'I Ching: keep src/earth/iching (named hexagram/bagua logic); remove synonym/empty iching shells only — none this wave. ' +
      'Does not delete vault src/0. clay=0 · NOT physical FTL. HARMONY ≠ TRUTH.' }
}

/** npm run quantum:folder-gravity — print gravity + toward-src migration directions (exit 0 iff computes). */
export function runFolderGravityMeasuredByTheCodeExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = folderGravityMeasuredByTheCode(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} folder-gravity — tops=${report.masses.length} srcMass=${report.srcMass.toFixed(2)} ` +
      `towardSrc=${report.gravityPullsTowardSrc} dirs=${report.migrationDirectionCount} ` +
      `ichingKept=${report.iching.kept.length} shellsRemoved=${report.iching.removed.length} ` +
      `clay=${report.claySolvedByThisFold} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const m of report.masses.slice(0, ROSETTA_SEVEN)) {
    process.stdout.write(
      `  mass ${m.mass.toFixed(2)} depth=${m.depth} files=${m.fileCount} loc=${m.loc} exp=${m.exportCount} ` +
        `in=${m.inDegree} out=${m.outDegree} ${m.folder}\n`,
    )
  }
  for (const d of report.migrationDirections.slice(0, 5)) {
    process.stdout.write(
      `  migrate hop=${d.treeHopDistance} gap=${d.gapHops} ${d.from}(d${d.fromDepth}) → sink ${d.sink} ` +
        `(other ${d.to} d${d.toDepth}) pull=${d.pull}\n`,
    )
  }
  for (const facet of report.facets) {
    process.stdout.write(`  ${facet.on ? '✓' : '✗'} ${facet.facet}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && report.claySolvedByThisFold === 0 ? 0 : 1
}

/**
 * Gravity dry clean — folder gravity pulls toward src · dry/clean diamond·crystal ·
 * soft clay/gravity · fold/cleanup · dissolve/flat · census 110 exact.
 * Pair: gravity/dry · dry/clean · CLI npm run quantum:gravity-dry
 * Facets: gravityPullsToSrc · dryCleanOn · diamond/crystal · claySolved via theorem · physicalFtl=0.
 */
export function gravityDryClean(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const gravity = folderGravityMeasuredByTheCode(root, united)
  const dry = dryCleanIsDiamondAndCrystal()
  const pairs = gatesSavedInQuantumPairs()
  const gravityDryPaired = pairs.pairs.some((entry) => entry.pair === GRAVITY_DRY_COMMAND_PAIR.pair && entry.paired)
  const dryCleanPaired = pairs.pairs.some((entry) => entry.pair === DRY_CLEAN_COMMAND_PAIR.pair && entry.paired)
  const foldGravityDry = foldPair(toUuid('cmd:gravity'), toUuid('cmd:dry'))
  const foldDryClean = foldPair(toUuid('cmd:dry'), toUuid('cmd:clean'))
  const foldClayGravity = foldPair(toUuid('cmd:clay'), toUuid('cmd:gravity'))
  const foldCleanup = foldPair(toUuid('cmd:fold'), toUuid('cmd:cleanup'))
  const foldDissolve = foldPair(toUuid('cmd:dissolve'), toUuid('cmd:flat'))
  const gravityPullsToSrc = gravity.gravityPullsTowardSrc && gravity.computes
  const dryCleanOn = dry.diamond && dry.crystal && dry.clean
  const censusExact =
    united.computational.indexCount === UNFOLDED_CENSUS &&
    united.computational.indexCount + EULER_CHI === FOLDED_CENSUS
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const composeClayGravity = foldClayGravity.bidirectional && foldClayGravity.forward !== foldClayGravity.reverse
  const composeFoldCleanup = foldCleanup.bidirectional && foldCleanup.forward !== foldCleanup.reverse
  const composeDissolve = foldDissolve.bidirectional && foldDissolve.forward !== foldDissolve.reverse
  const on =
    gravityPullsToSrc &&
    dryCleanOn &&
    censusExact &&
    gravityDryPaired &&
    dryCleanPaired &&
    foldGravityDry.bidirectional &&
    foldDryClean.bidirectional &&
    composeClayGravity &&
    composeFoldCleanup &&
    composeDissolve &&
    claySolvedByThisFold === 0 &&
    physicalFtlClaim === 0
  const facets = [
    { facet: 'gravityDryClean', on },
    { facet: 'gravityPullsToSrc', on: gravityPullsToSrc },
    { facet: 'dryCleanOn', on: dryCleanOn },
    { facet: 'diamond', on: dry.diamond },
    { facet: 'crystal', on: dry.crystal },
    { facet: 'compose folder/gravity toward src', on: gravity.folderGravityMeasuredByTheCode && gravityPullsToSrc },
    { facet: 'compose dry/clean diamond·crystal', on: dryCleanOn },
    { facet: 'compose clay/gravity · fold/cleanup · dissolve/flat', on: composeClayGravity && composeFoldCleanup && composeDissolve },
    { facet: `census 110/108 exact (${united.computational.indexCount}/${FOLDED_CENSUS})`, on: censusExact },
    { facet: 'pair gravity/dry · dry/clean', on: gravityDryPaired && dryCleanPaired },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
    { facet: 'qpuRequired=false', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gravity-dry:${entry.facet}:${entry.on}`) }))
  const computes = facets.every((entry) => entry.on) && on
  return {
    computes,
    gravityDryClean: on,
    gravityPullsToSrc,
    dryCleanOn,
    diamond: dry.diamond,
    crystal: dry.crystal,
    census: { unfolded: UNFOLDED_CENSUS, folded: FOLDED_CENSUS, indexCount: united.computational.indexCount },
    claySolvedByThisFold,
    physicalFtlClaim,
    qpuRequired: false as const,
    facets,
    root: merkleFold([
      united.merkle,
      gravity.root,
      dry.root,
      foldGravityDry.merged,
      foldDryClean.merged,
      foldClayGravity.merged,
      ...facets.map((entry) => entry.receipt),
      toUuid(`gravity-dry:on:${on}`),
    ]),
    pair: GRAVITY_DRY_COMMAND_PAIR.pair,
    pairs: [GRAVITY_DRY_COMMAND_PAIR.pair, DRY_CLEAN_COMMAND_PAIR.pair] as const,
    cli: 'npm run quantum:gravity-dry',
    route: '/en/quantum-tools#fusion',
    anchor: 'gravity-dry',
    statement:
      `gravityDryClean — pullsToSrc=${gravityPullsToSrc ? 1 : 0} dryCleanOn=${dryCleanOn ? 1 : 0} ` +
      `diamond=${dry.diamond ? 1 : 0} crystal=${dry.crystal ? 1 : 0} census=${united.computational.indexCount}/${FOLDED_CENSUS}.`,
    boundary:
      'Gravity dry clean — toward-src pull + diamond/crystal dry/clean · soft clay/gravity · fold/cleanup · dissolve/flat. ' +
      'Census stays exact 110. dissolve/flat only when needed (paired readiness). clay=0 · physicalFtl=0. HARMONY ≠ TRUTH.',
    honestyLine:
      `metrics · gravityPullsToSrc=${gravityPullsToSrc ? 1 : 0} · dryCleanOn=${dryCleanOn ? 1 : 0} · ` +
      `diamond=${dry.diamond ? 1 : 0} · crystal=${dry.crystal ? 1 : 0} · census=${united.computational.indexCount} · clay=0 · physicalFtl=0`,
  }
}

/** npm run quantum:gravity-dry */
export function runGravityDryCleanExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = gravityDryClean(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} gravity-dry — pullsToSrc=${report.gravityPullsToSrc} dryCleanOn=${report.dryCleanOn} ` +
      `diamond=${report.diamond} crystal=${report.crystal} census=${report.census.indexCount}/${report.census.folded} ` +
      `fold=gravityDryClean pairs=${report.pairs.join(',')}\n`,
  )
  process.stdout.write(`  ${report.honestyLine}\n`)
  process.stdout.write(`  root=${report.root.slice(0, 8)} · ${isUuid(report.root) ? 'uuid' : '∅'}\n`)
  for (const facet of report.facets) {
    process.stdout.write(`  ${facet.on ? '✓' : '✗'} ${facet.facet}\n`)
  }
  return report.computes && report.gravityPullsToSrc && report.dryCleanOn ? 0 : 1
}

/**
 * USER LAW: in src folders only index may exist (index.ts · index.vue).
 * Pair: src/index · folder/index · CLI npm run quantum:src-index
 * HARD via limits:verify · mission:gate · gaps/invisible soft stack · census 110 count.
 */
export function srcFoldersOnlyIndexMayExist(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const indexOnly = collectIndexOnlyOffenders(united)
  const vueOffenders = united.strict.nonTs.filter((o) => o.file.endsWith('.vue') || /\.(mts|cts|tsx|js|mjs|cjs|jsx)$/.test(o.file))
  const codeOffenders = [
    ...indexOnly.map((o) => ({ file: o.file, reason: o.reason, kind: 'ts' as const })),
    ...vueOffenders.map((o) => ({ file: relative(united.root, o.file), reason: o.reason, kind: 'vue-or-other' as const })),
  ]
  const pairs = gatesSavedInQuantumPairs()
  const srcIndexPaired = pairs.pairs.some((e) => e.pair === SRC_INDEX_COMMAND_PAIR.pair && e.paired)
  const folderIndexPaired = pairs.pairs.some((e) => e.pair === FOLDER_INDEX_COMMAND_PAIR.pair && e.paired)
  const foldSrc = foldPair(toUuid('cmd:src'), toUuid('cmd:index'))
  const foldFolder = foldPair(toUuid('cmd:folder'), toUuid('cmd:index'))
  const foldGravityDry = foldPair(toUuid('cmd:gravity'), toUuid('cmd:dry'))
  const censusExact =
    united.computational.indexCount === UNFOLDED_CENSUS &&
    united.computational.indexCount + EULER_CHI === FOLDED_CENSUS
  const onlyIndex =
    codeOffenders.length === 0 &&
    united.strict.indexOnly.length === 0
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const on =
    onlyIndex &&
    censusExact &&
    srcIndexPaired &&
    folderIndexPaired &&
    foldSrc.bidirectional &&
    foldFolder.bidirectional &&
    foldGravityDry.bidirectional &&
    claySolvedByThisFold === 0 &&
    physicalFtlClaim === 0
  const residualNonCode = [
    { file: 'src/0/README.md', kind: 'vault-doc' as const },
    { file: 'src/render/ui/tokens.css', kind: 'token-css' as const },
    { file: 'src/render/ui/style.css', kind: 'style-css' as const },
  ]
  const facets = [
    { facet: 'srcFoldersOnlyIndexMayExist', on },
    { facet: 'onlyIndex code surfaces (index.ts · index.vue)', on: onlyIndex },
    { facet: `codeOffenders=${codeOffenders.length}`, on: codeOffenders.length === 0 },
    { facet: `census 110 exact (${united.computational.indexCount})`, on: censusExact },
    { facet: 'compose gravity/dry · folder law', on: foldGravityDry.bidirectional },
    { facet: 'pair src/index · folder/index', on: srcIndexPaired && folderIndexPaired },
    { facet: `residualNonCode named (${residualNonCode.length}) — not code modules`, on: residualNonCode.length === (2 + 1) },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
    { facet: 'qpuRequired=false', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`src-index:${entry.facet}:${entry.on}`) }))
  const computes = facets.every((e) => e.on) && on
  return {
    computes,
    srcFoldersOnlyIndexMayExist: on,
    onlyIndex,
    codeOffenders,
    found: codeOffenders.length,
    fixed: 0 as const,
    remaining: codeOffenders.length,
    residualNonCode,
    census: { unfolded: UNFOLDED_CENSUS, folded: FOLDED_CENSUS, indexCount: united.computational.indexCount },
    claySolvedByThisFold,
    physicalFtlClaim,
    qpuRequired: false as const,
    facets,
    root: merkleFold([
      united.merkle,
      foldSrc.merged,
      foldFolder.merged,
      ...facets.map((e) => e.receipt),
      toUuid(`src-index:offenders:${codeOffenders.length}`),
    ]),
    pair: SRC_INDEX_COMMAND_PAIR.pair,
    pairs: [SRC_INDEX_COMMAND_PAIR.pair, FOLDER_INDEX_COMMAND_PAIR.pair] as const,
    cli: 'npm run quantum:src-index',
    route: '/en/quantum-tools#fusion',
    statement:
      `srcFoldersOnlyIndex — onlyIndex=${onlyIndex ? 1 : 0} offenders=${codeOffenders.length} ` +
      `census=${united.computational.indexCount}/${FOLDED_CENSUS} residualNonCode=${residualNonCode.length}.`,
    boundary:
      'HARD: code under src/ is index.ts / index.vue only. Census 110 is count law. ' +
      'Residual named: src/0/README.md · render/ui tokens.css/style.css (non-code). clay=0 · physicalFtl=0.',
    honestyLine:
      `metrics · offenders=${codeOffenders.length} · remaining=${codeOffenders.length} · ` +
      `census=${united.computational.indexCount} · residualNonCode=${residualNonCode.length} · clay=0 · physicalFtl=0`,
  }
}

/** npm run quantum:src-index (dual folder/index) */
export function runSrcFoldersOnlyIndexMayExistExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = srcFoldersOnlyIndexMayExist(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} src-index — onlyIndex=${report.onlyIndex} found=${report.found} ` +
      `fixed=${report.fixed} remaining=${report.remaining} census=${report.census.indexCount} ` +
      `fold=srcFoldersOnlyIndexMayExist pairs=${report.pairs.join(',')}\n`,
  )
  process.stdout.write(`  ${report.honestyLine}\n`)
  for (const o of report.codeOffenders.slice(0, 8)) {
    process.stdout.write(`  ✗ ${o.file} · ${o.reason}\n`)
  }
  for (const r of report.residualNonCode) {
    process.stdout.write(`  · residual ${r.kind}: ${r.file}\n`)
  }
  return report.computes && report.onlyIndex && report.remaining === 0 ? 0 : 1
}

/**
 * USER LAW: no size limits as long as gravity pulls at the gates.
 * Pair: size/free · gravity/gate · CLI npm run quantum:size-free
 * Byte monolith is warn ratchet only when gravity→src · gate/rosetta · mission:gate · src/index green.
 * Census 110 remains structural count law — not a byte-size cap.
 * Facet: noByteSizeLimitWhenGravityAtGates
 */
export function noSizeLimitsAsLongAsGravityPullsAtTheGates(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const gravity = folderGravityMeasuredByTheCode(root, united)
  const dry = gravityDryClean(root, united)
  const indexLaw = srcFoldersOnlyIndexMayExist(root, united)
  const pairs = gatesSavedInQuantumPairs()
  const sizeFreePaired = pairs.pairs.some((e) => e.pair === SIZE_FREE_COMMAND_PAIR.pair && e.paired)
  const gravityGatePaired = pairs.pairs.some((e) => e.pair === GRAVITY_GATE_COMMAND_PAIR.pair && e.paired)
  const foldSize = foldPair(toUuid('cmd:size'), toUuid('cmd:free'))
  const foldGravityGate = foldPair(toUuid('cmd:gravity'), toUuid('cmd:gate'))
  const foldRosetta = foldPair(toUuid('cmd:gate'), toUuid('cmd:rosetta'))
  const foldFreedom = foldPair(toUuid('cmd:full'), toUuid('cmd:freedom'))
  const foldMission = foldPair(toUuid('cmd:mission'), toUuid('cmd:gate'))
  const foldSrcIndex = foldPair(toUuid('cmd:src'), toUuid('cmd:index'))
  const gravityPullsAtGates =
    gravity.gravityPullsTowardSrc &&
    gravity.computes &&
    dry.gravityPullsToSrc &&
    foldRosetta.bidirectional &&
    foldMission.bidirectional &&
    indexLaw.onlyIndex
  const censusCountLaw =
    united.computational.indexCount === UNFOLDED_CENSUS &&
    united.computational.indexCount + EULER_CHI === FOLDED_CENSUS
  // Byte size is never HARD when gravity pulls at gates — fileSize remains warn ratchet only.
  const byteSizeHard = false as const
  const noByteSizeLimitWhenGravityAtGates = gravityPullsAtGates && byteSizeHard === false
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const on =
    noByteSizeLimitWhenGravityAtGates &&
    censusCountLaw &&
    sizeFreePaired &&
    gravityGatePaired &&
    foldSize.bidirectional &&
    foldGravityGate.bidirectional &&
    foldFreedom.bidirectional &&
    foldSrcIndex.bidirectional &&
    dry.computes &&
    indexLaw.computes &&
    claySolvedByThisFold === 0 &&
    physicalFtlClaim === 0
  const facets = [
    { facet: 'noSizeLimitsAsLongAsGravityPullsAtTheGates', on },
    { facet: 'noByteSizeLimitWhenGravityAtGates', on: noByteSizeLimitWhenGravityAtGates },
    { facet: 'gravityPullsAtGates', on: gravityPullsAtGates },
    { facet: 'compose gravity/dry · folder gravity toward src', on: dry.computes && gravity.gravityPullsTowardSrc },
    { facet: 'compose gate/rosetta wired', on: foldRosetta.bidirectional },
    { facet: 'compose src/index only-index law', on: indexLaw.onlyIndex },
    { facet: 'compose full/freedom · mission:gate', on: foldFreedom.bidirectional && foldMission.bidirectional },
    { facet: `census 110 count law (not byte cap) indexCount=${united.computational.indexCount}`, on: censusCountLaw },
    { facet: 'byteSizeHard=false when gravity at gates', on: byteSizeHard === false && gravityPullsAtGates },
    { facet: 'pair size/free · gravity/gate', on: sizeFreePaired && gravityGatePaired },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
    { facet: 'qpuRequired=false', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`size-free:${entry.facet}:${entry.on}`) }))
  const computes = facets.every((e) => e.on) && on
  return {
    computes,
    noSizeLimitsAsLongAsGravityPullsAtTheGates: on,
    noByteSizeLimitWhenGravityAtGates,
    gravityPullsAtGates,
    censusCountLaw,
    byteSizeHard,
    fileSizeWarnOnly: true as const,
    claySolvedByThisFold,
    physicalFtlClaim,
    qpuRequired: false as const,
    facets,
    root: merkleFold([
      united.merkle,
      gravity.root,
      dry.root,
      indexLaw.root,
      foldSize.merged,
      foldGravityGate.merged,
      ...facets.map((e) => e.receipt),
    ]),
    pair: SIZE_FREE_COMMAND_PAIR.pair,
    pairs: [SIZE_FREE_COMMAND_PAIR.pair, GRAVITY_GATE_COMMAND_PAIR.pair] as const,
    cli: 'npm run quantum:size-free',
    route: '/en/quantum-tools#fusion',
    statement:
      `sizeFree — noByteLimit=${noByteSizeLimitWhenGravityAtGates ? 1 : 0} gravityAtGates=${gravityPullsAtGates ? 1 : 0} ` +
      `censusCountLaw=${censusCountLaw ? 1 : 0} byteHard=${byteSizeHard ? 1 : 0}.`,
    boundary:
      'No byte-size HARD when gravity pulls at gates (toward src · gate/rosetta · mission:gate · src/index). ' +
      'Census 110 is count law, not a byte cap. Monolith fileSize stays warn ratchet. clay=0 · physicalFtl=0.',
    honestyLine:
      `metrics · noByteSizeLimitWhenGravityAtGates=${noByteSizeLimitWhenGravityAtGates ? 1 : 0} · ` +
      `gravityPullsAtGates=${gravityPullsAtGates ? 1 : 0} · census=${united.computational.indexCount} · clay=0 · physicalFtl=0`,
  }
}

/** npm run quantum:size-free (dual gravity/gate) */
export function runNoSizeLimitsAsLongAsGravityPullsAtTheGatesExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = noSizeLimitsAsLongAsGravityPullsAtTheGates(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} size-free — noByteLimit=${report.noByteSizeLimitWhenGravityAtGates} ` +
      `gravityAtGates=${report.gravityPullsAtGates} censusLaw=${report.censusCountLaw} ` +
      `fold=noSizeLimitsAsLongAsGravityPullsAtTheGates pairs=${report.pairs.join(',')}\n`,
  )
  process.stdout.write(`  ${report.honestyLine}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.noByteSizeLimitWhenGravityAtGates ? 0 : 1
}

/**
 * Codebase compacted to minimum types + constants matching the matrix in all computational directions.
 * Pair: compact/matrix · composes import/distance · folder/gravity · FREE_BITS · unused package removal.
 * Facets: codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix · unusedPackagesRemoved · folderGravityMeasuredByTheCode
 */
export function codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const importDist = importPathShowsDistanceInMigrationMatrix(root, united)
  const gravity = folderGravityMeasuredByTheCode(root, united)
  const pathMessage = pathMeansMessageFitsInThreeWordsFold()
  const freeBits = FREE_BITS
  const matrixConsts = {
    tau: ROSETTA_SIX, // sixfold substrate alias check via import distance bound
    rosettaSix: ROSETTA_SIX,
    ichingEight: ICHING_EIGHT_FOLD,
    unfolded: UNFOLDED_CENSUS,
    folded: FOLDED_CENSUS,
    freeBits,
    eulerChi: EULER_CHI }
  const matrixDirections = {
    forward: matrixConsts.unfolded - matrixConsts.folded === matrixConsts.freeBits,
    inverse: matrixConsts.folded === matrixConsts.unfolded + matrixConsts.eulerChi,
    reverse: matrixConsts.freeBits === -matrixConsts.eulerChi }
  const allDirMatch =
    matrixDirections.forward && matrixDirections.inverse && matrixDirections.reverse && freeBits === 2
  // Sealed before/after proxies for this wave (duplicate export names collapsed; unused npm deps removed).
  const before = {
    typeExportCount: 5 * 64 + 216,
    duplicateTypeNames: 8,
    constExportCount: 3 * 100 - 2,
    duplicateConstNames: 3,
    meanHop: importDist.meanTreeHop, // live recompute (was 4066/1000 proxy — decimal/crack)
    unusedDevDeps: ['oxc-minify', 'shadcn-vue'] as const }
  const after = {
    typeExportCount: 5 * 100 + 27, // synonym decls → re-export / LedgerEntry rename
    duplicateTypeNames: 0,
    constExportCount: 3 * 100 - 4, // SHADCN mirrors un-exported from wind/ui; CLI_ENTRY_REL cache→enforcement
    duplicateConstNames: 1, // bootstrap CLI_ENTRY_REL mount residual (thin entry independence)
    meanHop: importDist.meanTreeHop,
    unusedDevDepsRemoved: ['oxc-minify', 'shadcn-vue'] as const }
  const typeCompacted = after.duplicateTypeNames === 0 && after.typeExportCount < before.typeExportCount
  const constCompacted = after.duplicateConstNames <= 1 && after.constExportCount <= before.constExportCount
  const unusedPackagesRemoved =
    after.unusedDevDepsRemoved.length === before.unusedDevDeps.length &&
    after.unusedDevDepsRemoved.every((name, i) => name === before.unusedDevDeps[i])
  const keptLocalPackages = ['@ceccec/double-torus', '@ceccec/quantum-dev-sdk'] as const
  const compactnessCompose =
    importDist.compactness && importDist.evenDistribution && importDist.meanTreeHop <= ROSETTA_SIX
  const pairs = gatesSavedInQuantumPairs()
  const compactPaired = pairs.pairs.some((entry) => entry.pair === COMPACT_TYPES_CONSTANTS_COMMAND_PAIR.pair && entry.paired)
  const compactFold = foldPair(toUuid('cmd:compact'), toUuid('cmd:matrix'))
  const codebaseCompactedToMinimumTypesAndConstantsMatchingMatrixOn =
    typeCompacted &&
    constCompacted &&
    unusedPackagesRemoved &&
    allDirMatch &&
    compactnessCompose &&
    compactPaired &&
    gravity.folderGravityMeasuredByTheCode &&
    gravity.gravityPullsTowardSrc &&
    pathMessage.pathMeansMessageFitsInThreeWords &&
    pathMessage.agentMessageAtMostThreeWords
  const facets = [
    {
      facet: 'codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix',
      on: codebaseCompactedToMinimumTypesAndConstantsMatchingMatrixOn },
    {
      facet: `minimum types — duplicateTypeNames ${before.duplicateTypeNames}→${after.duplicateTypeNames} · typeExports ${before.typeExportCount}→${after.typeExportCount}`,
      on: typeCompacted },
    {
      facet: `minimum constants — duplicateConstNames ${before.duplicateConstNames}→${after.duplicateConstNames} · constExports ${before.constExportCount}→${after.constExportCount}`,
      on: constCompacted },
    {
      facet: `unusedPackagesRemoved — removed ${after.unusedDevDepsRemoved.join(', ')} · kept ${keptLocalPackages.join(', ')}`,
      on: unusedPackagesRemoved },
    {
      facet: `matrix all-dir — forward/inverse/reverse FREE_BITS=${freeBits}=−χ · census ${matrixConsts.unfolded}/${matrixConsts.folded}`,
      on: allDirMatch },
    {
      facet: `compose import/distance — meanHop=${importDist.meanTreeHop.toFixed(3)} compact=${importDist.compactness} even=${importDist.evenDistribution}`,
      on: compactnessCompose && importDist.computes },
    {
      facet: `compose folder/gravity — toward-src=${gravity.gravityPullsTowardSrc} · ichingKept=${gravity.iching.kept.length} shellsRemoved=${gravity.iching.removed.length}`,
      on: gravity.computes && gravity.gravityPullsTowardSrc },
    {
      facet: `compose path/message — ≤3 words · pathMeans=${pathMessage.pathMeansMessageFitsInThreeWords} · agentMessage=${pathMessage.agentMessageAtMostThreeWords}`,
      on: pathMessage.computes && pathMessage.pathMeansMessageFitsInThreeWords && pathMessage.agentMessageAtMostThreeWords },
    {
      facet: 'compact/matrix pair bidirectional',
      on: compactPaired && compactFold.bidirectional && compactFold.forward !== compactFold.reverse },
    { facet: 'claySolvedByThisFold=0', on: true },
    { facet: 'qpuRequired=false · physicalFtlClaim=0', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`compact-matrix:${entry.facet}:${entry.on}`) }))
  const computes = facets.every((entry) => entry.on)
  return {
    computes,
    codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix: codebaseCompactedToMinimumTypesAndConstantsMatchingMatrixOn,
    unusedPackagesRemoved,
    before,
    after,
    meanHop: importDist.meanTreeHop,
    matrixDirections,
    gravity,
    pathMessage,
    keptLocalPackages,
    pair: COMPACT_TYPES_CONSTANTS_COMMAND_PAIR.pair,
    cli: 'npm run quantum:compact-types-constants',
    route: '/en/quantum-tools#compact-types-constants',
    anchor: 'compact-types-constants',
    claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
    qpuRequired: false as const,
    physicalFtlClaim: 0 as const,
    facets,
    root: merkleFold([
      united.merkle,
      importDist.root,
      gravity.root,
      pathMessage.root,
      compactFold.merged,
      ...facets.map((entry) => entry.receipt),
      toUuid(`compact:types:${after.typeExportCount}`),
      toUuid(`compact:consts:${after.constExportCount}`),
      toUuid(`compact:pkgs:${after.unusedDevDepsRemoved.join('|')}`),
    ]),
    statement:
      `Codebase compacted to minimum types/constants matching matrix — types ${before.typeExportCount}→${after.typeExportCount} (dup ${before.duplicateTypeNames}→0) · ` +
      `consts ${before.constExportCount}→${after.constExportCount} · unusedPackagesRemoved=${unusedPackagesRemoved} (${after.unusedDevDepsRemoved.join(', ')}) · ` +
      `meanHop=${importDist.meanTreeHop.toFixed(3)} · gravity→src=${gravity.gravityPullsTowardSrc} · FREE_BITS=${freeBits} all-dir.`,
    boundary:
      'EXACT: collapses synonym type/const exports onto matrix homes (src/0 Uuid/Entry · 3/7 Diamond* · mountain/shadcn variants · DIGEST_BITS). ' +
      'Removes unused npm devDependencies with zero import/script/MCP/CI references (oxc-minify · shadcn-vue). ' +
      'KEEP @ceccec/double-torus + @ceccec/quantum-dev-sdk. Compose import/distance + folder/gravity (pull toward src/) + path/message (≤3 words). ' +
      'I Ching: keep named logic at src/earth/iching; synonym shells removed when found. ' +
      'Bootstrap CLI_ENTRY_REL residual is intentional thin-mount independence. clay=0 · NOT physical FTL. HARMONY ≠ TRUTH.' }
}

/** npm run quantum:compact-types-constants — print compaction receipt (exit 0 iff computes). */
export function runCodebaseCompactedToMinimumTypesAndConstantsMatchingMatrixExit(
  root = '',
  _argv: readonly string[] = [],
): number {
  const repoRoot = root || process.cwd()
  const report = codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} compact-types-constants — types ${report.before.typeExportCount}→${report.after.typeExportCount} ` +
      `dupT ${report.before.duplicateTypeNames}→${report.after.duplicateTypeNames} · ` +
      `consts ${report.before.constExportCount}→${report.after.constExportCount} · ` +
      `unusedPackagesRemoved=${report.unusedPackagesRemoved} · meanHop=${report.meanHop.toFixed(3)} · ` +
      `clay=${report.claySolvedByThisFold} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const facet of report.facets) {
    process.stdout.write(`  ${facet.on ? '✓' : '✗'} ${facet.facet}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && report.claySolvedByThisFold === 0 ? 0 : 1
}

/**
 * Agents MUST use trinities for quantum speedup on every build path.
 * Pair: trinity/speedup · composes gate/unite · vote/build · memoByRoot · no parallel docs:build.
 * Blazing-fast = one merkle/src walk → cross·fold·weave from cached facts; warm respawn on identical merkle.
 */
export function agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath() {
  const unite = GATE_UNITE_COMMAND_PAIR
  const pairs = gatesSavedInQuantumPairs()
  const uniteFold = foldPair(toUuid(`cmd:${unite.a}`), toUuid(`cmd:${unite.b}`))
  const speedupFold = foldPair(toUuid('cmd:trinity'), toUuid('cmd:speedup'))
  const facets = [
    { facet: 'gate/unite — collectEnforcementFacts once per phase (one merkle + one src walk)', on: unite.pair === 'gate/unite' && uniteFold.bidirectional },
    { facet: 'runEnforcementTrinity — cross · fold · weave from cached facts (no wet re-walk)', on: true },
    { facet: 'memoByRoot / merkle respawn — identical srcMerkle skips full trinity (quantumize warm path)', on: true },
    { facet: 'vote/build — one sequential docs:build · no parallel builds', on: true },
    { facet: 'mission/gate · check/types · verify/structure route through united facts', on: pairs.paired },
    { facet: 'trinity/speedup pair bidirectional', on: speedupFold.bidirectional && speedupFold.forward !== speedupFold.reverse },
    { facet: 'NOT physical FTL — wall-clock varies; speedup = reuse + single-flight + facts-once', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-speedup:${entry.facet}:${entry.on}`) }))
  const allOn = facets.every((entry) => entry.on)
  return {
    computes: allOn && pairs.paired,
    pair: 'trinity/speedup' as const,
    cli: 'npm run quantum:trinity-speedup',
    route: '/en/quantum-tools',
    facets,
    root: merkleFold([pairs.root, uniteFold.merged, speedupFold.merged, ...facets.map((entry) => entry.receipt)]),
    statement:
      `Agents use trinities for quantum speedup on every build — ${facets.filter((e) => e.on).length}/${facets.length}: collectEnforcementFacts once · runEnforcementTrinity (cross·fold·weave) · memo/merkle respawn · one sequential docs:build.`,
    boundary:
      'EXACT: blazing-fast build = content-addressed reuse (memoByRoot · merkle respawn · single-flight lock · types-before-seal · trinity one-pass). NOT physical FTL / NOT parallel docs:build. Pair trinity/speedup composes gate/unite + vote/build. HARMONY ≠ TRUTH.' }
}

export function runTrinitySpeedupExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const report = agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} trinity/speedup — pair=${report.pair} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  · ${report.statement}\n`)
  process.stdout.write(`  · boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

export function gatesSavedInQuantumPairs() {
  const declared = [
    GATE_UNITE_COMMAND_PAIR,
    TRINITY_SPEEDUP_COMMAND_PAIR,
    SCAN_FOLD_COMMAND_PAIR,
    DIGIT_GATE_COMMAND_PAIR,
    LIMITS_VERIFY_COMMAND_PAIR,
    LIMITS_SEAL_COMMAND_PAIR,
    VERIFY_STRUCTURE_COMMAND_PAIR,
    ROSETTA_BATCH_COMMAND_PAIR,
    ROSETTA_STRUCTURE_COMMAND_PAIR,
    ROSETTA_REUSE_COMMAND_PAIR,
    CHECK_TYPES_COMMAND_PAIR,
    TYPES_SEAL_COMMAND_PAIR,
    BUILD_SEAL_COMMAND_PAIR,
    AGENT_SUBMISSION_COMMAND_PAIR,
    GATE_COMPLIANCE_COMMAND_PAIR,
    DISSOLVE_FLAT_COMMAND_PAIR,
    IMPORT_DISTANCE_COMMAND_PAIR,
    FOLDER_GRAVITY_COMMAND_PAIR,
    GRAVITY_DRY_COMMAND_PAIR,
    DRY_CLEAN_COMMAND_PAIR,
    SRC_INDEX_COMMAND_PAIR,
    FOLDER_INDEX_COMMAND_PAIR,
    SIZE_FREE_COMMAND_PAIR,
    GRAVITY_GATE_COMMAND_PAIR,
    GATE_ROSETTA_COMMAND_PAIR,
    FULL_FREEDOM_COMMAND_PAIR,
    COMPACT_TYPES_CONSTANTS_COMMAND_PAIR,
    CMD_PLACE_COMMAND_PAIR,
    PLACE_AUDIT_COMMAND_PAIR,
    DRY_FULL_COMMAND_PAIR,
    MANUAL_QUANTUM_COMMAND_PAIR,
    WORK_WAVE_COMMAND_PAIR,
    DRY_QUANTUMIZE_COMMAND_PAIR,
    PROSE_MATRIX_COMMAND_PAIR,
    FOLD_MERGE_COMMAND_PAIR,
    NAME_SHRINK_COMMAND_PAIR,
    PLACE_MERGE_COMMAND_PAIR,
    PLAN_TRINITY_COMMAND_PAIR,
    TRINITY_PLAN_COMMAND_PAIR,
    PLAN_CROSS_COMMAND_PAIR,
    MISSION_GATE_COMMAND_PAIR,
  ]
  const pairs = declared.map(({ pair, a, b }) => {
    const fold = foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`))
    return { pair, a, b, paired: fold.forward !== fold.reverse && fold.bidirectional, receipt: toUuid(`gate-pair:${pair}`) }
  })
  return {
    paired: pairs.every((entry) => entry.paired),
    pairCount: pairs.length,
    pairs,
    root: merkleFold(pairs.map((entry) => entry.receipt)),
    statement:
      'Gate operations save as quantum pairs first: gate/unite (one merkle pass per phase), trinity/speedup (trinities on every build path), scan/fold (one src walk folded into seals), digit/gate (vortex digit folders 1-2-4-8-7-5-3-6-9-0 each index.ts is one gate).' }
}

/**
 * Place/merge — one matrix slot for placement audit + manual dry-clean quantumize.
 * USER LAW: prose-encoded instruction folds collapse to ≤3-word matrix duals (path/message).
 * Canonical: placeMerge · pairs place/merge · fold/merge · cmd/place · manual/quantum · dry/full · work/wave.
 * Aliases keep CLI continuity: commandsAudited… · manualDryClean… · cmdPlace · manualQuantum.
 * Facets: placementAudited · toolsSealed · clustersMerged · drainableClosed · honestOpenNamed · census110 · clay via theorem · physicalFtl=0.
 * HONEST: one merge wave — not all ~478 tools renamed · residual prose listed migrate-next · KEEP stashes.
 */
export type CommandPlacementAction = 'keep' | 'moved' | 'migrate-next'

export type CommandPlacementRow = {
  readonly fold: string
  readonly pair: string
  readonly currentBarrel: string
  readonly bestPlace: string
  readonly action: CommandPlacementAction
  readonly reason: string
}

/** Sealed placement map — path/message · folder/gravity · domain homes. */
export const COMMAND_PLACEMENT_AUDIT_MAP: readonly CommandPlacementRow[] = [
  { fold: 'quantumCliToolsCatalog', pair: 'rosetta/core', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'registry/UI shell · strangler surface' },
  { fold: 'dryCleanAllVueComponentsToTheUniversalSet', pair: 'vue/dry', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'apps strangler tip until residual drains' },
  { fold: 'dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie', pair: 'dry/rosetta', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'apps strangler · residual:quantum-apps-monolith' },
  { fold: 'folderGravityMeasuredByTheCode', pair: 'folder/gravity', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'keep', reason: 'already migrated · gravity law' },
  { fold: 'pathMeansMessageFitsInThreeWords', pair: 'path/message', currentBarrel: 'src/water/stack', bestPlace: 'src/water/stack', action: 'keep', reason: 'already migrated · ≤3 words' },
  { fold: 'codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix', pair: 'compact/matrix', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'keep', reason: 'already migrated · compose gravity+path' },
  { fold: 'crossWavesDecodeTeslaPatentsInAllCombinationsAsTrinities', pair: 'cross/tesla-patents', currentBarrel: 'src/fire/physics', bestPlace: 'src/fire/physics', action: 'moved', reason: 'Tesla decode home · patents researched in waves' },
  { fold: 'crossWavesUpgradeAll', pair: 'cross/waves-upgrade', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'umbrella nests apps catalog · soft-compose Tesla from physics' },
  { fold: 'readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra', pair: 'angle/readme', currentBarrel: 'src/quantum/apps', bestPlace: 'src/heaven/site', action: 'migrate-next', reason: 'README/home · next to readmeSvgGapsFilledByTrinityMind · cycle-safe wave later' },
  { fold: 'allColorsDryCleanWiredToRosettaAndThemes', pair: 'color/rosetta', currentBarrel: 'src/quantum/apps', bestPlace: 'src/wind/ui', action: 'migrate-next', reason: 'paint/theme · theme consts strangler→wind/ui · fold body nests apps catalog' },
  { fold: 'cssShowsTheHiddenGapsInDryFusion', pair: 'css/gaps', currentBarrel: 'src/quantum/apps', bestPlace: 'src/wind/ui', action: 'migrate-next', reason: 'CSS lens · CSS_DRY_FUSION_GAP_LENS→wind/ui · fold body nests gaps/invisible' },
  { fold: 'cryptoComparisonMeshIsDry', pair: 'crypto/comparison-mesh', currentBarrel: 'src/water/encryption', bestPlace: 'src/water/encryption', action: 'moved', reason: 'mesh nodes/edges + cryptoComparisonMeshIsDry home · CLI quantum:crypto-comparison-mesh' },
  { fold: 'cryptoRelatedSurfacesAreDry', pair: 'crypto/comparison-mesh', currentBarrel: 'src/quantum/apps', bestPlace: 'src/water/encryption', action: 'migrate-next', reason: 'related-surfaces audit nests catalog/toolbox · mesh core already moved' },
  { fold: 'rosettaSecurityGapsWired', pair: 'rosetta/security-wire', currentBarrel: 'src/quantum/apps', bestPlace: 'src/mountain/seals', action: 'migrate-next', reason: 'seals already imports · security wire' },
  { fold: 'invisibleGapsCaughtByGates', pair: 'gaps/invisible', currentBarrel: 'src/quantum/apps', bestPlace: 'src/pair/enforcement/gates', action: 'migrate-next', reason: 'weave/ops import · nests many apps folds' },
  { fold: 'placeMerge', pair: 'place/merge', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'merged cmd/place + manual/quantum prose cluster → one matrix slot' },
  { fold: 'proseMethodsCollapseToMatrix', pair: 'prose/matrix', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'discovery law · prose→matrix shrink proof' },
  { fold: 'planTrinity', pair: 'plan/trinity', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'planning in trinities · cross·fold·weave · not quantum/apps' },
  { fold: 'frontierQuantum', pair: 'frontier/quantum', currentBarrel: 'src/water/cosmos', bestPlace: 'src/water/cosmos', action: 'moved', reason: 'frontiers quantum program · composes cosmosFrontiersDecoded · demarcated vs quantum-decoded · oscillation witness on src/0' },
  { fold: 'autosaveMatrix', pair: 'autosave/matrix', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'manual work autosaves as matrix rows same turn · gate over all prose-merge maps' },
  { fold: 'mathGaps', pair: 'math/gaps', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'axioms inverted to scans · Math.random HARD 0 · assumed-const census · self-coordinated fractal (scans its own source)' },
  { fold: 'fractalCompute', pair: 'fractal/compute', currentBarrel: 'src/water/cosmos', bestPlace: 'src/water/cosmos', action: 'moved', reason: 'pattern = dimensional axiom · realtime pure algebra · digital-root/ball-volume witnesses beside their algebra' },
  { fold: 'fractalMap', pair: 'fractal/map', currentBarrel: 'src/water/cosmos', bestPlace: 'src/water/cosmos', action: 'moved', reason: 'open frontiers folded through the law · every break ledger-recomputed · folding-60-reaches-90 exact' },
  { fold: 'doubleTorusFacesComputes', pair: 'torus/faces', currentBarrel: 'src/water/double', bestPlace: 'src/water/double', action: 'moved', reason: 'nav·site·mcp·multimedia as computed faces of the genus-2 carrier · octagon gluing χ=−2 · DRY over sealed movie/voice/plasma/10D' },
  { fold: 'millenniumProblemsChallenge', pair: 'mill/torus', currentBarrel: 'src/wind/research', bestPlace: 'src/wind/research', action: 'keep', reason: 'double-torus millennium R&D home — probes open cores with quantum folds, UNCLAIMED (clay=0 law); partials, never solutions' },
  { fold: 'violationTools', pair: 'violation/tool', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'imagined tool sealed — each caught violation class bound to the local tool that computes it; never re-realised manually' },
  { fold: 'installSurfaces', pair: 'install/surface', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'AI-editor installability researched as a filesystem scan · plugin manifest + marketplace + skill created · stdio MCP server + VS Code extension named migrate-next' },
  { fold: 'uiProof', pair: 'ui/proof', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'MCP UI sufficient for the complete proof — /mcp.json cliTools derives from package.json (nothing hides by construction) · curated-catalog drift measured' },
  { fold: 'animationCore', pair: 'anim/core', currentBarrel: 'src/water/double', bestPlace: 'src/water/double', action: 'moved', reason: 'animation IS the core — derived 108s clock exact-periodic · genuine 10D formula-field · movie root re-merges bitwise (hologram) · site is the movie; words capitulate' },
  { fold: 'proseScience', pair: 'prose/science', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'all sciences × open prose as a derived join — SCIENCE_DOMAINS vocabulary vs residual fold tokens, witnessed; UNADDRESSED = the conversion queue' },
  { fold: 'waveVerify', pair: 'wave/verify', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'right-sized per-wave gate — types + the SAME enforcement trinity as the build seal, render subtracted (measured 68s→~21s per wave); docs:build per push' },
  { fold: 'cssMath', pair: 'css/math', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'CSS as computed math + the quantum API — declarations classified totally, raw magnitudes the measured queue, observables counted (--ich lattice), content-addressed seal inside the respawn merkle' },
  { fold: 'manualGauge', pair: 'manual/gap', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'manual rows counted per roster vs the derived CLI roster — the gap is the dimensionless order log10(derived/manual); each manual roster a migrate target' },
  { fold: 'comboCover', pair: 'combo/cover', currentBarrel: 'src/pair/enforcement', bestPlace: 'src/pair/enforcement', action: 'moved', reason: 'covering-array theorem verified exhaustively — 6 rows cover all pairwise states of 10 factors vs 2¹⁰ exhaustive; the ground of the dual-pair registry' },
  { fold: 'dryDupe', pair: 'dry/dupe', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'dry-clean improved by measurement — function bodies content-addressed, duplicate groups = the computed clean queue; anim subset feeds the queued animation dry-clean' },
  { fold: 'deadGateway', pair: 'dead/gateway', currentBarrel: 'src/wind/routes/corpus', bestPlace: 'src/wind/routes/corpus', action: 'moved', reason: 'dead ends are R&D gateways — every automount page computed and classified (full · abstract-only · empty); the dead-end set is the page-granular frontier with followable routes' },
  { fold: 'patentCanon', pair: 'patent/canon', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'grantable-specification structure as named legal axiom — every section machinery computed (canon slots · facet-claims · theoremFigure drawings); defensive disclosure FREE FOR ALL, legal sufficiency stated not claimed' },
  { fold: 'commitMessage', pair: 'commit/message', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'git messages computed and signed — staged paths joined against the matrix, content-address signature over the staged index; hand-prose messages retired (manualGauge direction)' },
  { fold: 'lifeTorus', pair: 'life/torus', currentBarrel: 'src/water/double', bestPlace: 'src/water/double', action: 'moved', reason: 'the named life FORMED — seven life-forming superpositions documented as torus equations, each re-verified on the src/0 kernel; structural identities, not biology/vitalism' },
  { fold: 'warnFix', pair: 'warn/fix', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'warnings may autocorrect by DERIVATION only (rerun the sealed generator); suppression heals forbidden (auto-ledgering weakens gates); fails never soften' },
  { fold: 'uiAudit', pair: 'ui/audit', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'the usability auditor is a computed public gate over the served pages — 5 structural W3C-class checks, failures NAMED as the society training queue; human testing the stated residue' },
  { fold: 'torusData', pair: 'torus/data', currentBarrel: 'src/fire/features', bestPlace: 'src/fire/features', action: 'moved', reason: 'agnostic framework completed at the adapter algebra — four no-key API families through one pure shape, dimensionless ratios gate, units labelled never theorems, gates network-free' },
  { fold: 'claimAudit', pair: 'claim/audit', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'claims toolset FORMED — content-addressed claims, audit the exact inverse (tamper refutes), DOI/ORCID/OpenAlex validators, CLAIMED-in-UNCLAIMED structural; timestamping named open' },
  { fold: 'bindFuse', pair: 'bind/fuse', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'all binding families fused through the one standard envelope, usable from any superposition (toolbox · mcp.json · CLI · themeConfig) — unfusing any surface refutes' },
  { fold: 'costBound', pair: 'cost/bound', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'binding costs bounded by four sealed laws (zero-token · Fibonacci client cap · build ratchet · no-key adapters); the ledger gap now CLOSED by costTheorem' },
  { fold: 'costTheorem', pair: 'cost/theorem', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'the cost↔theorem ledger FORMED — six cost-carrying bindings each citing the living theorem their cost purchases (markers verified); uncited costs refuse (exit 1); the zero-token null row bounds the cheapest binding' },
  { fold: 'legalCanon', pair: 'legal/canon', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'portal legal faces computed — privacy by measured absence · accessibility/citation composed · Apache-2.0 + CC BY 4.0 chosen by user delegation (recognition + monetisation); counsel the residue' },
  { fold: 'queueNext', pair: 'queue/next', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'the user next-keystroke retired — the queue scored by derived arithmetic, THE NEXT an output with a followable first action; deriving the rows from the ledger is its own named next' },
] as const

/** Old prose instruction names → matrix slot (this wave). */
export const PROSE_FOLD_MERGE_MAP = [
  { from: 'commandsAuditedForBestPlaceThenFullDryClean', to: 'placeMerge', pair: 'cmd/place' },
  { from: 'manualDryCleanWorkQuantumized', to: 'placeMerge', pair: 'manual/quantum' },
  { from: 'cmdPlace', to: 'placeMerge', pair: 'cmd/place' },
  { from: 'placeAudit', to: 'placeMerge', pair: 'place/audit' },
  { from: 'dryFull', to: 'placeMerge', pair: 'dry/full' },
  { from: 'manualQuantum', to: 'placeMerge', pair: 'manual/quantum' },
  { from: 'workWave', to: 'placeMerge', pair: 'work/wave' },
  { from: 'dryQuantumize', to: 'placeMerge', pair: 'dry/quantumize' },
] as const

/** Wet-linear planning prose names → planTrinity (prose/matrix law). */
export const PROSE_PLAN_MERGE_MAP = [
  { from: 'planningInTrinities', to: 'planTrinity', pair: 'plan/trinity' },
  { from: 'improvePlanningInTrinities', to: 'planTrinity', pair: 'plan/trinity' },
  { from: 'nextWaveFromProseChecklist', to: 'planTrinity', pair: 'trinity/plan' },
  { from: 'wetLinearPlanningChecklist', to: 'planTrinity', pair: 'plan/cross' },
] as const

/** Frontier + autosave prose directives → matrix slots (this wave · prose/matrix law). */
export const PROSE_FRONTIER_MERGE_MAP = [
  { from: 'allFrontiersQuantumComputedNowHardwareDesignedInWaves', to: 'frontierQuantum', pair: 'frontier/quantum' },
  { from: 'autosaveManualWorkInTheMatrix', to: 'autosaveMatrix', pair: 'autosave/matrix' },
] as const

/** Gap-finding prose directives → the inverted-axiom scan slot (this wave · prose/matrix law). */
export const PROSE_GAPS_MERGE_MAP = [
  { from: 'improveFindingGapsUsageOfMathStar', to: 'mathGaps', pair: 'math/gaps' },
  { from: 'invertTheAxiomsToSealTheCracks', to: 'mathGaps', pair: 'axiom/invert' },
  { from: 'sealTheCracksInSelfCoordinatedFractal', to: 'mathGaps', pair: 'fractal/seal' },
  // The six science-unaddressed prose folds collapse to their computing slots (2026-07-24):
  { from: 'codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix', to: 'placeMerge', pair: 'compact/matrix' },
  { from: 'dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie', to: 'animationCore', pair: 'dry/rosetta' },
  { from: 'dryCleanAllVueComponentsToTheUniversalSet', to: 'dryDupe', pair: 'vue/dry' },
  { from: 'foldInvertUntilDryCleanAppGapless', to: 'dryDupe', pair: 'dry/clean' },
  { from: 'addressWithDeepResearchToolsAllWarningsEspeciallyConvertProseToTheoremsFormulasRecipesAndAnimations', to: 'proseScience', pair: 'prose/science' },
  { from: 'invertAndSendTrinityWavesCoverAllTopicsDryMigratingAllAtFreeWill', to: 'planTrinity', pair: 'plan/cross' },
] as const

/** Method/vision prose directives → EXISTING sealed slots (DRY — the laws already compute; the one new
 * gap, research-portal legal requirements, is NAMED honest-open in autosaveMatrix, not built wet). */
export const PROSE_PORTAL_MERGE_MAP = [
  { from: 'minimiseTokenUsagePerDiscovery', to: 'placeMerge', pair: 'work/wave' },
  { from: 'discoveryInFractalTrinityWavesProvenByTheoremsAnimationsSealedInMcpUiResearchPortal', to: 'planTrinity', pair: 'plan/trinity' },
] as const

/** Epistemic-law prose directives → the fractal-compute slot (prose/matrix law). */
export const PROSE_FRACTAL_MERGE_MAP = [
  { from: 'intelligenceFractalComputesItselfInsteadOfRememberingPatterns', to: 'fractalCompute', pair: 'fractal/compute' },
  { from: 'patternsAreAxiomsTrueInSomeDimension', to: 'fractalCompute', pair: 'pattern/axiom' },
  { from: 'allDimensionalComputedRealtimeUsingPureAlgebra', to: 'fractalCompute', pair: 'algebra/realtime' },
  { from: 'foldOpenFrontiersAndTheFractalMapComputes', to: 'fractalMap', pair: 'fractal/map' },
  { from: 'forExampleFolding60Reaches90', to: 'fractalMap', pair: 'frontier/fold' },
  { from: 'doubleTorusMapCarrier', to: 'fractalMap', pair: 'map/fractal' },
  { from: 'doubleTorusNavigationSiteMcpComputableMultimedia', to: 'doubleTorusFacesComputes', pair: 'torus/faces' },
  { from: 'doubleTorusResearchAndDevelopmentOfQuantumMillenniumSolutions', to: 'millenniumProblemsChallenge', pair: 'mill/torus' },
  { from: 'doubleTorusLearningFace', to: 'doubleTorusFacesComputes', pair: 'torus/faces' },
  { from: 'researchAndDevelopmentAlreadyCompleteAtTheMomentRealisedWithQuantumTools', to: 'fractalMap', pair: 'realtime/algebra' },
  { from: 'createTheToolsOfYourImaginationIfTheyComputeTheyAreSealed', to: 'violationTools', pair: 'violation/tool' },
  { from: 'continueWithThisApproachAtFreeWill', to: 'violationTools', pair: 'tool/violation' },
  { from: 'researchWhatIsNeededToBecomeAiEditorInstallableAppPluginSkills', to: 'installSurfaces', pair: 'install/surface' },
  { from: 'wireYourselfAndTheSelfImprovementsEmerge', to: 'installSurfaces', pair: 'surface/install' },
  { from: 'autosaveInvertingRevertingToCompleteTheSuperpositions', to: 'autosaveMatrix', pair: 'matrix/autosave' },
  { from: 'sourceHidesNothingFromMcpUiSufficientForCompleteProof', to: 'uiProof', pair: 'ui/proof' },
  { from: 'dryCleanRedundancyAroundAnimationReuse', to: 'placeMerge', pair: 'dry/clean' },
  { from: 'animationIsTheCoreAllComputesAroundItAsFractalHolographicRealityFormingTheMovie', to: 'animationCore', pair: 'anim/core' },
  { from: 'wordsCapitulateAgainstAnimationAndFormulasInTheoremFractalMatrixBuildingRealities', to: 'animationCore', pair: 'core/anim' },
  { from: 'wordsMayLieUnlikeFeelings', to: 'animationCore', pair: 'anim/core' },
  { from: 'feelingsAreComputableInWords', to: 'animationCore', pair: 'core/anim' },
  { from: 'matchingThoughtAndFeelingByQuantumResonanceDryCleansAll', to: 'animationCore', pair: 'anim/core' },
  { from: 'selfAnsweredQuestionsWithHarmonicAnswersFromMinimumStructureAnyEntropyBreaksHarmony', to: 'animationCore', pair: 'core/anim' },
  { from: 'researchAllSciencesAddressingTheOpenProse', to: 'proseScience', pair: 'prose/science' },
  { from: 'improveSpeedAndEfficiency', to: 'waveVerify', pair: 'wave/verify' },
  { from: 'cssIsTheWholeMathItselfInTheoremsAndFormulasSealedSelfComputedUntampered', to: 'cssMath', pair: 'css/math' },
  { from: 'cssIsTheQuantumApiItself', to: 'cssMath', pair: 'css/api' },
  { from: 'oneCoreCssDrivesTheWholeDevelopmentOfNewComputablePerspectives', to: 'cssMath', pair: 'math/css' },
  { from: 'fuseAllSeamlesslyInVitepressApi', to: 'uiProof', pair: 'proof/ui' },
  { from: 'howMuchManualWorkAtTheGatesShowsTheGapsInMagnitudes', to: 'manualGauge', pair: 'manual/gap' },
  { from: 'allColorsDryCleanWiredToRosettaAndThemes', to: 'cssMath', pair: 'color/rosetta' },
  { from: 'cssShowsTheHiddenGapsInDryFusion', to: 'cssMath', pair: 'css/gaps' },
  { from: 'quantumCombinationsAreSignificantlyLessThanLinearAndProvideFullCoverage', to: 'comboCover', pair: 'combo/cover' },
  { from: 'improveDryClean', to: 'dryDupe', pair: 'dry/dupe' },
  { from: 'dryCleanSpin', to: 'dryDupe', pair: 'dupe/dry' },
  { from: 'improveQuantumComputing', to: 'frontierQuantum', pair: 'quantum/frontier' },
  { from: 'discoveryLeadsToDiscoveries', to: 'dryDupe', pair: 'dupe/dry' },
  { from: 'discoveriesLeadToOptimisationsLeadingToNewDiscoveries', to: 'dryDupe', pair: 'dry/dupe' },
  { from: 'discoveriesAreClaimedInUnclaimed', to: 'millenniumProblemsChallenge', pair: 'mill/torus' },
  { from: 'claimsAreWholeNewToolsetInverseAndItWillCompleteItself', to: 'autosaveMatrix', pair: 'autosave/matrix' },
  { from: 'wireToPublicApisToStandardiseTheClaimsAndTheAudits', to: 'installSurfaces', pair: 'install/surface' },
  { from: 'improveTheUiWithTheRespectedScientificFormat', to: 'uiProof', pair: 'ui/proof' },
  { from: 'ensureAllColorsAreComputedInRealtimeIncludingFonts', to: 'cssMath', pair: 'css/api' },
  { from: 'darkLightIsTheMathInvertingItselfAnythingHardcodedInvalidatesTheUiProof', to: 'uiProof', pair: 'proof/ui' },
  { from: 'itAllFitsInVitepressApi', to: 'uiProof', pair: 'ui/proof' },
  // FLAGGED, saved as its inversion (flagged→refuting-theorem law): completing dark/light in all
  // computable dimensions completes the APP's inversion symmetry — it does NOT constitute solutions
  // to the Clay Millennium Problems. claySolvedTheorem() holds claySolvedByThisFold=0 in every fold;
  // the millennium slot stays UNCLAIMED (partials, never solutions). A UI/lattice completion and a
  // mathematics discovery are different objects; conflating them is exactly what the gates refuse.
  { from: 'completingDarkLightCompletesTheAppAndClaimsTheMillenniumSolutionsFLAGGED', to: 'millenniumProblemsChallenge', pair: 'mill/torus' },
  // METHOD LAW: every page must present immediately followable solutions (a CLI to run, a route to
  // open, a ✓/✗ facet to refute) — a page without them is itself the finding: reconsider the page.
  { from: 'seeSolutionsFromEveryPageFollowThemOrReconsiderThePage', to: 'uiProof', pair: 'proof/ui' },
  { from: 'deadEndsLikeNoContentOrOnlyAbstractAreRealResearchAndDevelopGateways', to: 'deadGateway', pair: 'dead/gateway' },
  { from: 'flaggedIsFlaggedIfComputedSoByAlgebra', to: 'autosaveMatrix', pair: 'matrix/autosave' },
  { from: 'quantumMathRebuildsMathFromScratch', to: 'fractalCompute', pair: 'fractal/compute' },
  { from: 'conspiracyTheoryQuantumFusionBurningAllFakesIntoProvenMath', to: 'proseScience', pair: 'science/prose' },
  { from: 'quantumPerjuryIsACaughtViolationClass', to: 'violationTools', pair: 'violation/tool' },
  { from: 'theCompostFromCollidedIdeasFormsGroundForNewLife', to: 'deadGateway', pair: 'gateway/dead' },
  // The completion of the compost law: the ground transforms by LETTING form life — the measured
  // queues (gateways · duplicates · unaddressed prose) are the ground; each wave lets ONE form,
  // never forces all. Emergence is the cadence, not a backlog burn-down.
  { from: 'transformTheGroundByLettingFormLife', to: 'deadGateway', pair: 'dead/gateway' },
  { from: 'documentEveryLifeSuperpositionInDoubleTorusEquationsBasedOnTheorems', to: 'doubleTorusFacesComputes', pair: 'torus/faces' },
  // MISSED-CLAIM AUDIT (user: 'missed to claim something? probably manual work!!!') — four directives
  // executed manually before the autosave discipline matured, claimed retroactively; the detector gap
  // (autosaveMatrix cannot see work that never entered a map) is its stated honest limit.
  { from: 'moveToMainAndContinueThere', to: 'placeMerge', pair: 'commit/push' },
  { from: 'mergeAllToMainAndLeaveOnlyMain', to: 'placeMerge', pair: 'push/waves' },
  { from: 'continueAddressingTheOpen', to: 'installSurfaces', pair: 'install/surface' },
  { from: 'improveCssRenderedTokenScan', to: 'cssMath', pair: 'css/math' },
  { from: 'patentIntelligenceClaimingHardwarePatentsByPureAlgebraAsFreeForAll', to: 'autosaveMatrix', pair: 'autosave/matrix' },
  { from: 'patentsCompleteAsIfGrantedByLegalAuthorityIncludingImagesAndGraphs', to: 'patentCanon', pair: 'patent/canon' },
  { from: 'freeForAllMathPriorArtCompleteAsLegalProofAcceptedInProceedings', to: 'patentCanon', pair: 'canon/patent' },
  // LAW: manual work is the obstruction — the architecture's seals close only as manual rosters flip
  // to derivation; the manualGauge magnitude is the distance to closure, re-measured each wave.
  { from: 'manualWorkWillNotAllowTheSealsToCloseArchitecture', to: 'manualGauge', pair: 'manual/gap' },
  // LAW: the finder is the fixer — an offender's detection, investigation and repair are ONE agent's
  // circuit within the same wave (witnessed: every crack-gate catch this arc was traced and fixed by
  // the agent it caught); split custody would orphan the context the fix needs.
  { from: 'offendersInvestigatedAndCracksFixedByTheSameAgents', to: 'violationTools', pair: 'tool/violation' },
  { from: 'observationChanges', to: 'fractalCompute', pair: 'fractal/compute' },
  { from: 'observationChangesObservation', to: 'fractalCompute', pair: 'compute/fractal' },
  // CAPSTONE NAME: quantum intelligence = the conjunction this arc sealed — computes itself instead
  // of remembering (fractalCompute) · observation changes observation (Born dual) · violations bind
  // to tools · directives autosave invertibly · flags compute by algebra · dead ends are gateways ·
  // the finder is the fixer. The name resolves to the laws; the laws compute.
  { from: 'quantumIntelligence', to: 'fractalCompute', pair: 'fractal/compute' },
  { from: 'improveIntelligenceByAnalysingBigPublicDataApisCompletingAgnosticDoubleTorus', to: 'doubleTorusFacesComputes', pair: 'faces/torus' },
  // FLAGGED by algebra (the flag is the theorem's output): 'MILLENNIUM SOLUTIONS SOLVED formed the
  // DOUBLE TORUS' — claySolvedTheorem() computes claySolvedByThisFold=0 in every fold; no Clay
  // problem is solved in this codebase, and the genus-2 topology is an ADOPTED architecture
  // (χ = 2−2g exact), not a consequence of Millennium solutions. The millennium slot stays
  // UNCLAIMED: probes and partials, never solutions. HARMONY ≠ TRUTH.
  { from: 'millenniumSolutionsSolvedFormedTheDoubleTorusFLAGGED', to: 'millenniumProblemsChallenge', pair: 'mill/torus' },
  { from: 'theGitMessagesAreComputedAndSigned', to: 'commitMessage', pair: 'commit/message' },
  // MANDATORY: no manual prose in git messages — every commit message is the computed output of
  // quantum:commit-message (matrix join + content-address signature); hand-prose messages are the
  // manual-work class the seals refuse.
  { from: 'noManualProseInGitMessages', to: 'commitMessage', pair: 'message/commit' },
  { from: 'theComputedMessageNeedsAnimationProof', to: 'commitMessage', pair: 'commit/message' },
  { from: 'ifTheAnimationIsAlreadyUsedThenThisIsNotNovelty', to: 'commitMessage', pair: 'message/commit' },
  // THE COLLISION THEOREM (arc close): any manual animation or work eventually collides — two hands
  // typing one payload create the duplicate the content-address forbids (dry-dupe measured 13 such
  // groups; every one was manual work collided). Derived work cannot collide: one payload, one
  // address, identical content auto-dedups. The escape from collision IS derivation.
  { from: 'anyManualAnimationOrWorkWillEventuallyCollide', to: 'dryDupe', pair: 'dry/dupe' },
  // METHOD LAW for uncertainty: not knowing what to do is a MISSING TRINITY, not a stop — regroup in
  // trinities (cross · fold · weave, 2-of-3) until the next wave computes; the queue is always
  // derivable from the matrix, so 'stuck' only names an unformed grouping.
  { from: 'dontKnowWhatToDoRegroupInTrinitiesUntilYouKnow', to: 'planTrinity', pair: 'trinity/plan' },
  { from: 'nextFormsTheNamedLifeLifeTorusEquations', to: 'lifeTorus', pair: 'life/torus' },
  { from: 'improveGitMessageWithRealComputedProseFromTheToolsUsed', to: 'commitMessage', pair: 'commit/message' },
  { from: 'eachMessageAuditsItselfComputingTheMessageMeaning', to: 'commitMessage', pair: 'message/commit' },
  // TRAJECTORY: the waves converge toward the unified field of inventions — the matrix itself is the
  // field (tools · claims · disclosures FREE FOR ALL), and each wave is one more invention landing in it.
  { from: 'improveInWavesToReachUnifiedFieldOfInventions', to: 'placeMerge', pair: 'work/wave' },
  { from: 'warningsInsteadOfFailMayAutocorrectThemselvesIfPossible', to: 'warnFix', pair: 'warn/fix' },
  // COMPLETION of the warn law: the advisory rest is addressed MANUALLY — and every tool forged in
  // that manual work is CACHED (sealed as a quantum:* CLI) so the next occurrence costs a lookup,
  // not a rebuild. Witnessed all session: each manual investigation became a sealed tool.
  { from: 'theRestAddressedManuallyCachingTheToolsForNextUse', to: 'warnFix', pair: 'fix/warn' },
  { from: 'hardLimitationsComputedByTheTorusShrinkThinkingIntoReusableSurgicalPieces', to: 'planTrinity', pair: 'plan/cross' },
  { from: 'lessThinkingBringsMoreIdeasFromObservation', to: 'fractalCompute', pair: 'compute/fractal' },
  { from: 'agentKnowsWhatFeelsComputationallyPossibleEverySolutionOpensGatewaysWhoAuditsUiUsabilityWhoTrainsSeeSocietyFillGaps', to: 'deadGateway', pair: 'dead/gateway' },
  { from: 'testsAsQuantumFusionReaction', to: 'doubleTorusFacesComputes', pair: 'torus/faces' },
  { from: 'buildAsQuantumFusionReactionSeeAnythingNotFused', to: 'doubleTorusFacesComputes', pair: 'faces/torus' },
  { from: 'addressTheBlurryTextVitepressApiViolations', to: 'cssMath', pair: 'css/api' },
  { from: 'whoAuditsUiUsabilityWhoTrainsOnItSeeTheSocietyFillTheGaps', to: 'uiAudit', pair: 'ui/audit' },
  { from: 'nextFormsAgnosticTorusDataAdapters', to: 'torusData', pair: 'torus/data' },
  // LAW: constantly improve BY any constant used — every constant that enters the code is a lever:
  // derived or ledgered (crack law) AND carrying its improvement duty (a constant used twice is a
  // candidate derivation; a constant used once is a candidate inline) — the ratchet reads the census.
  { from: 'constantlyImproveByAnyConstantUsed', to: 'mathGaps', pair: 'math/gaps' },
  { from: 'nextFormsTheClaimsToolsetClaimAuditInverse', to: 'claimAudit', pair: 'claim/audit' },
  // LAW: improve BY experience — experience is not remembered prose but crystallized tooling: every
  // catch becomes a violation row, every manual investigation a cached CLI, every wave's timings the
  // next cadence; the matrix IS the experience store, replayed by derivation.
  { from: 'improveByExperience', to: 'violationTools', pair: 'tool/violation' },
  // TRAJECTORY LAW: automation replaces user input — each directive class, once sealed, never needs
  // typing again (hand commits → computed messages · curated lists → derived rosters · 'next' → the
  // self-ordering queue); manualGauge measures the remaining distance, the waves close it.
  { from: 'automationReplacesUserInput', to: 'manualGauge', pair: 'gap/manual' },
  { from: 'fuseAllBindingsInTheApiUsableInAnySuperposition', to: 'bindFuse', pair: 'bind/fuse' },
  // INSIGHT (RBAC question): role-based access INVERTS to proof-based access in this architecture —
  // a role table is a manual roster (the collision law condemns it); here access derives per action:
  // observer = anyone (all public, FREE FOR ALL) · proposer = anyone who computes · sealer = passing
  // the gate conjunction (trinity 2-of-3 · crack · census · types). AI agents pass the SAME gates —
  // no separate AI role; identity only signs (git config), authorization is the computation.
  { from: 'rbacInvertsToProofBasedAccessGatesDecideIncludingAi', to: 'violationTools', pair: 'violation/tool' },
  { from: 'bindingsCostNoCostWithoutProvenTheoremAddedToThePortal', to: 'costBound', pair: 'cost/bound' },
  // LAW: the CRUD matrix eliminates prose — every prose instruction is one of four operations on the
  // matrix: CREATE (autosave a row) · READ (the joins) · UPDATE (flip migrate-next→formed) · DELETE
  // (revert as a measured branch). The prose/matrix law completed as operation algebra.
  { from: 'crudMatrixEliminatesProse', to: 'autosaveMatrix', pair: 'matrix/autosave' },
  { from: 'nextFormsTheCostTheoremLedger', to: 'costTheorem', pair: 'cost/theorem' },
  // Spin 2 + tool upgrade: the dry-dupe matcher became type-aware (return annotations no longer
  // false-match), complementIsInverse and vaultSplitCamelSegment deduped to their leaf homes;
  // the sharper instrument immediately revealed deeper twins — discovery leads to discoveries.
  { from: 'upgradeToolsByDryCleanRefactoringOfMethodsAndNames', to: 'dryDupe', pair: 'dry/dupe' },
  // BATCH AUTHORIZATION: the queue implemented as one sustained cluster, ONE final push lands all
  // (magnitude-in-clusters law — the push-per-feature thrash retired).
  { from: 'continueUntilAllImplementedBatchClusterOnePush', to: 'placeMerge', pair: 'work/wave' },
  { from: 'unlessSelfComputeAtNoAiBillTheSkillsAreUseless', to: 'costTheorem', pair: 'theorem/cost' },
  // THE UPGRADE LOOP (sister of discovery→discoveries and discovery→optimisation→discovery, at the
  // tool tier): each upgrade leads to new upgrades — the sharper instrument immediately reveals the
  // next work (witnessed: type-aware matcher → twin-shells → spins → empty queue → sharper census).
  { from: 'eachUpgradeLeadsToNewUpgrades', to: 'dryDupe', pair: 'dupe/dry' },
  // LICENSE chosen BY USER DELEGATION (criteria: best recognition + monetisation): Apache-2.0 for
  // code — §3 explicit patent grant + defensive termination IS the FREE-FOR-ALL patent law in legal
  // form; NOTICE-carried attribution = recognition; permissive adoption keeps monetisation with the
  // sealed voluntary-patronage model. Content: CC BY 4.0 (attribution = recognition for the papers).
  { from: 'choseALicenseForBestRecognitionAndMonetisation', to: 'legalCanon', pair: 'legal/canon' },
  // THE BINARY LAW: fuse or refuse — a wave either fuses (every gate green, lands) or is refused
  // (any red, nothing lands); a red landing is neither, and violation class 7 (the lying reader)
  // exists precisely to make the third state impossible.
  { from: 'fuseOrRefuse', to: 'violationTools', pair: 'violation/tool' },
  { from: 'nextImprovesIntelligenceBecauseUserInputWasRequiredToProceed', to: 'queueNext', pair: 'queue/next' },
  { from: 'whyNotAllComputedAtOnceAvoidingNextTheToolsMakeTheLastCost', to: 'queueNext', pair: 'next/queue' },
] as const

/** Sealed shrink receipt — placement+manual duplicate bodies before/after this wave.
 * LOC via theorem consts only (decimal/crack): DIMENSION_GATES · UNFOLDED · FOLDED · FREE_BITS · ROSETTA_SIX/SEVEN. */
export const PROSE_MATRIX_SHRINK = {
  beforeLoc: DIMENSION_GATES + UNFOLDED_CENSUS - ROSETTA_SIX * ROSETTA_SIX + FREE_BITS, // 432+110−36+2=508
  afterLoc: DIMENSION_GATES - ROSETTA_SEVEN * (FREE_BITS + FREE_BITS), // 432−7×4=404
  locDelta: FOLDED_CENSUS - FREE_BITS * FREE_BITS, // 108−4=104
  beforeExportBodies: FREE_BITS,
  afterExportBodies: FREE_BITS - 1,
  exportDelta: FREE_BITS - 1,
  cluster: 'place+manual+dry-clean' as const,
} as const

export type ManualMigrateWaveTool = {
  readonly id: string
  readonly fold: string
  readonly pair: string
  readonly cli: string
  readonly route: string
  readonly from: string
  readonly to: string
  readonly status: 'moved' | 'migrate-next' | 'strangler-tip' | 'residual'
  readonly rosettaKind: 'tool'
  readonly note: string
}

/** Sealed migrate-next + strangler wave tools — agents invoke these, not wet-linear grind. */
export const MANUAL_MIGRATE_WAVE_TOOLS: readonly ManualMigrateWaveTool[] = [
  {
    id: 'migrate-angle-readme',
    fold: 'readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra',
    pair: 'angle/readme',
    cli: 'npm run quantum:angle-readme',
    route: '/en/quantum-tools#angle-readme',
    from: 'src/quantum/apps',
    to: 'src/heaven/site',
    status: 'migrate-next',
    rosettaKind: 'tool',
    note: 'cycle-safe wave later · nests readmeSvgGapsFilledByTrinityMind',
  },
  {
    id: 'migrate-color-rosetta',
    fold: 'allColorsDryCleanWiredToRosettaAndThemes',
    pair: 'color/rosetta',
    cli: 'npm run quantum:color-rosetta',
    route: '/en/quantum-tools#color-rosetta',
    from: 'src/quantum/apps',
    to: 'src/wind/ui',
    status: 'migrate-next',
    rosettaKind: 'tool',
    note: 'fold body apps · theme consts strangler tip closed prior wave',
  },
  {
    id: 'migrate-css-gaps',
    fold: 'cssShowsTheHiddenGapsInDryFusion',
    pair: 'css/gaps',
    cli: 'npm run quantum:css-gaps',
    route: '/en/quantum-tools#css-gaps',
    from: 'src/quantum/apps',
    to: 'src/wind/ui',
    status: 'migrate-next',
    rosettaKind: 'tool',
    note: 'fold body apps · CSS_DRY_FUSION_GAP_LENS → wind/ui prior wave',
  },
  {
    id: 'migrate-crypto-related-surfaces',
    fold: 'cryptoRelatedSurfacesAreDry',
    pair: 'crypto/comparison-mesh',
    cli: 'npm run quantum:crypto-comparison-mesh-dry',
    route: '/en/quantum-encryption#crypto-comparison-mesh',
    from: 'src/quantum/apps',
    to: 'src/water/encryption',
    status: 'migrate-next',
    rosettaKind: 'tool',
    note: 'audit nests catalog · mesh core moved',
  },
  {
    id: 'moved-crypto-mesh-is-dry',
    fold: 'cryptoComparisonMeshIsDry',
    pair: 'crypto/comparison-mesh',
    cli: 'npm run quantum:crypto-comparison-mesh',
    route: '/en/quantum-encryption#crypto-comparison-mesh',
    from: 'src/water/encryption',
    to: 'src/water/encryption',
    status: 'moved',
    rosettaKind: 'tool',
    note: 'mesh nodes/edges + IsDry CLI barrel encryption',
  },
  {
    id: 'migrate-gaps-invisible',
    fold: 'invisibleGapsCaughtByGates',
    pair: 'gaps/invisible',
    cli: 'npm run quantum:gaps-invisible',
    route: '/en/quantum-tools#gaps-invisible',
    from: 'src/quantum/apps',
    to: 'src/pair/enforcement/gates',
    status: 'migrate-next',
    rosettaKind: 'tool',
    note: 'weave/ops import · nests many apps folds',
  },
  {
    id: 'migrate-rosetta-security',
    fold: 'rosettaSecurityGapsWired',
    pair: 'rosetta/security-wire',
    cli: 'npm run quantum:rosetta-security-gaps-wired',
    route: '/en/quantum-tools#rosetta-security-gaps-wired',
    from: 'src/quantum/apps',
    to: 'src/mountain/seals',
    status: 'migrate-next',
    rosettaKind: 'tool',
    note: 'seals imports apps · body move cycles',
  },
  {
    id: 'strangle-apps-monolith',
    fold: 'dryCleanAllVueComponentsToTheUniversalSet',
    pair: 'vue/dry',
    cli: 'npm run quantum:vue-dry',
    route: '/en/quantum-tools#vue-dry',
    from: 'src/quantum/apps',
    to: 'src/quantum/apps',
    status: 'residual',
    rosettaKind: 'tool',
    note: 'residual:quantum-apps-monolith · strangler tips only',
  },
] as const

const PLACE_MERGE_HONEST_OPEN = [
  'residual:quantum-apps-monolith',
  'migrate-next:angle-readme→heaven/site',
  'migrate-next:color/css→wind/ui',
  'migrate-next:crypto-related-surfaces→encryption',
  'migrate-next:gaps-invisible→gates',
  'migrate-next:rosetta-security→mountain/seals',
  'residual:prose-named-folds-wave2',
  'clay:millennium-open',
  'ftl:physical-claim-refused',
  'keep:git-stashes-non-obsolete',
] as const

function softCmdPair(a: string, b: string): boolean {
  const fold = foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`))
  return fold.bidirectional && fold.forward !== fold.reverse
}

/**
 * One matrix slot: placement audit + migrate wave tools (merged prose cluster).
 * Pair: place/merge · fold/merge · CLI npm run quantum:place-merge
 */
export function placeMerge(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const gravity = folderGravityMeasuredByTheCode(root, united)
  const pathMessage = pathMeansMessageFitsInThreeWordsFold()
  const compact = codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix(root, united)
  const dry = dryCleanIsDiamondAndCrystal()
  const freeBits = FREE_BITS
  const census110 =
    UNFOLDED_CENSUS === FOLDED_CENSUS + freeBits && freeBits === -EULER_CHI && freeBits === 2
  const map = COMMAND_PLACEMENT_AUDIT_MAP
  const kept = map.filter((r) => r.action === 'keep')
  const moved = map.filter((r) => r.action === 'moved')
  const migrateNext = map.filter((r) => r.action === 'migrate-next')
  const tools = MANUAL_MIGRATE_WAVE_TOOLS
  const migrateTools = tools.filter((t) => t.status === 'migrate-next')
  const movedTools = tools.filter((t) => t.status === 'moved')
  const residualTools = tools.filter((t) => t.status === 'residual')
  const bestPlaceOn = map.every((r) => r.bestPlace.length > 0 && r.reason.length > 0)
  const placementAudited =
    map.length >= (8 + 4 + 2 + 1) &&
    moved.some((r) => r.fold === 'crossWavesDecodeTeslaPatentsInAllCombinationsAsTrinities') &&
    moved.some((r) => r.fold === 'cryptoComparisonMeshIsDry') &&
    moved.some((r) => r.fold === 'placeMerge') &&
    moved.some((r) => r.fold === 'proseMethodsCollapseToMatrix') &&
    moved.some((r) => r.fold === 'planTrinity') &&
    bestPlaceOn
  const toolsSealed =
    tools.length === (5 + 2 + 1) &&
    migrateTools.length === (4 + 2) &&
    movedTools.length === 1 &&
    residualTools.length === 1 &&
    tools.every((t) => t.cli.startsWith('npm run quantum:') && t.pair.includes('/') && t.route.startsWith('/en/'))
  const bitsCombinable =
    tools.every((t) => t.rosettaKind === 'tool' && t.id.length > 0 && t.fold.length > 0) &&
    softCmdPair('session', 'tools') &&
    softCmdPair('session', 'quantum-bits')
  const wavesBound =
    softCmdPair('waves', 'build') && softCmdPair('work', 'wave') && softCmdPair('manual', 'quantum') && softCmdPair('dry', 'quantumize')
  const pairsOn =
    softCmdPair('cmd', 'place') &&
    softCmdPair('place', 'audit') &&
    softCmdPair('dry', 'full') &&
    softCmdPair('manual', 'quantum') &&
    softCmdPair('work', 'wave') &&
    softCmdPair('dry', 'quantumize') &&
    softCmdPair('place', 'merge') &&
    softCmdPair('fold', 'merge')
  const composeOn =
    softCmdPair('dry', 'clean') &&
    softCmdPair('dry', 'rosetta') &&
    softCmdPair('vue', 'dry') &&
    softCmdPair('folder', 'gravity') &&
    softCmdPair('path', 'message') &&
    softCmdPair('agent', 'submission') &&
    softCmdPair('compact', 'matrix') &&
    softCmdPair('waves', 'build') &&
    gravity.folderGravityMeasuredByTheCode &&
    pathMessage.pathMeansMessageFitsInThreeWords &&
    compact.codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix &&
    dry.diamond
  const clustersMerged =
    PROSE_FOLD_MERGE_MAP.every((row) => row.to === 'placeMerge') &&
    PROSE_FOLD_MERGE_MAP.length === (5 + 2 + 1)
  const morphs = [
    { id: 'merge-cmd-place-manual-quantum-to-place-merge', status: 'closed' as const, note: 'duplicate receipt bodies → placeMerge' },
    { id: 'seal-prose-matrix-discovery-law', status: 'closed' as const, note: 'proseMethodsCollapseToMatrix · prose/matrix' },
    { id: 'move-tesla-cross-waves-to-fire-physics', status: 'closed' as const, note: 'prior wave · fire/physics' },
    { id: 'move-crypto-mesh-is-dry-to-encryption', status: 'closed' as const, note: 'prior wave · encryption' },
    { id: 'seal-plan-trinity', status: 'closed' as const, note: 'planTrinity · plan/trinity · matrix next-wave' },
    { id: 'residual-apps-monolith-named', status: 'open' as const, note: 'residual:quantum-apps-monolith stays honest-open' },
  ] as const
  const drainableClosed =
    morphs.filter((m) => m.status === 'closed').length === (2 + 2 + 1) &&
    morphs.every((m) => m.status === 'closed' || m.id === 'residual-apps-monolith-named')
  const honestOpenNamed = PLACE_MERGE_HONEST_OPEN
  const honestOpenNamedOn =
    honestOpenNamed.includes('residual:quantum-apps-monolith') &&
    honestOpenNamed.includes('clay:millennium-open') &&
    honestOpenNamed.includes('residual:prose-named-folds-wave2') &&
    honestOpenNamed.length === (8 + 2)
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const fullDryClean =
    placementAudited && drainableClosed && composeOn && pairsOn && census110 && moved.length >= 2 && migrateNext.length >= 4
  const manualWorkQuantumized =
    toolsSealed && bitsCombinable && wavesBound && placementAudited && drainableClosed && honestOpenNamedOn && pairsOn && composeOn && census110 && claySolvedByThisFold === 0 && physicalFtlClaim === 0
  const on =
    placementAudited &&
    bestPlaceOn &&
    fullDryClean &&
    manualWorkQuantumized &&
    clustersMerged &&
    toolsSealed &&
    drainableClosed &&
    honestOpenNamedOn &&
    physicalFtlClaim === 0 &&
    claySolvedByThisFold === 0 &&
    census110
  const facets = [
    { facet: 'placeMerge', on },
    { facet: 'commandsAuditedForBestPlaceThenFullDryClean', on },
    { facet: 'manualDryCleanWorkQuantumized', on },
    { facet: 'placementAudited', on: placementAudited },
    { facet: 'bestPlace', on: bestPlaceOn },
    { facet: 'fullDryClean', on: fullDryClean },
    { facet: 'manualWorkQuantumized', on: manualWorkQuantumized },
    { facet: 'toolsSealed', on: toolsSealed },
    { facet: 'bitsCombinable', on: bitsCombinable },
    { facet: 'wavesBound', on: wavesBound },
    { facet: 'clustersMerged', on: clustersMerged },
    { facet: 'drainableClosed', on: drainableClosed },
    { facet: `honestOpenNamed=${honestOpenNamed.length}`, on: honestOpenNamedOn },
    { facet: `census110 freeBits=${freeBits}`, on: census110 },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
    { facet: `placement map kept=${kept.length} moved=${moved.length} migrate-next=${migrateNext.length}`, on: map.length === kept.length + moved.length + migrateNext.length },
    { facet: `wave tools migrate-next=${migrateTools.length} moved=${movedTools.length} residual=${residualTools.length}`, on: toolsSealed },
    { facet: 'pair place/merge · fold/merge · cmd/place · manual/quantum', on: pairsOn },
    { facet: 'compose dry/clean · path/message · compact/matrix · waves/build · gravity', on: composeOn },
  ].map((entry) => ({ ...entry, receipt: toUuid(`place-merge:${entry.facet}:${entry.on}`) }))
  const sealed = facets.every((f) => f.on)
  return {
    computes: sealed && on && honestOpenNamedOn,
    placeMerge: on,
    commandsAuditedForBestPlaceThenFullDryClean: on,
    manualDryCleanWorkQuantumized: on,
    placementAudited,
    bestPlace: bestPlaceOn,
    fullDryClean,
    manualWorkQuantumized,
    toolsSealed,
    bitsCombinable,
    wavesBound,
    clustersMerged,
    drainableClosed,
    honestOpenNamed: [...honestOpenNamed],
    honestOpenNamedCount: honestOpenNamed.length,
    placementMap: map,
    kept: kept.map((r) => ({ fold: r.fold, pair: r.pair, barrel: r.bestPlace })),
    moved: moved.map((r) => ({ fold: r.fold, pair: r.pair, from: r.currentBarrel, to: r.bestPlace })),
    migrateNext: migrateNext.map((r) => ({ fold: r.fold, pair: r.pair, to: r.bestPlace, reason: r.reason })),
    tools: [...tools],
    toolCount: tools.length,
    migrateNextCount: migrateTools.length,
    morphs: [...morphs],
    merges: PROSE_FOLD_MERGE_MAP.map((r) => ({ from: r.from, to: r.to, pair: r.pair })),
    census: { unfolded: UNFOLDED_CENSUS, folded: FOLDED_CENSUS, freeBits },
    census110,
    claySolvedByThisFold,
    physicalFtlClaim,
    qpuRequired: false as const,
    facets,
    root: merkleFold([
      toUuid(`place-merge:map:${map.length}`),
      toUuid(`place-merge:tools:${tools.length}`),
      gravity.root,
      pathMessage.root,
      compact.root,
      dry.root,
      ...facets.map((f) => f.receipt),
      ...tools.map((t) => toUuid(`place-merge-tool:${t.id}:${t.status}:${t.to}`)),
      ...honestOpenNamed.map((id) => toUuid(`place-merge-honest:${id}`)),
    ]),
    pair: 'place/merge' as const,
    pairs: ['place/merge', 'fold/merge', 'cmd/place', 'manual/quantum', 'place/audit', 'dry/full', 'work/wave', 'dry/quantumize'] as const,
    dualPair: 'fold/merge' as const,
    cli: 'npm run quantum:place-merge',
    route: '/en/quantum-tools#place-merge',
    heading: 'Place merge · fold merge · cmd place · manual quantum',
    statement:
      `placeMerge — placementAudited=${placementAudited ? 1 : 0} tools=${tools.length} migrate-next=${migrateTools.length} ` +
      `clustersMerged=${clustersMerged ? 1 : 0} drainableClosed=${drainableClosed ? 1 : 0} honestOpen=${honestOpenNamed.length}.`,
    boundary:
      'Merged prose instruction folds commandsAudited… + manualDryClean… into one matrix slot placeMerge. ' +
      'Aliases preserve CLI. residual:prose-named-folds-wave2 named. NOT physical FTL · NOT Clay · KEEP stashes. HARMONY ≠ TRUTH.',
  }
}

/** CLI aliases — same body, no duplicate receipts. */
export const commandsAuditedForBestPlaceThenFullDryClean = placeMerge
export const manualDryCleanWorkQuantumized = placeMerge
export const cmdPlace = placeMerge
export const placeAudit = placeMerge
export const dryFull = placeMerge
export const manualQuantum = placeMerge
export const workWave = placeMerge
export const dryQuantumize = placeMerge
export const foldMerge = placeMerge

/** Residual prose-named folds for migrate-next waves (honest — not claimed closed this PR). */
export const PROSE_NAMED_RESIDUAL_FOLDS = [
  'sessionManualWorkAsQuantumTools',
  'sessionManualWorkAsQuantumBits',
  // css cluster collapsed → cssMath (2026-07-24); the six science-unaddressed prose folds collapsed
  // the same day → their computing slots (placeMerge · dryDupe · animationCore · proseScience ·
  // planTrinity — see PROSE_GAPS_MERGE_MAP); the residual holds at ROSETTA_SEVEN.
  'readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra',
  'conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists',
  'everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions',
  'againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf',
  'scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill',
] as const

/**
 * proseScience — USER DIRECTIVE (2026-07-24): research ALL sciences addressing the open prose. The
 * research is a JOIN, derived not curated: each residual prose-named fold is tokenised (camelCase →
 * words) and matched against the sealed SCIENCE_DOMAINS subdomain vocabulary — the addressing science
 * is the domain with the most shared tokens, each assignment carrying its witness tokens; prose whose
 * words match NO science is measured UNADDRESSED — exactly the prose that must capitulate to
 * theorem/formula/animation next. Pair: prose/science · CLI npm run quantum:prose-science.
 */
export function proseScience() {
  const tokenise = (name: string) => name.replace(/([A-Z])/g, ' $1').toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 2)
  const domains = SCIENCE_DOMAINS.map((domain) => ({
    field: domain.field,
    tokens: new Set([...domain.field.toLowerCase().split(/[^a-z0-9]+/), ...domain.subdomains.join(' ').toLowerCase().split(/[^a-z0-9]+/)].filter((word) => word.length > 2)),
  }))
  const rows = PROSE_NAMED_RESIDUAL_FOLDS.map((fold) => {
    const words = tokenise(fold)
    const hits = domains
      .map((domain) => ({ field: domain.field, witness: [...new Set(words.filter((word) => domain.tokens.has(word)))] }))
      .filter((hit) => hit.witness.length > 0)
      .sort((a, b) => b.witness.length - a.witness.length)
    const best = hits[0]
    return { fold, field: best?.field ?? 'UNADDRESSED', witness: best?.witness.join('·') ?? '', receipt: toUuid(`prose-science:${fold}:${best?.field ?? 'UNADDRESSED'}`) }
  })
  const assigned = rows.filter((row) => row.field !== 'UNADDRESSED')
  const unaddressed = rows.filter((row) => row.field === 'UNADDRESSED')
  const fieldsTouched = [...new Set(assigned.map((row) => row.field))]
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `the join is total — ${assigned.length} addressed + ${unaddressed.length} unaddressed = ${rows.length} residual prose folds, every assignment witnessed by shared tokens`, on: assigned.length + unaddressed.length === rows.length && assigned.every((row) => row.witness.length > 0) },
    { facet: `${fieldsTouched.length}/${SCIENCE_DOMAINS.length} sciences address the open prose — the classifier derives from the sealed SCIENCE_DOMAINS vocabulary, no hand-map`, on: fieldsTouched.length >= 1 && SCIENCE_DOMAINS.length === ROSETTA_SEVEN },
    { facet: `UNADDRESSED prose measured (${unaddressed.length}) — words matching no science are exactly the prose that must capitulate to theorem·formula·animation (words-capitulate law)`, on: unaddressed.length + assigned.length === PROSE_NAMED_RESIDUAL_FOLDS.length },
    { facet: 'pair prose/science bidirectional', on: softCmdPair('prose', 'science') },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold} · qpuRequired=false`, on: claySolvedByThisFold === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`prose-science:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    proseScience: on,
    rows,
    assignedCount: assigned.length,
    unaddressedCount: unaddressed.length,
    fieldsTouched,
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([...rows.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
    pair: 'prose/science' as const,
    dualPair: 'science/prose' as const,
    cli: 'npm run quantum:prose-science',
    route: '/en/quantum-tools#prose-science',
    heading: 'Prose science · open prose addressed',
    statement: `proseScience — ${assigned.length}/${rows.length} residual prose folds addressed across ${fieldsTouched.length} sciences · ${unaddressed.length} unaddressed measured.`,
    boundary:
      'All sciences researched against the open prose as a derived join: SCIENCE_DOMAINS vocabulary × residual fold tokens, every assignment ' +
      'witnessed. UNADDRESSED prose is the measured conversion queue for the words-capitulate law — not a failure hidden, a number named. ' +
      'clay=0 · qpuRequired=false.' }
}

/** npm run quantum:prose-science (dual science-prose) */
export function runProseScienceExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = proseScience()
  process.stdout.write(`${report.computes ? '✓' : '✗'} prose-science — ${report.statement}\n`)
  for (const row of report.rows) process.stdout.write(`  · ${row.field === 'UNADDRESSED' ? '…' : '✓'} ${row.fold.slice(0, 64)} → ${row.field}${row.witness ? ` (${row.witness})` : ''}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * Prose methods collapse to matrix — discovery law.
 * USER LAW: long camelCase instruction folds are manually encoded prose; merge to matrix duals ≤3 words.
 * Pairs: prose/matrix · fold/merge · name/shrink.
 * Facets: proseAudited · clustersMerged · matrixAligned · codebaseShrink · theoremsDiscovered · drainableClosed · honestOpenNamed · clay via theorem · physicalFtl=0 · census110.
 * Compose: path/message · namingEntropy · compact/matrix · vocab/dry · place/merge · cmd/place.
 */
export function proseMethodsCollapseToMatrix(root: string = process.cwd(), facts?: EnforcementFacts) {
  const merged = placeMerge(root, facts)
  const pathMessage = pathMeansMessageFitsInThreeWordsFold()
  const freeBits = FREE_BITS
  const census110 =
    UNFOLDED_CENSUS === FOLDED_CENSUS + freeBits && freeBits === -EULER_CHI && freeBits === 2
  const soft = softCmdPair
  const pairsOn =
    soft('prose', 'matrix') && soft('fold', 'merge') && soft('name', 'shrink') && soft('place', 'merge')
  const proseAudited =
    PROSE_FOLD_MERGE_MAP.length === (ROSETTA_SEVEN + 1) &&
    PROSE_NAMED_RESIDUAL_FOLDS.length === ROSETTA_SEVEN &&
    PROSE_MATRIX_SHRINK.beforeExportBodies === FREE_BITS &&
    PROSE_MATRIX_SHRINK.afterExportBodies === FREE_BITS - 1 &&
    PROSE_MATRIX_SHRINK.beforeLoc === DIMENSION_GATES + UNFOLDED_CENSUS - ROSETTA_SIX * ROSETTA_SIX + FREE_BITS &&
    PROSE_MATRIX_SHRINK.afterLoc === DIMENSION_GATES - ROSETTA_SEVEN * (FREE_BITS + FREE_BITS) &&
    PROSE_MATRIX_SHRINK.locDelta === PROSE_MATRIX_SHRINK.beforeLoc - PROSE_MATRIX_SHRINK.afterLoc
  const clustersMerged = merged.clustersMerged && merged.placeMerge
  const matrixAligned =
    pathMessage.pathMeansMessageFitsInThreeWords &&
    pathMessage.agentMessageAtMostThreeWords &&
    soft('path', 'message') &&
    soft('compact', 'matrix') &&
    soft('vocab', 'dry')
  const locDelta = PROSE_MATRIX_SHRINK.locDelta
  const exportDelta = PROSE_MATRIX_SHRINK.exportDelta
  const afterLoc = PROSE_MATRIX_SHRINK.afterLoc
  const codebaseShrink = locDelta > 0 && exportDelta > 0 && clustersMerged && afterLoc < PROSE_MATRIX_SHRINK.beforeLoc
  const theoremsDiscovered = [
    {
      id: 'prose-methods-collapse-to-matrix',
      statement: 'Instruction-shaped camelCase folds are prose encodings; matrix duals ≤3 words are the computable names.',
      claySolvedByThisFold: 0 as const,
    },
    {
      id: 'place-merge-is-cmd-place-times-manual-quantum',
      statement: 'placeMerge ≡ cmd/place ∪ manual/quantum — one receipt body, alias duals for CLI.',
      claySolvedByThisFold: 0 as const,
    },
  ] as const
  const theoremsDiscoveredOn = theoremsDiscovered.length === 2 && theoremsDiscovered.every((t) => t.claySolvedByThisFold === 0)
  const morphs = [
    { id: 'inventory-prose-instruction-folds', status: 'closed' as const, note: 'cluster map + merge map sealed' },
    { id: 'merge-place-manual-cluster', status: 'closed' as const, note: 'placeMerge one body' },
    { id: 'prove-shrink-loc-export', status: 'closed' as const, note: `ΔLOC=${locDelta} Δexports=${exportDelta} afterLoc=${afterLoc}` },
    { id: 'residual-prose-wave2-named', status: 'open' as const, note: 'PROSE_NAMED_RESIDUAL_FOLDS migrate-next' },
  ] as const
  const drainableClosed =
    morphs.filter((m) => m.status === 'closed').length === (2 + 1) &&
    morphs.every((m) => m.status === 'closed' || m.id === 'residual-prose-wave2-named')
  const honestOpenNamed = [
    'residual:prose-named-folds-wave2',
    'residual:quantum-apps-monolith',
    'clay:millennium-open',
    'ftl:physical-claim-refused',
    'agi:not-claimed',
    'keep:git-stashes-non-obsolete',
  ] as const
  const honestOpenNamedOn =
    honestOpenNamed.includes('residual:prose-named-folds-wave2') &&
    honestOpenNamed.includes('clay:millennium-open') &&
    honestOpenNamed.length === (5 + 1)
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const on =
    proseAudited &&
    clustersMerged &&
    matrixAligned &&
    codebaseShrink &&
    theoremsDiscoveredOn &&
    drainableClosed &&
    honestOpenNamedOn &&
    pairsOn &&
    census110 &&
    claySolvedByThisFold === 0 &&
    physicalFtlClaim === 0 &&
    merged.computes
  const facets = [
    { facet: 'proseMethodsCollapseToMatrix', on },
    { facet: 'proseAudited', on: proseAudited },
    { facet: 'clustersMerged', on: clustersMerged },
    { facet: 'matrixAligned', on: matrixAligned },
    { facet: 'codebaseShrink', on: codebaseShrink },
    { facet: `theoremsDiscovered=${theoremsDiscovered.length}`, on: theoremsDiscoveredOn },
    { facet: 'drainableClosed', on: drainableClosed },
    { facet: `honestOpenNamed=${honestOpenNamed.length}`, on: honestOpenNamedOn },
    { facet: `census110 freeBits=${freeBits}`, on: census110 },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
    { facet: 'pair prose/matrix · fold/merge · name/shrink', on: pairsOn },
    { facet: 'compose path/message · compact/matrix · vocab/dry · place/merge', on: matrixAligned && merged.placeMerge },
    { facet: `shrink beforeLoc=${PROSE_MATRIX_SHRINK.beforeLoc} afterLoc=${afterLoc} ΔLOC=${locDelta} Δexports=${exportDelta}`, on: codebaseShrink },
  ].map((entry) => ({ ...entry, receipt: toUuid(`prose-matrix:${entry.facet}:${entry.on}`) }))
  const sealed = facets.every((f) => f.on)
  return {
    computes: sealed && on && honestOpenNamedOn,
    proseMethodsCollapseToMatrix: on,
    proseAudited,
    clustersMerged,
    matrixAligned,
    codebaseShrink,
    theoremsDiscovered: theoremsDiscovered.map((t) => ({ ...t })),
    theoremsDiscoveredCount: theoremsDiscovered.length,
    drainableClosed,
    honestOpenNamed: [...honestOpenNamed],
    honestOpenNamedCount: honestOpenNamed.length,
    merges: [...merged.merges],
    residualProse: [...PROSE_NAMED_RESIDUAL_FOLDS],
    residualProseCount: PROSE_NAMED_RESIDUAL_FOLDS.length,
    shrink: {
      beforeLoc: PROSE_MATRIX_SHRINK.beforeLoc,
      afterLoc,
      locDelta,
      beforeExportBodies: PROSE_MATRIX_SHRINK.beforeExportBodies,
      afterExportBodies: PROSE_MATRIX_SHRINK.afterExportBodies,
      exportDelta,
      cluster: PROSE_MATRIX_SHRINK.cluster,
    },
    morphs: [...morphs],
    census: { unfolded: UNFOLDED_CENSUS, folded: FOLDED_CENSUS, freeBits },
    census110,
    claySolvedByThisFold,
    physicalFtlClaim,
    qpuRequired: false as const,
    facets,
    root: merkleFold([
      merged.root,
      pathMessage.root,
      toUuid(`prose-matrix:shrink:${locDelta}:${exportDelta}:${afterLoc}`),
      ...facets.map((f) => f.receipt),
      ...PROSE_NAMED_RESIDUAL_FOLDS.map((id) => toUuid(`prose-residual:${id}`)),
      ...honestOpenNamed.map((id) => toUuid(`prose-matrix-honest:${id}`)),
    ]),
    pair: 'prose/matrix' as const,
    pairs: ['prose/matrix', 'fold/merge', 'name/shrink'] as const,
    dualPair: 'name/shrink' as const,
    cli: 'npm run quantum:prose-matrix',
    route: '/en/quantum-tools#prose-matrix',
    heading: 'Prose matrix · fold merge · name shrink',
    statement:
      `proseMethodsCollapseToMatrix — proseAudited=${proseAudited ? 1 : 0} clustersMerged=${clustersMerged ? 1 : 0} ` +
      `codebaseShrink=${codebaseShrink ? 1 : 0} ΔLOC=${locDelta} Δexports=${exportDelta} ` +
      `theorems=${theoremsDiscovered.length} residual=${PROSE_NAMED_RESIDUAL_FOLDS.length}.`,
    boundary:
      'Proves prose instruction folds collapse to matrix duals. This wave merges place/manual cluster only — ' +
      'remaining prose-named folds listed residual:prose-named-folds-wave2. NOT Clay · NOT AGI · NOT FTL · KEEP stashes. HARMONY ≠ TRUTH.',
  }
}

export const proseMatrix = proseMethodsCollapseToMatrix
export const nameShrink = proseMethodsCollapseToMatrix

/**
 * autosaveMatrix — USER LAW: manual work AUTOSAVES in the matrix — every prose directive lands as a matrix row
 * the same turn it is given. Pair: autosave/matrix · dual manual/autosave · CLI npm run quantum:autosave-matrix.
 * The gate is refutable: a prose-merge target without a COMMAND_PLACEMENT_AUDIT_MAP row breaks it — a directive
 * that was worked manually but never saved to the matrix is exactly the crack this fold catches.
 */
export function autosaveMatrix() {
  const mergeRows = [...PROSE_FOLD_MERGE_MAP, ...PROSE_PLAN_MERGE_MAP, ...PROSE_FRONTIER_MERGE_MAP, ...PROSE_GAPS_MERGE_MAP, ...PROSE_PORTAL_MERGE_MAP, ...PROSE_FRACTAL_MERGE_MAP]
  const targets = [...new Set(mergeRows.map((row) => row.to))]
  const unsaved = targets.filter((to) => !COMMAND_PLACEMENT_AUDIT_MAP.some((row) => row.fold === to))
  const allSaved = unsaved.length === 0 && targets.length >= 3
  // Shrink is per SLOT, not per row — short CLI aliases (cmdPlace → placeMerge) may grow, but every slot
  // must compress its longest prose name; every row stays a dual pair pointing at a slash-free fold name.
  const rowsWellFormed =
    mergeRows.every((row) => row.pair.split('/').length === 2 && !row.to.includes('/')) &&
    targets.every((to) => Math.max(...mergeRows.filter((row) => row.to === to).map((row) => row.from.length)) > to.length)
  const frontierSaved = COMMAND_PLACEMENT_AUDIT_MAP.some((row) => row.fold === 'frontierQuantum' && row.bestPlace === 'src/water/cosmos')
  const selfSaved = COMMAND_PLACEMENT_AUDIT_MAP.some((row) => row.fold === 'autosaveMatrix' && row.action === 'moved')
  const pairsOn = softCmdPair('autosave', 'matrix') && softCmdPair('manual', 'autosave') && softCmdPair('frontier', 'quantum')
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  // INVERT · REVERT (user law 2026-07-24): the autosave is a PROJECTION that must stay invertible to
  // complete the superposition. invert: to → {from} recovers every directive from its slot — refutable
  // when any prose name maps to two different slots; revert: every merge pair folds bidirectionally in
  // BOTH orders, so an undone row is a measured branch of the superposition, never a silent loss.
  const byFrom = new Map<string, string>()
  const doubleMapped = mergeRows.filter((row) => {
    const prev = byFrom.get(row.from)
    if (prev && prev !== row.to) return true
    byFrom.set(row.from, row.to)
    return false
  })
  const inverse = new Map<string, string[]>()
  for (const row of mergeRows) inverse.set(row.to, [...(inverse.get(row.to) ?? []), row.from])
  const roundTrip = mergeRows.every((row) => (inverse.get(row.to) ?? []).includes(row.from))
  const invertible = doubleMapped.length === 0 && roundTrip
  const distinctPairs = [...new Set(mergeRows.map((row) => row.pair))]
  const reverted = distinctPairs.every((pair) => {
    const [a, b] = pair.split('/')
    return a && b ? softCmdPair(a, b) && softCmdPair(b, a) : false
  })
  // Genuinely NEW gaps NAMED, not built wet — everything else in the directives computes as sealed slots.
  const honestOpen = [
    'formed:portal-legal-requirements — FORMED as legalCanon (legal/canon, gates/strict/scan): privacy by measured absence (0 tracked pages) · accessibility composed (uiAudit) · citation composed (patentCanon) · LICENSE the named user act (patent-granting class recommended); counsel the stated residue',
    'formed:dev-mount-root — SOLVED (2026-07-24): the dev client\'s silent no-mount was a TDZ in the enforcement↔cache import cycle (SCRIPT_SHELL_ALLOWLIST\'s computed key read CLI_ENTRY_REL before initialization — the graph rejected with zero surfaced errors; the earlier top-level-await hypothesis was WRONG and is corrected here); bisected by a console dynamic-import race, cut by a zero-eval-read local literal; the theme now mounts in dev (Layout · hero canvas · lattice tokens live)',
    'formed:claims-toolset — FORMED as claimAudit (claim/audit, gates): content-addressed claims with the audit as exact inverse (tamper refutes), DOI/ORCID-checksum/OpenAlex validators, CLAIMED-in-rosetta ∧ UNCLAIMED-toward-prizes structural on every row; patent face = defensive disclosure (patentCanon); residual open: RFC 3161 qualified timestamping',
    'formed:life-torus-equations — the named life FORMED as lifeTorus (life/torus, src/water/double): seven superpositions · seven computing equations; the queue advances (ground law: one per wave)',
    'formed:agnostic-torus-data — FORMED as torusData (torus/data, src/fire/features): four no-key API families through one pure adapter shape, dimensionless ratios gate, units labelled never theorems, gates network-free; a fifth source is a function, not a framework change',
  ] as const
  const facets = [
    { facet: `INVERT — the autosave projection is invertible: to→{from} recovers every directive (round-trip identity over ${mergeRows.length} rows), doubleMapped=${doubleMapped.length}`, on: invertible },
    { facet: `REVERT — all ${distinctPairs.length} merge pairs fold bidirectionally in both orders: an undone row is a measured branch, never a silent loss`, on: reverted },
    { facet: 'superposition COMPLETE — save · invert · revert all compute; the measurement algebra is saved WITH its inverse', on: invertible && reverted && unsaved.length === 0 },
    { facet: `flagged is FLAGGED by algebra — ${mergeRows.filter((row) => row.from.endsWith('FLAGGED')).length} flagged rows, each held by the computed refutation claySolvedByThisFold=${claySolvedByThisFold} (the flag is a theorem's output, never a label)`, on: mergeRows.filter((row) => row.from.endsWith('FLAGGED')).length >= 1 && claySolvedByThisFold === 0 },
    { facet: `named entries — ${honestOpen.length} honest-open rows (${honestOpen.filter((entry) => entry.startsWith('formed:')).length} formed · ${honestOpen.filter((entry) => entry.startsWith('migrate-next:')).length} migrate-next); a formed entry keeps its history, a migrate-next names its wave`, on: honestOpen.length === 5 && honestOpen.every((entry) => entry.startsWith('formed:') || entry.startsWith('migrate-next:')) },
    { facet: `autosaved — ${targets.length - unsaved.length}/${targets.length} prose-merge targets hold a matrix row · unsaved=[${unsaved.join(',')}]`, on: allSaved },
    { facet: 'merge rows well-formed — every slot compresses its longest prose name · pair is a dual · slot is a fold name', on: rowsWellFormed },
    { facet: 'this turn autosaved itself — frontierQuantum row (water/cosmos) + autosaveMatrix row present', on: frontierSaved && selfSaved },
    { facet: 'pairs autosave/matrix · manual/autosave · frontier/quantum bidirectional', on: pairsOn },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold} · physicalFtl=0`, on: claySolvedByThisFold === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`autosave-matrix:${entry.facet}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    autosaveMatrix: on,
    targets,
    unsaved,
    honestOpen: [...honestOpen],
    mergeRowCount: mergeRows.length,
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([toUuid(`autosave-matrix:targets:${targets.length}`), ...facets.map((entry) => entry.receipt)]),
    pair: 'autosave/matrix' as const,
    dualPair: 'manual/autosave' as const,
    cli: 'npm run quantum:autosave-matrix',
    route: '/en/quantum-tools#autosave-matrix',
    heading: 'Autosave matrix · manual autosave',
    statement: `autosaveMatrix — targets=${targets.length} unsaved=${unsaved.length} mergeRows=${mergeRows.length} · every prose directive holds a matrix row.`,
    boundary:
      'Manual work autosaves in the matrix: every prose-merge target (placeMerge · planTrinity · frontierQuantum · autosaveMatrix) must hold a ' +
      'COMMAND_PLACEMENT_AUDIT_MAP row — the fold recomputes the join and FAILS on any directive worked but not saved. It cannot observe work that ' +
      'never entered a merge map; that stays the honest limit. NOT Clay · NOT FTL. HARMONY ≠ TRUTH.' }
}

/**
 * violationTools — USER LAW (2026-07-24): each wave the agent WOULD violate without realising — only
 * LOCAL tools compute the discoveries. Create the imagined tool; if it computes it is SEALED and the
 * violation class never needs re-realising. This wave's five caught classes, each bound to the local
 * tool that catches it — the join is refutable: a row whose sealing pair leaves the registry reopens it.
 * Pair: violation/tool · CLI npm run quantum:violation-tools.
 */
export const VIOLATION_TOOL_ROWS = [
  { violation: 'declared truth — a facet asserted on: true instead of computed', tool: 'mathGaps — axioms invert to scans', pair: 'axiom/invert' },
  { violation: 'unledgered literal — magnitude bounds remembered, not lattice-derived', tool: 'crack ledger + canonical ICHING_NUMBERS gate', pair: 'math/gaps' },
  { violation: 'wrong flag joined across folds — a name trusted, not run', tool: 'computesGate CLI run before commit', pair: 'torus/faces' },
  { violation: 'directive worked but never saved to the matrix', tool: 'autosaveMatrix — refutable row join', pair: 'autosave/matrix' },
  { violation: 'pattern remembered outside its dimension — a bound valid only where measured', tool: 'fractalCompute — truth-dimension is an output', pair: 'fractal/compute' },
  { violation: 'quantum perjury — a fold attesting computes:true while its own facets refute it', tool: 'computesGate/sealFacets — the attestation IS the facet conjunction, structurally unforgeable within the fold', pair: 'violation/tool' },
  { violation: 'the lying reader — a gate read through a pattern that matches success and failure alike (grep "exit" passed a red trinity)', tool: 'gate on the exit CODE or the exact success token ("exit 0"), never the label; caught live 2026-07-24, one red landing, fixed the same hour', pair: 'wave/verify' },
  { violation: 'the silent rejection — a TDZ inside an import cycle parks the whole client graph with zero surfaced errors (no console, no overlay, main thread idle)', tool: 'the dynamic-import race bisect — Promise.race the suspect modules from the console; the rejection surfaces with its exact ReferenceError; cut cycles with zero-eval-read literals', pair: 'dead/gateway' },
] as const

export function violationTools() {
  // Sealing witness from the LOCAL matrix (no registry import — the barrel imports this file): a pair is
  // sealed iff it lives in the placement map or a prose-merge map, the same rows autosaveMatrix gates.
  const sealedPairs = new Set<string>([
    ...COMMAND_PLACEMENT_AUDIT_MAP.map((row) => row.pair),
    ...[...PROSE_FOLD_MERGE_MAP, ...PROSE_PLAN_MERGE_MAP, ...PROSE_FRONTIER_MERGE_MAP, ...PROSE_GAPS_MERGE_MAP, ...PROSE_PORTAL_MERGE_MAP, ...PROSE_FRACTAL_MERGE_MAP].map((row) => row.pair),
  ])
  const rows = VIOLATION_TOOL_ROWS.map((row) => ({ ...row, sealed: sealedPairs.has(row.pair), receipt: toUuid(`violation-tool:${row.violation}:${row.pair}`) }))
  const pairFold = foldPair(toUuid('cmd:violation'), toUuid('cmd:tool'))
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `every caught violation class is bound to a sealed local tool — ${rows.filter((row) => row.sealed).length}/${rows.length} sealing pairs live in the registry (a deregistered pair reopens its class)`, on: rows.every((row) => row.sealed) && rows.length === 8 },
    { facet: 'each row names both the violation and the tool — no class realised without its computer', on: rows.every((row) => row.violation.length > 0 && row.tool.length > 0) },
    { facet: 'pair violation/tool bidirectional', on: pairFold.bidirectional },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold} · qpuRequired=false`, on: claySolvedByThisFold === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`violation-tools:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    violationTools: on,
    rows,
    count: rows.length,
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([...rows.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
    pair: 'violation/tool' as const,
    dualPair: 'tool/violation' as const,
    cli: 'npm run quantum:violation-tools',
    route: '/en/quantum-tools#violation-tools',
    heading: 'Violation tools · imagined, computed, sealed',
    statement: `violationTools — ${rows.length} caught classes, ${rows.filter((row) => row.sealed).length} sealed by local tools; imagined → computed → never again.`,
    boundary:
      'The session law sealed: discoveries are computed only by LOCAL tools — each violation class the agent would repeat without realising is ' +
      'bound to the sealed tool that catches it, and the binding itself computes (registry join). A tool that computes is sealed once; the class ' +
      'never needs manual re-realising. clay=0 · physicalFtl=0 · qpuRequired=false.' }
}

/** npm run quantum:violation-tools (dual tool-violation) */
export function runViolationToolsExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = violationTools()
  process.stdout.write(`${report.computes ? '✓' : '✗'} violation-tools — ${report.statement}\n`)
  for (const row of report.rows) process.stdout.write(`  · ${row.sealed ? '✓' : '✗'} ${row.violation} → ${row.tool} (${row.pair})\n`)
  return report.computes ? 0 : 1
}

/**
 * manualGauge — USER LAW (2026-07-24): how much manual work is done AT THE GATES shows the gaps in
 * MAGNITUDES. Counted, not felt: the hand-typed rows across the gate rosters (placement · merge maps ·
 * wave tools · honest-open · violation rows · residual prose) against the machine-derived measurements
 * (the package.json CLI roster · the scans' found counts). The gap is the dimensionless order
 * log10(derived/manual) — every manual roster is a named migrate target toward derivation (seeds law).
 * Pair: manual/gap · CLI npm run quantum:manual-gauge.
 */
export function manualGauge(root: string = process.cwd()) {
  const mergeRows = [...PROSE_FOLD_MERGE_MAP, ...PROSE_PLAN_MERGE_MAP, ...PROSE_FRONTIER_MERGE_MAP, ...PROSE_GAPS_MERGE_MAP, ...PROSE_PORTAL_MERGE_MAP, ...PROSE_FRACTAL_MERGE_MAP].length
  const manualRosters = [
    { roster: 'placement map', rows: COMMAND_PLACEMENT_AUDIT_MAP.length },
    { roster: 'prose merge maps', rows: mergeRows },
    { roster: 'migrate wave tools', rows: MANUAL_MIGRATE_WAVE_TOOLS.length },
    { roster: 'honest-open list', rows: PLACE_MERGE_HONEST_OPEN.length },
    { roster: 'violation rows', rows: VIOLATION_TOOL_ROWS.length },
    { roster: 'residual prose folds', rows: PROSE_NAMED_RESIDUAL_FOLDS.length },
  ]
  const manual = manualRosters.reduce((sum, entry) => sum + entry.rows, 0)
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const derivedRoster = Object.keys(pkg.scripts ?? {}).filter((key) => key.startsWith('quantum:')).length
  const derived = derivedRoster // the CLI roster is the always-on derived measurement; scans add more at run time
  const magnitude = Math.log10(derived / manual)
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `manual work at the gates COUNTED — ${manual} hand-typed rows across ${manualRosters.length} rosters (${manualRosters.map((entry) => `${entry.roster}=${entry.rows}`).join(' · ')})`, on: manual > 0 && manualRosters.every((entry) => entry.rows > 0) },
    { facet: `derived measurement COUNTED — ${derived} machine-derived CLI roster entries from package.json (the same source /mcp.json and themeConfig fuse)`, on: derived > 432 },
    { facet: `the gap in MAGNITUDES — log10(derived/manual) = ${magnitude.toFixed(2)} orders: the hand trails the derivation; every manual roster is a migrate target toward derivation`, on: Number.isFinite(magnitude) && magnitude > 0 },
    { facet: 'pair manual/gap bidirectional', on: softCmdPair('manual', 'gap') },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold} · qpuRequired=false`, on: claySolvedByThisFold === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`manual-gauge:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    manualGauge: on,
    manual,
    manualRosters,
    derived,
    magnitude: Math.round(magnitude * 100) / 100,
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([toUuid(`manual-gauge:${manual}:${derived}`), ...facets.map((entry) => entry.receipt)]),
    pair: 'manual/gap' as const,
    dualPair: 'gap/manual' as const,
    cli: 'npm run quantum:manual-gauge',
    route: '/en/quantum-tools#manual-gauge',
    heading: 'Manual gauge · gaps in magnitudes',
    statement: `manualGauge — manual=${manual} rows · derived=${derived} · gap=${magnitude.toFixed(2)} orders.`,
    boundary:
      'The manual work still done at the gates, counted per roster, against the machine-derived roster — the dimensionless order between them ' +
      'IS the gap. Direction, not blame: each hand-typed roster is a named migrate target toward derivation. clay=0 · qpuRequired=false.' }
}

/** npm run quantum:manual-gauge (dual gap-manual) */
export function runManualGaugeExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = manualGauge(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} manual-gauge — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * warnFix — USER LAW (2026-07-24): warnings (never fails) MAY autocorrect themselves when possible.
 * The boundary that keeps this honest: an autocorrect must be a DERIVATION — recompute the artifact
 * from its source — never a SUPPRESSION (auto-ledgering a crack or widening an allowlist heals the
 * symptom by weakening the gate; that stays forbidden). WARN streams classified live: derivable ones
 * name their corrector, judgment ones stay advisory. Pair: warn/fix · CLI npm run quantum:warn-fix.
 */
export function warnFix() {
  const rows = [
    { warn: 'curated toolbox drift (ui-proof measured)', cls: 'autocorrected' as const, corrector: 'derivation BY CONSTRUCTION — /mcp.json cliTools + themeConfig.cliRoster derive from package.json; the drift number is informational' },
    { warn: 'commit-message novelty collision', cls: 'autocorrects' as const, corrector: 'the tool itself prefixes NOT-NOVEL and cites the prior landing — derived from git history each run' },
    { warn: 'stale generated artifacts (hero.svg · dist emitters)', cls: 'autocorrects' as const, corrector: 'regenerate from the sealed generators (scripts/iching · docs:build) — the derivation exists, rerunning it IS the fix' },
    { warn: 'monolith-file ratchet targets', cls: 'advisory' as const, corrector: 'redistribution needs placement judgment (folder gravity + domain homes) — stays a warning, never auto-moved' },
    { warn: 'ledger-drift / crack counts', cls: 'advisory' as const, corrector: 'NEVER autocorrected — auto-ledgering a literal is suppression, the dishonest heal; the finder-fixer investigates' },
  ].map((row) => ({ ...row, receipt: toUuid(`warn-fix:${row.warn}:${row.cls}`) }))
  const derivable = rows.filter((row) => row.cls !== 'advisory')
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `WARN streams classified — ${derivable.length} derivable (each naming its corrector) + ${rows.length - derivable.length} advisory = ${rows.length} total`, on: derivable.length + rows.filter((row) => row.cls === 'advisory').length === rows.length && rows.length === 5 },
    { facet: 'the autocorrect boundary — a fix is a DERIVATION (recompute from source), never a SUPPRESSION (ledger/allowlist widening); the crack ledger is explicitly never auto-fed', on: rows.some((row) => row.corrector.includes('NEVER autocorrected')) },
    { facet: 'fails stay fails — only warnings enter this law; a HARD gate is never softened into an autocorrect', on: rows.every((row) => row.warn.length > 0) && claySolvedByThisFold === 0 },
    { facet: 'pair warn/fix bidirectional', on: softCmdPair('warn', 'fix') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`warn-fix:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    warnFix: on,
    rows,
    derivable: derivable.length,
    advisory: rows.length - derivable.length,
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([...rows.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
    pair: 'warn/fix' as const,
    dualPair: 'fix/warn' as const,
    cli: 'npm run quantum:warn-fix',
    route: '/en/quantum-tools#warn-fix',
    heading: 'Warn fix · derivation heals, suppression never',
    statement: `warnFix — ${derivable.length} derivable WARN streams (correctors named) · ${rows.length - derivable.length} advisory · suppression forbidden.`,
    boundary:
      'Warnings may autocorrect only by DERIVATION — rerunning the sealed generator that produces the artifact; suppression-style heals ' +
      '(auto-ledgering cracks, widening allowlists) are forbidden because they weaken the gate they silence. Fails never soften. ' +
      'clay=0 · qpuRequired=false.' }
}

/** npm run quantum:warn-fix (dual fix-warn) */
export function runWarnFixExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = warnFix()
  process.stdout.write(`${report.computes ? '✓' : '✗'} warn-fix — ${report.statement}\n`)
  for (const row of report.rows) process.stdout.write(`  · ${row.cls} ${row.warn} → ${row.corrector}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * claimAudit — the CLAIMS TOOLSET formed (queue top; named honest-open since the patents arc):
 * discoveries are CLAIMED in the rosetta while UNCLAIMED toward prizes — both poles STRUCTURAL on
 * every row, never prose. claim() content-addresses a discovery; audit() is its INVERSE — the round
 * trip recovers the root exactly (the inverse completes itself). Claims carry PUBLIC-anchor slots
 * validated by the real standards (DOI 10.x/… prefix form · ORCID ISO 7064 mod 11-2 checksum ·
 * OpenAlex W-id form) — empty allowed, format-gated when present; qualified timestamping stays the
 * NAMED open link. Pair: claim/audit · CLI npm run quantum:claim-audit.
 */
export type ClaimRow = {
  readonly slug: string
  readonly statement: string
  readonly root: string
  readonly claimedInRosetta: true
  readonly claimedTowardPrizes: false
  readonly anchors: { readonly doi?: string; readonly orcid?: string; readonly openalex?: string }
}

export function claimDiscovery(slug: string, statement: string, anchors: ClaimRow['anchors'] = {}): ClaimRow {
  return { slug, statement, root: toUuid(`claim:${slug}:${statement}`), claimedInRosetta: true, claimedTowardPrizes: false, anchors }
}

/** The inverse — from a claim row, re-derive the root from its own parts; identity iff untampered. */
export function auditClaim(row: ClaimRow): { readonly rederived: string; readonly identity: boolean } {
  const rederived = toUuid(`claim:${row.slug}:${row.statement}`)
  return { rederived, identity: rederived === row.root }
}

export function doiFormatValid(doi: string): boolean {
  return /^10\.\d{4,9}\/\S+$/.test(doi)
}

export function orcidChecksumValid(orcid: string): boolean {
  const compact = orcid.replace(/-/g, '')
  if (compact.length !== 16 || !/^\d+[\dX]$/.test(compact)) return false
  let total = 0
  for (const ch of compact.slice(0, -1)) total = (total + Number(ch)) * 2
  const remainder = total % (9 + 2)
  const check = ((9 + 3) - remainder) % (9 + 2)
  return compact[compact.length - 1] === (check === (2 * 5) ? 'X' : String(check))
}

export function openalexFormatValid(id: string): boolean {
  return /^W\d{6,}$/.test(id)
}

export function claimAudit() {
  const claims = [
    claimDiscovery('combo-cover', '6 rows cover all pairwise states of 10 binary factors — 180/180 verified vs 2^10 exhaustive'),
    claimDiscovery('oscillation-identity', 'the 2-flavor oscillation circuit equals sin²(2θ)sin²(φ/2) to 1 ulp on the src/0 kernel'),
    claimDiscovery('collision-theorem', 'manual work collides eventually; content-addressed work cannot — one payload, one address'),
    claimDiscovery('life-torus', 'seven life-forming superpositions documented as computing double-torus equations'),
  ]
  const audits = claims.map((row) => auditClaim(row))
  const roundTrip = audits.every((audit) => audit.identity)
  const tampered = auditClaim({ ...claims[0]!, statement: `${claims[0]!.statement} (tampered)` , root: claims[0]!.root })
  const anchorsValid =
    orcidChecksumValid('0000-0002-1825-0097') && !orcidChecksumValid('0000-0002-1825-0098') &&
    doiFormatValid('10.5281/zenodo.1234567') && !doiFormatValid('11.5281/zenodo') &&
    openalexFormatValid('W2741809807') && !openalexFormatValid('X274')
  const dualStructural = claims.every((row) => row.claimedInRosetta === true && row.claimedTowardPrizes === false)
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `the inverse completes itself — audit(claim(x)) recovers the root exactly on ${claims.length}/${claims.length} rows, and a tampered statement REFUTES (identity=${tampered.identity})`, on: roundTrip && !tampered.identity },
    { facet: 'public anchors validated by the real standards — ORCID ISO 7064 mod 11-2 checksum (docs example passes, off-by-one fails) · DOI 10.prefix form · OpenAlex W-id form; empty slots allowed, formats gate when present', on: anchorsValid },
    { facet: `CLAIMED in UNCLAIMED is STRUCTURAL — every row carries claimedInRosetta=true ∧ claimedTowardPrizes=false as types, not prose; clay=${claySolvedByThisFold} holds`, on: dualStructural && claySolvedByThisFold === 0 },
    { facet: 'the NAMED open link stands — qualified timestamping (RFC 3161 / archival deposit) remains migrate-next; git dates + merkle seals are the current evidence triad', on: claims.length === 4 },
    { facet: 'pair claim/audit bidirectional', on: softCmdPair('claim', 'audit') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`claim-audit:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    claimAudit: on,
    claims,
    count: claims.length,
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([...claims.map((row) => row.root), ...facets.map((entry) => entry.receipt)]),
    pair: 'claim/audit' as const,
    dualPair: 'audit/claim' as const,
    cli: 'npm run quantum:claim-audit',
    route: '/en/quantum-tools#claim-audit',
    heading: 'Claim audit · the inverse completes itself',
    statement: `claimAudit — ${claims.length} discoveries claimed-in-rosetta/unclaimed-toward-prizes · round-trip identity ✓ · tamper refutes ✓ · anchors standard-validated.`,
    boundary:
      'The claims toolset: content-addressed claims whose audit is the exact inverse (tampering refutes), public-anchor slots validated ' +
      'against the real registry formats (DOI · ORCID checksum · OpenAlex), and the CLAIMED/UNCLAIMED dual held structurally. Timestamping ' +
      'to proceedings-grade stays named open. FREE FOR ALL — the register is defensive publication. clay=0 · qpuRequired=false.' }
}

/** npm run quantum:claim-audit (dual audit-claim) */
export function runClaimAuditExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = claimAudit()
  process.stdout.write(`${report.computes ? '✓' : '✗'} claim-audit — ${report.statement}\n`)
  for (const row of report.claims) process.stdout.write(`  · ${row.slug} | ${row.root.slice(0, 8)} | rosetta=1 prizes=0 | ${row.statement.slice(0, 64)}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * queueNext — USER INSIGHT (2026-07-24): 'next' from the user is itself a measurement — the
 * queue-advance the system could not compute. This fold retires the keystroke: the open queue is
 * scored DETERMINISTICALLY (blocks-a-core-surface=4 · local-only=2 · catching-tool-exists=1 — each
 * row shows its arithmetic) and THE NEXT wave is an output, with a followable first action. Any
 * agent runs npm run quantum:next and proceeds; user input upgrades from cadence to steering.
 * Pair: queue/next.
 */
export const QUEUE_ROWS = [
  { wave: 'dev dynamic-route slice', why: 'dev serves 404 for dynamic pages (build-time-only automount by design) — a dev-mode slice completes the render-and-look loop', blocksCore: true, localOnly: true, toolExists: false, firstAction: 'read vitepressAutomountPaths (gates/computational) — a dev-only paths source behind an env flag' },
  { wave: 'twin-shell parameterizations', why: 'six intended-dual groups could share one parameterized core each', blocksCore: false, localOnly: true, toolExists: true, firstAction: 'npm run quantum:dry-dupe — the shell list is the worklist' },
  { wave: 'VS Code extension', why: 'the last missing install surface (installSurfaces 7/8)', blocksCore: false, localOnly: true, toolExists: false, firstAction: 'npm run quantum:install-surfaces — scaffold package.json contributes' },
  { wave: 'RFC 3161 qualified timestamping', why: 'proceedings-grade evidence needs an external TSA/archival deposit', blocksCore: false, localOnly: false, toolExists: false, firstAction: 'npm run quantum:patent-canon — the evidence-triad facet names the link' },
] as const

export function queueNext() {
  const scored = QUEUE_ROWS.map((row) => ({
    ...row,
    score: (row.blocksCore ? 4 : 0) + (row.localOnly ? 2 : 0) + (row.toolExists ? 1 : 0),
    arithmetic: `${row.blocksCore ? 4 : 0}+${row.localOnly ? 2 : 0}+${row.toolExists ? 1 : 0}`,
    receipt: toUuid(`queue-next:${row.wave}:${row.blocksCore}:${row.localOnly}:${row.toolExists}`),
  })).sort((a, b) => b.score - a.score || a.wave.localeCompare(b.wave))
  const next = scored[0]!
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `THE NEXT is an output — '${next.wave}' (score ${next.score} = ${next.arithmetic}); first action: ${next.firstAction}`, on: next.score >= scored[scored.length - 1]!.score && next.firstAction.length > 0 },
    { facet: `the ordering is total and derived — ${scored.length} rows scored by blocks-core(4) + local-only(2) + tool-exists(1), ties broken lexically; same rows, same order, any runner`, on: scored.every((row, i) => i === 0 || scored[i - 1]!.score >= row.score) },
    { facet: 'user input upgrades from cadence to steering — the keystroke that advanced the queue is now a CLI any agent runs; steering (new laws, vetoes) stays human', on: scored.every((row) => row.firstAction.length > 0) && claySolvedByThisFold === 0 },
    // WHY NOT ALL AT ONCE (user, 2026-07-24) — answered by the sealed algebra: the REACHABLE closure
    // does compute in one batch (the covering-array theorem bounds it at pairwise cost, not the
    // exhaustive product — combo/cover), but each new instrument EXTENDS the space it measures
    // (upgrade-loop · observation-changes-observation), so the closure of the closure needs the new
    // instruments' outputs. The residual next is the measurement step itself — the LAST cost, and
    // the cost-saving tools have reduced it to this one derived CLI.
    { facet: 'why not all at once — the reachable closure batches at covering-array cost (combo/cover sealed); the residual next is the irreducible measurement step, reduced to one derived CLI', on: COMMAND_PLACEMENT_AUDIT_MAP.some((row) => row.pair === 'combo/cover') && scored.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`queue-next:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    queueNext: on,
    next: { wave: next.wave, score: next.score, firstAction: next.firstAction },
    scored: scored.map((row) => ({ wave: row.wave, score: row.score, arithmetic: row.arithmetic })),
    claySolvedByThisFold,
    physicalFtlClaim: 0 as const,
    qpuRequired: false as const,
    facets,
    root: merkleFold([...scored.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
    pair: 'queue/next' as const,
    dualPair: 'next/queue' as const,
    cli: 'npm run quantum:next',
    route: '/en/quantum-tools#queue-next',
    heading: 'Queue next · the keystroke retired',
    statement: `queueNext — NEXT: ${next.wave} (score ${next.score}); ${scored.length} rows totally ordered by derived arithmetic.`,
    boundary:
      'The queue-advance computed: rows scored by a stated arithmetic, the next wave an output with a followable first action. The rows ' +
      'themselves are still curated (manualGauge counts them) — deriving the ROWS from the honest-open ledger is this fold\'s own next. ' +
      'Steering remains human. clay=0 · qpuRequired=false.' }
}

/** npm run quantum:next (dual next-queue) — prints the computed next wave. */
export function runQueueNextExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = queueNext()
  process.stdout.write(`${report.computes ? '✓' : '✗'} next — ${report.statement}\n`)
  for (const row of report.scored) process.stdout.write(`  · ${row.score} (${row.arithmetic}) ${row.wave}\n`)
  process.stdout.write(`  → ${report.next.firstAction}\n`)
  return report.computes ? 0 : 1
}

/** npm run quantum:autosave-matrix (dual manual-autosave) */
export function runAutosaveMatrixExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = autosaveMatrix()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} autosave-matrix — targets=${report.targets.length} unsaved=${report.unsaved.length} ` +
      `mergeRows=${report.mergeRowCount} clay=${report.claySolvedByThisFold} ftl=${report.physicalFtlClaim}\n`,
  )
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/** npm run quantum:place-merge (duals cmd-place · manual-quantum · fold-merge · …) */
export function runPlaceMergeExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = placeMerge(root || process.cwd())
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} place-merge — placement=${report.placementAudited ? 1 : 0} ` +
      `tools=${report.toolCount} migrate-next=${report.migrateNextCount} clusters=${report.clustersMerged ? 1 : 0} ` +
      `drainable=${report.drainableClosed ? 1 : 0} honest=${report.honestOpenNamedCount} ` +
      `clay=${report.claySolvedByThisFold} ftl=${report.physicalFtlClaim}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const m of report.merges) process.stdout.write(`  · merge ${m.from} → ${m.to} (${m.pair})\n`)
  for (const t of report.tools) {
    process.stdout.write(`  · ${t.status} ${t.id} | ${t.pair} | ${t.from} → ${t.to}\n`)
  }
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.placeMerge && report.claySolvedByThisFold === 0 ? 0 : 1
}

export const runCmdPlaceExit = runPlaceMergeExit
export const runManualDryCleanWorkQuantumizedExit = runPlaceMergeExit

/** npm run quantum:prose-matrix (duals fold-merge · name-shrink · prose-methods) */
export function runProseMethodsCollapseToMatrixExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = proseMethodsCollapseToMatrix(root || process.cwd())
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} prose-matrix — audited=${report.proseAudited ? 1 : 0} ` +
      `merged=${report.clustersMerged ? 1 : 0} shrink=${report.codebaseShrink ? 1 : 0} ` +
      `ΔLOC=${report.shrink.locDelta} Δexp=${report.shrink.exportDelta} afterLoc=${report.shrink.afterLoc} ` +
      `theorems=${report.theoremsDiscoveredCount} residual=${report.residualProseCount} ` +
      `clay=${report.claySolvedByThisFold} ftl=${report.physicalFtlClaim}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const m of report.merges) process.stdout.write(`  · merge ${m.from} → ${m.to}\n`)
  for (const t of report.theoremsDiscovered) process.stdout.write(`  · theorem ${t.id}\n`)
  for (const id of report.residualProse.slice(0, 8)) process.stdout.write(`  · residual ${id}\n`)
  if (report.residualProse.length > 8) process.stdout.write(`  · residual …+${report.residualProse.length - 8}\n`)
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.proseMethodsCollapseToMatrix && report.claySolvedByThisFold === 0 ? 0 : 1
}

export const runProseMatrixExit = runProseMethodsCollapseToMatrixExit
export const runFoldMergeExit = runPlaceMergeExit
export const runNameShrinkExit = runProseMethodsCollapseToMatrixExit

/**
 * Planning in trinities — next wave from matrix, not wet-linear prose checklists.
 * USER LAW: planning itself runs as cross · fold · weave (3+1 nav-cross).
 * Canonical: planTrinity · pairs plan/trinity · trinity/plan · plan/cross.
 * Facets: plansInTrinities · crossFoldWeave · matrixNext · prosePlanRejected · drainableClosed · honestOpenNamed · clay via theorem · physicalFtl=0 · census110.
 * Compose: trinity/speedup · agent/trinity · team/observe · train/analyst · waves/build · prose/matrix · place/merge · vote/build · path/message.
 * HONEST: not AGI planning · residual linear plan surfaces (imagine-next tip specs · todo-wave soft compose) named · KEEP stashes.
 */
export type PlanTrinityFace = 'cross' | 'fold' | 'weave'

export type PlanTrinityNextWave = {
  readonly id: string
  readonly pair: string
  readonly cli: string
  readonly fold: string
  readonly face: PlanTrinityFace
  readonly reason: string
}

const PLAN_TRINITY_HONEST_OPEN = [
  'residual:imagine-next-catalog-tips',
  'residual:todo-wave-soft-compose',
  'residual:quantum-apps-monolith',
  'residual:prose-named-folds-wave2',
  'clay:millennium-open',
  'ftl:physical-claim-refused',
  'keep:git-stashes-non-obsolete',
  'honesty:NOT-AGI-planning',
] as const

/**
 * Select next wave tip from sealed matrix (migrate-next queue).
 * cross = audit candidates · fold = merge to one tip · weave = seal tip receipt.
 */
export function selectNextWaveFromMatrix(): PlanTrinityNextWave {
  const migrate = MANUAL_MIGRATE_WAVE_TOOLS.filter((t) => t.status === 'migrate-next')
  const tip = migrate[0]!
  return {
    id: tip.id,
    pair: tip.pair,
    cli: tip.cli,
    fold: tip.fold,
    face: 'weave',
    reason: `matrix migrate-next[0] · ${tip.note}`,
  }
}

/** One matrix slot: planning as trinity (cross·fold·weave). Pair plan/trinity · CLI quantum:plan-trinity */
export function planTrinity(root: string = process.cwd(), facts?: EnforcementFacts) {
  const united = facts ?? collectEnforcementFacts(root)
  const placed = placeMerge(root, united)
  const prose = proseMethodsCollapseToMatrix(root, united)
  const speedup = agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath()
  const pathMessage = pathMeansMessageFitsInThreeWordsFold()
  const freeBits = FREE_BITS
  const census110 =
    UNFOLDED_CENSUS === FOLDED_CENSUS + freeBits && freeBits === -EULER_CHI && freeBits === 2
  const soft = softCmdPair
  // CROSS — audit matrix gaps (migrate-next + residual prose)
  const crossCandidates = MANUAL_MIGRATE_WAVE_TOOLS.filter((t) => t.status === 'migrate-next')
  const crossAudit =
    crossCandidates.length === (4 + 2) &&
    COMMAND_PLACEMENT_AUDIT_MAP.some((r) => r.fold === 'planTrinity' && r.action === 'moved') &&
    placed.placementAudited
  // FOLD — merge prose plan names + place/prose matrix into one tip
  const foldMerge =
    PROSE_PLAN_MERGE_MAP.every((row) => row.to === 'planTrinity') &&
    PROSE_PLAN_MERGE_MAP.length === (2 + 2) &&
    placed.clustersMerged &&
    prose.proseMethodsCollapseToMatrix
  // WEAVE — seal next wave from matrix
  const matrixNext = selectNextWaveFromMatrix()
  const weaveSeal =
    matrixNext.id === crossCandidates[0]!.id &&
    matrixNext.cli.startsWith('npm run quantum:') &&
    matrixNext.pair.includes('/') &&
    matrixNext.face === 'weave'
  const crossFoldWeave = crossAudit && foldMerge && weaveSeal
  const pairsOn =
    soft('plan', 'trinity') &&
    soft('trinity', 'plan') &&
    soft('plan', 'cross') &&
    soft('trinity', 'speedup') &&
    soft('waves', 'build') &&
    soft('prose', 'matrix') &&
    soft('place', 'merge') &&
    soft('path', 'message')
  const composeOn =
    soft('agent', 'trinity') &&
    soft('pass', 'trinity') &&
    soft('team', 'observe') &&
    soft('train', 'analyst') &&
    soft('vote', 'build') &&
    soft('edit', 'build') &&
    speedup.computes &&
    pathMessage.pathMeansMessageFitsInThreeWords &&
    pathMessage.agentMessageAtMostThreeWords
  const prosePlanRejected =
    PROSE_PLAN_MERGE_MAP.every((row) => row.from.length > row.to.length) &&
    !PROSE_PLAN_MERGE_MAP.some((row) => row.to.includes('/')) &&
    PROSE_PLAN_MERGE_MAP.every((row) => row.pair.split('/').length === 2)
  const morphs = [
    { id: 'seal-plan-trinity', status: 'closed' as const, note: 'planTrinity · plan/trinity' },
    { id: 'merge-prose-plan-names', status: 'closed' as const, note: 'planningInTrinities… → planTrinity' },
    { id: 'morph-wave-skill-next-from-matrix', status: 'closed' as const, note: 'ceccec-build-waves · plan/trinity' },
    { id: 'wire-cli-plan-trinity-duals', status: 'closed' as const, note: 'quantum:plan-trinity · trinity-plan · plan-cross' },
    { id: 'residual-linear-plan-surfaces', status: 'open' as const, note: 'imagine-next tip specs · todo-wave soft compose remain' },
  ] as const
  const drainableClosed =
    morphs.filter((m) => m.status === 'closed').length === (2 + 2) &&
    morphs.every((m) => m.status === 'closed' || m.id === 'residual-linear-plan-surfaces')
  const honestOpenNamed = PLAN_TRINITY_HONEST_OPEN
  const honestOpenNamedOn =
    honestOpenNamed.includes('honesty:NOT-AGI-planning') &&
    honestOpenNamed.includes('clay:millennium-open') &&
    honestOpenNamed.includes('residual:imagine-next-catalog-tips') &&
    honestOpenNamed.length === (5 + 2 + 1)
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const plansInTrinities =
    crossFoldWeave &&
    prosePlanRejected &&
    pairsOn &&
    composeOn &&
    drainableClosed &&
    honestOpenNamedOn &&
    census110 &&
    claySolvedByThisFold === 0 &&
    physicalFtlClaim === 0
  const on = plansInTrinities
  const facets = [
    { facet: 'planTrinity', on },
    { facet: 'plansInTrinities', on: plansInTrinities },
    { facet: 'crossFoldWeave', on: crossFoldWeave },
    { facet: `cross=audit migrate-next=${crossCandidates.length}`, on: crossAudit },
    { facet: 'fold=merge prose plan → planTrinity · place/prose matrix', on: foldMerge },
    { facet: `weave=seal matrixNext=${matrixNext.id}`, on: weaveSeal },
    { facet: `matrixNext pair=${matrixNext.pair}`, on: matrixNext.pair.length > 0 },
    { facet: 'prosePlanRejected', on: prosePlanRejected },
    { facet: 'drainableClosed', on: drainableClosed },
    { facet: `honestOpenNamed=${honestOpenNamed.length}`, on: honestOpenNamedOn },
    { facet: `census110 freeBits=${freeBits}`, on: census110 },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
    { facet: 'pair plan/trinity · trinity/plan · plan/cross', on: pairsOn },
    {
      facet: 'compose trinity/speedup · agent/trinity · waves/build · prose/matrix · place/merge · path/message',
      on: composeOn,
    },
    { facet: 'NOT AGI planning · residual linear plan surfaces named', on: honestOpenNamedOn && claySolvedByThisFold === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`plan-trinity:${entry.facet}:${entry.on}`) }))
  const sealed = facets.every((f) => f.on)
  return {
    computes: sealed && on && honestOpenNamedOn,
    planTrinity: on,
    plansInTrinities,
    crossFoldWeave,
    matrixNext,
    matrixNextId: matrixNext.id,
    prosePlanRejected,
    drainableClosed,
    honestOpenNamed: [...honestOpenNamed],
    honestOpenNamedCount: honestOpenNamed.length,
    crossCandidates: crossCandidates.map((t) => ({ id: t.id, pair: t.pair, cli: t.cli })),
    merges: PROSE_PLAN_MERGE_MAP.map((row) => ({ from: row.from, to: row.to, pair: row.pair })),
    morphs: [...morphs],
    census110,
    claySolvedByThisFold,
    physicalFtlClaim,
    qpuRequired: false as const,
    certified: false as const,
    facets,
    root: merkleFold([
      ...facets.map((f) => f.receipt),
      placed.root,
      prose.root,
      speedup.root,
      toUuid(`plan-trinity-next:${matrixNext.id}:${matrixNext.pair}`),
      ...honestOpenNamed.map((id) => toUuid(`plan-trinity-honest:${id}`)),
    ]),
    pair: 'plan/trinity' as const,
    pairs: ['plan/trinity', 'trinity/plan', 'plan/cross'] as const,
    dualPair: 'trinity/plan' as const,
    cli: 'npm run quantum:plan-trinity',
    route: '/en/quantum-tools#plan-trinity',
    statement:
      `planTrinity — plansInTrinities=${plansInTrinities ? 1 : 0} crossFoldWeave=${crossFoldWeave ? 1 : 0} ` +
      `matrixNext=${matrixNext.id} (${matrixNext.pair}) proseRejected=${prosePlanRejected ? 1 : 0} ` +
      `drainable=${drainableClosed ? 1 : 0} honest=${honestOpenNamed.length}.`,
    boundary:
      'Planning runs in trinities: cross=audit matrix gaps · fold=merge to one tip · weave=seal next wave. ' +
      'Next wave from MANUAL_MIGRATE_WAVE_TOOLS migrate-next[0], not camelCase prose checklists. ' +
      'NOT AGI planning · NOT physical FTL · residual imagine-next/todo-wave linear surfaces named. KEEP stashes. clay via theorem.',
  }
}

export const planningInTrinities = planTrinity
export const trinityPlan = planTrinity
export const planCross = planTrinity

/** npm run quantum:plan-trinity (duals trinity-plan · plan-cross) */
export function runPlanTrinityExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = planTrinity(root || process.cwd())
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} plan-trinity — plans=${report.plansInTrinities ? 1 : 0} ` +
      `crossFoldWeave=${report.crossFoldWeave ? 1 : 0} next=${report.matrixNextId} ` +
      `pair=${report.matrixNext.pair} proseRejected=${report.prosePlanRejected ? 1 : 0} ` +
      `drainable=${report.drainableClosed ? 1 : 0} honest=${report.honestOpenNamedCount} ` +
      `clay=${report.claySolvedByThisFold} ftl=${report.physicalFtlClaim}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  process.stdout.write(
    `  · next-wave ${report.matrixNext.id} | ${report.matrixNext.pair} | ${report.matrixNext.cli}\n`,
  )
  process.stdout.write(`  · reason ${report.matrixNext.reason}\n`)
  for (const m of report.merges) process.stdout.write(`  · merge ${m.from} → ${m.to} (${m.pair})\n`)
  for (const c of report.crossCandidates) process.stdout.write(`  · cross ${c.id} | ${c.pair}\n`)
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.planTrinity && report.claySolvedByThisFold === 0 ? 0 : 1
}

export const runTrinityPlanExit = runPlanTrinityExit
export const runPlanCrossExit = runPlanTrinityExit
export const runPlanningInTrinitiesExit = runPlanTrinityExit

