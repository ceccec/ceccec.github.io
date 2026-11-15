/**
 * THE KERNEL THEOREMS, DERIVED FOR THE BROWSER — leanPageRows reads the .lean sources through node:fs, so in a browser
 * it returns nothing and every /lean page blanked on client-side navigation: theorems decided by the kernel, invisible
 * exactly where they are read. The rows are derived here at build and written to .vitepress/data/lean-corpus.json,
 * which the page component imports; nothing is authored, and verify:lean-corpus refuses a file the sources no longer
 * produce. `npm run land` regenerates it whenever a .lean file or the proofs module changes.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { leanPageRows } from '../../src/pair/formal/proofs/index.ts'

export const LEAN_CORPUS_FILE = '.vitepress/data/lean-corpus.json'

// THE FEED'S ROWS ONLY: the home feed is this file's one reader, and it shows a title, a file, the tags and the seals. Each
// post receives its full row through its own route params (leanPagePaths), so propositions, docs and tactics are not
// shipped to the feed — the file was every row in full, indented, and every post page loaded it.
const derive = (root: string) => JSON.stringify([...leanPageRows(root)].map((r) => ({ slug: r.slug, title: r.title, file: r.file, tags: r.tags, seals: r.seals, axioms: r.axioms }))) + '\n'

/** npm run lean-corpus — derive the rows and write them. */
export function writeLeanCorpus(): void {
  const root = process.cwd()
  const rows = derive(root)
  mkdirSync(join(root, '.vitepress/data'), { recursive: true })
  writeFileSync(join(root, LEAN_CORPUS_FILE), rows)
  console.log(`lean-corpus: ${(JSON.parse(rows) as unknown[]).length} kernel theorems → ${LEAN_CORPUS_FILE}`)
}

/** verify:lean-corpus — the committed file must be exactly what the sources derive now. */
export function assertLeanCorpusFresh(): void {
  const root = process.cwd()
  const derived = derive(root)
  const file = join(root, LEAN_CORPUS_FILE)
  const committed = existsSync(file) ? readFileSync(file, 'utf8') : ''
  if (derived !== committed) throw new Error(`${LEAN_CORPUS_FILE} is not what the .lean sources derive now — run \`npm run lean-corpus\``)
  console.log(`lean-corpus: ${(JSON.parse(derived) as unknown[]).length} kernel theorems match ${LEAN_CORPUS_FILE}`)
}
