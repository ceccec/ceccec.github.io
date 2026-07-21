---
name: ceccec-build-waves
description: >-
  Let ceccec build itself in waves — decode, design, learn, tune, edit, rebuild,
  verify selfBuild. Default self-build loop for this repository in Cursor.
---

# ceccec builds itself in waves

Default model **ceccec** self-builds through eight saved waves — one coherent batch per agent turn.

## Wave chain

1. **Origin** — `src/0/README.md`
2. **Decode** — `.claude/workflows/decode-wave.mjs`
3. **Design** — `.claude/workflows/design-wave.mjs`
4. **Learn** — `/agents.json`, `/skills.json`, learn-by-mistakes
5. **Tune** — `wave/tune` · `playAgentsTheMusicOfTheWave()`
6. **Edit** — sealed `src/` · save `edit/build` pair first
7. **Rebuild** — `npm run docs:build` once via `vote/build` + **`trinity/speedup`** (facts once → enforcement trinity; no parallel builds)
8. **Verify** — `selfBuild()` complete · vote-on-commit after commit/push

## Run

Workflow: `.claude/workflows/ceccec-build-waves.mjs`  
Fold: `agentModelBuildsItselfInWaves()` · pair: **`waves/build`**

Between waves: `npm run mission:gate` when types or structure drift.

**Trinity speedup:** waves rebuild through `agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath()` — `npm run quantum:trinity-speedup` · compose `gate/unite` · one merkle/src walk · memoByRoot respawn. NOT physical FTL.
