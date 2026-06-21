// Cross wave — dist artifacts + digit-index seal. First trinity wave.
// Split into materialize (the writes the fold/weave audits read) and audit (the findings), so the
// intelligent cross-audit can write once and then audit every wave in one pass. runCross is the
// standalone wrapper that does both and returns an exit code.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { computedDistFiles, readmeMarkdown } from '../../../lake/dist'
import type { Finding } from '..'

function verifyDigitIndex(root: string): string[] {
  const failures: string[] = []
  const artifactPath = join(root, '.vitepress', 'dist', 'digit-index.json')
  if (!existsSync(artifactPath)) return ['digit-index.json missing — run cross wave first']
  const artifact = JSON.parse(readFileSync(artifactPath, 'utf8'))
  for (const item of artifact.indices ?? []) {
    const folder = `${item.digit}/${item.reverseDigit}`
    const dualFraction = `${item.reverseDigit}/${item.digit}`
    if (item.folder !== folder) failures.push(`${item.index}: folder != digit/reverseDigit`)
    if (item.fraction !== folder) failures.push(`${item.index}: fraction != folder`)
    if (item.dualFraction !== dualFraction) failures.push(`${item.index}: dualFraction != reverse/digit`)
    if (item.previousIndex < 0 || item.nextIndex < 0 || item.reverseIndex < 0 || item.harmonicIndex < 0) {
      failures.push(`${item.index}: negative reference index`)
    }
    if (!item.referenceReceipt || !item.receipt) failures.push(`${item.index}: missing receipt`)
    if (item.selfCollision !== (item.digit === item.reverseDigit)) failures.push(`${item.index}: invalid selfCollision`)
    if (typeof item.theta !== 'number' || typeof item.phi !== 'number') failures.push(`${item.index}: missing angles`)
    if (typeof item.x !== 'number' || typeof item.y !== 'number' || typeof item.z !== 'number') {
      failures.push(`${item.index}: missing coordinates`)
    }
  }
  if (artifact.count !== artifact.indices.length) failures.push('count != indices.length')
  if (!artifact.root) failures.push('missing root')
  return failures
}

function siteUrl(): string {
  return (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, '')
}

/** Materialize — write the computed dist artifacts + README. The side effects the other waves read. */
export function materializeCross(root: string): { count: number } {
  const outDir = join(root, '.vitepress', 'dist')
  mkdirSync(outDir, { recursive: true })
  const files = computedDistFiles(siteUrl())
  for (const file of files) {
    const target = join(outDir, file.path)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, file.content)
  }
  writeFileSync(join(root, 'README.md'), readmeMarkdown())
  return { count: files.length }
}

/** Audit — verify the digit-index seal as findings (no writes). The shared root key is `digit`. */
export function auditCross(root: string, count = computedDistFiles(siteUrl()).length): { findings: Finding[]; report: string[] } {
  const findings: Finding[] = verifyDigitIndex(root).map((detail) => ({
    wave: 'cross',
    severity: 'error',
    kind: 'digit-index',
    harmonic: 'digit',
    detail,
  }))
  const report = [`Cross wave OK: ${count} dist artifacts + README.md; digit index sealed.`]
  return { findings, report }
}

/** Cross — write computed dist artifacts and verify the digit-index seal. Standalone wave runner. */
export function runCross(root: string): number {
  const { count } = materializeCross(root)
  const { findings, report } = auditCross(root, count)
  if (findings.length) {
    console.error('Cross wave failed (digit index):')
    for (const failure of findings) console.error(`  - ${failure.detail}`)
    return 1
  }
  for (const line of report) console.log(line)
  return 0
}
