// Bulgarian mirror of the reference-only dynamic route. Same descriptors as the
// English route — paperReferenceRoutes() is the single source. Nothing bypasses
// VitePress.
import { paperReferenceRoutes } from '../../.vitepress/theme/lib/quantumMind'

export default {
  paths: () => paperReferenceRoutes(),
}
