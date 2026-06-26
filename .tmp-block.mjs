// Move a contiguous line range [START,END] (1-indexed inclusive) from FROM/index.ts to TO/index.ts
// (carries private *Raw impls / helpers inside the range), then repoint every consumer's
// `import {…}/export {…} from '<from>'` for the EXPORTED names in the block to TO.
// Usage: node .tmp-block.mjs <fromRel> <toRel> <START> <END>
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const [, , FROM, TO, START, END] = process.argv
const s = Number(START), e = Number(END)
const fromAbs = path.join(ROOT, FROM, 'index.ts')
const toAbs = path.join(ROOT, TO, 'index.ts')
const toPosix = (p) => p.split(path.sep).join('/')

const lines = readFileSync(fromAbs, 'utf8').split('\n')
const block = lines.slice(s - 1, e).join('\n')
const exportedNames = new Set()
const nameRe = /^export\s+(?:async\s+)?(?:function|const)\s+([A-Za-z0-9_]+)\b/
for (const l of block.split('\n')) { const m = l.match(nameRe); if (m) exportedNames.add(m[1]) }

const newFrom = [...lines.slice(0, s - 1), ...lines.slice(e)].join('\n').replace(/\n{4,}/g, '\n\n\n')
writeFileSync(fromAbs, newFrom)
let toText = readFileSync(toAbs, 'utf8')
toText += `\n// ── relocated from ${FROM} (census-neutral line-compression) ──\n` + block + '\n'
writeFileSync(toAbs, toText)
console.log(`moved lines ${s}-${e} (${e - s + 1}) ${FROM} -> ${TO}; exported: ${[...exportedNames].join(', ')}`)

const names = exportedNames
const files = execSync("git ls-files '*.ts' '*.vue' '*.mts' '*.cts'", { encoding: 'utf8' })
  .split('\n').map((x) => x.trim()).filter(Boolean)
const stmtRe = /(import|export)\s+(type\s+)?\{([^}]*)\}\s*from\s*(['"])([^'"]+)\4/g
let touched = 0
for (const fileRel of files) {
  const abs = path.join(ROOT, fileRel)
  let text = readFileSync(abs, 'utf8')
  const dirAbs = path.dirname(abs)
  let changed = false
  text = text.replace(stmtRe, (full, kw, typ, body, q, spec) => {
    if (!spec.startsWith('.')) return full
    const targetRel = toPosix(path.relative(ROOT, path.resolve(dirAbs, spec)))
    if (targetRel !== FROM && targetRel !== FROM + '/index.ts') return full
    const specs = body.split(',').map((x) => x.trim()).filter(Boolean)
    const moved = specs.filter((x) => names.has(x.replace(/\s+as\s+.*/, '').trim()))
    const stay = specs.filter((x) => !names.has(x.replace(/\s+as\s+.*/, '').trim()))
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
