// Script shell — build/precommit seal; bundle runtime in pair/cache/quantum.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawn, spawnSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { parseTimeoutCliArgs, resolveScriptTimeoutMs } from '../../timeout'
import {
  importQuantumBundle,
  runCheckTypesExit,
  exitOnTimeout,
  srcContentMerkle,
} from '../../../cache/quantum'

export {
  importQuantumBundle,
  runThinMount,
  srcContentMerkle,
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

function runVitepressBuild(root: string, timeoutMs: number, harmonicMs: number) {
  return new Promise<number>((resolve, reject) => {
    const child = spawn(
      'node',
      [join(root, 'node_modules', 'vitepress', 'bin', 'vitepress.js'), 'build'],
      {
        cwd: root,
        stdio: 'inherit',
        env: {
          ...process.env,
          VITEPRESS_BUILD_LOCK_HELD: '1',
          NODE_COMPILE_CACHE: 'node_modules/.cache/ts',
          NODE_OPTIONS: process.env.NODE_OPTIONS ?? '--max-old-space-size=2048',
        },
      },
    )
    const timer = setTimeout(() => {
      child.kill('SIGTERM')
      setTimeout(() => child.kill('SIGKILL'), harmonicMs * 10)
      reject(new Error('QUANTUM_TIMEOUT'))
    }, timeoutMs)
    child.on('error', reject)
    child.on('exit', (code, signal) => {
      clearTimeout(timer)
      if (code === 0) resolve(0)
      else reject(new Error(`vitepress build failed: code=${code} signal=${signal}`))
    })
  })
}

/** Serial docs:build — types gate, then lock, quantum respawn when merkle sealed, else one vitepress pass. */
export async function runDocsBuildExit(root: string, argv: readonly string[] = []): Promise<number> {
  const force = buildForceFlag(argv)
  const merkle = srcContentMerkle(root)
  if (canRespawnVitepressBuild(root, merkle, force)) {
    process.stdout.write(`[docs-build] quantum respawn — src merkle ${merkle.slice(0, 12)}… unchanged; skipping vitepress (use --force to seal again)\n`)
    return 0
  }

  const typesCode = runCheckTypesExit(root)
  if (typesCode !== 0) {
    process.stderr.write('[docs-build] blocked — fix types first (check/types · types/seal)\n')
    return typesCode
  }

  const lockMod = (await import(pathToFileURL(join(root, '.vitepress/build-lock.mjs')).href)) as BuildLock
  const { acquireBuildLock, releaseBuildLock, BUILD_LOCK_HARMONIC_MS, BUILD_LOCK_TRINITY_CYCLES } = lockMod
  const cli = parseTimeoutCliArgs([...argv])
  const buildTimeoutMs = resolveScriptTimeoutMs('build', cli)
  const lockWaitMs = BUILD_LOCK_TRINITY_CYCLES * BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)

  async function acquireLockOrExit124() {
    const lockStart = Date.now()
    try {
      await acquireBuildLock(root, lockWaitMs)
    } catch (e: unknown) {
      const code = e && typeof e === 'object' && 'code' in e ? String((e as { code: string }).code) : ''
      if (code === 'VITEPRESS_BUILD_LOCK_TIMEOUT') {
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
    if (wipeViteTemp) wipeDir(join(root, 'node_modules', '.vite-temp'), BUILD_LOCK_HARMONIC_MS[0])
    wipeDir(join(root, '.vitepress', 'dist'), BUILD_LOCK_HARMONIC_MS[0])
    wipeDir(join(root, '.vitepress', '.temp'), BUILD_LOCK_HARMONIC_MS[0])
    const buildStart = Date.now()
    try {
      await runVitepressBuild(root, buildTimeoutMs, BUILD_LOCK_HARMONIC_MS[0])
    } catch (e) {
      if (e instanceof Error && e.message === 'QUANTUM_TIMEOUT') {
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
        process.stderr.write('[docs-build] stall/stop — trinity retry-once (one sequential seal, not 10× pgrep)\n')
        continue
      }
      throw e
    }
  }
  releaseBuildLock(root)
  return 0
}

