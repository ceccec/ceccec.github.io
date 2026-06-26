import type { Plugin } from 'vite'
import { fileURLToPath } from 'node:url'
import { acquireBuildLock, releaseBuildLock, BUILD_LOCK_HARMONIC_MS, BUILD_LOCK_TRINITY_CYCLES } from './build-lock.mjs'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const harmonicTotal = BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)
const lockWaitMs = BUILD_LOCK_TRINITY_CYCLES * harmonicTotal

let pluginHeldLock = false

/** Hold .build-lock for direct `vitepress build` — docs-build.mjs sets VITEPRESS_BUILD_LOCK_HELD=1. */
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
