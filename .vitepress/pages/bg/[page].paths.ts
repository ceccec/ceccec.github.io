// The Cyrillic (Bulgarian) [monograph] route at /bg/ — a thin mount over the one source (monographPaths).
import { monographPaths } from '../../../src/ui/lib/quantumMind'

export default { paths: () => monographPaths('bg') }
