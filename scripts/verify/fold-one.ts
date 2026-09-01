/** Run ONE module's folds and print a JSON line. Used by every-fold.ts, one process per module,
 *  so a single unbounded fold cannot block the census — it times out and is reported as such. */
import { MODULES } from './module-index.ts'

export function main(): void {
  const idx = Number(process.env.MODULE_INDEX ?? '-1')
  const entry = MODULES[idx]
  if (!entry) { console.log(JSON.stringify({ error: 'bad index', idx })); return }
  const [mod, ns] = entry
  const bad: Array<{ name: string; off: number; total: number; verdict: boolean | null }> = []
  let called = 0, folds = 0, threw = 0
  for (const [name, v] of Object.entries(ns)) {
    if (typeof v !== 'function') continue
    if ((v as { length: number }).length > 0) continue
    if (/^run|Exit$/.test(name)) continue
    let r: unknown
    try { r = (v as () => unknown)(); called += 1 } catch { threw += 1; continue }
    if (!r || typeof r !== 'object') continue
    const fs = (r as { facets?: unknown }).facets
    if (!Array.isArray(fs) || !fs.length) continue
    folds += 1
    const off = fs.filter((f) => f && (f as { on?: unknown }).on === false).length
    const key = ['computes','ok','proven','folds','leads','decoded','merges','sealed','holds','tiled','forms','fused','clean','passed','aligned','balanced','valid','complete','explains','remains','researched']
      .find((k) => typeof (r as Record<string, unknown>)[k] === 'boolean')
    const verdict = key ? (r as Record<string, boolean>)[key]! : null
    if (off > 0 || verdict === false) bad.push({ name, off, total: fs.length, verdict })
  }
  console.log(JSON.stringify({ mod, called, folds, threw, bad }))
}
