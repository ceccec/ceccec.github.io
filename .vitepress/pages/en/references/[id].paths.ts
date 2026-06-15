// RESTful corpus detail — /en/references/<id> is a real VitePress dynamic route, not a ?id= query.
// paths() enumerates every reference from the one source: paperReferenceRoutes already returns
// { params }[] with id in the params, exactly like the [page].paths.ts monograph mounts. The locale is
// read in the component (useData().localeIndex), so root · /en/ · /bg/ share this one path set.
import { paperReferenceRoutes } from '../../../../src/ui/lib/quantumMind'

export default { paths: () => paperReferenceRoutes() }
