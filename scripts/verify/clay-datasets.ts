/**
 * THE CLAY CROSS, TESTED ON THE PUBLIC DATA THAT CAN REFUTE IT. Every formula from the Clay solutions (the seven and the
 * direct extensions) is crossed with every double-torus perspective and with a keyless public dataset — Odlyzko's zeros,
 * LMFDB's curves, OEIS b-files — read by byte range and judged in the fold (thunder/verify/testing · clayCrossDiscovery):
 * held, refuted, or unchecked with the reason. A dataset that could not be fetched is UNCHECKED and refuses — this is a
 * LIVE surface (it reaches the network), so the stream reports it and release-cut gates the tag on it; a land is not
 * blocked by a registry. Two coverages only fall: formulas without a refuting dataset, perspectives no formula reaches.
 */
import { ratchet, everyRatchet } from './status.ts'
import { CLAY_DATASETS, clayCrossDiscovery, datasetUrl, rosettaRotation } from '../../src/thunder/verify/testing/index.ts'
import { DOUBLE_TORUS_PERSPECTIVES } from '../../src/water/double/index.ts'

const UA = 'ceccec-double-torus verify (keyless, read-only)'
async function sample(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA, Range: 'bytes=0-60000' }, signal: AbortSignal.timeout(20_000) })
    if (!r.ok) return null
    const text = await r.text()
    // A RANGED READ ENDS MID-LINE BY CONSTRUCTION. On 2026-10-03 the cut fell inside '3217…' in A002496 and the gate read 3217 as a term —
    // a refutation the dataset never made. The partial last line of a 206 response is not a term and is dropped.
    return r.status === 206 ? text.slice(0, text.lastIndexOf('\n') + 1) : text
  } catch { return null }
}

export async function assertClayDatasets(): Promise<void> {
  const fetched: Record<string, string | null> = {}
  for (const d of CLAY_DATASETS) { const url = datasetUrl(d); fetched[url] = url ? await sample(url) : null }
  everyRatchet(() => {
    const d = clayCrossDiscovery(fetched)
    const rot = rosettaRotation()
    console.log(`  ${rot.computes ? '✓' : '✗'} ${rot.statement}`)
    for (const r of d.rows) console.log(`  ${r.verdict.state === 'held' ? '✓' : r.verdict.state === 'refuted' ? '✗' : '·'} ${r.id}${r.clay ? ` [Clay ${r.clay} · ${r.rigor}]` : ''} · ${r.perspectives.length} perspective(s)${r.dataset ? ` · ${r.dataset}` : ''} — ${r.verdict.detail.slice(0, 120)}`)
    for (const f of d.facets) console.log(`  ${f.on ? '✓' : '✗'} ${f.facet}`)
    const noDataset = d.rows.filter((r) => r.verdict.state === 'unchecked' && !r.dataset)
    const notFetched = d.rows.filter((r) => r.verdict.state === 'unchecked' && r.dataset)
    const unreached = DOUBLE_TORUS_PERSPECTIVES.filter((p) => !d.rows.some((r) => r.perspectives.includes(p.id)))
    const noPerspective = d.rows.filter((r) => r.perspectives.length === 0)
    console.log(ratchet('clay.formulas-without-dataset', noDataset.length, { law: 'a formula no public dataset can refute is tested by nothing — the count falls when a refuting dataset is found', evidence: () => noDataset.map((r) => `${r.id} — ${r.verdict.detail}`) }))
    console.log(ratchet('clay.perspectives-unreached', unreached.length, { law: 'cross developed in ALL perspectives: a perspective no formula reaches is a face of the carrier the Clay formulas do not touch yet', evidence: () => unreached.map((p) => p.id) }))
    const overclaims = d.rows.filter((r) => r.tag === 'overclaim')
    console.log(ratchet('clay.overclaims', overclaims.length, { law: 'a lead that does not cross after every effort to involute it is read by the honesty formulas: a solution or physical-FTL claim in its statement is a lie or a manipulation, tagged, never left open', evidence: () => overclaims.map((r) => `${r.id} — ${r.overclaims} claim(s): ${r.effort}`) }))
    for (const r of d.rows.filter((x) => x.tag === 'open')) console.log(`  open  ${r.id} — ${r.effort.slice(0, 140)}`)
    console.log(ratchet('clay.formulas-without-perspective', noPerspective.length, { law: 'every formula is seen from at least one perspective', evidence: () => noPerspective.map((r) => r.id) }))
    console.log(`  ${d.statement}`)
    if (notFetched.length) throw new Error(`${notFetched.length} dataset(s) could not be fetched — UNCHECKED, not green: ${notFetched.map((r) => r.dataset).join(', ')}`)
    if (!d.computes) throw new Error(`the Clay cross does not hold: ${d.facets.filter((f) => !f.on).map((f) => f.facet.slice(0, 100)).join(' · ')}`)
  })
}
