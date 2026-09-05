/**
 * EXECUTE EVERY FOLD — because a verdict nothing runs is a verdict nobody reached.
 *
 * verify:folds ran a HAND-WRITTEN list. A peer session measured their side of it: 0 of 17 folds
 * they had written this session were executed by any gate — not for a reason, just because
 * nobody had added them. Choosing which folds to run is itself the manual judgement, and the
 * list is the defect.
 *
 * This calls every zero-arg export in the corpus and reads its facets. 2101 exports qualify.
 *
 * WHY THE ENTRY IS GENERATED. Dynamic import cannot reach the corpus: from inside the bundle a
 * relative path resolves against .vitepress/cache, and an absolute file:// URL dies on
 * `Directory import '/…/src/3/7' is not supported`. The corpus's extensionless directory
 * imports exist only through a bundler, so module-index.ts is 149 STATIC namespace imports,
 * generated, and esbuild resolves them once.
 *
 * COST, MEASURED, AND WHY THIS IS NOT IN verify:all. 12 of 149 modules take 29s, 26 of which is
 * src/2/8 alone; later modules run real Shor and Grover simulations. This is a sweep, not a
 * per-commit gate, and saying otherwise would make verify:all unusable within a week.
 *
 * THE CENSUS — 148 of 149 modules, one process per module:
 *
 *     7647 zero-arg exports called · 4503 returned facets
 *     450 FOLDS WITH AN OFF FACET OR A FALSE VERDICT — 395 of them verdict=false
 *     1506 facets off
 *     unmeasured: src/crypto — still exceeds 300s (an unbounded >512-bit factorisation)
 *
 *   worst: quantum/apps 221 · quantum/heaven/mind 67 · research 27 · gates 27 ·
 *          gates/strict/scan 15 · wind/site 8 · thunder/waves 8
 *
 * THE FIRST PUBLISHED FIGURE WAS 126 AND IT WAS WRONG BY 3.5×. It came from a 45s cap under
 * which the six LARGEST modules timed out, so the census excluded exactly the files most
 * likely to carry folds. Raising the cap to 300s recovered five of them and 324 more failing
 * folds. A timeout is not a neutral omission when what times out correlates with what you are
 * counting.
 *
 * AND IT IS NOT TAKEN AT ONE COMMIT. The first run spanned ~20 minutes during which a peer
 * session pushed four commits, so early modules were measured against a different tree than
 * late ones. A census without a single commit behind it is a claim about a moving object,
 * which is the rule I had been applying to every other figure and not to this one.
 *
 * WHAT IT DOES NOT SAY: that 450 claims are wrong. A fold correctly reporting a real failure
 * is a fold WORKING. Five were read by hand and were genuinely false. The rest are unread.
 *
 * ONE PROCESS PER MODULE, because one fold can block everything. The first design ran all 149
 * in a single process and stopped dead at module 21 inside a >512-bit quantum factorisation —
 * a fold doing real work with no bound. A census that any single fold can hang is not a census.
 *
 * WHAT IT FOUND IN THE FIRST 12 MODULES — five folds reporting FALSE that nothing had ever run:
 *   "432·108 = 2⁶3⁶ = 6⁶ = 58564 exactly"   — 432·108 = 46656 = 6⁶. 58564 is 242².
 *   "collision-free growth ends near √(2·64³) ≈ 724 theorems"  — the corpus holds 761.
 *   "FIXED — NOW GREEN … the audited set all compute (${allGreen})"  — allGreen is false. A fold
 *      announcing its own repair, reporting false, unread because nothing executed it.
 *   plus a Born distribution over 761 discoveries summing to 0.7339 rather than 1.
 */

import { readdirSync, statSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join } from 'node:path'
import { MODULES } from './module-index.ts'
import { ratchet } from './status.ts'

/**
 * THE CENSUS MUTATES WHAT IT MEASURES, AND THAT IS WHY ITS COUNT NEVER REPRODUCED.
 *
 * This file calls EVERY zero-arg exported function in src/ and reads what comes back. The header
 * below blames an earlier 455-vs-460 discrepancy on a stale esbuild bundle. That explanation was
 * wrong, and it was wrong in the comfortable direction: it located the fault outside the gate.
 *
 * Two of the functions it calls blind write to disk. `applyMigrationRewrites` has THREE parameters
 * and a default for each, so its arity is zero and the census invokes it — one default argument
 * (`dryRun = true`) stands between this gate and relocating source files across the tree.
 * `stallStopFindsHangedProcessesRealtime` is also zero-arity and removes a stale lock directory
 * unconditionally, by its own comment, "always".
 *
 * A deny-list of verbs would be a guess about names. This is a measurement: digest src/ and
 * package.json before and after the walk, and refuse the result if they differ. A census that
 * changed the tree has not measured the tree — it has measured a tree that no longer exists, which
 * is the same failure the 455 was blamed on, arriving by the door nobody watched.
 */
function treeDigest(root: string): string {
  const h = createHash('sha256')
  const walk = (dir: string) => {
    let entries
    try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return }
    for (const e of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const p = join(dir, e.name)
      if (e.isDirectory()) { if (!/^(node_modules|dist|\.git)$/.test(e.name)) walk(p); continue }
      try { const st = statSync(p); h.update(`${p}:${st.size}:${st.mtimeMs}\n`) } catch { /* vanished mid-walk is itself a change */ h.update(`${p}:GONE\n`) }
    }
  }
  walk(join(root, 'src'))
  try { const st = statSync(join(root, 'package.json')); h.update(`package.json:${st.size}:${st.mtimeMs}`) } catch { h.update('package.json:GONE') }
  return h.digest('hex').slice(0, 16)
}
export function main() {
  const LIMIT = Number(process.env.FOLD_LIMIT ?? '0')
  const root = process.cwd()
  const digestBefore = treeDigest(root)
  const started = Date.now()
  let called = 0, folds = 0, verdictFalse = 0, threw = 0, facetsOff = 0
  const bad: string[] = []
  const flagged: { mod: string; name: string; off: number; fn: () => unknown }[] = []
  let mi = 0
  for (const [mod, ns] of MODULES) {
    mi += 1
    if (LIMIT && mi > LIMIT) break
    const t0 = Date.now()
    if (mi % 5 === 1) console.log('  … module ' + mi + '/' + MODULES.length + ' ' + mod)
    for (const [name, v] of Object.entries(ns)) {
      if (typeof v !== 'function') continue
      if (v.length > 0) continue                       // needs arguments we cannot invent
      if (/^run|Exit$/.test(name)) continue            // CLI entry points, not folds
      let r: any
      try { r = (v as () => unknown)(); called++ } catch { threw++; continue }
      if (!r || typeof r !== 'object') continue
      const fs = (r as any).facets
      if (!Array.isArray(fs) || !fs.length) continue
      folds++
      const off = fs.filter((f: any) => f && f.on === false)
      const verdictKey = ['computes','ok','proven','folds','leads','decoded','merges','sealed','holds','tiled','forms','fused','clean','passed','aligned','balanced','valid','complete','explains','remains','researched'].find((k) => typeof (r as any)[k] === 'boolean')
      const verdict = verdictKey ? (r as any)[verdictKey] : undefined
      if (off.length) { facetsOff += off.length }
      if (Date.now() - started > 3000000) { console.log('  TIME BUDGET SPENT at module ' + mi + ' (' + mod + ')'); mi = MODULES.length + 1; break }
      if (verdict === false || off.length) {
        verdictFalse++
        flagged.push({ mod, name, off: off.length, fn: v as () => unknown })
        if (bad.length < 200) bad.push(`${mod}  ${name}  ${off.length}/${fs.length} off${verdict === false ? '  verdict=false' : ''}`)
      }
    }
    if (Date.now() - t0 > 5000) console.log(`  SLOW MODULE ${mod}: ${Date.now() - t0}ms`)
  }
  console.log(`modules walked ${mi}`)
  console.log(`called ${called} zero-arg exports · ${folds} returned facets · ${threw} threw`)
  console.log(`FOLDS WITH A FALSE VERDICT OR AN OFF FACET: ${verdictFalse}  (facets off: ${facetsOff})`)
  for (const b of bad) console.log('   ' + b)

  // A CENSUS THAT CANNOT FAIL IS NOT A CHECK. This file ran for four and a half minutes, found 460
  // folds reporting a false verdict, 1438 facets off and 34 folds throwing — and exited 0, every
  // time, because it only ever printed. It is also in no chain. Scheduling it in that state would
  // have been worse than leaving it: CI green ON the 460, with a receipt.
  //
  // A CORRECTION, RECORDED HERE BECAUSE IT WAS PUBLISHED WRONG. The first commit to ratchet this
  // file claimed five folds returned a different verdict on identical input, on the strength of one
  // run reporting 455/1425 and the next 460/1438 at the same commit. That does not reproduce. Six
  // runs since — including a byte-exact reconstruction of the earlier tree, with and without the
  // scratch file that sat in scripts/, with and without the seeded status.json — all report
  // 460/1438. A separate probe called all 4538 folds twice and diffed every verdict and every off
  // facet: zero differences. The 455 was the first census of that session and almost certainly read
  // a stale esbuild bundle, i.e. it measured an older tree. The folds are deterministic; the
  // measurement was not, because the thing measured was not what was on disk.
  //
  // So all three counts ratchet. They may fall, never rise, and a regression throws.
  // BEFORE ANY NUMBER IS RECORDED. A ratchet written from a run that edited the tree would pin a floor
  // to a state that no longer exists, and every later run would be measured against it.
  const digestAfter = treeDigest(root)
  if (digestAfter !== digestBefore) {
    throw new Error(
      `the fold census CHANGED THE TREE while measuring it: src+package.json digest ${digestBefore} → ${digestAfter}. ` +
      `It calls every zero-arg export in src/, and at least two of those write to disk. No count from this run is ` +
      `recorded, because a census that mutates its subject has measured something that is already gone. ` +
      `Find the writer (git status will name it) and give it an argument, so its arity excludes it from the walk.`
    )
  }
  console.log(`tree digest unchanged across the walk: ${digestBefore} — the census read and wrote nothing`)

  // ── THE THREE COUNTS ABOVE ARE REPORTS NOW, NOT RATCHETS, AND THIS IS WHY.
  //
  // They were ratcheted for months at 460/1438/34 while this gate sat in no chain, so nothing ever
  // re-asked them. Put in the chain, they read 379/1178/31 — and the difference is not the tree. Called
  // on their own, in a fresh process, the folds that "regressed" report FEWER off facets than they do
  // after the walk: freeUserWavesTestUiMeasureEfficiency goes 1 → 2 across 7070 intervening calls, on a
  // tree whose digest is byte-identical before and after. The facet says why in its own text — "memo hit
  // on fed UI root". src/0 exposes memoByRoot, and this module keeps _gravityByRoot and _migrationByRoot
  // besides; the walk warms them, and folds called later read a warmed memo.
  //
  // So a single pass measures WALK ORDER, not the corpus. This file's header used to blame an earlier
  // 455-vs-460 on a stale esbuild bundle. That was wrong, and wrong in the comfortable direction: it put
  // the fault outside the gate. Re-seeding the floor at 379 would have pinned the unsoundness in place
  // and called it progress.
  //
  // What IS sound is the disagreement itself. A fold whose verdict depends on what ran before it is
  // carrying hidden state, and that number can only be driven down by removing the state. It replaces
  // three floors that measured the walk with one that measures the defect.
  console.log(`counts (REPORTED, not ratcheted — order-dependent, see above): false-verdict ${verdictFalse} · facets-off ${facetsOff} · threw ${threw}`)

  let orderDependent = 0
  const drifted: string[] = []
  for (const f of flagged) {
    let again
    try { again = f.fn() as { facets?: { on: boolean }[] } } catch { continue }
    const off2 = (again?.facets ?? []).filter((x) => x && x.on === false).length
    if (off2 !== f.off) { orderDependent += 1; if (drifted.length < 12) drifted.push(`${f.mod}  ${f.name}  ${f.off} → ${off2}`) }
  }
  // WHAT THIS NUMBER DOES NOT COVER, stated because the whole point of the change above is that an
  // instrument must not be read as measuring more than it does. The second pass runs when the memos are
  // ALREADY WARM, so it detects warm-to-warm drift only. The drift actually demonstrated — 1 → 2 off
  // facets for freeUserWavesTestUiMeasureEfficiency — was COLD-to-warm, and catching that class needs a
  // fresh process per fold, which 4178 folds cannot afford. So: a non-zero here is proof of hidden state,
  // a zero here is NOT proof of its absence. It is a floor on a lower bound, and it is still worth having
  // because it can only be driven down by deleting shared state, never by argument.
  console.log(`folds whose off-facet count CHANGED when called a second time in the same process: ${orderDependent}/${flagged.length}  (warm-to-warm only — a LOWER BOUND on hidden state, never a clearance)`)
  for (const d of drifted) console.log('   ' + d)
  console.log(ratchet('folds.order-dependent', orderDependent))
}
