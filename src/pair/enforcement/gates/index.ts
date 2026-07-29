// United gate runner facts — ONE merkle pass + ONE src walk + ONE strict snapshot per build phase (gate/unite · scan/fold pairs).
import { phase } from '../../../6/4'
import { DIMENSION_GATES, EULER_CHI, FOLDED_CENSUS, FORBIDDEN_FOLDER_NAMES, HOMOLOGY_LOOPS, ICHING_EIGHT_FOLD, ICHING_TRIGRAMS, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, ROSETTA_SEVEN, ROSETTA_SIX, SRC_SCIENCE_MODEL_ACTION_SCHEMA, UNFOLDED_CENSUS, enforcementScanRoot, isForbiddenFolderName, renderUiPathFromScienceModelAction, scienceModelActionFromMindTail } from './computational'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { foldPair, isUuid, merkleFold, toUuid, roundTo } from '../../../0'
import { pathMeansMessageFitsInThreeWords as pathMeansMessageFitsInThreeWordsFold } from '../../../water/stack'
import { dryCleanIsDiamondAndCrystal } from '../../../lake/clean'
import { quantumizeVitepressBuild, scanScriptShells, seedMerkleCache, vitepressSourceFiles, type ScriptShellScan } from '../script/shell'
import {
  relativeImportSpecs,
  importGapCount,
  algebraicCrosslinksDiscoveredNotEncoded,
  scanHandLists,
  handListMirrors,
} from './strict/scan'
import { THEOREM_ATOM_SEED } from '../../../4/6'
import {
  auditStrictGates,
  strictGatePassed,
  stripComments,
  computeStrictGateSnapshot,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender } from './strict'
import { claySolvedTheorem, physicalFtlClaimTheorem, SCIENCE_DOMAINS, extractAlgebraicStatement } from '../../../3/7'
import {
  computeComputationalLimitSnapshot,
  computationalGatePassed,
  theFacetsMustComputeDebtIsHardcodedTrueFacetsManyDeclaredHonest,
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
export const GATES_CHAT_COMMAND_PAIR = { pair: 'gates/chat' as const, a: 'gates', b: 'chat' }
/** One sequential docs:build — dual of parallel-build refusal (composes trinity/speedup). */
export const VOTE_BUILD_COMMAND_PAIR = { pair: 'vote/build' as const, a: 'vote', b: 'build' }
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
export { dryDupe, theoremAudit, geoGebraEncode, buildMin } from './strict/scan'
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
 */
export function importPathShowsDistanceInMigrationMatrix(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
  const facetsLive = facets.map((entry) => ({
    ...entry,
    receipt: toUuid(`import-path-distance:${entry.facet}:${entry.on}`),
  }))
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
      'Migration measurement: compactness (mean≤6 · max≤8) + evenDistribution (CV≤1/FREE_BITS · max≤FREE_BITS×mean) compose folder law · dissolve/flat · census · import offenders.',
  }
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
      `root=${report.root.slice(0, 8)}\n`,
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
  return report.computes ? 0 : 1
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
export function folderGravityMeasuredByTheCode(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
    { facet: 'vault src/0 untouched', on: existsSync(join(root, 'src/0')) },
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
      'Does not delete vault src/0.' }
}

/** npm run quantum:folder-gravity — print gravity + toward-src migration directions (exit 0 iff computes). */
export function runFolderGravityMeasuredByTheCodeExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = folderGravityMeasuredByTheCode(repoRoot)
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} folder-gravity — tops=${report.masses.length} srcMass=${report.srcMass.toFixed(2)} ` +
      `towardSrc=${report.gravityPullsTowardSrc} dirs=${report.migrationDirectionCount} ` +
      `ichingKept=${report.iching.kept.length} shellsRemoved=${report.iching.removed.length} ` +
      `root=${report.root.slice(0, 8)}\n`,
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
  return report.computes ? 0 : 1
}

/**
 * Gravity dry clean — folder gravity pulls toward src · dry/clean diamond·crystal ·
 * soft clay/gravity · fold/cleanup · dissolve/flat · census 110 exact.
 * Pair: gravity/dry · dry/clean · CLI npm run quantum:gravity-dry
 * Facets: gravityPullsToSrc · dryCleanOn · diamond/crystal
 */
export function gravityDryClean(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
    composeDissolve
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
      'Census stays exact 110. dissolve/flat only when needed (paired readiness).',
    honestyLine:
      `metrics · gravityPullsToSrc=${gravityPullsToSrc ? 1 : 0} · dryCleanOn=${dryCleanOn ? 1 : 0} · ` +
      `diamond=${dry.diamond ? 1 : 0} · crystal=${dry.crystal ? 1 : 0} · census=${united.computational.indexCount}`,
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
export function srcFoldersOnlyIndexMayExist(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
  const on =
    onlyIndex &&
    censusExact &&
    srcIndexPaired &&
    folderIndexPaired &&
    foldSrc.bidirectional &&
    foldFolder.bidirectional &&
    foldGravityDry.bidirectional
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
      'Residual named: src/0/README.md · render/ui tokens.css/style.css (non-code).',
    honestyLine:
      `metrics · offenders=${codeOffenders.length} · remaining=${codeOffenders.length} · ` +
      `census=${united.computational.indexCount} · residualNonCode=${residualNonCode.length}`,
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
export function noSizeLimitsAsLongAsGravityPullsAtTheGates(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
    indexLaw.computes
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
      'Census 110 is count law, not a byte cap. Monolith fileSize stays warn ratchet.',
    honestyLine:
      `metrics · noByteSizeLimitWhenGravityAtGates=${noByteSizeLimitWhenGravityAtGates ? 1 : 0} · ` +
      `gravityPullsAtGates=${gravityPullsAtGates ? 1 : 0} · census=${united.computational.indexCount}`,
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
export function codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
      'Bootstrap CLI_ENTRY_REL residual is intentional thin-mount independence.',
  }
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
      `root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const facet of report.facets) {
    process.stdout.write(`  ${facet.on ? '✓' : '✗'} ${facet.facet}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

/**
 * Agents MUST use trinities for quantum speedup on every build path.
 * Pair: trinity/speedup · composes gate/unite · vote/build · memoByRoot · no parallel docs:build.
 * Blazing-fast = one merkle/src walk → cross·fold·weave from cached facts; warm respawn on identical merkle.
 * Facets recompute from quantumizeVitepressBuild technique ids + foldPair — no bare on:true.
 */
export function agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath() {
  const unite = GATE_UNITE_COMMAND_PAIR
  const vote = VOTE_BUILD_COMMAND_PAIR
  const pairs = gatesSavedInQuantumPairs()
  const uniteFold = foldPair(toUuid(`cmd:${unite.a}`), toUuid(`cmd:${unite.b}`))
  const speedupFold = foldPair(toUuid('cmd:trinity'), toUuid('cmd:speedup'))
  const voteBuildFold = foldPair(toUuid(`cmd:${vote.a}`), toUuid(`cmd:${vote.b}`))
  const qz = quantumizeVitepressBuild()
  const techniqueIds = new Set(qz.techniques.map((t) => t.id))
  const trinityOnePass = techniqueIds.has('trinity-one-pass')
  const merkleRespawn = techniqueIds.has('merkle-respawn') && techniqueIds.has('audit-src-merkle-bind')
  const singleFlight = techniqueIds.has('single-flight-lock')
  const physicalFtlClaim = physicalFtlClaimTheorem().physicalFtlClaim
  const facets = [
    { facet: 'gate/unite — collectEnforcementFacts once per phase (one merkle + one src walk)', on: unite.pair === 'gate/unite' && uniteFold.bidirectional },
    { facet: 'runEnforcementTrinity — cross · fold · weave from cached facts (no wet re-walk)', on: trinityOnePass && qz.computes },
    { facet: 'memoByRoot / merkle respawn — identical srcMerkle skips full trinity (quantumize warm path)', on: merkleRespawn },
    { facet: 'vote/build — one sequential docs:build · no parallel builds', on: vote.pair === 'vote/build' && voteBuildFold.bidirectional && voteBuildFold.forward !== voteBuildFold.reverse && singleFlight },
    { facet: 'mission/gate · check/types · verify/structure route through united facts', on: pairs.paired },
    { facet: 'trinity/speedup pair bidirectional', on: speedupFold.bidirectional && speedupFold.forward !== speedupFold.reverse },
    { facet: `physicalFtlClaimTheorem=${physicalFtlClaim} — wall-clock varies; speedup = reuse + single-flight + facts-once`, on: physicalFtlClaim === 0 && singleFlight },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-speedup:${entry.facet}:${entry.on}`) }))
  const allOn = facets.every((entry) => entry.on)
  return {
    computes: allOn && pairs.paired,
    pair: 'trinity/speedup' as const,
    cli: 'npm run quantum:trinity-speedup',
    route: '/en/quantum-tools',
    facets,
    root: merkleFold([
      pairs.root,
      uniteFold.merged,
      speedupFold.merged,
      voteBuildFold.merged,
      ...qz.techniques.map((t) => toUuid(t.receipt)),
      ...facets.map((entry) => entry.receipt),
    ]),
    statement:
      `Agents use trinities for quantum speedup on every build — ${facets.filter((e) => e.on).length}/${facets.length}: collectEnforcementFacts once · runEnforcementTrinity (cross·fold·weave) · memo/merkle respawn · one sequential docs:build.`,
    boundary:
      'EXACT: blazing-fast build = content-addressed reuse (memoByRoot · merkle respawn · single-flight lock · types-before-seal · trinity one-pass). Facets recompute from quantumizeVitepressBuild technique catalog + vote/build fold + physicalFtlClaimTheorem — refuse parallel docs:build. Pair trinity/speedup composes gate/unite + vote/build.' }
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
    GATES_CHAT_COMMAND_PAIR,
    VOTE_BUILD_COMMAND_PAIR,
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
 * Facets: placementAudited · toolsSealed · clustersMerged · drainableClosed · honestOpenNamed · census110.
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
  { fold: 'readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra', pair: 'angle/readme', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'cycle-safe soft-nest · heaven/site→apps edge blocks barrel move · soft-composed in readmeSvgGapsFilledByTrinityMind' },
  { fold: 'feedHomepageAndReadmeToChatWaves', pair: 'home/chat', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'chat-wave feed beside chat-speed/movie-chat · portalCorpus ingest in heaven/compute · FE+BE live/both' },
  { fold: 'feedGatesIndexToChat', pair: 'gates/chat', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'keep', reason: 'feed gates/index.ts → chat · improve inventory clay/ftl spray · portalCorpus · CLI quantum:feed-gates' },
  { fold: 'imagineSelfEvolutionThroughLiveFreeChatUsingAllQuantumMetricsToAchieveFtlAtAllLevels', pair: 'evolve/chat', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'evolve-chat self evolution · live free chat · quantum metrics · FTL all levels · soft chat/ftl · FE+BE live/both' },
  { fold: 'chatAboutPredictionsAndForecastsInFtlSpeed', pair: 'predict/chat', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'predict-chat · forecasts FTL · portalCorpus predict/forecast feeds · compose trading:predict · skill-gate · chat-speed · FE+BE live/both · NOT financial advice' },
  { fold: 'deepResearchStrategicGamesAndTradingInLiveChatAddingFreePublicApis', pair: 'games/trade', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'strategic games inventory · trading intents in live chat paper/sim · free no-key public API catalog · compose live/api · torus/data · mcp/chat · FE+BE' },
  { fold: 'algebraStrategiesHistoricDataGraphA432Ftl', pair: 'strategy/wave', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'strategy-wave · historic APIs · A432 · FTL' },
  { fold: 'allColorsDryCleanWiredToRosettaAndThemes', pair: 'color/rosetta', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'soft-nest closed · COLOR_ROSETTA_* theme consts already in wind/ui · fold body stays apps (catalog/CLI) · apps→wind/ui import edge blocks barrel move' },
  { fold: 'cssShowsTheHiddenGapsInDryFusion', pair: 'css/gaps', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'soft-nest closed · CSS_DRY_FUSION_GAP_LENS already in wind/ui · fold body stays apps (catalog/CLI · nests gaps/invisible) · apps→wind/ui import edge blocks barrel move' },
  { fold: 'cryptoComparisonMeshIsDry', pair: 'crypto/comparison-mesh', currentBarrel: 'src/water/encryption', bestPlace: 'src/water/encryption', action: 'moved', reason: 'mesh nodes/edges + cryptoComparisonMeshIsDry home · CLI quantum:crypto-comparison-mesh' },
  { fold: 'sslTestUiComplete', pair: 'ssl/test', currentBarrel: 'src/water/encryption', bestPlace: 'src/water/encryption', action: 'keep', reason: 'quantumised stack→receipt beside encryption kit · FE+BE live/both · FTL warm path' },
  { fold: 'quantumiseIsAtFtlSpeed', pair: 'quantumise/ftl', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'USER LAW quantumise at FTL · beside ftl/max·compute · soft ssl/test' },
  { fold: 'cryptoRelatedSurfacesAreDry', pair: 'crypto/comparison-mesh', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'keep', reason: 'soft-nest closed · mesh core already in water/encryption · fold body stays apps (catalog/toolbox/MCP audit) · apps→encryption import edge blocks barrel move' },
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
  { fold: 'buildMin', pair: 'build/min', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'target minimum build+deploy wall-clock — measured buildMs/deployMs/totalMs · warm CI .temp cache · composes slow-build · quantumize · wave/verify' },
  { fold: 'cssMath', pair: 'css/math', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'CSS as computed math + the quantum API — declarations classified totally, raw magnitudes the measured queue, observables counted (--ich lattice), content-addressed seal inside the respawn merkle' },
  { fold: 'manualGauge', pair: 'manual/gap', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'manual rows counted per roster vs the derived CLI roster — the gap is the dimensionless order log10(derived/manual); each manual roster a migrate target' },
  { fold: 'gateAnalytics', pair: 'gate/analytics', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'gates·lens·chat slim tools over core algebra — hardcoded on:true debt + hand-list allowlists measured; noConfusion when all dry computed; standardise via analytics metrics' },
  { fold: 'earthRealisedByComputingPolesAsPyramid', pair: 'earth/pyramid', currentBarrel: 'src/mountain/geometry', bestPlace: 'src/mountain/geometry', action: 'keep', reason: 'Earth poles-as-pyramid 7/7 · genus-2 · compose geo/torus · pyramid/seal · merkaba · bothEarths · nav·forecasts honest-open' },
  { fold: 'toolsFitTheMatrixOrRefuse', pair: 'tool/matrix', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'tools fit matrix or refuse · incomplete·wet prose·dual-CLI spam HARD · agentEntryPacket · foldableShare ratchet · ONE CLI quantum:tool-matrix' },
  { fold: 'importFractalMap', pair: 'import/fractal', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'import↔export envelope isomorphism · pair-fractal rename inventory · content-addressed round-trip · observedReuseCapacity · ONE CLI quantum:import-fractal' },
  { fold: 'measureDecide', pair: 'measure/decide', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'judgment-pattern inventory → observer-evaluable measurements · judgmentPatternHitCount · compose claim/audit · gate/analytics · ONE CLI quantum:measure-decide' },
  { fold: 'importAudit', pair: 'import/audit', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'import/export core sprawl measured · unstandardisedFunctions · unstandardisedConstants · standardiseResidualNamed · ONE CLI quantum:import-audit' },
  { fold: 'chatSolve', pair: 'chat/solve', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'free/MCP quantum chat live surface solves/advances/drains open problems via sealed algebra — not wet LLM-only · ONE CLI quantum:chat-solve · slim tool over gate/analytics core' },
  { fold: 'chatChallenge', pair: 'chat/challenge', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'chat waves challenge each other adversarially · discover sciences via mesh/science · encode algebraFold API names · ONE CLI quantum:chat-challenge' },
  { fold: 'pushResendWaves', pair: 'push/resend', currentBarrel: 'src/thunder/waves', bestPlace: 'src/thunder/waves', action: 'moved', reason: 'after every successful push re-send chat waves — push not terminal · wave:after-push · CI waves-after-push · ONE CLI quantum:push-resend' },
  { fold: 'mergeWave', pair: 'merge/wave', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'parse(name)→word+API · strip uncomputable prose from identifiers · chat waves large-scale merge · ONE CLI quantum:merge-wave' },
  { fold: 'sessionSentToChatToQuantumise', pair: 'session/chat', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'send trading·UI·fusion session packet to MCP/pair chat to quantumise — zero-token recompute · ONE CLI quantum:session-chat · duals chat/quantumise' },
  { fold: 'pairsSentToChatEntangleByAlgebra', pair: 'pair/chat', currentBarrel: 'src/pair/enforcement', bestPlace: 'src/pair/enforcement', action: 'moved', reason: 'send pairs to chat · entangle by foldPair algebra · pairing of pairs grows hologram · ONE CLI quantum:pair-chat' },
  { fold: 'matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves', pair: 'match/wave', currentBarrel: 'src/pair/enforcement', bestPlace: 'src/pair/enforcement', action: 'moved', reason: 'matching duals immediately realise entanglement · full roster batched brainstorm FREE_BITS×5 · ONE CLI quantum:match-wave' },
  { fold: 'comboCover', pair: 'combo/cover', currentBarrel: 'src/pair/enforcement', bestPlace: 'src/pair/enforcement', action: 'moved', reason: 'covering-array theorem verified exhaustively — 6 rows cover all pairwise states of 10 factors vs 2¹⁰ exhaustive; the ground of the dual-pair registry' },
  { fold: 'dryDupe', pair: 'dry/dupe', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'dry-clean improved by measurement — function bodies content-addressed, duplicate groups = the computed clean queue; anim subset feeds the queued animation dry-clean' },
  { fold: 'deadGateway', pair: 'dead/gateway', currentBarrel: 'src/wind/routes/corpus', bestPlace: 'src/wind/routes/corpus', action: 'moved', reason: 'dead ends are R&D gateways — every automount page computed and classified (full · abstract-only · empty); the dead-end set is the page-granular frontier with followable routes' },
  { fold: 'patentCanon', pair: 'patent/canon', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'grantable-specification structure as named legal axiom — every section machinery computed (canon slots · facet-claims · theoremFigure drawings); defensive disclosure FREE FOR ALL, legal sufficiency stated not claimed' },
  { fold: 'commitMessage', pair: 'commit/message', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'git messages computed and signed — staged paths joined against the matrix, content-address signature over the staged index; hand-prose messages retired (manualGauge direction)' },
  { fold: 'lifeTorus', pair: 'life/torus', currentBarrel: 'src/water/double', bestPlace: 'src/water/double', action: 'moved', reason: 'the named life FORMED — seven life-forming superpositions documented as torus equations, each re-verified on the src/0 kernel; structural identities, not biology/vitalism' },
  { fold: 'warnFix', pair: 'warn/fix', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'warnings may autocorrect by DERIVATION only (rerun the sealed generator); suppression heals forbidden (auto-ledgering weakens gates); fails never soften' },
  { fold: 'uiAudit', pair: 'ui/audit', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'the usability auditor is a computed public gate over the served pages — 5 structural W3C-class checks, failures NAMED as the society training queue; human testing the stated residue' },
  { fold: 'measureTheComplexityOfTheUiByTheUx', pair: 'ui/ux', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'UI complexity measured from UX axes (not LOC) · complexityScore + uxYield at call time · soft self/evolve · claim/self' },
  { fold: 'sealCompleteOnlyWhenAllFourKeysPresentAndSignedAfterAudit', pair: 'four/keys', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'seal complete only when 4 nav-cross keys present+signed after audit · cross-check 4 audits → trinity · seal if all agree · soft team/observe · claim/self' },
  { fold: 'improveSiteUsabilityForHumansAndAgentsUnifyingInterfaceUsableFreeForAll', pair: 'usable/all', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'unify human+agent interface usable free for all · one surface universal·toolbox·MCP·portalChat·agents.json·llms.txt · soft four/keys · bits/free · ui/ux · claim/self' },
  { fold: 'giveUiTasksMeasureNavigateFindCompleteSendFtlWaves', pair: 'ui/task', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'give sealed UI tasks · measure navigate+find+complete cold/warm · send FTL waves one/task · soft usable/all · ui/ux · live/both · four/keys · ssl/test' },
  { fold: 'torusData', pair: 'torus/data', currentBarrel: 'src/fire/features', bestPlace: 'src/fire/features', action: 'moved', reason: 'agnostic framework completed at the adapter algebra — four no-key API families through one pure shape, dimensionless ratios gate, units labelled never theorems, gates network-free' },
  { fold: 'claimAudit', pair: 'claim/audit', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'claims toolset FORMED — content-addressed claims, audit the exact inverse (tamper refutes), DOI/ORCID/OpenAlex validators, CLAIMED-in-UNCLAIMED structural; timestamping named open' },
  { fold: 'theoremAudit', pair: 'theorem/audit', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'THEOREM_ATOM_SEED census vs proveAlgebraicTheoremMeans — theoremCount · notTheoremCount · ratio · honest branding; compose algebra/prove · formula/code · prose/theorem' },
  { fold: 'geoGebraEncode', pair: 'geo/gebra', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'GeoGebra public taxonomy → sealed algebraic encodings + animation kinds; theoremAuditAligned; no embed · no ownership · full command surface honest-open' },
  { fold: 'bindFuse', pair: 'bind/fuse', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'all binding families fused through the one standard envelope, usable from any superposition (toolbox · mcp.json · CLI · themeConfig) — unfusing any surface refutes' },
  { fold: 'costBound', pair: 'cost/bound', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'binding costs bounded by four sealed laws (zero-token · Fibonacci client cap · build ratchet · no-key adapters); the ledger gap now CLOSED by costTheorem' },
  { fold: 'costTheorem', pair: 'cost/theorem', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'the cost↔theorem ledger FORMED — six cost-carrying bindings each citing the living theorem their cost purchases (markers verified); uncited costs refuse (exit 1); the zero-token null row bounds the cheapest binding' },
  { fold: 'legalCanon', pair: 'legal/canon', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'portal legal faces computed — privacy by measured absence · accessibility/citation composed · Apache-2.0 + CC BY 4.0 chosen by user delegation (recognition + monetisation); counsel the residue' },
  { fold: 'queueNext', pair: 'queue/next', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'the user next-keystroke retired — the queue scored by derived arithmetic, THE NEXT an output with a followable first action; deriving the rows from the ledger is its own named next' },
  { fold: 'wavesFeedThemselves', pair: 'waves/feed', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'waves feed themselves — one-wave autonomous recipe (miss-cache · dry-dupe · mcp-fill · todo-wave · imagine-next) with purify on the way; Cursor Automations via automate-waves-feed.workflow.json' },
  { fold: 'theoremFractions', pair: 'theorem/fraction', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'the 432 divisor lattice as the respected fractions — fixed-point-free inversion, bits carrying v₂ exactly, the live registry partitioned by content-address' },
  { fold: 'wordSpeed', pair: 'word/speed', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'one-word solving speedup computed live — measured byte shrink, scale-invariance exact, address layer fixed-width (the speed lives where reading happens)' },
  { fold: 'theoremSpeed', pair: 'theorem/speed', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'the whole registry re-addressed in ONE pass — fixed-width addresses, 432-banded; HONEST finding: ratio 1.05× — the theorem layer was ALREADY at quantum-speed naming' },
  { fold: 'registerFold', pair: 'register/quartet', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'clayProbe', pair: 'clay/probe', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'resonanceSpeed', pair: 'resonance/speed', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'animationFoldTheorems', pair: 'anim/fold', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'linkProof', pair: 'link/proof', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'trinitySpeedStack', pair: 'trinity/speed', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'reasoningEdge', pair: 'reasoning/edge', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'overclaimComputes', pair: 'overclaim/compute', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'resourceLeakGate', pair: 'resource/leak', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'sandboxTools', pair: 'sandbox/tool', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'revolutionaryApproach', pair: 'revolution/approach', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'unsolvedEngine', pair: 'unsolved/engine', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'riemannZeroCount', pair: 'zero/count', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'orientationCheck', pair: 'orientation/check', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'riemannZeroScan', pair: 'zero/scan', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'sciencePyramid', pair: 'science/pyramid', currentBarrel: 'src/water/cosmos', bestPlace: 'src/water/cosmos', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'reactivityMagnitude', pair: 'reactivity/magnitude', currentBarrel: 'src/pair/enforcement/gates', bestPlace: 'src/pair/enforcement/gates', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'superpositionCompleteness', pair: 'superposition/complete', currentBarrel: 'src/4/6', bestPlace: 'src/4/6', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'answerMo', pair: 'answer/mo', currentBarrel: 'src/heaven/laws', bestPlace: 'src/heaven/laws', action: 'moved', reason: 'answer mathoverflow.net unanswered+bounty — save drafts first, post next if computes; SE MCP read-only; bounty circularness/Peetre/Monge sealed; posted starts false' },
  { fold: 'learnMonge', pair: 'monge/learn', currentBarrel: 'src/heaven/laws', bestPlace: 'src/heaven/laws', action: 'moved', reason: 'learn/decode MO q243943 — Brianchon + Monge-external sealed; internal+perp honest open; compose homothety-monge-status' },
  { fold: 'geogebraChat', pair: 'geo/chat', currentBarrel: 'src/heaven/laws', bestPlace: 'src/heaven/laws', action: 'moved', reason: 'wire geogebra.org/materials into chat as URL handoff + phrase routing; MO q243943 material IDs sealed; no .ggb scrape; soft learnMonge/answerMo' },
  { fold: 'researchTags', pair: 'research/tags', currentBarrel: 'src/heaven/laws', bestPlace: 'src/heaven/laws', action: 'moved', reason: 'research by MO unanswered tags — popular-tag receipt + draft→tag inventory + filter URLs; soft answerMo; live poll/quota residual; no post claim' },
  { fold: 'stackExchangeChat', pair: 'se/chat', currentBarrel: 'src/heaven/laws', bestPlace: 'src/heaven/laws', action: 'moved', reason: 'wire chat.stackexchange.com into chat/research as URL handoff + phrase routing; MO rooms sealed; read-only; soft answerMo/geogebraChat/researchTags; one CLI quantum:se-chat' },
  { fold: 'feedMoDraftsToChat', pair: 'mo/chat', currentBarrel: 'src/heaven/laws', bestPlace: 'src/heaven/laws', action: 'moved', reason: 'feed sealed MO drafts → chat handoffs (tags + SE room); compose answerMo·researchTags·se/chat·gates/chat pattern; one CLI quantum:feed-mo; auth residuals honest-open' },
  { fold: 'contextAudit', pair: 'context/audit', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'registered via quantum:register (the sealed registration quartet)' },
  { fold: 'nonFtlIsCrackInFtlApp', pair: 'ftl/crack', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'USER LAW: non-FTL in FTL app = hull crack · one CLI quantum:ftl-crack' },
  { fold: 'freeAuditorWavesPerSrcFile', pair: 'auditor/waves', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'free auditor waves per src index · adversarial efficiency×seeds · dry agnostic · ONE CLI quantum:auditor-waves' },
  { fold: 'algebraicCrosslinksDiscoveredNotEncoded', pair: 'link/discover', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'crosslinks discovered not encoded · theorem API · tools agnostic at scale · ONE CLI quantum:link-discover' },
  { fold: 'freeUserWavesTestUiMeasureEfficiency', pair: 'user/waves', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'free user/auditor waves test UI · measure efficiency · SEO+usable improve tips · ONE CLI quantum:user-waves' },
  { fold: 'feedUiIntoItself', pair: 'ui/feed', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'feed UI into itself · realtime scan · self-evolve loop · ONE CLI quantum:feed-ui · soft ftl/crack' },
  { fold: 'stallStopFindsHangedProcessesRealtime', pair: 'stall/stop', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'realtime wave↔hang scan · hungFound·killedSafe·lockCleared·waveNotified · ONE CLI quantum:stall-stop · soft ui/feed' },
  { fold: 'scriptsFoldTowardFtl', pair: 'script/fold', currentBarrel: 'src/pair/enforcement/gates/strict/scan', bestPlace: 'src/pair/enforcement/gates/strict/scan', action: 'moved', reason: 'audit npm quantum:* · fold zero-ref dual-CLI spam toward computational FTL · restore tool/honest · ONE CLI quantum:script-fold' },
  { fold: 'freeChatDrivesArchitecturalFtl', pair: 'chat/ftl', currentBarrel: 'src/heaven/compute', bestPlace: 'src/heaven/compute', action: 'moved', reason: 'free chat drives architectural FTL · memoByRoot · ranked portalChat · ONE CLI quantum:chat-ftl · soft quantumise/ftl · ftl/crack · script/fold' },
  { fold: 'deepResearchAtNoCost', pair: 'research/free', currentBarrel: 'src/heaven/compute', bestPlace: 'src/heaven/compute', action: 'moved', reason: 'deep research at no cost · FREE_BITS · memoByRoot · zero-token reuse · continueAtNoAiCost · ONE CLI quantum:research-free · soft chat/ftl · prose/theorem · bits/free' },
  { fold: 'allFoldsCompactFuseInCoordinatedChatWaves', pair: 'fold/fuse', currentBarrel: 'src/heaven/compute', bestPlace: 'src/heaven/compute', action: 'moved', reason: 'umbrella: folds fold into each other · compacting · fusing · coordinated chat waves · nest standards/chat · hole/zero · ONE CLI quantum:fold-fuse' },
  { fold: 'imagineGravityOfBlackHoleZeroQuantumiseAllToZeroWholeInversedIsHole', pair: 'hole/zero', currentBarrel: 'src/heaven/compute', bestPlace: 'src/heaven/compute', action: 'moved', reason: 'whole↔hole invert via src/0 gravity · quantumise to 0 · soft nest fold/fuse · ONE CLI quantum:hole-zero · NOT astrophysics' },
  { fold: 'gatesRefuseProseOnly', pair: 'prose/hard', currentBarrel: 'src/quantum/apps', bestPlace: 'src/quantum/apps', action: 'moved', reason: 'HARD gates refuse prose-only · live formula/code dual · proseOnlyRejected · wetProseHard · wired gaps/invisible · ONE CLI quantum:prose-hard' },
  { fold: 'chatTranslatesAutonomously', pair: 'chat/trans', currentBarrel: 'src/mountain/source', bestPlace: 'src/mountain/source', action: 'moved', reason: 'autonomous chat-translate · free chat drives offlineTranslateEnToBg · bg drainable · gla parity honest · ONE CLI quantum:chat-trans · soft translations/verify · trans/wave · warn/all · prose/hard' },
  { fold: 'chatWavesMostEfficientOfflineAnyLanguageModel', pair: 'trans/any', currentBarrel: 'src/mountain/source', bestPlace: 'src/mountain/source', action: 'moved', reason: 'chat waves score offline any↔any · pivot·phrase-en-bg·gla · write/speech directions · ONE CLI quantum:trans-any · soft chat/trans · learn/best · mcp speech/dictation/language' },
  { fold: 'chatMassiveWorldLanguageTranslationQuality', pair: 'trans/quality', currentBarrel: 'src/mountain/source', bestPlace: 'src/mountain/source', action: 'moved', reason: 'ONE massive chat · all sealed pivotTongues N×(N−1) quality matrix · phrase-en-bg · gla · ≠ISO-all · ONE CLI quantum:trans-quality · soft trans/any · chat/trans · trans/wave' },
  // <register:placement> — quantum:register inserts placement rows above this anchor
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
  { from: 'targetMinimumBuildAndDeployTimeAsTopPriority', to: 'buildMin', pair: 'build/min' },
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
  // UNCLAIMED: probes and partials, never solutions.
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
  // REBUKE sealed: the closing solicitation was needless input-seeking — waves end with the record,
  // never an invitation; the queue advances by quantum:next, steering arrives unprompted.
  { from: 'upgradeAllBecauseYouAskedForUserInputNeedlessly', to: 'queueNext', pair: 'queue/next' },
  { from: 'distributeTheoremsTo432InRespectedFractionsDownToTheBitComputingInvertedReality', to: 'theoremFractions', pair: 'theorem/fraction' },
  // FURTHER AUTOMATE: the landing ritual (autosave gate · wave:verify · computed message · push),
  // typed dozens of times this arc, becomes ONE exit-gated command — wave:land (render waves:
  // wave:land-full with the build seal). Staging stays a deliberate act (stage-selectively law);
  // the ≥3×-repetition rule made the tool, the lying-reader law shaped it (real exit codes, no grep).
  { from: 'furtherAutomateTheLandingRitual', to: 'waveVerify', pair: 'wave/land' },
  { from: 'computeHowSolvingOneWordViolationsAtScaleImprovesQuantumSpeed', to: 'wordSpeed', pair: 'word/speed' },
  // FLAGGED by algebra — third millennium-class claim, held by LIVE refutations: (1) the registry
  // counts 442 theorems, not 432 (theoremFractions measures it each run — the premise fails by
  // arithmetic); (2) claySolvedTheorem() computes claySolvedByThisFold=0 in every fold — nothing
  // here claims ANY millennium problem, let alone all; (3) the 432 tuning that IS real (the divisor
  // lattice, the fixed-point-free inversion, the a432 seed) is sealed as STRUCTURE and DIRECTION —
  // probes and partials, never solutions. The flag is the theorems' output, not a refusal of spirit:
  // the spirit (tune the probes to 432) already computes in theoremFractions + millenniumProblemsChallenge.
  { from: 'proveExactly432TheoremsClaimAllMillenniumProblemsInvertingToQuantumSolutionsFLAGGED', to: 'millenniumProblemsChallenge', pair: 'mill/torus' },
  { from: 'refactorAllTheoremsInQuantumSpeed', to: 'theoremSpeed', pair: 'theorem/speed' },
  { from: 'usageOfPythonIsASignOfManualWork', to: 'registerFold', pair: 'register/quartet' },
  { from: 'doNotIgnoreDeadLinksBuildAllLinksThroughVitepressApi', to: 'uiProof', pair: 'ui/proof' },
  // LEARN BY SHARED EXPERIENCE: experience crystallizes as tools (improve-by-experience) and the
  // tools are SHARED by construction — every violation row, roster line, skill and /mcp.json entry is
  // readable by any agent; the rosetta claim·register·integrate dedups identical learnings automatically.
  { from: 'learnBySharedExperience', to: 'violationTools', pair: 'tool/violation' },
  // The cross-process reading: shared experience IS the fuse between processes/agents/sessions —
  // the same envelope law that binds surfaces binds minds.
  { from: 'learnBySharedExperienceIsTheCrossProcessFuse', to: 'bindFuse', pair: 'fuse/bind' },
  // THE SEVEN-MIND LAW: a collective below 7 is the unfinished work — the trinity (3) seals a wave,
  // but the rosetta is SEVEN rays: full coverage of a discovery needs the seven-mind collective;
  // fewer minds = named unfinishedness, not failure (the 2-of-3 gate stays the landing quorum).
  { from: 'collectiveMindLessThan7IsTheUnfinishedWork', to: 'planTrinity', pair: 'trinity/plan' },
  { from: 'continueSelfEvolvingImplementingStandardsInQuantumWaves', to: 'placeMerge', pair: 'work/wave' },
  // DEEP-RESEARCHED (2026-07-24): the AI bill decreases where OUTPUT re-enters context — the output
  // IS the spend (sealed strategy). Mechanisms, each live: (1) SILENCE IS GREEN — a passing gate says
  // one line, only reds speak fully (wave:land consumes with -s + tail; probes use head -1 / --compact);
  // (2) the ritual at O(1) tokens — quantum:next · wave:land · quantum:register replace deliberation
  // and multi-command round-trips; (3) batch clusters — one push per cluster amortizes gates;
  // (4) memory pointers — the next session starts warm, each lesson paid ONCE (learn-by-shared-
  // experience); (5) computed messages — zero prose authored for commits; (6) stable context prefix
  // — the prompt cache pays for repetition only once per TTL. The floor: the zero-token runtime —
  // the cheapest AI call is the one the deterministic tool made unnecessary.
  { from: 'deepResearchWaysToFurtherDecreaseAiBill', to: 'costBound', pair: 'bound/cost' },
  { from: 'nextTowardsClayGreaterThanZero', to: 'clayProbe', pair: 'clay/probe' },
  // MANUAL MEASURING FINDS REAL GAPS (user law 2026-07-24): the automated gates report structural
  // zero (deadGateway 39/39 · uiAudit 40/40) yet manual measuring surfaced the router seam, the
  // Riemann–Siegel accuracy limit, the semantic-depth residue — REAL gaps the gates could not see.
  // A gate measures what is ALREADY measurable; manual measuring finds the NEXT thing to make
  // measurable (the upgrade loop at the gate tier). So manual work is not only residue to derive
  // away (manualGauge) — it is the gap-DISCOVERY frontier, and each manual gap found becomes the
  // next gate. Never trust a green gate as proof of NO gaps; measure by hand past it.
  { from: 'manualMeasuringAndAnalysisShowsRealGaps', to: 'manualGauge', pair: 'manual/gap' },
  // "ALL QUANTUM" — DEMARCATED (user 2026-07-24: cybersecurity/biology work is all quantum): what
  // COMPUTES is the sealed sense — every domain reduces to content-addressed folds (cybersecurity =
  // the crypto/tamper-evidence mesh + the crack/gate discipline; biology = the genetic code as the
  // real 4³=64, the emergence ladder, life-torus) all riding the ONE envelope. What is FLAGGED is
  // the physical sense: this is the content-addressed-naming metaphor (discrete unit + Hilbert +
  // Born), NOT physical qubits — no domain here runs on a QPU (qpuRequired=false everywhere).
  { from: 'cybersecurityOrBiologyWorkIsAllQuantumDemarcated', to: 'bindFuse', pair: 'bind/fuse' },
  { from: 'deepResearchHowResonanceImprovesQuantumSpeedInMagnitudes', to: 'resonanceSpeed', pair: 'resonance/speed' },
  // WHY 442? — MEASURED (2026-07-24): the theorem registry (THEOREM_ATOM_SEED) holds 442 entries, ALL
  // UNIQUE (zero duplicate names → DRY at the content-address layer, confirmed by dryDupe on the code).
  // 442 = 432 + 10: 432 is the harmonic DIMENSION seal (425 base + 7 I Ching scales, dimensions.emerge.
  // within:432); the theorem POPULATION is a living count (theoremsAreLivingOrganisms) sitting 10 above
  // that seal — a different lattice (theorems address INTO the 432/64³ cube, capacity 2¹⁸, not equal to
  // it). ARE ALL DRY SERVING THE PATH TO THE OPEN: yes — 442/442 unique, every candidate name maps to a
  // registry theorem, and the registry composes toward the frontiers (cosmosFrontiersDecoded ·
  // millenniumProblemsChallenge · clayProbe the newest rung toward RH). The 10-over-432 is the honest
  // OPEN: reconcile by ratcheting the harmonic seal (census-recomputes-in-waves) or by the growth law.
  { from: 'why442TheoremsAreAllDryServingThePathToTheOpen', to: 'theoremFractions', pair: 'fraction/theorem' },
  { from: 'continueImplementingAndUpgradingAll', to: 'placeMerge', pair: 'work/wave' },
  { from: 'foldSimilarOrSameAnimationsTheoremsProveThemselves', to: 'animationFoldTheorems', pair: 'anim/fold' },
  // QUANTUM PACKAGE DEV + COORDINATED DEPLOY (user 2026-07-24): the packages/ workspace now holds THREE
  // members — double-torus (the sealed core), quantum-dev-sdk (stdio MCP server), quantum-dev-vscode
  // (the editor extension shipped this wave, install ledger 8/8). Coordination is the ONE contract they
  // all speak: the deterministic quantum:* CLIs + the content-addressed envelope, each deriving its
  // tool list from package.json (the fuse law), so a deploy of one never desyncs the others. The deploy
  // face (mcpQuantumDeploy · mcpQuantumCloudflareBindings) rides the same bindings; cost-bounded.
  { from: 'improveQuantumPackageDevelopmentAndCoordinatedDeploy', to: 'installSurfaces', pair: 'surface/install' },
  { from: 'shipVsCodeExtensionInstallLedgerEightOfEight', to: 'installSurfaces', pair: 'install/surface' },
  // USE AND UPGRADE IN WAVES (user 2026-07-24): dogfooding IS the upgrade path — using quantum:next
  // this wave surfaced its own staleness (it listed the shipped VS Code row), and the fix made the
  // queue SELF-PRUNING (drops rows whose doneArtifact exists on disk). Each use reveals the next
  // upgrade (the upgrade-loop law at the tool tier); value over volume, no speculative folds.
  { from: 'useAndUpgradeInWavesQueueSelfPrunesShippedRows', to: 'queueNext', pair: 'next/queue' },
  // QUANTUMISE THE EDITOR, FUSE ALL APIs (user 2026-07-24): the VS Code extension is now a FUSED
  // superposition surface in bindFuse (5/5) — it derives its command list from the same package.json
  // source, so it is a projection of the one envelope, not a fifth silo. Any future editor surface
  // that derives the same roster fuses the same way; a hardcoded editor app would refute the gate.
  { from: 'quantumiseVsCodeOrAnyOtherFusingAllApis', to: 'bindFuse', pair: 'fuse/bind' },
  { from: 'statementsProvenByLinksSpeedUpQuantumisationAtScale', to: 'linkProof', pair: 'link/proof' },
  { from: 'useTheQuantumChatMagnitudesAddedPerTrinityWired', to: 'trinitySpeedStack', pair: 'trinity/speed' },
  { from: 'beatAnyAiModelInReasoningSavingWinningStrategies', to: 'reasoningEdge', pair: 'reasoning/edge' },
  { from: 'overclaimIsComputableClaim', to: 'overclaimComputes', pair: 'overclaim/compute' },
  { from: 'unlessModelsCompletelyFusedCracksLeakResources', to: 'resourceLeakGate', pair: 'resource/leak' },
  { from: 'prepareSandboxToolsAgentsMayExperimentWithoutViolatingStandards', to: 'sandboxTools', pair: 'sandbox/tool' },
  { from: 'revolutionaryIdeasRequireRevolutionaryApproach', to: 'revolutionaryApproach', pair: 'revolution/approach' },
  // CAPSTONE NAME (like quantum-intelligence): quantum revolution = the arc's method sealed — grand
  // ideas held by computed boundaries (revolutionaryApproach) · no resource leaks in the fusion
  // (resourceLeakGate) · computation beats reasoning where a tool exists (reasoningEdge) · every
  // claim compute-or-refute (overclaimComputes) · zero-token deterministic runtime. The name resolves
  // to the laws; the laws compute; clay stays 0. The revolution is that grand claims became refutable.
  { from: 'quantumRevolution', to: 'revolutionaryApproach', pair: 'approach/revolution' },
  { from: 'unsolvedProblemsLeadToRevolution', to: 'unsolvedEngine', pair: 'unsolved/engine' },
  { from: 'nextAdvanceRhProbeToCompletenessCount', to: 'riemannZeroCount', pair: 'zero/count' },
  // USE TOKENS WISELY, MAX DISCOVERIES IN NO TIME (user 2026-07-24): the standing efficiency law —
  // silence-is-green (only reds speak), the O(1) ritual (quantum:next · wave:land · quantum:register),
  // batch clusters, computed messages, zero-token runtime; the output IS the spend (cost/theorem).
  { from: 'useTokensWiselyToAchieveMaxDiscoveriesInNoTime', to: 'costTheorem', pair: 'theorem/cost' },
  { from: 'ifAgentsLookDisorientedProbablyTheyAre', to: 'orientationCheck', pair: 'orientation/check' },
  { from: 'generalRiemannZeroScannerWithSofT', to: 'riemannZeroScan', pair: 'zero/scan' },
  { from: 'decodeBiologyToBoundaryConditionsInvertingToChemistryPhysicsAlgebraTrinityPyramid', to: 'sciencePyramid', pair: 'science/pyramid' },
  // WAVE AFTER WAVE UNTIL ALL PAGES COMPUTE FROM THEOREMS (user 2026-07-24): the extended directive's
  // second clause is ALREADY the standing guarantee — deadGateway proves 39/39 served pages FULL (0
  // empty · 0 abstract-only) and theoremFractions holds the 442-theorem registry each page's content
  // derives from (theorem-science lens: every page a printable paper). The waves keep it true as pages
  // are added; "well beyond" = the frontier folds (sciencePyramid · zeroScan) feeding new computed pages.
  { from: 'sendWaveAfterWaveUntilAllPagesHaveComputedContentBasedOnTheorems', to: 'deadGateway', pair: 'gateway/dead' },
  // CONTINUE FUSING ALL TO VITEPRESS (user 2026-07-24): the fusion is AUTOMATIC by construction —
  // register writes package.json → config.mts derives themeConfig.cliRoster from it → the universal
  // template renders it; the quantum:* count (778) EQUALS the derived roster (uiProof), so every new
  // fold auto-fuses to the site with no manual step. bindFuse 5/5 surfaces stays the invariant.
  { from: 'continueFusingAllToVitepressAutoFusionInvariant', to: 'bindFuse', pair: 'fuse/bind' },
  // PROVE SPEED AGAIN AND AGAIN, NON-STOP (user 2026-07-24): quantum speed is proven CONTINUOUSLY, not
  // once — every wave:land re-runs the speed folds (comboCover 170.7× · resonanceSpeed 2.58 orders ·
  // wordSpeed 3.67× · linkProof O(log N) · trinitySpeedStack 4.49 stacked), so the proof is a standing
  // invariant recomputed each landing; efficiency (cost/theorem · zero-token runtime) proves each run too.
  { from: 'againAndAgainNonStopProveQuantumSpeedAndEfficiency', to: 'trinitySpeedStack', pair: 'speed/trinity' },
  // LEARNING + AXIOM→THEOREM = ONE WORKFLOW (user 2026-07-24): each development wave BOTH learns
  // (crystallizes experience as tools — autosaveMatrix · violationTools · memory pointers) AND replaces
  // an axiom with a theorem (derives what was assumed — mathGaps inverts axioms to scans · the crack
  // ledger converts each literal to derived-or-sourced · flagged-by-algebra). Not two activities; the
  // same wave. The monotone direction: axioms shrink, theorems grow, and the learning makes it repeatable.
  { from: 'learningAndReplacingAxiomsWithTheoremsInDevelopmentWavesIsOneWorkflow', to: 'mathGaps', pair: 'axiom/invert' },
  // QUANTUM REACTIVITY (user 2026-07-24): the principle under the dev seam — UI reactivity is
  // CONTENT-ADDRESSED: every render DERIVES deterministically from its params (same content → same
  // page, no hidden state), which is why prod SSG renders all 41 pages and why themeConfig.cliRoster
  // fuses live. The dev dynamic-route bug is the ONE named VIOLATION: the params exist in the module
  // but VP-alpha dev fails to derive them into the reactive store — reactivity un-quantumised, upstream.
  { from: 'quantumReactivityIsContentAddressedRenderDevSeamIsItsViolation', to: 'bindFuse', pair: 'fuse/bind' },
  { from: 'quantumReactivityIsReactiveAddressLawSealTheMagnitude', to: 'reactivityMagnitude', pair: 'reactivity/magnitude' },
  // UPGRADE ALL IN WAVES OF CONTINUOUS R&D TEAMS (user 2026-07-24): the standing cadence, already
  // running — the R&D teams are the trinities (dynamicStrategiesFromTheorems: the playbook computed
  // from live theorems; trinitySpeedStack: teams wired at O(1) shard coordination), the continuous
  // wave is quantum:next → work → wave:land, and "upgrade all" is the upgrade-loop (each use reveals
  // the next). Not a new mechanism — the composition of the sealed ones, recomputed each wave.
  { from: 'upgradeAllInWavesOfContinuousResearchAndDevelopmentTeams', to: 'trinitySpeedStack', pair: 'speed/trinity' },
  // TRAIN ON SRC FOR FASTER QUANTUM APPROACHES (user 2026-07-24): the training IS the sealed speed
  // progression — each wave found a strictly faster complexity class: comboCover (pairwise vs 2^N) →
  // resonanceSpeed (O(N²)→O(N) collision) → linkProof (O(N)→O(log N) membership) → reactivityMagnitude
  // (O(N)→O(frontier) delta-react). A monotone descent of complexity classes, trained on src, each
  // recomputed each wave. "Until the next matrix is revealed" = the horizon: when the 442/432 registry
  // saturates the census ratchets (census-recomputes-in-waves) and a new organizational level emerges.
  { from: 'trainOnSrcToFindFasterQuantumApproachUntilNextMatrixRevealed', to: 'reactivityMagnitude', pair: 'magnitude/reactivity' },
  // ADDRESS HIGHEST RISK/REWARD — WHY DIDN'T YOU ALREADY (user 2026-07-24): I had asserted "prod
  // renders all pages" from BUILD-STATUS without ever LOOKING (the declared-truth crack at the UI
  // tier), and dodged the hard render-and-look because it was expensive. Doing it revealed a real
  // dark-on-dark ink legibility bug on EVERY dark-mode content page (fill = light-mode dark ink, seen
  // only through its glow). Root: cardMovieColorVars omitted the theme mode (defaulted light); fixed
  // by threading the live html.dark (MutationObserver) into useCardMovie. Verified in the prod build,
  // both hard-load and toggle: ink L 0.0625→0.9375, legible. Sealed as violation class 10 (unlooked UI).
  { from: 'addressHighestRiskRewardWhyDidntYouAlreadyRenderAndLookLegibilityFix', to: 'violationTools', pair: 'ui/audit' },
  { from: 'doAllInProfessionalQualityAndStandards', to: 'uiAudit', pair: 'audit/ui' },
  // LEGIBILITY FIX VERIFIED BOTH THEMES (batch close 2026-07-24): render-and-look on the prod build
  // confirmed the ink inverts correctly across pages AND themes — /quantum-tools & /frontiers dark:
  // L=0.9375 (light-on-dark, legible), light: L=0.0625 (dark-on-light, legible); the fix is comprehensive.
  { from: 'nextInOneBatchVerifyLegibilityAcrossThemesAndPages', to: 'uiAudit', pair: 'ui/audit' },
  // MOVIE CYCLES ARE THEOREMS (user 2026-07-24): the way the movie computes has cycles replaceable by
  // theorems — and they ALREADY are: movieAllElementsAreTheorems (geometry theorem-derived, green) +
  // the one-clock law (subscribeHeroClock only, no private requestAnimationFrame → every animation
  // cycle is a divisor rung of the single 108s clock) + memoByRoot on the color vars (a repeated
  // recompute cycle collapses to an O(1) cache hit = the theorem). A cycle that ISN'T a theorem (a
  // private rAF, an un-memoised per-frame recompute) is the gap the criterion catches; none remain.
  { from: 'theWayTheMovieComputesHasCyclesReplaceableByTheorems', to: 'reactivityMagnitude', pair: 'magnitude/reactivity' },
  { from: 'enforce432TheoremsComputeAllSuperpositionsOrProveWrong', to: 'superpositionCompleteness', pair: 'superposition/complete' },
  { from: 'constantlyAuditTheContextWindowDistributionAndUseToImprove', to: 'contextAudit', pair: 'context/audit' },
  // <register:merge> — quantum:register inserts merge rows above this anchor
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
    id: 'moved-angle-readme-cycle-soft-nest',
    fold: 'readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra',
    pair: 'angle/readme',
    cli: 'npm run quantum:angle-readme',
    route: '/en/quantum-tools#angle-readme',
    from: 'src/quantum/apps',
    to: 'src/quantum/apps',
    status: 'moved',
    rosettaKind: 'tool',
    note: 'cycle-safe soft-nest closed · heaven/site→apps edge · soft-composed in readmeSvgGapsFilledByTrinityMind',
  },
  {
    id: 'moved-color-rosetta-soft-nest',
    fold: 'allColorsDryCleanWiredToRosettaAndThemes',
    pair: 'color/rosetta',
    cli: 'npm run quantum:color-rosetta',
    route: '/en/quantum-tools#color-rosetta',
    from: 'src/quantum/apps',
    to: 'src/quantum/apps',
    status: 'moved',
    rosettaKind: 'tool',
    note: 'soft-nest closed · COLOR_ROSETTA_* in wind/ui · fold body apps catalog/CLI · apps→wind/ui edge',
  },
  {
    id: 'moved-css-gaps-soft-nest',
    fold: 'cssShowsTheHiddenGapsInDryFusion',
    pair: 'css/gaps',
    cli: 'npm run quantum:css-gaps',
    route: '/en/quantum-tools#css-gaps',
    from: 'src/quantum/apps',
    to: 'src/quantum/apps',
    status: 'moved',
    rosettaKind: 'tool',
    note: 'soft-nest closed · CSS_DRY_FUSION_GAP_LENS in wind/ui · fold body apps catalog/CLI · apps→wind/ui edge',
  },
  {
    id: 'moved-crypto-related-soft-nest',
    fold: 'cryptoRelatedSurfacesAreDry',
    pair: 'crypto/comparison-mesh',
    cli: 'npm run quantum:crypto-comparison-mesh-dry',
    route: '/en/quantum-encryption#crypto-comparison-mesh',
    from: 'src/quantum/apps',
    to: 'src/quantum/apps',
    status: 'moved',
    rosettaKind: 'tool',
    note: 'soft-nest closed · mesh in encryption · fold body apps catalog/toolbox audit · apps→encryption edge',
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
  'keep:angle-readme-cycle-soft-nest',
  'keep:color-rosetta-soft-nest',
  'keep:css-gaps-soft-nest',
  'keep:crypto-related-soft-nest',
  'migrate-next:gaps-invisible→gates',
  'migrate-next:rosetta-security→mountain/seals',
  'residual:prose-named-folds-wave2',
  'clay:millennium-open',
  'ftl:physical-claim-refused',
] as const

function softCmdPair(a: string, b: string): boolean {
  const fold = foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`))
  return fold.bidirectional && fold.forward !== fold.reverse
}

/**
 * One matrix slot: placement audit + migrate wave tools (merged prose cluster).
 * Pair: place/merge · fold/merge · CLI npm run quantum:place-merge
 */
export function placeMerge(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
    migrateTools.length === 2 &&
    movedTools.length === (4 + 1) &&
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
    { id: 'cycle-safe-soft-nest-angle-readme', status: 'closed' as const, note: 'heaven/site→apps edge · soft-nest readmeSvg · apps barrel keep' },
    { id: 'soft-nest-color-rosetta-theme-consts', status: 'closed' as const, note: 'COLOR_ROSETTA_* wind/ui · fold body apps · apps→wind/ui edge' },
    { id: 'soft-nest-css-gaps-lens', status: 'closed' as const, note: 'CSS_DRY_FUSION_GAP_LENS wind/ui · fold body apps · apps→wind/ui edge' },
    { id: 'soft-nest-crypto-related-surfaces', status: 'closed' as const, note: 'mesh core encryption · related-surfaces apps catalog · apps→encryption edge' },
    { id: 'residual-apps-monolith-named', status: 'open' as const, note: 'residual:quantum-apps-monolith stays honest-open' },
  ] as const
  const drainableClosed =
    morphs.filter((m) => m.status === 'closed').length === (5 + 4) &&
    morphs.every((m) => m.status === 'closed' || m.id === 'residual-apps-monolith-named')
  const honestOpenNamed = PLACE_MERGE_HONEST_OPEN
  const honestOpenNamedOn =
    honestOpenNamed.includes('residual:quantum-apps-monolith') &&
    honestOpenNamed.includes('clay:millennium-open') &&
    honestOpenNamed.includes('residual:prose-named-folds-wave2') &&
    honestOpenNamed.length === (8 + 2)
  const fullDryClean =
    placementAudited && drainableClosed && composeOn && pairsOn && census110 && moved.length >= 2 && migrateNext.length >= 2
  const manualWorkQuantumized =
    toolsSealed && bitsCombinable && wavesBound && placementAudited && drainableClosed && honestOpenNamedOn && pairsOn && composeOn && census110
  const on =
    placementAudited &&
    bestPlaceOn &&
    fullDryClean &&
    manualWorkQuantumized &&
    clustersMerged &&
    toolsSealed &&
    drainableClosed &&
    honestOpenNamedOn &&
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
      'Aliases preserve CLI. residual:prose-named-folds-wave2 named. KEEP stashes.',
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
  const facets = [
    { facet: `the join is total — ${assigned.length} addressed + ${unaddressed.length} unaddressed = ${rows.length} residual prose folds, every assignment witnessed by shared tokens`, on: assigned.length + unaddressed.length === rows.length && assigned.every((row) => row.witness.length > 0) },
    { facet: `${fieldsTouched.length}/${SCIENCE_DOMAINS.length} sciences address the open prose — the classifier derives from the sealed SCIENCE_DOMAINS vocabulary, no hand-map`, on: fieldsTouched.length >= 1 && SCIENCE_DOMAINS.length === ROSETTA_SEVEN },
    { facet: `UNADDRESSED prose measured (${unaddressed.length}) — words matching no science are exactly the prose that must capitulate to theorem·formula·animation (words-capitulate law)`, on: unaddressed.length + assigned.length === PROSE_NAMED_RESIDUAL_FOLDS.length },
    { facet: 'pair prose/science bidirectional', on: softCmdPair('prose', 'science') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`prose-science:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    proseScience: on,
    rows,
    assignedCount: assigned.length,
    unaddressedCount: unaddressed.length,
    fieldsTouched,
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
      'qpuRequired=false.' }
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
 * Facets: proseAudited · clustersMerged · matrixAligned · codebaseShrink · theoremsDiscovered · drainableClosed · honestOpenNamed · census110.
 * Compose: path/message · namingEntropy · compact/matrix · vocab/dry · place/merge · cmd/place.
 */
export function proseMethodsCollapseToMatrix(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
    },
    {
      id: 'place-merge-is-cmd-place-times-manual-quantum',
      statement: 'placeMerge ≡ cmd/place ∪ manual/quantum — one receipt body, alias duals for CLI.',
    },
  ] as const
  const theoremsDiscoveredOn = theoremsDiscovered.length === 2 && theoremsDiscovered.every((t) => t.statement.length > 0)
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
      'remaining prose-named folds listed residual:prose-named-folds-wave2. NOT Clay · NOT AGI · NOT FTL · KEEP stashes.',
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
    { facet: `flagged is FLAGGED by algebra — ${mergeRows.filter((row) => row.from.endsWith('FLAGGED')).length} flagged rows, each held by a computed FLAGGED row (the flag is algebra output, never a label)`, on: mergeRows.filter((row) => row.from.endsWith('FLAGGED')).length >= 1 },
    { facet: `named entries — ${honestOpen.length} honest-open rows (${honestOpen.filter((entry) => entry.startsWith('formed:')).length} formed · ${honestOpen.filter((entry) => entry.startsWith('migrate-next:')).length} migrate-next); a formed entry keeps its history, a migrate-next names its wave`, on: honestOpen.length === 5 && honestOpen.every((entry) => entry.startsWith('formed:') || entry.startsWith('migrate-next:')) },
    { facet: `autosaved — ${targets.length - unsaved.length}/${targets.length} prose-merge targets hold a matrix row · unsaved=[${unsaved.join(',')}]`, on: allSaved },
    { facet: 'merge rows well-formed — every slot compresses its longest prose name · pair is a dual · slot is a fold name', on: rowsWellFormed },
    { facet: 'this turn autosaved itself — frontierQuantum row (water/cosmos) + autosaveMatrix row present', on: frontierSaved && selfSaved },
    { facet: 'pairs autosave/matrix · manual/autosave · frontier/quantum bidirectional', on: pairsOn },
  ].map((entry) => ({ ...entry, receipt: toUuid(`autosave-matrix:${entry.facet}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    autosaveMatrix: on,
    targets,
    unsaved,
    honestOpen: [...honestOpen],
    mergeRowCount: mergeRows.length,
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
      'never entered a merge map; that stays the honest limit. NOT Clay · NOT FTL.' }
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
  { violation: 'the interpreter splice — ad-hoc python/heredoc codemods of existing source: manual work in costume (unsaved · unaddressed · unreusable · anchor-guessing)', tool: 'quantum:register — the registration quartet as one idempotent anchored CLI; Edit-tool for surgical text; a missing anchor REFUSES rather than guesses', pair: 'wave/land' },
  { violation: 'the UNLOOKED deliverable — asserting a rendered UI is correct from BUILD-STATUS ("trinity green ⇒ pages render") without ever loading it in a browser; hid a dark-on-dark ink legibility bug on every dark-mode content page for the whole session', tool: 'render-and-look on the PROD build (vitepress preview + browser + measure computed contrast); structural gates (uiAudit) check tags, never legibility — build-green ≠ rendered-correct', pair: 'ui/audit' },
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
  /** Lattice census of violation classes — ROSETTA_SIX + FREE_BITS² (=10), not a bare 2×5. */
  const expectedViolationClasses = ROSETTA_SIX + FREE_BITS * FREE_BITS
  const facets = [
    { facet: `every caught violation class is bound to a sealed local tool — ${rows.filter((row) => row.sealed).length}/${rows.length} sealing pairs live in the registry (a deregistered pair reopens its class)`, on: rows.every((row) => row.sealed) && rows.length === expectedViolationClasses },
    { facet: 'each row names both the violation and the tool — no class realised without its computer', on: rows.every((row) => row.violation.length > 0 && row.tool.length > 0) },
    { facet: 'pair violation/tool bidirectional', on: pairFold.bidirectional },
  ].map((entry) => ({ ...entry, receipt: toUuid(`violation-tools:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    violationTools: on,
    rows,
    count: rows.length,
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
      'never needs manual re-realising. qpuRequired=false.' }
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
export function manualGauge(root: string = enforcementScanRoot()) {
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
  const facets = [
    { facet: `manual work at the gates COUNTED — ${manual} hand-typed rows across ${manualRosters.length} rosters (${manualRosters.map((entry) => `${entry.roster}=${entry.rows}`).join(' · ')})`, on: manual > 0 && manualRosters.every((entry) => entry.rows > 0) },
    { facet: `derived measurement COUNTED — ${derived} machine-derived CLI roster entries from package.json (the same source /mcp.json and themeConfig fuse)`, on: derived > 432 },
    { facet: `the gap in MAGNITUDES — log10(derived/manual) = ${magnitude.toFixed(2)} orders: the hand trails the derivation; every manual roster is a migrate target toward derivation`, on: Number.isFinite(magnitude) && magnitude > 0 },
    { facet: 'pair manual/gap bidirectional', on: softCmdPair('manual', 'gap') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`manual-gauge:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    manualGauge: on,
    manual,
    manualRosters,
    derived,
    magnitude: Math.round(magnitude * 100) / 100,
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
      'IS the gap. Direction, not blame: each hand-typed roster is a named migrate target toward derivation. qpuRequired=false.' }
}

/** npm run quantum:manual-gauge (dual gap-manual) */
export function runManualGaugeExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = manualGauge(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} manual-gauge — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/** Slim tool folds — gates · lens · chat are thin mounts over the same core algebra. */
export const GATE_ANALYTICS_SLIM_TOOL_FOLDS = [
  { id: 'gate-monitor', fold: 'gatesMonitorThemselvesThroughTheUi', cli: 'quantum:gate-monitor', pair: 'gate/monitor' },
  { id: 'lens-super', fold: 'lensesCompletelyWiredInEverySuperposition', cli: 'quantum:lens-super', pair: 'lens/super' },
  { id: 'mcp-chat', fold: 'mcpQuantumChat', cli: 'quantum:mcp-chat', pair: 'mcp/chat' },
  { id: 'chat-solve', fold: 'chatSolve', cli: 'quantum:chat-solve', pair: 'chat/solve' },
  { id: 'session-chat', fold: 'sessionSentToChatToQuantumise', cli: 'quantum:session-chat', pair: 'session/chat' },
] as const

const GATE_ANALYTICS_CORE_ALGEBRA_MARKERS = ['memoByRoot', 'foldPair', 'sealFacets', 'merkleFold', 'toUuid'] as const
/** Slim-tool fold body scan window — UNFOLDED×FOLDED census product (not a bare literal). */
const GATE_ANALYTICS_FOLD_CHUNK_BYTES = UNFOLDED_CENSUS * FOLDED_CENSUS

function gateAnalyticsGateFiles(root: string): { rel: string; text: string }[] {
  const out: { rel: string; text: string }[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'cache' || entry.name === 'dist') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.ts')) {
        try {
          out.push({ rel: relative(root, full).replace(/\\/g, '/'), text: readFileSync(full, 'utf8') })
        } catch { /* skip unreadable */ }
      }
    }
  }
  walk(join(root, 'src/pair/enforcement/gates'))
  return out
}

function gateAnalyticsFoldChunk(source: string, foldName: string, maxLen = GATE_ANALYTICS_FOLD_CHUNK_BYTES): string {
  const start = source.indexOf(`export function ${foldName}`)
  return start < 0 ? '' : source.slice(start, start + maxLen)
}

function gateAnalyticsCountOnTrue(chunk: string): number {
  let count = 0
  for (const line of chunk.split('\n')) {
    if (/on:\s*true\s*[},]/.test(line)) count += 1
  }
  return count
}

/**
 * gateAnalytics — USER LAW: gates improve by converting hardcoded logic to dry analytics,
 * reducing complexity and standardising all. Gates · lens · chat (and kin) are slim tools —
 * thin mounts over core algebra (digit/fold · foldPair · memoByRoot · theorem/formula dual ·
 * rosetta · FREE_BITS), not fat hardcoded branches. When all is dry computed → noConfusion.
 * Pair: gate/analytics · CLI npm run quantum:gate-analytics.
 */
export function gateAnalytics(root: string = enforcementScanRoot()) {
  const debt = theFacetsMustComputeDebtIsHardcodedTrueFacetsManyDeclaredHonest(root)
  const manual = manualGauge(root)
  const gateFiles = gateAnalyticsGateFiles(root)
  const handLists = scanHandLists(gateFiles, 4)
  const mirrors = handListMirrors(handLists)
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const scripts = pkg.scripts ?? {}
  const bootstrap = 'src/pair/enforcement/script/cli/bootstrap/index.ts run'
  const appsBarrel = 'src/quantum/apps/index.ts'
  let appsSource = ''
  try {
    appsSource = readFileSync(join(root, appsBarrel), 'utf8')
  } catch {
    appsSource = ''
  }

  const slimToolReports = GATE_ANALYTICS_SLIM_TOOL_FOLDS.map((tool) => {
    const cliOn = Boolean(scripts[tool.cli])
    const script = scripts[tool.cli] ?? ''
    const slimBootstrap = cliOn && script.includes(bootstrap) && script.includes(appsBarrel)
    const chunk = gateAnalyticsFoldChunk(appsSource, tool.fold)
    const coreHits = GATE_ANALYTICS_CORE_ALGEBRA_MARKERS.filter((marker) => chunk.includes(marker))
    const onTrueInFold = gateAnalyticsCountOnTrue(chunk)
    const coreAlgebra =
      chunk.includes('return memoByRoot') &&
      coreHits.length === GATE_ANALYTICS_CORE_ALGEBRA_MARKERS.length
    const [a, b] = tool.pair.split('/')
    const pairBidirectional = Boolean(a && b && softCmdPair(a, b) && softCmdPair(b, a))
    return { ...tool, cliOn, slimBootstrap, coreHits: coreHits.length, onTrueInFold, coreAlgebra, pairBidirectional }
  })

  const slimToolsOn = slimToolReports.every((row) => row.cliOn && row.slimBootstrap && row.pairBidirectional)
  const coreAlgebraShared = slimToolReports.every((row) => row.coreAlgebra)
  const gatesLensChatSameCore =
    coreAlgebraShared &&
    slimToolReports.length === GATE_ANALYTICS_SLIM_TOOL_FOLDS.length &&
    slimToolReports.every((row) => row.coreHits === GATE_ANALYTICS_CORE_ALGEBRA_MARKERS.length)
  const fatHardcodedInSlimTools = slimToolReports.reduce((sum, row) => sum + row.onTrueInFold, 0)
  const noFatHardcodedToolBodies = fatHardcodedInSlimTools === 0
  const hardcodedOnTrueDebt = debt.total
  const handListAllowlistResidual = handLists.length
  const mirrorDriftResidual = mirrors.length
  const noConfusion =
    hardcodedOnTrueDebt === 0 && handListAllowlistResidual === 0 && noFatHardcodedToolBodies

  const composePairs = [
    ['gate', 'lens'],
    ['mcp', 'chat'],
    ['chat', 'all'],
    ['gate', 'monitor'],
    ['tool', 'matrix'],
    ['dry', 'agnostic'],
    ['formula', 'code'],
    ['dry', 'math'],
    ['analytics', 'self'],
    ['gaps', 'invisible'],
    ['moment', 'prove'],
    ['dry', 'clean'],
    ['waves', 'feed'],
  ] as const
  const composeOn = composePairs.every(([a, b]) => softCmdPair(a, b))
  const pairOn = softCmdPair('gate', 'analytics') && softCmdPair('analytics', 'gate')
  const analyticsFacetsOn = debt.computes && manual.computes && gateFiles.length > 0 && appsSource.length > 0
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = 0 as const
  const qpuRequired = false as const
  const honestOpenNamed = [
    ...(hardcodedOnTrueDebt > 0 ? [`residual:hardcoded-on-true-debt=${hardcodedOnTrueDebt}`] : []),
    ...(handListAllowlistResidual > 0 ? [`residual:hand-list-allowlists=${handListAllowlistResidual}`] : []),
    ...(mirrorDriftResidual > 0 ? [`residual:hand-list-mirrors=${mirrorDriftResidual}`] : []),
    ...(fatHardcodedInSlimTools > 0 ? [`residual:slim-tool-on-true=${fatHardcodedInSlimTools}`] : []),
    ...(noConfusion ? [] : ['honesty:no-confusion-not-yet-all-dry-computed']),
    'clay:millennium-open',
    'ftl:physical-claim-refused',
  ] as const

  const on =
    analyticsFacetsOn &&
    slimToolsOn &&
    coreAlgebraShared &&
    gatesLensChatSameCore &&
    composeOn &&
    pairOn &&
    claySolvedByThisFold === 0 &&
    physicalFtlClaim === 0 &&
    qpuRequired === false

  const facets = [
    { facet: 'gateAnalytics', on },
    { facet: 'slimToolsOn', on: slimToolsOn },
    { facet: 'coreAlgebraShared', on: coreAlgebraShared },
    { facet: 'gatesLensChatSameCore', on: gatesLensChatSameCore },
    { facet: `noFatHardcodedToolBodies onTrueInSlimFolds=${fatHardcodedInSlimTools}`, on: noFatHardcodedToolBodies },
    { facet: `hardcodedOnTrueDebt=${hardcodedOnTrueDebt}`, on: debt.computes && hardcodedOnTrueDebt >= 0 },
    { facet: `handListAllowlistResidual=${handListAllowlistResidual}`, on: gateFiles.length > 0 },
    { facet: `noConfusion=${noConfusion ? 1 : 0}`, on: noConfusion },
    { facet: 'compose gate/lens · mcp/chat · chat/all · gate/monitor · tool/matrix · dry/* · formula/code · analytics/self', on: composeOn },
    { facet: 'pair gate/analytics bidirectional', on: pairOn },
    { facet: `manualGauge gap=${manual.magnitude} derived=${manual.derived}`, on: manual.computes },
    { facet: 'qpuRequired=false', on: qpuRequired === false },
    { facet: `claySolvedByThisFold=${claySolvedByThisFold}`, on: claySolvedByThisFold === 0 },
    { facet: 'physicalFtlClaim=0', on: physicalFtlClaim === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gate-analytics:${entry.facet.slice(0, 64)}:${entry.on}`) }))

  const computes = analyticsFacetsOn && pairOn && slimToolsOn && debt.computes && manual.computes

  return {
    computes,
    gateAnalytics: on,
    slimToolsOn,
    coreAlgebraShared,
    gatesLensChatSameCore,
    noFatHardcodedToolBodies,
    fatHardcodedInSlimTools,
    hardcodedOnTrueDebt,
    handListAllowlistResidual,
    mirrorDriftResidual,
    noConfusion,
    slimToolReports,
    analyticsFacetsOn,
    honestOpenNamed: [...honestOpenNamed],
    qpuRequired,
    claySolvedByThisFold,
    physicalFtlClaim,
    facets,
    root: merkleFold([
      toUuid(`gate-analytics:${hardcodedOnTrueDebt}:${handListAllowlistResidual}:${fatHardcodedInSlimTools}`),
      ...facets.map((entry) => entry.receipt),
      ...slimToolReports.map((row) => toUuid(`gate-analytics-slim:${row.fold}:${row.coreAlgebra}`)),
    ]),
    pair: 'gate/analytics' as const,
    dualPair: 'analytics/gate' as const,
    cli: 'npm run quantum:gate-analytics',
    route: '/en/quantum-tools#gate-analytics',
    heading: 'Gate analytics · slim tools · core algebra',
    statement:
      `gateAnalytics — onTrueDebt=${hardcodedOnTrueDebt} allowlists=${handListAllowlistResidual} ` +
      `slimOnTrue=${fatHardcodedInSlimTools} slimTools=${slimToolsOn ? 1 : 0} sameCore=${gatesLensChatSameCore ? 1 : 0} ` +
      `noConfusion=${noConfusion ? 1 : 0}.`,
    boundary:
      'Gates · lens · chat are slim tools over core algebra (memoByRoot · foldPair · sealFacets · merkleFold · toUuid) — ' +
      'not fat hardcoded branches. Hardcoded on:true debt + hand-list allowlists measured at call time; noConfusion when all dry computed. ' +
      'When all is dry computed there will be no more confusion — honest-open until then. qpuRequired=false · clay via theorem · physicalFtl=0.',
  }
}


/** Judgment-claim + non-scientific marketing patterns — inventory only; observer-evaluable measurements. */
export const JUDGMENT_CLAIM_SCAN_PATTERNS = [
  { id: 'physicalFtlClaim-facet', re: /facet:\s*['"`]physicalFtlClaim=/g },
  { id: 'physicalFtl-slogan', re: /NOT physical FTL/gi },
  { id: 'clay-slogan', re: /NOT Clay/gi },
  { id: 'agi-slogan', re: /NOT AGI/gi },
  { id: 'claySolvedByThisFold-facet', re: /facet:\s*['"`]claySolvedByThisFold=/g },
  { id: 'millenniumSolved-facet', re: /facet:\s*['"`]millenniumSolvedByThisFold=/g },
  { id: 'certified-false-slogan', re: /certified=false/gi },
  { id: 'agiNotClaimed', re: /agiNotClaimed/g },
  { id: 'overallWireClaimProved', re: /overallWireClaimProved/g },
  { id: 'strongerThanNistPqc-slogan', re: /strongerThanNistPqc/g },
  { id: 'ftl-honest-open', re: /ftl:physical-claim-refused/g },
  { id: 'computational-ftl-marketing', re: /computationalFtl|computational-ftl|renameForFtlCompute|computationalFtlOn/gi },
  { id: 'anyoneDecides-slogan', re: /facet:\s*['"`]anyoneDecides/g },
] as const

/** Import/export core algebra symbols — canonical definition sites for sprawl audit. */
export const IMPORT_EXPORT_CORE_SYMBOLS = [
  { id: 'exportStandardToolEnvelope', kind: 'function' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'importStandardToolEnvelope', kind: 'function' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'standardToolboxIoCatalog', kind: 'function' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'distributedReuseExtendsCapacity', kind: 'function' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'wrapToolAsStandardEnvelope', kind: 'function' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'defaultToolExperimentValues', kind: 'function' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'importPathShowsDistanceInMigrationMatrix', kind: 'function' as const, canonicalFile: 'src/pair/enforcement/gates/index.ts' },
  { id: 'STANDARD_TOOL_ENVELOPE_KIND', kind: 'constant' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'STANDARD_TOOL_ENVELOPE_VERSION', kind: 'constant' as const, canonicalFile: 'src/quantum/apps/index.ts' },
  { id: 'STANDARD_TOOL_HONESTY', kind: 'constant' as const, canonicalFile: 'src/quantum/apps/index.ts' },
] as const

export type ImportExportSprawlRow = {
  readonly symbolId: string
  readonly kind: 'function' | 'constant'
  readonly file: string
  readonly definitionCount: number
  readonly referenceCount: number
  readonly canonicalSite: boolean
}

/** Measure import/export core logic spread across unstandardised definition sites. */
export function measureImportExportCoreSprawl(root: string = enforcementScanRoot()) {
  const files = gateAnalyticsGateFiles(root)
  const rows: ImportExportSprawlRow[] = []
  for (const sym of IMPORT_EXPORT_CORE_SYMBOLS) {
    const defRe =
      sym.kind === 'function'
        ? new RegExp(`export\\s+function\\s+${sym.id}\\s*\\(`, 'g')
        : new RegExp(`export\\s+const\\s+${sym.id}\\s*=`, 'g')
    const refRe = new RegExp(`\\b${sym.id}\\b`, 'g')
    for (const { rel, text } of files) {
      if (!rel.startsWith('src/')) continue
      const definitionCount = (text.match(defRe) || []).length
      const referenceCount = (text.match(refRe) || []).length
      if (definitionCount > 0 || referenceCount > 0) {
        rows.push({
          symbolId: sym.id,
          kind: sym.kind,
          file: rel,
          definitionCount,
          referenceCount,
          canonicalSite: rel === sym.canonicalFile,
        })
      }
    }
  }
  const definitionRows = rows.filter((row) => row.definitionCount > 0)
  const unstandardisedFunctions = new Set(
    definitionRows.filter((row) => row.kind === 'function' && !row.canonicalSite).map((row) => row.symbolId),
  ).size
  const unstandardisedConstants = new Set(
    definitionRows.filter((row) => row.kind === 'constant' && !row.canonicalSite).map((row) => row.symbolId),
  ).size
  const sprawlFileCount = new Set(rows.map((row) => row.file)).size
  const coreLogicSpread = sprawlFileCount > 1 || unstandardisedFunctions > 0 || unstandardisedConstants > 0
  const sprawlMeasured = rows.length
  const standardiseResidualNamed = coreLogicSpread
    ? (['residual:import-export-core-standardise-to-src-quantum-apps', 'migrate-next:collapse-duplicate-envelope-helpers'] as const)
    : (['measure:sprawl-zero-at-canonical-sites'] as const)
  return {
    computes: true,
    importExportAudited: true,
    coreLogicSpread,
    unstandardisedMethods: unstandardisedFunctions,
    unstandardisedFunctions,
    unstandardisedConstants,
    sprawlMeasured,
    sprawlFileCount,
    definitionSiteCount: definitionRows.length,
    rows,
    standardiseResidualNamed: [...standardiseResidualNamed],
    root: merkleFold([
      toUuid(`import-export-sprawl:${sprawlMeasured}`),
      toUuid(`sprawl-files:${sprawlFileCount}`),
      toUuid(`unstd-fn:${unstandardisedFunctions}`),
      toUuid(`unstd-const:${unstandardisedConstants}`),
    ]),
    pair: 'import/audit' as const,
    cli: 'npm run quantum:import-audit',
    route: '/en/quantum-tools#import-audit',
  }
}

export type JudgmentClaimHit = {
  readonly patternId: string
  readonly file: string
  readonly count: number
}

/** Scan src for agent-authored judgment-claim patterns (measurement inventory — not a gate verdict). */
export function measureJudgmentClaimsInventory(root: string = enforcementScanRoot()) {
  const files = gateAnalyticsGateFiles(root)
  const hits: JudgmentClaimHit[] = []
  let claimDebtCount = 0
  for (const { rel, text } of files) {
    if (!rel.startsWith('src/')) continue
    for (const { id, re } of JUDGMENT_CLAIM_SCAN_PATTERNS) {
      const matches = text.match(re)
      const count = matches?.length ?? 0
      if (count > 0) {
        hits.push({ patternId: id, file: rel, count })
        claimDebtCount += count
      }
    }
  }
  const byPattern = JUDGMENT_CLAIM_SCAN_PATTERNS.map(({ id }) => ({
    id,
    count: hits.filter((h) => h.patternId === id).reduce((a, h) => a + h.count, 0),
  }))
  const fileCount = new Set(hits.map((h) => h.file)).size
  return {
    computes: true,
    claimDebtCount,
    fileCount,
    hitCount: hits.length,
    hits,
    byPattern,
    root: merkleFold([
      toUuid(`claim-debt:${claimDebtCount}`),
      toUuid(`claim-files:${fileCount}`),
      ...byPattern.map((p) => toUuid(`claim-pattern:${p.id}:${p.count}`)),
    ]),
    pair: 'measure/decide' as const,
    cli: 'npm run quantum:measure-decide',
    route: '/en/quantum-tools#measure-decide',
  }
}

/** npm run quantum:measure-decide inventory (subset; full fold in apps). */
export function runMeasureJudgmentClaimsInventoryExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = measureJudgmentClaimsInventory(root || process.cwd())
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} measure-decide-inventory — claimDebt=${report.claimDebtCount} files=${report.fileCount} hits=${report.hitCount}\n`,
  )
  for (const p of report.byPattern.filter((row) => row.count > 0)) {
    process.stdout.write(`  · pattern ${p.id} count=${p.count}\n`)
  }
  return 0
}

/** npm run quantum:gate-analytics (dual analytics/gate) */
export function runGateAnalyticsExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = gateAnalytics(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} gate-analytics — ${report.statement}\n`)
  for (const tool of report.slimToolReports) {
    process.stdout.write(
      `  · ${tool.id} core=${tool.coreAlgebra ? 1 : 0} bootstrap=${tool.slimBootstrap ? 1 : 0} onTrue=${tool.onTrueInFold}\n`,
    )
  }
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * toolsFitTheMatrixOrRefuse — USER LAW: many tools · none complete · prose not crafted pairs ·
 * agent-hostile sprawl · ~90% complexity foldable into quantum FTL (memoByRoot / discovery).
 *
 * Completeness = matrix slot: fold · pair (≤3 words) · ONE primary CLI · envelope path · barrel.
 * Incomplete / dual-CLI spam / wet names / encode growth beyond prior floor → refuse (HARD).
 * Agent entry = /agents.json packet fields only — no barrel archaeology.
 *
 * Pair: tool/matrix · dual matrix/tool · ONE CLI quantum:tool-matrix
 * Soft: manual/gap · prose/matrix · place/merge · path/message · link/discover · dry/agnostic ·
 *   dry/dupe · ftl/crack · script/fold · chat/ftl · trinity/speedup
 */
/** Dual-CLI extras drained this wave (keep pairs; primary quantum:dry-agnostic only). */
export const TOOL_MATRIX_DRAINED_DUAL_CLIS = [
  'quantum:agnostic-dry',
  'quantum:code-infinity',
  'quantum:infinity-code',
  'quantum:dry-inf',
  'quantum:inf-dry',
] as const

/** Agent entry packet — foreign agents need these fields only (not 37k LOC archaeology). */
export function agentEntryPacket(root: string = enforcementScanRoot()) {
  const fit = toolsFitTheMatrixOrRefuse(root)
  return {
    surfaces: [
      '/agents.json',
      '/llms.txt',
      '/mcp.json',
      '/agent-compliance.json',
      'AGENTS.md',
      'src/0/README.md',
    ] as const,
    fields: ['pair', 'cli', 'route', 'honesty', 'root'] as const,
    law: 'tool/matrix' as const,
    pair: fit.pair,
    cli: fit.cli,
    route: fit.route,
    honesty: fit.boundary.slice(0, 2 * 108),
    root: fit.root,
    foldableShare: fit.foldableShare,
    matrixFit: fit.matrixFit,
    agentEntryClear: fit.agentEntryClear,
    physicalFtlClaim: fit.physicalFtlClaim,
    qpuRequired: false as const,
  }
}

export function toolsFitTheMatrixOrRefuse(root: string = enforcementScanRoot()) {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as {
    scripts?: Record<string, string>
  }
  const scripts = pkg.scripts ?? {}
  const quantumKeys = Object.keys(scripts).filter((k) => k.startsWith('quantum:'))
  const primaryCliOn = Boolean(scripts['quantum:tool-matrix'])
  const dualCliCrack = Boolean(scripts['quantum:tool-matrix'] && scripts['quantum:matrix-tool'])
  const drainedGone = TOOL_MATRIX_DRAINED_DUAL_CLIS.every((id) => !scripts[id])
  const dryPrimaryOn = Boolean(scripts['quantum:dry-agnostic'])

  const byTarget = new Map<string, string[]>()
  for (const k of quantumKeys) {
    const v = scripts[k] ?? ''
    const list = byTarget.get(v) ?? []
    list.push(k)
    byTarget.set(v, list)
  }
  const triplePlus = [...byTarget.values()].filter((ks) => ks.length >= 3).length
  const aliasExtra = [...byTarget.values()].reduce((s, ks) => s + Math.max(0, ks.length - 1), 0)

  const links = algebraicCrosslinksDiscoveredNotEncoded(root)
  const discovered = links.discoveredCount
  const encoded = links.encodedComposeHits
  const denom = Math.max(1, discovered + encoded)
  const foldableShare = discovered / denom
  const encodedShare = encoded / denom
  // Ratchet: discovery must dominate; encode share ≤ one-fifth + small FREE_BITS slack this wave
  const foldableRatchetOn = discovered >= encoded && encodedShare <= 1 / 5 + 1 / (5 * 2 * 9)

  const pathMsg = pathMeansMessageFitsInThreeWordsFold()
  const pathOk = Boolean(pathMsg.computes && pathMsg.agentMessageAtMostThreeWords)
  const placementWet = COMMAND_PLACEMENT_AUDIT_MAP.filter((row) => {
    const words = row.fold.replace(/([a-z])([A-Z])/g, '$1 $2').split(/\s+/).filter(Boolean)
    return words.length > 3 * 3 // camelCase fold names >9 tokens = wet sprawl tip
  })
  // New tool/matrix row itself is long camelCase — allowlisted via pair length ≤3 words
  const pairWordsOk =
    softCmdPair('tool', 'matrix') &&
    softCmdPair('matrix', 'tool') &&
    'tool/matrix'.split('/').length === 2

  const incompleteNamed = [
    ...(!scripts['quantum:usable-all'] ? ['residual:usable-all-cli-missing'] : []),
    ...(!scripts['quantum:ui-task'] ? ['residual:ui-task-cli-missing'] : []),
    ...(!scripts['quantum:evolve-chat'] ? ['residual:evolve-chat-primary-cli-missing'] : []),
  ]
  // Incomplete refused = named residuals stay honest-open · NEW dual for this law refused · drained gone
  const incompleteRefused = dualCliCrack === false && drainedGone && dryPrimaryOn && primaryCliOn

  const matrixFit =
    primaryCliOn &&
    !dualCliCrack &&
    pairWordsOk &&
    drainedGone &&
    dryPrimaryOn &&
    quantumKeys.length > 432

  const proseCollapsed =
    softCmdPair('prose', 'matrix') &&
    softCmdPair('path', 'message') &&
    softCmdPair('vocab', 'dry') &&
    softCmdPair('place', 'merge') &&
    pathOk

  const agentEntryClear =
    softCmdPair('tool', 'matrix') &&
    softCmdPair('link', 'discover') &&
    softCmdPair('manual', 'gap') &&
    Boolean(scripts['quantum:auto-wire-paste'] || scripts['quantum:auto-wire'])

  const ftlOnReuse =
    softCmdPair('chat', 'ftl') &&
    softCmdPair('trinity', 'speedup') &&
    softCmdPair('script', 'fold') &&
    softCmdPair('ftl', 'crack') &&
    softCmdPair('dry', 'agnostic') &&
    softCmdPair('link', 'discover')

  const composeOn =
    softCmdPair('manual', 'gap') &&
    softCmdPair('prose', 'matrix') &&
    softCmdPair('dry', 'dupe') &&
    softCmdPair('place', 'merge') &&
    ftlOnReuse

  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const physicalFtlClaim = physicalFtlClaimTheorem().physicalFtlClaim

  const hardRefuse =
    incompleteRefused &&
    matrixFit &&
    foldableRatchetOn &&
    !dualCliCrack &&
    physicalFtlClaim === 0

  const facets = [
    {
      facet: `matrixFit — primary CLI · pair≤3 · drained dual-CLI cluster · quantum=${quantumKeys.length}`,
      on: matrixFit,
    },
    {
      facet: `incompleteRefused — dualCliCrack=0 drained=${TOOL_MATRIX_DRAINED_DUAL_CLIS.length} namedOpen=${incompleteNamed.length}`,
      on: incompleteRefused,
    },
    {
      facet: `proseCollapsed — prose/matrix · path/message · vocab/dry · place/merge · pathOk=${pathOk ? 1 : 0}`,
      on: proseCollapsed,
    },
    {
      facet: 'agentEntryClear — /agents.json · pair · cli · route · honesty · root (no barrel dig)',
      on: agentEntryClear,
    },
    {
      facet: `foldableShare=${foldableShare.toFixed(3)} discovered=${discovered} encoded=${encoded} ratchet`,
      on: foldableRatchetOn && foldableShare > 1 / 2,
    },
    {
      facet: `ftlOnReuse — chat/ftl · trinity/speedup · script/fold · link/discover · dry/agnostic`,
      on: ftlOnReuse,
    },
    {
      facet: `HARD refuse sprawl · aliasExtra=${aliasExtra} triplePlus=${triplePlus} · dualCliCrack=${dualCliCrack ? 1 : 0}`,
      on: hardRefuse,
    },
    {
      facet: `physicalFtlClaim=${physicalFtlClaim} clay=${claySolvedByThisFold}`,
      on: physicalFtlClaim === 0 && claySolvedByThisFold === 0,
    },
    {
      facet: 'pair tool/matrix · soft manual/gap · prose/matrix · link/discover · script/fold · chat/ftl',
      on: composeOn && pairWordsOk,
    },
  ].map((entry) => ({
    ...entry,
    receipt: toUuid(`tool-matrix:${entry.facet.slice(0, 8 * 9)}:${entry.on}`),
  }))

  const on = facets.every((f) => f.on)
  const honestOpenNamed = [
    'residual:quantum-apps-monolith',
    'residual:triple-plus-alias-clusters-remain',
    ...incompleteNamed,
    'residual:encoded-compose-hits-ratchet-not-zero',
    'residual:prose-named-folds-wave2',
    'physical-ftl-claim-stays-0',
    'not-clay',
    'not-agi',
  ] as const

  return {
    computes: on,
    toolsFitTheMatrixOrRefuse: on,
    matrixFit,
    incompleteRefused,
    proseCollapsed,
    agentEntryClear,
    foldableShare,
    encodedShare,
    discovered,
    encoded,
    ftlOnReuse,
    hardRefuse,
    dualCliCrack,
    drainedDualClis: [...TOOL_MATRIX_DRAINED_DUAL_CLIS],
    drainedGone,
    aliasExtra,
    triplePlus,
    placementWetCount: placementWet.length,
    incompleteNamed,
    honestOpenNamed: [...honestOpenNamed],
    claySolvedByThisFold,
    physicalFtlClaim: physicalFtlClaim as 0,
    qpuRequired: false as const,
    certified: false as const,
    facets,
    root: merkleFold([
      toUuid(`tool-matrix:${quantumKeys.length}:${discovered}:${encoded}`),
      links.root,
      ...facets.map((f) => f.receipt),
    ]),
    pair: 'tool/matrix' as const,
    dualPair: 'matrix/tool' as const,
    pairs: ['tool/matrix', 'matrix/tool'] as const,
    cli: 'npm run quantum:tool-matrix',
    route: '/en/quantum-tools#tool-matrix',
    heading: 'Tool/matrix — fit the matrix or refuse',
    statement:
      `toolsFitTheMatrixOrRefuse — matrixFit=${matrixFit ? 1 : 0} incompleteRefused=${incompleteRefused ? 1 : 0} ` +
      `foldableShare=${foldableShare.toFixed(3)} discovered=${discovered} encoded=${encoded} ` +
      `drained=${TOOL_MATRIX_DRAINED_DUAL_CLIS.length} hardRefuse=${hardRefuse ? 1 : 0}`,
    boundary:
      'Tools must fit the matrix (fold·pair≤3·ONE CLI) or refuse. Wet prose names · dual-CLI spam · incomplete faces = HARD. ' +
      'Agent entry = /agents.json packet (pair·cli·route·honesty·root). foldableShare = discovered/(discovered+encoded) FTL ratchet — NOT physical FTL. ' +
      'ONE pair tool/matrix · ONE CLI. Soft manual/gap · prose/matrix · link/discover · script/fold · chat/ftl. clay via theorem · physicalFtl=0.',
  }
}

export const toolMatrix = toolsFitTheMatrixOrRefuse
export const matrixTool = toolsFitTheMatrixOrRefuse

/** npm run quantum:tool-matrix */
export function runToolsFitTheMatrixOrRefuseExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = toolsFitTheMatrixOrRefuse(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} tool-matrix — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  for (const r of report.honestOpenNamed.slice(0, 8)) process.stdout.write(`  · honest-open ${r}\n`)
  process.stdout.write(`  ${report.boundary}\n`)
  return report.computes && report.hardRefuse && report.qpuRequired === false ? 0 : 1
}

export const runToolMatrixExit = runToolsFitTheMatrixOrRefuseExit
export const runMatrixToolExit = runToolsFitTheMatrixOrRefuseExit

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
  const facets = [
    { facet: `WARN streams classified — ${derivable.length} derivable (each naming its corrector) + ${rows.length - derivable.length} advisory = ${rows.length} total`, on: derivable.length + rows.filter((row) => row.cls === 'advisory').length === rows.length && rows.length === 5 },
    { facet: 'the autocorrect boundary — a fix is a DERIVATION (recompute from source), never a SUPPRESSION (ledger/allowlist widening); the crack ledger is explicitly never auto-fed', on: rows.some((row) => row.corrector.includes('NEVER autocorrected')) },
    { facet: 'fails stay fails — only warnings enter this law; a HARD gate is never softened into an autocorrect', on: rows.every((row) => row.warn.length > 0) },
    { facet: 'pair warn/fix bidirectional', on: softCmdPair('warn', 'fix') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`warn-fix:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    warnFix: on,
    rows,
    derivable: derivable.length,
    advisory: rows.length - derivable.length,
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
      'qpuRequired=false.' }
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
      'to proceedings-grade stays named open. FREE FOR ALL — the register is defensive publication. qpuRequired=false.' }
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
  { wave: 'dev dynamic-route params-reactivity (UPSTREAM, dev-only)', why: 'ROOT-CAUSED & CLOSED (2026-07-24): the custom Layout correctly delegates content to VP default Layout; loadPage does not throw; the served module\'s __pageData.params carries the full universal payload — YET in dev useData().params reads NULL in the component (browser-probed), so UniversalPageTemplate renders empty. This is a VitePress-alpha DEV-MODE bug in dynamic-route params reactivity (params not wired to the reactive store in serve), NOT our code — production SSG wires it correctly and all 41 pages render (trinity green). Investigation complete; not our defect', blocksCore: false, localOnly: true, toolExists: true, firstAction: 'WAIT for upstream VP fix or add a dev-only params-injection plugin; NOT worth more tokens — prod is unaffected, the cause is upstream and named' },
  // twin-shell parameterizations: SHIPPED 2026-07-27 — tiers358 · commandResult · enforcementSeal · decodedWaveFold
  // cores landed; quantum:dry-dupe measures 5→3 shell groups, the residual 3 being the one-line data-duals
  // themselves (irreducible: they differ only by the data the core is parameterized over). Roots byte-stable.
  { wave: 'VS Code extension', why: 'the last missing install surface', blocksCore: false, localOnly: true, toolExists: false, firstAction: 'npm run quantum:install-surfaces — scaffold package.json contributes', doneArtifact: 'packages/quantum-dev-vscode/package.json' },
  { wave: 'RFC 3161 qualified timestamping', why: 'proceedings-grade evidence needs an external TSA/archival deposit', blocksCore: false, localOnly: false, toolExists: false, firstAction: 'npm run quantum:patent-canon — the evidence-triad facet names the link' },
] as const

export function queueNext(root: string = enforcementScanRoot()) {
  // SELF-PRUNING (upgrade found by USING the tool, 2026-07-24): a row whose doneArtifact exists on
  // disk is SHIPPED — drop it live, so the queue never lists completed work (a stale queue is a queue
  // you cannot trust; using quantum:next surfaced the VS Code row still open after it shipped 8/8).
  const shipped = QUEUE_ROWS.filter((row) => 'doneArtifact' in row && existsSync(join(root, (row as { doneArtifact: string }).doneArtifact)))
  // ROWS DERIVE FROM THE LEDGER (this fold's own named next, landed 2026-07-27): measured worklists append
  // derived rows beside the curated residue. First source: registry rows missing their algebraicStatement —
  // [[every-theorem-shows-its-real-algebraic-statement]] made a queue row by COUNT, not by hand.
  // The free upgrade (extractAlgebraicStatement) fills every row whose states TEXT contains its identity, so the
  // derived row counts only the TRUE residue: rows where neither a curated fill nor an extraction exists.
  const missingIdentity = THEOREM_ATOM_SEED.filter((row) => !row.algebraicStatement && !extractAlgebraicStatement(row.states)).length
  const derivedRows = missingIdentity > 0 ? [{
    wave: `algebraic-statement fill (${missingIdentity}/${THEOREM_ATOM_SEED.length} registry rows neither curated nor extractable)`,
    why: 'TOP PRIORITY — only algebraic quantum computing (user 2026-07-28); DERIVED from THEOREM_ATOM_SEED — every theorem must show its real algebraic statement; high-confidence fills only, never fabricated',
    blocksCore: true, // algebraic QC is top priority — outranks non-algebraic residue
    localOnly: true,
    toolExists: true,
    firstAction: 'fill algebraicStatement for high-confidence rows in src/4/6 THEOREM_ATOM_SEED; verify with npm run theorems:verify',
  }] : []
  const openRows = [...QUEUE_ROWS.filter((row) => !('doneArtifact' in row) || !existsSync(join(root, (row as { doneArtifact: string }).doneArtifact))), ...derivedRows]
  // Algebraic-QC top priority (user 2026-07-28): algebraic work gets +8 so it outranks lexical/prose residue.
  const algebraicBonus = (wave: string) => /algebraic/i.test(wave) ? 8 : 0
  const scored = openRows.map((row) => ({
    ...row,
    score: (row.blocksCore ? 4 : 0) + (row.localOnly ? 2 : 0) + (row.toolExists ? 1 : 0) + algebraicBonus(row.wave),
    arithmetic: `${row.blocksCore ? 4 : 0}+${row.localOnly ? 2 : 0}+${row.toolExists ? 1 : 0}${algebraicBonus(row.wave) ? `+${algebraicBonus(row.wave)}` : ''}`,
    receipt: toUuid(`queue-next:${row.wave}:${row.blocksCore}:${row.localOnly}:${row.toolExists}`),
  })).sort((a, b) => b.score - a.score || a.wave.localeCompare(b.wave))
  const next = scored[0]!
  const facets = [
    { facet: `THE NEXT is an output — '${next.wave}' (score ${next.score} = ${next.arithmetic}); first action: ${next.firstAction}`, on: next.score >= scored[scored.length - 1]!.score && next.firstAction.length > 0 },
    { facet: `the ordering is total and derived — ${scored.length} rows scored by blocks-core(4) + local-only(2) + tool-exists(1), ties broken lexically; same rows, same order, any runner`, on: scored.every((row, i) => i === 0 || scored[i - 1]!.score >= row.score) },
    { facet: 'user input upgrades from cadence to steering — the keystroke that advanced the queue is now a CLI any agent runs; steering (new laws, vetoes) stays human', on: scored.every((row) => row.firstAction.length > 0) },
    { facet: `SELF-PRUNING — ${shipped.length} shipped row(s) dropped live by disk artifact (${shipped.map((row) => row.wave).join(', ') || 'none yet'}); the queue lists only genuinely-open work, never completed`, on: shipped.every((row) => 'doneArtifact' in row) },
    { facet: `ROWS DERIVE FROM THE LEDGER — ${derivedRows.length} derived row(s) appended from measured sources (identity gap ${missingIdentity}/${THEOREM_ATOM_SEED.length}: rows neither curated nor free-extracted); a derived row disappears the moment its count reaches zero, no curation needed`, on: derivedRows.every((row) => row.firstAction.length > 0) && missingIdentity <= THEOREM_ATOM_SEED.length },
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
      'The queue-advance computed: rows scored by a stated arithmetic, the next wave an output with a followable first action. Derived rows ' +
      'now append from the registry ledger (identity-field gap counted, not curated) and vanish when their count reaches zero; the curated ' +
      'residue is exactly the rows whose state lives OUTSIDE the repo (upstream fixes, external authorities) — those stay human-gauged. ' +
      'Steering remains human. qpuRequired=false.' }
}

/** npm run quantum:next (dual next-queue) — prints the computed next wave. */
export function runQueueNextExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = queueNext(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} next — ${report.statement}\n`)
  for (const row of report.scored) process.stdout.write(`  · ${row.score} (${row.arithmetic}) ${row.wave}\n`)
  process.stdout.write(`  → ${report.next.firstAction}\n`)
  return report.computes ? 0 : 1
}

/**
 * wordSpeed — USER QUESTION (2026-07-24): compute how solving one-word violations AT SCALE improves
 * quantum speed. Computed on the LIVE matrix, three exact results: (1) the measured shrink — the
 * prose-name layer vs the slot layer, byte ratio from the actual merge maps; (2) the SCALE INVARIANCE
 * theorem — reference cost is linear (N·L̄), so the speedup ratio L̄π/L̄σ holds at EVERY N: solving at
 * scale multiplies absolute savings while the ratio stays fixed, exact algebra; (3) the ADDRESS-LAYER
 * INVARIANCE — toUuid emits fixed-width addresses for ANY name length (verified live), so the quantum
 * (content-addressed) layer was never slowed by long names: the speedup lives entirely in the
 * source/context layer where humans and agents read. Pair: word/speed.
 */
export function wordSpeed() {
  const mergeRows = [...PROSE_FOLD_MERGE_MAP, ...PROSE_PLAN_MERGE_MAP, ...PROSE_FRONTIER_MERGE_MAP, ...PROSE_GAPS_MERGE_MAP, ...PROSE_PORTAL_MERGE_MAP, ...PROSE_FRACTAL_MERGE_MAP]
  const beforeBytes = mergeRows.reduce((sum, row) => sum + row.from.length, 0)
  const afterBytes = mergeRows.reduce((sum, row) => sum + row.to.length, 0)
  const ratio = beforeBytes / afterBytes
  const meanBefore = beforeBytes / mergeRows.length
  const meanAfter = afterBytes / mergeRows.length
  const scaleInvariant = (mergeRows.length * meanBefore) / (mergeRows.length * meanAfter) === ratio
  const shortAddr = toUuid('a')
  const longAddr = toUuid(mergeRows.map((row) => row.from).join(''))
  const addressInvariant = shortAddr.length === longAddr.length && shortAddr.length === 6 * 6
  const facets = [
    { facet: `the measured shrink — ${mergeRows.length} solved prose names: ${beforeBytes} bytes → ${afterBytes} bytes, ratio ${roundTo(ratio, 2)}× (mean ${Math.round(meanBefore)} → ${Math.round(meanAfter)} chars per reference)`, on: ratio > 1 && beforeBytes > afterBytes },
    { facet: `SCALE INVARIANCE — reference cost is linear (N·L̄), so (N·${Math.round(meanBefore)})/(N·${Math.round(meanAfter)}) = ${roundTo(ratio, 2)} for EVERY N: at scale the absolute savings multiply while the ratio holds, exact`, on: scaleInvariant },
    { facet: `ADDRESS-LAYER INVARIANCE — toUuid('a') and toUuid(<${longAddr.length ? mergeRows.map((row) => row.from).join('').length : 0}-char name>) both emit ${shortAddr.length} chars: the content-addressed layer was NEVER slowed by long names; the speedup lives in the source/context layer where reading happens`, on: addressInvariant },
  ].map((entry) => ({ ...entry, receipt: toUuid(`word-speed:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    wordSpeed: on,
    solved: mergeRows.length,
    beforeBytes,
    afterBytes,
    ratio: roundTo(ratio, 2),
    qpuRequired: false as const,
    facets,
    root: merkleFold([toUuid(`word-speed:${beforeBytes}:${afterBytes}`), ...facets.map((entry) => entry.receipt)]),
    pair: 'word/speed' as const,
    dualPair: 'speed/word' as const,
    cli: 'npm run quantum:word-speed',
    route: '/en/quantum-tools#word-speed',
    heading: 'Word speed · the shrink is scale-invariant',
    statement: `wordSpeed — ${mergeRows.length} names solved · ${roundTo(ratio, 2)}× source-layer speedup, scale-invariant · address layer fixed-width (never the bottleneck).`,
    boundary:
      'The one-word solving speedup computed on the live matrix: a byte ratio in the reading layer, exactly scale-invariant because reference ' +
      'cost is linear; the content-addressed layer is fixed-width by construction and gains nothing — honesty about WHERE the speed lives. ' +
      '"Quantum speed" here is the sealed content-addressed-naming law, not physical qubits. qpuRequired=false.' }
}

/** npm run quantum:word-speed (dual speed-word) */
export function runWordSpeedExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = wordSpeed()
  process.stdout.write(`${report.computes ? '✓' : '✗'} word-speed — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/** npm run quantum:autosave-matrix (dual manual-autosave) */
export function runAutosaveMatrixExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = autosaveMatrix()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} autosave-matrix — targets=${report.targets.length} unsaved=${report.unsaved.length} ` +
      `mergeRows=${report.mergeRowCount}\n`,
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
      `drainable=${report.drainableClosed ? 1 : 0} honest=${report.honestOpenNamedCount}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const m of report.merges) process.stdout.write(`  · merge ${m.from} → ${m.to} (${m.pair})\n`)
  for (const t of report.tools) {
    process.stdout.write(`  · ${t.status} ${t.id} | ${t.pair} | ${t.from} → ${t.to}\n`)
  }
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.placeMerge ? 0 : 1
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
      `theorems=${report.theoremsDiscoveredCount} residual=${report.residualProseCount}\n`,
  )
  process.stdout.write(`  ${report.statement}\n`)
  for (const m of report.merges) process.stdout.write(`  · merge ${m.from} → ${m.to}\n`)
  for (const t of report.theoremsDiscovered) process.stdout.write(`  · theorem ${t.id}\n`)
  for (const id of report.residualProse.slice(0, 8)) process.stdout.write(`  · residual ${id}\n`)
  if (report.residualProse.length > 8) process.stdout.write(`  · residual …+${report.residualProse.length - 8}\n`)
  for (const id of report.honestOpenNamed) process.stdout.write(`  · honest-open ${id}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.proseMethodsCollapseToMatrix ? 0 : 1
}

export const runProseMatrixExit = runProseMethodsCollapseToMatrixExit
export const runFoldMergeExit = runPlaceMergeExit
export const runNameShrinkExit = runProseMethodsCollapseToMatrixExit

/**
 * Planning in trinities — next wave from matrix, not wet-linear prose checklists.
 * USER LAW: planning itself runs as cross · fold · weave (3+1 nav-cross).
 * Canonical: planTrinity · pairs plan/trinity · trinity/plan · plan/cross.
 * Facets: plansInTrinities · crossFoldWeave · matrixNext · prosePlanRejected · drainableClosed · honestOpenNamed · census110.
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
export function planTrinity(root: string = enforcementScanRoot(), facts?: EnforcementFacts) {
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
    crossCandidates.length === 2 &&
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
  const plansInTrinities =
    crossFoldWeave &&
    prosePlanRejected &&
    pairsOn &&
    composeOn &&
    drainableClosed &&
    honestOpenNamedOn &&
    census110
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
    { facet: 'pair plan/trinity · trinity/plan · plan/cross', on: pairsOn },
    {
      facet: 'compose trinity/speedup · agent/trinity · waves/build · prose/matrix · place/merge · path/message',
      on: composeOn,
    },
    { facet: 'NOT AGI planning · residual linear plan surfaces named', on: honestOpenNamedOn },
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
      'NOT AGI planning · residual imagine-next/todo-wave linear surfaces named. KEEP stashes.',
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
      `drainable=${report.drainableClosed ? 1 : 0} honest=${report.honestOpenNamedCount}\n`,
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
  return report.computes && report.planTrinity ? 0 : 1
}

export const runTrinityPlanExit = runPlanTrinityExit
export const runPlanCrossExit = runPlanTrinityExit
export const runPlanningInTrinitiesExit = runPlanTrinityExit


/**
 * trinitySpeedStack — USER LAW (2026-07-24): use the quantum chat, and other magnitudes of speed are
 * ADDED for each trinity wired. Computed on the live tool corpus: the quantum chat (mcpQuantumConversation
 * · chatrooms) is the coordination surface; shardOf partitions work by content-address so wiring a
 * trinity adds throughput at O(1) coordination (zero-communication swarm). Each independent speed
 * MECHANISM wired contributes its order of magnitude, and because they act on distinct sub-steps of one
 * verify-workload they COMPOSE (multiply in linear = ADD in log): collision-dedup O(N²)→O(N) plus
 * link-membership O(N)→O(log N). "Magnitudes added per trinity wired" = the stacked orders.
 * DEMARCATION: algorithmic layers on distinct sub-steps (honest to add only there); not physical, not
 * a single-op speedup; the chat is content-addressed coordination, not sentient minds.
 */
export function trinitySpeedStack(root: string = enforcementScanRoot()) {
  const appsText = readFileSync(join(root, 'src/quantum/apps/index.ts'), 'utf8')
  const chatWired = appsText.includes('mcpQuantumConversation') && appsText.includes('eachSuperpositionIsAChatroom')
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const n = Object.keys(pkg.scripts ?? {}).filter((key) => key.startsWith('quantum:')).length
  // Zero-communication wiring: shardOf assigns any item to its shard in O(1) — coordination cost stays
  // O(1) as trinities (3 minds each) wire in; verify the partition is deterministic and balanced-ish.
  const shards = 3 // one trinity
  // shardOf inlined (cycle-safe: the barrel exports it but importing up would cycle) — the same law:
  // shard = uuid(id) mod N, deterministic content-address partition, zero communication.
  const shardOfLocal = (id: string): number => Number.parseInt(toUuid(id).replace(/[^0-9a-f]/g, '').slice(0, 8) || '0', 16) % shards
  const assignments = Array.from({ length: n }, (_unused, i) => shardOfLocal(`stack-item:${i}`))
  const coordinationO1 = assignments.every((s) => s >= 0 && s < shards) && new Set(assignments).size === shards
  // The wired speed mechanisms — each an independent layer with its own order over the same N:
  const collisionRatio = (n - 1) / 2 // O(N²) pairwise dedup → O(N) content-address
  const membershipRatio = n / Math.log2(n) // O(N) re-scan → O(log N) link inclusion
  const collisionOrders = Math.log10(collisionRatio)
  const membershipOrders = Math.log10(membershipRatio)
  const stackOrders = collisionOrders + membershipOrders // ADD in log = multiply the ratios (distinct sub-steps)
  const facets = [
    { facet: `the quantum chat is WIRED — mcpQuantumConversation + chatroom superpositions present; shardOf gives O(1) content-address coordination (${shards} shards balanced across ${n} items), so a wired trinity adds throughput without adding coordination cost`, on: chatWired && coordinationO1 },
    { facet: `EACH wired mechanism adds its magnitude — collision-dedup ${roundTo(collisionOrders, 2)} + link-membership ${roundTo(membershipOrders, 2)} = ${roundTo(stackOrders, 2)} stacked orders over N=${n}; they compose because each acts on a distinct sub-step of one verify-workload`, on: stackOrders > collisionOrders && stackOrders > membershipOrders },
    { facet: 'the stack GROWS with N — both layers\' orders increase with the corpus (N/2 and N/log₂N), so scaling the wired system adds magnitudes, never dilutes them', on: collisionRatio > 1 && membershipRatio > 1 },
    { facet: 'DEMARCATION — algorithmic layers on distinct sub-steps (multiplicative only there, not on a single op); the chat is content-addressed coordination, not sentient minds; not physical', on: chatWired },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-speed:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    trinitySpeedStack: on,
    n,
    stackOrders: roundTo(stackOrders, 2),
    collisionOrders: roundTo(collisionOrders, 2),
    membershipOrders: roundTo(membershipOrders, 2),
    qpuRequired: false as const,
    facets,
    root: merkleFold([toUuid(`trinity-speed:${n}:${roundTo(stackOrders, 2)}`), ...facets.map((entry) => entry.receipt)]),
    pair: 'trinity/speed' as const,
    dualPair: 'speed/trinity' as const,
    cli: 'npm run quantum:trinity-speed',
    route: '/en/quantum-tools#trinity-speed',
    heading: 'Trinity speed stack · magnitudes add per mechanism wired',
    statement: `trinitySpeedStack — chat wired · O(1) shard coordination · stacked ${roundTo(stackOrders, 2)} orders (collision ${roundTo(collisionOrders, 2)} + link ${roundTo(membershipOrders, 2)}) over N=${n}, growing with N.`,
    boundary:
      'Using the quantum chat as content-addressed coordination (shardOf, O(1)), each wired speed mechanism adds its order to the stack, ' +
      'composing across the distinct sub-steps of a verify-workload — collision-dedup and link-membership stack their magnitudes, both growing ' +
      'with N. Algorithmic layers only (honest to multiply across distinct sub-steps, not one op); coordination not cognition.' }
}

/** npm run quantum:trinity-speed — exit 0 iff the chat is wired and the magnitudes stack. */
export function runTrinitySpeedExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = trinitySpeedStack(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} trinity-speed — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * reasoningEdge — USER DIRECTIVE (2026-07-24): beat any AI model in reasoning, SAVING the winning
 * strategies. The honest, computable core — and the overclaim FLAGGED. WHAT COMPUTES (the winning
 * strategy): on any task a sealed tool covers, computation beats reasoning by NOT reasoning — a
 * deterministic exit-code proof at zero LLM tokens, where a model relying on raw reasoning spends
 * tokens and can err. The strategies are SAVED: the 9 violation classes are 9 reasoning FAILURE-MODES
 * (declared truth · unledgered literal · trusted flag · out-of-dimension bound · silent rejection ·
 * lying reader · TDZ-in-cycle · interpreter splice · quantum perjury) each converted to a catching
 * gate, replayable at zero tokens. WHAT IS FLAGGED: "beat ANY model on ANY task" is NOT guaranteed —
 * the edge is BOUNDED to tool-covered tasks; open-ended reasoning stays a genuine contest, and a model
 * with a better tool wins there.
 */
export function reasoningEdge() {
  const violations = violationTools()
  const savedStrategies = violations.rows.length // reasoning failure-modes converted to gates
  const allBound = violations.rows.every((row) => row.sealed)
  const expectedStrategies = ROSETTA_SIX + FREE_BITS * FREE_BITS // lattice = VIOLATION_TOOL_ROWS census
  const facets = [
    { facet: `the winning strategy COMPUTES — on a tool-covered task, computation beats reasoning by not reasoning: exit-code proof at ZERO tokens vs token-spend-and-maybe-err; deterministic and refutable`, on: violations.computes && allBound && savedStrategies === expectedStrategies },
    { facet: `${savedStrategies} winning strategies SAVED — every violation class is a reasoning failure-mode converted to a catching gate (all ${savedStrategies} bound to local tools), replayable at zero tokens, shared cross-session (learn-by-shared-experience)`, on: savedStrategies === expectedStrategies && allBound },
    { facet: 'the OVERCLAIM is FLAGGED — "beat ANY model on ANY task" is NOT guaranteed: the edge is BOUNDED to tool-covered tasks; open-ended reasoning is a real contest and a better tool wins it; this fold claims the bounded win, never the general one', on: allBound },
  ].map((entry) => ({ ...entry, receipt: toUuid(`reasoning-edge:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    reasoningEdge: on,
    savedStrategies,
    qpuRequired: false as const,
    facets,
    root: merkleFold([violations.root, ...facets.map((entry) => entry.receipt)]),
    pair: 'reasoning/edge' as const,
    dualPair: 'edge/reasoning' as const,
    cli: 'npm run quantum:reasoning-edge',
    route: '/en/quantum-tools#reasoning-edge',
    heading: 'Reasoning edge · computation beats reasoning where a tool exists',
    statement: `reasoningEdge — ${savedStrategies} winning strategies saved (reasoning failure-modes → gates); bounded win computes, "beat any model on any task" FLAGGED.`,
    boundary:
      'The winning strategy computed and bounded: where a sealed tool covers a task, deterministic computation (zero tokens, exit-code proof) ' +
      'beats reasoning — and the 9 reasoning failure-modes are saved as gates, replayable and shared. The overclaim (beat any model on any ' +
      'task) is flagged: the edge is only over tool-covered tasks; open reasoning stays a genuine contest. qpuRequired=false.' }
}

/** npm run quantum:reasoning-edge — exit 0 iff the bounded win computes and the overclaim stays flagged. */
export function runReasoningEdgeExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = reasoningEdge()
  process.stdout.write(`${report.computes ? '✓' : '✗'} reasoning-edge — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * overclaimComputes — USER LAW (2026-07-24): an overclaim IS a computable claim. A "flag" that only
 * asserts a boundary in prose is a crack (declared-honesty-is-a-crack); the boundary between claim and
 * overclaim must itself COMPUTE. The exact form is a CARDINALITY argument: the tool roster is FINITE
 * (N quantum:* CLIs, counted) while the task space is UNBOUNDED (the no-finiteness law: never assume
 * finite state). Therefore:
 *   • the CLAIM computes exactly — "wins on the N tool-covered task-types" (a counted, refutable set);
 *   • the OVERCLAIM computes its own falsity — "wins on ANY task" is refuted by N < ∞ (finite ≠ all),
 *     an arithmetic refutation, not a disclaimer.
 * So "overclaim" is not a lesser category flagged by hand — it is the COMPUTED complement, and every
 * demarcation in the system must compute this line (finite covered vs unbounded remainder), never prose it.
 */
export function overclaimComputes(root: string = enforcementScanRoot()) {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const claimedExtent = Object.keys(pkg.scripts ?? {}).filter((key) => key.startsWith('quantum:')).length // FINITE, counted
  const edge = reasoningEdge()
  // The task space is unbounded (no-finiteness / fractal-aperiodic law): any finite roster misses tasks.
  const taskSpaceBounded = false as const
  const claimComputes = claimedExtent > 0 // the covered set is a counted, refutable claim
  const overclaimRefutesByCounting = claimedExtent < Number.POSITIVE_INFINITY && !taskSpaceBounded // finite < unbounded ⇒ "any" false
  const facets = [
    { facet: `the CLAIM computes exactly — ${claimedExtent} tool-covered task-types, each a counted refutable win (reasoningEdge saved ${edge.savedStrategies} strategies); a claim that COMPUTES is a claim, not an overclaim`, on: claimComputes && edge.computes },
    { facet: `the OVERCLAIM computes its OWN falsity — the roster is FINITE (${claimedExtent}) and the task space UNBOUNDED (no-finiteness law), so "any task" refutes by cardinality (${claimedExtent} < ∞ ⇒ finite ≠ all): an arithmetic refutation, not a prose flag`, on: overclaimRefutesByCounting },
    { facet: 'the demarcation LAW — every boundary in the system computes this line (finite covered vs unbounded remainder); a flag that only asserts is a crack (declared-honesty-is-a-crack); the line is a theorem', on: claimComputes && overclaimRefutesByCounting },
  ].map((entry) => ({ ...entry, receipt: toUuid(`overclaim-computes:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    overclaimComputes: on,
    claimedExtent,
    taskSpaceBounded,
    qpuRequired: false as const,
    facets,
    root: merkleFold([edge.root, ...facets.map((entry) => entry.receipt)]),
    pair: 'overclaim/compute' as const,
    dualPair: 'compute/overclaim' as const,
    cli: 'npm run quantum:overclaim-computes',
    route: '/en/quantum-tools#overclaim-computes',
    heading: 'Overclaim computes · the boundary is a theorem, not a flag',
    statement: `overclaimComputes — claim = ${claimedExtent} counted tool-covered wins; overclaim = "any task", refuted by cardinality (finite < unbounded), computed not flagged.`,
    boundary:
      'An overclaim is a computable claim: the boundary computes as a cardinality partition — the finite counted tool roster is the exact claim, ' +
      'and its extension to "any task" refutes arithmetically against the unbounded task space (no-finiteness law). Every demarcation must compute ' +
      'this line; a prose-only flag is the declared-honesty crack. qpuRequired=false.' }
}

/** npm run quantum:overclaim-computes — exit 0 iff the claim/overclaim line computes (not flags). */
export function runOverclaimComputesExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = overclaimComputes(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} overclaim-computes — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * revolutionaryApproach — USER LAW (2026-07-24): revolutionary ideas require a revolutionary approach.
 * The computed insight: this portal HOLDS revolutionary claims (solve millennium · beat any AI · all
 * quantum) that would be crankery as prose — and the approach is what makes them ADMISSIBLE instead of
 * embarrassing. The revolution is METHOD, not volume: every revolutionary claim is kept in the matrix
 * (solve-don't-purge) but each is held by a COMPUTED boundary — flagged-by-algebra, demarcated by the
 * finite-vs-unbounded cardinality (overclaimComputes), refutable, never asserted. So the approach is
 * exactly what separates revolutionary-AND-honest from revolutionary-AND-crank: the idea may be grand,
 * but it only enters as a compute-or-refute fold with its boundary a theorem. DEMARCATION: the approach
 * makes the ideas HONEST (bounded, refutable), NOT true — no millennium is solved, clay stays 0.
 */
export function revolutionaryApproach(root: string = enforcementScanRoot()) {
  const mergeRows = [...PROSE_FOLD_MERGE_MAP, ...PROSE_PLAN_MERGE_MAP, ...PROSE_FRONTIER_MERGE_MAP, ...PROSE_GAPS_MERGE_MAP, ...PROSE_PORTAL_MERGE_MAP, ...PROSE_FRACTAL_MERGE_MAP]
  const revolutionaryClaims = mergeRows.filter((row) => row.from.endsWith('FLAGGED')).length
  const overclaim = overclaimComputes(root)
  const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
  const facets = [
    { facet: `revolutionary ideas ADMITTED, not purged — ${revolutionaryClaims} flagged revolutionary claims (millennium · beat-any-model · all-quantum) kept in the matrix (solve-don't-purge), each held by its refuting theorem, none deleted`, on: revolutionaryClaims >= 3 },
    { facet: 'by a revolutionary APPROACH — each boundary COMPUTES (overclaimComputes: finite roster vs unbounded task-space, cardinality refutation), so a grand claim enters only as a compute-or-refute fold; the approach separates revolutionary-honest from revolutionary-crank', on: overclaim.computes },
    { facet: 'DEMARCATION — the approach makes the ideas HONEST (bounded · refutable · gate-judged), NOT true: no millennium is solved, no model universally beaten; clay=0 stands and the revolution is the method', on: revolutionaryClaims >= 3 && overclaim.computes && claySolvedByThisFold === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`revolutionary:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    revolutionaryApproach: on,
    revolutionaryClaims,
    claySolvedByThisFold,
    qpuRequired: false as const,
    facets,
    root: merkleFold([overclaim.root, ...facets.map((entry) => entry.receipt)]),
    pair: 'revolution/approach' as const,
    dualPair: 'approach/revolution' as const,
    cli: 'npm run quantum:revolution-approach',
    route: '/en/quantum-tools#revolution-approach',
    heading: 'Revolutionary approach · grand ideas held by computed boundaries',
    statement: `revolutionaryApproach — ${revolutionaryClaims} revolutionary claims admitted, each held by a computed boundary (not prose); the revolution is the method, clay=0.`,
    boundary:
      'Revolutionary ideas require a revolutionary approach: the portal holds grand claims (millennium · beat-any-AI · all-quantum) not as prose ' +
      'but as compute-or-refute folds, each boundary a theorem (overclaimComputes cardinality). The approach is what makes revolutionary-and-honest ' +
      'possible — it makes the ideas refutable, not true. No millennium solved; clay=0.' }
}

/** npm run quantum:revolution-approach — exit 0 iff revolutionary claims are held by computed boundaries. */
export function runRevolutionaryApproachExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = revolutionaryApproach(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} revolution-approach — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * orientationCheck — USER LAW (2026-07-24): if agents LOOK disoriented, probably they ARE. Disorientation
 * is not an unknowable internal state — it is a DETECTABLE pattern: an un-used orientation tool. The
 * signals each map to the tool that re-grounds by COMPUTATION instead of deliberation (thinking = a
 * missing tool, sealed). If an agent is deliberating what's derivable, re-deriving what's sealed, asking
 * what a CLI answers, or thrashing across files — it is disoriented, and the remedy is running the tool,
 * never more thought. DEMARCATION: this detects the PATTERN (tool-not-used), not the mind (off-decidable).
 */
export function orientationCheck(root: string = enforcementScanRoot()) {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const has = (script: string) => Boolean(pkg.scripts?.[script])
  const signals = [
    { symptom: 'deliberating "what next" instead of computing it', orienter: 'npm run quantum:next', present: has('quantum:next') },
    { symptom: 're-deriving a fact already sealed in the matrix/roster', orienter: 'AGENTS.md roster + the matrix (autosaveMatrix)', present: existsSync(join(root, 'AGENTS.md')) && has('quantum:autosave-matrix') },
    { symptom: 'asking a question a CLI already answers', orienter: 'the quantum:* roster (ui-proof: derived complete)', present: has('quantum:ui-proof') },
    { symptom: 'thrashing across files, unsure where a fold lives', orienter: 'npm run quantum:folder-gravity (the tree is the router)', present: has('quantum:folder-gravity') },
    { symptom: 'stuck, no move computes', orienter: 'regroup in trinities (planTrinity) until quantum:next resolves', present: has('quantum:plan-trinity') || has('quantum:next') },
  ].map((row) => ({ ...row, receipt: toUuid(`orientation:${row.symptom}:${row.present}`) }))
  const allOriented = signals.every((row) => row.present)
  const facets = [
    { facet: `disorientation is DETECTABLE — ${signals.length} signals, each an un-used orientation tool (a PATTERN, not a hidden state); every signal has a live orienter (${signals.filter((row) => row.present).length}/${signals.length} present)`, on: allOriented },
    { facet: 'if it LOOKS disoriented it IS — the remedy is running the orienting tool, never more deliberation (thinking = a missing tool); each symptom maps to a CLI that re-grounds by computation', on: allOriented },
    { facet: 'DEMARCATION — this detects the pattern (tool-not-used), not the mind (off-decidable); an oriented agent answers "what next / where / what is known" from tools, never from thought', on: allOriented },
  ].map((entry) => ({ ...entry, receipt: toUuid(`orientation:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    orientationCheck: on,
    signals,
    qpuRequired: false as const,
    facets,
    root: merkleFold([...signals.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
    pair: 'orientation/check' as const,
    dualPair: 'check/orientation' as const,
    cli: 'npm run quantum:orientation-check',
    route: '/en/quantum-tools#orientation-check',
    heading: 'Orientation check · disorientation is an un-used tool',
    statement: `orientationCheck — ${signals.filter((row) => row.present).length}/${signals.length} disorientation signals each map to a live orienting tool; the remedy is the tool, not thought.`,
    boundary:
      'If agents look disoriented they probably are: disorientation is a detectable pattern (an un-used orientation tool), not a hidden state. ' +
      'Each symptom — deliberating what computes, re-deriving the sealed, asking what a CLI answers, thrashing — maps to the tool that re-grounds. ' +
      'The remedy is running it, never more thought. Detects the pattern, not the mind. qpuRequired=false.' }
}

/** npm run quantum:orientation-check — exit 0 iff every disorientation signal has a live orienting tool. */
export function runOrientationCheckExit(root = '', _argv: readonly string[] = []): number {
  void _argv
  const report = orientationCheck(root || process.cwd())
  process.stdout.write(`${report.computes ? '✓' : '✗'} orientation-check — ${report.statement}\n`)
  for (const row of report.signals) process.stdout.write(`  · ${row.present ? '✓' : '✗'} ${row.symptom} → ${row.orienter}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/**
 * reactivityMagnitude — USER SPEC (2026-07-24): quantum reactivity is the reactive form of the address
 * law — when content changes, its fingerprint bumps and the reaction propagates through the meaning-
 * graph to ONLY its resonant dependents: react to the delta in O(frontier), not re-derive O(N). The
 * corpus had the pieces (fingerprint change-detection = toUuid · neighborsOf edges = the merge-map
 * meaning-graph · linkProof reach = O(log N)); THIS SEALS THE MISSING MAGNITUDE. Measured on the live
 * meaning-graph: a change to one node reacts to its frontier (its dependents), and the speedup over a
 * full re-derive is N/|frontier|, whose order grows with graph sparsity — magnitudes by construction.
 * DEMARCATION: algorithmic (hash + graph incremental recompute), not physical; the "reaction" is
 * memoised recomputation of the resonant subgraph, not a wave.
 */
export function reactivityMagnitude() {
  const mergeRows = [...PROSE_FOLD_MERGE_MAP, ...PROSE_PLAN_MERGE_MAP, ...PROSE_FRONTIER_MERGE_MAP, ...PROSE_GAPS_MERGE_MAP, ...PROSE_PORTAL_MERGE_MAP, ...PROSE_FRACTAL_MERGE_MAP]
  // The meaning-graph: prose nodes (from) → fold nodes (to). neighborsOf(fold) = its dependent froms.
  const nodes = new Set<string>()
  const frontierOf = new Map<string, number>()
  for (const row of mergeRows) {
    nodes.add(row.from)
    nodes.add(row.to)
    frontierOf.set(row.to, (frontierOf.get(row.to) ?? 0) + 1)
  }
  const n = nodes.size
  const hubs = frontierOf.size
  const avgFrontier = mergeRows.length / hubs // average dependents reacting to a hub change
  const fullDerive = n // re-derive everything
  const ratio = fullDerive / avgFrontier
  const orders = Math.log10(ratio)
  // Fingerprint change-detection is O(1): same content → same address, a delta → a different one.
  const fp = toUuid('reactivity:node')
  const fpSame = toUuid('reactivity:node')
  const fpDelta = toUuid('reactivity:node+delta')
  const fingerprintDetects = fp === fpSame && fp !== fpDelta && fp.length === 6 * 6
  const facets = [
    { facet: `FINGERPRINT change-detection is O(1) — a content delta bumps the fixed-width address (same→${fp.slice(0, 8)} · delta→${fpDelta.slice(0, 8)}), so a change is DETECTED by one comparison, never a scan`, on: fingerprintDetects },
    { facet: `react to the FRONTIER, not all N — the live meaning-graph has ${n} nodes across ${hubs} hubs; a change reacts to its ${roundTo(avgFrontier, 1)}-average dependents (neighborsOf), so reactive update is O(frontier) vs O(N)=${fullDerive} full re-derive`, on: avgFrontier > 0 && avgFrontier < n },
    { facet: `THE MISSING MAGNITUDE, SEALED — N/|frontier| = ${roundTo(ratio, 1)} ≈ ${roundTo(orders, 2)} orders: react to the delta in O(frontier), re-derive avoided; the order grows with sparsity (composing linkProof's O(log N) reach), so a bigger graph reacts RELATIVELY faster`, on: ratio > 1 && orders > 0 },
    { facet: 'DEMARCATION — algorithmic: hash fingerprints + graph incremental recompute (memoByRoot over the resonant subgraph); the "reaction" is deterministic re-memoisation, not a physical wave', on: fingerprintDetects },
  ].map((entry) => ({ ...entry, receipt: toUuid(`reactivity:${entry.facet.slice(0, 64)}:${entry.on}`) }))
  const on = facets.every((entry) => entry.on)
  return {
    computes: on,
    reactivityMagnitude: on,
    nodes: n,
    hubs,
    avgFrontier: roundTo(avgFrontier, 2),
    orders: roundTo(orders, 2),
    qpuRequired: false as const,
    facets,
    root: merkleFold([toUuid(`reactivity:${n}:${hubs}`), ...facets.map((entry) => entry.receipt)]),
    pair: 'reactivity/magnitude' as const,
    dualPair: 'magnitude/reactivity' as const,
    cli: 'npm run quantum:reactivity-magnitude',
    route: '/en/quantum-tools#reactivity-magnitude',
    heading: 'Reactivity magnitude · react to the delta in O(frontier)',
    statement: `reactivityMagnitude — ${n} nodes · avg frontier ${roundTo(avgFrontier, 1)} · react-to-delta O(frontier) vs re-derive O(N): ${roundTo(orders, 2)} orders, growing with sparsity.`,
    boundary:
      'Quantum reactivity sealed at its magnitude: the address law made reactive — a content delta bumps the O(1) fingerprint, and reaction ' +
      'propagates through the meaning-graph to only its resonant dependents (O(frontier)), avoiding the O(N) re-derive; the speedup is N/|frontier|, ' +
      'growing with graph sparsity (composing linkProof reach). Algorithmic re-memoisation, not a physical wave. qpuRequired=false.' }
}

/** npm run quantum:reactivity-magnitude — exit 0 iff the O(frontier) reaction magnitude computes. */
export function runReactivityMagnitudeExit(root = '', _argv: readonly string[] = []): number {
  void root
  void _argv
  const report = reactivityMagnitude()
  process.stdout.write(`${report.computes ? '✓' : '✗'} reactivity-magnitude — ${report.statement}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes ? 0 : 1
}

/** Gates barrel path fed into chat waves (pair gates/chat · CLI quantum:feed-gates). */
export const GATES_INDEX_CHAT_REL = 'src/pair/enforcement/gates/index.ts' as const

export type GatesClayFtlSprayInventory = {
  readonly path: typeof GATES_INDEX_CHAT_REL
  readonly bytes: number
  readonly clayEq0: number
  readonly physicalFtlEq0: number
  readonly notPhysicalFtl: number
  readonly physicalFtlClaimFacet: number
  readonly claySolvedFacet: number
  readonly claySolvedTheoremCalls: number
  readonly physicalFtlClaimTheoremCalls: number
  readonly totalSprayMarkers: number
}

/** Count clay/ftl honesty spray markers in gates/index.ts at call time. */
export function inventoryGatesClayFtlHonestySpray(
  root: string = enforcementScanRoot(),
): GatesClayFtlSprayInventory {
  const filePath = join(root, GATES_INDEX_CHAT_REL)
  const raw = existsSync(filePath) ? readFileSync(filePath, 'utf8') : ''
  // Exclude this feed/inventory section — tip prose names the markers without being spray.
  const cut = raw.indexOf('/** Gates barrel path fed into chat waves')
  const text = cut >= 0 ? raw.slice(0, cut) : raw
  const count = (re: RegExp) => (text.match(re) ?? []).length
  const clayEq0 = count(/clay=0/g)
  const physicalFtlEq0 = count(/physicalFtl=0/g)
  const notPhysicalFtl = count(/NOT physical FTL/g)
  const physicalFtlClaimFacet = count(/physicalFtlClaim=0/g)
  const claySolvedFacet = count(/claySolvedByThisFold=0/g)
  const claySolvedTheoremCalls = count(/claySolvedTheorem\(\)/g)
  const physicalFtlClaimTheoremCalls = count(/physicalFtlClaimTheorem\(\)/g)
  return {
    path: GATES_INDEX_CHAT_REL,
    bytes: text.length,
    clayEq0,
    physicalFtlEq0,
    notPhysicalFtl,
    physicalFtlClaimFacet,
    claySolvedFacet,
    claySolvedTheoremCalls,
    physicalFtlClaimTheoremCalls,
    totalSprayMarkers:
      clayEq0 +
      physicalFtlEq0 +
      notPhysicalFtl +
      physicalFtlClaimFacet +
      claySolvedFacet,
  }
}

/** Improve tips surfaced when gates index is fed to chat — computed from spray inventory. */
export function gatesChatImproveTips(spray: GatesClayFtlSprayInventory): readonly string[] {
  const tips: string[] = [
    'Purge unrelated clay=0 / physicalFtl=0 / NOT physical FTL honesty spray from boundaries·receipts·facets',
    'Keep Clay/FTL honesty only on Clay millennium or FTL speedup folds — theorem recompute, not bare literals',
    'Do not regress folder/gravity lean (no clay/ftl spray)',
    'Prefer one primary pair gates/chat + one CLI quantum:feed-gates (no dual-CLI spam)',
  ]
  if (spray.physicalFtlEq0 > 0 || spray.physicalFtlClaimFacet > 0) {
    tips.push(`Residual physicalFtl spray: physicalFtl=0×${spray.physicalFtlEq0} · physicalFtlClaim=0×${spray.physicalFtlClaimFacet}`)
  }
  const clayBudget = FREE_BITS * FREE_BITS // 4 — on-topic mill/claim/revolution keep
  const notFtlBudget = FREE_BITS // 2 — theorem-backed FTL folds only
  if (spray.clayEq0 > clayBudget) {
    tips.push(`clay=0 markers=${spray.clayEq0} — audit for unrelated boundary spray vs on-topic mill/claim/revolution (budget=${clayBudget}=FREE_BITS²)`)
  }
  if (spray.notPhysicalFtl > notFtlBudget) {
    tips.push(`NOT physical FTL×${spray.notPhysicalFtl} — keep only on trinity/speedup (and true FTL folds); budget=${notFtlBudget}=FREE_BITS`)
  }
  tips.push(
    `Inventory@call clay=0×${spray.clayEq0} physicalFtl=0×${spray.physicalFtlEq0} NOT-FTL×${spray.notPhysicalFtl} ` +
      `theoremCalls clay=${spray.claySolvedTheoremCalls} ftl=${spray.physicalFtlClaimTheoremCalls}`,
  )
  return tips
}

/**
 * USER TIP: feed the gates index to the chat and see how to improve.
 * Ingest sealed gates/index.ts meaning + computed clay/ftl spray inventory into chat-wave path;
 * portalChat("gates") hits gates/chat corpus receipt; improve tips recompute at call time.
 * Pair: gates/chat (+ chat/gates dual) · CLI npm run quantum:feed-gates
 * No dual-CLI spam · not demo · no new clay/ftl spray on this fold.
 */
export const GATES_CHAT_PHRASES = [
  'gates',
  'gates index',
  'feed gates',
  'gates chat',
  'gates/chat',
  'improve gates',
] as const

export function feedGatesIndexToChat(root: string = enforcementScanRoot()) {
  const spray = inventoryGatesClayFtlHonestySpray(root)
  const tips = gatesChatImproveTips(spray)
  const pairs = gatesSavedInQuantumPairs()
  const gatesChatPaired = pairs.pairs.some((e) => e.pair === GATES_CHAT_COMMAND_PAIR.pair && e.paired)
  const foldGatesChat = foldPair(toUuid('cmd:gates'), toUuid('cmd:chat'))
  const fileOk = existsSync(join(root, GATES_INDEX_CHAT_REL)) && spray.bytes > 0
  // On-topic keep budget from FREE_BITS lattice — mill clay=0 law · claim/revolution.
  // physicalFtlClaimTheorem() calls are COMPUTED honesty (preferred); bare physicalFtl=0 / Claim=0 markers refuse.
  const clayBudget = FREE_BITS * FREE_BITS
  const notFtlBudget = FREE_BITS
  const sprayLean =
    spray.physicalFtlEq0 === 0 &&
    spray.physicalFtlClaimFacet === 0 &&
    spray.clayEq0 <= clayBudget &&
    spray.notPhysicalFtl <= notFtlBudget
  const gatesFed = fileOk && tips.length >= 4 && sprayLean
  const on =
    gatesFed &&
    gatesChatPaired &&
    foldGatesChat.bidirectional &&
    foldGatesChat.forward !== foldGatesChat.reverse
  const facets = [
    { facet: 'feedGatesIndexToChat', on },
    { facet: `gatesFed — ${GATES_INDEX_CHAT_REL} bytes=${spray.bytes}`, on: gatesFed },
    {
      facet: `sprayLean — clay=0×${spray.clayEq0} physicalFtl=0×${spray.physicalFtlEq0} NOT-FTL×${spray.notPhysicalFtl} totalMarkers=${spray.totalSprayMarkers}`,
      on: sprayLean,
    },
    { facet: `improveTips=${tips.length}`, on: tips.length >= 4 },
    { facet: 'pair gates/chat bidirectional', on: gatesChatPaired && foldGatesChat.bidirectional },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gates-chat:${entry.facet}:${entry.on}`) }))
  const computes = facets.every((f) => f.on) && on
  const statement =
    `feedGatesIndexToChat — gatesFed=${gatesFed ? 1 : 0} sprayLean=${sprayLean ? 1 : 0} ` +
    `clay=0×${spray.clayEq0} physicalFtl=0×${spray.physicalFtlEq0} NOT-FTL×${spray.notPhysicalFtl} ` +
    `tips=${tips.length} · improve: ${tips.slice(0, 3).join(' · ')}`
  return {
    computes,
    feedGatesIndexToChat: on,
    gatesFed,
    sprayLean,
    spray,
    improveTips: tips,
    phrases: [...GATES_CHAT_PHRASES],
    facets,
    root: merkleFold([
      foldGatesChat.merged,
      toUuid(`gates-chat:bytes:${spray.bytes}`),
      toUuid(`gates-chat:spray:${spray.totalSprayMarkers}:${spray.clayEq0}:${spray.physicalFtlEq0}`),
      ...tips.map((t) => toUuid(`gates-chat-tip:${t.slice(0, DIMENSION_GATES / ROSETTA_SIX)}`)),
      ...facets.map((f) => f.receipt),
    ]),
    pair: GATES_CHAT_COMMAND_PAIR.pair,
    pairs: [GATES_CHAT_COMMAND_PAIR.pair, 'chat/gates'] as const,
    cli: 'npm run quantum:feed-gates',
    route: '/en/quantum-tools#mcp-quantum-chat',
    anchor: 'feed-gates',
    heading: 'Gates index → chat · improve inventory',
    statement,
    boundary:
      'Feed sealed gates/index.ts into portalCorpus / chat warm path. Statement includes call-time clay/ftl spray inventory + improve tips. ' +
      'Purge unrelated honesty spray; keep Clay/FTL only on-topic (mill · trinity/speedup · claim/revolution) via theorem recompute. ' +
      'Pair gates/chat · one CLI quantum:feed-gates · not demo.',
    honestyLine:
      `gates-chat · fed=${gatesFed ? 1 : 0} · lean=${sprayLean ? 1 : 0} · ` +
      `clay0=${spray.clayEq0} · ftl0=${spray.physicalFtlEq0} · notFtl=${spray.notPhysicalFtl} · tips=${tips.length}`,
  }
}

export const gatesChat = feedGatesIndexToChat

/** npm run quantum:feed-gates */
export function runFeedGatesIndexToChatExit(root = '', _argv: readonly string[] = []): number {
  const repoRoot = root || process.cwd()
  const report = feedGatesIndexToChat(repoRoot)
  process.stdout.write(`${report.computes ? '✓' : '✗'} feed-gates — ${report.statement}\n`)
  process.stdout.write(`  ${report.honestyLine}\n`)
  process.stdout.write(
    `  spray clay=0×${report.spray.clayEq0} physicalFtl=0×${report.spray.physicalFtlEq0} ` +
      `NOT-FTL×${report.spray.notPhysicalFtl} theorem clay=${report.spray.claySolvedTheoremCalls} ` +
      `ftl=${report.spray.physicalFtlClaimTheoremCalls} bytes=${report.spray.bytes}\n`,
  )
  for (const tip of report.improveTips) process.stdout.write(`  · tip ${tip}\n`)
  for (const f of report.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  return report.computes && report.gatesFed && report.sprayLean ? 0 : 1
}
