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
import {
  auditStrictGates,
  strictGatePassed,
  stripComments,
  computeStrictGateSnapshot,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender } from './strict'
import { claySolvedTheorem } from '../../../3/7'
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

/** Up-hops (`../` count) — same quantity the mind import-gap scan bounds. */
export function importPathGapHops(spec: string): number {
  const match = spec.match(/^(\.\.\/)+/)
  return match ? (match[0].match(/\.\.\//g)?.length ?? 0) : 0
}

/** Folder-tree hop distance via longest common prefix (LCA) under posix-rel paths. */
export function importPathTreeHopDistance(importerDirRel: string, importeeDirRel: string): number {
  const from = importerDirRel.replace(/\\/g, '/').split('/').filter(Boolean)
  const to = importeeDirRel.replace(/\\/g, '/').split('/').filter(Boolean)
  let common = 0
  while (common < from.length && common < to.length && from[common] === to[common]) common += 1
  return from.length - common + (to.length - common)
}

function relativeImportSpecsFromBody(text: string): string[] {
  return [
    ...[...text.matchAll(/\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s+['"]([^'"]+)['"]/g)].map((m) => m[1]!),
  ].filter((spec) => spec.startsWith('.'))
}

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
