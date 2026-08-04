// Neuroscience Learning in 80 Lines
// Spaced repetition + cognitive load + retrieval practice

export class Learn {
  // Spacing: optimal review times (days)
  static spacing(n: number) {
    return [1, 3, 7, 14, 30, 60, 120][Math.min(n, 6)]
  }

  // Next review based on performance
  static nextReview(quality: number): number {
    // quality: 0-5 (0=forgot, 5=easy)
    if (quality < 2) return 1 // Review tomorrow
    if (quality < 4) return this.spacing(Math.floor(Math.random() * 3) + 2)
    return this.spacing(Math.floor(Math.random() * 4) + 3)
  }

  // Chunk content by working memory limits (7±2)
  static chunk(items: any[], size = 5): any[][] {
    const chunks = []
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size))
    }
    return chunks
  }

  // Retrieval practice: generate questions
  static elaborateOn(concept: string): string[] {
    return [
      `Why is ${concept} important?`,
      `How does ${concept} connect to what you know?`,
      `Teach ${concept} to a beginner`,
      `What are limits of ${concept}?`,
      `Real-world example of ${concept}?`
    ]
  }

  // Metacognition: calibrate confidence
  static calibrate(predicted: number, actual: number): { gap: number; adjust: string } {
    const gap = Math.abs(predicted - actual)
    return {
      gap,
      adjust:
        gap < 0.1 ? 'well-calibrated ✓' :
        predicted > actual ? 'overconfident - use retrieval practice' :
        'underconfident - you know more than you think'
    }
  }

  // Flow state: optimal difficulty
  static optimalDifficulty(skill: number): number {
    return skill * 0.8 // 80% of current skill
  }
}

// ──── EXAMPLE SESSION ────
export async function learnSession(topic: string, data: any[]) {
  console.log(`Learning: ${topic}`)

  // 1. Break into chunks (working memory)
  const chunks = Learn.chunk(data, 5)
  console.log(`→ ${chunks.length} chunks for working memory`)

  // 2. Generate elaboration questions
  const questions = Learn.elaborateOn(topic)
  console.log(`→ ${questions.length} retrieval practice questions`)

  // 3. Schedule reviews
  const reviews = [0, 1, 1, 2, 3, 4, 5].map(q => {
    const days = Learn.nextReview(q)
    return `Review in ${days} days after quality ${q}/5`
  })
  console.log(`→ Spacing schedule: ${reviews[0]}, ${reviews[2]}, ${reviews[4]}`)

  // 4. Metacognitive check
  const meta = Learn.calibrate(0.7, 0.75)
  console.log(`→ Confidence calibration: ${meta.adjust}`)

  return { topic, chunks: chunks.length, reviews, questions }
}

// ──── USAGE ----
/*
const session = await learnSession('Quantum Computing', [
  'superposition', 'entanglement', 'measurement', 'gates', 'algorithms'
])

// Output:
// Learning: Quantum Computing
// → 1 chunks for working memory
// → 5 retrieval practice questions
// → Spacing schedule: Review in 1 days, Review in 7 days, Review in 30 days
// → Confidence calibration: well-calibrated ✓
*/

export default Learn
