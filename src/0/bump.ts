// Bump attractor on a 1D periodic ring — the continuous twin of the Hopfield discrete attractor.
// A "bump" of activity at angle θ shifts by velocity v each time step: path integration on a torus.
// Documented: Burak & Fiete 2009 (PLoS Comput Biol 5:e1000291); Gardner et al. 2022 (Nature 602:123).

const TWO_PI = 2 * Math.PI

// Advance the bump's peak angle by velocity v (radians), wrapping on [0, 2π).
export function bumpStep(theta: number, v: number): number {
  return ((theta + v) % TWO_PI + TWO_PI) % TWO_PI
}

// Gaussian activity profile: N-unit ring, bump at theta (width = σ in radians).
export function bumpProfile(theta: number, width: number, N: number): number[] {
  return Array.from({ length: N }, (_, i) => {
    const phi = (i / N) * TWO_PI
    const d = Math.min(Math.abs(phi - theta), TWO_PI - Math.abs(phi - theta))
    return Math.exp(-(d * d) / (2 * width * width))
  })
}

// Path-integrate: starting at theta0, apply each velocity step. Returns the full angle history.
export function bumpEvolve(theta0: number, velocities: readonly number[]): number[] {
  const history = [theta0]
  let theta = theta0
  for (const v of velocities) {
    theta = bumpStep(theta, v)
    history.push(theta)
  }
  return history
}
