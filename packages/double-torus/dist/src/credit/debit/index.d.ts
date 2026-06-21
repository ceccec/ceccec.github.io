export type Entry = {
    readonly account: string;
    readonly debit: number;
    readonly credit: number;
};
export declare function fuse(entries: readonly Entry[]): Map<string, number>;
export declare function fused(entries: readonly Entry[]): boolean;
export declare function cryptoReviewNet(ledger: readonly Entry[]): {
    net: Record<string, number>;
    balanced: boolean;
};
export declare const dual = "src/pair/debit/credit";
