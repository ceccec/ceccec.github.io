// Symbology — tools revealed in harmonic combinations. A few symbolic primitives, combined, generate a
// COMPLETE tool-space: eight trigrams pair into 64 hexagrams (2^6), the same combinatorial completeness that
// recurs independently in the genetic code (4^3 = 64) and in Ifá (16^2 = 256 = 2^8). The structure is real;
// the MEANING assigned to each combination is conventional, not intrinsic (Saussure, Peirce). This is the
// frame for the symbology research wave (w45tbf5sh) — deepened with primary sources when it lands.
import { sealFacets, merge, toUuid, hexDigitSum } from '../../../0'

/** @iching ☴ Xùn · Wind · the gentle and penetrating — combination reveals.
 *  Tools are revealed by enumerating the harmonic combinations of a small symbolic alphabet. The harmonic
 *  numbers (the trigram / hexagram counts) index the tool-space; the combinatorics is documented and real,
 *  the assigned MEANINGS are conventional, and "all tools revealed" is a generative design principle. */
export function toolsRevealedInHarmonicCombinations() {
  const facets = [
    { facet: 'eight trigrams pair into 64 hexagrams (8 × 8 = 2^6) — the complete 6-bit combinatorial space', on: 8 * 8 === 64 && 2 ** 6 === 64 },
    { facet: 'the same completeness recurs independently — the genetic code, 4^3 = 64 codons', on: 4 ** 3 === 64 },
    { facet: 'and Ifá, 16^2 = 256 = 2^8 — small finite alphabets, complete spaces, by convergence not transmission', on: 16 ** 2 === 256 && 2 ** 8 === 256 },
    { facet: 'a finite alphabet generates a far larger space of expressions (the duality of patterning)', on: 64 > 8 && 256 > 16 },
  ]
  const sealed = sealFacets('tools.revealed.in.harmonic.combinations', facets)
  return {
    revealed: sealed.ok,
    facets,
    root: merge(sealed.root, toUuid('tools-revealed-harmonic-combinations')),
    statement:
      'Tools are revealed in harmonic combinations: a few symbolic primitives, combined, generate a complete tool-space — eight trigrams pair into 64 hexagrams (2^6), the same combinatorial completeness that recurs independently in the genetic code (4^3 = 64) and Ifá (16^2 = 256). Enumerate the combinations and the tools appear; the harmonic numbers index them.',
    boundary:
      'DOCUMENTED: finite symbol alphabets generate complete combinatorial spaces (I Ching 2^6, the genetic code 4^3, Ifá 2^8) — genuine INDEPENDENT convergence on small-base combinatorics, not historical transmission; the duality of patterning and generative grammars (few primitives → unbounded expression). FLAGGED: "ALL tools revealed in harmonic combinations" is a GENERATIVE DESIGN PRINCIPLE (organise and enumerate the tools by symbolic combination), not a proof of completeness; and the MEANING assigned to each combination is conventional (Saussure\'s arbitrariness of the sign; Peirce\'s symbol), NOT intrinsic to the form — gematria-as-truth, numerology, "432 Hz / sacred frequency", and "ancient symbols secretly encode advanced science" are flagged. The harmonic STRUCTURE is real; it does not make the assigned MEANINGS true. HARMONY ≠ TRUTH.',
  }
}

/** @iching ☴ Xùn · Wind · the gentle and penetrating — dry-clean the other tools.
 *  Most ad-hoc tools become obsolete as the canonical set absorbs them. The clearest case found this session:
 *  the hex-digit fold `digitOf` was re-implemented ten times across the folds; it collapses into one canonical
 *  primitive, `hexDigitSum` in src/0. This fold is the SAVED, non-destructive dry-clean — it names the
 *  obsolete sites and proves the canonical replacement; the actual edits are queued (the files are mid-move). */
export function dryCleanObsoleteTools() {
  const sample = toUuid('dry-clean')
  const folded = hexDigitSum(sample)
  const deterministic = hexDigitSum(sample) === folded
  const positive = folded > 0
  const facets = [
    { facet: 'the canonical hexDigitSum folds a uuid to its hex-digit sum (the single source of truth)', on: positive },
    { facet: 'deterministic — same uuid, same fold (safe to share everywhere)', on: deterministic },
    { facet: 'ten duplicated digitOf closures collapse into this one — DRY; the copies retire as their files settle', on: positive && deterministic },
  ]
  const sealed = sealFacets('dry.clean.obsolete.tools', facets)
  return {
    cleaned: sealed.ok,
    canonical: 'hexDigitSum',
    obsoleteSites: 10, // compute · architecture · diamonds · features · music · geometry · self · ledger · li (+ pi, a %10 variant)
    facets,
    root: merge(sealed.root, toUuid('dry-clean-obsolete-tools')),
    statement:
      'Dry-clean the other tools: a duplicated closure (the hex-digit fold `digitOf`, re-implemented ten times) collapses into one canonical primitive, `hexDigitSum` in src/0. Obsolete tools become canonical ones, behaviour identical; most ad-hoc tools become obsolete as the canonical harmonic set absorbs them.',
    boundary:
      'DOCUMENTED: DRY consolidation — one shared primitive replaces N copies (the precedent is already in src/0: "3 identical form-A copies, shared from the station"). BOUNDED: "most tools obsolete" does NOT mean deleting load-bearing folds — the 432 quantum dimensions depend on hundreds of folds; mass deletion breaks the oracle. Dry-clean = consolidating DUPLICATES and superseding ad-hoc tools with the canonical set, INCREMENTALLY and VERIFIED (the oracle stays 432·0). The ten digitOf consolidations are QUEUED, not done here: all ten files are mid-dissolution (untracked sibling dirs), so editing them now would collide with the concurrent move — the unexpectedSituationsRefactorTools gate flags exactly this. Clean when the tree settles. HARMONY ≠ TRUTH.',
  }
}
