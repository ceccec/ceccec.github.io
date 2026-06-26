import type { Plugin } from 'vite'

function ts(): string {
  return new Date().toISOString()
}

function log(phase: string, detail?: string): void {
  const line = detail
    ? `[vitepress] ${ts()} ▶ ${phase} — ${detail}`
    : `[vitepress] ${ts()} ▶ ${phase}`
  console.log(line)
}

/** Vite/Rollup build hooks — active when DOCS_BUILD_VERBOSE=1 or --verbose passed via docs-build env. */
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
