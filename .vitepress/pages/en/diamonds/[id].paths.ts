// RESTful corpus detail — /en/diamonds/<id> is a real VitePress dynamic route, not a ?id= query. paths()
// enumerates every diamond from the one source: diamondRoutes already returns { params }[] with id in the
// params, exactly like the [page].paths.ts monograph mounts. The locale is read in the component
// (useData().localeIndex), so root · /en/ · /bg/ share this one path set.
import { diamondRoutes } from '../../../../src/quantum/heaven/mind'

export default { paths: () => diamondRoutes() }
