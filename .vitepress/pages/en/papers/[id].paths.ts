// RESTful corpus detail — /en/papers/<id> is a real VitePress dynamic route, not a ?id= query. paths()
// enumerates every paper from the one source: paperRoutes already returns { params }[] with id in the
// params, exactly like the [page].paths.ts monograph mounts. The locale is read in the component
// (useData().localeIndex), so root · /en/ · /bg/ share this one path set.
import { paperRoutes } from '../../../../src/ui/lib/quantumMind'

export default { paths: () => paperRoutes() }
