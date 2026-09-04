# The three.js Combination Closure

**Every combination three.js can build from its own primitives — all 180 of them — is enumerated, addressed, rendered, and proved complete in the Lean kernel with no axioms.**

Not a gallery. A **closure**: a space that is finite, measured from the library rather than described, and covered exhaustively enough that the covering is a theorem instead of a claim.

<ThreeClosure />

---

## What is closed, and how big it actually is

three.js exports **23 geometry constructors** and **10 mesh materials**. Five of the geometries cannot build themselves — `BufferGeometry` and `InstancedBufferGeometry` are base classes, `PolyhedronGeometry` needs vertices handed to it, and `EdgesGeometry` and `WireframeGeometry` each need another geometry to wrap. That leaves **18 self-constructing geometries**, and the product space is

$$
|\mathcal{G}| \times |\mathcal{M}| \;=\; 18 \times 10 \;=\; 180 .
$$

The criterion is a **construction, not a list**. A geometry is in the closure if `new T[name]()` yields a `position` attribute with vertices. A list of exceptions would rot the moment three.js added a primitive; a construction test simply returns a bigger number, and every theorem below is stated over an arbitrary catalogue so it keeps holding when that happens.

### The number was wrong first, and that is worth recording

The first draft of this work declared three.js to have "eight built-in geometries" and "eight built-in materials", so that the product was $8 \times 8 = 64$ — landing exactly on the hexagram, the corpus's own component closure, and its 64-cell architecture. It was a **fabrication**. Nobody had asked the library. The coincidence was pleasing, unchecked, and false, and it was committed in the same session that removed a different unchecked list from this codebase.

So no primitive name appears anywhere in `src/` now. The catalogue is measured — by the verification gate in Node, and independently by your browser in the figure above — and handed to a fold that names nothing.

---

## The addressing

Cells are laid out row-major on the lattice their two indices already define, so the closure needs no separate layout table:

$$
\mathrm{idx}(g, m) = g \cdot |\mathcal{M}| + m , \qquad
\mathrm{row}(n) = \lfloor n / |\mathcal{M}| \rfloor , \qquad
\mathrm{col}(n) = n \bmod |\mathcal{M}| .
$$

**Coverage is proved in two halves, and the weaker half is never stated alone.** That every pair is *present* would also be true of a list carrying one pair twice and omitting another — the right length with a hole in it. So presence and non-duplication are separate theorems, and together they force the enumeration to be exactly the product set.

---

## The camera is derived, not chosen

This is the part that makes the port honest rather than merely working.

`src/quantum/wind/geometry` seals a projection law: **depth *is* the perspective divide**,

$$
\mathrm{perspective}(z) = \frac{F}{F - z}, \qquad F = \tfrac{12}{5}.
$$

three.js projects through a `PerspectiveCamera` as $x_{\text{ndc}} = x / (\tan(\mathrm{fov}/2) \cdot -z_{\text{view}})$. Put the camera at $Z = F$ looking at the origin, so a world point at depth $z$ has $z_{\text{view}} = -(F - z)$. The two agree **for every point** precisely when $1/\tan(\mathrm{fov}/2) = F$, that is

$$
\boxed{\ \mathrm{fov} = 2\arctan(1/F) = 45.239730^\circ\ }
$$

So **three.js does not replace the sealed projection — it is configured by it.** The renderer inherits the depth law instead of re-deriving it. That matters here for a specific reason: an audit on 2026-07-07 found two canvas painters faking depth as a $z \to y$ screen offset while these projection atoms sat sealed and unused a few files away. A ported renderer that computed its own perspective would have repeated exactly that.

The agreement is verified two ways — numerically to **4 ulp** by inverting the fov through real trigonometry (not by restating the formula), and exactly in Lean as integer arithmetic.

### Why the Lean proof needs no floating point

Core Lean has no trigonometry, so what is proved is the arithmetic the agreement reduces to. Writing depths in tenths, $z = k/10$, the compound fraction clears completely:

$$
F - z = \tfrac{12}{5} - \tfrac{k}{10} = \tfrac{24-k}{10},
\qquad
\frac{F}{F-z} = \frac{12}{5}\cdot\frac{10}{24-k} = \frac{24}{24-k}.
$$

The pinhole is an **integer rational**. Unit scale at the focal plane ($24/24 = 1$), strict monotonicity in depth by cross-multiplication, a non-degenerate frustum, and no division by zero on it — all decidable, all decided.

---

## The theorems

Eleven, in [`src/pair/formal/proofs/three.lean`](https://github.com/ceccec/ceccec.github.io/blob/main/src/pair/formal/proofs/three.lean). **All eleven depend on no axiom at all** — `#print axioms` reports "does not depend on any axioms" for every one, which the verification gate re-checks on every run.

| Theorem | What it settles |
|---|---|
| `closure_is_one_hundred_eighty` | the closure has exactly 180 cells |
| `closure_is_the_product` | the size is $\text{rows} \times \text{cols}$, at four shapes — not an accident of 18 and 10 |
| `closure_has_no_duplicate` | no cell is repeated (`Nodup`) |
| `closure_is_complete` | every pair is present |
| `address_inverts` | row-major addressing recovers both coordinates, for all 180 |
| `addresses_are_the_interval` | the addresses are exactly $0 \ldots 179$ — an interval, not a scatter |
| `the_compound_fraction_clears` | $F/(F-z)$ really is $24/(24-k)$ |
| `focal_plane_is_unit_scale` | objects on the focal plane are neither enlarged nor reduced |
| `depth_is_strictly_monotone` | nearer enlarges, further recedes, strictly |
| `frustum_brackets_the_focal_plane` | near $<F<$ far, non-degenerate |
| `denominator_is_positive_on_the_frustum` | the projection never divides by zero |

**A note on what made them axiom-free.** `closure_is_complete` was first written as a bounded quantifier, `∀ g ∈ List.range 18, ∀ m ∈ List.range 10, (g,m) ∈ cells 18 10`. That form is decidable, but its instance reasons through `Quot.sound`, so the theorem cost two axioms. Restated as a Boolean computation — `List.all` over `List.contains`, proved `= true` — it reduces in the kernel and costs none. That is the difference between a proof that is *checked* and a proof that is *computed*, and it is the same substitution that made this corpus's spacetime proofs axiom-free.

---

## The dependency boundary

`three.js` is a **devDependency of the site**. It is not a dependency of the published kernel, and it cannot become one by accident:

- both `package.json` manifests declare `"dependencies": {}`, asserted on every verification run;
- `src/fire/li` states the graphics capability as *canvas, zero dependencies*, which an import of three would falsify;
- the gate **refuses any import of `three` under `src/`**, in any spelling.

`src/` emits pure data — indices, positions, and the names it was handed. The renderer in `.vitepress` maps those names onto real constructors. The dependency lives on one side of a boundary that is enforced rather than intended.

---

## Reproduce it

```bash
npm run verify:three
```

The gate measures the installed library, builds the closure, checks all six coverage facets, converts the field of view with three.js's own `MathUtils.radToDeg`, and refuses the build if any file under `src/` has imported three.

```bash
npm run verify:lean
```

Compiles all 15 Lean files and reports, per file, how many theorems depend on no axiom.

---

## References

- **three.js** — [threejs.org](https://threejs.org), [PerspectiveCamera](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera), [geometry index](https://threejs.org/docs/#api/en/geometries/BoxGeometry), [material index](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial). Version measured here: 0.185.
- **Pinhole projection** — the perspective divide is standard projective geometry; nothing about the formula is claimed as novel here. What is claimed is that a corpus's own sealed projection and a library's camera can be shown to *agree exactly*, by derivation rather than by tuning.
- **Lean 4** — [lean-lang.org](https://lean-lang.org). No Mathlib: every proof here is core-decidable.
- **`#print axioms`** — the mechanism behind the axiom-freedom claim. See [Theorem Proving in Lean 4](https://lean-lang.org/theorem_proving_in_lean4/).
- **Source** — [`src/quantum/wind/geometry/index.ts`](https://github.com/ceccec/ceccec.github.io/blob/main/src/quantum/wind/geometry/index.ts) (the fold), [`scripts/verify/three.ts`](https://github.com/ceccec/ceccec.github.io/blob/main/scripts/verify/three.ts) (the gate), [`src/pair/formal/proofs/three.lean`](https://github.com/ceccec/ceccec.github.io/blob/main/src/pair/formal/proofs/three.lean) (the proofs).
