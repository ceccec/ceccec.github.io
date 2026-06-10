import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const artifactPath = join(process.cwd(), '.vitepress', 'dist', 'digit-index.json')
const artifact = JSON.parse(readFileSync(artifactPath, 'utf8'))
const failures = []

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

if (failures.length) {
  console.error('Digit index seal failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Digit index seal passed.')
