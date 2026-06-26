// Relocate named `export (async) function` blocks from one barrel to another (census-neutral; no new files).
// Partitions every mixed `import {…}/export {…} from '<from>'` across tracked code so moved symbols
// repoint to <to> and the rest stay. Usage: node .tmp-relocate.mjs <fromRel> <toRel> name1 name2 ...
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const [, , FROM, TO, ...NAMES] = process.argv
const names = new Set(NAMES)
const fromAbs = path.join(ROOT, FROM, 'index.ts')
const toAbs = path.join(ROOT, TO, 'index.ts')
const toPosix = (p) => p.split(path.sep).join('/')

// --- 1. extract export-function blocks by name from FROM ---
const lines = readFileSync(fromAbs, 'utf8').split('\n')
const isComment = (l) => /^\s*(\/\/|\/\*|\*|\*\/)/.test(l)
const declRe = /^export\s+(?:async\s+)?function\s+([A-Za-z0-9_]+)\b/
const extracted = []
const removeIdx = new Set()
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(declRe)
  if (!m || !names.has(m[1])) continue
  let end = i
  for (let j = i + 1; j < lines.length; j++) { if (lines[j] === '}') { end = j; break } }
  let start = i
  while (start - 1 >= 0 && isComment(lines[start - 1])) start -= 1
  for (let k = start; k <= end; k++) removeIdx.add(k)
  extracted.push({ name: m[1], text: lines.slice(start, end + 1).join('\n') })
}
const foundNames = new Set(extracted.map((e) => e.name))
const missing = [...names].filter((n) => !foundNames.has(n))
if (missing.length) { console.error('NOT FOUND in source:', missing.join(', ')); process.exit(2) }

const newFrom = lines.filter((_, i) => !removeIdx.has(i)).join('\n').replace(/\n{3,}/g, '\n\n')
writeFileSync(fromAbs, newFrom)

const banner = `\n// ── relocated from ${FROM} (census-neutral line-compression) ──\n`
let toText = readFileSync(toAbs, 'utf8')
toText += banner + extracted.map((e) => e.text).join('\n\n') + '\n'
writeFileSync(toAbs, toText)
console.log(`moved ${extracted.length} fn(s) ${FROM} -> ${TO}`)

// --- 3. repoint consumers: partition `import {…}/export {…} from '<from>'` ---
const files = execSync("git ls-files '*.ts' '*.vue' '*.mts' '*.cts'", { encoding: 'utf8' })
  .split('\n').map((s) => s.trim()).filter(Boolean)
const stmtRe = /(import|export)\s+(type\s+)?\{([^}]*)\}\s*from\s*(['"])([^'"]+)\4/g
let touched = 0
for (const fileRel of files) {
  const abs = path.join(ROOT, fileRel)
  let text = readFileSync(abs, 'utf8')
  const dirAbs = path.dirname(abs)
  let changed = false
  text = text.replace(stmtRe, (full, kw, typ, body, q, spec) => {
    if (!spec.startsWith('.')) return full
    const targetAbs = path.resolve(dirAbs, spec)
    const targetRel = toPosix(path.relative(ROOT, targetAbs))
    if (targetRel !== FROM && targetRel !== FROM + '/index.ts') return full
    const specs = body.split(',').map((s) => s.trim()).filter(Boolean)
    const moved = specs.filter((s) => names.has(s.replace(/\s+as\s+.*/, '').trim()))
    const stay = specs.filter((s) => !names.has(s.replace(/\s+as\s+.*/, '').trim()))
    if (moved.length === 0) return full
    changed = true
    if (toPosix(path.relative(ROOT, dirAbs)) === TO) {
      return stay.length === 0 ? '' : `${kw} ${typ || ''}{ ${stay.join(', ')} } from ${q}${spec}${q}`
    }
    let toSpec = toPosix(path.relative(dirAbs, path.join(ROOT, TO)))
    if (!toSpec.startsWith('.')) toSpec = './' + toSpec
    const movedStmt = `${kw} ${typ || ''}{ ${moved.join(', ')} } from ${q}${toSpec}${q}`
    if (stay.length === 0) return movedStmt
    return `${kw} ${typ || ''}{ ${stay.join(', ')} } from ${q}${spec}${q}\n${movedStmt}`
  })
  if (changed) { writeFileSync(abs, text); touched += 1 }
}
console.log(`repointed import/export sites in ${touched} files`)
