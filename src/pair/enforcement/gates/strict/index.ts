// One DRY strict gate snapshot — judges · audit; scan/snapshot in sub-barrels.
import type { Finding } from '..'
import {
  MONOLITH_FILE_BYTES,
  MONOLITH_FILE_LAW,
  scanFileSizeOffenders,
  monolithFileGapDetail,
  stripComments,
  computeStrictGateSnapshot,
  strictGatePassed,
  scanVitepressIndex,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender,
} from './scan'

export {
  MONOLITH_FILE_BYTES,
  MONOLITH_FILE_LAW,
  scanFileSizeOffenders,
  monolithFileGapDetail,
  stripComments,
  type StrictImportOffender,
  type StrictIndexOffender,
  type StrictVitepressIndexOffender,
  type StrictHyphenOffender,
  type StrictNonTsOffender,
  type StrictImportGapOffender,
  type StrictGateSnapshot,
} from './scan'

export { computeStrictGateSnapshot, strictGatePassed, scanVitepressIndex, scanOneMathOffenders, ONE_MATH_LAW, type OneMathOffender } from './scan'
export { scanHandLists, handListMirrors, type HandList, type HandListMirror } from './scan'
export { scanAppHtml, appAuditSummary, type AppPageAudit } from './scan'

export const FOLD_HOMES: Record<string, readonly string[]> = {
  'src/quantum/water/cache': ['quantumHalvesTheHashDoublingRestoresIt', 'matrixIsTenBitMByteSixtyFour'],
}

export function foldsLiveAtTheirDomainHome(definers: readonly { name: string; files: readonly string[] }[] = []) {
  const homeOf = new Map<string, string>()
  for (const [home, names] of Object.entries(FOLD_HOMES)) for (const name of names) homeOf.set(name, `${home}/index.ts`)
  const violations: string[] = []
  for (const { name, files } of definers) {
    const home = homeOf.get(name)
    if (!home) continue
    const foreign = files.filter((file) => file !== home)
    if (foreign.length) violations.push(`${name} foreign ${foreign.join(', ')} home ${home}`)
    if (!files.includes(home)) violations.push(`${name} missing home ${home}`)
  }
  return { enforced: violations.length === 0, declared: Object.values(FOLD_HOMES).flat().length, violations, count: violations.length }
}

export function toolsSavedInSrcFirst(scripts: readonly { path: string; lines: number; routesThroughSrc: boolean }[] = []) {
  const violations = scripts.filter((s) => !s.routesThroughSrc || s.lines > (9 * 8)).map((s) => s.path)
  return { enforced: scripts.length > 0 && violations.length === 0, count: scripts.length, violations }
}

export function importsAreFoldersOnly(offenders: readonly { file: string; spec: string; reason: string }[] = [], scanned = 0) {
  return { enforced: offenders.length === 0, count: offenders.length, offenders: [...offenders], scanned }
}

export function mathIsOneSource(offenders: readonly { file: string; spec: string; reason: string }[] = [], scanned = 0) {
  return { enforced: offenders.length === 0, count: offenders.length, offenders: [...offenders], scanned }
}

export function foldersAreOneWordPerLevel(offenders: readonly { path: string; segment: string; reason: string }[] = [], scanned = 0) {
  return { enforced: offenders.length === 0, count: offenders.length, offenders: offenders.map((o) => o.path), scanned }
}

export function glagoliticLabelsAreComputed(offenders: readonly { file: string; reason: string }[] = [], scanned = 0) {
  return { enforced: offenders.length === 0, count: offenders.length, offenders: [...offenders], scanned }
}

export function unexpectedSituationsRefactorTools(facts: { untrackedSrcFiles?: readonly string[] } = {}) {
  const anomalies = (facts.untrackedSrcFiles ?? []).map((f) => `untracked ${f}`)
  return { clear: anomalies.length === 0, anomalies }
}

export function srcFilesAreIndexOnly(offenders: readonly { file: string; reason: string }[] = [], scanned = 0) {
  return { enforced: offenders.length === 0, count: offenders.length, offenders: offenders.map((o) => o.file), scanned }
}

function pushStrictOffenders(
  findings: Finding[],
  kind: string,
  harmonic: string,
  offenders: readonly { file?: string; spec?: string; path?: string; reason: string }[],
  cap = (6 * 2),
) {
  for (const v of offenders.slice(0, cap)) {
    const where = v.file ?? v.path ?? v.spec ?? ''
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind,
      harmonic,
      detail: `${where}: ${v.reason}${v.spec ? ` ('${v.spec}')` : ''}`,
    })
  }
  if (offenders.length > cap) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind,
      harmonic,
      detail: `${offenders.length - cap} more ${kind} offender(s) — full list in facts.strict`,
    })
  }
}

/** Leaf checks — gate · cross · fold · weave pipeline; barrel law delegated to weave strictTrees. */
export function auditStrictGates(facts: { root: string; strict: StrictGateSnapshot }): {
  findings: Finding[]
  report: string[]
  receipt: string
  passed: boolean
} {
  const s = facts.strict
  const findings: Finding[] = []
  for (const v of s.scriptShellViolations.slice(0, (5 * 4))) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'script-shell',
      harmonic: 'pipeline',
      detail: v,
    })
  }
  if (s.scriptShellViolations.length > (5 * 4)) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'script-shell',
      harmonic: 'pipeline',
      detail: `${s.scriptShellViolations.length - (5 * 4)} more script-shell violation(s) — full list in facts.strict`,
    })
  }
  if (!s.pairsPaired) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'quantum-pair',
      harmonic: 'pipeline',
      detail: 'gate pairs not saved in quantum pairs (gate/unite · scan/fold · digit/gate)',
    })
  }
  if (!s.merkleOk) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'merkle',
      harmonic: 'pipeline',
      detail: 'src merkle not sealed (expected 64 hex chars)',
    })
  }
  if (!s.digitPassed) {
    findings.push({
      wave: 'gate',
      severity: 'error',
      kind: 'digit-math',
      harmonic: 'digit',
      detail: 'vortex digit gate sequence failed — src/0/{digit}/index.ts digitFold invalid',
    })
  }
  pushStrictOffenders(findings, 'import-gap', 'folder', s.importGaps)
  pushStrictOffenders(findings, 'one-math', 'math', s.oneMath)
  pushStrictOffenders(findings, 'index-only', 'folder', s.indexOnly)
  for (const v of s.fileSize.slice(0, (6 * 2))) {
    findings.push({
      wave: 'gate',
      severity: 'warn',
      kind: 'monolith-file',
      harmonic: 'compression',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  if (s.fileSize.length > (6 * 2)) {
    findings.push({
      wave: 'gate',
      severity: 'warn',
      kind: 'monolith-file',
      harmonic: 'compression',
      detail: `${s.fileSize.length - (6 * 2)} more monolith-file ratchet target(s) — full list in facts.strict`,
    })
  }
  pushStrictOffenders(findings, 'non-index-code', 'folder', s.nonTs)
  pushStrictOffenders(findings, 'vitepress-index', 'config', s.vitepressIndex.filter((v) => !v.transitional))
  for (const v of s.vitepressIndex.filter((t) => t.transitional)) {
    findings.push({
      wave: 'gate',
      severity: 'warn',
      kind: 'vitepress-thin-mount',
      harmonic: 'config',
      detail: `${v.file}: ${v.reason}`,
    })
  }
  const passed = strictGatePassed(s)
  const report: string[] = []
  if (passed) {
    report.push(
      `Strict gates (DRY) — pipeline only: script shells · pairs · merkle · digit math — 0 failures, receipt ${s.receipt}. Barrel law audited by weave strictTrees.`,
    )
  } else {
    report.push(
      `Strict gates FAILED — shell:${s.scriptShellViolations.length} pairs:${s.pairsPaired} merkle:${s.merkleOk} digit:${s.digitPassed} receipt ${s.receipt}.`,
    )
  }
  return { findings, report, receipt: s.receipt, passed }
}
