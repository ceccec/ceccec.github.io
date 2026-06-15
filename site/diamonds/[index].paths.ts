// All in 1024 folders with index: each pure diamond is a folder with its own index
// page, generated as a native VitePress dynamic route. Computed once by
// diamondRoutes() and shared with the Bulgarian mirror. Nothing bypasses VitePress.
import { diamondRoutes } from '../../src/ui/lib/quantumMind'

export default {
  paths: () => diamondRoutes(),
}
