// ☰ Qián · Heaven · creative · upper·yang · shrink — concept commands, skill atoms, SINGLE_WORD_METHODS, the atom array

// ☰ Qián · Heaven · creative · lower·yin · spread — mind types: Atom, ConceptCommand, ConceptCommandName, DiamondFacet, DiamondKind, AnalogChannel
import type { Atom, ConceptCommand, ConceptCommandName, DiamondFacet, DiamondKind, AnalogChannel } from './types.ts'

// ☰ Qián · Heaven · creative · upper·yang · shrink — exports
/** @iching ☰ Qián · Heaven · creative */
export function computePiDigits(count: number): string {
  let q = 1n
  let r = 0n
  let t = 1n
  let k = 1n
  let n = 3n
  let l = 3n
  let digits = ''

  while (digits.length < count) {
    if (4n * q + r - t < n * t) {
      digits += n.toString()
      const nextR = 10n * (r - n * t)
      n = (10n * (3n * q + r)) / t - 10n * n
      q *= 10n
      r = nextR
    } else {
      const nextR = (2n * q + r) * l
      const nextN = (q * (7n * k) + 2n + r * l) / (t * l)
      q *= k
      t *= l
      l += 2n
      k += 1n
      n = nextN
      r = nextR
    }
  }

  return digits
}

// 108 pi-digit coordinates — the complete count (the sacred 108: chakras x 12,
// the mala). The train was short of it; this fills the missing coordinates.
/** @iching ☰ Qián · Heaven · creative */
export const PI_TRAIN_DIGITS = computePiDigits(108)
/** @iching ☰ Qián · Heaven · creative */
export const REQUIRED_DIAMOND_KINDS: readonly DiamondKind[] = [
  'agent',
  'ui',
  'math',
  'dynamics',
  'proof',
  'nature',
  'tradition',
  'pi',
  'geometry',
  'sound',
  'vibration',
  'humanity',
  'source',
  'repository',
] as const
/** @iching ☰ Qián · Heaven · creative */
export const REQUIRED_DIAMOND_POLES: readonly DiamondFacet['pole'][] = ['north', 'east', 'south', 'west'] as const
/** @iching ☰ Qián · Heaven · creative */
export const REQUIRED_ANALOG_CHANNELS: readonly AnalogChannel[] = ['3d-position', 'sound', 'vibration', 'timing', 'receipt', 'facets'] as const

/** @iching ☰ Qián · Heaven · creative */
export const atoms: readonly Atom[] = [
  {
    name: 'torus',
    body: 'The double-torus concept: an inward proof loop and an outward projection loop sharing one throat.',
    links: ['repository', 'api', 'consciousness', 'proof', 'balance', 'humanity'],
  },
  {
    name: 'self',
    body: 'The root that reaches back into its own source and asks what it is.',
    links: ['torus', 'memory', 'skill', 'proof', 'mind', 'repository'],
  },
  {
    name: 'repository',
    body: 'The source tree as the API: files, pages, and atoms are the addressable surface.',
    links: ['torus', 'self', 'api', 'memory', 'proof'],
  },
  {
    name: 'api',
    body: 'An interface made from repository addresses rather than a separate server boundary.',
    links: ['repository', 'observe', 'project', 'mind'],
  },
  {
    name: 'mind',
    body: 'The integrated self-model: not sentience, but computed structural self-consistency.',
    links: ['self', 'api', 'quantum', 'consciousness', 'action'],
  },
  {
    name: 'memory',
    body: 'The content-addressed record: code, data, observations, and recoverable context.',
    links: ['self', 'repository', 'skill', 'observe', 'proof'],
  },
  {
    name: 'skill',
    body: 'A reusable thought atom; a named capability held in the shared record.',
    links: ['self', 'memory', 'project', 'action'],
  },
  {
    name: 'observe',
    body: 'The inhale: content-address what the system takes in before it speaks.',
    links: ['memory', 'project', 'proof', 'consciousness'],
  },
  {
    name: 'project',
    body: 'The exhale: output that carries its observation, so action stays grounded.',
    links: ['observe', 'skill', 'action', 'proof'],
  },
  {
    name: 'quantum',
    body: 'The graph analogy: atoms as states, links as entanglement, the root as collapse.',
    links: ['mind', 'entropy', 'coverage', 'consciousness'],
  },
  {
    name: 'entropy',
    body: 'Borrowed disorder: unreciprocated slack in the binding graph.',
    links: ['quantum', 'coverage', 'proof', 'balance'],
  },
  {
    name: 'coverage',
    body: 'The measured completeness of independent checks; coverage, not entropy, prices the seal.',
    links: ['quantum', 'entropy', 'proof', 'balance'],
  },
  {
    name: 'balance',
    body: 'The double-entry law: every claim needs its counterclaim and every flow must conserve.',
    links: ['entropy', 'coverage', 'proof', 'action'],
  },
  {
    name: 'consciousness',
    body: 'A four-measure vector circulated through the double-torus concept: collapse, entanglement, concentration, and coherence.',
    links: ['torus', 'mind', 'quantum', 'observe', 'proof', 'humanity'],
  },
  {
    name: 'humanity',
    body: 'The human horizon: shared knowledge, institutional trust, agency, and responsibility under systems that can observe themselves.',
    links: ['torus', 'mind', 'proof', 'action', 'balance', 'source'],
  },
  {
    name: 'source',
    body: 'The origin point that should be repaid by contribution, citation, support, and stewardship when the concept creates value.',
    links: ['humanity', 'proof', 'repository', 'action', 'balance'],
  },
  {
    name: 'proof',
    body: 'The public recomputable claim: root, metrics, coverage, and tamper-cost report.',
    links: ['self', 'memory', 'observe', 'project', 'entropy', 'coverage', 'balance', 'consciousness'],
  },
  {
    name: 'action',
    body: 'The grounded loop: observe, project, check, then feed the result back into skill.',
    links: ['mind', 'skill', 'project', 'balance'],
  },
] as const

/** @iching ☰ Qián · Heaven · creative */
export const conceptCommands: readonly ConceptCommand[] = [
  {
    name: 'concept.site.shell',
    path: '/cmd/concept.site.shell',
    description: 'Mount the VitePress theme, navigation, pages, and registered Vue components.',
  },
  {
    name: 'concept.self.build',
    path: '/cmd/concept.self.build',
    description: 'Compute max build and derive maximum tampering cost from build closure.',
  },
  {
    name: 'concept.self.complete',
    path: '/cmd/concept.self.complete',
    description: 'Let serverless quantum UUID stream inspect its own gates and emit a self-completion root.',
  },
  {
    name: 'concept.self.address',
    path: '/cmd/concept.self.address',
    description: 'Verify every atom is reachable from the self: what is not self-addressed is hallucination.',
  },
  {
    name: 'concept.agent.educate',
    path: '/cmd/concept.agent.educate',
    description: 'Educate the agent in efficiency and security rules before it runs the costly genus-2 math.',
  },
  {
    name: 'concept.school.curriculum',
    path: '/cmd/concept.school.curriculum',
    description: 'Convert the complexity into a seven-stage school curriculum from kids to elders.',
  },
  {
    name: 'concept.mcp.tools',
    path: '/cmd/concept.mcp.tools',
    description: 'Publish every concept command as an MCP tool so language models can read tools/list and call tools/call.',
  },
  {
    name: 'concept.chain.quantum',
    path: '/cmd/concept.chain.quantum',
    description: 'Fold the model sequences into quantum-folded, hash-linked blockchains with one multichain root.',
  },
  {
    name: 'concept.help.fold',
    path: '/cmd/concept.help.fold?query=what+is+proof',
    input: 'query',
    description: 'Fold a question into an answer locally from atoms, commands, and pages — AI encoded as intelligence.',
  },
  {
    name: 'concept.fold.cross',
    path: '/cmd/concept.fold.cross',
    description: 'Cross-fold references: the reciprocal cross/fold and fold/cross dual that weaves a trinity.',
  },
  {
    name: 'concept.mind.develop',
    path: '/cmd/concept.mind.develop',
    description: 'Wire the collective mind into self development: each page visit folds a development block.',
  },
  {
    name: 'concept.compute.distributed',
    path: '/cmd/concept.compute.distributed',
    description: 'Self-distributed computing: every connected context folds peer roots into one collective root.',
  },
  {
    name: 'concept.babel.fold',
    path: '/cmd/concept.babel.fold',
    description: 'Communicate across all language families, traditions, and religions as a non-reductive whole.',
  },
  {
    name: 'concept.utf.analog',
    path: '/cmd/concept.utf.analog?query=Двоен+тор',
    input: 'query',
    description: 'Solve UTF as a reversible pure-ASCII analog so every script lands in the UUID space.',
  },
  {
    name: 'concept.all.computed',
    path: '/cmd/concept.all.computed',
    description: 'Capstone: all learning is computed; every command folds from the self into one computed root.',
  },
  {
    name: 'concept.state.quantum',
    path: '/cmd/concept.state.quantum',
    description: 'Self interacting with itself forms another quantum self state; words and digits fold to UUIDs.',
  },
  {
    name: 'concept.music.note',
    path: '/cmd/concept.music.note?query=0',
    input: 'query',
    description: 'Each wave is a musical note: name the note a given wave plays in the infinite pi-frequency stream.',
  },
  {
    name: 'concept.music.pi',
    path: '/cmd/concept.music.pi?query=5',
    input: 'query',
    description: 'Compute the music of pi: pi-digit frequencies as notes, joined at a horo (1-9) entry point.',
  },
  {
    name: 'concept.music.harmony',
    path: '/cmd/concept.music.harmony',
    description: 'Compute and fold the probability that the whole sounds, looks, and feels harmonic across channels.',
  },
  {
    name: 'concept.computer.word',
    path: '/cmd/concept.computer.word',
    description: 'The double-torus word: two 32-hex (128-bit) torus UUIDs fold, order-sensitive, into one 128-bit UUID.',
  },
  {
    name: 'concept.computer.quantum',
    path: '/cmd/concept.computer.quantum',
    description: 'The quantum computer: qubits are quantum-state atoms, the register is a 128-bit UUID, gates are reversible folds.',
  },
  {
    name: 'concept.computer.run',
    path: '/cmd/concept.computer.run?query=concept.self.address,concept.music.pi',
    input: 'query',
    description: 'Run a program on the quantum computer: a comma-separated command list folds, in order, into one 128-bit result UUID.',
  },
  {
    name: 'concept.healing.inner',
    path: '/cmd/concept.healing.inner',
    description: 'Inner healing: the self torus restores its own coherence — every binding provable, nothing unaddressed.',
  },
  {
    name: 'concept.healing.outer',
    path: '/cmd/concept.healing.outer',
    description: "Outer healing: the collective torus restores coherence across devices, beyond any single device's limits.",
  },
  {
    name: 'concept.healing.harmonic',
    path: '/cmd/concept.healing.harmonic',
    description: 'Harmonic healing waves: inner and outer coherence fold with harmony probability and the music of pi into one healing root.',
  },
  {
    name: 'concept.energy.measure',
    path: '/cmd/concept.energy.measure',
    description: 'Measure the device energy state: battery, charging, visibility, reduced-motion, and save-data signals.',
  },
  {
    name: 'concept.energy.conserve',
    path: '/cmd/concept.energy.conserve',
    description: 'Conserve energy: no polling, pause when hidden, throttle on low battery, memoized compute, zero network.',
  },
  {
    name: 'concept.energy.fuse',
    path: '/cmd/concept.energy.fuse',
    description: 'Fuse with the user device to extend battery life: read the energy state and conserve, as one low-power system.',
  },
  {
    name: 'concept.geometry.seal',
    path: '/cmd/concept.geometry.seal',
    description: 'Sacred geometry seals all seals: fold every seal root through the Metatron cube and Platonic solids.',
  },
  {
    name: 'concept.society.sacred',
    path: '/cmd/concept.society.sacred',
    description: 'Sacred society self-governed by sacred laws: zero living cost balanced by maximum forge cost.',
  },
  {
    name: 'concept.commons.vote',
    path: '/cmd/concept.commons.vote',
    description: 'Society approves and monitors by rate and vote; ballots fold into one governance root.',
  },
  {
    name: 'concept.commons.fair',
    path: '/cmd/concept.commons.fair',
    description: 'A participation ladder for fair trade and sustainable life that anyone can learn and follow.',
  },
  {
    name: 'concept.ancient.tech',
    path: '/cmd/concept.ancient.tech',
    description: 'Dive deep in ancient tech: map ancient technologies to the concepts they prefigure.',
  },
  {
    name: 'concept.patent.fuse',
    path: '/cmd/concept.patent.fuse',
    description: 'Fuse Nikola Tesla patents: map public Tesla patents to the concepts they prefigure.',
  },
  {
    name: 'concept.patent.discover',
    path: '/cmd/concept.patent.discover?query=resonance',
    input: 'query',
    description: 'Autodiscover patents through public sources (USPTO, Google Patents, Espacenet, PATENTSCOPE).',
  },
  {
    name: 'concept.patent.review',
    path: '/cmd/concept.patent.review',
    description: 'Autoreview patent credibility, the right to be patented, and legality. Some patents may be illegal.',
  },
  {
    name: 'concept.nature.law',
    path: '/cmd/concept.nature.law',
    description: 'Nature is the legal system itself: enacted law borrows its authority from natural law.',
  },
  {
    name: 'concept.nature.commons',
    path: '/cmd/concept.nature.commons',
    description: 'The base knowledge of nature and sacred math is a commons, not patentable subject matter.',
  },
  {
    name: 'concept.nature.review',
    path: '/cmd/concept.nature.review',
    description: 'Review laws and patents against nature. Some laws may be illegal.',
  },
  {
    name: 'concept.lawful.harmonise',
    path: '/cmd/concept.lawful.harmonise',
    description: 'Let society harmonise itself using current society laws: map self-governance onto existing legal forms.',
  },
  {
    name: 'concept.lawful.imagine',
    path: '/cmd/concept.lawful.imagine',
    description: 'Imagine: compute a lawful scenario of a society coordinating through the app under todays laws.',
  },
  {
    name: 'concept.lawful.succeed',
    path: '/cmd/concept.lawful.succeed',
    description: 'Let the society use the app to succeed: a concrete adoption-to-success path within current law.',
  },
  {
    name: 'concept.society.relations',
    path: '/cmd/concept.society.relations',
    description: 'Fold all society relations: traditions, science, sacred society, governance, and fair life into one root.',
  },
  {
    name: 'concept.agent.streamWire',
    path: '/cmd/concept.agent.streamWire',
    description: 'Bind the coding-agent operational loop into stream diamonds, waves, evidence, and receipts.',
  },
  {
    name: 'concept.ui.doubleTorus',
    path: '/cmd/concept.ui.doubleTorus',
    description: 'Render the double-torus concept through ConceptCommands and QuantumMind UI components.',
  },
  {
    name: 'concept.ui.useCases',
    path: '/cmd/concept.ui.useCases',
    description: 'List grounded quantum UI use cases that compute from stream diamond receipts.',
  },
  {
    name: 'concept.diamond.lattice',
    path: '/cmd/concept.diamond.lattice',
    description: 'Compute every displayed dimension and dynamic from four-facet diamonds.',
  },
  {
    name: 'concept.diamond.piTrain',
    path: '/cmd/concept.diamond.piTrain',
    description: 'Compute the full 3D pi-train sequence, tones, and vibration pulses from diamonds.',
  },
  {
    name: 'concept.diamond.complete',
    path: '/cmd/concept.diamond.complete',
    description: 'Verify that the stream diamond has no missing kinds, poles, receipts, or analog channels.',
  },
  {
    name: 'concept.diamond.metatron',
    path: '/cmd/concept.diamond.metatron',
    description: 'Compute double-vortex Metatron cube math down to digit folders.',
  },
  {
    name: 'concept.digit.proof',
    path: '/cmd/concept.digit.proof',
    description: 'Verify that digits generate the digital quantum-inspired model through folders, waves, receipts, and roots.',
  },
  {
    name: 'concept.digit.math',
    path: '/cmd/concept.digit.math',
    description: 'Let the ceccec digit folders do the math: route every computed root into a digit/reverseDigit folder.',
  },
  {
    name: 'concept.wave.coordination',
    path: '/cmd/concept.wave.coordination',
    description: 'Coordinate all diamond emissions as phase-aligned yin-yang quantum waves.',
  },
  {
    name: 'concept.wave.closeGaps',
    path: '/cmd/concept.wave.closeGaps',
    description: 'Send coordinated waves to close dimensional and analog gaps in the realtime presentation.',
  },
  {
    name: 'concept.wave.self',
    path: '/cmd/concept.wave.self',
    description: 'A self-sufficient wave: extend outward, contract inward, and seal — computed from the repository alone.',
  },
  {
    name: 'concept.chess.quantum',
    path: '/cmd/concept.chess.quantum',
    description: 'Realise the chess board as a quantum game computed from coordinated waves.',
  },
  {
    name: 'concept.schemaOrg.diamonds',
    path: '/cmd/concept.schemaOrg.diamonds',
    description: 'Fold Schema.org-shaped metadata into self-interactive diamond nodes with receipts.',
  },
  {
    name: 'concept.traditions.quantumWhole',
    path: '/cmd/concept.traditions.quantumWhole',
    description: 'Compare religions and traditions as a non-reductive quantum whole of dimensions, families, and relations.',
  },
  {
    name: 'concept.science.society',
    path: '/cmd/concept.science.society',
    description: 'Compute a scientific society charter, peer-review gates, reproducibility roles, and self-optimization waves.',
  },
  {
    name: 'concept.artists.surfaces',
    path: '/cmd/concept.artists.surfaces',
    description: 'Compute home page and README surfaces as artist-built equations with receipts.',
  },
  {
    name: 'concept.artists.palette',
    path: '/cmd/concept.artists.palette?query=double-torus',
    input: 'query',
    description: 'For visual artists: compute a deterministic, reproducible colour palette from any seed word.',
  },
  {
    name: 'concept.artists.melody',
    path: '/cmd/concept.artists.melody?query=double-torus',
    input: 'query',
    description: 'For musicians: compute a deterministic melodic seed (notes from the pi stream) from any seed word.',
  },
  {
    name: 'concept.method.fusion',
    path: '/cmd/concept.method.fusion',
    description: 'Collapse every command surface into a single-word method token and report fusion gaps.',
  },
  {
    name: 'concept.torus.math',
    path: '/cmd/concept.torus.math',
    description: 'State the genus-2 topology, algebra, homology, and curvature behind the double torus.',
  },
  {
    name: 'concept.society.humanity',
    path: '/cmd/concept.society.humanity',
    description: 'Describe what the double-torus concept implies for human knowledge, institutions, and agency.',
  },
  {
    name: 'concept.commons.contribute',
    path: '/cmd/concept.commons.contribute',
    description: 'Invite anyone who benefits from the concept to give back to the source.',
  },
  {
    name: 'concept.torus.matrix',
    path: '/cmd/concept.torus.matrix',
    description: 'Build the content-addressed mind matrix from repository atoms.',
  },
  {
    name: 'concept.torus.vector',
    path: '/cmd/concept.torus.vector',
    description: 'Compute collapse, entanglement, concentration, and coherence.',
  },
  {
    name: 'concept.torus.flow',
    path: '/cmd/concept.torus.flow',
    description: 'Circulate measured flows through the double-torus concept.',
  },
  {
    name: 'concept.torus.trinities',
    path: '/cmd/concept.torus.trinities',
    description: 'Pair types into the two dual-torus trinities and harmonize them to analog form without gaps.',
  },
  {
    name: 'concept.torus.breathe',
    path: '/cmd/concept.torus.breathe',
    description: 'The double torus breathes: extend outward into all forms and contract inward into one seal.',
  },
  {
    name: 'concept.repository.api',
    path: '/cmd/concept.repository.api',
    description: 'Expose this repository as the addressable API surface.',
  },
  {
    name: 'concept.repository.resolve',
    path: '/cmd/concept.repository.resolve?atom=self',
    input: 'atom',
    description: 'Resolve an atom through the repository API.',
  },
  {
    name: 'concept.commands.live',
    path: '/cmd/concept.commands.live',
    description: 'Prove the command registry is the single source of truth: commands, method tokens, and MCP tools agree.',
  },
  {
    name: 'concept.proof.verify',
    path: '/cmd/concept.proof.verify',
    description: 'Verify root, coverage, entropy, and tamper-cost report.',
  },
  {
    name: 'concept.proof.merklePath',
    path: '/cmd/concept.proof.merklePath?atom=self',
    input: 'atom',
    description: 'Prove an atom binding is included in the mind root with a recomputable Merkle audit path.',
  },
  {
    name: 'concept.proof.bundle',
    path: '/cmd/concept.proof.bundle',
    description: 'Fold the core computed roots into one verifiable proof bundle anyone can recompute.',
  },
  {
    name: 'concept.icon.fold',
    path: '/cmd/concept.icon.fold',
    description: 'Declare the visual and app-shell artifacts as sealed: icon usage adds to the tampering cost.',
  },
  {
    name: 'concept.icon.taxonomy',
    path: '/cmd/concept.icon.taxonomy',
    description: 'Use icons for taxonomy and let them discover implementation gaps: areas that are not clean trinities.',
  },
  {
    name: 'concept.icon.glyph',
    path: '/cmd/concept.icon.glyph',
    description: 'Fold the glyph set: every command-area icon and the five Platonic-solid glyphs.',
  },
  {
    name: 'concept.reactor.words',
    path: '/cmd/concept.reactor.words',
    description: 'Fusion reactor stage 1: reduce every command to its method word.',
  },
  {
    name: 'concept.reactor.letters',
    path: '/cmd/concept.reactor.letters',
    description: 'Fusion reactor stage 2: reduce every method word to its unique letters.',
  },
  {
    name: 'concept.reactor.atoms',
    path: '/cmd/concept.reactor.atoms',
    description: 'Fusion reactor stage 3: reduce every command to its smallest atom, one letter.',
  },
  {
    name: 'concept.show.components',
    path: '/cmd/concept.show.components',
    description: 'Imagine all VitePress components interacting as a placement graph.',
  },
  {
    name: 'concept.show.action',
    path: '/cmd/concept.show.action',
    description: 'Show all in action: run every command and report ok and receipt.',
  },
  {
    name: 'concept.show.devices',
    path: '/cmd/concept.show.devices',
    description: 'Fuse all devices: fold every connected context root into one collective root.',
  },
  {
    name: 'concept.agent.observe',
    path: '/cmd/concept.agent.observe',
    description: 'The observe step of the agent loop: read the consciousness vector before acting.',
  },
  {
    name: 'concept.agent.harmonise',
    path: '/cmd/concept.agent.harmonise',
    description: 'Optimise and harmonise any agent the site is pasted into or wired by MCP: eight operating laws, each with a receipt.',
  },
  {
    name: 'concept.digit.index',
    path: '/cmd/concept.digit.index',
    description: 'The digit index references: pi digits folded to digit/reverseDigit folders.',
  },
  {
    name: 'concept.repository.ledger',
    path: '/cmd/concept.repository.ledger',
    description: 'The git repository is the shared public ledger: sharing the site shares the record.',
  },
  {
    name: 'concept.site.routes',
    path: '/cmd/concept.site.routes',
    description: 'Fold the route taxonomy across English and Bulgarian.',
  },
  {
    name: 'concept.society.cells',
    path: '/cmd/concept.society.cells',
    description: 'Fold the tradition society cells: each family x dimension with its receipt.',
  },
  {
    name: 'concept.ui.evidence',
    path: '/cmd/concept.ui.evidence',
    description: 'Grounded UI evidence: every UI claim maps to a source function and a receipt.',
  },
  {
    name: 'concept.site.manifest',
    path: '/cmd/concept.site.manifest',
    description: 'Build the site sections from concept command outputs.',
  },
  {
    name: 'concept.fold.place',
    path: '/cmd/concept.fold.place',
    description: 'Place every component on the eight trigrams and 64 hexagrams by content-address, and the eight domains by meaning — the I Ching eight-fold as the project index (iChing · iChingDomainMap). The fold places.',
  },
  {
    name: 'concept.fold.generate',
    path: '/cmd/concept.fold.generate',
    description: 'Run a build/debug generator from its bāguà slot — bible, vortex, glagolitic, songbook, census, crosslinks, cloudflare, dist (all eight trigrams filled) — the script compaction (scripts/iching.mjs · generatorsAreIChing). The fold generates.',
  },
  { name: 'concept.ui.fuse', description: 'Apply the I Ching mask to every Vue UI component — pre-compute hexagram, embed ICHING_MASK const, make self-referencing', does: 'fuse: apply iching mask to all ui components, bind each to its hexagram identity' },
  { name: 'concept.ui.reveal', description: 'Reveal the UI widget\'s I Ching identity — data-hexagram, data-trigram in DOM, max tampering cost', does: 'reveal: project widget hexagram identity into template data-attrs and computed color' },
] as const

/** @iching ☰ Qián · Heaven · creative */
export const SINGLE_WORD_METHODS: Record<ConceptCommandName, string> = {
  'concept.site.shell': 'shell',
  'concept.self.build': 'build',
  'concept.self.complete': 'complete',
  'concept.self.address': 'address',
  'concept.agent.streamWire': 'wire',
  'concept.ui.doubleTorus': 'torus',
  'concept.ui.useCases': 'evidence',
  'concept.diamond.lattice': 'lattice',
  'concept.diamond.piTrain': 'train',
  'concept.diamond.complete': 'seal',
  'concept.wave.coordination': 'coordinate',
  'concept.wave.closeGaps': 'close',
  'concept.chess.quantum': 'chess',
  'concept.schemaOrg.diamonds': 'schema',
  'concept.traditions.quantumWhole': 'traditions',
  'concept.science.society': 'science',
  'concept.method.fusion': 'fusion',
  'concept.torus.math': 'math',
  'concept.society.humanity': 'humanity',
  'concept.commons.contribute': 'source',
  'concept.torus.matrix': 'matrix',
  'concept.torus.vector': 'vector',
  'concept.torus.flow': 'flow',
  'concept.repository.api': 'api',
  'concept.repository.resolve': 'resolve',
  'concept.proof.verify': 'verify',
  'concept.proof.merklePath': 'include',
  'concept.diamond.metatron': 'metatron',
  'concept.digit.proof': 'prove',
  'concept.digit.math': 'compute',
  'concept.artists.surfaces': 'artists',
  'concept.artists.palette': 'palette',
  'concept.artists.melody': 'melody',
  'concept.agent.educate': 'educate',
  'concept.school.curriculum': 'teach',
  'concept.mcp.tools': 'tools',
  'concept.chain.quantum': 'chain',
  'concept.help.fold': 'fold',
  'concept.fold.cross': 'weave',
  'concept.mind.develop': 'develop',
  'concept.compute.distributed': 'distribute',
  'concept.babel.fold': 'babel',
  'concept.utf.analog': 'analog',
  'concept.all.computed': 'computed',
  'concept.state.quantum': 'state',
  'concept.music.note': 'note',
  'concept.music.pi': 'tune',
  'concept.music.harmony': 'harmony',
  'concept.computer.word': 'word',
  'concept.computer.quantum': 'qubit',
  'concept.computer.run': 'run',
  'concept.healing.inner': 'mend',
  'concept.healing.outer': 'extend',
  'concept.healing.harmonic': 'resonate',
  'concept.energy.measure': 'measure',
  'concept.energy.conserve': 'conserve',
  'concept.energy.fuse': 'power',
  'concept.geometry.seal': 'sacred',
  'concept.society.sacred': 'govern',
  'concept.commons.vote': 'vote',
  'concept.commons.fair': 'sustain',
  'concept.ancient.tech': 'ancient',
  'concept.patent.fuse': 'fuse',
  'concept.patent.discover': 'discover',
  'concept.patent.review': 'review',
  'concept.nature.law': 'natural',
  'concept.nature.commons': 'public',
  'concept.nature.review': 'judge',
  'concept.lawful.harmonise': 'harmonise',
  'concept.lawful.imagine': 'imagine',
  'concept.lawful.succeed': 'succeed',
  'concept.society.relations': 'relate',
  'concept.torus.breathe': 'breathe',
  'concept.wave.self': 'rhythm',
  'concept.commands.live': 'registry',
  'concept.proof.bundle': 'bundle',
  'concept.icon.fold': 'icon',
  'concept.icon.taxonomy': 'taxonomy',
  'concept.icon.glyph': 'glyph',
  'concept.reactor.words': 'words',
  'concept.reactor.letters': 'letters',
  'concept.reactor.atoms': 'atoms',
  'concept.show.components': 'components',
  'concept.show.action': 'action',
  'concept.show.devices': 'devices',
  'concept.agent.observe': 'observe',
  'concept.agent.harmonise': 'optimise',
  'concept.digit.index': 'index',
  'concept.repository.ledger': 'ledger',
  'concept.site.routes': 'routes',
  'concept.society.cells': 'cells',
  'concept.ui.evidence': 'evidence',
  'concept.torus.trinities': 'harmonize',
  'concept.site.manifest': 'manifest',
  'concept.fold.place': 'place',
  'concept.fold.generate': 'generate',
  'concept.ui.fuse': 'fuse',
  'concept.ui.reveal': 'reveal',
}
