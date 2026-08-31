# Merkaba coil geometry — magnetic field (Biot–Savart)

Computed model of the vortex/merkaba geometry as a real magnetic configuration.
Reproduce: `node scripts/merkaba-biot-savart.mjs`.

## Model
Six circular current loops (I = 1 A, loop radius 0.30 m) on a ring of radius
1.0 m, centered at the unit-triangle angles, with the `3-6-9/0` axis at center:
- Triangle A = `{1,4,7}` at 40/160/280° → current **+**
- Triangle B = `{2,5,8}` at 80/200/320° → current **−** (merkaba counter-rotation)

Full Biot–Savart, 400 segments/loop (no dipole approximation).
Scale check: single-loop self-field `μ₀I/2r = 2.09 µT`; model near a coil reads 2.21 µT.

## Result

| Probe | Merkaba (counter-rotating) | Co-rotating (all +) |
|---|---|---|
| central `3-6-9/0` axis (0,0,z), all z | `~10⁻¹⁷ µT` → **NULL** | falls off from center |
| central axis (0,0,0) | `7×10⁻¹⁸ µT` | `0.189 µT` → **maximum** |
| at a coil (loop center) | `2.21 µT` | `1.95 µT` |
| above a coil (z=0.15) | `1.59 µT` | — |

- **Counter-rotating (merkaba):** the central axis is a field null the whole
  length (the two opposite dipole-rings cancel on the shared axis); field lives
  in off-axis lobes near the coils.
- **Co-rotating:** the same axis becomes a field maximum (solenoid-like).
- Fields scale ∝ I and ∝ 1/size.

This is a falsifiable prediction: a magnetometer on the central axis reads ~0 in
the counter-rotating configuration and a clear peak in the co-rotating one.

## Geometry note (the "8")
A merkaba (stella octangula) is two tetrahedra whose 8 vertices are exactly the 8
vertices of a cube (verified: `(±1,±1,±1)` split by sign parity into two
tetrahedra). The trinity-bond lattice (coordination 3, bipartite `≡0 ↔ ≡1`)
matches the cube graph Q3 (8 vertices, 12 edges, 3-regular, bipartite).

## Boundary
This is electromagnetism of a specific coil arrangement — correct and measurable.
The vortex/`ℤ9` structure only chose the coil placement and polarity; the central
null follows from ordinary 3-fold antisymmetry (two opposite dipole-rings), not
from anything special about `ℤ/9`. It is not evidence for cosmic claims and does
not touch the Clay problems. The "Flower of Life" association is sacred-geometry
lore, not derived here: no computation in this repo produces the Flower-of-Life
circle pattern from these coils.
