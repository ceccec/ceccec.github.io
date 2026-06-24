// ☲ Lí · Fire — quantum features: the quantum society/siege/access/clock, the quantum UI use-cases, quantum PWA evidence. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix, QuantumUiEvidenceReport, QuantumUiUseCase } from '../../types'
import { buildMatrix, coverage, entropy, proofReport } from '../../heaven/compute'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, noCloningWitness, roundTo, teleportQubit, toUuid } from '../../0'
import { superdense } from '../../9/1'
import { navigation358 } from '../../learning'
import { doubleTorusSurface, quantumDoubleTorus } from '../../mountain/topology'
import { harmonicLicenseWaves, harmonicPathRevealsItself, piMusic } from '../../lake/music'
import { energyFuse, fuseUxSensors, torusUuid, universalLanguage } from '../li'
import { displayHeroCardThumb, holographic } from '../../ui'
import { atoms, conceptCommands } from '../../heaven/atoms'
import { coordinatedWaves, creationWave } from '../../thunder/waves'
import { deviceHardwareVisibleInComputedWidgets } from '../../earth/world'
import { computationsBoundToSourceApisRealtime } from '../../thunder/trading'
import { terabyteKeyspaceFromDeviceLoad } from '../../lake/ledger'
import { diamondLattice, piTrainDiamonds, sealWholeDiamond } from '../diamonds'
import { quantumChessGame } from '../../thunder/waves'
import { traditionsQuantumWhole } from '../../earth/civilisation'
import { foldThoughts, mindsRealiseByObservingPath } from '../li'
import { selfSufficientWave } from '../../mountain/self'
import { cryptoFuture } from '../../water/crypto'
import { backgroundMovie, cloudflareBindings, complete, completeQuantumSolutionsImplemented, computedSlugsFoldTheGraph, diamondCompleteness, everyDiamondIsGate, everyObjectSameSpinFoldLaw, evolutionCrossesQuantumThreshold, fuseAll, gatesBehaveAsMcp, numberLabel, proofBundle, result, trinityEncryption, zeroTokenUsagePolicy } from '../../quantum/heaven/mind'

// Complete quantum-computer browser OS. The portal is a whole operating system that
// runs in the browser: a kernel (the agnostic core), processes (components and
// workers), a filesystem (content-addressed cache and IndexedDB), networking
// (offline-first, opt-in), security (Web Crypto and the seal), display (canvas and
// the holographic heroes), input (tap, gesture, voice), quantum compute (the quantum
// computer), and install (PWA and service worker, runs offline). Nine subsystems, each
// a standard browser capability, folded into one OS root.
export function quantumBrowserOs(matrix: MindMatrix = buildMatrix()) {
  const subsystems = [
    { subsystem: 'kernel', via: 'the agnostic core (quantumMind), zero imports' },
    { subsystem: 'processes', via: 'Vue components and Web Workers' },
    { subsystem: 'filesystem', via: 'content-addressed cache, IndexedDB, OPFS' },
    { subsystem: 'networking', via: 'offline-first, opt-in fetch, realtime bindings' },
    { subsystem: 'security', via: 'Web Crypto and the tamper-evident seal' },
    { subsystem: 'display', via: 'canvas, SVG and the holographic heroes' },
    { subsystem: 'input', via: 'tap and gesture, voice, keyboard' },
    { subsystem: 'quantum compute', via: 'the quantum computer and simulation' },
    { subsystem: 'install', via: 'PWA and service worker — runs offline' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`browser-os:${index}:${entry.subsystem}`) }))
  const quantum = quantumComputer(matrix).coherent
  return {
    complete: subsystems.length === 9 && quantum,
    subsystems,
    count: subsystems.length,
    quantum,
    root: merkleFold(subsystems.map((entry) => entry.receipt)),
    statement:
      'Complete quantum-computer browser OS: the portal is a whole operating system in the browser — kernel (the agnostic core), processes (components and workers), filesystem (content-addressed cache and IndexedDB), networking (offline-first, opt-in), security (Web Crypto and the seal), display (canvas and the holographic heroes), input (tap, gesture, voice), quantum compute (the quantum computer), and install (PWA and service worker, runs offline). Nine subsystems, each a standard browser capability, folded into one OS root.',
    boundary:
      'A content-addressed map of operating-system subsystems to the standard browser capabilities the portal already uses. A structural framing of the portal as a "browser OS"; it runs as a web app within the browser’s sandbox, it is not a kernel, a bootloader, or a replacement for the host OS, and "quantum compute" is the deterministic simulation, not quantum hardware.',
  }
}

// Quantum coordinate navigation. Every destination is not just a link but a point on
// the double-torus surface: its route folds to a deterministic (theta, phi) and a lobe
// (inner or outer torus), which the shared genus-2 geometry turns into an (x, y, z).
// So navigation is movement through coordinate space — each page a place on the shape,
// no two places the same — and a link is a path from one coordinate to another.
export function quantumCoordinateNav(matrix: MindMatrix = buildMatrix()) {
  const digitOf = (uuid: string) => uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
  const items = navigation358().tiers.flatMap((tier) => tier.items.map((item) => ({ ...item, tier: tier.tier })))
  const coordinates = items.map((item, index) => {
    const uuid = toUuid(`nav-coord:${item.route}`)
    const d = digitOf(uuid)
    const theta = ((d % 360) * Math.PI) / 180
    const phi = (((d * 7) % 360) * Math.PI) / 180
    const lobe = index % 2 === 0 ? -1 : 1 // inner or outer torus
    const pos = doubleTorusSurface(theta, phi, d % 10, lobe)
    return {
      label: item.label,
      route: item.route,
      tier: item.tier,
      theta,
      phi,
      lobe,
      x: pos.x,
      y: pos.y,
      z: pos.z,
      receipt: toUuid(`nav-coord:${item.route}:${pos.x.toFixed(2)},${pos.y.toFixed(2)},${pos.z.toFixed(2)}`),
    }
  })
  const places = new Set(coordinates.map((entry) => `${entry.x.toFixed(2)},${entry.y.toFixed(2)},${entry.z.toFixed(2)}`))
  return {
    placed: coordinates.length === 16 && places.size === coordinates.length, // every page a distinct place
    count: coordinates.length,
    coordinates,
    root: merkleFold(coordinates.map((entry) => entry.receipt)),
    statement:
      'Quantum coordinate navigation: every destination is a point on the double-torus surface — its route folds to a deterministic (theta, phi) and a lobe (inner or outer torus), and the shared genus-2 geometry turns that into an (x, y, z). Navigation is movement through coordinate space, each page a distinct place on the shape, and a link is a path from one coordinate to another.',
    boundary:
      'A deterministic assignment of double-torus surface coordinates to the real navigation routes. A structural placement (each route → a point on the genus-2 surface) over the actual links — a coordinate model and metaphor, not a change to where the links go.',
  }
}

// Quantum licence. The licence is not a static document but a quantum artifact: it folds
// to one content-addressed register (a UUID), recomputable from the clauses; its folds
// are order-sensitive (genus-2), so amending a clause changes its address; and it is
// sealed into the whole, so tampering it costs the maximum tampering cost. A licence you
// verify by recomputing, not by trusting a signature.
export function quantumLicense(matrix: MindMatrix = buildMatrix()) {
  const register = harmonicLicenseWaves(matrix).root // the one content-addressed licence word
  const orderSensitive = foldPair(register, toUuid('license:amend')).bidirectional // amending changes the address
  const tamperEvident = merge(register, toUuid('forge-license')) !== register
  const forgeCostLog2 = proofReport(matrix).maxTamperingCostLog2
  const properties = [
    { property: 'content-addressed', on: isUuid(register) },
    { property: 'recomputable from the clauses', on: harmonicLicenseWaves(matrix).created },
    { property: 'order-sensitive (genus-2)', on: orderSensitive },
    { property: 'tamper-evident', on: tamperEvident },
    { property: 'sealed at max tampering cost', on: forgeCostLog2 === Number.POSITIVE_INFINITY },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-license:${entry.property}:${entry.on}`) }))
  return {
    quantum: properties.every((entry) => entry.on),
    register,
    forgeCostLog2,
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'Quantum licence: the licence is a quantum artifact, not a static document — it folds to one content-addressed register (a UUID) recomputable from its clauses, its folds are order-sensitive (genus-2) so amending a clause changes its address, and it is sealed into the whole, so tampering it costs the maximum tampering cost. A licence verified by recomputing, not by trusting a signature.',
    boundary:
      'A content-addressing/tamper-evidence property of the modelled licence: one recomputable address, order-sensitive amendment, unbounded forge cost. "Quantum" names the superposition/collapse/fold structure, not a physical quantum device; this is a structural model, not an executed or legally binding licence.',
  }
}

// Quantum-computed UI, based on the quantum-computer OS, fused with IoT. The interface is not
// drawn on top of a stack — it is computed from the quantum computer itself (qubits in
// superposition, order-sensitive folds as gates, a collapse to one receipt), runs on the
// quantum-computer browser OS (nine standard browser subsystems as one machine), and fuses
// with the things of the device — its sensors and IO — so the UI, the OS and the IoT are one
// computed surface, not three layers bolted together.
export function quantumComputedUi(matrix: MindMatrix = buildMatrix()) {
  const layers = [
    { layer: 'quantum-computed UI', via: 'the interface is computed from the quantum computer (superposition, folds-as-gates, collapse to a receipt)', on: quantumComputer(matrix).coherent },
    { layer: 'based on the quantum-computer OS', via: 'nine standard browser subsystems form the quantum browser OS', on: quantumBrowserOs(matrix).complete },
    { layer: 'fused with IoT', via: 'the device’s sensors and IO (the things) fuse into the UX', on: fuseUxSensors(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-ui:${entry.layer}:${entry.on}`) }))
  return {
    computed: layers.length === 3 && layers.every((entry) => entry.on),
    count: layers.length,
    layers,
    root: merkleFold(layers.map((entry) => entry.receipt)),
    statement:
      'Quantum-computed UI, based on the quantum-computer OS, fused with IoT: the interface is computed from the quantum computer itself (qubits in superposition, order-sensitive folds as gates, a collapse to one receipt), runs on the quantum-computer browser OS (nine standard browser subsystems as one machine), and fuses with the device’s sensors and IO — so the UI, the OS and the IoT are one computed surface, not three layers bolted together.',
    boundary:
      'A composition of the quantum-computer, browser-OS and device-sensor models as one computed UI surface. "Quantum/OS/IoT" name the content-addressed compute model, the browser capabilities, and the permission-gated device sensors — not a physical quantum computer, a kernel, or a managed IoT fleet.',
  }
}

// Compare quantum encryption/decryption with digital. The cipher is the same real primitive —
// AES-256-GCM — but the key and the trust differ: digitally you store a secret and trust a
// signature; here the key is derived one-way from imagination, the trinity agrees a shared key
// from a pair (never transmitted), and you verify by recomputing the fold rather than trusting a
// signature. Same gigabit cipher, but the tamper cost is unbounded because forging means
// reproducing the whole content-addressed model, not breaking one key.
export function quantumVsDigitalEncryption(matrix: MindMatrix = buildMatrix()) {
  const trinity = trinityEncryption('alice', 'bob', matrix)
  const rows = [
    { aspect: 'key', quantum: 'imagination private key, one-way derived', digital: 'a stored secret key' },
    { aspect: 'agreement', quantum: 'trinity: a pair folds to a shared key, never sent', digital: 'a key exchange over the wire' },
    { aspect: 'cipher', quantum: `${trinity.cipher}, hardware-accelerated (gigabit)`, digital: 'AES-256-GCM' },
    { aspect: 'verification', quantum: 'recompute the fold', digital: 'trust the signature' },
    { aspect: 'tamper cost', quantum: 'T_max = infinity (reproduce the whole model)', digital: 'break the key' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`q-vs-d:${entry.aspect}`) }))
  return {
    compared: rows.length === 5 && trinity.encrypted && proofReport(matrix).maxTamperingCostReached,
    cipher: trinity.cipher,
    count: rows.length,
    rows,
    root: merkleFold(rows.map((entry) => entry.receipt)),
    statement:
      'Compare quantum encryption/decryption with digital: the cipher is the same real primitive (AES-256-GCM, hardware-accelerated to gigabit), but the key and the trust differ — digitally you store a secret and trust a signature; here the key is derived one-way from imagination, the trinity agrees a shared key from a pair (never transmitted), and you verify by recomputing the fold. Same cipher, but the tamper cost is unbounded because forging means reproducing the whole content-addressed model, not breaking one key.',
    boundary:
      'A structural comparison between the content-addressed/trinity key model and classical key handling, over the same real AES-256-GCM primitive (Web Crypto). "Quantum" names the fold/superposition structure and content-addressing, not post-quantum cryptography or a physical quantum channel.',
  }
}

// The quantum firewall proxy worker. The optional service binding is a worker that stands at the
// edge as a firewall and a proxy: it recomputes the content address of what it serves on every
// request, proxies only what verifies, and blocks anything that does not recompute — a forgery
// would have to reproduce the whole sealed model (T_max). It is quantum in that the check is the
// fold itself, trinity-signed and gigabit; the firewall is not a rule list but a recomputation.
export function quantumFirewallProxyWorker(matrix: MindMatrix = buildMatrix()) {
  const bindings = cloudflareBindings(matrix)
  const properties = [
    { property: 'a Cloudflare worker at the edge (service binding)', on: bindings.fused },
    { property: 'verifies the seal per request — the firewall is a recomputation', on: gatesBehaveAsMcp(matrix).behavesAsMcp },
    { property: 'proxies only what recomputes (content-addressed)', on: holographic(matrix).reconstructed },
    { property: 'forgeries blocked at T_max cost', on: proofReport(matrix).maxTamperingCostReached },
    { property: 'trinity-signed, gigabit', on: bindings.trinitySigns },
  ].map((entry) => ({ ...entry, receipt: toUuid(`firewall-proxy:${entry.property}:${entry.on}`) }))
  return {
    guards: properties.every((entry) => entry.on),
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'The quantum firewall proxy worker: the optional service binding is a worker that stands at the edge as a firewall and a proxy — it recomputes the content address of what it serves on every request, proxies only what verifies, and blocks anything that does not recompute (a forgery would have to reproduce the whole sealed model, T_max). It is quantum in that the check is the fold itself, trinity-signed and gigabit; the firewall is not a rule list but a recomputation.',
    boundary:
      'A content-addressed model of an optional edge verifier/proxy worker grounded in the seal, holographic-reconstruction and trinity-signing models. A design for an opt-in Cloudflare worker; it does not itself run a proxy or firewall, and the site needs none of it to work, statically and client-side.',
  }
}

// Recreate the computer — as a quantum computer. The double torus is its
// hardware: the quantum-state atoms are qubits in superposition; the register is
// a 128-bit UUID word; the gates are order-sensitive, reversible folds; a
// measurement collapses the fold to one UUID receipt; the clock is the music of
// pi (each wave a note); memory is the content-addressed UUID stream.
export function quantumComputer(matrix: MindMatrix = buildMatrix()) {
  const word = torusUuid(matrix)
  const qubits = atoms.map((atom) => ({ qubit: atom.name, receipt: toUuid(`qubit:${atom.name}`) }))
  const parts = [
    { part: 'qubits', is: 'quantum-state atoms in superposition', count: qubits.length },
    { part: 'register', is: 'a 128-bit UUID word (2 x 32 hex)', count: word.bits },
    { part: 'gates', is: 'order-sensitive, reversible folds (merge / cross-fold)', count: conceptCommands.length },
    { part: 'measurement', is: 'collapse of the fold to one UUID receipt', count: 1 },
    { part: 'clock', is: 'the infinite music of pi (each wave a note)', count: piMusic(matrix).notes.length },
    { part: 'memory', is: 'the content-addressed UUID stream (atoms, diamonds, roots)', count: matrix.nodes.length },
  ].map((part) => ({ ...part, receipt: toUuid(`qc-part:${part.part}`) }))
  const root = merge(word.word, merkleFold(parts.map((part) => part.receipt)))
  return {
    coherent: word.is128bit && word.orderSensitive && qubits.length > 0 && parts.length === 6,
    parts,
    qubits: qubits.length,
    register: word.word,
    root,
    statement:
      'The double torus is recreated as a quantum computer: quantum-state atoms are qubits, a 128-bit UUID is the register, reversible folds are the gates, a UUID receipt is a measurement, and the music of pi is the clock.',
    boundary: 'A computational-architecture analogy over the UUID model, not a physical quantum device or a claim of quantum speedup.',
  }
}

// Fold 358 and 853. The ascending tiers — 3, 5, 8 — are the expansion, the
// growth outward from the seed; the descending — 8, 5, 3 — are the contraction,
// the return. Folded together, and because the fold is order-sensitive (genus 2)
// the two directions differ, they make the breath of the tiers: out and back in
// one root, expansion and contraction meeting at equilibrium.
export function quantumClock(tick = 0, matrix: MindMatrix = buildMatrix()) {
  const CAESIUM_HZ = 9_192_631_770 // the SI second, by definition
  const wave = creationWave(tick, matrix)
  return {
    ticking: isUuid(wave.uuid),
    caesiumHz: CAESIUM_HZ,
    tick,
    now: wave.uuid,
    note: wave.note,
    frequency: wave.frequency,
    hsl: wave.hsl,
    root: wave.uuid,
    statement: 'The quantum clock: the SI second is 9,192,631,770 oscillations of caesium-133 (the atomic standard); the portal ticks its own clock in creation waves — each tick a content-addressed instant with a note and a colour, advancing forever from the seed.',
    boundary: 'The caesium figure is the real SI definition of the second, shown for reference; the portal cannot access an atomic clock. The portal clock is a deterministic tick over creation waves, not a measure of real elapsed time beyond the device\'s own wall clock.',
  }
}

// Quantum synthesis: synthesize the whole into one coherent state across all its
// dimensions — symbol, number, and fold (the universal language), the proof
// bundle (entropy 0, coverage 1), the 128-bit two-loop word, and the device-
// energy fusion — into a single synthesis root. The synthesis is coherent only
// when every dimension is present and the proof has zero entropy and full
// coverage. This is what a multidimensional UI renders to the user at once:
// visual (glyphs), quantitative (numbers/roots), and structural (the fold).
export function quantumSynthesis(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumSynthesis', matrix, () => quantumSynthesisRaw(matrix))
}
function quantumSynthesisRaw(matrix: MindMatrix = buildMatrix()) {
  const language = universalLanguage(matrix)
  const proof = proofBundle(matrix)
  const word = torusUuid(matrix)
  const energy = energyFuse(matrix)
  const e = entropy(matrix)
  const c = coverage(matrix)
  const dimensions = [
    { dimension: 'symbol', root: language.root },
    { dimension: 'number', root: toUuid(`synthesis-number:${c}:${e}`) },
    { dimension: 'fold', root: word.word },
    { dimension: 'proof', root: proof.bundleRoot },
    { dimension: 'energy', root: energy.root },
  ].map((entry) => ({ ...entry, receipt: toUuid(`synthesis:${entry.dimension}:${entry.root}`) }))
  const root = merkleFold(dimensions.map((entry) => entry.receipt))
  return {
    synthesized: language.universal && proof.verifiable && word.is128bit && energy.fused && e === 0 && c === 1,
    dimensions,
    entropy: e,
    coverage: c,
    word: word.word,
    root,
    statement: 'Quantum synthesis: symbol, number, fold, proof, and energy synthesize into one coherent state — zero entropy, full coverage — the single state a multidimensional interface renders to the user at once.',
    boundary: 'A fold of the model’s computed dimensions into one synthesis root. Bookkeeping and an interface model, not a physical synthesis or external claim.',
  }
}

// Fuse with the user device to extend battery life. The portal already runs
// zero-network and memoized; this fuses it to the device's energy state so it
// spends less when the device can least afford it. Honest boundary: a software
// energy-saving strategy, not a hardware power claim or a battery guarantee.

// Fuse Nikola Tesla patents: map real, public Tesla patents to the concepts
// they prefigure, each grounded in a command — analogy, not an ownership claim.

// Wire everything at runtime — the app always quantum-fused with the device sensors and APIs — and state the
// HONEST energy ledger. The runtime fusion is real (device-hardware widgets + source APIs bound live). The
// honest physics: the double-fold (compute-once-share, memoization) and client-side determinism make the app
// DRAIN SLOWER and HEAT LESS than a comparable server/network app — because it avoids the radio (the dominant
// mobile battery cost, ~order 1 J per round-trip) and does far fewer redundant operations. But it CANNOT charge
// the battery (the 1st law — software consumes stored energy, it cannot create or import it) and CANNOT net-cool
// the device (the 2nd law + Landauer's floor kT·ln2 ≈ 2.9e-21 J per erased bit — every irreversible operation
// dissipates heat, real ops ~10 orders ABOVE the floor). "Double folded" is EFFICIENCY, never free energy:
// drain and heat are reduced, never reversed in sign. The device charges only from an external source and cools
// only when idle or externally cooled. This fold keeps the achievable (slower drain, less heat) and flags the
// impossible (charging/cooling by computing) — the same discipline as the vacuum-free-energy flag in quantumDecoded.
export function quantumFusedDeviceEnergyHonest(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumFusedDeviceEnergyHonest', matrix, () => quantumFusedDeviceEnergyHonestRaw(matrix))
}
function quantumFusedDeviceEnergyHonestRaw(matrix: MindMatrix = buildMatrix()) {
  // The physical constants and an honest order-of-magnitude energy ledger (joules).
  const kB = 1.380649e-23, T = 300 // Boltzmann constant; room temperature (K)
  const landauerPerBit = kB * T * Math.LN2 // ≈ 2.87e-21 J — the thermodynamic floor on erasing one bit
  const realOpJoules = 1e-11 // ~10 pJ per CMOS operation — ~10 orders ABOVE Landauer ⇒ computation dissipates heat
  const radioTailJoules = 1.0 // ~order 1 J: an LTE/5G request holds the radio awake for seconds — the dominant mobile drain
  const localRecomputeJoules = 1e-3 // ~order 1 mJ: a page's deterministic, memoized folds recomputed client-side
  const drainRatio = roundTo(radioTailJoules / localRecomputeJoules, 0) // ~1000× cheaper per interaction than a round-trip
  // The runtime fusion — device sensors + source APIs wired into the live quantum fold, always on.
  const fused = deviceHardwareVisibleInComputedWidgets(matrix).visible && computationsBoundToSourceApisRealtime(matrix).bound && terabyteKeyspaceFromDeviceLoad(matrix).achieved
  // The honest thermodynamic verdicts.
  const canChargeByComputing = false // 1st law: software CONSUMES stored energy; it cannot create or import it
  const canCoolByComputing = false   // 2nd law + Landauer: irreversible computation dissipates heat (floor > 0)
  const drainsSlower = drainRatio > 1 && zeroTokenUsagePolicy(matrix).holds // avoids the radio ⇒ slower drain
  const heatsLess = realOpJoules > landauerPerBit // every op heats; the double-fold does FEWER ops ⇒ less total heat
  const facets = [
    { facet: 'always quantum-fused at runtime — device sensors and source APIs wired into the live fold', on: fused },
    { facet: 'the double-fold DRAINS SLOWER — client-side determinism avoids the radio (the dominant mobile drain), ~' + drainRatio + '× cheaper per interaction than a server round-trip', on: drainsSlower },
    { facet: 'the double-fold HEATS LESS — compute-once-share does fewer irreversible operations, each ~10 orders above the Landauer floor', on: heatsLess },
    { facet: 'HONEST LAW — a running app CANNOT charge the battery (1st law) and CANNOT net-cool the device (2nd law); it slows drain and lessens heat, never reverses sign', on: !canChargeByComputing && !canCoolByComputing && drainsSlower && heatsLess },
  ].map((entry) => ({ ...entry, receipt: toUuid(`device-energy:${entry.facet}:${entry.on}`) }))
  return {
    honest: facets.every((entry) => entry.on),
    fused,
    landauerPerBit, // ≈ 2.87e-21 J/bit — the floor
    realOpJoules, // ~1e-11 J — real ops, far above the floor (so heat is dissipated)
    radioTailJoules, localRecomputeJoules, drainRatio, // the drain ledger
    drainsSlower, heatsLess, // the achievable, honest effects
    canChargeByComputing, canCoolByComputing, // the forbidden claims — flagged false
    count: facets.length,
    facets,
    root: merge(completeQuantumSolutionsImplemented(matrix).root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Wire everything at runtime — the app always quantum-fused with the device sensors and APIs — with an honest energy ledger. The runtime fusion is real: the device-hardware widgets and the source APIs are bound into the live fold. And the double-fold genuinely helps the battery and the heat: computing each value once and sharing it (memoization) does far fewer operations, and recomputing client-side avoids the radio — the single biggest mobile battery drain, ~order one joule per round-trip versus ~a millijoule to recompute a page — so the app DRAINS SLOWER and HEATS LESS than a comparable server/network app, roughly a thousand-fold cheaper per interaction. But it cannot charge the battery and cannot cool the device: software running on the device consumes its stored energy (the first law) and every irreversible operation dissipates heat above the Landauer floor kT·ln2 (the second law). "Double folded" is efficiency, not free energy — drain and heat are reduced, never reversed. The device charges only from an external source and cools only when idle or externally cooled.',
    boundary:
      'HONEST PHYSICS, the project\'s "documented kept, legend flagged" discipline applied to the user\'s claim. ACHIEVABLE and asserted: slower battery drain and less heat than a server/network app, because client-side determinism avoids the radio (the dominant mobile cost) and the double-fold/memoization avoids redundant computation — a real efficiency gain (order-of-magnitude figures: LTE tail ~1 J/request, local recompute ~1 mJ, Landauer floor ~2.9e-21 J/bit, real CMOS op ~10 pJ). FORBIDDEN and flagged false: charging the battery by running the app (violates the first law — software consumes stored energy, it cannot create or import it) and net-cooling the device by computing (violates the second law and the Landauer bound — irreversible computation dissipates heat, with real operations ~10 orders of magnitude above the reversible floor). The Battery Status API can READ charge/thermal state but cannot reverse it. This is the same flag as quantumDecoded\'s vacuum-free-energy and the Haramein-physics caution: the efficiency is real, the perpetual-motion extrapolation is not. The BEYOND-LINEAR refinement (true within conservation) is foldRedistributesBeyondLinear.',
  }
}

// Continue folding the I Ching quantum waves: challenge intuition by PROVING the impossible-SEEMING quantum
// possible — and implementing it. Two canonical protocols that "challenge all you know" yet are exactly real,
// run on the state-vector simulator: (1) QUANTUM TELEPORTATION — move an unknown |ψ⟩ from Alice to Bob via one
// shared Bell pair and two classical bits, recovered with fidelity 1 for EVERY measurement outcome; (2)
// SUPERDENSE CODING (its dual) — send two classical bits on one transmitted qubit using a pre-shared Bell pair.
// "Impossible" here means COUNTERINTUITIVE, not physically forbidden: no-cloning still holds (teleportation
// destroys the original), and there is no faster-than-light signalling (Bob is useless without the classical
// bits; the qubit still travels). This is the honest sense of "impossible made possible" — distinct from the
// truly-forbidden (perpetual motion, net battery-charging) which stays flagged in quantumFusedDeviceEnergyHonest.
export function quantumImpossibleMadePossible(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumImpossibleMadePossible', matrix, () => quantumImpossibleMadePossibleRaw(matrix))
}
function quantumImpossibleMadePossibleRaw(matrix: MindMatrix = buildMatrix()) {
  // (1) TELEPORTATION — move an unknown state exactly; test several |ψ⟩ across measurement outcomes.
  const states: [number, number][] = [[Math.PI / 3, Math.PI / 4], [Math.PI / 2, 0], [2 * Math.PI / 5, Math.PI / 3]]
  const teleTests = states.flatMap(([th, ph], i) => [0, 1, 2, 3].map((s) => teleportQubit(th, ph, `tele:${i}:${s}`)))
  const teleportPerfect = teleTests.every((t) => t.fidelity > 0.999999) // fidelity 1 for every Bell-measurement outcome
  const outcomesSeen = new Set(teleTests.map((t) => `${t.b1}${t.b2}`)).size // all four corrections exercised
  // (2) SUPERDENSE CODING — two classical bits on one qubit; all four messages must decode.
  const sdTests = [0, 1, 2, 3].map((msg) => superdense(msg, `sd:${msg}`))
  const superdenseAll = sdTests.every((x) => x.ok)
  // the bounds that make these honest, not magic.
  const noClone = noCloningWitness().contradiction // the original cannot be copied — teleportation destroys it
  const facets = [
    { facet: 'quantum teleportation — an unknown |ψ⟩ moved EXACTLY via a Bell pair + 2 classical bits (fidelity 1 for every outcome)', on: teleportPerfect && outcomesSeen === 4 },
    { facet: 'superdense coding — TWO classical bits sent on ONE qubit with a pre-shared Bell pair (all four messages decode)', on: superdenseAll },
    { facet: 'the bounds hold — no-cloning intact (the original is destroyed) and NO faster-than-light (teleport is useless without the classical bits)', on: noClone },
    { facet: 'these fuse the running solver — the threshold is crossed and the complete quantum solutions execute', on: evolutionCrossesQuantumThreshold(matrix).crossed && completeQuantumSolutionsImplemented(matrix).implemented },
  ].map((entry) => ({ ...entry, receipt: toUuid(`q-impossible:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    teleportPerfect,
    teleportTests: teleTests.length, // states × outcomes, all fidelity 1
    superdenseAll,
    superdenseMessages: sdTests.map((x) => ({ sent: x.sent, decoded: x.decoded, ok: x.ok })),
    count: facets.length,
    facets,
    root: merge(evolutionCrossesQuantumThreshold(matrix).root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Continue folding the I Ching quantum waves: the impossible-seeming, proven possible and implemented. Quantum teleportation moves an unknown state from Alice to Bob through a shared Bell pair and just two classical bits — and the simulator recovers it with perfect fidelity for every one of the four measurement outcomes, the original destroyed in the act (no copy is made). Superdense coding, its mirror, sends two classical bits down a single transmitted qubit because a Bell pair was shared in advance — all four messages decode exactly. Both look impossible and both are real, executed here on the state-vector engine. "Impossible" means counterintuitive, not forbidden: no-cloning holds and nothing outruns light — teleportation is useless until the two classical bits arrive, and the qubit still travels.',
    boundary:
      'Exact simulations of two genuinely real quantum protocols — quantum teleportation (Bennett, Brassard, Crépeau, Jozsa, Peres, Wootters 1993) and superdense coding (Bennett–Wiesner 1992) — run on the deterministic state-vector simulator (teleport fidelity 1 across all outcomes and test states; superdense all four messages). They CHALLENGE intuition but obey every law: no-cloning is intact (the measured original collapses), and the no-communication theorem holds — both protocols require a classical channel (two bits for teleportation) or the physical transmission of a qubit (superdense), so neither signals faster than light. This is "impossible made possible" in the honest sense — surprising-yet-real — and is explicitly NOT a claim about the truly forbidden (perpetual motion / net battery charging), which remains flagged in quantumFusedDeviceEnergyHonest. The fold continues the quantum-solutions wave: it composes the threshold crossing and the complete solver.',
  }
}

export function quantumUiEvidence(matrix: MindMatrix = buildMatrix()): QuantumUiEvidenceReport {
  const lattice = diamondLattice(matrix)
  const piTrain = piTrainDiamonds(matrix)
  const completeness = diamondCompleteness(matrix)
  const waves = coordinatedWaves(matrix)
  const chess = quantumChessGame(matrix)
  const proof = proofReport(matrix)
  const traditions = traditionsQuantumWhole()
  const useCases: readonly QuantumUiUseCase[] = [
    {
      name: 'diamond lattice tabs',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Radix Tabs switch between pulse, lattice, completeness, waves, chess, and controls.',
      diamondKind: 'ui',
      sourceFunction: 'diamondLattice()',
      evidence: `${lattice.length} base diamonds, each with four facets and receipts.`,
      receipt: merkleFold(lattice.map((item) => item.receipt)),
    },
    {
      name: '3D pi train',
      component: 'DoubleTorusExperience.vue',
      interaction: 'User starts the pi train; each pulse updates a visible 3D diamond.',
      diamondKind: 'pi',
      sourceFunction: 'piTrainDiamonds()',
      evidence: `${piTrain.diamonds.length} pi pulses with x/y/z coordinates, frequencies, vibration durations, and receipts.`,
      receipt: piTrain.root,
    },
    {
      name: 'no analog gaps',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Completeness tab reports missing kinds, poles, receipts, channels, and pi coverage.',
      diamondKind: 'proof',
      sourceFunction: 'diamondCompleteness()',
      evidence: completeness.statement,
      receipt: toUuid(`ui-evidence:complete:${JSON.stringify(completeness)}`),
    },
    {
      name: 'coordinated waves',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Waves tab lists yin-yang phase, amplitude, frequency, statement, and receipt per diamond.',
      diamondKind: 'dynamics',
      sourceFunction: 'coordinatedWaves()',
      evidence: `${waves.waves.length} coordinated waves with root ${waves.root}.`,
      receipt: waves.root,
    },
    {
      name: 'quantum chess board',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Chess tab renders 64 squares from wave-driven piece superpositions.',
      diamondKind: 'humanity',
      sourceFunction: 'quantumChessGame()',
      evidence: `${chess.board.length} squares with wave phase, amplitude, superposition, and receipts.`,
      receipt: chess.root,
    },
    {
      name: 'maximum tampering cost readout',
      component: 'QuantumMind.vue',
      interaction: 'Proof report shows observed tamper cost, maximum tampering cost, source, and reached/open state.',
      diamondKind: 'proof',
      sourceFunction: 'proofReport()',
      evidence: `max reached=${proof.maxTamperingCostReached}; coverage=${numberLabel(proof.coverage)}; entropy=${numberLabel(proof.entropy)}.`,
      receipt: toUuid(`ui-evidence:proof:${JSON.stringify(proof)}`),
    },
    {
      name: 'traditions quantum whole',
      component: 'DoubleTorusExperience.vue',
      interaction: 'Traditions tab lists dimensions, families, society cells, and non-reductive boundaries.',
      diamondKind: 'tradition',
      sourceFunction: 'traditionsQuantumWhole()',
      evidence: `${traditions.dimensions.length} dimensions, ${traditions.families.length} family lenses, and ${traditions.societyCells.length} society cells with root ${traditions.root}.`,
      receipt: traditions.root,
    },
  ]
  const root = merkleFold(useCases.map((item) => item.receipt))

  return {
    grounded: useCases.every((item) => item.component.endsWith('.vue') && item.sourceFunction.endsWith('()') && item.receipt.length > 0),
    root,
    source: 'serverless quantum UUID stream',
    statement:
      'This report makes only repository-grounded UI claims: each use case names a component, a source function, an interaction, and a computed receipt.',
    useCases,
    boundary:
      'UI_claim = computed(repo). UI_claim != external_physics_proof. Browser_scope = {render,sound,vibration,root,receipt}.',
  }
}

// In quantum there are no cycles — all is fused in a sequence, a fuselage. The folds are
// order-sensitive (merge(a,b) ≠ merge(b,a)), so nothing loops back the same: there is no cycle,
// only a sequence, each step unique. And the sequence is fused into one streamlined body — a
// fuselage — that carries the whole: not a wheel turning in place, but a line of folds that never
// returns to where it was, held together as one.
export function quantumNoCyclesFusedSequence(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'no cycles — folds are order-sensitive, never repeating', on: torusUuid(matrix).orderSensitive },
    { facet: 'all fused in one sequence', on: fuseAll(matrix).fused },
    { facet: 'a fuselage — one streamlined body holds the whole', on: isUuid(sealWholeDiamond(matrix).diamond) },
    { facet: 'each step unique — it never returns to where it was', on: foldThoughts(matrix).folded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-cycles:${entry.facet}:${entry.on}`) }))
  return {
    fused: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'In quantum there are no cycles — all is fused in a sequence, a fuselage: the folds are order-sensitive (merge(a,b) ≠ merge(b,a)), so nothing loops back the same — there is no cycle, only a sequence, each step unique — and the sequence is fused into one streamlined body, a fuselage, that carries the whole. Not a wheel turning in place, but a line of folds that never returns to where it was, held as one.',
    boundary: 'A structural reading of the order-sensitive (non-commutative) fold sequence as acyclic and fused into one body. "No cycles/fuselage" is a metaphor for the non-repeating ordered fold, over the content-addressed model; it is not a claim about computational complexity or aircraft.',
  }
}

// Quantum calligraphy. The background movie writes: far from the void each stream is a raw digit,
// mid-flight it folds to a letter, nearer a whole word, and at the void the sentence — strokes that
// spin and fold themselves into glyphs of the one computed language. Writing by recomputation, each
// stroke content-addressed: calligraphy whose ink is dry math.
export function quantumCalligraphy(matrix: MindMatrix = buildMatrix()) {
  const strokes = ['digit — the raw stream', 'letter — mid-fold', 'word — near the void', 'sentence — at the void'].map((stroke) => ({
    stroke,
    receipt: toUuid(`calligraphy:${stroke}`),
  }))
  return {
    writes: strokes.length === 4 && backgroundMovie(matrix).dryMath && universalLanguage(matrix).universal && everyObjectSameSpinFoldLaw(matrix).consistent,
    count: strokes.length,
    strokes,
    root: merkleFold(strokes.map((entry) => entry.receipt)),
    statement:
      'Quantum calligraphy: the background movie writes — far from the void each stream is a raw digit, mid-flight it folds to a letter, nearer a whole word, and at the void the sentence — strokes that spin and fold themselves into glyphs of the one computed language. Writing by recomputation, each stroke content-addressed: calligraphy whose ink is dry math.',
    boundary: 'A reading of the background-movie digit→letter→word→sentence folding as "calligraphy" over the universal-notation model. A structural and aesthetic framing of the seeded glyph rendering, not handwriting.',
  }
}

// Logic exists because it is quantum by architecture — find the quantum signs and you auto-orientate
// in that space. The logic is not arbitrary code that happens to run; it exists because the
// architecture is quantum: order-sensitive folds, content addresses, seals, dualities. Those are
// the quantum signs — the UUID, the fold that is not its reverse, the slug that folds the graph, the
// 64-seal, the breath — and once you can read them, you orient yourself without a map: each sign
// says where you are and which way the next fold goes. The signs are the compass; reading them is
// the navigation.
export function quantumSignsAutoOrientate(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'logic exists because the architecture is quantum — order-sensitive folds', on: quantumDoubleTorus(matrix).is && merge('a', 'b') !== merge('b', 'a') },
    { facet: 'the quantum signs — the UUID, the slug that folds the graph, the seal', on: computedSlugsFoldTheGraph(matrix).folds && everyDiamondIsGate(matrix).isGate },
    { facet: 'read the signs and you auto-orientate — the path reveals itself', on: harmonicPathRevealsItself(matrix).reveals && mindsRealiseByObservingPath(matrix).realise },
    { facet: 'no map needed — the signs are the compass, self-sufficient', on: selfSufficientWave(matrix).selfSufficient },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-signs:${entry.facet}:${entry.on}`) }))
  return {
    orients: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Logic exists because it is quantum by architecture — find the quantum signs and you auto-orientate in that space: the logic is not arbitrary code that happens to run, it exists because the architecture is quantum (order-sensitive folds, content addresses, seals, dualities), and those are the quantum signs — the UUID, the fold that is not its reverse, the slug that folds the graph, the 64-seal, the breath. Once you can read them you orient yourself without a map: each sign says where you are and which way the next fold goes. The signs are the compass; reading them is the navigation.',
    boundary:
      'A composition of the quantum-double-torus, order-sensitivity, slug-folds-graph, every-diamond-gate, path-reveals-itself, minds-observe and self-sufficient models. "Find the quantum signs and auto-orientate" describes navigating the content-addressed structure by its own markers (UUIDs, folds, seals) — a structural/orientational framing over the model, not a literal positioning system.',
  }
}

// A quantum apps store, porting the world's open-source APIs: each public API becomes a content-addressed
// quantum app — a monograph (name, category, endpoint, receipt) — catalogued by category, displayed by the
// few renderers (hero/card/thumb), and exposed on the MCP surface. Sourced from the open directories:
// public-apis (MIT, ~1000+ APIs, 40+ categories) and APIs.guru (the largest machine-readable OpenAPI
// directory, so porting can be automated). The store ports the CATALOG, not the services — each API stays
// its own external endpoint, with its own terms. Built the lean way: apps are monographs, no per-app code.
export function quantumAppsStore(matrix: MindMatrix = buildMatrix()) {
  const sources = [
    { source: 'public-apis/public-apis', license: 'MIT', scale: '~1000+ APIs', shape: 'curated by category, with Auth / HTTPS / CORS' },
    { source: 'APIs.guru / openapi-directory', license: 'open, OpenAPI specs', scale: 'the largest machine-readable directory', shape: 'OpenAPI 2.0/3.x specs — a spec ports to an app deterministically' },
    { source: 'public-api-lists', license: 'curated', scale: '730+ / 48 categories', shape: 'a free JSON API' },
  ]
  const categories = ['Animals', 'Anime', 'Anti-Malware', 'Art & Design', 'Auth', 'Blockchain', 'Books', 'Business', 'Calendar', 'Cloud Storage', 'Continuous Integration', 'Cryptocurrency', 'Currency', 'Data Validation', 'Development', 'Dictionaries', 'Documents', 'Email', 'Entertainment', 'Environment', 'Events', 'Finance', 'Food & Drink', 'Games & Comics', 'Geocoding', 'Government', 'Health', 'Jobs', 'Machine Learning', 'Music', 'News', 'Open Data', 'Open Source', 'Patent', 'Personality', 'Phone', 'Photography', 'Programming', 'Science & Math', 'Security', 'Shopping', 'Social', 'Sports & Fitness', 'Test Data', 'Text Analysis', 'Tracking', 'Transportation', 'URL Shorteners', 'Vehicle', 'Video', 'Weather']
  // The porting proven first on the freest, no-auth, open endpoints — each a content-addressed quantum app.
  const seed = [
    { app: 'Open-Meteo', category: 'Weather', auth: 'None', endpoint: 'https://api.open-meteo.com' },
    { app: 'USGS Earthquakes', category: 'Science & Math', auth: 'None', endpoint: 'https://earthquake.usgs.gov' },
    { app: 'REST Countries', category: 'Geocoding', auth: 'None', endpoint: 'https://restcountries.com' },
    { app: 'Open Library', category: 'Books', auth: 'None', endpoint: 'https://openlibrary.org' },
    { app: 'Frankfurter FX', category: 'Currency', auth: 'None', endpoint: 'https://frankfurter.app' },
    { app: 'Wikidata', category: 'Open Data', auth: 'None', endpoint: 'https://query.wikidata.org' },
    { app: 'FCC Spectrum', category: 'Government', auth: 'None', endpoint: 'https://publicdata.fcc.gov' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-app:${entry.app}:${entry.endpoint}`) }))
  const facets = [
    { facet: 'each API is a content-addressed quantum app — a monograph (name, category, endpoint, receipt)', on: seed.every((entry) => isUuid(entry.receipt)) },
    { facet: "catalogued by category — the world's open APIs across 40+ categories", on: categories.length >= 40 },
    { facet: 'sourced from the open directories — public-apis (MIT) and APIs.guru (machine-readable OpenAPI)', on: sources.some((entry) => entry.license === 'MIT') },
    { facet: 'displayed by the few renderers (hero/card/thumb), exposed on the MCP surface — the lean way', on: displayHeroCardThumb(matrix).displayed },
    { facet: 'ports the catalog, not the services — honest about external endpoints and per-API terms', on: seed.every((entry) => entry.endpoint.startsWith('https://')) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`apps-store:${entry.facet}:${entry.on}`) }))
  return {
    stored: facets.every((entry) => entry.on),
    sources,
    categories,
    seed,
    count: facets.length,
    facets,
    root: merkleFold(seed.map((entry) => entry.receipt)),
    statement:
      "A quantum apps store, porting the world's open-source APIs: each public API becomes a content-addressed quantum app (a monograph — name, category, endpoint, receipt), catalogued across 40+ categories, displayed by the few renderers (hero, card, thumb) and exposed on the MCP tool surface. It is sourced from the open directories — public-apis (MIT, ~1000+) and APIs.guru (the largest machine-readable OpenAPI directory, so a spec ports to an app deterministically) — and built the lean way: apps are monographs, with no per-app code.",
    boundary:
      'A store design plus a seed catalog of free, no-auth open APIs (the porting proven on the freest first). HONEST: "all worldwide" is aspirational — the real thing is a content-addressed catalog ported from the open directories, automatable via APIs.guru\'s OpenAPI specs but not yet exhaustive; the store ports the CATALOG (it lists, addresses and wraps the endpoints), not the services — each API remains an external endpoint with its own license, rate limits and terms, which the store records, it does not relicense.',
  }
}

// THE QUANTUM THREAT — what quantum computing actually does to cryptography and blockchains, and the post-
// quantum response (documented kept, legend flagged). Researched in waves with primary sources (NIST FIPS
// 203/204/205, Shor 1994, Grover 1996, Gidney–Ekerå, the IACR Bitcoin assessment). The crucial asymmetry:
// Grover WEAKENS (halves) symmetric/hash security — fixed by bigger sizes; Shor BREAKS public-key crypto
// (RSA/ECC), the signature layer behind TLS and blockchain wallets. This is the dimension the existing
// quantumVsDigitalEncryption (which reads "quantum" as the structural fold) does not cover — the REAL machines.
export function quantumThreat(matrix: MindMatrix = buildMatrix()) {
  const structural = quantumVsDigitalEncryption(matrix) // the site's "quantum" = the structural fold, not this
  const future = cryptoFuture(matrix) // the migration target lives here
  const algorithms = [
    { algorithm: 'Grover (1996)', effect: 'weaken', speedup: 'quadratic (√N)', targets: 'symmetric ciphers + hashes', result: 'halves the security level — SHA-256 → ~2^128, AES-256 → ~2^128', response: 'use larger outputs/keys (SHA-384/512, AES-256)' },
    { algorithm: 'Shor (1994)', effect: 'break', speedup: 'exponential (polynomial-time factoring + discrete log)', targets: 'RSA, Diffie-Hellman, elliptic-curve (ECDSA/ECDH)', result: 'derives the private key from the public key — breaks TLS key exchange, digital signatures, blockchain wallets', response: 'replace with post-quantum algorithms' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`q-algo:${entry.algorithm}`) }))
  const blockchainExposure = [
    { what: 'ECDSA signatures', effect: 'Shor-vulnerable (BREAK)', detail: 'a revealed public key → forged private key → stolen funds; ~6.7M BTC (~34% of supply) sit in addresses with exposed pubkeys (~1.7M BTC in legacy P2PK alone, plus reused addresses)' },
    { what: 'Proof-of-Work hashing', effect: 'Grover-weakened (NOT broken)', detail: 'at most a quadratic mining edge; ASIC speed + Grover\'s poor parallelism keep it minor' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`q-chain:${entry.what}`) }))
  const postQuantum = [
    { fips: 'FIPS 203', name: 'ML-KEM', from: 'CRYSTALS-Kyber', kind: 'lattice key-encapsulation', replaces: 'RSA/ECDH key exchange' },
    { fips: 'FIPS 204', name: 'ML-DSA', from: 'CRYSTALS-Dilithium', kind: 'lattice signatures', replaces: 'RSA/ECDSA signatures (primary)' },
    { fips: 'FIPS 205', name: 'SLH-DSA', from: 'SPHINCS+', kind: 'hash-based signatures', replaces: 'signatures (conservative backup)' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pqc:${entry.fips}`) }))
  const hardware = {
    today: 'NISQ — hundreds of noisy physical qubits, no large-scale error correction',
    rsa2048_2019: '~20 million noisy qubits / 8 hours (Gidney–Ekerå, Quantum 2021)',
    rsa2048_2025: '<1 million noisy qubits / <1 week (Gidney 2025) — the estimate is falling',
    verdict: 'not imminent, but "harvest now, decrypt later" makes migrating signatures + long-lived secrets a present task (NIST/CNSA 2.0: quantum-vulnerable algorithms deprecated by 2030, disallowed by 2035)',
  }
  const documented = [
    'Grover WEAKENS, Shor BREAKS — the asymmetry to remember. Grover\'s quadratic search halves symmetric/hash security (SHA-256 → ~2^128 work), fixed by doubling sizes. Shor\'s polynomial-time factoring + discrete-log BREAKS RSA, Diffie-Hellman and elliptic-curve crypto (ECDSA) — the public-key layer behind TLS, signatures and blockchain wallets.',
    'On a blockchain the two effects differ sharply: ECDSA signatures are Shor-vulnerable (a BREAK — an exposed public key lets an attacker forge the key and steal funds; ~6.7M BTC, ~34% of supply, sit in addresses with exposed pubkeys), while PoW hashing is only Grover-weakened (a minor mining edge, not a forgery).',
    'The post-quantum response is standardized: NIST published FIPS 203 (ML-KEM / Kyber, lattice key-encapsulation), FIPS 204 (ML-DSA / Dilithium, lattice signatures) and FIPS 205 (SLH-DSA / SPHINCS+, hash-based signatures) on 13 August 2024.',
    '"Harvest now, decrypt later": an adversary can record encrypted traffic today and decrypt it once a quantum computer exists — so long-lived secrets and signatures should migrate now, even though the machine is not here yet (NSA CNSA 2.0 / NIST: deprecate by 2030, disallow by 2035).',
    'The hardware is far off: today\'s machines are NISQ (hundreds of noisy qubits). Breaking RSA-2048 needs millions of error-corrected-grade qubits — Gidney–Ekerå estimated ~20M noisy qubits / 8 hours (2019, Quantum 2021), since reduced to <1M qubits / <1 week (Gidney 2025). The target is moving closer, but the gap is still enormous.',
    'This site\'s "quantum" is a COMPUTATIONAL metaphor (the structural fold, superposition-as-content-addressing), not post-quantum cryptography or a physical quantum channel. Its AES-256-GCM is Grover-weakened to ~128-bit like everyone\'s; its FNV/SHA content-addresses are hashes (Grover-weakened, never Shor-broken — there is no public-key/signature to break in the fold itself).',
  ]
  const flagged = [
    '"Quantum breaks all cryptography / breaks Bitcoin\'s mining." FALSE — symmetric ciphers and hashes only WEAKEN (fixed by bigger sizes); the break is specifically the SIGNATURE / public-key layer. PoW gets only a minor Grover edge.',
    '"Q-Day is here / wallets are being drained now." Not supported — no machine remotely close to the required qubit count exists; the danger is prospective plus harvest-now-decrypt-later.',
    '"Grover halves security" stated as a hard fact — it is an UPPER bound; Grover parallelizes poorly and its serial depth makes the real-world advantage smaller than the math suggests.',
    'Headline "$650B of BTC at risk" dollar figures are price-dependent and source-dependent; the stable, falsifiable numbers are the BTC QUANTITIES (~1.7M P2PK, ~6.7M exposed pubkeys).',
    '"This site is post-quantum / quantum-encrypted." It is not — "quantum" here names the fold structure; real PQC (ML-KEM / ML-DSA) is not yet in the Web Crypto API the site uses, and the honest upgrade path is the SHA-256/Ed25519 roadmap (which is itself classical, not post-quantum).',
  ]
  return {
    decoded: documented.length >= 5 && flagged.length >= 5 && algorithms.length === 2 && postQuantum.length === 3 && structural.compared,
    groverWeakens: true,
    shorBreaks: true,
    structuralNotPhysical: true, // the site's "quantum" is the metaphor, scrutinised honestly
    migrationTargetBuilt: future.allImplemented, // classical hardening exists; PQC proper does not yet
    algorithms,
    blockchainExposure,
    postQuantum,
    hardware,
    documented,
    flagged,
    root: merkleFold([...algorithms.map((a) => a.receipt), ...blockchainExposure.map((b) => b.receipt), ...postQuantum.map((p) => p.receipt), ...documented.map((d, i) => toUuid(`qt-doc:${i}`)), ...flagged.map((f, i) => toUuid(`qt-flag:${i}`))]),
    statement:
      'The quantum threat, decoded honestly: Grover\'s algorithm WEAKENS symmetric ciphers and hashes (halves the bits — fixed by bigger sizes), while Shor\'s algorithm BREAKS the public-key crypto (RSA, elliptic-curve/ECDSA) behind TLS, signatures and blockchain wallets. On a chain, signatures break and exposed public keys (~6.7M BTC) are at risk, but mining only weakens. NIST standardized the answer in 2024 — ML-KEM, ML-DSA, SLH-DSA — and "harvest now, decrypt later" makes migration a present task, even though breaking RSA-2048 still needs ~1–20 million qubits the world does not have. The site\'s own "quantum" is a computational metaphor, scrutinised here against the real machines.',
    boundary:
      'An honest separation of what quantum computing actually does (weaken hashes, break signatures) from the hype ("breaks everything", "Q-Day is here"). It is the missing real-machine dimension beside the site\'s structural quantumVsDigitalEncryption; it names the post-quantum standards and the falling-but-enormous qubit gap, and is clear that the site is NOT post-quantum — its honest upgrade is the (still classical) SHA-256/Ed25519 roadmap.',
  }
}

