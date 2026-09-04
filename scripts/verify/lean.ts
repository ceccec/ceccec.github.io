/**
 * EVERY .lean FILE MUST COMPILE, WITH NO `sorry`.
 *
 * Three Lean files sat in this repository for months carrying claims like "Status: All
 * theorems compile without errors". None of them compiled: each began `import Mathlib`,
 * which is not installed, so `lean` stopped at line 6 every time. Nothing ran them, so the
 * header was never contradicted — the same shape as the drift detector that declared itself
 * synced and the verifier that returned true for every input.
 *
 * They could not have compiled as written either: one used a term (`ProtectionStrength :
 * ℝ := 0.91`) as a field TYPE, and eight "theorems" asserted `≈`, which the file never
 * defines. And four "theorems" in another projected their own hypothesis — `extraction` was
 * DEFINED as a conjunction and each proof was `exact h.1`, `h.2.1`, … The Lean spelling of
 * `const x = 7` proved by `x === 7`.
 *
 * The corpus's actual claims are arithmetic over Nat and Int, so they are DECIDABLE and need
 * no library: `by decide` checks them in the kernel in well under a second. This gate runs
 * the real compiler over every .lean file and fails on a non-zero exit or a `sorry`.
 */

import { execFileSync } from 'node:child_process'
import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative } from 'node:path'

const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp', 'worktrees'])

export type LeanResult = { file: string; ok: boolean; sorries: number; ms: number; error: string }

/** Lean comments: `-- line` and nested `/- block -/`. Stripped before scanning for `sorry`. */
export function stripLeanComments(text: string): string {
  let out = ''
  let depth = 0
  for (let i = 0; i < text.length; i += 1) {
    if (text.startsWith('/-', i)) { depth += 1; i += 1; continue }
    if (depth > 0 && text.startsWith('-/', i)) { depth -= 1; i += 1; continue }
    if (depth > 0) continue
    if (text.startsWith('--', i)) { while (i < text.length && text[i] !== '\n') i += 1; out += '\n'; continue }
    out += text[i]
  }
  return out
}

function leanFiles(root: string): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    let entries: string[] = []
    try {
      entries = readdirSync(dir)
    } catch {
      return
    }
    for (const entry of entries) {
      const p = join(dir, entry)
      let st
      try {
        st = statSync(p)
      } catch {
        continue
      }
      if (st.isDirectory()) {
        if (!SKIP.has(entry) && !entry.startsWith('.')) walk(p)
      } else if (entry.endsWith('.lean')) out.push(p)
    }
  }
  walk(join(root, 'src'))
  return out.sort()
}

/**
 * A THEOREM PROVES ITSELF WHEN IT DEPENDS ON NO AXIOM. `by decide` reduces the proposition in
 * the kernel to `True`, so the proof is the computation and nothing is assumed. Lean reports
 * this exactly: `#print axioms T` prints "does not depend on any axioms" or lists what it
 * leans on (propext, Classical.choice, sorryAx). The involution proofs are all the first kind
 * — 41 theorems, zero axioms — which is the checkable meaning of "the theorems prove
 * themselves", and it is strictly stronger than compiling green: a proof can compile and still
 * rest on Classical.choice or, worse, sorryAx, which `#print axioms` would surface and a plain
 * compile would not.
 */
export function axiomFreedom(file: string): { total: number; axiomFree: number; propextOnly: number; dependent: string[] } {
  const text = readFileSync(file, 'utf8')
  const ns = (text.match(/^namespace\s+([A-Za-z.]+)/m) ?? [])[1] ?? ''
  const names = [...text.matchAll(/^theorem\s+([A-Za-z0-9_]+)/gm)].map((m) => m[1]!)
  if (!names.length) return { total: 0, axiomFree: 0, propextOnly: 0, dependent: [] }
  const probe = `${text}\n${names.map((n) => `#print axioms ${ns ? ns + '.' : ''}${n}`).join('\n')}\n`
  // THE PROBE GETS ITS OWN DIRECTORY. This wrote into .vitepress/cache, which VitePress owns and
  // wipes: a docs:build running beside verify:all deleted the directory between two probes and the
  // gate died ENOENT mid-measurement — a green-or-red verdict lost to a race with a sibling process,
  // and 40+ stale axprobe-*.lean left behind when it did survive. A private mkdtemp cannot collide
  // with anything and is removed whether the probe succeeds or throws.
  const dir = mkdtempSync(join(tmpdir(), 'axprobe-'))
  const tmp = join(dir, `probe-${names.length}-${text.length}.lean`)
  writeFileSync(tmp, probe)
  let out = ''
  try {
    out = execFileSync('lean', [tmp], { stdio: 'pipe', timeout: 300_000 }).toString()
  } catch (e) {
    out = `${(e as { stdout?: Buffer }).stdout?.toString() ?? ''}`
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
  const axiomFree = (out.match(/does not depend on any axioms/g) ?? []).length
  const deps = [...out.matchAll(/'([^']+)' depends on axioms: \[([^\]]*)\]/g)]
  // TWO CLASSES, NOT ONE NUMBER. A `decide` proof reduces a finite proposition to a Boolean
  // computation and invokes no lemma, so it depends on nothing — that is what "the theorems prove
  // themselves" has always meant here. A GENERAL theorem cannot do that: it quantifies over a type, so
  // it must reason, and Lean's own core arithmetic reasons through propext — Int.add_assoc and
  // Int.sub_self both depend on it, measured, not assumed. Averaging the two into one figure would
  // either bar the corpus from ever stating a general theorem or quietly weaken a claim it makes
  // loudly. propext is one of Lean's three foundational axioms and says nothing about involutions.
  // Classical.choice and sorryAx are different animals and still fail below.
  const propextOnly = deps.filter((m) => m[2]!.split(',').every((a) => a.trim() === 'propext')).length
  const dependent = deps
    .filter((m) => /sorryAx|Classical\.choice/.test(m[2]!))
    .map((m) => `${m[1]} (${m[2]})`)
  return { total: names.length, axiomFree, propextOnly, dependent }
}

export function compileLean(root: string = process.cwd()): LeanResult[] {
  return leanFiles(root).map((file) => {
    const rel = relative(root, file)
    // `sorry` admits any goal, so a file full of them compiles green and proves nothing.
    // Comments are stripped first: this counted the word in its own header prose ("no
    // `sorry`") and reported corpus.lean broken. Fourth instrument of mine to be wrong before
    // the code was — check the instrument against a known case, every time.
    const sorries = (stripLeanComments(readFileSync(file, 'utf8')).match(/(?<![\w.])sorry(?![\w])/g) ?? []).length
    const started = Date.now()
    try {
      execFileSync('lean', [file], { stdio: 'pipe', timeout: 300_000 })
      return { file: rel, ok: sorries === 0, sorries, ms: Date.now() - started, error: '' }
    } catch (e) {
      const err = e as { stdout?: Buffer; stderr?: Buffer; message?: string }
      const text = `${err.stdout?.toString() ?? ''}${err.stderr?.toString() ?? ''}`.trim()
      return { file: rel, ok: false, sorries, ms: Date.now() - started, error: (text || err.message || 'failed').split('\n').slice(0, 3).join(' · ') }
    }
  })
}

export function assertLeanCompiles(): void {
  let available = true
  try {
    execFileSync('lean', ['--version'], { stdio: 'pipe' })
  } catch {
    available = false
  }
  if (!available) {
    // Unmeasured is its own outcome — never silently a pass.
    console.log('lean not on PATH — NOT MEASURED in this environment, no claim made')
    return
  }

  const results = compileLean()
  const broken = results.filter((r) => !r.ok)
  console.log(`lean files compiled: ${results.length - broken.length}/${results.length} green, no Mathlib required`)
  for (const r of results) {
    console.log(`  ${r.ok ? 'OK  ' : 'FAIL'} ${r.file.padEnd(52)} ${String(r.ms).padStart(5)}ms${r.sorries ? `  ${r.sorries} sorry` : ''}${r.error ? `  ${r.error}` : ''}`)
  }
  if (broken.length) {
    throw new Error(`${broken.length} Lean file(s) do not compile or contain sorry — a proof that does not run is not a proof`)
  }

  // AXIOM-FREEDOM — the involution proofs must prove THEMSELVES, not rest on an axiom (and
  // never on sorryAx, which would make a green file a lie). Checked only for the formal proofs.
  let totalThm = 0
  let totalFree = 0
  let totalPropext = 0
  const cheats: string[] = []
  for (const r of results) {
    if (!r.file.includes('pair/formal/proofs/')) continue
    const a = axiomFreedom(join(process.cwd(), r.file))
    totalThm += a.total
    totalFree += a.axiomFree
    totalPropext += a.propextOnly
    if (a.dependent.length) cheats.push(`${r.file}: ${a.dependent.join(', ')}`)
    console.log(`  axioms ${r.file.replace('src/pair/formal/proofs/', '')}: ${a.axiomFree}/${a.total} prove themselves (0 axioms)${a.propextOnly ? `, ${a.propextOnly} general (propext only)` : ''}`)
  }
  console.log(`involution proofs: ${totalFree}/${totalThm} decided by computation with NO axiom · ${totalPropext} general, depending on propext alone`)
  if (cheats.length) throw new Error(`Lean theorem(s) depend on sorryAx or Classical.choice: ${cheats.join(' · ')}`)
  const unaccounted = totalThm - totalFree - totalPropext
  if (unaccounted > 0) throw new Error(`${unaccounted} formal-proof theorem(s) depend on something other than propext — every proof here is either decided by computation or reasons through Lean's core arithmetic, and nothing else is allowed`)
}
