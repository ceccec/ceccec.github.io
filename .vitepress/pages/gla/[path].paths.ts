// Glagolitic catch-all [path] route — rosetta decodes the URL path, no static pages needed.
import { catchAllRoutePaths, monographSliceFromRoute } from '../../render'

export default {
  paths: () => catchAllRoutePaths('gla').map(({ params }) => {
    const slice = monographSliceFromRoute(`/${params.path}`, 'gla')
    return { params: slice ? { ...params, ...slice } : params }
  }),
}
