// Cross wave — dist artifacts + digit-index seal. First trinity wave.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { computedDistFiles, readmeMarkdown } from '../dist/index.ts'

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

/** Cross — write computed dist artifacts and verify the digit-index seal. */
export function runCross(root: string): number {
  const siteUrl = (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, '')
  const outDir = join(root, '.vitepress', 'dist')
  mkdirSync(outDir, { recursive: true })
  for (const file of computedDistFiles(siteUrl)) {
    const target = join(outDir, file.path)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, file.content)
  }
  writeFileSync(join(root, 'README.md'), readmeMarkdown())
  const digitFailures = verifyDigitIndex(root)
  if (digitFailures.length) {
    console.error('Cross wave failed (digit index):')
    for (const failure of digitFailures) console.error(`  - ${failure}`)
    return 1
  }
  console.log(`Cross wave OK: ${computedDistFiles(siteUrl).length} dist artifacts + README.md; digit index sealed.`)
  return 0
}
