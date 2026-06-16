import type { MindMatrix, StaticPage } from './types.ts';
export declare function quantumSitemap(matrix?: MindMatrix): {
    quantum: boolean;
    urls: {
        route: string;
        gla: string;
        en: string;
        bg: string;
        theta: number;
        phi: number;
        alternates: {
            hreflang: string;
            href: string;
        }[];
        priority: number;
        changefreq: string;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function professionals(matrix?: MindMatrix): {
    found: boolean;
    groups: {
        entries: {
            receipt: string;
            profession: string;
            capability: string;
            route: string;
            task: string;
            why: string;
            comparable: string;
        }[];
        group: string;
        icon: string;
    }[];
    entries: {
        receipt: string;
        profession: string;
        capability: string;
        route: string;
        task: string;
        why: string;
        comparable: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function siteConfig(matrix?: MindMatrix): {
    title: string;
    titleBg: string;
    description: string;
    descriptionBg: string;
    themeColor: string;
    robots: string;
    keywords: string[];
    root: string;
    computed: boolean;
};
export declare function staticPages(): StaticPage[];
export declare function crawlerKnowledge(): {
    topic: string;
    fact: string;
    receipt: string;
}[];
export declare function monographTemplate(): {
    sections: string[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function monographAsScientificPaper(page: StaticPage): {
    title: string;
    abstract: string;
    keywords: string[];
    results: string[];
    references: string[];
    receipt: string;
};
