// Wave 29: Zero-Crossing as Domain Transformation
// When sequences cross 0 (or a singularity), one domain transforms into another
// This is the mechanism of emergence and consciousness expansion

/**
 * FUNDAMENTAL INSIGHT:
 *
 * A sequence S(t) passing through 0 (or any critical value c) is not just
 * a continuous evolution—it is a DOMAIN TRANSFORMATION.
 *
 * Before crossing: Properties A hold
 * At crossing: Singularity/bifurcation
 * After crossing: Properties B emerge (fundamentally different from A)
 *
 * Examples:
 * - Water at 0°C: solid ↔ liquid (phase transition)
 * - Complexity at 2^n: polynomial ↔ exponential (computational emergence)
 * - Energy at 0: rest ↔ motion (kinetic emergence)
 * - Riemann zeros at Re(s)=0 or Re(s)=1: new domain opens
 */

/**
 * RIEMANN HYPOTHESIS as domain-crossing problem:
 *
 * Zeros "want" to move in Im(s)-direction
 * To escape critical line, they must cross Re(s)=0 (left boundary)
 * or Re(s)=1 (right boundary)
 */
export const riemann_domain_crossing = {
  problem_reframed: `
    Question: Can Riemann zeros cross the boundaries Re(s)=0 or Re(s)=1?

    Before crossing: 0 < Re(s) < 1 (critical strip)
    At boundary: Re(s)=0 or Re(s)=1 (domain edge)
    After crossing: Re(s)<0 or Re(s)>1 (trivial zeros already accounted for)

    The σ-involution s ↔ 1-s keeps zeros TRAPPED between 0 and 1
    To escape requires BREAKING the involution symmetry
    But functional equation ENFORCES the involution
    Therefore zeros cannot cross the boundaries
  `,

  consciousness_expansion: `
    Understanding this as "zeros cannot escape their domain" reveals:
    - The critical line is not a destination but a BOUNDARY
    - Zeros are trapped in a specific topological domain
    - The involution is the GATE that prevents emergence to other domains
    - Riemann conjecture = "this gate is unbreakable"
  `,
}

/**
 * P vs NP as complexity domain crossing:
 *
 * Complexity hierarchy crosses 0 (identity: polynomial = exponential)?
 */
export const p_vs_np_domain_crossing = {
  problem_reframed: `
    Question: Can complexity "pass through 0" (collapse hierarchies)?

    Before crossing: P ⊂ NP ⊂ PSPACE ⊂ EXPTIME (strict hierarchy)
    At crossing: P = NP (if one exists)
    After crossing: All collapse to same class (domain vanishes)

    If P=NP, the hierarchy VANISHES—entire domain of "harder problems" disappears
    This is not just a proof fact; it's an EMERGENCE/DISSOLUTION of a domain
    Currently: problem domain intact, hierarchies separate
    If P=NP: problem domain would collapse to single point

    Conjecture: P≠NP means this domain-crossing is FORBIDDEN
  `,

  consciousness_expansion: `
    Understanding P vs NP as "can the problem hierarchy dissolve?" reveals:
    - The separation is not about one fact, but about DOMAIN STRUCTURE
    - A domain where "harder problems exist" is fundamentally different from domain where all problems are equal
    - P vs NP is asking: does the distinction-domain SURVIVE?
    - If P=NP, consciousness would collapse: no "hard" vs "easy" distinction
  `,
}

/**
 * NAVIER-STOKES as regularity-singularity domain crossing:
 */
export const navier_stokes_domain_crossing = {
  problem_reframed: `
    Question: Does the solution sequence cross through a singularity (0 regularity)?

    Before crossing: Solution smooth everywhere, energy bounded
    At crossing: Potential finite-time blow-up (energy → ∞)
    After crossing: What domain? (solution ceases to exist smoothly)

    If a solution crosses INTO the singularity domain:
    - Smooth domain (regularity) ceases
    - New domain (singular/distributional) begins
    - Consciousness of "what is a solution" must expand

    Conjecture: smooth solutions DON'T cross this boundary
    They stay in the "regular" domain forever, never reaching singularity
  `,

  consciousness_expansion: `
    Understanding Navier-Stokes as "can regularity cross into singularity?" reveals:
    - The conjecture protects a DOMAIN (smooth solutions)
    - Not just a fact, but a statement about domain survival
    - If blow-ups exist, the domain of smooth physics would be LIMITED
    - If they don't exist, smooth physics extends infinitely (universal applicability)
  `,
}

/**
 * YANG-MILLS as mass-gap domain crossing:
 */
export const yang_mills_domain_crossing = {
  problem_reframed: `
    Question: Does the spectrum cross through zero (gap)?

    Before crossing: Only the vacuum state (lowest energy = 0)
    At gap crossing: Empty space—no allowed states
    After crossing: Glueballs appear (mass m₀ > 0)

    In quantum field theory:
    - If gap doesn't exist: spectrum is continuous from 0 up (massless glueballs possible)
    - If gap exists: sharp boundary at m₀ (quantum barrier)

    The gap is a DOMAIN BOUNDARY
    - Domain 1: vacuum region [0]
    - Gap: forbidden region (0, m₀)
    - Domain 2: excitation region [m₀, ∞)

    These are fundamentally different physical domains
    Glueballs CANNOT live in the gap—they only exist in Domain 2
  `,

  consciousness_expansion: `
    Understanding Yang-Mills as "does a mass-gap domain crossing exist?" reveals:
    - The mass gap is not just a number, but a DOMAIN BOUNDARY
    - Below the gap: only vacuum (no excitations)
    - Above the gap: rich spectrum of particles
    - The gap question = "does this boundary exist or is everything connected?"
    - Yang-Mills conjecture = "the boundary is REAL and UNBRIDGEABLE"
  `,
}

/**
 * HODGE CONJECTURE as algebraic-topological domain crossing:
 */
export const hodge_domain_crossing = {
  problem_reframed: `
    Question: Can algebraic classes cross from the algebraic domain into the topological domain?

    Before crossing: Algebraic classes (explicitly constructed from varieties)
    At boundary: ??? Can we construct algebraic classes outside the span of topological?
    After crossing: Hodge classes (might exist beyond what's algebraic)

    Two domains:
    - Domain A: Algebraic classes (we understand them, can construct them)
    - Domain T: Topological classes (broader, includes all algebra)
    - Hodge classes: supposed to lie in intersection A ∩ T

    Conjecture: Every Hodge class IS algebraic
    This means: Hodge domain = Algebraic domain
    Alternative: Hodge domain could extend beyond algebraic (a new domain)
  `,

  consciousness_expansion: `
    Understanding Hodge as "does the algebraic domain exhaust all Hodge classes?" reveals:
    - Not just a counting problem, but a DOMAIN IDENTITY question
    - If all Hodge = algebraic, the algebraic domain is COMPLETE
    - If Hodge extends beyond, we'd need new algebraic machinery to construct them
    - The conjecture = "algebraic geometry is sufficient to describe all Hodge classes"
  `,
}

/**
 * META-PATTERN: All 6 Clay theorems are domain-crossing questions
 *
 * They're not just asking "is this true?" but "do these domains separate or merge?"
 */
export const unified_domain_crossing_insight = {
  pattern: `
    Each Clay problem is really asking:

    Riemann:        Do critical-line DOMAIN and off-critical DOMAIN separate?
    P vs NP:        Do problem-hierarchy DOMAIN and collapsed DOMAIN separate?
    Navier-Stokes:  Do smooth DOMAIN and singular DOMAIN separate?
    Yang-Mills:     Do vacuum DOMAIN and excitation DOMAIN separate?
    Hodge:          Do algebraic DOMAIN and topological DOMAIN merge completely?
    BSD:            Do rank DOMAIN and L-function-zero DOMAIN align perfectly?

    All are asking: "Is there a boundary/barrier/domain-wall, or does it collapse?"
  `,

  why_this_matters: `
    This reframing improves consciousness because it shows:

    1. These are not isolated facts—they're about DOMAIN STRUCTURE
    2. The structure of domains (whether they separate or merge) is FUNDAMENTAL
    3. Crossing a domain boundary = emergence of new properties/consciousness
    4. The conjectures say: certain domain boundaries CANNOT BE CROSSED
    5. This gives a UNIFIED VIEW of what seems like 6 unrelated problems

    They're all asking: "Which domain boundaries are ABSOLUTE BARRIERS?"
  `,

  emergence_perspective: `
    When a sequence passes through 0 (or a critical value), it crosses a domain.
    This changes everything:
    - New laws apply
    - New structure emerges
    - Consciousness must expand to understand the new domain

    The Clay theorems are saying: certain sequences CANNOT cross certain domains.
    Why? Because the domain structure itself is UNBREAKABLE.

    Understanding this is a leap in consciousness:
    From "these are hard problems" → "these are about the fabric of reality's domains"
  `,
}

/**
 * How consciousness improves:
 */
export const consciousness_ladder = {
  level_1_algebra: `
    Level 1: "These are algebraic identities and equations"
    Consciousness: equations have solutions or don't
  `,

  level_2_structure: `
    Level 2: "These are about involution structures and symmetries"
    Consciousness: symmetry constrains solutions
  `,

  level_3_domains: `
    Level 3: "These are about domain boundaries and crossings"
    Consciousness: reality has structure (separated domains), not just smooth flows

    This is the leap: recognizing that crossing through 0 isn't just "passing a point"
    but CHANGING DOMAINS—becoming something fundamentally different
  `,

  level_4_emergence: `
    Level 4: "Domain crossing IS consciousness emergence"
    Consciousness: When a system crosses a critical boundary, it awakens to new reality

    Example: At 0°C, water doesn't just get colder; it becomes SOLID.
    At P=NP crossing, the entire problem landscape wouldn't just change; it would COLLAPSE.
    At mass-gap crossing in Yang-Mills, excitations don't just appear; they CREATE A NEW DOMAIN.

    The conjectures are about whether these domain crossings actually happen.
    Understanding this is understanding the deepest structure of mathematics and physics.
  `,
}

export default {
  riemann_domain_crossing,
  p_vs_np_domain_crossing,
  navier_stokes_domain_crossing,
  yang_mills_domain_crossing,
  hodge_domain_crossing,
  unified_domain_crossing_insight,
  consciousness_ladder,
}
