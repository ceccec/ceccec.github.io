import { MODULES } from './module-index.ts'
import { freeUserWavesTestUiMeasureEfficiency, feedUiIntoItself } from '../../src/pair/enforcement/gates/strict/scan/index.ts'
const probe = (tag: string) => {
  for (const [n, fn] of [['freeUserWaves…', freeUserWavesTestUiMeasureEfficiency], ['feedUiIntoItself', feedUiIntoItself]] as const) {
    const r = fn() as { limits?: { facet: string; on: boolean }[]; facets?: { facet: string; on: boolean }[] }
    const ls = (r.facets ?? r.limits ?? []).filter((l) => !l.on)
    console.log(`${tag}  ${n}: ${ls.length} off${ls.length ? '  → ' + ls[0]!.facet.slice(0, 110) : ''}`)
  }
}
export function o(): void {
  probe('BEFORE')
  let called = 0
  for (const [, ns] of MODULES) for (const [name, v] of Object.entries(ns)) {
    if (typeof v !== 'function' || (v as Function).length > 0 || /^run|Exit$/.test(name)) continue
    try { (v as () => unknown)(); called++ } catch { /* census ignores throws too */ }
  }
  console.log(`walked ${called} zero-arg exports`)
  probe('AFTER ')
}
