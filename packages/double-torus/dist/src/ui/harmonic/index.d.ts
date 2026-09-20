declare function hueToNote(hueDegs: number): {
    note: string;
    frequency: number;
};
declare function σFrequency(freq: number): number;
export declare const harmonicPalette: {
    primary: {
        hue: number;
        note: {
            note: string;
            frequency: number;
        };
        frequencyHz: number;
    };
    secondary: {
        hue: number;
        note: {
            note: string;
            frequency: number;
        };
        frequencyHz: number;
    };
    accent: {
        hue: number;
        note: {
            note: string;
            frequency: number;
        };
        frequencyHz: number;
    };
};
export declare function computeGateThreshold(baseFreq: number): number;
export declare function vibrationTiming(frequencyHz: number): {
    periodMs: number;
    pulsesPerSecond: number;
};
export declare function inversionRatio(frequencyHz: number): number;
export declare function harmonicScaling(frequencyHz: number): number;
export declare function hourScaling(frequencyHz: number): number;
/** Full confidence — reserved for a claim backed by a sealed proof. */
export declare function confidenceProven(): number;
/** No confidence — conjectured, open, or simply unbacked. */
export declare function confidenceUnknown(): number;
/** Binary involution over the palette index: index 0 is the proven band. */
export declare function confidenceLevel(paletteIndex: 0 | 1 | 2): number;
export declare function confidenceSecondary(): number;
export declare function confidenceTertiary(): number;
export declare function confidenceRiemann(): number;
export declare function confidenceYangMills(): number;
export declare function confidenceNavierStokes(): number;
/** Not a Clay problem; it shared the same path and the same zero. */
export declare function confidenceCryptography(): number;
declare const _default: {
    harmonicPalette: {
        primary: {
            hue: number;
            note: {
                note: string;
                frequency: number;
            };
            frequencyHz: number;
        };
        secondary: {
            hue: number;
            note: {
                note: string;
                frequency: number;
            };
            frequencyHz: number;
        };
        accent: {
            hue: number;
            note: {
                note: string;
                frequency: number;
            };
            frequencyHz: number;
        };
    };
    computeGateThreshold: typeof computeGateThreshold;
    vibrationTiming: typeof vibrationTiming;
    hueToNote: typeof hueToNote;
    σFrequency: typeof σFrequency;
    inversionRatio: typeof inversionRatio;
    harmonicScaling: typeof harmonicScaling;
    hourScaling: typeof hourScaling;
    confidenceLevel: typeof confidenceLevel;
    confidenceSecondary: typeof confidenceSecondary;
    confidenceTertiary: typeof confidenceTertiary;
    confidenceRiemann: typeof confidenceRiemann;
    confidenceYangMills: typeof confidenceYangMills;
    confidenceNavierStokes: typeof confidenceNavierStokes;
    confidenceCryptography: typeof confidenceCryptography;
    confidenceProven: typeof confidenceProven;
    confidenceUnknown: typeof confidenceUnknown;
};
export default _default;
