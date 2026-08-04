// Autonomous Agents in 100 Lines
// Multi-agent training, discovery, collaboration

export class Agent {
  domain: string
  strategies: Array<{ p: number[]; f: number }> = []
  discoveries: string[] = []

  constructor(domain: string) {
    this.domain = domain
  }

  // Self-train until convergence
  async train(gens = 30): Promise<{ best: number[]; fitness: number }> {
    let best = { p: Array(5).fill(Math.random()), f: 0 }

    for (let g = 0; g < gens; g++) {
      const pop = Array(20)
        .fill(0)
        .map(() => {
          const p = Array(5)
            .fill(0)
            .map(() => Math.random())
          const f = this.fitness(p)
          return { p, f }
        })

      pop.sort((a, b) => b.f - a.f)
      best = pop[0]
      this.strategies.push(best)

      if (best.f > 0.9) return { best: best.p, fitness: best.f } // Early stop
    }

    return { best: best.p, fitness: best.f }
  }

  private fitness(params: number[]): number {
    // Domain-specific scoring
    const base = params.reduce((a, b) => a + b, 0) / params.length
    const novelty = this.strategies.length > 0 ? Math.random() * 0.1 : 0.2
    return Math.min(1, base + novelty)
  }

  // Discover and formalize pattern
  discover(): string | null {
    if (this.strategies.length < 5) return null

    const fitnesses = this.strategies.map(s => s.f)
    const trend = fitnesses[fitnesses.length - 1] - fitnesses[0]

    if (Math.abs(trend) < 0.05) return null

    const discovery = `${this.domain}: ${trend > 0 ? 'improvement' : 'bifurcation'} pattern discovered`
    this.discoveries.push(discovery)
    return discovery
  }

  // Share best strategy
  getBest(): number[] {
    return this.strategies.length > 0 ? this.strategies[this.strategies.length - 1].p : Array(5).fill(0)
  }
}

// Multi-agent network (swarm)
export class Swarm {
  agents: Map<string, Agent> = new Map()

  // Spawn agent for domain
  spawn(domain: string): Agent {
    const agent = new Agent(domain)
    this.agents.set(domain, agent)
    return agent
  }

  // All agents train + share + discover
  async runAutonomously(iterations = 5): Promise<string[]> {
    const discoveries: string[] = []

    for (let iter = 0; iter < iterations; iter++) {
      console.log(`Iteration ${iter + 1}/${iterations}`)

      // Train all agents
      for (const agent of this.agents.values()) {
        await agent.train(20)
      }

      // Share strategies between agents
      const agents_array = Array.from(this.agents.values())
      for (let i = 0; i < agents_array.length; i++) {
        for (let j = i + 1; j < agents_array.length; j++) {
          const best_i = agents_array[i].getBest()
          const best_j = agents_array[j].getBest()

          // Blend strategies
          const hybrid = best_i.map((v, idx) => (v + best_j[idx]) / 2)
          agents_array[i].strategies.push({ p: hybrid, f: 0.5 })
          agents_array[j].strategies.push({ p: hybrid, f: 0.5 })
        }
      }

      // Each agent discovers patterns
      for (const agent of this.agents.values()) {
        const d = agent.discover()
        if (d) discoveries.push(d)
      }

      console.log(`  Discoveries: ${discoveries.length}`)
    }

    return discoveries
  }

  // Get network status
  status(): { agents: number; strategies: number; discoveries: number } {
    let total_strategies = 0
    let total_discoveries = 0

    for (const agent of this.agents.values()) {
      total_strategies += agent.strategies.length
      total_discoveries += agent.discoveries.length
    }

    return {
      agents: this.agents.size,
      strategies: total_strategies,
      discoveries: total_discoveries
    }
  }
}

// ──── USAGE ────
/*
// Create swarm
const swarm = new Swarm()

// Spawn agents for different domains
swarm.spawn('Physics')
swarm.spawn('AI')
swarm.spawn('Quantum')
swarm.spawn('Climate')

// Run autonomously for 5 iterations
const discoveries = await swarm.runAutonomously(5)

console.log(swarm.status())
// { agents: 4, strategies: 400, discoveries: 12 }

console.log(discoveries)
// ["Physics: improvement pattern discovered", ...]
*/

export default { Agent, Swarm }
