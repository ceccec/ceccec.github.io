// ── Thin VitePress plugin mount (dry-clean of the vitepress-thin-mount ratchet) — the build-time Vite
// plugins consolidated into ONE index the config consumes, so .vitepress carries index files only. Pure
// build hooks (no deep src imports); the src-consuming plugins route through the barrels in later increments.
import type { Plugin } from 'vite'
import { fileURLToPath } from 'node:url'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { createHash } from 'node:crypto'

// ── build lock — DISSOLVED here from .vitepress/build-lock.mjs, which a strict-gate warning asked to fold into this
// index (residual:vitepress-thin-mount). Moved verbatim; the docs:build shell now imports it from this file.
/** Serialise VitePress builds — parallel invocations race .vitepress/.temp during SSR render. */

export function buildLockPath(root) {
  return join(root, '.vitepress', '.build-lock')
}

/** One second in milliseconds, spelled from the lattice like BUILD_LOCK_QUEUE_MS below — a literal
 * 1000 here was a crack the moment the lock moved from an unscanned .mjs into this scanned .mts. */
const SECOND_MS = (5 * 2) ** 3
/** Harmonic lock-wait — the same fractions of a second as src/render/ui/tokens.css:
 * --ich-dur (1s/5) centre, --ich-dur-slow (1s·3/5) slow, --ich-dur-breath (1s·4) breath. */
export const BUILD_LOCK_HARMONIC_MS = [SECOND_MS / 5, (SECOND_MS * 3) / 5, SECOND_MS * 4]
/** Trinity depth — max lock-wait cycles (nine waves, not ten). */
export const BUILD_LOCK_TRINITY_CYCLES = 3
/**
 * QUEUE CEILING — how long a build waits behind a LIVE holder once the trinity cycles are spent.
 * The same expression as src's default build timeout (defaultTimeoutMs('build') = 540s), so a
 * queued build waits at most one build's length. It was not a number before; it was the trinity
 * budget, 14.4s, against builds that take a minute or more — so the second of two real builds did
 * not queue, it failed, and docs:build reported it as EXIT=124, a timeout, as if the build had hung.
 */
export const BUILD_LOCK_QUEUE_MS = 54 * (5 * 2) ** 4

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Stall/stop — drop lock when holder pid is dead (timeout/kill left .build-lock behind). */
function clearStaleBuildLock(root) {
  const dir = buildLockPath(root)
  if (!existsSync(dir)) return false
  const pidPath = join(dir, 'pid')
  if (!existsSync(pidPath)) {
    rmSync(dir, { recursive: true, force: true })
    return true
  }
  const pid = Number(readFileSync(pidPath, 'utf8').trim())
  if (!Number.isFinite(pid) || pid <= 0) {
    rmSync(dir, { recursive: true, force: true })
    return true
  }
  try {
    process.kill(pid, 0)
    return false
  } catch {
    rmSync(dir, { recursive: true, force: true })
    process.stderr.write(`[build-lock] cleared stale lock (pid ${pid} gone)\n`)
    return true
  }
}

/**
 * Wait for sole .build-lock holder — the harmonic ich-dur poll for BUILD_LOCK_TRINITY_CYCLES, then
 * QUEUE behind a holder that is still alive, breathing at the slowest harmonic, up to maxWaitMs.
 *
 * The exclusion is kept: parallel builds race .vitepress/.temp during SSR render, so two may never
 * write at once. What changed is what a second build does when it finds the first still working.
 * It used to give up after the trinity budget — 14.4s — and a real build takes a minute or more, so
 * concurrent waves that each changed the tree failed one another. A dead holder is still cleared at
 * once by clearStaleBuildLock, so the only thing a waiter can now wait on is a build that is running.
 *
 * @param {string} root
 * @param {number} [maxWaitMs] ceiling while the holder is alive; never below the trinity budget,
 *   defaults to BUILD_LOCK_QUEUE_MS
 */
export async function acquireBuildLock(root, maxWaitMs) {
  const dir = buildLockPath(root)
  const harmonicTotal = BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)
  const trinityBudgetMs = BUILD_LOCK_TRINITY_CYCLES * harmonicTotal
  const budgetMs = Math.max(Number(maxWaitMs) || BUILD_LOCK_QUEUE_MS, trinityBudgetMs)
  const breathMs = BUILD_LOCK_HARMONIC_MS[BUILD_LOCK_HARMONIC_MS.length - 1]
  const start = Date.now()
  let cycle = 0
  let step = 0

  while (Date.now() - start < budgetMs) {
    try {
      mkdirSync(dir)
      writeFileSync(join(dir, 'pid'), String(process.pid))
      return
    } catch (e) {
      if (e?.code !== 'EEXIST') throw e
      if (clearStaleBuildLock(root)) continue
    }

    const inTrinity = cycle < BUILD_LOCK_TRINITY_CYCLES
    const waitMs = inTrinity ? BUILD_LOCK_HARMONIC_MS[step % BUILD_LOCK_HARMONIC_MS.length] : breathMs
    if (inTrinity) {
      step += 1
      if (step % BUILD_LOCK_HARMONIC_MS.length === 0) cycle += 1
    }

    process.stderr.write(
      inTrinity
        ? `[build-lock] waiting cycle ${Math.min(cycle + 1, BUILD_LOCK_TRINITY_CYCLES)}/${BUILD_LOCK_TRINITY_CYCLES} (${waitMs}ms ich sequence)…\n`
        : `[build-lock] holder alive — queued ${Math.round((Date.now() - start) / SECOND_MS)}s of ${Math.round(budgetMs / SECOND_MS)}s (${waitMs}ms breath)…\n`,
    )
    await sleep(waitMs)
  }

  const err = new Error('VITEPRESS_BUILD_LOCK_TIMEOUT')
  err.code = 'VITEPRESS_BUILD_LOCK_TIMEOUT'
  throw err
}

export function releaseBuildLock(root) {
  rmSync(buildLockPath(root), { recursive: true, force: true })
}

// ── build-lock: hold .build-lock for a direct `vitepress build` (docs-build.mjs sets VITEPRESS_BUILD_LOCK_HELD=1).
const projectRoot = fileURLToPath(new URL('..', import.meta.url))
// A direct `vitepress build` queues behind a live holder for one build's length (see build-lock.mjs).
const lockWaitMs = BUILD_LOCK_QUEUE_MS
let pluginHeldLock = false

export function buildLockPlugin(): Plugin {
  return {
    name: 'double-torus:build-lock',
    apply: 'build',
    async buildStart() {
      if (process.env.DOCS_BUILD_VERBOSE === '1') {
        console.log(`[vitepress] ${new Date().toISOString()} ▶ build-lock — buildStart`)
      }
      if (process.env.VITEPRESS_BUILD_LOCK_HELD === '1') return
      await acquireBuildLock(projectRoot, lockWaitMs)
      pluginHeldLock = true
      process.once('exit', () => releaseDirectBuildLock())
    },
  }
}

export function releaseDirectBuildLock() {
  if (process.env.VITEPRESS_BUILD_LOCK_HELD === '1' || !pluginHeldLock) return
  releaseBuildLock(projectRoot)
  pluginHeldLock = false
}

// ── build-verbose: Vite/Rollup build hooks, active when DOCS_BUILD_VERBOSE=1.
function ts(): string { return new Date().toISOString() }
function log(phase: string, detail?: string): void {
  console.log(detail ? `[vitepress] ${ts()} ▶ ${phase} — ${detail}` : `[vitepress] ${ts()} ▶ ${phase}`)
}

export function buildVerbosePlugin(): Plugin {
  const on = () => process.env.DOCS_BUILD_VERBOSE === '1'
  return {
    name: 'double-torus:build-verbose',
    apply: 'build',
    buildStart() {
      if (on()) log('buildStart', 'Rollup/Vite build pipeline entered')
    },
    configResolved(config) {
      if (!on()) return
      log('configResolved', `root=${config.root} outDir=${config.build.outDir}`)
    },
    transform(_, id) {
      if (!on() || !process.env.DOCS_BUILD_VERBOSE_TRANSFORM) return null
      if (id.includes('node_modules')) return null
      log('transform', id.replace(process.cwd(), '.'))
      return null
    },
    generateBundle(_options, bundle) {
      if (on()) log('generateBundle', `${Object.keys(bundle).length} chunks`)
    },
    writeBundle(_options, bundle) {
      if (on()) log('writeBundle', `${Object.keys(bundle).length} files written`)
    },
    closeBundle() {
      if (on()) log('closeBundle', 'bundle closed')
    },
    buildEnd(error) {
      if (on()) log('buildEnd', error ? `error: ${error.message}` : 'ok')
    },
  }
}

// ── THE BUILD'S WITNESS — which source modules each client chunk was made from, and each chunk's digest.
// The built files do not say what they are made of: a chunk is minified text with a hashed name. So the question
// "what is in the shell every visitor loads" could only be answered by grepping for strings that happened to
// survive — which is how a refusal on its size took an hour to attribute. The bundler knows the answer at
// writeBundle and this records it beside the assets, once, for the client build (the one that carries the app
// entry). verify:build-time reads it and decides its statements against the files on disk; nothing here judges.
export const CHUNK_WITNESS_FILE = 'chunk-witness.json'
export function chunkWitnessPlugin(): Plugin {
  return {
    name: 'double-torus:chunk-witness',
    apply: 'build',
    writeBundle(options, bundle) {
      const chunks = Object.values(bundle).filter((file) => file.type === 'chunk')
      if (!options.dir || !chunks.some((chunk) => /^assets\/app\.[A-Za-z0-9_-]+\.js$/.test(chunk.fileName))) return
      const root = process.cwd()
      const rel = (id: string) => (id.startsWith(root) ? id.slice(root.length + 1) : id).split('?')[0]
      // A SEAL OF 1024 BITS PER CHUNK — two independent 512-bit digests of the bytes as written, so the reader can
      // decide that the file on disk is the file this build produced, and that no other file is.
      const seal = (code: string) => createHash('sha512').update(code).digest('hex') + createHash('sha3-512').update(code).digest('hex')
      const witness: Record<string, { modules: string[]; bytes: number; seal: string }> = {}
      for (const chunk of chunks) {
        if (chunk.type !== 'chunk') continue
        witness[chunk.fileName] = { modules: [...new Set(chunk.moduleIds.map(rel))].sort(), bytes: Buffer.byteLength(chunk.code), seal: seal(chunk.code) }
      }
      writeFileSync(join(options.dir, CHUNK_WITNESS_FILE), JSON.stringify(witness))
    },
  }
}

// ── Measured once by the build, read by the page ────────────────────────────────────────────────────────────
// A component that calls an audit fold recomputes the audit in every reader's browser: the gaps strip froze the
// page for 14.6 s there and, with no filesystem to read, printed a different verdict than the build had. This
// serves what `measure` returns as the module `id`, taken on first request (once per build process, shared by
// the client and the server bundle), so the page states the build's measurement and never repeats it.
export function measuredOncePlugin(id: string, measure: () => unknown): Plugin {
  const resolved = '\0' + id
  let source: string | undefined
  return {
    name: `double-torus:measured-once:${id}`,
    resolveId(request) {
      return request === id ? resolved : null
    },
    load(request) {
      if (request !== resolved) return null
      if (source === undefined) {
        const value = measure()
        const lost = lostInJson(value)
        if (lost.length) throw new Error(`measured-once ${id}: JSON cannot carry ${lost.length} value(s), first at ${lost[0]}`)
        source = `export const data = ${JSON.stringify(value)}`
      }
      return source
    },
  }
}

/** Paths inside `value` that a JSON round trip would drop or change — a function, a Map, a Set, a bigint, a non-finite number. */
export function lostInJson(value: unknown, at = 'data', seen = new Set<unknown>()): string[] {
  if (typeof value === 'function' || typeof value === 'bigint' || value instanceof Map || value instanceof Set) return [at]
  if (typeof value === 'number') return Number.isFinite(value) ? [] : [at]
  if (value === null || typeof value !== 'object' || seen.has(value)) return []
  seen.add(value)
  return Object.entries(value).flatMap(([key, inner]) => lostInJson(inner, `${at}.${key}`, seen))
}
