/**
 * THE BARREL MUST NOT RE-EXPORT A NAME THAT DOES NOT EXIST.
 *
 * docs:build is not in verify:all — a full VitePress build of 1039 pages costs about 160 seconds and
 * the chain would be unusable with it. The consequence showed up twice in one afternoon: the
 * production build died on `"UNRENDERABLE_MATERIALS" is not exported by ".vitepress/render/index.ts"`
 * while verify:all was green, and the only reason anyone noticed was that a build happened to be run
 * by hand. On a normal day that ships to the deploy, which is how the Pages deploy once stayed red for
 * a month.
 *
 * .vitepress/render/index.ts is the ONE file that deep-imports src, and every mount consumes names
 * from it, so a name that has moved or been renamed breaks the whole site and nothing else can see it:
 * the barrel is a re-export, so it has no call site for an import gate to check, and the names it
 * lists are not referenced anywhere in src.
 *
 * This is the cheap half of the build, done in about fifteen seconds instead of a hundred and sixty.
 * It runs the real TypeScript compiler over the barrel and reports ONLY the missing-export class —
 * TS2305 and TS2724 — raised inside .vitepress. It cannot gate on a clean exit, because the tree
 * carries roughly 2400 pre-existing errors under these flags; gating on a class it can actually hold
 * to zero is honest, and gating on a total nobody can reach would have been theatre.
 *
 * PERTURBED BEFORE IT WAS TRUSTED, and the first instrument failed that test. `esbuild --bundle` was
 * the obvious candidate and it is ten times faster, but adding a re-export of a name that exists
 * nowhere produced NO error from it — esbuild does not verify named re-export existence for TypeScript.
 * It would have been a gate that passed on precisely the defect it claimed to catch. tsc reports the
 * same perturbation as TS2305 on the barrel's own line: 2401 errors perturbed, 2400 clean, one of them
 * this class.
 *
 * `--ignoreConfig` is not optional. Without it tsc loads the repo tsconfig, refuses with TS5112, and
 * that single refusal counts as one error — which reads like a near-pass and is a total failure to run.
 */

import { execFileSync } from 'node:child_process'

const FLAGS = [
  '--noEmit', '--ignoreConfig', '--skipLibCheck',
  '--target', 'es2022', '--module', 'preserve', '--moduleResolution', 'bundler',
  '--allowImportingTsExtensions',
]

const BARREL = '.vitepress/render/index.ts'

/** Missing-export diagnostics raised inside .vitepress: the class that breaks the build silently. */
export function missingExports(root: string = process.cwd()): string[] {
  let out = ''
  try {
    out = execFileSync('npx', ['tsc', ...FLAGS, BARREL], { cwd: root, stdio: 'pipe', timeout: 600_000 }).toString()
  } catch (e) {
    const err = e as { stdout?: Buffer; stderr?: Buffer }
    out = `${err.stdout?.toString() ?? ''}${err.stderr?.toString() ?? ''}`
  }
  if (/error TS5112/.test(out)) {
    throw new Error('tsc loaded the repo tsconfig (TS5112) — the check never ran. --ignoreConfig is required.')
  }
  return out
    .split('\n')
    .filter((l) => /^\.vitepress\//.test(l) && /error TS(2305|2724):/.test(l))
    .map((l) => l.trim())
}

export function assertBarrelExportsResolve(): void {
  const missing = missingExports()
  if (missing.length) {
    throw new Error(
      `${missing.length} name(s) re-exported by ${BARREL} do not exist in their source module:\n  ` +
      `${missing.join('\n  ')}\n` +
      `The barrel is the one file that deep-imports src, so a stale name here breaks every page at build ` +
      `time and nothing in verify:all would otherwise see it.`
    )
  }
  console.log(`barrel exports: every name ${BARREL} re-exports resolves in its source module`)
}
