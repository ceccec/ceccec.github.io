---
name: ceccec-claim-evidence
description: >-
  Runs npm run verify:claims — does each facet's boolean test what its own label says?
  Catches a label that spells out a comparison the code does not make, and a label that
  promises a COST while the code tests only that two addresses differ. Use when auditing
  honesty claims, before trusting a green facet, or after writing a facet by hand.
---

# verify:claims

```bash
npm run verify:claims
```

A facet is a sentence and a boolean. Nothing else in the corpus checks that they are about the same
thing — and three times in one campaign they were not.

## The two rules

**1 · spelled-comparison.** When the label writes a comparison out in code form — `X === Y.length`,
`=== SOME_CONST` — the `on:` must contain that right-hand side. A label that concrete is a
specification, and the code is supposed to meet it.

```ts
// found by this rule, in src/thunder/trading:
{ facet: `NOT ad-hoc — schedule length === ROSETTA_RAYS.length · …`, on: rayRuns.length === 7 }
//                                          ^ the label names it       ^ the code ignores it
```

**2 · cost-vs-evidence.** When the label claims difficulty — a cost, a price, forging, resistance —
the `on:` must reach something that MODELS difficulty: an entropy budget, a bit count, a measured
collision. Not merely that two things differ.

```ts
{ facet: 'maximum tampering cost — forging one page costs a full rebuild',
  on: foldPair(sealed, toUuid('forge')).merged !== sealed }
```

That inequality says two different seeds give two different addresses, which is what a hash does on
its quietest day. **Tamper-EVIDENCE is not tamper-RESISTANCE**: the first says a change is visible,
the second says a forgery is expensive. This corpus has measured its own hash colliding well below
the second — `findContentAddressCollision` exhibits a real collision in the 32-bit FNV core, and
`addressEntropyBits()` puts the whole address at 122 effective bits, birthday 2^61. A cost claim that
does not name that ceiling is claiming more than the repository can pay.

## What it cannot do

It cannot know a sentence is true. It only knows the boolean beside it is about something else. A
clean run is not a certificate of honesty; a dirty one is a list of places to look.

## Known false positive

A label may spell a comparison that a well-named local already holds — `… reduces to LINKED-routes-root
=== GENERATED-routes-root (${oneRoot})`, with `on: oneRoot`. The code does make the comparison; the
name stands in for it. Read before editing.

## Related

- `npm run fold-bounds` — one bound asked twice in a function, folded on the AST (scope-aware; a regex
  crossed a scope boundary twice in this repo before it was written).
- `npm run verify:guards` — literal length bars in facet-bearing folds, arithmetic and named bounds included.
