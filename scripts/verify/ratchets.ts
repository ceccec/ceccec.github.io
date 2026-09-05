/**
 * THE RATCHETS ARE NOT AUDITED BY ANYTHING, WHICH IS WHY THIS EXISTS.
 *
 * Twenty-three floors are recorded in status.json and every one of them is described somewhere as
 * a thing that cannot regress. Three of them could regress freely: `folds.facets-off` (1438),
 * `folds.false-verdict` (460) and `folds.threw` (34) live in verify:every-fold, which is in no
 * chain, so the largest fold-level debts in the corpus were recorded and then never asked again.
 * every-fold.ts says so in its own header — "It is also in no chain" — and that sentence sat there
 * being true.
 *
 * Six more CALLED ratchet() and threw the return value away. Those still enforce, because the throw
 * happens inside the helper, but the line it returns is the only place a reader learns whether the
 * floor HELD, TIGHTENED or was SEEDED — and a floor seeded from a dirty tree is exactly the failure
 * the seed mechanism was built to make visible. Discarding that line hides the one event it exists
 * to announce.
 *
 * So: a floor must be reachable from verify:all, and its result must be read. Both are hard zeros,
 * because unlike the debts they measure, there is no reason for either to be non-zero for a day.
 *
 * DIRECTION: this gate can only be satisfied by ENFORCING more, never by recording less. Deleting a
 * ratchet to silence it removes its floor from status.json too, which the floor-without-a-call-site
 * check below catches from the other side.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

type Site = { key: string; file: string; line: number; consumed: boolean }

/** Every `ratchet('key', …)` call under scripts/, with whether anything reads what it returns. */
export function ratchetSites(): Site[] {
  const out: Site[] = []
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name)
      if (e.isDirectory()) { if (e.name !== 'node_modules') walk(p); continue }
      if (!e.name.endsWith('.ts')) continue
      const lines = readFileSync(p, 'utf8').split('\n')
      lines.forEach((text, i) => {
        // THE DEFINITION, ITS RE-EXPORTS, AND PROSE ARE NOT CALL SITES. This gate matched the phrase
        // ratchet('key', …) inside its OWN doc comment above and reported a ratchet named `key` as
        // unenforced — an instrument wrong about itself, in the way it exists to detect. Comment lines
        // are excluded, and the check that the gate is honest is that its own file contributes nothing.
        if (/export function ratchet|from '.*status/.test(text)) return
        // FIRST FIX MISSED ITS OWN JSDOC. Stripping `//` and skipping lines that begin `*` still let a
        // one-line /** … */ through, so the gate went on reporting a ratchet named `key` that is a word
        // in a sentence. All three comment forms are stripped now, and the gate's own file must
        // contribute zero call sites — which is the assertion, not the intention.
        const code = text.replace(/\/\*.*?\*\//g, '').replace(/\/\/.*$/, '').replace(/\/\*.*$/, '')
        if (/^\s*[*]/.test(text) || !code.includes('ratchet(')) return
        const m = /ratchet\('([^']+)'/.exec(code)
        if (!m) return
        const before = text.slice(0, m.index)
        // CONSUMED means the returned line reaches a reader or a caller: printed, returned,
        // interpolated, or bound to a name. A bare statement `ratchet(...)` reaches nobody.
        const consumed = /(console\.log|return|=|`|\+)\s*$|\(\s*$/.test(before.trimEnd()) ||
          /(console\.log|return|const |let )/.test(before)
        out.push({ key: m[1]!, file: p.replace(`${ROOT}/`, ''), line: i + 1, consumed })
      })
    }
  }
  walk(join(ROOT, 'scripts'))
  return out
}

/** npm scripts reachable from verify:all, following `npm run` one script to the next. */
export function chainClosure(): Set<string> {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).scripts as Record<string, string>
  const seen = new Set<string>()
  const walk = (name: string) => {
    if (seen.has(name)) return
    seen.add(name)
    for (const m of (pkg[name] ?? '').matchAll(/npm run ([\w:.-]+)/g)) walk(m[1]!)
  }
  walk('verify:all')
  return seen
}

/** Which npm scripts run a given file, by the path written into the script body. */
function scriptsRunning(file: string): string[] {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).scripts as Record<string, string>
  return Object.entries(pkg).filter(([, cmd]) => cmd.includes(file)).map(([n]) => n)
}

export function assertEveryRatchetTicks(): void {
  const sites = ratchetSites()
  const closure = chainClosure()
  const floors = JSON.parse(readFileSync(join(ROOT, 'scripts/verify/status.json'), 'utf8')) as Record<string, number>

  const unenforced: string[] = []
  const silent: string[] = []
  console.log(`ratchets: ${sites.length} call sites, ${Object.keys(floors).length} recorded floors`)
  for (const s of sites.sort((a, b) => a.key.localeCompare(b.key))) {
    const runners = scriptsRunning(s.file)
    const inChain = runners.filter((r) => closure.has(r))
    if (!inChain.length) unenforced.push(`${s.key} (${s.file}${runners.length ? ` — only ${runners.join(', ')}` : ', no npm script'})`)
    if (!s.consumed) silent.push(`${s.key} (${s.file}:${s.line})`)
    const floor = floors[s.key]
    console.log(
      `  ${String(floor ?? 'NO FLOOR').padStart(8)}  ${s.key.padEnd(38)} ` +
      `${inChain.length ? `enforced by ${inChain[0]}` : 'NOT ENFORCED'}${s.consumed ? '' : '  · RESULT DISCARDED'}`
    )
  }

  // A FLOOR WITH NO CALL SITE is the mirror defect: a number nothing recomputes, which reads as a
  // measurement and is a memory. Deleting the gate and keeping the row would pass every other check.
  const keys = new Set(sites.map((s) => s.key))
  const orphanFloors = Object.keys(floors).filter((k) => !keys.has(k))

  if (unenforced.length) {
    throw new Error(
      `${unenforced.length} ratchet(s) are recorded but NOT reachable from verify:all — a floor nothing asks about ` +
      `is not a floor: ${unenforced.join(' · ')}. Add the gate to the chain, or delete the ratchet and its row together.`
    )
  }
  if (silent.length) {
    throw new Error(
      `${silent.length} ratchet(s) discard what they return — they enforce but say nothing, so HELD, TIGHTENED and ` +
      `SEEDED all look identical to a reader: ${silent.join(' · ')}. A floor seeded from a dirty tree announces itself ` +
      `in exactly that discarded line.`
    )
  }
  if (orphanFloors.length) {
    throw new Error(
      `${orphanFloors.length} recorded floor(s) have no ratchet() call — nothing recomputes them, so they are memories ` +
      `dressed as measurements: ${orphanFloors.join(', ')}`
    )
  }
  // THE GATE MUST NOT COUNT ITSELF. Its prose quotes the very call it looks for, and twice it read that
  // prose as a finding. This is the perturbation that would have caught both, run every time.
  const selfSites = sites.filter((s) => s.file.endsWith('scripts/verify/ratchets.ts'))
  if (selfSites.length) {
    throw new Error(
      `the ratchet census found ${selfSites.length} call site(s) in its OWN file (${selfSites.map((s) => `${s.key}:${s.line}`).join(', ')}) — ` +
      `it is reading its documentation as code. It has no ratchet of its own; anything it finds here is a parsing defect.`
    )
  }
  console.log('every recorded floor is reachable from verify:all and every result is read')
}
