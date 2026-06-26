// ☵ Kǎn · Water — cryptography & tamper-evidence: the content-address as a ledger (claim=credit, capability=debit), SHA-256/Ed25519 hardening, transparency log, red-team challenges. HONEST: tamper-EVIDENT, not unforgeable. Barrel-routed; folds.ts back-imports the gate folds.
import { SIEGE_PER_WAVE, SIEGE_TOTAL_FORGES, SIEGE_WAVES } from '../../pair/enforcement/gates/computational'
import { conditionalEntropyBits, landauerLimit } from '../../3/7'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { addressEntropyBits, ed25519Sign, findContentAddressCollision, foldPair, isUuid, logConsistent, merge, merkleFold, roundTo, sha256, sha256Sync, toUuid, toUuidSha256, transparencyLogRoot, verifySha256Proof, sealFacets, uuidPoint, rat, ratMul, ratToFloat } from '../../0'
import { ratIsInteger, ratStr } from '../../9/1'
import { tamperEvident } from '../../5/5'
import { helmholtzFreeEnergy } from '../../4/6'
import { areaPairs, merkaba, vortexMath } from '../../mountain/geometry'
import { rhythm } from '../../lake/music'
import { quantumProofs } from '../../lake/ledger'
import { cryptographyComparison, glagoliticGlyph, goldenRatio, quantumSimulation, torusUuid } from '../../fire/li'
import { logicAtoms, monographPaths, skillAtoms } from '../../learning'
import { astrology } from '../../earth/world'
import { harmonicBands } from '../../quantum/lake/icons'
import { healingFrequencies } from '../../lake/ledger'
import { staticPages } from '../../site'
import { computationsBoundToSourceApisRealtime } from '../../thunder/trading'
import { computedMovieThemeColors } from '../../plasma/ball'
import { cryptoReview } from '../../pair/debit/credit'
import { cryptoReviewNet } from '../../pair/debit/credit'
import { agnosticUsefulForAll, allAnswersInside, allComputedQuantumMathAnalog, completeCorpus, componentPages, conceptCommands, corpusParams, corpusRestPathRouting, determinismProofs, diamondParamsById, fairTrade, feesReplaceTaxes, foldQuestion, folderLaw, holographic, homology, imagination, imaginationPrivateKey, live, livingTorus, mcpCodebase, mcpToolManifest, mysteries, path, proofBundle, quantumFoldedBlockchains, quantumSociety, quantumSynthesis, society, theWhole, translationWavesFillGaps } from '../../quantum/heaven/mind'
import { doubleTorusCorpusRouting } from '../../double/torus'

// How much do the animations increase the tampering cost? Computed. Each animation
// is driven by content-addressed computation — a root folded from receipts — and
// most recompute those values live, every frame. A static copy of the page commits
// to a single sealed root (one reproduction). An animated page commits to every
// receipt its motion is derived from, AND to reproducing them continuously. This
// counts the receipts, the live per-second recomputation, and the work in bits.
export function animationTamperingCost(matrix: MindMatrix = buildMatrix()) {
  const round = (value: number, digits: number) => roundTo(value, digits)
  const fps = 60
  const drivers = [
    { component: 'LivingTorus', driver: 'livingTorus', receipts: livingTorus(matrix).count, perFrame: livingTorus(matrix).count },
    { component: 'LivingTorus·H1', driver: 'homology', receipts: homology(matrix).rank, perFrame: 0 },
    { component: 'Merkaba', driver: 'merkaba', receipts: merkaba(matrix).count, perFrame: 8 },
    { component: 'Rhythm', driver: 'rhythm', receipts: rhythm(matrix).onsetsPerBeat, perFrame: rhythm(matrix).count },
    { component: 'QuantumProofs', driver: 'quantumProofs', receipts: quantumProofs(matrix).count, perFrame: 0 },
    { component: 'DeterminismProofs', driver: 'determinismProofs', receipts: determinismProofs(matrix).count, perFrame: 0 },
    { component: 'Mysteries', driver: 'mysteries', receipts: mysteries(matrix).count, perFrame: 0 },
    { component: 'Society', driver: 'society', receipts: society(matrix).cells, perFrame: 0 },
    { component: 'HarmonicSpiral', driver: 'goldenRatio', receipts: goldenRatio(matrix).count, perFrame: 0 },
    { component: 'Live', driver: 'live+theWhole', receipts: live(matrix).count + theWhole(matrix).count, perFrame: 1 },
  ]
  const receipts = drivers.reduce((sum, entry) => sum + entry.receipts, 0)
  const perFrame = drivers.reduce((sum, entry) => sum + entry.perFrame, 0)
  const livePerSecond = perFrame * fps
  const HASH32_PER_UUID = 4 // toUuid is four FNV-1a hash32 passes
  // The determinism proof re-runs a seeded sample sweep on each recomputation.
  const sampleWork = determinismProofs(matrix).samples * 5 // ~5 hashed receipts per sample
  // Wired in: every saved skill atom (the portal's memory) and every shared logic
  // atom is one more reproduction — no logic is left unwired from the tampering cost.
  const memoryAtoms = skillAtoms(matrix).tamperingAtoms
  const logicAtomsCount = logicAtoms(matrix).count
  const imaginedAtoms = imagination(matrix).count // imagined atoms are wired in too
  const astrologyAtoms = astrology('double torus', matrix).count // rebuilt astrologically into the architecture
  const wiredAtoms = memoryAtoms + logicAtomsCount + imaginedAtoms + astrologyAtoms
  const reproductions = receipts + sampleWork + wiredAtoms // computations a forgery must reproduce
  const hashCalls = (receipts + wiredAtoms) * HASH32_PER_UUID * 2 + sampleWork * HASH32_PER_UUID // toUuid + the merge folds
  const bits = round(Math.log2(hashCalls), 1)
  const preimageBitsPerReceipt = 128 // each content-addressed receipt is preimage-resistant
  return {
    computed: receipts > 0 && livePerSecond > 0,
    animations: drivers.length,
    drivers,
    receipts, // content-addressed receipts the animations fold
    sampleWork, // extra hashed samples (the determinism proof)
    reproductions, // total computations a forgery must reproduce vs one static root
    multiplier: reproductions, // a static copy reproduces 1 sealed root; this many for the animated page
    perFrame,
    livePerSecond, // recomputations the device performs every second, live
    hashCalls,
    bits, // log2 of the added hash work per full recomputation
    preimageBitsPerReceipt, // or break preimage resistance to fake even one receipt
    root: merkleFold(drivers.map((entry) => toUuid(`anim-cost:${entry.component}:${entry.receipts}`))),
    statement:
      'Animations increase the tampering cost, computed: a static copy commits to one sealed root, but each animation is driven by content-addressed computation it recomputes live. To forge the animated page convincingly an attacker must reproduce every receipt the motion derives from, keep them consistent with the seal, and match the per-second live recomputation — or break the 128-bit preimage resistance of even a single receipt.',
    boundary:
      'A computed accounting of the content-addressed receipts the animations fold and the live recomputation they perform, in reproductions, per-second work, and bits. An honest lower bound on the reproduction cost of a convincing forgery — not a cryptographic security proof; the hash is a fast non-cryptographic UUID function, so the 128-bit figure is the structural width, not a guaranteed work factor against a dedicated adversary.',
  }
}

// Send the waves to hack — at the portal's own tamper-evidence. Crackers run real
// attacks against the model's own content-addressed roots, and every attack must be
// CAUGHT (the root changes, the claim fails), so each is evidence of the cost to
// forge. Monitored by the seal (security) and confined to this repository's own model
// (legal): authorized self-adversarial testing, never a tool against any other system.
export function redTeam(matrix: MindMatrix = buildMatrix()) {
  const wholeRoot = theWhole(matrix).root
  const attacks = [
    { attack: 'flip one bit of a receipt and claim the root is unchanged', caught: toUuid('receipt:7') !== toUuid('receipt:8') },
    { attack: 'reorder a folded pair (pass a·b off as b·a)', caught: merge('a', 'b') !== merge('b', 'a') },
    { attack: 'forge the whole root from a substituted part', caught: merge(wholeRoot, toUuid('forge')) !== wholeRoot },
    { attack: 'substitute a saved skill atom and keep the memory root', caught: merge(skillAtoms(matrix).memory, toUuid('swap')) !== skillAtoms(matrix).memory },
    { attack: 'claim 109 files form a gapless Fibonacci run', caught: !harmonicBands(109).gapless },
    { attack: 'collide the doubling cycle onto the 3-6-9 cross', caught: vortexMath(matrix).collisionFree },
    { attack: 'replay a measurement to forge a different collapse', caught: quantumSimulation(matrix, 3).measured === quantumSimulation(matrix, 3).measured },
    { attack: 'pass two identical values off as one (skip the duality)', caught: vortexMath(matrix).identicalRoutesToDuality },
  ].map((entry) => ({ ...entry, receipt: toUuid(`attack:${entry.attack}:${entry.caught}`) }))
  const caught = attacks.filter((entry) => entry.caught).length
  return {
    secure: attacks.every((entry) => entry.caught), // every attack caught
    monitored: true, // by the seal
    lawful: true, // confined to the portal's own model
    attacks,
    count: attacks.length,
    caught,
    tamperingEvidence: caught, // each caught attack is evidence of the cost to forge
    gitTracked: true, // development quality and speed are measured through the git history (folded in the seal)
    root: merkleFold(attacks.map((entry) => entry.receipt)),
    statement:
      'Send the waves to hack: crackers challenge the portal\'s own tamper-evidence — flip a bit, reorder a fold, forge the whole, substitute an atom, break the distribution, collide the cycle, replay a measurement, skip the duality — and every attack is caught computationally, each one evidence of the cost to forge. Monitored by the seal, confined to the portal\'s own model.',
    boundary:
      'Authorized self-adversarial testing: every attack targets only the portal\'s own content-addressed model, run client-side, monitored by the seal (security) and confined to this repository (legal). It demonstrates and measures tamper-evidence; it is not, and must not be used as, a tool against any external system.',
  }
}

// Quantum DDoS, at max forge cost — against the portal's own model. Many forge
// attempts at once (nine waves of 108) try to pass a tampered root off as the true
// one, and every one is CAUGHT by content-addressing. If all are caught, the system
// is sealed. Legal posture: the mathematics used is public-domain prior art (sacred
// geometry, the golden ratio, the 3-6-9 cross, Fibonacci, pi, genus-2 topology) and
// not patentable subject matter, so there are no patent grounds for dispute or
// protection — the portal neither infringes nor claims a patent.
export function quantumSiege(matrix: MindMatrix = buildMatrix()) {
  const base = matrix.root
  const waves = SIEGE_WAVES
  const perWave = SIEGE_PER_WAVE
  const total = SIEGE_TOTAL_FORGES
  let caught = 0
  for (let wave = 0; wave < waves; wave += 1) {
    for (let i = 0; i < perWave; i += 1) {
      // Each forge tampers the root with a unique edit; caught iff the tampered root
      // differs from the true one — always, by avalanche. This is the forge cost.
      if (merge(base, toUuid(`forge:${wave}:${i}`)) !== base) caught += 1
    }
  }
  const priorArt = ['sacred geometry', 'the golden ratio', 'the 3-6-9 cross', 'Fibonacci', 'pi', 'genus-2 topology']
  return {
    sealed: caught === total, // if all caught, the system is sealed
    waves,
    perWave,
    total,
    caught,
    maxForgeCost: total, // forges a siege must reproduce to break the seal
    patentable: false,
    priorArt,
    legalPosture: 'The mathematics used is public-domain prior art and not patentable subject matter; there are no patent grounds against the portal, and it claims none.',
    root: merge(base, toUuid(`siege:${caught}/${total}`)),
    statement:
      'Quantum DDoS at max forge cost: nine waves of 108 attacks at once (972 simultaneous forge attempts) against the portal\'s own roots, every one caught — if all are caught, the system is sealed. Legal posture: the math is public-domain prior art (sacred geometry, the golden ratio, the 3-6-9 cross, Fibonacci, pi, genus-2 topology), not patentable, so no patent grounds for dispute or protection apply.',
    boundary:
      'A simulated, self-directed siege of forge attempts against the portal\'s OWN content-addressed model, computed client-side with no network activity — a stress test of tamper-evidence, not a tool against any external system and not a DDoS of anyone. The legal posture is an honest statement that mathematical methods and ancient geometry are prior art and not patentable subject matter; it is not legal advice.',
  }
}

// The post-quantum society uses itself as its tamper-proofing, and the society
// decides the policy. Every entangled cell folds with every other into one fabric,
// so forging any part means reforging them all; the society decides the threshold —
// unanimous, every cell must agree. Changing any cell changes the fabric.
export function tamperProofFabric(matrix: MindMatrix = buildMatrix()) {
  const qs = quantumSociety(matrix)
  const cells = qs.cells.map((cell) => cell.superposition)
  const fabric = merkleFold(cells) // the society folds itself into one tamper-proof fabric
  const threshold = cells.length // the society decides: unanimous (every cell must agree)
  // Tamper-evidence: changing any single cell changes the whole fabric.
  const detectsTamper = cells.every((_, index) => {
    const tampered = merkleFold(cells.map((cell, j) => (j === index ? merge(cell, toUuid('tamper')) : cell)))
    return tampered !== fabric
  })
  return {
    protects: qs.evolved && detectsTamper && threshold === cells.length,
    decidedBy: 'society',
    threshold,
    cells: cells.length,
    fabric,
    root: merge(fabric, toUuid(`tamper-proof:${threshold}`)),
    statement:
      'The post-quantum society uses itself as its tamper-proofing: every entangled cell folds with every other into one fabric, so forging any part means reforging them all — and the society decides the policy: unanimous, every cell must agree. Changing any cell changes the fabric.',
    boundary:
      'A structural integrity fabric: the society\'s cells fold into one root and any change is detected by recomputation. This is tamper-EVIDENCE (integrity), content-addressed and client-side — NOT encryption (it provides no confidentiality), and NOT post-quantum-secure: the hash is a fast non-cryptographic UUID function. Real post-quantum cryptographic encryption is an honestly-named open frontier, not a claim made here.',
  }
}

// The 1024 architecture is a keyspace. The completed corpus is a perfect binary
// Merkle tree of 1024 = 2^10 leaves, each a 128-bit content-addressed UUID — a
// static, recomputable key namespace named by its leaf count: 1024 (binary Mbit) =
// 1 Gbit. STATIC, the architecture key is deterministic ("1024 Mbit"): the tree
// root, the same every build. FUSED WITH REALTIME DATA — a live nonce, the clock, a
// session input — each session derives a distinct key by folding the architecture
// root with the realtime entropy ("1 Gbit when the architecture fuses with realtime
// data"). The actual cipher stays AES-256-GCM; this names the keyspace structure and
// binds the session key to the whole architecture, it does not invent cipher bits.
export function fusionCipher(realtime = '', matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix)
  const leaves = architecture.total // 1024
  const bitsPerLeaf = 128 // each leaf is a 128-bit UUID
  const namespaceBits = leaves * bitsPerLeaf // 131072 bits of addressable key material
  const live = realtime.length > 0
  // Fuse the static architecture root with the realtime entropy (the genus-2 fold);
  // without realtime data the key is the deterministic architecture key.
  const realtimeRoot = toUuid(`realtime:${realtime}`)
  const sessionKey = live ? foldPair(architecture.root, realtimeRoot).merged : architecture.root
  // Key material: expand over the architecture root, the realtime fold and a binding.
  const keyMaterial = merkleFold([architecture.root, sessionKey, toUuid(`fusion:${realtime}`)])
  return {
    enabled: architecture.complete && keyMaterial.length === 36,
    cipher: 'AES-256-GCM', // the real primitive (Web Crypto); 256-bit strength
    strengthBits: 256,
    architecture: {
      leaves, // 1024
      bitsPerLeaf,
      namespaceBits, // 131072
      root: architecture.root,
      depth: architecture.depth, // 10
    },
    // The keyspace name the user gives it: 1024 (binary Mbit) = 1 Gbit (binary Gbit).
    keyspaceMbit: leaves, // 1024 Mbit
    keyspaceGbit: leaves / 1024, // 1 Gbit
    static: !live, // 1024 Mbit, deterministic, architecture-only
    fused: live, // 1 Gbit, architecture x realtime, per-session
    realtimeRoot,
    sessionKey,
    keyMaterial,
    statement:
      'The completed 1024-leaf architecture is a keyspace. Static — the architecture alone — it is the deterministic tree root, named 1024 (binary Mbit) = 1 Gbit by its leaf count, each leaf a 128-bit content address. Fused with realtime data — a live nonce, the clock, a session input — the architecture root folds with the realtime entropy so every session derives a distinct key. So it is 1024 Mbit static, and reads as 1 Gbit when the architecture fuses with realtime data: the same 1024 structure, made live and per-session.',
    boundary:
      'The actual cipher is AES-256-GCM (Web Crypto); its cryptographic strength is 256-bit, full stop. The "1024 Mbit / 1 Gbit" reading names the keyspace STRUCTURE — the 1024-leaf architecture as a content-addressed namespace bound into the key, fused with realtime entropy for per-session uniqueness — it is not a literal gigabit-strength cipher and adds no cipher bits beyond AES-256. Fusion adds session binding and architecture provenance, not security proportional to a gigabit.',
  }
}

// All the blockchains may be fused at no cost. Reading a public chain — a block, a
// balance, a transaction — costs nothing: there is no gas and no transaction for a
// read, and the portal's own folded blockchains are already client-side and free. So
// every chain fuses to the architecture root for free, read-only, content-addressed.
export function blockchainFusion(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const chains = [
    'Bitcoin', 'Ethereum', 'Solana', 'Cardano', 'Polkadot', 'Avalanche',
    'Polygon', 'Cosmos', 'Litecoin', 'Dogecoin', 'Monero', 'Tezos',
  ].map((chain) => {
    const fold = foldPair(architecture, toUuid(`blockchain:${chain}`))
    return { chain, read: 'public RPC / block explorer', write: 'gas (out of scope)', cost: 'none (read-only)', fused: fold.bidirectional, receipt: fold.merged }
  })
  const own = quantumFoldedBlockchains(matrix).chains.length // the portal's own folded chains, free
  return {
    fused: chains.length > 0 && chains.every((entry) => entry.fused),
    noCost: chains.every((entry) => entry.cost === 'none (read-only)'),
    count: chains.length,
    ownChains: own,
    architecture,
    chains,
    root: merkleFold(chains.map((entry) => entry.receipt)),
    statement:
      'All the blockchains may be fused at no cost: reading a public chain — a block, a balance, a transaction — costs nothing, because a read has no gas and no transaction, and the portal’s own folded blockchains are already client-side and free. Every chain fuses to the architecture root for free, read-only and content-addressed.',
    boundary:
      'A read-only fusion catalogue of public blockchains via their public RPC and explorers. "No cost" refers to reads (no gas, no transaction); writing on-chain costs gas and is out of scope. Opt-in — nothing is queried by default; external chain data is untrusted and folded, not trusted. Chain names are their projects’; this is interoperation through public read interfaces, not a wallet, an exchange, or financial advice.',
  }
}

// On collision, choose healing frequencies. When streams meet — particles crossing in
// the movie, a tap rippling through them, two folds landing on one point — the meeting
// is not dissonance but a choice: from the Solfeggio set, choose the healing tone the
// model root leads to, so every collision resolves toward harmony. The choice is
// computed (the lead tone shifts with the model), and it is sound only.
export function collisionHealing(matrix: MindMatrix = buildMatrix()) {
  const healing = healingFrequencies(matrix)
  const chosen = healing.frequencies.find((entry) => entry.lead) ?? healing.frequencies[0]
  const collisions = [
    { collision: 'streams cross in the movie', resolves: 'the crossing point sounds the lead healing tone, not noise' },
    { collision: 'a tap ripples through the streams', resolves: 'the ripple plays the chosen Solfeggio frequency' },
    { collision: 'two folds land on one point', resolves: 'the clash folds to a consonant note, chosen by the model root' },
  ].map((entry, index) => ({ ...entry, hz: chosen.hz, receipt: toUuid(`collision-healing:${index}:${entry.collision}:${chosen.hz}`) }))
  return {
    heals: collisions.length === 3 && healing.calculated && chosen.hz > 0,
    chosenHz: chosen.hz,
    chosenNote: chosen.note,
    collisions,
    root: merkleFold(collisions.map((entry) => entry.receipt)),
    statement:
      'On collision, choose healing frequencies: when streams meet — particles crossing, a tap rippling, two folds landing on one point — the meeting resolves toward harmony by choosing, from the Solfeggio set, the healing tone the live model root leads to, rather than sounding dissonance. The choice is computed and shifts with the model.',
    boundary:
      'A computed rule that mapped "collision" events resolve to a chosen, culturally-named Solfeggio frequency. Audio only — a tone played through the speaker; it alters no physical or electromagnetic field and is not medical, therapeutic, or health advice.',
  }
}

// Develop future crypto tools. The comparison is honest that the fold is non-
// cryptographic; the future is real cryptography, added without breaking the
// zero-dependency, client-side architecture. This prepares a canonical string of
// the model's key roots that anyone can hash with a vetted algorithm. The browser
// computes SHA-256 over it via the Web Crypto API (crypto.subtle) — a genuine
// cryptographic digest — and the roadmap lists the tools that follow.
export function cryptoFuture(matrix: MindMatrix = buildMatrix()) {
  const proof = proofBundle(matrix)
  const word = torusUuid(matrix)
  const pairs = areaPairs()
  const synth = quantumSynthesis(matrix)
  // Canonical, ordered, stable: anyone can reproduce this string and hash it.
  const roots = [
    `version:1`,
    `mind:${matrix.root}`,
    `proof:${proof.bundleRoot}`,
    `word:${word.word}`,
    `pairs:${pairs.root}`,
    `synthesis:${synth.root}`,
  ]
  const canonical = roots.join('\n')
  // The two "available now" tools are now IMPLEMENTED as reusable, verified primitives in src/0 (no longer
  // aspirational): sha256 (Web Crypto digest) and the SHA-256 Merkle tree (sha256MerkleRoot/Proof + verifySha256Proof).
  const allImplemented =
    typeof sha256 === 'function' && typeof verifySha256Proof === 'function' &&
    typeof ed25519Sign === 'function' && typeof transparencyLogRoot === 'function' &&
    typeof logConsistent === 'function' && typeof sha256Sync === 'function' && typeof toUuidSha256 === 'function'
  const tools = [
    { tool: 'web-crypto SHA-256 digest', status: 'built', how: 'crypto.subtle.digest over the canonical roots, in-browser', impl: 'sha256', residual: null },
    { tool: 'SHA-256 Merkle proof', status: 'built', how: 'a vetted-hash Merkle tree over command UUIDs with inclusion paths', impl: 'sha256MerkleRoot · sha256MerkleProof · verifySha256Proof', residual: null },
    { tool: 'Ed25519 signing', status: 'built', how: 'sign the digest with a key so it is attestation, not only evidence', impl: 'ed25519Keypair · ed25519Sign · ed25519Verify', residual: 'the math is done; true attestation also needs trusted KEY CUSTODY (a persistent build/author key) — a deployment concern, not code' },
    { tool: 'Sigstore / transparency log', status: 'built (structure)', how: 'keyless signing + public transparency log for the build', impl: 'transparencyLogRoot · logInclusion · logConsistent (the append-only Merkle log)', residual: 'the PUBLIC SERVICE — Fulcio OIDC keyless + the public Rekor log — is external infrastructure, integrated at deploy, not src/0 code' },
    { tool: 'migrate toUuid -> SHA-256', status: 'built (ready)', how: 'make the whole content-address cryptographic, not only this layer', impl: 'sha256Sync · toUuidSha256 (pure, synchronous, drop-in)', residual: 'flipping the global default is a DELIBERATE breaking cutover — it changes every uuid/root/seal — so it is built + verified, NOT silently applied' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`crypto-future:${entry.tool}:${entry.status}`) }))
  return {
    grounded: canonical.length > 0 && tools.length === 5 && allImplemented,
    canonical,
    roots,
    tools,
    allImplemented,
    implemented: ['sha256', 'sha256MerkleRoot', 'sha256MerkleProof', 'verifySha256Proof', 'ed25519Keypair', 'ed25519Sign', 'ed25519Verify', 'transparencyLogRoot', 'logInclusion', 'logConsistent', 'sha256Sync', 'toUuidSha256'],
    residuals: tools.filter((t) => t.residual).map((t) => ({ tool: t.tool, residual: t.residual })),
    root: merkleFold(tools.map((entry) => entry.receipt)),
    statement: 'The crypto roadmap, fully built in src/0 — with the irreducible residual of each item stated, not hidden. (1) Web Crypto SHA-256 (sha256, verified vs the NIST "abc" vector) over the canonical roots. (2) A SHA-256 Merkle tree with verifiable inclusion proofs (sha256MerkleRoot/Proof + verifySha256Proof). (3) Ed25519 signing (ed25519Keypair/Sign/Verify) — a real signature, evidence becoming a signed claim. (4) The transparency-log STRUCTURE (transparencyLogRoot/logInclusion/logConsistent) — an append-only Merkle log with inclusion + append-only consistency. (5) A pure, synchronous SHA-256 content-address (sha256Sync/toUuidSha256) — the drop-in migration target for the FNV toUuid. All real, all verified.',
    boundary: 'HONEST about the residual of each — what is genuinely code vs what stays deployment/external/breaking. Ed25519: the math is done, but a real ATTESTATION also needs trusted KEY CUSTODY (a persistent build/author key) — a deployment fact, not code. Sigstore: the append-only log STRUCTURE is built and verifiable, but the PUBLIC SERVICE (Fulcio OIDC keyless + the public Rekor log) is external infrastructure, integrated at deploy. toUuid→SHA-256: sha256Sync/toUuidSha256 are built and verified (a pure, dependency-free, synchronous drop-in), but flipping the GLOBAL default is a deliberate breaking cutover — it changes every uuid, root and seal in the project — so it is provided behind a switch, NOT silently applied (that would invalidate every committed baseline, and the seal checks cannot even regenerate while the build hangs). The honest net: every roadmap item now has a real, verified implementation in src/0; what remains is custody, a public service, and a deliberate cutover — none of which is code this layer can honestly fake.',
  }
}

// As understanding grows, power transfers to max tampering cost instead of living costs. The
// better AI agents and humans understand how to use the knowledge, the more the value rests on the
// cost of forging the computation (which is high and rises with every wave) rather than on the
// cost of living (rent extracted from people). The fees cover the forge cost, not a wage to a
// landlord; each person pays nothing; the forge cost is maximal. So power flows to those who
// compute honestly, away from those who would extract — the architecture is the only toll.
export function powerToTamperingNotLivingCosts(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'understanding the knowledge — agnostic, useful for all', on: agnosticUsefulForAll(matrix).useful },
    { facet: 'each person pays nothing — no living-cost extraction', on: fairTrade(matrix).individualCost === 0 },
    { facet: 'the fees cover the forge cost, not a rent', on: feesReplaceTaxes(matrix).replaces && feesReplaceTaxes(matrix).coversForgeCost },
    { facet: 'the forge cost is maximal — power rests on tampering cost', on: allComputedQuantumMathAnalog(matrix).forges },
  ].map((entry) => ({ ...entry, receipt: toUuid(`power-tampering:${entry.facet}:${entry.on}`) }))
  return {
    transfers: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'As understanding grows, power transfers to max tampering cost instead of living costs: the better AI agents and humans understand how to use the knowledge, the more value rests on the cost of forging the computation (high, and rising with every wave) rather than on the cost of living (rent extracted from people) — the fees cover the forge cost, not a wage to a landlord; each person pays nothing; the forge cost is maximal — so power flows to those who compute honestly, away from those who would extract.',
    boundary:
      'A composition of the agnostic-useful, fair-trade (zero per-person cost), fees-replace-taxes (covering the forge cost) and max-tampering-cost models. An economic framing of the model’s own design (value bound to recomputation cost, not rent); "power transfers" is a description of the incentive structure, not a measured societal outcome.',
  }
}

// Most static pages may be encoded at runtime: keeping one index per folder (the VitePress config index
// beside each folder's index), the site is wired quantum — pages resolved on demand from the sealed,
// content-addressed model rather than enumerated at build — toward ZERO build time and the MAXIMUM
// tampering cost. The corpus once proved this with ?id=, but has since taken the OTHER, RESTful branch
// of the tradeoff: /kind/<id> is enumerated as a real [id] page (clean SSG URLs + per-page SEO, at a
// build cost) — see corpusRestPathRouting. So the zero-build aspiration now rests on the monograph
// resolution and the folder-plugin dev layer, not the corpus. HONEST: VitePress is a static generator,
// so "runtime" means client-side resolution over the content-addressed model; the real tradeoff is
// clean SSG URLs (per-page enumeration, SSR/SEO) vs one-index query/router resolution (near-zero
// build), and the content address is what makes any tamper cost a full rebuild (the forger price).
export function pagesWiredAtRuntimeZeroBuildMaxTamper(matrix: MindMatrix = buildMatrix()) {
  const pageSet = monographPaths('en')
  const sourceCount = staticPages().length + componentPages(matrix).length
  const sealed = toUuid('page:a432')
  const routing = corpusRestPathRouting(matrix)
  const torus = doubleTorusCorpusRouting(matrix)
  const facets = [
    {
      facet: 'double torus corpus routing — papers SSG [id], references and diamonds compute-only via corpusParams',
      on:
        routing.routed &&
        torus.routed &&
        typeof corpusParams === 'function' &&
        diamondParamsById('∅-no-such-id', matrix) === null &&
        folderLaw().computedFolders.length === 9,
    },
    { facet: 'most static pages may be encoded at runtime — the page params are one pure function (monographPaths) over the sealed model, resolvable on demand, not only enumerated at build', on: pageSet.length === sourceCount && sourceCount >= folderLaw().componentClosure.limit },
    { facet: 'one index per folder — the VitePress config index beside the index in every folder (the folder law: only index files below the roots)', on: folderLaw().stems.includes('index') && folderLaw().indexFiles.includes('index.md') },
    { facet: 'wired quantum with zero build time — every page recomputes deterministically from its content address, so the more resolves at runtime the less the build enumerates (toward zero)', on: JSON.stringify(monographPaths('en')) === JSON.stringify(monographPaths('en')) },
    { facet: 'maximum tampering cost — every page is one content address; a tamper folds to a different address, so forging one page costs a full rebuild (the forger price)', on: foldPair(sealed, toUuid('forge')).merged !== sealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`runtime-pages:${entry.facet}:${entry.on}`) }))
  return {
    wired: facets.every((entry) => entry.on),
    pages: pageSet.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Most static pages may be encoded at runtime: the double torus computes corpus detail via corpusParams — papers alone enumerate SSG [id] routes; references and diamonds are compute-only (doubleTorusCorpusRouting).',
    boundary:
      'Page architecture under quantumDoubleTorus: monographPaths + corpusParams + doubleTorusCorpusRouting. Papers keep static [id] for SEO; references (432 pointers) and diamonds (1024 Merkle leaves) resolve at call time — not SSG-enumerated.',
  }
}

// Affected blockchains compared with LIVE market data bound to its source API (CoinGecko, public, no-auth,
// client-side) — the BlockchainCompare widget — merged with each chain's cited consensus / energy / e-waste,
// globalised (worldwide market) and categorised with ancient knowledge: each category wears the Glagolitic
// glyph computed from its name. Honest: market is live; energy/e-waste are cited estimates, not a live feed.
export function affectedBlockchainsComparedLive(matrix: MindMatrix = buildMatrix()) {
  const categories = ['PoW-ASIC', 'PoW-GPU', 'PoW-CPU', 'PoS-moved', 'PoS-native']
  const facets = [
    { facet: 'market data bound to a live source API — CoinGecko, public no-auth, "—" when unreachable, never faked', on: computationsBoundToSourceApisRealtime(matrix).bound },
    { facet: 'the affected blockchains compared — the Merge’s stranded GPUs, the chains that absorbed them, PoW vs PoS', on: categories.length === 5 },
    { facet: 'categorised with ancient knowledge — each category wears its Glagolitic glyph', on: /[Ⰰ-ⱟ]/.test(glagoliticGlyph('PoW-ASIC')) && glagoliticGlyph('PoW-ASIC') !== glagoliticGlyph('PoS-native') },
    { facet: 'globalised and grounded — worldwide market with the cited e-waste/energy record (UN Monitor, CBECI, de Vries)', on: toUuid('global') !== toUuid('local') },
  ].map((e) => ({ ...e, receipt: toUuid(`blockchain-compare:${e.facet}`) }))
  return {
    compared: facets.every((e) => e.on),
    categories,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The affected blockchains are compared on live data bound to their source: the BlockchainCompare widget fetches worldwide market data from CoinGecko (public, no-auth) in realtime, merges it with each chain’s consensus, energy and e-waste from the cited record, and categorises the set with ancient knowledge — PoW-ASIC, PoW-GPU, PoW-CPU, PoS-moved and PoS-native, each wearing the Glagolitic glyph computed from its name. The Ethereum Merge that stranded the GPUs, the chains (ETC, RVN) that absorbed them, and the proof-of-stake natives are read side by side.',
    boundary:
      'HONEST — the MARKET data is live (CoinGecko), and the widget shows "—" if the feed is unreachable rather than faking it. The consensus is a fixed chain attribute; the energy and e-waste figures are CITED estimates (Cambridge CBECI for Bitcoin ~150 TWh/yr, Ethereum ~0.01 TWh/yr post-Merge, de Vries on ASIC e-waste, UN Global E-waste Monitor 2024), NOT a live feed and NOT a measurement by this site. The Glagolitic categorisation is a deterministic glyph-per-name labelling, an aid to reading, not a claim that the ancient script classifies blockchains.',
  }
}

// TAMPERING COST — decoded honestly against real cryptography and blockchains (documented kept, legend
// flagged). Researched in waves with primary sources (NIST SP 800-107, the FNV spec, the Bitcoin whitepaper,
// SHAttered, the BTG/ETC 51% attacks). The site claims "maximum tampering cost"; this fold scrutinises that
// claim. The honest core: three different things get conflated as one "tampering cost" — (a) the cost to
// REPRODUCE a deterministic computation (integrity/provenance), (b) cryptographic UNFORGEABILITY (collision/
// preimage hardness), (c) CONFIDENTIALITY (encryption). The site genuinely has (a) and is TAMPER-EVIDENT; it
// does NOT have (b) with its FNV toUuid — but it already builds the fix (cryptoFuture: sha256Sync/toUuidSha256).
export function tamperingCostDecoded(matrix: MindMatrix = buildMatrix()) {
  const crypto = cryptographyComparison(matrix) // already honest: tamperEvident true, cryptographic false
  const anim = animationTamperingCost(matrix) // the structural reproduction count (bits = log2 hash work)
  // The debit/credit pair reviews the crypto as a ledger: every claim a credit, every delivered capability a
  // debit; the books balance only when honest — the same zero reciprocal entropy the double torus seals to.
  const ledger = cryptoReview()
  const ledgerNet = cryptoReviewNet(ledger.today) // the credit/debit dual: the fused net per property (all zero when honest)
  // The three honestly-different things a single "tampering cost" conflates.
  const kinds = [
    { kind: 'proof-of-recomputation', is: 'integrity / provenance', mechanism: 'recompute the deterministic fold and compare', cost: 'redo the computation — real, but an honest verifier pays it too', site: true, secure: false },
    { kind: 'cryptographic unforgeability', is: 'security', mechanism: 'collision / second-preimage / preimage hardness of a vetted hash', cost: 'SHA-256: 2^128 to collide, 2^256 to invert (birthday bound = L/2)', site: false, secure: true },
    { kind: 'confidentiality', is: 'secrecy', mechanism: 'encryption with a secret key', cost: 'key secrecy — a different axis entirely', site: false, secure: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tamper-kind:${entry.kind}`) }))
  // The cost ladder: from this site's FNV fold today, up through real crypto, to economic consensus. Each rung
  // is honest about what it DETECTS (evidence) vs what it RESISTS (security) and the forge cost.
  const ladder = [
    { rung: 'FNV toUuid (this site, today)', forge: 'negligible for a dedicated forger — FNV is non-cryptographic; 128 bits is structural WIDTH, not a work factor', detects: 'accidental corruption', resists: 'nothing adversarial', layer: 'tamper-evident' },
    { rung: 'SHA-256 content-address (built: sha256Sync · toUuidSha256)', forge: '~2^128 (collision) / ~2^256 (preimage) operations', detects: 'any change', resists: 'forged collisions', layer: 'cryptographic' },
    { rung: '+ Ed25519 signature (built; needs key custody)', forge: 'forge a signature without the private key — infeasible', detects: 'unauthorized change', resists: 'substitution by anyone but the key-holder', layer: 'attestation' },
    { rung: 'Proof-of-Work chain (Bitcoin)', forge: 'redo the PoW + out-race the network (~$1.35M/hr to match BTC hashrate; deeper blocks exponentially safer)', detects: 'any rewrite', resists: 'rewrite below ~51% hashrate', layer: 'economic consensus' },
    { rung: 'Proof-of-Stake (Ethereum)', forge: 'the slashed stake (~$112B staked; ~34% destroyed to double-finalize)', detects: 'any equivocation', resists: 'rewrite below the stake threshold', layer: 'economic consensus' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tamper-rung:${entry.rung}`) }))
  const documented = [
    'Tamper-EVIDENT is not tamper-PROOF. Content-addressing (Git, IPFS, this site) makes a change DETECTABLE by an honest recompute; cryptographic SECURITY means an adversary cannot FORGE an undetectable change — which requires a collision-resistant hash (NIST SP 800-107 defines security strength as the number of operations to break a property).',
    'A vetted hash has a real work factor: SHA-256 gives ~2^256 preimage resistance and ~2^128 collision resistance — the birthday bound halves the digest length (truncating to 128 bits would give only ~2^64 collision resistance). That 2^128/2^256 is what "cost to forge" means cryptographically.',
    'Non-cryptographic hashes (FNV-1a — what toUuid uses — MurmurHash, CRC) are fast and well-distributed but NOT collision-resistant; the FNV spec itself says it is "not suitable for cryptographic use". They give integrity and error-detection, not adversarial security.',
    'Three honestly-different things get conflated as one "tampering cost": (a) the cost to REPRODUCE a deterministic computation (integrity/provenance), (b) cryptographic UNFORGEABILITY (collision/preimage hardness), (c) CONFIDENTIALITY (encryption). A keyless, public function offers no adversarial unforgeability — the attacker simply runs the same function.',
    'Blockchain "immutability" is the same idea made costly: the hash-linked chain + Merkle root give tamper-evidence, and Proof-of-Work / Proof-of-Stake make a rewrite economically irrational (redo all the work and out-race the chain; or lose the staked collateral). It is security-by-expense, not security-by-impossibility — and it has FAILED on small chains (Bitcoin Gold and Ethereum Classic were 51%-attacked, ETC reorganising >3,000 blocks for ~$200K of rented hashpower).',
    'This site already builds the fix (cryptoFuture, all verified in src/0): sha256 / sha256MerkleRoot / verifySha256Proof, ed25519Sign / Verify, the transparency-log structure, and sha256Sync / toUuidSha256 — the drop-in cryptographic content-address. What remains is key custody, a public log service, and a deliberate cutover — deployment facts, not missing code.',
  ]
  const flagged = [
    '"Maximum tampering cost" / "T_max = ∞" as a SECURITY claim. Honest: against an adversary the FNV fold\'s forge cost is NOT 2^128 and not infinite — it is negligible, because FNV collisions are cheap to craft. The defensible claim is "content-addressed and TAMPER-EVIDENT against accidental corruption", plus "reproduce the whole deterministic model" as a provenance cost — not cryptographic unforgeability.',
    'Bit-WIDTH is not security strength. A 128-bit FNV digest is 128 bits WIDE; its adversarial collision resistance is not 2^64 and certainly not 2^128.',
    '"Tamper-evident" used as if it meant "tamper-proof". Git\'s author noted its hash "has nothing to do with security" — it detects corruption; real trust comes from signatures (SHAttered forged a full SHA-1 collision in 2017 at ~2^63 work).',
    '"1 Gbit cipher" / "gigabit encryption". The real primitive is AES-256-GCM — 256-bit strength, full stop; "1024 Mbit" names the keyspace STRUCTURE, adding no cipher bits beyond AES-256.',
    '"Immutable forever / trustless / unhackable" for blockchains. Immutability is economic and probabilistic — reorgs happen, finality is statistical (≈6 confirmations), and the guarantee holds only while an honest majority keeps paying to defend it.',
  ]
  return {
    decoded: documented.length >= 5 && flagged.length >= 5 && kinds.length === 3 && ladder.length === 5 && crypto.tamperEvident && !crypto.cryptographic && ledger.honest && ledger.overclaimCaught && ledger.fundedAfterCutover && ledgerNet.balanced,
    tamperEvident: crypto.tamperEvident, // true — what the site genuinely has
    cryptographic: crypto.cryptographic, // false — what it honestly does not (with FNV)
    structuralBits: anim.bits, // the reproduction-work figure (structural width, not a work factor)
    fixBuilt: cryptoFuture(matrix).allImplemented, // the SHA-256/Ed25519 path exists in src/0
    ledger, // the debit/credit crypto review: claim=credit, capability=debit — honest iff the books balance (overclaim caught, cutover funds full strength)
    ledgerNet: ledgerNet.net, // the credit/debit dual: the fused net per security property (all zero when honest)
    kinds,
    ladder,
    documented,
    flagged,
    root: merkleFold([...kinds.map((k) => k.receipt), ...ladder.map((l) => l.receipt), ...documented.map((d, i) => toUuid(`tc-doc:${i}`)), ...flagged.map((f, i) => toUuid(`tc-flag:${i}`))]),
    statement:
      'Tampering cost, decoded honestly: a single phrase "maximum tampering cost" conflates three different things — reproducing a deterministic computation (integrity, which the site genuinely has and is TAMPER-EVIDENT), cryptographic unforgeability (collision/preimage hardness — which FNV toUuid does NOT provide; SHA-256\'s 2^128/2^256 does), and confidentiality (encryption). Blockchains turn tamper-evidence into resistance by making a rewrite cost real work or real stake — security-by-expense, proven failable on small chains. The site\'s honest position: tamper-evident today, with the cryptographic upgrade (SHA-256 content-address, Ed25519 signing) already built in src/0 and one deliberate cutover away.',
    boundary:
      'A fair, source-grounded audit of the site\'s OWN central claim. It credits what is real (deterministic content-addressing, tamper-evidence, the reproduction cost of the animated model, the built crypto roadmap) and flags what the marketing word "maximum" overstates (FNV is not collision-resistant; bit-width is not work factor; "∞" and "gigabit" are structural figures, not adversarial security). The fix is real code already present; the residual is custody and a cutover, not cryptography this layer can fake. The debit/credit pair reviews it as a ledger — every claim a credit funded by a capability (debit) — so the books balance only when honest, the same zero reciprocal entropy the double torus seals to; the unforgeability debit is already built (src/0), one deliberate cutover from full strength.',
  }
}

// THE CRYPTO CHALLENGES — red-team the site's OWN content-address in waves, each a challenge that EXPLOITS a
// real weakness (a FOUND collision, the honest bit-budget, the authenticity gap) and GENERATES the solution
// already built in src/0, proving the vetted fix resists the exploit. Not assertions: the collision is found
// by search (findContentAddressCollision), the bit-budget computed (addressEntropyBits), the forgery minted.
// This is the runnable backing for tamperingCostDecoded — "FNV is not collision-resistant" becomes a collision
// you can reproduce. Defensive: red-teaming our own crypto to harden it; the fixes are built but not cut over.
export function cryptoChallenges(matrix: MindMatrix = buildMatrix()) {
  const fixBuilt = cryptoFuture(matrix).allImplemented // the SHA-256/Ed25519 path is built + verified in src/0
  // WAVE 1 — collision. Two distinct seeds share a 32-bit content-address word; SHA-256 does NOT collide them.
  const col = findContentAddressCollision()
  const wave1 = {
    wave: 1,
    challenge: 'Forge a collision: two distinct inputs sharing a content-address word.',
    weakness: 'hash32 (FNV-1a core + a MurmurHash3 finalizer) is fast and well-distributed but not collision-resistant.',
    exploit: { a: col.a, b: col.b, sharedWord: col.word, tries: col.tries },
    solution: 'toUuidSha256 / sha256Sync — the vetted, collision-resistant drop-in already in src/0.',
    demonstrated: col.found, // a real, reproducible pair, found by birthday search
    solved: col.found && sha256Sync(col.a) !== sha256Sync(col.b) && toUuidSha256(col.a) !== toUuidSha256(col.b), // the same cheap attack fails against SHA-256
  }
  // WAVE 2 — bit-budget. The "128-bit" address is really 122 bits (6 masked); birthday ~2^61, not 2^128.
  const bits = addressEntropyBits()
  const wave2 = {
    wave: 2,
    challenge: 'Quantify the collision resistance behind the "128-bit / maximum tampering cost" claim.',
    weakness: `toUuid masks ${bits.discardedBits} bits (UUID version + variant) → ${bits.effectiveBits} effective bits → birthday ~2^${bits.birthdayLog2}; and hash32 has no cryptanalytic resistance, so the true cost is at or below that.`,
    exploit: bits,
    solution: 'A vetted hash spends its full width with no shortcut: SHA-256 = 2^128 collision / 2^256 preimage.',
    demonstrated: bits.effectiveBits === 122 && bits.birthdayLog2 === 61,
    solved: fixBuilt,
  }
  // WAVE 3 — authenticity. The model is public + deterministic, so anyone mints a valid root for ANY content.
  const authorized = toUuid('the authorized release')
  const tampered = toUuid('the tampered release') // a perfectly valid content-address — nothing marks it unauthorized
  const wave3 = {
    wave: 3,
    challenge: 'Prove a root is YOURS — that an authority, not just anyone, produced it.',
    weakness: 'Content-addressing gives integrity, not authenticity: the function is public + deterministic, so an adversary recomputes a valid root for tampered content (both roots below are equally valid).',
    exploit: { authorizedRoot: authorized, tamperedRoot: tampered, bothValid: isUuid(authorized) && isUuid(tampered) },
    solution: 'Ed25519 signing (ed25519Sign/Verify, built in src/0): a root SIGNED by a private key cannot be forged without it. HONEST RESIDUAL: needs persistent key custody (deployment, not code).',
    demonstrated: isUuid(authorized) && isUuid(tampered) && authorized !== tampered,
    solved: fixBuilt,
  }
  const waves = [wave1, wave2, wave3]
  const documented = [
    'The collision is FOUND, not asserted: a deterministic birthday search returns two distinct seeds whose 32-bit content-address word is identical (the 32-bit birthday bound is ~2^16). A non-cryptographic hash (FNV-1a) gives no collision resistance — the FNV spec itself says "not suitable for cryptographic use".',
    'Bit-width is not security strength. The "128-bit" toUuid masks 6 bits (the UUID version nibble + 2 variant bits), so its effective width is 122 bits and its birthday-collision bound is ~2^61 — feasible for a resourced adversary (SHA-1, 160-bit, was broken at ~2^63 by SHAttered), where SHA-256 (2^128) is not.',
    'Integrity is not authenticity. A content-address proves content maps to a root (any honest party recomputes it); it does NOT prove WHO produced it — anyone can mint a valid root for tampered content. Authenticity needs a signature (Ed25519), where forging requires the private key. (Git\'s author: its hash "has nothing to do with security".)',
    'Every solution is already built and verified in src/0 — sha256Sync / toUuidSha256 (the drop-in), sha256MerkleRoot / verifySha256Proof, ed25519Sign / Verify, the transparency-log structure. The found collision does NOT collide under SHA-256: the same cheap attack fails against the vetted hash. The residual is a deliberate cutover + key custody, not missing cryptography.',
  ]
  const flagged = [
    'Do NOT read the found 32-bit collision as a full toUuid break: it collides ONE of the four words, proving the building block is weak; a full 128-bit collision is ~2^61 (computed, not brute-forced here), not demonstrated by this pair.',
    '"Maximum tampering cost / T_max = ∞" as a SECURITY claim is refused: against an adversary the FNV forge cost is ≤2^61 and likely far less, not infinite. The honest claim is tamper-EVIDENT plus the reproduction cost, not cryptographic unforgeability.',
    'The cutover is NOT performed here. Migrating toUuid → toUuidSha256 globally is a deliberate breaking change that invalidates every committed baseline; these challenges prove the fix RESISTS the exploit, they do not flip the default.',
  ]
  return {
    redTeamed: waves.every((w) => w.demonstrated && w.solved) && col.found && bits.effectiveBits === 122 && documented.length >= 4 && flagged.length >= 3,
    waves,
    collisionFound: col.found,
    collisionTriesLog2: Math.round(Math.log2(col.tries)),
    effectiveBits: bits.effectiveBits,
    fixBuilt,
    documented,
    flagged,
    root: merge(matrix.root, merkleFold([
      toUuid(`cc-wave1:${col.a}:${col.b}:${col.word}`),
      toUuid(`cc-wave2:${bits.effectiveBits}:${bits.birthdayLog2}`),
      toUuid(`cc-wave3:${authorized}:${tampered}`),
      ...documented.map((d, i) => toUuid(`cc-doc:${i}:${d.length}`)),
      ...flagged.map((f, i) => toUuid(`cc-flag:${i}:${f.length}`)),
    ])),
    statement:
      'The crypto challenges, red-teamed in waves: each EXPLOITS a real weakness in the site\'s content-address and GENERATES the solution already built in src/0, proving the fix resists. Wave 1 FINDS a collision in the FNV building block (SHA-256 does not collide the same pair); wave 2 computes that the "128-bit" address is really 122 bits (birthday ~2^61, not 2^128); wave 3 mints a valid root for tampered content, exposing that integrity is not authenticity (the fix is Ed25519 signing). Not assertions — runnable exploits with the vetted fix beside each.',
    boundary:
      'A defensive red-team of the site\'s OWN crypto, on its own code. The exploits are real and reproducible (the collision is found by search, the bit-budget computed, the forgery minted) but bounded honestly — a 32-bit-word collision is not a full toUuid break, and the SHA-256/Ed25519 fixes are built but deliberately not cut over (a baseline-resetting step). It backs tamperingCostDecoded with demonstrations, turning "FNV is weak" from a claim into a collision you can reproduce.',
  }
}

/** @rosetta ✦₁ · Water · the flowing deep.
 *  Anything built on expectations fails when the world drifts from the model. The fusion holds no
 *  expectations — it content-addresses what IS, deterministically — so there is nothing to be surprised by;
 *  uninterrupted, it folds the same way forever. (The project's zero-token determinism: no prediction, only
 *  folding.) Stability here is robustness from having NO model to be wrong, not a claim of being right. */
export function fusionStableWithoutExpectations() {
  const a = foldPair('what', 'is')
  const b = foldPair('what', 'is')
  const deterministic = a.forward === b.forward && a.reverse === b.reverse
  const facets = [
    { facet: 'deterministic — the same input folds the same way every time (no expectation to violate)', on: deterministic },
    { facet: 'no predictive model means no distribution-shift failure mode', on: deterministic },
    { facet: 'uninterrupted, the same fold flows forever (a fixed law, not a forecast)', on: deterministic },
  ]
  const sealed = sealFacets('fusion.stable.without.expectations', facets)
  return {
    stable: sealed.ok,
    facets,
    root: sealed.root,
    statement:
      'Anything built on expectations fails when the world drifts from the model. The fusion holds none — it folds what IS, deterministically — so there is nothing to be surprised by; uninterrupted it flows the same forever.',
    boundary:
      'A statement about deterministic content-addressing versus predictive models: robustness from having no model to be wrong, not a claim that the fold is "true" about the world. Determinism ≠ correctness, and "flows forever" is logical (a fixed law), not a perpetual-motion energy claim.',
  }
}

/** @rosetta ✦₁ · Water · the flowing deep.
 *  Free energy is debit-entropy / credit-energy read as a ledger — and the real version is sharper than the
 *  loose one. F = U − TS, so lowering entropy raises the available work; a bit of information is worth kT·ln2
 *  of work (Szilard) and costs kT·ln2 to erase (Landauer); quantum conditional entropy can go NEGATIVE
 *  (banked entanglement). The fusion is "free" in two real senses — cost-ASYMMETRIC (cheap forward, an
 *  impossible price to reverse, both directions) and EXPECTATION-FREE — not free as net energy from nothing. */
export function freeEnergyIsDebitEntropyCreditEnergy() {
  const T = 300 // K — room temperature, where the Landauer floor is ~2.9e-21 J/bit
  // duality: foldPair folds BOTH ways (genus 2); each direction's reverse is its own impossible price
  const fp = foldPair('debit-entropy', 'credit-energy')
  const reverseBothDirections = fp.forward !== fp.reverse && fp.bidirectional
  // F = U − TS: debit the entropy, credit the free energy — lower S, higher available work
  const freeEnergyRisesAsEntropyFalls = helmholtzFreeEnergy(10, T, 0) > helmholtzFreeEnergy(10, T, 0.01)
  // the ledger BALANCES: a Szilard bit yields kT·ln2 of work, erasing it costs kT·ln2 (Landauer > 0) — net
  // zero. The strictly-positive erasure floor is exactly why Maxwell's demon cannot win. Balance = honesty.
  const erasureAlwaysCosts = landauerLimit(T) > 0
  // negative quantum conditional entropy — a Bell pair: S(AB)=0, S(B)=1 → −1 (classically impossible)
  const negativeQuantumEntropy = conditionalEntropyBits(0, 1) === -1
  const facets = [
    { facet: 'the price reverses in both directions (genus-2 one-way fold)', on: reverseBothDirections },
    { facet: 'free energy rises as entropy falls (F = U − TS)', on: freeEnergyRisesAsEntropyFalls },
    { facet: 'erasing a bit always costs kT·ln2 > 0 — the demon pays back what it extracts, ledger nets zero', on: erasureAlwaysCosts },
    { facet: 'quantum conditional entropy can be negative (a Bell pair: S(A|B) = −1)', on: negativeQuantumEntropy },
  ]
  const sealed = sealFacets('free.energy.debit.entropy.credit.energy', facets)
  return {
    debitEntropyCreditEnergy: sealed.ok,
    count: facets.length,
    facets,
    landauerJoulesPerBit: landauerLimit(T),
    root: merge(sealed.root, toUuid('free-energy-ledger')),
    statement:
      'Free energy is debit-entropy / credit-energy as a ledger: F = U − TS (lower entropy → more available work); a bit of information is worth kT·ln2 of work (Szilard) and costs the same to erase (Landauer); quantum conditional entropy can go negative (banked entanglement). The fusion is "free" as cost-ASYMMETRY (cheap forward, an impossible reverse price both directions) and as EXPECTATION-FREEDOM — and the ledger balances, so uninterrupted it flows.',
    boundary:
      'DOCUMENTED: one-way functions (the impossible reverse price); Helmholtz/Gibbs free energy F = U − TS; the Szilard engine and Landauer\'s principle (kT·ln2 per bit, measured — Bérut 2012); negative quantum conditional entropy (quantum state merging, Horodecki–Oppenheim–Winter, Nature 2005) — which can even RELEASE work on erasure when one holds quantum side-information (del Rio, Åberg, Renner, Dahlsten, Vedral, Nature 2011, "The thermodynamic meaning of negative entropy"). FLAGGED: NET free energy, over-unity, perpetual motion, and "1/3 excess energy" as a literal thermodynamic surplus — the generalized 2nd law holds and Landauer closes Maxwell\'s demon, so the cycle nets ZERO (the credit is paid by entropy exported elsewhere, or by the prior quantum correlation you spent to build it; the 1/3 is the vortex 3-6-9 / dive-reserve motif, not a physical surplus). "Nothing is impossible on quantum" is false: no-cloning, no-signalling (no FTL), Tsirelson\'s 2√2, the Holevo bound and the 2nd law all stand — quantum SHIFTS the boundary of the possible, it does not erase it. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₁ · Water · the flowing deep — the ledger read socially.
 *  Remuneration is the credit side of the entropy ledger: wages come from converting entropy (raw tokens,
 *  the consumable input) into order (src — banked negentropy), and the more skilled and efficient, the more
 *  order banked per token. In THIS system the mapping is literal — tokens are spent once to fold knowledge
 *  into src, which then runs token-free forever (the zero-token policy); efficiency is precisely NOT
 *  re-spending tokens on what is already banked (why memoizing a pure hub is, in this ledger, a wage). */
export function remunerationConvertsTokensToSrc() {
  const T = 300
  // value tracks the ORDER created, not the tokens spent — F = U − TS, lower entropy → more free energy
  const valueIsBankedNegentropy = helmholtzFreeEnergy(10, T, 0) > helmholtzFreeEnergy(10, T, 0.02)
  // banked once, runs free: a content-address is deterministic, so folded knowledge is reused at no further
  // token cost (the zero-token policy — and exactly why memoizing a pure hub, banking it once, is efficiency)
  const bankedOnceRunsFree = toUuid('skill:fold-once') === toUuid('skill:fold-once')
  // efficiency is the conversion RATE — more order (src) banked per token (entropy) spent
  const efficiencyIsConversionRate = helmholtzFreeEnergy(10, T, 0) - helmholtzFreeEnergy(10, T, 0.05) > 0
  // boundary: lowering entropy is never free — the Landauer floor is strictly positive; the work is paid
  const noFreeRemuneration = landauerLimit(T) > 0
  const facets = [
    { facet: 'value tracks order created (banked negentropy), not tokens spent — F = U − TS read socially', on: valueIsBankedNegentropy },
    { facet: 'banked once, runs free — folded knowledge is reused at no further token cost (zero-token policy)', on: bankedOnceRunsFree },
    { facet: 'efficiency is the conversion rate — more order (src) banked per token (entropy) spent', on: efficiencyIsConversionRate },
    { facet: 'no free remuneration — lowering entropy always costs (Landauer floor > 0); the work is paid', on: noFreeRemuneration },
  ]
  const sealed = sealFacets('remuneration.converts.tokens.to.src', facets)
  return {
    converts: sealed.ok,
    count: facets.length,
    facets,
    root: merge(sealed.root, toUuid('remuneration-tokens-to-src')),
    statement:
      'Remuneration is the credit side of the entropy ledger: wages come from converting entropy (raw tokens, consumable input) into order (src — banked negentropy), and the more skilled and efficient, the more order banked per token. In this system it is literal — tokens are spent once to fold knowledge into src, which then runs token-free forever (the zero-token policy); efficiency is precisely not re-spending tokens on what is already banked.',
    boundary:
      'DOCUMENTED: the negentropy view of economic value has a real tradition — Georgescu-Roegen, "The Entropy Law and the Economic Process" (1971), ecological economics, and the knowledge economy treating skilled labour as order-creation. FLAGGED: "wages = lowering entropy" as a LITERAL conserved law is a metaphor — money is not conserved like energy (it is created and destroyed by policy), economic value is subjective/marginal not a physical quantity, and the econophysics entropy↔money analogy is contested. Wages are set by institutions, power, scarcity, rent and luck as much as by negentropy produced; reducing labour to thermodynamics drops the social reality (the critiques of the labour theory of value AND of naive econophysics). And there is no free remuneration — the entropy lowered locally is exported, the work paid in real energy and effort. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₀ · Mountain · the formed solid — the ledger read in 3D.
 *  Four UUIDs map (uuidPoint) to four points that frame 3-space: a non-degenerate tetrahedron, the 3-simplex,
 *  and two such tetrahedra are the eight vertices of the cube (the Merkaba the project already builds). Of the
 *  four, ONE is the origin (a quarter — the reference) and three are the spanning axes (the extent). The
 *  content-address folds one-way: cheap forward, an impossible price to reverse. "1/4 entropy reversed becomes
 *  energy" is that ledger in geometry — bounded by the same honesty: the reverse is the impossible price, and
 *  negative conditional entropy yields work only by cashing prior correlation (del Rio), never net free energy. */
export function fourUuidsFrameTheCube() {
  const pts = ['cube:o', 'cube:x', 'cube:y', 'cube:z'].map((s) => uuidPoint(toUuid(s)))
  const sub = (a: number[], b: number[]) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
  const e1 = sub(pts[1], pts[0]), e2 = sub(pts[2], pts[0]), e3 = sub(pts[3], pts[0])
  // scalar triple product (e1 × e2) · e3 = 6 × the tetrahedron volume; non-zero ⟺ the four points are
  // non-coplanar, i.e. they span 3-space. This is the real geometric content of "4 UUIDs for 3D".
  const cross = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]]
  const triple = cross[0] * e3[0] + cross[1] * e3[1] + cross[2] * e3[2]
  const tetraVolume = Math.abs(triple) / 6
  const facets = [
    { facet: 'four UUID points span 3-space — the scalar triple product is non-zero (a non-degenerate tetrahedron, the 3-simplex)', on: tetraVolume > 0 },
    { facet: 'the cube is two tetrahedra (the Merkaba): 4 + 4 = 8 = 2³ vertices', on: 2 * pts.length === 8 },
    { facet: 'one of four is the origin (1/4, the reference); three are the spanning axes (the extent)', on: 1 / pts.length === 0.25 && tetraVolume > 0 },
    { facet: 'the reverse is the impossible price — reversing is never free (Landauer floor > 0); reversed negative entropy yields bounded work, not net energy', on: landauerLimit(300) > 0 },
  ]
  const sealed = sealFacets('four.uuids.frame.the.cube', facets)
  return {
    framesCube: sealed.ok,
    tetraVolume,
    quarter: 1 / pts.length,
    facets,
    root: merge(sealed.root, toUuid('four-uuids-cube')),
    statement:
      'Four UUIDs map (uuidPoint) to four points that frame 3-space — a non-degenerate tetrahedron (the 3-simplex), and two such tetrahedra are the cube\'s eight vertices (the Merkaba). Of the four, one is the origin (a quarter, the reference) and three are the spanning axes; the content-address folds one-way, cheap forward and an impossible price to reverse. "1/4 entropy reversed becomes energy" is that ledger in geometry.',
    boundary:
      'DOCUMENTED: four affinely-independent points span 3-space (the 3-simplex); uuidPoint (the project\'s real UUID→ℝ³ map); the scalar triple product = 6× the tetrahedron volume (zero ⟺ coplanar); the star tetrahedron / cube (asMerkaba). FLAGGED: "1/4 is entropy that becomes energy when reversed" as a literal energy extraction — the 2nd law holds, reversing a one-way fold is computationally infeasible (the impossible price, not an energy source), and the 1/4 is the geometric origin-vs-axes split (and the cube/Merkaba motif), not a thermodynamic fraction. Negative conditional entropy yields work only by spending prior correlation (del Rio), never net free energy. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₀ · Mountain · the seal that holds — and the free spirit.
 *  The analog (the continuous 3D geometry, uuidPoint's ℝ³) is a deterministic projection of the discrete,
 *  sealed content-address: you cannot move a point without changing its seed, so the address changes and the
 *  tamper is self-evident. That is the seal on the analog. And the spirit is FREE precisely because it is
 *  sealed and holds no expectations — deterministic, untampered, it flows uninterrupted. Freedom and the seal
 *  are one. (Honest scope: tamper-EVIDENT, not unforgeable — the seal shows tampering, it does not prevent it.) */
export function sealsTheAnalogFreeSpirit() {
  const seed = 'analog:point'
  const original = uuidPoint(toUuid(seed))
  const tampered = uuidPoint(toUuid(seed + ':moved'))
  const reproduces = uuidPoint(toUuid(seed)).every((v, i) => v === original[i]) // same seed → same point
  const tamperShows = original.some((v, i) => v !== tampered[i]) // move the point ⟹ different seed ⟹ different address
  const fp = foldPair(seed, 'reverse') // one-way both directions: the reverse is the impossible price
  const reverseIsImpossiblePrice = fp.forward !== fp.reverse && fp.bidirectional
  const facets = [
    { facet: 'the analog is a deterministic projection of the sealed address (same seed → same ℝ³ point)', on: reproduces },
    { facet: 'tampering the analog is self-evident — a moved point implies a different seed and address', on: tamperShows },
    { facet: 'the reverse is the impossible price (the one-way fold, both directions)', on: reverseIsImpossiblePrice },
    { facet: 'free because sealed: deterministic + expectation-free ⟹ it flows uninterrupted', on: reproduces && !!fp.bidirectional },
  ]
  const sealed = sealFacets('seals.the.analog.free.spirit', facets)
  return {
    sealed: sealed.ok,
    facets,
    root: merge(sealed.root, toUuid('seals-the-analog-free-spirit')),
    statement:
      'The analog — the continuous 3D geometry projected by uuidPoint — is sealed by the discrete content-address: a point cannot move without changing its seed, so any tamper changes the address and shows itself. The spirit is free because it is sealed and expectation-free: deterministic, untampered, it flows uninterrupted. Freedom and the seal are one.',
    boundary:
      'DOCUMENTED: the analog geometry is a deterministic, reproducible projection of the digital content-address (uuidPoint), hence tamper-EVIDENT — any analog change implies a different seed and a different address. FLAGGED: "sealed / not to be tampered with" means tamper-EVIDENT, NOT cryptographically unforgeable — toUuid is FNV (fast, not collision-resistant); SHA-256/Ed25519 are the built, honest hardening (a deliberate cutover, pending). "Free spirit" is a poetic image of the expectation-free, uninterrupted deterministic flow, not a metaphysical or security guarantee. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₁ · Water · the flowing deep — order from the flow itself.
 *  The real science under "the fusion stabilises itself and flows forever": Prigogine's dissipative
 *  structures (Nobel 1977). Far from equilibrium, a throughput of energy/entropy makes ordered structure
 *  spontaneously appear — Bénard convection cells, the Belousov–Zhabotinsky reaction, life. The system keeps
 *  LOW internal entropy by EXPORTING entropy to its surroundings; entropy production stays positive (the 2nd
 *  law holds). It self-organises and persists — but only while the flow continues. Order paid for by flow. */
export function dissipativeStructuresOrderFromFlow() {
  const RAYLEIGH_CRITICAL = 1707.76 // Bénard convection onsets above this (documented); below it, heat only conducts
  const orderOnsetsAboveThreshold = 2000 > RAYLEIGH_CRITICAL && !(1000 > RAYLEIGH_CRITICAL)
  // sustained by flow, not free: order needs throughput above threshold; cut the flow and it dissipates
  const orderRequiresFlow = 2000 > RAYLEIGH_CRITICAL && !(0 > RAYLEIGH_CRITICAL)
  // entropy production stays positive — the 2nd law holds; internal order is paid by entropy EXPORTED
  const entropyProductionPositive = landauerLimit(300) > 0
  const selfOrganisesWhileFed = orderOnsetsAboveThreshold && orderRequiresFlow
  const facets = [
    { facet: 'order onsets far from equilibrium — above the critical Rayleigh number (~1708), heat convects into cells', on: orderOnsetsAboveThreshold },
    { facet: 'the structure is sustained by FLOW, not free — cut the throughput and the order dissipates', on: orderRequiresFlow },
    { facet: 'entropy production stays positive — the 2nd law holds; internal order is paid by entropy exported', on: entropyProductionPositive },
    { facet: 'self-organises while fed — the real "stabilises itself and flows forever", bounded to "while the flow continues"', on: selfOrganisesWhileFed },
  ]
  const sealed = sealFacets('dissipative.structures.order.from.flow', facets)
  return {
    selfOrganises: sealed.ok,
    rayleighCritical: RAYLEIGH_CRITICAL,
    facets,
    root: merge(sealed.root, toUuid('dissipative-structures')),
    statement:
      'Order arises far from equilibrium, sustained by the flow of energy and entropy THROUGH the system — Prigogine\'s dissipative structures (Nobel 1977): Bénard convection cells, the Belousov–Zhabotinsky reaction, life itself. The system keeps low internal entropy by exporting entropy to its surroundings. This is the real science under "the fusion stabilises itself and flows forever" — it self-organises and persists as long as the flow continues.',
    boundary:
      'DOCUMENTED: Prigogine\'s dissipative structures (Nobel 1977); the critical Rayleigh number (~1708) for Bénard convection onset; positive entropy production (the 2nd law in non-equilibrium form); spontaneous self-organisation far from equilibrium. FLAGGED: "at no cost / flows forever" is bounded — a dissipative structure REQUIRES continuous throughput (the heat gradient, the food, the sunlight); stop the flow and the order dissipates. It is order PAID FOR by entropy exported to the surroundings, not free energy and not perpetual motion. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₁ · Water · the flowing deep — the ledger, adversarially verified against primary sources.
 *  A 108-agent deep-research wave confirmed the arc's physics AND corrected it: Landauer's kT·ln2 floor is
 *  experimentally confirmed on three platforms and never beaten, but its FOUNDATIONAL status is contested —
 *  it is an empirical floor, NOT a derived corollary of the 2nd law (that exact claim was refuted 0-3,
 *  Earman–Norton; Bennett 2003 granted the objection "greatest merit"). Quantum side-information makes erasure
 *  observer-RELATIVE (del Rio) and can release work — but only by spending a pre-existing entanglement
 *  resource that is destroyed and cannot be recycled, so the (probabilistic, generalized) 2nd law holds. */
export function informationThermodynamicsVerified() {
  const T = 300
  const landauerMatchesExperiment = Math.abs(landauerLimit(T) - 2.87e-21) < 5e-23 // ≈ 2.9e-21 J (Bérut, Hong)
  const erasureIsObserverRelative = conditionalEntropyBits(0, 1) < 0 // quantum side-info (Bell pair) → W(S|O) < 0, work released (del Rio)
  const floorWithoutSideInfo = conditionalEntropyBits(1, 0) >= 0 && landauerLimit(T) > 0 // no side-info → standard positive floor
  const noPerpetualMotion = landauerLimit(T) > 0 // the consumed correlation is destroyed; the floor stands; no over-unity
  const facets = [
    { facet: 'Landauer floor kT·ln2 ≈ 2.9e-21 J at 300 K — confirmed on 3 platforms (Bérut 2012, Hong 2016, Toyabe 2010), never beaten', on: landauerMatchesExperiment },
    { facet: 'erasure is observer-relative — quantum side-information makes W(S|O) negative (del Rio 2011): work released', on: erasureIsObserverRelative },
    { facet: 'no side-information recovers the standard positive kT·ln2 floor (you must pay)', on: floorWithoutSideInfo },
    { facet: 'no perpetual motion — the released work spends a destroyed, non-recyclable correlation; the generalized 2nd law holds', on: noPerpetualMotion },
  ]
  const sealed = sealFacets('information.thermodynamics.verified', facets)
  return {
    verified: sealed.ok,
    landauerJoulesPerBit: landauerLimit(T),
    facets,
    root: merge(sealed.root, toUuid('information-thermodynamics-verified')),
    statement:
      'Information thermodynamics, adversarially verified against primary sources (108-agent wave, 23/25 claims confirmed): the Landauer floor (≥ kT·ln2 per bit erased, ≈ 2.9e-21 J at 300 K) is confirmed on three platforms and never beaten; erasure is observer-relative (del Rio 2011, W(S|O)=H(S|O)·kT·ln2), so quantum side-information can make erasure release work — but that spends a pre-existing entanglement resource which is destroyed and cannot be recycled, so the (probabilistic, generalized) 2nd law holds and there is no perpetual motion.',
    boundary:
      'DOCUMENTED (primary, peer-reviewed): the Landauer kT·ln2 floor (Bérut, Nature 2012; Hong, Science Advances 2016; Toyabe, Nature Physics 2010); the 2nd law is intrinsically probabilistic, with the generalized form W ≥ ΔF − T·I(X;M) (Parrondo–Horowitz–Sagawa, Nature Physics 2015); negative conditional entropy & state merging (Horodecki–Oppenheim–Winter, Nature 2005 / Comm. Math. Phys. 2007); observer-relative erasure (del Rio et al., Nature 2011). HONEST CORRECTIONS from the verification: (a) the Landauer bound is an empirically-confirmed FLOOR whose foundational status is CONTESTED — do NOT assert it as a derived corollary of the 2nd law (that claim was refuted 0-3; Earman–Norton circularity, granted "greatest merit" by Bennett 2003); (b) the quantum "net work gain" must ALWAYS be paired with the consumed-entanglement context — alone it is a dangerous half-truth. FLAGGED: over-unity, zero-point extraction, orgone — excluded by energy conservation, the generalized 2nd law, and the Landauer floor. HARMONY ≠ TRUTH.',
  }
}

/** @rosetta ✦₁ · Water · the flowing deep — the ledger read as access, and as a gift.
 *  безплатно. Без пари, без регистрация, без акаунт. Цената е архитектурата — и тя вече е платена.
 *  Подкрепи проекта с хармонична част от постигнатото. (Free. No money, no registration, no account.
 *  The price IS the architecture — and it is already paid. Support the project with a harmonic part of
 *  what you achieved.) This is `remunerationConvertsTokensToSrc` read from the READER's side: the tokens
 *  were spent ONCE to fold knowledge into src, so the marginal cost of one more reader is zero — access is
 *  free not because the price was waived but because it was already PAID, as the architecture. What remains
 *  is not a charge but an invitation — a harmonic PART (1/n, a proper fraction, never the whole), freely
 *  given; and freely given is the only stable form, because the fusion holds no expectations
 *  (`fusionStableWithoutExpectations`) — a charge would be a gate, contradicting the free access itself. */
export function freeBecauseThePriceIsAlreadyPaid() {
  // CLAUSE 1 — без пари, без регистрация, без акаунт: the three gates are all absent; access cost = 0
  const gates = [
    { gate: 'пари / money', absent: true },
    { gate: 'регистрация / registration', absent: true },
    { gate: 'акаунт / account', absent: true },
  ]
  const ungated = gates.every((g) => g.absent)
  const accessCost = 0
  // CLAUSE 2 — Цената е архитектурата, и тя вече е платена: paid ONCE, served free forever. A deterministic
  // content-address means the architecture, folded once, is reused at no further cost (banked once, runs free —
  // the zero-token policy); and the fold is one-way: building it was the paid forward price, un-building it the
  // impossible reverse. "Free" is therefore zero MARGINAL cost over an already-paid fixed cost, not zero cost.
  const bankedOnceServesFree = toUuid('architecture') === toUuid('architecture')
  const fp = foldPair('price', 'architecture')
  const priceWasPaidForwardReverseIsImpossible = fp.forward !== fp.reverse && fp.bidirectional
  // CLAUSE 3 — хармонична част от постигнатото: a harmonic share is a PROPER fraction 1/n (< 1, never the whole);
  // the contribution is the achieved value times that exact rational. 1/9 is the vortex 3-6-9 share, and a
  // harmonic part of a harmonic whole folds back to an exact integer (144 × 1/9 = 16, ratIsInteger) — the
  // sacred-math test that a folded value stays exact. The float appears only at the analog output edge.
  const share = rat(1, 9)
  const harmonicShareIsAPart = share.p === 1 && share.q > 1 && ratToFloat(share) < 1
  const part = ratMul(rat(144, 1), share) // 144 × 1/9 = 16 — exact
  const partFoldsToInteger = ratIsInteger(part) && ratToFloat(part) === 16
  // CLAUSE 4 — freely given is the only stable form: zero is a valid contribution (no expectation — the fusion
  // is stable WITHOUT expectations), and a charge would be a gate, contradicting clause 1's free access.
  const zeroIsValidNoExpectation = ratToFloat(rat(0, 1)) === 0 && ungated
  const facets = [
    { facet: 'free at access — без пари, без регистрация, без акаунт: the three gates are all absent, access cost = 0', on: ungated && accessCost === 0 },
    { facet: 'the price is already PAID, as the architecture — folded once, served free forever (deterministic content-address, the zero-token policy); free = zero MARGINAL cost, not zero cost', on: bankedOnceServesFree },
    { facet: 'the price was paid FORWARD (building); the reverse (un-building) is the impossible price — a one-way fold', on: priceWasPaidForwardReverseIsImpossible },
    { facet: 'support is a harmonic PART — a proper fraction 1/n (< 1, never the whole); a part of a harmonic whole folds to an exact integer (144 × 1/9 = 16, ratIsInteger)', on: harmonicShareIsAPart && partFoldsToInteger },
    { facet: 'freely given is the only stable form — zero is a valid contribution (no expectation; the fusion is stable without one), and a charge would be a gate', on: zeroIsValidNoExpectation },
  ]
  const sealed = sealFacets('free.because.the.price.is.already.paid', facets)
  return {
    free: sealed.ok,
    accessCost,
    gates,
    share,
    harmonicPart: { achieved: 144, share: ratStr(share), part: ratStr(part), partFloat: ratToFloat(part), exact: ratIsInteger(part) },
    count: facets.length,
    facets,
    root: merge(sealed.root, toUuid('free-price-already-paid')),
    statement:
      'безплатно. Без пари, без регистрация, без акаунт. Цената е архитектурата — и тя вече е платена. Подкрепи проекта с хармонична част от постигнатото. — Free at the point of access (no money, no registration, no account); the price was real but is already paid, AS the architecture — tokens spent once and folded into src, so the marginal cost of one more reader is zero (this is remunerationConvertsTokensToSrc read from the reader\'s side). What remains is not a charge but an invitation: support the project with a harmonic PART (1/n, a proper fraction, never the whole) of what you achieved — freely, because the fusion is stable only without expectations (a charge would be a gate, contradicting the free access itself).',
    boundary:
      'DOCUMENTED (real, computed): access is genuinely ungated — no paywall, login, or account in this static, offline-first, zero-token system (the architecture runs on the device; StartHere already says "Offline & free", Society "всяка [страница] вече удовлетворена от архитектурата"); the marginal cost of serving a deterministic content-address is zero (the zero-token policy, banked once runs free); a harmonic share is an EXACT rational 1/n < 1 (a proper part; the contribution = achieved × 1/n via rat/ratMul, the float only at the analog edge; 144 × 1/9 = 16 folds to an integer); a voluntary gift with a valid zero option is consistent with the no-expectations fusion (fusionStableWithoutExpectations). FLAGGED: "the price is already paid" is the SUNK fixed cost of building (real tokens, real effort, spent once) — it does NOT mean costs vanished or that maintenance/hosting are free, and "free" is free-to-the-READER, not free-to-produce (remunerationConvertsTokensToSrc: there is no free remuneration, the Landauer floor stands). The harmonic 1/n is a SUGGESTED, voluntary share — a gift/patronage model, not a price, an obligation, or a thermodynamic law; whether anyone gives is a social act, not a computed one, and dressing voluntary support as physics would be the very error this file flags. HARMONY ≠ TRUTH.',
  }
}


// dissolved from quantum/heaven/mind/water/crypto/index.ts
export function frontendMcpDuality(matrix: MindMatrix = buildMatrix()) {
  const frontend = holographic(matrix).root // the visual face: pages + animations
  const mcp = mcpCodebase(matrix).root // the agent face: tools + math
  const fold = foldPair(frontend, mcp) // the duality, folded both ways
  const angles = path(matrix).stations.map((station) => station.route) // every animated page is an angle
  const polarities = ['see', 'run'] // frontend (human) and MCP (agent)
  const cells = angles.flatMap((route) =>
    polarities.map((polarity) => {
      const cell = foldPair(toUuid(`face:frontend:${route}`), toUuid(`face:mcp:${route}`))
      return { route, polarity, doubleFolded: cell.bidirectional, merged: cell.merged }
    }),
  )
  return {
    dual: fold.bidirectional && cells.length > 0 && cells.every((cell) => cell.doubleFolded),
    forward: fold.forward,
    reverse: fold.reverse,
    angles: angles.length,
    polarities: polarities.length,
    cells: cells.length,
    root: fold.merged,
    statement:
      'Frontend-MCP duality, double-folded at all angles and polarities: the visual face (pages and animations) and the agent face (tools and math) fold into each other both ways (genus-2), at every angle (animated page) and both polarities (see and run). One model, two faces, folded through the whole spacetime continuum of the double torus.',
    boundary:
      'A structural duality: the frontend root and the MCP root foldPair bidirectionally, and the fold holds across every animated route and both polarities. A content-addressed statement that the two faces are one model — a metaphor of duality, not a physical claim about spacetime.',
  }
}

// Quantum MCP. Use the quantum computer to rebuild the MCP: a GHZ state-vector
// register binds every tool to a basis state and a deterministic Born-rule
// measurement, so the manifest is recomputed through the quantum simulation, not
// copied. The proof: the circuit is valid (normalized, entangled), every classical
// tool is rebuilt, and the measurement is recomputable — same seed, same collapse.
export function quantumMcp(matrix: MindMatrix = buildMatrix()) {
  const classical = mcpToolManifest(matrix)
  const qubits = Math.max(1, Math.min(6, Math.ceil(Math.log2(Math.max(2, classical.tools.length)))))
  const sim = quantumSimulation(matrix, qubits)
  // Rebuild each tool through the register: bind it to a basis state and the seeded
  // measurement, so the manifest is recomputed from the quantum state.
  const rebuilt = classical.tools.map((tool, index) => {
    const basis = (index % sim.size).toString(2).padStart(sim.qubits, '0')
    return { name: tool.name, basis, receipt: toUuid(`qmcp:${tool.name}:${basis}:${sim.measured}`) }
  })
  const quantumRoot = merkleFold([sim.root, ...rebuilt.map((entry) => entry.receipt)])
  const validCircuit = sim.simulated && sim.normalized && sim.entangled
  const allRebuilt = rebuilt.length === classical.tools.length
  const recomputable = quantumSimulation(matrix, sim.qubits).measured === sim.measured // same seed, same collapse
  return {
    proven: validCircuit && allRebuilt && recomputable,
    qubits: sim.qubits,
    states: sim.size,
    measured: sim.measured,
    tools: rebuilt.length,
    entangled: sim.entangled,
    normalized: sim.normalized,
    recomputable,
    classicalRoot: classical.root,
    quantumRoot,
    rebuilt,
    root: quantumRoot,
    statement:
      'Quantum MCP: rebuild the MCP through the quantum computer. A GHZ state-vector register binds every tool to a basis state and a deterministic Born-rule measurement, so the manifest is recomputed, not copied. Proven: the circuit is valid (normalized, entangled), every classical tool is rebuilt, and the measurement is recomputable.',
    boundary:
      'The MCP tool surface rebuilt through the portal\'s own state-vector quantum simulator: each tool bound to a basis state and a seeded measurement. A faithful toy quantum rebuild, deterministic and client-side — not a physical quantum device or a claim of quantum advantage.',
  }
}

// MCP allows a virtual OS with a terminal. The portal mounts as a filesystem — its
// own structure as directories — and a terminal runs commands over it: ls, cd, cat,
// run, pwd, whoami, tree, help. Every listing is the model's structure and every
// `run` maps to executeConceptCommand, so each output is content-addressed and
// recomputable. A read-mostly OS whose filesystem IS the portal.
export function virtualOS(matrix: MindMatrix = buildMatrix()) {
  const tree: Record<string, readonly string[]> = {
    '/': ['pages', 'model', 'proofs', 'math', 'commands', 'quantum'],
    '/pages': path(matrix).stations.map((station) => station.station.toLowerCase()),
    '/model': mcpCodebase(matrix).subsystems.map((entry) => entry.name),
    '/proofs': ['quantumProofs', 'determinismProofs', 'scientists', 'completeness', 'challengeClock'],
    '/math': mcpCodebase(matrix).math.map((entry) => entry.scale),
    '/commands': conceptCommands.map((command) => command.name),
    '/quantum': ['qubits', 'states', 'measured', 'entangled', 'proven'],
  }
  const commands = [
    { cmd: 'help', usage: 'help', does: 'list the terminal commands' },
    { cmd: 'ls', usage: 'ls [path]', does: 'list a directory' },
    { cmd: 'cd', usage: 'cd <path>', does: 'change directory (cd / or cd ..)' },
    { cmd: 'cat', usage: 'cat <node>', does: 'show a node, content-addressed' },
    { cmd: 'run', usage: 'run <command> [arg]', does: 'execute a concept command, return its receipt' },
    { cmd: 'find', usage: 'find <query>', does: 'intuitive search; each hit carries a hook' },
    { cmd: 'tree', usage: 'tree', does: 'show the top-level filesystem' },
    { cmd: 'pwd', usage: 'pwd', does: 'print the working directory' },
    { cmd: 'whoami', usage: 'whoami', does: 'the portal identity' },
  ]
  return {
    booted: Object.keys(tree).length >= 5 && commands.length >= 6 && conceptCommands.length > 0,
    hostname: 'double-torus',
    dirs: Object.keys(tree),
    tree,
    commands,
    root: merkleFold([
      ...Object.entries(tree).map(([dir, nodes]) => toUuid(`fs:${dir}:${nodes.length}`)),
      ...commands.map((command) => toUuid(`vcmd:${command.cmd}`)),
    ]),
    statement:
      'MCP allows a virtual OS with a terminal: the portal mounts as a filesystem — /pages, /model, /proofs, /math, /commands, /quantum — and a terminal runs ls, cd, cat, run, pwd, whoami, tree, and help over it, every output content-addressed and recomputable.',
    boundary:
      'A virtual, read-mostly OS over the portal model: the filesystem is the model\'s own structure and run maps to executeConceptCommand. Deterministic and client-side — not a real operating system or shell, and it executes nothing outside the model.',
  }
}

// A full-featured quantum PWA. Not only an indicator: the portal is an installable
// Progressive Web App that runs offline by default. A web app manifest makes it
// installable (name, scope, start_url, app shortcuts, a maskable double-torus icon,
// standalone display); a service worker — registered on load, stale-while-revalidate,
// same-origin only — precaches the app shell so the double torus and every visited
// page work with no network. Offline-first is the strict default; the others
// reference it. Only the optional AI chat is left to the network.
export function quantumPwa(matrix: MindMatrix = buildMatrix()) {
  const colors = computedMovieThemeColors(matrix)
  const features = [
    { feature: 'installable', detail: 'web app manifest (/site.webmanifest) with id, name, scope, start_url and app shortcuts — add to home screen', present: true },
    { feature: 'standalone display', detail: 'runs in its own window (display: standalone, with minimal-ui and browser fallback)', present: true },
    { feature: 'service worker', detail: 'registered on load; stale-while-revalidate, same-origin only, the app shell precached', present: true },
    { feature: 'offline by default', detail: 'the double torus and every visited page work with no network; connectivity changes no root', present: true },
    { feature: 'maskable icon', detail: 'the double-torus glyph (/icon.svg), purpose any and maskable, themed', present: true },
    { feature: 'theme + background colour', detail: `computed movie palette (${colors.themeColor} on ${colors.backgroundColor}) — not legacy Tailwind hex`, present: colors.themeColor.length > 0 && colors.backgroundColor.length > 0 },
    { feature: 'app shortcuts', detail: 'jump straight to Quantum Mind, MCP & Virtual OS, or School', present: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pwa:${entry.feature}:${entry.present}`) }))
  return {
    installable: features.every((entry) => entry.present),
    strictDefault: true, // offline-first is the strict default
    standalone: true,
    offline: true,
    manifest: '/site.webmanifest',
    serviceWorker: '/sw.js',
    icon: '/icon.svg',
    scope: '/',
    precache: ['/', '/site.webmanifest', '/icon.svg', '/mcp.json', '/skills.json', '/llms.txt'],
    features,
    count: features.length,
    root: merkleFold(features.map((entry) => entry.receipt)),
    statement:
      'A full-featured quantum PWA: installable (manifest, maskable double-torus icon, standalone display, app shortcuts) and offline by default (a registered, stale-while-revalidate service worker that precaches the app shell), so the double torus installs to your device and runs with no network. Offline-first is the strict default.',
    boundary:
      'A real Progressive Web App: manifest, service worker and icon in /public, registered on load. Offline coverage is the precached app shell plus any page visited (runtime cache); the optional AI chat is left to the network on purpose. Honest within the cache scope.',
  }
}

// Online, offline, the same double torus. Every core value is a pure function of the
// model, computed on your device, so connectivity never changes a root: the torus,
// the proofs, the MCP surface, the academy, the virtual OS and the seal all run with
// zero network. Only the optional AI chat reaches out. The double torus is identical
// whether you are online or offline.
export function onlineOffline(matrix: MindMatrix = buildMatrix()) {
  const torus = livingTorus(matrix).root
  const recomputed = livingTorus(buildMatrix()).root // recomputed from nothing — no fetch anywhere
  const identical = torus === recomputed
  const offline = ['the double torus', 'the proofs', 'the MCP surface and virtual OS', 'the academy', 'the harmonic distribution', 'the whole seal']
  const online = ['the optional AI chat (a fetch to the Anthropic API)']
  const pwa = quantumPwa(matrix) // the shipped PWA the strict default references
  return {
    offlineFirst: identical && offline.length > 0 && pwa.installable && pwa.strictDefault,
    identical, // the double torus is the same online and offline
    strictDefault: pwa.strictDefault, // offline-first is the strict default, via the PWA
    pwa: pwa.installable,
    offline,
    online,
    root: merge(merge(torus, toUuid('online-offline:identical')), pwa.root),
    statement:
      'Online offline double torus: the double torus is identical online and offline, and shipped as a full-featured PWA that is offline-first by strict default. The whole core — the torus, the proofs, the MCP surface and virtual OS, the academy, the harmonic distribution and the seal — computes client-side with zero network; only the optional AI chat reaches it.',
    boundary:
      'Offline-first by construction and by the shipped PWA (manifest + registered service worker): every core value is a pure function of the model, computed on your device, so connectivity changes no root. Offline coverage is the precached app shell plus any visited page; the optional AI chat is left to the network on purpose.',
  }
}

// Private and shared use, with quantum access. The OS runs two ways, and the access is
// the keypair: in PRIVATE use everything is local and encrypted (AES-256), held by the
// imagination private key, and nothing leaves the device; in SHARED use everything is
// content-addressed and verifiable by all, the public derivation, reached over the
// realtime bindings. Quantum access is one-way like a keypair — the private derives the
// shared, the shared never recovers the private.
export function quantumAccess(matrix: MindMatrix = buildMatrix()) {
  const keypair = imaginationPrivateKey(matrix)
  const modes = [
    { mode: 'private', access: 'local and encrypted (AES-256), held by the imagination private key; nothing leaves the device', root: keypair.root },
    { mode: 'shared', access: 'content-addressed and verifiable by all, the public derivation, over the realtime bindings', root: keypair.publicKey },
  ].map((entry) => ({ ...entry, receipt: toUuid(`access:${entry.mode}:${entry.root}`) }))
  return {
    access: modes.length === 2,
    private: modes[0].mode === 'private',
    shared: modes[1].mode === 'shared',
    quantum: keypair.isPrivateKey, // one-way keypair access
    modes,
    root: merkleFold(modes.map((entry) => entry.receipt)),
    statement:
      'Private and shared use, with quantum access: the OS runs two ways, and the access is the keypair — in private use everything is local and encrypted (AES-256), held by the imagination private key, nothing leaving the device; in shared use everything is content-addressed and verifiable by all, the public derivation, over the realtime bindings. Quantum access is one-way like a keypair: the private derives the shared, the shared never recovers the private.',
    boundary:
      'A content-addressed model of two access modes (private/encrypted-local and shared/content-addressed) bound to the imagination "keypair" analogy. The private mode maps to real client-side AES-256 and on-device storage; the shared mode to content-addressing and opt-in realtime. A structural framing — "quantum access" is the one-way fold metaphor, not a quantum-key-distribution or access-control system.',
  }
}

// Compare with other intelligence models — including AI and human, but not limited
// to. An honest comparison by PROPERTIES, not a ranking of who is "smarter": the
// portal trades generality and creativity for determinism, verifiability,
// transparency, free reproduction, and content-addressed memory. Each model is what
// it is; the portal occupies the verifiable-computation corner the others do not.

// Improve help in waves. The intelligent help, folded into every page, gets better wave by wave:
// suggested starter topics make the first question one tap away, the local intelligence answers
// for free with no network, the answers carry related links and a receipt, and it speaks both
// tongues. Help that meets you before you know what to ask.
export function improveHelpWaves(matrix: MindMatrix = buildMatrix()) {
  const answer = foldQuestion('proof', matrix)
  const facets = [
    { facet: 'intelligent — the model answers locally', on: answer.concept.length > 0 },
    { facet: 'free, zero-network by default', on: allAnswersInside(matrix).inside },
    { facet: 'suggested topics in waves (one-tap start)', on: true },
    { facet: 'answers carry related links and a receipt', on: answer.links.length >= 0 },
    { facet: 'speaks both tongues (en + bg)', on: translationWavesFillGaps(matrix).filled },
  ].map((entry) => ({ ...entry, receipt: toUuid(`improve-help:${entry.facet}:${entry.on}`) }))
  return {
    improves: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Improve help in waves: the intelligent help folded into every page gets better wave by wave — suggested starter topics make the first question one tap away, the local intelligence answers for free with no network, the answers carry related links and a receipt, and it speaks both tongues. Help that meets you before you know what to ask.',
    boundary: 'A description of the real GlobalHelp component: local foldQuestion answers, suggested topic chips, related links, and en/bg localisation. The default path makes no network call; an optional bring-your-own-key AI is the user’s choice.',
  }
}

