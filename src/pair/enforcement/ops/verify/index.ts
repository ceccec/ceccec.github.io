// Mission verify — limits · structure · rosetta batches · precommit.
import { readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { buildMatrix } from '../../../../heaven/compute'
import type { MindMatrix } from '../../../../types'
import { taxonomyIcons } from '../../../../fire/li'
import { modelSeal, emergentDimensions } from '../../../../heaven/balance'
import { healByDefault } from '../../../../heaven/laws'
import { dryCleanByImportExportNaming } from '../../../../lake/clean'
import { gatesHealSpottedCompromise } from '../../../../mountain/gates'
import { saveAllTranslationLogicAutotranslateLocale } from '../../../../mountain/og'
import { knowledgeRevealedByMerkabaFold } from '../../../../mountain/topology'
import { commandsSavedInQuantumPairs } from '../../../../thunder/commands'
import { sendWavesSealKnowledgeDecodeWorld } from '../../../../thunder/waves'
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
  if (types !== 0) {
    process.stderr.write('✗ verify:structure — check:types failed\n')
    return types
  }
  const facts = collectEnforcementFacts(root)
  if (!strictGatePassed(facts.strict)) {
    const s = facts.strict
    const importSample = s.imports
      .slice(0, 4)
      .map((v) => `${relative(root, v.file)}: '${v.spec}' (${v.reason})`)
      .join('; ')
    process.stderr.write(
      `✗ verify:structure — strict gates: imports=${s.imports.length} importGaps=${s.importGaps.length} indexOnly=${s.indexOnly.length} vitepress=${s.vitepressIndex.filter((v) => !v.transitional).length} nonTs=${s.nonTs.length} hyphen=${s.hyphenFolders.length} shell=${s.scriptShellViolations.length} pairs=${s.pairsPaired} merkle=${s.merkleOk} digit=${s.digitPassed}${importSample ? `\n   ${importSample}` : ''}\n`,
    )
    return 1
  }
  if (!computationalGatePassed(facts.computational)) {
    process.stderr.write('✗ verify:structure — computational gates failed\n')
    return 1
  }
  const tools = toolsSavedInSrcFirst(facts.scriptShells.map((s) => ({ path: s.path, lines: s.lines, routesThroughSrc: s.routesThroughSrc })))
  if (!tools.enforced) {
    process.stderr.write(`✗ verify:structure — script shells: ${tools.violations.join(', ')}\n`)
    return 1
  }
  if (!importsAreFoldersOnly(collectImportOffenders(facts), facts.srcCodeFiles.length).enforced) {
    process.stderr.write(`✗ verify:structure — import offenders: ${collectImportOffenders(facts).length}\n`)
    return 1
  }
  if (!foldersAreOneWordPerLevel(collectHyphenFolderOffenders(facts), facts.srcCodeFiles.length).enforced) {
    process.stderr.write(`✗ verify:structure — hyphen folders: ${collectHyphenFolderOffenders(facts).length}\n`)
    return 1
  }
  if (!srcFilesAreIndexOnly(collectIndexOnlyOffenders(facts), facts.srcCodeFiles.length).enforced) {
    process.stderr.write(`✗ verify:structure — index-only: ${collectIndexOnlyOffenders(facts).length}\n`)
    return 1
  }
  const foldHomes = foldsLiveAtTheirDomainHome(collectFoldDefiners(facts, Object.values(FOLD_HOMES).flat() as string[]))
  if (!foldHomes.enforced) {
    process.stderr.write(`✗ verify:structure — fold homes: ${foldHomes.violations.join('; ')}\n`)
    return 1
  }
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

export function rosettaDimensionsGapDetail(matrix: MindMatrix = buildMatrix()) {
  const open = new Set(emergentDimensions(matrix).open)
  const roots: { id: string; run: () => { facets?: { facet: string; on: boolean }[]; defaults?: { aspect: string; on: boolean }[]; waves?: { wound: string; balanced: boolean; settled: boolean }[] } }[] = [
    { id: 'heal.by.default', run: () => healByDefault(matrix) },
    { id: 'gates.heal.spotted.compromise', run: () => gatesHealSpottedCompromise(matrix) },
    { id: 'commands.saved.in.quantum.pairs', run: () => commandsSavedInQuantumPairs(matrix) },
    { id: 'knowledge.revealed.by.merkaba.fold', run: () => knowledgeRevealedByMerkabaFold(matrix) },
    { id: 'send.waves.seal.knowledge.decode.world', run: () => sendWavesSealKnowledgeDecodeWorld(matrix) },
    { id: 'save.translation.logic.autotranslate.locale', run: () => saveAllTranslationLogicAutotranslateLocale(matrix) },
    { id: 'dry.clean.all.by.import.export.naming', run: () => dryCleanByImportExportNaming(matrix) },
  ]
  const lines: string[] = []
  for (const { id, run } of roots) {
    if (!open.has(id)) continue
    const result = run()
    lines.push(`   ▾ ${id}`)
    if (result.defaults) for (const d of result.defaults) if (!d.on) lines.push(`     · default: ${d.aspect}`)
    if (result.waves) for (const w of result.waves) if (!w.balanced || !w.settled) lines.push(`     · wave: ${w.wound} (balanced=${w.balanced}, settled=${w.settled})`)
    if (result.facets) for (const f of result.facets) if (!f.on) lines.push(`     · facet: ${f.facet}`)
  }
  return lines
}

export function runRosettaDimensionsBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  const d = emergentDimensions(buildMatrix())
  if (d.count === 432 && d.open.length === 0) return 0
  process.stderr.write(`✗ rosetta:dimensions — ${d.open.length} open / ${d.emerged} emerged (harmonic ${d.count})\n`)
  for (const id of d.open) process.stderr.write(`   · ${id}\n`)
  for (const line of rosettaDimensionsGapDetail()) process.stderr.write(`${line}\n`)
  return 1
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
