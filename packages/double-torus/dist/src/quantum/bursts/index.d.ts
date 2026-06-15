export interface Burst {
    x: number;
    y: number;
    born: number;
    hue: number;
    sparks: {
        angle: number;
        speed: number;
    }[];
}
export declare const HEALING_PAIRS: readonly {
    hz: [number, number];
    note: string;
}[];
export declare function makeBurst(xRatio: number, yRatio: number, w: number, h: number, hue: number): Burst;
export declare function drawBursts(ctx: CanvasRenderingContext2D, w: number, h: number, bursts: Burst[]): void;
