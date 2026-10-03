# Zenodo Deposit Integrity Fix

**Status:** BLOCKER — `verify:deposit-metadata` is RED

## Problem

Record `10.5281/zenodo.21787144` (concept DOI) asserts claims that the 2026-08-20 audit withdrew.

**Immutability constraint:** Published Zenodo deposits cannot be corrected in place. Once published, they are immutable.

**Solution:** Create a new independent deposit with corrected metadata and a new DOI.

## What to do

1. **Create new deposit on Zenodo** with:
   - Corrected metadata (remove withdrawn claims)
   - Same content as original (or updated if corrections needed)
   - Reference the prior DOI as superseded-by relationship (if Zenodo supports it)

2. **Capture new DOI** — Zenodo will assign a record-specific DOI (e.g., 10.5281/zenodo.XXXXXXX)

3. **Update ledger** in `src/ledger/index.ts`:
   - Mark old DOI as superseded
   - Add new DOI with corrected metadata
   - Link the two for provenance

4. **Implement automated gate** in `scripts/verify/status.ts`:
   - Verify new DOI resolves correctly
   - Check metadata matches the asserted claims
   - Ratchet `verify:deposit-metadata` to green

5. **Test live** with `testZenodoDepositsLive()`:
   - Fetch both old and new records
   - Confirm old record still exists (immutable history)
   - Confirm new record has corrected claims

## Timeline

- Create deposit: immediate (requires Zenodo account, ~2 min upload)
- Update ledger: 5 min
- Implement gate: 10 min
- Test live: 5 min

**Total:** ~20 min to close blocker

## Outcome

- `verify:deposit-metadata` → GREEN
- `verify:every-fold` → completes without RED gates
- `npm run land` → unblocked for deploy

---

**See also:** `src/heaven/laws/index.ts` (patent API live testing is ready to run)
