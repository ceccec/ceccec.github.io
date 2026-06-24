// Mission verify — limits · structure · rosetta batches · precommit.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { buildMatrix } from '../../../../heaven/compute'
import { taxonomyIcons } from '../../../../fire/li'
import { modelSeal, emergentDimensions } from '../../../../heaven/balance'
import { rosettaReuse } from '../../../../water/digit'
import {
  collectEnforcementFacts,
  collectFoldDefiners,
  collectImportOffenders,
  collectIndexOnlyOffenders,
  collectHyphenFolderOffenders,
  strictGatePassed,
  computationalGatePassed,
  auditComputationalGates,
  computationalLimitsGapDetail,
  UNFOLDED_CENSUS,
  FOLDED_CENSUS,
  DIMENSION_GATES,
  NOT_LESS_NOT_MORE_LAW,
  FOLD_HOMES,
  foldsLiveAtTheirDomainHome,
  toolsSavedInSrcFirst,
  importsAreFoldersOnly,
  foldersAreOneWordPerLevel,
  srcFilesAreIndexOnly,
} from '../../gates'
import { runCheckTypesExit, importQuantumBundle } from '../../script/shell'

export async function runMissionGateExit(root: string): Promise<number> {
  const types = runCheckTypesExit(root)
  if (types !== 0) return types
  const limits = runVerifyLimitsExit(root)
  if (limits !== 0) return limits
  return runVerifyStructureExit(root)
}

export function runVerifyLimitsExit(root: string): number {
  const facts = collectEnforcementFacts(root)
  const audit = auditComputationalGates(facts.computational)
  if (!audit.passed) {
    process.stderr.write(`✗ limits:verify — ${NOT_LESS_NOT_MORE_LAW}\n`)
    process.stderr.write(`   ${computationalLimitsGapDetail(facts.computational).replace(/\n/g, '\n   ')}\n`)
    return 1
  }
  for (const line of audit.report) process.stdout.write(`${line}\n`)
  process.stdout.write(`✓ limits:verify — exactly ${facts.computational.indexCount} index.ts (${UNFOLDED_CENSUS} unfolded, ${FOLDED_CENSUS} folded, ${DIMENSION_GATES} gates)\n`)
  return 0
}

export async function runVerifyStructureExit(root: string): Promise<number> {
  const types = runCheckTypesExit(root)
  if (types !== 0) return types
  const facts = collectEnforcementFacts(root)
  if (!strictGatePassed(facts.strict)) return 1
  if (!computationalGatePassed(facts.computational)) return 1
  const tools = toolsSavedInSrcFirst(facts.scriptShells.map((s) => ({ path: s.path, lines: s.lines, routesThroughSrc: s.routesThroughSrc })))
  if (!tools.enforced) return 1
  if (!importsAreFoldersOnly(collectImportOffenders(facts), facts.srcCodeFiles.length).enforced) return 1
  if (!foldersAreOneWordPerLevel(collectHyphenFolderOffenders(facts), facts.srcCodeFiles.length).enforced) return 1
  if (!srcFilesAreIndexOnly(collectIndexOnlyOffenders(facts), facts.srcCodeFiles.length).enforced) return 1
  if (!foldsLiveAtTheirDomainHome(collectFoldDefiners(facts, Object.values(FOLD_HOMES).flat() as string[])).enforced) return 1
  process.stdout.write(`✓ verify:structure — ${facts.computational.indexCount}/${facts.computational.targetUnfolded} index.ts\n`)
  return 0
}

export async function runLimitsSealExit(root: string): Promise<number> {
  const limits = runVerifyLimitsExit(root)
  if (limits !== 0) return limits
  return runVerifyStructureExit(root)
}

export function runRosettaStructureBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  return rosettaReuse(Date.now(), buildMatrix()).itself.computed ? 0 : 1
}

export function runRosettaTaxonomyBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  return taxonomyIcons().compliant ? 0 : 1
}

export function runRosettaSealBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  return modelSeal(buildMatrix()).passed ? 0 : 1
}

export function runRosettaDimensionsBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  const d = emergentDimensions(buildMatrix())
  return d.count === 432 && d.open.length === 0 ? 0 : 1
}

export async function runRosettaDiagnoseExit(root: string, argv: readonly string[] = []): Promise<number> {
  void root
  const target = argv[0] ?? 'all'
  const batches = target === 'all'
    ? [runRosettaStructureBatchExit, runRosettaDimensionsBatchExit, runRosettaSealBatchExit, runRosettaTaxonomyBatchExit]
    : target === 'structure' ? [runRosettaStructureBatchExit]
    : target === 'dimensions' ? [runRosettaDimensionsBatchExit]
    : target === 'seal' ? [runRosettaSealBatchExit]
    : target === 'taxonomy' ? [runRosettaTaxonomyBatchExit]
    : []
  if (!batches.length) return 1
  for (const batch of batches) if (batch(root, argv.slice(1)) !== 0) return 1
  return 0
}

export async function runRosettaBatchExit(root: string, argv: readonly string[] = []): Promise<number> {
  return runRosettaDiagnoseExit(root, argv[0] ? [argv[0], ...argv.slice(1)] : ['all'])
}

export async function runPrecommitRosettaExit(root: string): Promise<number> {
  const structure = await runVerifyStructureExit(root)
  if (structure !== 0) return structure
  const rosetta = await runRosettaDiagnoseExit(root, ['all'])
  if (rosetta !== 0) {
    process.stderr.write('✗ commit blocked — the rosetta is NOT complete in all quantum dimensions\n')
    return 1
  }
  const learning = (await importQuantumBundle('src/learning/index.ts', root)) as {
    certify: () => { editingAllowed: boolean; levels: { certified: boolean; level: string }[] }
  }
  if (!learning.certify().editingAllowed) return 1
  const dist = (await importQuantumBundle('src/quantum/lake/dist/index.ts', root)) as {
    readmeSignatureValid: (committed: string) => { valid: boolean }
  }
  let committed = ''
  try { committed = readFileSync(join(root, 'README.md'), 'utf8') } catch { committed = '' }
  if (!dist.readmeSignatureValid(committed).valid) return 1
  process.stdout.write('✓ verify — structure · rosetta batches · certify · README\n')
  return 0
}

export const runPrecommitIchingExit = runPrecommitRosettaExit

export async function runMissionVerifyExit(root: string): Promise<number> {
  const gate = await runMissionGateExit(root)
  if (gate !== 0) return gate
  return runPrecommitRosettaExit(root)
}
