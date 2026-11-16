/**
 * EACH THEOREM, CROSS-VERIFIED ONLINE — NIST CODATA, the NIST DLMF, CERN Open Data — where a public dataset can speak to
 * it, and said plainly where none can (owner, 2026-11-16). The registry and the judges live in the fold
 * (THEOREM_SOURCES, theoremSourceVerdicts — src/pair/formal/proofs); this script only fetches, keylessly and read-only.
 * A LIVE surface (it reaches the network): a source not reached is UNCHECKED and refuses here, a refutation refuses
 * always, and neither blocks a land of the tree. The count of theorems no dataset can speak to only falls.
 */
import { THEOREM_SOURCES, theoremSourceVerdicts } from '../../src/pair/formal/proofs/index.ts'
import { decided, everyRatchet, ratchet } from './status.ts'

const UA = 'ceccec-double-torus verify (keyless, read-only)'

async function read(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30_000) })
    return r.ok ? await r.text() : null
  } catch { return null }
}

export async function assertTheoremSources(): Promise<void> {
  const fetched: Record<string, string | null> = {}
  for (const s of THEOREM_SOURCES) fetched[s.url] = await read(s.url)
  const v = theoremSourceVerdicts(fetched)
  for (const { source, verdict } of v.judged) {
    const mark = verdict.state === 'held' ? '✓' : verdict.state === 'refuted' ? '✗' : '·'
    console.log(`  ${mark} ${source.id} [${source.source}] — ${verdict.state.toUpperCase()}: ${verdict.detail}`)
    console.log(`      theorems: ${source.theorems.map((t) => `${t.file} ${t.name}`).join(' · ')}`)
    console.log(`      relation: ${source.relation}`)
  }
  console.log(`theorem sources: ${v.withSource} of ${v.theorems.length} theorems bound to a public dataset; ${v.kernelOnly} are exact statements on finite models, decided by the Lean kernel, which no dataset can confirm or refute`)
  everyRatchet(() => {
    const refuted = v.judged.filter((j) => j.verdict.state === 'refuted')
    console.log(decided('sources.refuted', refuted.length, {
      law: 'a public dataset that contradicts a theorem\'s subject is a finding against the theorem or its model, never noise',
      evidence: () => refuted.map((j) => `${j.source.id}: ${j.verdict.detail}`),
    }))
    console.log(ratchet('sources.theorems-without-dataset', v.kernelOnly, {
      law: 'a theorem no public dataset can speak to is verified by the kernel alone — the count falls as a dataset is bound, never rises by unbinding one',
      evidence: () => v.theorems.filter((t) => t.source === null).map((t) => `${t.file} ${t.name}`),
    }))
  })
  const unchecked = v.judged.filter((j) => j.verdict.state === 'unchecked')
  if (unchecked.length) throw new Error(`${unchecked.length} source(s) UNCHECKED, not green: ${unchecked.map((j) => `${j.source.id} (${j.verdict.detail})`).join(' · ')}`)
}
