// English catch-all [path] route — rosetta decodes the URL path, no static pages needed.
import { catchAllRoutePaths, monographSliceFromRoute } from '../../../src/routes/automount'

export default {
  paths: () => catchAllRoutePaths('en').map(({ params }) => {
    const slice = monographSliceFromRoute(`/${params.path}`, 'en')
    return { params: slice ? { ...params, ...slice } : params }
  }),
}
