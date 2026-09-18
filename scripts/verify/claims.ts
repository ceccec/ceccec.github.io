/**
 * DOES THE FACET TEST WHAT ITS LABEL SAYS?
 *
 * A facet is a sentence and a boolean. Nothing in the corpus checks that they are about the same thing, and
 * three times in one campaign they were not:
 *
 *   { facet: `NOT ad-hoc — schedule length === ROSETTA_RAYS.length · …`, on: rayRuns.length === 7 }
 *   { facet: 'every row carries a source and an honesty tier',           on: row.source.length > 8 }
 *   { facet: 'maximum tampering cost — forging one page costs a full rebuild',
 *     on: foldPair(sealed, toUuid('forge')).merged !== sealed }
 *
 * The first names the comparison it wants and then compares to a literal. The second calls nine characters a
 * source. The third promises a COST and tests that two different seeds give two different addresses, which is
 * what a hash does on its quietest day. Each was found by hand, and the finder was thrown away each time.
 *
 * TWO RULES, BOTH LEARNED FROM REAL FINDINGS.
 *
 * 1. SPELLED-OUT COMPARISON. When the label writes `X === Y.length` or `=== SOME_CONST`, the `on:` must
 *    actually contain that right-hand side. A label is a specification when it is that concrete.
 *
 * 2. COST CLAIMED, EVIDENCE TESTED. When the label claims difficulty — a cost, a price, forging, resistance —
 *    the `on:` must reach something that models difficulty (an entropy budget, a bit count, a measured
 *    collision), not merely show that two addresses differ. Tamper-EVIDENCE is not tamper-RESISTANCE: the
 *    first says a change is visible, the second says a forgery is expensive, and this corpus has measured its
 *    own hash colliding well below the second.
 *
 * DIRECTION OF FAILURE: this reports and ratchets. It cannot know that a sentence is true — only that the
 * boolean beside it is about something else entirely.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ratchet } from './status.ts'

export type ClaimGap = { file: string; line: number; rule: 'spelled-comparison' | 'cost-vs-evidence'; label: string; on: string }

const FACET = /\{ facet: ([`'])(.*?)\1, on: (.*?) \},?\s*$/
/** a comparison written out in the label: `something === SOME_CONST` or `=== x.length` */
const SPELLED = /([A-Za-z_$][\w$.]*)\s*(?:===|==|>=)\s*([A-Za-z_$][\w$.]*\.length|[A-Z][A-Z0-9_]{2,})/
/** the label promises difficulty */
const COST = /\b(tampering cost|forge(r|s|d)? (price|cost)|costs? a full|maximum tampering|forger price|tamper-?proof|unforgeable|infeasible to forge)\b/i
/** the `on:` reaches something that models difficulty rather than mere difference */
const MODELS_COST = /entropy|Entropy|DIGEST_BITS|FORGE_COST_CEILING|tamperCostLog2|coverageCostLog2|birthday|collision|Collision|sha256|Sha256|maxTamperingCost|bits/
/** a denial or an earned boundary, not a claim */
const DENY = /\bNOT\b|\bnot (unforgeable|a signature|a guarantee)\b|✗|REFUTED|DEMARCATION|EARNED BOUNDARY|tamper-?EVIDENT|until the [^.]*cutover|never claims|honest(ly)? (bounded|partial)/i

export function findClaimGaps(root: string = process.cwd()): ClaimGap[] {
  const out: ClaimGap[] = []
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name === '.lake' || e.name === 'cache') continue
      const p = join(dir, e.name)
      if (e.isDirectory()) { walk(p); continue }
      if (!e.name.endsWith('.ts')) continue
      const text = readFileSync(p, 'utf8')
      if (!/^\s*\{ facet:/m.test(text)) continue
      const rel = relative(root, p).replace(/\\/g, '/')
      text.split('\n').forEach((line, i) => {
        const ls = line.trim()
        if (ls.startsWith('//') || ls.startsWith('*')) return
        const m = FACET.exec(line)
        if (!m) return
        const label = m[2]!, on = m[3]!
        const plain = label.replace(/\$\{[^}]*\}/g, '')
        // A LABEL SPELLS A SPECIFICATION ONLY WHEN IT NAMES SOMETHING THE FILE CAN REFERENCE. `… reduces to
        // LINKED-routes-root === GENERATED-routes-root` reads like code and is prose: GENERATED is emphasis, not
        // an identifier, and the comparison IS made — by `oneRoot`, one line above. The rule fired on it because
        // it assumed every capitalised word in a label is a name. It now requires the right-hand side to be
        // declared or imported in the same file, which is what separates ROSETTA_RAYS (a constant the fold holds)
        // from GENERATED (a word the sentence stresses).
        const spelled = SPELLED.exec(plain)
        const rhs = spelled?.[2]?.replace(/\.length$/, '')
        const nameable = rhs !== undefined
          && new RegExp(`(?:const|let|function|type)\\s+${rhs}\\b|import[^\\n]*\\b${rhs}\\b`).test(text)
        if (spelled && nameable && !on.includes(spelled[2]!)) {
          out.push({ file: rel, line: i + 1, rule: 'spelled-comparison', label: label.slice(0, 120), on: on.slice(0, 100) })
        }
        // The ceiling may be named in the LABEL rather than reached by the code — "the FNV toUuid is WEAK (2^61),
        // use toUuidSha256" is the honest sentence this gate exists to encourage, and flagging it taught me the
        // rule was checking the wrong half. A claim is a gap only when NEITHER side names what bounds it.
        if (COST.test(plain) && !DENY.test(plain) && !MODELS_COST.test(on) && !MODELS_COST.test(label)) {
          out.push({ file: rel, line: i + 1, rule: 'cost-vs-evidence', label: label.slice(0, 120), on: on.slice(0, 100) })
        }
      })
    }
  }
  walk(join(root, 'src'))
  return out
}

export function assertClaimsMatchEvidence(): void {
  const gaps = findClaimGaps()
  const spelled = gaps.filter((g) => g.rule === 'spelled-comparison')
  const cost = gaps.filter((g) => g.rule === 'cost-vs-evidence')
  console.log(`claims: ${spelled.length} label(s) spelling a comparison the code does not make · ${cost.length} cost claim(s) tested only by difference`)
  for (const g of gaps.slice(0, 12)) console.log(`  [${g.rule}] ${g.file}:${g.line}\n      ${g.label}\n      on: ${g.on}`)
  console.log(ratchet('claims.spelled-comparison', spelled.length, { evidence: () => spelled.map((g) => `${g.file}:${g.line}  ${g.label}`) }))
  console.log(ratchet('claims.cost-vs-evidence', cost.length, { evidence: () => cost.map((g) => `${g.file}:${g.line}  ${g.label}`) }))
}
