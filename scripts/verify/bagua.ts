/**
 * THE ELEMENT VOCABULARY MUST NAME FOLDERS THAT EXIST.
 *
 * `BAGUA_ELEMENTS` was a hand-written list of seven element folders whose own comment forbade
 * hand-written lists ("no parallel table"). It had drifted in BOTH directions at once: it named
 * `lake`, which src/thunder/waves records as dissolved into src/music and src/stats, and it
 * omitted `heaven`, a live top-level folder. Neither error was detectable, because nothing had
 * ever compared the list to the disk -- the same shape as every other defect in this corpus, an
 * assertion with no instrument pointed at it.
 *
 * The cost was real rather than cosmetic. `lake` was the DEFAULT ray for every frontier theorem
 * the pattern classifier could not place, and the Hodge conjecture's ray besides, so unclassified
 * work was filed under a directory that does not exist and no one could notice it had gone
 * nowhere. A vocabulary that names a non-existent destination is a silent drain.
 *
 * This gate points the instrument. The vocabulary is now DERIVED from src/8/2's sealed
 * EIGHT_FOLD_SCIENCES, and the derivation is checked three ways: every name is a real directory,
 * the one excluded name is really absent (so the exclusion stays justified -- re-create src/lake
 * and this fails, correctly), and no trigram-named folder is missing from the set.
 *
 * It also counts the PARALLEL TABLES. Four spellings of the bagua were live at once: the sealed
 * eight in src/8/2, a local `trigrams` in src/heaven/laws, a local glyph row repeated three times
 * in src/ui, and the stale seven. Code gravity says duplicates collapse to one API, so the count
 * is ratcheted -- it may fall, never rise.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { BAGUA_ELEMENTS } from '../../src/quantum/index.ts'
import { EIGHT_FOLD_SCIENCES } from '../../src/8/2/index.ts'
import { ratchet } from './status.ts'

/** The eight trigram names, from the sealed fold -- never retyped here. */
const EIGHT = EIGHT_FOLD_SCIENCES as readonly string[]

/** Top-level directories under src/, measured. */
export function srcFolders(root: string = process.cwd()): string[] {
  const dir = join(root, 'src')
  return readdirSync(dir)
    .filter((e) => !e.startsWith('.') && statSync(join(dir, e)).isDirectory())
    .sort()
}

export type BaguaAudit = {
  readonly vocabulary: readonly string[]
  readonly phantom: readonly string[]
  readonly missing: readonly string[]
  readonly dissolved: readonly string[]
  readonly resurrected: readonly string[]
  readonly parallelTables: number
}

/** Files that spell the bagua out by hand instead of importing the sealed eight. */
export function parallelBaguaTables(root: string = process.cwd()): string[] {
  const hits: string[] = []
  const sealed = join('src', '8', '2', 'index.ts')
  const walk = (dir: string) => {
    for (const e of readdirSync(dir)) {
      if (e.startsWith('.') || e === 'node_modules') continue
      const p = join(dir, e)
      if (statSync(p).isDirectory()) { walk(p); continue }
      if (!/\.(ts|vue)$/.test(p)) continue
      if (p.endsWith(sealed)) continue
      const text = readFileSync(p, 'utf8')
      // A literal array carrying three or more trigram names as QUOTED STRINGS in one expression.
      // `use is not mention`: a comment listing the names is prose, so the match requires the
      // bracket-and-quote syntax of an actual table, not the words themselves.
      for (const m of text.matchAll(/\[[^\]\n]{0,400}\]/g)) {
        const frag = m[0]
        const named = EIGHT.filter((t) => frag.includes(`'${t}'`) || frag.includes(`"${t}"`))
        if (named.length >= 3) { hits.push(p.replace(`${root}/`, '')); break }
      }
    }
  }
  walk(join(root, 'src'))
  return [...new Set(hits)].sort()
}

export function auditBagua(root: string = process.cwd()): BaguaAudit {
  const folders = new Set(srcFolders(root))
  const vocabulary = [...BAGUA_ELEMENTS] as string[]
  const dissolved = EIGHT.filter((t) => !vocabulary.includes(t))
  return {
    vocabulary,
    // Named by the vocabulary, absent from disk -- the `lake` defect.
    phantom: vocabulary.filter((v) => !folders.has(v)),
    // On disk and a trigram, but absent from the vocabulary -- the `heaven` defect.
    missing: EIGHT.filter((t) => folders.has(t) && !vocabulary.includes(t)),
    dissolved,
    // Excluded as dissolved, yet present on disk -- the exclusion has expired.
    resurrected: dissolved.filter((t) => folders.has(t)),
    parallelTables: parallelBaguaTables(root).length
  }
}

export function assertBaguaNamesRealFolders(): void {
  const a = auditBagua()
  console.log(`bagua vocabulary (derived from the sealed eight): ${a.vocabulary.join(' - ')}`)
  console.log(`  dissolved and excluded: ${a.dissolved.join(' - ') || 'none'}`)
  console.log(`  parallel tables still spelling it by hand: ${a.parallelTables}`)

  if (a.phantom.length) {
    throw new Error(
      `bagua vocabulary names ${a.phantom.length} folder(s) that do not exist: ${a.phantom.join(', ')}. ` +
      `A ray pointing at a missing directory files work nowhere -- this is how 'lake' survived its own dissolution.`
    )
  }
  if (a.missing.length) {
    throw new Error(
      `${a.missing.length} trigram folder(s) exist on disk but are absent from the vocabulary: ${a.missing.join(', ')}. ` +
      `Add them to the derivation or record why they are excluded.`
    )
  }
  if (a.resurrected.length) {
    throw new Error(
      `${a.resurrected.join(', ')} is excluded as dissolved but exists on disk again -- the exclusion has expired ` +
      `and the derivation in src/quantum/index.ts must stop filtering it out.`
    )
  }
  console.log(ratchet('bagua.parallel-tables', a.parallelTables))
  console.log('bagua -- every ray names a folder that exists')
}
