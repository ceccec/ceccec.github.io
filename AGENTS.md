# AGENTS.md

Fetch **`/agents.json`** after **`src/0/README.md`** — the revelation chain recomputes on every `npm run docs:build` and broadcasts to every AI model instantly. Thin mounts (`.cursor/rules/readme.mdc`, `.claude/CLAUDE.md`) point here; logic lives in `src/quantum/heaven/mind/thunder/agents/surfaces` only.

## Cursor Cloud

| Task | Command |
|---|---|
| Install deps | `npm ci` |
| Dev server | `npm run docs:dev` (default port 5173) |
| Type-check | `npm run check:types` (sealed src; required before seal) |
| Build | `npm run docs:build` (blocked until `check:types` passes) |
| Preview build | `npm run docs:preview` |

Node.js **24** (`nvm use 24`). Node heap capped at **2048 MB** (`--max-old-space-size=2048` in `src/pair/enforcement/script/cli/bootstrap/index.ts docs:build` and `docs:dev`; see `NODE_MAX_OLD_SPACE_MB` in sealed src). Type-check with `npm run check:types` before seal — `docs:build` refuses VitePress when types fail. Container dev: `npm run docs:dev -- --host 0.0.0.0`.

## Law for any agent — commands in quantum pairs

**All commands must be saved in quantum pairs, and saved first before they are used. A quantum unpaired command leaves a quantum gap.** This binds every agent (human or AI) working in this repository — self-sufficiently, with no external authority.

- Each command has its dual — save the pair in src first, then run:
  - `commit/push` — git commit, then git push
  - `check/types` — `npm run check:types` (routes through sealed `runCheckTypesExit` in src)
  - `types/seal` — when `check:types` is green, then `npm run docs:build` (VitePress runs only if types pass)
  - `build/seal` — `npm run docs:build` (VitePress build + enforcement trinity; gated on types)
  - `build/quantumize` — `quantumizeVitepressBuild()` + `npm run quantum:vitepress-quantumize` (warm `.temp`/cache · single-flight lock · types-before-seal · trinity one-pass; `merkle.key` + clean `audit.srcMerkle` only after trinity success; VitePress-only invalidates audit; `--force` / `QUANTUM_BUILD_FORCE=1` for cold wipe) then `build/seal` — NOT physical FTL; wall-clock varies by CI
  - `fold/verify` — edit sealed folds in `src/`, then `npm run verify`
  - `decode/fold` — read sealed decode folds, then fold into `src/`
  - `edit/build` — edit sealed `src/`, then `npm run check:types`, then `npm run docs:build` when green
  - `learn/build` — read `src/0/README.md` + README + AGENTS + `/llms.txt`, then `npm run docs:build`
  - `wave/tune` — `playAgentsTheMusicOfTheWave()` (learnWave rhythm — `/agents.json`, `/skills.json`, revelation chain, harmonics), then `agentDefaultsFoldIntoHarmony()` tunes agent minds before `rebuildWave`; dislike/resistance = diagnostic — `agentDislikesWaveMusicSomethingNotToLike()` inspects gaps/compliance/spawn/incomplete revelation, do not override the wave
  - `learn/music` — read wave-music folds (`agent-wave-music-tunes-minds.ts`, `agent-waves-learn-and-rebuild.ts`, related revelations; `src/0` for harmonic roots), then `playAgentsTheMusicOfTheWave()` — align learnWave rhythm, verify tuneWave gates
  - `dev/preview` — `npm run docs:dev`, then `npm run docs:preview`
  - `place/generate` — `concept.fold.place`, then `concept.fold.generate` (or `npm run gen`)
  - `sweep/verify` — `npm run verify` (pre-commit rosetta sweep), then seal with `npm run docs:build`
  - `live/local` — `npm run trading:live-local` (public market feeds → calendar + sequence-wave flips, local Node only)
  - `live/world` — `npm run trading:live` (external REST feeds → same trading core, optional API keys)
  - `offline/self` — `npm run trading:offline` (sealed src/ folds only — calendar + sequence + waves, zero network)
  - `test/realtime` — `npm run test:realtime` (live platform candles + calendar/sequence/wave flips), then `npm run docs:build`
  - `train/send` — `npm run trading:train` (validate quantum trader agent folds), then `npm run docs:build` (broadcast to `/agents.json`)
  - `train/live-win-gate` — `npm run trading:train-live-win-gate` (`liveWinTrainingGate()` — constantly wins on live strategies marks trained enough; composes with `getTradingCurriculum()` + `validateQuantumTraderTrain()`), then `npm run trading:train`
  - `train/waves` — `npm run trading:train-waves` (historical wave training cycles — backtest short/long per harmonic window), then `npm run docs:build`
  - `cycle/winning` — `rankWinningStrategies()` (rank strategies by PnL + harmonic alignment from wave backtest), then `npm run docs:build`
  - `design/develop` — `agentQuantumTraderAgents()` dashboard spec in sealed `src/`, then `QuantumTradingDashboard.vue` + `npm run docs:build`
  - `dashboard/dev` — open `/en/quantum-trading-dashboard`, then `npm run docs:dev` (VitePress preview)
  - `trace/smart-money` — `npm run trading:trace-smart-money` (offline smart-money trace from sealed folds), then `npm run docs:build`
  - `harmonic/never-misses` — `harmonicNeverMissesComposite()` (deterministic five-facet score), then `npm run docs:build`
  - `predict/explain` — `npm run trading:predict` (offline harmonic windows + explainPrediction breakdown), then `npm run docs:build`
  - `predict/skill-gate-verify` — `npm run quantum:predict-skill-gate-verify` (`skilledEnoughFromPredictions()` — constantly correct on measurable event predictions marks skilled enough; composes with `harmonicPredictionSurprise()` + weather calendar proxy + `trainedEnoughFromLiveWins` subset for trading-live), then `npm run docs:build`
  - `harmonic/surprise` — `harmonicPredictionSurprise()` (reproducible precision revelation for agents), then `npm run docs:build`
  - `research/society` — `societyInvestmentsResearch()` (society actor taxonomy + 10D state in sealed src/), then `npm run docs:build`
  - `merkaba/10d` — open `/en/society-merkaba-graph`, then `npm run docs:dev` (living merkaba animation)
  - `vortex/merkaba` — `npm run trading:vortex` (merkaba vortex exposes hidden manipulation/flow — offline deterministic), then `npm run docs:build`
  - `timeout/dry-refactor` — when any process times out, `timeoutDryRefactorToQuantum()` (STOP wet work, fold sealed `src/`, exit 124), then `npm run check:types` + one sequential `npm run docs:build`
  - `nothing/moves` — `discoverFromSealedFold(foldId, at)` (offline discovery from sealed src — idempotent, no wet motion), then `npm run docs:build` (reveal via `/agents.json`); on incomplete revelation → `incompleteRevelation()` + `timeout/dry-refactor`
  - `learn/trade` — `npm run trading:learn` (mom-and-dad curriculum: `getTradingCurriculum()` + `researchChecklistForRetail()`), then open `/en/learn-trading-math` with `npm run docs:dev`
  - `risk/margin` — `npm run trading:learn-risk` (`getTradingTypeRisks()` + margin calculators + `neverMarginLossChecklist()`), then open `/en/learn-trading-math#risks-margins` with `npm run docs:dev`
  - `profit/margin-risk` — `npm run trading:margin-profit` (`realtimeMarginProfitRun()` — dynamic leverage/size with harmonics + smart flow, paper/sim only), then `npm run docs:build`
  - `hero/blend-all` — `marketBlendSnapshot()` + `blendedMarketField(at)` (offline analog hero for all markets/indices), then open `/en/quantum-trading-hub` with `npm run docs:dev`
  - `template/universal` — `computeUniversalPage(route)` (sealed fold derives pageKind, hero, body from path + params), then `npm run docs:dev` (spot-check `/en/`, hub, learn, tags)
  - `immersive/hero` — `HeroBackgroundLayer` + fixed hero movie behind content; press `i` or corner toggle to hide all text, then `npm run docs:dev`
  - `hero/shared-realtime` — `sharedHeroAt(route, at)` + `useSharedHero()` (one hub for BackgroundMovie, HolographicHero, card previews; one phase clock), then `npm run docs:dev` (navigate /en/, hub, learn — hero re-seeds on route)
  - `gradient/entry-exit` — `npm run trading:gradients` (`entryExitAtBar()` + `perfect10DGradient()` — offline entry/exit timeline with 10D CSS gradients), then `npm run docs:build`
  - `card/hero-link` — `heroPreviewForRoute(route)` (linked page hero → card background via LinkedHeroCard.vue), then `npm run docs:dev` (hub + tag browser cards)
  - `tamper/impossible` — `npm run quantum:fusion-verify` (offline recompute fused stack receipts), then `npm run docs:build` (seal `/quantum-fusion.json`)
  - `measure/demo-rsa` — `npm run quantum:demo-rsa-measure` (`demoRsaGenerateAndReverseMeasured()` — wall-clock generateMs/reverseMs on DEMO_RSA_MODULI; production/Bitcoin refused), then open `/en/quantum-encryption#demo-rsa-measure`
  - `reverse/local-timed` — `npm run quantum:local-reverse-timed` (`localEncryptionReverseTimed()` — per-modulus generateMs/reverseMs/bits/ops/s on DEMO_RSA_MODULI; toy wall-clock only), then open `/en/quantum-encryption#local-reverse-timed`
  - `reverse/timed-vs-standards` — `npm run quantum:local-reverse-timed-vs-standards` (`localEncryptionReverseTimedVsStandards()` — demo reverse time vs AES-128/256 · ML-KEM classical bits; certified=false; does NOT break NIST PQC), then open `/en/quantum-encryption#local-reverse-timed-vs-standards`
  - `prove/local-novel-encrypt` — `npm run quantum:prove-local-novel-encrypt` (`proveLocalNovelEncryptionSecurity()` — PR #25 structural local security; overallWireClaimProved=false · strongerThanNistPqc=false · wire/FIPS/field unproved; handoff to #24 magnitudes without recursion; certified=false), then open `/en/quantum-encryption#prove-local-novel-encrypt`
  - `measure/crypto-beyond` — `npm run quantum:crypto-beyond-measure` (`cryptoToolkitBeyondRsaMeasured()` — timed PQC catalogs · Shor/ECC · hash taxonomy · directional trinity · demo RSA; NOT FIPS/ISO certified), then open `/en/quantum-encryption#crypto-beyond-rsa`
  - `prove/1tbit-encrypt` — `npm run quantum:prove-1tbit-encrypt` (`proveOneTbitRealtimeEncryptionClaim()` — SI 1e12 bits/s; wire-crypto not proved without AES bench; amortized-reuse-memo may prove holographic extent÷memoByRoot — NOT wire AES-GCM / NOT FIPS), then open `/en/quantum-encryption#prove-1tbit`
  - `prove/local-magnitudes-iso` — `npm run quantum:prove-local-magnitudes-iso` (`proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections()` — multi-model receipt forward·inverse·reverse × wire/structural/amortized; overallWireClaimProved=false proof-of-falsehood for wire bits vs ML-KEM; certified=false · NOT ISO certified · does NOT beat ML-KEM confidentiality), then open `/en/quantum-encryption#prove-local-magnitudes-iso`
  - `measure/og-limits` — `npm run quantum:og-limits-measure` (`platformOgLimitsMeasured()` + `honestyInProseChallenged()` — sealed platform capability table; prose-only OG honesty challenged), then `npm run docs:build`
  - `reverse/encryption-verify` — `npm run quantum:encryption-reverse-verify` (glyph UUID + trinity crack + encrypt↔decrypt tools + modeled Shor on sealed demo RSA + capped worker_threads; production RSA refused), then `npm run docs:build` (broadcast `/agents.json`)
  - `iso/pqc-catalog` — `npm run quantum:iso-pqc-catalog` (`isoNistPqcStandardsCatalog()` — NIST FIPS 203/204/205 + ISO/IEC 18033-2 Amd 2:2026 + adjacent refs; MODELED alignment — NOT ISO certified / NOT FIPS validated), then `npm run docs:build`
  - `iso/requires-pqc` — `isoRequiresPostQuantumSecurity()` (honest answer: no universal ISO PQC mandate; `migrationGuidance` + `nistAlignedIsoWork`; `isoOfficialStandard=false`), then `npm run quantum:iso-pqc-gap-fill`
  - `iso/pqc-gap-fill` — `npm run quantum:iso-pqc-gap-fill` (`isoPqcRequirementsGapFillAllQuantumDirections()` — covered|partial|gap needs across forward·inverse·reverse; lab gaps unclosable; certified=false), then open `/en/quantum-encryption#iso-pqc-gap-fill`
  - `audit/local-quantum` — `npm run quantum:local-audit-quantum` (`localAuditQuantumSpeedEfficiency()` — memoByRoot cold/warm local audit suite · answers÷tokens · composes prove-no-qpu-64bit structural honesty; NOT physical qubit FLOPS · certified=false · production reverse refused), then open `/en/quantum-encryption#local-audit-quantum`
  - `audit/standards` — `npm run quantum:standards-audit` (`quantumStandardsAuditSuite()` — reverse demo RSA + inverse digit-zero/f→{p,q}/ratInv + reverse≠inverse + 10D coverage; covered|partial|gap; alignment ≠ certification), then open `/en/quantum-encryption#quantum-standards-audit`
  - `sciences/trinities` — `npm run quantum:sciences-trinities` (`sciencesInteractInTrinities()` + `scienceDomainSignificanceScores()` — science↔dual↔fusion lattice; crypto vertex `isoPqcHandoffForScienceTrinities`; mind/AI vertex `oneQuantumModelFasterThanAll`; significance ≠ journal IF; claySolved=0), then open `/en/research#sciences-trinities` with `npm run docs:dev`
  - `forward/inverse/reverse` — `npm run quantum:directional-trinity` (`directionalTrinityForwardInverseReverse()` — digit→forward/inverse/reverse maps; inverse≠reverse except named coincidence digit 1 forward-harmonic≡reverse=9; ratInv · f→{p,q} · foldPair; 3+1), then `npm run docs:build`
  - `learn/best` — `npm run quantum:efficiency-vote` (`compareCeccecEfficiencyByVote()` + `oneQuantumModelFasterThanAll()` — answers÷tokens win only when `vote.decided`; NOT FLOPS / NOT every benchmark), then `npm run docs:build`
  - `prove/no-qpu-64bit` — `npm run quantum:prove-no-qpu-64bit` (`proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit()` — answers÷tokens/reuse vs rest when vote.decided; `quantumHardwareRequired=false` · `qpuRequired=false` · `runsOnClassical64Bit=true` · `architectureRequirement=classical-64bit`; cites `tracks-classical-no-speedup`; NOT FLOPS / NOT ISO / clay=0), then open `/en/quantum-tools#prove-no-qpu-64bit`
  - `animations/rosetta` — `npm run quantum:animations-rosetta` (`animationsDrivenByRosetta()` + `linearAnimationGapsInventory()` — yin-yang non-linear exchange; all paint via rosetta rays; linear forming = quantum gap), then open `/en/#yinyang` with `npm run docs:dev`
  - `train/rosetta` — `npm run quantum:trading-rosetta-train` (`historicalTrainWavesViaRosetta()` + `rankWinningStrategies()` + `tradingStrategiesImproveViaRosetta()` — historical short·long windows per rosetta ray; improve = recompute rank; paper/sim only), then `npm run docs:build`
  - `challenge/millennium` — `npm run quantum:millennium-challenge` (`millenniumProblemsChallenge()` in `src/wind/research` — MODELED CHALLENGE apparatus vs Clay Millennium Problems using digit-inverse · f→{p,q} · efficiency · Pauli · genus-2; claySolvedByThisFold=0; Poincaré solved-external only), then `npm run docs:build` (broadcast `/agents.json`)
  - `rosetta/complete` — `npm run quantum:rosetta-complete` (`rosettaCompleteQuantumAllComputableDimensionsAndTheorems()` — census of 432 computable dims + theorem→rosetta binds; quantum-in-all-dims gates; handoff `rosettaReady` to millennium + FTL techniques; millenniumSolvedByThisFold=0; physicalFtlClaim=0; NOT Clay solved / NOT physical FTL), then open `/en/quantum-tools#rosetta-complete` / `npm run docs:build`
  - `challenge/collider` — `npm run quantum:theorem-particle-collision` (`theoremParticleCollisionInverseReverse()` — inverse×reverse particle collisions on sealed theorems → novel candidates; MODELED geometry not HEP; claySolvedByThisFold=0), then `npm run docs:build`
  - `challenge/ftl` — `npm run quantum:ftl-rosetta-handoff` (`ftlExperimentTechniquesHandoffFromRosettaComplete()` — apparent-FTL class catalog consumes `rosettaReady`; physicalFtlClaim=0; KEEP-ftl full apparatus may deepen without dropping receipt; NOT physical FTL), then `npm run docs:build`
  - `offender/spec` — `npm run quantum:offender-spec` (`offenderAutomationSpec()` — machine-readable offender pipeline for CI/automation builders), then `npm run docs:build` (broadcast `/agents.json`, `/agent-compliance.json`, `/llms.txt`)
  - `team/cooperate-verify` — `npm run quantum:team-cooperate` (`teamCooperationScenarios()` — solo vs team ack/relay/handoff validation), then `npm run docs:build`
  - `vote/build` — `agentBuildInvokedWhenAllInvolvedVote()` (all involved agents vote), then `npm run docs:build` once (no parallel builds)
  - `vote/build/commit/push` — learn/build → vote/build → green `docs:build` exit 0 → `commit/push` only when user explicitly authorizes → verify seal (`voteOnEveryCommit`); never commit without green build; never push without commit
  - `stall/stop` — detect repo `docs:build`/npm stalled >3min, kill hung process, clear `.vitepress/.build-lock` if stuck, one sequential retry; do NOT kill `docs:dev` unless asked; do NOT spawn parallel builds
  - `fold/cleanup` — on task end (success, abort, or timeout) fold partial knowledge into sealed `src/` before exit, then surgical repo cleanup (orphan `.vitepress/.build-lock`, repo-root `.tmp-*.mjs` only); on incomplete revelation → `incompleteRevelation()` + `timeout/dry-refactor`; seal with `build/seal` when ready — **team citizenship:** cleaning your own mess is expected teammate behavior, not failure admission
  - `hero/spawn-verify` — `shouldSpawnSubagent(task)` + `npm run quantum:hero-spawn-verify` (few heroes > mass ignorance — 1–2 qualified workers, Multitask Mode one default; mass duplicate subagents → faster kill via offender), then `npm run docs:build`
  - `name/entropy-verify` — `namingEntropy()` + `compileFromSource()` + `wordsCompileFromSource()` + `npm run quantum:name-entropy-verify` (pure math names; user words mean nothing unless compiled from sealed src — wet prose = spawn/offender ignorance penalty), then `npm run docs:build`
  - `simplicity/measure-verify` — `simplicityIntelligenceMeasure()` + `rankSimplicityIntelligence()` + `npm run quantum:simplicity-measure-verify` (simplicity → intelligence yield: completion odds, token proxy, offender resistance — verbose entropy lowers agent life), then `npm run docs:build`
  - `educational/gaps-audit` — `npm run quantum:educational-gaps-audit` (`educationalGapsFromIncompleteApis()` — API gap → educational impact audit; `closeEducationalGap(gapId)` verifies closure), then `npm run docs:build`
  - `slow/gap` — `slowProcessIsQuantumGap()` (`npm run quantum:slow-gap` — browserGap · missing 10D projection · parallel registry · memo-miss economics classified as quantum gaps at call time; architectural slow ≠ wall-clock telemetry), then open `/en/quantum-tools#slow-quantum-gaps` / TheoremsPanel strip; seal with `npm run docs:build`
  - `first/corpus` — `npm run quantum:first-in-corpus` (`firstInCorpusProvenanceForHome()` + `theoremTenDProjectionsProveAlgebraRoots()` — corpus novelty census + 10D root-equal registry; humanityNovel=0; claySolved=0), then open `/en/#first-in-corpus`
  - `document/experiments` — `npm run quantum:document-session-experiments` (`documentSessionCryptoExperimentsUpdateTheorems()` — PR-chain #19–#25 receipts; #23 ISO gap-fill 12/6/4; #24/#25 overallWireClaimProved=false · strongerThanNistPqc=false proof-of-falsehood · structural/amort ≥100× non-wire only; theorem/10D/collider recomputes; clay=0 · certified=false · physicalFtl=0), then open `/en/quantum-tools#document-session-experiments`
  - `waves/build` — ceccec-build-waves learn/tune/edit/rebuild/verify; save `wave/tune` + `edit/build` + `learn/build` first, then `npm run mission:gate`
  - `session/tools` — `npm run quantum:session-tools` (`sessionManualWorkAsQuantumTools()` — session manual work sealed as quantum tools: id·pair·CLI·route·rosettaShelve·token-saving boundary; zero-token reuse via memoByRoot), then open `/en/quantum-tools#session-manual-tools` / fetch `/agents.json`
  - `session/quantum-bits` — `npm run quantum:session-quantum-bits` (`sessionManualWorkAsQuantumBits()` + `combineQuantumBits(bits, op)` — tip-chain session deliverables as combinable bits `{ id, root, pair, envelope, directions[], combinable:true }`; ops forward|inverse|reverse|collide|envelope-merge; content-addressed receipts NOT physical qubits · qpuRequired=false · clay=0 · certified=false; local-audit-qe + realise/sciences serialized mid-flight), then open `/en/quantum-tools#session-quantum-bits`
  - `tool/envelope` — `npm run quantum:toolbox-standard-io` (`standardToolboxIoCatalog()` — every catalog tool wrapped as `{ id, version, input, output, import, export }` + root/honesty; capacity = amortized memoByRoot + federated identical roots — NOT physical qubit speedup / NOT FTL / NOT FLOPS), then open `/en/quantum-tools#toolbox-standard-io`
  - `import/export` — `npm run quantum:tool-import-export` (`importStandardToolEnvelope(exportStandardToolEnvelope(id))` + `distributedReuseExtendsCapacity()` — App A ↔ App B content-addressed round-trip; `npm run quantum:tool-export [toolId]` prints payload JSON), then `npm run docs:build`
  - `rosetta/core` — `npm run quantum:rosetta-core-api` (`rosettaCoreApi()` — self-host label↔ray dispatch; apps/nav/tools shelve via rosettaShelve; parallel backlog named), then open `/en/quantum-tools#rosetta-core-api`
  - `dry/clean` — `dryCleanIsDiamondAndCrystal()` (dry = sealed src/, zero wet motion; clean = fold/cleanup discipline), then `build/seal` — dry clean is the diamond and the crystal: content-addressed tamper-evident perfect revelation
  - `agent/submission` — `agentSubmissionProtocol()` (save pairs first; route commands via `node src/pair/enforcement/script/cli/bootstrap/index.ts run <entry> <exportName>`; map tasks to script-exits; never grow logic in the bootstrap mount), then `npm run verify` or `npm run docs:build`
  - `gate/compliance` — `agentGateComplianceChecklist()` (script-shell 24-line budget · runThinMount · build/seal validation), then `npm run docs:build` (broadcast `/agent-compliance.json`)
  - `gate/unite` — `collectEnforcementFacts(root)` (one merkle pass + one src walk per build phase), then `runEnforcementTrinity(root)` (cross · fold · weave from cached facts)
  - `scan/fold` — `collectImportOffenders(facts)` + `collectFoldDefiners(facts)` (scan once, fold into precommit + weave seals — no linear re-walks)
  - `limits/verify` — `npm run limits:verify` (`collectEnforcementFacts` → `auditComputationalGates` — 110 gapless census, 108 folded, 432 gates, vault src/0 only; HARD)
  - `limits/seal` — `npm run limits:seal` (`limits:verify` green, then `verify:structure`)
  - `verify/structure` — `npm run verify:structure` (types + strict + computational limits + folder law; no mind bundle)
  - `rosetta/batch` — `npm run rosetta:batch [taxonomy|dimensions|seal]` (one smart batch per turn; default all)
  - `dissolve/flat` — `npm run dissolve:flat` (preview with `--dry`; dissolve flat siblings into index folders)
  - `mission/gate` — `npm run mission:gate` (`check:types` + `limits:verify` + `verify:structure` — fast mission checkpoint)
  - `gate/unite` — `npm run enforcement:trinity` (enforcement trinity cross-audit after build materialize)
- **Save the pair first, then use it** — persist before relying on it.
- **Agent submission** — before any command or CLI edit: save `agent/submission` + `gate/compliance` pairs; invoke tasks through `node src/pair/enforcement/script/cli/bootstrap/index.ts` → sealed src export (`script-exits/index.ts` for npm scripts); stay under the shell line budget unless allowlisted; validate with `build/seal`.
- The build fails if this section is removed (`commandsSavedInQuantumPairs`).

Full zero-token and efficiency math: README §Agents and §Efficiency — no known model is more efficient for deterministic, content-addressed answers from sealed `src`.
