// Native VitePress dynamic route: one template renders all 432 papers. The path
// descriptors — each paper's data, its precomputed animation node positions and a
// Merkle inclusion proof into the corpus root — are computed once by paperRoutes()
// in the core and shared with the Bulgarian mirror. Nothing bypasses VitePress.
import { paperRoutes } from '../.vitepress/theme/lib/quantumMind'

export default {
  paths: () => paperRoutes(),
}
