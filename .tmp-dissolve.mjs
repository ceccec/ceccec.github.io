// Folder-dissolve codemod: move dirs + rewrite all relative specifiers (resolve→map→recompute).
// Usage: node .tmp-dissolve.mjs '[{"from":"src/death","to":"src/earth/death"}, ...]'
import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from 'node:fs'
import path from 'node:path'

const moves = JSON.parse(process.argv[2])
const ROOT = process.cwd()

// 1) physically move dirs (git mv, mkdir -p parent). Skip entries already moved manually.
for (const { from, to } of moves) {
  if (!existsSync(path.join(ROOT, from))) {
    if (existsSync(path.join(ROOT, to))) { console.log('already moved (skip physical):', from, '->', to); continue }
    console.error('MISSING:', from); process.exit(1)
  }
  if (existsSync(path.join(ROOT, to))) { console.error('DEST EXISTS:', to); process.exit(1) }
  mkdirSync(path.join(ROOT, path.dirname(to)), { recursive: true })
  execSync(`git mv "${from}" "${to}"`, { cwd: ROOT, stdio: 'inherit' })
}

const norm = (p) => p.split(path.sep).join('/')
// map a repo-root-relative path through the move set (longest 'from' prefix wins)
function mapPath(p) {
  let best = null
  for (const { from, to } of moves) {
    if (p === from || p.startsWith(from + '/')) {
      if (!best || from.length > best.from.length) best = { from, to }
    }
  }
  if (!best) return p
  return best.to + p.slice(best.from.length)
}
// reverse: current (new) path -> old path (longest 'to' prefix wins)
function reverseMap(p) {
  let best = null
  for (const { from, to } of moves) {
    if (p === to || p.startsWith(to + '/')) {
      if (!best || to.length > best.to.length) best = { from, to }
    }
  }
  if (!best) return p
  return best.from + p.slice(best.to.length)
}

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, acc)
    else if (/\.(ts|mts|vue|js|mjs)$/.test(e.name)) acc.push(full)
  }
  return acc
}

const files = [...walk(path.join(ROOT, 'src')), ...walk(path.join(ROOT, '.vitepress'))]
const SPEC_RE = /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+|\brequire\s*\(\s*)(['"])(\.\.?\/[^'"]*)\2/g

let changedFiles = 0, changedSpecs = 0
for (const file of files) {
  const relNew = norm(path.relative(ROOT, file))
  const relOld = reverseMap(relNew)
  const oldDir = path.posix.dirname(relOld)
  const newDir = path.posix.dirname(relNew)
  let src = readFileSync(file, 'utf8')
  let fileChanged = false
  const out = src.replace(SPEC_RE, (m, kw, q, spec) => {
    // resolve spec against OLD dir → repo-root-relative target (no /index appended)
    const targetOld = path.posix.normalize(path.posix.join(oldDir, spec))
    const targetNew = mapPath(targetOld)
    // recompute relative from NEW dir
    let rel = path.posix.relative(newDir, targetNew)
    if (!rel.startsWith('.')) rel = './' + rel
    if (rel === spec) return m
    changedSpecs++
    fileChanged = true
    return `${kw}${q}${rel}${q}`
  })
  if (fileChanged) { writeFileSync(file, out); changedFiles++ }
}
console.log(`moved ${moves.length} dirs; rewrote ${changedSpecs} specifiers in ${changedFiles} files`)
