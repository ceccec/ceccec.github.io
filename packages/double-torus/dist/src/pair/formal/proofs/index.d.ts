/**
 * GROWTH-RATE IMPOSSIBILITY PATTERN
 *
 * Meta-theorem: For each Clay problem, define a counting function G(T) such that:
 *
 * 1. Observed: G(T) = F(T) where F is empirically measured or proven
 * 2. Prediction if canonical σ holds: G(T) = F(T)
 * 3. Prediction if solutions exist off σ-fixed-point: G(T) > F(T) strictly
 * 4. Contradiction: empirical G(T) cannot exceed proven bound F(T)
 * 5. Therefore: all solutions lie on σ-fixed-point
 *
 * This applies universally if we can find the right counting function for each domain.
 */
/**
 * RIEMANN: Zero-counting function N(T)
 */
export declare const riemann_growth_proof: {
    domain: string;
    counting_function: string;
    observed_growth: string;
    prediction_if_canonical: string;
    prediction_if_off_canonical: string;
    contradiction: string;
    rigor_gap: string;
};
/**
 * P vs NP: Complexity-decision-tree counting function D(n)
 */
export declare const p_vs_np_growth_proof: {
    domain: string;
    counting_function: string;
    observed_bound: string;
    prediction_if_canonical: string;
    prediction_if_p_not_np: string;
    growth_argument: string;
    rigor_gap: string;
};
/**
 * NAVIER-STOKES: Regularity-violation count R(T)
 */
export declare const navier_stokes_growth_proof: {
    domain: string;
    counting_function: string;
    observed_bound: string;
    prediction_if_canonical: string;
    prediction_if_blow_up_exists: string;
    physics_intuition: string;
    rigor_gap: string;
};
/**
 * HODGE: Algebraic-versus-topological class count C(n)
 */
export declare const hodge_growth_proof: {
    domain: string;
    counting_function: string;
    observed_ratio: string;
    prediction_if_canonical: string;
    prediction_if_hodge_fails: string;
    rigor_gap: string;
};
/**
 * YANG-MILLS: Mass-spectrum gap-count G(E)
 */
export declare const yang_mills_growth_proof: {
    domain: string;
    counting_function: string;
    observed_spectrum: string;
    prediction_if_canonical: string;
    prediction_if_no_gap: string;
    rigor_gap: string;
};
/**
 * BSD: Rank-versus-L-function-zero count correlation R(E)
 */
export declare const bsd_growth_proof: {
    domain: string;
    counting_function: string;
    observed_correlation: string;
    prediction_if_canonical: string;
    prediction_if_bsd_fails: string;
    rigor_gap: string;
};
/**
 * META-PATTERN: Why growth-rate impossibility works everywhere
 */
export declare const unified_pattern: {
    insight: string;
    why_powerful: string;
    universality: string;
    next_steps: string[];
};
export declare const growthRateImpossibilityUnifiedDefault: {
    riemann_growth_proof: {
        domain: string;
        counting_function: string;
        observed_growth: string;
        prediction_if_canonical: string;
        prediction_if_off_canonical: string;
        contradiction: string;
        rigor_gap: string;
    };
    p_vs_np_growth_proof: {
        domain: string;
        counting_function: string;
        observed_bound: string;
        prediction_if_canonical: string;
        prediction_if_p_not_np: string;
        growth_argument: string;
        rigor_gap: string;
    };
    navier_stokes_growth_proof: {
        domain: string;
        counting_function: string;
        observed_bound: string;
        prediction_if_canonical: string;
        prediction_if_blow_up_exists: string;
        physics_intuition: string;
        rigor_gap: string;
    };
    hodge_growth_proof: {
        domain: string;
        counting_function: string;
        observed_ratio: string;
        prediction_if_canonical: string;
        prediction_if_hodge_fails: string;
        rigor_gap: string;
    };
    yang_mills_growth_proof: {
        domain: string;
        counting_function: string;
        observed_spectrum: string;
        prediction_if_canonical: string;
        prediction_if_no_gap: string;
        rigor_gap: string;
    };
    bsd_growth_proof: {
        domain: string;
        counting_function: string;
        observed_correlation: string;
        prediction_if_canonical: string;
        prediction_if_bsd_fails: string;
        rigor_gap: string;
    };
    unified_pattern: {
        insight: string;
        why_powerful: string;
        universality: string;
        next_steps: string[];
    };
};
/**
 * FUNDAMENTAL OBSERVATION:
 *
 * Classical approach (Waves 1-29):
 * ✓ σ-involution structure exists
 * ✓ Fixed points are identifiable
 * ✓ Growth-rate bounds make sense
 * ✗ CANNOT prove: Why domain MUST stay separated
 *
 * The missing piece: Classical logic says "either the boundary exists OR it doesn't"
 * But we cannot PROVE which, only observe that empirically one holds.
 *
 * Quantum approach: The boundary exists in SUPERPOSITION
 * - Before measurement: domain crossing is both possible AND impossible
 * - Upon observation: collapses to what we measure (boundary intact)
 * - The theorem is: this superposition is STABLE (never collapses the wrong way)
 */
/**
 * QUANTUM SUPERPOSITION OF DOMAINS
 *
 * Each Clay theorem can be expressed as a quantum state:
 * |ψ⟩ = α|canonical⟩ + β|off-canonical⟩
 *
 * Where:
 * |canonical⟩ = solution on σ-fixed-point (critical line, P≠NP, smooth, gap exists, etc.)
 * |off-canonical⟩ = solution off σ-fixed-point (escape attempt, hierarchy collapse, etc.)
 */
export declare const quantum_superposition_model: {
    state_space: string;
    why_quantum_necessary: string;
    measurement_interpretation: string;
};
/**
 * QUANTUM ENTANGLEMENT OF THE 6 THEOREMS
 *
 * They are not independent—they are ENTANGLED quantum states
 */
export declare const quantum_entanglement_6_theorems: {
    entangled_state: string;
    bell_inequality_analog: string;
    why_matters: string;
};
/**
 * QUANTUM TUNNELING THROUGH DOMAIN BARRIERS
 *
 * Why can't solutions escape their domains?
 */
export declare const quantum_tunneling_barrier: {
    classical_barrier: string;
    quantum_barrier: string;
    topology_prevents_tunneling: string;
};
/**
 * QUANTUM COHERENCE AND DECOHERENCE
 *
 * Why do theorems stay "true" despite chaos?
 */
export declare const quantum_coherence_theorem_stability: {
    classical_fragility: string;
    quantum_robustness: string;
    why_computation_required: string;
};
/**
 * QUANTUM COMPUTING IMPLEMENTATION
 *
 * How to build a quantum circuit for Clay theorem verification
 */
export declare const quantum_circuit_clay_theorems: {
    general_structure: string;
    riemann_circuit: string;
    why_only_quantum: string;
};
/**
 * META-INSIGHT: THE THEOREMS ARE QUANTUM
 *
 * Not about quantum physics; about the nature of mathematical truth
 */
export declare const theorems_are_quantum: {
    realization: string;
    next_steps: string;
    consciousness_final_level: string;
};
export declare const quantumClayTheoremsDefault: {
    quantum_superposition_model: {
        state_space: string;
        why_quantum_necessary: string;
        measurement_interpretation: string;
    };
    quantum_entanglement_6_theorems: {
        entangled_state: string;
        bell_inequality_analog: string;
        why_matters: string;
    };
    quantum_tunneling_barrier: {
        classical_barrier: string;
        quantum_barrier: string;
        topology_prevents_tunneling: string;
    };
    quantum_coherence_theorem_stability: {
        classical_fragility: string;
        quantum_robustness: string;
        why_computation_required: string;
    };
    quantum_circuit_clay_theorems: {
        general_structure: string;
        riemann_circuit: string;
        why_only_quantum: string;
    };
    theorems_are_quantum: {
        realization: string;
        next_steps: string;
        consciousness_final_level: string;
    };
};
/**
 * RIEMANN HYPOTHESIS PROOF ATTEMPT
 *
 * Claim: Every non-trivial zero of ζ(s) lies on Re(s) = 1/2
 *
 * Proof Strategy via σ-involution:
 * 1. Define canonical σ: s ↦ 1-s on ℂ
 * 2. Show σ² = identity (self-inverse)
 * 3. Functional equation: ζ(s) = χ(s)·ζ(1-s) forces σ-symmetry
 * 4. Fixed points of σ: {s | 1-s = s} = {1/2}
 * 5. Escape-path impossibility: prove no zero can exist off critical line
 * 6. Therefore all zeros at Re(s) = 1/2
 */
/**
 * Step 1-2: Define canonical σ and prove it's an involution
 */
export declare const riemann_involution: {
    name: string;
    definition: (s: {
        re: number;
        im: number;
    }) => {
        re: number;
        im: number;
    };
    self_inverse_proof: string;
    fixed_point_set: string;
};
/**
 * Step 3: Functional equation forces σ-symmetry
 *
 * ζ(s) = χ(s)·ζ(1-s) where χ(s) = 2^s π^(s-1) sin(πs/2) Γ(1-s)
 *
 * Key observation: If z is a zero of ζ, then ζ(z) = 0
 *   → χ(z)·ζ(1-z) = 0
 *   → Either χ(z) = 0 or ζ(1-z) = 0
 *   → χ(z) never vanishes (entire function with no zeros in finite plane)
 *   → Therefore ζ(1-z) = 0
 */
export declare const functional_equation_symmetry: {
    statement: string;
    proof_outline: string;
    critical_observation: string;
};
/**
 * Step 4: Escape-path impossibility argument
 *
 * The core argument: Why can't a zero exist off the critical line?
 */
export declare const escape_path_impossibility: {
    setup: string;
    the_problem: string;
    the_gap: string;
};
/**
 * Step 5: The missing piece — Rigorous N(T) = σ-forced-count identity
 *
 * What we need to prove:
 */
export declare const missing_riemann_proof_piece: {
    lemma: string;
    why_hard: string;
    potential_approach: string;
};
/**
 * Current Status Summary
 */
export declare const riemann_proof_status: {
    fully_proven: boolean;
    confidence: number;
    proven_pieces: string[];
    missing_pieces: string[];
    next_step_lean: string;
    honest_assessment: string;
};
export declare const riemannCanonicalInvolutionDefault: {
    riemann_involution: {
        name: string;
        definition: (s: {
            re: number;
            im: number;
        }) => {
            re: number;
            im: number;
        };
        self_inverse_proof: string;
        fixed_point_set: string;
    };
    functional_equation_symmetry: {
        statement: string;
        proof_outline: string;
        critical_observation: string;
    };
    escape_path_impossibility: {
        setup: string;
        the_problem: string;
        the_gap: string;
    };
    missing_riemann_proof_piece: {
        lemma: string;
        why_hard: string;
        potential_approach: string;
    };
    riemann_proof_status: {
        fully_proven: boolean;
        confidence: number;
        proven_pieces: string[];
        missing_pieces: string[];
        next_step_lean: string;
        honest_assessment: string;
    };
};
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
export declare const riemann_domain_crossing: {
    problem_reframed: string;
    consciousness_expansion: string;
};
/**
 * P vs NP as complexity domain crossing:
 *
 * Complexity hierarchy crosses 0 (identity: polynomial = exponential)?
 */
export declare const p_vs_np_domain_crossing: {
    problem_reframed: string;
    consciousness_expansion: string;
};
/**
 * NAVIER-STOKES as regularity-singularity domain crossing:
 */
export declare const navier_stokes_domain_crossing: {
    problem_reframed: string;
    consciousness_expansion: string;
};
/**
 * YANG-MILLS as mass-gap domain crossing:
 */
export declare const yang_mills_domain_crossing: {
    problem_reframed: string;
    consciousness_expansion: string;
};
/**
 * HODGE CONJECTURE as algebraic-topological domain crossing:
 */
export declare const hodge_domain_crossing: {
    problem_reframed: string;
    consciousness_expansion: string;
};
/**
 * META-PATTERN: All 6 Clay theorems are domain-crossing questions
 *
 * They're not just asking "is this true?" but "do these domains separate or merge?"
 */
export declare const unified_domain_crossing_insight: {
    pattern: string;
    why_this_matters: string;
    emergence_perspective: string;
};
/**
 * How consciousness improves:
 */
export declare const consciousness_ladder: {
    level_1_algebra: string;
    level_2_structure: string;
    level_3_domains: string;
    level_4_emergence: string;
};
export declare const zeroCrossingEmergenceDefault: {
    riemann_domain_crossing: {
        problem_reframed: string;
        consciousness_expansion: string;
    };
    p_vs_np_domain_crossing: {
        problem_reframed: string;
        consciousness_expansion: string;
    };
    navier_stokes_domain_crossing: {
        problem_reframed: string;
        consciousness_expansion: string;
    };
    yang_mills_domain_crossing: {
        problem_reframed: string;
        consciousness_expansion: string;
    };
    hodge_domain_crossing: {
        problem_reframed: string;
        consciousness_expansion: string;
    };
    unified_domain_crossing_insight: {
        pattern: string;
        why_this_matters: string;
        emergence_perspective: string;
    };
    consciousness_ladder: {
        level_1_algebra: string;
        level_2_structure: string;
        level_3_domains: string;
        level_4_emergence: string;
    };
};
/**
 * THE LEAN CORPUS, COUNTED FROM THE LEAN CORPUS.
 *
 * The README carried "11 files green" and "41 theorems" as typed literals — the two numbers
 * the whole involution claim rests on, hand-written next to the sentence saying nothing here
 * is assumed. When seven `sealedCoreIds.length = 0` theorems were deleted the count fell to
 * 34 and both literals became false while every gate stayed green, because a literal cannot
 * disagree with anything.
 *
 * They are read off the sources instead. `npm run verify:lean` proves the other half — that
 * the files compile, carry no `sorry`, and that every theorem depends on no axiom; this
 * counts what it proved. Deleting a theorem moves the README by itself.
 */
export declare function leanInvolutionCorpus(root?: string): {
    readonly files: number;
    readonly involutionFiles: number;
    readonly involutionTheorems: number;
    readonly byProblem: readonly {
        readonly file: string;
        readonly theorems: number;
    }[];
};
/**
 * THE MACHINE-CHECKED THEOREMS, IN LATEX.
 *
 * leanInvolutionCorpus counts what verify:lean proved; this reads the same files for their CONTENT —
 * each theorem's name, the doc comment above it, and the proposition itself — and sets them as
 * standard theorem environments. The paper then carries the statements Lean checked, in the form a
 * journal expects, rather than a reader being told a count and asked to take it.
 *
 * Nothing is translated or restated: the proposition is the Lean source verbatim inside \texttt, and
 * the tactic is named as the proof. An identifier like `sigma_is_an_involution` becomes readable text
 * for the environment's title, which is presentation, not paraphrase — the proposition beside it is
 * exact. A theorem whose Lean the kernel has not checked cannot appear here, because this reads only
 * the files verify:lean compiles.
 */
export type LeanTheoremLatex = {
    readonly file: string;
    readonly name: string;
    readonly title: string;
    readonly doc: string;
    readonly proposition: string;
    readonly tactic: string;
};
/** Every theorem in the sealed involution proofs, read from the Lean itself. */
export declare function leanTheoremsForLatex(root?: string): readonly LeanTheoremLatex[];
/** The same theorems as a LaTeX section — amsthm environments, one per machine-checked proposition. */
export declare function leanTheoremsAsLatex(root?: string): string;
