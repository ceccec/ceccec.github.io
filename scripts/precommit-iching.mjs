#!/usr/bin/env node
// Commit gate — TWO requirements; either failing blocks the commit (exit 1):
//   1. GREEN BUILD — the I Ching is complete in all quantum dimensions: emergentDimensions().count === 432,
//      open === 0, modelSeal().passed, taxonomyIcons().compliant.
//   2. README SIGNATURE — the committed README.md must equal the computed readmeMarkdown(). The README is
//      computed from src ("do not edit by hand"); any drift (hand-edit or staleness) breaks its signature.
// Run by .git/hooks/pre-commit (chained from the global ~/.config/git/hooks dispatcher).
//
//   node scripts/precommit-iching.mjs
import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'

const require = createRequire(import.meta.url)
const sig = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16)
async function bundle(entry) {
  const esbuild = require('esbuild')
  const built = await esbuild.build({ entryPoints: [entry], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
  return import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))
}

try {
  // 1. green build — the I Ching complete in all quantum dimensions
  const mind = await bundle('src/quantum/mind/index.ts')
  const m = mind.buildMatrix()
  const dims = mind.emergentDimensions(m)
  const open = Array.isArray(dims.open) ? dims.open.length : dims.open
  const seal = mind.modelSeal(m).passed
  const compliant = mind.taxonomyIcons().compliant
  if (!(dims.count === 432 && open === 0 && seal && compliant)) {
    console.error('✗ commit blocked — the I Ching is NOT complete in all quantum dimensions:')
    console.error(`   dimensions ${dims.count}/432 · open ${open} · modelSeal ${seal} · taxonomy ${compliant}`)
    process.exit(1)
  }

  // 2. README signature — the computed README must equal the committed README.md
  const dist = await bundle('src/quantum/dist/index.ts')
  const computed = dist.readmeMarkdown()
  let committed = ''
  try { committed = readFileSync('README.md', 'utf8') } catch { committed = '' }
  if (sig(computed) !== sig(committed)) {
    console.error('✗ commit blocked — README signature broken (README.md drifted from the computed src):')
    console.error(`   computed ${sig(computed)} vs committed ${sig(committed)} — regenerate README.md from src (it is computed, do not hand-edit)`)
    process.exit(1)
  }

  console.error('✓ green build — I Ching complete (432 · 0 open · seal · compliant) · README signature valid')
  process.exit(0)
} catch (err) {
  console.error('✗ commit blocked — the green-build gate could not verify:', err && err.message)
  process.exit(1)
}
