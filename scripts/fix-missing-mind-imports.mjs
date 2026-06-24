#!/usr/bin/env node
/** Add TS2304 missing names to existing mind-barrel imports in canonical modules. */
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const out = execSync('npm run check:types 2>&1 || true', { cwd: root, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 })

const byFile = new Map()
for (const m of out.matchAll(/^((?:src\/)?\S+?)\(\d+,\d+\): error TS2304: Cannot find name '([^']+)'/gm)) {
  const file = m[1].startsWith('src/') ? m[1] : `src/${m[1]}`
  if (!/^src\/(earth|fire|water|wind|mountain|lake|thunder|heaven)\//.test(file)) continue
  if (!byFile.has(file)) byFile.set(file, new Set())
  byFile.get(file).add(m[2])
}

const MIND_RE = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]*quantum\/heaven\/mind)['"]/
const TYPE_MIND_RE = /import\s+type\s+\{([^}]+)\}\s+from\s+['"]([^'"]*quantum\/heaven\/mind)['"]/

for (const [rel, names] of byFile) {
  const path = resolve(root, rel)
  let body = readFileSync(path, 'utf8')
  const m = body.match(MIND_RE)
  if (!m) {
    const spec = '../../../quantum/heaven/mind'
    const list = [...names].sort().join(', ')
    body = `import { ${list} } from '${spec}'\n${body}`
    writeFileSync(path, body)
    console.log('added mind import', rel, [...names].length)
    continue
  }
  const existing = new Set(m[1].split(',').map((s) => s.trim().split(/\s as /)[0].split(':')[0].trim()).filter(Boolean))
  const add = [...names].filter((n) => !existing.has(n))
  if (add.length === 0) continue
  const merged = [...existing, ...add].sort().join(', ')
  body = body.replace(MIND_RE, `import { ${merged} } from '${m[2]}'`)
  writeFileSync(path, body)
  console.log('extended mind import', rel, add.length)
}

console.log('done')
