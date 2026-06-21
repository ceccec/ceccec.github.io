// Enforcement trinity runner — the INTELLIGENT cross-audit: cross · fold · weave run as ONE pass.
// Materialize the dist once, then audit every wave WITHOUT bailing at the first failure, so a single
// build surfaces the complete finding set across all three waves (no fix-rerun-fix grind). The union is
// cross-checked for its shared root — the most-implicated harmonic, ranked — the way the model's own
// crossAudit counter-rotates its 6×7/7×6 vortices to localise a gap. The audit itself is sealed to a
// content-addressed dist/audit.json, so the verdict is a verifiable, diffable artifact like everything else.
import type { Plugin } from 'vite'
import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { merkleFold, toUuid } from '../../0'
import { auditCross, materializeCross } from './cross'
import { auditFold } from './fold'
import { auditWeave } from './weave'

/** One normalised finding from any wave. `harmonic` is the correlation key — the subsystem/band it belongs to. */
export type Finding = {
  wave: 'cross' | 'fold' | 'weave'
  severity: 'error' | 'warn'
  kind: string
  harmonic: string
  detail: string
}

/** A correlated root: one harmonic, how many findings name it, and which waves caught them. */
export type AuditRoot = { harmonic: string; count: number; waves: Finding['wave'][] }

/**
 * Cross-check the union of findings for its shared root — two orderings (by wave, then regrouped by
 * subsystem) that agree only when clean. Ranks the most-implicated harmonic so you attack the root,
 * not the leaves, and seals the whole verdict to one content-addressed receipt.
 */
export function intelligentAudit(findings: Finding[]) {
  const errors = findings.filter((finding) => finding.severity === 'error')
  const warns = findings.filter((finding) => finding.severity === 'warn')
  const byRoot = new Map<string, Finding[]>()
  for (const finding of errors) {
    const group = byRoot.get(finding.harmonic) ?? []
    group.push(finding)
    byRoot.set(finding.harmonic, group)
  }
  const roots: AuditRoot[] = [...byRoot.entries()]
    .map(([harmonic, group]) => ({
      harmonic,
      count: group.length,
      waves: [...new Set(group.map((finding) => finding.wave))] as Finding['wave'][],
    }))
    .sort((a, b) => b.count - a.count || a.harmonic.localeCompare(b.harmonic))
  const receipt = findings.length
    ? merkleFold(findings.map((finding) => toUuid(`${finding.wave}:${finding.severity}:${finding.kind}:${finding.detail}`)))
    : toUuid('cross-audit:clean')
  return { failed: errors.length > 0, errors, warns, roots, receipt, waveCount: 3 }
}

function sealAudit(root: string, audit: ReturnType<typeof intelligentAudit>): void {
  const out = join(root, '.vitepress', 'dist')
  if (!existsSync(out)) return
  const payload = {
    generatedAt: new Date().toISOString(),
    root: audit.receipt,
    failed: audit.failed,
    waveCount: audit.waveCount,
    errorCount: audit.errors.length,
    warnCount: audit.warns.length,
    roots: audit.roots,
    findings: [...audit.errors, ...audit.warns],
  }
  writeFileSync(join(out, 'audit.json'), JSON.stringify(payload, null, 2))
}

/**
 * Run cross · fold · weave as ONE intelligent cross-audit. Materialize the dist, audit every wave
 * (no early exit), correlate the findings to their shared root, seal the verdict, and return the code.
 */
export function runEnforcementTrinity(root: string): number {
  const { count } = materializeCross(root) // the writes the fold/weave audits read: README, dist artifacts, digit index
  const cross = auditCross(root, count)
  const fold = auditFold()
  const weave = auditWeave(root)
  const audit = intelligentAudit([...cross.findings, ...fold.findings, ...weave.findings])

  console.log('Intelligent cross-audit — cross · fold · weave, one pass:')
  if (audit.failed) {
    console.error(`  ✗ ${audit.errors.length} finding(s) across the trinity (every wave audited — not stopped at the first):`)
    for (const finding of audit.errors) console.error(`    [${finding.wave}/${finding.harmonic}/${finding.kind}] ${finding.detail}`)
    if (audit.warns.length) {
      console.warn(`  ⚠ ${audit.warns.length} ratchet target(s) (non-blocking):`)
      for (const finding of audit.warns) console.warn(`    [${finding.wave}/${finding.harmonic}/${finding.kind}] ${finding.detail}`)
    }
    console.error('  Root correlation (attack the root, not the leaves):')
    for (const correlated of audit.roots) console.error(`    ${correlated.harmonic} — ${correlated.count} finding(s) via ${correlated.waves.join(' · ')}`)
    sealAudit(root, audit)
    console.error(`Enforcement trinity FAILED — audit sealed ${audit.receipt}. Trace the top root before grinding leaves.`)
    return 1
  }
  for (const line of [...cross.report, ...fold.report, ...weave.report]) console.log(line)
  if (audit.warns.length) {
    console.warn(`  ⚠ ${audit.warns.length} ratchet target(s) (non-blocking):`)
    for (const finding of audit.warns) console.warn(`    [${finding.wave}/${finding.harmonic}/${finding.kind}] ${finding.detail}`)
  }
  sealAudit(root, audit)
  console.log(`Enforcement trinity complete: cross · fold · weave — 0 findings, audit sealed ${audit.receipt}.`)
  return 0
}

export { materializeCross, auditCross, runCross } from './cross'
export { auditFold, runFold } from './fold'
export { auditWeave, runWeave } from './weave'

// Each index is a quantum VitePress router: this enforcement index routes the BUILD itself — its buildEnd
// runs the content-addressed cross-audit (cross · fold · weave in one pass) after VitePress writes dist,
// throwing to fail the build if the audit finds drift. One folder, one index, its own VitePress plugin —
// gathered by srcFolderPlugins.
export function vitePlugin(projectRoot: string): Plugin {
  return {
    name: 'double-torus:enforcement',
    buildEnd() {
      const code = runEnforcementTrinity(projectRoot)
      if (code !== 0) throw new Error(`Enforcement trinity failed (code ${code}).`)
    },
  }
}
