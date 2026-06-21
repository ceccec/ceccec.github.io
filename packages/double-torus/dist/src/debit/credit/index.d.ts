export type Entry = {
    readonly account: string;
    readonly debit: number;
    readonly credit: number;
};
export declare function transact(from: string, to: string, amount: number): Entry[];
export declare function balance(entries: readonly Entry[]): number;
export declare function balanced(entries: readonly Entry[]): boolean;
export declare function cryptoReview(): {
    today: Entry[];
    overclaim: Entry[];
    afterCutover: Entry[];
    honest: boolean;
    overclaimCaught: boolean;
    fundedAfterCutover: boolean;
    overdraft: number;
    quantumSignificance: string;
    dual: string;
};
export declare const dual = "src/pair/credit/debit";
