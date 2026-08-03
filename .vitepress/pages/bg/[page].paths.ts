// Bulgarian monograph catch-all — vitepressAutomountPaths discovers complete indexes (no reconfiguration).
import { monographSliceFromRoute, vitepressAutomountPaths } from '../../render'

export default {
  paths: () =>
    vitepressAutomountPaths('bg').map(({ params }) => {
      const slice = monographSliceFromRoute(`/bg/${params.page}`, 'bg')
      // Keep the ROUTE slug (params.page) so /bg/<page> resolves; slice supplies the locally-translated title/body.
      return { params: { ...(slice ?? {}), page: params.page } }
    }),
}
