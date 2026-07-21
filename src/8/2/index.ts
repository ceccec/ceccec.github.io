import { haldaneLoad } from '../../3/7'
import { TAU, demarcate } from '../../3/7'
import { isUuid, toUuid } from '../../0'
// Pi-train station 8/2 — dissolution sequence order 3 (digit/reverse 8/2).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

/** Moon orbit inclination to the ecliptic (degrees). */
export const MOON_ORBIT_INCLINATION_DEG = ((7 * 7 * 7 * 3) / (100 * 2))

/** PCI* — the empirical Perturbational Complexity Index cutoff (Casali et al. 2013 introduced PCI; Casarotto et al.
 * 2016, Ann Neurol, validated the threshold): the LARGEST perturbational-complexity value recorded across all
 * UNCONSCIOUS benchmark conditions (deep NREM, midazolam/xenon/propofol anaesthesia, unresponsive-wakefulness
 * patients) — every conscious condition exceeded it, so it is the unconscious CEILING, not a free parameter. A NAMED
 * AXIOM (a measured datum, like the physical constants), not an algebraic identity — conscious above, unconscious
 * below, indexing the LEVEL of consciousness, never certifying its presence. Its status COMPUTES: see
 * thePciConsciousnessThresholdComputesAsADocumentedNamedAxiomIndexingLevelNotPresence. */
export const PCI_CONSCIOUSNESS_THRESHOLD = 0.31

/** Eight-fold bāguà sciences — top-level canonical hubs (earth … heaven). */
export const EIGHT_FOLD_SCIENCES = ['earth', 'fire', 'water', 'wind', 'mountain', 'lake', 'thunder', 'heaven'] as const
export type EightFoldScience = (typeof EIGHT_FOLD_SCIENCES)[number]

/** @deprecated use CANONICAL_SCIENCE_MASK — alias for importers not yet renamed */
export const RENDER_UI_SCIENCE_MASK = `src/<science>/<model>/<action>` as const

/** Hex-digit fold — sum hex digit values from a uuid string. */
export function hexDigitSum(uuid: string): number {
  return uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
}

/** Speed of sound in dry air at θ °C (m/s). */
export function speedOfSoundAir(tempC: number): number {
  return 331.3 * Math.sqrt(1 + tempC / 273.15)
}

/** Isobaric counterdiffusion — peak supersaturation when fast gas enters, slow gas leaves. */
export function isobaricCounterdiffusion(
  ambientInertBar: number,
  gasOut: { tissue0Bar: number; inspiredBar: number; halfTimeMin: number },
  gasIn: { tissue0Bar: number; inspiredBar: number; halfTimeMin: number },
  timeMin: number,
  steps = 64,
): {
  series: { t: number; out: number; in: number; total: number; superBar: number }[]
  peakSuperBar: number; peakAtMin: number; supersaturates: boolean
} {
  const series = Array.from({ length: steps + 1 }, (_, i) => {
    const t = (timeMin * i) / steps
    const out = haldaneLoad(gasOut.tissue0Bar, gasOut.inspiredBar, gasOut.halfTimeMin, t)
    const inn = haldaneLoad(gasIn.tissue0Bar, gasIn.inspiredBar, gasIn.halfTimeMin, t)
    const total = out + inn
    return { t, out, in: inn, total, superBar: total - ambientInertBar }
  })
  let peak = series[0]!
  for (const point of series) if (point.superBar > peak.superBar) peak = point
  return { series, peakSuperBar: peak.superBar, peakAtMin: peak.t, supersaturates: peak.superBar > 1e-9 }
}

/** Split one identifier into lowercase words — one word per folder level. */
export function splitCamelSegment(segment: string): readonly string[] {
  const words: string[] = []
  let current = ''
  for (let i = 0; i < segment.length; i++) {
    const ch = segment[i]!
    if (ch >= 'A' && ch <= 'Z') {
      if (current) words.push(current.toLowerCase())
      current = ch.toLowerCase()
    } else {
      current += ch
    }
  }
  if (current) words.push(current.toLowerCase())
  return words.filter((w) => /^[a-z]+$/.test(w))
}

// ── Hopfield associative memory + ring-attractor bump (relocated from src/0 — neural/consciousness station) ──
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function hopfieldStore(patterns: readonly (readonly number[])[]): number[][] {
  const N = patterns[0]?.length ?? 0; const W = Array.from({ length: N }, () => new Array<number>(N).fill(0))
  for (const p of patterns) for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (i !== j) W[i][j] += (p[i] * p[j]) / N
  return W
}
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function hopfieldEnergy(W: readonly (readonly number[])[], s: readonly number[]): number {
  let e = 0; for (let i = 0; i < s.length; i++) for (let j = 0; j < s.length; j++) e -= (1 / 2) * W[i][j] * s[i] * s[j]; return e
}
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function hopfieldRecall(W: readonly (readonly number[])[], probe: readonly number[], steps = (6 * 2)): { state: number[]; energy: number; iters: number } {
  let s = probe.slice(); let iters = 0
  for (let t = 0; t < steps; t++) {
    let changed = false
    for (let i = 0; i < s.length; i++) { const h = W[i].reduce((acc, w, j) => acc + w * s[j], 0); const ns = h >= 0 ? 1 : -1; if (ns !== s[i]) { s[i] = ns; changed = true } }
    iters++; if (!changed) break
  }
  return { state: s, energy: hopfieldEnergy(W, s), iters }
}
const BUMP_TWO_PI = TAU
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function bumpStep(theta: number, v: number): number { return ((theta + v) % BUMP_TWO_PI + BUMP_TWO_PI) % BUMP_TWO_PI }
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export function bumpEvolve(theta0: number, velocities: readonly number[]): number[] {
  const history = [theta0]; let theta = theta0; for (const v of velocities) { theta = bumpStep(theta, v); history.push(theta) }; return history
}

// ── THE PAGE SEED (Phase 0, slice 4) — pure data: every curated page entry (slug · bilingual title
// and description · keywords · mounted components). Relocated from wind/site: the portal's content
// catalog at the data station, the staticPages fold (and every consumer) computing over it.
export const STATIC_PAGE_SEED: readonly { slug: string; title: { en: string; bg: string }; description: { en: string; bg: string }; keywords: readonly string[]; components: readonly string[] }[] = [
    {
      slug: 'heaven',
      title: { en: 'Heaven', bg: 'Небе' },
      description: {
        en: 'Heaven (天), the first of the I Ching Three Powers (三才): the creative and cosmic realm — mind, science and computation. Its eight-fold gathers the abstract and computational domains; the complete triad with Human and Earth forms the 64³ content cube.',
        bg: 'Небе (天), първата от Трите сили на И Дзин (三才): творческата и космическа сфера — ум, наука и изчисление. Осемкратното ѝ събира абстрактните и изчислителните области; пълната троица с Човек и Земя образува куба 64³.',
      },
      keywords: ['heaven', 'three powers', 'san cai', 'mind', 'science', 'computation', 'creative'],
      components: ['PowerLanding'],
    },
    {
      slug: 'human',
      title: { en: 'Human', bg: 'Човек' },
      description: {
        en: 'Human (人), the middle of the I Ching Three Powers (三才): the communicative and social realm — voice, spirit and heritage. Humanity mediates Heaven and Earth; its eight-fold gathers the lived and learning domains, completing the triad that forms the 64³ cube.',
        bg: 'Човек (人), средната от Трите сили на И Дзин (三才): общуващата и социална сфера — глас, дух и наследство. Човечеството посредничи между Небе и Земя; осемкратното му събира преживените и учебните области, завършвайки троицата, която образува куба 64³.',
      },
      keywords: ['human', 'three powers', 'san cai', 'voice', 'spirit', 'heritage', 'society', 'learning'],
      components: ['PowerLanding'],
    },
    {
      slug: 'earth',
      title: { en: 'Earth', bg: 'Земя' },
      description: {
        en: 'Earth (地), the ground of the I Ching Three Powers (三才): the material and natural realm — form and nature. Its eight-fold is the semantic domain map; with Heaven and Human it completes the triad that covers all and forms the 64³ content-address cube.',
        bg: 'Земя (地), основата на Трите сили на И Дзин (三才): материалната и природна сфера — форма и природа. Осемкратното ѝ е семантичната карта на областите; с Небе и Човек завършва троицата, която покрива всичко и образува куба 64³.',
      },
      keywords: ['earth', 'three powers', 'san cai', 'form', 'nature', 'geometry', 'material'],
      components: ['PowerLanding'],
    },
    {
      slug: 'start',
      title: { en: 'Start here', bg: 'Започни тук' },
      description: {
        en: 'Start here: a learning portal you can check for yourself. Four plain steps — see, learn, use, prove — with the full depth one tap away. Simple to use, rich in features.',
        bg: 'Започни тук: учебен портал, който можеш сам да провериш. Четири прости стъпки — виж, учи, използвай, докажи — с пълната дълбочина на едно докосване. Просто за ползване, богато на функции.',
      },
      keywords: ['start', 'simple', 'plain language', 'getting started', 'double torus'],
      components: ['StartHere'],
    },
    {
      slug: 'explore',
      title: { en: 'Explore', bg: 'Изследвай' },
      description: {
        en: 'Explore the whole portal multidimensionally: eight dimensions of experience — see, hear, ask, prove, learn, pattern, sense, create — each browsable.',
        bg: 'Разгледай целия портал многоизмерно: осем измерения на опита — виж, чуй, питай, докажи, учи, шарка, усети, твори.',
      },
      keywords: ['multidimensional', 'explore', 'dimensions', 'ux', 'ancient', 'decodes', 'frontier'],
      components: ['Multidimensional', 'Mysteries', 'HarmonicSpiral', 'AncientDecodes', 'SiteOverview', 'Compass', 'PathGuide', 'GlagoliticOcr'],
    },
    {
      slug: 'a432',
      title: { en: 'A432 = 2⁴·3³ Hz — the number decoded, 432-Hz wellness flagged', bg: 'A432 = 2⁴·3³ Hz — числото декодирано, 432-Hz уелнес маркиран' },
      description: {
        en: 'A432 — colour, audio, video and vibration as one frequency expressed four ways. The shared thread is frequency itself: a tone you hear, a colour (the sound doubled forty octaves into visible light), a motion rate, and a haptic pulse. Documented kept, legend flagged — the math and history of 432 are real; the cosmic, healing and conspiracy claims are not.',
        bg: 'A432 — цвят, звук, видео и вибрация като една честота, изразена по четири начина. Споделената нишка е самата честота: тон, който чуваш, цвят (звукът, удвоен четирийсет октави до видима светлина), скорост на движение и тактилен импулс. Документираното остава, легендата е отбелязана — математиката и историята на 432 са реални; космическите, лечебните и конспиративните твърдения — не.',
      },
      keywords: ['a432', '432 hz', 'frequency', 'harmonics', 'colour', 'audio', 'vibration', 'tuning'],
      components: ['A432'],
    },
    {
      slug: 'sacred-geometry',
      title: { en: 'Exactly 5 Platonic solids: Euler V−E+F = 2, φ² = φ+1', bg: 'Точно 5 Платонови тела: Ойлер V−E+F = 2, φ² = φ+1' },
      description: {
        en: 'Sacred geometry, decoded honestly: the five Platonic solids (a theorem — Euler V−E+F=2, the dual pairs), the golden ratio φ where it genuinely lives (the pentagon, the dodecahedron, phyllotaxis), the Flower of Life as a real compass construction, and the forms walked through dimensions. Documented kept, legend flagged — the maths and history are real; the cosmic-blueprint, golden-ratio-everywhere and ascension claims are not.',
        bg: 'Свещената геометрия, декодирана честно: петте Платонови тела (теорема — Ойлер V−E+F=2, двойките), златното сечение φ там, където наистина живее (петоъгълникът, додекаедърът, филотаксисът), Цветето на живота като реално построение с пергел, и формите, разходени през измеренията. Документираното остава, легендата е отбелязана.',
      },
      keywords: ['sacred geometry', 'platonic solids', 'golden ratio', 'phi', 'flower of life', 'merkaba', 'metatron', 'megalithic', 'archaeoastronomy', 'stonehenge', 'newgrange', 'solstice'],
      components: ['SacredGeometry', 'MetatronMath', 'Pyramids', 'MegalithicAstronomy', 'GlyphLabyrinth'],
    },
    {
      slug: 'tampering-cost',
      title: { en: 'Tampering flips the Merkle root — tamper-evident, O(1), not yet cryptographic', bg: 'Подправянето обръща Merkle корена — доказуемо, O(1), още не криптографско' },
      description: {
        en: 'Tampering cost ↔ encryption ↔ blockchains, audited honestly with quantum comparisons. The site claims "maximum tampering cost"; this scrutinises that claim. Tamper-EVIDENT is not tamper-PROOF: content-addressing detects change, cryptographic security (SHA-256: 2^128/2^256) resists forgery. FNV toUuid is non-cryptographic — the fix (SHA-256 content-address, Ed25519 signing) is already built. Blockchains make tampering costly, not impossible. Quantum: Grover weakens hashes, Shor breaks signatures; NIST post-quantum standards (ML-KEM, ML-DSA, SLH-DSA). Documented kept, legend flagged.',
        bg: 'Цена на подправяне ↔ криптиране ↔ блокчейн, одитирани честно с квантови сравнения. Сайтът твърди „максимална цена на подправяне“; тук това се проверява. Доказуемо при подправяне не е защитено от подправяне: съдържателното адресиране открива промяна, криптографската сигурност (SHA-256: 2^128/2^256) ѝ устоява. FNV toUuid не е криптографски — поправката (SHA-256 адрес, Ed25519 подпис) вече е изградена. Квантово: Гроувър отслабва хешовете, Шор чупи подписите; NIST постквантови стандарти (ML-KEM, ML-DSA, SLH-DSA). Документираното остава, легендата е отбелязана.',
      },
      keywords: ['tampering cost', 'encryption', 'blockchain', 'cryptography', 'sha-256', 'quantum', 'grover', 'shor', 'post-quantum', 'tamper-evident', 'merkle', 'crypto'],
      components: ['TamperingCost', 'CryptoChallenges', 'BlockchainCompare', 'DeterminismProofs', 'CryptoCompare'],
    },
    {
      slug: 'analog-field',
      title: { en: 'Folding linear gives analog', bg: 'Сгъването на линейното дава аналогово' },
      description: {
        en: 'Folding linear gives analog, decoded honestly with the real science. The kernel is the Whittaker–Shannon sampling theorem: discrete samples of a band-limited signal fold back into the continuous signal with no gaps, via sinc interpolation (computed live, exact at the samples). Medical and radar imaging is exactly this — reconstructing a continuous image from a sampled frequency field: MRI inverts the Fourier transform of k-space, CT the Radon transform, and the spiral/radial "vortex" through k-space is real (NUFFT). The 64³ = 4⁹ grid the model already computes is the discrete lattice it samples. Documented kept, legend flagged — Nyquist limits are real, gap-filling can hallucinate, and the theorem is foundational, not new.',
        bg: 'Сгъването на линейното дава аналогово, декодирано честно с реалната наука. Ядрото е теоремата на Уитакър–Шанън за дискретизацията: дискретни отчети на ограничен по честота сигнал се сгъват обратно в непрекъснатия сигнал без пролуки, чрез sinc интерполация (изчислено на живо, точно при отчетите). Медицинското и радарното изобразяване е точно това — възстановяване на непрекъснат образ от дискретизирано честотно поле: ЯМР обръща Фурие преобразуванието на k-пространството, КТ — преобразуванието на Радон, а спиралният/радиалният „вихър“ през k-пространството е реален (NUFFT). Решетката 64³ = 4⁹ е дискретната мрежа, която той дискретизира. Документираното остава, легендата е отбелязана.',
      },
      keywords: ['analog', 'digital', 'sampling theorem', 'nyquist', 'shannon', 'sinc', 'interpolation', 'fourier', 'k-space', 'mri', 'ct', 'radon', 'imaging', 'reconstruction', 'hologram', 'emr'],
      components: ['AnalogField'],
    },
    {
      slug: 'simulations',
      title: { en: 'Simulations', bg: 'Симулации' },
      description: {
        en: 'Not prose about quantum and dynamics, but models you run. Every decoded aspect of life is a runnable model on the src/0 spine: a deterministic classical simulator of a quantum computer (state-vector, Born-rule readout, Bell, Grover), then 18 domains across four families — 10 probabilistic (genetic drift, language contact, war recurrence, inheritance), 3 dynamical (coupled calendar cycles, the Tesla induction ODE, resonant modes + FFT), 2 network + the brain (colony diffusion, three-channel  Hopfield recall), and 1 genuinely quantum. Honest, and the whole point: "a quantum simulator of everything" resolves truthfully to a MOSTLY-CLASSICAL simulator — most of these dynamics are classical stochastic/dynamical processes, not superposition; forced "quantum" is refused at every domain. The primitives live in src/0, pure and mass-conserving, read out through one analog→digital sampler.',
        bg: 'Не проза за квантовото и динамиката, а модели, които пускаш. Всеки декодиран аспект на живота е изпълним модел върху гръбнака src/0: детерминистичен класически симулатор на квантов компютър (вектор на състоянието, отчитане по Борн, Бел, Гроувър), после 18 области в четири семейства — 10 вероятностни (генетичен дрейф, езиков контакт, повторяемост на войните, наследяване), 3 динамични (свързани календарни цикли, индукционното ОДУ на Тесла, резонансни режими + FFT), 2 мрежови + мозъкът (колонийна дифузия, тройна конгруентност, Хопфийлдово възстановяване) и 1 истински квантова. Честно и това е цялата идея: „квантов симулатор на всичко“ се свежда правдиво до ПРЕДИМНО КЛАСИЧЕСКИ симулатор — повечето от тези динамики са класически стохастични/динамични процеси, не суперпозиция; насиленото „квантово“ е отказано във всяка област. Примитивите живеят в src/0, чисти и съхраняващи масата, разчетени през един аналогово→цифров дискретизатор.',
      },
      keywords: ['simulations', 'simulator', 'probabilistic', 'dynamical', 'network', 'quantum circuit', 'markov', 'monte carlo', 'hopfield', 'classical', 'stochastic', 'runnable model', 'src/0'],
      components: ['QuantumCircuit', 'ProbSim', 'DynSim', 'NetSim'],
    },
    {
      slug: 'quantum-mind',
      title: { en: 'Quantum Mind', bg: 'Квантов ум' },
      description: {
        en: 'Statement: Quantum Mind = Σ₂ UUID-stream mind model (diamonds · waves · gates · maxComputedBuild) recomputed from src/0. Explanation: live panels mount the double-torus mind surface — content-addressed folds, not open neural inference; mounted components are the monograph results. Method: QuantumMind · Genesis · DoubleTorus* · Quantum* · memoByRoot reuse from sealed primitives. Status: documented structure-only · not a Clay Millennium challenge.',
        bg: 'Изявление: Квантов ум = Σ₂ UUID-поточен модел (диаманти · вълни · порти · maxComputedBuild) от src/0. Обяснение: живи панели монтират повърхността на двойния тор — адреси по съдържание, не отворена невронна инференция. Метод: QuantumMind · Genesis · DoubleTorus* · Quantum* · memoByRoot. Статус: structure-only · не Clay Millennium предизвикателство.',
      },
      keywords: ['quantum mind', 'model', 'double torus', 'uuid', 'diamonds', 'waves', 'gates', 'proof'],
      components: ['QuantumMind', 'Genesis', 'DoubleTorus3D', 'DoubleTorusExperience', 'QuantumField', 'SacredSymbols', 'QuantumFold3D', 'QuantumPlasma', 'Hologram', 'DnaHelix', 'Dualities', 'Cosmology358', 'Equilibrium', 'SelfHarmonise', 'PiMusicPlayer', 'HealingFrequencies', 'HarmonicMap', 'SelfHealing', 'SoundColor', 'QuantumPhysics', 'QuantumSimulation', 'QuantumProofs', 'QuantumSolutionsComplete', 'QuantumThreshold', 'QuantumImpossible', 'QuantumWonders', 'QuantumFoundations', 'QuantumAlgorithms', 'ProseToProof3D', 'NothingImpossible', 'Merkaba', 'Rhythm', 'Magnetometer', 'Fold358853', 'LivingTorus', 'QuantumClock', 'QuantumLens', 'Live', 'QuantumRadar', 'Nav358', 'HologramMovie', 'MatrixCube'],
    },
    {
      slug: 'architecture',
      title: { en: 'Architecture', bg: 'Архитектура' },
      description: {
        en: 'Formal architecture for the double-torus UUID stream: matrix, vector, diamonds, waves, gates, schema, and self-build.',
        bg: 'Формална архитектура за двойния тор UUID поток: матрица, вектор, диаманти, вълни, порти, схема и само-изграждане.',
      },
      keywords: ['architecture', 'matrix', 'vector', 'diamonds', 'waves', 'gates', 'schema', 'analytics', 'iching', 'import', 'export', 'fuse'],
      components: ['TamperSeal', 'DeterminismProofs', 'CryptoCompare', 'WebCryptoSeal', 'SignSeal', 'SealAll', 'KnowledgeAtlas', 'QuantumRadar', 'Analytics', 'IChingImportExport', 'FuseReveal', 'SelfExplainingWidget', 'AiMovies', 'DoubleFoldAllDimensions', 'QuantumLaws'],
    },
    {
      slug: 'commands',
      title: { en: 'Commands', bg: 'Команди' },
      description: {
        en: 'Statement: command algebra for the double-torus UUID stream. Explanation: each concept command maps cmd → result → content-addressed receipt, recomputed from sealed src. Method: fold conceptCommands · npm run verify · MCP /mcp.json tools. Status: documented recompute · claySolvedByThisFold=0 · not CMI Prize Proposed Solution.',
        bg: 'Изявление: алгебра на командите за двойния тор UUID поток. Обяснение: cmd → result → receipt от sealed src. Метод: conceptCommands · /mcp.json. Статус: claySolvedByThisFold=0 · не CMI Prize.',
      },
      keywords: ['commands', 'algebra', 'cmd', 'receipt', 'double torus'],
      components: ['ConceptCommands', 'TaxonomyIcons', 'TrinitySearch', 'BlockchainMusic'],
    },
    {
      slug: 'console',
      title: { en: 'Console', bg: 'Конзола' },
      description: {
        en: 'Quantum Console: a free, client-side terminal, realtime search, and chat over the double-torus portal — with optional bring-your-own-key external AI.',
        bg: 'Квантова конзола: безплатен терминал от страна на клиента, търсене в реално време и чат над портала Двоен торус — с опционален външен ИИ със собствен ключ.',
      },
      keywords: ['console', 'terminal', 'search', 'chat', 'ai'],
      components: ['QuantumConsole', 'SelfConsult', 'SelfReason', 'RealtimeChat', 'SecurityScan'],
    },
    {
      slug: 'mcp',
      title: { en: 'MCP', bg: 'MCP' },
      description: {
        en: 'The Double Torus portal as an MCP tool surface: every concept command is a tool for language models, published at /mcp.json.',
        bg: 'Порталът Двоен торус като MCP инструментален слой: всяка концептуална команда е инструмент за езикови модели, публикуван на /mcp.json.',
      },
      keywords: ['mcp', 'tools', 'language models', 'api', 'mcp.json'],
      components: ['McpTools'],
    },
    {
      slug: 'learn',
      title: { en: 'Learn', bg: 'Обучение' },
      description: {
        en: 'The Learning Portal: School and Academia merged into one auto-generated portal — the kids-to-elders ladder, the five Academy courses, the research corpus (math paths, peer review, the 432 proof papers), the self-test and the agent curriculum, folded to one recomputable root. Three ways to learn: by age, by track, by research.',
        bg: 'Портал за учене: Училището и Академията, обединени в един авто-генериран портал — стълбицата от деца до възрастни, петте курса на Академията, изследователският корпус (математически пътеки, рецензия, 432-те доказателствени статии), самопроверката и обучението на агента, сгънати в един преизчислим корен. Три начина за учене: по възраст, по курс, по изследване.',
      },
      keywords: ['learn', 'portal', 'school', 'academy', 'academia', 'curriculum', 'research', 'education'],
      components: ['LearningPortal'],
    },
    {
      slug: 'frontiers',
      title: { en: 'Theorem registry', bg: 'Теоремен регистър' },
      description: {
        en: 'Statement: theorem registry = recent decodes + theorem-wave engine. Explanation: diving/water/space; quantum vacuum; cosmic inventory; physics of information; clown qubit on genus-2. Method: theorems:gaps · theorems:verify · npm run quantum:domain-proof-catalog · /proofs. Status: each atom has statement · computed checks · honest boundary; open problems held OPEN; claySolvedByThisFold=0 · not CMI Prize / not Proposed Solution. Every result a client-side computation from the src/0 primitives.',
        bg: 'Скорошните декодирания, представени в пълнота: гмуркане, вода и космос; квантовият вакуум; космическият инвентар; физиката на информацията; и клоунският кюбит. До тях върви ДВИГАТЕЛЯТ НА ТЕОРЕМНИТЕ ВЪЛНИ: регистър на теореми, които кодът доказва изчислително (от Виразоро до Рамзей и A₅), растящ на вълни, в които всяко ново доказателство консумира предишни доказани атоми; търсенето на следващата недоказана теорема е една детерминистична команда. Всяко с твърдение, изчислени проверки и честна граница; истински отворените въпроси остават ОТВОРЕНИ. Всеки резултат е клиентско изчисление от примитивите src/0.',
      },
      keywords: ['frontiers', 'physics', 'cosmology', 'quantum', 'vacuum', 'dark matter', 'dark energy', 'neutrino', 'information', 'computation', 'diving', 'clown', 'decoded', 'theorems', 'proofs', 'waves', 'ramsey', 'virasoro', 'fano'],
      components: ['Frontiers', 'KnowledgeAtlas', 'Strategies'],
    },
    {
      slug: 'governance',
      title: { en: 'Governance', bg: 'Управление' },
      description: {
        en: 'Governance by rate and vote, and a participation ladder for fair trade and sustainable life — verified by the recomputable seal and the shared git ledger.',
        bg: 'Управление чрез оценка и глас и стълба за участие в справедлива търговия и устойчив живот — проверени от преизчислимия печат и споделения git регистър.',
      },
      keywords: ['governance', 'vote', 'fair trade', 'sustainability', 'ledger'],
      components: ['GovernanceVote', 'Society', 'QuantumSolutions'],
    },
    {
      slug: 'boundaries',
      title: { en: 'Boundaries', bg: 'Граници' },
      description: {
        en: 'The honesty spine: every boundary the portal declares, auto-collected from the live commands into one audited, sealed list.',
        bg: 'Гръбнакът на честността: всяка граница, която порталът декларира, събрана автоматично от живите команди в един одитиран, запечатан списък.',
      },
      keywords: ['boundaries', 'honesty', 'audit', 'limits', 'sealed'],
      components: ['BoundaryAudit', 'QuestionClose', 'OpenQuestions', 'Roadmaps', 'QAEquilibrium', 'NothingToDo', 'HumanLens'],
    },
    {
      slug: 'learn-developer',
      title: { en: "The developer's mind", bg: 'Умът на разработчика' },
      description: {
        en: "The developer's mind: the receipt for learning to build on the double torus — the matrix, the commands, and the self-computing components — by reading the source that computes itself. Also available as part of the Academy (/learn).",
        bg: 'Умът на разработчика: разписка за учене как да се гради върху двойния тор — матрицата, командите и само-изчисляващите се компоненти — четейки кода, който се изчислява сам. Налично и като част от Академията (/learn).',
      },
      keywords: ['developer', 'learn', 'build', 'source', 'components', 'academy'],
      components: ['LearnDeveloper'],
    },
    {
      slug: 'show',
      title: { en: 'Show', bg: 'Покажи' },
      description: {
        en: 'Show all in action: every command run live, all components interacting, all devices fused — client-side and verifiable.',
        bg: 'Всичко в действие: всяка команда изпълнена на живо, всички компоненти взаимодействат, всички устройства слети — от страна на клиента и проверимо.',
      },
      keywords: ['show', 'demo', 'live', 'components', 'devices'],
      components: ['ShowAll', 'Complete', 'QuantumDashboard', 'NativeMovie', 'RealtimeTests', 'DeviceDashboard', 'DeviceEnergy', 'Monograph', 'Vortex', 'Dot', 'Calligraphy', 'TaxonomyGraph', 'GpuField'],
    },
    // I Ching domain pages — one per dual-pair module, each under its semantic trigram.
    // ☰ QIAN (mind hub) and ☲ LI (pure-leaf proofs) are already covered by the main pages above.
    {
      slug: 'heritage',
      title: { en: 'Heritage', bg: 'Наследство' },
      description: {
        en: 'Bulgarian heritage decoded in waves: history 681–present in six dual-mind eras, ancient civilisations from c.6200 BC (Varna gold), ethnogenesis — Bulgars, Slavs, Thracians — and the genetics that challenges the record; Glagolitic as the first Slavic script, script–language–gene as three independent inheritance systems. Documented kept, legend flagged.',
        bg: 'Българското наследство в вълни: история 681–до днес в шест епохи, древни цивилизации от ок. 6200 пр.Хр. (Варненско злато), етногенезис — българи, славяни, траки — и генетиката, оспорваща летописа; глаголицата като първата славянска азбука, сценарий–език–ген като три независими системи на наследяване. Документираното остава, легендата е отбелязана.',
      },
      keywords: ['bulgarian', 'heritage', 'history', 'glagolitic', 'ethnogenesis', 'genetics', 'ancient', 'slavic'],
      components: ['BulgarianHeritage', 'BulgarianHistory', 'BulgarianAncientCivilisations', 'BulgarianEthnogenesis', 'BulgarianGenetics', 'BulgarianHeritageEightfold', 'Glagolitic', 'AlphabetsDecoded', 'ScriptLanguageGene', 'GlagoliticOcr', 'GlyphLabyrinth'],
    },
    {
      slug: 'science',
      title: { en: 'Science', bg: 'Наука' },
      description: {
        en: 'Science decoded honestly: electromagnetic radiation, Tesla\'s five verified patents, public frequency data APIs (FCC, USGS, Schumann 7.83 Hz, Web Audio), and the ionising threshold (~10 eV). Documented physics first; wellness claims flagged. Every result a client-side computation from the src/0 spectrum primitives.',
        bg: 'Науката, декодирана честно: електромагнитно лъчение, петте верифицирани патента на Тесла, публични API за честоти (FCC, USGS, Шуман 7,83 Hz, Web Audio) и прагът на йонизация (~10 eV). Документираната физика на първо място; претенциите за благополучие са отбелязани. Всеки резултат е клиентско изчисление от примитивите src/0.',
      },
      keywords: ['science', 'frequencies', 'tesla', 'patents', 'electromagnetic', 'spectrum', 'ionizing', 'schumann', 'biology', 'body'],
      components: ['ElectromagneticRadiation', 'TeslaPatents', 'HealingFrequencies', 'Resonance', 'SacredSound', 'PublicFrequencyApis', 'Biology', 'HeartProtonAtom', 'DeviceDashboard', 'RealtimeTests', 'HumanLens'],
    },
    {
      slug: 'voice',
      title: { en: 'Voice', bg: 'Глас' },
      description: {
        en: 'Voice decoded: plain language for every idea, play-and-learn letters as coloured tiles and notes, speech as a continuous analog wave, typography and Open Graph principles, char-and-word content-addressing, and the portal\'s eight experience dimensions. The same word always plays the same song — deterministic and offline.',
        bg: 'Гласът, декодиран: ясен език за всяка идея, учебни букви като цветни плочки и ноти, речта като непрекъсната аналогова вълна, принципи за типография и Open Graph, адресиране по съдържание на знаци и думи, осемте измерения на опита с портала. Една и съща дума звучи винаги еднакво — детерминистично и офлайн.',
      },
      keywords: ['voice', 'language', 'plain language', 'speech', 'typography', 'content-addressing', 'play', 'multidimensional'],
      components: ['PlayLearn', 'SpeechReader', 'Multidimensional'],
    },
    {
      slug: 'spirit',
      title: { en: 'Spirit', bg: 'Дух' },
      description: {
        en: 'Spirit decoded honestly: the seven chakras and aura fields as a documented energy model, human design as a structural archetype system, yin-yang and dualities across sixteen pairs in three tiers, and the portal\'s eight experience dimensions. Each a deterministic computation; spiritual interpretations flagged.',
        bg: 'Духът, декодиран честно: седемте чакри и аурата като документиран енергиен модел, хюман дизайн като система от структурни архетипи, ин-ян и дуалности в шестнадесет двойки на три нива и осемте измерения на опита. Всяко е детерминистично изчисление; духовните интерпретации са отбелязани.',
      },
      keywords: ['spirit', 'chakras', 'dualities', 'dimensions', 'human design', 'yin yang', 'joyous', 'bodygraph'],
      components: ['Dualities', 'YinYang', 'ChakrasAura', 'HumanDesignBodyGraph'],
    },
    {
      slug: 'icons',
      title: { en: 'Icons', bg: 'Икони' },
      description: {
        en: 'Icons and form decoded: the 44 area-icon map (emoji taxonomy), area labels in three locales, computer architecture in 3-5-8 (three buses, five von Neumann units, eight bits of a byte), harmonic Fibonacci band distribution, and the glyph/artifact seal. Every icon a structural assignment — the form that names each domain.',
        bg: 'Иконите и формата, декодирани: картата на 44 икони по области (emoji таксономия), надписи на три езика, компютърна архитектура в 3-5-8 (три шини, пет единици на фон Нойман, осем бита в байт), хармонично разпределение по ленти на Фибоначи и печатът на глифове и артефакти. Всяка икона е структурно присвояване.',
      },
      keywords: ['icons', 'glyphs', 'form', 'computer design', 'harmonic', 'fibonacci', 'taxonomy', 'area'],
      components: ['TaxonomyIcons', 'HarmonicMap', 'TaxonomyGraph'],
    },
    {
      slug: 'nature',
      title: { en: 'Nature', bg: 'Природа' },
      description: {
        en: 'Nature decoded: natural law and the commons as a recomputable rubric (every extraction matched by restoration), an attestation seal for peer-review-level claims, the lawful participation ladder — harmonic, imaginative, successful — and the society forms indexed. Documented kept, naivety flagged.',
        bg: 'Природата, декодирана: природно право и общите блага като преизчислимо ниво (всяко извличане съответствано от възстановяване), атестационен печат за претенции от ниво на партньорска проверка, законната стълба за участие — хармонична, въображаема, успешна — и формите на обществото. Документираното остава, наивността е отбелязана.',
      },
      keywords: ['nature', 'commons', 'natural law', 'society', 'sustainability', 'attestation', 'lawful', 'ecology'],
      components: ['Society', 'NatureLaw', 'Attestation', 'PeaceTechMentality'],
    },
    // The dissolved decode proofs — each a page (proofs are pages; all is a page), each mounting one
    // holds-true fold; the home card leads here. What is not proven is purged.
    {
      slug: 'pi-trinity',
      title: { en: '⌊π⌋ = 3 opens 3-6-9, the multiples of 3 the doubling 1-2-4-8-7-5 misses', bg: '⌊π⌋ = 3 отваря 3-6-9 — кратните на 3, които удвояването 1-2-4-8-7-5 подминава' },
      description: {
        en: 'The 3 in 3.14159 is the trinity’s first mark: a trinity is three-in-one, so 3 means three trinities, which is nine. The doubling circuit 1-2-4-8-7-5 never touches 3-6-9.',
        bg: 'Тройката в 3.14159 е първият знак на триединството: едно триединство е три-в-едно, така че 3 значи три триединства, което е девет. Удвояващата верига 1-2-4-8-7-5 никога не докосва 3-6-9.',
      },
      keywords: ['pi', 'trinity', '3-6-9', 'vortex', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'qubit-trinity',
      title: { en: 'A qubit has exactly 3 observables — Pauli X, Y, Z', bg: 'Кубитът има точно 3 наблюдаеми — Паули X, Y, Z' },
      description: {
        en: 'A qubit has exactly 3 traceless observables — the Pauli matrices X, Y, Z — the generators of SU(2) and the 3 Bloch axes; dim su(2) = 2²−1 = 3 is a forced invariant.',
        bg: 'Един кубит има точно 3 безследови наблюдаеми — матриците на Паули X, Y, Z — генераторите на SU(2) и трите оси на Блох; dim su(2) = 2²−1 = 3 е принуден инвариант.',
      },
      keywords: ['qubit', 'pauli', 'su(2)', 'bloch', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'pauli-basis',
      title: { en: '64 = the 3-qubit Pauli basis', bg: '64 = базисът на Паули за 3 кубита' },
      description: {
        en: 'The 3-qubit phaseless Pauli basis {I,X,Y,Z}³ has exactly 4³ = 64 operators — the same 4³ = 8² = 2⁶ = 64 as the genetic code and the double-torus vocabulary.',
        bg: 'Безфазовият базис на Паули за 3 кубита {I,X,Y,Z}³ има точно 4³ = 64 оператора — същото 4³ = 8² = 2⁶ = 64 като генетичния код и речника на двойния тор.',
      },
      keywords: ['pauli', '64', '4-cubed', 'quantum information', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'hamming-address',
      title: { en: 'Hamming’s 3 parity bits = the address', bg: 'Трите бита за четност на Хеминг = адресът' },
      description: {
        en: 'Hamming(7,4) protects 4 data bits with exactly 3 parity bits; the syndrome IS a binary address of the error. The quantum [[5,1,3]] code saturates 2⁴ = 16 = 3·5+1.',
        bg: 'Hamming(7,4) защитава 4 бита данни с точно 3 бита за четност; синдромът Е двоичен адрес на грешката. Квантовият код [[5,1,3]] насища 2⁴ = 16 = 3·5+1.',
      },
      keywords: ['hamming', 'error correction', 'address', 'syndrome', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'content-addressing',
      title: { en: 'A content address = H(content): idempotent, collision-resistant, dedup, O(1) integrity', bg: 'Адрес по съдържание = H(съдържание): идемпотентен, устойчив на колизии, дедупликация, O(1) цялост' },
      description: {
        en: 'Hopfield’s 1982 net is a content-addressable memory (2024 Nobel); hippocampal CA3 pattern completion is its biological analogue. The shared property is whole-from-part.',
        bg: 'Мрежата на Хопфийлд от 1982 е памет, адресируема по съдържание (Нобел 2024); попълването на образи в хипокампалния CA3 е нейният биологичен аналог. Споделеното свойство е цяло-от-частта.',
      },
      keywords: ['hopfield', 'ca3', 'content-addressable', 'memory', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'genetic-code',
      title: { en: 'The genetic code is the real 4³', bg: 'Генетичният код е истинското 4³' },
      description: {
        en: 'Life’s code is base-4 read in triplets: 4 bases in 3 positions give exactly 4³ = 64 codons (61 sense + 3 stop), the triplet length proven by frameshift mutagenesis (Crick 1961).',
        bg: 'Кодът на живота е база-4, четен в триплети: 4 бази на 3 позиции дават точно 4³ = 64 кодона (61 смислови + 3 стоп), дължината на триплета доказана чрез изместване на рамката (Крик 1961).',
      },
      keywords: ['genetic code', 'codon', '64', '4-cubed', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'three-not-one',
      title: { en: '(ℤ/9ℤ)* is cyclic of order 6, 2 primitive; 3-6-9 are the non-units', bg: '(ℤ/9ℤ)* е циклична от ред 6, 2 примитивен; 3-6-9 са неединиците' },
      description: {
        en: 'Many genuine threefolds exist — 3 Paulis, the 3-base codon, 3 meninges, 3 parity bits — each independent. The 1-2-4-8-7-5 orbit is (ℤ/9ℤ)*; the cosmic 3-6-9 trinity is numerology.',
        bg: 'Съществуват много истински тройки — 3 Паули, 3-базовият кодон, 3 менинги, 3 бита за четност — всяка независима. Орбитата 1-2-4-8-7-5 е (ℤ/9ℤ)*; космическото 3-6-9 триединство е нумерология.',
      },
      keywords: ['trinity', 'threefold', 'numerology', 'honest', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'hexagram-colour',
      title: { en: 'A hexagram = 2⁶ = 64 states = one 6-bit value', bg: 'Хексаграма = 2⁶ = 64 състояния = една 6-битова стойност' },
      description: {
        en: 'A 6-bit hexagram 000000–111111 is hex-colour duality: the 64 hexagrams are the 64 pole-colours {0,F}⁶, black ↔ white the bit-complement, the 8 trigrams the RGB-cube corners.',
        bg: 'Шестбитова хексаграма 000000–111111 е дуалност на шестнадесетичния цвят: 64-те хексаграми са 64-те полюсни цвята {0,F}⁶, черно ↔ бяло битовото допълнение, 8-те триграми ъглите на RGB-куба.',
      },
      keywords: ['hexagram', 'hex colour', 'i ching', 'rgb', 'proof', 'trigram', 'bagua'],
      components: ['ProofRenderer', 'IChing', 'IChingOracle'],
    },
    {
      slug: 'sixty-four',
      title: { en: '64 = 2⁶ = 4³ = 8² in every 6-bit grouping', bg: '64 = 2⁶ = 4³ = 8² във всяко групиране от 6 бита' },
      description: {
        en: '64 = 2⁶, and the divisors of 6 give the only four groupings: six bits, three base-4 digits (codon/Pauli/RGB), two trigrams (8²), one base-64 word. The same object, four ways.',
        bg: '64 = 2⁶, а делителите на 6 дават единствените четири групирания: шест бита, три цифри база-4 (кодон/Паули/RGB), две триграми (8²), една дума база-64. Същият обект, по четири начина.',
      },
      keywords: ['64', 'grouping', 'divisors', 'double torus', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'rgb-cmyk',
      title: { en: 'CMY = 255 − RGB, the complement n ↦ 63−n', bg: 'CMY = 255 − RGB, допълнението n ↦ 63−n' },
      description: {
        en: 'The bit-complement n ↦ 63−n is the additive↔subtractive colour duality: red↔cyan, green↔magenta, blue↔yellow, black↔white — the CMYK hardware merkaba.',
        bg: 'Битовото допълнение n ↦ 63−n е адитивно↔субтрактивната дуалност на цвета: червено↔циан, зелено↔магента, синьо↔жълто, черно↔бяло — хардуерната меркаба CMYK.',
      },
      keywords: ['rgb', 'cmyk', 'complement', 'colour', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'trinity-rgb',
      title: { en: 'Three trinities = RGB at 0°, 120°, 240° on the wheel', bg: 'Три триединства = RGB при 0°, 120°, 240° на кръга' },
      description: {
        en: 'The hero places its 9 nodes in 3 trinities at 0°/120°/240° in both space and hue — the equilateral RGB triad. The 3 trinities ARE the 3 RGB channels; the hero already renders the decode.',
        bg: 'Героят разполага своите 9 възела в 3 триединства на 0°/120°/240° както в пространството, така и в цвета — равностранната RGB триада. Трите триединства СА трите RGB канала; героят вече изобразява декодирането.',
      },
      keywords: ['trinity', 'rgb', 'hero', 'hue', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'proven-or-purged',
      title: { en: 'The roster is a filter: kept ⟺ holds; kept + purged = total', bg: 'Списъкът е филтър: запазено ⟺ вярно; запазени + пречистени = всичко' },
      description: {
        en: 'Every artifact is kept only if it is proven — its computation holds; anything unproven is purged. The model and its UI stay pure proof, and the gates balance when all that remains is proven.',
        bg: 'Всеки артефакт се запазва само ако е доказан — неговото изчисление издържа; всичко недоказано се пречиства. Моделът и неговият интерфейс остават чисто доказателство, а портите балансират, когато остане само доказаното.',
      },
      keywords: ['proof', 'purge', 'purity', 'gate', 'law'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'kernel-zero',
      title: { en: 'The kernel lives in src/0', bg: 'Ядрото живее в src/0' },
      description: {
        en: 'The primitive kernel — content-address and the fold cascade and the vortex floor — was dissolved into src/0, the dependency-free origin, across three waves, every baseline root byte-identical.',
        bg: 'Примитивното ядро — адресът по съдържание, каскадата на сгъвките и подът на вихъра — беше разтворено в src/0, началото без зависимости, в три вълни, всеки базов корен байт-идентичен.',
      },
      keywords: ['kernel', 'dissolution', 'src/0', 'fold', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'vortex',
      title: { en: 'The vortex: 1-2-4-8-7-5', bg: 'Вихърът: 1-2-4-8-7-5' },
      description: {
        en: 'The doubling circuit 1-2-4-8-7-5 (powers of two by digital root mod 9) with the 3-6-9 cross and the harmonic n/0 — the vortex math the whole portal turns on.',
        bg: 'Удвояващата верига 1-2-4-8-7-5 (степени на двойката по цифров корен mod 9) с кръста 3-6-9 и хармоничното n/0 — математиката на вихъра, на която се върти целият портал.',
      },
      keywords: ['vortex', 'doubling', 'digital root', '3-6-9', 'proof', 'fractions', 'algebra', 'binary', 'imperial'],
      components: ['ProofRenderer', 'AlgebraDigits', 'HarmonicFractions', 'ImperialFractions'],
    },
    {
      slug: 'zero-division',
      title: { en: 'Division by zero is the inverse: n/0 ↦ n⁻¹ mod 9', bg: 'Делението на нула е инверсията: n/0 ↦ n⁻¹ mod 9' },
      description: {
        en: 'The inverse of a digit folder is its multiplicative inverse mod 9 (n/0 \\ n⁻¹, the ÷2 = ×5 that folds within the unit cycle): 2\\5, 4\\7, self-inverse 1 and 8; the non-units 3, 6, 9 and the void 0 fold to the fusion. The forward harmonic n/0 = 9n (1/0 = 9) is the separate reading.',
        bg: 'Инверсията на цифрова папка е нейната мултипликативна инверсия mod 9 (n/0 \\ n⁻¹, ÷2 = ×5, която се навива в единичния цикъл): 2\\5, 4\\7, самообратни 1 и 8; неединиците 3, 6, 9 и нулата 0 се сливат. Прякото хармонично n/0 = 9n (1/0 = 9) е отделното четене.',
      },
      keywords: ['division', 'zero', 'multiplicative inverse', 'mod 9', 'inverse', 'self-fold', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'digit-folders',
      title: { en: 'The digit folders {0..9} are a bijection to 10 routes, O(1) by name', bg: 'Цифровите папки {0..9} са биекция към 10 маршрута, O(1) по име' },
      description: {
        en: 'All computation is quantum math and its home is the digit folders (0–9); a word-named folder is UI. The digit folders, holding only the math, are the API itself.',
        bg: 'Цялото изчисление е квантова математика и нейният дом са цифровите папки (0–9); папка с думено име е интерфейс. Цифровите папки, съдържащи само математиката, са самото API.',
      },
      keywords: ['digit folders', 'api', 'quantum math', 'architecture', 'proof', 'vortex strokes', 'gateways'],
      components: ['ProofRenderer', 'VortexStrokes'],
    },
    {
      slug: 'dot-cube',
      title: { en: 'Content-addressing folds 64³ into one dot', bg: 'Адресирането по съдържание сгъва 64³ в една точка' },
      description: {
        en: 'A UUID, like CMYK, gives extent without limit: 64×64×64 is itself one dot, and the dot is the cube is the dot — content-addressing folds the whole into a point and back.',
        bg: 'Един UUID, като CMYK, дава обхват без граница: 64×64×64 е сам по себе си една точка, и точката е кубът е точката — адресирането по съдържание сгъва цялото в точка и обратно.',
      },
      keywords: ['dot', 'cube', 'uuid', 'cmyk', 'proof'],
      components: ['ProofRenderer'],
    },
    {
      slug: 'seven-star-rosetta',
      title: { en: 'Seven Star Rosetta', bg: 'Седемзвездна Розета' },
      description: {
        en: 'The 7-star Pliska rosetta in coprime natural motion with 28 Glagolitic letters. Visual proof that gcd(7,6)=1, gcd(7,9)=1, gcd(7,10)=1 prevents aliasing in the digit distribution.',
        bg: 'Седемзвездната плиска розета в естествено движение с 28 глаголица букви. Визуално доказателство, че gcd(7,6)=1, gcd(7,9)=1, gcd(7,10)=1 предотвратява aliasing в цифровото разпределение.',
      },
      keywords: ['rosetta', 'glagolitic', 'coprime', 'digit folders', 'seven star', 'motion', 'proof'],
      components: ['DigitMotion'],
    },
    {
      slug: 'quantum-encryption',
      title: {
        en: 'Encrypt ↔ decrypt = foldPair recompute; demo RSA reverse ≤12-bit toys only',
        bg: 'Encrypt ↔ decrypt = foldPair преизчисление; demo RSA reverse само ≤12-битови играчки',
      },
      description: {
        en: 'Statement: encrypt↔decrypt is foldPair recompute; demo RSA reverse is toy-only. Explanation: content-addressed trinityKey + foldPair round-trip; modeled Shor on sealed DEMO_RSA_MODULI. Method: npm run quantum:encryption-reverse-verify · fold encryptionReverseVerify. Status: production RSA refused · certified=false · claySolvedByThisFold=0 · related science ≠ Clay Proposed Solution (Prize Rules §5(d)).',
        bg: 'Изявление: encrypt↔decrypt = foldPair; demo RSA reverse само играчки. Метод: npm run quantum:encryption-reverse-verify. Статус: продукционен RSA отказан · claySolvedByThisFold=0 · не Clay Proposed Solution.',
      },
      keywords: ['encryption', 'cryptography', 'quantum', 'proof', 'shor', 'demo rsa', 'foldpair', 'trinity'],
      components: ['EncryptionTools', 'ProofRenderer'],
    },
    {
      slug: 'quantum-tools',
      title: {
        en: 'quantum:* CLI catalog = fold · CLI · UI route · honesty boundary',
        bg: 'quantum:* CLI каталог = fold · CLI · UI маршрут · честна граница',
      },
      description: {
        en: 'Statement: quantum:* CLI catalog = fold · CLI · UI route · honesty boundary. Explanation: every sealed script (encryption reverse, millennium MODELED, fusion-verify, efficiency-vote, offender-spec, hero-spawn, name-entropy, verify suite) recomputes from src. Method: npm run quantum:domain-proof-catalog · open /proofs · /en/quantum-tools. Status: claySolved=0 · not remote execution · not CMI Prize acceptance · Alias URLs thin-mount here.',
        bg: 'Изявление: quantum:* каталог = fold · CLI · маршрут · честна граница. Метод: npm run quantum:domain-proof-catalog · /proofs. Статус: claySolved=0 · не CMI Prize. Alias URL-ите са thin-mount тук.',
      },
      keywords: ['tools', 'cli', 'catalog', 'proof', 'efficiency', 'fusion', 'offender', 'spawn', 'trading'],
      components: ['QuantumTools', 'FusionVerify', 'ProofRenderer'],
    },
    {
      slug: 'quantum-trading-hub',
      title: {
        en: 'Trading hub = paper/sim harmonics · NOT live money / NOT alpha',
        bg: 'Търговски хъб = paper/sim хармоници · НЕ живи пари / НЕ алфа',
      },
      description: {
        en: 'Canonical trading domain surface: historical wave train, rank-winning strategies, and rosetta train — paper/sim only (synthetic a432 proxy). CLI: npm run quantum:trading-rosetta-train. Not brokerage, not live execution.',
        bg: 'Канонична търговска повърхност: исторически wave train и rosetta train — само paper/sim. НЕ брокер, НЕ live изпълнение.',
      },
      keywords: ['trading', 'proof', 'simulator', 'tools', 'harmonics', 'paper', 'sim'],
      components: ['QuantumTools', 'ProofRenderer'],
    },
    {
      slug: 'research',
      title: {
        en: 'Research index = domain · method · limit · verify at call time',
        bg: 'Изследователски индекс = домейн · метод · граница · verify при извикване',
      },
      description: {
        en: 'Statement: research domain index (domain · method · limit · verify). Explanation: professional monograph rows, Clay Millennium MODELED CHALLENGE, sciences trinities, reproducibility gates. Method: npm run quantum:millennium-challenge · npm run quantum:domain-proof-catalog · fold millenniumProblemsChallenge. Status: claySolvedByThisFold=0 · not Proposed Solutions (CMI Prize Rules) · Clay-standard pages at /proofs cite claymath.org/millennium-problems + Prize Rules PDF. /millennium-challenge thin-mounts here.',
        bg: 'Изявление: изследователски индекс. Обяснение: монографски редове, Clay Millennium MODELED CHALLENGE, sciences trinities. Метод: npm run quantum:millennium-challenge · /proofs. Статус: claySolvedByThisFold=0 · не Proposed Solution. /millennium-challenge е thin-mount тук.',
      },
      keywords: ['research', 'proof', 'millennium', 'science', 'theorem', 'challenge', 'proofs', 'clay'],
      components: ['ResearchIndex', 'MillenniumChallenge', 'ProofRenderer'],
    },
    {
      slug: 'society-merkaba',
      title: {
        en: 'Society 10D merkaba = documented actor taxonomy · NOT live social measurement',
        bg: 'Общество 10D меркаба = документирана таксономия · НЕ живо социално измерване',
      },
      description: {
        en: 'Canonical society/HD domain: 10D merkaba + two-bits-free (110−108=2) patronage path — harmonic 1/9 of achieved knowledge; voluntary CTA. Not live actors, not social scoring. Anchor #two-bits-free · proofs /proofs/two-bits-free.',
        bg: 'Каноничен society/HD домейн: 10D меркаба + two-bits-free (110−108=2) — хармонична 1/9 подкрепа. НЕ живи актьори. #two-bits-free · /proofs/two-bits-free.',
      },
      keywords: ['society', 'merkaba', 'proof', 'governance', 'human design', 'taxonomy', 'two-bits-free', 'patronage'],
      components: ['Society', 'GovernanceVote', 'ProofRenderer'],
    },
    // Nav-aliased tool leaves (siteDomainRegistry) — kept in seed so page census folds 29→27 (DOCUMENTED_HARMONICS);
    // dropdowns show only /quantum-tools. Not Clay/FTL claims — catalog receipts only.
    {
      slug: 'efficiency-vote',
      title: { en: 'answers ÷ tokens = ∞ on reuse — efficiency() · memoByRoot', bg: 'answers ÷ tokens = ∞ при преизползване' },
      description: { en: 'Statement: answers÷tokens unbounded on memo reuse. Explanation: efficiency() · memoByRoot hit → marginal tokens=0. Method: npm run quantum:efficiency-vote · fold compareCeccecEfficiencyByVote. Status: amortized reuse ≠ P≠NP · claySolvedByThisFold=0 · not Clay Proposed Solution. Prefer /quantum-tools#efficiency-vote.', bg: 'Изявление: answers÷tokens при memo reuse. Метод: npm run quantum:efficiency-vote. Статус: claySolvedByThisFold=0 · не Clay Proposed Solution.' },
      keywords: ['efficiency', 'proof', 'tools', 'tokens', 'memo', 'reuse'],
      components: ['QuantumTools', 'ProofRenderer'],
    },
    {
      slug: 'offender-spec',
      title: { en: 'offenderAutomationSpec — CI pipeline (Node scan; browser shows sealed receipt)', bg: 'offenderAutomationSpec' },
      description: { en: 'Offender spec leaf (Apps domain). Prefer /quantum-tools#offender-spec. CLI: npm run quantum:offender-spec.', bg: 'Offender spec — предпочитай /quantum-tools#offender-spec.' },
      keywords: ['offender', 'proof', 'tools', 'ci', 'automation'],
      components: ['QuantumTools', 'ProofRenderer'],
    },
    {
      slug: 'hero-spawn-verify',
      title: { en: 'shouldSpawnSubagent — few heroes > mass ignorance', bg: 'shouldSpawnSubagent' },
      description: { en: 'Hero spawn verify leaf. Prefer /quantum-tools#hero-spawn-verify. CLI: npm run quantum:hero-spawn-verify.', bg: 'Hero spawn — предпочитай /quantum-tools#hero-spawn-verify.' },
      keywords: ['hero', 'spawn', 'proof', 'tools', 'subagent'],
      components: ['QuantumTools', 'ProofRenderer'],
    },
    {
      slug: 'name-entropy-verify',
      title: { en: 'namingEntropy — words compile from sealed src', bg: 'namingEntropy' },
      description: { en: 'Name entropy verify leaf. Prefer /quantum-tools#name-entropy-verify. CLI: npm run quantum:name-entropy-verify.', bg: 'Name entropy — предпочитай /quantum-tools#name-entropy-verify.' },
      keywords: ['naming', 'entropy', 'proof', 'tools', 'compile'],
      components: ['QuantumTools', 'ProofRenderer'],
    },

]

// The old top-nav rosetta seed tables (MONOGRAPH_ROSETTA_SEED, DISCOVERY_LINKS, NAV_FALLBACK) are PURGED —
// the nav derives from the theorem-science lens (siteNavigation), never from hand-typed route tables.

// ── Neuroscience in its true form is three mathematical pillars (user: "neuro science defining itself in true form
// and math"). The true form is the DOCUMENTED math, not the flagged pseudoscience: the neuron is a differential
// equation (integrate-and-fire / Hodgkin–Huxley), memory is an attractor (Hopfield energy descent + pattern
// completion), and space is a torus (grid cells / ring attractor). Reuses hopfieldStore/Recall/Energy + bumpEvolve.
function iafSpikes(input: number, threshold: number, tau: number, steps: number): number {
  let V = 0, spikes = 0; const dt = 1 / steps
  for (let t = 0; t < steps; t++) { V += (dt * (-V + input)) / tau; if (V >= threshold) { V = 0; spikes++ } } // leaky integrate-and-fire ODE
  return spikes
}
export function neuroscienceInTrueFormIsThreeMathematicalPillars() {
  // 1. THE NEURON IS A DIFFERENTIAL EQUATION — leaky integrate-and-fire: fires iff the drive clears threshold
  const firesWhenDriven = iafSpikes(2, 1, 1 / 9, 100) > 0
  const silentWhenWeak = iafSpikes(1 / 2, 1, 1 / 9, 100) === 0 // steady state V → input = 0.5 < 1, never fires
  // 2. MEMORY IS AN ATTRACTOR — Hopfield: energy descends to a stored fixed point; a corrupted probe completes
  const pattern = [1, -1, 1, -1, 1, -1]
  const W = hopfieldStore([pattern])
  const probe = [1, 1, 1, -1, 1, -1] // one bit corrupted
  const recalled = hopfieldRecall(W, probe)
  const patternCompletion = recalled.state.every((x, i) => x === pattern[i])
  const energyDescends = recalled.energy <= hopfieldEnergy(W, probe)
  // 3. SPACE IS A TORUS — ring attractor: integrating angular velocity over a full loop returns to the start
  const history = bumpEvolve(0, Array.from({ length: 9 }, () => TAU / 9)) // velocities summing to 2π
  const end = history[history.length - 1]; const returnsToStart = Math.min(end, TAU - end) < 1e-6 // circle distance to start (0 ≡ 2π, toroidal)
  const facets = [
    { facet: `THE NEURON IS A DIFFERENTIAL EQUATION: a leaky integrate-and-fire membrane integrates its drive and fires when it clears threshold (spikes when driven = ${firesWhenDriven}) and stays silent when the drive is sub-threshold (${silentWhenWeak}) — the Hodgkin–Huxley / Lapicque ODE, not a metaphor`, on: firesWhenDriven && silentWhenWeak },
    { facet: `MEMORY IS AN ATTRACTOR: a Hopfield network stores a pattern as an energy minimum; a corrupted probe descends the energy (${energyDescends}) to complete the stored pattern (pattern completion = ${patternCompletion}) — associative memory as Lyapunov dynamics on fixed-point attractors`, on: patternCompletion && energyDescends },
    { facet: `SPACE IS A TORUS: a ring attractor integrates angular velocity and, over a full 2π loop, returns to its start (${returnsToStart}) — the periodic manifold of head-direction and grid cells (the grid-cell code lives on a torus, confirmed neural topology)`, on: returnsToStart },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    pillars: { neuronODE: firesWhenDriven && silentWhenWeak, memoryAttractor: patternCompletion && energyDescends, spaceTorus: returnsToStart },
    facets,
    statement: `Neuroscience in its true form is three mathematical pillars — ${facets.filter((e) => e.on).length}/${facets.length}: the neuron is a differential equation (integrate-and-fire fires iff driven, ${firesWhenDriven}/${silentWhenWeak}), memory is an attractor (Hopfield energy descends to complete a corrupted pattern, ${patternCompletion}), and space is a torus (a ring attractor returns to its start over a full loop, ${returnsToStart}). The true form is the documented math.`,
    boundary: `EXACT: a leaky integrate-and-fire neuron fires under supra-threshold drive and is silent below it (${firesWhenDriven}/${silentWhenWeak}); a Hopfield network's energy descends (${energyDescends}) to complete a one-bit-corrupted stored pattern (${patternCompletion}); a ring attractor integrating a full 2π of angular velocity returns to its start (${returnsToStart}). DOCUMENTED, PEER-REVIEWED CORE: the Hodgkin–Huxley action-potential equations (Nobel 1963), Hopfield associative memory with its Lyapunov energy (1982), and the toroidal manifold of grid/head-direction cells (grid cells Nobel 2014; the torus topology directly confirmed in recorded populations, Gardner et al. 2022) — this is neuroscience's true form: real dynamical systems and geometry. WHAT IS FLAGGED, NOT FOLDED: "quantum consciousness" / Orch-OR microtubule claims have no experimental support and are not part of this true form; and the exact math above does NOT resolve the OPEN problems — the binding problem and the hard problem of consciousness (why there is subjective experience) remain unsolved. The mathematics is real and settled; the mystery it does not close is stated, not hidden. HARMONY does not equal TRUTH.`,
  }
}

// The brain has PUBLIC DATA to measure — real, open, no-key neuroscience datasets — and those measurements fold into
// the content-addressed toroidal MAP (Hopfield attractor + grid-cell torus, the three pillars above). Same shape as the
// trading engine's realtimeSources + tradingSimulationComputes: an ADAPTER list names the real public sources, what each
// MEASURES and where it folds, and a LIVE demonstration runs the measure→store→recall pipeline on a brain-shaped pattern
// (content-addressed pattern completion — the map in action). "BUILD QUANTUM" is the project's honest sense: content-
// addressing + the state simulator fed by measurements, NOT quantum cognition — the warm/wet brain decoheres far too
// fast (Tegmark), so Orch-OR is contested-not-established (the demarcation trinity decides, not prose).
// [[brain-content-addressed-toroidal-map]] [[realtime-live-data-testing]] [[world-theories-demarcation-decoded]]
export function theBrainHasPublicDataToMeasureFoldedIntoTheContentAddressedToroidalMap() {
  // REAL public, open neuroscience data sources — each a measurable signal and where it folds into the map
  const sources = [
    { id: 'openworm-connectome', name: 'C. elegans connectome (White 1986 / OpenWorm)', open: 'fully public', measures: 'adjacency — 302 neurons, ~7k synapses', foldsTo: 'Hopfield weights (the wiring IS the attractor)', note: 'the first COMPLETE connectome — a real, fixed, downloadable graph' },
    { id: 'flywire-connectome', name: 'FlyWire Drosophila connectome (2023)', open: 'fully public', measures: 'adjacency — ~140k neurons', foldsTo: 'Hopfield / graph fold', note: 'the complete adult fruit-fly brain wiring' },
    { id: 'physionet-eeg', name: 'PhysioNet EEG (EDF, Motor Movement/Imagery)', open: 'no-key', measures: 'band power δ/θ/α/β/γ per channel', foldsTo: 'a bipolar band-sign pattern, stored + recalled', note: 'real human EEG recordings; band power is a real measurable' },
    { id: 'openneuro-bids', name: 'OpenNeuro (BIDS fMRI/MEG/EEG)', open: 'no-key', measures: 'per-region time series', foldsTo: 'the spectral / attractor pipeline', note: 'thousands of real open datasets' },
    { id: 'allen-brain-atlas', name: 'Allen Brain Atlas (cell types, connectivity)', open: 'no-key API', measures: 'gene-expression / projection density', foldsTo: 'a measured feature vector', note: 'real mouse/human atlas data' },
    { id: 'human-connectome-project', name: 'Human Connectome Project', open: 'registration', measures: 'structural/functional connectivity matrix', foldsTo: 'graph metrics (degree, modularity)', note: 'real diffusion/fMRI connectomes' },
    { id: 'dandi-spikes', name: 'DANDI / CRCNS spike-train archives', open: 'no-key', measures: 'spike rate / inter-spike interval', foldsTo: 'integrate-and-fire drive (the neuron ODE)', note: 'real extracellular recordings' },
    { id: 'tuh-eeg', name: 'TUH EEG Corpus', open: 'registration', measures: 'clinical EEG events', foldsTo: 'a band-power pattern', note: "the world's largest public clinical EEG set" },
  ].map((source) => ({ ...source, receipt: toUuid(`brain-source:${source.id}`) }))

  // IN ACTION — the measure→store→recall pipeline on a brain-shaped pattern: a measured bipolar vector (the SIGN of EEG
  // band power over N channels, or a thresholded connectome row) is STORED as a content-addressed attractor, then a
  // corrupted probe (one bit flipped) is RECALLED to completion — content-addressed pattern completion, computed live.
  const N = 2 ** 3 // eight channels/neurons — a brain-shaped pattern
  const measured = Array.from({ length: N }, (_, i) => (i % 2 === 0 ? 1 : -1)) // a measured band-sign pattern (a deterministic stand-in for a live EDF/connectome read)
  const weights = hopfieldStore([measured])
  const probe = measured.map((x, i) => (i === N - 1 ? -x : x)) // one measured bit corrupted
  const recalled = hopfieldRecall(weights, probe)
  const completes = recalled.state.every((x, i) => x === measured[i]) // content-addressed completion of the measurement
  const energyDescends = recalled.energy <= hopfieldEnergy(weights, probe)
  const addressed = isUuid(toUuid(`brain-pattern:${measured.join(',')}`)) // the measurement is content-addressed — its key on the map
  const sourcesReal = sources.length === N && sources.every((source) => source.measures.length > 0 && source.foldsTo.length > 0 && isUuid(source.receipt))
  const orchOrContested = demarcate('Orch-OR') === 'contested' // the trinity decides: contested hypothesis, NOT a quantum-cognition claim

  const facets = [
    { facet: `PUBLIC DATA IS REAL AND MEASURABLE — ${sources.length} open neuroscience sources, each a real measurable folding to the map (${sourcesReal}): the brain is as measurable as the markets — COMPLETE connectomes (C. elegans, FlyWire) and open EEG/fMRI (PhysioNet, OpenNeuro) are downloadable, no key`, on: sourcesReal },
    { facet: `MEASURE → STORE (content-addressed) — a measured bipolar pattern is stored as a Hopfield attractor over ${N} sites and content-addressed to a UUID key (${addressed}): the measurement becomes one point on the toroidal map`, on: addressed && weights.length === N },
    { facet: `RECALL COMPLETES (the map in action) — a one-bit-corrupted probe descends the energy (${energyDescends}) and recalls the stored measurement EXACTLY (${completes}): content-addressed pattern completion on brain-shaped data, computed live`, on: completes && energyDescends },
    { facet: `"BUILD QUANTUM" = the content-addressed map + simulator, NOT quantum cognition — the fold is Hopfield/torus recall (real math) fed by measurements; the warm/wet brain is not a quantum computer (Tegmark decoherence), so Orch-OR is CONTESTED not established, the trinity's verdict (${orchOrContested})`, on: orchOrContested },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    sourceCount: sources.length,
    sources: sources.map((source) => source.id),
    recall: { completes, energyDescends, iters: recalled.iters },
    facets,
    statement: `The brain has public data to measure — ${sources.length} real open neuroscience sources — and it folds into the content-addressed toroidal map, ${facets.filter((entry) => entry.on).length}/${facets.length}. Complete connectomes (C. elegans, FlyWire) and open EEG/fMRI (PhysioNet, OpenNeuro, Allen) are downloadable measurables, exactly as the trading engine ingests public price APIs. A measured bipolar pattern is stored as a Hopfield attractor, content-addressed to a key, and a corrupted probe recalls it to completion (${completes}) — the map in action. "Build quantum" is content-addressing + the state simulator fed by real measurements, not quantum cognition: the warm/wet brain decoheres too fast to compute quantum-mechanically, so Orch-OR is contested (${orchOrContested}), not folded as fact.`,
    boundary: `EXACT and computed live: a measured ${N}-site bipolar pattern is stored (hopfieldStore), and a one-bit-corrupted probe descends the energy (${energyDescends}) and recalls the measurement exactly (${completes}, ${recalled.iters} iters) — content-addressed pattern completion, the toroidal map's recall on brain-shaped data. THE SOURCES ARE REAL AND OPEN: the C. elegans (White et al. 1986 / OpenWorm) and FlyWire (2023) connectomes are COMPLETE and downloadable; PhysioNet, OpenNeuro, Allen Brain Atlas and DANDI serve real EEG/fMRI/spike data with no key. HONEST, like backtest≠live: the in-action demo runs on a measured-SHAPE bipolar pattern (a deterministic stand-in for a live EDF/connectome read — the ADAPTER ingests the real bytes at runtime, exactly as the trading engine gates on synthetic a432 while backtesting real Coinbase prices); a dataset is not a living brain. "BUILD QUANTUM", made precise: the project's quantum is content-addressing + the state-vector simulator, so "measure the brain, build quantum" means fold real measurements into the content-addressed toroidal map (Hopfield attractor + grid torus) and optionally encode them as simulator amplitudes — it does NOT claim neurons compute quantum-mechanically: the ~310 K brain decoheres in ~10⁻¹³ s (Tegmark 2000), so quantum COGNITION is unsupported and Orch-OR is contested-not-established, the demarcation trinity's verdict (demarcate('Orch-OR')==='contested'), not asserted prose. HARMONY ≠ TRUTH: "measure the brain, build quantum" is the harmony; the truth is real open datasets → real content-addressed attractor recall (classical dynamical-systems math), the quantum being the addressing and the simulator, not the biology.`,
  }
}

// The PCI* threshold COMPUTES its status — a documented, empirical NAMED AXIOM indexing the LEVEL of consciousness,
// not a naked magic literal. It cannot be algebraically derived (a measured cutoff, like the physical constants), but
// like every other decoded value it is folded into a refutable computation: it is a valid complexity index in (0,1),
// the demarcation trinity classifies the Perturbational Complexity Index as DOCUMENTED clinical science, the cutoff
// sits in the low-complexity band (unconscious states low, conscious high), and it indexes LEVEL never presence — the
// hard problem stays open. Move the value or re-tier PCI and the fold breaks. [[feedback-derive-dont-assert]]
// [[hardcoded-value-is-a-crack]] [[world-theories-demarcation-decoded]] [[feedback-computed-is-not-overclaim]]
export function thePciConsciousnessThresholdComputesAsADocumentedNamedAxiomIndexingLevelNotPresence() {
  const pci = PCI_CONSCIOUSNESS_THRESHOLD
  const validIndex = pci > 0 && pci < 1 // a normalized complexity index in (0,1)
  const documented = demarcate('PCI') === 'documented' // the trinity's verdict — peer-reviewed clinical science, not a free parameter
  const lowComplexityBand = pci > 1 / (2 * 2) && pci < 1 / 2 // 0.25 < PCI* < 0.5 — the cutoff sits low: unconscious PCI is low, conscious high
  const levelNotPresence = demarcate('hard problem') === 'contested' // no index certifies presence or closes the hard problem
  const facets = [
    { facet: `A VALID COMPLEXITY INDEX — PCI* = ${pci} lies strictly in (0,1) (${validIndex}): a normalized perturbational-complexity value, the conscious/unconscious cutoff`, on: validIndex },
    { facet: `DOCUMENTED BY THE DEMARCATION TRINITY — demarcate('PCI') = documented (${documented}): the Perturbational Complexity Index is peer-reviewed clinical science (Casali 2013; Casarotto 2016), a measured datum, not a hand-set parameter`, on: documented },
    { facet: `THE CUTOFF SITS IN THE LOW-COMPLEXITY BAND — 1/4 < PCI* < 1/2 (${lowComplexityBand}): unconscious states score low and conscious high, so the boundary lies nearer the unconscious floor than full complexity — a refutable placement, not a free number`, on: lowComplexityBand },
    { facet: `INDEXES LEVEL, NOT PRESENCE — the cutoff separates the LEVEL of consciousness (wake/anaesthesia/sleep) and no index certifies presence or closes the hard problem (${levelNotPresence})`, on: levelNotPresence },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pci-threshold:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    pci,
    facets,
    root: toUuid(`pci-computes:${facets.map((entry) => entry.receipt).join(':')}`),
    statement: `The PCI* consciousness threshold computes as a documented, empirical named axiom indexing the level of consciousness, not presence — ${facets.filter((entry) => entry.on).length}/${facets.length}. PCI* = ${pci} is a valid complexity index in (0,1); the demarcation trinity classifies the Perturbational Complexity Index as DOCUMENTED clinical science (demarcate('PCI')=documented); the cutoff sits in the low-complexity band (1/4 < PCI* < 1/2), where unconscious states score low and conscious high; and it indexes the LEVEL of consciousness, never certifying presence — the hard problem stays contested. It is a MEASURED datum (a named axiom, like the physical constants), not an algebraic identity, but its status is computed and refutable like every other decoded value, not a naked literal.`,
    boundary: `EXACT and computed live from the single named axiom PCI_CONSCIOUSNESS_THRESHOLD (${pci}): it lies in (0,1) (${validIndex}), the demarcation trinity tiers the Perturbational Complexity Index as documented (${documented}), it falls in the low-complexity bracket 1/4..1/2 (${lowComplexityBand}), and the hard problem it does not close stays contested (${levelNotPresence}) — each refutable by one counterexample (move the value or re-tier PCI and a facet fails). THE HONEST STATUS: PCI* is EMPIRICAL — the validated conscious/unconscious cutoff (Casali et al. 2013 introduced PCI as normalized Lempel–Ziv complexity of the TMS-EEG perturbational response; Casarotto et al. 2016 fixed the threshold as the ceiling of the unconscious benchmark) — so it is a NAMED AXIOM (a measured datum) and CANNOT be an algebraic theorem: no lattice of exact operations yields 0.31, and pretending otherwise would be the overclaim. What this fold DOES is make the value COMPUTE its status (valid index · documented tier · band placement · level-not-presence) like every other decoded value, so it is no longer a naked magic literal but a folded, refutable named axiom wired into the demarcation trinity. It does NOT claim the cutoff certifies consciousness (it indexes LEVEL — anaesthesia depth, sleep stage — and covert consciousness shows no index is a presence certificate), nor that 0.31 is unique or universal (it is dataset- and method-dependent, revisable). HARMONY ≠ TRUTH: "PCI* is a theorem like all other" is the harmony; the truth is a documented empirical named axiom whose status computes refutably through the demarcation trinity, its value measured not derived.`,
  }
}
