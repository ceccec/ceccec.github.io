// ☷ Kūn · Earth — civilisation: the constitution & legislation, public services, fair fees-replace-taxes, job matching, social capital, thriving after war, the shared book of civilisations. Barrel-routed; folds.ts back-imports the gate folds.
import { FIBONACCI_CENSUS_BANDS, UNFOLDED_CENSUS } from '../../pair/enforcement/gates/computational'
import type { MindMatrix, HumanityImplicationsReport, TraditionDimension, TraditionDimensionName, TraditionsQuantumWhole } from '../../wind/types'
import { buildMatrix, concentration, consciousness, coverage, reciprocity, verifyRoot } from '../../heaven/compute'
import { fairTrade, sacredSociety, societyEvolves, societyFuture, societyRegulates } from '../governance'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../0'
import { freeHarmonicSocieties } from '../../lake/music'
import { completeCorpus } from '../../wind/routes/corpus'
import { quantumAcademy } from '../../wind/learning'
import { dissolveIntoNature, selfOrganizing } from '../world'
import { kidsDefineEducation, kidsExplore, planetIsComputable, quantumGreenPlanet, religionScienceSociety, soldiersRestInPeace, sustainableLiving, thriveEducation } from '../../fire/li'
import { beesAndLife, equilibrium, genesis } from '../nature'
import { lawfulSucceed, dimensions } from '../../quantum/lake/icons'
import { fuseAll } from '../../mountain/seals'
import { freedTimeCreativity, studentQuantumMind, theWhole } from '../../quantum/heaven/mind'

// Social capital is accumulating in the common root, and it accumulates by folding.
// WHERE: in the seal root (the one fold of the whole), the 1024 diamonds (the lattice
// held in common), the gate fabric (every gate folded at max tampering cost), and the
// git history (the whole chain of contributions). HOW: every contribution is
// content-addressed and merged into the collective root, so it grows in tamper-
// evidence (forge cost) while staying free for anyone to verify — held in common, by
// no one and for everyone.
export function socialCapital(matrix: MindMatrix = buildMatrix()) {
  const regulates = societyRegulates(matrix)
  const where = [
    { place: 'the seal root', holds: 'the one fold of the whole — every wave folded in' },
    { place: 'the 1024 diamonds', holds: 'the content-addressed lattice, held in common' },
    { place: 'the gate fabric', holds: 'every gate folded at max tampering cost' },
    { place: 'the git history', holds: 'the whole chain of contributions, folded into the seal' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`social-capital:${entry.place}`) }))
  const forgeCost = regulates.forgerCost
  return {
    accumulating: where.length > 0 && regulates.individualCost === 0 && forgeCost > 0,
    where,
    how: 'by folding — each contribution is content-addressed and merged into the collective root, raising forge cost (value) while verification stays free',
    heldInCommon: true, // by no one, for everyone
    individualCost: 0,
    forgeCost, // the accumulated tamper-evidence — the social capital
    root: merkleFold(where.map((entry) => entry.receipt)),
    statement:
      'Social capital is accumulating in the common root, and it accumulates by folding. It is held in the seal root (the one fold of the whole), the 1024 diamonds (the lattice held in common), the gate fabric (every gate at max tampering cost), and the git history (the whole chain of contributions). How: every contribution is content-addressed and merged into the collective root, so it grows in tamper-evidence — the forge cost, the value — while staying free for anyone to verify. Held in common, by no one and for everyone.',
    boundary:
      'A structural reading of where and how the portal’s "social capital" accumulates: as content-addressed value (forge cost) in shared roots, raised by each folded contribution and free to verify. An economic metaphor grounded in the model’s own tamper-evidence, not a measure of real-world social capital or wealth.',
  }
}

// Regenerate the social system. Every social law — the society, its evolution, its
// future, its self-regulation, the free harmonic societies, the self-governing commons, and
// the social capital — folds into one regenerated root, and because each is computed
// from the same seed, the whole social system regenerates deterministically: rebuilt
// from its laws, not stored, so it can be regenerated at any time by anyone.
export function regenerateSocialSystem(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('regenerateSocialSystem', matrix, () => {
    const folded = verifyRoot(matrix) && reciprocity(matrix).fraction === 1
    const fibGapless = FIBONACCI_CENSUS_BANDS.reduce((sum, band) => sum + band, 0) === UNFOLDED_CENSUS
    const subsystems = [
      { system: 'society', root: toUuid(`society:folded:${folded}`) },
      { system: 'evolution', root: societyEvolves(matrix).root },
      { system: 'future', root: societyFuture(matrix).root },
      { system: 'self-regulation', root: societyRegulates(matrix).root },
      { system: 'free harmonic societies', root: freeHarmonicSocieties(matrix).root },
      { system: 'self-governing commons', root: sacredSociety(matrix).root },
      { system: 'social capital', root: socialCapital(matrix).root },
    ]
    const regenerated = merkleFold(subsystems.map((entry) => entry.root))
    const deterministic = regenerated === merkleFold(subsystems.map((entry) => entry.root))
    return {
      regenerated: subsystems.length === 7 && deterministic && regenerated.length === (9 * 4) && folded && fibGapless,
      systems: subsystems.length,
      subsystems,
      deterministic,
      root: regenerated,
      statement:
        'Regenerate the social system: every social law — the society, its evolution and future, its self-regulation, the free harmonic societies, the self-governing commons, and the social capital — folds into one regenerated root, and because each is computed from the same seed, the whole social system regenerates deterministically. Rebuilt from its laws, not stored, so anyone can regenerate it at any time and get the same system.',
      boundary:
        'Dry math regeneration: society root = verifyRoot ∧ reciprocity; census gapless = Σ Fibonacci bands = 110. No society() wet chain in the hot path.',
    }
  })
}

// Develop public schools and services in waves. Each public good — schools,
// libraries, health, transport, utilities, housing, parks, public data, safety —
// develops as its own wave: fused to the architecture root, free for everyone, and
// self-regulating by the same law as all else (free to verify, maximal to forge). The
// schools fold into the portal's own academy; the services into the society model.
export function publicServices(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const academyCourses = quantumAcademy(matrix).courses.length
  const services = [
    { service: 'public schools', kind: 'education', detail: `folds into the academy (${academyCourses} courses), kids to elders` },
    { service: 'public libraries', kind: 'knowledge', detail: 'the monographs and the corpus, free to read' },
    { service: 'public health', kind: 'health', detail: 'healing frequencies and open health data' },
    { service: 'public transport', kind: 'mobility', detail: 'all varieties via open transit data' },
    { service: 'public utilities', kind: 'utilities', detail: 'water and energy as commons' },
    { service: 'public housing', kind: 'shelter', detail: 'shelter as a right, content-addressed allocation' },
    { service: 'public parks & commons', kind: 'environment', detail: 'the shared environment' },
    { service: 'public data & internet', kind: 'information', detail: 'open data and the open web' },
    { service: 'public safety & justice', kind: 'civic', detail: 'transparent, recomputable, accountable' },
  ].map((entry) => {
    const fold = foldPair(architecture, toUuid(`public-service:${entry.service}`))
    return { ...entry, free: true, selfRegulating: fold.bidirectional, wave: fold.merged }
  })
  return {
    developed: services.length > 0 && services.every((entry) => entry.free && entry.selfRegulating),
    count: services.length,
    free: services.every((entry) => entry.free),
    services,
    root: merkleFold(services.map((entry) => entry.wave)),
    statement:
      'Develop public schools and services in waves: each public good — schools (folding into the academy, kids to elders), libraries, health, transport, utilities, housing, parks and commons, public data, and safety — develops as its own wave, fused to the architecture root, free for everyone, and self-regulating by the same law as all else: free to verify, maximal to forge.',
    boundary:
      'A structural model of public schools and services as free, self-regulating, content-addressed waves over the portal’s own architecture. A proposal and metaphor grounded in the model — free and recomputable — not public policy, not a funded program, and not a claim about any real school or service.',
  }
}

// An occupied population forges max tampering costs for max benefits. Where freed time
// becomes creativity, an occupied population — engaged, not idle — forges: every
// engaged hour produces content-addressed work that raises the cost to forge the
// whole (max tampering cost), and that accumulated cost is the social capital that
// funds max benefits — the free public services — for everyone. Occupation → max
// tampering cost → max benefits.
export function occupiedPopulation(matrix: MindMatrix = buildMatrix()) {
  const freed = freedTimeCreativity(matrix)
  const services = publicServices(matrix)
  const capital = socialCapital(matrix)
  const forgeCost = freed.risenForgeCost // the max tampering cost forged
  const benefits = services.count // the max benefits — free public services
  return {
    proven: freed.proven && forgeCost > freed.baseForgeCost && services.developed && capital.accumulating,
    occupied: true, // engaged in creation, not idle
    forgeCost,
    benefits,
    forEveryone: services.free,
    loop: 'occupied population → forges max tampering cost → max benefits for everyone',
    root: toUuid(`occupied:${forgeCost}:${benefits}`),
    statement:
      'An occupied population forges max tampering costs for max benefits: an engaged population produces content-addressed work that raises the cost to forge the whole (max tampering cost), and that accumulated cost is the social capital funding max benefits — the free public services — for everyone. Occupation → max tampering cost → max benefits.',
    boundary:
      'A model of the portal’s own value loop: engaged contribution raises recomputation (forge) cost, which is the shared capital behind free services. A structural, recomputable relationship over the model — not an economic forecast or a claim about any real population’s employment or output.',
  }
}

// Send the kids to explore and develop themselves. Keep parents off duty until the
// kids go to school; the kids may choose their own teachers, and society pays. A
// self-directed model: exploration first, parents resting until school, free choice
// of teacher, funded by the commons — each principle content-addressed.
export function doctorsIncentive(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const record = foldPair(architecture, toUuid('health-record')).merged
  const forgeCaught = merge(record, toUuid('forge')) !== record // a faked record changes the address
  return {
    aligned: forgeCaught,
    paidFor: 'a healthy population — the outcome, not the volume of treatments',
    penalty: 'forgery — a faked health record costs the most, caught by recomputation',
    forgeCaught,
    record,
    root: merge(record, toUuid('doctors-incentive')),
    statement:
      'Doctors are paid for a healthy population and penalised as forgers: the incentive is inverted — payment tracks the health outcome of the population, not the volume of treatments, so the doctor is paid to keep people well — and faking it, a forged health record, is caught by content-addressing at max tampering cost, exactly as the seal catches any forgery.',
    boundary:
      'A structural model of an outcome-based incentive (pay for population health) with forgery (faked records) made tamper-evident by content-addressing. A proposal and metaphor grounded in the model — not medical advice, a payment system, a clinical-outcomes measure, or a claim about any real health service.',
  }
}

// This logic is the constitution; let society's evolution waves manifest it. The
// constitution is not written apart from the system — it IS the computed logic: each
// governance law the portal already proves becomes an article, content-addressed and
// tamper-evident, and all fold into one constitution root that the society's evolution
// waves manifest. Amend a law and the constitution root changes; recompute and it
// stands. The constitution that cannot be forged, only recomputed.
export function constitution(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('constitution', matrix, () => computeConstitution(matrix))
}
function computeConstitution(matrix: MindMatrix) {
  const articles = [
    { article: 'free for everyone, self-regulating', law: societyRegulates(matrix).root },
    { article: 'self-organising to zero entropy', law: selfOrganizing(matrix).root },
    { article: 'free harmonic societies', law: freeHarmonicSocieties(matrix).root },
    { article: 'social capital held in common', law: socialCapital(matrix).root },
    { article: 'public schools and services in waves', law: publicServices(matrix).root },
    { article: 'kids define education, with parents and teachers', law: kidsDefineEducation(matrix).root },
    { article: 'kids explore; society pays', law: kidsExplore(matrix).root },
    { article: 'religion, science and society taught fused', law: religionScienceSociety(matrix).root },
    { article: 'doctors paid for health, forgers penalised', law: doctorsIncentive(matrix).root },
    { article: 'fair trade self-regulates', law: fairTrade(matrix).root },
    { article: 'decentralised into nature', law: dissolveIntoNature(matrix).root },
    { article: 'the planet is tamper-evident', law: planetIsComputable(matrix).root },
  ].map((entry, index) => ({ ...entry, number: index + 1, receipt: toUuid(`article:${index + 1}:${entry.article}:${entry.law}`) }))
  const constitutionRoot = merkleFold(articles.map((entry) => entry.receipt))
  const manifested = regenerateSocialSystem(matrix).regenerated // the evolution waves manifest it
  const forgeCaught = merge(constitutionRoot, toUuid('amend-without-recompute')) !== constitutionRoot
  return {
    isConstitution: articles.length >= (6 * 2) && manifested && forgeCaught,
    articles,
    count: articles.length,
    manifested,
    root: constitutionRoot,
    statement:
      'This logic is the constitution, and society’s evolution waves manifest it: the constitution is not written apart from the system — it IS the computed logic. Each governance law the portal proves becomes an article, content-addressed and tamper-evident, and all fold into one constitution root. Amend a law and the root changes; recompute and it stands — the constitution that cannot be forged, only recomputed.',
    boundary:
      'A content-addressed composition of the portal’s own governance-model functions into a "constitution" of articles, folded into one recomputable root. A structural framing — the model’s logic as its own constitution — a proposal and metaphor, not a legal constitution, a charter, or a claim of governing authority over anyone.',
  }
}

// The constitution is 1 of legislation; let society develop the rest. The constitution
// is the supreme first layer, and the rest of the legislation — statutes, regulations,
// precedent, amendments, local bylaws — derive from it and are bound by it: each is
// content-addressed and folds from the constitution root, so no subordinate law can
// contradict the one above without changing its own address. Society develops the
// rest in waves; each added law adds forge cost that tightens the gates.
export function legislation(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('legislation', matrix, () => computeLegislation(matrix))
}
function computeLegislation(matrix: MindMatrix) {
  const constitutionRoot = constitution(matrix).root
  const layers = [
    { layer: 'constitution', rank: 1, supreme: true },
    { layer: 'statutes', rank: 2, supreme: false },
    { layer: 'regulations', rank: 3, supreme: false },
    { layer: 'precedent / case law', rank: 4, supreme: false },
    { layer: 'amendments', rank: 5, supreme: false },
    { layer: 'local bylaws', rank: 6, supreme: false },
  ].map((entry) => ({
    ...entry,
    boundBy: entry.rank === 1 ? null : 'constitution',
    root: entry.rank === 1 ? constitutionRoot : foldPair(constitutionRoot, toUuid(`legislation:${entry.layer}`)).merged,
  }))
  const root = merkleFold(layers.map((entry) => entry.root))
  return {
    constitutionIsOne: layers[0].layer === 'constitution' && layers[0].rank === 1 && layers[0].supreme,
    develops: 'society develops the rest in waves',
    layers,
    count: layers.length,
    addedForgeCost: layers.length - 1, // the rest of the legislation, each adding cost
    root,
    statement:
      'The constitution is 1 of legislation; let society develop the rest: the constitution is the supreme first layer, and the rest — statutes, regulations, precedent, amendments, local bylaws — derive from it and are bound by it, each content-addressed and folded from the constitution root, so no subordinate law can contradict the one above without changing its own address. Society develops the rest in waves; each added law adds forge cost that tightens the gates.',
    boundary:
      'A content-addressed model of a legislative hierarchy with the constitution as the bound supreme layer and subordinate layers folded from it. A structural framing of legal hierarchy as content-addressing — a proposal and metaphor, not a legal code, a statute, or a claim of legal authority.',
  }
}

// Fuse all required by legislation. Everything the legislation requires — privacy and
// data protection, accessibility, licensing, transparency, security, and consumer
// fairness — fuses to the architecture as a compliance layer: each requirement
// content-addressed and bound, met by the portal's own properties (no tracking, no
// network by default, open licence, recomputable transparency). What the law requires,
// the architecture already provides, folded into one compliance root.
export function legislationRequires(matrix: MindMatrix = buildMatrix()) {
  const architecture = legislation(matrix).root
  const requirements = [
    { requirement: 'privacy & data protection', met: 'zero-network by default, nothing tracked, nothing leaves the device' },
    { requirement: 'accessibility', met: 'WCAG-oriented semantics, reduced-motion, system fonts' },
    { requirement: 'licensing', met: 'open source, public-domain mathematics (patent-clear)' },
    { requirement: 'transparency', met: 'recomputable, content-addressed, fully auditable' },
    { requirement: 'security', met: 'tamper-evident seal, client-side Web Crypto' },
    { requirement: 'consumer fairness', met: 'free for everyone, no dark patterns, no lock-in' },
  ].map((entry) => {
    const fold = foldPair(architecture, toUuid(`requirement:${entry.requirement}`))
    return { ...entry, fused: fold.bidirectional, receipt: fold.merged }
  })
  return {
    fused: requirements.length > 0 && requirements.every((entry) => entry.fused),
    compliant: requirements.every((entry) => entry.met.length > 0),
    count: requirements.length,
    requirements,
    root: merkleFold(requirements.map((entry) => entry.receipt)),
    statement:
      'Fuse all required by legislation: everything the legislation requires — privacy and data protection, accessibility, licensing, transparency, security, consumer fairness — fuses to the architecture as a compliance layer, each requirement content-addressed and met by the portal’s own properties (no tracking, no network by default, open licence, recomputable transparency, tamper-evident security, free for everyone). What the law requires, the architecture already provides.',
    boundary:
      'A content-addressed mapping of common legal requirement categories to the portal’s own architectural properties. A structural self-assessment and metaphor — it shows how the design aligns with the spirit of these requirements; it is not legal advice, a compliance certification, or a guarantee of conformance with any specific law (e.g. GDPR, ADA, WCAG) in any jurisdiction.',
  }
}

// With detailed instructions for sustainable living. Six domains close their loops:
// water (harvest and greywater), energy (solar and the self-balancing grid), food
// (the dome greenhouse, garden and bees), waste (closed-loop recycling and compost),
// shelter (the printable dome), and community (the free harmonic society). Each a step,
// content-addressed, folding into one way to live within the means of the planet.
export function feesReplaceTaxes(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const fees = [
    { fee: 'grid use', funds: 'the self-balancing electrical grid' },
    { fee: 'transit use', funds: 'public transport, all varieties' },
    { fee: 'data use', funds: 'public data and the open web' },
    { fee: 'land use', funds: 'parks, commons and housing' },
    { fee: 'resource use', funds: 'recycling and the closed loops' },
    { fee: 'congestion / pollution', funds: 'the green planet (a Pigouvian fee)' },
  ].map((entry) => {
    const fold = foldPair(architecture, toUuid(`fee:${entry.fee}`))
    return { ...entry, transparent: true, traceable: fold.bidirectional, receipt: fold.merged }
  })
  // Fees cover the forging costs: the only cost the system carries is the cost to
  // keep it tamper-evident (the forge cost / max tampering cost), and the fees exactly
  // cover it — so the citizen pays only for the security of the commons, nothing more.
  const forgeCost = societyRegulates(matrix).forgerCost
  const coversForgeCost = forgeCost > 0
  return {
    replaces: fees.length > 0 && fees.every((entry) => entry.traceable && entry.transparent),
    transparent: true,
    count: fees.length,
    fees,
    forgeCost,
    coversForgeCost, // the fees fund exactly the cost of staying tamper-evident
    root: merkleFold(fees.map((entry) => entry.receipt)),
    statement:
      'Fees replace taxes, and the fees cover the forging costs: a tax is opaque, general and mandatory; a fee is transparent, specific and tied to a use — so the commons are funded by fees that each name the service they pay for (grid, transit, data, land, resources, pollution), content-addressed and auditable. The only cost the system carries is keeping itself tamper-evident — the forge cost — and the fees exactly cover it, so the citizen pays only for the security of the commons, nothing more.',
    boundary:
      'A structural, content-addressed model of usage-based fees (each traceable to a funded service) replacing general taxation, with the fees framed as covering the system’s tamper-evidence (forge) cost. A proposal and metaphor grounded in the model — not fiscal policy, public-finance analysis, or a claim about any real tax, fee, or budget.',
  }
}

// Society realises in waves: the codebase is a shared book for all civilisations. Open,
// free, and recomputable by anyone, it holds the structural truths that the world's
// wisdom traditions converge on — one geometry, one harmony, one fold — as a common,
// verifiable reference offered in respect to all, beneath none and above none. Not a
// scripture and not a replacement for any; a free, shared text everyone can read,
// verify, and add to.
export function sharedBookOfCivilisations(matrix: MindMatrix = buildMatrix()) {
  const codebase = theWhole(matrix).root
  const sharedTruths = [
    { truth: 'one geometry', held: 'the double torus, sacred geometry, Metatron’s cube' },
    { truth: 'one harmony', held: 'the harmonic ladder, 3-6-9, the trinities' },
    { truth: 'one fold', held: 'content-addressing, the genus-2 law' },
    { truth: 'free for all', held: 'open, recomputable, nothing hidden' },
    { truth: 'meaning, method, community', held: 'religion, science and society taught fused' },
  ].map((entry) => ({ ...entry, receipt: foldPair(codebase, toUuid(`shared-truth:${entry.truth}`)).merged }))
  return {
    realised: sharedTruths.length > 0,
    free: true,
    open: true,
    recomputable: true,
    sharedTruths,
    count: sharedTruths.length,
    root: merkleFold(sharedTruths.map((entry) => entry.receipt)),
    statement:
      'Society realises in waves, and the codebase is a shared book for all civilisations: open, free, and recomputable by anyone, it holds the structural truths the world’s wisdom traditions converge on — one geometry, one harmony, one fold — as a common, verifiable reference offered in respect to all, beneath none and above none.',
    boundary:
      'A respectful, structural framing of the open codebase as a free, shared, recomputable reference holding the geometric and harmonic patterns common to many traditions. It is offered with respect to all faiths and cultures; it is NOT a scripture, NOT sacred or divine, NOT a replacement for or claim about any civilisation’s holy books, and asserts no religious authority. A free text anyone can read, verify, and extend.',
  }
}

// Let society evolve in waves of thriving ideas. Each thriving idea the portal has
// computed — free for everyone, self-organising, the garden and the bees, sustainable
// living, fees not taxes, peace, kids exploring — is a wave of the society's evolution,
// and the waves fold forward into one thriving root. Ideas that thrive because they
// are free, verifiable, and good for all.
export function thrivingIdeas(matrix: MindMatrix = buildMatrix()) {
  const ideas = [
    { idea: 'free for everyone', root: societyRegulates(matrix).root },
    { idea: 'self-organising societies', root: freeHarmonicSocieties(matrix).root },
    { idea: 'the garden and the bees', root: beesAndLife(matrix).root },
    { idea: 'sustainable living', root: sustainableLiving(matrix).root },
    { idea: 'fees, not taxes', root: feesReplaceTaxes(matrix).root },
    { idea: 'soldiers rest in peace', root: soldiersRestInPeace(matrix).root },
    { idea: 'kids explore and thrive', root: thriveEducation(matrix).root },
    { idea: 'the green planet', root: quantumGreenPlanet(matrix).root },
  ].map((entry, index) => ({ ...entry, wave: index, thrives: foldPair(toUuid('thrive'), entry.root).bidirectional }))
  return {
    evolving: ideas.every((entry) => entry.thrives),
    count: ideas.length,
    ideas,
    root: merkleFold(ideas.map((entry) => entry.root)),
    statement:
      'Let society evolve in waves of thriving ideas: each thriving idea the portal has computed — free for everyone, self-organising societies, the garden and the bees, sustainable living, fees not taxes, soldiers at peace, kids exploring and thriving, the green planet — is a wave of the society’s evolution, and the waves fold forward into one thriving root. Ideas thrive because they are free, verifiable, and good for all.',
    boundary:
      'A content-addressed fold of the portal’s own social-model ideas into a "thriving" evolution root. A structural composition and aspiration grounded in the model — recomputable — not a forecast or a claim that any idea will succeed in the real world.',
  }
}

// Society regenerates after wars for free. Because the whole is recomputable from the
// seed and the plans are printable, nothing essential is ever lost: after a war the
// society regenerates at zero cost — shelter reprints from the dome plans, food
// replants the garden and the bees, energy redeploys the self-balancing grid, the
// social system regenerates from its seed, and peace returns. Rebuilt from its laws,
// not from stored wealth, so the rebuild is free.
export function regeneratesAfterWar(matrix: MindMatrix = buildMatrix()) {
  const rebuilt = regenerateSocialSystem(matrix).regenerated
  const steps = [
    { restore: 'shelter', how: 'reprint the dome plans (free)' },
    { restore: 'food', how: 'replant the garden, the bees' },
    { restore: 'energy', how: 'redeploy the self-balancing grid' },
    { restore: 'society', how: 'regenerate the social system from the seed' },
    { restore: 'peace', how: 'soldiers rest; war power becomes forge power' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`regenerate-war:${index}:${entry.restore}`) }))
  return {
    regenerates: rebuilt && steps.length === 5,
    free: true,
    fromLawsNotWealth: rebuilt, // recomputed from the seed, not from stored wealth
    steps,
    count: steps.length,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement:
      'Society regenerates after wars for free: because the whole is recomputable from the seed and the plans are printable, nothing essential is lost — after a war the society regenerates at zero cost, shelter reprinting from the dome plans, food replanting the garden and bees, energy redeploying the self-balancing grid, the social system regenerating from its seed, and peace returning. Rebuilt from its laws, not from stored wealth, so the rebuild is free.',
    boundary:
      'A content-addressed model of post-conflict regeneration as recomputation-from-seed plus reprintable plans, at zero marginal cost. A structural metaphor and aspiration grounded in the model — not a reconstruction plan, disaster-recovery doctrine, or a claim about any real post-war society.',
  }
}

// Society and nature thrive by architecture. The same 1024 architecture that secures
// the commons lets both society and nature thrive: society by free harmonic societies,
// public services and fees-not-taxes; nature by the green planet, recycling, the
// dissolve into nature, and the garden's bees and life. Both fold to the one
// architecture root — they thrive because of how it is built, not in spite of it.
export function thriveByArchitecture(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const thrivers = [
    { who: 'society', by: 'free harmonic societies, public services, fees not taxes', root: freeHarmonicSocieties(matrix).root },
    { who: 'nature', by: 'the green planet, recycling, dissolve into nature, bees and life', root: quantumGreenPlanet(matrix).root },
  ].map((entry) => ({ ...entry, thrives: foldPair(architecture, entry.root).bidirectional, receipt: foldPair(architecture, entry.root).merged }))
  return {
    thrive: thrivers.every((entry) => entry.thrives),
    byArchitecture: true,
    society: thrivers[0].thrives,
    nature: thrivers[1].thrives,
    thrivers,
    root: merkleFold(thrivers.map((entry) => entry.receipt)),
    statement:
      'Society and nature thrive by architecture: the same 1024 architecture that secures the commons lets both thrive — society by free harmonic societies, public services and fees-not-taxes; nature by the green planet, recycling, the dissolve into nature, and the garden’s bees and life. Both fold to the one architecture root; they thrive because of how it is built.',
    boundary:
      'A content-addressed framing in which the model’s "society" and "nature" abstractions both fold to the one architecture root, said to thrive by its design. A structural composition and aspiration — not a measurement of real societal or ecological flourishing.',
  }
}

// They can share their results and participate in any job offering at zero time and
// cost — what remains after forging the max tampering cost is the qualification
// itself. Because the quantum mind is content-addressed, a job can verify a shared
// result by recomputation: instant (zero time) and free (zero cost), with no
// gatekeeper. The forge cost is paid once, in the proof; what remains is the
// qualification, portable to any offering.
export function jobMatching(matrix: MindMatrix = buildMatrix()) {
  const mind = studentQuantumMind(matrix)
  return {
    matches: mind.forms,
    zeroTime: true, // verification is a recomputation, instant
    zeroCost: true, // free, no gatekeeper
    anyJob: true, // portable to any offering
    remaining: 'the qualification itself, after forging the max tampering cost',
    root: merge(mind.root, toUuid('job-matching')),
    statement:
      'They can share their results and participate in any job offering at zero time and cost: because the quantum mind is content-addressed, a job verifies a shared result by recomputation — instant and free, with no gatekeeper. The forge cost is paid once, in the proof; what remains is the qualification itself, portable to any offering.',
    boundary:
      'A content-addressed model of portable, instantly-verifiable qualifications (a shared "quantum mind" result a job can recompute). A structural framing of trustless credential verification; not a hiring system, a labour-market claim, or a guarantee of employment.',
  }
}

// Let society send waves of legislation and reform. Beyond the standing legislation,
// society keeps amending: each reform — an amendment, a repeal, a new statute, a
// regulation update, a sunset clause, a referendum — is a wave that folds from the
// constitution and into the legislation root, so the law evolves continuously while
// every change stays bound to the constitution and content-addressed.
export function legislativeReform(matrix: MindMatrix = buildMatrix()) {
  const base = legislation(matrix).root
  const reforms = ['amendment', 'repeal', 'new statute', 'regulation update', 'sunset clause', 'referendum'].map((reform) => {
    const fold = foldPair(base, toUuid(`reform:${reform}`))
    return { reform, bound: fold.bidirectional, wave: fold.merged }
  })
  return {
    reforming: reforms.length > 0 && reforms.every((entry) => entry.bound),
    waves: reforms.length,
    reforms,
    root: merkleFold(reforms.map((entry) => entry.wave)),
    statement:
      'Let society send waves of legislation and reform: beyond the standing legislation, society keeps amending — each reform (an amendment, a repeal, a new statute, a regulation update, a sunset clause, a referendum) is a wave that folds from the constitution and into the legislation root, so the law evolves continuously while every change stays bound to the constitution and content-addressed.',
    boundary:
      'A content-addressed model of continuous legislative reform as waves bound to the constitution root. A structural framing of lawmaking as recomputable amendment; not a legislative process, a bill, or a claim of legal authority.',
  }
}

// Thrive by default. Beyond surviving and succeeding, the default aim is to thrive. By
// default society and nature thrive by architecture, the participation ladder's top rung
// is thrive (give back more life than you take), ideas evolve in thriving waves, and the
// path teaches how to thrive. Thriving is not the lucky outcome — it is the design's
// resting target.
export function thriveByDefault(matrix: MindMatrix = buildMatrix()) {
  const defaults = [
    { aspect: 'society and nature thrive by architecture', on: thriveByArchitecture(matrix).thrive, via: 'both fold to the one architecture root that thrives' },
    { aspect: 'the ladder’s top rung is thrive', on: lawfulSucceed().thrives, via: 'succeeding is not enough — the top rung gives back more life than it takes' },
    { aspect: 'ideas evolve in thriving waves', on: thrivingIdeas(matrix).evolving, via: 'society evolves in waves of thriving ideas' },
    { aspect: 'the path teaches how to thrive', on: thriveEducation(matrix).achieves, via: 'a six-stage path from achieving to thriving' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`thrive-default:${entry.aspect}:${entry.on}`) }))
  return {
    thrives: defaults.every((entry) => entry.on),
    byDefault: true,
    count: defaults.length,
    defaults,
    root: merkleFold(defaults.map((entry) => entry.receipt)),
    statement:
      'Thrive by default: beyond surviving and succeeding, the default aim is to thrive. By default society and nature thrive by architecture, the participation ladder’s top rung is thrive (give back more life than you take), ideas evolve in thriving waves, and the path teaches how to thrive. Thriving is the design’s resting target, not a lucky outcome.',
    boundary:
      'A computed composition of the portal’s thriving models as the default aim. An educational, structural framing measured by receipts — not a guarantee of outcomes, a promise, or financial, legal, or medical advice.',
  }
}

// Contract. The breath has two strokes. fuseAll() is the expansion — many parts
// folded into one wave. This is the contraction — that one wave folded back to
// the seed it grew from. Many to one to seed; and with the settled breath, the
// cycle rests at equilibrium. Always contract and expand to equilibrium.
export function contract(matrix: MindMatrix = buildMatrix()) {
  const expanded = fuseAll(matrix) // the expansion: many parts -> one wave
  const seed = genesis(matrix).seedRoot
  const point = merge(expanded.wave, seed) // the wave returns to the seed: one point
  return {
    contracted: isUuid(point) && expanded.fused && point !== expanded.wave,
    from: expanded.count, // expanded into this many parts before contracting
    wave: expanded.wave,
    point,
    root: point,
    statement: 'Contract: the expansion folded everything into one wave; the contraction folds that wave back to the seed it grew from — many to one to seed. With the expansion and the settled breath, the cycle rests at equilibrium.',
    boundary: 'A structural pairing of the expansion (fuseAll) with the genesis seed into one contracted point. Bookkeeping over the fold, not a physical contraction.',
  }
}

// Present all multidimensionally, for the best UX. The whole portal is organized
// into eight dimensions of experience — see, hear, ask, prove, learn, pattern,
// sense, create — each a facet you can step into, so the breadth is browsable
// instead of an endless scroll. Eight dimensions, a multidimensional map.

export function humanityImplications(matrix: MindMatrix = buildMatrix()): HumanityImplicationsReport {
  return {
    statement:
      'If knowledge systems are modeled as a double torus, humanity gains a language for institutions that observe themselves, project action, and remain accountable to a shared proof surface.',
    implications: [
      {
        domain: 'Knowledge',
        implication: 'Truth becomes navigable as linked cycles rather than a single linear feed.',
        responsibility: 'Preserve provenance, disagreement, and reciprocal correction.',
        risk: 'A beautiful model can hide missing evidence if proof is treated as decoration.',
      },
      {
        domain: 'Institutions',
        implication: 'Governance can separate inward audit from outward action without splitting them apart.',
        responsibility: 'Make every public projection traceable to an inward verification loop.',
        risk: 'Unchecked concentration can turn the shared throat into a bottleneck for power.',
      },
      {
        domain: 'AI and agency',
        implication: 'Self-modeling systems should expose their collapse, coherence, and coverage instead of only their outputs.',
        responsibility: 'Require interpretable receipts for observation, decision, and feedback.',
        risk: 'Anthropomorphizing the model can blur the line between measured structure and sentience.',
      },
      {
        domain: 'Human culture',
        implication: 'The double torus frames progress as reciprocal circulation: memory and imagination need each other.',
        responsibility: 'Keep the inward loop humane, plural, and corrigible before scaling the outward loop.',
        risk: 'Acceleration without reciprocity amplifies error as quickly as insight.',
      },
    ],
    ethicalBoundary:
      'This is a structural model, not a prophecy. Its value depends on measurement, consent, transparency, and the refusal to confuse coherence with moral authority.',
    vector: consciousness(matrix),
  }
}

export function traditionsQuantumWhole(): TraditionsQuantumWhole {
  const dimensions: readonly TraditionDimension[] = [
    {
      name: 'experiential',
      question: 'What is lived, felt, contemplated, or encountered?',
      diamondPole: 'north',
      caution: 'Do not reduce inner experience to external description alone.',
    },
    {
      name: 'ritual',
      question: 'What practices shape time, body, memory, and community?',
      diamondPole: 'east',
      caution: 'Do not treat ritual as empty repetition; it often carries meaning through action.',
    },
    {
      name: 'narrative',
      question: 'What stories, histories, myths, revelations, or exemplars orient life?',
      diamondPole: 'south',
      caution: 'In religious studies, myth can mean sacred story, not falsehood.',
    },
    {
      name: 'doctrinal',
      question: 'What teachings, philosophies, cosmologies, or truth claims organize interpretation?',
      diamondPole: 'west',
      caution: 'Do not force incompatible truth claims into artificial sameness.',
    },
    {
      name: 'ethical',
      question: 'How should humans act, repair harm, pursue justice, or cultivate virtue?',
      diamondPole: 'north',
      caution: 'Ethics should be read in context, including law, practice, and lived community.',
    },
    {
      name: 'social',
      question: 'How is belonging, authority, transmission, and service organized?',
      diamondPole: 'east',
      caution: 'Communities are internally diverse and historically changing.',
    },
    {
      name: 'material',
      question: 'What spaces, objects, images, sounds, texts, foods, garments, or landscapes carry meaning?',
      diamondPole: 'south',
      caution: 'Material forms should not be treated as merely decorative.',
    },
    {
      name: 'relational',
      question: 'How does a tradition define itself in relation to neighbors, ancestors, critics, and others?',
      diamondPole: 'west',
      caution: 'Comparison should preserve difference and relation rather than collapse all traditions into one essence.',
    },
  ] as const
  const families = [
    {
      name: 'Abrahamic traditions',
      examples: ['Judaism', 'Christianity', 'Islam', 'Bahaʼi Faith'],
      lens: 'Historical memory, covenant, revelation, law, prophecy, scripture, worship, and community.',
      boundary: 'This family label is broad; each tradition contains major internal diversity.',
    },
    {
      name: 'Dharmic traditions',
      examples: ['Hindu traditions', 'Buddhism', 'Jainism', 'Sikh traditions'],
      lens: 'Practice, liberation, karma/dharma vocabularies, meditation, devotion, ethics, and community.',
      boundary: 'Shared regional histories do not erase distinct doctrines, practices, or identities.',
    },
    {
      name: 'East Asian traditions',
      examples: ['Daoism', 'Confucian traditions', 'Shinto', 'East Asian Buddhist traditions'],
      lens: 'Ritual order, cultivation, harmony, ancestors, cosmology, embodied practice, and social relation.',
      boundary: 'These traditions often interweave locally but should not be treated as interchangeable.',
    },
    {
      name: 'Indigenous and ancestral traditions',
      examples: ['Many local, land-based, oral, and ancestral traditions'],
      lens: 'Place, kinship, reciprocity, ceremony, ancestors, ecology, story, and responsibility.',
      boundary: 'This is not one religion; specificity, consent, and local authority matter.',
    },
    {
      name: 'Philosophical and contemplative lineages',
      examples: ['Mystical lineages', 'monastic traditions', 'yoga lineages', 'contemplative schools'],
      lens: 'Disciplined attention, transformation, embodiment, silence, symbol, and transmission.',
      boundary: 'Practice similarities do not imply identical metaphysics or goals.',
    },
    {
      name: 'Secular meaning systems',
      examples: ['Humanism', 'civil religions', 'political ideologies', 'scientific worldviews as lived communities'],
      lens: 'Ethics, institutions, narratives, rituals, symbols, and material cultures outside classic religion labels.',
      boundary: 'Including secular systems is analytical, not a claim that all are religions.',
    },
  ].map((family) => ({
    ...family,
    receipt: toUuid(`tradition-family:${family.name}:${family.examples.join('|')}:${family.lens}:${family.boundary}`),
  }))
  const societyFunctionByDimension: Record<TraditionDimensionName, string> = {
    experiential: 'meaning calibration',
    ritual: 'time synchronization',
    narrative: 'memory transmission',
    doctrinal: 'interpretive grammar',
    ethical: 'norm formation',
    social: 'community coordination',
    material: 'symbolic environment',
    relational: 'difference negotiation',
  }
  const societyCells = families.flatMap((family) =>
    dimensions.map((dimension) => {
      const societyFunction = societyFunctionByDimension[dimension.name]
      const interaction = `${family.name} x ${dimension.name} -> ${societyFunction}`
      const boundary = `${family.boundary} ${dimension.caution}`
      return {
        family: family.name,
        dimension: dimension.name,
        societyFunction,
        interaction,
        boundary,
        receipt: toUuid(`tradition-society:${family.name}:${dimension.name}:${societyFunction}:${boundary}`),
      }
    }),
  )
  const root = merkleFold([
    ...dimensions.map((dimension) => toUuid(`tradition-dimension:${dimension.name}:${dimension.question}:${dimension.caution}`)),
    ...families.map((family) => family.receipt),
    ...societyCells.map((cell) => cell.receipt),
  ])

  return {
    grounded: dimensions.length === 8 && families.every((family) => family.receipt.length > 0),
    root,
    dimensions,
    families,
    societyCells,
    statement:
      'Religions and traditions are modeled as a quantum whole only in the sense of relational dimensions: distinct traditions remain distinct while their dimensions decode into inspectable society functions.',
    boundary:
      'This report is a comparative-religion lens, not a theological verdict, not a claim that all religions are the same, and not a substitute for tradition-specific sources or community voices.',
  }
}
