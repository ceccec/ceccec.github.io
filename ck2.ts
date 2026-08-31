import { scanCrackSurface } from './src/pair/enforcement/gates/strict/scan/index.ts'
export function go(): void {
  const off = scanCrackSurface(process.cwd()) as any[]
  const m = new Map<string, string[]>()
  for (const o of off) {
    const f = String(o.file ?? '?').replace(process.cwd() + '/', '')
    if (!m.has(f)) m.set(f, [])
    m.get(f)!.push(`${o.literal}:${o.count ?? 1}`)
  }
  console.log('offenders=' + off.length)
  for (const [f, l] of [...m].sort()) console.log(`${f} :: ${l.join(' ')}`)
}
