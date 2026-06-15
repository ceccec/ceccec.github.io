// Bulgarian mirror of the dynamic papers route. Same computed descriptors as the
// English route — paperRoutes() is the single source — the bg template renders the
// labels in Bulgarian. Nothing bypasses VitePress.
import { paperRoutes } from '../../../src/ui/lib/quantumMind'

export default {
  paths: () => paperRoutes(),
}
