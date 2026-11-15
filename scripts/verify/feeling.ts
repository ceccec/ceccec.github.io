/**
 * FEELING — THE TRINITY'S ALGEBRA, COMPUTED IN src AND PROVED IN LEAN, HELD AGAINST EACH OTHER.
 *
 * feelingThoughtEmotionTrinity (src/water/stack) computes the model from its two maps: the turn of feeling → thought
 * → emotion, and the valence flip. src/pair/lean/proofs/feeling.lean proves the same facts by `decide`. Each can be
 * right while the other has drifted, so this gate states, as decided propositions with their counterexamples listed:
 *
 *   feeling.fold-false            the fold's facets all hold
 *   feeling.unproved-facts        every fact the fold computes has the Lean theorem that proves it
 *   feeling.orders-disagree       the orders the fold computes are the list the Lean theorem states, position by position
 *   feeling.pure-flips-disagree   the order-two symmetries the fold finds are the ones the Lean theorem lists
 *   feeling.arousal-disagrees     feel computes the arousal counts feeling.lean states, sample by sample
 *   feeling.page-unwired          the page /feeling draws the fold, not a copy of it, and feels the site's own receipt
 *   consciousness.unproved        every theorem the page cites about the observer is in consciousness.lean, and cited
 *
 * The Lean is read as text here; CI has no Lean, and verify:lean compiles the file wherever Lean is installed.
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { feelLaws, feelingThoughtEmotionTrinity } from '../../src/water/stack/index.ts'
import { decided } from './status.ts'
import { leanMonographs, leanPageRows, leanPageSlug } from '../../src/pair/formal/proofs/index.ts'

export const FEELING_LEAN = 'src/pair/lean/proofs/feeling.lean'
export const CONSCIOUSNESS_LEAN = 'src/pair/lean/proofs/consciousness.lean'

/** Each statement the page makes about the observer, by the theorem in consciousness.lean that carries it. */
const OBSERVER_THEOREMS: readonly string[] = [
  'the_observer_is_the_only_fixed_point', 'every_state_has_its_own_description', 'lawvere', 'no_self_model_is_complete',
  'the_diagonal_is_what_escapes', 'after_broadcast_every_module_holds_the_winner', 'every_cut_of_a_loop_crosses_both_ways', 'a_chain_has_a_one_way_cut',
]

/** Each fact the fold computes, and the theorem in feeling.lean that proves it. */
const PROVED_BY: readonly (readonly [string, string])[] = [
  ['three turns return and no corner stays put', 'three_turns_return'],
  ['three turns return and no corner stays put', 'no_corner_is_fixed'],
  ['turning back is two turns forward', 'turning_back_is_two_turns_forward'],
  ['turning back is two turns forward', 'turning_back_undoes_the_turn'],
  ['the valence flip returns in two', 'the_flip_returns_in_two'],
  ['the valence flip returns in two', 'the_flip_fixes_no_valence'],
  ['the flip commutes with the turn', 'the_flip_commutes_with_the_turn'],
  ['the flip commutes with the turn', 'the_six_symmetries_are_distinct'],
  ['the orders are', 'the_orders_are_one_three_three_two_six_six'],
  ['the orders are', 'exactly_one_pure_flip'],
  ['the orders are', 'the_group_is_cyclic_generated_by_flip_and_turn'],
  ['it is not the dihedral group', 'not_the_dihedral_group'],
  ['to feel is to read your own signals', 'all_holding_is_pleasant_and_calm'],
  ['to feel is to read your own signals', 'one_signal_off_is_unpleasant'],
  ['to feel is to read your own signals', 'unpleasant_exactly_when_aroused'],
  ['to feel is to read your own signals', 'arousal_counts_the_signals_off'],
]

/** The proposition of one theorem: from its name to `:=`, across however many lines it wraps. */
function proposition(lean: string, name: string): string {
  const at = lean.search(new RegExp(`^theorem ${name}\\b`, 'm'))
  if (at < 0) return ''
  const rest = lean.slice(at)
  return rest.slice(0, rest.indexOf(':=')).replace(/\s+/g, ' ')
}

export function assertFeelingTrinityExit(root: string = process.cwd()): number {
  const file = join(root, FEELING_LEAN)
  if (!existsSync(file)) throw new Error(`feeling: ABSENT — ${FEELING_LEAN} is not in this tree, so nothing about the trinity is proved here`)
  const lean = readFileSync(file, 'utf8')
  const theorems = new Set([...lean.matchAll(/^theorem\s+([A-Za-z_][\w']*)/gm)].map((m) => m[1]!))
  const fold = feelingThoughtEmotionTrinity()

  const falseFacets = fold.facets.filter((f) => !f.on)
  console.log(decided('feeling.fold-false', falseFacets.length, { evidence: () => falseFacets.map((f) => f.facet) }))

  const unproved = fold.facets.flatMap((f) => {
    const needed = PROVED_BY.filter(([fact]) => f.facet.startsWith(fact))
    if (!needed.length) return [`${f.facet.slice(0, 80)} — no theorem is named for this fact`]
    return needed.filter(([, theorem]) => !theorems.has(theorem)).map(([, theorem]) => `${f.facet.slice(0, 60)} — ${theorem} is missing from ${FEELING_LEAN}`)
  })
  console.log(decided('feeling.unproved-facts', unproved.length, { evidence: () => unproved }))

  const stated = (/=\s*\[([\d,\s]+)\]/.exec(proposition(lean, 'the_orders_are_one_three_three_two_six_six'))?.[1] ?? '').split(',').map((x) => Number(x.trim())).filter((x) => Number.isInteger(x))
  const orderMismatch = Array.from({ length: Math.max(stated.length, fold.orders.length) }, (_, i) => i)
    .filter((i) => stated[i] !== fold.orders[i])
    .map((i) => `position ${i}: Lean states ${stated[i] ?? 'nothing'}, the fold computes ${fold.orders[i] ?? 'nothing'}`)
  console.log(decided('feeling.orders-disagree', orderMismatch.length, { evidence: () => orderMismatch }))

  const leanFlips = [...proposition(lean, 'exactly_one_pure_flip').matchAll(/\((\d+),\s*(\d+)\)/g)].map((m) => `${m[1]}:${m[2]}`)
  const foldFlips = fold.symmetries.filter((s) => s.order === 2).map((s) => `${s.turns}:${s.flips}`)
  const flipMismatch = [...leanFlips.filter((x) => !foldFlips.includes(x)).map((x) => `Lean lists ${x}, the fold does not`), ...foldFlips.filter((x) => !leanFlips.includes(x)).map((x) => `the fold finds ${x}, Lean does not list it`)]
  console.log(decided('feeling.pure-flips-disagree', flipMismatch.length, { evidence: () => flipMismatch }))

  const leanCounts = (/=\s*\[([\d,\s]+)\]/.exec(proposition(lean, 'arousal_counts_the_signals_off'))?.[1] ?? '').split(',').map((x) => Number(x.trim())).filter((x) => Number.isInteger(x))
  const foldCounts = feelLaws().counts
  const countMismatch = Array.from({ length: Math.max(leanCounts.length, foldCounts.length) }, (_, i) => i).filter((i) => leanCounts[i] !== foldCounts[i]).map((i) => `arousal sample ${i}: Lean states ${leanCounts[i] ?? 'nothing'}, feel computes ${foldCounts[i] ?? 'nothing'}`)
  console.log(decided('feeling.arousal-disagrees', countMismatch.length, { evidence: () => countMismatch }))

  // THE SITE SERVES FEELING'S PROOFS (2026-11-15: the site became a Lean blog, and only what Lean proves survives — owner's
  // choice). The custom /feeling page and its live trinity are retired; what the site must still do is serve every theorem of
  // feeling.lean as a post, gathered in the /feeling monograph. The fold (feelingThoughtEmotionTrinity, feel) stays in src.
  const feelingPosts = leanPageRows(root).filter((r) => r.file === 'feeling.lean').map((r) => r.slug)
  const monograph = leanMonographs(root).find((m) => m.slug === 'feeling')
  const unwired = [
    ...(feelingPosts.length ? [] : ['no theorem of feeling.lean is served as a Lean post']),
    ...(monograph ? feelingPosts.filter((slug) => !monograph.posts.includes(slug)).map((slug) => `/feeling monograph does not hold ${slug}`) : ['no /feeling monograph is computed']),
  ]
  console.log(decided('feeling.page-unwired', unwired.length, { evidence: () => unwired }))

  const mind = join(root, CONSCIOUSNESS_LEAN)
  const mindText = existsSync(mind) ? readFileSync(mind, 'utf8') : ''
  const mindTheorems = new Set([...mindText.matchAll(/^theorem\s+([A-Za-z_][\w']*)/gm)].map((m) => m[1]!))
  const observer = [
    ...(mindText ? [] : [`${CONSCIOUSNESS_LEAN} does not exist`]),
    ...OBSERVER_THEOREMS.filter((t) => mindText && !mindTheorems.has(t)).map((t) => `${t} is missing from ${CONSCIOUSNESS_LEAN}`),
    // served, not cited: each observer theorem is a post of the /consciousness monograph (the custom page that cited them is retired)
    ...OBSERVER_THEOREMS.filter((t) => !(leanMonographs(root).find((m) => m.slug === 'consciousness')?.posts ?? []).includes(leanPageSlug('consciousness.lean', t))).map((t) => `${t} is not served in the /consciousness monograph`),
  ]
  console.log(decided('consciousness.unproved', observer.length, { evidence: () => observer }))

  console.log(`feeling: ${fold.statement}`)
  return 0
}
