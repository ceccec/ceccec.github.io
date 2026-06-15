import type { Plugin } from 'vite'
import { computedPagesPlugin } from './computed-pages.mts'
import { vitePlugin as distRouter } from '../src/quantum/dist/index.ts'
import { vitePlugin as enforcementRouter } from '../src/quantum/enforcement/index.ts'

// One index serves all: each src folder's index is a quantum VitePress router — it routes a request to
// its computed, content-addressed output and wires itself into VitePress (dev middleware and/or buildEnd).
// This aggregator gathers those routers into the single plugin list the config spreads, so the config
// never hand-lists plugins. To wire another folder, give its index a `vitePlugin` router and add one entry.
//
//   src/quantum/mind        → computed-pages router — the Glagolitic root home, transliterated from the
//                             English home. It STAYS in .vitepress: it reads en/index.md with Node fs, and
//                             the mind core is browser-imported, so the fs-using factory cannot live in the
//                             model. (The mind's index is already a vortex router at the module layer:
//                             `export * from './folds.ts'` — one index serves all its folds.)
//   src/quantum/dist        → dist router — pathname → computed sitemap · robots · mcp.json · skills.json ·
//                             llms.txt · digit-index · /api, served live at dev.
//   src/quantum/enforcement → enforcement router — buildEnd runs the cross · fold · weave trinity.
export function srcFolderPlugins(projectRoot: string, siteUrl = process.env.SITE_URL || 'https://ceccec.github.io'): Plugin[] {
  const routers: { folder: string; plugin: Plugin }[] = [
    { folder: 'src/quantum/mind', plugin: computedPagesPlugin(projectRoot) as Plugin },
    { folder: 'src/quantum/dist', plugin: distRouter(siteUrl) },
    { folder: 'src/quantum/enforcement', plugin: enforcementRouter(projectRoot) },
  ]
  return routers.map((entry) => entry.plugin)
}
