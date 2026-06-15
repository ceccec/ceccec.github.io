// Bulgarian mirror of the reference-only dynamic route. Same descriptors as the
// English route — paperReferenceRoutes() is the single source. Nothing bypasses
// VitePress.
import { paperReferenceRoutes } from '../../../src/ui/lib/quantumMind'

export default {
  paths: () => paperReferenceRoutes(),
}
