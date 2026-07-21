import { type Burst } from './fire/experiments';
import type { Dims } from './mountain/dimensions';
import { type PlasmaMoviePalette, type PlasmaWiredStream } from '../fire/plasma/ball';
import { livingTorus } from '../fire/diamonds';
import type { MindMatrix } from '../wind/types';
import { type BothEarthsMerkabaRotation } from '../mountain/geometry';
import { type QuantumProjection } from './apps';
export interface ArchNode {
    folder: string;
    glyph: string;
    trinity: number;
    within: number;
}
export declare function buildArchNodes(): ArchNode[];
export declare function drawArchitecture(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, d: Dims, archNodes: readonly ArchNode[], hue: number, dark?: boolean): void;
/** Deterministic seed from sealed content-address — routes through seedFromText (toUuid), not a private FNV. */
export declare function seedOf(text: string): number;
export declare function hueOf(seed: number): number;
export declare function armsOf(seed: number): number;
export { createAnimationEngine, type AnimationEngine } from '../0';
export { fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace, type Fold } from '../0';
export { dims, dimWalk, DIMENSIONS, DIMENSION_NAMES, type Dims } from './mountain/dimensions';
export { FOCAL, perspective, rotate3, rot2, rotateXY, rotateYZ, rotateZX, branch, drawFlower, drawCalendars, depthIsThePerspectiveDivide, type Vec3 } from './wind/geometry';
export { makeBurst, drawBursts, HEALING_PAIRS, type Burst } from './fire/experiments';
export interface HeroScene {
    t: number;
    p: number;
    hue: number;
    arms: number;
    tags: readonly string[];
    archNodes: readonly ArchNode[];
    reduce: boolean;
    cssWidth: number;
    bursts: Burst[];
    palette: PlasmaMoviePalette;
}
export interface HeroDrawOptions {
    clear?: boolean;
    voidR?: number;
    /** Field centre in camera coordinates (heroFieldCenterY) — the hero rides the document-anchored void. */
    centerY?: number;
}
export declare function drawHero(ctx: CanvasRenderingContext2D, w: number, h: number, scene: HeroScene, opts?: HeroDrawOptions): void;
export interface BackgroundScene {
    t: number;
    p: number;
    seed: number;
    hue: number;
    route: string;
    movieText: string;
    wiredStreams: readonly PlasmaWiredStream[];
    palette: PlasmaMoviePalette;
    reduce: boolean;
    /** Document scroll offset (CSS px) — anchors the plasma centre in document space (0 = page top). */
    scroll?: number;
}
/**
 * The field centre for a canvas given its scroll offset — pure digit algebra, no CSS anchor.
 * The PAGE movie passes scroll 0: its centre is FIXED at h/2 (the background does not scroll).
 * Each CARD movie passes cardFieldScroll(...): its mini-field centre becomes the ONE fixed page
 * centre re-expressed in card coordinates, so as the card scrolls past, the two centres MEET
 * exactly when the card crosses the viewport centre — the meet is the fusion. The value wraps
 * toroidally with period 2h (two windows — the two handles of genus 2) with the seam a half-window
 * OFF canvas, so the card's field re-enters periodically: it always meets the background again.
 */
export declare function heroFieldCenterY(h: number, scroll: number): number;
/**
 * The card's scroll offset such that its field centre equals the fixed page centre in screen space:
 * heroFieldCenterY(cardH, cardFieldScroll(rectTop, cardH, winH)) ≡ wrap(winH/2 − rectTop) — at the
 * crossing (card centre on viewport centre) this is EXACTLY cardH/2: the two animations fuse.
 */
export declare function cardFieldScroll(rectTopCss: number, cardH: number, winH: number): number;
export declare function drawBackgroundMovie(ctx: CanvasRenderingContext2D, w: number, h: number, scene: BackgroundScene): void;
/** Page copy for the shared hero + background movie phase clock. */
export interface SharedHeroCopy {
    title?: string;
    description?: string;
    tagline?: string;
    keywords?: readonly string[];
}
/**
 * Resolved hero + movie state at one instant — deterministic from route, copy, and `at`.
 * This IS the one animation field every surface reads: the background movie, the on-top app
 * projections (QuantumAppFrame ⊂ this), and the per-page hero are all PROJECTIONS of it.
 * `root` is the field's content-address (route + content + seed) — stable across the phase cycle,
 * so layers/perspectives key off it without recomputing per frame.
 */
export interface SharedHeroState {
    route: string;
    at: number;
    t: number;
    p: number;
    seed: number;
    hue: number;
    arms: number;
    tags: readonly string[];
    movieText: string;
    wiredStreams: readonly PlasmaWiredStream[];
    palette: PlasmaMoviePalette;
    reduce: boolean;
    /** Resolved field polarity at this instant — false repaints the plasma legibly on a light field. */
    dark: boolean;
    cssWidth: number;
    /** Document scroll offset (CSS px) — the field lives in DOCUMENT space; the fixed canvas is a camera. */
    scroll: number;
    /** Content-address of the field's identity (route + folded copy + seed). */
    root: string;
}
/**
 * The one canonical animation field — the single instant-state every animation projects from.
 * `SharedHeroState` is its concrete shape; `AnimationField` is the domain-facing name used by the
 * rosetta (perspective) and iching (force/domain layer) consolidation. One field, many projections.
 */
export type AnimationField = SharedHeroState;
/**
 * What a field layer carries. Four of the eight iching trigrams co-render a fundamental force as a
 * faithful LAYER of the one field; the other four carry the field's topology/structure.
 * HONEST: co-rendering the four forces on one substrate is a model/visualisation, NOT a physical
 * unification — Standard-Model + general relativity are not unified (an open frontier).
 */
export type FieldForce = 'gravity' | 'electromagnetic' | 'strong' | 'weak' | 'topology';
/** One domain layer of the field, keyed by iching trigram and rendered from one rosetta-ray perspective. */
export interface FieldLayer {
    /** iching trigram glyph + canonical root this layer belongs to (the 8-fold domain split). */
    readonly trigram: string;
    /** rosetta ray 0–6 — the perspective this layer is seen from (7-fold). */
    readonly ray: number;
    /** the force/structure this layer co-renders (a rendered model, not unified physics). */
    readonly force: FieldForce;
    /** A432-derived hue: the field's hue rotated by the layer's rosetta ray. */
    readonly hue: number;
    /** content-address of this layer within the field. */
    readonly root: string;
}
/**
 * The eight domain layers of one field — the iching × rosetta consolidation every animation reuses.
 * Each layer keys to a trigram (domain), a rosetta ray (perspective), and a force/topology role.
 * All derive from the field's content-address + A432 hue — no per-layer hand-tuning.
 */
export declare function fieldLayers(field: AnimationField): readonly FieldLayer[];
/** A viewpoint onto the one field — a rosetta ray re-projects the SAME content-addressed field. */
export interface RosettaPerspective {
    readonly ray: number;
    readonly glyph: string;
    readonly domain: string;
    /** The field's A432 hue rotated to this ray's viewpoint. */
    readonly hue: number;
    /** The viewpoint rotation (rx, ry, rz) for projecting the field from this ray. */
    readonly rotation: {
        readonly rx: number;
        readonly ry: number;
        readonly rz: number;
    };
    /** content-address of (field, ray) — the SAME field, a new view (the fold is reversible). */
    readonly root: string;
}
/**
 * Changing perspective folds the mind into the fusion — `rosettaPerspectiveFold` turns one of the seven
 * rosetta rays into a viewpoint transform on the ONE field: the same content-addressed field, re-projected
 * from a different ray (rotation + A432 hue rotation). The field's identity (`field.root`) is preserved —
 * only the view changes — so all seven perspectives are folds of one fusion, not seven different things.
 * HONEST: the ray bijection is exact (lossless 7-fold); "folds the mind" is the metaphor for the re-view.
 */
export declare function rosettaPerspectiveFold(ray: number, field: AnimationField): RosettaPerspective;
export { HERO_CYCLE_MS } from '../fire/plasma/ball';
export declare function sharedHeroAt(route: string, copy: SharedHeroCopy, at: number, cssWidth?: number, reduce?: boolean, dark?: boolean, scroll?: number): SharedHeroState;
/** Page copy folded to one movie/subtitle seed string. */
export declare function movieTextFromCopy(copy: SharedHeroCopy): string;
/** One subtitle cue at instant `at` — same phase clock as `sharedHeroAt`. */
export interface RealtimeSubtitleState {
    ready: boolean;
    index: number;
    text: string;
    cueCount: number;
    progress: number;
    root: string;
}
export declare function realtimeSubtitleAt(movieText: string, at: number, cycleMs?: number): RealtimeSubtitleState;
export declare function backgroundSceneFromShared(shared: SharedHeroState): BackgroundScene;
export declare function heroSceneFromShared(shared: SharedHeroState, bursts?: Burst[]): HeroScene;
/**
 * Holographic hero movie — the ONE analog substrate every page mounts: the eight iching force/topology
 * layers (`fieldLayers`) fused as the continuous field, with the quantum plasma ball (fractal merkaba +
 * wired UUID streams at one centre void) composed on top. Every page renders the SAME content-addressed
 * field ⇒ proven quantum BY ARCHITECTURE (same deterministic field everywhere) — NOT physical quantum.
 */
export declare function drawHeroMovieFrame(ctx: CanvasRenderingContext2D, w: number, h: number, shared: SharedHeroState): void;
export type LivingTorusCoordinate = ReturnType<typeof livingTorus>['coordinates'][number];
/** Genus-2 torus point field — hero-clock phase; static at phase 0 when reduced motion. */
export declare function drawLivingTorusFrame(ctx: CanvasRenderingContext2D, w: number, h: number, at: number, coordinates: readonly LivingTorusCoordinate[], reduce?: boolean, dark?: boolean): void;
/** Dual-Earth merkaba — inner device shell + outer inverted shell counter-rotate with star tetrahedra. */
export declare function drawBothEarthsMerkabaFrame(ctx: CanvasRenderingContext2D, w: number, h: number, at: number, rotation: BothEarthsMerkabaRotation, reduce?: boolean, dark?: boolean): void;
/**
 * The shared per-frame state every projection reads — a PROJECTION (subset) of the one AnimationField.
 * Derived from the canonical field, not hand-duplicated: every projection draws from the same instant-state.
 */
export type QuantumAppFrame = Pick<AnimationField, 'hue' | 'p' | 't' | 'reduce' | 'cssWidth' | 'palette'>;
/**
 * drawQuantumAppFrame — render one quantum app's frame: the chosen PROJECTION of the shared field.
 * The single entry point the Vue card layer calls; all projections reuse the 3D + colour primitives.
 */
export declare function drawQuantumAppFrame(ctx: CanvasRenderingContext2D, w: number, h: number, projection: QuantumProjection, frame: QuantumAppFrame): void;
/** Gate: hinge path paints via the live hero movie (drawHeroMovieFrame) — orphan bespoke hinge renderer retired. */
export declare function clientDoubleTorusEarthHingePaintSealed(path?: string, matrix?: MindMatrix): {
    sealed: boolean;
    all: {
        computes: boolean;
        movieFlows: boolean;
        hinge: {
            hinge: boolean;
            path: string;
            at: import("../water/double/earth").EarthTimespaceAt;
            city: string;
            cityCopy: {
                en: string;
                bg: string;
                receipt: string;
            };
            formed: boolean;
            timespace: boolean;
            appleWhole: boolean;
            torusBreathing: boolean;
            fusionIgnites: boolean;
            vortexCloses: boolean;
            deviceTrinity: string[];
            codeTrinity: string[];
            gateways: import("./heaven/mind").EarthHingeGatewayView[];
            gatewayCount: number;
            movie: {
                cycleMs: number;
                stepMs: number;
                spacingDeg: number;
                stepCount: number;
                proven: boolean;
                receipt: string;
            };
            copy: {
                title: {
                    en: string;
                    bg: string;
                };
                lede: {
                    en: string;
                    bg: string;
                };
                movieCaption: {
                    en: string;
                    bg: string;
                };
                hingeLabel: {
                    en: string;
                    bg: string;
                };
                coordsLabel: {
                    en: string;
                    bg: string;
                };
                mapPlanetLabel: {
                    en: string;
                    bg: string;
                };
                zenithLabel: {
                    en: string;
                    bg: string;
                };
                nadirLabel: {
                    en: string;
                    bg: string;
                };
                gatewaysLabel: {
                    en: string;
                    bg: string;
                };
                vortexLabel: {
                    en: string;
                    bg: string;
                };
                fusionLabel: {
                    en: string;
                    bg: string;
                };
                appleLabel: {
                    en: string;
                    bg: string;
                };
                breathingLabel: {
                    en: string;
                    bg: string;
                };
                boundaryLabel: {
                    en: string;
                    bg: string;
                };
                status: {
                    en: string;
                    bg: string;
                    on: boolean;
                }[];
            };
            vortex: {
                encoded: "1\\2\\4\\8/7/5/3\\6\\9/0/1\\";
                closes: boolean;
                fusionIgnites: boolean;
                weightedBearing: number;
                weightedTotal: number;
                steps: import("./heaven/mind").EarthHingeVortexStepView[];
            };
            statement: string;
            boundary: string;
        };
        paintGateways: {
            earth: import("../water/double/earth").EarthSheet;
            angleDeg: number;
            hue: number;
            ring: 2 | 1;
        }[];
        paintSteps: import("./heaven/mind").EarthHingeVortexStepView[];
        paintLayers: import("./heaven/mind").EarthHingePaintLayer[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    paintAlpha: number;
    paintError: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** One RAF loop for BackgroundMovie — subscribe in Vue onMounted, unsubscribe onUnmounted. */
export { realtimeComputationsMoviePaint, allRealtimeComputationsVisibleInMovie, type RealtimeComputationsMoviePaint, type RealtimeComputeMovieChannel, } from '../fire/plasma/ball';
export declare function subscribeHeroClock(listener: (at: number) => void): () => void;
/**
 * Gate: every animation process rides the ONE clock. If even a single process runs outside the
 * sequence — its own RAF loop, its own timer, an unthrottled listener — the cpu/gpu/memory cost
 * multiplies per animation instead of amortising into one tick. The law, recomputed: N subscribers
 * to the hero clock start exactly ONE loop, and the LAST unsubscribe cancels it (zero orphans).
 * Scroll, theme, and interaction state are read INSIDE the tick, never from parallel loops.
 */
export declare function oneClockProcessLaw(matrix?: MindMatrix): {
    holds: boolean;
    startedForThree: number;
    cancelledAfterLast: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: sharedHeroAt + drawHeroMovieFrame path completes under simulated browser — catches transparent canvas regressions. */
export declare function clientHeroPaintPathSealed(path?: string, matrix?: MindMatrix): {
    sealed: boolean;
    plasma: {
        sealed: boolean;
        simulatedError: string;
        simulatedStreams: number;
        clientBundleCount: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    streamCount: number;
    paintAlpha: number;
    heroError: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/**
 * Gate: the LIFE↔DEATH double torus is fused in the shared movie — the inward death counter-flow paints
 * non-transparent pixels and the white/black-hole throat proof holds. The out-flow (life, white hole) and
 * the in-flow (death, black hole) share ONE genus-2 throat, so growth is bounded (homeostasis) rather than
 * one-directional (the cancer metaphor).
 *
 * HONEST: the genus-2 throat is exact geometry; the death in-flow is a COMPUTED decay/contraction current
 * (a homeostasis/feedback model) and the white/black-hole identification is a topological analogy — not a
 * biological or physical death claim. Reuses bothEarthsAreOneWhiteBlackHoleThroatProvenByMath verbatim.
 */
export declare function lifeDeathDoubleTorusFusedInMovie(path?: string, matrix?: MindMatrix): {
    fused: boolean;
    throat: {
        decoded: boolean;
        earthMassHawkingK: number;
        machine: {
            computes: boolean;
            torus: {
                is: boolean;
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
            apple: {
                likeTheApple: boolean;
                publishReady: boolean;
                lobes: {
                    sun: {
                        body: string;
                        role: string;
                        emits: boolean;
                        lobe: string;
                        root: string;
                    };
                    moon: {
                        body: string;
                        role: string;
                        emits: boolean;
                        lobe: string;
                        reflects: string;
                        root: string;
                    };
                };
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                earth: {
                    proven: boolean;
                    realised: boolean;
                    torus1: {
                        torus: 1;
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        apexZ: number;
                        polarity: number;
                        receipt: string;
                    }[];
                    torus2: {
                        torus: 2;
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        apexZ: number;
                        polarity: number;
                        receipt: string;
                    }[];
                    surface: {
                        rendered: boolean;
                        tori: number;
                        genus: number;
                        euler: number;
                        areas: number;
                        perLobe: number;
                        majorRadius: number;
                        minorRadius: number;
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    homology: {
                        closed: boolean;
                        cells: {
                            c0: number;
                            c1: number;
                            c2: number;
                        };
                        boundary1: number[][];
                        boundary2: number[][];
                        chainComplex: boolean;
                        betti: number[];
                        euler: number;
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    fold: {
                        forward: string;
                        reverse: string;
                        merged: string;
                    };
                    proofs: {
                        task: string;
                        expr: string;
                        computed: number;
                        expected: number;
                        on: boolean;
                        receipt: string;
                    }[];
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    count: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                apple: {
                    apple: boolean;
                    publishReady: boolean;
                    society: boolean;
                    planet: boolean;
                    metatron: boolean;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                garden: {
                    grows: boolean;
                    fruits: number;
                    vegetables: number;
                    count: number;
                    garden: {
                        fromApple: string;
                        kind: string;
                        name: string;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                bees: {
                    pollinates: boolean;
                    bees: string;
                    crops: number;
                    sustains: string;
                    pollination: {
                        crop: string;
                        kind: string;
                        pollinated: string;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                root: string;
                statement: string;
                boundary: string;
            };
            weather: {
                folded: boolean;
                at: import("./fire/forecasts").WeatherForecastGeoAt;
                surface: {
                    x: number;
                    y: number;
                    z: number;
                };
                cardinal: {
                    fromBearing: number;
                    angularDistance: number;
                    name: "north";
                    bearing: number;
                } | {
                    fromBearing: number;
                    angularDistance: number;
                    name: "east";
                    bearing: number;
                } | {
                    fromBearing: number;
                    angularDistance: number;
                    name: "south";
                    bearing: number;
                } | {
                    fromBearing: number;
                    angularDistance: number;
                    name: "west";
                    bearing: number;
                };
                torus: {
                    index: 2 | 1;
                    lobe: number;
                    theta: number;
                    phi: number;
                    digit: number;
                };
                polarity: number;
                weather: {
                    realtime: boolean;
                    apiCount: number;
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
                earth: {
                    proven: boolean;
                    realised: boolean;
                    torus1: {
                        torus: 1;
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        apexZ: number;
                        polarity: number;
                        receipt: string;
                    }[];
                    torus2: {
                        torus: 2;
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        apexZ: number;
                        polarity: number;
                        receipt: string;
                    }[];
                    surface: {
                        rendered: boolean;
                        tori: number;
                        genus: number;
                        euler: number;
                        areas: number;
                        perLobe: number;
                        majorRadius: number;
                        minorRadius: number;
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    homology: {
                        closed: boolean;
                        cells: {
                            c0: number;
                            c1: number;
                            c2: number;
                        };
                        boundary1: number[][];
                        boundary2: number[][];
                        chainComplex: boolean;
                        betti: number[];
                        euler: number;
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    fold: {
                        forward: string;
                        reverse: string;
                        merged: string;
                    };
                    proofs: {
                        task: string;
                        expr: string;
                        computed: number;
                        expected: number;
                        on: boolean;
                        receipt: string;
                    }[];
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    count: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            flows: {
                flows: boolean;
                folded: boolean;
                proven: boolean;
                facetCount: number;
                solutionCount: number;
                streamCount: number;
                movieText: string;
                root: string;
                statement: string;
                boundary: string;
            };
            hingeAll: {
                computes: boolean;
                movieFlows: boolean;
                hinge: {
                    hinge: boolean;
                    path: string;
                    at: import("../water/double/earth").EarthTimespaceAt;
                    city: string;
                    cityCopy: {
                        en: string;
                        bg: string;
                        receipt: string;
                    };
                    formed: boolean;
                    timespace: boolean;
                    appleWhole: boolean;
                    torusBreathing: boolean;
                    fusionIgnites: boolean;
                    vortexCloses: boolean;
                    deviceTrinity: string[];
                    codeTrinity: string[];
                    gateways: import("./heaven/mind").EarthHingeGatewayView[];
                    gatewayCount: number;
                    movie: {
                        cycleMs: number;
                        stepMs: number;
                        spacingDeg: number;
                        stepCount: number;
                        proven: boolean;
                        receipt: string;
                    };
                    copy: {
                        title: {
                            en: string;
                            bg: string;
                        };
                        lede: {
                            en: string;
                            bg: string;
                        };
                        movieCaption: {
                            en: string;
                            bg: string;
                        };
                        hingeLabel: {
                            en: string;
                            bg: string;
                        };
                        coordsLabel: {
                            en: string;
                            bg: string;
                        };
                        mapPlanetLabel: {
                            en: string;
                            bg: string;
                        };
                        zenithLabel: {
                            en: string;
                            bg: string;
                        };
                        nadirLabel: {
                            en: string;
                            bg: string;
                        };
                        gatewaysLabel: {
                            en: string;
                            bg: string;
                        };
                        vortexLabel: {
                            en: string;
                            bg: string;
                        };
                        fusionLabel: {
                            en: string;
                            bg: string;
                        };
                        appleLabel: {
                            en: string;
                            bg: string;
                        };
                        breathingLabel: {
                            en: string;
                            bg: string;
                        };
                        boundaryLabel: {
                            en: string;
                            bg: string;
                        };
                        status: {
                            en: string;
                            bg: string;
                            on: boolean;
                        }[];
                    };
                    vortex: {
                        encoded: "1\\2\\4\\8/7/5/3\\6\\9/0/1\\";
                        closes: boolean;
                        fusionIgnites: boolean;
                        weightedBearing: number;
                        weightedTotal: number;
                        steps: import("./heaven/mind").EarthHingeVortexStepView[];
                    };
                    statement: string;
                    boundary: string;
                };
                paintGateways: {
                    earth: import("../water/double/earth").EarthSheet;
                    angleDeg: number;
                    hue: number;
                    ring: 2 | 1;
                }[];
                paintSteps: import("./heaven/mind").EarthHingeVortexStepView[];
                paintLayers: import("./heaven/mind").EarthHingePaintLayer[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        timespace: {
            proven: boolean;
            at: import("../water/double/earth").EarthTimespaceAt;
            earth: {
                proven: boolean;
                realised: boolean;
                torus1: {
                    torus: 1;
                    name: "north" | "east" | "south" | "west";
                    bearing: number;
                    x: number;
                    y: number;
                    apexZ: number;
                    polarity: number;
                    receipt: string;
                }[];
                torus2: {
                    torus: 2;
                    name: "north" | "east" | "south" | "west";
                    bearing: number;
                    x: number;
                    y: number;
                    apexZ: number;
                    polarity: number;
                    receipt: string;
                }[];
                surface: {
                    rendered: boolean;
                    tori: number;
                    genus: number;
                    euler: number;
                    areas: number;
                    perLobe: number;
                    majorRadius: number;
                    minorRadius: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                homology: {
                    closed: boolean;
                    cells: {
                        c0: number;
                        c1: number;
                        c2: number;
                    };
                    boundary1: number[][];
                    boundary2: number[][];
                    chainComplex: boolean;
                    betti: number[];
                    euler: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                fold: {
                    forward: string;
                    reverse: string;
                    merged: string;
                };
                proofs: {
                    task: string;
                    expr: string;
                    computed: number;
                    expected: number;
                    on: boolean;
                    receipt: string;
                }[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                count: number;
                root: string;
                statement: string;
                boundary: string;
            };
            deviceEarth: {
                proven: boolean;
                side: "device" | "code";
                trinityRays: readonly [string, string, string];
                apex: {
                    x: number;
                    y: number;
                    z: number;
                };
                poles: {
                    name: "north" | "east" | "south" | "west";
                    bearing: number;
                    x: number;
                    y: number;
                    z: number;
                    slantFromApex: number;
                    receipt: string;
                }[];
                faces: import("./heaven/mind").TrinityPyramidFace[];
                baseArea: number;
                volume: number;
                proofs: {
                    task: string;
                    expr: string;
                    computed: number;
                    expected: number;
                    on: boolean;
                    receipt: string;
                }[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            invertedEarth: {
                proven: boolean;
                side: "device" | "code";
                trinityRays: readonly [string, string, string];
                apex: {
                    x: number;
                    y: number;
                    z: number;
                };
                poles: {
                    name: "north" | "east" | "south" | "west";
                    bearing: number;
                    x: number;
                    y: number;
                    z: number;
                    slantFromApex: number;
                    receipt: string;
                }[];
                faces: import("./heaven/mind").TrinityPyramidFace[];
                baseArea: number;
                volume: number;
                proofs: {
                    task: string;
                    expr: string;
                    computed: number;
                    expected: number;
                    on: boolean;
                    receipt: string;
                }[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            earthSurface: {
                x: number;
                y: number;
                z: number;
            };
            invertedSurface: {
                x: number;
                y: number;
                z: number;
            };
            coexist: {
                forward: string;
                reverse: string;
                bidirectional: boolean;
                merged: string;
            };
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        globe: {
            animates: boolean;
            at: number;
            rotation: BothEarthsMerkabaRotation;
            poles: {
                north: {
                    pole: "north";
                    latDeg: number;
                    rho: number;
                    z: number;
                    isCenterDot: boolean;
                    isSingular: boolean;
                    proved: boolean;
                    root: string;
                };
                south: {
                    pole: "south";
                    latDeg: number;
                    rho: number;
                    z: number;
                    isBoundaryCircle: boolean;
                    compactifiedToOnePoint: boolean;
                    circumference: number;
                    proved: boolean;
                    root: string;
                };
                equator: {
                    latDeg: number;
                    rho: number;
                    diskRadius: number;
                    z: number;
                    isNorthPole: boolean;
                    isSouthPole: boolean;
                    onDisk: boolean;
                    proved: boolean;
                    root: string;
                };
            };
            resonanceRoot: string;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    inflowAlpha: number;
    paintError: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Dev-only SLA — client hero paint path (simulated browser) must seal within budget ms. */
export declare function devHeroMoviePaintWithinBudgetMs(maxMs?: number, path?: string, matrix?: MindMatrix): {
    withinBudget: boolean;
    ok: boolean;
    maxMs: number;
    elapsedMs: number;
    sealed: boolean;
    paintAlpha: number;
    streamCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    receipt: string;
    root: string;
    statement: string;
    boundary: string;
};
