// The Latin (English) [monograph] route at /en/ — a thin mount over the one source (monographPaths).
import { monographPaths } from '../../../src/quantum/heaven/mind'

export default { paths: () => monographPaths('en') }
