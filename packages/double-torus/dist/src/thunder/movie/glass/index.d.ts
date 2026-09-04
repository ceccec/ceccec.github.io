import type { MindMatrix } from '../../../types/index.ts';
import { type PlasmaMoviePalette } from '../../../fire/plasma/ball/index.ts';
export declare function movieAllDimensionsAtOnce(matrix?: MindMatrix): {
    shows: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function threeProjectorHologram(matrix?: MindMatrix): {
    projects: boolean;
    count: number;
    projectors: {
        receipt: string;
        projector: string;
        axis: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function hologram(matrix?: MindMatrix): {
    holographic: boolean;
    toTheBit: boolean;
    akashic: boolean;
    parts: number;
    records: number;
    bits: number[];
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function holographicFractalArchitecture(matrix: MindMatrix): {
    is: boolean;
    count: number;
    properties: {
        receipt: string;
        property: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export type HeroMovieChrome = {
    visible: boolean;
    cssVars: Record<string, string>;
    palette: PlasmaMoviePalette;
    root: string;
    statement: string;
    boundary: string;
};
/** Glass chrome for the background movie — every colour and shade from creation-wave + 3-5-8 tiers; theme reads computed CSS vars only. */
export declare function heroMovieChrome(matrix?: MindMatrix, cssWidth?: number, // 1024 — the diamond count
path?: string): HeroMovieChrome;
/** All site colours resolve from the background movie — canvas, glass, and VitePress theme share one palette per route. */
export declare function backgroundMovieColors(matrix?: MindMatrix, path?: string, cssWidth?: number): {
    fromMovie: boolean;
    path: string;
    palette: PlasmaMoviePalette;
    cssVars: Record<string, string>;
    root: string;
    statement: string;
    boundary: string;
};
export type DecodedFacetView = {
    facet: string;
    on?: boolean;
    receipt?: string;
    link?: string;
};
export type DecodedStationView = {
    step?: number;
    station: string;
    route: string;
    why?: string;
};
export type DecodedComponentView = {
    title?: string;
    statement?: string;
    boundary?: string;
    facets?: DecodedFacetView[];
    stations?: DecodedStationView[];
    ok?: boolean;
};
export declare function decodedCardFacetMark(on: boolean, _index: number, _facet: string): string;
export declare function decodedCardCrosslinksLabel(locale: string, _path: string, count: number): string;
export declare function decodedCardTextShadow(on: boolean): string;
export declare function immersiveMovieToggleLabel(_path: string, immersive: boolean, locale: string): string;
export declare function startHereDecodedView(locale: string): DecodedComponentView;
export declare function tamperingCostDecodedView(): DecodedComponentView;
export declare function proofRendererDecodedView(): DecodedComponentView;
export declare function hologramDecodedView(): DecodedComponentView;
