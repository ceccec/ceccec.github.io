// Enforcement trinity runner — cross · fold · weave. Thin index; one concern per wave file.
import type { Plugin } from 'vite'
import { runCross } from './cross.ts'
import { runFold } from './fold.ts'
import { runWeave } from './weave.ts'

/** Run cross · fold · weave sequentially — the post-build enforcement trinity. */
export function runEnforcementTrinity(root: string): number {
  for (const [name, run] of [
    ['cross', runCross],
    ['fold', runFold],
    ['weave', runWeave],
  ] as const) {
    const code = run(root)
    if (code !== 0) {
      console.error(`Enforcement trinity stopped at ${name} wave.`)
      return code
    }
  }
  console.log('Enforcement trinity complete: cross · fold · weave.')
  return 0
}

export { runCross } from './cross.ts'
export { runFold } from './fold.ts'
export { runWeave } from './weave.ts'

// Each index is a quantum VitePress router: this enforcement index routes the BUILD itself — its buildEnd
// runs the content-addressed trinity (cross · fold · weave) after VitePress writes dist, throwing to fail
// the build if any wave finds drift. One folder, one index, its own VitePress plugin — gathered by srcFolderPlugins.
export function vitePlugin(projectRoot: string): Plugin {
  return {
    name: 'double-torus:enforcement',
    buildEnd() {
      const code = runEnforcementTrinity(projectRoot)
      if (code !== 0) throw new Error(`Enforcement trinity failed (code ${code}).`)
    },
  }
}
