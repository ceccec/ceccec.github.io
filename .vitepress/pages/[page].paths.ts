// English monograph catch-all — vitepressAutomountPaths discovers complete indexes (no reconfiguration).
import { monographSliceFromRoute, vitepressAutomountPaths } from '../render'

export default {
  paths: () =>
    vitepressAutomountPaths('en').map(({ params }) => {
      const slice = monographSliceFromRoute(`/${params.page}`, 'en')
      // Keep the ROUTE slug (params.page) so /<page> resolves; slice supplies the computed title/body.
      return { params: { ...(slice ?? {}), page: params.page } }
    }),
}
