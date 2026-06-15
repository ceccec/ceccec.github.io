// The other 432 files: reference-only dynamic route. Each reference is the reverse
// fold (the bidirectional dual) of a proof paper — a pointer, not a proof. Computed
// once by paperReferenceRoutes() in the core and shared with the Bulgarian mirror.
// Nothing bypasses VitePress.
import { paperReferenceRoutes } from '../../src/ui/lib/quantumMind'

export default {
  paths: () => paperReferenceRoutes(),
}
