import type { IconSeal } from '../mind/types.ts';
export declare const dual = "src/render/icons/quantum";
export declare const AREA_ICONS: Record<string, string>;
export declare const AREA_LABELS: Record<string, {
    en: string;
    bg: string;
}>;
export declare function computerDesign(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonicBands(total: number): {
    gapless: boolean;
    harmonic: boolean;
    total: number;
    bands: number[];
    scales: number;
    gaps: number;
    target: number;
    fibonacci: number[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function areaLabel(area: string, lang?: string): string;
export declare function iconGlyphs(): {
    grounded: boolean;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function iconSeal(): IconSeal;
