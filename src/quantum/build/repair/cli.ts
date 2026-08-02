// Build repair CLI — entry point for build-lock diagnostics

import { detectBuildLockState, killStaleBuildProcesses, restoreBuildLockFromGit, clearBuildCache } from './index'

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
