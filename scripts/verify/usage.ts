/**
 * WHERE A SESSION'S TOKENS WENT — measured from the transcript, read through the MCP door.
 *
 *   run_export { entryRel: 'scripts/verify/usage.ts', exportName: 'runSessionUsageExit' }      (or `npm run usage`)
 *
 * The owner asked for this on 2026-11-13 ("improve by analysing what the tokens from the session were spent for via
 * mcp improving all") after a session whose answer was not what anyone would have guessed: 41% of it went to LANDING —
 * running the land, waiting, reading why it refused, rerunning — against 27% for the Lean ports and 26% for the
 * floor-to-theorem work that the session was for. Nothing in the repository could say so; it was worked out by hand
 * from the transcript, once. A measurement made once by hand has no reader the second time.
 *
 * WHAT IS MEASURED. Claude Code writes one JSON line per message to ~/.claude/projects/<cwd>/<session>.jsonl, and each
 * assistant message carries the API's own usage: fresh input, cache writes, cache reads, output. Effective cost
 * weights them the way they are billed relative to one fresh input token — a cache read a tenth, a cache write two,
 * an output token five. Every ROUND TRIP re-reads the whole conversation, so the cost of a session is mostly
 * (round trips) × (context size), and the two things worth knowing are which work the round trips went to and
 * which early results were carried through all the later ones.
 *
 * WHAT IT DOES NOT MEASURE. Money: the weights are ratios, not a price list. Thinking that the transcript does not
 * record. And the KIND of a round trip is read from the tool calls in it by pattern — a call that lands, gates,
 * reads, edits — so the split is a reading of the commands, not a label anyone attached.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

type Usage = { input_tokens?: number; cache_read_input_tokens?: number; cache_creation_input_tokens?: number; output_tokens?: number }
type Block = { type?: string; id?: string; name?: string; input?: Record<string, unknown>; tool_use_id?: string; content?: unknown; text?: string }

const WEIGHT = { input: 1, cacheRead: 0.1, cacheWrite: 2, output: 5 } as const
const effective = (u: Usage) =>
  WEIGHT.input * (u.input_tokens ?? 0) + WEIGHT.cacheRead * (u.cache_read_input_tokens ?? 0) +
  WEIGHT.cacheWrite * (u.cache_creation_input_tokens ?? 0) + WEIGHT.output * (u.output_tokens ?? 0)
const contextOf = (u: Usage) => (u.input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0)
/** Characters per token, for results the API did not meter one by one. Stated, because it is an estimate. */
const CHARS_PER_TOKEN = 3.6

/** What a tool call was FOR, read from the call itself. Order matters: the first rule that matches names it. */
export function kindOfCall(name: string, input: Record<string, unknown>): string {
  const text = `${String(input.description ?? '')} ${String(input.command ?? '')}`
  if (name === 'Bash') {
    if (/npm run land|scripts\/land\.sh|land\.log|land exit/.test(text)) return 'landing'
    if (/\bgit (stash|merge|rebase|fetch|pull|checkout|reset)\b/.test(text)) return 'git: sync and recover'
    if (/docs:build|verify:|npm run|tsc --noEmit|\blean\b [^|]*\.lean/.test(text)) return 'gates and builds'
    if (/writeFileSync|> [^ ]*\.(ts|lean|json|sh|md)|patch|sed -i/.test(text)) return 'editing'
    return 'reading and measuring'
  }
  if (name === 'Read' || name === 'Grep' || name === 'Glob') return 'reading and measuring'
  if (name === 'Edit' || name === 'Write' || name === 'NotebookEdit') return 'editing'
  if (name === 'Agent' || name === 'Workflow') return 'subagents'
  if (name.startsWith('mcp__ccd_')) return 'app: task list and wrap-up'
  if (name.startsWith('mcp__')) return `mcp: ${name.split('__')[1] ?? 'connector'}`
  return 'questions, skills, other tools'
}

/** The transcript to read: an explicit path, a session id, or the most recently written session of this project. */
export function transcriptPath(arg?: string, cwd: string = process.cwd()): string | null {
  if (arg && existsSync(arg) && statSync(arg).isFile()) return arg
  // The bootstrap hands the root WITH a trailing slash; Claude Code names the folder from the path without one. Read
  // literally, the slash became one more dash, the folder was not found, and a session that was there read as ABSENT.
  const dir = join(homedir(), '.claude', 'projects', cwd.replace(/\/+$/, '').replace(/[^A-Za-z0-9]/g, '-'))
  if (!existsSync(dir)) return null
  const files = readdirSync(dir).filter((f) => f.endsWith('.jsonl')).map((f) => join(dir, f))
  if (arg) return files.find((f) => f.includes(arg)) ?? null
  return files.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0] ?? null
}

export function measureSession(file: string) {
  const rows = readFileSync(file, 'utf8').split('\n').filter((l) => l.startsWith('{')).map((l) => { try { return JSON.parse(l) } catch { return null } }).filter(Boolean) as { type?: string; message?: { id?: string; usage?: Usage; content?: unknown } }[]
  // one API call = one message id; a streamed message is written as several lines carrying the same usage
  const calls = new Map<string, { at: number; usage: Usage; kinds: string[] }>()
  const toolAt = new Map<string, { at: number; kind: string; label: string; inputChars: number }>()
  const resultChars = new Map<string, number>()
  rows.forEach((row, at) => {
    const content = row.message?.content
    if (!Array.isArray(content)) return
    if (row.type === 'assistant' && row.message?.usage && row.message.id) {
      const call = calls.get(row.message.id) ?? { at, usage: row.message.usage, kinds: [] }
      for (const b of content as Block[]) {
        if (b.type !== 'tool_use' || !b.id || !b.name) continue
        const kind = kindOfCall(b.name, b.input ?? {})
        call.kinds.push(kind)
        toolAt.set(b.id, { at, kind, label: String(b.input?.description ?? b.name).slice(0, 80), inputChars: JSON.stringify(b.input ?? {}).length })
      }
      calls.set(row.message.id, call)
    }
    if (row.type === 'user') for (const b of content as Block[]) {
      if (b.type !== 'tool_result' || !b.tool_use_id) continue
      const c = b.content
      resultChars.set(b.tool_use_id, typeof c === 'string' ? c.length : Array.isArray(c) ? (c as Block[]).reduce((n, x) => n + String(x.text ?? '').length, 0) : 0)
    }
  })
  const ordered = [...calls.values()].sort((a, b) => a.at - b.at)
  const total = ordered.reduce((n, c) => n + effective(c.usage), 0)
  // a round trip belongs to what most of its calls were for; one with no call at all is talk, and keeps the last kind's company
  const byKind = new Map<string, { effective: number; roundTrips: number }>()
  for (const call of ordered) {
    const work = call.kinds.filter((k) => !k.startsWith('app:'))
    const pool = work.length ? work : call.kinds
    const counts = new Map<string, number>()
    for (const k of pool) counts.set(k, (counts.get(k) ?? 0) + 1)
    const kind = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'talk: no tool call'
    const row = byKind.get(kind) ?? { effective: 0, roundTrips: 0 }
    row.effective += effective(call.usage); row.roundTrips += 1
    byKind.set(kind, row)
  }
  const positions = ordered.map((c) => c.at)
  const laterTrips = (at: number) => positions.filter((p) => p > at).length
  // what a result COST: written once, then re-read by every round trip after it
  const carried = [...toolAt.entries()].map(([id, t]) => {
    const tokens = ((resultChars.get(id) ?? 0) + t.inputChars) / CHARS_PER_TOKEN
    const later = laterTrips(t.at)
    return { label: t.label, kind: t.kind, resultChars: resultChars.get(id) ?? 0, later, effective: tokens * (WEIGHT.cacheWrite + WEIGHT.cacheRead * later) }
  }).sort((a, b) => b.effective - a.effective)
  // A message the API did not meter (a synthetic or interrupted turn) carries zeros; it is not a context of size zero.
  const context = ordered.map((c) => contextOf(c.usage)).filter((n) => n > 0)
  const sum = (pick: (u: Usage) => number) => ordered.reduce((n, c) => n + pick(c.usage), 0)
  return {
    file, roundTrips: ordered.length, effective: total,
    tokens: { input: sum((u) => u.input_tokens ?? 0), cacheRead: sum((u) => u.cache_read_input_tokens ?? 0), cacheWrite: sum((u) => u.cache_creation_input_tokens ?? 0), output: sum((u) => u.output_tokens ?? 0) },
    context: { first: context[0] ?? 0, last: context.at(-1) ?? 0, max: context.length ? Math.max(...context) : 0 },
    byKind: [...byKind.entries()].map(([kind, v]) => ({ kind, ...v, share: total ? v.effective / total : 0 })).sort((a, b) => b.effective - a.effective),
    carried,
  }
}

/** npm run usage · run_export scripts/verify/usage.ts runSessionUsageExit [path-or-session-id] — the report, a screen long. */
export function runSessionUsageExit(root: string = process.cwd(), argv: readonly string[] = []): number {
  // NAMED *Exit ON PURPOSE: the bootstrap passes (root, argv) only to exports whose name ends in Exit (runThinMount) —
  // under any other name this ran bare and the session id on the command line was silently ignored.
  const arg = argv.map(String).find((a) => a.length > 0)
  const file = transcriptPath(arg, root)
  // THREE STATES. No transcript for this folder is ABSENT (not a failure: a clone has none). A session that was ASKED
  // FOR by name and is not there is a refusal — the caller named something that does not exist.
  if (!file && arg) { console.log(`session usage: no transcript matches "${arg}" under ~/.claude/projects for this folder`); return 1 }
  if (!file) { console.log('session usage: NOT MEASURED — no transcript found under ~/.claude/projects for this folder (absent, which is not zero)'); return 0 }
  const m = measureSession(file)
  if (m.roundTrips === 0) { console.log(`session usage: NOT MEASURED — ${file} carries no metered assistant message`); return 0 }
  const pct = (x: number) => `${(x * 100).toFixed(1).padStart(5)}%`
  const k = (n: number) => `${Math.round(n / 1000)}k`
  console.log(`session usage — ${m.roundTrips} round trips · effective ${k(m.effective)} (input ×${WEIGHT.input}, cache read ×${WEIGHT.cacheRead}, cache write ×${WEIGHT.cacheWrite}, output ×${WEIGHT.output})`)
  console.log(`  transcript ${file.split('/').pop()}`)
  console.log(`  re-reading ${pct(WEIGHT.cacheRead * m.tokens.cacheRead / m.effective)} · new context ${pct(WEIGHT.cacheWrite * m.tokens.cacheWrite / m.effective)} · output ${pct(WEIGHT.output * m.tokens.output / m.effective)}`)
  console.log(`  context per round trip: ${k(m.context.first)} at the start → ${k(m.context.last)} at the end (max ${k(m.context.max)})`)
  console.log(`  the fixed part — instructions, tool list, memory index — is the first context, re-read every trip: ${pct(WEIGHT.cacheRead * m.context.first * m.roundTrips / m.effective)} of the session`)
  console.log('\n  WHAT THE ROUND TRIPS WENT TO')
  for (const row of m.byKind) console.log(`  ${pct(row.share)}  ${String(row.roundTrips).padStart(4)} trips  ${row.kind}`)
  console.log('\n  WHAT WAS CARRIED LONGEST — a result is paid for once when read and again by every later round trip')
  for (const c of m.carried.slice(0, 8)) console.log(`  ${pct(c.effective / m.effective)}  ${String(c.resultChars).padStart(6)} chars × ${String(c.later).padStart(3)} later trips  ${c.label}`)
  const carriedShare = m.carried.reduce((n, c) => n + c.effective, 0) / m.effective
  console.log(`  all tool traffic together: ${pct(carriedShare)} of the session`)
  return 0
}
