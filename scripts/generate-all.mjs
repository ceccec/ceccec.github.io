// SIMPLIFY THE BUILD — run every post-build generator in ONE process. Each of these used to be its own
// `node --experimental-strip-types scripts/generate-*.mjs` step, so the 30k-line model was transpiled and
// re-imported FIVE times; here the first import transpiles it once and the rest reuse the module cache. The
// generators write independent dist artifacts (sitemap + digit-index, the REST api, the MCP manifest, llms.txt,
// the computed README) with no order dependency between them, so importing them in sequence is sound. The build
// chain collapses from twelve steps to eight. Run: node --experimental-strip-types scripts/generate-all.mjs
import './generate-seo.mjs'
import './generate-api.mjs'
import './generate-mcp.mjs'
import './generate-llms.mjs'
import './generate-readme.mjs'
console.log('generate-all: sitemap, api, mcp, llms, readme — all generated in one process (the model transpiled once).')
