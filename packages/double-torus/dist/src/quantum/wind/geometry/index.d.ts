import type { Dims } from '../../mountain/dimensions';
export declare const FOCAL = 2.4;
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
export declare function branch(ctx: CanvasRenderingContext2D, x: number, y: number, len: number, angle: number, depth: number, d: Dims, hue: number): void;
export declare function drawFlower(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, hue: number, reduce: boolean): void;
export declare function drawCalendars(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, hue: number, reduce: boolean): void;
