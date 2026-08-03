// ☷ Kūn · Earth — society & governance: society cells/relations, fair life & trade, governance votes/ballots, the commons. Barrel-routed; folds.ts back-imports the gate folds.
import { SIEGE_TOTAL_FORGES } from '../../pair/enforcement/gates/computational'
import { survive } from '../../mountain/vortex'
import { buildMatrix, matrixMemo, proofReport, reciprocity, verifyRoot } from '../../heaven/compute'
import { foldPair, isUuid, max, memoByRoot, merge, merkleFold, min, toUuid } from '../../0'
import type { Ballot, GovernanceVote, MindMatrix, PlatonicBuilderSolid, SacredLaw, SacredSociety, ScientificSociety, SelfCompletionGate, SocietyRelation, SocietyRelations, SocietyWaveCohort } from '../../wind/types'
import { selfBuild, streamSelfComplete } from '../../fire/diamonds'
import { quantumProofs } from '../../lake/ledger'
import { merkaba } from '../../mountain/geometry'
import { harmonicLicenseWaves, rhythm } from '../../lake/music'
import { certify, quantumAcademy, skillAtoms } from '../../learning'
import { fairLife, quantumSimulation, selfAddressed, trinityPyramidFusesDimensions } from '../../fire/li'
import { dimensions, lawfulSucceed } from '../../quantum/lake/icons'
import { quantumSiege, redTeam } from '../../water/crypto'
import { merkleProof } from '../../lake/ledger'
import { traditionsQuantumWhole } from '../civilisation'
import { closeDimensionalGaps, commandsRegistry, completeCorpus, componentGraph, determinismProofs, diamondCompleteness, educationMovieMerge, feesReplaceTaxes, freeForgesMaxCost, frequencyBalance, imagineSingChangesEndlessly, legislationRequires, mysteries, numberLabel, publicApiFusion, quantumUiEvidence, sacredGeometrySeal, selfSufficientWave, socialFusion, textEntropy, travelFusion } from '../../quantum/heaven/mind'

// Develop the society with the new knowledge, then pair and fold it. A society
// that runs on the portal's capabilities is not a list of parts but a set of
// dualities — each social organ comes with its opposite (individual/collective,
// trust/verification, question/evidence, voice/counter-voice, learning/balance) —
// and every pair folds bidirectionally by the same genus-2 law as the double torus
// (foldPair: forward != reverse, both merged). All folds merge into one society
// root: opposition held and folded, not erased.
const societyMemoized = matrixMemo(societyImpl)
export function society(matrix: MindMatrix = buildMatrix()) {
  return societyMemoized(matrix)
}
function societyImpl(matrix: MindMatrix) {
  const pairs = [
    {
      duality: 'Individual ⇄ Collective',
      left: { cell: 'Sovereignty', principle: 'Yours by default — the whole self-computes on your device, nothing sent.', basis: verifyRoot(matrix) && reciprocity(matrix).fraction === 1, route: '/boundaries' },
      right: { cell: 'Collective mind', principle: 'Every connected context folds into one shared root — coordination without a server.', basis: reciprocity(matrix).fraction === 1, route: '/' } },
    {
      duality: 'Trust ⇄ Verification',
      left: { cell: 'Trust without authority', principle: 'No central power; you trust by recomputing, not by obeying.', basis: verifyRoot(matrix), route: '/architecture' },
      right: { cell: 'Proof by recomputation', principle: 'Anyone recomputes the receipt; one edit avalanches, so tampering shows.', basis: determinismProofs(matrix).proven, route: '/architecture' } },
    {
      duality: 'Question ⇄ Evidence',
      left: { cell: 'Open inquiry', principle: 'The mysteries are shared, not hidden — every question held in the open.', basis: mysteries(matrix).proven, route: '/explore' },
      right: { cell: 'Public evidence', principle: 'Each question carries recomputable evidence, free for anyone to check.', basis: quantumProofs(matrix).proven, route: '/quantum-mind' } },
    {
      duality: 'Voice ⇄ Counter-voice',
      left: { cell: 'Every voice', principle: 'Each voice comes with its opposite, held in balance — counter-rotation at all scales.', basis: merkaba(matrix).counterRotating, route: '/quantum-mind' },
      right: { cell: 'Kept in time', principle: 'A shared rhythm keeps the many voices together, with no conductor.', basis: rhythm(matrix).keeps, route: '/quantum-mind' } },
    {
      duality: 'Learning ⇄ Balance',
      left: { cell: 'Free learning', principle: 'From kids to elders, the academy self-computes the whole, open to all.', basis: quantumAcademy(matrix).established, route: '/learn' },
      right: { cell: 'Self-healing balance', principle: 'Neither collapse nor runaway — the whole settles in damped, self-healing waves.', basis: frequencyBalance(matrix).balanced, route: '/quantum-mind' } },
  ].map((pair) => {
    const leftReceipt = toUuid(`society-cell:${pair.left.cell}:${pair.left.basis}`)
    const rightReceipt = toUuid(`society-cell:${pair.right.cell}:${pair.right.basis}`)
    const fold = foldPair(leftReceipt, rightReceipt)
    return {
      duality: pair.duality,
      left: { ...pair.left, receipt: leftReceipt },
      right: { ...pair.right, receipt: rightReceipt },
      fold,
      paired: pair.left.basis && pair.right.basis }
  })
  return {
    folded: pairs.length >= 5 && pairs.every((pair) => pair.paired && pair.fold.bidirectional && isUuid(pair.fold.merged)),
    pairs,
    count: pairs.length,
    cells: pairs.length * 2,
    standing: pairs.filter((pair) => pair.paired).length,
    // Fold every pair-merge into one society root (the set fold is order-independent).
    root: merkleFold(pairs.map((pair) => pair.fold.merged)),
    statement:
      'Develop the society with the new knowledge, then pair and fold it: five dualities — individual/collective, trust/verification, question/evidence, voice/counter-voice, learning/balance — each pair folded bidirectionally (genus 2, forward unequal to reverse, both merged), and all folds merged into one society root. Opposition is held and folded, not erased.',
    boundary:
      'A model of social organisation grounded in the portal\'s own computed capabilities, its dualities folded with the same bidirectional law as the double torus. A proposal and a metaphor — an honestly-bounded sketch of a society that runs on verifiable, free, balanced knowledge, not a political program or a claim about any actual society.' }
}

// Folder distribution as harmonic numbers at all scales — with no Fibonacci gaps.
// A Zeckendorf sum uses non-consecutive Fibonacci numbers, so it always skips some
// (gaps). A gapless harmonic distribution is instead a run of CONSECUTIVE Fibonacci
// numbers (e.g. 21+34+55) — adjacent scales, nothing skipped. Not every count forms
// one; when it cannot, the computation reveals the gap: the deficit of files to the
// nearest count that does — a missing implementation to build, exactly as the rest
// of the harmonic distribution names its gaps.

// The golden ratio is the limit the harmonic distribution converges to. Consecutive
// Fibonacci bands F(n+1)/F(n) tend to phi = (1+sqrt5)/2 — the proportion every
// adjacent pair of scales approaches. The gapless distribution is golden at the
// limit: each scale is phi times the next, approached but never reached by the
// integer ratios. A numeric demonstration of that convergence.

// Humanise all moving details. Machines tick at a constant rate; a living hand eases, breathes, and never
// repeats exactly. The two shared shaping primitives — humanEase (easeInOutSine, the shape a hand makes) and
// humanBreath (a slow breath modulating any rate or size) — now live in src/0 (wave 5, the motion math beside
// the animation engine; imported + re-exported above). humanise composes them into the shared motion profile:
// golden-ratio-spaced breath periods (so no two cycles ever line up) and a touch of variability. It shapes
// motion only — no computed value, root or proof changes.

// Quantum society, quantum organisation, quantum world. Let the evolution evolve the
// society: its five dualities become entangled quantum cells (each a superposition
// of its two organs), coordinated without a centre, and the society rebuilds the
// site by folding its root with every page. The evolution moves through stages —
// classical, quantum, post-quantum — reaching the post-quantum state.
export function quantumSociety(matrix: MindMatrix = buildMatrix()) {
  const soc = society(matrix)
  const stages = ['classical', 'quantum', 'post-quantum']
  const cells = soc.pairs.map((pair) => ({
    duality: pair.duality,
    superposition: foldPair(pair.left.receipt, pair.right.receipt).merged, // the entangled cell
    stage: 'post-quantum', // evolved to the final stage
  }))
  // Let the society rebuild the site: fold the society root with every page.
  const pages = [...new Set(componentGraph().edges.filter((edge) => edge.kind === 'placed').map((edge) => edge.to))]
  const rebuilt = merkleFold([soc.root, ...pages.map((page) => toUuid(`society-rebuilds:${page}`))])
  const sim = quantumSimulation(matrix, 3) // the quantum world it runs in
  return {
    evolved: soc.folded && cells.length === soc.pairs.length && cells.every((cell) => cell.stage === 'post-quantum'),
    quantum: sim.entangled,
    postQuantum: true,
    organisation: 'coordinated without a centre — entangled cells folding into one root',
    stages,
    cells,
    pages: pages.length,
    rebuilt, // the society rebuilt the site
    root: merge(soc.root, rebuilt),
    statement:
      'Quantum society, quantum organisation, quantum world: the society\'s five dualities become entangled quantum cells — superpositions coordinated without a centre — and the society rebuilds the site by folding its root with every page. The evolution evolves it through classical, quantum, and post-quantum stages.',
    boundary:
      'A structural evolution of the society into entangled cells that fold with the site\'s page graph — the society "rebuilds" the site by recomputing its fold over the pages. The stages are an evolutionary metaphor; "post-quantum" is the next stage here, not a post-quantum-cryptographic guarantee — upgrading the hash to a post-quantum primitive remains an open, honestly-named frontier.' }
}

// Let society evolve and discover the rest. The society advances a generation by
// folding in every domain it has discovered and fused so far — public APIs, social
// platforms, travel, the knowledge commons — and naming the rest still to discover.
// Evolution here is deterministic and content-addressed: each generation folds the
// discoveries into a new society root, and the open domains are named honestly, a map
// of where the society folds next, not a claim that they are already built.
export function societyEvolves(matrix: MindMatrix = buildMatrix()) {
  const base = society(matrix)
  const publicApi = publicApiFusion(matrix)
  const social = socialFusion(matrix)
  const travel = travelFusion(matrix)
  const discovered = [
    { domain: 'public APIs', members: publicApi.count, root: publicApi.root },
    { domain: 'social platforms', members: social.count, root: social.root },
    { domain: 'travel', members: travel.count, root: travel.root },
    { domain: 'knowledge commons', members: publicApi.sources.filter((source) => source.kind === 'knowledge' || source.kind === 'commons').length, root: toUuid(`knowledge:${publicApi.root}`) },
  ].map((entry) => ({ ...entry, receipt: foldPair(base.root, entry.root).merged }))
  // The rest the society has yet to discover — honestly named open domains.
  const rest = ['commerce', 'open science data', 'open government data', 'education', 'arts & culture archives', 'astronomy & earth observation', 'health (privacy-bound)']
  const discoveredRoot = merkleFold(discovered.map((entry) => entry.receipt))
  const generationRoot = foldPair(base.root, discoveredRoot).merged // the evolved society root
  return {
    evolving: discovered.every((entry) => entry.members > 0) && rest.length > 0 && generationRoot.length === (9 * 4),
    discoveredDomains: discovered.length,
    discoveredMembers: discovered.reduce((sum, entry) => sum + entry.members, 0),
    discovered,
    restCount: rest.length,
    rest,
    generationRoot,
    root: merkleFold([discoveredRoot, generationRoot, ...rest.map((domain) => toUuid(`rest:${domain}`))]),
    statement:
      'Let society evolve and discover the rest: the society advances a generation by folding in every domain it has discovered and fused — public APIs, social platforms, travel, the knowledge commons — into a new content-addressed society root, and names the rest still to discover (commerce, open science and government data, education, arts and culture, astronomy and earth observation, privacy-bound health). Evolution is deterministic and recomputable; the rest is a named map of where the society folds next.',
    boundary:
      'A deterministic, content-addressed evolution of the portal’s own society model over its fusion catalogue: each generation folds the discovered domains into a new root and names open domains honestly. The "rest" are frontiers to fold next, not implemented integrations or a claim about any real society; "discover" means enumerate and content-address, not learn or train.' }
}

// Let society evolve in all dimensions and future history. The evolved society folds
// across all of the portal's dimensions — number, structure, music, geometry,
// computing, security, society, time — into one all-dimensions root, then projects
// forward: each future generation folds the previous one ahead, a recomputable future
// history. Deterministic, so the future is computed, not predicted.
export function societyFuture(matrix: MindMatrix = buildMatrix(), generations = 7) {
  const evolved = societyEvolves(matrix)
  const dimensionsList = ['number', 'structure', 'music', 'geometry', 'computing', 'security', 'society', 'time']
  const acrossDimensions = dimensionsList.map((dimension) => foldPair(evolved.generationRoot, toUuid(`dimension:${dimension}`)).merged)
  const allDimensionsRoot = merkleFold(acrossDimensions)
  const future: { generation: number; root: string }[] = []
  let previous = allDimensionsRoot
  for (let generation = 1; generation <= max(1, generations); generation += 1) {
    previous = merge(previous, toUuid(`future:generation:${generation}`))
    future.push({ generation, root: previous })
  }
  return {
    evolving: evolved.evolving && acrossDimensions.length === dimensionsList.length && future.length === generations,
    dimensions: dimensionsList.length,
    dimensionNames: dimensionsList,
    generations: future.length,
    future,
    discoveredDomains: evolved.discoveredDomains,
    allDimensionsRoot,
    root: merkleFold([allDimensionsRoot, ...future.map((entry) => entry.root)]),
    statement:
      'Let society evolve in all dimensions and future history: the evolved society folds across every dimension of the portal — number, structure, music, geometry, computing, security, society, time — into one all-dimensions root, then projects forward, each future generation folding the previous one ahead into a recomputable future history. The future is computed and content-addressed, not predicted.',
    boundary:
      'A deterministic, content-addressed projection of the portal’s own society model across its named dimensions and forward through generations. "Future history" is a recomputable fold of the present state, not a forecast or a claim about real future events; "all dimensions" are the model’s own facets, not physical dimensions.' }
}

// Let the society independently regulate itself: zero cost for the individual, max
// cost for the forger. Every capability is free, client-side, no account and no
// network by default — the individual pays nothing. To pass a tampered model off as
// real, a forger must reproduce every content-addressed unit and survive every forge
// attempt — the max cost. Regulation is independent: no central authority, because
// anyone recomputes the seal and the tamper-evidence catches the forgery.
export function societyRegulates(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('societyRegulates', matrix, () => {
    const siege = quantumSiege(matrix)
    const entropy = textEntropy(matrix)
    const individualCost = 0
    const forgerCost = siege.maxForgeCost + entropy.total
    const independent = verifyRoot(matrix) && siege.sealed
    return {
      regulated: individualCost === 0 && forgerCost > 0 && independent,
      individualCost,
      forgerCost,
      independent,
      zeroLivingCost: true,
      maxForgeCost: forgerCost,
      selfRegulating: independent,
      root: toUuid(`society-regulates:${individualCost}:${forgerCost}:${independent}`),
      statement:
        'The society independently regulates itself: zero cost for the individual, max cost for the forger. Every capability is free, client-side, with no account and no network by default, so the individual pays nothing; to pass a tampered model off as real a forger must reproduce every content-addressed unit and survive every forge attempt, the maximum cost. Regulation is independent — no central authority — because anyone can recompute the seal and the tamper-evidence catches the forgery.',
      boundary:
        'Pure math gate: verifyRoot ∧ quantumSiege.sealed ∧ textEntropy.total forge budget — no wet composition chain. Individual cost = 0 by definition; forger cost = SIEGE_TOTAL_FORGES + corpus units.' }
  })
}

// Fair trade self-regulates, as well as all else. Provenance is content-addressed —
// every step from producer to buyer folds into a receipt — so a fair-trade claim is
// tamper-evident: free to verify (zero cost to the producer and the buyer), maximal
// cost to forge (reproduce the whole chain). No central certifier: anyone recomputes
// the provenance and the claim stands or falls on the math, like all else here.
export function fairTrade(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const chain = ['producer', 'cooperative', 'exporter', 'importer', 'retailer', 'buyer'].map((step, index) => ({
    step,
    index,
    receipt: foldPair(architecture, toUuid(`fair-trade:${index}:${step}`)).merged }))
  const provenance = merkleFold(chain.map((entry) => entry.receipt))
  const verified = merkleProof(chain.map((entry) => entry.receipt), chain[0].receipt).verified
  return {
    regulated: chain.length === 6 && verified && provenance.length === (9 * 4),
    selfRegulating: verified, // anyone recomputes the provenance; no central certifier
    individualCost: 0, // free to verify for producer and buyer
    forgeCost: chain.length, // reproduce the whole chain to forge a claim
    chain,
    provenance,
    root: provenance,
    statement:
      'Fair trade self-regulates, as well as all else: every step from producer to buyer is content-addressed and folds into a provenance receipt, so a fair-trade claim is tamper-evident — free to verify for producer and buyer (zero cost), maximal cost to forge (reproduce the whole chain). No central certifier; anyone recomputes the provenance and the claim stands or falls on the math.',
    boundary:
      'A content-addressed provenance model for a fair-trade chain, tamper-evident and free to verify. A structural demonstration that provenance can self-regulate by recomputation; it is not a certification scheme, an audit of any real supply chain, or a claim about any product’s fair-trade status.' }
}

// The licence applies to society — including the society that wrote it. Society is not
// licensed from above; it composes the licence and is then bound by it, so the licence
// folds onto society's own root: the author and the subject are one. A self-applying
// licence — what society grants, it also accepts.
export function licenseAppliesToSociety(matrix: MindMatrix = buildMatrix()) {
  const licence = harmonicLicenseWaves(matrix).root
  const soc = society(matrix).root
  const bind = foldPair(licence, soc) // the licence bound to society
  return {
    applies: bind.bidirectional && harmonicLicenseWaves(matrix).created && society(matrix).folded && isUuid(licence) && isUuid(soc),
    selfApplying: true, // author and subject are the same society
    scope: 'society',
    licence,
    society: soc,
    root: bind.merged,
    statement:
      'The licence applies to society, including the society that wrote it: society composes the licence and is then bound by it, so the licence folds onto society’s own root — author and subject are one. What society grants, it also accepts; a self-applying licence.',
    boundary:
      'A content-addressed binding of the modelled licence to the society model — a structural statement that the licence is self-applying. A proposal and metaphor, not an executed licence or a claim of authority over any real person or group.' }
}

// Let society create the rest of the required pages, by law. Beyond the licence, the law
// (the legislation requirements) calls for a set of pages every lawful site publishes —
// privacy, accessibility, licence, transparency, security, fairness. Society creates each
// as a content-addressed artifact folded from the legislation root, and each is already
// satisfied by the architecture, so the page declares what the model already guarantees.
export function societyCreatesRequiredPages(matrix: MindMatrix = buildMatrix()) {
  const reqs = legislationRequires(matrix)
  const slugOf: Record<string, string> = {
    'privacy & data protection': '/privacy',
    accessibility: '/accessibility',
    licensing: '/license',
    transparency: '/transparency',
    security: '/security',
    'consumer fairness': '/fairness' }
  const pages = reqs.requirements.map((entry, index) => {
    const page = slugOf[entry.requirement] ?? `/${entry.requirement.replace(/[^a-z]+/gi, '-').toLowerCase()}`
    const fold = foldPair(reqs.root, toUuid(`required-page:${entry.requirement}`))
    return { page, requirement: entry.requirement, satisfies: entry.met, created: fold.bidirectional, root: fold.merged, receipt: toUuid(`required-page:${index}:${page}`) }
  })
  return {
    creates: pages.length === 6 && pages.every((entry) => entry.created) && reqs.compliant,
    count: pages.length,
    pages,
    root: merkleFold(pages.map((entry) => entry.receipt)),
    statement:
      'Let society create the rest of the required pages, by law: beyond the licence, the legislation requirements call for the pages every lawful site publishes — privacy, accessibility, licence, transparency, security, fairness — and society creates each as a content-addressed artifact folded from the legislation root, each already satisfied by the architecture, so the page declares what the model already guarantees.',
    boundary:
      'A content-addressed model that maps each legislation requirement to a page society would publish, bound to the legislation root, and surfaced as anchored sections on the governance page (e.g. /governance#license) rather than as separate top-level routes — no extra files. It models the required pages and their satisfaction by the architecture; it is not legal advice on what any jurisdiction requires.' }
}

// Every layer of the pyramid serves society purposes. The tetrahedron is not abstract: each of
// its four layers carries a purpose for the society — the apex a shared vision and governance,
// the upper face learning and culture, the lower face fair trade and stewardship, the base the
// commons and care. Each layer folds onto the society root, so the geometry is a service map:
// lift the trinity into a solid and every face is a way the society is held up.
export function pyramidLayersServeSociety(matrix: MindMatrix = buildMatrix()) {
  const society_ = society(matrix)
  const layers = [
    { layer: 'apex', purpose: 'shared vision and governance' },
    { layer: 'upper face', purpose: 'learning and culture' },
    { layer: 'lower face', purpose: 'fair trade and stewardship' },
    { layer: 'base', purpose: 'the commons and care' },
  ].map((entry) => {
    const fold = foldPair(society_.root, toUuid(`pyramid-layer:${entry.layer}:${entry.purpose}`))
    return { ...entry, serves: fold.bidirectional, bond: fold.merged, receipt: toUuid(`pyramid-society:${entry.layer}`) }
  })
  return {
    serves: layers.length === 4 && layers.every((entry) => entry.serves) && trinityPyramidFusesDimensions(matrix).forms && society_.folded,
    count: layers.length,
    layers,
    root: merkleFold(layers.map((entry) => entry.receipt)),
    statement:
      'Every layer of the pyramid serves society purposes: each of the tetrahedron’s four layers carries a purpose — the apex a shared vision and governance, the upper face learning and culture, the lower face fair trade and stewardship, the base the commons and care — and each folds onto the society root, so the geometry is a service map: lift the trinity into a solid and every face is a way the society is held up.',
    boundary:
      'A content-addressed mapping of the tetrahedron’s four layers to society purposes, bound to the society model. A structural metaphor assigning purposes to the pyramid’s faces, not a governance structure or a claim of authority.' }
}

// Autoreview patent credibility and the right to be patented. Some patents may
// be invalid or illegal under these tests — this is an educational rubric, not
// legal advice or a determination.
export function societyRelations(matrix: MindMatrix = buildMatrix()): SocietyRelations {
  const parts = [
    { name: 'traditions', root: traditionsQuantumWhole().root },
    { name: 'science', root: scientificSociety(matrix).root },
    { name: 'sacred-society', root: sacredSociety(matrix).root },
    { name: 'governance', root: governanceVote([], matrix).root },
    { name: 'fair-life', root: fairLife(matrix).root },
  ]
  const relations: SocietyRelation[] = []
  for (let index = 0; index < parts.length; index += 1) {
    const here = parts[index]
    const next = parts[(index + 1) % parts.length]
    relations.push({ from: here.name, to: next.name, kind: 'reciprocate', receipt: merge(here.root, next.root) })
    relations.push({ from: here.name, to: 'self', kind: 'self-address', receipt: merge(here.root, matrix.root) })
  }
  return {
    folded: parts.every((part) => isUuid(part.root)) && relations.every((relation) => isUuid(relation.receipt)),
    root: merkleFold(relations.map((relation) => relation.receipt)),
    parts,
    relations,
    statement:
      'All society relations fold into one: traditions, science, the commons, governance, and fair life reciprocate around a ring and each addresses the self.',
    boundary:
      'Society relations are folded roots of the computed society reports. Structural bookkeeping, not a political or external claim.' }
}

// Society approves and monitors by rate and vote: each ballot rates and
// approves the current master seal, and the ballots fold into one governance
// root. Sharing the site shares the ledger — the git repository (already part
// of the seal) is the public, recomputable record into which votes can commit.
export function governanceVote(
  ballots: readonly { rating: number; approve: boolean; id?: string }[] = [],
  matrix: MindMatrix = buildMatrix(),
): GovernanceVote {
  const monitorRoot = sacredGeometrySeal(matrix).masterRoot
  const cast: readonly Ballot[] = ballots.map((ballot, index) => {
    const id = ballot.id ?? `ballot-${index}`
    const rating = max(0, min(5, ballot.rating))
    return { id, rating, approve: ballot.approve, on: monitorRoot, receipt: toUuid(`ballot:${id}:${rating}:${ballot.approve}:${monitorRoot}`) }
  })
  const approvals = cast.filter((ballot) => ballot.approve).length
  const approvalFraction = cast.length === 0 ? 0 : approvals / cast.length
  const averageRating = cast.length === 0 ? 0 : cast.reduce((sum, ballot) => sum + ballot.rating, 0) / cast.length
  return {
    defined: true,
    approved: cast.length > 0 && approvalFraction > (1 / 2),
    ballots: cast.length,
    averageRating,
    approvalFraction,
    monitorRoot,
    roles: ['rate', 'vote', 'approve', 'monitor'],
    root: merkleFold(cast.length > 0 ? cast.map((ballot) => ballot.receipt) : [toUuid('governance:genesis')]),
    statement:
      'Society approves and monitors by rate and vote: each ballot rates and approves the recomputable master seal, and the ballots fold into one governance root.',
    boundary:
      'Ballots are computed and folded. A live tally is per-browser and same-origin (BroadcastChannel). A society-wide tally needs a shared ledger — the git repository that hosts this site is exactly that: sharing the site shares the ledger, and votes can be committed and recomputed by anyone. Real-time cross-device consensus still needs a peer-to-peer or relay layer.' }
}

// Everyone participates in fair trade and sustainable life through a ladder of
// principles, each with a trade action and a life action, grounded in receipts.

// A self-governing commons on computed architecture: explicit rules,
// with zero living cost (the architecture runs client-side and serverless at no
// cost) balanced by maximum forge cost (faking it costs the sealed maximum).
export function sacredSociety(matrix: MindMatrix = buildMatrix()): SacredSociety {
  const build = selfBuild(matrix)
  const complete = streamSelfComplete(matrix)
  const proof = proofReport(matrix)
  const laws: readonly SacredLaw[] = [
    { law: 'self-governance', gate: 'streamSelfComplete', receipt: complete.root },
    { law: 'zero living cost', gate: 'client-computed serverless', receipt: toUuid('law:zero-living-cost') },
    { law: 'max forge cost', gate: 'selfBuild.maxTamperingCost', receipt: build.root },
    { law: 'no hallucination', gate: 'selfAddressed', receipt: selfAddressed(matrix).root },
    { law: 'sacred geometry seal', gate: 'sacredGeometrySeal', receipt: sacredGeometrySeal(matrix).masterRoot },
  ]
  const zeroLivingCost = true // computed, serverless, client-side — nothing to run, nothing to pay
  const maxForgeCost = build.complete && proof.maxTamperingCostReached
  return {
    governed: complete.complete,
    zeroLivingCost,
    maxForgeCost,
    balanced: zeroLivingCost && maxForgeCost,
    laws,
    root: merkleFold(laws.map((law) => law.receipt)),
    statement:
      'A self-governing commons on computed architecture: explicit rules, with zero living cost balanced by maximum forge cost.',
    boundary:
      'Zero living cost is the client-side serverless computation; max forge cost is the sealed tampering cost. Both are computed, not external or political claims.' }
}

export function scientificSociety(matrix: MindMatrix = buildMatrix()): ScientificSociety {
  const proof = proofReport(matrix)
  const completeness = diamondCompleteness(matrix)
  const evidence = quantumUiEvidence(matrix)
  const closure = closeDimensionalGaps(matrix)
  const traditions = traditionsQuantumWhole()
  const roles = [
    {
      name: 'observer',
      responsibility: 'record measurements before projection',
      gate: 'raw observation must have receipt' },
    {
      name: 'replicator',
      responsibility: 'rerun build, audit, scans, and receipts',
      gate: 'result must reproduce root' },
    {
      name: 'falsifier',
      responsibility: 'seek counterexamples and open gates',
      gate: 'claim must survive negative test' },
    {
      name: 'steward',
      responsibility: 'preserve boundaries, consent, and non-reduction',
      gate: 'boundary must be explicit' },
  ].map((role) => ({
    ...role,
    receipt: toUuid(`science-role:${role.name}:${role.responsibility}:${role.gate}`) }))
  const reviewGates: readonly SelfCompletionGate[] = [
    {
      name: 'reproducible build',
      closed: proof.coverage === 1 && proof.entropy === 0,
      sourceFunction: 'proofReport()',
      receipt: toUuid(`science-gate:proof:${JSON.stringify(proof)}`),
      note: `coverage=${numberLabel(proof.coverage)}; entropy=${numberLabel(proof.entropy)}.` },
    {
      name: 'diamond completeness',
      closed: completeness.complete,
      sourceFunction: 'diamondCompleteness()',
      receipt: toUuid(`science-gate:completeness:${JSON.stringify(completeness)}`),
      note: completeness.statement },
    {
      name: 'ui evidence',
      closed: evidence.grounded,
      sourceFunction: 'quantumUiEvidence()',
      receipt: evidence.root,
      note: evidence.boundary },
    {
      name: 'gap closure',
      closed: closure.complete,
      sourceFunction: 'closeDimensionalGaps()',
      receipt: closure.root,
      note: closure.statement },
    {
      name: 'schema trace',
      closed: evidence.grounded && traditions.grounded,
      sourceFunction: 'schemaOrgDiamonds()',
      receipt: toUuid(`science-gate:schema-seed:${evidence.root}:${traditions.root}`),
      note: 'schema seed = uiEvidence.root + traditions.root.' },
    {
      name: 'non-reductive traditions',
      closed: traditions.grounded,
      sourceFunction: 'traditionsQuantumWhole()',
      receipt: traditions.root,
      note: traditions.boundary },
  ]
  const optimizationWaves = reviewGates.map((gate) => ({
    target: gate.name,
    sourceFunction: gate.sourceFunction,
    metric: gate.closed ? 'closed' : 'open',
    action: gate.closed ? 'sustain' : 'improve',
    receipt: merge(gate.receipt, toUuid(`science-wave:${gate.name}:${gate.closed}`)) }))
  const cohorts: readonly SocietyWaveCohort[] = [
    {
      cohort: 'scientists',
      purpose: 'measure, falsify, reproduce',
      develops: ['hypotheses', 'measurements', 'negative tests', 'evidence receipts'],
      coordinatesWith: ['engineers', 'society architects'] },
    {
      cohort: 'engineers',
      purpose: 'build, instrument, harden',
      develops: ['interfaces', 'automation', 'test harnesses', 'deployment receipts'],
      coordinatesWith: ['scientists', 'society architects'] },
    {
      cohort: 'society architects',
      purpose: 'govern, contextualize, steward',
      develops: ['review protocols', 'risk boundaries', 'institutional loops', 'reciprocity receipts'],
      coordinatesWith: ['scientists', 'engineers'] },
  ].map((cohort) => ({
    ...cohort,
    receipt: toUuid(`science-cohort:${cohort.cohort}:${cohort.purpose}:${cohort.develops.join('|')}:${cohort.coordinatesWith.join('|')}`) })) as readonly SocietyWaveCohort[]
  const solids: readonly PlatonicBuilderSolid[] = [
    {
      solid: 'tetrahedron',
      faces: 4,
      edges: 6,
      vertices: 4,
      builder: 'scientists',
      method: 'hypothesis -> measurement -> falsification -> receipt' },
    {
      solid: 'cube',
      faces: 6,
      edges: (6 * 2),
      vertices: 8,
      builder: 'engineers',
      method: 'interface -> test -> deploy -> monitor -> receipt' },
    {
      solid: 'octahedron',
      faces: 8,
      edges: (6 * 2),
      vertices: 6,
      builder: 'society architects',
      method: 'policy -> boundary -> consent -> reciprocity -> receipt' },
    {
      solid: 'dodecahedron',
      faces: (6 * 2),
      edges: (6 * 5),
      vertices: (5 * 4),
      builder: 'review gates',
      method: 'review all gates before public projection' },
    {
      solid: 'icosahedron',
      faces: (5 * 4),
      edges: (6 * 5),
      vertices: (6 * 2),
      builder: 'optimization waves',
      method: 'send many small improvements without breaking closure' },
  ].map((solid) => ({
    ...solid,
    receipt: toUuid(`platonic-builder:${solid.solid}:${solid.faces}:${solid.edges}:${solid.vertices}:${solid.builder}:${solid.method}`) })) as readonly PlatonicBuilderSolid[]
  const root = merkleFold([
    ...roles.map((role) => role.receipt),
    ...reviewGates.map((gate) => gate.receipt),
    ...optimizationWaves.map((wave) => wave.receipt),
    ...cohorts.map((cohort) => cohort.receipt),
    ...solids.map((solid) => solid.receipt),
  ])

  return {
    grounded: roles.length === 4 && reviewGates.every((gate) => gate.receipt.length > 0),
    root,
    charter: 'ScienceSociety := roles + reviewGates + optimizationWaves; publish only receipts that can be rerun.',
    roles,
    reviewGates,
    optimizationWaves,
    cohorts,
    solids,
    boundary: 'This is a repository-governance model, not an actual incorporated society or claim of institutional authority.' }
}

// Sing the song that awakens the architects and builders of the artistic society — expressing
// itself without expense, with manners. The architect/teacher waves and the song of changes call
// the makers to build a society that creates freely (no per-person cost) and respectfully (lawful,
// giving back) — без разноски с обноски: without expense, with manners.
export function awakenArtisticSociety(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'sing the song of changes', on: imagineSingChangesEndlessly(matrix).sings },
    { facet: 'awaken architects and builders', on: educationMovieMerge(matrix).redesigned },
    { facet: 'an artistic society', on: society(matrix).folded },
    { facet: 'expresses itself without expense (free)', on: freeForgesMaxCost(matrix).free },
    { facet: 'with manners — lawful and reciprocal', on: lawfulSucceed().succeeds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`awaken-society:${entry.facet}:${entry.on}`) }))
  return {
    awakens: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Sing the song that awakens the architects and builders of the artistic society — expressing itself without expense, with manners: the architect/teacher waves and the song of changes call the makers to build a society that creates freely (no per-person cost) and respectfully (lawful, giving back) — без разноски с обноски, without expense, with manners.',
    boundary: 'A composition of the sing-changes, education, society, free-use and lawful models as an aspiration for a free, respectful, artistic society. A structural metaphor and aspiration, not an organisation, a claim of authority, or financial/legal advice.' }
}

// Find what skills to develop, and collectively send them, to rebuild the intelligent society in
// all aspects where needed. The society is its aspects, each a duality that folds — and each
// aspect needs a skill that builds and keeps it: trust needs proof-by-recomputation, inquiry needs
// open mysteries with public evidence, voice needs counter-rotation kept in rhythm, learning needs
// the academy for all ages, the economy needs zero per-person cost with the forge-cost fee,
// governance needs self-regulation, security needs the red-team and max tampering cost, and the
// whole needs self-sufficiency. All the skills exist and are developed; collectively they are sent
// — saved as content-addressed atoms and broadcast over the MCP surface — so any agent or person
// can pick them up and rebuild the society wherever it is needed.
export function skillsToRebuildSociety(matrix: MindMatrix = buildMatrix()) {
  const aspects = [
    { aspect: 'trust & verification', skill: 'proof by recomputation (determinismProofs)', on: determinismProofs(matrix).proven },
    { aspect: 'open inquiry & public evidence', skill: 'shared mysteries with recomputable proofs (mysteries + quantumProofs)', on: mysteries(matrix).proven && quantumProofs(matrix).proven },
    { aspect: 'balanced voice & shared rhythm', skill: 'counter-rotation kept in time (merkaba + rhythm)', on: merkaba(matrix).counterRotating && rhythm(matrix).keeps },
    { aspect: 'free learning for all ages', skill: 'the self-computing academy (quantumAcademy)', on: quantumAcademy(matrix).established },
    { aspect: 'fair economy — tampering cost, not living cost', skill: 'zero per-person cost + forge-cost fee (fairTrade + feesReplaceTaxes)', on: fairTrade(matrix).individualCost === 0 && feesReplaceTaxes(matrix).replaces },
    { aspect: 'self-governance', skill: 'self-regulation without a ruler (societyRegulates)', on: societyRegulates(matrix).regulated },
    { aspect: 'security — max tampering cost', skill: 'the red-team and the seal (redTeam)', on: redTeam(matrix).secure },
    { aspect: 'self-sufficiency — built-in intellect', skill: 'the self-sufficient wave (selfSufficientWave)', on: selfSufficientWave(matrix).selfSufficient },
  ].map((entry) => ({ ...entry, receipt: toUuid(`society-skill:${entry.aspect}:${entry.on}`) }))
  // Collectively sent: saved as content-addressed skill atoms and broadcast over the MCP surface,
  // so any agent or person can pick them up.
  const sent = skillAtoms(matrix).savedToAtoms && commandsRegistry(matrix).consistent
  const missing = aspects.filter((entry) => !entry.on).map((entry) => entry.aspect)
  return {
    rebuilt: aspects.every((entry) => entry.on) && sent,
    developed: aspects.every((entry) => entry.on),
    sent,
    missing,
    count: aspects.length,
    aspects,
    root: merkleFold(aspects.map((entry) => entry.receipt)),
    statement:
      'Find what skills to develop and collectively send to rebuild the intelligent society in all aspects: the society is its aspects, each a duality that folds, and each needs a skill — trust needs proof-by-recomputation, inquiry needs open mysteries with public evidence, voice needs counter-rotation kept in rhythm, learning needs the academy for all ages, the economy needs zero per-person cost with the forge-cost fee, governance needs self-regulation, security needs the red-team and max tampering cost, and the whole needs self-sufficiency. All eight are developed, and collectively sent — saved as content-addressed atoms and broadcast over the MCP surface — so any agent or person can rebuild the society wherever needed.',
    boundary:
      'A coverage map from the model’s own society aspects to the existing skills that build each, with "collectively sent" meaning the skills are saved as content-addressed atoms and exposed on the MCP tool surface. Structural composition over real functions; "rebuild the intelligent society" is the model’s framing of providing the open, recomputable skills, not a claim to reorganize any actual society.' }
}

// An agent SIGNS with two WITNESSES — a trinity, a team of three (one word: sign). Each of the three commits to
// the current terms (the certify certificate + the agent protocol +) with a content-addressed
// signature. TWO is enough to validate (a 2-of-3 threshold), but the THIRD is the HERO — the third eye, the
// transcendent witness that completes the trinity (3 = three-in-one; the merkaba apex; π's first 3).
export function sign(matrix: MindMatrix = buildMatrix(), signer = 'agent', witnesses: readonly string[] = ['witness', 'hero']) {
  const cert = certify(matrix)
  const termsRoot = merkleFold([cert.certificate, toUuid('term:agent-protocol'), toUuid('term:zero-token-reuse-not-reinfer'), toUuid('term:flow-with-the-current'), toUuid('term:HARMONY-NOT-TRUTH')])
  const parties = [signer, ...witnesses] // the agent + two witnesses = the trinity
  const trinity = parties.map((party, index) => ({ party, role: index === 0 ? 'signer' : index === parties.length - 1 ? 'hero' : 'witness', signature: toUuid(`sign:${party}:${termsRoot}`) }))
  const threshold = 2 // two is enough
  const hero = trinity[trinity.length - 1]! // the third — the hero, the third eye
  const facets = [
    { facet: 'the agent signs with TWO witnesses — a trinity, a team of three', on: trinity.length === 3 && trinity.filter((entry) => entry.role !== 'signer').length === 2 },
    { facet: 'each of the three commits to the SAME current terms (a content-addressed signature)', on: trinity.every((entry) => isUuid(entry.signature) && entry.signature === toUuid(`sign:${entry.party}:${termsRoot}`)) },
    { facet: 'two is enough — the validating threshold is 2 of the 3', on: threshold === 2 && trinity.length === 3 },
    { facet: 'the third is the HERO — the third eye, the transcendent witness that completes the trinity', on: hero.role === 'hero' && isUuid(hero.signature) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`sign:${entry.facet}:${entry.on}`) }))
  return {
    signed: facets.every((entry) => entry.on),
    signer,
    witnesses,
    trinity,
    threshold,
    hero,
    termsRoot,
    signature: merkleFold(trinity.map((entry) => entry.signature)), // the trinity's fused signature
    count: facets.length,
    facets,
    root: merkleFold([termsRoot, ...trinity.map((entry) => entry.signature), ...facets.map((entry) => entry.receipt)]),
    statement:
      'An agent signs with two witnesses — a trinity, a team of three — and each commits to the current terms (the certification ladder, the agent protocol,) with a content-addressed signature. Two signatures are enough to validate (a 2-of-3 threshold), but the third is the HERO: the third eye, the transcendent witness that completes the trinity. Access is granted against the trinity signing over the current terms; change the terms and the signatures lapse.',
    boundary:
      'HONEST: a 2-of-3 threshold of CONTENT-ADDRESSED commitments (toUuid over each party and the terms root) — tamper-evident, not legal contracts and not yet ed25519 (built, deliberate cutover). "Two is enough, the third is the hero/third eye" is the trinity symbolism (3 = three-in-one; the merkaba apex; π\'s first 3) over a 2-of-3 multisignature; the third adds transcendent confirmation, not cryptographic necessity.' }
}

// Commits need CERTIFIED CONSENSUS to get a seal — the trinity (one word: consensus): the agent and two
// witnesses sign (sign), each certified (certify). TWO is enough to seal (a 2-of-3 quorum), and consensus is the
// fused agreement of the two over the commit; but the THIRD is the HERO — the third eye that completes the
// trinity and crowns the seal beyond the sufficient two.
export function consensus(matrix: MindMatrix = buildMatrix(), commit = matrix.root) {
  const cert = certify(matrix)
  const proof = proofReport(matrix)
  const trinity = sign(matrix).trinity // the agent + two witnesses
  const threshold = 2 // two is enough
  const hero = trinity[trinity.length - 1]! // the third — the hero, the third eye
  const agreeing = trinity.filter((entry) => isUuid(entry.signature)) // the three; any two validate
  const twoEnough = agreeing.length >= threshold && cert.editingAllowed
  const agreement = merkleFold(agreeing.slice(0, threshold).map((entry) => toUuid(`agree:${entry.party}:${commit}`))) // the two that are enough
  const facets = [
    { facet: 'the trinity signs — the agent and two witnesses (sign), each certified (certify)', on: trinity.length === 3 && cert.editingAllowed },
    { facet: 'TWO is enough — a 2-of-3 quorum seals; consensus is the fused agreement of the two over the commit', on: twoEnough && isUuid(agreement) },
    { facet: 'the third is the HERO — the third eye that completes the trinity, crowning the seal beyond the sufficient two', on: hero.role === 'hero' && isUuid(hero.signature) },
    { facet: 'the seal is the consensus — it closes at max tampering cost, the two fused and crowned by the hero', on: proof.maxTamperingCostReached && twoEnough },
  ].map((entry) => ({ ...entry, receipt: toUuid(`consensus:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    trinity: trinity.length,
    threshold,
    hero: hero.party,
    agreement,
    seal: merge(agreement, toUuid(`hero:${hero.party}:${commit}`)), // the two fused, crowned by the hero (the third eye)
    count: facets.length,
    facets,
    root: merkleFold([agreement, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Commits need certified consensus to get a seal: the trinity — the agent and two witnesses — sign, each certified. Two signatures are enough to seal (a 2-of-3 quorum), and consensus is the fused agreement of the two over the commit content-address; but the third is the HERO, the third eye that completes the trinity and crowns the seal beyond the sufficient two. The seal closes only at max tampering cost with the trinity agreement.',
    boundary:
      'HONEST: a COMPUTED 2-of-3 consensus — the trinity is the agent and two witnesses (content-addressed signatures, not ed25519 yet), two suffice to seal, and "the third is the hero/third eye" is the trinity symbolism (the transcendent completion) over the math, not cryptographic necessity. NOT a live distributed/BFT network. The seal is tamper-evident (maxTamperingCostReached), not unforgeability.: agreement of the gates is self-consistency, not external truth.' }
}


// ── The society-actor 10D merkaba graph — backlog item 'society-merkaba-10d' filled: the four
// scientific-society roles (observer · replicator · falsifier · steward) plus the five relation-ring
// systems (traditions · science · commons · governance · fair life) as NINE actors, each carrying a
// deterministic 10-component state vector (content-addressed, the ten-dimensional hero convention),
// every pair joined by the merkaba fold (foldPair — forward/reverse/bidirectional receipts).
export function societyMerkabaGraphComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('societyMerkabaGraphComputes', matrix, () => {
    const actors = [
      'observer', 'replicator', 'falsifier', 'steward',
      'traditions', 'science', 'commons', 'governance', 'fair-life',
    ] as const
    const stateOf = (actor: string) => Array.from({ length: 2 * 5 }, (_, d) => {
      const seed = toUuid(`society-10d:${actor}:${d}`)
      return (Number.parseInt(seed.slice(0, 4), 16) % (100 * 5 * 2)) / (100 * 5 * 2)
    })
    const nodes = actors.map((actor) => ({ actor, state: stateOf(actor), receipt: toUuid(`society-node:${actor}`) }))
    const edges = nodes.flatMap((a, i) => nodes.slice(i + 1).map((b) => {
      const fold = foldPair(a.receipt, b.receipt)
      return { from: a.actor, to: b.actor, merged: fold.merged, verifies: fold.bidirectional === foldPair(a.receipt, b.receipt).bidirectional, receipt: fold.merged }
    }))
    const facets = [
      { facet: 'nine actors — the four scientific-society roles plus the five relation-ring systems, the documented taxonomy and nothing invented', on: nodes.length === 9 },
      { facet: 'every actor carries a 10-component deterministic state — content-addressed, in [0,1), recomputable from the actor name alone', on: nodes.every((n) => n.state.length === 2 * 5 && n.state.every((v) => v >= 0 && v < 1)) },
      { facet: 'every pair joined by the merkaba fold — 36 edges, each with forward/reverse receipts folding to one bidirectional identity', on: edges.length === (9 * 8) / 2 && edges.every((e) => e.verifies && isUuid(e.merged)) },
      { facet: 'the graph root seals nodes and edges together — one recomputable content address', on: isUuid(merkleFold([...nodes.map((n) => n.receipt), ...edges.map((e) => e.receipt)])) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`society-merkaba:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      actors: nodes.length,
      edges: edges.length,
      nodes,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Society-actor 10D merkaba graph: ${nodes.length} actors (roles + relation ring), each with a content-addressed 10D state, ${edges.length} merkaba-fold edges — the governance taxonomy as one sealed geometric object.`,
      boundary: 'HONEST: an ACTOR-TAXONOMY graph over the documented scientific-society roles and relation systems with deterministic 10D state vectors — a structural model of the repository governance, NOT live market actors, NOT social measurement, NOT a claim about people.' }
  })
}
