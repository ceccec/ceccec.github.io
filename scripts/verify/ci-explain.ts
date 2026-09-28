/**
 * CI EXITS 1 FOR EVERY KIND OF FAILURE, AND THE KINDS NEED DIFFERENT PEOPLE.
 *
 * Four publishes failed today and each was misread before it was traced. A missing `lake` on the runner, a
 * ratchet that had been red since 2026-09-18, a Vite error whose message sat in an unprinted buffer, and an
 * npmjs 404 for a credential that does not exist — all four arrived as "Process completed with exit code 1"
 * and all four needed a different response. One is an environment to provision, one is a tree to fix, one is
 * an instrument that hid its evidence, and one cannot be fixed by anybody without a secret.
 *
 * A LOG THAT SAYS WHAT KIND OF FAILURE IT IS SAVES THE TRACE, NOT THE FIX. This reads a captured CI log and
 * classifies by the signature the failure actually leaves, and every class names WHO can act:
 *
 *   environment   a spawn died ENOENT on a tool the runner does not carry — the tree is innocent, and a gate
 *                 that measured nothing must say NOT MEASURED rather than report the answer as none
 *   credential    a registry answered 401/403/404 on a publish — no edit to this repository changes it
 *   ratchet       a recorded floor was exceeded — the number and its direction are in the log already
 *   instrument    a gate refused while printing no cause, which is its own defect: a captured buffer nobody
 *                 prints is the same failure as a measurement nobody reads
 *   tree          a genuine refusal with a named file and reason
 *
 * IT CLASSIFIES, IT DOES NOT DECIDE. An unmatched log is reported as UNCLASSIFIED rather than assigned to
 * the nearest class, because guessing the kind of a failure is how a credential outage gets three commits
 * spent on it.
 */
export type Verdict = { readonly kind: string; readonly evidence: string; readonly actor: string }

const SIGNATURES: readonly { kind: string; actor: string; test: RegExp }[] = [
  { kind: 'environment', actor: 'the runner image — provision the tool, or make the gate skip loudly', test: /spawnSync \w+ ENOENT|ENOENT.*(?:lake|lean|yosys)|command not found/i },
  { kind: 'credential', actor: 'the repository owner — a secret is absent and no code change supplies it', test: /\b(401|403)\b.*(?:unauthor|forbidden)|npm error 404.*(?:permission|Not found - PUT)|Bad credentials|missing.*token/i },
  { kind: 'ratchet', actor: 'whoever raised it — the floor and its direction are already in the log', test: /ratchet\(s\) refused|above the recorded \d+|The ratchet only falls/i },
  { kind: 'instrument', actor: 'the gate itself — it refused without printing why', test: /FAIL [\w:.-]+ — *error:\s*$|error:\s*\x1b\[\d+m\s*$/im },
  // THE FIRST VERSION MISSED THE FAILURE THAT STARTED ALL OF THIS. math-algebra refuses with
  // `✗ hardFailOnMath — Math.* outside host floor=50 (HARD 0)` and never says "gate(s) refused", so the
  // classifier returned UNCLASSIFIED on the very log it was built from. Reported rather than smoothed over:
  // a classifier tested only on the cases it was written for is a classifier tested on nothing.
  { kind: 'tree', actor: 'this repository — a gate named a file and a reason', test: /gate\(s\) refused:|\d+ finding\(s\)|does not compile|Build failed|✗ \w+ —[^\n]*HARD \d+|hardFail\w+/i },
]

export function classify(log: string): Verdict[] {
  const out: Verdict[] = []
  for (const sig of SIGNATURES) {
    const m = sig.test.exec(log)
    if (m) out.push({ kind: sig.kind, actor: sig.actor, evidence: m[0].trim().replace(/\s+/g, ' ').slice(0, 160) })
  }
  return out
}

export async function runCiExplainExit(root: string = process.cwd(), argv: readonly string[] = []): Promise<number> {
  const { readFileSync } = await import('node:fs')
  const path = argv.find((a) => !a.startsWith('-'))
  let log = ''
  try { log = path ? readFileSync(path, 'utf8') : readFileSync(0, 'utf8') } catch { log = '' }
  if (!log.trim()) { console.log('ci:explain — no log given, nothing classified (this is not a pass)'); return 0 }
  const verdicts = classify(log)
  if (verdicts.length === 0) {
    console.log('ci:explain — UNCLASSIFIED: no known signature matched. Guessing the kind of a failure is how a')
    console.log('             credential outage gets three commits spent on it, so the log is handed back unlabelled.')
    return 0
  }
  console.log(`ci:explain — ${verdicts.length} signature(s) matched, most specific first:`)
  for (const v of verdicts) {
    console.log(`  ${v.kind.padEnd(12)} ${v.actor}`)
    console.log(`               evidence: ${v.evidence}`)
  }
  return 0
}
