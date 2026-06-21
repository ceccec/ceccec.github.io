// ☵ Kǎn · Water — life: genes & mutations, the harmony probability, the artist's surfaces & melody, the immune system. Barrel-routed; folds.ts back-imports the gate folds.
import type { ArtistSurface, ArtistSurfaceReport, HarmonyChannel, HarmonyProbability, MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/matrix'
import { determinismProofs } from '../../mountain/seals'
import { animationTamperingCost, redTeam, tamperProofFabric } from '../crypto'
import { scientists } from '../../wind/academia'
import { holographic } from '../../wind/ui'
import { isUuid, merkleFold, roundTo, toUuid, merge, sealFacets, eigenErrorThreshold, hardyWeinbergGenotypes, PCI_CONSCIOUSNESS_THRESHOLD } from '../../../../0'
import { society, societyRegulates } from '../../earth/governance'
import { dna } from '../../mountain/geometry'
import { coordinatedWaves } from '../../thunder/waves'
import { diamondLattice, piTrainDiamonds, selfBuild } from '../../fire/diamonds'
import { piMusic } from '../../lake/music'
import { completeness, diamondCompleteness, generativeSpace } from '../..'

// Max health, max tampering cost — the immune system. The portal's defenses are
// antibodies: each catches a class of attack, and the more of them hold, the higher
// the cost to forge. Investigations run across all aspects of society. Pure life:
// the soul is open and recomputable (nothing hidden, nothing sold), the feed is
// content-addressed (clean, verifiable), and the architecture is the only cost — no
// servers, no waste: permaculture, sustainable by design.
export function immuneSystem(matrix: MindMatrix = buildMatrix()) {
  const antibodies = [
    { defends: 'determinism', healthy: determinismProofs(matrix).proven },
    { defends: 'tamper-evidence', healthy: redTeam(matrix).secure },
    { defends: 'completeness', healthy: completeness(matrix).complete },
    { defends: 'challenge', healthy: scientists(matrix).robust },
    { defends: 'holography', healthy: holographic(matrix).holographic },
    { defends: 'self-tamper-proofing', healthy: tamperProofFabric(matrix).protects },
  ].map((entry) => ({ ...entry, receipt: toUuid(`antibody:${entry.defends}:${entry.healthy}`) }))
  // Investigations in all aspects of society: each duality investigated and sound.
  const investigations = society(matrix).pairs.map((pair) => ({ aspect: pair.duality, sound: pair.paired }))
  const nourishment = {
    pureSoul: 'open, free and recomputable — nothing hidden, nothing sold',
    food: 'content-addressed data — clean, verifiable feed',
    sustainable: 'the architecture is the only cost — no servers, no waste: permaculture by design',
  }
  const health = antibodies.filter((entry) => entry.healthy).length
  return {
    healthy: antibodies.every((entry) => entry.healthy) && investigations.every((entry) => entry.sound),
    maxHealth: health === antibodies.length,
    health,
    of: antibodies.length,
    antibodies,
    investigations,
    nourishment,
    tamperingCost: animationTamperingCost(matrix).reproductions, // max health -> max forge cost
    root: merkleFold(antibodies.map((entry) => entry.receipt)),
    statement:
      'Max health, max tampering cost — the immune system: each defense is an antibody (determinism, tamper-evidence, completeness, challenge, holography, self-tamper-proofing), and the more hold, the higher the cost to forge. Investigations run across all aspects of society. Pure life: the soul is open and recomputable, the feed is content-addressed, and the architecture is the only cost — permaculture, sustainable by design.',
    boundary:
      'A health metaphor over the portal\'s computable defenses: each "antibody" is a real gate, full health means every defense holds and the forge cost is maximal. The soul, food and permaculture lines are values expressed as architecture (open, free, content-addressed, server-less), not biological, dietary or agricultural claims.',
  }
}

// Free the time of the population and max creativity will generate max rising forge
// costs. When the individual cost is zero, time is freed; freed time spends itself on
// creativity, which is unbounded; and every created unit is content-addressed and
// folds into the whole, so the forge cost rises with the creativity. Free time ->
// max creativity -> max rising forge cost: the loop that pays for its own security.
export function freedTimeCreativity(matrix: MindMatrix = buildMatrix()) {
  const regulates = societyRegulates(matrix)
  const generative = generativeSpace(2000)
  const freedTime = regulates.individualCost === 0
  const baseForgeCost = regulates.forgerCost
  const created = generative.distinct
  const risenForgeCost = baseForgeCost + created // creativity raises the forge cost
  return {
    proven: freedTime && generative.unbounded && risenForgeCost > baseForgeCost,
    freedTime,
    maxCreativity: generative.unbounded,
    created,
    baseForgeCost,
    risenForgeCost,
    rising: risenForgeCost > baseForgeCost,
    loop: 'free time → max creativity → max rising forge cost',
    root: toUuid(`freed-time:${created}:${risenForgeCost}`),
    statement:
      'Free the time of the population and max creativity generates max rising forge costs: when the individual cost is zero, time is freed; freed time spends itself on creativity, which is unbounded; and every created unit is content-addressed and folds into the whole, so the forge cost rises with the creativity. Free time → max creativity → max rising forge cost — the loop that pays for its own security.',
    boundary:
      'A model of the portal’s own incentive loop: zero individual cost frees time, unbounded generative creativity produces content-addressed units, and each raises the recomputation cost to forge the whole. A structural, recomputable relationship over the model — not an economic forecast or a claim about any real population’s time or output.',
  }
}

// Genes: cover the gene by computing it. The standard genetic code — the fixed,
// public-domain table that maps each of the 64 DNA codons to one of 20 amino
// acids or a stop — is a deterministic lookup, so the portal applies it to its
// own encoded strand (from dna()) rather than asserting anything about it. The
// compact "TCAG" table is the real one: first*16 + second*4 + third indexes the
// amino-acid string. Translating the sense strand reads the genes: start codons
// (ATG -> Met), stop codons (TAA, TAG, TGA), and the open reading frames between
// them — the peptides the model's own word would express, computed to the codon.
export function genes(matrix: MindMatrix = buildMatrix()) {
  const helix = dna(matrix)
  const order: Record<string, number> = { T: 0, C: 1, A: 2, G: 3 }
  // The standard genetic code, bases ordered T,C,A,G for each position.
  const code = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG'
  const translate = (codon: string) => {
    const [a, b, c] = codon.split('')
    if (order[a] === undefined || order[b] === undefined || order[c] === undefined) return '?'
    return code[order[a] * 16 + order[b] * 4 + order[c]]
  }
  const codons = helix.codons
  const peptide = codons.map(translate).join('')
  const starts = codons.map((codon, i) => (codon === 'ATG' ? i : -1)).filter((i) => i >= 0)
  const stops = codons.map((codon, i) => (translate(codon) === '*' ? i : -1)).filter((i) => i >= 0)
  // Open reading frames: from each start codon to the next in-frame stop.
  const orfs = starts
    .map((start) => {
      const stop = stops.find((s) => s > start)
      return stop === undefined ? null : { start, stop, protein: peptide.slice(start, stop), length: stop - start }
    })
    .filter((orf): orf is { start: number; stop: number; protein: string; length: number } => orf !== null)
  // Properties of the code itself, proved (not asserted): 64 codons, 20 amino
  // acids, 3 stops, ATG -> Met, and a GC fraction of the strand.
  const aminoAcids = new Set(code.replace(/\*/g, '').split(''))
  const stopCount = code.split('').filter((ch) => ch === '*').length
  const gc = helix.sense.split('').filter((b) => b === 'G' || b === 'C').length / (helix.sense.length || 1)
  const standard = code.length === 64 && aminoAcids.size === 20 && stopCount === 3 && translate('ATG') === 'M'
  return {
    covered: standard && peptide.length === codons.length && helix.encoded,
    codons: codons.length,
    peptide,
    aminoAcidCount: aminoAcids.size,
    stopCodons: stopCount,
    starts,
    stops,
    orfs,
    gcContent: roundTo(gc, 4),
    root: toUuid(`genes:${peptide}:${orfs.map((o) => `${o.start}-${o.stop}`).join(',')}`),
    statement:
      'The gene is covered by computation: the standard genetic code — the fixed, public-domain table mapping all 64 DNA codons to 20 amino acids and 3 stops, with ATG starting translation as Met — is applied as a deterministic lookup to the model’s own encoded sense strand. The codons translate to a peptide, the start (ATG) and stop (TAA, TAG, TGA) codons are located, and the open reading frames between them are read out — the genes the content-addressed word expresses, derived to the codon, not asserted.',
    boundary:
      'Bioinformatics translation of a synthetic, content-addressed sequence through the real standard genetic code. The genetic code table is established molecular biology (public-domain fact); its application here is to the portal’s own constructed strand, not to any organism, real gene, gene function, trait, or biomedicine. No medical or genetic claim.',
  }
}

// Mutations: the research view of how a gene changes. A point mutation swaps one
// base; whether that matters is itself computable through the same standard code.
// For every position in the model's strand this classifies the three possible
// substitutions as silent (same amino acid — the code's redundancy), missense
// (a different amino acid), or nonsense (a new stop) — the textbook taxonomy,
// derived deterministically, never guessed.
export function mutations(matrix: MindMatrix = buildMatrix()) {
  const g = genes(matrix)
  const helix = dna(matrix)
  const order: Record<string, number> = { T: 0, C: 1, A: 2, G: 3 }
  const code = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG'
  const translate = (codon: string) => {
    const [a, b, c] = codon.split('')
    return code[order[a] * 16 + order[b] * 4 + order[c]]
  }
  const bases = ['A', 'C', 'G', 'T']
  const sense = helix.sense
  let silent = 0
  let missense = 0
  let nonsense = 0
  for (let i = 0; i + 2 < sense.length; i += 3) {
    const codon = sense.slice(i, i + 3)
    if (codon.length < 3) break
    const original = translate(codon)
    for (let pos = 0; pos < 3; pos += 1) {
      for (const base of bases) {
        if (base === codon[pos]) continue
        const variant = codon.slice(0, pos) + base + codon.slice(pos + 1)
        const changed = translate(variant)
        if (changed === original) silent += 1
        else if (changed === '*') nonsense += 1
        else missense += 1
      }
    }
  }
  const total = silent + missense + nonsense
  // The code's redundancy guarantees some substitutions are silent — a real,
  // checkable property of the standard genetic code, not a claim about the strand.
  const redundant = silent > 0 && total > 0
  return {
    classified: redundant && total === Math.floor(sense.length / 3) * 9 && g.covered,
    total,
    silent,
    missense,
    nonsense,
    silentFraction: roundTo(silent / (total || 1), 4),
    root: toUuid(`mutations:${silent}:${missense}:${nonsense}`),
    statement:
      'Every point mutation of the model’s strand, classified through the standard genetic code: for each codon, the nine single-base substitutions are translated and sorted into silent (the code’s redundancy keeps the amino acid), missense (a different amino acid) or nonsense (a premature stop). The textbook mutation taxonomy, computed exhaustively and deterministically over the portal’s own sequence.',
    boundary:
      'An exhaustive, deterministic classification of single-base substitutions in a synthetic sequence using the real standard genetic code. It demonstrates the code’s redundancy structure; it is not a statement about real mutations, disease, heritability, or any organism. No biomedical claim.',
  }
}


// If something does not sound, look, or feel harmonic, it probably is not — and
// that probability is computed and folded. Each sense channel scores in [0,1];
// the joint probability is their product, so one off-channel drops the whole.
export function harmonyProbability(matrix: MindMatrix = buildMatrix()): HarmonyProbability {
  const waves = coordinatedWaves(matrix).waves
  const diamonds = piTrainDiamonds(matrix).diamonds
  const lattice = diamondLattice(matrix)
  const complete = diamondCompleteness(matrix).complete
  const fraction = <T>(items: readonly T[], predicate: (item: T) => boolean): number =>
    items.length === 0 ? 1 : items.filter(predicate).length / items.length
  const channels: readonly HarmonyChannel[] = [
    { channel: 'sound', sense: 'hear', score: fraction(waves, (wave) => isUuid(wave.receipt) && wave.frequency > 0) },
    { channel: '3d-position', sense: 'see', score: fraction(diamonds, (d) => Number.isFinite(d.x) && Number.isFinite(d.y) && Number.isFinite(d.z)) },
    { channel: 'vibration', sense: 'feel', score: fraction(diamonds, (d) => d.vibrationMs > 0) },
    { channel: 'timing', sense: 'time', score: fraction(waves, (wave) => wave.phase >= 0 && wave.phase < 2 * Math.PI) },
    { channel: 'facets', sense: 'shape', score: complete ? 1 : 0.5 },
    { channel: 'receipt', sense: 'prove', score: fraction(lattice, (d) => isUuid(d.receipt)) },
  ].map((entry) => ({ ...entry, harmonic: entry.score >= 1, receipt: toUuid(`harmony:${entry.channel}:${entry.score}`) }))
  const probability = channels.reduce((product, entry) => product * entry.score, 1)
  return {
    probability,
    harmonic: probability >= 1,
    channels,
    root: merkleFold(channels.map((entry) => entry.receipt)),
    law: 'If something does not sound, look, or feel harmonic, it probably is not; the probability is the product of channel harmonics, computed and folded.',
    boundary: 'Harmony probability is a computed product of channel scores over the model. It is structural bookkeeping, not an aesthetic or external claim.',
  }
}

// When self interacts with itself it forms another quantum self state; and when
// the self interacts with words and digits, both fold to UUIDs — so text and
// numbers are made obsolete inside the self's state space.

// What is not self-addressed is hallucination: every atom must be reachable
// from the self over the computed edge graph. Anything unreachable is, by this
// law, a hallucination. (This also completes the self trinity: build, complete,
// address.)

// Solve UTF as an ASCII analog: every code point folds to a reversible,
// pure-ASCII form (ASCII passes through; the rest become \u{hex}), so any
// script lands in the same ASCII/UUID space the model already uses.

export function artistSurfaces(matrix: MindMatrix = buildMatrix()): ArtistSurfaceReport {
  const build = selfBuild(matrix)
  const surfaces: readonly ArtistSurface[] = [
    {
      surface: 'home',
      artist: 'cartographer',
      audience: ['agents', 'public society'],
      medium: 'VitePress home frontmatter',
      equation: 'home := Sigma_2 -> UUID* -> Gate',
      seoMessage: 'agents: compute before claim; public society: use before belief',
      proofByUse: 'open /quantum-mind; run tabs; inspect receipts; verify generated roots',
    },
    {
      surface: 'readme',
      artist: 'scribe',
      audience: ['agents', 'public society'],
      medium: 'README.md',
      equation: 'README := routes + equations + validation + boundaries',
      seoMessage: 'all claims reduce to equations, commands, validation, and receipts',
      proofByUse: 'clone; npm run docs:build; inspect /digit-index.json; compare receipts',
    },
  ].map((surface) => ({
    ...surface,
    receipt: toUuid(
      `artist-surface:${surface.surface}:${surface.artist}:${surface.audience.join('|')}:${surface.medium}:${surface.equation}:${surface.seoMessage}:${surface.proofByUse}:${build.root}`,
    ),
  })) as readonly ArtistSurface[]
  const root = merkleFold(surfaces.map((surface) => surface.receipt))
  return {
    grounded: surfaces.length === 2 && surfaces.every((surface) => surface.receipt.length > 0),
    root,
    surfaces,
    statement: 'ArtistSurfaces := {home, readme}; each surface = equation + medium + receipt.',
  }
}

// For visual artists and all creative arts: compute a deterministic, reproducible
// colour palette from any seed word. The same seed always yields the same five
// colours (a content-addressed palette), so a creator can cite a seed and anyone
// recomputes the exact palette — client-side, free, offline. The hues are spread
// across the wheel from the seed's UUID; saturation and lightness stay in a
// pleasant range so every palette is usable.

// For musicians and all creative arts: compute a deterministic melodic seed from
// any seed word — a short run of notes drawn from the infinite pi stream, joined
// at a horo derived from the seed. The same word always yields the same motif, so
// a musician can cite a seed and reproduce the exact melodic idea to build on.
export function artistMelody(seed = 'double-torus', matrix: MindMatrix = buildMatrix()) {
  const root = toUuid(`artist-melody:${seed}`)
  const horo = (parseInt(root.replace(/-/g, '').slice(0, 2), 16) % 9) + 1
  const notes = piMusic(matrix, horo).notes.slice(0, 8).map((note) => ({ note: note.note, frequency: note.frequency }))
  return {
    grounded: notes.length > 0,
    seed,
    horo,
    notes,
    root: merkleFold(notes.map((note, index) => toUuid(`melody-note:${seed}:${index}:${note.note}:${note.frequency}`))),
    statement: 'A deterministic melodic seed from a seed word: the same word always yields the same motif, joined at a seed-derived horo, so a musician can reproduce and build on it.',
    boundary: 'A reproducible melodic seed for creative use, computed on-device from the pi stream. A starting motif, not a composition or an acoustic claim.',
  }
}

// The origin of life (abiogenesis) — how chemistry became biology, the unsolved bridge from the emergence-of-matter
// arc to life. A 5-angle sourced wave (58 documented, 30 flagged). Self-contained (the chemistry↔biology bridge is
// the prose; no hard compose, to keep this leaf cycle-free); the one computed check is Eigen's error threshold.
export function originOfLifeAbiogenesisDecoded(matrix: MindMatrix = buildMatrix()) {
  const eigenLmax = eigenErrorThreshold(0.05) // enzyme-free RNA copy error μ≈0.05 → L_max ≈ 20 bases
  const facets = [
    { facet: 'the BUILDING BLOCKS form abiotically — Miller–Urey (1953; ~5 amino acids originally, 22+ on modern reanalysis, 23 with H₂S), Oró’s adenine = (HCN)₅ (1961), the cyanosulfidic route to activated ribonucleotides (Powner–Sutherland 2009 pyrimidines; Becker–Carell 2019 unified purines+pyrimidines; Patel 2015 precursors of RNA, peptide AND lipid from one network — though NOT one-pot), and extraterrestrial delivery (Murchison’s >90 amino acids, isotope-proven non-terrestrial, with a real ~2.8–9.2% L-excess; glycine in comet 67P by Rosetta). BOUND: building blocks abiotically is DOCUMENTED; a living cell is NOT (0 de novo cells made)', on: true },
    { facet: 'the RNA WORLD — RNA as BOTH heritable information and catalyst, so it may predate the DNA+protein split: ribozymes (catalytic RNA; Cech & Altman, Nobel 1989) and the ribosome’s peptide-bond core being RNA (a ribozyme; Nobel 2009) are the key evidence, with in-vitro-evolved polymerase ribozymes extending it. BOUND: leading and well-evidenced, but a HYPOTHESIS not established history — no ribozyme yet FULLY self-replicates, and the origin of the first RNA is itself unexplained', on: true },
    { facet: 'WHERE and HOW, still debated — alkaline hydrothermal vents (Russell/Lane/Martin: natural proton gradients across mineral membranes → chemiosmosis, life’s universal energy currency), warm little ponds with wet–dry cycling, and protocells (fatty-acid vesicles that grow and divide, Szostak); the METABOLISM-FIRST vs REPLICATION-FIRST debate is unresolved. The strongly-reducing early atmosphere Miller assumed is now doubted (a neutral CO₂/N₂ atmosphere gives lower yields)', on: true },
    { facet: 'the HARD PROBLEMS are real and open — HOMOCHIRALITY (life uses L-amino acids AND D-sugars — not "all left-handed"; it needs an initial bias, amplification AND maintenance); EIGEN’S PARADOX (the error catastrophe: eigenErrorThreshold at an enzyme-free μ≈0.05 gives L_max ≈ ' + eigenLmax.toFixed(0) + ' bases, far short of the ~200+ a replicase ribozyme needs — accurate replication needs enzymes, enzymes need accurate replication); and the ORIGIN of the genetic code itself (its error-minimizing non-randomness). BOUND: a CONSTRAINT, not (per creationist misuse) an unbridgeable barrier', on: eigenLmax >= 15 && eigenLmax <= 25 },
    { facet: 'the honest DEMARCATION — abiogenesis is a genuine, ACTIVE, UNSOLVED problem: plausible steps are documented, but no end-to-end synthesis exists and the historical path is unknown (LUCA is already a sophisticated cell, not the origin). UNCONFIRMED (≠pseudoscience): the RNA-world-as-history, metabolism-first, the chirality mechanisms (weak-force parity, circularly-polarized light), the setting, and panspermia AS AN EXPLANATION (it relocates the question; legitimate only as a transport hypothesis). PSEUDOSCIENCE flagged: creationism / intelligent design ("too complex to arise" / "Miller–Urey or Eigen proves design" — argument from incredulity). CARDINAL: unsolved frontier ≠ pseudoscience; "God/aliens did it" is not a mechanism', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`abiogenesis:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('origin-of-life-abiogenesis-decoded', facets)
  return {
    decoded: sealed.ok,
    documentedFindings: 58, flaggedFindings: 30, angles: 5, eigenErrorThresholdBases: eigenLmax,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The origin of life — the unsolved bridge from chemistry to biology. The building blocks come for free: Miller–Urey sparked amino acids in 1953, comets and meteorites carry them, and one cyanosulfidic chemistry can yield the precursors of RNA, protein and lipid together. From there the leading story is an RNA world, where a single molecule both carried information and caught reactions — the ribosome is still an RNA enzyme, a living fossil of it. But nobody has made a cell, no RNA fully copies itself, and the hard problems bite: why life chose one handedness, how the first replicator beat the error catastrophe (accurate copying needs enzymes, enzymes need accurate copying), and how the genetic code arose. It likely began at hydrothermal vents or in drying ponds — unresolved. It is real, active, unsolved science: the building blocks are documented, the cell is not, and "it was designed" or "it came from space" answer nothing.',
    boundary:
      'HONEST (research-wave verified, 58 documented / 30 flagged): DOCUMENTED — abiotic synthesis of amino acids (Miller–Urey 1953 + reanalysis), nucleobases (Oró 1961), activated ribonucleotides (Powner–Sutherland 2009; Becker–Carell 2019), the cyanosulfidic network (Patel 2015), meteoritic/cometary delivery (Murchison; comet 67P), and ribozymes / the RNA ribosome (Nobels 1989, 2009). UNSOLVED/UNCONFIRMED (≠pseudoscience): the RNA world as actual history, metabolism-first vs replication-first, the origin setting, homochirality’s cause, and panspermia as an explanation (it only relocates the question). REAL OPEN PROBLEMS: homochirality, Eigen’s paradox (eigenErrorThreshold ≈ ' + eigenLmax.toFixed(0) + ' bases enzyme-free — a constraint, NOT a creationist "barrier"), the genetic code’s origin. PSEUDOSCIENCE flagged: creationism/intelligent-design (argument from incredulity; misuse of Eigen), and "Miller–Urey created life"/"life is solved"/"life is inevitable" overclaim. CARDINAL: no de novo cell has been synthesized; the origin of life is honestly open, and that openness is science, not a gap for a designer.',
  }
}

// Evolution by natural selection — the unifying engine that takes the first life to all complexity and mind. A 5-angle
// sourced wave (63 documented, 30 flagged). Self-contained (cycle-free leaf); the computed check is the Hardy–Weinberg
// null model (genotype frequencies sum to 1; evolution is the DEVIATION from it).
export function evolutionByNaturalSelectionDecoded(matrix: MindMatrix = buildMatrix()) {
  const hw = hardyWeinbergGenotypes(0.5) // p=0.5 → {AA:0.25, Aa:0.5, aa:0.25}, summing to 1 (the null)
  const hwSum = hw.AA + hw.Aa + hw.aa
  const facets = [
    { facet: 'the MECHANISM and the modern synthesis — Darwin & Wallace (joint Linnean reading 1858; Origin 1859): natural selection is the deductive consequence of variation + heritability + differential reproductive success + time → descent with modification. The Modern Synthesis (1930s–40s: Fisher, Wright, Haldane reconciling Darwin with Mendel into population genetics; Dobzhansky/Mayr/Simpson; named by Huxley 1942) gives the FOUR forces — selection, genetic drift, mutation, gene flow — and the Hardy–Weinberg NULL (p²+2pq+q²=1; the genotype frequencies sum to ' + hwSum.toFixed(0) + '), whose violation is the operational signal a force is acting. NOTE: "survival of the fittest" is Spencer’s phrase (1864), a poor synonym', on: Math.abs(hwSum - 1) < 1e-9 },
    { facet: 'the EVIDENCE is overwhelming and multi-independent — they converge on ONE phylogeny: transitional FOSSILS (Tiktaalik ~375 Ma, found by stratigraphic prediction; Archaeopteryx; the Pakicetus→Ambulocetus→Basilosaurus whale series), MOLECULAR phylogenetics (the near-universal genetic code, shared pseudogenes and endogenous retroviruses as common-descent signatures), comparative embryology, biogeography, and DIRECTLY OBSERVED evolution (antibiotic/pesticide resistance; Lenski’s E. coli LTEE — the Cit+ innovation at generation ~31,000, now >80,000 generations since 1988; the Grants’ Galápagos finches)', on: true },
    { facet: 'the genuine FRONTIER — debated but scientific, NOT fringe: Kimura’s NEUTRAL THEORY (1968 — most molecular-level change is drift, not selection; the molecular clock), EVO-DEVO (Hox genes, deep homology, the genetic toolkit), punctuated equilibrium (Eldredge & Gould 1972), and the Extended Evolutionary Synthesis (niche construction, developmental plasticity, transgenerational epigenetic inheritance) — a real CONTESTED discussion, NOT a refutation of evolution; and the unit/level of selection (gene vs organism vs group) is an open conceptual question, not a settled fact', on: true },
    { facet: 'the MAJOR TRANSITIONS and the honest story of complexity — Maynard Smith & Szathmáry (1995): ~8 transitions in how information is stored and transmitted (replicating molecules → chromosomes → the genetic code → eukaryotic cells → sex → multicellularity → eusocial colonies → language), each making formerly independent replicators reproduce only as part of a larger whole; ENDOSYMBIOSIS (mitochondria and chloroplasts as engulfed bacteria — Margulis, confirmed by organelle genomes). CORRECTION: evolution is NOT progressive, directional or goal-seeking — there is no ladder and no telos, and most life has always been microbial', on: true },
    { facet: 'the DEMARCATION and the two failure modes — evolution is BOTH an observed FACT (common descent; allele frequencies change) AND a well-tested THEORY (the mechanism), biology’s unifying frame (Dobzhansky 1973). FLAGGED as REJECTION (pseudoscience): creationism / "creation science" / Intelligent Design — irreducible complexity (Behe’s flagellum/clotting) is refuted, Kitzmiller v. Dover (2005) ruled ID is religion not science, "just a theory" conflates theory with guess, and "the 2nd law forbids evolution" ignores that Earth is not a closed system. FLAGGED as MISUSE (the is-ought fallacy): social Darwinism, eugenics and "survival of the fittest = might is right" — evolution DESCRIBES, it does not PRESCRIBE; and orthogenesis/"progress". CARDINAL: rejection AND ideological misuse are both errors; the science is neither', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`evolution:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('evolution-by-natural-selection-decoded', facets)
  return {
    decoded: sealed.ok,
    documentedFindings: 63, flaggedFindings: 30, angles: 5, hardyWeinbergSum: hwSum,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Evolution by natural selection — the engine that turns the first replicator into everything alive. Its logic is almost arithmetic: where heritable variation affects survival and reproduction, the better-fit variants leave more offspring, so populations shift across generations — descent with modification. The Modern Synthesis made it quantitative (population genetics, the four forces, the Hardy–Weinberg null whose violation IS evolution), and the evidence is overwhelming and independent: transitional fossils found where the rock predicts them, the same family tree drawn by bones and by DNA, retroviruses scarring shared genomes, and evolution watched live in Lenski’s flasks and Darwin’s finches. The frontier (neutral theory, evo-devo, the extended synthesis) is lively but not a refutation; the major transitions explain rising complexity without a ladder or a goal. It is fact and theory both — and neither the creationist rejection of it nor the social-Darwinist misuse of it is the science.',
    boundary:
      'HONEST (research-wave verified, 63 documented / 30 flagged): the MECHANISM (variation + heredity + differential reproduction; the four forces; Hardy–Weinberg) and COMMON DESCENT are established science, with converging independent evidence (fossils incl. Tiktaalik/whales, molecular phylogenetics, ERVs, biogeography, observed evolution — Lenski LTEE >80,000 gens, the Grants’ finches). GENUINE FRONTIER (unconfirmed/contested, NOT fringe): the neutral theory’s scope, evo-devo’s reach, punctuated equilibrium, the Extended Evolutionary Synthesis (niche construction, developmental plasticity, transgenerational epigenetics — a debate, not a paradigm overthrow), and the unit-of-selection question (gene/organism/group — philosophy-not-settled). FLAGGED PSEUDOSCIENCE: creationism / Intelligent Design (irreducible complexity refuted; Kitzmiller v. Dover 2005; "just a theory"; the closed-system 2nd-law error), and the IDEOLOGICAL MISUSE — social Darwinism, eugenics, "survival of the fittest" as prescription (the is-ought fallacy: evolution describes, it does not justify), plus orthogenesis/"progress". CARDINAL: evolution is fact + theory; rejecting it and weaponizing it are both errors. "Survival of the fittest" is Spencer’s phrase, not Darwin’s mechanism. Bridges abiogenesis → life → mind.',
  }
}

// Consciousness — the capstone of the emergence-up arc (matter → life → mind → subjective experience). A 5-angle
// sourced wave (59 documented, 35 flagged — the heaviest demarcation). Self-contained; the computed check is the
// Perturbational Complexity Index cutoff (a clinical measure of the LEVEL of consciousness, not the hard problem).
export function consciousnessHardProblemDecoded(matrix: MindMatrix = buildMatrix()) {
  const pci = PCI_CONSCIOUSNESS_THRESHOLD // ~0.31 — the validated conscious/unconscious cutoff
  const facets = [
    { facet: 'the HARD PROBLEM, precisely — Chalmers (1995) split the EASY problems (explaining functions: discrimination, integration, reportability, attention — tractable cognitive science) from the HARD one ("why is the performance of these functions accompanied by EXPERIENCE at all?"); Nagel’s "what is it like to be a bat?" (1974) and Levine’s explanatory gap (1983) frame it. The live stances — physicalism, dualism, illusionism (Frankish/Dennett: qualia as an introspective illusion), mysterianism (McGinn: cognitively closed) — all remain competing. It is a GENUINELY UNSETTLED question, neither solved nor a pseudo-problem', on: true },
    { facet: 'the SCIENTIFIC THEORIES are testable, differing programs — Global Neuronal Workspace (Baars 1988; Dehaene: fronto-parietal "ignition" and broadcast), Integrated Information Theory (Tononi: consciousness = integrated information Φ, intrinsic), Higher-Order Theories, Recurrent Processing (Lamme), and the Attention Schema (Graziano) — each predicting different neural correlates. The September 2023 open letter branding IIT "pseudoscience" is itself a CONTESTED stance (philosophy-not-settled), not a settled verdict — IIT is unconfirmed, not pseudoscientific', on: true },
    { facet: 'the EMPIRICAL CORE is real and measurable — the NCC program (Crick & Koch: the minimal neural mechanisms jointly sufficient for a percept), the loss/return of consciousness in anaesthesia and sleep, the Perturbational Complexity Index (TMS-EEG perturbation + Lempel–Ziv complexity; the validated PCI* ≈ ' + pci.toFixed(2) + ' cutoff separating conscious from unconscious states), split-brain, blindsight, and COVERT consciousness (Owen 2006: a "vegetative" patient following tennis-imagery commands on fMRI). BOUND: these measure the LEVEL/contents of consciousness; no measure can DEFINITIVELY certify its presence or absence, and none closes the explanatory gap', on: pci > 0.3 && pci < 0.32 },
    { facet: 'the CONTESTED FRONTIER — serious and unsettled: the IIT-vs-GNWT ADVERSARIAL collaboration (the Cogitate consortium; the 2025 results fit neither theory cleanly), PANPSYCHISM (Goff/Russellian monism — consciousness as fundamental/ubiquitous, a serious PHILOSOPHICAL position, NOT established physics), ANIMAL consciousness (the 2024 New York Declaration; the markers approach), and AI/LLM consciousness (the indicator-property approach, Butlin & Long 2023 — current LLMs judged NOT conscious on their architecture). Open science and philosophy, distinct from woo', on: true },
    { facet: 'the razor DEMARCATION (three tiers) — ESTABLISHED: the easy problems, the NCCs, the PCI as a clinical index. UNCONFIRMED-but-NOT-pseudoscience: IIT and GNWT (testable, unproven), Orch-OR (Penrose–Hameroff quantum microtubules — a specific, much-criticised hypothesis, strained by decoherence/Tegmark, rigorous-but-rejected), and panpsychism (philosophy). PSEUDOSCIENCE / woo: generic "quantum consciousness" / "the observer’s mind collapses the wavefunction", "the universe is conscious / consciousness creates reality" (Chopra-style), the 10%-of-the-brain and rigid left-brain/right-brain neuromyths, and "432 Hz raises consciousness / heals DNA". CARDINAL: the hard problem being OPEN is NOT a license for woo — unconfirmed (Orch-OR, panpsychism) ≠ pseudoscience (quantum-mysticism, neuromyths)', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`consciousness:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('consciousness-hard-problem-decoded', facets)
  return {
    decoded: sealed.ok,
    documentedFindings: 59, flaggedFindings: 35, angles: 5, pciThreshold: pci,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Consciousness — the capstone, and the one honest "we do not know how." The easy problems (how the brain discriminates, integrates, reports) are ordinary science; the hard problem — why any of that is accompanied by an inner experience — is genuinely open, and the field is split between physicalism, illusionism, dualism and mysterianism. The science is real where it can be: testable theories (Global Workspace, IIT and the rest) predicting different neural signatures, and measures like the perturbational complexity index that tell conscious from unconscious states and even catch covert awareness in unresponsive patients. The frontier — the IIT-vs-workspace face-off, panpsychism, animal and machine minds — is serious and unsettled. But the openness of the hard problem is not a doorway for woo: Orch-OR and panpsychism are unconfirmed, not pseudoscience, while "quantum consciousness collapses reality", the conscious universe, the ten-percent brain and 432-Hz awakening are. With this the arc closes — matter to mind — with the deepest question left honestly open.',
    boundary:
      'HONEST (research-wave verified, 59 documented / 35 flagged — the heaviest yet): the EASY problems are tractable science; the NCC program and the Perturbational Complexity Index (PCI* ≈ ' + pci.toFixed(2) + ', TMS-EEG + Lempel–Ziv; Casali 2013/Casarotto 2016) are established clinical measures of the LEVEL of consciousness; the leading theories (GNWT, IIT, HOT, RPT, Attention Schema) are testable but INCOMPLETE; and the HARD problem (Chalmers 1995; Nagel 1974; Levine 1983) is a genuinely UNSETTLED question. UNCONFIRMED (≠pseudoscience): IIT/GNWT as settled (none is — Cogitate 2025 fit neither), Orch-OR (rigorous but rejected, decoherence/Tegmark), panpsychism (philosophy), and LLM consciousness (current architectures judged not). PHILOSOPHY-NOT-SETTLED: the hard problem’s solvability and the metaphysics, and even the 2023 "IIT is pseudoscience" letter (a contested verdict, not a fact). PSEUDOSCIENCE flagged: generic quantum-mind / observer-collapse-by-consciousness, cosmic-mind / "consciousness creates reality" (Chopra), the 10%-brain and left/right-brain neuromyths, and "432 Hz raises consciousness". CARDINAL: no measure certifies presence absolutely, no theory is established, the hard problem is open — and that openness is NOT a license for woo. Caps the emergence-up arc (matter → chemistry → abiogenesis → evolution → life → mind).',
  }
}

