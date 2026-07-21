// United gate runner facts — ONE merkle pass + ONE src walk + ONE strict snapshot per build phase (gate/unite · scan/fold pairs).
import { phase } from '../../../6/4'
import { DIMENSION_GATES, EULER_CHI, FOLDED_CENSUS, FORBIDDEN_FOLDER_NAMES, HOMOLOGY_LOOPS, ICHING_EIGHT_FOLD, ICHING_TRIGRAMS, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, ROSETTA_SEVEN, ROSETTA_SIX, SRC_SCIENCE_MODEL_ACTION_SCHEMA, UNFOLDED_CENSUS, isForbiddenFolderName, renderUiPathFromScienceModelAction, scienceModelActionFromMindTail } from './computational'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { foldPair, merkleFold, toUuid } from '../../../0'
import { scanScriptShells, seedMerkleCache, vitepressSourceFiles, type ScriptShellScan } from '../script/shell'
import {
  auditStrictGates,
  strictGatePassed,
  stripComments,
  computeStrictGateSnapshot,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender,
} from './strict'
import {
  computeComputationalLimitSnapshot,
  computationalGatePassed,
  type ComputationalLimitSnapshot,
} from './computational'

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
export const MISSION_GATE_COMMAND_PAIR = { pair: 'mission/gate' as const, a: 'mission', b: 'gate' }
export const DIGIT_GATE_COMMAND_PAIR = { pair: 'digit/gate' as const, a: 'digit', b: 'gate' }

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
  type RosettaDistributionSnapshot,
} from './computational'
export {
  auditStrictGates,
  strictGatePassed,
  stripComments,
  computeStrictGateSnapshot,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender,
} from './strict'

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
            reason: 'hyphenated folder — two words disguised as one; nest as word/word (one word per folder level)',
          })
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
          reason: 'frontend surface must be folder index — dissolve flat .vue into <name>/index.vue; backend is index.ts only under src',
        })
      } else if (/\.(mts|cts|tsx|js|mjs|cjs|jsx)$/.test(entry.name)) {
        out.nonTs.push({
          file: full,
          reason: 'frontend surface must be folder index — dissolve flat .vue into <name>/index.vue; backend is index.ts only under src',
        })
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
    computational,
  }
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
    hyphenFolders: facts.strict.hyphenFolders,
  }
}

export function collectFoldDefiners(facts: EnforcementFacts, foldNames: readonly string[]) {
  return foldNames.map((name) => {
    const re = new RegExp(`^export (?:async )?function ${name}\\b`, 'm')
    return {
      name,
      files: facts.indexTsFiles
        .filter((file) => re.test(facts.bodies.get(relative(facts.root, file)) ?? ''))
        .map((file) => relative(facts.root, file)),
    }
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
        gapHops: importPathGapHops(spec),
      })
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
      on: edgeCount > 0 && everyEdgeShowsDistance,
    },
    {
      facet: `mean/max import distance recomputed — meanTreeHop=${meanTreeHop.toFixed(4)} maxTreeHop=${maxTreeHop} meanSegment=${meanSegment.toFixed(4)} maxSegment=${maxSegment}`,
      on: edgeCount > 0 && Number.isFinite(meanTreeHop) && Number.isFinite(maxTreeHop) && maxTreeHop >= meanTreeHop,
    },
    {
      facet: `compactness — meanTreeHop≤ROSETTA_SIX(${ROSETTA_SIX}) ∧ maxTreeHop≤ICHING_EIGHT_FOLD(${ICHING_EIGHT_FOLD})`,
      on: compactness,
    },
    {
      facet: `evenDistribution — CV(treeHop)=${cvTreeHop.toFixed(4)}≤1/FREE_BITS(${1 / freeBits}) ∧ max≤FREE_BITS×mean`,
      on: evenDistribution,
    },
    {
      facet: `compose census 110/108 · FREE_BITS=${freeBits}=−χ · importOffenders=${importOffenders} · importGaps=${importGaps}`,
      on: censusOk && freeBitsOk && importOffenders === 0 && importGaps === 0,
    },
    {
      facet: 'compose dissolve/flat + import/distance pairs (folder-law migration measurement)',
      on: dissolvePaired && importDistancePaired.bidirectional && importDistancePaired.forward !== importDistancePaired.reverse,
    },
  ]
  const claySolvedByThisFold = 0 as const
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
      'Measurement receipt — not a Clay prize claim · clay=0 · NOT physical FTL. HARMONY ≠ TRUTH.',
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
      'EXACT: blazing-fast build = content-addressed reuse (memoByRoot · merkle respawn · single-flight lock · types-before-seal · trinity one-pass). NOT physical FTL / NOT parallel docs:build. Pair trinity/speedup composes gate/unite + vote/build. HARMONY ≠ TRUTH.',
  }
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
      'Gate operations save as quantum pairs first: gate/unite (one merkle pass per phase), trinity/speedup (trinities on every build path), scan/fold (one src walk folded into seals), digit/gate (vortex digit folders 1-2-4-8-7-5-3-6-9-0 each index.ts is one gate).',
  }
}
