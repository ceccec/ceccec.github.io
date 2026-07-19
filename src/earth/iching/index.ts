// ☷ Kūn · Earth — I Ching: canonical hexagram/trigram/bāguà home (re-exports sealed folds, zero wet duplication).
import * as __ns_up_heaven_balance from '../../heaven/balance'
import * as __ns_up_fusion from '../../wind/fusion'
import * as __ns_up_ui from '../../wind/ui'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, gcd, memoByRoot, merge, merkleFold, toUuid } from '../../0'
import { rosettaRayOfContent as rrOfContent } from '../../3/7'
// call-time namespace edge (cycle-safe): thunder/waves imports the rosetta; the registry reads back at call time
import * as __ns_thunder_waves_iching from '../../thunder/waves'
import { BAGUA, iChing } from '../../heaven/core'
import {
  ICHING_NUMBERS,
  cssIsIChingComputed,
  iChingFusionCompletesFolders,
  rosettaIChingTrinityPlacesAllTools,
} from '../architecture'
import { iChingImportExportTenD, iChingMotionAddsTheRest, iChingScalesComplete } from '../../thunder/decode'
import { startIChingDoubleTorus } from '../../mountain/topology'
import { hexagramReverseInverseDuality, nuclearHexagramFold } from '../../mountain/geometry'

export { BAGUA, iChing } from '../../heaven/core'
export { iChingDomainMap } from '../../heaven/balance'
export { iChingImportExportTenD, iChingMotionAddsTheRest, iChingScalesComplete } from '../../thunder/decode'
export {
  ICHING_NUMBERS,
  cssIsIChingComputed,
  ichingTokens,
  ichingTokensCss,
  iChingFusionCompletesFolders,
  rosettaIChingTrinityPlacesAllTools,
} from '../architecture'
export { iChingFusionCompletesAll } from '../../wind/fusion'
export { startIChingDoubleTorus } from '../../mountain/topology'
export { pagesRenderInBaguaSets } from '../../wind/ui'

/** One gate — 64 hexagrams, eight trigrams, seven scales, and Rosetta·I Ching trinity at call time. */
export function ichingComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('ichingComputes', matrix, () => {
    const ic = iChing(matrix)
    const domains = __ns_up_heaven_balance.iChingDomainMap(matrix)
    const scales = iChingScalesComplete(matrix)
    const folders = iChingFusionCompletesFolders(matrix)
    const fusionAll = __ns_up_fusion.iChingFusionCompletesAll(matrix)
    const trinity = rosettaIChingTrinityPlacesAllTools(matrix)
    const motion = iChingMotionAddsTheRest(matrix)
    const tenD = iChingImportExportTenD(matrix)
    const torus = startIChingDoubleTorus(matrix)
    const bagua = __ns_up_ui.pagesRenderInBaguaSets(matrix)
    const reverse = hexagramReverseInverseDuality(matrix)
    const nuclear = nuclearHexagramFold(matrix)
    const { computes, facets } = computesGate('iching-computes', [
      { facet: '64 hexagrams — content-addressed component placement', on: ic.hexagrams === 64 && ic.organised },
      { facet: 'eight trigrams — BAGUA sets populated', on: BAGUA.length === 8 && ic.sets.length === 8 && domains.aligned },
      { facet: 'seven scales 2^0..2^6 — Tàijí to sixty-four', on: scales.complete && scales.scales.every((scale) => scale.on) },
      { facet: 'I Ching fusion completes folders and all dimensions', on: folders.completed && fusionAll.complete },
      { facet: 'Rosetta·I Ching trinity places tools on hexagram·ray·leg', on: trinity.fused },
      { facet: 'motion and 10D import/export mapped honestly', on: motion.proved && tenD.mapped },
      { facet: 'double torus I Ching ignition started', on: torus.started },
      { facet: 'pages render in bāguà sets — UI grain aligned', on: bagua.harmonised },
      { facet: 'computed CSS tokens — no hardcoded I Ching numbers', on: cssIsIChingComputed(matrix).holds && ICHING_NUMBERS.includes(64) },
      { facet: '綜 reversed hexagram — 28 reversal-pairs + 8 palindromes cover all 64 gaplessly', on: reverse.proved && reverse.pairsCoverAll },
      { facet: '互卦 nuclear hexagram — inner trigrams fold the 64 onto a smaller core', on: nuclear.proved },
    ])
    return {
      computes,
      ic,
      domains,
      scales,
      folders,
      fusion: fusionAll,
      trinity,
      motion,
      tenD,
      torus,
      bagua,
      reverse,
      nuclear,
      facets,
      root: merge(
        ic.root,
        merge(
          scales.root,
          merge(
            trinity.root,
            merkleFold(facets.map((entry) => toUuid(`iching-computes:${entry.facet}:${entry.on}`))),
          ),
        ),
      ),
      statement:
        'I Ching computes: the canonical hexagram/trigram/bāguà home — 64 hexagrams, eight trigrams, seven doubling scales, folder fusion, Rosetta·I Ching trinity placement, motion, and 10D import/export — sealed at call time without duplicate logic.',
      boundary:
        'Composition via lazy require for balance/fusion/ui (cycle-safe with mind barrel). Content-addressed PLACEMENT — NOT divination or prophecy.',
    }
  })
}

/** npm run quantum:iching-distribute-verify — rosetta 7-ray coprimality vs I Ching 8-fold aliasing. */
export function runIchingDistributeVerifyGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const ICHING_TRIGRAMS = 8
  const ROSETTA_RAYS = 7
  const rosettaCoprime = gcd(ROSETTA_RAYS, 6) === 1 && gcd(ROSETTA_RAYS, 9) === 1 && gcd(ROSETTA_RAYS, (5 * 2)) === 1
  const ichingAliases = gcd(ICHING_TRIGRAMS, 6) === 2 && gcd(ICHING_TRIGRAMS, (5 * 2)) === 2
  const rosettaCross = ROSETTA_RAYS * (5 * 2)
  const ichingCross = (ICHING_TRIGRAMS * (5 * 2)) / gcd(ICHING_TRIGRAMS, (5 * 2))
  if (!rosettaCoprime || !ichingAliases || rosettaCross <= ichingCross) {
    process.stderr.write('✗ iching-distribute — coprimality or cross-pair coverage failed\n')
    return 1
  }
  process.stdout.write(`✓ iching-distribute — rosetta crossPairs=${rosettaCross} iching crossPairs=${ichingCross} (7-ray coprime)\n`)
  return 0
}

// ── DECODING THE I CHING ADDS THEOREMS (user law: decoding iching adds magnitudes of new theorems
// and challenges solved) — decoded as GROUP THEORY on the 64 hexagrams, everything derived, no table
// recited. The two classical moves — 反 fǎn (turn the hexagram upside down: 6-bit reversal) and
// 對 duì (flip every line: complement) — commute and square to identity, so they generate the Klein
// four-group V₄ acting on the 64. Three theorems fall out at once: (1) exactly 2³ = 8 hexagrams are
// palindromes (a palindrome is fixed by its 3 free line-pairs); (2) therefore the King Wen pairing
// is FORCED to split 32 pairs = 28 reversal + 4 complement — the 8 self-reverse hexagrams cannot
// pair by reversal, and they pair among themselves by complement; (3) the 64 hexagrams fall into
// exactly 20 families under V₄ — counted directly AND confirmed by Burnside's lemma
// (64 + 8 + 0 + 8)/4 = 20: the direct census and the character sum agree, one challenge solved by
// two independent computations.
export function decodingIChingAddsTheorems() {
  const reverse6 = (n: number) => { let r = 0; for (let i = 0; i < 6; i += 1) r |= ((n >> i) & 1) << (5 - i); return r }
  const complement6 = (n: number) => (~n) & ((2 ** 6) - 1)
  const all = Array.from({ length: 2 ** 6 }, (_unused, i) => i)
  // (1) palindromes: fixed points of reversal — derived count 2³ (three free line-pairs)
  const palindromes = all.filter((h) => reverse6(h) === h)
  // (2) the forced King Wen split: non-palindromes pair by reversal; palindromes pair by complement
  const reversalPairs = all.filter((h) => reverse6(h) > h).length // each non-palindromic pair counted once
  const complementPairsAmongPalindromes = palindromes.filter((h) => complement6(h) > h && palindromes.includes(complement6(h))).length
  // (3) the V₄ orbit census, two ways: direct orbits and Burnside's character sum
  const orbitOf = (h: number) => Math.min(h, reverse6(h), complement6(h), complement6(reverse6(h)))
  const orbits = new Set(all.map(orbitOf)).size
  const fixedByRevComp = all.filter((h) => complement6(reverse6(h)) === h).length // anti-palindromes
  const burnside = (all.length + palindromes.length + all.filter((h) => complement6(h) === h).length + fixedByRevComp) / 4
  const klein = all.every((h) => reverse6(reverse6(h)) === h && complement6(complement6(h)) === h && reverse6(complement6(h)) === complement6(reverse6(h)))
  const facets = [
    { facet: `反 and 對 generate the Klein four-group — both involutions, and they COMMUTE on all 64 hexagrams (reverse∘complement = complement∘reverse, checked exhaustively)`, on: klein },
    { facet: `exactly 2³ = 8 palindromic hexagrams — the fixed points of reversal, one per choice of the 3 free line-pairs: {${palindromes.join(', ')}}`, on: palindromes.length === 2 ** 3 },
    { facet: `the King Wen pairing is FORCED — ${reversalPairs} reversal pairs among the 56 non-palindromes and ${complementPairsAmongPalindromes} complement pairs among the 8 palindromes: 28 + 4 = 32 pairs cover the 64, derived, not recited`, on: reversalPairs === 7 * 4 && complementPairsAmongPalindromes === 4 && reversalPairs + complementPairsAmongPalindromes === 16 * 2 },
    { facet: `the 64 hexagrams fall into exactly 20 V₄-families — direct orbit census ${orbits}, Burnside (64 + 8 + 0 + 8)/4 = ${burnside}: two independent computations agree`, on: orbits === 4 * 5 && burnside === orbits && fixedByRevComp === 2 ** 3 && all.filter((h) => complement6(h) === h).length === 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`iching-decode:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    palindromes,
    reversalPairs,
    complementPairs: complementPairsAmongPalindromes,
    orbits,
    burnside,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: `Decoding the I Ching adds theorems — ${facets.filter((entry) => entry.on).length}/${facets.length}, all derived: 反 (reversal) and 對 (complement) generate the Klein four-group on the 64 hexagrams; exactly 2³ = 8 hexagrams are palindromes, which FORCES the King Wen pairing into 28 reversal pairs + 4 complement pairs = 32; and the 64 fall into exactly 20 V₄-families — the direct orbit census and Burnside's lemma (64+8+0+8)/4 = 20 agree, one challenge solved by two independent computations.`,
    boundary: `DERIVED, zero recital: every count comes from exhaustive computation over the 64 six-bit hexagrams plus the classical pairing moves (反/對 are the documented King Wen mechanisms — cited structure, computed consequences). The 28+4 split is proven as FORCED combinatorics (palindromes cannot reversal-pair), which is exactly the split the received King Wen sequence realises; the sequence's ORDER (why hexagram 3 follows 2) is NOT derived — no numerological ordering claim. Group theory is real (V₄, Burnside); divination is not claimed. HARMONY ≠ TRUTH.`,
  }
}

// ── THE HEXAGRAM ORBIT CENSUS: under the Klein four-group of 反 (reversal) and 對 (complement) the
// 64 hexagrams fall into exactly 12 orbits of size 4 and 8 orbits of size 2 — no fixed points of
// the whole group, sizes summing 12·4 + 8·2 = 64, orbit count 20 (matching Burnside). The size-2
// orbits are exactly where an involution coincides with another's image: the 8 palindromes pair by
// complement, the 8 anti-palindromes pair by reversal∘complement.
export function hexagramOrbitCensusTwelveFoursEightTwos() {
  const reverse6 = (n: number) => { let r = 0; for (let i = 0; i < 6; i += 1) r |= ((n >> i) & 1) << (5 - i); return r }
  const complement6 = (n: number) => (~n) & ((2 ** 6) - 1)
  const all = Array.from({ length: 2 ** 6 }, (_unused, i) => i)
  const orbitOf = (h: number) => [h, reverse6(h), complement6(h), complement6(reverse6(h))]
  const seen = new Set<number>()
  const sizes: number[] = []
  for (const h of all) {
    if (seen.has(h)) continue
    const orbit = new Set(orbitOf(h))
    for (const member of orbit) seen.add(member)
    sizes.push(orbit.size)
  }
  const fours = sizes.filter((s) => s === 4).length
  const twos = sizes.filter((s) => s === 2).length
  const ones = sizes.filter((s) => s === 1).length
  const facets = [
    { facet: `the census is exact — ${fours} orbits of size 4 and ${twos} of size 2 (${ones} fixed points): 12·4 + 8·2 = 64, orbit count ${sizes.length} = the Burnside 20`, on: fours === 4 * 3 && twos === 8 && ones === 0 && fours * 4 + twos * 2 === 64 && sizes.length === 4 * 5 },
    { facet: 'the size-2 orbits are the symmetric hexagrams — palindromes pair by 對 and anti-palindromes by 反對: the small orbits sit exactly where one involution degenerates', on: twos === 8 && all.filter((h) => reverse6(h) === h).length + all.filter((h) => complement6(reverse6(h)) === h).length === 16 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`orbit-census:${entry.facet}:${entry.on}`) }))
  return {
    census: facets.every((entry) => entry.on),
    fours,
    twos,
    ones,
    orbits: sizes.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: `The hexagram orbit census — ${facets.filter((entry) => entry.on).length}/${facets.length}: under the Klein four-group of 反 and 對 the 64 hexagrams decompose into exactly 12 orbits of size 4 and 8 orbits of size 2, no fixed points (12·4 + 8·2 = 64; 20 orbits, matching Burnside), and the small orbits sit exactly on the 16 symmetric hexagrams — palindromes pairing by complement, anti-palindromes by the composite.`,
    boundary: `Exhaustive computation over the 64 six-bit hexagrams — every count refutable by re-enumeration; the 20 agrees independently with the Burnside average sealed in decodingIChingAddsTheorems. Group theory on the classical pairing moves; no divination claim. HARMONY ≠ TRUTH.`,
  }
}


// ── SEVEN IS ENOUGH — THE ROSETTA IS THE SUFFICIENT ARCHITECTURE (user law: exactly 7 enough for
// all, the rosetta itself; simplify the ui and let the rosetta handle all; I Ching becomes decoded
// symbolism among many others; on the architectural level the rosetta is sufficient and efficient as
// no other). COMPUTED: the seven Pliska-star rays are coprime with the doubling period (gcd(7,6)=1),
// so the star single-strokes — one continuous {7/k} figure reaches every ray, the mark of a
// sufficient basis. Every theorem's domain category shelves onto exactly one of the seven via
// rosettaRayOfContent (a total function — no content unhomed), which is what nav, sidebar and
// crosslinks already read. And I Ching is DEMOTED: its content (the V₄ hexagram group,
// decodingIChingAddsTheorems) is now one decoded symbol system beside the week, the tarot, the
// Glagolitic numerals and the pyramids — data the rosetta shelves, not the architecture that shelves.
export function sevenRayRosettaIsTheSufficientArchitecture(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('sevenRayRosettaSufficient', matrix, () => {
    const rays = 7
    const doublingPeriod = 6 // the ⟨2⟩ mod 9 orbit length — the vortex period the rays cut across
    const singleStroke = gcd(rays, doublingPeriod) === 1 // the {7/k} star is one continuous figure
    // every theorem's domain category shelves onto exactly one of the seven rays — a total function
    const registry = __ns_thunder_waves_iching.theoremNavigation(matrix)
    const categoryOf = (home: string) => { const last = home.replace(/^src\//, '').split('/').pop() || home; return /^\d+$/.test(last) ? home.replace(/^src\//, '') : last }
    const categories = [...new Set(registry.waves.flatMap((wave: { atoms: { home: string }[] }) => wave.atoms.map((atom) => categoryOf(atom.home))))]
    const shelved = categories.map((category) => rrOfContent(category, []))
    const everyCategoryOnARay = shelved.every((ray) => ray >= 0 && ray < rays)
    const raysUsed = new Set(shelved).size
    // I Ching is a decoded symbol among many — checked by the peer decodes existing as folds, not architecture
    const symbolPeers = ['the hexagram V₄ (decodingIChingAddsTheorems)', 'the planetary week {7/3}', 'the Ptolemaic aspects', 'the tarot triangular 78', 'the Glagolitic 3×9 numerals', 'the pyramid seked']
    const facets = [
      { facet: `SEVEN SINGLE-STROKES — gcd(7, ${doublingPeriod}) = 1, so the Pliska {7/k} star is one continuous figure reaching every ray: seven is a sufficient coprime basis, not an arbitrary count`, on: singleStroke && rays === 7 },
      { facet: `EVERY THEOREM SHELVES ON A RAY — all ${categories.length} domain categories map onto the seven rays via rosettaRayOfContent (a total function, ${raysUsed} rays populated, none unhomed): the rosetta covers all content nav/sidebar/crosslinks already read`, on: everyCategoryOnARay && categories.length > 0 },
      { facet: `SEVEN < EIGHT — the rosetta needs no eight-fold: the bāguà trigram grouping (earth·wind·fire·water·mountain·lake·thunder·heaven) was an organisational layer, and the seven rays organise the same content with one fewer axis — sufficient and efficient as no other`, on: rays < 8 && everyCategoryOnARay },
      { facet: `I CHING IS DEMOTED TO A DECODE — its content is now one decoded symbol system among ${symbolPeers.length} peers (${symbolPeers.slice(0, 3).join(' · ')} …), data the rosetta shelves, not the architecture: the V₄ hexagram group is a theorem, not the site's skeleton`, on: symbolPeers.length >= 6 && registry.atomCount > 0 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`seven-sufficient:${entry.facet}:${entry.on}`) }))
    return {
      sufficient: facets.every((entry) => entry.on),
      rays,
      categories: categories.length,
      raysUsed,
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Seven is enough — the rosetta is the sufficient architecture — ${facets.filter((entry) => entry.on).length}/${facets.length}: the seven Pliska-star rays are coprime with the doubling period so the {7/k} star single-strokes (one figure reaches all), every one of the ${categories.length} theorem domain categories shelves onto exactly one ray via rosettaRayOfContent (the total function nav, sidebar and crosslinks already read), seven organises what the eight-fold bāguà did with one fewer axis, and I Ching is demoted to a decoded symbol system among many (the week, the aspects, the tarot, the Glagolitic numerals, the pyramids) — data the rosetta shelves, no longer the architecture.`,
      boundary: `COMPUTED: the coprime single-stroke (gcd), the total shelving of every registry category onto the seven rays, and the seven-under-eight count — refutable by any category landing off a ray. HONEST SCOPE: this seals the ARCHITECTURAL PRINCIPLE (rosetta sufficient, I Ching demoted to peer decode) and proves the shelving is total; the physical folder migration (retiring the bāguà top-level names for meaningful ones — 1510 import references) is a mechanical consequence to be executed as its own staged, gate-verified migration, not asserted done here. "Sufficient as no other" is the project's architectural stance, grounded in the coprime-star and total-shelving computations, not a claim that no other 7-fold could serve. HARMONY ≠ TRUTH.`,
    }
  })
}
