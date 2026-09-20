/**
 * THE FAST GUARD — run before the slow chain, because re-spending ten minutes on a two-second error is
 * the measured cost of doing it the other way round.
 *
 * uuidna's guard lessons state this as a law: "Run the 0.29s guard BEFORE the ~4-min reconcile;
 * re-spending the full gate on a catchable error is the measured financial damage of manual work."
 * This session paid that three times in one day, for the SAME error each time — a new script added to
 * package.json and left untracked, which paths.dead-scripts only reports at the end of a full
 * verify:stream run (~10 minutes). The error takes two seconds to detect.
 *
 * What this checks, chosen from what actually went wrong rather than from what sounds thorough:
 *   1. UNTRACKED SCRIPTS. A file named by package.json but not in git is dead in a fresh clone. Three
 *      failures today; also the shape that broke the deploy in 0eec8312, where a commit referenced two
 *      files it did not contain.
 *   2. SCRIPTS THAT DO NOT BUNDLE. check:types does NOT cover scripts/, so a bad import there is
 *      invisible to it and surfaces only when the gate runs. One gate threw at runtime today after
 *      check:types reported zero errors.
 *   3. MISSING FILES. A package.json entry pointing at a path that does not exist at all.
 *
 * It is deliberately NOT a substitute for verify:stream. It catches the cheap class fast; the chain
 * still has to run before anything lands.
 */
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

export function guardFindings(root: string = process.cwd()): string[] {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts: Record<string, string> }
  const out: string[] = []

  let tracked = new Set<string>()
  try {
    tracked = new Set(execFileSync('git', ['-C', root, 'ls-files'], { encoding: 'utf8' }).split('\n').filter(Boolean))
  } catch {
    out.push('git ls-files failed — cannot tell a tracked file from an untracked one, so this guard is blind')
    return out
  }

  const referenced = new Set<string>()
  for (const [name, body] of Object.entries(pkg.scripts)) {
    for (const m of body.matchAll(/(scripts\/[\w./-]+\.(?:ts|sh|mjs))/g)) {
      const rel = m[1]!
      referenced.add(rel)
      if (!existsSync(join(root, rel))) out.push(`${name} → ${rel} does not exist`)
      else if (!tracked.has(rel)) out.push(`${name} → ${rel} is UNTRACKED — dead in a fresh clone, and paths.dead-scripts will refuse it ten minutes into verify:stream`)
    }
  }

  // every referenced .ts must bundle — check:types does not reach scripts/
  const esbuild = createRequire(import.meta.url)('esbuild') as { buildSync: (o: Record<string, unknown>) => unknown }
  for (const rel of [...referenced].filter((r) => r.endsWith('.ts'))) {
    if (!existsSync(join(root, rel))) continue
    try {
      esbuild.buildSync({ entryPoints: [join(root, rel)], bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent' })
    } catch (e) {
      out.push(`${rel} does not bundle: ${String((e as Error).message).split('\n')[0].slice(0, 120)}`)
    }
  }
  return out
}

export function assertGuard(): void {
  const started = Date.now()
  const findings = guardFindings()
  for (const f of findings) console.log(`  ✗ ${f}`)
  const ms = Date.now() - started
  if (findings.length > 0) throw new Error(`guard: ${findings.length} finding(s) in ${ms}ms — fix these before spending the chain`)
  console.log(`guard clean in ${ms}ms — every script package.json names exists, is tracked, and bundles`)
}
