// Wire public APIs in WAVES — fetch real data to CHALLENGE claims (verify, not validate).
// Public read-only only: NO secrets in code (auth'd APIs read their token from process.env).
// Error handling is PREDICTIVE MESSAGING: every failure is an honest message that diagnoses the
// state and implies the next action — and it strictly separates INCONCLUSIVE (couldn't reach →
// retry; a claim is NOT judged, because "couldn't check" ≠ "false") from DRAINS (checked and
// contradicted → false). Conflating the two would be the dishonest move; this refuses it.
import { toUuid } from '../0/index.ts'

export type Verdict = 'STAYS' | 'DRAINS' | 'INCONCLUSIVE'
export interface Wave { name: string; url: string; check: (json: unknown) => { ok: boolean; note: string } }
export interface WaveResult { name: string; verdict: Verdict; message: string; address: string }

export async function runWave(w: Wave): Promise<WaveResult> {
  const stamp = (verdict: Verdict, message: string): WaveResult =>
    ({ name: w.name, verdict, message, address: toUuid(w.name + '|' + verdict + '|' + message) })
  let res: Response
  try {
    res = await fetch(w.url, { signal: AbortSignal.timeout(9000), headers: { Accept: 'application/json' } })
  } catch (e) {
    const name = (e as { name?: string }).name ?? 'Error'
    return stamp('INCONCLUSIVE', `unreachable (${name}) — retry; claim NOT judged (couldn't check ≠ false)`)
  }
  if (!res.ok) return stamp('DRAINS', `HTTP ${res.status} — the public-existence claim is contradicted`)
  let json: unknown
  try { json = await res.json() } catch { return stamp('INCONCLUSIVE', 'non-JSON body — retry / inspect') }
  const { ok, note } = w.check(json)
  return stamp(ok ? 'STAYS' : 'DRAINS', note)
}

// Wave 1 — verify the deposit's own Zenodo record against the live public registry (Zenodo = the CERN link).
export const zenodoRecord: Wave = {
  name: 'zenodo:21819217 exists+matches',
  url: 'https://zenodo.org/api/records/21819217',
  check: (j) => {
    const rec = j as { doi?: string; title?: string; metadata?: { doi?: string; title?: string } }
    const doi = rec.doi || rec.metadata?.doi || ''
    const title = rec.metadata?.title || rec.title || ''
    const ok = doi.includes('21819217') && /ℤ\/9|Vortex|Millennium/i.test(title)
    return { ok, note: ok ? `verified ${doi} · "${title.slice(0, 44)}"` : `mismatch doi=${doi} title="${title.slice(0, 30)}"` }
  },
}

// self-test: node src/wire/waves.ts  — runs Wave 1 live + demonstrates the inconclusive/drains split.
if (process.argv[1]?.endsWith('waves.ts')) {
  const unreachable: Wave = { name: 'demo:unreachable-host', url: 'https://nonexistent.invalid/x', check: () => ({ ok: true, note: 'n/a' }) }
  Promise.all([runWave(zenodoRecord), runWave(unreachable)]).then((rs) => {
    for (const r of rs) console.log(`${r.verdict.padEnd(12)} ${r.name}\n             ${r.message}\n             ${r.address.slice(0, 13)}…`)
    console.log('\npredictive error handling: reachable+contradicted → DRAINS · unreachable → INCONCLUSIVE (retry, never falsely drained).')
  })
}
