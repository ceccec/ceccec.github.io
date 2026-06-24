#!/usr/bin/env node
/** One-shot: move mind logic index.ts → src/<science>/<model>/<action>/index.ts; rewrite relative imports. */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const mindMount = join(root, 'src/quantum/heaven/mind')

const MIND_LOGIC_INDEX_TAILS = [
  'earth/architecture', 'earth/civilisation', 'earth/governance', 'earth/nature', 'earth/world',
  'fire/diamonds', 'fire/features', 'fire/li', 'fire/physics',
  'water/cosmos', 'water/crypto', 'water/digit', 'water/encryption', 'water/life',
  'wind/fusion', 'wind/language', 'learning', 'routes', 'site', 'wind/types', 'wind/ui',
  'mountain/gates', 'mountain/geometry', 'mountain/og', 'mountain/seals', 'mountain/self', 'mountain/source', 'mountain/topology',
  'lake/clean', 'lake/ledger', 'lake/media', 'lake/music', 'lake/stats', 'lake/widgets',
  'thunder/commands', 'thunder/decode', 'thunder/movie', 'thunder/trading', 'thunder/verify', 'thunder/waves',
  'heaven/atoms', 'heaven/compute', 'heaven/essence', 'heaven/everything', 'heaven/laws',
  'heaven/balance', 'heaven/core', 'heaven/site',
]

const SCHEMA_TWO_LEVEL_MODEL = 'fold'

function scienceModelActionFromMindTail(tail) {
  const parts = tail.split('/').filter(Boolean)
  if (parts.length >= 3) {
    return { science: parts[parts.length - 3], model: parts[parts.length - 2], action: parts[parts.length - 1] }
  }
  if (parts.length === 2) {
    return { science: parts[0], model: SCHEMA_TWO_LEVEL_MODEL, action: parts[1] }
  }
  return { science: 'heaven', model: SCHEMA_TWO_LEVEL_MODEL, action: parts[0] ?? 'essence' }
}

function canonicalRel(tail) {
  const { science, model, action } = scienceModelActionFromMindTail(tail)
  if (model === SCHEMA_TWO_LEVEL_MODEL) return `src/${science}/${action}/index.ts`
  return `src/${science}/${model}/${action}/index.ts`
}

const REL_IMPORT_RE = /(\bfrom\s+['"])(\.[^'"]+)(['"])/g
const REL_EXPORT_RE = /(\bexport\s+[^'"]*\s+from\s+['"])(\.[^'"]+)(['"])/g

function rewriteImports(body, oldDir, newDir) {
  const fix = (_match, pre, spec, post) => {
    const abs = resolve(oldDir, spec)
    const next = relative(newDir, abs).replace(/\\/g, '/')
    const normalized = next.startsWith('.') ? next : `./${next}`
    return `${pre}${normalized}${post}`
  }
  return body.replace(REL_IMPORT_RE, fix).replace(REL_EXPORT_RE, fix)
}

function pruneEmpty(dir) {
  if (!existsSync(dir) || dir === mindMount) return
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) pruneEmpty(join(dir, entry.name))
  }
  if (readdirSync(dir).length === 0 && dir !== mindMount) rmSync(dir)
}

for (const tail of MIND_LOGIC_INDEX_TAILS) {
  const oldPath = join(mindMount, tail, 'index.ts')
  const targetRel = canonicalRel(tail)
  const newPath = join(root, targetRel)
  if (!existsSync(oldPath)) {
    console.warn('skip missing', oldPath)
    continue
  }
  mkdirSync(dirname(newPath), { recursive: true })
  const oldDir = dirname(oldPath)
  const newDir = dirname(newPath)
  const body = rewriteImports(readFileSync(oldPath, 'utf8'), oldDir, newDir)
  writeFileSync(newPath, body)
  rmSync(oldPath)
  console.log('moved', tail, '→', targetRel)
}

pruneEmpty(mindMount)
console.log('done — update mind/index.ts exports to canonical paths')
