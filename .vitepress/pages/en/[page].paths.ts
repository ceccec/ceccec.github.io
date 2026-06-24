// English monograph catch-all — vitepressAutomountPaths discovers complete indexes (no reconfiguration).
import { monographSliceFromRoute, vitepressAutomountPaths } from '../../../src/routes/automount'

export default {
  paths: () =>
    vitepressAutomountPaths('en').map(({ params }) => {
      const slice = monographSliceFromRoute(`/${params.page}`, 'en')
      return { params: slice ?? params }
    }),
}
