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
