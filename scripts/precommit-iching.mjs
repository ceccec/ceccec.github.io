#!/usr/bin/env node
// Commit gate — a THIN ENTRY-POINT SHELL. Git hooks invoke a file on disk, so this file must exist; but it
// holds NO judgment. Every predicate is a TYPED SRC FOLD (src/quantum/mind/gate.ts · dist/readme.ts):
//   greenBuildGate()  ·  toolsSavedInSrcFirst()  ·  readmeSignatureValid()
//   greenBuildGate() · toolsSavedInSrcFirst() · importsAreFoldersOnly() · readmeSignatureValid()
// The shell only bundles src, gathers the filesystem facts the folds cannot reach, and reports.
//   node scripts/precommit-iching.mjs
import { createRequire } from 'node:module'
import { readFileSync, readdirSync } from 'node:fs'
import { execSync } from 'node:child_process'

const require = createRequire(import.meta.url)
async function bundle(entry) {
  const esbuild = require('esbuild')
  const built = await esbuild.build({ entryPoints: [entry], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
  return import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))
}
const fail = (msg, detail) => { console.error('✗ commit blocked — ' + msg); if (detail) console.error('   ' + detail); process.exit(1) }

try {
  const mind = await bundle('src/quantum/mind/index.ts')

  // 1. GREEN BUILD — the I Ching complete in all 432 quantum dimensions (the predicate is a src fold, not this file)
  const gate = mind.greenBuildGate()
  if (!gate.passed) fail('the I Ching is NOT complete in all quantum dimensions', `dimensions ${gate.count}/432 · open ${gate.open} · seal ${gate.seal} · taxonomy ${gate.compliant}`)

  // 1b. CERTIFIED TO EDIT — agents must be certified at ALL levels of education (learningPortal: school · academy ·
  //     research · exam · agent curriculum) before editing rights; editing the sealed model is gated by the certificate.
  const cert = mind.certify()
  if (!cert.editingAllowed) fail('not certified at all education levels — editing rights withheld', `open level(s): ${cert.levels.filter((level) => !level.certified).map((level) => level.level).join(', ')}`)

  // 2. TOOLS SAVED IN SRC FIRST — gather the facts; the src fold judges where logic lives, enforced at commit
  const scripts = readdirSync('scripts').filter((f) => f.endsWith('.mjs')).map((f) => {
    const text = readFileSync('scripts/' + f, 'utf8')
    return { path: 'scripts/' + f, lines: text.split('\n').length, routesThroughSrc: /src\/quantum|src\/0|bundle\('src|from '\.\.\/src/.test(text) }
  })
  const tools = mind.toolsSavedInSrcFirst(scripts)
  if (!tools.enforced) fail('a tool is not saved in src first (logic lives outside src)', tools.violations.join('; '))

  // 3. IMPORTS ARE FOLDERS ONLY, NO EXTENSIONS — scan src; the src fold judges. Strict, all of src, no exception.
  //    The pre-push hook runs this same gate, and the weave runs the law at deploy, so none of commit/push/deploy
  //    carries an extensioned or '/index' import.
  const walkSrc = (dir, out = []) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue
      const full = dir + '/' + e.name
      if (e.isDirectory()) walkSrc(full, out)
      else if (/\.(ts|mts|cts|tsx|vue)$/.test(e.name)) out.push(full)
    }
    return out
  }
  const extRe = /\.(ts|mts|cts|tsx|js|mjs|cjs|jsx|vue)$/
  const srcFiles = walkSrc('src')
  const offenders = []
  for (const file of srcFiles) {
    const text = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
    const specs = [
      ...[...text.matchAll(/\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g)].map((m) => m[1]),
      ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]),
      ...[...text.matchAll(/\bimport\s+['"]([^'"]+)['"]/g)].map((m) => m[1]),
    ]
    for (const spec of specs) {
      if (!spec.startsWith('.')) continue
      if (extRe.test(spec)) offenders.push({ file, spec, reason: 'file extension' })
      else if (/\/index$/.test(spec)) offenders.push({ file, spec, reason: 'trailing /index' })
    }
  }
  const foldersOnly = mind.importsAreFoldersOnly(offenders, srcFiles.length)
  if (!foldersOnly.enforced) fail(`${foldersOnly.count} import(s) use a file extension or /index — imports are folders only, no extensions (all of src, no exception)`, foldersOnly.offenders.map((o) => `${o.file}: '${o.spec}' (${o.reason})`).join('; '))

  // 4. ONLY INDEX FILES, NO EXCEPTIONS — scan src; the src fold judges (HARD: no commit if a code file below src isn't index.ts; a flat sibling dissolves into <name>/index.ts). Scoped to .ts/.mts/.cts/.tsx; .vue is the render layer, .md/.css not code.
  const codeRe = /\.(ts|mts|cts|tsx)$/
  const indexOffenders = srcFiles
    .filter((file) => codeRe.test(file) && !/(^|\/)index\.(ts|mts|cts|tsx)$/.test(file))
    .map((file) => ({ file, reason: 'not an index file — logic living outside a folder index' }))
  const indexOnly = mind.srcFilesAreIndexOnly(indexOffenders, srcFiles.length)
  if (!indexOnly.enforced)
    fail(
      `${indexOnly.count} code file(s) below src are not index.ts — only index files, no exceptions (dissolve <name>.ts into <name>/index.ts)`,
      indexOnly.offenders.map((o) => o.file).join('; ') + (indexOnly.count > indexOnly.offenders.length ? ` … (+${indexOnly.count - indexOnly.offenders.length} more)` : ''),
    )

  const foldHome = mind.foldsLiveAtTheirDomainHome(Object.values(mind.FOLD_HOMES).flat().map((name) => ({ name, files: srcFiles.filter((file) => new RegExp(`^export (?:async )?function ${name}\\b`, 'm').test(readFileSync(file, 'utf8'))) }))) // 4b. folds at their exact domain home — the same src fold the weave runs at deploy
  if (!foldHome.enforced) fail('a fold is defined outside its domain home — save every fold to its exact path, never a foreign barrel', foldHome.violations.join('; '))

  // 4c. GLAGOLITIC IS ALWAYS COMPUTED — no raw glyph (U+2C00–2C5F) in a `label:` literal; it comes from toGlagolitic (the src fold judges; library is the home).
  const glaLabels = mind.glagoliticLabelsAreComputed([...srcFiles, '.vitepress/config.mts'].filter((f) => !/library\/index\./.test(f) && /\blabel:\s*(['"`])\s*[Ⰰ-ⱟ]/.test(readFileSync(f, 'utf8'))).map((f) => ({ file: f, reason: 'hardcoded Glagolitic label glyph — compute via toGlagolitic' })), srcFiles.length + 1)
  if (!glaLabels.enforced) fail(`${glaLabels.count} label(s) hardcode a Glagolitic glyph — Glagolitic is always computed via toGlagolitic, never a glyph string`, glaLabels.offenders.map((o) => o.file).join('; '))

  // 5. UNEXPECTED-SITUATION REPORT — tree anomalies (new src files left untracked, which has broken main before). Warns; does not block.
  const porcelain = (() => { try { return execSync('git status --porcelain', { encoding: 'utf8' }) } catch { return '' } })()
  const untrackedSrcFiles = porcelain.split('\n').filter((l) => l.startsWith('?? ') && l.includes('src/')).map((l) => l.slice(3))
  const situation = mind.unexpectedSituationsRefactorTools({ untrackedSrcFiles })
  if (!situation.clear) console.error('⚠ ' + situation.anomalies.join('\n⚠ '))

  // 6. README SIGNATURE — the committed README.md must equal the src-computed readmeMarkdown()
  const dist = await bundle('src/quantum/dist/index.ts')
  let committed = ''
  try { committed = readFileSync('README.md', 'utf8') } catch { committed = '' }
  const readme = dist.readmeSignatureValid(committed)
  if (!readme.valid) fail('README signature broken (README.md drifted from src)', `computed ${readme.computedSig} vs committed ${readme.committedSig} — regenerate from src (it is computed, do not hand-edit)`)

  console.error(`✓ green build (432 · 0 open · seal · compliant) · ${tools.count} tools saved in src · ${srcFiles.length} src files folders-only (no extensions) · index files only · ${foldHome.declared} folds at home · README signature valid`)
  process.exit(0)
} catch (err) {
  fail('the green-build gate could not verify', err && err.message)
}
