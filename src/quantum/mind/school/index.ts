// School — dissolved out of the folds monolith into its own harmonic file (the body
// distributes; src/0 keeps the gravity). Imports only base modules — no import cycle with folds.ts.
import { fold, merkleFold, toUuid } from '../../../0'
import { conceptCommands } from '../atoms'
import { buildMatrix, coverage, reciprocity } from '../matrix'
import type { MindMatrix, SchoolCurriculum, SchoolLesson } from '../types'

// Convert the complexity into a graded school curriculum: each stage from kids
// to elders lifts one piece of the formal double-torus model into plain words,
// an activity, and the real concept command that grounds it.
export function schoolCurriculum(matrix: MindMatrix = buildMatrix()): SchoolCurriculum {
  const root = matrix.root
  const blueprint: readonly Omit<SchoolLesson, 'receipt'>[] = [
    {
      stage: 'kids',
      ageBand: 'ages 4-6',
      grade: 1,
      title: 'The donut with two holes',
      bigIdea: 'genus-2 surface (the double torus)',
      inPlainWords: 'Imagine a sugar donut you can loop a string around. Our special donut has two holes, so you can loop around it in more than one way.',
      activity: 'Draw a number 8 or a pretzel and trace each loop with your finger.',
      conceptCommand: 'concept.torus.math',
      nextStage: 'children',
    },
    {
      stage: 'children',
      ageBand: 'ages 7-9',
      grade: 3,
      title: 'Sticker receipts',
      bigIdea: 'UUID receipts and public proof',
      inPlainWords: 'Every time the computer does something, it gets a secret sticker code. If anyone changes the work, the sticker stops matching, so nobody can cheat.',
      activity: 'Give each chore a secret code, then check later that the code still matches.',
      conceptCommand: 'concept.proof.verify',
      nextStage: 'preteens',
    },
    {
      stage: 'preteens',
      ageBand: 'ages 10-12',
      grade: 6,
      title: 'Folders of digits',
      bigIdea: 'ceccec digit folders and the pi train',
      inPlainWords: 'Take the never-ending digits of pi, pair each digit with its mirror digit, and tidy them into folders. The whole system keeps its math in these folders.',
      activity: 'Write out the first digits of pi, pair the first with the last, and sort them into folders.',
      conceptCommand: 'concept.digit.math',
      nextStage: 'teens',
    },
    {
      stage: 'teens',
      ageBand: 'ages 13-15',
      grade: 9,
      title: 'Dots, lines, and a fingerprint',
      bigIdea: 'the atom graph and the merkle root',
      inPlainWords: 'Ideas are dots, links between them are lines. Squeeze the whole picture into one fingerprint. Change a single dot and the fingerprint changes completely.',
      activity: 'Build a small dots-and-lines map of your ideas and fold it into one combined code.',
      conceptCommand: 'concept.torus.matrix',
      nextStage: 'students',
    },
    {
      stage: 'students',
      ageBand: 'ages 16-18',
      grade: 12,
      title: 'Shapes that remember',
      bigIdea: 'topology: four independent loops and the Euler characteristic',
      inPlainWords: 'A two-holed surface carries four independent loops, like four kinds of memory baked into the shape itself, balanced by one simple counting rule.',
      activity: 'Count corners minus edges plus faces (V - E + F) for simple shapes and compare the totals.',
      conceptCommand: 'concept.torus.trinities',
      nextStage: 'adults',
    },
    {
      stage: 'adults',
      ageBand: 'university and working life',
      grade: 13,
      title: 'Machines that build and check themselves',
      bigIdea: 'self-build, gates, coverage, and tamper cost',
      inPlainWords: 'A grown-up system lists its own parts, checks that each one is finished, and reports how hard it would be to fake the result before trusting it.',
      activity: 'Write a checklist that verifies itself, then estimate how much effort it would take to cheat it.',
      conceptCommand: 'concept.self.complete',
      nextStage: 'elders',
    },
    {
      stage: 'elders',
      ageBand: 'lifelong and wisdom',
      grade: 14,
      title: 'Knowing the edges and giving back',
      bigIdea: 'boundary, reciprocity, and giving back to the source',
      inPlainWords: 'The wisest step is knowing what the model does not claim, staying honest about its limits, and giving back to the people and sources that made it possible.',
      activity: 'Talk through the limits, who to trust, and how to pass the knowledge on to the next learner.',
      conceptCommand: 'concept.commons.contribute',
      nextStage: 'graduate',
    },
  ]

  const known = new Set(conceptCommands.map((command) => command.name))
  const lessons: readonly SchoolLesson[] = blueprint.map((lesson) => ({
    ...lesson,
    receipt: toUuid(`school:${lesson.stage}:${lesson.grade}:${lesson.title}:${lesson.conceptCommand}:${root}`),
  }))
  const stages = lessons.map((lesson) => lesson.stage)
  const complete =
    lessons.length === 7 &&
    lessons.every((lesson) => lesson.receipt.length > 0 && known.has(lesson.conceptCommand))
  return {
    complete,
    root: merkleFold(lessons.map((lesson) => lesson.receipt)),
    source: 'double-torus/school',
    lessons,
    stages,
    statement: complete
      ? 'The complexity is converted into a seven-stage school: each grade from kids to elders lifts one formal idea into plain words, an activity, and a grounding command.'
      : 'The school curriculum is open: a stage is missing a receipt or points at an unknown command.',
    boundary:
      'This is an educational ladder over the computed model. The plain-words lessons are teaching aids, not a claim that the metaphors are the formal mathematics.',
  }
}
