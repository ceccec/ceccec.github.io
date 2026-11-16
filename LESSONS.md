# Lessons — what the tree has learned

Counted on every run from 243 sources: **163 corrections** this repository recorded about itself, in the comments
of the files where each one happened. A comment block counts once if it records a correction ("this read …", "it returned …",
"was …") and is classed by what went wrong. Nobody wrote this list; it is counted, by scripts/verify/lessons.ts.

The taxonomy is a choice — 6 classes — stated so a reader can disagree with the classes rather than the arithmetic.

| corrections | class | why it costs something |
| ---: | --- | --- |
| 51 | a constant typed instead of derived | the value and its meaning drift apart, and the copy is the one nobody updates |
| 30 | a check that could not go red | it reports health it never measured, and deleting it would change nothing |
| 27 | absence read as an answer | a measurement that never happened reads as zero, pass or fail — three states collapsed to two |
| 25 | domain narrower than the defect | the claim reads over the whole tree and the scan covered part of it |
| 20 | the instrument was wrong, not the code | a finding is evidence about the finder until the finder has been run against a known case |
| 10 | a measurement nobody read | a true number with no consumer changes nothing, and drifts without anyone noticing |

## Where they were learned

A file near the top has been corrected often. That is a record of attention, not of poor quality — the untouched
files are the ones nobody has checked this hard.

- `src/quantum/index.ts` — 9
- `src/3/7/index.ts` — 8
- `scripts/verify/every-fold.ts` — 6
- `scripts/verify/lean.ts` — 5
- `src/heaven/compute/index.ts` — 5
- `src/pair/enforcement/gates/strict/scan/index.ts` — 5
- `src/research/index.ts` — 5
- `scripts/verify/canon.ts` — 4

_Method from millennium-solutions (scripts/lessons.ts). The generator excludes itself: it explains every pattern above,_
_and a check that reads the whole tree reads its own explanation._
