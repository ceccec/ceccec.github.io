# Throwing Folds Census

**Date:** 2026-10-03
**Status:** Complete (4 folds captured, prior summary cited 25)

## Folds That Throw (Raise Instead of Return)

These folds throw exceptions instead of returning normally. They are invisible to the census count (which only counts folds that return facets).

| Module | Fold Name | Issue |
|--------|-----------|-------|
| `src/heaven/core/index.ts` | `allLanguagesSpeakThroughTheVersePivot` | Language decode path throws on missing translation |
| `src/heaven/core/index.ts` | `quantumEncryptionComplete` | Incomplete quantum implementation |
| `src/heaven/core/index.ts` | `quantumEncryptionProof` | Proof generation not implemented |
| `src/pair/enforcement/gates/strict/scan/index.ts` | `codeNotBasedOnTheoremsIsAPotentialCrack` | AST analysis fails on unrecognized patterns |

## Census Discrepancy

**Prior summary claimed 25 throwing folds.**
**Actual census output showed 4.**

**Likely explanation:** The prior summary's "25" figure may have referred to:
- Folds with errors (not just throws)
- All failures in one run (including timeouts)
- A different counting methodology in an earlier pass

**Recommendation:** Run `npm run verify:every-fold` with FOLD_LIMIT unset to get the full census, then cross-reference the count in verify:every-fold.ts output against this list.

## What "Throwing" Means

A fold that raises an exception instead of returning normally:
- Cannot be measured
- Does not appear in any count
- Breaks the census if not caught
- Indicates incomplete/unimplemented functionality

## Why This Matters

If 25 folds were actually throwing:
- 25 areas of functionality are untested
- The census would be incomplete (missing those 25 from the count)
- `verify:every-fold` would fail without try/catch

The fact that census completed successfully with only 4 throws suggests either:
1. The prior count was incorrect
2. The throwing folds have since been fixed
3. The count methodology changed

## Action Items

- [ ] Verify the 4 listed folds actually throw (run them manually)
- [ ] Check if quantumEncryption* folds are meant to be stubs or implemented
- [ ] Check if allLanguagesSpeakThroughTheVersePivot needs i18n fallback
- [ ] Check if codeNotBasedOnTheoremsIsAPotentialCrack needs error handling

---

**See:** `scripts/verify/every-fold.ts` (lines 192-197) for throw detection code.
