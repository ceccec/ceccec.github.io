// Strict gate scans — import · index · vitepress · file-size collectors.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve, dirname, basename } from 'node:path'
import { SCRIPT_SHELL_ALLOWLIST, SCRIPT_SHELL_LINE_BUDGET } from '../../../script/shell'
import type { ScriptShellScan } from '../../../script/shell'

export const MONOLITH_FILE_BYTES = 8192
export const MONOLITH_FILE_LAW = 'no index.ts or logic file may exceed 8192 bytes — shed into sub-barrels'

export function scanFileSizeOffenders(root: string, codeFiles: readonly string[], limit = MONOLITH_FILE_BYTES) {
  return codeFiles
    .filter((file) => {
      try {
        return statSync(file).size > limit
      } catch {
        return false
      }
    })
    .map((file) => ({ file: relative(root, file), bytes: statSync(file).size, limit, reason: 'monolith-file-law' }))
}

export function monolithFileGapDetail(offenders: readonly { file: string; bytes: number; limit: number }[]) {
  if (!offenders.length) return ''
  return offenders.map((o) => `${o.file} (${o.bytes} > ${o.limit})`).join('; ')
}

export function stripComments(text: string): string {
  return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

export type StrictImportOffender = { file: string; spec: string; reason: string }
export type StrictIndexOffender = { file: string; reason: string }
export type StrictVitepressIndexOffender = { file: string; reason: string; transitional?: boolean }
export type StrictHyphenOffender = { path: string; segment: string; reason: string }
export type StrictNonTsOffender = { file: string; reason: string }
export type StrictImportGapOffender = {
  file: string
  spec: string
  gaps: number
  limit: number
  depth: number
  reason: string
}

export type StrictGateSnapshot = {
  readonly imports: readonly StrictImportOffender[]
  readonly importGaps: readonly StrictImportGapOffender[]
  readonly indexOnly: readonly StrictIndexOffender[]
  readonly vitepressIndex: readonly StrictVitepressIndexOffender[]
  readonly nonTs: readonly StrictNonTsOffender[]
  readonly hyphenFolders: readonly StrictHyphenOffender[]
  readonly fileSize: readonly { file: string; bytes: number; limit: number; reason: string }[]
  readonly scriptShellViolations: readonly string[]
  readonly pairsPaired: boolean
  readonly merkleOk: boolean
  readonly digitPassed: boolean
  readonly digitReceipt: string
  readonly receipt: string
}

function filenameModuleExists(parentDir: string, base: string): boolean {
  if (!existsSync(parentDir)) return false
  const folderPath = join(parentDir, base)
  if (existsSync(folderPath) && statSync(folderPath).isDirectory()) return false
  return existsSync(join(parentDir, `${base}.ts`))
}

function relativeImportSpecs(text: string): string[] {
  return [
    ...[...text.matchAll(/\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]!),
    ...[...text.matchAll(/\bimport\s+['"]([^'"]+)['"]/g)].map((m) => m[1]!),
  ].filter((spec) => spec.startsWith('.'))
}

function importGapCount(spec: string): number {
  const match = spec.match(/^(\.\.\/)+/)
  return match ? (match[0].match(/\.\.\//g)?.length ?? 0) : 0
}

function scanImportGaps(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): StrictImportGapOffender[] {
  const mindRoot = join(root, 'src', 'quantum', 'heaven', 'mind')
  const srcRoot = join(root, 'src')
  const offenders: StrictImportGapOffender[] = []
  for (const file of codeFiles) {
    if (!file.startsWith(mindRoot)) continue
    const relBelowMind = relative(mindRoot, dirname(file))
    const depth = relBelowMind === '' || relBelowMind === '.' ? 0 : relBelowMind.split(/[/\\]/).filter(Boolean).length
    const maxMindGaps = depth
    const maxSrcGaps = depth + 3
    const rel = relative(root, file)
    for (const spec of relativeImportSpecs(stripComments(bodies.get(rel) ?? ''))) {
      const gaps = importGapCount(spec)
      if (gaps === 0) continue
      const resolved = resolve(dirname(file), spec)
      const targetsSrc = resolved.startsWith(srcRoot)
      const limit = targetsSrc ? maxSrcGaps : maxMindGaps
      if (gaps > limit) {
        offenders.push({
          file,
          spec,
          gaps,
          limit,
          depth,
          reason: `import gap ${gaps} > ${limit} (${depth} folder(s) below mind) — fill gaps with barrel indexes or migrate the fold closer`,
        })
      }
    }
  }
  return offenders
}

function scanImports(
  root: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
): StrictImportOffender[] {
  const extRe = /\.ts$/
  const offenders: StrictImportOffender[] = []
  for (const file of codeFiles) {
    const rel = relative(root, file)
    const specs = relativeImportSpecs(stripComments(bodies.get(rel) ?? ''))
    for (const spec of specs) {
      if (!spec.startsWith('.')) continue
      if (extRe.test(spec)) {
        offenders.push({ file, spec, reason: 'file extension — import the folder only, never the filename' })
        continue
      }
      if (/\/index$/.test(spec)) {
        offenders.push({ file, spec, reason: 'trailing /index — import the folder path only' })
        continue
      }
      const last = spec.split('/').pop() ?? ''
      if (last.includes('.') && last !== '..' && last !== '.') {
        offenders.push({ file, spec, reason: 'filename segment in path — folder imports only' })
        continue
      }
      const resolved = resolve(dirname(file), spec)
      if (existsSync(resolved) && statSync(resolved).isFile()) {
        offenders.push({ file, spec, reason: 'resolves to file on disk — dissolve into <name>/index.ts and import the folder' })
        continue
      }
      const parent = dirname(resolved)
      const base = basename(resolved)
      if (filenameModuleExists(parent, base)) {
        offenders.push({
          file,
          spec,
          reason: 'import targets filename module — only folder imports allowed; dissolve into <name>/index.ts',
        })
      }
    }
  }
  return offenders
}

function scanIndexOnly(codeFiles: readonly string[]): StrictIndexOffender[] {
  return codeFiles
    .filter((file) => file.endsWith('.ts') && !/(^|\/)index\.ts$/.test(file))
    .map((file) => ({ file, reason: 'not index.ts — backend surface is folder index only; dissolve into <name>/index.ts' }))
}

function scanScriptShellViolations(scripts: readonly ScriptShellScan[]): string[] {
  return scripts
    .filter((script) => {
      if (script.path in SCRIPT_SHELL_ALLOWLIST) {
        return script.lines > SCRIPT_SHELL_ALLOWLIST[script.path]!
      }
      if (script.inlineEsbuild) return true
      if (!script.routesThroughSrc) return true
      return script.lines > SCRIPT_SHELL_LINE_BUDGET
    })
    .map((s) => `${s.path} (${s.lines} lines · routesThroughSrc:${s.routesThroughSrc})`)
}

export { scanImportGaps, scanImports, scanIndexOnly, scanScriptShellViolations }
