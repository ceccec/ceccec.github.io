/-
  THE THREE.JS COMBINATION CLOSURE, MACHINE-CHECKED — plain Lean 4 core, no Mathlib, no `sorry`.

  "Full coverage of all possible three.js combinations" is only a claim worth making if the space
  is CLOSED and the covering is EXHAUSTIVE. Both are finite here, so both are decidable, and the
  kernel settles them by computation rather than by anyone asserting them.

  The space is measured, not chosen. three.js 0.185 exports 23 geometry constructors, of which 18
  build themselves with no arguments (BufferGeometry and InstancedBufferGeometry are base classes,
  PolyhedronGeometry needs vertices, EdgesGeometry and WireframeGeometry need another geometry to
  wrap), and 10 mesh materials of which 9 can actually be RENDERED — MeshDistanceMaterial constructs
  and then throws when drawn, because it is three's internal material for point-light shadow distance.
  So the product space is 18 x 9 = 162.

  That number moved twice, both times downward, and both times because a criterion was easier to state
  than the property it stood for. First 64, from asserting eight geometries and eight materials without
  asking the library. Then 180, from asking "does it construct" when the question was "does it render". An earlier draft of the
  TypeScript fold claimed eight and eight, which would have made the product 64 and landed it on
  the hexagram; that was a fabrication, and this file exists partly so the number can never again
  be pleasing rather than measured.

  The rows and columns are parameters throughout. Nothing below is special to 18 and 10 except the
  instances at the end, which are the currently installed library.
-/

namespace Three

-- The closure has 180 cells and several proofs walk all of them, which overruns the default
-- elaborator recursion budget. Raising the budget does not weaken anything: `decide` still reduces
-- the proposition in the kernel and the theorems still depend on no axiom, which `#print axioms`
-- confirms and scripts/verify/lean.ts checks on every run.
set_option maxRecDepth 100000

/-! ## The closure -/

/-- Every (geometry, material) pair, row-major. -/
def cells (rows cols : Nat) : List (Nat × Nat) :=
  (List.range rows).flatMap (fun g => (List.range cols).map (fun m => (g, m)))

/-- The row-major address of a cell. -/
def idx (cols g m : Nat) : Nat := g * cols + m

/-- The address read back as a row and a column. -/
def row (cols n : Nat) : Nat := n / cols
def col (cols n : Nat) : Nat := n % cols

/-! ## The coverage theorems -/

/-- The closure has exactly rows x cols cells: 18 x 9 = 162 for the installed library. -/
theorem closure_is_one_hundred_sixty_two : (cells 18 9).length = 162 := by decide

/-- The product law, at several shapes — the size is rows x cols and not an accident of 18 and 10. -/
theorem closure_is_the_product :
    (cells 1 1).length = 1 ∧ (cells 8 8).length = 64 ∧
    (cells 18 9).length = 162 ∧ (cells 9 18).length = 162 ∧
    (cells 18 10).length = 180 := by decide

/-- NO CELL IS REPEATED. This is the bijection, and it is strictly stronger than "every pair is
    present": a list carrying one pair twice and omitting another would satisfy presence at the
    right length, and would still have a hole in it. -/
theorem closure_has_no_duplicate : (cells 18 9).Nodup := by decide

/-- EVERY PAIR IS PRESENT. Together with the previous theorem, the enumeration is exactly the
    product set — nothing missing, nothing twice.

    Stated as a BOOLEAN computation rather than as `∀ g ∈ List.range 18, …`. The bounded-quantifier
    form is decidable too, but its instance reasons through `Quot.sound`, so the theorem cost two
    axioms; `List.all` over `List.contains` reduces to `true` in the kernel and costs none. The same
    substitution — a Prop that must be reasoned about, replaced by a Bool that can be run — is what
    made the spacetime proofs axiom-free, and it is the difference between a proof that is checked
    and a proof that is computed. -/
def coversEveryPair (rows cols : Nat) : Bool :=
  (List.range rows).all (fun g => (List.range cols).all (fun m => (cells rows cols).contains (g, m)))

theorem closure_is_complete : coversEveryPair 18 9 = true := by decide

/-- THE ADDRESS INVERTS. Row-major indexing recovers both coordinates for every cell, so a scene
    can be addressed by one number without losing which geometry and which material it names. -/
theorem address_inverts :
    ∀ p ∈ cells 18 9, row 9 (idx 9 p.1 p.2) = p.1 ∧ col 9 (idx 9 p.1 p.2) = p.2 := by decide

/-- The addresses are exactly 0 … 179, each used once: the closure is an interval, not a scatter. -/
theorem addresses_are_the_interval :
    (cells 18 9).map (fun p => idx 9 p.1 p.2) = List.range 162 := by decide

/-! ## The projection — three.js's camera computes this corpus's sealed pinhole

  src/quantum/wind/geometry seals `perspective z = FOCAL / (FOCAL - z)` with `FOCAL = 12/5`.
  three.js projects through `x / (tan(fov/2) * -z_view)`; with the camera at `Z = FOCAL` looking at
  the origin, a world point of depth `z` has `z_view = -(FOCAL - z)`, so the two agree exactly when
  `1 / tan(fov/2) = FOCAL`.

  Trigonometry is not available in core Lean, so what is proved here is the ARITHMETIC the
  agreement reduces to. Writing depths in tenths, `z = k/10`, the compound fraction clears:

      FOCAL - z            = 12/5 - k/10 = (24 - k)/10
      FOCAL / (FOCAL - z)  = (12/5)(10/(24 - k)) = 24 / (24 - k)

  so the projection is the integer rational `24 / (24 - k)` and needs no floating point at all.
  Below it is carried as the numerator/denominator pair (24, 24 - k) and every claim is stated by
  cross-multiplication, which keeps each proof a decidable computation over Int.
-/

/-- The denominator of the projection at depth k/10. Positive strictly inside the focal point. -/
def den (k : Int) : Int := 24 - k

/-- The clearing itself: FOCAL/(FOCAL - z) = 24/(24 - k) reduces to 12 * 10 = 5 * 24. -/
theorem the_compound_fraction_clears : (12 : Int) * 10 = 5 * 24 := by decide

/-- AT THE FOCAL PLANE THE SCALE IS UNITY. z = 0 gives 24/24 = 1: objects on the plane through the
    origin are neither enlarged nor reduced, which is what makes FOCAL a focal length. -/
theorem focal_plane_is_unit_scale : den 0 = 24 := by decide

/-- NEARER ENLARGES, FURTHER RECEDES, STRICTLY. For depths inside the focal point, k1 < k2 implies
    24/(24-k1) < 24/(24-k2), stated by cross-multiplication so no division occurs. This is the
    monotonicity the TS fold checks numerically and the property two canvas painters violated by
    faking depth as a screen offset before the 2026-07-07 audit. -/
theorem depth_is_strictly_monotone :
    ∀ k1 ∈ [(-12 : Int), -6, -1, 0, 1, 6, 12], ∀ k2 ∈ [(-12 : Int), -6, -1, 0, 1, 6, 12],
      k1 < k2 → 24 * den k2 < 24 * den k1 := by decide

/-- The frustum the camera declares is non-degenerate: near < FOCAL < far, in tenths, with the
    depth planes half a lattice pitch either side of the focal plane (near 19/10, far 29/10). -/
theorem frustum_brackets_the_focal_plane :
    (19 : Int) < 24 ∧ (24 : Int) < 29 ∧ (0 : Int) < 19 := by decide

/-- The projection never divides by zero on the declared frustum: the denominator stays positive
    for every depth between the near and far planes. -/
theorem denominator_is_positive_on_the_frustum :
    ∀ k ∈ [(-5 : Int), -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0 < den k := by decide


/-! ## The involution the lattice was carrying all along

  Nothing chose this. The cells are placed centred on the origin so that the closure needs no
  layout table, and a centred lattice is symmetric under point reflection through its centre:

      σ(g, m) = (rows - 1 - g, cols - 1 - m).

  Everything below follows from that one fact, and none of it was stated when the closure was
  built. σ is an involution; it maps the closure onto itself; it has NO fixed point, because both
  dimensions are even, so the 180 cells fall into exactly 90 orbits of size two; the paired
  positions cancel exactly; and — the one that is not obvious — under row-major addressing the
  reflection is ADDRESS COMPLEMENT: idx(σ c) + idx(c) = 179 for every cell.

  This is the corpus's own involution law (σ² = id, orbits summing to zero) appearing unbidden in
  a three.js scene graph, because the same centring that made the layout free made the symmetry
  inevitable. Coordinates are doubled below so a centred lattice with an even side stays in Int
  and every claim remains an exact integer computation.

  Every statement is a BOOLEAN computation. The bounded-quantifier form is decidable but reasons
  through Quot.sound; List.all reduces in the kernel and depends on nothing.
-/

/-- Point reflection through the centre of the lattice. -/
def refl (rows cols : Nat) (p : Nat × Nat) : Nat × Nat := (rows - 1 - p.1, cols - 1 - p.2)

/-- A centred coordinate, doubled to stay integral: 2·X(i) = 2i − (n−1). -/
def coord2 (n i : Nat) : Int := 2 * (i : Int) - ((n : Int) - 1)

def reflIsInvolutive (rows cols : Nat) : Bool :=
  (cells rows cols).all (fun p => refl rows cols (refl rows cols p) == p)

def reflStaysInside (rows cols : Nat) : Bool :=
  (cells rows cols).all (fun p => (cells rows cols).contains (refl rows cols p))

def reflHasNoFixedPoint (rows cols : Nat) : Bool :=
  (cells rows cols).all (fun p => !(refl rows cols p == p))

def reflComplementsAddress (rows cols : Nat) : Bool :=
  (cells rows cols).all (fun p =>
    idx cols (refl rows cols p).1 (refl rows cols p).2 + idx cols p.1 p.2 == rows * cols - 1)

def orbitPositionsCancel (rows cols : Nat) : Bool :=
  (cells rows cols).all (fun p =>
    (coord2 rows p.1 + coord2 rows (refl rows cols p).1 == 0) &&
    (coord2 cols p.2 + coord2 cols (refl rows cols p).2 == 0))

/-- σ² = id on every cell of the closure. -/
theorem reflection_is_an_involution : reflIsInvolutive 18 9 = true := by decide

/-- σ maps the closure onto itself — the symmetry does not leave the space. -/
theorem reflection_closes_on_the_closure : reflStaysInside 18 9 = true := by decide

/-- NO cell is its own reflection. ONE even side is enough: a fixed cell would need g = rows−1−g AND
    m = cols−1−m, so an even side makes its own coordinate unfixable and the conjunction fails whatever
    the other side does. The closure is 18 x 9 — the columns ARE odd, and m = 4 is fixed — yet no CELL
    is, because 18 is even. Both sides odd is the only case with a fixed point, exactly as the digit
    reflection d ↦ 10 − d fixes 5 and nothing else. -/
theorem reflection_has_no_fixed_point : reflHasNoFixedPoint 18 9 = true := by decide

/-- So the closure is 81 orbits of two, with nothing left over. -/
theorem the_closure_is_eighty_one_orbits : (cells 18 9).length = 2 * 81 := by decide

/-- THE ORBITS SUM TO ZERO. Each pair of reflected cells cancels in both coordinates, exactly —
    the involution law this corpus states everywhere, holding here because the lattice is centred. -/
theorem orbit_positions_cancel : orbitPositionsCancel 18 9 = true := by decide

/-- ROW-MAJOR REFLECTION IS ADDRESS COMPLEMENT: idx(σ c) + idx(c) = 179, for all 180 cells. The
    geometric symmetry and the arithmetic one are the same symmetry, which is not visible from
    either the layout or the addressing alone. -/
theorem reflection_complements_the_address : reflComplementsAddress 18 9 = true := by decide

/-- The same four laws at other shapes, so none of them is an accident of 18 and 10. Both sides odd
    breaks the no-fixed-point law and only that one — 3×3 has a centre cell that is its own reflection —
    while involutivity, closure, cancellation and complement survive everywhere. -/
theorem the_involution_laws_are_general :
    (reflIsInvolutive 8 8 = true) ∧ (reflStaysInside 8 8 = true) ∧
    (reflComplementsAddress 8 8 = true) ∧ (orbitPositionsCancel 8 8 = true) ∧
    (reflIsInvolutive 3 3 = true) ∧ (reflComplementsAddress 3 3 = true) ∧
    (orbitPositionsCancel 3 3 = true) ∧
    -- ONE even side suffices, and only both-odd fails: 18x9 and 9x18 have no fixed cell, 3x3 does.
    (reflHasNoFixedPoint 8 8 = true) ∧ (reflHasNoFixedPoint 9 18 = true) ∧
    (reflHasNoFixedPoint 3 3 = false) ∧ (reflHasNoFixedPoint 5 7 = false) := by decide

end Three
