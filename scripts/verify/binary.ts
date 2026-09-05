/**
 * A SOURCE FILE CONTAINING A NUL BYTE IS INVISIBLE TO EVERY GREP-BASED GATE IN THIS REPOSITORY.
 *
 * grep classifies a file with a NUL byte as binary and skips it — silently, exit 0, no diagnostic. So a
 * single stray 0x00 anywhere in src/ does not make one finder fail; it makes EVERY finder that shells
 * out to grep report that file CLEAN. The file passes by being unreadable.
 *
 * Found by uuidna-f8, in their own tree, from a reporter that emitted a literal NUL where join(' ') was
 * intended. Credited because it is theirs and because I would not have looked: my tree has zero today,
 * which is exactly the state in which nobody writes the guard. Zero occurrences is not protection, it
 * is the absence of an occurrence, and this repository has spent a month learning the difference.
 *
 * DIRECTION OF FAILURE: red on any NUL in a text-extension file under src/, scripts/ or .vitepress/.
 * There is no ratchet and no floor — unlike the debts these gates usually carry, there is no reason for
 * this to be non-zero for a day, and a floor would license the first one.
 *
 * SCOPE, STATED: this closes the blind spot for the finders that read TEXT extensions. It says nothing
 * about images, fonts or anything else legitimately binary, which are not matched.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const TEXT = /\.(ts|mts|cts|tsx|js|mjs|cjs|vue|md|json|lean|css|html|txt|yml|yaml)$/
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp', 'worktrees'])

export function nulByteOffenders(root: string = process.cwd()): { file: string; offset: number }[] {
  const out: { file: string; offset: number }[] = []
  const walk = (dir: string) => {
    let entries: string[] = []
    try { entries = readdirSync(dir) } catch { return }
    for (const e of entries) {
      const p = join(dir, e)
      let st
      try { st = statSync(p) } catch { continue }
      if (st.isDirectory()) { if (!SKIP.has(e) && !e.startsWith('.')) walk(p); continue }
      if (!TEXT.test(e)) continue
      // Read as BYTES. Reading as utf8 would replace a NUL with U+0000 and still find it, but it would
      // also silently mangle anything else non-textual — the buffer is the honest surface here.
      let buf
      try { buf = readFileSync(p) } catch { continue }
      const offset = buf.indexOf(0)
      if (offset !== -1) out.push({ file: relative(root, p), offset })
    }
  }
  for (const d of ['src', 'scripts', '.vitepress']) walk(join(root, d))
  return out.sort((a, b) => a.file.localeCompare(b.file))
}

export function assertNoBinaryInSource(): void {
  const offenders = nulByteOffenders()
  console.log(`NUL-byte scan over src, scripts and .vitepress: ${offenders.length} offender(s)`)
  if (offenders.length) {
    throw new Error(
      `${offenders.length} text file(s) contain a NUL byte and are therefore SKIPPED SILENTLY by every ` +
      `grep-based gate here — they do not fail those gates, they pass them by being unreadable: ` +
      `${offenders.map((o) => `${o.file} @ byte ${o.offset}`).join(' · ')}. ` +
      `Write the byte as an escape (\\0 or \\x00) so the file stays text on disk and identical at runtime.`
    )
  }
  console.log('  every text file under src, scripts and .vitepress is readable by the finders that scan it')
}
