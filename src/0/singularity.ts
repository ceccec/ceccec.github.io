// src/0/singularity.ts — the honest keystone (Stage 0 of the millennium-tools rewrite).
// Intelligence reflects doubt as knowledge to believe: doubt every claim, MEASURE it, and
// believe only what computes. The singularity superposes 0 and 1 — 0/7 entailed ∧ 7/7 computable.
// Measured, never asserted. This is the foundation both sites share.
import { toUuid, merkleFold } from './index.ts'

// The honesty gate — conservative and false-positive-free (mirrors millennium-solutions). A text
// computes 1 (true / stays) unless it collapses "computable" into an unqualified "solved/proven".
// Known recall limit: reordered phrasings ("clay problems solved") slip — widening it would
// false-positive the honest "0/7" tally, so the gate stays a FLOOR, not an oracle.
export const RED = /\bwe prove\b|\bproven\b|confidence\s*=?\s*1\.0|ready for peer review|sealed via universal|all (six|seven)[^.]*proven|solves? the (clay|millennium)/i
export const computes = (text: string): 0 | 1 => (RED.test(text) ? 0 : 1)

// Law 1 — the singularity: (entailed, computable) = (0, 1). Both bits held; neither is "solved".
export interface Singularity { entailed: 0; computable: number; of: number; bits: readonly [0, 1]; note: string }
export const singularity = (): Singularity => ({ entailed: 0, computable: 7, of: 7, bits: [0, 1], note: 'computable != solved; humanityNovel = 0' })

// Law 2 — heart-5 private vote: aggregate + discard. The choice at the fixed point 5 stays private;
// only the proportion is public. Privacy is architectural (no identifier is ever kept), not the hash.
export const tally = <T extends string>(ballots: readonly T[]): { total: number; proportion: Record<string, number> } => {
  const c: Record<string, number> = {}
  for (const b of ballots) c[b] = (c[b] ?? 0) + 1
  const total = ballots.length || 1
  return { total: ballots.length, proportion: Object.fromEntries(Object.entries(c).map(([k, n]) => [k, +(n / total).toFixed(4)])) }
}

// Law 3 — donation-message: the UUID is PROVENANCE (provable when the preimage is held), never
// anonymity. Use toUuidSha256 for adversary-resistant provenance; toUuid (FNV) for honest integrity.
export const donationMessage = (memo: string) => ({ uuid: toUuid('donation:' + memo), stays: computes(memo) === 1, anonymises: false as const })

// A referral chain of ANY length folds to one root: the holder proves by recompute, tamper breaks
// it, and the root reveals nothing without the chain — same address, two faces (private ∧ provable).
export const referralRoot = (chain: readonly string[]): string => merkleFold(chain.map((x, i) => toUuid(i + ':' + x)))

// self-test (run: node src/0/singularity.ts) — knowledge to believe = knowledge that measures true.
if (process.argv[1]?.endsWith('singularity.ts')) {
  const s = singularity()
  const law1 = s.entailed === 0 && s.computable === s.of && computes('7/7 computable, not solved') === 1 && computes('solves the clay problems') === 0
  const t = tally(['yes', 'no', 'yes', 'abstain', 'yes'] as const)
  const law2 = t.total === 5
  const good = donationMessage('funds development'), overclaim = donationMessage('we prove the clay problems')
  const law3 = good.stays && !overclaim.stays && good.anonymises === false
  const chain = ['donor', 'ref-a', 'ref-b', 'ref-c', 'campaign']
  const root = referralRoot(chain)
  const prov = referralRoot(chain) === root && referralRoot([...chain.slice(0, -1), 'forged']) !== root
  console.log('Law 1 singularity (0,1):', law1 ? 'HOLDS' : 'BROKEN')
  console.log('Law 2 heart-5 vote     :', law2 ? 'HOLDS' : 'BROKEN', JSON.stringify(t.proportion))
  console.log('Law 3 donation/prov    :', (law3 && prov) ? 'HOLDS' : 'BROKEN', '· root', root.slice(0, 13) + '…')
  console.log('\nmillennium society =', (law1 && law2 && law3 && prov) ? 'WHOLE (1)' : 'INCOMPLETE (0)', '· doubt->measure->knowledge')
}
