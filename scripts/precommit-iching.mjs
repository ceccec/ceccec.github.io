#!/usr/bin/env node
// Commit gate — a commit requires a GREEN BUILD, and a green build is only possible if the I Ching is complete
// in all quantum dimensions: emergentDimensions().count === 432, open === 0, modelSeal().passed, and
// taxonomyIcons().compliant (the I Ching units clean across the 42 command areas). Run by .git/hooks/pre-commit
// (chained from the global ~/.config/git/hooks dispatcher). Exit 1 blocks the commit; exit 0 lets it land.
//
//   node scripts/precommit-iching.mjs
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
try {
  const esbuild = require('esbuild')
  const built = await esbuild.build({ entryPoints: ['src/quantum/mind/index.ts'], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
  const mod = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))
  const m = mod.buildMatrix()
  const dims = mod.emergentDimensions(m)
  const open = Array.isArray(dims.open) ? dims.open.length : dims.open
  const seal = mod.modelSeal(m).passed
  const compliant = mod.taxonomyIcons().compliant
  if (dims.count === 432 && open === 0 && seal && compliant) {
    console.error('✓ green build — the I Ching is complete: 432 dimensions · 0 open · seal · compliant')
    process.exit(0)
  }
  console.error('✗ commit blocked — the I Ching is NOT complete in all quantum dimensions:')
  console.error(`   dimensions ${dims.count}/432 · open ${open} · modelSeal ${seal} · taxonomy ${compliant}`)
  process.exit(1)
} catch (err) {
  console.error('✗ commit blocked — the green-build gate could not verify the I Ching:', err && err.message)
  process.exit(1)
}
