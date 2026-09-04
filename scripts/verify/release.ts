/**
 * THE THINGS THAT ONLY FAIL AT PUBLISH TIME, RUN BEFORE PUBLISH TIME.
 *
 * verify:all is the commit gate and it is green on trees that cannot ship. Two proofs of that from
 * this repository's own history: GitHub Pages was red for a month because `docs:build` is not in
 * verify:all and nothing else runs the VitePress build; and @ceccec/double-torus 1.4.0 went to npm
 * with four modules missing from its declaration graph, because the package build gated on the
 * ENTRY declaration existing rather than on the graph closing. Both were caught by a human, late.
 *
 * This runs the publish-time surface and nothing else. It is deliberately NOT in verify:all — it is
 * slow, and a commit gate that takes minutes gets bypassed, which is worse than a gate that is
 * scoped. It belongs in front of a release and in the nightly.
 *
 * It is expected to be RED today: the declaration graph has four folds whose inferred types cannot
 * be serialized, so packages/double-torus cannot be republished until they carry explicit return
 * types. That is the gate doing its job — the hole is old, the refusal is new.
 */

import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { measureBundle } from './purity.ts'

type Step = { readonly name: string; readonly run: () => { ok: boolean; detail: string } }

function shell(cmd: string, args: readonly string[], cwd: string = process.cwd()) {
  const r = spawnSync(cmd, [...args], { cwd, encoding: 'utf8', timeout: 1_800_000 })
  // stdout and stderr kept APART. Merging them put npm's progress notices in front of the JSON that
  // `npm pack --json` writes to stdout, and the manifest reader took the first `[` it found inside a
  // notice — reported as "could not read the pack manifest", which reads like a broken package.
  return { code: r.status ?? 1, out: `${r.stdout ?? ''}${r.stderr ?? ''}`, stdout: r.stdout ?? '' }
}

const STEPS: readonly Step[] = [
  {
    name: 'docs:build — the Pages build, which verify:all never runs',
    run: () => {
      const { code, out } = shell('npm', ['run', 'docs:build'])
      // THE SEAL LINE IS NOT A RELIABLE SIGNAL and requiring it made this step flaky: two consecutive
      // runs of the same tree gave OK and then FAIL, because a warm build skips the work that prints
      // it. A gate whose verdict depends on cache state is worse than no gate. Exit code and the
      // absence of a build failure are what actually distinguish a shippable build.
      const failed = /Build failed|✗/.test(out)
      const sealed = /Enforcement trinity complete/.test(out)
      return { ok: code === 0 && !failed, detail: code !== 0 ? (out.match(/error[^\n]*/i)?.[0] ?? 'failed').slice(0, 120) : sealed ? 'built and sealed' : 'built (warm — the trinity line is only printed on a cold run)' }
    },
  },
  {
    name: 'kernel — the root package artifact',
    run: () => {
      const { code, out } = shell('npm', ['run', 'build:package'])
      const built = existsSync(join(process.cwd(), 'packages/kernel/index.mjs')) && existsSync(join(process.cwd(), 'packages/kernel/index.d.ts'))
      return { ok: code === 0 && built, detail: built ? 'index.mjs + index.d.ts present' : (out.match(/error[^\n]*/i)?.[0] ?? 'not produced').slice(0, 120) }
    },
  },
  {
    name: 'core — bundle AND a closed declaration graph',
    run: () => {
      const { code, out } = shell('node', ['./build.mjs'], join(process.cwd(), 'packages/double-torus'))
      const closed = /declaration graph closes/.test(out)
      const missing = out.match(/(\d+) declaration import\(s\) resolve to nothing/)
      return { ok: code === 0 && closed, detail: closed ? 'every emitted .d.ts import resolves' : `${missing?.[1] ?? '?'} declaration import(s) resolve to nothing — a consumer sees each as TS2307` }
    },
  },
  {
    name: 'the published declarations type-check as a consumer sees them',
    run: () => {
      // THE NUMBER A CONSUMER GETS, not a proxy for it. The declaration graph closing means the files
      // EXIST; it does not mean they check. Both were measured against the published 1.4.0 before this
      // wave — bundler 10, skipLibCheck 0, nodenext 338 — and the first two are the modes real projects
      // use. nodenext is measured and NOT gated, for a reason stated in the detail line.
      const tsc = join(process.cwd(), 'node_modules/.bin/tsc')
      if (!existsSync(tsc)) return { ok: false, detail: 'typescript not installed' }
      const entry = 'packages/double-torus/dist/index.d.ts'
      if (!existsSync(join(process.cwd(), entry))) return { ok: false, detail: 'dist not built' }
      const count = (mode: readonly string[]) =>
        (shell(tsc, ['--noEmit', '--ignoreConfig', '--target', 'es2022', '--strict', ...mode, entry]).out.match(/error TS/g) ?? []).length
      const bundler = count(['--module', 'esnext', '--moduleResolution', 'bundler'])
      const skipLib = count(['--skipLibCheck', '--module', 'nodenext', '--moduleResolution', 'nodenext'])
      const nodenext = count(['--module', 'nodenext', '--moduleResolution', 'nodenext'])
      // nodenext rejects a relative import in a .d.ts that carries no file extension (TS2834), and
      // this corpus writes every relative import extensionless — its convention, in thousands of
      // places. Closing the graph made that visible at scale rather than causing it: before, four
      // modules simply did not exist to be checked. Supporting nodenext means adding an extension to
      // every relative import in src/, which is a decision about the corpus, not about this package.
      return {
        ok: bundler === 0 && skipLib === 0,
        detail: `bundler ${bundler} · skipLibCheck ${skipLib} · nodenext ${nodenext} (NOT gated — TS2834, extensionless relative imports, a corpus-wide convention)`,
      }
    },
  },
  {
    name: 'purity of the freshly built artifacts',
    run: () => {
      const kernel = measureBundle('packages/kernel/index.mjs')
      const core = measureBundle('packages/double-torus/dist/index.js')
      if (!kernel) return { ok: false, detail: 'kernel not built' }
      const impure = Object.entries(kernel.counts).filter(([, n]) => n > 0)
      return { ok: impure.length === 0, detail: impure.length ? `kernel: ${impure.map(([k, n]) => `${k}×${n}`).join(', ')}` : `kernel pure · core nondeterminism ${core?.counts['Math.random'] ?? '?'}` }
    },
  },
  {
    name: 'the root tarball carries the kernel and nothing unexpected',
    run: () => {
      const { code, stdout } = shell('npm', ['pack', '--dry-run', '--json'])
      if (code !== 0) return { ok: false, detail: 'npm pack failed' }
      try {
        const files: string[] = (JSON.parse(stdout.slice(stdout.indexOf('['))) as any)[0].files.map((f: any) => f.path)
        const hasKernel = files.some((f) => f.startsWith('packages/kernel/'))
        const strays = files.filter((f) => !/^(packages\/kernel\/|LICENSE|README|package\.json)/.test(f))
        return { ok: hasKernel && strays.length === 0, detail: `${files.length} file(s)${strays.length ? ` — unexpected: ${strays.slice(0, 3).join(', ')}` : ''}` }
      } catch { return { ok: false, detail: 'could not read the pack manifest' } }
    },
  },
  {
    name: 'no package declares a dependency its artifact does not use',
    run: () => {
      const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'))
      const deps = Object.keys(pkg.dependencies ?? {})
      if (!deps.length) return { ok: true, detail: 'root declares none, and ships only the kernel' }
      const kernel = readFileSync(join(process.cwd(), 'packages/kernel/index.mjs'), 'utf8')
      const unused = deps.filter((d) => !kernel.includes(d))
      return { ok: unused.length === 0, detail: unused.length ? `declared but unused by the artifact: ${unused.join(', ')}` : `${deps.length} declared, all reached` }
    },
  },
]

export function assertReleaseReady(): void {
  const results = STEPS.map((s) => ({ name: s.name, ...s.run() }))
  for (const r of results) console.log(`  ${r.ok ? 'OK  ' : 'FAIL'} ${r.name}\n         ${r.detail}`)
  const failed = results.filter((r) => !r.ok)
  console.log(`\nrelease surface: ${results.length - failed.length}/${results.length} green`)
  if (failed.length) {
    throw new Error(`${failed.length} publish-time step(s) fail on a tree verify:all calls clean — this is the gap that put a red Pages build up for a month and a broken declaration graph on npm`)
  }
}
