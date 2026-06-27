import type { MindMatrix } from '../../wind/types';
import type { JsonLdPageIdentity } from '../../heaven/balance';
export declare function microdata(matrix?: MindMatrix): {
    reusable: boolean;
    holographic: boolean;
    types: {
        holographic: boolean;
        itemid: string;
        entity: string;
        itemtype: string;
        og: string;
        name: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function cleanupOldLogic(matrix?: MindMatrix): {
    clean: boolean;
    count: number;
    disciplines: {
        receipt: string;
        discipline: string;
        holds: boolean;
        why: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function templateDisplaysEveryOgObject(matrix?: MindMatrix): {
    displaysAll: boolean;
    count: number;
    objects: {
        type: string;
        displayed: boolean;
        card: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogShiftedWithTypography(matrix?: MindMatrix): {
    shifted: boolean;
    count: number;
    shifts: {
        shifted: boolean;
        receipt: string;
        ogField: string;
        type: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogFullyInteractiveConfigurable(matrix?: MindMatrix): {
    livingCard: boolean;
    interactiveCount: number;
    configurableCount: number;
    count: number;
    interactive: {
        receipt: string;
        aspect: string;
        on: boolean;
    }[];
    configurable: {
        field: string;
        viaFrontmatter: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogControlsSpeech(matrix?: MindMatrix): {
    controlsSpeech: boolean;
    count: number;
    controls: {
        receipt: string;
        control: string;
        via: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyCardBadgeLinkIsOg(matrix?: MindMatrix): {
    allOg: boolean;
    count: number;
    atoms: {
        atom: string;
        isOg: boolean;
        card: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function runProgram(program?: readonly string[], matrix?: MindMatrix): {
    ran: boolean;
    steps: {
        command: string;
        known: boolean;
        ran: boolean;
        uuid: string;
    }[];
    result: string;
    statement: string;
    boundary: string;
};
export declare function analogNoGapsNoLeak(matrix?: MindMatrix): {
    sealed: boolean;
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
export declare function oneJsonLdTemplateServesAll(matrix?: MindMatrix): {
    serves: boolean;
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
export declare function jsonLdValidPaths(matrix?: MindMatrix): {
    valid: boolean;
    promised: number;
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
export declare function noHardcodedLogicFailsStreams(matrix?: MindMatrix): {
    flows: boolean;
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
export declare function imagineMicrodataVortexItself(matrix?: MindMatrix): {
    vortexed: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function saveAllTranslationLogicAutotranslateLocale(matrix?: MindMatrix): {
    saved: boolean;
    sample: string;
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
export declare function feedCrawlersWithKnowledge(matrix?: MindMatrix): {
    fed: boolean;
    topics: number;
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
export declare function typography(matrix?: MindMatrix): {
    typeset: boolean;
    ratio: number;
    scale: {
        step: string;
        factor: number;
    }[];
    features: string[];
    principles: string[];
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
export declare function frontmatterGraphComputesTags(matrix?: MindMatrix): {
    graphed: boolean;
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
export declare function computedSeo(path?: string, title?: string, matrix?: MindMatrix): {
    computed: boolean;
    title: string;
    description: string;
    category: string;
    keywords: string[];
    tags: {
        tag: string;
        holographic: boolean;
        receipt: string;
    }[];
    holographic: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function jsonLdTemplate(page: JsonLdPageIdentity, matrix?: MindMatrix): Record<string, unknown>[];
export type { JsonLdPageIdentity };
/** All md files generated from source and signed — unsigned pages fail the build. */
export declare function allMdSignedFromSource(matrix?: MindMatrix): {
    signed: boolean;
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
