import type { Dims } from '../../mountain/dimensions/index.ts';
import type { ProofAnimationSpec } from '../../../thunder/waves/index.ts';
export declare const MOVIE_ANGLES: {
    readonly turn: number;
    readonly half: number;
    readonly trinity: number;
    readonly sixty: number;
    readonly station: number;
};
export declare const ANIMATION_DESIGN: {
    drawEmfA432Field: {
        maxR: number;
        shellFreqs: number;
        shellFreqs2: number;
        shellFreqs3: number;
        shellFreqs4: number;
        shellFreqs5: number;
        shellFreqs6: number;
        r: number;
        r2: number;
        paintArg1: number;
        paintL: number;
        paintArg12: number;
        paintL2: number;
        paintC: number;
        dw: number;
        dh: number;
        breathLo: number;
        humanBreathArg1Part: number;
        pulseR: number;
        paintArg13: number;
        rr: number;
        rr2: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        arcArg2Part: number;
        arcArg2Part2: number;
    };
    paintCenterShape: {
        lineToArg0Part: number;
        lineToArg1Part: number;
    };
    drawHumanDesignBodyGraph: {
        paintL: number;
        paintC: number;
        paintC2: number;
        pad: number;
        accentArg0: number;
        inkArg0: number;
        r: number;
        maxArg0: number;
        roundArg0Part: number;
        inkArg02: number;
        inkArg03: number;
        inkArg04: number;
        sliceArg1: number;
    };
    drawAstronomyProjection: {
        paintL: number;
        paintC: number;
        maxArg0: number;
        roundArg0Part: number;
        scale: number;
        scale2: number;
        scale3: number;
        inkArg0: number;
        loop: number;
        arcArg2Part: number;
        size: number;
        size2: number;
        size3: number;
        paintArg1: number;
        inkArg02: number;
        fillTextArg1Part: number;
        fillTextArg2Part: number;
    };
    drawDynamicsProjection: {
        paintL: number;
        paintC: number;
        maxArg0: number;
        roundArg0Part: number;
        minArg0: number;
        minArg1Part: number;
        baseY: number;
        baseY2: number;
        maxH: number;
        x: number;
        x2: number;
        paintArg1: number;
        inkArg0: number;
        inkArg02: number;
        fillTextArg2Part: number;
        toFixedArg0: number;
        fillTextArg2Part2: number;
        x0: number;
        x1: number;
        x12: number;
        linkY: number;
        linkY2: number;
        paintArg12: number;
        paintL2: number;
        inkArg03: number;
        fillTextArg2Part3: number;
    };
    drawBursts: {
        when: number;
        age: number;
        ring: number;
        paintArg1Part: number;
        paintL: number;
        reach: number;
        paintArg0Part: number;
        paintArg1Part2: number;
        paintL2: number;
        arcArg2Part: number;
    };
    drawArchitecture: {
        r: number;
        ang: number;
        ang2: number;
        rotate3Arg5Part: number;
        paintArg1: number;
        paintL: number;
        paintArg1Part: number;
        paintL2: number;
        maxArg0: number;
        roundArg0Part: number;
    };
    drawHero: {
        coreR: number;
        baseLen: number;
        baseLen2: number;
        baseLen3: number;
        baseLen4: number;
        baseLen5: number;
        when: number;
        depth: number;
        when2: number;
        depth2: number;
        depth3: number;
        when3: number;
        when4: number;
        rYZ: number;
        rYZ2: number;
        rZX: number;
        rZX2: number;
        branchSegmentsArg3Part: number;
        branchSegmentsArg3Part2: number;
        fIBONACCIAt: number;
        r: number;
        fIBONACCIAt2: number;
        r2: number;
        maxArg1Part: number;
        maxArg0: number;
        roundArg0Part: number;
        fillTextArg2Part: number;
    };
    drawPlasmaField: {
        cosArg0Part: number;
        bx: number;
        sinArg0Part: number;
        by: number;
        sinArg0Part2: number;
        blobHue: number;
        radius: number;
        radius2: number;
        sinArg0Part3: number;
        sinArg0Part4: number;
        addColorStopArg0: number;
    };
    drawPlasmaRays: {
        angle: number;
        len: number;
        len2: number;
        sinArg0Part: number;
        sinArg0Part2: number;
        pulse: number;
        pulse2: number;
        sinArg0Part3: number;
        streamAlphaArg0: number;
        lineWidth: number;
        lineWidth2: number;
        shadowBlur: number;
    };
    drawDeathCounterFlow: {
        outerR: number;
        speed: number;
        speed2: number;
        head: number;
        d0: number;
        d1: number;
        a0: number;
        a02: number;
        a1: number;
        a12: number;
        streamAlphaArg1Part: number;
        alpha: number;
        paintL: number;
        lineWidth: number;
        lineWidth2: number;
        fIBONACCIAt: number;
        paintArg1Part: number;
        paintL2: number;
        arcArg2: number;
    };
    drawPlasmaBall: {
        voidExtent: number;
        addColorStopArg0: number;
        addColorStopArg02: number;
        layerR: number;
        layerR2: number;
        orbitRate: number;
        orbitRate2: number;
        orbit: number;
        orbit2: number;
        wobble: number;
        sinArg0Part: number;
        wobble2: number;
        wobble3: number;
        floorArg0Part: number;
        maxArg1Part: number;
        sliceArg1Part: number;
        padEndArg0: number;
        sinArg0Part2: number;
        sinArg0Part3: number;
        alpha: number;
        alpha2: number;
        maxArg0: number;
        roundArg0Part: number;
        roundArg0Part2: number;
        shadowBlur: number;
    };
    drawWiredUuidStreams: {
        minArg0: number;
        maxArg0: number;
        floorArg0Part: number;
        phase: number;
        trailStep: number;
        trailStep2: number;
        floorArg0Part2: number;
        nearVoid: number;
        maxArg02: number;
        roundArg0Part: number;
        roundArg0Part2: number;
        glow: number;
        glow2: number;
        glow3: number;
        coin: number;
        coin2: number;
    };
    drawFusedForceLayers: {
        reach: number;
        reach2: number;
        fIBONACCIAt: number;
        reach3: number;
        alpha: number;
        fIBONACCIAt2: number;
        sinArg0Part: number;
        sinArg0Part2: number;
        alpha2: number;
        alpha3: number;
        orbit: number;
        drift: number;
        drift2: number;
        sinArg0Part3: number;
        cosArg0Part: number;
        sinArg0Part4: number;
        ly: number;
        radius: number;
        radius2: number;
        paintL: number;
        addColorStopArg0: number;
    };
    drawTwoBySevenMorph: {
        paintArg1Part: number;
        paintArg1Part2: number;
        paintL: number;
        paintArg1Part3: number;
        paintL2: number;
        paintL3: number;
    };
    paintHolographicPlasmaHeroMovie: {
        voidR: number;
        createRadialGradientArg5Part: number;
        drawTwoBySevenMorphArg3Part: number;
    };
    drawLivingTorusFrame: {
        lIVINGTORUSSPINDIVISOR: number;
        view: number;
        spin: number;
        spin2: number;
        sinArg0Part: number;
        paintArg0Part: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        paintL: number;
        pulse: number;
        hue: number;
        size: number;
        size2: number;
        size3: number;
        paintArg1Part3: number;
        paintArg1Part4: number;
        paintL2: number;
        paintArg1: number;
        arcArg2Part: number;
        paintL3: number;
        arcArg2Part2: number;
    };
    drawTetrahedronEdges: {
        edges: number;
        paintL: number;
        lineWidth: number;
        paintArg1Part: number;
        paintL2: number;
        arcArg2Part: number;
    };
    drawBothEarthsMerkabaFrame: {
        scale: number;
        innerR: number;
        breath: number;
        createRadialGradientArg5Part: number;
        paintArg0: number;
        paintArg1: number;
        paintL: number;
        paintL2: number;
        shellLift: number;
        upSpin: number;
        downSpin: number;
        drawTetrahedronEdgesArg4Part: number;
        drawTetrahedronEdgesArg5Part: number;
        drawTetrahedronEdgesArg6: number;
        drawTetrahedronEdgesArg7: number;
        drawTetrahedronEdgesArg62: number;
        drawTetrahedronEdgesArg72: number;
    };
    qSphere: {
        maxArg0: number;
        createRadialGradientArg0Part: number;
        createRadialGradientArg1Part: number;
        createRadialGradientArg2Part: number;
        minArg1Part: number;
        paintL: number;
        addColorStopArg0: number;
        paintL2: number;
        paintArg1Part: number;
        paintL3: number;
    };
    drawTaijiProjection: {
        fIBONACCIAt: number;
        r: number;
        floorArg0Part: number;
        ray: number;
        yinHue: number;
        yangHue: number;
        yangHue2: number;
        paintL: number;
        paintL2: number;
        fold: number;
        arcArg3Part: number;
        arcArg4Part: number;
        darkArg0: number;
        lightArg0: number;
        arcArg2Part: number;
        lightArg02: number;
        darkArg02: number;
        paintArg1: number;
        lineWidth: number;
    };
    drawSacredMorphProjection: {
        base: number;
        tri: number;
        depthD: number;
        qSmoothArg0: number;
        qSmoothArg1: number;
        qSmoothArg12: number;
        qSmoothArg02: number;
        qSmoothArg13: number;
        fIBONACCIAt: number;
        qSmoothArg0Part: number;
        qSmoothArg14: number;
        qSmoothArg03: number;
        rx: number;
        ry: number;
        ry2: number;
        rz: number;
        when: number;
        lineWidth: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintL: number;
        fIBONACCIAt2: number;
        sinArg0Part: number;
        sinArg0Part2: number;
        zz: number;
        qProjectArg3Part: number;
        qProjectArg4Part: number;
        qProjectArg5Part: number;
        paintArg0Part3: number;
        paintArg1Part: number;
        fIBONACCIAt3: number;
        rNode: number;
        rNode2: number;
        rNode3: number;
        paintArg0Part4: number;
        paintArg1: number;
        paintL2: number;
        when2: number;
        qSphereArg4Part: number;
        qSphereArg4Part2: number;
        qSphereArg5Part: number;
        qSphereArg5Part2: number;
        floorArg0Part: number;
        floorArg0Part2: number;
        maxArg1Part: number;
        maxArg1Part2: number;
        drawSolid3DArg3Part: number;
        drawSolid3DArg8Part: number;
        drawSolid3DArg8Part2: number;
        paintArg12: number;
        paintL3: number;
        fillTextArg1: number;
        fillTextArg2: number;
    };
    drawSolid3D: {
        lineWidth: number;
        paintL: number;
        qSphereArg3Part: number;
        qSphereArg5Part: number;
    };
    drawHologramProjection: {
        fIBONACCIAt: number;
        r: number;
        rx: number;
        rx2: number;
        ry: number;
        ry2: number;
        pulse: number;
        pulse2: number;
        pulse3: number;
        sinArg0Part: number;
        paintArg1: number;
        paintL: number;
        shadowBlur: number;
        paintArg1Part: number;
        paintL2: number;
        maxArg0: number;
        maxArg1Part: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part2: number;
        maxArg02: number;
        maxArg1Part2: number;
        paintArg12: number;
        paintL3: number;
        fillTextArg1: number;
        fillTextArg2: number;
    };
    drawLabyrinthProjection: {
        r: number;
        tube: number;
        nu: number;
        nv: number;
        spin: number;
        v: number;
        size: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        paintLPart: number;
        breath: number;
        sinArg0Part: number;
        heroSize: number;
        heroSize2: number;
        paintArg1: number;
        paintL: number;
        shadowBlur: number;
        paintL2: number;
    };
    drawMovie10dProjection: {
        fIBONACCIAt: number;
        r: number;
        rx: number;
        rx2: number;
        rx3: number;
        ry: number;
        ry2: number;
        ry3: number;
        rz: number;
        loop: number;
        y: number;
        fIBONACCIAt2: number;
        qProjectArg8Part: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        paintArg1Part3: number;
        paintArg1Part4: number;
        maxArg1Part: number;
        qProjectArg8Part2: number;
        ring: number;
        ring2: number;
        rad: number;
        paintArg0Part3: number;
        paintL: number;
        lineWidth: number;
        loop2: number;
        t: number;
        roundArg0Part: number;
        roundArg0Part2: number;
        roundArg0Part3: number;
        roundArg0Part4: number;
        paintArg1Part5: number;
        paintL2: number;
        paintArg1Part6: number;
        paintArg1Part7: number;
        paintL3: number;
        fillTextArg2Part: number;
    };
    drawMerkabaProjection: {
        r: number;
        a: number;
        drawSolid3DArg6Part: number;
        drawSolid3DArg9: number;
        drawSolid3DArg8Part: number;
        drawSolid3DArg8Part2: number;
        drawSolid3DArg92: number;
    };
    drawUnitDistanceProjection: {
        r0: number;
        ringRadius: number;
        ringRadius2: number;
        drift: number;
        nodes: number;
        hue: number;
        hue2: number;
        paintArg1: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        paintL: number;
        maxArg0: number;
        maxArg1Part: number;
        glow: number;
        glow2: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg0Part3: number;
        paintL2: number;
        lineWidth: number;
        moveToArg0Part: number;
        moveToArg1Part: number;
        lineToArg0Part: number;
        lineToArg1Part: number;
        paintL3: number;
        maxArg1Part2: number;
        fIBONACCIAt: number;
        lensR: number;
        lensR2: number;
        sep: number;
        paintArg12: number;
        lineWidth2: number;
        paintArg1Part3: number;
        paintArg1Part4: number;
        outerNodes: number;
        lit: number;
        floorArg0Part: number;
        span: number;
        k: number;
        k2: number;
        paintArg0Part4: number;
        paintArg13: number;
        paintL4: number;
        lineWidth3: number;
    };
    drawVortexStrokesProjection: {
        r: number;
        drift: number;
        angleAt: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        paintL: number;
        lineWidth: number;
        paintArg0Part3: number;
        paintArg1Part3: number;
        maxArg1Part: number;
        hue: number;
        hue2: number;
        paintArg1Part4: number;
        paintArg1Part5: number;
        paintLPart: number;
        paintLPart2: number;
        setLineDashArg0Part: number;
        setLineDashArg0Part2: number;
        lineWidth2: number;
        maxArg0: number;
        maxArg1Part2: number;
        r2: number;
        hue3: number;
        paintArg1: number;
        paintL2: number;
        lineWidth3: number;
        paintArg1Part6: number;
        paintArg1Part7: number;
        maxArg1Part3: number;
        paintArg12: number;
        paintL3: number;
        moveToArg0Part: number;
        arcArg2Part: number;
        maxArg1Part4: number;
        glow: number;
        glow2: number;
        hue4: number;
        paintL4: number;
        lineWidth4: number;
        maxArg1Part5: number;
        arcArg2Part2: number;
        arcArg2Part3: number;
        a: number;
        returned: number;
        returned2: number;
        tetraEdges: number;
        spin: number;
        drawSolid3DArg3Part: number;
        drawSolid3DArg5Part: number;
        drawSolid3DArg9Part: number;
        drawSolid3DArg9Part2: number;
        drawSolid3DArg8Part: number;
        drawSolid3DArg8Part2: number;
        paintArg1Part8: number;
        maxArg1Part6: number;
    };
    drawDoubleTorusProjection: {
        r: number;
        sep: number;
        drift: number;
        hue: number;
        hue2: number;
        paintArg1: number;
        paintL: number;
        lineWidth: number;
        paintArg12: number;
        loop: number;
        a: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        paintL2: number;
        maxArg1Part: number;
        returned: number;
        returned2: number;
        cars: number;
        cars2: number;
        head: number;
        u: number;
        paintArg0Part3: number;
        paintArg1Part2: number;
        paintArg1Part3: number;
        paintL3: number;
        maxArg1Part2: number;
        arcArg2Part: number;
        arcArg2Part2: number;
        paintArg13: number;
        paintL4: number;
        maxArg0: number;
        roundArg0Part: number;
        fillTextArg2Part: number;
    };
    drawTorusFieldProjection: {
        r: number;
        tube: number;
        rx: number;
        rx2: number;
        ry: number;
        ry2: number;
        loop: number;
        u: number;
        loop2: number;
        v: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        maxArg0: number;
    };
    kernelTheoremStreams: {
        window: number;
    };
    sharedHeroAt: {
        cssWidth: number;
        t: number;
    };
    fieldLayers: {
        toUuidArg0Part: number;
        when: number;
        ray: number;
        mapHuePart: number;
    };
    seedOf: {
        seedFromTextArg1: number;
    };
    armsOf: {
        returned: number;
    };
    heroFieldCenterY: {
        when: number;
    };
    buildArchNodes: {
        when: number;
        sliceArg1: number;
        floorArg0Part: number;
        mapWithinPart: number;
    };
    bgStreamParams: {
        distPart: number;
        distPart2: number;
        speedPart: number;
        speedPart2: number;
        sizePart: number;
        roundArg0Part: number;
    };
    bgStreamOrbit: {
        spin: number;
    };
    branch: {
        when: number;
        paintArg0Part: number;
        paintArg0Part2: number;
        paintArg1Part: number;
        paintL: number;
        maxArg1Part: number;
    };
    strokeBranchLevels: {
        paintArg0Part: number;
        paintArg1Part: number;
        paintL: number;
        maxArg1Part: number;
        loop: number;
        i: number;
        segAt: number;
    };
    drawFlower: {
        r: number;
        loop: number;
        a: number;
        a2: number;
        sqrtArg0: number;
        trail: number;
        td: number;
        spin: number;
        hueC: number;
        tt: number;
        tt2: number;
        powArg1: number;
        globalAlpha: number;
        paintArg0Part: number;
        paintArg1Part: number;
        paintLPart: number;
        paintLPart2: number;
        maxArg1Part: number;
        maxArg1Part2: number;
    };
    drawCalendars: {
        throatR: number;
        radius: number;
        hueC: number;
        ang: number;
        ang2: number;
        paintArg1: number;
        paintL: number;
        maxArg1Part: number;
    };
    branchSegments: {
        when: number;
    };
    drawResonanceProjection: {
        paintL: number;
        paintC: number;
        maxArg0: number;
        roundArg0Part: number;
        cy: number;
        baseR: number;
        baseR2: number;
        baseR3: number;
        inkArg0: number;
        angle: number;
        r: number;
        r2: number;
        paintArg1Part: number;
        paintArg1Part2: number;
        arcArg2Part: number;
        arcArg2Part2: number;
        paintL2: number;
        inkArg02: number;
        fillTextArg1Part: number;
        fillTextArg2Part: number;
    };
    drawProofWitness: {
        pad: number;
        fillArg0Part: number;
        fillArg0Part2: number;
        fillRectArg0Part: number;
        fillRectArg2Part: number;
        strokeArg0: number;
        m: number;
        proofRingArg1Part: number;
        proofRingArg4Part: number;
        fillArg0: number;
        arcArg1Part: number;
        strokeArg02: number;
        arcArg1Part2: number;
        fillArg0Part3: number;
        fillArg0Part4: number;
        at: number;
        strokeArg03: number;
    };
    drawProofAnimation: {
        geodesicDomeComputesArg0: number;
        phase: number;
        maxArg1Part: number;
        t: number;
        h: number;
        strokeArg0: number;
        moveToArg1Part: number;
        lineToArg1Part: number;
        lineToArg1Part2: number;
        fillArg1Part: number;
        fillRectArg0Part: number;
        fillRectArg1Part: number;
        fillRectArg2Part: number;
        returned: number;
        returned2: number;
        returned3: number;
        returned4: number;
        sinArg0Part: number;
        strokeArg0Part: number;
        strokeArg0Part2: number;
        strokeArg1Part: number;
        n: number;
        proofRingArg1Part: number;
        fromArg1Part: number;
        strokeArg0Part3: number;
        red: number;
        strokeArg0Part4: number;
        fromLength: number;
        x: number;
        x2: number;
        y: number;
        y2: number;
        when: number;
        z: number;
        strokeArg02: number;
        loop: number;
        loop2: number;
        floorArg0Part: number;
        lit: number;
        arcArg1Part: number;
        strokeArg1Part2: number;
        arcArg4Part: number;
        r: number;
        maxArg1Part2: number;
        strokeArg03: number;
        arcArg2Part: number;
        strokeArg0Part5: number;
        proofRingArg0: number;
        proofRingArg4Part: number;
        strokeArg04: number;
        loop3: number;
        triAt: number;
        arcArg2Part2: number;
        arcArg2Part3: number;
        limit: number;
        acc: number;
        cosArg0Part: number;
        sinArg0Part2: number;
        sc: number;
        sc2: number;
        when2: number;
        sinArg0Part3: number;
        ny: number;
        arcArg2Part4: number;
        arcArg1Part2: number;
        treeBranchArg1Part: number;
        treeBranchArg2Part: number;
        treeBranchArg3: number;
        tilt: number;
        arm: number;
        arcArg2Part5: number;
        maxArg0: number;
        fillArg0Part: number;
        fillArg0Part2: number;
        fillArg0Part3: number;
        arcArg1Part3: number;
        g: number;
        fillArg0Part4: number;
        arcArg2Part6: number;
        seq: number;
        seq2: number;
        seq3: number;
        seq4: number;
        proofRingArg02: number;
        minArg1: number;
        ringR: number;
        rOut: number;
        dot: number;
        angleOf: number;
        angleOf2: number;
        fillArg0: number;
        fillArg02: number;
        arcArg2Part7: number;
    };
};
/** Paint one proof animation frame for `spec` at hero-clock time `t` onto a square canvas of side `s`. */
export declare function drawProofAnimation(ctx: CanvasRenderingContext2D, s: number, spec: ProofAnimationSpec, t: number, dark: boolean): void;
/** What the Lean kernel recorded: file → theorem → the axioms it rests on (.vitepress/data/lean-axioms.json). */
export type KernelTheoremRecord = Readonly<Record<string, Readonly<Record<string, readonly string[]>>>>;
export type KernelTheoremStream = {
    uuid: string;
    theorem: string;
    file: string;
    axioms: readonly string[];
    hue: number;
};
/**
 * THE KERNEL THEOREMS ARE THE MOVIE'S STREAMS (owner, 2026-11-15: "background movie is the double torus itself in motion
 * so all quantum clay theorems are used in the movie"). Every theorem the kernel recorded becomes one stream: its
 * glyphs are the theorem's content address, its hue the station of its file on the doubling circuit (forty degrees a
 * digit). A window of them flows at a time and slides with the phase, so over one cycle every theorem passes. Drawing a
 * theorem's address is not proving it: what each rests on is what the kernel recorded, carried beside it.
 */
export declare function kernelTheoremStreams(record: KernelTheoremRecord, p: number): {
    all: KernelTheoremStream[];
    visible: KernelTheoremStream[];
    start: number;
};
/** The custom-property name a design value is published under in double-torus.scss. */
export declare const animationToken: (painter: string, key: string) => string;
/** double-torus.scss — the one CSS SDK, emitted from the values above. COMPUTED: regenerate, never edit. */
export declare function animationScss(): string;
/** Bind every painter number from the stylesheet — read(name) returns a custom property's computed value. Three
 *  states, never two: a value the sheet carries is bound; a value it does not carry is counted ABSENT (the painter
 *  keeps the table's value and says so); a value that disagrees with the table is counted and bound, because the sheet
 *  is the SDK. Returns the counts so a caller can see which happened. */
export declare function bindAnimationDesign(read: (name: string) => string): {
    source: 'read' | 'absent';
    bound: number;
    absent: number;
    differed: number;
};
export declare const FOCAL: number;
export interface Vec3 {
    X: number;
    Y: number;
    Z: number;
}
export declare function rot2(u: number, v: number, a: number): {
    u: number;
    v: number;
};
export declare function rotateXY(x: number, y: number, z: number, a: number): Vec3;
export declare function rotateYZ(x: number, y: number, z: number, a: number): Vec3;
export declare function rotateZX(x: number, y: number, z: number, a: number): Vec3;
export declare function rotate3(x: number, y: number, z: number, rxy: number, ryz: number, rzx: number): Vec3;
export declare function perspective(z: number): number;
export declare function depthIsThePerspectiveDivide(): {
    holds: boolean;
    focal: number;
    statement: string;
    boundary: string;
};
export declare function branch(ctx: CanvasRenderingContext2D, x: number, y: number, len: number, angle: number, depth: number, d: Dims, hue: number, dark?: boolean): void;
/**
 * THE SAME FRACTAL, COLLECTED INSTEAD OF DRAWN. branch strokes every segment on its own — one raster call and one
 * colour string per segment, which made the hero's arms most of the movie's two thousand seven hundred draw calls a
 * frame. Every segment at one depth of one arm has the same colour and width (they depend on the arm, the hue and the
 * depth only), so the segments are gathered by depth here and strokeBranchLevels draws each depth as one path.
 */
export declare function branchSegments(levels: number[][], x: number, y: number, len: number, angle: number, depth: number, d: Dims): void;
/**
 * Stroke collected levels in branch's own colours and widths, deepest (the trunk) first as branch drew it. Not
 * pixel-identical, and said so: where two segments of one path meet, their semi-transparent ends composite once
 * instead of twice, and crossings between subtrees blend in depth order rather than tree order.
 */
export declare function strokeBranchLevels(ctx: CanvasRenderingContext2D, levels: readonly (readonly number[] | undefined)[], d: Dims, hue: number, dark?: boolean): void;
/**
 * 19 Flower-of-Life centres (1 + 6 + 12) — triangular lattice, unit-scaled.
 * Computed gapless ring lattice — NOT a wet decorative seven-circle schematic.
 */
export declare function flowerOfLifeCenters(): readonly (readonly [number, number])[];
/**
 * 13 Fruit-of-Life centres (1 + 6 + 6) — Metatron node set; subset unlocked by spinning the Flower.
 * Matches the sealed sacred-morph FRUIT_CENTERS lattice (unit scale).
 */
export declare function fruitOfLifeCenters(): readonly (readonly [number, number])[];
/** Spinning FoL unlocks Fruit — every Fruit centre sits on the Flower lattice (computed containment). */
export declare function flowerUnlocksFruitBySpin(): {
    holds: boolean;
    flower: number;
    fruit: number;
};
export declare function drawFlower(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, hue: number, reduce: boolean, dark?: boolean): void;
/**
 * Coupled-cycle calendar phases as vortex-digit markers — NO stroked circumference.
 * Concentric ring strokes were a wet boundary frame around the plasma throat (not the vortex);
 * the theorem is the cycle phase (coupledCalendarTori / LCM mesh), painted on VORTEX_SEQUENCE radii.
 */
export declare function drawCalendars(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, t: number, hue: number, reduce: boolean, dark?: boolean): void;
/**
 * What the installed three.js actually offers, measured by the caller and passed in.
 *
 * CONSTRUCTING IS NOT RENDERING. The first criterion here was "does it build itself with no
 * arguments", which is a question about a constructor rather than about a scene. `MeshDistanceMaterial`
 * passes it and then THROWS when rendered — it is three.js's internal material for point-light shadow
 * distance and reads a reference position that only the shadow map supplies. Including it put a mesh in
 * the closure that killed the render, and because every animation on this site shares one clock, that
 * one cell froze the whole page. A criterion that asks about construction is bookkeeping; the criterion
 * that constrains the subject is whether the thing RENDERS.
 *
 * So a catalogue carries the renderable set. Rendering can only be measured where rendering exists, so
 * the browser measures it directly (ThreeClosure.vue attempts each material and drops what throws) and
 * the Node gate, which has no GPU, carries `UNRENDERABLE_MATERIALS` below as a ledgered exclusion with
 * its reason. The browser's live measurement is what refutes that ledger: if a three.js release makes
 * the material renderable, the two disagree and the component reports it.
 */
export interface ThreeCatalogue {
    readonly geometries: readonly string[];
    readonly materials: readonly string[];
}
/**
 * Mesh materials that construct but cannot be rendered in an ordinary scene. Measured in a browser on
 * 2026-09-04 against three.js 0.185 by rendering each material alone and catching: nine of the ten
 * rendered, and this one threw `Cannot read properties of undefined (reading 'matrixWorld')` inside
 * three's own `refreshUniformsDistance`. It is a ledgered exclusion rather than a derivation because
 * this fold cannot rasterise; the derivation lives in the browser and disagrees loudly if it changes.
 */
export declare const UNRENDERABLE_MATERIALS: readonly string[];
/** One cell of the product space: a geometry, a material, and where it sits on the lattice. */
export interface ThreeCell {
    readonly index: number;
    readonly gi: number;
    readonly mi: number;
    readonly geometry: string;
    readonly material: string;
    readonly at: Vec3;
}
/**
 * The lattice pitch. Cells sit one unit apart, so the grid's own spacing — not a separate table —
 * is what the camera's depth planes are derived from below.
 */
export declare const CELL_PITCH = 1;
/** The cell at row `gi`, column `mi`, centred on the origin so the closure needs no layout table. */
export declare function threeCellAt(cat: ThreeCatalogue, gi: number, mi: number): ThreeCell;
/** Every combination the catalogue admits, once — the whole product, in row-major order. */
export declare function threeCombinationClosure(cat: ThreeCatalogue): readonly ThreeCell[];
/**
 * THE CAMERA THAT MAKES THREE.JS REPRODUCE THIS CORPUS'S SEALED PINHOLE, EXACTLY.
 *
 * A port is only honest if the ported renderer computes the same thing. This fold's law is
 * `perspective(z) = FOCAL / (FOCAL - z)`. three.js projects through a PerspectiveCamera as
 * `x_ndc = x / (tan(fov/2) * -z_view)`. Put the camera at distance FOCAL on +Z looking at the
 * origin, so a world point of depth z has `z_view = -(FOCAL - z)`, and the two agree for every
 * point precisely when `1 / tan(fov/2) = FOCAL`, i.e. `fov = 2 arctan(1 / FOCAL)`.
 *
 * So three.js does not REPLACE the sealed projection; it is CONFIGURED BY it. The depth law stays
 * where it is and the renderer inherits it instead of re-faking it — which is the failure the
 * 2026-07-07 audit found in two canvas painters, and the reason this fold exists at all.
 *
 * The depth planes come from the lattice, not from taste: every cell sits at Z = 0, so the content
 * occupies half a pitch either side of the focal plane and the frustum is cut to exactly that.
 */
export declare function threeCameraFromFocal(focal?: number): {
    readonly fovRadians: number;
    readonly position: Vec3;
    readonly near: number;
    readonly far: number;
};
export declare function threeCoversEveryCombination(cat: ThreeCatalogue): {
    cells: number;
    geometries: number;
    materials: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
};
/**
 * THE INVOLUTION THE LATTICE WAS CARRYING ALL ALONG.
 *
 * Nothing chose this. Cells are placed centred on the origin so the closure needs no layout table,
 * and a centred lattice is symmetric under point reflection through its centre. Everything that
 * follows was already true when the closure was built and simply had not been stated: the map is
 * an involution, it maps the closure onto itself, it has no fixed point when both sides are even
 * (so 180 cells fall into exactly 90 orbits of two), reflected positions cancel exactly, and — the
 * one that is not visible from either the layout or the addressing alone — under row-major
 * addressing the reflection is ADDRESS COMPLEMENT.
 *
 * It is this corpus's own involution law, σ² = id with orbits summing to zero, appearing unbidden
 * in a three.js scene graph: the centring that made the layout free made the symmetry inevitable.
 * Proved for all 180 cells, and at three further shapes, in src/pair/formal/proofs/three.lean.
 */
export declare function threeReflect(cat: ThreeCatalogue, cell: ThreeCell): ThreeCell;
export declare function threeClosureIsInvolutive(cat: ThreeCatalogue): {
    orbits: number;
    fixedPoints: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
};
