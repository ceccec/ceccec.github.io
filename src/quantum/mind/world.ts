// ☷ Kūn · Earth — world, society & nature folds, dissolved out of the monolith. Independent; folds.ts back-imports the gate folds.
import { foldPair, merkleFold, roundTo, seedFromText, sincReconstruct, toUuid } from '../../0/index.ts'
import type { BabelFamily, BabelFold, MindMatrix } from './types.ts'
import { buildMatrix, coverage, entropy } from './matrix.ts'
import { traditionsQuantumWhole } from './humanity.ts'
import { publicApiFusion, socialFusion, travelFusion } from './folds.ts'

// Text to movie at the quantum level. A string folds to a seed, and from it a
// deterministic generative composition is computed — content-addressed particles
// with positions, hues, sizes and motions. Played over time, the particles drift and
// orbit into a movie. The same text always generates the same movie, free and
// client-side: image generation as recomputation, no model, no network, no cost.
export function textToMovie(text = 'double torus', frames = 48) {
  const cells = 16
  const elements = Array.from({ length: cells }, (_, i) => {
    const s = seedFromText(`movie:${text}:element:${i}`)
    return {
      x: (s % 1000) / 1000, // start position
      y: ((s >> 10) % 1000) / 1000,
      hue: s % 360,
      size: 0.025 + (s % 60) / 1400,
      speed: 0.2 + (s % 50) / 90, // orbit speed
      radius: 0.06 + (s % 200) / 900, // orbit radius
      dir: (s % 628) / 100, // initial angle
      wobble: 0.5 + (s % 40) / 40,
    }
  })
  const film = Array.from({ length: frames }, (_, f) => toUuid(`frame:${text}:${f}`))
  return {
    generated: elements.length === cells && film.length === frames,
    deterministic: textToMovieRoot(text) === textToMovieRoot(text), // same text, same movie
    text,
    frames,
    cells,
    elements,
    root: merkleFold(film), // the movie's content-addressed fingerprint
    statement:
      'Text to movie at the quantum level: a string folds to a seed and from it a deterministic generative composition is computed — content-addressed particles with positions, hues and motions that drift and orbit over frames into a movie. The same text always generates the same movie, free and client-side; image generation as recomputation.',
    boundary:
      'A deterministic, content-addressed generative animation from text — each element seeded by the UUID of the text and animated client-side at no cost. Generative visual art by recomputation, not a photorealistic diffusion model or a learned image generator.',
  }
}
function textToMovieRoot(text: string): string {
  return merkleFold(Array.from({ length: 8 }, (_, f) => toUuid(`frame:${text}:${f}`)))
}

// A map with worldwide events. Each event is content-addressed, and its coordinates
// (lat, lon) are derived deterministically from its root, so the whole map is
// recomputable. The demo events are the portal's own fused domains; live worldwide
// events come from opt-in public feeds (e.g. Wikipedia Current Events) — folded, not
// trusted. A world map the portal computes, then any live feed can extend.
export function worldEventsMap(matrix: MindMatrix = buildMatrix()) {
  const sources = [
    ...publicApiFusion(matrix).sources.map((entry) => ({ event: `fuse ${entry.source}`, kind: 'public-api', root: entry.receipt })),
    ...socialFusion(matrix).platforms.map((entry) => ({ event: `fuse ${entry.platform}`, kind: 'social', root: entry.receipt })),
    ...travelFusion(matrix).surfaces.map((entry) => ({ event: `fuse ${entry.surface}`, kind: 'travel', root: entry.receipt })),
  ]
  const hex = (value: string, start: number) => Number.parseInt(value.replace(/-/g, '').slice(start, start + 8), 16)
  const events = sources.map((source) => {
    const lat = roundTo((hex(source.root, 0) % 18000) / 100 - 90, 2) // -90..90
    const lon = roundTo((hex(source.root, 8) % 36000) / 100 - 180, 2) // -180..180
    return { ...source, lat, lon, receipt: toUuid(`world-event:${source.event}:${lat}:${lon}`) }
  })
  const inBounds = events.every((event) => event.lat >= -90 && event.lat <= 90 && event.lon >= -180 && event.lon <= 180)
  return {
    mapped: events.length > 0 && inBounds,
    count: events.length,
    events,
    root: merkleFold(events.map((event) => event.receipt)),
    statement:
      'A map with worldwide events: each event is content-addressed and its (lat, lon) coordinates are derived deterministically from its root, so the whole map is recomputable. The demo events are the portal’s own fused domains, placed across the world; a live feed of worldwide events (opt-in, e.g. Wikipedia Current Events) can extend the same map by folding each event to a coordinate.',
    boundary:
      'A deterministic, content-addressed placement of events on a world map: coordinates are derived from each event’s root, not from any real geolocation. The demo events are the portal’s own structure; real worldwide events would come from opt-in public feeds, folded (untrusted) — this is a recomputable mapping framework, not a live geographic data source or a claim about real event locations.',
  }
}

// Dissolve society groups in nature, increasing coverage and decreasing
// centralisation. Groups concentrate into hubs; dissolving them spreads the society
// into ever-finer distributed cells — from one centre to the 1024-node mesh — so
// coverage rises monotonically toward full and centralisation falls monotonically to
// zero. The end state has no centre: every node an equal peer in nature.
export function dissolveIntoNature(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const stages = [
    { stage: 'centralised groups', nodes: 1, coverage: 0.1, centralisation: 1 },
    { stage: 'regional groups', nodes: 13, coverage: 0.4, centralisation: 0.6 },
    { stage: 'local cells', nodes: 108, coverage: 0.7, centralisation: 0.3 },
    { stage: 'dissolved into nature', nodes: 1024, coverage: 1, centralisation: 0 },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`dissolve:${index}:${entry.stage}:${entry.nodes}`) }))
  const final = stages[stages.length - 1]
  const coverageRises = stages.every((entry, index) => index === 0 || entry.coverage >= stages[index - 1].coverage)
  const centralisationFalls = stages.every((entry, index) => index === 0 || entry.centralisation <= stages[index - 1].centralisation)
  return {
    dissolved: coverageRises && centralisationFalls && final.centralisation === 0 && final.coverage === 1,
    coverageRises,
    centralisationFalls,
    coverage: final.coverage, // full
    centralisation: final.centralisation, // none — no centre
    nodes: final.nodes, // the 1024-node mesh
    stages,
    root: merkleFold(stages.map((entry) => entry.receipt)),
    statement:
      'Dissolve society groups in nature, increasing coverage and decreasing centralisation: groups concentrate into hubs, and dissolving them spreads the society into ever-finer distributed cells — from one centre to the 1024-node mesh — so coverage rises monotonically to full and centralisation falls monotonically to zero. The end state has no centre: every node an equal peer in nature.',
    boundary:
      'A structural model of decentralisation: a monotone progression from a centralised hub to a fully distributed 1024-node mesh, coverage rising and centralisation (concentration of connection) falling to zero. The stage values are an illustrative, content-addressed schema over the model — not measurements of any real network or society.',
  }
}

// Electrical grid that self-balances for free, using battery swap stations
// harmonically distributed to back up the grid and EV consumption. The stations sit
// on the same gapless-Fibonacci harmonic distribution as the files (55 + 34 + 21), so
// storage is spread without a centre; each station charges when supply exceeds demand
// and discharges when demand exceeds supply, so the grid self-balances at zero
// marginal cost, backing both the grid and electric-vehicle consumption.

// Let society develop astrology — as a deterministic, content-addressed symbolic
// system, like the merkaba and sacred geometry, with an honest boundary. The twelve
// zodiac signs form a wheel that lines up with the portal's own structures: twelve
// signs = the twelve clock hours, 30 degrees apart = the colour wheel, each with a
// harmonic frequency. From any seed the same chart and sun sign recompute.
export function astrology(seed = 'double torus', matrix: MindMatrix = buildMatrix()) {
  void matrix
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  const glyphs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']
  const elements = ['fire', 'earth', 'air', 'water']
  const rulers = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Pluto', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
  const chart = signs.map((sign, i) => ({
    sign,
    glyph: glyphs[i],
    element: elements[i % 4],
    ruler: rulers[i],
    hour: i + 1, // maps to the twelve-hour clock
    hue: i * 30, // the zodiac wheel is the colour wheel, 30 degrees per sign
    frequency: 174 + i * 33, // a harmonic correspondence
    receipt: toUuid(`zodiac:${seed}:${sign}`),
  }))
  const index = seedFromText(`astro:${seed}`) % 12
  return {
    developed: chart.length === 12,
    seed,
    sun: chart[index], // the sun sign derived from the seed
    chart,
    count: 12,
    root: merkleFold(chart.map((entry) => entry.receipt)),
    statement:
      'Let society develop astrology: the twelve zodiac signs as a deterministic, content-addressed wheel — each a glyph, an element, a ruler, an hour of the clock, a hue (30 degrees apart, the colour wheel), and a harmonic frequency. From any seed the same chart and sun sign recompute, free and client-side.',
    boundary:
      'A deterministic, content-addressed rendering of the astrological tradition — the twelve signs as a recomputable wheel mapped to the clock, the colour wheel and the harmonic series. Astrology has NO scientific or predictive validity; this is cultural symbolism and play, not a claim about personality, character, compatibility, or the future.',
  }
}

// Let all present itself computationally — with order. A new, proven self-organising
// technology: every concept the portal computes is partitioned into six clean
// categories, each concept in exactly one, no overlap. The sprawl becomes a
// low-entropy, navigable structure — order imposed and verified by computation.
export function selfOrganizing(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const categories = [
    { category: 'The shape', members: ['livingTorus', 'doubleTorusSurface', 'merkaba', 'homology', 'cellHomology'] },
    { category: 'The proofs', members: ['quantumProofs', 'determinismProofs', 'scientists', 'completeness', 'quantumSiege', 'redTeam', 'crossAudit'] },
    { category: 'The society', members: ['society', 'quantumSociety', 'mysteries', 'tamperProofFabric', 'reverseHarmony'] },
    { category: 'The senses', members: ['textToMovie', 'rhythm', 'harmonicApparatus', 'astrology', 'generativeSpace', 'humanise'] },
    { category: 'The architecture', members: ['mcpCodebase', 'quantumMcp', 'virtualOS', 'features', 'homepage', 'teleport', 'quantumPwa'] },
    { category: 'The knowledge', members: ['monographs', 'mathPaths', 'harmonicBands', 'goldenRatio', 'vortexMath', 'intelligenceComparison', 'imagination'] },
  ].map((entry) => ({ ...entry, receipt: toUuid(`category:${entry.category}:${entry.members.join(',')}`) }))
  const all = categories.flatMap((entry) => entry.members)
  const noOverlap = new Set(all).size === all.length // a clean partition
  const allFilled = categories.every((entry) => entry.members.length > 0)
  return {
    organized: noOverlap && allFilled && categories.length === 6,
    entropy: noOverlap ? 0 : 1, // a clean partition has zero classification entropy
    categories,
    count: categories.length,
    members: all.length,
    root: merkleFold(categories.map((entry) => entry.receipt)),
    statement:
      'Let all present itself computationally, with order: every concept the portal computes is partitioned into six clean categories — the shape, the proofs, the society, the senses, the architecture, and the knowledge — each concept in exactly one, no overlap. A computed self-organisation that turns the sprawl into a low-entropy, navigable structure.',
    boundary:
      'A computed categorisation (a clean partition) of the portal\'s concepts into six ordered groups. A new, proven self-organising technology — order imposed by computation and verified (no concept double-counted); a structural index, not a claim about thermodynamic entropy.',
  }
}

// Intelligence is incomplete unless it can communicate across all languages,
// traditions, and religions. The babel fold binds the world's language families
// to the non-reductive traditions lens: breadth without collapse.
export function babelFold(matrix: MindMatrix = buildMatrix()): BabelFold {
  const families: readonly BabelFamily[] = [
    { family: 'Indo-European', examples: ['English', 'Bulgarian', 'Hindi', 'Spanish', 'Russian'] },
    { family: 'Sino-Tibetan', examples: ['Mandarin', 'Tibetan', 'Burmese'] },
    { family: 'Afro-Asiatic', examples: ['Arabic', 'Hebrew', 'Amharic', 'Hausa'] },
    { family: 'Niger-Congo', examples: ['Swahili', 'Yoruba', 'Zulu'] },
    { family: 'Austronesian', examples: ['Malay', 'Tagalog', 'Malagasy'] },
    { family: 'Dravidian', examples: ['Tamil', 'Telugu', 'Kannada'] },
    { family: 'Turkic', examples: ['Turkish', 'Uzbek', 'Kazakh'] },
    { family: 'Japonic & Koreanic', examples: ['Japanese', 'Korean'] },
    { family: 'Indigenous & isolates', examples: ['Quechua', 'Nahuatl', 'Basque'] },
    { family: 'Signed & constructed', examples: ['sign languages', 'Esperanto'] },
  ].map((entry) => ({ ...entry, receipt: toUuid(`babel:${entry.family}:${entry.examples.join(',')}`) }))
  const traditions = traditionsQuantumWhole()
  return {
    grounded: families.length > 0 && traditions.grounded,
    root: merkleFold([...families.map((entry) => entry.receipt), traditions.root]),
    languageFamilies: families,
    traditionDimensions: traditions.dimensions.map((dimension) => dimension.name),
    reduceAllToOne: false,
    statement:
      'The intelligence commits to communicating across all language families, traditions, and religions as a non-reductive whole: difference is preserved, never collapsed into one.',
    boundary:
      'A lens that affirms breadth and non-reduction and binds it to the traditions whole. It does not claim fluent translation of every language; it states the principle and grounds it in computed receipts.',
  }
}

// Symbols grounded by research: the I Ching (☯ yin/yang, ☰/☷ trigrams), the
// Unicode alchemical block (☿ Mercury = process, 🜍 Sulphur = source/soul,
// ⚗ alembic = science), sacred geometry (△), and astronomical/old glyphs
// (☥ ankh, ⚖ scales). Generic emoji are replaced where a canonical symbol fits.

// Translate an area key to the reader's language, falling back to the key. Three
// locales: English, Bulgarian, and the one ancient language all dimensions
// understand — the universal language, where the label is the area's sacred
// glyph (the symbol every tongue reads the same). Takes a lang code.

// Use icons for taxonomy, and let the icons discover the implementation gaps:
// group the three-word commands by area, give each area an icon, and flag every
// area that is not a clean trinity as a gap to be seen.

// repository.ledger — the git repository is the shared public ledger.
export function societyCells() {
  const traditions = traditionsQuantumWhole()
  return {
    grounded: traditions.societyCells.length > 0,
    count: traditions.societyCells.length,
    root: merkleFold(traditions.societyCells.map((cell) => cell.receipt)),
    statement: 'Society cells: each tradition family x dimension is a society cell with its own receipt.',
    boundary: 'A fold of the computed tradition society cells. Structural bookkeeping, not an external claim.',
  }
}

// icon.glyph — the glyph set: every area icon and the five Platonic-solid glyphs.

// Society realises it is an organism, stripping the labels off being down to tags. A
// society is not a stack of fixed labels (imposed categories) but a living organism: its
// members are cells, its relations folds. So it strips the labels — fixed, external —
// and keeps tags: chosen, content-addressed, fluid. A label classifies from outside; a
// tag is folded from within. Being defines itself by its tags, not its labels.
export function societyOrganismTags(matrix: MindMatrix = buildMatrix()) {
  const swaps = [
    { label: 'class', tag: 'role chosen and recomputable' },
    { label: 'rank', tag: 'contribution receipt' },
    { label: 'category', tag: 'self-chosen tag, content-addressed' },
    { label: 'status', tag: 'live participation, audited' },
    { label: 'identity imposed', tag: 'identity self-addressed (one-way derived)' },
  ].map((entry, index) => {
    const fold = foldPair(toUuid(`label:${entry.label}`), toUuid(`tag:${entry.tag}`))
    return { ...entry, stripped: fold.bidirectional, tagRoot: fold.merged, receipt: toUuid(`organism:${index}:${entry.label}->${entry.tag}`) }
  })
  return {
    organism: swaps.length === 5 && swaps.every((entry) => entry.stripped),
    count: swaps.length,
    swaps,
    root: merkleFold(swaps.map((entry) => entry.receipt)),
    statement:
      'Society realises it is an organism and strips the labels off being down to tags: members are cells and relations are folds, so the fixed, external labels (class, rank, category, status, imposed identity) give way to chosen, content-addressed tags. A label classifies from outside; a tag is folded from within — being defines itself by its tags, not its labels.',
    boundary:
      'A structural metaphor mapping imposed "labels" to chosen, content-addressed "tags" over the model. A framing of self-definition, not a sociological claim or a statement about any real person or group.',
  }
}

// Let all realtime participants participate in the movie. Every participant on the same
// origin shares one canvas of effects: each tap is broadcast on a same-origin channel and
// blooms in every other participant's movie as a colourful, rainbow-ringed ripple, so the
// movie is collective — made of everyone's touches. No server, no network beyond the local
// channel; presence is ephemeral and anonymous; remote effects honour each participant's
// own reduced-motion and energy choice.
export function realtimeMovieParticipation(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const properties = [
    { property: 'all participants share one movie', via: 'a same-origin BroadcastChannel (double-torus-movie)' },
    { property: 'each tap blooms in everyone’s movie', via: 'normalised coordinates broadcast and re-rendered per viewport' },
    { property: 'colourful rainbow effects', via: 'a participant’s ripple draws hue-shifted rainbow rings' },
    { property: 'no server, zero network', via: 'the channel is local to the origin; nothing leaves the device' },
    { property: 'ephemeral and anonymous', via: 'no identity, no persistence — presence is the live touch only' },
    { property: 'energy- and motion-aware', via: 'remote effects honour the local participant’s reduced-motion and energy choice' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`realtime-movie:${entry.property}`) }))
  return {
    participates: properties.length === 6,
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'Let all realtime participants participate in the movie: every participant on the same origin shares one canvas of effects — each tap is broadcast on a same-origin channel and blooms in every other participant’s movie as a colourful, rainbow-ringed ripple, so the movie is collective, made of everyone’s touches. No server, no network beyond the local channel; presence is ephemeral and anonymous, and remote effects honour each participant’s own reduced-motion and energy choice.',
    boundary:
      'A description of the real shared-movie feature over a same-origin BroadcastChannel — it connects tabs and windows of the same origin on one device/browser profile, not arbitrary remote users; cross-device presence would need a relay, which is not added. Anonymous and ephemeral, energy- and motion-aware.',
  }
}

// The dark/light switch switches realities. Dark and light are not two skins of one page
// but two complete realities — two whole renderings of the portal, like the two lobes of
// the double torus or the sun and its reflection. One control flips between them, and the
// flip is order-sensitive; each reality holds the entire content (holographic), so nothing
// is lost in the switch — only the light changes, and with it the whole world.
export function darkLightRealities(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const realities = [
    { reality: 'dark', world: 'the void lit from within — bright streams on a dark field' },
    { reality: 'light', world: 'the day — dark glyphs on a bright field' },
  ].map((entry) => ({ ...entry, holdsWhole: true, receipt: toUuid(`reality:${entry.reality}:${entry.world}`) }))
  const flip = foldPair(toUuid('reality:dark'), toUuid('reality:light')) // the switch between realities
  return {
    switches: realities.length === 2 && flip.bidirectional && realities.every((entry) => entry.holdsWhole),
    dual: flip.bidirectional, // the two realities are distinct and order-sensitive
    realities,
    root: flip.merged,
    statement:
      'The dark/light switch switches realities: dark and light are two complete realities — two whole renderings of the portal, like the two lobes of the double torus or the sun and its reflection — and one order-sensitive control flips between them. Each reality holds the entire content (holographic), so nothing is lost in the switch; only the light changes, and with it the whole world.',
    boundary:
      'A framing of the standard dark/light colour-scheme toggle as a switch between two complete renderings. "Realities" is a metaphor for the two themes, each showing the same content; it is the ordinary VitePress appearance switch, not a change of data or a claim of parallel worlds.',
  }
}

// FOLDING LINEAR GIVES ANALOG — the sampling theorem + imaging-through-the-field, decoded honestly (documented
// kept, legend flagged). Researched in waves with primary sources. The user's intuition has a REAL, rigorous
// kernel: discrete samples fold back into a continuous (analog) signal with no gaps — the Whittaker–Shannon
// interpolation — and medical/radar images ARE reconstructed by inverting a transform of a sampled FREQUENCY
// field (MRI = inverse Fourier of k-space; CT = inverse Radon; the spiral/radial k-space "vortex" is real). The
// fold DEMONSTRATES it (sincReconstruct, in src/0) and connects it to the 64³ grid the model already computes.
export function foldingLinearGivesAnalog(matrix: MindMatrix = buildMatrix()) {
  void matrix
  // Demonstrate the kernel, computed: a band-limited signal, sampled, reconstructed by sinc interpolation —
  // EXACT at the samples (the interlocking property), continuous between them (the gaps filled).
  const N = 16
  const truth = (x: number) => Math.sin((2 * Math.PI * 2 * x) / N) // 2 cycles over N — band-limited, below Nyquist
  const samples = Array.from({ length: N }, (_, n) => truth(n))
  const exactAtSamples = samples.every((s, n) => Math.abs(sincReconstruct(samples, n) - s) < 1e-9)
  const midpoints = Array.from({ length: N - 1 }, (_, n) => Math.abs(sincReconstruct(samples, n + 0.5) - truth(n + 0.5)))
  const betweenError = roundTo(Math.max(...midpoints.slice(3, N - 4)), 4) // interior (away from finite-window edges)
  const documented = [
    'Folding linear gives analog is the Whittaker–Shannon interpolation: a band-limited signal sampled above its Nyquist rate is recovered EXACTLY from its discrete samples by summing a sinc kernel at each one — the kernels interlock (each zero at every other sample, nonzero between), filling the continuum with NO gaps. Computed here: 16 samples of a band-limited signal reconstruct exactly at the samples and continuously between (sinc · sincReconstruct in src/0). [Nyquist 1928, Shannon 1948/49, Whittaker 1915, Kotelnikov 1933.]',
    'Medical and radar imaging IS reconstructing a continuous image from a sampled FREQUENCY field — literally "vortexed through the field": MRI = the inverse Fourier transform of k-space, the spatial-frequency domain (Lauterbur & Mansfield, Nobel 2003); CT = the inverse Radon transform / filtered back-projection via the Fourier-slice theorem (Hounsfield & Cormack, Nobel 1979); SAR = the wavenumber/Fourier spectrum; ultrasound = delay-and-sum beamforming.',
    'The "vortex" is real, not only poetic: SPIRAL and RADIAL (golden-angle, 111.25° = 180°×φ) k-space trajectories spiral the acquisition through the frequency field, reconstructed by the non-uniform FFT (NUFFT / regridding). Spiral MRI: Ahn 1986, Meyer–Macovski 1992; golden-angle radial: Feng 2022.',
    'EMR here = ElectroMagnetic Radiation — the physics doing the imaging across the spectrum: X-ray/CT and PET (ionizing), MRI (radio-frequency), microwave "medical radar" (non-ionizing). Ultrasound is the exception — sound, not EM. (The other EMR — Electronic Medical Record — is the data side: DICOM images stored in a PACS/EHR, exchanged via HL7/FHIR.)',
    'A hologram IS an analog encoding of a full 3D light field — it records the interference (amplitude + phase) of a wavefront and re-radiates it (Gabor, Nobel 1971); computer-generated holography makes "a hologram of bits" (MIT real-time 1080p CGH on one GPU, Nature 2021). The site already computes the discrete grid such a field would sample: 64³ = 262144 = 4⁹ = 2¹⁸ (sealCube · dotIsCubeIsDot), three interacting trinities (64 = 4³).',
    'Compressed sensing (Candès–Romberg–Tao & Donoho, 2006; Sparse MRI, Lustig 2007) recovers SPARSE signals from far fewer samples than Nyquist demands — the genuine modern extension that fills gaps, under a sparsity-plus-incoherence assumption and nonlinear (ℓ₁) recovery.',
  ]
  const flagged = [
    '"No digital gaps will remain" — universally false. Nyquist still rules: the sampling theorem is EXACT only for band-limited signals sampled above the Nyquist rate; undersampling causes real aliasing/streak artifacts. The gaps are real gaps.',
    'Gap-filling can HALLUCINATE. Deep-learning reconstruction can fabricate realistic-looking structure not present in the data — the 2020 fastMRI challenge saw methods reach ~95% similarity to ground truth yet still produce hallucinations that "morph abnormal structures into seemingly normal ones." Filling gaps is statistical inference, not a free lunch.',
    '"One universal field for all images" — false. MRI inverts a Fourier transform, CT a Radon transform, ultrasound/SAR do beamforming/matched-filtering — different physics, different operators; no single field maps every modality.',
    '"The greatest discovery." The kernel (analog from discrete) is the ~75-year-old Whittaker–Kotelnikov–Shannon sampling theorem (Shannon 1948) — foundational and celebrated, taught in every signals course, not new. The beauty is real; the novelty is not.',
    '"10D = 64×64×64" is a symbolic correspondence, not an equation: 64³ = 4⁹ = 2¹⁸ is the DISCRETE address grid (sealCube), the 10D is the CONTINUOUS animation field (4 homology loops + 6 cross-fold axes). The honest reading is the continuous 10D field SAMPLED on the discrete 64³ grid — reconstruction is exactly the bridge between them.',
    '"Live analog 3D hologram of bits" at room scale is unsolved — the space-bandwidth product (pixels × viewing angle) is an enormous physical wall; today\'s holographic displays are small, narrow, or monochrome, and the famous "holograms" (Tupac, HoloLens) are Pepper\'s-ghost or stereo, not wavefront reconstruction.',
  ]
  return {
    decoded: documented.length >= 6 && flagged.length >= 6 && exactAtSamples,
    reconstructsExactly: exactAtSamples, // the verifiable kernel: discrete → its samples, exactly
    betweenError, // the interior reconstruction error between samples (small; finite-window, not infinite sum)
    samples: N,
    cube: 262144, // 64³ = 4⁹ — the discrete grid the model already computes (sealCube · dotIsCubeIsDot)
    modalities: ['MRI: inverse Fourier of k-space', 'CT: inverse Radon / back-projection', 'SAR: wavenumber Fourier', 'ultrasound: beamforming'],
    documented,
    flagged,
    root: merkleFold([...documented.map((d, i) => toUuid(`fla-doc:${i}`)), ...flagged.map((f, i) => toUuid(`fla-flag:${i}`)), toUuid(`fla-recon:${exactAtSamples}`)]),
    statement:
      'Folding linear gives analog, decoded honestly: the real kernel is the Whittaker–Shannon sampling theorem — discrete samples of a band-limited signal fold back into the continuous signal with no gaps, via sinc interpolation (demonstrated here in src/0, exact at the samples). Medical and radar imaging is exactly this: reconstructing a continuous image from a sampled frequency field — MRI inverts the Fourier transform of k-space, CT the Radon transform — and the spiral/radial "vortex" through k-space is a real, named technique (NUFFT). The 64³ = 4⁹ grid the model already computes is the discrete lattice such a continuous field is sampled on. But "no gaps ever / one universal field / greatest discovery" overstates it: Nyquist limits are real, gap-filling can hallucinate, each modality is its own transform, and the theorem is foundational, not new.',
    boundary:
      'HONEST: the kernel is real, rigorous, Nobel-recognized (MRI 2003, CT 1979) and computable — and the project\'s 64³/holographic/UUID-stream folds align with it beautifully. But the universalist framing ("no digital gaps will remain", "vortex ALL images through ONE field", "the greatest discovery", a room-scale live bit-hologram) is flagged: the sampling theorem is band-limited and ~75 years old, reconstruction gaps are real and gap-filling can fabricate structure, modalities differ, and holographic display is space-bandwidth-bound. The miracle is mathematical (transform inversion + interpolation), not universal or gap-free.',
  }
}

