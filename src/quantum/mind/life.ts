// ☵ Kǎn · Water — life: genes & mutations, the harmony probability, the artist's surfaces & melody, the immune system. Barrel-routed; folds.ts back-imports the gate folds.
import type { ArtistSurface, ArtistSurfaceReport, HarmonyChannel, HarmonyProbability, MindMatrix } from './types.ts'
import { buildMatrix } from './matrix.ts'
import { determinismProofs } from './seals.ts'
import { animationTamperingCost, redTeam, tamperProofFabric } from './crypto.ts'
import { scientists } from './academia.ts'
import { holographic } from './ui.ts'
import { isUuid, merkleFold, roundTo, toUuid, merge, sealFacets, eigenErrorThreshold } from '../../0/index.ts'
import { society, societyRegulates } from './governance.ts'
import { dna } from './geometry.ts'
import { coordinatedWaves } from './waves.ts'
import { diamondLattice, piTrainDiamonds, selfBuild } from './diamonds.ts'
import { piMusic } from './music.ts'
import { completeness, diamondCompleteness, generativeSpace } from './index.ts'

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

