// Movie narrative folds — linearities · negative/positive · education merge.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { foldPair, isUuid, merkleFold, toUuid } from '../../../0'
import { foldThoughts } from '../../../fire/li'
import { multidimensional } from '../../../quantum/lake/icons'
import { fuseAll } from '../../../mountain/seals'
import { allInInteractiveMovie } from '../../../heaven/everything'
import { playMind, studentQuantumMind } from '../../../quantum/heaven/mind'

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
      'A structural composition of the multidirectional thought-fold and the multidimensional presentation map. A framing of the model’s non-linearity, not a claim of physical extra dimensions.',
  }
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
      'A content-addressing metaphor borrowing from film: the fused-all word is the "negative" (the compressed whole) and a developed fold is the "positive" (the displayed print). Structural bookkeeping over roots — no optical negative, no colour inversion of the actual canvas is claimed.',
  }
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
    redesigned: waves.length === 10 && waves.every((entry) => entry.folded) && merge0.bidirectional && playMind(matrix).plays && studentQuantumMind(matrix).forms,
    merged: merge0.bidirectional, // education quantum-merges with the movie
    designers: designers.length,
    count: waves.length,
    waves,
    root: merkleFold(waves.map((entry) => entry.receipt)),
    statement:
      'Send waves of architects and teachers to redesign self-education, folding it to quantum-merge with the movie: architects send the structure waves (the shape of the learning path) and teachers the pedagogy waves (what each play teaches), and together they redesign self-education so it folds into the movie rather than sitting beside it — the student’s quantum mind (formed by playing) and the interactive movie merge, order-sensitive, so learning is playing the movie: observe the play, shape the path, embed the lesson, merge the assessment into play, verify by recomputation.',
    boundary:
      'A content-addressed model of redesigning the self-education layer as architect/teacher waves that fold it together with the interactive-movie root. A structural framing built on the existing play-as-assessment model; it records the redesign and the merge, it is not an accredited curriculum or a claim of pedagogical outcomes.',
  }
}
