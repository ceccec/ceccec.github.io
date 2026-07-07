// Model card catch-all — one dedicated page per computed card; slugs from cardPagePaths at build.
import { cardPagePaths } from '../../../src/heaven/compute'

export default { paths: () => cardPagePaths() }
