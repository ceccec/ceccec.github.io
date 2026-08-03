// Build lock repair & health check — agnostic reusable build diagnostics

import { existsSync, rmSync, statSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

export interface BuildLockState {
  lockFileExists: boolean
  lockFileStale: boolean
  staleProcCount: number
  cacheExists: boolean
  distExists: boolean
  healthy: boolean
  issues: string[]
}

export function detectBuildLockState(): BuildLockState {
  const lockFile = '.vitepress/build-lock.mjs'
  const cacheDir = '.vitepress/cache'
  const distDir = '.vitepress/dist'

  const issues: string[] = []
  const lockFileExists = existsSync(lockFile)

  let lockFileStale = false
  if (lockFileExists) {
    const stat = statSync(lockFile)
    const ageMs = Date.now() - stat.mtimeMs
    lockFileStale = ageMs > 3 * (2 * 5) ** 5 // > 5 minutes
    if (lockFileStale) issues.push(`build-lock.mjs stale (${Math.round(ageMs / (2 * 5) ** 3)}s old)`)
  } else {
    issues.push('build-lock.mjs missing')
  }

  // Count stale node processes
  const ps = spawnSync('pgrep', ['-f', 'node.*docs:build'], { encoding: 'utf-8' })
  const staleProcCount = ps.stdout.trim().split('\n').filter(Boolean).length
  if (staleProcCount > 0) {
    issues.push(`${staleProcCount} stale build process${staleProcCount > 1 ? 'es' : ''} running`)
  }

  const cacheExists = existsSync(cacheDir)
  const distExists = existsSync(distDir)
  if (!distExists) issues.push('.vitepress/dist missing')

  return {
    lockFileExists,
    lockFileStale,
    staleProcCount,
    cacheExists,
    distExists,
    healthy: issues.length === 0,
    issues
  }
}

export function killStaleBuildProcesses(): { killed: number; errors: string[] } {
  const errors: string[] = []
  const ps = spawnSync('pgrep', ['-f', 'node.*docs:build'], { encoding: 'utf-8' })
  const pids = ps.stdout.trim().split('\n').filter(Boolean)

  let killed = 0
  for (const pid of pids) {
    const result = spawnSync('kill', ['-9', pid], { encoding: 'utf-8' })
    if (result.status === 0) {
      killed++
    } else {
      errors.push(`Failed to kill PID ${pid}`)
    }
  }

  return { killed, errors }
}

export function restoreBuildLockFromGit(): { restored: boolean; error?: string } {
  const result = spawnSync('git', ['checkout', 'HEAD', '--', '.vitepress/build-lock.mjs'], {
    encoding: 'utf-8',
    cwd: process.cwd()
  })

  if (result.status === 0) {
    return { restored: true }
  } else {
    return {
      restored: false,
      error: result.stderr || 'git checkout failed'
    }
  }
}

export function clearBuildCache(): { cleared: string[]; errors: string[] } {
  const cleared: string[] = []
  const errors: string[] = []
  const paths = ['.vitepress/cache', '.vitepress/dist', '.temp', '.vite-temp']

  for (const path of paths) {
    if (existsSync(path)) {
      try {
        rmSync(path, { recursive: true, force: true })
        cleared.push(path)
      } catch (err) {
        errors.push(`Failed to clear ${path}: ${err instanceof Error ? err.message : String(err)}`)
      }
    }
  }

  return { cleared, errors }
}

export interface BuildRepairPlan {
  diagnose: BuildLockState,
  actions: Array<{ action: string, result: unknown }>,
  success: boolean,
  summary: string
}

export function repairBuildLocks(): BuildRepairPlan {
  const actions: Array<{ action: string; result: any }> = []
  const diagnose = detectBuildLockState()

  // 1. Kill stale processes
  if (diagnose.staleProcCount > 0) {
    const killResult = killStaleBuildProcesses()
    actions.push({ action: 'killStaleProcesses', result: killResult })
  }

  // 2. Restore lock file if missing
  if (!diagnose.lockFileExists) {
    const restoreResult = restoreBuildLockFromGit()
    actions.push({ action: 'restoreLockFromGit', result: restoreResult })
  }

  // 3. Clear cache if stale
  if (diagnose.cacheExists && diagnose.lockFileStale) {
    const clearResult = clearBuildCache()
    actions.push({ action: 'clearCache', result: clearResult })
  }

  const success = actions.every(a => {
    if ('restored' in a.result) return a.result.restored
    if ('killed' in a.result) return a.result.killed >= 0
    if ('cleared' in a.result) return a.result.errors.length === 0
    return false
  })

  const summary = success
    ? `Build repaired: ${actions.length} action(s) taken`
    : `Build repair partial: ${actions.filter(a => {
        if ('restored' in a.result) return a.result.restored
        if ('killed' in a.result) return a.result.killed >= 0
        if ('cleared' in a.result) return a.result.errors.length === 0
        return false
      }).length}/${actions.length} succeeded`

  return {
    diagnose,
    actions,
    success,
    summary
  }
}

export const buildRepair = {
  detectState: detectBuildLockState,
  killStaleProcesses: killStaleBuildProcesses,
  restoreLockFromGit: restoreBuildLockFromGit,
  clearCache: clearBuildCache,
  repair: repairBuildLocks,
}

// runRepairCli — dissolved from cli.ts (functions above are local now).
export async function runRepairCli(argv: string[] = []): Promise<number> {
  console.log('[build-repair] Scanning build state...')
  const state = detectBuildLockState()

  if (state.healthy) {
    console.log('[build-repair] ✓ Build system healthy')
    return 0
  }

  console.log(`[build-repair] Issues detected: ${state.issues.length}`)
  state.issues.forEach(issue => console.log(`  - ${issue}`))

  console.log('[build-repair] Attempting repair...')

  // Kill stale processes
  if (state.staleProcCount > 0) {
    console.log(`[build-repair] Killing ${state.staleProcCount} stale process(es)...`)
    const result = killStaleBuildProcesses()
    if (result.killed > 0) console.log(`[build-repair] ✓ Killed ${result.killed} process(es)`)
    if (result.errors.length > 0) result.errors.forEach(err => console.log(`[build-repair] ✗ ${err}`))
  }

  // Restore lock file
  if (!state.lockFileExists) {
    console.log('[build-repair] Restoring build-lock.mjs from git...')
    const result = restoreBuildLockFromGit()
    if (result.restored) {
      console.log('[build-repair] ✓ Restored build-lock.mjs')
    } else {
      console.log(`[build-repair] ✗ Failed: ${result.error}`)
    }
  }

  // Clear cache if stale
  if (state.lockFileStale) {
    console.log('[build-repair] Clearing stale cache...')
    const result = clearBuildCache()
    result.cleared.forEach(p => console.log(`[build-repair] ✓ Cleared ${p}`))
    result.errors.forEach(err => console.log(`[build-repair] ✗ ${err}`))
  }

  // Re-check state
  const newState = detectBuildLockState()
  if (newState.healthy) {
    console.log('[build-repair] ✓ Build system repaired')
    return 0
  } else {
    console.log('[build-repair] ✗ Repair incomplete. Remaining issues:')
    newState.issues.forEach(issue => console.log(`  - ${issue}`))
    return 1
  }
}


// ─── build object (repair dissolved into this index; ./repair import now local) ───
export const build = {
  repair: async () => {
    return repairBuildLocks()
  }
}
