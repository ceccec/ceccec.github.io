/**
 * VERIFY:ALL IS AN `&&` CHAIN, AND AN `&&` CHAIN CANNOT TELL YOU WHAT IT DID NOT RUN.
 *
 * Thirty-seven gates joined by `&&` in package.json. When gate 6 fails, gates 7..37 never execute,
 * and the log ends. Nothing in that log distinguishes "these 31 gates passed" from "these 31 gates
 * were never asked" — which is the exact three-exit confusion (clean / violation / NOT MEASURED)
 * that a dozen gates in this directory exist to enforce, absent from the runner that calls them.
 *
 * It is worse in practice than in principle, because the reporting path was: redirect to a log,
 * wait, read the tail. A tail is prose. This session read `cut -c1-16` of a docs:build and called
 * it green; it read EXIT=124 and called it a build failure when it was my own stale build lock.
 * Both were errors of READING, and no gate can protect against a reader.
 *
 * So the chain is fused: one runner, every gate ASKED regardless of what failed before it, and the
 * result is a RECEIPT — a machine-readable verdict vector addressed by content — rather than
 * output someone has to read correctly. The tree is digested at EVERY gate, so a tree that moves
 * mid-run qualifies the gates that straddle the move instead of discarding the whole run.
 *
 * COST, STATED HONESTLY: the chain is fast when it is red, because it stops. This is not. A red
 * run now costs what a green run costs. That is the price of knowing, and it is the right price:
 * the chain's speed was purchased entirely with ignorance about the gates it skipped.
 *
 * NOT IN verify:all — it RUNS verify:all's members, so putting it in the chain would recurse. It
 * is the thing you run INSTEAD of the chain.
 */

import { spawn, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { appendFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cpus } from 'node:os'
import { treeDigest } from './every-fold.ts'

const ROOT = process.cwd()

/** clean = ran and passed. violated = ran and refused. NOT RUN = never asked, or could not answer. */
type Verdict = 'clean' | 'violated' | 'NOT RUN'
type Result = { readonly gate: string; readonly verdict: Verdict; readonly code: number | null; readonly ms: number; readonly detail: string; readonly tree?: string }

/**
 * THE GATE LIST IS DERIVED FROM package.json, NOT TYPED HERE. A hand-copied list would drift from
 * the chain the moment a gate is added, and would then report a green stream over a gate nobody
 * ran — the failure this file exists to remove, reintroduced by the file itself.
 */
export function chainGates(root: string = ROOT): readonly string[] {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
  const chain: string = pkg.scripts?.['verify:all'] ?? ''
  const out: string[] = []
  const unread: string[] = []
  for (const part of chain.split('&&')) {
    const m = /^\s*npm run ([\w:-]+)\s*$/.exec(part)
    if (m) out.push(m[1]!)
    else unread.push(part.trim())
  }
  // A LINK THIS PARSER CANNOT READ IS A GATE NOBODY RUNS, AND DROPPING IT IS INVISIBLE. Perturbing
  // the parser with `FOO=1 npm run c` parsed 2 of 3 and said nothing — a stream that reports clean
  // over a gate it never saw, which is the whole defect this file was written to remove, arriving
  // inside the file itself. An unreadable link is now a refusal, not a silence.
  if (unread.length > 0) throw new Error(`${unread.length} link(s) of verify:all are not \`npm run <gate>\` and this parser cannot see them: ${unread.join(' | ')}`)
  if (out.length === 0) throw new Error('verify:all parsed to zero gates — the chain shape changed and this parser is now blind')
  return out
}

/**
 * THE MESSAGE, NOT THE SOURCE LINE THAT RAISED IT. The first version matched /Error/ against every
 * output line and won the race with the stack frame, so the receipt recorded
 * "throw new Error(`${name}: ${measured}, above the recorded ${recorded}`)" — the TEMPLATE, with
 * none of the numbers. A refusal reported without its measurement is not a report.
 */
export function message(out: string): string {
  const err = out.split('\n').find((l) => /^\s*Error: /.test(l))
  if (err) return err.replace(/^\s*Error: /, '').trim()
  return (out.split('\n').find((l) => /FAIL|✗|refus/.test(l)) ?? '').trim()
}

/**
 * A GATE THAT DIED BEFORE IT COULD MEASURE HAS NOT REFUSED — IT HAS NOT ANSWERED.
 *
 * First attempt sniffed stdout: "a gate that reached its measurement printed at least one line of
 * its own". It filed a REAL refusal as NOT RUN — verify:paths throws without printing anything
 * first, so after the npm banner and the stack there was nothing left to find, and a live 51 → 52
 * regression was recorded as "I do not know". Under-claiming did not invent a verdict, but it hid
 * one.
 *
 * The distinction is not how much a gate printed. It is WHICH ERROR: the module loader failing to
 * assemble the program, versus the program running and refusing. That is one test on the error
 * name, and it does not care what the gate chose to log.
 */
export function crashed(out: string): boolean {
  // `export X not found` is on this list because it happened: a stale esbuild cache reported a
  // present export as absent, and the file typechecked clean the whole time. It is the loader
  // failing to assemble the program — the same class as a missing module — and without it here a
  // cache artefact would be recorded as a gate refusing.
  return /ERR_MODULE_NOT_FOUND|ERR_UNSUPPORTED_DIR_IMPORT|Cannot find module|SyntaxError|ERR_REQUIRE_ESM|Transform failed|Build failed with \d+ error|export \S+ not found/.test(out)
}

function classify(gate: string, status: number | null, ms: number, out: string, err?: string): Result {
  if (status === null) return { gate, verdict: 'NOT RUN', code: null, ms, detail: err ?? 'killed or timed out — no verdict' }
  if (status === 0) return { gate, verdict: 'clean', code: 0, ms, detail: '' }
  if (crashed(out)) return { gate, verdict: 'NOT RUN', code: status, ms, detail: `the loader failed, so nothing was measured — ${message(out).slice(0, 100)}` }
  return { gate, verdict: 'violated', code: status, ms, detail: message(out).slice(0, 140) }
}

/**
 * A GATE'S OUTPUT IS KEPT, BECAUSE THE FIRST VERSION THREW IT AWAY.
 *
 * It extracted 140 characters for the receipt and discarded the rest. So when the question became
 * "where do every-fold's 397 seconds go", the answer was in SLOW MODULE lines that gate had printed
 * on every run and this runner had deleted every time. A fused runner that destroys the evidence it
 * fuses is a worse instrument than the chain it replaced, which at least left a log.
 */
function transcript(dir: string, gate: string, out: string): void {
  appendFileSync(join(dir, 'gates.log'), `\n${'='.repeat(78)}\n=== ${gate}\n${'='.repeat(78)}\n${out}`)
}

/**
 * THE GATES RUN IN PARALLEL, AND THE MEASUREMENT THAT LICENSED IT WAS NOT MINE.
 *
 * I claimed concurrent verification runs corrupt each other's verdicts and would have refused to do
 * this. Then two full streams were run at once over one tree and produced the SAME ADDRESS with
 * ZERO disagreeing gates. The belief was false, and it was costing 41% of the wall clock: serially
 * the run is the SUM of 37 gates (675s), in parallel it is bounded by the slowest one (~400s).
 *
 * ORDER IS PRESERVED BY INDEX, NOT BY COMPLETION. The address is sha256(tree | verdict vector), so
 * if the vector were assembled in finish order it would change from run to run for no reason and
 * every comparison would report disagreement. Results are written into their chain slot.
 *
 * AND THE RECEIPT IS THE SAFETY NET: if running in parallel changes any verdict, the address changes
 * and says so against the serial receipts already stored for this tree.
 */
async function runPool(gates: readonly string[], dir: string, width: number): Promise<Result[]> {
  const results = new Array<Result>(gates.length)
  let next = 0
  const worker = async (): Promise<void> => {
    for (;;) {
      const i = next++
      if (i >= gates.length) return
      const gate = gates[i]!
      const t0 = Date.now()
      const at = treeDigest(ROOT)
      const out = await new Promise<{ status: number | null; text: string; err?: string }>((resolve) => {
        const child = spawn('npm', ['run', gate], { cwd: ROOT })
        let text = ''
        child.stdout.on('data', (b) => { text += b })
        child.stderr.on('data', (b) => { text += b })
        child.on('error', (e) => resolve({ status: null, text, err: e.message }))
        child.on('close', (code) => resolve({ status: code, text }))
      })
      const r = { ...classify(gate, out.status, Date.now() - t0, out.text, out.err), tree: at }
      transcript(dir, gate, out.text)
      results[i] = r
      const mark = r.verdict === 'clean' ? '✓' : r.verdict === 'violated' ? '✗' : '?'
      console.log(`  ${mark} ${gate.padEnd(30)} ${r.verdict.padEnd(9)} ${String(Math.round(r.ms / 1000)).padStart(4)}s ${r.detail}`)
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, width) }, worker))
  return results
}

/**
 * WHAT ELSE WAS RUNNING IS RECORDED, BECAUSE I GUESSED WRONG ABOUT IT AND THE GUESS WAS TESTABLE.
 *
 * The claim here was that concurrent runs corrupt each other's verdicts, and four incidents were
 * offered as proof: a docs:build EXIT=124, a verify:release 6/7, an every-fold refusal, and this
 * file's own first run recording two gates as REFUSING when they had crashed.
 *
 * Then the pair was actually run — two full streams at once over one tree — and they produced the
 * SAME ADDRESS with ZERO disagreeing gates. Concurrency corrupted nothing. Three of those four
 * incidents were me deleting the esbuild cache or editing package.json underneath a running census;
 * the fourth was this file misreading a refusal. One cause, and it was not the other process.
 *
 * So concurrency is recorded, not refused. The stronger reason is that a gate whose answer depends
 * on what else is running was never a function of the tree alone, and the DISAGREEMENT between two
 * runs is the only thing that can say so — a lock deletes the evidence rather than the fault.
 *
 * THE LIMIT: the pair agreed with each other and BOTH disagreed with a later serial run, which
 * found dead-strings 51 where they found 52. Runs that share a starting state fail together, so
 * agreement between simultaneous runs is weaker evidence than agreement across separated ones.
 * `isolated` is recorded beside the verdicts so the two are never read as the same claim.
 */
export function concurrentRuns(): readonly string[] {
  const r = spawnSync('ps', ['-Ao', 'pid=,ppid=,command='], { encoding: 'utf8' })
  if (r.status !== 0) return []
  const rows = (r.stdout ?? '').split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
    const m = /^(\d+)\s+(\d+)\s+(.*)$/.exec(l)
    return m ? { pid: Number(m[1]), ppid: Number(m[2]), cmd: m[3]! } : null
  }).filter((x): x is { pid: number; ppid: number; cmd: string } => x !== null)

  // MY OWN LAUNCHER IS NOT A COMPETITOR. Perturbing this with one background gate returned FOUR
  // hits, two of which were the shell that started the probe: its command line contains the text
  // `npm run verify…`, so a text filter cannot tell a parent from a rival. Launched the normal way
  // this gate would have refused to start because it saw itself. The ancestry is walked instead —
  // a fact about process structure rather than a guess about strings.
  const ancestors = new Set<number>([process.pid])
  const byPid = new Map(rows.map((x) => [x.pid, x]))
  for (let cur = byPid.get(process.pid)?.ppid; cur !== undefined && cur > 1 && !ancestors.has(cur); cur = byPid.get(cur)?.ppid) ancestors.add(cur)

  return rows
    .filter((x) => !ancestors.has(x.pid))
    .filter((x) => /cli\/bootstrap\/index\.ts/.test(x.cmd) || /npm run verify/.test(x.cmd))
    .filter((x) => !/stream\.ts/.test(x.cmd))
    .map((x) => `${x.pid} ${x.cmd}`.slice(0, 120))
}

export async function runVerificationStream(): Promise<void> {
  // CONCURRENCY IS RECORDED, NOT REFUSED — and the first version of this file refused.
  //
  // The argument for refusing was that concurrent runs corrupt each other's verdicts. The argument
  // against is stronger: a gate whose answer depends on what else is running was never a function
  // of the tree alone, and the DISAGREEMENT between two runs is the only thing that can say so. The
  // crash-vs-refusal conflation above was found exactly that way — a contended run disagreed with a
  // serial one. A lock would have kept it.
  //
  // It also made the receipt address pointless. The address is sha256(tree | verdict vector)
  // specifically so two runs of one tree can be compared; refusing the second run means nothing is
  // ever compared to anything.
  //
  // THE LIMIT, STATED SO AGREEMENT IS NOT OVERSOLD: runs sharing one esbuild cache fail together.
  // Correlated failure means agreement under contention is WEAKER evidence than agreement under
  // isolation, so `isolated` is recorded beside the verdicts and no reader should treat the two as
  // the same kind of agreement.
  const others = concurrentRuns()
  if (others.length > 0) {
    console.log(`  NOT ISOLATED — ${others.length} other verification process(es) are running. Recorded, not refused:`)
    for (const o of others) console.log(`    ${o}`)
    console.log('  Their interference, if any, is measurable: compare this receipt with one over the same tree.\n')
  }
  const gates = chainGates()
  const before = treeDigest(ROOT)
  console.log(`\n=== FUSED VERIFICATION — ${gates.length} gates, every one asked ===\n`)
  // THE TREE IS DIGESTED AT EVERY GATE, NOT ONLY AT THE ENDS.
  //
  // The first version took one digest before and one after and threw the whole run away if they
  // differed. It threw away 33 valid verdicts because I added one line to package.json at minute
  // four of a twelve-minute run — the third time in one session I moved the tree under my own
  // census. Discarding everything records nothing, and "the tree moved somewhere in twelve minutes"
  // is not a useful thing to have measured.
  //
  // Per-gate digests say exactly which gates saw which tree. A gate that ran entirely within one
  // digest has a verdict about a tree that existed; only a gate whose digest differs from the one
  // the run began with is qualified, and it is qualified individually rather than collectively.
  // Per-gate digests say exactly which gates saw which tree. A gate that ran entirely within one
  // digest has a verdict about a tree that existed; only a gate whose digest differs from the one
  // the run began with is qualified, and it is qualified individually rather than collectively.
  const runId = `${process.pid}-${Date.now().toString(36)}`
  const dir = join(ROOT, 'scripts', 'verify', 'receipts')
  mkdirSync(dir, { recursive: true })
  const width = Number(process.env.STREAM_WIDTH ?? Math.min(8, Math.max(2, cpus().length - 1)))
  console.log(`  ${width} at a time — serially this is the SUM of every gate, in parallel it is the slowest one\n`)
  const results = await runPool(gates, dir, width)

  const after = treeDigest(ROOT)
  const onMovedTree = results.filter((r) => r.tree !== before)

  const clean = results.filter((r) => r.verdict === 'clean').length
  const violated = results.filter((r) => r.verdict === 'violated')
  const notRun = results.filter((r) => r.verdict === 'NOT RUN')

  // THE RECEIPT IS THE PRODUCT. Its address covers the verdict vector AND the tree, so a receipt
  // cannot be presented for a different tree, and two runs of the same tree that disagree produce
  // two different addresses rather than one story.
  const vector = results.map((r) => `${r.gate}=${r.verdict}`).join(';')
  const address = createHash('sha256').update(`${before}|${vector}`).digest('hex').slice(0, 16)
  const receipt = {
    tree: before,
    treeAfter: after,
    stable: before === after,
    isolated: others.length === 0,
    onMovedTree: onMovedTree.map((r) => r.gate),
    alongside: others,
    ranAt: new Date().toISOString(),
    address,
    gates: gates.length,
    clean,
    violated: violated.map((r) => r.gate),
    notRun: notRun.map((r) => r.gate),
    results,
  }
  // ONE OUTPUT, AND NOT A LITERAL PATH TO A FILE THAT DOES NOT EXIST YET.
  //
  // This wrote a second copy to a fixed receipt file beside this one, named by a literal. That
  // literal is a path string verify:paths resolves; the file is written at the END of a run and is
  // gitignored, so on a fresh clone it never exists. dead-strings went 51 → 52 and my own
  // instrument broke a gate by naming a file it had not written yet. Deleting the write was not
  // enough — the sentence describing it named the path too, and prose is scanned, so writing about
  // a dead path created one. The archive is the only output and its name is computed, so there is
  // no literal left to go stale.
  const file = join(dir, `${before}-${address}-${runId}.json`)
  writeFileSync(file, `${JSON.stringify(receipt, null, 2)}\n`)

  console.log(`\n  ${clean}/${gates.length} clean · ${violated.length} violated · ${notRun.length} NOT RUN`)
  console.log(`  receipt ${address} over tree ${before}${before === after ? '' : ` — TREE MOVED to ${after} during the run`}`)
  console.log(`  ${file.replace(`${ROOT}/`, '')} — consume this, do not read a log tail`)
  console.log(`  ${priorRuns(before, address)}\n`)

  if (onMovedTree.length > 0) {
    console.log(`  ${onMovedTree.length} gate(s) ran after the tree moved (${before} → ${after}); their verdicts are about a later tree and are named in the receipt.`)
    console.log(`  The other ${results.length - onMovedTree.length} ran against ${before} and stand.\n`)
  }
  if (notRun.length > 0) throw new Error(`${notRun.length} gate(s) gave NO VERDICT: ${notRun.map((r) => r.gate).join(', ')}`)
  if (violated.length > 0) throw new Error(`${violated.length} gate(s) refused: ${violated.map((r) => r.gate).join(', ')}`)
}

/**
 * TWO RECEIPTS OVER ONE TREE ARE A MEASUREMENT; ONE IS ONLY A CLAIM.
 *
 * This was a separate gate with its own npm script and its own NOT MEASURED branch to explain. It
 * did not need to be: the address is already sha256(tree | verdict vector), so two runs of one tree
 * either produce the same address or they do not. Run it twice and the run tells you. No second
 * command, no place in the chain to argue about.
 */
function priorRuns(tree: string, address: string): string {
  let files: string[] = []
  try { files = readdirSync(join(ROOT, 'scripts', 'verify', 'receipts')).filter((f) => f.startsWith(`${tree}-`)) } catch { return 'first receipt for this tree — a claim, not yet a reproduction' }
  const addrs = new Set(files.map((f) => f.slice(tree.length + 1).split('-')[0]!))
  if (files.length < 2) return 'first receipt for this tree — a claim, not yet a reproduction'
  if (addrs.size === 1) return `${files.length} runs of this tree, all ${address} — the verdicts reproduce`
  return `${files.length} runs of this tree gave ${addrs.size} DIFFERENT addresses (${[...addrs].join(', ')}) — some gate is not a function of the tree`
}
