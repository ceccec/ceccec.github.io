/**
 * LESSONS — WHAT THIS TREE HAS ALREADY LEARNED, COUNTED FROM ITS OWN COMMENTS (method from millennium-solutions'
 * scripts/lessons.ts; owner, 2026-11-16: "learn from millennium-solutions").
 *
 * Every gate here carries its war story in its header — the version that could not fail, the scan narrower than the defect,
 * the constant typed instead of derived — written where it happened. That is the right place for the fix and the worst
 * place for the pattern: an agent reads one file and learns one lesson. This counts the classes across the whole tree, so a
 * lesson recorded tomorrow appears here without anyone adding it, and a class nobody has hit reads zero.
 *
 * A LINE COUNTS ONLY IF IT RECORDS A CORRECTION — "this read …", "it returned …", "was N", "an earlier version …",
 * "replaced …" — and is then classed by what went wrong. millennium-solutions classed every comment by keyword; here 612
 * comment lines mention "typed" or "literal" and most of them correct nothing, so a keyword count would flatter the tree
 * with corrections it never made. The classes are a choice, typed out as one, so a reader can disagree with the taxonomy
 * rather than with the arithmetic. THE CLASSIFIER IS HELD TO KNOWN CASES (KNOWN below): a comment whose class is known must
 * be found in it, or the gate refuses — a finding is evidence about the finder until the finder is run against a known case.
 * IT EXCLUDES ITSELF: it explains every pattern, and a check that reads the whole tree reads its own explanation.
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { decided } from './status.ts'

const SELF = 'scripts/verify/lessons.ts'
const OUT = 'LESSONS.md'
const CORRECTION = /\b(this|it|the (gate|check|fold|scan|probe|count|detector))\s+(read|was|were|returned|reported|asked|counted|scanned|said|claimed|compared|measured|printed|typed)\b|\bused to\b|\ban earlier (version|draft)\b|\(was\b|\bwas\s+\d|\bpreviously\b|\breplaced\b|\bthe old\b/i

// MOST SPECIFIC FIRST: a block counts in the first class it matches, and "typed" is the broadest word here — listed first, it took
// "A THEOREM NOTHING READS IS NOT CROSSED" (cross.ts) as a typed constant.
export const LESSON_CLASSES: readonly { readonly name: string; readonly pattern: RegExp; readonly why: string }[] = [
  { name: 'a measurement nobody read', pattern: /nobody read|no reader|nothing (ran|read|runs|reads) it|had no (caller|reader)|unread/i,
    why: 'a true number with no consumer changes nothing, and drifts without anyone noticing' },
  { name: 'the instrument was wrong, not the code', pattern: /\binstrument\b|my own (detector|check|gate|probe)|the detector|false (positive|negative)|the probe (named|asked)/i,
    why: 'a finding is evidence about the finder until the finder has been run against a known case' },
  { name: 'absence read as an answer', pattern: /not measured|could not ask|absen(t|ce)|unmeasured|missing (rather|is not)|empty (is|was) not|zero rather than/i,
    why: 'a measurement that never happened reads as zero, pass or fail — three states collapsed to two' },
  { name: 'a check that could not go red', pattern: /could not fail|cannot fail|could never|vacuous|always (true|green|held)|for any input|whatever (the|it)|no-?op\b|without (simulating|measuring|checking)/i,
    why: 'it reports health it never measured, and deleting it would change nothing' },
  { name: 'domain narrower than the defect', pattern: /\balone\b|only scanned|read only|did not scan|narrower|never (measured|asked|read)|missed .* because|one directory|half the/i,
    why: 'the claim reads over the whole tree and the scan covered part of it' },
  { name: 'a constant typed instead of derived', pattern: /\btyped\b|hard-?coded|hand-?(typed|listed|written)|\bliteral\b|a demo size|magic number/i,
    why: 'the value and its meaning drift apart, and the copy is the one nobody updates' },
]

/** Comments whose class is known — the classifier must find each one in that class. */
const KNOWN: readonly { readonly file: string; readonly contains: string; readonly klass: string }[] = [
  { file: 'scripts/verify/lean.ts', contains: 'This read `/proofs/` alone', klass: 'domain narrower than the defect' },
  { file: 'src/quantum/index.ts', contains: 'for any input without simulating', klass: 'a check that could not go red' },
]

/** Comment lines of a source: `//`, `*` doc lines, Lean `--` and `/- … -/` blocks. */
function commentLines(text: string, lean: boolean): { line: number; text: string }[] {
  const out: { line: number; text: string }[] = []
  let block = 0
  text.split('\n').forEach((l, i) => {
    const t = l.trim()
    if (lean) { if (t.includes('/-')) block += 1; if (block > 0 || t.startsWith('--')) out.push({ line: i + 1, text: t }); if (t.includes('-/')) block = Math.max(0, block - 1); return }
    if (/^(\/\/|\*|\/\*\*?)/.test(t)) out.push({ line: i + 1, text: t })
  })
  return out
}

export function lessons(root: string = process.cwd()) {
  const files = execFileSync('git', ['-C', root, 'ls-files', 'src/**/*.ts', 'scripts/**/*.ts', 'src/**/*.lean', 'scripts/*.ts'], { encoding: 'utf8' })
    .split('\n').filter(Boolean).filter((f) => f !== SELF && !f.includes('/dist/'))
  const found = LESSON_CLASSES.map((c) => ({ ...c, at: [] as { file: string; line: number; text: string }[] }))
  // ONE COUNT PER COMMENT BLOCK, NOT PER LINE. Read line by line, a correction whose marker sits on one line and its lesson on
  // the next ("THE HINT HAD NO READER. next_leads told every client …") was counted in no class, and "a measurement nobody
  // read" read zero in a tree that records it — this tool's own domain was narrower than the defect. A block is a run of
  // consecutive comment lines; it counts once, in the first class its text matches, at its first line.
  for (const f of files) {
    const lines = commentLines(readFileSync(join(root, f), 'utf8'), f.endsWith('.lean'))
    for (let i = 0; i < lines.length;) {
      let j = i
      while (j + 1 < lines.length && lines[j + 1]!.line === lines[j]!.line + 1) j += 1
      const text = lines.slice(i, j + 1).map((c) => c.text.replace(/^(\/\/|\*|\/\*\*?|--)\s?/, '')).join(' ')
      if (CORRECTION.test(text)) {
        const klass = found.find((k) => k.pattern.test(text))
        if (klass) klass.at.push({ file: f, line: lines[i]!.line, text })
      }
      i = j + 1
    }
  }
  const byFile: Record<string, number> = {}
  for (const c of found) for (const a of c.at) byFile[a.file] = (byFile[a.file] ?? 0) + 1
  return { files: files.length, found, total: found.reduce((n, c) => n + c.at.length, 0), byFile }
}

export function lessonsMarkdown(root: string = process.cwd()): string {
  const l = lessons(root)
  const rows = [...l.found].sort((a, b) => b.at.length - a.at.length || a.name.localeCompare(b.name))
  const worst = Object.entries(l.byFile).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, rows.length + 2)
  return [
    '# Lessons — what the tree has learned',
    '',
    `Counted on every run from ${l.files} sources: **${l.total} corrections** this repository recorded about itself, in the comments`,
    'of the files where each one happened. A comment block counts once if it records a correction ("this read …", "it returned …",',
    '"was …") and is classed by what went wrong. Nobody wrote this list; it is counted, by scripts/verify/lessons.ts.',
    '',
    `The taxonomy is a choice — ${rows.length} classes — stated so a reader can disagree with the classes rather than the arithmetic.`,
    '',
    '| corrections | class | why it costs something |',
    '| ---: | --- | --- |',
    ...rows.map((c) => `| ${c.at.length} | ${c.name} | ${c.why} |`),
    '',
    '## Where they were learned',
    '',
    'A file near the top has been corrected often. That is a record of attention, not of poor quality — the untouched',
    'files are the ones nobody has checked this hard.',
    '',
    ...worst.map(([f, n]) => `- \`${f}\` — ${n}`),
    '',
    '_Method from millennium-solutions (scripts/lessons.ts). The generator excludes itself: it explains every pattern above,_',
    '_and a check that reads the whole tree reads its own explanation._',
    '',
  ].join('\n')
}

export function writeLessons(root: string = process.cwd()): void {
  writeFileSync(join(root, OUT), lessonsMarkdown(root))
  console.log(`wrote ${OUT}`)
}

export function assertLessons(root: string = process.cwd()): void {
  const l = lessons(root)
  const missed = KNOWN.filter((k) => !l.found.find((c) => c.name === k.klass)?.at.some((a) => a.file === k.file && a.text.includes(k.contains)))
  console.log(decided('lessons.known-cases-missed', missed.length, {
    law: 'the classifier finds every comment whose class is known, in that class — otherwise its counts are evidence about the classifier, not the tree',
    evidence: () => missed.map((k) => `${k.file}: "${k.contains}" not found as ${k.klass}`),
  }))
  const stale = readFileSync(join(root, OUT), 'utf8') !== lessonsMarkdown(root) ? 1 : 0
  console.log(decided('lessons.stale', stale, { law: 'LESSONS.md is exactly what the tree counts — run `npm run lessons`', evidence: () => (stale ? ['LESSONS.md differs from lessonsMarkdown()'] : []) }))
  console.log(`lessons: ${l.total} corrections in ${l.files} sources · ${l.found.map((c) => `${c.at.length} ${c.name}`).join(' · ')}`)
}
