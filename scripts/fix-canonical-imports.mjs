#!/usr/bin/env node
/** Rewrite quantum/heaven/mind/* imports → canonical src/<science>/<model>/<action> in dissolved modules. */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const SCHEMA_TWO_LEVEL_MODEL = 'fold'
const SCIENCES = ['earth', 'fire', 'water', 'wind', 'mountain', 'lake', 'thunder', 'heaven']

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

function canonicalTail(mindTail) {
  const { science, model, action } = scienceModelActionFromMindTail(mindTail)
  if (model === SCHEMA_TWO_LEVEL_MODEL) return `${science}/${action}`
  return `${science}/${model}/${action}`
}

function mindTailFromSpec(spec) {
  const norm = spec.replace(/\\/g, '/')
  let idx = norm.indexOf('quantum/heaven/mind/')
  if (idx !== -1) {
    let tail = norm.slice(idx + 'quantum/heaven/mind/'.length)
    tail = tail.replace(/\/index$/, '').replace(/\/index\.ts$/, '')
    if (!tail || tail === 'index') return ''
    return tail
  }
  idx = norm.indexOf('/mind/')
  if (idx !== -1) {
    let tail = norm.slice(idx + '/mind/'.length)
    tail = tail.replace(/\/index$/, '').replace(/\/index\.ts$/, '')
    return tail || ''
  }
  return null
}

const REL_RE = /(\bfrom\s+['"])([^'"]+)(['"])/g
const EXPORT_RE = /(\bexport\s+[^'"]*\s+from\s+['"])([^'"]+)(['"])/g

function rewriteFile(filePath) {
  const fileDir = dirname(filePath)
  let body = readFileSync(filePath, 'utf8')
  const fix = (_m, pre, spec, post) => {
    const tail = mindTailFromSpec(spec)
    if (tail === null) return `${pre}${spec}${post}`
    const target = tail === ''
      ? join(root, 'src/quantum/heaven/mind/index.ts')
      : join(root, 'src', canonicalTail(tail), 'index.ts')
    let rel = relative(fileDir, target).replace(/\\/g, '/')
    if (!rel.startsWith('.')) rel = `./${rel}`
    rel = rel.replace(/\.ts$/, '')
    return `${pre}${rel}${post}`
  }
  const next = body.replace(REL_RE, fix).replace(EXPORT_RE, fix)
  if (next !== body) writeFileSync(filePath, next)
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name === 'index.ts') rewriteFile(full)
  }
}

for (const science of SCIENCES) {
  const dir = join(root, 'src', science)
  if (existsSync(dir)) walk(dir)
}

// Fix co-located display gates
function fixVue(filePath) {
  const rel = relative(root, filePath).replace(/\\/g, '/')
  const m = rel.match(/^src\/([^/]+)\/([^/]+)\/([^/]+)\/index\.vue$/)
  if (!m) return
  const logic = `src/${m[1]}/${m[2]}/${m[3]}/index.ts`
  let body = readFileSync(filePath, 'utf8')
  body = body.replace(
    /<output[^>]*>/,
    `<output class="display-dual-gate" data-logic="${logic}" data-target="${logic}" aria-hidden="true" />`,
  )
  body = body.replace(/\/\/ Display gate[^\n]*/, `// Display gate — co-located ${logic}`)
  writeFileSync(filePath, body)
}

for (const science of SCIENCES) {
  const dir = join(root, 'src', science)
  if (!existsSync(dir)) continue
  const vueWalk = (d) => {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue
      const full = join(d, entry.name)
      if (entry.isDirectory()) vueWalk(full)
      else if (entry.name === 'index.vue') fixVue(full)
    }
  }
  vueWalk(dir)
}

console.log('canonical import + vue gate rewrite done')
