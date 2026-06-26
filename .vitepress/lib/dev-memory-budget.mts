// Node-only dev memory budget gate — never import from client-facing src/site.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { NODE_MAX_OLD_SPACE_MB } from '../../src/0/index.ts'

const THIN_DEV_BIND_REL = '.vitepress/lib/dev-server-bind.mts'
const MIND_IMPORT_RX = /from\s+['"][^'"]*(?:quantum\/heaven\/mind|heaven\/mind)/

/** Sealed dev memory budget — heap cap, lazy dist router, thin config bind without mind imports. */
export function vitepressDevMemoryBudget(root = process.cwd()) {
  const thinBindPath = join(root, THIN_DEV_BIND_REL)
  let thinBindSource = ''
  try {
    thinBindSource = readFileSync(thinBindPath, 'utf8')
  } catch {
    return {
      heapCapMb: NODE_MAX_OLD_SPACE_MB,
      lazyDistInDev: true,
      thinBindPath: THIN_DEV_BIND_REL,
      thinBindNoMindImports: false,
      ok: false,
    }
  }
  const hasSrcImport = /from\s+['"][^'"]*\/src\//.test(thinBindSource) || /from\s+['"]\.\.\/src\//.test(thinBindSource)
  const hasMindImport = MIND_IMPORT_RX.test(thinBindSource)
  const thinBindNoMindImports = !hasSrcImport && !hasMindImport
  return {
    heapCapMb: NODE_MAX_OLD_SPACE_MB,
    lazyDistInDev: true,
    thinBindPath: THIN_DEV_BIND_REL,
    thinBindNoMindImports,
    ok: thinBindNoMindImports,
  }
}
