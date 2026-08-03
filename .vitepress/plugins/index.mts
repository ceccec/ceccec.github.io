// ── Thin VitePress plugin mount (dry-clean of the vitepress-thin-mount ratchet) — the build-time Vite
// plugins consolidated into ONE index the config consumes, so .vitepress carries index files only. Pure
// build hooks (no deep src imports); the src-consuming plugins route through the barrels in later increments.
import type { Plugin } from 'vite'
import { fileURLToPath } from 'node:url'
import { acquireBuildLock, releaseBuildLock, BUILD_LOCK_HARMONIC_MS, BUILD_LOCK_TRINITY_CYCLES } from '../build-lock.mjs'

// ── build-lock: hold .build-lock for a direct `vitepress build` (docs-build.mjs sets VITEPRESS_BUILD_LOCK_HELD=1).
const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const harmonicTotal = BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)
const lockWaitMs = BUILD_LOCK_TRINITY_CYCLES * harmonicTotal
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
