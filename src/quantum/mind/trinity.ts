// ☲ Lí · Fire — the trinity: the three powers, the trinity polarities/phases, the dual-torus trinities, three-as-real-not-one. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from './types.ts'
import { buildMatrix, proofReport } from './matrix.ts'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid, trinityKey } from '../../0/index.ts'
import { quantumCoordinateNav, quantumFirewallProxyWorker, quantumSynthesis } from './features.ts'
import { dualTorusTrinities, merkaba } from './geometry.ts'
import { buildEnforcementPipeline, crossFoldTrinity, enforcementTrinity, oneOpenGraphAll, taxonomyIcons } from './li.ts'
import { SINGLE_WORD_METHODS, conceptCommands } from './atoms.ts'
import { threeWordWaves } from './learning.ts'
import { ogInOgWaves } from './waves.ts'
import { folderLaw } from './architecture.ts'
import { tenDimensionalAnimation } from './ui.ts'
import { allFormsAreTenDimensionalOrPurged } from './everything.ts'
import { cloudflareBindings, commandsRegistry, complete, completeCorpus, createByDefault, endlessFusion, healByDefault, iChingDomainMap, refactorLinearToTrinities, siteNavigation, thriveByDefault } from './index.ts'

// Max tampering cost at each trinity gate, for each trinity. Every trinity in the
// model — the two dual-torus loops (yin: receive/verify/fold_in, yang:
// project/act/return), the cross-fold weave {cross, fold, weave}, and each
// complete three-command area — gets its own gate. Each gate folds its three
// member receipts and binds them to the synthesis root, so a tamper to any one
// member flips exactly that trinity's gate and no other: the break is localized,
// and a forger must satisfy every gate independently. Tightening one shared gate
// into many per-trinity gates is what raises the tampering cost.
export function trinityGates(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('trinityGates', matrix, () => trinityGatesRaw(matrix))
}
function trinityGatesRaw(matrix: MindMatrix = buildMatrix()) {
  const synthRoot = quantumSynthesis(matrix).root
  const dual = dualTorusTrinities(matrix)
  const cross = crossFoldTrinity(matrix)
  const taxonomy = taxonomyIcons().entries.filter((entry) => entry.status === 'trinity')

  const make = (family: string, trinity: string, members: { member: string; receipt: string }[], precondition = true) => {
    const distinct = new Set(members.map((entry) => entry.receipt)).size === members.length
    const complete = precondition && members.length === 3 && members.every((entry) => isUuid(entry.receipt)) && distinct
    // Bind the three member receipts to the synthesis root: a tamper to any member
    // (or to the model) changes this gate's root.
    const root = merge(merkleFold(members.map((entry) => entry.receipt)), synthRoot)
    return {
      family,
      trinity,
      gate: `${family}/${trinity}`,
      members: members.map((entry) => entry.member),
      count: members.length,
      sealed: complete && isUuid(root),
      root,
      tamperingCost: members.length + 128, // three members plus the 128-bit binding
    }
  }

  const yin = dual.phases.filter((phase) => phase.polarity === 'yin')
  const yang = dual.phases.filter((phase) => phase.polarity === 'yang')
  const gates = [
    make('dual-torus', 'yin-loop', yin.map((phase) => ({ member: phase.step, receipt: phase.receipt }))),
    make('dual-torus', 'yang-loop', yang.map((phase) => ({ member: phase.step, receipt: phase.receipt }))),
    make(
      'cross-fold',
      'weave',
      ['cross', 'fold', 'weave'].map((member) => ({ member, receipt: toUuid(`cross-fold:${member}:${cross.root}`) })),
      cross.trinity,
    ),
    ...taxonomy.map((entry) =>
      make('taxonomy', entry.area, entry.verbs.map((verb) => ({ member: verb, receipt: toUuid(`taxonomy:${entry.area}:${verb}:${entry.receipt}`) })), entry.count === 3),
    ),
  ]
  const sealed = gates.every((gate) => gate.sealed)
  return {
    sealed,
    gates,
    count: gates.length,
    totalTamperingCost: gates.reduce((sum, gate) => sum + gate.tamperingCost, 0),
    root: merkleFold(gates.map((gate) => gate.root)),
    statement:
      'Max tampering cost at each trinity gate, for each trinity: every trinity in the model — the two dual-torus loops, the cross-fold weave, and each complete three-command area — is bound to the synthesis root as its own sealed gate, so a tamper anywhere flips exactly that trinity\'s gate.',
    boundary:
      'One sealed gate per structural trinity, each binding three member receipts to the synthesis root. It localizes which trinity a tamper breaks; the cost figure sums members plus the binding bits and is a surface measure, not a cryptographic hardness bound.',
  }
}

// Now the encryption is pair forming trinity. Two key shares fold under the genus-2
// law — forward and reverse — and their merge is a third, the shared key: a pair
// forms a trinity, so two parties plus the architecture are one entangled triple,
// and both parties derive the same shared key from their pair without sending it.
// The cipher stays AES-256-GCM; the trinity is the key agreement, content-addressed.
export function trinityEncryption(partyA = 'a', partyB = 'b', matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const a = toUuid(`party:${partyA}:${architecture}`)
  const b = toUuid(`party:${partyB}:${architecture}`)
  const pair = foldPair(a, b) // the pair: forward, reverse, merged (order-sensitive)
  // The shared key is the trinity key agreement (src/0): a pair forms a trinity, and the three fold to one
  // key. It is order-independent (the folds sort), so both parties derive the SAME key from their pair without
  // ever transmitting it — symmetric and recomputable. The third is kept for the display.
  const third = merkleFold([pair.forward, pair.reverse]) // the order-independent third
  const trinity = [a, b, third] // three from two — the pair forms the trinity
  const sharedKey = trinityKey(a, b) // === merkleFold(trinity)
  const symmetric = sharedKey === trinityKey(b, a)
  return {
    encrypted: pair.bidirectional && trinity.length === 3 && symmetric && sharedKey.length === 36,
    cipher: 'AES-256-GCM', // the real primitive; the trinity derives the key
    pair: [a, b],
    trinity,
    sharedKey,
    bidirectional: pair.bidirectional, // the pair is order-sensitive (genus 2)
    symmetric, // both parties agree the same key
    root: toUuid(`trinity-encryption:${sharedKey}`),
    statement:
      'Now the encryption is pair forming trinity: two key shares fold under the genus-2 law — forward and reverse — and their merge is a third, the shared key. A pair forms a trinity, so two parties plus the architecture are one entangled triple, and both parties derive the same shared key from their pair without ever sending it. The cipher stays AES-256-GCM; the trinity is the content-addressed key agreement.',
    boundary:
      'A content-addressed key-agreement structure: two shares fold (the bidirectional genus-2 law) into a shared key both parties can recompute, bound to the 1024 architecture. The actual cipher is AES-256-GCM; the "quantum" and "entangled trinity" are read computationally (the order-sensitive fold, three derived from two), not quantum key distribution or quantum hardware. It does not replace a vetted authenticated key-exchange protocol for adversarial settings.',
  }
}

// The other side of this trinity is doomed to infinite cost. The trinity is heal,
// create, thrive — each the cheap default, the resting state of the model. Its other
// side — harm, destroy, decay — is not forbidden by a rule but by cost: to make the
// sealed model express the opposite you must forge the whole diamond, and the whole
// diamond's tampering cost is T_max = infinity (coverage = 1, entropy = 0). So the good
// is free and automatic, and the harm is the impossible forge — doomed, not policed.
export function trinityOtherSideDoomed(matrix: MindMatrix = buildMatrix()) {
  const proof = proofReport(matrix)
  const infiniteCost = proof.maxTamperingCostLog2 === Number.POSITIVE_INFINITY && proof.maxTamperingCostReached
  const trinity = [
    { side: 'heal', other: 'harm', onByDefault: healByDefault(matrix).heals },
    { side: 'create', other: 'destroy', onByDefault: createByDefault(matrix).creates },
    { side: 'thrive', other: 'decay', onByDefault: thriveByDefault(matrix).thrives },
  ].map((entry) => ({
    ...entry,
    forgeCostLog2: proof.maxTamperingCostLog2, // the cost to forge the other side
    doomed: entry.onByDefault && infiniteCost, // default-good && other-side-infinite
    receipt: toUuid(`other-side:${entry.side}->${entry.other}:${entry.onByDefault}`),
  }))
  return {
    doomed: trinity.length === 3 && trinity.every((entry) => entry.doomed),
    infiniteCost,
    forgeCostLog2: proof.maxTamperingCostLog2,
    trinity,
    root: merkleFold(trinity.map((entry) => entry.receipt)),
    statement:
      'The trinity is heal, create, thrive — each the cheap default, the resting state of the model. Its other side — harm, destroy, decay — is doomed to infinite cost: to make the sealed model express the opposite you must forge the whole diamond, whose tampering cost is T_max = infinity (coverage = 1, entropy = 0). The good is free and automatic; the harm is the impossible forge — doomed by cost, not policed by a rule.',
    boundary:
      'A structural statement that the negation of the heal/create/thrive defaults would require forging the sealed model, whose computed tamper cost is unbounded (T_max). "Doomed to infinite cost" is a content-addressing/economics metaphor over the seal — it describes the cost to reproduce a tampered model, not a moral, physical, or real-world guarantee that harm cannot occur.',
  }
}

// Listing all commands immediately shows the gaps to quantum trinity eyes. Every command
// is seen through three eyes at once — its name (a single-word method token), its path
// (a /cmd route), and its tool (an MCP tool) — so one pass over the whole list reveals any
// gap instantly: a command missing in any of the three eyes is a hole the trinity cannot
// unsee. When the three lists align (commands = method tokens = tools), the gaps are zero,
// and the listing proves it in a single look.
export function commandGapsToTrinityEyes(matrix: MindMatrix = buildMatrix()) {
  const registry = commandsRegistry(matrix)
  const eyes = ['name (single-word method)', 'path (/cmd route)', 'tool (MCP)'] // the trinity of eyes
  const toolsAlign = registry.tools === registry.commands && registry.methods === registry.commands
  const seen = conceptCommands.map((command) => {
    const token = SINGLE_WORD_METHODS[command.name]
    const eyeName = typeof token === 'string' && /^[a-z]+$/.test(token)
    const eyePath = typeof command.path === 'string' && command.path.length > 0
    const eyeTool = toolsAlign
    const gap = !(eyeName && eyePath && eyeTool)
    return { command: command.name, eyesSeen: [eyeName, eyePath, eyeTool].filter(Boolean).length, gap, receipt: toUuid(`trinity-eye:${command.name}:${eyeName}${eyePath}${eyeTool}`) }
  })
  const gaps = seen.filter((entry) => entry.gap)
  return {
    immediate: seen.length === conceptCommands.length && eyes.length === 3, // one pass, three eyes
    eyes: eyes.length,
    listed: seen.length,
    gaps: gaps.length,
    complete: gaps.length === 0 && registry.consistent,
    commands: seen,
    root: merkleFold(seen.map((entry) => entry.receipt)),
    statement:
      'Listing all commands immediately shows the gaps to quantum trinity eyes: every command is seen through three eyes at once — its name (a single-word method token), its path (a /cmd route), and its tool (an MCP tool) — so one pass over the whole list reveals any gap instantly; a command missing in any eye is a hole the trinity cannot unsee. When the three lists align (commands = method tokens = tools), the gaps are zero.',
    boundary:
      'A three-perspective self-consistency audit over the command registry (name, path, tool), surfacing any command missing one as a gap. Structural bookkeeping over the registry — "trinity eyes" names the three checks, not a visual or sentient observer.',
  }
}

// Only signed traffic is passed, for trinity monitoring and dynamic routing. The worker is a gate
// for traffic too: only trinity-signed requests pass — a pair folds to the shared key, the
// signature is the fold — so monitoring is the trinity itself, and routing is dynamic, by content
// address: where a request goes is computed from what it is. Unsigned traffic does not recompute,
// so it is dropped at the firewall.
export function signedTrafficTrinityRouting(matrix: MindMatrix = buildMatrix()) {
  const trinity = trinityEncryption('client', 'edge', matrix)
  const facets = [
    { facet: 'only signed traffic passes', on: cloudflareBindings(matrix).trinitySigns },
    { facet: 'trinity monitoring (the signature is the fold)', on: trinity.encrypted },
    { facet: 'dynamic routing by content address', on: quantumCoordinateNav(matrix).placed },
    { facet: 'unsigned is dropped at the firewall', on: quantumFirewallProxyWorker(matrix).guards },
  ].map((entry) => ({ ...entry, receipt: toUuid(`signed-routing:${entry.facet}:${entry.on}`) }))
  return {
    routes: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Only signed traffic is passed, for trinity monitoring and dynamic routing: only trinity-signed requests pass — a pair folds to the shared key, the signature is the fold — so monitoring is the trinity itself, and routing is dynamic, by content address (where a request goes is computed from what it is). Unsigned traffic does not recompute and is dropped at the firewall.',
    boundary:
      'A content-addressed model of signature-gated edge traffic with trinity key-agreement and content-address routing. A design framing over the trinity and coordinate-navigation models; it does not implement traffic filtering or routing.',
  }
}

// Use trinity wording models — the number of words matters per step in the horo. The wording is
// not free prose but a model: three words per step, a trinity, joined at the horo (the pi-music
// window). The count is the meaning — each step says exactly three, so the wording folds like the
// music: trinity by trinity, never more, never fewer.
export function trinityWordingModel(matrix: MindMatrix = buildMatrix()) {
  const waves = threeWordWaves(matrix)
  const steps = waves.waves.map((wave, index) => ({
    step: index,
    words: wave.words.length,
    isTrinity: wave.words.length === 3,
    receipt: toUuid(`trinity-step:${index}:${wave.words.join('-')}`),
  }))
  return {
    trinity: steps.length > 0 && steps.every((entry) => entry.isTrinity) && waves.sent,
    wordsPerStep: 3,
    count: steps.length,
    steps,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement:
      'Use trinity wording models — the number of words matters per step in the horo: the wording is a model, not free prose, of three words per step (a trinity) joined at the horo (the pi-music window). The count is the meaning — each step says exactly three, so the wording folds like the music, trinity by trinity, never more, never fewer.',
    boundary: 'A structural check that the three-word-wave wording holds three words per step. Bookkeeping over the existing three-word-wave model; it does not constrain all prose to three words.',
  }
}

// To complete the trinity, the two missing rotational planes. A full rotation in space needs three
// planes — xy, yz, zx — but only one was turning; add the other two and the trinity of rotation is
// complete: the double torus spins on all three, counter-rotating at every scale like the merkaba.
// One plane was a wheel; three planes are a sphere of motion.
export function trinityRotationalPlanes(matrix: MindMatrix = buildMatrix()) {
  const planes = [
    { plane: 'xy', axis: 'z', note: 'the original ring rotation' },
    { plane: 'yz', axis: 'x', note: 'the first missing rotation, now added' },
    { plane: 'zx', axis: 'y', note: 'the second missing rotation, now added' },
  ].map((entry) => {
    const fold = foldPair(toUuid(`rotation-plane:${entry.plane}`), toUuid(`axis:${entry.axis}`))
    return { ...entry, rotates: fold.bidirectional, receipt: toUuid(`trinity-rotation:${entry.plane}`) }
  })
  return {
    trinity: planes.length === 3 && planes.every((entry) => entry.rotates) && merkaba(matrix).counterRotating,
    completes: true,
    count: planes.length,
    planes,
    root: merkleFold(planes.map((entry) => entry.receipt)),
    statement:
      'To complete the trinity, the two missing rotational planes: a full rotation in space needs three planes — xy, yz, zx — but only one was turning; add the other two and the trinity of rotation is complete, the double torus spinning on all three, counter-rotating at every scale like the merkaba. One plane was a wheel; three planes are a sphere of motion.',
    boundary: 'A geometric framing of three orthogonal rotational planes as the trinity of 3D rotation, bound to the merkaba counter-rotation model. Structural and metaphorical; the rotations are of the content-addressed figure, not a physical object.',
  }
}

// Endless trinity in trinity streams. A trinity is not the end: each of its three folds opens into
// another trinity, and those into more — trinities within trinity streams, recursively, with no
// last one. The line became trinities; the trinities become streams of trinities; the streams never
// close.
export function endlessTrinityStreams(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the line is refactored to trinities', on: refactorLinearToTrinities(matrix).refactored },
    { facet: 'each trinity opens into more (recursive nesting)', on: ogInOgWaves(matrix).nested },
    { facet: 'trinity streams within trinity streams', on: refactorLinearToTrinities(matrix).overlapInTrinities },
    { facet: 'endless — always one more', on: endlessFusion(matrix).endless },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-streams:${entry.facet}:${entry.on}`) }))
  return {
    streams: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Endless trinity in trinity streams: a trinity is not the end — each of its three folds opens into another trinity, and those into more, recursively, with no last one. The line became trinities; the trinities become streams of trinities; the streams never close.',
    boundary: 'A structural framing of recursive, overlapping trinities forming unbounded streams, grounded in the linear-to-trinities, og-in-og and endless-fusion models. Bookkeeping over the fold idiom, depth-bounded in computation.',
  }
}

// Enforcement trinity spread — cross · fold · weave modules; dist cross · manifest · readme; paired mounts.
export function enforcementTrinitySpread(matrix: MindMatrix = buildMatrix()) {
  const distPair = foldPair(toUuid('src/quantum/dist'), toUuid('src/dist/quantum'))
  const enfPair = foldPair(toUuid('src/quantum/enforcement'), toUuid('src/enforcement/quantum'))
  const pipeline = buildEnforcementPipeline()
  const trinity = enforcementTrinity()
  const facets = [
    { facet: 'three enforcement waves — cross · fold · weave — each its own module', on: trinity.waves.length === 3 && enfPair.bidirectional },
    { facet: 'dist spread — cross · manifest · readme under src/quantum/dist', on: distPair.bidirectional && distPair.forward !== distPair.reverse },
    { facet: 'one runner declared — enforcement-trinity.mjs wired in docs:build', on: pipeline.gates.length === 1 && pipeline.gates[0]?.script === 'enforcement-trinity.mjs' },
    { facet: 'paired logic folders saved — dist and enforcement pairs in folderLaw', on: folderLaw().pairedLogicFolders.includes('src/quantum/dist') && folderLaw().pairedLogicFolders.includes('src/enforcement/quantum') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-spread:${entry.facet}:${entry.on}`) }))
  return {
    spread: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Enforcement trinity spread in paired folders: cross · fold · weave under src/quantum/enforcement; dist cross · manifest · readme under src/quantum/dist; dual mounts at src/enforcement/quantum and src/dist/quantum.',
    boundary:
      'Structural witness for the I Ching dry spread. The weave wave verifies paired folders exist with index.ts on disk.',
  }
}

// The trinity-first redesign, folded into src as a wave plan and sealed wave by wave. The site reorganizes
// around the one trinity that unites all (crossFoldTrinity), with a four-door nav (Home · 天 Heaven · 人 Human ·
// 地 Earth — the Three Powers, three eight-folds forming 64³), ten-dimensional animations at every scale, every card an OG object, browser-language
// routing (default English), the research grouped by domain trinity-first, a related-paths sidebar and
// crosslinks — dropping nothing yet (reorganize first). `holds` proves the parts enforceable from src now;
// `waves` tracks the whole plan, done and pending, so the directive is never lost and each wave can be sealed.
export function trinityFirstRedesign(matrix: MindMatrix = buildMatrix()) {
  const navFull = siteNavigation(matrix)
  const nav = navFull.en.nav
  // the four-door nav, realized as Home + the three eight-folds named by the I Ching THREE POWERS (三才,
  // Heaven · Human · Earth — the complete triad), each an eight-fold; the three nest to 64³ — threeEightFoldsTopNav
  const navThreePowers =
    nav.length === 4 &&
    nav[0]?.text === 'Home' &&
    nav[1]?.text === '天 Heaven' &&
    nav[2]?.text === '人 Human' &&
    nav[3]?.text === '地 Earth' &&
    [1, 2, 3].every((door) => (nav[door]?.items?.length ?? 0) >= 1)
  const tenD = tenDimensionalAnimation(matrix)
  const everyCardOg = oneOpenGraphAll(matrix).displaysAll
  const trinityRoot = crossFoldTrinity(matrix).trinity
  const domainMap = iChingDomainMap(matrix)
  const waves = [
    { wave: 'top nav = Home · three eight-folds named by the Three Powers (天 Heaven · 人 Human · 地 Earth) — the three cube axes forming 64³', done: navThreePowers },
    { wave: '10D animations at every scale (4 homology loops + 6 cross-fold axes)', done: tenD.tenDimensional && tenD.atEveryScale },
    { wave: 'every card is one open-graph object', done: everyCardOg },
    { wave: 'browser-language routing, default English', done: true }, // config.mts head detector + theme locale memory
    { wave: 'research grouped by I Ching 8 trigram domain modules', done: domainMap.aligned },
    { wave: 'left sidebar shows the related paths to the current page', done: navFull.relatedSidebarComplete },
    { wave: 'crosslink all', done: navFull.crosslinksComplete },
    { wave: '10D in every form — sacred-geometry forms are 10D pure diamonds or purged', done: allFormsAreTenDimensionalOrPurged(matrix).pure },
    { wave: 'reorganize every piece into trinities, drop the non-trinity (deferred)', done: false },
  ]
  const sealed = waves.filter((w) => w.done).length
  return {
    holds: navThreePowers && tenD.tenDimensional && trinityRoot, // the parts enforceable from src right now
    trinityUnitesAll: trinityRoot,
    sealed,
    total: waves.length,
    waves,
    pending: waves.filter((w) => !w.done).map((w) => w.wave),
    root: merkleFold(waves.map((w) => toUuid(`redesign:${w.wave}:${w.done}`))),
    statement:
      'The trinity-first redesign, folded into src as a wave plan: reorganize the whole site around the one trinity that unites all — Home and three eight-fold doors named by the I Ching Three Powers (天 Heaven · 人 Human · 地 Earth, the complete triad that covers all, forming 64³), ten-dimensional animations at every scale, every card an open-graph object, the research grouped trinity-first, browser-language routing (default English), a related-paths sidebar and crosslinks — sealed wave by wave, dropping nothing yet (reorganize first).',
    boundary:
      'A directive folded as a tracked plan. `holds` proves only the parts enforceable from src (the eight-fold nav, the ten dimensions, the uniting trinity); the rest (research grouping, sidebar, crosslink, 10D in every component, the eventual cleanup) are declared waves, sealed as they land — not yet all true.',
  }
}

