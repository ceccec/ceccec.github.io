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
