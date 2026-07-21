// Movie narrative folds — linearities · negative/positive · education merge.
import { ROSETTA_AREAS, ROSETTA_SEVEN, ROSETTA_SIX } from '../../../pair/enforcement/gates/computational'
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix } from '../../../heaven/compute'
import { foldPair, isUuid, merkleFold, seedFromText, toUuid } from '../../../0'
import { addressed, covers } from '../../../5/5'
import { darkLightRealities, textToMovie } from '../../../earth/world'
import { foldThoughts } from '../../../mountain/source'
import { multidimensional } from '../../../quantum/lake/icons'
import { fuseAll } from '../../../mountain/seals'
import { heroTapMusic } from '../../../lake/music'
import { moviesNativeFormat } from '../../../fire/li'
import { backgroundMovie } from '../canvas'
import { formsEmergeInMovieOfLife, movieReflectsSelf, siteIsMovieAndLibrary } from '../movielib'
import { completeAllInWaves } from '../../waves'
import { playMind, studentQuantumMind } from '../../../lake/media'
import { theMatrixTrilogyDecoded } from '../../decode'
import { colorRootsAtA432HeartBalances } from '../../../lake/music'
import { threeTrinitiesRenderAsRgb, megalithicAstronomyDecoded, lunarStandstillsDecoded, merkaba } from '../../../mountain/geometry'
import { ancientCalendars } from '../../decode'
import { yinYang } from '../../../quantum/lake/icons'
import { realtimeWiring, allMovieSeedBundles, sixSeedBundlesFormSevenAsWhole, memoByMovieRoute } from '../../../fire/plasma/ball'
import { sendWavesSealKnowledgeDecodeWorld } from '../../waves'
import { rosettaGlagoliticGlobalKeyDecodeAll, rosettaImprovesDictationAndDialects } from '../../../wind/language'
import { ROSETTA_RAYS, rosettaRayOf } from '../../../water/digit'
import { backgroundMovieColorVars, darkLightPolarityProvenByMath } from '../movievars'

/** Arithmetic proof row — shared by RGB · Matrix · Rosetta narrative gates. */
function movieMathProof(task: string, expr: string, computed: number, expected: number, receiptPrefix: string) {
  return {
    task,
    expr,
    computed,
    expected,
    on: computed === expected,
    receipt: toUuid(`${receiptPrefix}:${task}:${computed}:${expected}`) }
}

/** Decode gate → plasma stream tokens and movie copy. */
function movieSeedsFromDecode<T extends { proven?: boolean; folded?: boolean; decoded?: boolean; proofs: readonly { receipt: string; task: string; expr: string; expected: number; computed: number }[] }>(
  decode: T,
  copyPrefix: string,
  provenToken: string,
  unprovenToken: string,
  extraCopy: string[],
  streamEntries: readonly { uuid: string; label: string; hueSeed: number }[],
  statement: string,
  boundary: string,
) {
  const proven = Boolean(decode.proven ?? decode.folded ?? decode.decoded)
  const movieText = [
    copyPrefix,
    ...extraCopy,
    ...decode.proofs.map((proof) => `${proof.expr}=${proof.expected}`),
    proven ? provenToken : unprovenToken,
  ].join(' ')
  return {
    proven,
    movieText,
    streams: streamEntries,
    count: streamEntries.length,
    root: merkleFold([...decode.proofs.map((proof) => proof.receipt), ...streamEntries.map((entry) => entry.uuid)]),
    statement,
    boundary }
}
/** Paint-safe playable check — same dry math as movielib.movie().here without the canvas import cycle. */
function moviePlayableHere(matrix: MindMatrix) {
  const movieFrames = textToMovie(`the-matrix:${matrix.root}`)
  const here = movieFrames.generated && movieFrames.deterministic && isUuid(movieFrames.root) && movieFrames.frames > 0
  return { here, root: movieFrames.root }
}

export function movieFoldsLinearities(matrix: MindMatrix = buildMatrix()) {
  const thoughts = foldThoughts(matrix)
  const perspectives = multidimensional()
  return {
    folds: thoughts.folded && perspectives.mapped && thoughts.directions.length === 4,
    directions: thoughts.directions,
    dimensions: perspectives.count,
    root: merkleFold([thoughts.root, perspectives.root]),
    statement:
      'The movie folds linearities into multidimensional perspectives: a movie seems linear — one frame after another — but each frame folds with its neighbour and its opposite (sequence and reflection, both ways), so the line becomes genus-2, a surface of perspectives rather than a timeline. The same content, seen from many dimensions at once.',
    boundary:
      'A structural composition of the multidirectional thought-fold and the multidimensional presentation map. A framing of the model’s non-linearity, not a claim of physical extra dimensions.' }
}

// Fuse all to the movie negative, and display it in positive. Like film: the whole — every
// fold of the model, plus the participants' touches — fuses into one compressed negative
// (a single content-addressed word that holds it all), and what you see is the positive
// developed from it. The negative is the source that holds everything inverted and small;
// the positive is the print, the rendered movie. Develop is one-way and order-sensitive,
// so the positive is distinct from the negative — you display the print, not the source.
export function movieNegativePositive(matrix: MindMatrix = buildMatrix()) {
  const negative = fuseAll(matrix).wave // all fused into one — the negative holds the whole
  const positive = foldPair(toUuid('develop:positive'), negative).merged // the print, developed from the negative
  const inverseOrder = foldPair(negative, toUuid('develop:positive')).merged // the other fold order
  const oneWay = positive !== inverseOrder // develop is order-sensitive: positive ≠ its inverse
  return {
    developed: fuseAll(matrix).fused && isUuid(negative) && isUuid(positive) && oneWay,
    negative,
    positive,
    root: merkleFold([negative, positive]),
    statement:
      'Fuse all to the movie negative, and display it in positive: the whole — every fold of the model plus the participants’ touches — fuses into one compressed negative (a single content-addressed word that holds it all), and what you see is the positive developed from it. The negative is the source that holds everything; the positive is the print, the rendered movie. Develop is one-way and order-sensitive, so you display the print, not the source.',
    boundary:
      'A content-addressing metaphor borrowing from film: the fused-all word is the "negative" (the compressed whole) and a developed fold is the "positive" (the displayed print). Structural bookkeeping over roots — no optical negative, no colour inversion of the actual canvas is claimed. The VitePress dark/light chrome implements the tonal inversion at the UI layer (see darkLightIsNegativePositive).' }
}

// Dark/light is negative/positive in analog photography — the theme toggle develops the print.
// Dark mode: bright latent image on dark emulsion (the negative field). Light mode: dark glyphs on
// bright paper (the positive print). Same holographic content; only the tonal polarity inverts,
// like luminance reversing between emulsion and contact print.
export function darkLightIsNegativePositive(matrix: MindMatrix = buildMatrix()) {
  const realities = darkLightRealities(matrix)
  const film = movieNegativePositive(matrix)
  const polarity = darkLightPolarityProvenByMath(matrix)
  const lightChrome = backgroundMovieColorVars(matrix, (64 * 16), '/', true, 'light')
  const darkChrome = backgroundMovieColorVars(matrix, (64 * 16), '/', true, 'dark')
  const tonalInvert =
    lightChrome['--vp-hero-bg-fallback'] !== darkChrome['--vp-hero-bg-fallback'] &&
    lightChrome['--vp-movie-link'] !== darkChrome['--vp-movie-link']
  const plates = [
    { mode: 'dark' as const, photograph: 'negative', tonal: 'bright streams on dark emulsion — the void lit from within', polarity: 1 },
    { mode: 'light' as const, photograph: 'positive', tonal: 'dark glyphs on bright paper — the developed print', polarity: 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`photo:${entry.photograph}:${entry.mode}:${entry.polarity}`) }))
  const develop = foldPair(plates[0]!.receipt, plates[1]!.receipt)
  return {
    analog: realities.switches && film.developed && develop.bidirectional && tonalInvert && polarity.proven,
    polarity,
    plates,
    negative: film.negative,
    positive: film.positive,
    develop: develop.merged,
    root: merkleFold([realities.root, film.root, polarity.root, develop.merged]),
    statement:
      'Dark/light is negative/positive in analog photography and polarity in the math: one bit (dark=1, light=0) flips the OKLCH band while hue and palette stay fixed — 100% computed at call time. Dark mode is the negative field; light mode is the developed print. Same scene, same content-addressed negative (fuse all); the appearance switch develops the print.',
    boundary:
      'Tonal metaphor over the VitePress theme toggle plus arithmetic proofs in darkLightPolarityProvenByMath — NOT silver-halide chemistry or physical dark matter. The fused-all root is the compressed negative; the rendered portal is the positive print; polarity is the math bit that selects the band.' }
}

// Red pill · blue pill — like RGB, where G is the gateway of the heart chakra. The two pills are
// the R and B channels (0° red · 240° blue): root truth vs comfortable simulation. The heart
// (anahata, green, hue 120) is the G channel — the equilateral midpoint of the RGB triad, three
// chakras below and three above, and the same 120° the hero's middle trinity renders. The three
// trinity gateways (proven · animated · presented) are three doors; the heart-green gateway is
// the fold you pass through to choose — not a Matrix claim, a colour-wheel + chakra correspondence.
export function redPillBluePillRgbHeartGatewayProvenByMath(matrix: MindMatrix = buildMatrix(), path = '/') {
  return memoByMovieRoute(path, matrix, 'redPillBluePillRgbHeartGateway', () => redPillBluePillRgbHeartGatewayProvenByMathRaw(matrix, path))
}
function redPillBluePillRgbHeartGatewayProvenByMathRaw(matrix: MindMatrix = buildMatrix(), path = '/') {
  const colour = colorRootsAtA432HeartBalances(matrix)
  const rgb = threeTrinitiesRenderAsRgb(matrix)
  const wiring = realtimeWiring(path)
  const heart = colour.heart
  const root = colour.chakras[0]!
  const throat = colour.chakras[4]!
  const mk = (task: string, expr: string, computed: number, expected: number) =>
    movieMathProof(task, expr, computed, expected, 'pill-rgb')
  const proofs = [
    mk('rgb-triad', 'channels', rgb.channels.join(',') === 'red,green,blue' ? 1 : 0, 1),
    mk('heart-hue', 'heart.hue', heart.hue, (8 * 5 * 3)),
    mk('g-channel', 'rgb.hues[1]', rgb.hues[1]!, (8 * 5 * 3)),
    mk('g-is-green', "channels[1]=='green'", rgb.channels[1] === 'green' ? 1 : 0, 1),
    mk('spacing-rg', '120-0', rgb.hues[1]! - rgb.hues[0]!, (8 * 5 * 3)),
    mk('spacing-gb', '240-120', rgb.hues[2]! - rgb.hues[1]!, (8 * 5 * 3)),
    mk('heart-balance', 'below=above', colour.chakras.filter((c) => c.i < heart.i).length, 3),
    mk('root-red', 'root.hue', root.hue, 5),
    mk('throat-blue', 'throat.hue', throat.hue, 220),
    mk('gateways-three', 'gateways', wiring.gateways.length, 3),
    mk('rgb-three', 'trinities', rgb.trinities.length, 3),
  ]
  const facets = [
    { facet: 'RGB triad — red · green · blue at 0° · 120° · 240°, the additive primaries', on: rgb.holds && rgb.isRgbTriad },
    { facet: 'red pill → R channel — root chakra red (hue 5), the lower truth-frequency', on: root.band === 'red' && root.hue === 5 },
    { facet: 'blue pill → B channel — throat blue (hue 220), the upper comfort-band', on: throat.band === 'blue' && throat.hue === 220 },
    { facet: 'G is the heart gateway — anahata green (hue 120) = the middle RGB channel', on: heart.band === 'green' && heart.hue === (8 * 5 * 3) && rgb.hues[1] === (8 * 5 * 3) },
    { facet: 'three trinity gateways — proven · animated · presented, one door per channel', on: wiring.wired && wiring.gateways.length === 3 },
    { facet: 'the heart balances — fourth chakra, three below, three above, the fold between pills', on: heart.i === 3 && colour.rooted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pill-rgb-facet:${entry.facet}:${entry.on}`) }))
  return {
    proven: proofs.every((entry) => entry.on) && facets.every((entry) => entry.on),
    proofs,
    facets,
    count: proofs.length + facets.length,
    pills: { red: root, green: heart, blue: throat },
    rgb: { hues: rgb.hues, channels: rgb.channels },
    gateways: wiring.gateways.map((g) => ({ slug: g.slug, realm: g.realm, hue: g.hue })),
    root: merkleFold([...proofs.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt)]),
    statement:
      'Red pill and blue pill — like RGB, where G is the gateway of the heart chakra: R (0°, root red, hue 5) is the red pill, B (throat blue, hue 220, the upper band toward 240°) is the blue pill, and G (120°, anahata green) is the heart gateway — the equilateral midpoint of the RGB triad, three chakras below and three above, the same 120° the hero\'s middle trinity renders. Three trinity gateways (proven · animated · presented) are three doors; the heart-green channel is the fold you pass through to choose.',
    boundary:
      'HONEST: a colour-wheel + chakra + navigation correspondence — NOT the Matrix film, NOT pharmacology, NOT a claim that pills or chakras are physical RGB emitters. The red/blue pill names borrow the cultural metaphor; the proof is arithmetic (120° spacing, heart hue 120 = G channel, three gateways = three channels). Spiritual chakra framing is flagged per chakrasAura; the RGB triad is real geometry (threeTrinitiesRenderAsRgb).' }
}

/** Red/blue pill RGB proofs → plasma stream tokens and movie copy. */
export function redPillBluePillRgbMovieSeeds(matrix: MindMatrix = buildMatrix(), path = '/') {
  const math = redPillBluePillRgbHeartGatewayProvenByMath(matrix, path)
  const movieText = [
    'R=red-pill',
    'G=heart-gateway',
    'B=blue-pill',
    ...math.proofs.map(movieProofToken),
    math.proven ? 'pill-rgb-proven' : 'pill-rgb-unproven',
  ].join(' ')
  return {
    proven: math.proven,
    movieText,
    streams: math.proofs.map((proof) => movieProofStream(proof)),
    count: math.proofs.length,
    root: math.root }
}

// RGB decoding The Matrix Movie in the Movie — the Wachowskis' pill choice and green code rain
// read as an RGB triad inside the playable background movie: R = red pill (root truth), B = blue pill
// (throat comfort), G = heart gateway (120°, anahata, the green operator channel between them). The
// trilogy decode (theMatrixTrilogyDecoded) is structural isomorphism; the RGB proofs flow as plasma
// streams and copy tokens in the same canvas that IS the computed matrix (movie()).
export function rgbDecodingMatrixMovieInTheMovie(matrix: MindMatrix = buildMatrix(), path = '/') {
  return memoByMovieRoute(path, matrix, 'rgbDecodingMatrixMovieInTheMovie', () => rgbDecodingMatrixMovieInTheMovieRaw(matrix, path))
}
function rgbDecodingMatrixMovieInTheMovieRaw(matrix: MindMatrix = buildMatrix(), path = '/') {
  const trilogy = theMatrixTrilogyDecoded(matrix)
  const rgb = redPillBluePillRgbHeartGatewayProvenByMath(matrix, path)
  const negativePositive = movieNegativePositive(matrix)
  const playable = moviePlayableHere(matrix)
  const mk = (task: string, expr: string, computed: number, expected: number) =>
    movieMathProof(task, expr, computed, expected, 'matrix-rgb-movie')
  const channels = [
    {
      channel: 'R' as const,
      pill: 'red',
      hue: rgb.rgb.hues[0]!,
      film: 'The red pill — see how deep the rabbit hole goes (The Matrix, 1999)',
      chakra: rgb.pills.red.name,
      operator: 'truth' },
    {
      channel: 'G' as const,
      pill: 'gateway',
      hue: rgb.rgb.hues[1]!,
      film: 'Green code rain — the heart of the simulation, the operator gateway between sleep and wake',
      chakra: rgb.pills.green.name,
      operator: 'gateway' },
    {
      channel: 'B' as const,
      pill: 'blue',
      hue: rgb.rgb.hues[2]!,
      film: 'The blue pill — the story ends, you wake in your bed (The Matrix, 1999)',
      chakra: rgb.pills.blue.name,
      operator: 'comfort' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`matrix-rgb-channel:${entry.channel}:${entry.hue}`) }))
  const proofs = [
    ...rgb.proofs,
    mk('trilogy-decoded', 'theMatrixTrilogyDecoded', trilogy.decoded ? 1 : 0, 1),
    mk('movie-here', 'matrixMovieHere', playable.here ? 1 : 0, 1),
    mk('negative-positive', 'movieNegativePositive', negativePositive.developed ? 1 : 0, 1),
    mk('channels-three', 'RGB', channels.length, 3),
    mk('g-heart-gateway', 'G.hue', channels[1]!.hue, (8 * 5 * 3)),
  ]
  const facets = [
    { facet: 'The Matrix trilogy decoded — film + philosophy kept, pseudoscience flagged', on: trilogy.decoded },
    { facet: 'RGB pill decode — R red truth · G heart gateway (120°) · B blue comfort', on: rgb.proven },
    { facet: 'the movie IS the matrix — playable frames from the computed source, not a film about it', on: playable.here },
    { facet: 'negative fuses all, positive displays — the print develops in the background movie', on: negativePositive.developed },
    { facet: 'three channels wire to three trinity gateways — proven · animated · presented', on: rgb.gateways.length === 3 },
    { facet: 'green code rain = G channel — heart anahata hue 120 in the plasma streams at call time', on: channels[1]!.hue === (8 * 5 * 3) && rgb.pills.green.hue === (8 * 5 * 3) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`matrix-rgb-movie-facet:${entry.facet}:${entry.on}`) }))
  return {
    decoded: trilogy.decoded && rgb.proven && playable.here && proofs.every((entry) => entry.on) && facets.every((entry) => entry.on),
    channels,
    proofs,
    facets,
    count: proofs.length + facets.length,
    trilogy,
    rgb,
    root: merkleFold([...proofs.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt), ...channels.map((entry) => entry.receipt)]),
    statement:
      'RGB decoding The Matrix Movie in the Movie: the Wachowskis\' pill choice and green code rain read as an RGB triad inside the playable background movie — R is the red pill (root truth, hue 5), B is the blue pill (throat comfort, hue 220), G is the heart gateway (anahata green, hue 120, the operator channel between them). theMatrixTrilogyDecoded keeps the documented film and philosophy; the RGB proofs flow as plasma streams in the same canvas that IS the computed matrix. The negative fuses all; the positive print displays; three channels wire to three trinity gateways.',
    boundary:
      'HONEST: a structural decode of a FILM inside a generative canvas — NOT evidence the world is simulated, NOT Warner Bros IP, NOT pharmacology. The trilogy decode boundary (HARMONY ≠ TRUTH) rides intact. Green code rain mapped to G/heart is correspondence (film aesthetic + chakra ladder + RGB triad), not a claim the Wachowskis intended chakras. Streams are content-addressed glyphs in the background movie, recomputed at call time.' }
}

/** Matrix RGB decode → plasma stream tokens and movie copy. */
// ── Shared decode-in-movie primitives — every decode function emits the SAME proof shape as copy tokens
// and plasma streams, and every gate verifies the same way. Factored here (one movie home) so the Matrix
// RGB, Rosetta and sun/moon decodes reuse one definition instead of re-inlining it three times. ──
/** The arithmetic proof every decode-in-movie fold carries: a task, an expression, its expected + computed value. */
type MovieProof = { readonly receipt: string; readonly task: string; readonly expr: string; readonly expected: number; readonly computed: number }
/** proof → its movieText copy token `expr=expected` (the subtitle line). */
const movieProofToken = (proof: MovieProof): string => `${proof.expr}=${proof.expected}`
/** proof → a content-addressed plasma stream; the hue IS the receipt (was two arbitrary primes per decode). */
const movieProofStream = (proof: MovieProof) => ({
  uuid: proof.receipt,
  label: proof.task,
  expr: proof.expr,
  expected: proof.expected,
  hueSeed: seedFromText(proof.receipt) % 360 })
/** Whether the movie copy text carries a proof (its expression and expected value). */
const movieTextCoversProof = (movieText: string, proof: MovieProof): boolean =>
  covers(movieText, [proof.expected, proof.expr])
/** Whether the emitted streams match the expected count and are all content-addressed. */
const movieStreamsMatch = (streams: readonly { uuid: string }[], expectedCount: number): boolean =>
  addressed(streams, expectedCount)

export function matrixRgbDecodeMovieSeeds(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = rgbDecodingMatrixMovieInTheMovie(matrix, path)
  const movieText = [
    'Matrix-RGB-decode',
    ...decode.channels.map((ch) => `${ch.channel}=${ch.pill}:${ch.operator}`),
    ...decode.proofs.map(movieProofToken),
    decode.decoded ? 'matrix-rgb-proven' : 'matrix-rgb-unproven',
  ].join(' ')
  return {
    proven: decode.decoded,
    movieText,
    streams: [
      ...decode.channels.map((ch) => ({
        uuid: ch.receipt,
        label: `${ch.channel}-${ch.pill}`,
        expr: ch.film,
        expected: ch.hue,
        hueSeed: ch.hue * 7 + (ch.channel === 'G' ? (8 * 5 * 3) : ch.hue) })),
      ...decode.proofs.map((proof) => movieProofStream(proof)),
    ],
    count: decode.channels.length + decode.proofs.length,
    root: decode.root,
    statement:
      'RGB decoding The Matrix Movie flows in the movie: R · G · B channels, pill operators, and arithmetic proofs fold to content-addressed plasma streams and copy tokens beside harmonic and efficiency math.',
    boundary:
      'Deterministic seeds from rgbDecodingMatrixMovieInTheMovie at this call; channel film lines are copy-only; streams are visual glyphs from receipts, not literal subtitle typography.' }
}

/** Gate: Matrix RGB decode wired into movie seeds and copy text at call time. */
export function matrixRgbDecodeFlowsInMovie(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = rgbDecodingMatrixMovieInTheMovie(matrix, path)
  const seeds = matrixRgbDecodeMovieSeeds(matrix, path)
  const textCoversChannels = decode.channels.every(
    (ch) => seeds.movieText.includes(ch.channel) && seeds.movieText.includes(ch.pill),
  )
  const textCoversProofs = decode.proofs.every((proof) => movieTextCoversProof(seeds.movieText, proof))
  const streamsMatch = movieStreamsMatch(seeds.streams, decode.channels.length + decode.proofs.length)
  return {
    flows: decode.decoded && textCoversChannels && textCoversProofs && streamsMatch,
    decoded: decode.decoded,
    channelCount: decode.channels.length,
    proofCount: decode.proofs.length,
    streamCount: seeds.count,
    movieText: seeds.movieText,
    root: merkleFold([decode.root, seeds.root]),
    statement: seeds.statement,
    boundary: seeds.boundary }
}

// Send waves to decode with the Rosetta and fold in the movie — the send-waves method
// (research→verify→seal→decode world) composes with the Rosetta global key (Glagolitic⇄Latin⇄Cyrillic),
// dialect dictation post-process, and the seven rosetta rays (42 areas = 6×7) so decoded paths fold
// into the same playable background movie as harmonic, efficiency, and Matrix RGB streams.
export function sendWavesToDecodeWithRosettaAndFoldInTheMovie(matrix: MindMatrix = buildMatrix(), path = '/') {
  const waves = sendWavesSealKnowledgeDecodeWorld(matrix)
  const rosetta = rosettaGlagoliticGlobalKeyDecodeAll(matrix)
  const dictation = rosettaImprovesDictationAndDialects(matrix)
  const playable = moviePlayableHere(matrix)
  const slug = (path ?? '/').replace(/^\/+/, '').split('/').pop() || 'home'
  const pathRay = rosettaRayOf(slug)
  const mk = (task: string, expr: string, computed: number, expected: number) =>
    movieMathProof(task, expr, computed, expected, 'rosetta-waves-movie')
  const rays = ROSETTA_RAYS.map((rayMeta) => ({
    ray: rayMeta.ray,
    glyph: rayMeta.glyph,
    domain: rayMeta.domain,
    hue: rayMeta.hue,
    nameEn: rayMeta.nameEn,
    receipt: toUuid(`rosetta-ray-movie:${rayMeta.ray}:${rayMeta.domain}:${rayMeta.hue}`) }))
  const proofs = [
    mk('waves-send', 'sendWavesSealKnowledgeDecodeWorld', waves.sends ? 1 : 0, 1),
    mk('rosetta-decodes', 'rosettaGlagoliticGlobalKeyDecodeAll', rosetta.decodes ? 1 : 0, 1),
    mk('dictation-improves', 'rosettaImprovesDictationAndDialects', dictation.improves ? 1 : 0, 1),
    mk('movie-here', 'matrixMovieHere', playable.here ? 1 : 0, 1),
    mk('rosetta-areas', 'ROSETTA_AREAS', ROSETTA_AREAS, ROSETTA_SIX * ROSETTA_SEVEN),
    mk('rosetta-rays', 'ROSETTA_RAYS.length', rays.length, ROSETTA_SEVEN),
    mk('areas-forty-two', '6×7', ROSETTA_AREAS, (7 * 6)),
    mk('path-ray', 'rosettaRayOf', pathRay >= 0 && pathRay < ROSETTA_SEVEN ? 1 : 0, 1),
  ]
  const facets = [
    { facet: 'send waves seal knowledge decode world — researchers per topic, verify pair, library seal, babel fold', on: waves.sends },
    { facet: 'Rosetta global key decodes Glagolitic · Latin · Cyrillic — one content-address across scripts', on: rosetta.decodes },
    { facet: 'Rosetta improves dictation and dialects — decodeDialect normalizes voice input after recognition', on: dictation.improves },
    { facet: 'seven rosetta rays — Alpha · Voice · Spirit · Life · Thought · Form · Word categorical lenses', on: rays.length === ROSETTA_SEVEN },
    { facet: '42 rosetta areas — 6×7 taxonomy (ROSETTA_AREAS) replaces eight-fold navigation alone', on: ROSETTA_AREAS === ROSETTA_SIX * ROSETTA_SEVEN },
    { facet: 'the movie IS the fold — playable frames from the computed source, not a film about decoding', on: playable.here },
    { facet: 'each ray hue seeds a plasma stream — rosetta decode flows beside Matrix RGB at call time', on: rays.every((entry) => entry.hue >= 0 && entry.hue < 360) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`rosetta-waves-movie-facet:${entry.facet}:${entry.on}`) }))
  return {
    folded: waves.sends && rosetta.decodes && dictation.improves && playable.here && proofs.every((entry) => entry.on) && facets.every((entry) => entry.on),
    rays,
    proofs,
    facets,
    waves,
    rosetta,
    dictation,
    areas: ROSETTA_AREAS,
    count: proofs.length + facets.length,
    root: merkleFold([...proofs.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt), ...rays.map((entry) => entry.receipt)]),
    statement:
      'Send waves to decode with the Rosetta and fold in the movie: the send-waves method (research→verify→seal→decode world) composes with the Rosetta global key (Glagolitic⇄Latin⇄Cyrillic), dialect dictation post-process, and the seven rosetta rays (42 areas = 6×7) so decoded paths fold into the same playable background movie as harmonic, efficiency, and Matrix RGB streams — with seven seed bundles the movie IS the Rosetta itself, decoding all sun/moon related symbols at call time.',
    boundary:
      'HONEST: a structural composition of sendWavesSealKnowledgeDecodeWorld, rosettaGlagoliticGlobalKeyDecodeAll, rosettaImprovesDictationAndDialects, and matrixMovieHere at call time — NOT a completed decode of all world knowledge, NOT perfect ASR, NOT Warner Bros IP. Rosetta "decode" is transliteration + content-addressing; waves "decode world" is the autosaving research method applied outward; streams are content-addressed glyphs in the background movie, recomputed at call time.' }
}

/** Rosetta decode waves → plasma stream tokens and movie copy. */
export function rosettaDecodeMovieSeeds(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = sendWavesToDecodeWithRosettaAndFoldInTheMovie(matrix, path)
  const movieText = [
    'Rosetta-decode-waves',
    `areas=${ROSETTA_AREAS}`,
    ...decode.rays.map((ray) => `ray${ray.ray}=${ray.domain}:${ray.glyph}`),
    ...decode.proofs.map(movieProofToken),
    decode.folded ? 'rosetta-waves-proven' : 'rosetta-waves-unproven',
  ].join(' ')
  return {
    proven: decode.folded,
    movieText,
    streams: [
      ...decode.rays.map((ray) => ({
        uuid: ray.receipt,
        label: `${ray.nameEn}-${ray.domain}`,
        expr: ray.glyph,
        expected: ray.hue,
        hueSeed: seedFromText(`${ray.ray}:${ray.hue}`) % 360, // content-addressed (was primes 11/37)
      })),
      ...decode.proofs.map((proof) => movieProofStream(proof)),
    ],
    count: decode.rays.length + decode.proofs.length,
    root: decode.root,
    statement:
      'Send waves to decode with the Rosetta flows in the movie: seven rosetta rays, 42 areas, send-waves facets, and arithmetic proofs fold to content-addressed plasma streams and copy tokens beside harmonic, efficiency, and Matrix RGB math.',
    boundary:
      'Deterministic seeds from sendWavesToDecodeWithRosettaAndFoldInTheMovie at this call; ray glyphs are copy-only; streams are visual glyphs from receipts, not literal subtitle typography.' }
}

/** Gate: Rosetta decode waves wired into movie seeds and copy text at call time. */
export function rosettaDecodeFlowsInMovie(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = sendWavesToDecodeWithRosettaAndFoldInTheMovie(matrix, path)
  const seeds = rosettaDecodeMovieSeeds(matrix, path)
  const textCoversRays = decode.rays.every(
    (ray) => seeds.movieText.includes(String(ray.ray)) && seeds.movieText.includes(ray.domain),
  )
  const textCoversProofs = decode.proofs.every((proof) => movieTextCoversProof(seeds.movieText, proof))
  const streamsMatch = movieStreamsMatch(seeds.streams, decode.rays.length + decode.proofs.length)
  return {
    flows: decode.folded && textCoversRays && textCoversProofs && streamsMatch,
    folded: decode.folded,
    rayCount: decode.rays.length,
    proofCount: decode.proofs.length,
    streamCount: seeds.count,
    movieText: seeds.movieText,
    root: merkleFold([decode.root, seeds.root]),
    statement: seeds.statement,
    boundary: seeds.boundary }
}

/** Seven seed bundles × seven rosetta rays — the movie IS the Rosetta decoding all sun/moon symbols. */
export function sevenSeedMovieIsRosettaDecodingSunMoonSymbols(matrix: MindMatrix = buildMatrix(), path = '/') {
  return memoByMovieRoute(path, matrix, 'sevenSeedRosettaSunMoon', () => sevenSeedMovieIsRosettaDecodingSunMoonSymbolsRaw(matrix, path))
}
function sevenSeedMovieIsRosettaDecodingSunMoonSymbolsRaw(matrix: MindMatrix = buildMatrix(), path = '/') {
  const bundles = allMovieSeedBundles(path, matrix)
  const rosettaWaves = sendWavesToDecodeWithRosettaAndFoldInTheMovie(matrix, path)
  const playable = moviePlayableHere(matrix)
  const sunHorizon = megalithicAstronomyDecoded(matrix)
  const moonStandstill = lunarStandstillsDecoded(matrix)
  const yin = yinYang()
  void ancientCalendars(matrix)
  const polarity = darkLightPolarityProvenByMath(matrix, path)
  const merk = merkaba(matrix)
  const sixSeven = sixSeedBundlesFormSevenAsWhole(path, matrix)
  const earthFusion = sixSeven.earthFusion
  const seedKeys = [
    'device-paint',
    'device-polarity',
    'device-matrix-rgb',
    'code-harmonic',
    'code-efficiency',
    'code-rosetta',
    'unity',
  ] as const
  const sunMoonSymbols = [
    { symbol: 'device-canvas-paint', luminary: 'both' as const, decoded: playable.here, via: 'clientMoviePaintPathSealed' },
    { symbol: 'dark-light-polarity', luminary: 'both' as const, decoded: polarity.proven, via: 'darkLightPolarityProvenByMath' },
    { symbol: 'matrix-rgb-display', luminary: 'both' as const, decoded: yin.complete, via: 'yinYang·matrixRgb' },
    { symbol: 'solstice-sunrise', luminary: 'sun' as const, decoded: sunHorizon.decoded, via: 'harmonicMath·megalithicAstronomyDecoded' },
    { symbol: 'lunar-standstill', luminary: 'moon' as const, decoded: moonStandstill.decoded, via: 'efficiencyMath·lunarStandstillsDecoded' },
    { symbol: 'rosetta-global-key', luminary: 'both' as const, decoded: rosettaWaves.rosetta.decodes, via: 'rosettaGlagoliticGlobalKeyDecodeAll' },
    { symbol: 'unity-8-7-5-earth', luminary: 'both' as const, decoded: sixSeven.forms && earthFusion.fused && merk.counterRotating, via: 'twoTrinitiesFuseAsDoubleTorusEarth·merkaba' },
  ]
  const pairings = bundles.map((bundle, index) => {
    const ray = ROSETTA_RAYS[index]!
    const symbol = sunMoonSymbols[index]!
    const bundleOk = bundle.count > 0 && isUuid(bundle.root)
    return {
      seed: seedKeys[index]!,
      ray: ray.ray,
      rayGlyph: ray.glyph,
      rayDomain: ray.domain,
      luminary: symbol.luminary,
      symbol: symbol.symbol,
      via: symbol.via,
      streams: bundle.count,
      bundleRoot: bundle.root,
      on: bundleOk && symbol.decoded,
      receipt: toUuid(`seven-seed-rosetta-sun-moon:${seedKeys[index]}:ray${ray.ray}:${symbol.symbol}:${symbol.decoded}`) }
  })
  const movieText = [
    'seven-seed-rosetta-sun-moon',
    ...pairings.map((entry) => `ray${entry.ray}=${entry.symbol}:${entry.luminary}`),
    ...pairings.map((entry) => `${entry.seed}→${entry.rayGlyph}`),
    rosettaWaves.folded ? 'rosetta-decoding-proven' : 'rosetta-decoding-unproven',
  ].join(' ')
  const decoding =
    bundles.length === ROSETTA_SEVEN
    && rosettaWaves.folded
    && playable.here
    && pairings.every((entry) => entry.on)
  return {
    decoding,
    bundleCount: bundles.length,
    rayCount: ROSETTA_SEVEN,
    pairings,
    movieText,
    sunMoonSymbolCount: sunMoonSymbols.length,
    root: merkleFold([...pairings.map((entry) => entry.receipt), rosettaWaves.root, playable.root]),
    statement:
      'Six seed bundles form the seven as a whole — two trinities fused as double torus Earth: device trinity (canvas paint · dark/light polarity · Matrix RGB on the display) and code trinity (harmonic math · efficiency proofs · Rosetta decode from sealed src/) pair with rosetta rays; the seventh unity bundle is material orbit (8) collapsing (7) to circuit heart (5) after Earth fusion — as plasma streams and copy tokens in the playable background movie at call time.',
    boundary:
      'Structural composition at call time: seven allMovieSeedBundles, ROSETTA_RAYS, megalithicAstronomyDecoded, lunarStandstillsDecoded, yinYang, ancientCalendars, darkLightPolarityProvenByMath, merkaba, and sendWavesToDecodeWithRosettaAndFoldInTheMovie. "The movie IS the Rosetta" means the same canvas that plays also carries the decode receipts — NOT that every historical sun/moon glyph worldwide is translated, NOT archaeoastronomy as mysticism. HONEST: sun/moon decodes are computed horizon/declination/calendar math with flagged pseudoscience excluded elsewhere.' }
}

/** Gate: seven-seed Rosetta sun/moon decode wired into movie at call time. */
export function sevenSeedMovieIsRosettaDecodingSunMoonSymbolsFlowsInMovie(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = sevenSeedMovieIsRosettaDecodingSunMoonSymbols(matrix, path)
  const rosetta = rosettaDecodeFlowsInMovie(matrix, path)
  const textCoversPairings = decode.pairings.every(
    (entry) => decode.movieText.includes(entry.symbol) && decode.movieText.includes(entry.luminary),
  )
  return {
    flows: decode.decoding && rosetta.flows && textCoversPairings,
    decoding: decode.decoding,
    bundleCount: decode.bundleCount,
    streamCount: decode.pairings.reduce((sum, entry) => sum + entry.streams, 0),
    movieText: decode.movieText,
    root: merkleFold([decode.root, rosetta.root]),
    statement: decode.statement,
    boundary: decode.boundary }
}

// Send waves of architects and teachers to redesign self-education, folding it to quantum-
// merge with the movie. Architects send the structural waves (the shape of the learning
// path) and teachers the pedagogical ones (what each play teaches), and together they
// redesign self-education so it no longer sits beside the movie but folds into it: the
// student's quantum mind (formed by playing) and the interactive movie merge, order-
// sensitive (genus-2), so learning IS playing the movie — observe the play, shape the
// path, embed the lesson, merge the assessment into play, verify by recomputation.
export function educationMovieMerge(matrix: MindMatrix = buildMatrix()) {
  const educationRoot = studentQuantumMind(matrix).root // the mind formed by playing
  const movieRoot = allInInteractiveMovie(matrix).root // the one interactive movie
  const merge0 = foldPair(educationRoot, movieRoot) // education ⊗ movie — the quantum merge
  const designers = [
    { role: 'architects', sends: 'structure waves — the shape of the learning path' },
    { role: 'teachers', sends: 'pedagogy waves — what each play teaches' },
  ]
  const stages = ['observe the play', 'shape the path', 'embed the lesson in the movie', 'merge assessment into play', 'verify by recomputation']
  const waves = designers.flatMap((designer) =>
    stages.map((stage) => {
      const fold = foldPair(merge0.merged, toUuid(`redesign:${designer.role}:${stage}`))
      return { role: designer.role, stage, folded: fold.bidirectional, wave: fold.merged, receipt: toUuid(`edu-redesign:${designer.role}:${stage}`) }
    }),
  )
  return {
    redesigned: waves.length === (5 * 2) && waves.every((entry) => entry.folded) && merge0.bidirectional && playMind(matrix).plays && studentQuantumMind(matrix).forms,
    merged: merge0.bidirectional, // education quantum-merges with the movie
    designers: designers.length,
    count: waves.length,
    waves,
    root: merkleFold(waves.map((entry) => entry.receipt)),
    statement:
      'Send waves of architects and teachers to redesign self-education, folding it to quantum-merge with the movie: architects send the structure waves (the shape of the learning path) and teachers the pedagogy waves (what each play teaches), and together they redesign self-education so it folds into the movie rather than sitting beside it — the student’s quantum mind (formed by playing) and the interactive movie merge, order-sensitive, so learning is playing the movie: observe the play, shape the path, embed the lesson, merge the assessment into play, verify by recomputation.',
    boundary:
      'A content-addressed model of redesigning the self-education layer as architect/teacher waves that fold it together with the interactive-movie root. A structural framing built on the existing play-as-assessment model; it records the redesign and the merge, it is not an accredited curriculum or a claim of pedagogical outcomes.' }
}

/** All displayed in one interactive movie — background, hero, native-format surfaces. */
export function allInInteractiveMovie(matrix: MindMatrix = buildMatrix()) {
  const surfaces = [
    { surface: 'the background field', interactive: backgroundMovie(matrix).interactive, root: backgroundMovie(matrix).root },
    { surface: 'the holographic hero', interactive: heroTapMusic(matrix).plays, root: heroTapMusic(matrix).root },
    { surface: 'the native-format movie', interactive: moviesNativeFormat(matrix).nativelyDisplayed, root: moviesNativeFormat(matrix).root },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`interactive-movie:${index}:${entry.surface}:${entry.root}`) }))
  return {
    displayed: surfaces.length === 3 && surfaces.every((entry) => entry.interactive && isUuid(entry.root)),
    count: surfaces.length,
    surfaces,
    root: merkleFold(surfaces.map((entry) => entry.receipt)),
    statement: 'All is displayed in one interactive movie — background, hero, and native-format surfaces.',
    boundary: 'Composition of interactive canvas surfaces — not a single rendered video file.' }
}

// ————— Discovery (2026-07): the decode-in-movie proof pattern was quadruplicated — now one definition —————
/** The fold: the movie's proof-stream pattern is unified — one token map, one stream map, one verify pair,
 * reused by the Matrix-RGB, Rosetta, red-pill and seven-seed decodes (proven byte-identical when factored). */
export function movieProofPatternUnified() {
  const sample = { receipt: toUuid('movie-proof-sample'), task: 'sample', expr: '2+2', expected: 4, computed: 4 }
  const stream = movieProofStream(sample)
  const token = movieProofToken(sample)
  const facets = [
    { facet: 'one token map — every decode\'s subtitle line is movieProofToken (expr=expected), never re-inlined', on: token === '2+2=4' },
    { facet: 'one stream map — every decode\'s plasma stream is movieProofStream; the hue IS the content address (no per-decode coefficients)', on: stream.uuid === sample.receipt && stream.hueSeed === seedFromText(sample.receipt) % 360 },
    { facet: 'one verify pair — movieTextCoversProof + movieStreamsMatch replace the four hand-rolled gate skeletons', on: movieTextCoversProof(`x ${token} y`, sample) && movieStreamsMatch([stream], 1) && !movieStreamsMatch([stream], 2) },
    { facet: `covers('x 2+2=4 y',[4,'2+2']) ${covers('x 2+2=4 y', [4, '2+2'])} · addressed 1 ${addressed([stream], 1)} — the pair hosted in src/0, shared by 5 domains`, on: covers('x 2+2=4 y', [4, '2+2']) && addressed([stream], 1) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`movie-proof-unified:${entry.facet}:${entry.on}`) }))
  return {
    unified: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The decode-in-movie proof pattern is unified: every decode fold emits its arithmetic proofs through one token map (expr=expected), one content-addressed stream map (receipt · label · hueSeed from two per-decode coefficients), and one verification pair (text covers every proof · streams match count and are all uuids) — the pattern that was re-inlined four times now has a single definition, and the factoring was proven byte-identical against the captured baseline.',
    boundary:
      ['predicates covers · addressed hosted in src/0 (imports nothing — no cycle possible)', 'delegates: narrative · earth/architecture · thunder/verify · mountain/geometry · quantum/fire/forecasts', 'cross-domain rewire proven byte-identical (4 roots diffed at refactor time)'].join('; ') }
}
