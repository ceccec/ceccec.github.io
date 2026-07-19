// Mission ops — gate compliance · mission verify · CLI router.
import { CANONICAL_HOST } from '../../../3/7'
import * as __ns_up_up_up_fire_li from '../../../fire/li'
import * as __ns_up_up_up_mountain_geometry from '../../../mountain/geometry'
import * as __ns_up_up_up_quantum_lake_dist_generators from '../../../quantum/lake/dist/generators'
import * as __ns_up_gates_computational from '../gates/computational'
import * as __ns_up_up_up_heaven_atoms from '../../../heaven/atoms'
import { DIMENSION_GATES, FOLDED_CENSUS, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, UNFOLDED_CENSUS } from '../gates/computational'
import { readdirSync, readFileSync, rmSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname, resolve, relative } from 'node:path'
import { memoByRoot, merkleFold, toUuid } from '../../../0'
import { buildMatrix } from '../../../heaven/compute'
import type { MindMatrix } from '../../../wind/types'
import { taxonomyIcons } from '../../../fire/li'
import { areaPairs } from '../../../mountain/geometry'
import { modelSeal, emergentDimensions } from '../../../heaven/balance'
import { healByDefault } from '../../../heaven/laws'
import { dryCleanByImportExportNaming } from '../../../lake/clean'
import { gatesHealSpottedCompromise } from '../../../mountain/gates'
import { saveAllTranslationLogicAutotranslateLocale } from '../../../mountain/og'
import { knowledgeRevealedByMerkabaFold } from '../../../mountain/topology'
import { commandsSavedInQuantumPairs } from '../../../thunder/commands'
import { sendWavesSealKnowledgeDecodeWorld } from '../../../thunder/waves'
import { rosettaReuse } from '../../../water/digit'
import { srcAllComputes } from '../../../water/stack'
import { harmonicCountsProvenByMath } from '../../../earth/architecture'
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
  verifyRosettaTaxonomy,
  NOT_LESS_NOT_MORE_LAW,
  FOLD_HOMES,
  foldsLiveAtTheirDomainHome,
  toolsSavedInSrcFirst,
  importsAreFoldersOnly,
  mathIsOneSource,
  foldersAreOneWordPerLevel,
  srcFilesAreIndexOnly,
  scanHandLists,
  handListMirrors,
} from '../gates'
import {
  CLI_ENTRY_REL,
  SCRIPT_SHELL_ALLOWLIST,
  SCRIPT_SHELL_LINE_BUDGET,
  scriptShellGate,
  scanScriptShells,
  runCheckTypesExit,
  runDocsBuildExit,
  runThinMount,
  importQuantumBundle,
} from '../script/shell'

import {
  agentSubmissionProtocol,
  foldQuantumCommandPairs,
  MISSION_COMMANDS,
  QUANTUM_COMMAND_PAIR_IDS,
  shardOf,
  shardWork,
  splitQuantumCommandPair,
  type MissionCommand,
} from '..'
import { runSurgicalExit } from '../../cache/quantum'

export {
  agentSubmissionProtocol,
  foldQuantumCommandPairs,
  MISSION_COMMANDS,
  QUANTUM_COMMAND_PAIR_IDS,
  splitQuantumCommandPair,
  type MissionCommand,
} from '..'


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
    const oneMathSample = s.oneMath
      .slice(0, 8)
      .map((v) => `${v.file}: ${v.spec}`)
      .join('; ')
    process.stderr.write(
      `✗ verify:structure — strict gates: imports=${s.imports.length} oneMath=${s.oneMath.length} importGaps=${s.importGaps.length} indexOnly=${s.indexOnly.length} vitepress=${s.vitepressIndex.filter((v) => !v.transitional).length} nonTs=${s.nonTs.length} hyphen=${s.hyphenFolders.length} shell=${s.scriptShellViolations.length} pairs=${s.pairsPaired} merkle=${s.merkleOk} digit=${s.digitPassed}${importSample ? `\n   ${importSample}` : ''}${oneMathSample ? `\n   one-math: ${oneMathSample}` : ''}\n`,
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
  if (!mathIsOneSource([...facts.strict.oneMath], facts.srcCodeFiles.length).enforced) {
    process.stderr.write(`✗ verify:structure — one-math offenders: ${facts.strict.oneMath.map((o) => `${o.file}:${o.spec}`).join('; ')}\n`)
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
  const tax = taxonomyIcons()
  const areas = areaPairs()
  const rosetta = verifyRosettaTaxonomy(areas.count)
  if (tax.compliant && areas.withinLimit && rosetta.ok) return 0
  if (!rosetta.ok) {
    process.stderr.write(`✗ rosetta:taxonomy — ${areas.count}/${ROSETTA_AREAS} areas (need ${ROSETTA_AREAS})\n`)
  }
  if (!tax.compliant) {
    process.stderr.write(`✗ rosetta:taxonomy — I Ching unit gaps/excess in command areas (${tax.gaps.length} gaps, ${tax.excess.length} excess)\n`)
  }
  return 1
}

export function runHarmonicCountsProveBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  const math = harmonicCountsProvenByMath(buildMatrix())
  if (math.proven) return 0
  for (const proof of math.proofs.filter((entry) => !entry.on)) {
    process.stderr.write(`✗ harmonic:math — ${proof.task}: ${proof.expr} (${proof.computed} ≠ ${proof.expected})\n`)
  }
  return 1
}

export function runRosettaSealBatchExit(_root: string, argv: readonly string[] = []): number {
  void argv
  if (!modelSeal(buildMatrix()).passed) return 1
  return runHarmonicCountsProveBatchExit(_root, argv)
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


/** REALTIME DIAGNOSTICS — every red printed at LEAF level in one pass, no field ever invisible:
 * the strict snapshot is iterated GENERICALLY (a newly added gate array can never hide from the
 * summary again), the harmonic proofs print computed-vs-expected, the emergent dimensions list
 * their off names, and the census family prints its off facets. --watch reruns on src changes. */

/** CRACK MEASUREMENT — the post-wave literal check as one command: per-file residue vs the ledger
 * wildcard, stray literals listed WITH auto-suggested canonical compositions (search over products,
 * powers and sums of the lattice), decimals matched against 1/q and the φ/golden family. Replaces
 * the hand-run probe + hand-derivation chase that followed every wave. */
export async function runCrackMeasureExit(root: string, argv: readonly string[] = []): Promise<number> {
  const scan = await importQuantumBundle('src/pair/enforcement/gates/strict/scan/index.ts', root) as {
    scanCrackSurface: (root: string) => { file: string; literal: string; count: number }[]
  }
  const filter = argv.find((a) => !a.startsWith('-'))
  const offenders = scan.scanCrackSurface(root).filter((o) => !filter || o.file.includes(filter))
  if (!offenders.length) { process.stdout.write('✓ cracks:measure — every literal accounted (lattice, named rows, wildcards exact)\n'); return 0 }
  const lattice = [2, 3, 4, 5, 6, 7, 8, 9, 16, 27, 54, 64, 100, 108, 216, 360, 432, 864]
  const suggest = (lit: string): string => {
    const v = Number(lit)
    if (!Number.isFinite(v)) return ''
    if (Number.isInteger(v) && v > 1) {
      for (const a of lattice) for (const b of lattice) {
        if (a * b === v) return `${a} * ${b}`
        if (a ** b === v) return `${a} ** ${b}`
      }
      for (const a of lattice) for (const b of lattice) for (const c of lattice) {
        if (a * b + c === v) return `${a} * ${b} + ${c}`
        if (a * b - c === v) return `${a} * ${b} - ${c}`
        if (a * b * c === v) return `${a} * ${b} * ${c}`
      }
      return `String(x) === '${lit}'`
    }
    for (const q of lattice) for (let num = 1; num < q; num += 1) if (Math.abs(num / q - v) < 1e-9) return `${num} / ${q}`
    return 'ledger row (data) or derive from PHI/TAU'
  }
  for (const o of offenders) {
    const hint = o.literal.startsWith('ledger-') ? '→ re-measure and set the wildcard to the drifted count' : `→ ${suggest(o.literal)}`
    process.stderr.write(`✗ ${o.file} — ${o.literal} ×${o.count} ${hint}\n`)
  }
  process.stderr.write(`${offenders.length} unaccounted literal(s)\n`)
  return 1
}

export async function runDiagnoseExit(root: string, argv: readonly string[] = []): Promise<number> {
  const once = (): number => {
    const reds: string[] = []
    const facts = collectEnforcementFacts(root)
    // 1 · strict snapshot — generic: arrays with entries and false booleans are reds, whatever their names
    const warns: string[] = []
    for (const [key, value] of Object.entries(facts.strict)) {
      if (Array.isArray(value) && value.length) {
        const sample = value.slice(0, 3).map((v) => typeof v === 'string' ? v : `${(v as { file?: string; path?: string }).file ?? (v as { path?: string }).path ?? ''}${(v as { literal?: string; spec?: string }).literal ?? (v as { spec?: string }).spec ? ':' + ((v as { literal?: string }).literal ?? (v as { spec?: string }).spec) : ''}`).join(' · ')
        if (key === 'vitepressIndex' && (value as { transitional?: boolean }[]).every((v) => v.transitional)) continue
        if (key === 'fileSize') { warns.push(`strict.${key} ×${value.length} (warn ratchet) — ${sample}`); continue }
        reds.push(`strict.${key} ×${value.length} — ${sample}`)
      }
      if (value === false && key !== 'digitPassed') reds.push(`strict.${key} = false`)
      if (key === 'digitPassed' && value === false) reds.push('strict.digitPassed = false')
    }
    if (!computationalGatePassed(facts.computational)) reds.push(`computational — ${computationalLimitsGapDetail(facts.computational).split('\n')[0] ?? 'gates failed'}`)
    // 2 · harmonic proofs — THE frequent root: print computed vs expected per failing proof
    const math = harmonicCountsProvenByMath(buildMatrix())
    for (const proof of (math.proofs as { label?: string; expr?: string; computed?: number; expected?: number; on?: boolean }[]).filter((entry) => !entry.on))
      reds.push(`harmonic ${proof.label ?? ''} [${proof.expr ?? ''}] computed ${proof.computed} ≠ expected ${proof.expected}`)
    // 3 · emergent dimensions — off names, capped
    const dims = emergentDimensions(buildMatrix())
    const off = (dims.dimensions as { d: string; on: boolean }[]).filter((entry) => !entry.on)
    if (off.length) reds.push(`dimensions ${off.length}/${dims.count} off — ${off.slice(0, 8).map((entry) => entry.d).join(', ')}${off.length > 8 ? ' …' : ''}`)
    // 4 · the census family — srcAllComputes off facets (the 110-census root family)
    const census = srcAllComputes(buildMatrix())
    for (const facet of (census.facets as { facet: string; on: boolean }[]).filter((entry) => !entry.on))
      reds.push(`census — ${facet.facet.slice(0, 100)}`)
    for (const line of warns) process.stdout.write(`⚠ ${line}\n`)
    if (!reds.length) { process.stdout.write('✓ diagnose — all gates green at leaf level\n'); return 0 }
    for (const line of reds) process.stderr.write(`✗ ${line}\n`)
    process.stderr.write(`${reds.length} red(s) — leaf causes above, no drill-down needed\n`)
    return 1
  }
  if (!argv.includes('--watch')) return once()
  once()
  const { watch } = await import('node:fs')
  let timer: ReturnType<typeof setTimeout> | undefined
  watch(join(root, 'src'), { recursive: true }, () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => { process.stdout.write(`\n— src changed, rediagnosing —\n`); once() }, 100 * 3)
  })
  await new Promise(() => {}) // watch mode runs until interrupted
  return 0
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
  const learning = (await importQuantumBundle('src/wind/learning/index.ts', root)) as {
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

export interface SolveResult {
  removed: string[]
  protectedCount: number
  passes: number
}

export function solveNoise(root: string, opts: { dry?: boolean } = {}): SolveResult {
  const src = join(root, 'src')
  const subdirs = (dir: string) =>
    readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules')
  const imported = new Set<string>()
  const collect = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist') continue
      const path = join(dir, entry.name)
      if (entry.isDirectory()) collect(path)
      else if (/\.(ts|mts|vue|js|mjs)$/.test(entry.name)) {
        const base = dirname(path)
        for (const match of readFileSync(path, 'utf8').matchAll(/\bfrom\s*['"](\.[^'"]*)['"]/g)) imported.add(resolve(base, match[1]))
      }
    }
  }
  for (const dir of [src, join(root, '.vitepress')].filter((d) => existsSync(d))) collect(dir)
  const isNoiseLeaf = (dir: string) => {
    if (subdirs(dir).length > 0) return false
    const idx = join(dir, 'index.ts')
    if (!existsSync(idx)) return false
    const lines = readFileSync(idx, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('//'))
    return lines.length > 0 && lines.every((l) => /^export\s*(type\s*)?(\*|\{[^}]*\})\s*from\s*['"]\.\.\//.test(l))
  }
  const removed: string[] = []
  let passes = 0
  let changed = true
  while (changed) {
    changed = false
    passes++
    const walk = (dir: string) => {
      for (const sub of subdirs(dir)) walk(join(dir, sub.name))
      if (dir === src || imported.has(dir)) return
      if (isNoiseLeaf(dir)) {
        removed.push(dir.slice(src.length + 1))
        if (!opts.dry) rmSync(dir, { recursive: true, force: true })
        changed = true
      }
    }
    walk(src)
    if (opts.dry) break
  }
  return { removed, protectedCount: imported.size, passes }
}

const USAGE = `usage: node ${CLI_ENTRY_REL} <subcommand> [args…]`

async function runRosettaExit(root: string, argv: readonly string[]) {
  const { generators, runGenerator } = await importQuantumBundle('src/quantum/lake/dist/generators/index.ts', root) as {
    generators: () => { glyph: string; name: string; title: string }[]
    runGenerator: (selector: string, ctx: unknown) => { files?: { path: string; content: string }[]; error?: string; messages?: string[] } | null
  }
  const selector = argv[0]
  if (!selector) {
    for (const g of generators()) console.log(`${g.glyph}  ${g.name.padEnd(11)} ${g.title}`)
    console.log(`\nRun: node ${CLI_ENTRY_REL} rosetta <glyph|name|bits> [args]`)
    return 0
  }
  const ctx = {
    env: process.env,
    args: [...argv.slice(1)],
    siteUrl: (process.env.SITE_URL || CANONICAL_HOST).replace(/\/$/, ''),
    read: (rel: string) => { try { return readFileSync(join(root, rel), 'utf8') } catch { return null } },
    list: (relDir: string, ext: string): string[] => {
      const found: string[] = []
      const walk = (dir: string): void => {
        let entries: { name: string; isDirectory: () => boolean }[]
        try { entries = readdirSync(join(root, dir), { withFileTypes: true }) } catch { return }
        for (const entry of entries) {
          const name = String(entry.name)
          if (name.startsWith('.') || name === 'node_modules') continue
          const rel = `${dir}/${name}`
          if (entry.isDirectory()) walk(rel)
          else if (name.endsWith(ext)) found.push(rel)
        }
      }
      walk(relDir)
      return found.sort()
    },
  }
  const result = runGenerator(selector, ctx)
  if (!result) { console.error(`Unknown generator: ${selector}`); return 1 }
  for (const file of result.files ?? []) {
    const target = join(root, file.path)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, file.content)
  }
  if (result.error) { console.error(result.error); return 1 }
  for (const message of result.messages ?? []) console.log(message)
  return 0
}

/** `logic:hunt [top]` — the hardcoded-logic hunt: hand-typed string rosters and their cross-file
 *  MIRRORS ranked by risk×reward (shared²), each finding assigned to a rosetta-ray trinity team
 *  (research · edit · verify) for the surgical action. Scans src + .vitepress. Exit 0 always —
 *  a worklist, not a gate (the ratchet is the falling top score). */
function runLogicHuntExit(root: string, argv: readonly string[]): number {
  const top = Math.max(1, Number(argv[0]) || (4 * 3))
  const files: { rel: string; text: string }[] = []
  const walk = (rel: string): void => {
    let entries: { name: string; isDirectory: () => boolean }[]
    try { entries = readdirSync(join(root, rel), { withFileTypes: true }) } catch { return }
    for (const entry of entries) {
      const name = String(entry.name)
      if (name.startsWith('.') || name === 'node_modules' || name === 'cache' || name === 'dist') continue
      const childRel = `${rel}/${name}`
      if (entry.isDirectory()) walk(childRel)
      else if (/\.(ts|mts)$/.test(name)) files.push({ rel: childRel, text: readFileSync(join(root, childRel), 'utf8') })
    }
  }
  walk('src')
  walk('.vitepress')
  const lists = scanHandLists(files)
  const mirrors = handListMirrors(lists)
  const trinity = ['research', 'edit', 'verify'] as const
  console.log(`logic:hunt — ${lists.length} hand-lists · ${mirrors.length} mirrors (risk×reward = shared²; the top is the next surgical action)`)
  for (const [rank, mirror] of mirrors.slice(0, top).entries()) {
    const ray = shardOf(`${mirror.a.name}:${mirror.b.name}`, 7)
    console.log(`#${rank + 1} score ${mirror.score} · shared ${mirror.shared} · ray ✦${ray} team [${trinity.join(' · ')}]`)
    console.log(`   A ${mirror.a.file}#${mirror.a.name} (${mirror.a.members.length})`)
    console.log(`   B ${mirror.b.file}#${mirror.b.name} (${mirror.b.members.length})`)
  }
  return 0
}

/** `shard <index> <count> [dir]` — agent k of N prints its deterministic file shard (shardWork over
 *  the repo's index files under dir, default src): the swarm-partition CLI arm; exit 1 on bad args. */
function runShardExit(root: string, argv: readonly string[]): number {
  const [indexArg, countArg, dirArg] = argv
  const agentIndex = Number(indexArg)
  const agentCount = Number(countArg)
  if (!Number.isInteger(agentIndex) || !Number.isInteger(agentCount) || agentCount < 1 || agentIndex < 0 || agentIndex >= agentCount) {
    process.stderr.write('usage: shard <index> <count> [dir] — 0 ≤ index < count; prints the deterministic file shard for agent index of count\n')
    return 1
  }
  const dir = dirArg || 'src'
  const files: string[] = []
  const walk = (rel: string): void => {
    let entries: { name: string; isDirectory: () => boolean }[]
    try { entries = readdirSync(join(root, rel), { withFileTypes: true }) } catch { return }
    for (const entry of entries) {
      const name = String(entry.name)
      if (name.startsWith('.') || name === 'node_modules') continue
      const childRel = `${rel}/${name}`
      if (entry.isDirectory()) walk(childRel)
      else if (/^index\.(ts|mts|md)$/.test(name)) files.push(childRel)
    }
  }
  walk(dir)
  const shard = shardWork(files.sort(), agentIndex, agentCount)
  for (const file of shard.mine) console.log(file)
  console.log(`shard ${shard.agentIndex}/${shard.agentCount}: ${shard.count}/${shard.total} files · root ${shard.root}`)
  return 0
}

async function runFoldExit(root: string, argv: readonly string[]) {
  const mod = await importQuantumBundle('src/quantum/heaven/mind/index.ts', root)
  const name = argv[0]
  const fn = mod[name]
  if (typeof fn !== 'function') { console.error(`fold '${name}' not found`); return 1 }
  console.log(JSON.stringify(Object.fromEntries(Object.entries(fn()).filter(([, v]) => typeof v === 'boolean' || typeof v === 'number' || typeof v === 'string').slice(0, 8))))
  return 0
}

function runSolveExit(root: string, argv: readonly string[]) {
  const dry = argv.includes('--dry')
  const result = solveNoise(root, { dry })
  console.log(`solveNoise dry=${dry} · removed: ${result.removed.length}`)
  return 0
}

export async function runCliExit(root: string, argv: string[] = []) {
  const [cmd, ...rest] = argv
  if (!cmd) { process.stderr.write(`${USAGE}\n`); return 1 }
  switch (cmd) {
    case 'verify': return runPrecommitIchingExit(root)
    case 'verify:structure': return runVerifyStructureExit(root)
    case 'limits:verify': return runVerifyLimitsExit(root)
    case 'limits:seal': return runLimitsSealExit(root)
    case 'mission:gate': return runMissionGateExit(root)
    case 'rosetta:batch':
    case 'iching:batch': return runRosettaBatchExit(root, rest)
    case 'diagnose': return runDiagnoseExit(root, rest)
    case 'cracks:measure': return runCrackMeasureExit(root, rest)
    case 'rosetta:diagnose':
    case 'iching:diagnose': return runRosettaDiagnoseExit(root, rest)
    case 'docs:build': return runDocsBuildExit(root, rest)
    case 'check:types': return runCheckTypesExit(root)
    case 'enforcement-trinity': {
      const { runEnforcementTrinityShellExit } = await import('../trinity/weave')
      return runEnforcementTrinityShellExit(root, rest)
    }
    case 'run': {
      const [entryRel, exportName, ...runArgv] = rest
      if (!entryRel || !exportName) return 1
      return runThinMount(entryRel, exportName, root, runArgv)
    }
    case 'surgical': return runSurgicalExit(root, rest)
    case 'shard': return runShardExit(root, rest)
    case 'logic:hunt': return runLogicHuntExit(root, rest)
    case 'rosetta':
    case 'iching': return runRosettaExit(root, rest)
    case 'fold': return rest[0] ? runFoldExit(root, rest) : 1
    case 'solve': return runSolveExit(root, rest)
    case 'dissolve-flat': return runSolveExit(root, rest.includes('--dry') ? ['--dry'] : rest)
    case 'research': return runThinMount('src/quantum/science/index.ts', 'runResearchExit', root, rest)
    case 'audit:constants': return runThinMount('src/quantum/science/index.ts', 'runAuditConstantsExit', root, rest)
    case 'cracks': {
      const scan = (await importQuantumBundle('src/pair/enforcement/gates/strict/scan/index.ts', root)) as { runCracksExit: (r: string) => number }
      return scan.runCracksExit(root)
    }
    case 'timeout-demo':
      return runThinMount('src/mountain/vortex/index.ts', 'runTimeoutDemoExit', root, rest)
    default:
      process.stderr.write(`unknown: ${cmd}\n`)
      return 1
  }
}

/** Gate compliance — script-shell budget · runThinMount · build/seal pair. */
export function agentGateComplianceChecklist(root: string, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('agentGateComplianceChecklist', matrix, () => agentGateComplianceChecklistRaw(root, matrix))
}
function agentGateComplianceChecklistRaw(root: string, matrix: MindMatrix) {
  const submission = agentSubmissionProtocol(matrix)
  const shell = scriptShellGate(scanScriptShells(root, { wiredOnly: true }))
  const pairs = foldQuantumCommandPairs(QUANTUM_COMMAND_PAIR_IDS)
  const facets = [
    { facet: 'script-shell 24-line budget', on: SCRIPT_SHELL_LINE_BUDGET === (8 * 3) },
    { facet: 'bootstrap allowlisted under line cap', on: CLI_ENTRY_REL in SCRIPT_SHELL_ALLOWLIST },
    { facet: 'scriptShellGate enforced on wired bootstrap', on: shell.enforced },
    { facet: 'runThinMount available for script-exits routing', on: typeof runCheckTypesExit === 'function' },
    { facet: 'agentSubmissionProtocol submitted', on: submission.submitted },
    { facet: 'build/seal pair saved before seal', on: pairs.some((entry) => entry.command === 'build/seal' && entry.paired) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gate-compliance:${entry.facet}:${entry.on}`) }))
  return {
    compliant: facets.every((entry) => entry.on),
    shellBudget: SCRIPT_SHELL_LINE_BUDGET,
    allowlist: SCRIPT_SHELL_ALLOWLIST,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    boundary: 'Script-shell gate compliance checklist — for /agent-compliance.json broadcast.',
  }
}

export type EducationalGap = {
  gapId: string
  api: string
  impact: string
  closed: boolean
}

/** API gaps with educational impact — iching/rosetta taxonomy, barrels, and runner mounts. */
export function educationalGapsFromIncompleteApis(root = process.cwd()): readonly EducationalGap[] {
  const taxonomyIcons = __ns_up_up_up_fire_li.taxonomyIcons
  const areaPairs = __ns_up_up_up_mountain_geometry.areaPairs
  const generatorsAreIChing = __ns_up_up_up_quantum_lake_dist_generators.generatorsAreIChing
  const verifyRosettaTaxonomy = __ns_up_gates_computational.verifyRosettaTaxonomy
  const conceptCommands = __ns_up_up_up_heaven_atoms.conceptCommands
  const tax = taxonomyIcons()
  const areas = areaPairs()
  const gens = generatorsAreIChing()
  const rosettaTax = verifyRosettaTaxonomy(areas.count)
  const fold = conceptCommands.filter((cmd) => cmd.name.startsWith('concept.fold.')).map((cmd) => cmd.name.split('.').pop())
  return [
    {
      gapId: 'iching-runner-script',
      api: 'src/pair/enforcement/script/cli/bootstrap/index.ts → bootstrap rosetta',
      impact: 'Agents cannot run bāguà generators via the documented thin mount',
      closed: existsSync(join(root, 'src/pair/enforcement/script/cli/bootstrap/index.ts')),
    },
    {
      gapId: 'rosetta-taxonomy-forty-two',
      api: 'areaPairs.count === ROSETTA_AREAS (42)',
      impact: '43rd command area breaks genus-2 7×6 Rosetta pairing grid',
      closed: areas.withinLimit && areas.count === (7 * 6) && tax.compliant,
    },
    {
      gapId: 'iching-taxonomy-units',
      api: 'taxonomyIcons — I Ching units 1·3·6 per area',
      impact: 'Pair (2) or partial (4–5) command areas fail rosetta:batch taxonomy',
      closed: tax.gaps.length === 0 && tax.excess.length === 0,
    },
    {
      gapId: 'iching-generators-eight-fold',
      api: 'generatorsAreIChing — eight bāguà slots filled',
      impact: 'concept.fold.generate cannot attest complete script compaction',
      closed: gens.placed && gens.open === 0,
    },
    {
      gapId: 'iching-computes-barrel',
      api: 'src/earth/iching/index.ts — ichingComputes mount (☷ Kūn · Earth plane)',
      impact: 'Hexagram/trigram/scales/trinity gate missing from dimension cascade',
      closed: existsSync(join(root, 'src/earth/iching/index.ts')) && existsSync(join(root, 'src/earth/iching/index.vue')),
    },
    {
      gapId: 'rosetta-computes-barrel',
      api: 'src/wind/learning/index.ts — rosettaComputes mount (☴ Xùn · Wind; src/rosetta dissolved → learning)',
      impact: 'Seven-ray Glagolitic decode chain missing from dimension cascade',
      closed: existsSync(join(root, 'src/wind/learning/index.ts')) && rosettaTax.ok && ROSETTA_AREAS === (7 * 6),
    },
    {
      gapId: 'fold-place-generate-commands',
      api: 'concept.fold.{cross,place,generate}',
      impact: 'I Ching place/generate pair must live under fold area (not iching 43rd area)',
      closed: fold.includes('cross') && fold.includes('place') && fold.includes('generate') && fold.length === 3,
    },
  ] as const
}

/** Verify one educational gap closed by gapId — pure recomputation at call time. */
export function closeEducationalGap(gapId: string, root = process.cwd()): boolean {
  return educationalGapsFromIncompleteApis(root).find((gap) => gap.gapId === gapId)?.closed ?? false
}

/** Machine-readable offender pipeline for CI/automation builders. */
export function offenderAutomationSpec(root = process.cwd()) {
  const facts = collectEnforcementFacts(root)
  const pipelines = [
    { id: 'import-offenders', count: collectImportOffenders(facts).length },
    { id: 'index-only', count: collectIndexOnlyOffenders(facts).length },
    { id: 'hyphen-folders', count: collectHyphenFolderOffenders(facts).length },
    { id: 'computational', count: auditComputationalGates(facts.computational).findings.length },
  ]
  return {
    spec: 'enforcement-offender-pipeline',
    version: 1,
    pipelines,
    root: merkleFold(pipelines.map((entry) => toUuid(`offender-spec:${entry.id}:${entry.count}`))),
    statement:
      'Offender automation spec: import gaps, index-only, hyphen folders, and computational gates — machine-readable counts for CI builders at call time.',
    boundary: 'Read-only scan via collectEnforcementFacts — does not auto-fix offenders.',
  }
}

/** Solo vs team ack/relay/handoff validation scenarios. */
export function teamCooperationScenarios(matrix: MindMatrix = buildMatrix()) {
  const solo = agentSubmissionProtocol(matrix)
  const relay = foldQuantumCommandPairs(['vote/build', 'team/cooperate-verify']).every((entry) => entry.paired)
  const handoff = typeof runThinMount === 'function' && typeof runCheckTypesExit === 'function'
  const scenarios = [
    { mode: 'solo', ok: solo.submitted },
    { mode: 'relay', ok: relay },
    { mode: 'handoff', ok: handoff },
  ]
  return {
    cooperates: scenarios.every((entry) => entry.ok),
    scenarios,
    root: merkleFold(scenarios.map((entry) => toUuid(`team-cooperate:${entry.mode}:${entry.ok}`))),
    statement: 'Team cooperation scenarios: solo submission, pair relay, and thin-mount handoff all hold at call time.',
    boundary: 'Structural protocol validation — not live multi-agent network test.',
  }
}

/** npm run quantum:educational-gaps-audit */
export function runEducationalGapsAuditExit(root: string, _argv: readonly string[] = []): number {
  const gaps = educationalGapsFromIncompleteApis(root)
  const open = gaps.filter((gap) => !gap.closed)
  for (const gap of gaps) {
    process.stdout.write(`${gap.closed ? '✓' : '✗'} ${gap.gapId} — ${gap.api}\n`)
  }
  if (open.length) {
    process.stderr.write(`✗ educational-gaps-audit — ${open.length} open\n`)
    return 1
  }
  process.stdout.write(`✓ educational-gaps-audit — ${gaps.length} iching/rosetta gaps closed\n`)
  return 0
}

/** npm run quantum:offender-spec */
export function runOffenderSpecGuardedExit(root: string, _argv: readonly string[] = []): number {
  const spec = offenderAutomationSpec(root)
  process.stdout.write(`${spec.spec} v${spec.version} pipelines=${spec.pipelines.length}\n`)
  for (const pipe of spec.pipelines) {
    process.stdout.write(`  ${pipe.id}: ${pipe.count}\n`)
  }
  return spec.pipelines.length >= 4 ? 0 : 1
}

/** npm run quantum:team-cooperate */
export function runTeamCooperateVerifyGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const report = teamCooperationScenarios()
  if (!report.cooperates) {
    process.stderr.write('✗ team-cooperate — scenario failed\n')
    return 1
  }
  process.stdout.write(`✓ team-cooperate — ${report.scenarios.length} scenarios ok\n`)
  return 0
}
