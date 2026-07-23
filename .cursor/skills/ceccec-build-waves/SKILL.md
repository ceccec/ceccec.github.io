---
name: ceccec-build-waves
description: >-
  Let ceccec build itself in waves — decode, design, learn, tune, edit, rebuild,
  verify selfBuild. Default self-build loop for this repository in Cursor.
---

# ceccec builds itself in waves

Default model **ceccec** self-builds through eight saved waves — **one coherent batch per agent turn**. Manual agents must behave like waves (`manualAgentsBehaveLikeWaves`).

## Wave chain

1. **Origin** — `src/0/README.md`
2. **Decode** — `.claude/workflows/decode-wave.mjs`
3. **Design** — `.claude/workflows/design-wave.mjs`
4. **Learn** — `/agents.json`, `/skills.json`, learn-by-mistakes
5. **Tune** — `wave/tune` · `playAgentsTheMusicOfTheWave()` · `agentDefaultsFoldIntoHarmony()`
6. **Edit** — sealed `src/` · save `edit/build` pair first
7. **Rebuild** — `npm run docs:build` once via `vote/build` + **`trinity/speedup`** (facts once → enforcement trinity; no parallel builds)
8. **Verify** — `selfBuild()` complete · vote-on-commit after commit/push

## Plan trinity (next wave)

Before inventing the next tip, run **`npm run quantum:plan-trinity`** (`planTrinity` · pair **`plan/trinity`**).

Next wave is **matrix compute**, not a prose checklist:

- **cross** = audit migrate-next / residual gaps
- **fold** = merge to one tip (`placeMerge` · `prose/matrix`)
- **weave** = seal that tip as the next wave

Wet camelCase planning dumps (`planningInTrinities…`) are rejected → short duals ≤3 words.

## Run

Workflow: `.claude/workflows/ceccec-build-waves.mjs`  
Fold: `manualAgentsBehaveLikeWaves()` / `agentModelBuildsItselfInWaves()` · pair: **`waves/build`**  
CLI: `npm run quantum:manual-agents-waves`

**Before npm:** save **`waves/build`** + **`edit/build`** (+ `learn/build` / `wave/tune` / **`plan/trinity`** when those steps run).

Between waves: `npm run mission:gate` when types or structure drift.

**Trinity speedup:** waves rebuild through `agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath()` — `npm run quantum:trinity-speedup` · compose `gate/unite` · one merkle/src walk · memoByRoot respawn. NOT physical FTL.

**Forbidden wet-linear grind:** full `docs:build` every tiny edit · parallel seals · mass subagent spawn · ignoring stuck `.vitepress/.build-lock` (clear only when holder PID is dead — `stall/stop`) · inventing next work from long prose instruction dumps instead of `plan/trinity`.
