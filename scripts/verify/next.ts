/**
 * WHAT IS NEXT IS A MEASUREMENT, NOT A CHOICE.
 *
 * Every open lead in this repository already computes. 32 of 68 ratchets sit above zero, each gate reports
 * its own evidence, release-live reads the two permanent records and emits leads from what they disagree
 * about, and the censuses name their own gaps. What did not exist is the UNION: each number lives in its own
 * gate's log, reachable only by running that gate, so "what next" was decided by whoever was looking —
 * which is the one decision that should never be a judgement in a corpus that ratchets everything else.
 *
 * This is that union, and nothing here is new information. It reads the recorded floors, groups them by the
 * family each belongs to, and prints the gate that measures each one and the command that lists its
 * evidence. The families ARE the root causes: a family is a defect shape, and its total is how much of that
 * shape is left. Ordering is by size within family and by family total between them — a measured order, not
 * a priority someone assigned.
 *
 * WHAT IT DOES NOT DO, SAID HERE RATHER THAN DISCOVERED LATER. It does not know which leads BLOCK others.
 * That relation is real — adding two curated identities raised build.entry-closure-kilobytes, so the corpus
 * cannot grow until the registry leaves the eager chunk — but it is only ever discovered by trying, and no
 * declaration of it would be derived. So this prints the surface and the sizes; it does not pretend to know
 * the order in which the surface must fall.
 */

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

type Lead = { readonly family: string; readonly ratchet: string; readonly open: number; readonly gate: string; readonly kind: 'floor' | 'ceiling' }

/** Which gate measures a ratchet, derived from package.json rather than listed here: a gate is the script
 * whose own source names the ratchet. A ratchet no script names is itself the finding. */
export function gateFor(ratchet: string, root: string = process.cwd()): string {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  for (const [name, body] of Object.entries(pkg.scripts ?? {})) {
    if (!name.startsWith('verify:')) continue
    const file = /scripts\/verify\/[\w-]+\.ts/u.exec(body)?.[0]
    if (!file || !existsSync(join(root, file))) continue
    if (readFileSync(join(root, file), 'utf8').includes(`'${ratchet}'`)) return name
  }
  return '(no gate names it)'
}

/** A CEILING IS NOT A TARGET, AND RANKING BY SIZE PUT ONE AT THE TOP.
 *
 * Found by running this surface end to end on 2026-09-27: next_leads reported scope.boundaries (2598) as the
 * largest open lead, and verify:scope says of that very number "a CEILING, not a target" — a cap against growth,
 * not work to drive down. Ranking by size alone presented a guard as the biggest opportunity, which is the one
 * way a lead list can actively mislead: every number in it only falls, so nothing distinguished the two.
 *
 * The distinction is not declared here. The gate that measures a ratchet says it in its own output, so this
 * reads the gate's source near the ratchet name. A hand-kept list of which floors are really ceilings would be
 * a second declaration of one fact, and this session removed two of those already. */
const CEILING_SAID = /CEILING, not a target|a CEILING\b/iu
export function ratchetKind(ratchet: string, gate: string, root: string = process.cwd()): 'floor' | 'ceiling' {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const file = /scripts\/verify\/[\w-]+\.ts/u.exec(pkg.scripts?.[gate] ?? '')?.[0]
  if (!file || !existsSync(join(root, file))) return 'floor'
  const text = readFileSync(join(root, file), 'utf8')
  const at = text.indexOf(`'${ratchet}'`)
  if (at < 0) return 'floor'
  return CEILING_SAID.test(text.slice(Math.max(0, at - 600), at + 600)) ? 'ceiling' : 'floor'
}

export function openLeads(root: string = process.cwd()): Lead[] {
  const status = JSON.parse(readFileSync(join(root, 'scripts/verify/status.json'), 'utf8')) as Record<string, number>
  return Object.entries(status)
    .filter(([, open]) => typeof open === 'number' && open > 0)
    .map(([ratchet, open]) => {
      const gate = gateFor(ratchet, root)
      return { ratchet, open, family: ratchet.split('.')[0] ?? ratchet, gate, kind: ratchetKind(ratchet, gate, root) }
    })
}

/** runNextJsonExit — the same union, as one line of JSON, for a caller that is not a person.
 *
 * The human report and this share openLeads(): two renderings of one measurement, never two measurements.
 * An agent asking what to do next reads this; the leads it returns are the recorded floors above zero and the
 * gate that measures each, so acting on one means running that gate and watching its number fall. */
export function runNextJsonExit(root: string = process.cwd()): number {
  // ONE MEASUREMENT, AND THE TWO RENDERINGS MUST AGREE. The human report learned to split floors from
  // ceilings and this did not, for one commit — so `npm run next` put movie at the top and next_leads still
  // put scope there. Two renderings of one measurement is only true while both read the same fields; caught
  // by calling the MCP tool after changing the report, which is the only reason it did not ship.
  const leads = openLeads(root)
  const floors = leads.filter((l) => l.kind === 'floor')
  const ceilings = leads.filter((l) => l.kind === 'ceiling')
  const families = [...new Set(floors.map((l) => l.family))].map((family) => {
    const own = floors.filter((l) => l.family === family)
    return { family, open: own.reduce((sum, l) => sum + l.open, 0), leads: own.sort((a, b) => b.open - a.open) }
  }).sort((a, b) => b.open - a.open)
  process.stdout.write(`${JSON.stringify({
    ok: true,
    ratchetsOpen: leads.length,
    floorsOpen: floors.length,
    ceilings: ceilings.map((l) => ({ ratchet: l.ratchet, open: l.open, gate: l.gate, note: 'its own gate calls this a cap, not a target' })),
    unitsAreNotComparable: 'the total sums kilobytes, counts, densities and draw calls — family totals compare, the sum does not',
    families: families.length,
    unitsOfWork: floors.reduce((sum, l) => sum + l.open, 0),
    evidenceHint: 'VERIFY_EVIDENCE=1 npm run <gate>',
    externalRecordsNotRead: 'npm run verify:release-live',
    blockingOrderNotKnown: 'sizes are measured; which lead blocks another is only found by trying',
    byFamily: families,
  })}\n`)
  return 0
}

export function runNextExit(root: string = process.cwd()): number {
  const leads = openLeads(root)
  const floors = leads.filter((l) => l.kind === 'floor')
  const ceilings = leads.filter((l) => l.kind === 'ceiling')
  const families = [...new Set(floors.map((l) => l.family))]
    .map((family) => ({ family, leads: floors.filter((l) => l.family === family).sort((a, b) => b.open - a.open) }))
    .map((group) => ({ ...group, total: group.leads.reduce((sum, l) => sum + l.open, 0) }))
    .sort((a, b) => b.total - a.total)
  const total = floors.reduce((sum, l) => sum + l.open, 0)
  console.log(`  ${floors.length} open floor(s) across ${families.length} families · ${total} units`)
  console.log('  the total sums UNLIKE units — kilobytes, counts, densities, draw calls; family totals compare, the sum does not')
  for (const c of ceilings) console.log(`  CEILING, not a target: ${c.ratchet} (${c.open}) via ${c.gate} — its own gate says so`)
  console.log(`  every number below is a floor that may only fall, and the gate that measures it\n`)
  for (const group of families) {
    console.log(`  ${group.family} — ${group.total}`)
    for (const lead of group.leads) console.log(`    ${String(lead.open).padStart(7)}  ${lead.ratchet.padEnd(38)} ${lead.gate}`)
  }
  console.log(`\n  evidence for any one of them: VERIFY_EVIDENCE=1 npm run <gate>`)
  console.log(`  the external records, which this does not read: npm run verify:release-live`)
  return 0
}
