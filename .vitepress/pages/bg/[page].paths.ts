// Bulgarian monograph catch-all — vitepressAutomountPaths discovers complete indexes (no reconfiguration).
import { monographSliceFromRoute, vitepressAutomountPaths } from '../../../src/routes/automount'

export default {
  paths: () =>
    vitepressAutomountPaths('bg').map(({ params }) => {
      const slice = monographSliceFromRoute(`/bg/${params.page}`, 'bg')
      return { params: slice ?? params }
    }),
}
