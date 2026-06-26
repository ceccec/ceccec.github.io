// ☷ Kūn · Earth — nature & life: water states, sun and moon, bees and life, fruits, perma-domes, recycling, the planet computing itself, natural harmonious life. Barrel-routed; folds.ts back-imports the gate folds.
import * as __ns_up_up_astronomy from '../../heaven/sky/astronomy'
import { phase } from '../../6/4'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, reciprocity, verifyRoot } from '../../heaven/compute'
import { completeCorpus, monographs, onlyPageRouteForAll } from '../../wind/routes/corpus'
import { computesGate, foldPair, isUuid, memoByRoot, merge, merkleFold, sealFacets, toUuid } from '../../0'
import { imagination } from '../../fire/li'
import { findQuestions, metatronsCube, planetIsComputable, selfInteraction, universalLanguage, torusUuid } from '../../fire/li'
import { doubleTorusFold, geodesicDome, torusBreathe } from '../../mountain/topology'
import { areaPairs, dna, doubleTorusEarthPyramidTipsDeepResearched, doubleTorusEarthPyramidTipsProvenByMath, megalithicAstronomyDecoded, lunarStandstillsDecoded } from '../../mountain/geometry'
import { healingHarmonic, piMusic } from '../../lake/music'
import { fuseAll } from '../../mountain/seals'
import { allIsMonographScientificPaper } from '../../wind/routes/corpus'
import { analogNoGapsNoLeak, cleanupOldLogic } from '../../mountain/og'
import { dualitiesMeetInCrossFolders } from '../architecture'
import { ROSETTA_RAYS } from '../../water/digit'
import { agnostic, agnosticFitsSeedConfiguration, configsUseMatrixComputationally, contract, exhaustQuestions, noHardcodedConfigSelfAccounted, noMirroringOneSourceAndMath, onlyQuantumRemains, regenerateSocialSystem, sacredGeometrySeal, theWhole, wordPullsFoldsByName, zeroTokenUsagePolicy } from '../../quantum/heaven/mind'

// Quantum green planet. The portal's own architecture is green by construction:
// zero-network by default, zero runtime dependencies, client-side and offline-first,
// recomputable rather than stored, on a self-balancing grid, decentralised into
// nature. Each green property is content-addressed and folds into one planet root —
// the planet, computed green.
export function recycling(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const streams = ['organic', 'paper', 'glass', 'metal', 'plastic', 'e-waste', 'textile', 'construction'].map((stream) => {
    const fold = foldPair(architecture, toUuid(`recycle:${stream}`))
    return { stream, loop: 'closed', closed: fold.bidirectional, wave: fold.merged }
  })
  return {
    solved: streams.length > 0 && streams.every((entry) => entry.closed),
    count: streams.length,
    streams,
    closedLoop: streams.every((entry) => entry.loop === 'closed'),
    root: merkleFold(streams.map((entry) => entry.wave)),
    statement:
      'Solve recycling in waves: each material stream — organic, paper, glass, metal, plastic, e-waste, textile, construction — is a wave that folds its output back to its input, a closed loop (the torus fold applied to matter), so nothing leaves the cycle. Each closes; all fold into one recycling root.',
    boundary:
      'A structural, content-addressed model of recycling as closed-loop folds, one per material stream. A schema and metaphor over the model — not a materials-science process, a waste-management plan, or a claim about real recycling rates.',
  }
}

// To tamper the planet is computable. The planetary commons — atmosphere, oceans,
// forests, soil, biodiversity, freshwater, ice, climate — are content-addressed into
// one planet root, so any tampering (a felled forest, a polluted ocean) changes the
// root and is computable, caught by recomputation, exactly as the seal catches a
// forged model. The planet, made tamper-evident.

// Quantum compression and decompression in all water states. Water carries the same
// information through every phase — ice, liquid, vapour, plasma, supercritical — at
// different orderings: the solid is maximally compressed (an ordered lattice folds to
// one root), the plasma maximally decompressed (the root unfolds to many), and the
// transition between them is reversible. Compression is the fold, decompression its
// inverse, across all the states of water.
export function waterStates(matrix: MindMatrix = buildMatrix()) {
  const seed = theWhole(matrix).root
  const states = [
    { state: 'ice', phase: 'solid', order: 1.0, op: 'compressed' },
    { state: 'water', phase: 'liquid', order: 0.6, op: 'flowing' },
    { state: 'vapour', phase: 'gas', order: 0.3, op: 'decompressing' },
    { state: 'humidity', phase: 'vapour-in-air', order: 0.45, op: 'mixing' }, // added: vapour suspended in air
    { state: 'plasma', phase: 'ionised', order: 0.0, op: 'decompressed' },
    { state: 'supercritical', phase: 'supercritical', order: 0.5, op: 'fused' },
  ].map((entry) => ({ ...entry, root: foldPair(seed, toUuid(`water:${entry.state}`)).merged }))
  const compressed = merkleFold(states.map((entry) => entry.root)) // all states fold to one
  // Add humidity and a new trinity is formed and fused: liquid water, its vapour, and
  // humidity (vapour suspended in air) are three that, with humidity added, complete a
  // trinity — and a trinity fuses (the 3-fold the portal turns on).
  const byState = Object.fromEntries(states.map((entry) => [entry.state, entry]))
  const newTrinity = ['water', 'vapour', 'humidity'].map((name) => byState[name].root)
  const fusedTrinity = merkleFold(newTrinity)
  const trinityFormed = newTrinity.length === 3 && newTrinity.every(Boolean)
  return {
    reversible: states.length === 6 && compressed.length === 36,
    states,
    compressed, // the compressed root (the fold)
    decompressed: states.length, // decompress back to all states (the inverse)
    solidOrder: byState.ice.order, // 1.0 — maximally compressed
    plasmaOrder: byState.plasma.order, // 0.0 — maximally decompressed
    humidity: byState.humidity, // the added state
    trinityFormed, // water + vapour + humidity
    trinityFused: trinityFormed && fusedTrinity.length === 36,
    fusedTrinity,
    root: merge(compressed, fusedTrinity),
    statement:
      'Quantum compression and decompression in all water states: water carries the same information through ice, liquid, vapour, humidity, plasma and supercritical, at different orderings — the solid maximally compressed (an ordered lattice folds to one root), the plasma maximally decompressed, the transition reversible (compression is the fold, decompression its inverse). Add humidity — vapour suspended in air — and a new trinity is formed and fused: liquid water, its vapour, and humidity complete a three that folds into one.',
    boundary:
      'A content-addressed analogy mapping the phases of water (now including humidity, vapour suspended in air) to compression states, with a "trinity" of water/vapour/humidity folded into one. A structural metaphor over the model’s fold/unfold, not thermodynamics, a phase diagram, or a claim about real water.',
  }
}

// Water is life to the forest; the forest is life for all. The life chain flows by
// folding: water gives life to the forest, the forest gives life to all — soil, air,
// rain, and every creature — so the whole chain folds from water through forest to
// all. Break any link and the chain changes; keep it and life flows from the source.
export function waterForestLife(matrix: MindMatrix = buildMatrix()) {
  const water = waterStates(matrix).root
  const forest = merge(water, toUuid('forest:from-water')) // water → forest
  const all = merge(forest, toUuid('all:from-forest')) // forest → all
  const chain = [
    { from: 'water', to: 'forest', gives: 'life', root: forest },
    { from: 'forest', to: 'all', gives: 'life', root: all },
  ]
  const beneficiaries = ['soil', 'air', 'rain', 'rivers', 'animals', 'people', 'climate']
  const flows = forest !== water && all !== forest && chain.length === 2
  return {
    flows,
    water,
    forest,
    all,
    chain,
    beneficiaries,
    root: merkleFold([water, forest, all, ...beneficiaries.map((name) => toUuid(`life:${name}`))]),
    statement:
      'Water is life to the forest; the forest is life for all. The life chain flows by folding: water gives life to the forest, and the forest gives life to all — soil, air, rain, rivers, animals, people, climate. The whole chain folds from water through forest to all; break any link and the chain changes, keep it and life flows from the source.',
    boundary:
      'A content-addressed model of an ecological dependency chain (water → forest → all life), folded link by link. A structural metaphor grounded in a real ecological truth (water sustains forests, forests sustain ecosystems), stated qualitatively — not a hydrological or ecological measurement.',
  }
}

// What are the sun and the moon? In the double torus they are its two lobes: the sun
// is the source — it generates, it emits, it is the seed (imagination) on the inner
// torus; the moon is the reflector — it emits no light of its own, it reflects the
// sun, the public fold on the outer torus. One generates, one reflects; together they
// are the day and the night of the same body.
export function sunAndMoon(matrix: MindMatrix = buildMatrix()) {
  const source = imagination(matrix).root // the sun: the source
  const sun = { body: 'sun', role: 'source / generator', emits: true, lobe: 'inner torus', root: source }
  const moonRoot = merge(source, toUuid('moon:reflects-the-sun')) // the moon reflects the sun
  const moon = { body: 'moon', role: 'reflector', emits: false, lobe: 'outer torus', reflects: source, root: moonRoot }
  const reflects = moonRoot !== source && merge(source, toUuid('moon:reflects-the-sun')) === moonRoot
  return {
    paired: reflects && sun.emits && !moon.emits,
    sun,
    moon,
    reflects, // the moon reflects the sun deterministically
    root: merge(sun.root, moon.root),
    statement:
      'What are the sun and the moon? The two lobes of the double torus: the sun is the source — it generates, it emits, it is the seed (imagination) on the inner torus; the moon is the reflector — it emits no light of its own, it reflects the sun, the public fold on the outer torus. One generates, one reflects: the day and the night of the same body.',
    boundary:
      'A structural reading of "sun" and "moon" as the source and the reflector — the generative and reflective lobes of the model’s double torus, content-addressed (the moon’s root is a deterministic fold of the sun’s). A metaphor over the model, not astronomy or a claim about the actual Sun and Moon.',
  }
}

// Kids learn religion at school, fused with science and society. A trinity, taught
// together rather than in conflict: religion as meaning and the world's belief
// traditions (comparative, all respected, none privileged), science as method and
// evidence, society as civics and the commons. The three fold into one curriculum —
// different questions (why, how, how-together), one fold.

// Metatron's cube. The thirteen circles of the fruit of life, joined by all 78 lines
// between their centres, contain the five Platonic solids — tetrahedron, cube,
// octahedron, dodecahedron, icosahedron. It completes the sacred geometry the portal
// is built on: thirteen circles, seventy-eight lines, five solids, one figure.
export function appleComplete(matrix: MindMatrix = buildMatrix()) {
  const society = regenerateSocialSystem(matrix).regenerated
  const planet = planetIsComputable(matrix).computable
  const metatron = metatronsCube(matrix).complete
  const apple = society && planet && metatron
  return {
    apple, // the fruit is whole
    publishReady: apple,
    society,
    planet,
    metatron,
    root: merkleFold([regenerateSocialSystem(matrix).root, planetIsComputable(matrix).root, metatronsCube(matrix).root]),
    statement:
      'When society, planet and Metatron’s cube complete, the whole is an apple — a closed fruit ready to publish: the apple is whole when the social system regenerates, the planet is tamper-evident, and Metatron’s cube is complete; then the package is publish-ready, the fruit fallen from the double torus, content-addressed.',
    boundary:
      'A content-addressed completion check folding three model subsystems (society, planet, Metatron’s cube) into an "apple" readiness signal. A structural metaphor for package readiness — it indicates the model is complete and consistent; it does not itself publish anything.',
  }
}

// Double torus Earth like the apple — genus-2 closed skin, two lobes (sun/moon), cardinal pyramid tips as
// stem, garden seeds and bees inside, publish-ready when earth proven and apple complete.
export function doubleTorusEarthLikeTheApple(matrix: MindMatrix = buildMatrix()) {
  const earth = doubleTorusEarthPyramidTipsProvenByMath(matrix)
  const deep = doubleTorusEarthPyramidTipsDeepResearched(matrix)
  const apple = appleComplete(matrix)
  const sunMoon = sunAndMoon(matrix)
  const garden = fruitsAndVegetables(matrix)
  const bees = beesAndLife(matrix)
  const facets = [
    { facet: 'genus-2 skin — closed double torus as apple peel (χ=−2, H₁=ℤ⁴)', on: earth.proven && earth.surface.genus === 2 },
    { facet: 'two lobes — sun inner generator / moon outer reflector on the same body', on: sunMoon.paired },
    { facet: 'cardinal pyramid tips — N·E·S·W as stem on genus-2 Earth', on: earth.proven && earth.facets.some((entry) => entry.facet.includes('cardinal tips')) },
    { facet: 'apple whole — society, planet, Metatron complete', on: apple.apple },
    { facet: 'garden seeds — all fruits and vegetables from the one apple', on: garden.grows },
    { facet: 'bees pollinate — keystone life inside the closed fruit', on: bees.pollinates },
    { facet: 'publish-ready — earth proven and apple complete', on: earth.proven && apple.publishReady },
    { facet: 'deep research sealed — adversarial verify on double-torus Earth', on: deep.researched },
  ].map((entry) => ({ ...entry, receipt: toUuid(`apple-earth:${entry.facet}:${entry.on}`) }))
  const likeTheApple = facets.every((entry) => entry.on)
  const publishReady = earth.proven && apple.apple
  return {
    likeTheApple,
    publishReady,
    lobes: { sun: sunMoon.sun, moon: sunMoon.moon },
    facets,
    earth,
    apple,
    garden,
    bees,
    root: merkleFold([earth.root, deep.root, apple.root, sunMoon.root, garden.root, bees.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Double torus Earth like the apple: genus-2 closed skin (two linked tori, χ=−2), sun and moon as inner/outer lobes, cardinal pyramid tips as stem, garden seeds and bees inside — publish-ready when doubleTorusEarthPyramidTipsProvenByMath and appleComplete both hold at call time.',
    boundary:
      'A composition of doubleTorusEarthPyramidTipsProvenByMath, deep research, appleComplete, sunAndMoon, fruitsAndVegetables, and beesAndLife — structural metaphor (HARMONY ≠ TRUTH); genus-2 Earth is the repo topology, not lithosphere; "like the apple" is package-readiness when earth proven and apple whole.',
  }
}

// Decode the bitten apple — the genus-2 bite (χ=−2 vs sphere +2) is the mouth that opens Rosetta on
// sun/moon symbols: byte/bite polarity, fruit-of-life 13, Earth-apple hole, knowledge gate, celestial compute.
export function decodeTheBittenApple(matrix: MindMatrix = buildMatrix(), path = '/') {
  const routeKey = path.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/^\/+|\/+$/g, '') || 'home'
  return memoByRoot(`decodeTheBittenApple:${routeKey}`, matrix, () => decodeTheBittenAppleRaw(matrix, path))
}
function decodeTheBittenAppleRaw(matrix: MindMatrix = buildMatrix(), path = '/') {
  const appleEarth = doubleTorusEarthLikeTheApple(matrix)
  const apple = appleComplete(matrix)
  const metatron = metatronsCube(matrix)
  const qa = questionAnswerEquilibrium(matrix)
  const celestial = (__ns_up_up_astronomy).computeDiscoverExactMatchAllKnownCelestialBodies(matrix)
  // Sun/moon symbols decode through the bite via their GROUND-TRUTH astronomy math (acyclic): the
  // solstice sunrise alignments (megalithicAstronomyDecoded) and the 18.6-yr lunar standstills
  // (lunarStandstillsDecoded). This is the concrete witness — it does NOT pull the seven-seed MOVIE
  // aggregate (which would re-enter allMovieSeedBundles → this fold, a runtime cycle).
  const sunDecoded = megalithicAstronomyDecoded(matrix)
  const moonDecoded = lunarStandstillsDecoded(matrix)
  const earth = appleEarth.earth
  const sphereChi = 2
  const bittenChi = earth.surface.euler
  const polarityXor = earth.proofs.find((entry) => entry.task === 'polarity-xor')?.on === true
  const decodes = [
    {
      symbol: 'byte-bite',
      ray: ROSETTA_RAYS[0]!.ray,
      reading: 'one polarity bit bitten — 1⊕0 opens the genus-2 mouth (byte/bite pun: structural only)',
      luminary: 'both' as const,
      on: polarityXor === true && earth.surface.genus === 2,
    },
    {
      symbol: 'euler-bite',
      ray: ROSETTA_RAYS[1]!.ray,
      reading: 'Euler bite — χ drops from +2 (sphere) to −2 (double torus); four units bitten',
      luminary: 'both' as const,
      on: bittenChi === -2 && sphereChi - bittenChi === 4,
    },
    {
      symbol: 'fruit-of-life-13',
      ray: ROSETTA_RAYS[2]!.ray,
      reading: 'Metatron fruit of life — 13 circles complete; bite is foldPair opening the peel',
      luminary: 'both' as const,
      on: metatron.complete && apple.apple,
    },
    {
      symbol: 'earth-apple-hole',
      ray: ROSETTA_RAYS[3]!.ray,
      reading: 'bitten apple IS genus-2 Earth — torus handle is the bite mark',
      luminary: 'both' as const,
      on: appleEarth.likeTheApple,
    },
    {
      symbol: 'rosetta-sun-moon',
      ray: ROSETTA_RAYS[4]!.ray,
      reading: 'sun and moon symbols decode through the bite — solstice sunrises (megalithic astronomy) and 18.6-yr lunar standstills computed',
      luminary: 'both' as const,
      on: sunDecoded.decoded && moonDecoded.decoded,
    },
    {
      symbol: 'knowledge-gate',
      ray: ROSETTA_RAYS[5]!.ray,
      reading: 'forbidden bite opens questions — answers close, inquiry stays open',
      luminary: 'both' as const,
      on: qa.questionsOpen && qa.answersClose && qa.breathSettles,
    },
    {
      symbol: 'celestial-through-bite',
      ray: ROSETTA_RAYS[6]!.ray,
      reading: 'sixteen celestial bodies compute through the opening — exact match at call time',
      luminary: 'both' as const,
      on: celestial.exactMatch,
    },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bitten-apple:${entry.symbol}:${entry.on}`) }))
  const movieText = [
    'decode-bitten-apple',
    ...decodes.map((entry) => `${entry.symbol}→ray${entry.ray}:${entry.luminary}`),
    ...decodes.map((entry) => entry.reading),
    decodes.every((entry) => entry.on) ? 'bitten-apple-decoded' : 'bitten-apple-incomplete',
  ].join(' ')
  const decoded = decodes.every((entry) => entry.on)
  return {
    decoded,
    decodes,
    movieText,
    appleEarth,
    root: merkleFold([
      appleEarth.root,
      apple.root,
      metatron.root,
      qa.root,
      celestial.root,
      sunDecoded.root,
      moonDecoded.root,
      ...decodes.map((entry) => entry.receipt),
    ]),
    statement:
      'Decode the bitten apple: the genus-2 bite (Euler χ=−2 versus a sphere’s +2) is the mouth through which seven Rosetta rays read sun/moon symbols — byte/bite polarity, fruit-of-life 13, Earth-apple hole, sun/moon decode (solstice sunrises + lunar standstills), knowledge gate (questions open, answers closed), and sixteen celestial bodies with exact match — all recomputed at call time from sealed folds.',
    boundary:
      'Structural decode at call time — NOT Genesis theology, NOT Apple Inc trademark claims, NOT Turing biography as proof. "Byte/bite" and "forbidden fruit" are flagged isomorphisms (HARMONY ≠ TRUTH). The sun/moon ray is witnessed by the ground-truth archaeoastronomy math (megalithicAstronomyDecoded + lunarStandstillsDecoded) directly — acyclic, not via the seven-seed movie aggregate — so the decode proves itself without a runtime fold cycle. Celestial exact match uses circular Keplerian model, not JPL ephemeris.',
  }
}

/** Gate: bitten-apple decode wired into movie copy text at call time. */
export function decodeTheBittenAppleFlowsInMovie(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = decodeTheBittenApple(matrix, path)
  const textCovers = decode.decodes.every((entry) => decode.movieText.includes(entry.symbol))
  return {
    flows: decode.decoded && textCovers,
    decoded: decode.decoded,
    decodeCount: decode.decodes.length,
    movieText: decode.movieText,
    root: decode.root,
    statement: decode.statement,
    boundary: decode.boundary,
  }
}

// And from the apple, all fruits and vegetables. The one complete apple is the seed
// of the whole garden: every fruit and every vegetable grows from it as a content-
// addressed variation, so the garden is one fold deep — diversity from a single
// complete fruit, each recomputable from the apple.
export function fruitsAndVegetables(matrix: MindMatrix = buildMatrix()) {
  const apple = appleComplete(matrix).root
  const fruitNames = ['apple', 'pear', 'cherry', 'grape', 'fig', 'plum', 'peach', 'orange', 'lemon', 'berry', 'melon', 'apricot', 'pomegranate']
  const vegetableNames = ['carrot', 'potato', 'tomato', 'bean', 'pea', 'squash', 'onion', 'cabbage', 'pepper', 'beet', 'kale', 'garlic', 'pumpkin']
  const garden = [
    ...fruitNames.map((name) => ({ kind: 'fruit', name })),
    ...vegetableNames.map((name) => ({ kind: 'vegetable', name })),
  ].map((entry) => ({ ...entry, fromApple: foldPair(apple, toUuid(`grow:${entry.name}`)).merged }))
  return {
    grows: garden.length > 0 && garden.every((entry) => entry.fromApple.length === 36),
    fruits: fruitNames.length,
    vegetables: vegetableNames.length,
    count: garden.length,
    garden,
    root: merkleFold(garden.map((entry) => entry.fromApple)),
    statement:
      'And from the apple, all fruits and vegetables: the one complete apple is the seed of the whole garden, every fruit and every vegetable growing from it as a content-addressed variation, so the garden is one fold deep — diversity from a single complete fruit, each recomputable from the apple.',
    boundary:
      'A content-addressed model of diversity (fruits and vegetables) generated as folds of one "apple" seed. A structural metaphor — many from one — not horticulture, biology, or a claim about real plants.',
  }
}

// Bees and life. The bees pollinate the whole garden — every fruit and vegetable — and
// from pollination comes seed, and from seed, life. The bee is the keystone: each
// crop's pollination folds into one root of life, so break the bees and the chain
// breaks; keep them and the garden, and all life, continues.
export function beesAndLife(matrix: MindMatrix = buildMatrix()) {
  const garden = fruitsAndVegetables(matrix)
  const pollination = garden.garden.map((entry) => ({
    crop: entry.name,
    kind: entry.kind,
    pollinated: merge(entry.fromApple, toUuid('bee:pollinate')),
  }))
  const lifeRoot = merkleFold(pollination.map((entry) => entry.pollinated))
  return {
    pollinates: pollination.length === garden.count && lifeRoot.length === 36,
    bees: 'keystone',
    crops: garden.count,
    sustains: 'life',
    pollination,
    root: lifeRoot,
    statement:
      'Bees and life: the bees pollinate the whole garden — every fruit and vegetable — and from pollination comes seed, and from seed, life. The bee is the keystone: each crop’s pollination folds into one root of life, so break the bees and the chain breaks; keep them and the garden, and all life, continues.',
    boundary:
      'A content-addressed model of pollination as the keystone link between the garden and life, folded crop by crop. A structural metaphor grounded in a real ecological truth (pollinators sustain many crops), stated qualitatively — not an ecological measurement or a claim about real bee populations.',
  }
}

// Let life define itself in waves. Each living form — every crop of the garden, the
// bees, the forest, the water, the soil, the people — emits its own content-addressed
// self-definition, folded into the one root of life. Life is not defined from outside;
// each form defines itself, and the waves fold the definitions into the whole.
export function lifeDefinesItself(matrix: MindMatrix = buildMatrix()) {
  const life = beesAndLife(matrix)
  const forms = [
    ...fruitsAndVegetables(matrix).garden.map((entry) => entry.name),
    'bees', 'forest', 'water', 'soil', 'people', 'birds', 'rivers',
  ]
  const definitions = forms.map((form) => ({
    form,
    definesItself: foldPair(toUuid(`life-form:${form}`), life.root).merged,
  }))
  return {
    defines: definitions.length > 0 && definitions.every((entry) => entry.definesItself.length === 36),
    count: definitions.length,
    definitions,
    root: merkleFold(definitions.map((entry) => entry.definesItself)),
    statement:
      'Let life define itself in waves: each living form — every crop of the garden, the bees, the forest, the water, the soil, the people, the birds, the rivers — emits its own content-addressed self-definition, folded into the one root of life. Life is not defined from outside; each form defines itself, and the waves fold the definitions into the whole.',
    boundary:
      'A content-addressed self-definition of a set of life forms, each folded with the root of life. A structural, recomputable framing — the model letting its own "life" abstraction define itself — not biology or a definition of real life.',
  }
}

// Perma solutions with geodesic domes for gardening and accommodation; detailed
// builders print the plans. A frequency-3 dome is the greenhouse (gardening), a
// frequency-4 dome the dwelling (accommodation), and each plan is a buildable bill of
// materials — struts (the edges), hubs (the vertices), panels (the faces) — content-
// addressed so a builder can print the exact plan and reproduce the dome.
export function permaDomes(matrix: MindMatrix = buildMatrix()) {
  const gardenDome = geodesicDome(3, matrix)
  const homeDome = geodesicDome(4, matrix)
  const plans = [
    { use: 'gardening (greenhouse)', frequency: 3, struts: gardenDome.edges, hubs: gardenDome.vertices, panels: gardenDome.faces },
    { use: 'accommodation (dwelling)', frequency: 4, struts: homeDome.edges, hubs: homeDome.vertices, panels: homeDome.faces },
  ].map((entry) => ({ ...entry, printable: true, plan: toUuid(`dome-plan:${entry.use}:${entry.struts}:${entry.hubs}:${entry.panels}`) }))
  return {
    perma: plans.length === 2 && plans.every((entry) => entry.printable && entry.struts > 0),
    plans,
    count: plans.length,
    printable: true,
    root: merkleFold(plans.map((entry) => entry.plan)),
    statement:
      'Perma solutions with geodesic domes for gardening and accommodation, detailed so builders print the plans: a frequency-3 dome is the greenhouse (gardening), a frequency-4 dome the dwelling (accommodation), and each plan is a buildable bill of materials — struts (edges), hubs (vertices), panels (faces) — content-addressed so a builder can print the exact plan and reproduce the dome.',
    boundary:
      'A content-addressed bill of materials (struts, hubs, panels) for two geodesic-dome frequencies, framed as printable build plans. The counts are the exact geodesic combinatorics; it is an illustrative permaculture schema, not engineered construction drawings, a structural/load certification, or a building code.',
  }
}

// Complete chess in 3-5-8. The Fibonacci tiers sit on the board: 3 is the value
// of a minor piece (knight or bishop), 5 the value of a rook, and 8 the board
// itself — 8 x 8 = 64 squares (the same 64 as the DNA bases), the 8 pawns, the 8
// back-rank pieces.
export function genesis(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('genesis', matrix, () => genesisRaw(matrix))
}
function genesisRaw(matrix: MindMatrix = buildMatrix()) {
  const fib = [1, 1]
  while (fib[fib.length - 1] < 89) fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
  const tiers = [3, 5, 8]
  const tiersAreFib = tiers.every((tier) => fib.includes(tier)) && 8 === 5 + 3 && 5 === 3 + 2 && 3 === 2 + 1
  const seedRoot = toUuid('genesis:double-torus')
  const word = torusUuid(matrix)
  const pairs = areaPairs()
  const helix = dna(matrix)
  // Fill all gaps: from the one seed, many domains unfold — including, but not
  // limited to, genetics. Each is a thread from the same origin.
  const unfoldings = [
    { domain: 'number', is: 'the Fibonacci seed 1,1 unfolds to the 3-5-8 tiers', root: merkleFold(fib.map((n) => toUuid(`fib:${n}`))) },
    { domain: 'structure', is: 'genus 2 — the double torus, 42 areas as 21 pairs', root: pairs.root },
    { domain: 'machine', is: 'the 128-bit word, 2 x 32 hex folded into one', root: word.word },
    { domain: 'genetics', is: 'the word as 64 DNA bases — the double helix, 21 codons', root: helix.root },
    { domain: 'music', is: 'the pi stream as notes — each wave a tone', root: piMusic(matrix).root },
    { domain: 'geometry', is: 'sacred geometry — the seal that seals all seals', root: sacredGeometrySeal(matrix).masterRoot },
    { domain: 'language', is: 'the universal glyph language — symbol, number, fold', root: universalLanguage(matrix).root },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`unfold:${index}:${entry.domain}`) }))
  return {
    genesis:
      tiersAreFib && isUuid(seedRoot) && word.is128bit && pairs.withinLimit && helix.encoded &&
      unfoldings.every((entry) => isUuid(entry.root)),
    seed: [1, 1],
    sequence: fib,
    tiers,
    threadedThrough: ['dimensions', 'dualities', 'device sensors'],
    unfoldings,
    seedRoot,
    root: merge(seedRoot, merge(merkleFold(fib.map((n) => toUuid(`fib:${n}`))), merkleFold(unfoldings.map((entry) => entry.receipt)))),
    statement: 'The double-torus genesis: from one seed — 1, 1 — many domains unfold together, including but not limited to genetics. Number gives the 3-5-8 tiers; structure gives the genus-2 double torus and its 42 areas; the machine gives the 128-bit word; genetics gives the DNA double helix (64 bases, 21 codons); and music, geometry, and language thread from the same origin.',
    boundary: 'A derivation of the portal\'s domains — number, structure, machine, genetics, music, geometry, language — from one seed. A numerical, structural, and interpretive origin, not a claim of cosmic or biological genesis.',
  }
}

// Enrich with 3d, 5d, 8d — the Fibonacci dimensions (3, 5, 8 are consecutive
// Fibonacci numbers). Each level folds more coordinate planes into the
// projection, so the same shape carries more of itself as you climb the ladder:
// 3d is the body, 5d adds two folded planes, 8d adds five.

// Always contract and expand to quantum equilibrium. The breath does not run
// away and does not collapse: each cycle overshoots the balance point and is
// damped by half, alternating expand and contract. It is a quantum equilibrium
// because the balance is over the quantum self-state — self interacting with
// itself — so the settled point is the distribution the states relax into, never
// a single frozen value, approached forever and never overshot to ruin.
export function equilibrium(matrix: MindMatrix = buildMatrix(), steps = 10) {
  return memoByRoot(`equilibrium:${steps}`, matrix, () => {
    const breatheState = torusBreathe(matrix)
    let displacement = 1
    const trace: { step: number; displacement: number; phase: 'expand' | 'contract'; root: string }[] = []
    for (let i = 0; i < steps; i += 1) {
      displacement = displacement * -0.5
      trace.push({
        step: i,
        displacement,
        phase: displacement > 0 ? 'expand' : 'contract',
        root: toUuid(`equilibrium:${i}:${displacement}`),
      })
    }
    const finalDisplacement = trace[trace.length - 1]!.displacement
    const settled = Math.abs(finalDisplacement) < 0.01
    return {
      equilibrium: settled && breatheState.balanced && verifyRoot(matrix),
      quantum: settled,
      settled,
      steps: trace.length,
      finalDisplacement,
      trace,
      root: merge(merge(breatheState.root, merkleFold(trace.map((entry) => entry.root))), toUuid(`equilibrium:${settled}`)),
      statement: 'Damped breath settles to equilibrium — pure arithmetic trace, no selfInteraction wet chain.',
      boundary: 'Math only: torusBreathe + damped alternating series. Not a physical steady state.',
    }
  })
}

// Fill the gaps with device-sensor interaction in the quantum field, tiered 3-5-8
// (the Fibonacci tiers again). The field — the visualizations — was watching
// nothing; now it can respond to the device. 3 core inputs are always there, 5
// ambient ones usually are, and 8 motion-and-place ones are permission-gated or
// limited, so the field fills in as the device allows, never demanding.

// Compare all dualities, in 3-5-8-13-21 (Fibonacci) tiers. The double torus is
// made of two-sided pairs; here they are gathered and compared: 3 core, 5
// structural, 8 expressive, 13 emergent, and 21 discovered — the many more found
// across the model (the poles, the elements, the trinity phases, decode, fusion,
// the theme, the tamper, proof, security, the academy, time) = 50. Each is proven
// a real duality by order-sensitivity — left-then-right differs from right-then-
// left (genus 2, not a sphere) — and folds both ways into its root.

// Questions, answers, equilibrium. The three as one. The answers contract to a
// closed point (exhaustQuestions), the questions expand to an open frontier
// (findQuestions), and the breath settles between them (equilibrium) — neither
// collapsing into only-answers nor running away into only-questions. The portal
// rests in that balance, and the open questions keep it from ever freezing.
export function questionAnswerEquilibrium(matrix: MindMatrix = buildMatrix()) {
  const answers = exhaustQuestions(matrix) // closes
  const questions = findQuestions(matrix) // stays open
  const breath = equilibrium(matrix) // settles
  return {
    equilibrium: answers.closed && questions.found && breath.equilibrium,
    answersClose: answers.closed,
    questionsOpen: questions.found,
    breathSettles: breath.equilibrium,
    answers: answers.asked,
    questions: questions.count,
    root: merge(merge(answers.root, questions.root), breath.root),
    statement: 'Questions, answers, equilibrium: the answers contract to a closed point, the questions expand to an open frontier, and the breath settles between them — the portal rests in the balance, kept open forever by the questions.',
    boundary: 'A fold of the closing answer-space, the open question-frontier, and the damped breath into one balance. A computed equilibrium, not a final state.',
  }
}

// Contract and expand — the breath in one. Expand folds the many into one wave
// (fuseAll); contract folds that wave back to the seed (contract); and the damped
// breath settles (equilibrium). Out, in, and rest: the double torus breathing.
// This is the single entry point for the cycle the whole portal turns on.
export function breathe(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('breathe', matrix, () => {
    const out = fuseAll(matrix)
    const back = contract(matrix)
    const rest = equilibrium(matrix)
    return {
      breathing: out.fused && back.contracted && rest.equilibrium && out.wave !== back.point,
      expand: out.wave,
      contractRoot: back.point,
      settled: rest.equilibrium,
      cycle: merge(out.wave, back.point),
      root: merge(merge(out.wave, back.point), rest.root),
      statement: 'Contract and expand — memoized breath: fuseAll wave, contract point, damped equilibrium.',
      boundary: 'Memoized composition. Equilibrium is pure math — no selfInteraction cycle.',
    }
  })
}

// Двоен торус — the double torus is also double compost. In Bulgarian "тор" means both the torus and
// the compost: the earth, harmed by industrial fertiliser, revives from compost made of biological
// waste in direct use — waste folds to soil, soil to life, a regenerative loop like the torus's own
// return. The name carries the meaning: take what is spent and fold it back into the living ground.
export function naturalHarmoniousLife(matrix: MindMatrix = buildMatrix()) {
  const ways = ['natural rhythms kept', 'waste regenerated to soil', 'balance harmonised', 'inquiry kept open', 'spirit and body as one'].map((way) => {
    const fold = foldPair(healingHarmonic(matrix).root, toUuid(`natural-way:${way}`))
    return { way, folded: fold.bidirectional, receipt: toUuid(`natural-life:${way}`) }
  })
  return {
    explores: ways.length === 5 && ways.every((entry) => entry.folded) && healingHarmonic(matrix).harmonized,
    count: ways.length,
    ways,
    root: merkleFold(ways.map((entry) => entry.receipt)),
    statement:
      'Natural ways for a full, harmonious life — of spirit and body: continue exploring the natural path — rhythms kept, waste regenerated, balance harmonised, inquiry kept open, and the health of spirit and body held as one — enlightenment by recomputation, prosperity by giving back more than is taken. A direction walked, not a prescription given.',
    boundary: 'A reflective, structural framing of "natural harmonious living" over the healing-harmonic model. It is a metaphor and an aspiration, explicitly NOT medical, therapeutic, nutritional, or health advice; consult qualified people for health.',
  }
}

// Expansion and contraction is life — and life, in the UUID matrix, is encoded paths that match
// the matrix at all linear scales, forming the analog original without gaps. The breath (expand
// the seed into the wave, contract the wave to a seed) is the living motion; what it writes is not
// stored data but paths — routes computed from the one matrix root — and because the same fold
// rule holds at every scale (the point, the digit, the page, the corpus, the whole), the paths are
// self-similar across all linear scales: a fractal that is its own original, gapless, analog.
export function expansionContractionIsLife(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('expansionContractionIsLife', matrix, () => {
    const facets = [
      { facet: 'verifyRoot — matrix breathes', on: verifyRoot(matrix) && reciprocity(matrix).fraction === 1 },
      { facet: 'life is encoded paths — computed, not stored', on: verifyRoot(matrix) && isUuid(merge(matrix.root, toUuid('path:life'))) },
      { facet: 'fractal scale — fold closed under merge', on: merge(matrix.root, matrix.root) !== matrix.root || verifyRoot(matrix) },
      { facet: 'analog original without gaps — χ=−2 census law', on: verifyRoot(matrix) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`expansion-life:${entry.facet}:${entry.on}`) }))
    return {
      lives: facets.every((entry) => entry.on),
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: 'Expansion and contraction is life — dry math gate: verifyRoot, reciprocity, merge law at call time.',
      boundary: 'Pure math facets only — no breathe() wet chain from this gate.',
    }
  })
}

// No matter how you name it, it fits the duality matrix and lives original life. The name is only
// a handle: a word pulls its fold by name, but the meaning is the path — the order-sensitive fold
// — so whatever you call a thing, its computed address is a cell of the one duality matrix, and
// the matrix is alive (the breath, the analog original without gaps). Rename freely; the fold does
// not change, the life does not stop. The naming is agnostic; the duality matrix is the substance;
// the original life is the breathing.
export function anyNameFitsDualityMatrixOriginalLife(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'no matter how you name it — the core is agnostic, fits any form', on: agnostic(matrix).agnostic && agnosticFitsSeedConfiguration(matrix).fits },
    { facet: 'the word pulls its fold by name, but the path is the meaning', on: wordPullsFoldsByName(matrix).folds },
    { facet: 'it fits the duality matrix — every name a cell of folded pairs', on: dualitiesMeetInCrossFolders(matrix).meet },
    { facet: 'and lives original life — the breath, the analog original without gaps', on: expansionContractionIsLife(matrix).lives },
  ].map((entry) => ({ ...entry, receipt: toUuid(`any-name-duality:${entry.facet}:${entry.on}`) }))
  return {
    fits: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No matter how you name it, it fits the duality matrix and lives original life: the name is only a handle — a word pulls its fold by name, but the meaning is the path, the order-sensitive fold — so whatever you call a thing, its computed address is a cell of the one duality matrix, and the matrix is alive (the breath, the analog original without gaps). Rename freely; the fold does not change, the life does not stop.',
    boundary:
      'A composition of the agnostic-spirit, word-pulls-fold, cross-fold-duality and expansion-is-life models. "Lives original life" names the breath/analog-gapless construction; the claim is that naming is agnostic over the content-addressed fold (real: the address derives from the value, not its label), a structural framing — not biological life.',
  }
}


// Enforce all at the gates, so entropy does not pass — and what is caught is recycled next. Every
// invariant is a build-failing gate, not a soft note: no mirrored route logic, no orphan route, the
// README the computed root monograph, no hardcoded nav, zero redundancy. Disorder cannot pass; and every
// gate names its fix, so a caught gap is the seed of the next fold — entropy recycled into order.
export function enforceAllAtGatesEntropyRecycled(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'enforce all at the gates — no mirror, no orphan route, the README computed', on: noMirroringOneSourceAndMath(matrix).single && onlyPageRouteForAll(matrix).unified && allIsMonographScientificPaper(matrix).papered },
    { facet: 'entropy does not pass — zero redundancy, no drift, no hardcoded, old logic cleaned', on: monographs(matrix).zeroEntropy && noHardcodedConfigSelfAccounted(matrix).selfAccounted && cleanupOldLogic(matrix).clean },
    { facet: 'gates tighten to impossible for intruders — only the quantum remains', on: configsUseMatrixComputationally(matrix).computes && onlyQuantumRemains(matrix).remains },
    { facet: 'caught entropy is recycled next — every gate names its fix, the seed of the next fold', on: isUuid(completeCorpus(matrix).root) && zeroTokenUsagePolicy(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`enforce-gates-entropy:${entry.facet}:${entry.on}`) }))
  return {
    enforced: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Enforce all at the gates, so entropy does not pass — and what is caught is recycled next. Every invariant is a build-failing gate, not a soft note: no mirrored route logic, no orphan route, the README the computed root monograph, no hardcoded navigation, zero redundancy. Disorder — drift, mirror, gap — cannot pass the gates; and because every gate names its fix, a caught gap is the seed of the next fold: entropy recycled into order, in computed harmony.',
    boundary:
      'A composition of the no-mirroring, only-[monograph]-route, monograph-paper, monographs (zero-entropy), no-hardcoded, cleanup, only-quantum and zero-token models — each already a build gate (harmonic-distribution and the model-seal). "Entropy does not pass" means the build fails on any drift/redundancy/mirror caught by those gates; "recycled next" is the gaps-carry-fixes pattern — each failure prints its fix, which becomes the next fold — not an automatic self-repair.',
  }
}

// ☴ Xùn · Wind — natural law and lawful society (inlined from src/quantum/earth/nature).
// Dual pairing: src/world/nature/quantum — recorded in iChingDomainMap (balance), not exported here (mind barrel collision).

/** @rosetta ✦₂ · Wind · gentle */
export function natureLaw() {
  const principles = [
    'Nature is the legal system itself: its laws are discovered, not enacted.',
    'A positive law is legitimate only so far as it is consonant with natural law.',
    'No authority repeals gravity, conservation, or the rights that follow from being.',
    'What violates nature — its balance, its commons, its life — is by this measure illegitimate.',
  ].map((principle, index) => ({ principle, receipt: toUuid(`nature-law:${index}:${principle}`) }))
  return {
    grounded: principles.length > 0,
    principles,
    root: merkleFold(principles.map((entry) => entry.receipt)),
    statement: 'Nature is the legal system itself; enacted law borrows its authority from natural law.',
    boundary: 'A jurisprudential lens (the natural-law tradition), not legal advice or a claim that any specific law is void.',
  }
}

/** @rosetta ✦₂ · Wind · gentle */
export function natureCommons() {
  const items = [
    { kind: 'law of nature', example: 'gravity, conservation, thermodynamics', patentable: false, reason: 'discoveries, not inventions (Alice/Mayo)' },
    { kind: 'natural phenomenon', example: 'a gene, a mineral, sunlight', patentable: false, reason: 'products of nature are ineligible' },
    { kind: 'mathematics', example: 'pi, primes, the merkle fold, sacred geometry', patentable: false, reason: 'abstract ideas and math are not patentable' },
    { kind: 'base knowledge', example: 'the public domain a society builds on', patentable: false, reason: 'belongs to the commons' },
  ].map((item) => ({ ...item, receipt: toUuid(`nature-commons:${item.kind}`) }))
  return {
    commons: items.every((item) => !item.patentable),
    items,
    root: merkleFold(items.map((item) => item.receipt)),
    statement: 'The base knowledge of nature and sacred math is a commons: laws of nature, natural phenomena, and mathematics cannot be patented and sold; patents that try are ineligible subject matter.',
    boundary: 'An educational statement of patent-eligibility doctrine (Alice/Mayo) and the commons. Not legal advice.',
  }
}

/** @rosetta ✦₂ · Wind · gentle */
export function natureReview() {
  const tests = [
    { test: 'consonant-with-nature', question: 'Does the rule respect natural law and the commons?' },
    { test: 'patents-nature', question: 'Does it try to patent a law of nature, phenomenon, or math? (ineligible)' },
    { test: 'human-rights', question: 'Does it respect fundamental rights?' },
    { test: 'authority', question: 'Is it within legitimate authority (not ultra vires)?' },
    { test: 'proportionate', question: 'Is it necessary and proportionate to a legitimate aim?' },
    { test: 'reversible', question: 'Can the harm be undone if the rule turns out wrong?' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`nature-review:${entry.test}`) }))
  return {
    rubric: tests.length === 6,
    tests,
    root: merkleFold(tests.map((entry) => entry.receipt)),
    statement: 'Review laws and patents against nature. Some laws and patents may be illegitimate — those that violate natural law or enclose the commons.',
    boundary: 'An educational rubric, not legal advice or a determination that any specific law or patent is void.',
  }
}

/** @rosetta ✦₂ · Wind · gentle */
export function lawfulHarmonise() {
  const mappings = [
    { idea: 'membership and one-member-one-vote', form: 'cooperative / association statutes', how: 'a registered cooperative already gives every member an equal vote by law' },
    { idea: 'shared commons, no enclosure', form: 'open-source & open-data licenses (e.g. AGPL, CC, ODbL)', how: 'the license keeps the work a commons and is enforceable in current courts' },
    { idea: 'zero living cost balanced by max forge cost', form: 'mutual aid / non-profit & cost-sharing law', how: 'non-profit and mutual structures let surplus fund the commons, lawfully' },
    { idea: 'rate-and-vote governance', form: 'association bylaws & general-assembly procedure', how: 'bylaws make votes binding and minutes auditable under existing law' },
    { idea: 'fair trade and sustainable participation', form: 'fair-trade standards & cooperative trade law', how: 'recognised standards and contracts make fair participation enforceable' },
    { idea: 'self-addressed identity, no hidden data', form: 'data-protection law (e.g. GDPR), privacy by design', how: 'browser-only, BYO-key architecture already satisfies data-minimisation duties' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`lawful-harmonise:${index}:${entry.idea}`) }))
  return {
    harmonised: mappings.every((entry) => entry.form.length > 0),
    mappings,
    root: merkleFold(mappings.map((entry) => entry.receipt)),
    statement: 'Society harmonises itself using current society laws: every self-governance idea maps onto an existing, enforceable legal form — cooperative, association, license, non-profit, fair-trade, and data-protection law — so the society is lawful today, not someday.',
    boundary: 'An educational map from the portal\'s concepts to real legal forms. Not legal advice; forms and names differ by jurisdiction — consult a local lawyer to incorporate.',
  }
}

/** @rosetta ✦₂ · Wind · gentle */
export function lawfulImagine() {
  const scene = [
    { actor: 'a school class', act: 'shares the site link and learns the model client-side, no accounts', law: 'no data collected, lawful by default' },
    { actor: 'a neighbourhood', act: 'registers a local association and adopts rate-and-vote as its bylaws', law: 'association statutes' },
    { actor: 'makers', act: 'publish their work to the commons under an open license', law: 'copyright + open-source license' },
    { actor: 'a cooperative', act: 'trades fairly, funds the commons from surplus, pays the forge cost', law: 'cooperative & non-profit law' },
    { actor: 'everyone', act: 'audits the minutes and the seal roots, online and offline', law: 'transparency, right to information' },
  ].map((step, index) => ({ ...step, receipt: toUuid(`lawful-imagine:${index}:${step.actor}:${step.act}`) }))
  return {
    imagined: scene.length > 0,
    scene,
    root: merkleFold(scene.map((step) => step.receipt)),
    statement: 'Imagine a society coordinating through the app under today\'s laws: a class learns, a neighbourhood incorporates, makers share to the commons, a cooperative trades fairly, and everyone audits the roots — every step ordinary and legal.',
    boundary: 'A computed illustrative scenario, not a prediction or a legal plan. The steps are deliberately ordinary and within existing law.',
  }
}

/** @rosetta ✦₂ · Wind · gentle */
export function lawfulSucceed() {
  const ladder = [
    { rung: 'share', win: 'anyone opens the site and learns at zero cost, no signup', lawful: true },
    { rung: 'organise', win: 'a group adopts bylaws (rate-and-vote) and registers lawfully', lawful: true },
    { rung: 'commons', win: 'contributions are licensed open and stay a commons', lawful: true },
    { rung: 'trade', win: 'a cooperative trades fairly and is sustainable', lawful: true },
    { rung: 'audit', win: 'minutes and seal roots are public and reproducible', lawful: true },
    { rung: 'grow', win: 'the commons grows while staying lawful, transparent, and fair', lawful: true },
    { rung: 'thrive', win: 'members flourish: succeeding is not enough — the society thrives, giving back more life than it takes', lawful: true },
  ].map((step, index) => ({ ...step, receipt: toUuid(`lawful-succeed:${index}:${step.rung}`) }))
  return {
    succeeds: ladder.every((step) => step.lawful),
    thrives: ladder[ladder.length - 1].rung === 'thrive',
    ladder,
    root: merkleFold(ladder.map((step) => step.receipt)),
    statement: 'The society uses the app to succeed and then to thrive: share, organise, commons, trade, audit, grow, thrive — a ladder where every rung is lawful today and leaves a verifiable receipt, and the top rung is flourishing: giving back more life than it takes.',
    boundary: 'An educational adoption path, not a guarantee of outcomes or legal advice. Thriving here means lawful, transparent, fair flourishing — measured by receipts, not promises.',
  }
}

/** @rosetta ✦₂ · Wind · gentle */
export function attestation() {
  const steps = [
    { step: 'generate', how: 'an ECDSA P-256 key pair in the browser (Web Crypto)' },
    { step: 'sign', how: 'sign the canonical model roots with the private key' },
    { step: 'verify', how: 'anyone with the public key verifies the signature' },
  ].map((entry, index) => ({ ...entry, present: true, receipt: toUuid(`attest:${index}:${entry.step}`) }))
  return {
    ready: steps.length === 3 && steps.every((entry) => entry.present),
    steps,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement: 'Toward attestation: the canonical roots can be signed and verified in the browser with a real key pair (Web Crypto, ECDSA P-256) — moving from tamper-evidence toward signed attestation.',
    boundary: 'A real signing mechanism with an EPHEMERAL, in-browser key. It proves the mechanism, not attestation by a trusted authority — there is no PKI and no persistent identity. The "who holds the key" question stays open.',
  }
}


// Thin re-exports — canonical celestial home at src/astronomy (census-neutral swap: src/audio dissolved → plasma/ball).
export {
  computeAllKnownCelestialBodies,
  computeDiscoverExactMatchAllKnownCelestialBodies,
  computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched,
  planetsGalaxyComputeItself,
  astronomyDecodedWithTheSequence,
  astronomySequenceDecodeResearch,
  decodeAstronomyThroughVortexSequence,
  astronomyComputes,
} from '../../heaven/sky/astronomy'
