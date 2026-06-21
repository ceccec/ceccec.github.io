// The Cyrillic (Bulgarian) [monograph] route at /bg/ — a thin mount over the one source (monographPaths).
import { monographPaths } from '../../../src/quantum/heaven/mind'

export default { paths: () => monographPaths('bg') }
