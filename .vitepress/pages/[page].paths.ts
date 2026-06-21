// The DEFAULT Glagolitic [monograph] route — a thin mount over the one source (monographPaths). No
// mirroring: the page set, titles and SEO live once in staticPages; the locale is computed by math.
import { monographPaths } from '../../src/quantum/heaven/mind'

export default { paths: () => monographPaths('gla') }
