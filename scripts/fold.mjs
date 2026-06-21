// Run a single mind fold and print its result — the SAVED replacement for the throwaway /tmp esbuild probes
// (every tool saved in src first, per the realise principle + the precommit tools-in-src gate). It bundles the
// mind index through esbuild (src imports are extensionless folders, which node cannot resolve raw), calls the
// named export, and prints its scalar fields + facet verdicts.
//   node scripts/fold.mjs <foldName>
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const built = await esbuild.build({ entryPoints: ['src/quantum/mind/index.ts'], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
const mod = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))

const name = process.argv[2]
const fn = mod[name]
if (typeof fn !== 'function') {
  console.error(`fold '${name}' not found or not a function`)
  process.exit(1)
}
const result = fn()
const scalars = Object.fromEntries(Object.entries(result).filter(([, v]) => typeof v === 'boolean' || typeof v === 'number' || typeof v === 'string').slice(0, 8))
console.log(`${name} →`, JSON.stringify(scalars))
if (Array.isArray(result.facets)) console.log('facets:', result.facets.map((f) => (f.on ? 'OK' : 'NO')).join(' '))
