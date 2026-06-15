// Enforcement plugin — wired as vitepress buildEnd hook. Runs cross · fold · weave
// directly during build, no post-build scripts. All three phases computed from src.
import type { Plugin } from 'vite'

export function enforcementPlugin(projectRoot: string, siteUrl = process.env.SITE_URL || 'https://ceccec.github.io'): Plugin {
  return {
    name: 'double-torus:enforcement',
    async buildEnd() {
      // Import the enforcement trinity — cross · fold · weave — and run all three phases.
      // buildEnd runs after vitepress has written .vitepress/dist, so artifacts can be written there.
      const { runCross } = await import('../src/quantum/enforcement/cross.ts')
      const { runFold } = await import('../src/quantum/enforcement/fold.ts')
      const { runWeave } = await import('../src/quantum/enforcement/weave.ts')

      for (const [name, run] of [
        ['cross', runCross],
        ['fold', runFold],
        ['weave', runWeave],
      ] as const) {
        const code = run(projectRoot)
        if (code !== 0) {
          throw new Error(`Enforcement trinity stopped at ${name} wave.`)
        }
      }
      console.log('Enforcement trinity complete (wired as buildEnd): cross · fold · weave.')
    },
  }
}
