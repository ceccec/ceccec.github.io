// Glagolitic monograph catch-all — vitepressAutomountPaths discovers complete indexes (no reconfiguration).
import { monographSliceFromRoute, vitepressAutomountPaths } from '../../src/wind/routes/automount'

export default {
  paths: () =>
    vitepressAutomountPaths('gla').map(({ params }) => {
      const slice = monographSliceFromRoute(`/${params.page}`, 'gla')
      return { params: slice ?? params }
    }),
}
