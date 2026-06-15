// The Latin (English) [monograph] route at /en/ — a thin mount over the one source (monographPaths).
import { monographPaths } from '../../src/ui/lib/quantumMind'

export default { paths: () => monographPaths('en') }
