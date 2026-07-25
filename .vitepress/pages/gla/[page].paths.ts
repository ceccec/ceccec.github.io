// Glagolitic monograph catch-all — vitepressAutomountPaths discovers complete indexes (no reconfiguration).
import { monographSliceFromRoute, vitepressAutomountPaths } from '../../../src/wind/routes/automount'

export default {
  paths: () =>
    vitepressAutomountPaths('gla').map(({ params }) => {
      const slice = monographSliceFromRoute(`/gla/${params.page}`, 'gla')
      // Keep the ROUTE slug (params.page) so /gla/<page> resolves; slice supplies the locally-translated title/body.
      return { params: { ...(slice ?? {}), page: params.page } }
    }),
}
