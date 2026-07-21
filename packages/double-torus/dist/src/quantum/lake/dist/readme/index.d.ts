import { type MindMatrix } from '../../../heaven/mind';
/** The README signature check, as a typed src fold: the committed README.md must equal the src-computed
 *  readmeMarkdown() (the README is computed from src — do not hand-edit). The commit shell reads the file
 *  and calls this; the judgment lives here in src, not in the untyped script. */
export declare function readmeSignatureValid(committed: string, matrix?: MindMatrix): {
    valid: boolean;
    computedSig: string;
    committedSig: string;
    statement: string;
    boundary: string;
};
export declare function readmeMarkdown(matrix?: MindMatrix): string;
/** The VitePress home body — the SAME theorem monograph, projected for the site: computed frontmatter
 *  (the abstract as description, siteConfig keywords), page-route links instead of source permalinks.
 *  Loaded in realtime by .vitepress/computed-pages.mts (the on-disk index.md is a discovery stub); the
 *  bg/gla homes transform THIS output, and the hero stays computed via homeHero() in transformPageData. */
export declare function homeMarkdown(matrix?: MindMatrix): string;
export declare function readme(matrix?: MindMatrix): {
    complete: boolean;
    audited: boolean;
    audits: {
        receipt: string;
        statement: string;
        computed: number;
    }[];
    receipt: string;
    references: number;
    explains: number;
    bytes: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    homeRoot: string;
    statement: string;
    boundary: string;
};
export declare function theHomeReadmeProseEntropyAudit(matrix?: MindMatrix): {
    computes: boolean;
    contentLines: number;
    pureProseLines: number;
    proseEntropy: number;
    computedRatio: number;
    flagged: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTypographyGrammarSealsDimensionalCracksEveryElementCarriesAComputedValue(matrix?: MindMatrix): {
    computes: boolean;
    grammar: number;
    presented: number;
    sealed: number;
    boundaries: number;
    cracks: number;
    sealedRatio: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theHeadingHierarchyIsARecursiveSitemapByImportanceWiredToTheGenerator(matrix?: MindMatrix): {
    computes: boolean;
    headings: number;
    levels: number[];
    fanOut: number[];
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
