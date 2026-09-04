import type { Dims } from '../../mountain/dimensions/index.ts';
export declare const FOCAL: number;
export interface Vec3 {
    X: number;
    Y: number;
    Z: number;
}
export declare function rot2(u: number, v: number, a: number): {
    u: number;
    v: number;
};
export declare function rotateXY(x: number, y: number, z: number, a: number): Vec3;
export declare function rotateYZ(x: number, y: number, z: number, a: number): Vec3;
export declare function rotateZX(x: number, y: number, z: number, a: number): Vec3;
export declare function rotate3(x: number, y: number, z: number, rxy: number, ryz: number, rzx: number): Vec3;
export declare function perspective(z: number): number;
export declare function depthIsThePerspectiveDivide(): {
    holds: boolean;
    focal: number;
    statement: string;
    boundary: string;
};
export declare function branch(ctx: CanvasRenderingContext2D, x: number, y: number, len: number, angle: number, depth: number, d: Dims, hue: number, dark?: boolean): void;
/**
 * 19 Flower-of-Life centres (1 + 6 + 12) — triangular lattice, unit-scaled.
 * Computed gapless ring lattice — NOT a wet decorative seven-circle schematic.
 */
export declare function flowerOfLifeCenters(): readonly (readonly [number, number])[];
/**
 * 13 Fruit-of-Life centres (1 + 6 + 6) — Metatron node set; subset unlocked by spinning the Flower.
 * Matches the sealed sacred-morph FRUIT_CENTERS lattice (unit scale).
 */
export declare function fruitOfLifeCenters(): readonly (readonly [number, number])[];
/** Spinning FoL unlocks Fruit — every Fruit centre sits on the Flower lattice (computed containment). */
export declare function flowerUnlocksFruitBySpin(): {
    holds: boolean;
    flower: number;
    fruit: number;
};
export declare function drawFlower(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, hue: number, reduce: boolean, dark?: boolean): void;
/**
 * Coupled-cycle calendar phases as vortex-digit markers — NO stroked circumference.
 * Concentric ring strokes were a wet boundary frame around the plasma throat (not the vortex);
 * the theorem is the cycle phase (coupledCalendarTori / LCM mesh), painted on VORTEX_SEQUENCE radii.
 */
export declare function drawCalendars(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, hue: number, reduce: boolean, dark?: boolean): void;
/**
 * What the installed three.js actually offers, measured by the caller and passed in.
 *
 * CONSTRUCTING IS NOT RENDERING. The first criterion here was "does it build itself with no
 * arguments", which is a question about a constructor rather than about a scene. `MeshDistanceMaterial`
 * passes it and then THROWS when rendered — it is three.js's internal material for point-light shadow
 * distance and reads a reference position that only the shadow map supplies. Including it put a mesh in
 * the closure that killed the render, and because every animation on this site shares one clock, that
 * one cell froze the whole page. A criterion that asks about construction is bookkeeping; the criterion
 * that constrains the subject is whether the thing RENDERS.
 *
 * So a catalogue carries the renderable set. Rendering can only be measured where rendering exists, so
 * the browser measures it directly (ThreeClosure.vue attempts each material and drops what throws) and
 * the Node gate, which has no GPU, carries `UNRENDERABLE_MATERIALS` below as a ledgered exclusion with
 * its reason. The browser's live measurement is what refutes that ledger: if a three.js release makes
 * the material renderable, the two disagree and the component reports it.
 */
export interface ThreeCatalogue {
    readonly geometries: readonly string[];
    readonly materials: readonly string[];
}
/**
 * Mesh materials that construct but cannot be rendered in an ordinary scene. Measured in a browser on
 * 2026-09-04 against three.js 0.185 by rendering each material alone and catching: nine of the ten
 * rendered, and this one threw `Cannot read properties of undefined (reading 'matrixWorld')` inside
 * three's own `refreshUniformsDistance`. It is a ledgered exclusion rather than a derivation because
 * this fold cannot rasterise; the derivation lives in the browser and disagrees loudly if it changes.
 */
export declare const UNRENDERABLE_MATERIALS: readonly string[];
/** One cell of the product space: a geometry, a material, and where it sits on the lattice. */
export interface ThreeCell {
    readonly index: number;
    readonly gi: number;
    readonly mi: number;
    readonly geometry: string;
    readonly material: string;
    readonly at: Vec3;
}
/**
 * The lattice pitch. Cells sit one unit apart, so the grid's own spacing — not a separate table —
 * is what the camera's depth planes are derived from below.
 */
export declare const CELL_PITCH = 1;
/** The cell at row `gi`, column `mi`, centred on the origin so the closure needs no layout table. */
export declare function threeCellAt(cat: ThreeCatalogue, gi: number, mi: number): ThreeCell;
/** Every combination the catalogue admits, once — the whole product, in row-major order. */
export declare function threeCombinationClosure(cat: ThreeCatalogue): readonly ThreeCell[];
/**
 * THE CAMERA THAT MAKES THREE.JS REPRODUCE THIS CORPUS'S SEALED PINHOLE, EXACTLY.
 *
 * A port is only honest if the ported renderer computes the same thing. This fold's law is
 * `perspective(z) = FOCAL / (FOCAL - z)`. three.js projects through a PerspectiveCamera as
 * `x_ndc = x / (tan(fov/2) * -z_view)`. Put the camera at distance FOCAL on +Z looking at the
 * origin, so a world point of depth z has `z_view = -(FOCAL - z)`, and the two agree for every
 * point precisely when `1 / tan(fov/2) = FOCAL`, i.e. `fov = 2 arctan(1 / FOCAL)`.
 *
 * So three.js does not REPLACE the sealed projection; it is CONFIGURED BY it. The depth law stays
 * where it is and the renderer inherits it instead of re-faking it — which is the failure the
 * 2026-07-07 audit found in two canvas painters, and the reason this fold exists at all.
 *
 * The depth planes come from the lattice, not from taste: every cell sits at Z = 0, so the content
 * occupies half a pitch either side of the focal plane and the frustum is cut to exactly that.
 */
export declare function threeCameraFromFocal(focal?: number): {
    readonly fovRadians: number;
    readonly position: Vec3;
    readonly near: number;
    readonly far: number;
};
export declare function threeCoversEveryCombination(cat: ThreeCatalogue): {
    cells: number;
    geometries: number;
    materials: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
};
/**
 * THE INVOLUTION THE LATTICE WAS CARRYING ALL ALONG.
 *
 * Nothing chose this. Cells are placed centred on the origin so the closure needs no layout table,
 * and a centred lattice is symmetric under point reflection through its centre. Everything that
 * follows was already true when the closure was built and simply had not been stated: the map is
 * an involution, it maps the closure onto itself, it has no fixed point when both sides are even
 * (so 180 cells fall into exactly 90 orbits of two), reflected positions cancel exactly, and — the
 * one that is not visible from either the layout or the addressing alone — under row-major
 * addressing the reflection is ADDRESS COMPLEMENT.
 *
 * It is this corpus's own involution law, σ² = id with orbits summing to zero, appearing unbidden
 * in a three.js scene graph: the centring that made the layout free made the symmetry inevitable.
 * Proved for all 180 cells, and at three further shapes, in src/pair/formal/proofs/three.lean.
 */
export declare function threeReflect(cat: ThreeCatalogue, cell: ThreeCell): ThreeCell;
export declare function threeClosureIsInvolutive(cat: ThreeCatalogue): {
    orbits: number;
    fixedPoints: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
};
