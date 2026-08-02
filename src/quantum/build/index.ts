// Build system tooling — repair, diagnostics, health checks

export { detectBuildLockState, killStaleBuildProcesses, restoreBuildLockFromGit, clearBuildCache, repairBuildLocks, buildRepair, type BuildLockState, type BuildRepairPlan } from './repair/index'
export { runRepairCli } from './repair/cli'

export const build = {
  repair: async () => {
    const { repairBuildLocks } = await import('./repair/index.ts')
    return repairBuildLocks()
  }
}
