import type { Atom, ConceptCommand, ConceptCommandName, DiamondFacet, DiamondKind, AnalogChannel } from './types.ts';
export declare function computePiDigits(count: number): string;
export declare const PI_TRAIN_DIGITS: string;
export declare const REQUIRED_DIAMOND_KINDS: readonly DiamondKind[];
export declare const REQUIRED_DIAMOND_POLES: readonly DiamondFacet['pole'][];
export declare const REQUIRED_ANALOG_CHANNELS: readonly AnalogChannel[];
export declare const atoms: readonly Atom[];
export declare const conceptCommands: readonly ConceptCommand[];
export declare const SINGLE_WORD_METHODS: Record<ConceptCommandName, string>;
