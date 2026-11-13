/**
 * THE READS A GATE MAKES ARE OBSERVED, NOT LISTED. Loaded by verify:stream into every gate process through
 * NODE_OPTIONS --import, this records each path the process reads (files, directory listings, existence checks)
 * and each command it spawns, into the file VERIFY_READS names. The stream turns that list into the gate's
 * INPUT DIGEST — the hex of exactly what the verdict depended on — and a later run whose digest is unchanged
 * reproduces the verdict instead of re-running the gate: verdict = f(gate, inputDigest), the cross formula.
 *
 * SOUNDNESS, STATED: a reproduction is sound only if every read was seen. Node's own ESM loader and esbuild (a
 * native binary) read through neither hook, so the bundle cache's `<entry>.inputs.json` — the metafile esbuild
 * itself wrote — stands in for the static closure, and the stream expands every `.inputs.json` this process read.
 * A subprocess that is not node is not observed, so one spawn of anything else marks the gate UNSEALABLE. Live
 * surfaces (network) are never sealed by the stream. Child node processes inherit NODE_OPTIONS and append to the
 * same file. Nothing here changes a verdict: every patched function calls the original and returns its result.
 */
import fs from 'node:fs'
import cp from 'node:child_process'
import { syncBuiltinESMExports } from 'node:module'

const target = process.env['VERIFY_READS']
if (target) {
  const seen = new Set<string>()
  const origAppend = fs.appendFileSync
  const note = (kind: string, p: unknown) => {
    if (typeof p !== 'string' || !p) return
    const line = `${kind} ${p}`
    if (seen.has(line)) return
    seen.add(line)
    try { origAppend.call(fs, target, `${line}\n`) } catch { /* the trace is evidence, never a cause of failure */ }
  }
  // A WRAPPER CARRIES THE ORIGINAL'S OWN PROPERTIES. fs.realpathSync.native is a property on the function; a bare wrapper lost it
  // and vite's safeRealpathSync threw "is not a function" inside every docs:build run under this hook. Object.assign copies them.
  const patch = <K extends keyof typeof fs>(name: K, kind: string) => {
    const orig = fs[name] as unknown as (...a: unknown[]) => unknown
    if (typeof orig !== 'function') return
    ;(fs as unknown as Record<string, unknown>)[name as string] = Object.assign(function (this: unknown, ...a: unknown[]) { note(kind, a[0]); return orig.apply(this, a) }, orig)
  }
  patch('readFileSync', 'R'); patch('readFile', 'R'); patch('openSync', 'R'); patch('open', 'R'); patch('createReadStream', 'R')
  patch('statSync', 'R'); patch('stat', 'R'); patch('lstatSync', 'R'); patch('lstat', 'R'); patch('existsSync', 'R'); patch('accessSync', 'R'); patch('access', 'R'); patch('realpathSync', 'R')
  patch('readdirSync', 'D'); patch('readdir', 'D')
  for (const name of ['readFile', 'stat', 'lstat', 'access', 'realpath'] as const) {
    const orig = fs.promises[name] as unknown as (...a: unknown[]) => unknown
    ;(fs.promises as unknown as Record<string, unknown>)[name] = function (this: unknown, ...a: unknown[]) { note('R', a[0]); return orig.apply(this, a) }
  }
  { const orig = fs.promises.readdir as unknown as (...a: unknown[]) => unknown; (fs.promises as unknown as Record<string, unknown>)['readdir'] = function (this: unknown, ...a: unknown[]) { note('D', a[0]); return orig.apply(this, a) } }
  for (const name of ['spawn', 'spawnSync', 'exec', 'execSync', 'execFile', 'execFileSync', 'fork'] as const) {
    const orig = cp[name] as unknown as (...a: unknown[]) => unknown
    // THE COMMAND LINE, NOT ONLY THE COMMAND. npm runs a gate as `sh -c "node …"`, and recording `sh` alone marked all 65
    // gates unsealable on the first run; the stream reads the script a shell was given and decides node-likeness from it.
    ;(cp as unknown as Record<string, unknown>)[name] = function (this: unknown, ...a: unknown[]) {
      const args = Array.isArray(a[1]) ? (a[1] as unknown[]).map(String) : []
      note('S', name === 'fork' ? process.execPath : `${String(a[0])} ${args.join(' ')}`.trim().slice(0, 240))
      return orig.apply(this, a)
    }
  }
  // A MARK ENDS A PHASE. The runner reads the whole tree before the gate starts (its bundle cache is keyed on a merkle
  // of src and .vitepress), and those reads were recorded as the gate's own: 579 paths common to all 46 sealable gates,
  // so one changed fold unsealed every gate. runThinMount marks the moment it hands over to the gate's function; the
  // de-duplication is cleared with it, or a file the runner read first would never be recorded when the gate reads it.
  ;(globalThis as { __verifyReadsMark?: (text: string) => void }).__verifyReadsMark = (text: string) => {
    seen.clear()
    try { origAppend.call(fs, target, `M ${text}\n`) } catch { /* the trace is evidence, never a cause of failure */ }
  }
  syncBuiltinESMExports()
}
