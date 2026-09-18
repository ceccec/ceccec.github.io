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
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue // src/*/cache is a folder name here, not build output
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

/** A claim this corpus PUBLISHES, and the fold that published it. */
export type PublishedClaim = { file: string; line: number; fold: string; claim: string }

/** Read a quoted value from its opening quote to its matching close — a published statement rarely fits on
 *  one line, and reading only the ones that did saw 1,776 of 5,905. */
const valueAt = (src: string, from: number): string | null => {
  const q = src[from]
  if (q !== "'" && q !== '`' && q !== '"') return null
  let i = from + 1
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue }
    if (src[i] === q) return src.slice(from + 1, i)
    i += 1
  }
  return null
}

/** A sentence that refuses claims nothing, so nothing needs to back it. Most of this corpus's boundaries
 *  are these, and counting them as claims would bury the ones that are. */
const REFUSES = /\b(?:no|not|never|without|refus\w*|neither|nor|cannot|nothing|none|zero|NOT)\b/

/**
 * EVERY CLAIM THIS CORPUS PUBLISHES, TRIED AGAINST THE FOLD THAT PUBLISHES IT.
 *
 * The two rules above read facets — the corpus talking to itself. A `statement:` or `boundary:` is the
 * corpus talking to a READER, and it is the larger surface by far: 5,442 of them against roughly 1,100
 * facet labels. Nothing was reading them.
 *
 * THE TRIAL, and why it is not a word list. A gate that looks for claim WORDS catches the vocabularies
 * whoever wrote the list thought of, and needs a new list the day a fold is named for a market or a mind.
 * The question here is not what a sentence is about — it is whether anything can refute it. A published
 * claim is tried when its own fold carries a facet whose `on:` computes; it is acquitted when the sentence
 * refuses rather than asserts; and it is UNTRIED when neither holds: published to a reader, from a fold
 * with nothing in it that can fail.
 *
 * UNTRIED IS NOT FALSE. Most of these are backed by the arithmetic the fold performs — the doubling
 * circuit, the vortex seam, χ = −2. The finding is that the backing is never checked, so the sentence and
 * the code can drift apart with nothing to notice.
 *
 * THE NUMBER TRIED IS PRINTED ALWAYS. A reader of "0 findings" cannot tell a clean corpus from an
 * extractor that stopped reading, and this corpus has been bitten by exactly that.
 */
export function findUntriedClaims(root: string = process.cwd()): { published: number; refused: number; refutable: number; untried: PublishedClaim[] } {
  const untried: PublishedClaim[] = []
  let published = 0, refused = 0, refutable = 0
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue
      const p = join(dir, e.name)
      if (e.isDirectory()) { walk(p); continue }
      if (!e.name.endsWith('.ts')) continue
      const text = readFileSync(p, 'utf8')
      const rel = relative(root, p).replace(/\\/g, '/')
      // A DATA TABLE IS NOT A FOLD SPEAKING. `export const MILLENNIUM_VORTEX = [{ … statement: '…' }]` mirrors
      // another record's Lean statements char for char, and the uuidna mirror above it does the same; reading
      // those as claims this corpus publishes counted nine sealed theorems as unbacked prose. Both kinds of
      // export are collected, and a `statement:` whose nearest one is a const belongs to the table, not a fold.
      const folds = [...text.matchAll(/^export (?:async )?(function|const) ([A-Za-z_$][\w$]*)/gm)]
        .map((m) => ({ at: m.index!, kind: m[1]!, name: m[2]! }))
      for (const m of text.matchAll(/\b(?:statement|boundary):\s*/g)) {
        const value = valueAt(text, m.index! + m[0].length)
        if (value === null || value.trim().length < 20) continue
        published += 1
        if (REFUSES.test(value)) { refused += 1; continue }
        let i = folds.length - 1
        while (i >= 0 && folds[i]!.at > m.index!) i -= 1
        if (i < 0) continue // published before any export — not a fold's claim
        if (folds[i]!.kind === 'const') { published -= 1; continue } // a mirrored or tabulated statement
        const body = text.slice(folds[i]!.at, folds[i + 1]?.at ?? text.length)
        // A FACET THAT CAN FAIL: an `on:` whose value is not a hardcoded literal.
        // The closers must ALL come off. Stripping one `}` or `,` left `on: true }]` — a facet array written
        // on a single line — reading as a computation, so a fold whose only facet was hardcoded scored as
        // refutable. A fixture with one fold of each kind caught it; the real tree hid it, because facets are
        // usually one per line and end in `},`.
        const computes = [...body.matchAll(/(?<![\w$])on:\s*([^,\n]+)/g)]
          .map((x) => x[1]!.trim().replace(/[\]\)},\s]+$/, ''))
          .some((on) => !/^(?:true|false)$/.test(on))
        if (computes) { refutable += 1; continue }
        untried.push({ file: rel, line: text.slice(0, m.index!).split('\n').length, fold: folds[i]!.name, claim: value.replace(/\s+/g, ' ').slice(0, 110) })
      }
    }
  }
  walk(join(root, 'src'))
  return { published, refused, refutable, untried }
}

export function assertClaimsMatchEvidence(): void {
  const gaps = findClaimGaps()
  const spelled = gaps.filter((g) => g.rule === 'spelled-comparison')
  const cost = gaps.filter((g) => g.rule === 'cost-vs-evidence')
  console.log(`claims: ${spelled.length} label(s) spelling a comparison the code does not make · ${cost.length} cost claim(s) tested only by difference`)
  for (const g of gaps.slice(0, 12)) console.log(`  [${g.rule}] ${g.file}:${g.line}\n      ${g.label}\n      on: ${g.on}`)
  console.log(ratchet('claims.spelled-comparison', spelled.length, { evidence: () => spelled.map((g) => `${g.file}:${g.line}  ${g.label}`) }))
  console.log(ratchet('claims.cost-vs-evidence', cost.length, { evidence: () => cost.map((g) => `${g.file}:${g.line}  ${g.label}`) }))

  const trial = findUntriedClaims()
  console.log(`claims: ${trial.published} published statement(s) tried — ${trial.refused} refuse rather than assert, ${trial.refutable} come from a fold with a facet that can fail, ${trial.untried.length} from a fold with nothing in it that can`)
  for (const c of trial.untried.slice(0, 8)) console.log(`  [untried] ${c.file}:${c.line}  ${c.fold}\n      ${c.claim}`)
  console.log(ratchet('claims.untried-published', trial.untried.length, { evidence: () => trial.untried.map((c) => `${c.file}:${c.line}  ${c.fold}  ${c.claim}`) }))
}
