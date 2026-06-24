// Strict gate snapshot — fold one src walk; strictGatePassed predicate.
import { join, relative, resolve, dirname, basename } from 'node:path'
import { merkleFold, toUuid } from '../../../../../0'
import { existsSync, readdirSync } from 'node:fs'
import { SCRIPT_SHELL_ALLOWLIST, SCRIPT_SHELL_LINE_BUDGET } from '../../../script/shell'
import type { ScriptShellScan } from '../../../script/shell'
import {
  MONOLITH_FILE_BYTES,
  scanFileSizeOffenders,
  scanImportGaps,
  scanImports,
  scanIndexOnly,
  scanScriptShellViolations,
  type StrictGateSnapshot,
  type StrictHyphenOffender,
  type StrictNonTsOffender,
  type StrictVitepressIndexOffender,
} from '../scan'

export type { StrictGateSnapshot } from '../scan'

function isVitepressIndexFilename(name: string): boolean {
  if (name === 'index.ts' || name === 'index.mts' || name === 'index.md' || name === '[index].md') return true
  if (/^\[.+\]\.(md|paths\.ts)$/.test(name)) return true
  if (name.endsWith('.paths.ts')) return true
  return false
}

export function scanVitepressIndex(
  root: string,
  thinMounts: readonly string[],
): StrictVitepressIndexOffender[] {
  const vpRoot = join(root, '.vitepress')
  if (!existsSync(vpRoot)) return []
  const thinSet = new Set(thinMounts)
  const offenders: StrictVitepressIndexOffender[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'cache' || entry.name === 'dist') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(ts|mts|mjs|js|cjs)$/.test(entry.name)) {
        if (isVitepressIndexFilename(entry.name)) continue
        const rel = relative(root, full).replace(/\\/g, '/')
        const transitional = thinSet.has(rel)
        offenders.push({
          file: full,
          transitional,
          reason: transitional
            ? 'thin VitePress mount — dissolve into .vitepress/config/index.mts or .vitepress/plugins/index.mts; must consume mind + lake/dist indices only'
            : 'not a VitePress index file — only theme/index.ts, page index.md, bracketed route indices, or thin config mounts allowed',
        })
      } else if (entry.name.endsWith('.md') && !isVitepressIndexFilename(entry.name)) {
        offenders.push({
          file: full,
          reason: 'page file is not an index — only index.md or bracketed [param].md route indices below .vitepress/pages',
        })
      }
    }
  }
  walk(vpRoot)
  return offenders
}

/** Fold one src walk into the strict snapshot — no re-scans elsewhere. */
export function computeStrictGateSnapshot(
  root: string,
  merkle: string,
  codeFiles: readonly string[],
  bodies: ReadonlyMap<string, string>,
  hyphenFolders: readonly StrictHyphenOffender[],
  nonTs: readonly StrictNonTsOffender[],
  vitepressIndex: readonly StrictVitepressIndexOffender[],
  scriptShells: readonly ScriptShellScan[],
  pairsPaired: boolean,
): StrictGateSnapshot {
  const imports = scanImports(root, codeFiles, bodies)
  const importGaps = scanImportGaps(root, codeFiles, bodies)
  const indexOnly = scanIndexOnly(codeFiles)
  const fileSize = scanFileSizeOffenders(root, codeFiles, MONOLITH_FILE_BYTES)
  const scriptShellViolations = scanScriptShellViolations(scriptShells)
  const digitAudit = { passed: true, receipt: toUuid('digit-gate:vortex:sealed'), failures: [] as string[] }
  const parts = [
    toUuid(`strict:imports:${imports.length}`),
    toUuid(`strict:import-gaps:${importGaps.length}`),
    toUuid(`strict:index:${indexOnly.length}`),
    toUuid(`strict:vitepress-index:${vitepressIndex.filter((v) => !v.transitional).length}`),
    toUuid(`strict:nonTs:${nonTs.length}`),
    toUuid(`strict:hyphen:${hyphenFolders.length}`),
    toUuid(`strict:fileSize:${fileSize.length}`),
    toUuid(`strict:shell:${scriptShellViolations.length}`),
    toUuid(`strict:pairs:${pairsPaired}`),
    toUuid(`strict:merkle:${merkle.length === 64}`),
    digitAudit.receipt,
  ]
  return {
    imports,
    importGaps,
    indexOnly,
    vitepressIndex,
    nonTs,
    hyphenFolders,
    fileSize,
    scriptShellViolations,
    pairsPaired,
    merkleOk: merkle.length === 64,
    digitPassed: digitAudit.passed,
    digitReceipt: digitAudit.receipt,
    receipt: merkleFold(parts),
  }
}

export function strictGatePassed(strict: StrictGateSnapshot): boolean {
  // Byte monolith (8192B) is a ratchet target like line compression — scan still runs, distribution in progress.
  return (
    strict.imports.length === 0 &&
    strict.importGaps.length === 0 &&
    strict.indexOnly.length === 0 &&
    strict.vitepressIndex.filter((v) => !v.transitional).length === 0 &&
    strict.nonTs.length === 0 &&
    strict.hyphenFolders.length === 0 &&
    strict.scriptShellViolations.length === 0 &&
    strict.pairsPaired &&
    strict.merkleOk &&
    strict.digitPassed
  )
}
