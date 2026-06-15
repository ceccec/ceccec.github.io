import type { Dims } from '../dimensions/index.ts';
export interface ArchNode {
    folder: string;
    glyph: string;
    trinity: number;
    within: number;
}
export declare function buildArchNodes(): ArchNode[];
export declare function drawArchitecture(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, d: Dims, archNodes: readonly ArchNode[], hue: number): void;
