/** Ledger row — named away from src/0 `Entry` (URL catalog) to kill type-name synonym sprawl. */
/** @rosetta ✦₄ · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export type LedgerEntry = {
    readonly account: string;
    readonly debit: number;
    readonly credit: number;
};
/** @rosetta ✦₄ · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export declare function transact(from: string, to: string, amount: number): LedgerEntry[];
/** @rosetta ✦₄ · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export declare function balance(entries: readonly LedgerEntry[]): number;
/** @rosetta ✦₄ · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export declare function balanced(entries: readonly LedgerEntry[]): boolean;
/** @rosetta ✦₄ · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export declare function cryptoReview(): {
    today: LedgerEntry[];
    overclaim: LedgerEntry[];
    afterCutover: LedgerEntry[];
    honest: boolean;
    overclaimCaught: boolean;
    fundedAfterCutover: boolean;
    overdraft: number;
    quantumSignificance: string;
    dual: string;
};
/** @rosetta ✦₄ · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export declare const dual = "src/pair/credit/debit";
/** @rosetta ✦₀ · Heaven · creative (credit=export, projects the crypto-review outward) */
export declare function fuse(entries: readonly LedgerEntry[]): Map<string, number>;
/** @rosetta ✦₀ · Heaven · creative (credit=export, projects the crypto-review outward) */
export declare function fused(entries: readonly LedgerEntry[]): boolean;
/** @rosetta ✦₀ · Heaven · creative (credit=export, projects the crypto-review outward) */
export declare function cryptoReviewNet(ledger: readonly LedgerEntry[]): {
    net: Record<string, number>;
    balanced: boolean;
};
export declare const creditDual = "src/pair/debit/credit";
export type Hex = {
    readonly q: number;
    readonly r: number;
};
export declare function hexKey(h: Hex): string;
export declare function hexNeighbors(h: Hex): Hex[];
export type Found = {
    readonly cell: Hex;
    readonly food: number;
};
export declare function search(start: Hex, depth: number, foodAt: (h: Hex) => number, seen?: Set<string>): Found[];
export declare function carry(found: readonly Found[]): number;
export declare function moveNest(found: readonly Found[]): Found | null;
export declare function recur(found: readonly Found[]): {
    nest: Found | null;
    carried: number;
};
