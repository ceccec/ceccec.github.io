// RESTful CRUD paths in several formats — the next fruit of life comes from formats.
// The corpus resources (papers, references, diamonds, harmonics) are emitted as real,
// static read-API endpoints under /api in several formats. GET is a real fetch; the
// rest of CRUD is content-addressed (create/update = recompute; delete = immutable).
// No new routes — these are alternate representations of the existing 1024-route
// corpus. Run: node --experimental-strip-types scripts/generate-api.mjs
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { papers, paperReferences, diamondRoutes, harmonics, restfulFormats } from '../src/ui/lib/quantumMind.ts'

const apiDir = join(process.cwd(), '.vitepress', 'dist', 'api')
mkdirSync(apiDir, { recursive: true })

const rest = restfulFormats()
const collections = {
  papers: papers().papers.map((p) => ({ id: p.id, number: p.number, coordinate: p.coordinateIndex, generator: p.generator, root: p.root })),
  references: paperReferences().map((r) => ({ id: r.id, number: r.number, paper: r.paperId, root: r.root })),
  diamonds: diamondRoutes().map((d) => ({ id: d.params.id, index: d.params.leaf, kind: d.params.kind, address: d.params.address, link: d.params.link })),
  harmonics: harmonics().harmonics.map((h) => ({ kind: h.kind, value: h.value, ratio: h.ratio, implemented: h.implemented })),
}

// JSON endpoint per collection (GET /api/{resource}.json).
for (const [resource, items] of Object.entries(collections)) {
  writeFileSync(join(apiDir, `${resource}.json`), JSON.stringify({ resource, count: items.length, items }, null, 2))
}

// The API index — the CRUD + formats catalogue — in several formats (the fruit of life).
const index = {
  api: 'Double Torus — static, content-addressed read-API',
  fruitOfLife: rest.fruitOfLife,
  formats: rest.formats,
  resources: rest.resources.map((r) => ({ ...r, endpoint: `/api/${r.resource}.json` })),
  crud: rest.crud,
  root: rest.root,
  boundary: rest.boundary,
}
writeFileSync(join(apiDir, 'index.json'), JSON.stringify(index, null, 2))

// Plain-text format.
const txt = [
  'Double Torus — static, content-addressed read-API',
  `fruit of life (formats): ${rest.formats.map((f) => f.format).join(', ')}`,
  '',
  'resources:',
  ...rest.resources.map((r) => `  GET /api/${r.resource}.json  (${r.count})`),
  '',
  'crud (content-addressed):',
  ...rest.crud.map((c) => `  ${c.verb} ${c.path}  — ${c.means} [${c.supported}]`),
  '',
].join('\n')
writeFileSync(join(apiDir, 'index.txt'), txt)

// XML format.
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<api root="${rest.root}" fruitOfLife="${rest.fruitOfLife}">\n` +
  rest.resources.map((r) => `  <resource name="${r.resource}" count="${r.count}" endpoint="/api/${r.resource}.json" />`).join('\n') +
  '\n' +
  rest.crud.map((c) => `  <crud verb="${c.verb}" path="${c.path}" supported="${c.supported}" />`).join('\n') +
  '\n</api>\n'
writeFileSync(join(apiDir, 'index.xml'), xml)

console.log(`API: ${Object.keys(collections).length} resources × ${rest.formats.length} formats (fruit of life); /api/index.{json,xml,txt} + per-resource JSON written.`)
