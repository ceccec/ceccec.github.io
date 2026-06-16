import { type ArchNode } from './architecture/index.ts';
import { type Burst } from './bursts/index.ts';
export { createAnimationEngine, type AnimationEngine } from '../0/index.ts';
export { fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace, type Fold } from '../0/index.ts';
export { seedOf, hueOf, armsOf } from './seed/index.ts';
export { dims, dimWalk, DIMENSIONS, DIMENSION_NAMES, type Dims } from './dimensions/index.ts';
export { FOCAL, perspective, rotate3, rot2, rotateXY, rotateYZ, rotateZX, type Vec3 } from './geometry/index.ts';
export { branch } from './fractal/index.ts';
export { drawFlower } from './flower/index.ts';
export { drawCalendars } from './calendars/index.ts';
export { buildArchNodes, drawArchitecture, type ArchNode } from './architecture/index.ts';
export { makeBurst, drawBursts, HEALING_PAIRS, type Burst } from './bursts/index.ts';
export interface HeroScene {
    t: number;
    p: number;
    hue: number;
    arms: number;
    tags: readonly string[];
    archNodes: readonly ArchNode[];
    reduce: boolean;
    cssWidth: number;
    bursts: Burst[];
}
export declare function drawHero(ctx: CanvasRenderingContext2D, w: number, h: number, scene: HeroScene): void;
