/**
 * CITATION.cff IS GENERATED — verify:citation compares the committed file with what the sources write now, byte for byte.
 *
 * It replaced a figure check that looked for one phrase ("N machine-checked involution theorems"); the abstract stopped
 * using that phrase, the check found nothing, and reported NOT MEASURED on every run — a gap read as a pass. Now there is
 * nothing to find: the file is citationCff() of the sources (src/quantum/dist/readme), or the gate refuses and says which
 * line differs. npm run citation writes it; land runs it with the other generated artefacts.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { citationCff } from '../../src/quantum/dist/readme/index.ts'

/** The tree facts: package.json's version, the last commit's date (the pair .zenodo.json uses), and that version's tag. */
function treeFacts(root: string): { version: string; date: string; tag: string | null } {
  const version = (JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { version: string }).version
  const date = execFileSync('git', ['-C', root, 'log', '-1', '--format=%cs'], { encoding: 'utf8' }).trim()
  const tags = execFileSync('git', ['-C', root, 'tag', '--list', `v${version}`], { encoding: 'utf8' }).trim()
  return { version, date, tag: tags ? `v${version}` : null }
}

/** npm run citation — write CITATION.cff from the sources. */
export function writeCitation(root: string = process.cwd()): void {
  writeFileSync(join(root, 'CITATION.cff'), citationCff(treeFacts(root)))
  console.log('citation: CITATION.cff written from its sources')
}

/** verify:citation — the committed CITATION.cff is exactly what the sources write now. */
export function assertCitationIsCurrent(root: string = process.cwd()): void {
  const generated = citationCff(treeFacts(root))
  const file = join(root, 'CITATION.cff')
  const committed = existsSync(file) ? readFileSync(file, 'utf8') : ''
  if (generated === committed) { console.log(`citation: CITATION.cff is exactly what its sources write (${generated.split('\n').length} lines)`); return }
  const a = committed.split('\n'), b = generated.split('\n')
  const at = b.findIndex((line, i) => line !== a[i])
  throw new Error(`CITATION.cff has drifted from its sources at line ${at + 1}: committed "${(a[at] ?? '(end of file)').slice(0, 90)}" · sources "${(b[at] ?? '(end of file)').slice(0, 90)}" — run \`npm run citation\``)
}
