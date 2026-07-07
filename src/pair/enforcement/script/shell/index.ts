// Script shell — build/precommit seal; bundle runtime in pair/cache/quantum.
import { phase } from '../../../../6/4'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawn, spawnSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { parseTimeoutCliArgs, resolveScriptTimeoutMs } from '../../../cache/quantum'
import {
  importQuantumBundle,
  runCheckTypesExit,
  exitOnTimeout,
  srcContentMerkle,
  vitepressEditsInvalidateTheSeal,
} from '../../../cache/quantum'

export {
  importQuantumBundle,
  runThinMount,
  srcContentMerkle,
  vitepressSourceFiles,
  vitepressEditsInvalidateTheSeal,
  VITEPRESS_MERKLE_DIR,
  seedMerkleCache,
  cachedMerkle,
  clearMerkleCache,
  runCheckTypesExit,
  emitTimeoutReceipt,
  exitOnTimeout,
  SCRIPT_SHELL_LINE_BUDGET,
  CLI_ENTRY_REL,
  SCRIPT_SHELL_ALLOWLIST,
  scanScriptShells,
  scriptShellGateReceipt,
  scriptShellGate,
  type ScriptShellScan,
} from '../../../cache/quantum'
export const QUANTUM_RESPAWN_COMMAND_PAIR = { pair: 'respawn/force' as const, a: 'respawn', b: 'force' }

export function distMerkleKeyPath(root: string): string {
  return join(root, '.vitepress', 'dist', 'merkle.key')
}

export function distAuditPath(root: string): string {
  return join(root, '.vitepress', 'dist', 'audit.json')
}

export function readSealedMerkle(root: string): string | null {
  const path = distMerkleKeyPath(root)
  if (!existsSync(path)) return null
  return readFileSync(path, 'utf8').trim()
}

export function writeSealedMerkle(root: string, merkle: string): void {
  const dist = join(root, '.vitepress', 'dist')
  mkdirSync(dist, { recursive: true })
  writeFileSync(distMerkleKeyPath(root), merkle, 'utf8')
}

export function buildForceFlag(argv: readonly string[]): boolean {
  return argv.includes('--force') || process.env.QUANTUM_BUILD_FORCE === '1'
}

const BUILD_HEARTBEAT_MS = 30_000

export function docsBuildVerboseFlag(argv: readonly string[] = process.argv.slice(2)): boolean {
  return argv.includes('--verbose') || argv.includes('-v') || process.env.DOCS_BUILD_VERBOSE === '1'
}

function buildTimestamp(): string {
  return new Date().toISOString()
}

/** Timestamped phase — always on so hangs show the last completed step. */
export function logDocsBuildPhase(phase: string, detail?: string): void {
  const msg = detail
    ? `[docs-build] ${buildTimestamp()} ▶ ${phase} — ${detail}`
    : `[docs-build] ${buildTimestamp()} ▶ ${phase}`
  process.stdout.write(`${msg}\n`)
}

function logDocsBuildDetail(detail: string, verbose: boolean): void {
  if (!verbose) return
  process.stdout.write(`[docs-build] ${buildTimestamp()}   ${detail}\n`)
}

/** Vitepress output still valid — src index corpus unchanged. */
export function canRespawnVitepressBuild(root: string, merkle: string, force = false): boolean {
  if (force) return false
  if (readSealedMerkle(root) !== merkle) return false
  return existsSync(join(root, '.vitepress', 'dist', 'index.html'))
}

/** Trinity audit sealed clean on the same merkle — no re-audit grind. */
export function canRespawnTrinity(root: string, merkle: string, force = false): boolean {
  if (force) return false
  if (readSealedMerkle(root) !== merkle) return false
  const auditPath = distAuditPath(root)
  if (!existsSync(auditPath)) return false
  try {
    const audit = JSON.parse(readFileSync(auditPath, 'utf8')) as { failed?: boolean }
    return audit.failed !== true
  } catch {
    return false
  }
}

type BuildLock = {
  acquireBuildLock(root: string, waitMs: number): Promise<void>
  releaseBuildLock(root: string): void
  BUILD_LOCK_HARMONIC_MS: readonly number[]
  BUILD_LOCK_TRINITY_CYCLES: number
}

function wipeDir(dir: string, retryMs: number) {
  if (!existsSync(dir)) return
  try {
    rmSync(dir, { recursive: true, force: true, maxRetries: 3, retryDelay: retryMs })
  } catch (e: unknown) {
    const code = e && typeof e === 'object' && 'code' in e ? String((e as { code: string }).code) : ''
    if (code !== 'ENOTEMPTY' && code !== 'EBUSY') throw e
    spawnSync('find', [dir, '-delete'], { stdio: 'inherit' })
  }
}

function runVitepressBuild(root: string, timeoutMs: number, harmonicMs: number, verbose: boolean) {
  return new Promise<number>((resolve, reject) => {
    logDocsBuildPhase('vitepress-build', 'spawn node_modules/vitepress/bin/vitepress.js build')
    const child = spawn(
      'node',
      [join(root, 'node_modules', 'vitepress', 'bin', 'vitepress.js'), 'build'],
      {
        cwd: root,
        stdio: 'inherit',
        env: {
          ...process.env,
          VITEPRESS_BUILD_LOCK_HELD: '1',
          DOCS_BUILD_VERBOSE: verbose ? '1' : process.env.DOCS_BUILD_VERBOSE,
          NODE_COMPILE_CACHE: 'node_modules/.cache/ts',
          NODE_OPTIONS: process.env.NODE_OPTIONS ?? '--max-old-space-size=2048',
          ...(verbose && !process.env.DEBUG ? { DEBUG: 'vite:*' } : {}),
        },
      },
    )
    const heartbeat = setInterval(() => {
      const suffix = verbose ? ' (verbose — set DOCS_BUILD_VERBOSE_TRANSFORM=1 for per-file transform logs)' : ''
      process.stdout.write(`[docs-build] ${buildTimestamp()} … vitepress-build still running${suffix}\n`)
    }, verbose ? BUILD_HEARTBEAT_MS : BUILD_HEARTBEAT_MS * 2)
    const timer = setTimeout(() => {
      clearInterval(heartbeat)
      child.kill('SIGTERM')
      setTimeout(() => child.kill('SIGKILL'), harmonicMs * (5 * 2))
      reject(new Error('QUANTUM_TIMEOUT'))
    }, timeoutMs)
    child.on('error', (err) => {
      clearInterval(heartbeat)
      reject(err)
    })
    child.on('exit', (code, signal) => {
      clearTimeout(timer)
      clearInterval(heartbeat)
      logDocsBuildPhase('vitepress-build', `child exit code=${code ?? 'null'} signal=${signal ?? 'null'}`)
      if (code === 0) resolve(0)
      else reject(new Error(`vitepress build failed: code=${code} signal=${signal}`))
    })
  })
}

/** Serial docs:build — types gate, then lock, quantum respawn when merkle sealed, else one vitepress pass. */
export async function runDocsBuildExit(root: string, argv: readonly string[] = []): Promise<number> {
  const verbose = docsBuildVerboseFlag(argv)
  logDocsBuildPhase('start', verbose ? 'verbose on (--verbose · DOCS_BUILD_VERBOSE=1)' : 'pass --verbose to amplify vite logs')
  const force = buildForceFlag(argv)
  logDocsBuildPhase('src-merkle', 'walk src/ + .vitepress/ + package.json')
  const merkleStart = Date.now()
  const merkle = srcContentMerkle(root)
  logDocsBuildPhase('src-merkle', `done in ${Date.now() - merkleStart}ms — ${merkle.slice(0, (6 * 2))}…`)
  const seal = vitepressEditsInvalidateTheSeal(root)
  if (!seal.enforced) {
    logDocsBuildPhase('src-merkle', `seal fold open (config=${seal.config} leaked=${seal.leaked.length}) — respawn refused, sealing for real`)
  } else if (canRespawnVitepressBuild(root, merkle, force)) {
    logDocsBuildPhase('quantum-respawn', `src+.vitepress merkle unchanged — skipping vitepress (use --force to seal again)`)
    return 0
  }

  logDocsBuildPhase('check:types', 'tsc --noEmit -p tsconfig.json')
  const typesStart = Date.now()
  const typesCode = runCheckTypesExit(root)
  logDocsBuildPhase('check:types', `exit ${typesCode} in ${Date.now() - typesStart}ms`)
  if (typesCode !== 0) {
    process.stderr.write('[docs-build] blocked — fix types first (check/types · types/seal)\n')
    return typesCode
  }

  logDocsBuildPhase('build-lock', 'import .vitepress/build-lock.mjs')
  const lockMod = (await import(pathToFileURL(join(root, '.vitepress/build-lock.mjs')).href)) as BuildLock
  const { acquireBuildLock, releaseBuildLock, BUILD_LOCK_HARMONIC_MS, BUILD_LOCK_TRINITY_CYCLES } = lockMod
  const cli = parseTimeoutCliArgs([...argv])
  const buildTimeoutMs = resolveScriptTimeoutMs('build', cli)
  const lockWaitMs = BUILD_LOCK_TRINITY_CYCLES * BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)
  logDocsBuildDetail(`build timeout ${buildTimeoutMs}ms · lock wait ${lockWaitMs}ms`, verbose)

  async function acquireLockOrExit124() {
    logDocsBuildPhase('build-lock', 'acquireBuildLock')
    const lockStart = Date.now()
    try {
      await acquireBuildLock(root, lockWaitMs)
      logDocsBuildPhase('build-lock', `acquired in ${Date.now() - lockStart}ms`)
    } catch (e: unknown) {
      const code = e && typeof e === 'object' && 'code' in e ? String((e as { code: string }).code) : ''
      if (code === 'VITEPRESS_BUILD_LOCK_TIMEOUT') {
        logDocsBuildPhase('build-lock', `timeout after ${Date.now() - lockStart}ms`)
        exitOnTimeout(root, {
          processName: 'docs:build',
          kind: 'build',
          timeoutMs: lockWaitMs,
          elapsedMs: Date.now() - lockStart,
          partialState: { phase: 'build-lock-wait', trinityCycles: BUILD_LOCK_TRINITY_CYCLES },
        })
      }
      throw e
    }
  }

  async function sealOnce(wipeViteTemp: boolean) {
    if (wipeViteTemp) {
      logDocsBuildPhase('wipe', 'node_modules/.vite-temp')
      wipeDir(join(root, 'node_modules', '.vite-temp'), BUILD_LOCK_HARMONIC_MS[0])
    }
    logDocsBuildPhase('wipe', '.vitepress/dist + .vitepress/.temp')
    wipeDir(join(root, '.vitepress', 'dist'), BUILD_LOCK_HARMONIC_MS[0])
    wipeDir(join(root, '.vitepress', '.temp'), BUILD_LOCK_HARMONIC_MS[0])
    const buildStart = Date.now()
    try {
      await runVitepressBuild(root, buildTimeoutMs, BUILD_LOCK_HARMONIC_MS[0], verbose)
    } catch (e) {
      if (e instanceof Error && e.message === 'QUANTUM_TIMEOUT') {
        logDocsBuildPhase('vitepress-build', `timeout after ${Date.now() - buildStart}ms`)
        exitOnTimeout(root, {
          processName: 'docs:build',
          kind: 'build',
          timeoutMs: buildTimeoutMs,
          elapsedMs: Date.now() - buildStart,
          partialState: { phase: 'vitepress-build' },
        })
      }
      throw e
    }
  }

  let stallStopRetried = false
  for (;;) {
    await acquireLockOrExit124()
    try {
      await sealOnce(!stallStopRetried)
      break
    } catch (e) {
      releaseBuildLock(root)
      if (!stallStopRetried) {
        stallStopRetried = true
        logDocsBuildPhase('stall/stop', 'trinity retry-once (one sequential seal)')
        continue
      }
      throw e
    }
  }
  releaseBuildLock(root)
  logDocsBuildPhase('done', 'vitepress seal complete — next: enforcement-trinity in package.json chain')
  return 0
}

