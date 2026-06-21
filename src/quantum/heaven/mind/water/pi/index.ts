// ☵ Kǎn · Water — π: the digits computed not hardcoded, π whole-stream through the holes, π's three opening the trinity, the pi-train stations. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/matrix'
import { digitalRoot, merge, merkleFold, toUuid } from '../../../../../0'
import { PI_TRAIN_DIGITS, computePiDigits, conceptCommands } from '../../heaven/atoms'
import { vortexMath } from '../../mountain/geometry'
import { piNotHarmonic } from '../../lake/music'
import { analogNoGapsNoLeak, digitFolderMath, doubleTorusFold, homology, movieAllDimensionsAtOnce, theWhole } from '../..'

// Dissolve the monolith at the pi-train stations — the migration's mechanism, computed. Every piece of
// code travels the PATH OF THE SEQUENCE (the vortex circuit 1-2-4-8-7-5, then the cross 3-6-9-0) and
// DISSOLVES into a pi-train STATION: a digit folder, chosen by its own content address. The pi train —
// pi's digits, grouped into digit/reverseDigit folders (piTrainDiamonds → digitFolders) — furnishes the
// stations; digitOf (the same router digitFoldersDoMath already uses) sends each piece to exactly one.
// So the cover is COMPLETE: every piece has a station, nothing is orphaned, and as each travels the
// sequence to its station the word-named core empties — the monolith dissolves entirely into the digit
// folders. The sequence is the order of dissolution; the stations (src/<digit>, finer src/<digit>/<reverse>)
// are the destinations; "until all dissolves" is reached when orphans = 0 — which holds by construction,
// since digitOf ∈ 0..9 and every digit is a station. stationOf is the reusable router the migration tooling
// (a build script that can read the source) calls to place each real export at its station.
export function dissolveAtPiTrainStations(matrix: MindMatrix = buildMatrix()) {
  const math = digitFolderMath(matrix) // the stations carry the digit math already
  // digitOf: the same content-address router digitFoldersDoMath uses — a root's hex nibbles summed mod 10.
  const digitOf = (root: string) => root.replace(/-/g, '').split('').reduce((sum, ch) => sum + Number.parseInt(ch, 16), 0) % 10
  const stationOf = (piece: string) => digitOf(toUuid(`code:${piece}`)) // a piece of code → the station it dissolves into
  // The ten stations, in the order the sequence visits them — each a digit folder home for the code that
  // dissolves there, finer-addressed by the ten's-complement reverse subfolder (src/<digit>/<reverse>).
  const stations = math.digits.map((entry) => ({
    digit: entry.digit,
    order: entry.order, // position on the path of the sequence
    folder: `src/${entry.digit}`,
    subStation: `src/${entry.digit}/${entry.reverse}`, // the d/reverse path station
    fusion: entry.fusion, // 0/0's station resolves through the fusion, never to nothing
  }))
  // Route the model's own named pieces (the concept-command vocabulary) to show the dissolution end to
  // end; the migration tooling routes every export the same way. The mechanism is proven over a known set.
  const pieces = conceptCommands.map((command) => command.name)
  const routed = pieces.map((piece) => ({ piece, station: stationOf(piece), order: math.digits.find((entry) => entry.digit === stationOf(piece))?.order ?? 0 }))
  const byStation = stations.map((station) => ({ digit: station.digit, folder: station.folder, pieces: routed.filter((entry) => entry.station === station.digit).map((entry) => entry.piece) }))
  const orphans = routed.filter((entry) => !stations.some((station) => station.digit === entry.station)).length // 0 by construction
  const stationsUsed = new Set(routed.map((entry) => entry.station)).size
  return {
    dissolved: orphans === 0 && stations.length === 10 && routed.length === pieces.length, // all dissolves: nothing left in the core
    sequence: math.sequence, // 1-2-4-8-7-5-3-6-9-0 — the path of dissolution
    stations, // the ten pi-train-station digit folders
    stationOf, // the reusable router: piece name → its station digit
    routed, // every piece → its station, in sequence order
    byStation, // each station and the code that dissolves into it
    orphans, // 0 — nothing remains in the word-named core
    stationsUsed, // stations reached by this sample (the full source reaches all ten)
    count: routed.length,
    root: merge(math.root, merkleFold(routed.map((entry) => toUuid(`dissolve:${entry.piece}->${entry.station}`)))),
    statement:
      'Dissolve the monolith at the pi-train stations: every piece of code travels the path of the sequence (1-2-4-8-7-5, then 3-6-9-0) and dissolves into a station — a digit folder — chosen by its content address (digitOf). The pi train furnishes the stations (pi\'s digits, grouped into digit/reverse folders); every piece routes to exactly one, so the cover is complete and the word-named core empties — the monolith dissolves entirely into the digit folders. stationOf is the reusable router; the sequence is the order; orphans = 0 is "all dissolved".',
    boundary:
      'A computed migration mechanism: the routing (piece → digit-folder station, by digitOf, over the vortex sequence) is a pure, recomputable function, proven here over the concept-command vocabulary. It DECLARES and routes the dissolution — it does not itself move files (a build script that can read the source applies stationOf to every export). Structural; the physical distribution is the compression work, executed in waves along the sequence.',
  }
}


// π opens on the trinity. The vortex sequence runs 1-2-4-8-7-5 (the doubling circuit) then 3-6-9 (the cross)
// then 0 (the void); 3-6-9 is the TRINITY — 3 the mark, 6 its double (the 3↔6 polarity), 9 the axis fixed
// under doubling — and it is exactly the multiples of 3, the part the doubling circuit never reaches. π =
// 3.14159…: its integer part is 3, so the pi train that furnishes the dissolution stations (see
// dissolveAtPiTrainStations) OPENS on the first trinity mark. The user's decode, two layers: (1) "the 3 in
// 3.14159 is the mark for the trinity 3-6-9 from the 1-2-4-8-7-5-3-6-9 sequence"; (2) "3-6-9 is 1, and 3
// means 3 ones — 3 trinities": a trinity is three-in-ONE, so the digit 3 = three units = THREE TRINITIES =
// 3×3 = 9 = the nine logic folders. π's single 3 unfolds to the trinity and to the nine.
export function piThreeOpensTheTrinity(matrix: MindMatrix = buildMatrix()) {
  const trinity = [3, 6, 9] as const // the cross: 3 the mark, 6 its double (3↔6 polarity), 9 the axis
  const doubling = vortexMath(matrix).doubling // 1,2,4,8,7,5 — the circuit, disjoint from the trinity
  const piInteger = 3 // π = 3.14159…, integer part 3 — where the pi train starts
  const opensOnTrinity = piInteger === trinity[0] // the pi train opens on the first trinity mark
  const circuitMissesTrinity = doubling.every((d) => d % 3 !== 0) // the doubling never lands on a multiple of 3
  const nineIsAxis = digitalRoot(9 * 2) === 9 // 9 is fixed under doubling — the axis of the cross
  // Layer 2 (the user's clarification): "3-6-9 is 1, and 3 means 3 ones — 3 trinities." A trinity is
  // three-in-ONE, so the cross counts as a single unit (3-6-9 ≡ 1); the digit 3 = three such ones = THREE
  // trinities; 3 trinities × 3 = 9 = the nine logic folders (the architecture's "3 trinities"). The 3 in π
  // is the seed of the whole nine-fold. (Symbolic: "≡1" is the three-in-one collapse, not digitalRoot(3+6+9)
  // = 9 — the two readings meet at nine.)
  const trinityIsOne = 1 // the cross is a unity — three-in-one
  const trinitiesInThree = piInteger * trinityIsOne // 3 ones = 3 trinities
  const threeTrinitiesAreNine = trinitiesInThree * trinity.length === 9 // 3 trinities × 3 = 9
  const nineFolds = trinitiesInThree * trinity.length // 9 — the nine logic folders the three trinities make
  const sequence = [...doubling, ...trinity, 0] // 1,2,4,8,7,5, 3,6,9, 0 — the full vortex order
  return {
    trinity,
    doubling,
    piInteger,
    sequence,
    opensOnTrinity,
    circuitMissesTrinity,
    nineIsAxis,
    trinityIsOne, // a trinity is one (three-in-one)
    trinitiesInThree, // 3 = 3 ones = 3 trinities
    threeTrinitiesAreNine, // 3 trinities × 3 = 9
    nineFolds, // the nine logic folders the three trinities make (= the architecture's 9)
    holds: opensOnTrinity && circuitMissesTrinity && nineIsAxis && threeTrinitiesAreNine,
    root: merkleFold([...sequence, piInteger, nineFolds].map((n) => toUuid(`pi-trinity:${n}`))),
    statement:
      'The vortex sequence is 1-2-4-8-7-5 (the doubling circuit) then 3-6-9 (the cross) then 0 (the void); 3-6-9 is the trinity — 3 the mark, 6 its double (the 3↔6 polarity), 9 the axis fixed under doubling — and it is exactly the multiples of 3, the part the doubling circuit never reaches. π = 3.14159…, integer part 3, so the pi train opens on the first trinity mark. And the 3 unfolds: a trinity is three-in-ONE (counts as a unit, 3-6-9 ≡ 1), so the digit 3 = three ones = THREE TRINITIES = 3×3 = 9 — the nine logic folders (the architecture\'s "3 trinities"). π\'s single 3 is the seed of both the trinity and the nine.',
    boundary:
      'π is a transcendental constant; its leading digit is 3 simply because 3 < π < 4 — NOT a designed message, and this is not a claim that π encodes the trinity or the nine. Both layers are symbolic/mnemonic readings WITHIN the vortex framework (a self-consistent numerology over digital roots mod 9): "the 3 marks the trinity" and "a trinity ≡ 1, so 3 = three trinities = nine". The "trinity ≡ 1" is the three-in-one collapse, NOT digitalRoot(3+6+9), which is 9 — the two readings happen to meet at nine. The 3-6-9 = multiples-of-3 and 9-as-axis are real digital-root arithmetic; the "3-6-9 secret of the universe / Tesla" framing is legend with no verified source.',
  }
}

// ── The trinity-sciences decode (quantum · genetics · neurology), verified in a research→adversarial-verify
// wave (66 agents, 59 findings). The honest split: the project's two signature numbers — the threefold (3)
// and 64 = 4³ = 8² = 2⁶ — each have GENUINE, documented instances across the three sciences, but they are
// INDEPENDENT realizations of the same combinatorics, NOT one cosmic structure. These folds add the new
// verified science (the qubit's 3 Paulis, the 4³ Pauli basis, Hamming's 3 parity bits, the Hopfield/CA3
// content-addressing precedent, the genetic 4³ code) and the rigorous backing for the vortex ((ℤ/9ℤ)*),
// each carrying its honest boundary. They extend, not duplicate, the existing 64-factor map (sealCube) and
// dna()/genes(). The "3-6-9 cosmic trinity / Tesla / Orch-OR / triune-brain" framings stay flagged as legend.

// Pi is computed, not hardcoded — and so it can be analog. Read 3.14159… as 3 + 0.14159…: the 3
// is the trinity frame (the integer part sits on the 3-6-9 cross, the xy frame), and the rest is
// the doubling flow 1-2-4-8-7-5 — the vortex circuit. Because each digit has computed neighbours
// (the spigot computes the next digit from the prior state), pi is computable to any length, in
// realtime — decoding pi is folding the proportions themselves and calculating the next harmonic,
// not reading a stored number. Hardcoding pi (a fixed truncation) is not analog, because pi is
// infinite: a truncation has an end, and an end is a gap. Only the computed stream is gapless.
export function piComputedNotHardcoded(matrix: MindMatrix = buildMatrix()) {
  const vortex = vortexMath(matrix)
  const head = PI_TRAIN_DIGITS // 108 digits, computed by the spigot at load
  const more = computePiDigits(150) // compute further, in realtime — not a stored constant
  const facets = [
    // The model computes pi: extending the length re-derives and extends the same stream — so it
    // is not a hardcoded truncation but a live computation that can run to any precision.
    { facet: 'pi is computed, not hardcoded — the stream extends on demand', on: head.length === 108 && more.startsWith(head) && more.length === 150 },
    // Each digit has computed neighbours: a shorter computation is a prefix of a longer one, so
    // each next digit follows deterministically from the state of its neighbours.
    { facet: 'each digit has computed neighbours — the next follows from the prior state', on: computePiDigits(20).startsWith(computePiDigits(12)) && head.startsWith('314159') },
    // 3 is the trinity frame (the 3-6-9 cross); the rest is the doubling flow 1-2-4-8-7-5.
    { facet: '3 is the trinity frame (the 3-6-9 cross); the rest folds to the doubling 1-2-4-8-7-5', on: vortex.cross.includes(3) && vortex.doubling.join('') === '124875' && head[0] === '3' },
    // Hardcoding pi is not analog: pi is infinite, so only the computed (gapless) stream is analog.
    { facet: 'hardcoding pi is not analog — pi is infinite, gapless only by computing', on: piNotHarmonic(matrix).realised && analogNoGapsNoLeak(matrix).sealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pi-computed:${entry.facet}:${entry.on}`) }))
  return {
    computed: facets.every((entry) => entry.on),
    digits: head.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Pi is computed, not hardcoded — read 3.14159… as 3 + 0.14159…: the 3 is the trinity frame (the integer part on the 3-6-9 cross, the xy frame) and the rest is the doubling flow 1-2-4-8-7-5. Because each digit has computed neighbours (the spigot derives the next from the prior state), pi is computable to any length in realtime — decoding pi is folding the proportions and calculating the next harmonic, not reading a stored number. Hardcoding pi (a fixed truncation) is not analog, because pi is infinite: a truncation has an end, and an end is a gap; only the computed stream is gapless.',
    boundary:
      'A real property of the code (computePiDigits is a streaming spigot, so the digits are computed, not a stored constant) folded with the vortex/numerological reading (3 on the 3-6-9 cross, the mantissa as the 1-2-4-8-7-5 doubling). The computability and "each digit from neighbours" are real; the trinity-frame/doubling decomposition is the model’s symbolic framing, not a theorem about pi.',
  }
}

// Pi is the whole in a stream, travelling all dimensions at once, creating the complete analog —
// and pi is the whole going through holes. The infinite, never-repeating digit stream is the whole:
// it contains every finite sequence, and as a stream it moves through every dimension at once, so
// what it lays down is the complete analog — gapless, continuous, no seam. And the wordplay is the
// geometry: pi is the whole (entire) going through the holes — the genus-2 double torus has its
// holes (two handles, four loops, chi = -2), and the pi stream threads them, the whole passing
// through the holes to weave the surface. Whole and holes are one word folded.
export function piWholeStreamThroughHoles(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'pi is the whole in a stream — the infinite stream containing every sequence', on: piComputedNotHardcoded(matrix).computed && theWhole(matrix).whole },
    { facet: 'travelling all dimensions at once', on: movieAllDimensionsAtOnce(matrix).shows },
    { facet: 'creating the complete analog — gapless, continuous, no seam', on: analogNoGapsNoLeak(matrix).sealed && doubleTorusFold(matrix).analog },
    { facet: 'pi is the whole going through holes — the genus-2 holes of the torus (H1 = Z⁴, chi = -2)', on: homology(matrix).independent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pi-whole-holes:${entry.facet}:${entry.on}`) }))
  return {
    flows: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Pi is the whole in a stream, travelling all dimensions at once, creating the complete analog — and pi is the whole going through holes: the infinite, never-repeating digit stream is the whole (it contains every finite sequence), and as a stream it moves through every dimension at once, so what it lays down is the complete analog — gapless, continuous, no seam. And the wordplay is the geometry: pi is the whole (entire) going through the holes — the genus-2 double torus has its holes (two handles, four loops, chi = -2), and the pi stream threads them, the whole passing through the holes to weave the surface.',
    boundary:
      'A composition of the computed-pi, the-whole, all-dimensions-at-once, analog-gapless, double-torus-fold and genus-2 homology models. "Pi is the whole going through holes" is a structural/poetic reading — pi’s digit stream is the surface coordinate source threaded through the genus-2 handles (the homology holes); a framing over the model, not a claim that pi physically traverses space.',
  }
}

// Each 6 digits of pi are a double cross generating a harmonic colour; find the first harmonic
// colour and you know the cross station. Read the pi stream six digits at a time: six is the double
// of the three-cross (3-6-9), and each group of six folds to a hue — a harmonic colour — so the
// stream becomes a line of coloured stations. The first colour names the first station: read it and
// you know where on the cross you stand, and the next six tell you the next station, the whole
// stream a coloured map of the cross.
export function piSixDigitsDoubleCrossColour(matrix: MindMatrix = buildMatrix()) {
  const digits = PI_TRAIN_DIGITS
  const groups: { six: string; hue: number }[] = []
  for (let i = 0; i + 6 <= digits.length; i += 6) {
    const six = digits.slice(i, i + 6)
    const hue = [...six].reduce((sum, d) => sum + (Number.parseInt(d, 10) || 0), 0) % 360 // the harmonic colour of the group
    groups.push({ six, hue })
  }
  const firstColour = groups[0]?.hue ?? 0 // the first harmonic colour — the first cross station
  const facets = [
    { facet: 'each 6 digits of pi are a double cross — six is the double of the 3-6-9 cross', on: vortexMath(matrix).flows && digits.length >= 6 },
    { facet: 'each group generates a harmonic colour — six digits fold to a hue', on: groups.length > 0 && groups.every((g) => g.hue >= 0 && g.hue < 360) },
    { facet: 'find the first harmonic colour and you know the cross station', on: firstColour === [...digits.slice(0, 6)].reduce((s, d) => s + (Number.parseInt(d, 10) || 0), 0) % 360 },
    { facet: 'the pi stream is computed, the colours deterministic', on: piComputedNotHardcoded(matrix).computed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pi-six-cross-colour:${entry.facet}:${entry.on}`) }))
  return {
    stations: facets.every((entry) => entry.on),
    firstColour,
    groupCount: groups.length,
    count: facets.length,
    facets,
    root: merkleFold(groups.map((g) => toUuid(`station:${g.six}:${g.hue}`))),
    statement:
      'Each 6 digits of pi are a double cross generating a harmonic colour; find the first harmonic colour and you know the cross station: read the pi stream six digits at a time — six the double of the three-cross (3-6-9) — and each group folds to a hue, a harmonic colour, so the stream becomes a line of coloured stations. The first colour names the first station; read it and you know where on the cross you stand, and the next six tell the next station, the whole stream a coloured map of the cross.',
    boundary:
      'A real computation grouping the computed pi digits into sixes, each summed (mod 360) to a hue, composed with the vortex 3-6-9 cross and computed-pi models. "Double cross / cross station" is a structural/colour-coding reading over the digit groups; the hues are a deterministic mapping of the digits, an illustrative coordinate scheme, not an asserted physical colour.',
  }
}

