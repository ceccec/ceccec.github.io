// United gate runner facts — ONE merkle pass + ONE src walk + ONE strict snapshot per build phase (gate/unite · scan/fold pairs).
import { phase } from '../../../6/4'
import { DIMENSION_GATES, EULER_CHI, FOLDED_CENSUS, FORBIDDEN_FOLDER_NAMES, HOMOLOGY_LOOPS, ICHING_EIGHT_FOLD, ICHING_TRIGRAMS, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, ROSETTA_SEVEN, ROSETTA_SIX, SRC_SCIENCE_MODEL_ACTION_SCHEMA, UNFOLDED_CENSUS, isForbiddenFolderName, renderUiPathFromScienceModelAction, scienceModelActionFromMindTail } from './computational'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
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
export const SCAN_FOLD_COMMAND_PAIR = { pair: 'scan/fold' as const, a: 'scan', b: 'fold' }
export const LIMITS_VERIFY_COMMAND_PAIR = { pair: 'limits/verify' as const, a: 'limits', b: 'verify' }
export const LIMITS_SEAL_COMMAND_PAIR = { pair: 'limits/seal' as const, a: 'limits', b: 'seal' }
export const VERIFY_STRUCTURE_COMMAND_PAIR = { pair: 'verify/structure' as const, a: 'verify', b: 'structure' }
export const ROSETTA_BATCH_COMMAND_PAIR = { pair: 'rosetta/batch' as const, a: 'rosetta', b: 'batch' }
export const ROSETTA_STRUCTURE_COMMAND_PAIR = { pair: 'rosetta/structure' as const, a: 'rosetta', b: 'structure' }
export const ROSETTA_REUSE_COMMAND_PAIR = { pair: 'rosetta/reuse' as const, a: 'rosetta', b: 'reuse' }
export const CHECK_TYPES_COMMAND_PAIR = { pair: 'check/types' as const, a: 'check', b: 'types' }
export const TYPES_SEAL_COMMAND_PAIR = { pair: 'types/seal' as const, a: 'types', b: 'seal' }
export const BUILD_SEAL_COMMAND_PAIR = { pair: 'build/seal' as const, a: 'build', b: 'seal' }
export const AGENT_SUBMISSION_COMMAND_PAIR = { pair: 'agent/submission' as const, a: 'agent', b: 'submission' }
export const GATE_COMPLIANCE_COMMAND_PAIR = { pair: 'gate/compliance' as const, a: 'gate', b: 'compliance' }
/** @deprecated Backward compat */
export const ICHING_BATCH_COMMAND_PAIR = ROSETTA_BATCH_COMMAND_PAIR
export const DISSOLVE_FLAT_COMMAND_PAIR = { pair: 'dissolve/flat' as const, a: 'dissolve', b: 'flat' }
export const MISSION_GATE_COMMAND_PAIR = { pair: 'mission/gate' as const, a: 'mission', b: 'gate' }
export const DIGIT_GATE_COMMAND_PAIR = { pair: 'digit/gate' as const, a: 'digit', b: 'gate' }
export { MONOLITH_FILE_BYTES, MONOLITH_FILE_LAW, scanFileSizeOffenders, monolithFileGapDetail, FOLD_HOMES, foldsLiveAtTheirDomainHome, toolsSavedInSrcFirst, importsAreFoldersOnly, foldersAreOneWordPerLevel, glagoliticLabelsAreComputed, unexpectedSituationsRefactorTools, srcFilesAreIndexOnly } from './strict'
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
      '.vitepress/lib/crosslinks.ts',
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
      '.vitepress/lib/life-resonance.ts',
      '.vitepress/lib/earth-hinge.ts',
      '.vitepress/lib/shadcn-ui.ts',
      '.vitepress/lib/cn.ts',
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

export function gatesSavedInQuantumPairs() {
  const declared = [
    GATE_UNITE_COMMAND_PAIR,
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
      'Gate operations save as quantum pairs first: gate/unite (one merkle pass per phase), scan/fold (one src walk folded into seals), digit/gate (vortex digit folders 1-2-4-8-7-5-3-6-9-0 each index.ts is one gate).',
  }
}
