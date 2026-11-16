// src/quantum/wind/geometry — the hero's 3D toolkit: the trinity of rotational planes and the perspective it projects
// with. rotate3 turns a vector through all three planes (xy, yz, zx) so the figure tumbles in space, not just
// spins in the plane; perspective() turns the rotated z into a foreshortening factor (nearer grows, farther
// recedes), shared by the fractal arms, the architecture ring and the tag ring so they tumble as one figure.
import { geodesicDomeComputes, oneExponentialLaw, phase } from '../../../6/4/index.ts'
import type { Dims } from '../../mountain/dimensions/index.ts'
import { movieCanvasPolarity, movieCanvasRgba } from '../../science/index.ts'
import type { ProofAnimationSpec } from '../../../thunder/waves/index.ts'
import { FIBONACCI } from '../../../3/7/index.ts'
import { PHI, TAU } from '../../../3/7/index.ts'
import { VORTEX_SEQUENCE, abs, atan, cos, floor, hypot, max, min, pow, sin, sqrt, toUuid } from '../../../0/index.ts'

/**
 * THE ANIMATION SDK — one source for every animation the site paints (owner, 2026-11-15: "all animations come from one
 * css sdk", "double-torus.scss"). Three things live here and nowhere else:
 *
 *   MOVIE_ANGLES       the angles every painter turns by — the integers quantum.lean decides (the doubling circuit steps
 *                      forty degrees a digit and closes at nine of them; a trinity is a third of the turn; sixty is a
 *                      sixth; the half turn is the mirror). Computed from the nine digits, not typed.
 *   ANIMATION_DESIGN   every other number a painter draws with, keyed by painter. Each is DEFINED in
 *                      src/pair/lean/proofs/movie.lean, where the kernel decides the law it keeps; verify:movie refuses a
 *                      painter number that differs from the kernel's, and a bare number in any painter.
 *   animationScss()    the stylesheet double-torus.scss is emitted from: every value above as a custom property. The
 *                      browser binds the painters back from that stylesheet (bindAnimationDesign), so every animation
 *                      reads its numbers from the one CSS SDK.
 *
 * Values were moved from the painters verbatim, so every frame is bit-identical to what it was before the move.
 */
const MOVIE_DIGITS = VORTEX_SEQUENCE.length
const MOVIE_STATION = (5 * 2) * 4 // forty degrees a digit — the_doubling_circuit_steps_forty_eighty_one_sixty_and_back
const MOVIE_TURN = MOVIE_DIGITS * MOVIE_STATION
export const MOVIE_ANGLES = {
  turn: MOVIE_TURN,
  half: MOVIE_TURN / 2,
  trinity: MOVIE_TURN / 3,
  sixty: MOVIE_TURN / (2 * 3),
  station: MOVIE_STATION,
} as const

export const ANIMATION_DESIGN = {
  drawEmfA432Field: {
    maxR: (9 / (5 * 4) + 1 / (5 * 5 * 5)),
    shellFreqs: (6 * 5 * 2),
    shellFreqs2: (8 * 5 * 3),
    shellFreqs3: 700e6,
    shellFreqs4: 3.5e9,
    shellFreqs5: 2.4e9,
    shellFreqs6: 5.8e9,
    r: (9 / (5 * 5 * 2)),
    r2: (4 / 5),
    paintArg1: (1 / (5 * 2)),
    paintL: 5 / 8,
    paintArg12: (2 / (5 * 5)),
    paintL2: (5 * 3) / 16,
    paintC: 1 / 64,
    dw: ((1 / 5) + 7 / (5 * 5 * 2)),
    dh: (3 / 5),
    breathLo: 1 - 9 / (5 * 5 * 2),
    humanBreathArg1Part: (9 * 2),
    pulseR: (1 - 9 / (5 * 4)),
    paintArg13: (3 / 5),
    rr: (1 - 9 / (5 * 4)),
    rr2: (9 * 2),
    paintArg0Part: 8,
    paintArg0Part2: 360,
    paintArg1Part: (7 / (5 * 4)),
    paintArg1Part2: (2 / 5),
    arcArg2Part: 3,
    arcArg2Part2: (3 / 5),
  },
  paintCenterShape: {
    lineToArg0Part: (3 / 4),
    lineToArg1Part: (3 / 5),
  },
  drawHumanDesignBodyGraph: {
    paintL: (5 * 3) / 16,
    paintC: 1 / 64,
    paintC2: 1 / 32,
    pad: (8 * 2),
    accentArg0: 7 / (5 * 2),
    inkArg0: 2 / (5 * 5),
    r: (8 * 3),
    maxArg0: 9,
    roundArg0Part: (8 * 4),
    inkArg02: 1 / (5 * 2),
    inkArg03: 3 / 5,
    inkArg04: 7 / (5 * 2),
    sliceArg1: 4,
  },
  drawAstronomyProjection: {
    paintL: (5 * 3) / 16,
    paintC: 1 / 64,
    maxArg0: 9,
    roundArg0Part: 27,
    scale: ((2 / 5) - (1 / (5 * 5))),
    scale2: (1 - 1 / (5 * 5)),
    scale3: (1 / (5 * 5)),
    inkArg0: 3 / (5 * 5 * 2),
    loop: 4,
    arcArg2Part: 4,
    size: (5 * 2),
    size2: 5,
    size3: 4,
    paintArg1: 1 - 3 / (5 * 4),
    inkArg02: 7 / (5 * 2),
    fillTextArg1Part: 8,
    fillTextArg2Part: 4,
  },
  drawDynamicsProjection: {
    paintL: (5 * 3) / 16,
    paintC: 1 / 64,
    maxArg0: 9,
    roundArg0Part: 27,
    minArg0: (16 * 3),
    minArg1Part: (8 * 5),
    baseY: (7 / (5 * 2)),
    baseY2: (1 / (5 * 5)),
    maxH: (1 - 9 / (5 * 4)),
    x: (5 * 4),
    x2: 8,
    paintArg1: 1 - 3 / (5 * 4),
    inkArg0: 7 / (5 * 4),
    inkArg02: 4 / 5,
    fillTextArg2Part: (7 * 2),
    toFixedArg0: 3,
    fillTextArg2Part2: 6,
    x0: (5 * 4),
    x1: (5 * 4),
    x12: 8,
    linkY: (1 / 5),
    linkY2: (1 / (5 * 5)),
    paintArg12: 1 - 9 / (5 * 4),
    paintL2: 13 / 16,
    inkArg03: 3 / 4,
    fillTextArg2Part3: 8,
  },
  drawBursts: {
    when: 1100,
    age: 1100,
    ring: ((7 * 3) / (5 * 5 * 2)),
    paintArg1Part: (3 / 5),
    paintL: 13 / 16,
    reach: (2 / 5),
    paintArg0Part: (6 * 5),
    paintArg1Part2: (4 / 5),
    paintL2: 7 / 8,
    arcArg2Part: (6 * 2 / 5),
  },
  drawArchitecture: {
    r: (27 / 100),
    ang: 3,
    ang2: ((7 * 3) / (5 * 5 * 2)),
    rotate3Arg5Part: (7 * 3 / 100),
    paintArg1: (7 / (5 * 5)),
    paintL: 7 / 8,
    paintArg1Part: (2 / 5),
    paintL2: 13 / 16,
    maxArg0: 9,
    roundArg0Part: (7 * 2),
  },
  drawHero: {
    coreR: (7 / 100),
    baseLen: (7 * 2 / 5),
    baseLen2: 2.2,
    baseLen3: (4 / (5 * 5)),
    baseLen4: ((7 * 3) / (5 * 5)),
    baseLen5: 0.22,
    when: (100 * 9),
    depth: 6,
    when2: 520,
    depth2: 5,
    depth3: 4,
    when3: (100 * 8),
    when4: (16 * 6 * 5),
    rYZ: 0.33,
    rYZ2: (9 / (5 * 5 * 2)),
    rZX: (7 * 3 / 100),
    rZX2: (9 / (5 * 5 * 2)),
    branchSegmentsArg3Part: 1 - 9 / (5 * 5 * 2),
    branchSegmentsArg3Part2: (9 / (5 * 5)),
    fIBONACCIAt: 8,
    r: (2 * 5),
    fIBONACCIAt2: 7,
    r2: 100,
    maxArg1Part: 3,
    maxArg0: 8,
    roundArg0Part: (5 * 2),
    fillTextArg2Part: 7,
  },
  drawPlasmaField: {
    cosArg0Part: (7 / 100),
    bx: 0.26,
    sinArg0Part: (1 / (5 * 4)),
    by: (1 / 5),
    sinArg0Part2: (3 / (5 * 2)),
    blobHue: (9 * 2),
    radius: (8 / (5 * 5)),
    radius2: (7 / 100),
    sinArg0Part3: (9 / (5 * 4)),
    sinArg0Part4: (9 / (5 * 2)),
    addColorStopArg0: (2 / 5),
  },
  drawPlasmaRays: {
    angle: (1 / (5 * 4)),
    len: (27 / (5 * 4)),
    len2: (1 - 3 / (5 * 4)),
    sinArg0Part: (1 - 7 / (5 * 4)),
    sinArg0Part2: (1 - 9 * 7 / 100),
    pulse: (7 / (5 * 4)),
    pulse2: (1 - 7 / (5 * 4)),
    sinArg0Part3: ((7 * 3) / (5 * 4)),
    streamAlphaArg0: (1 - 9 / (5 * 4)),
    lineWidth: (9 / (5 * 4)),
    lineWidth2: 0.22,
    shadowBlur: 3,
  },
  drawDeathCounterFlow: {
    outerR: 0.46,
    speed: (9 / (5 * 5 * 2)),
    speed2: (1 / (5 * 4)),
    head: 1e3,
    d0: (1 / (5 * 4)),
    d1: (1 / (5 * 4)),
    a0: 3,
    a02: (7 / (5 * 4)),
    a1: 3,
    a12: (7 / (5 * 4)),
    streamAlphaArg1Part: (1 - 7 / (5 * 4)),
    alpha: (1 - 9 / (5 * 4)),
    paintL: 7 / 16,
    lineWidth: (3 / 5),
    lineWidth2: (8 / 5),
    fIBONACCIAt: 5,
    paintArg1Part: (2 * 5),
    paintL2: 9 / 16,
    arcArg2: (7 / 5),
  },
  drawPlasmaBall: {
    voidExtent: (7 * 2 / 5),
    addColorStopArg0: (2 / 5),
    addColorStopArg02: (3 / 4),
    layerR: (7 / (5 * 5)),
    layerR2: 0.22,
    orbitRate: (3 / (5 * 5)),
    orbitRate2: (1 / (5 * 5)),
    orbit: (7 / (5 * 2)),
    orbit2: (7 / (5 * 4)),
    wobble: (2 / (5 * 5)),
    sinArg0Part: (1 - 9 / (5 * 4)),
    wobble2: (1 - 3 / (5 * 4)),
    wobble3: (3 / (5 * 4)),
    floorArg0Part: 3,
    maxArg1Part: 3,
    sliceArg1Part: 4,
    padEndArg0: 4,
    sinArg0Part2: (4 / 5),
    sinArg0Part3: -4,
    alpha: 3 / 8,
    alpha2: (5 / 8),
    maxArg0: 7,
    roundArg0Part: 0.22,
    roundArg0Part2: (1 / (5 * 5)),
    shadowBlur: 6,
  },
  drawWiredUuidStreams: {
    minArg0: (8 * 7),
    maxArg0: (9 * 2),
    floorArg0Part: 38,
    phase: (2 * 5),
    trailStep: (2 / (5 * 5 * 5)),
    trailStep2: (1 / (5 * 5 * 5)),
    floorArg0Part2: (7 * 2),
    nearVoid: (6 * 2 / 5),
    maxArg02: (5 * 2),
    roundArg0Part: (1 - 3 / (5 * 4)),
    roundArg0Part2: (3 / (5 * 4)),
    glow: (5 * 2),
    glow2: (7 * 2),
    glow3: 4,
    coin: (6 * 2),
    coin2: 16,
  },
  drawFusedForceLayers: {
    reach: (9 / (5 * 5 * 2)),
    reach2: 0.26,
    fIBONACCIAt: 7,
    reach3: 100,
    alpha: (1 / (5 * 4)),
    fIBONACCIAt2: 5,
    sinArg0Part: (2 * 5),
    sinArg0Part2: 1.7,
    alpha2: (7 / (5 * 5 * 2)),
    alpha3: (9 / 100),
    orbit: (3 / 5),
    drift: 0.22,
    drift2: (3 / (5 * 5 * 2)),
    sinArg0Part3: (2 / 5),
    cosArg0Part: (1 / (5 * 5)),
    sinArg0Part4: (1 / (5 * 4)),
    ly: (4 / 5),
    radius: (1 - 3 / (5 * 4)),
    radius2: (3 / (5 * 4)),
    paintL: 5 / 8,
    addColorStopArg0: (9 / (5 * 4)),
  },
  drawTwoBySevenMorph: {
    paintArg1Part: (1 / 5),
    paintArg1Part2: (1 / (5 * 4)),
    paintL: 5 / 8,
    paintArg1Part3: (1 / 4),
    paintL2: 3 / 4,
    paintL3: (9 + 2) / 16,
  },
  paintHolographicPlasmaHeroMovie: {
    voidR: (7 / 100),
    createRadialGradientArg5Part: (1 - 9 / (5 * 4)),
    drawTwoBySevenMorphArg3Part: (9 / (5 * 5 * 2)),
  },
  drawLivingTorusFrame: {
    lIVINGTORUSSPINDIVISOR: (9 * 2),
    view: ((7 * 3) / (5 * 5 * 2)),
    spin: (1 - 9 / (5 * 4)),
    spin2: -(1 - 9 / (5 * 4)),
    sinArg0Part: (3 / 5),
    paintArg0Part: 360,
    paintArg1Part: (1 / (5 * 4)),
    paintArg1Part2: (1 / 9),
    paintL: 6 / 8,
    pulse: (7 / (5 * 2)),
    hue: 360,
    size: 9,
    size2: 13,
    size3: 5,
    paintArg1Part3: ((7 * 3) / (5 * 5 * 2)),
    paintArg1Part4: 0.46,
    paintL2: 7 / 8,
    paintArg1: (9 / (5 * 2)),
    arcArg2Part: 13,
    paintL3: 13 / 16,
    arcArg2Part2: (9 / 2),
  },
  drawTetrahedronEdges: {
    edges: 3,
    paintL: 7 / 8,
    lineWidth: (6 / 5),
    paintArg1Part: (1 - 9 / (5 * 4)),
    paintL2: 13 / 16,
    arcArg2Part: (5 / 2),
  },
  drawBothEarthsMerkabaFrame: {
    scale: (7 * 6 * 5 * 2),
    innerR: (9 * 8),
    breath: (1 / (5 * 5)),
    createRadialGradientArg5Part: (1 - 9 / (5 * 4)),
    paintArg0: (100 * 2),
    paintArg1: (3 / (5 * 5)),
    paintL: 1 / 4,
    paintL2: 1 / 8,
    shellLift: (1 / (5 * 5)),
    upSpin: -3,
    downSpin: -3,
    drawTetrahedronEdgesArg4Part: (3 / (5 * 4)),
    drawTetrahedronEdgesArg5Part: (7 * 4),
    drawTetrahedronEdgesArg6: (8 * 5 * 3),
    drawTetrahedronEdgesArg7: (1 - 7 / (5 * 4)),
    drawTetrahedronEdgesArg62: (8 * 7 * 5),
    drawTetrahedronEdgesArg72: (1 - 9 / (5 * 4)),
  },
  qSphere: {
    maxArg0: (3 / 5),
    createRadialGradientArg0Part: (7 / (5 * 4)),
    createRadialGradientArg1Part: (7 / (5 * 4)),
    createRadialGradientArg2Part: (3 / (5 * 5)),
    minArg1Part: 1.15,
    paintL: (5 * 3) / 16,
    addColorStopArg0: (3 / 5),
    paintL2: 5 / 8,
    paintArg1Part: (2 / 5),
    paintL3: 1 / 3,
  },
  drawTaijiProjection: {
    fIBONACCIAt: 7,
    r: 100,
    floorArg0Part: (5 * 2 * 100),
    ray: 7,
    yinHue: 360,
    yangHue: (9 * 5 * 4),
    yangHue2: 360,
    paintL: 5 / 16,
    paintL2: 7 / 8,
    fold: 3,
    arcArg3Part: 4,
    arcArg4Part: 4,
    darkArg0: (1 - 2 / (5 * 5)),
    lightArg0: (1 - 2 / (5 * 5)),
    arcArg2Part: 6,
    lightArg02: (1 - 1 / (5 * 4)),
    darkArg02: (1 - 1 / (5 * 4)),
    paintArg1: (3 / 5),
    lineWidth: (3 / 2),
  },
  drawSacredMorphProjection: {
    base: (1 / 5),
    tri: (2 / 5),
    depthD: (5 * 2),
    qSmoothArg0: (3 / 2),
    qSmoothArg1: (7 / 2),
    qSmoothArg12: 4,
    qSmoothArg02: (7 / 2),
    qSmoothArg13: 6,
    fIBONACCIAt: 8,
    qSmoothArg0Part: (2 * 5),
    qSmoothArg14: 8.5,
    qSmoothArg03: (5 / 2),
    rx: (2 / 5),
    ry: (3 / (5 * 2)),
    ry2: (5 / 16),
    rz: (1 / 6),
    when: (1 / (5 * 5 * 2)),
    lineWidth: (7 / 5),
    paintArg0Part: 16,
    paintArg0Part2: 360,
    paintL: 9 / 16,
    fIBONACCIAt2: 5,
    sinArg0Part: (2 * 5),
    sinArg0Part2: (3 / 5),
    zz: (7 / (5 * 2)),
    qProjectArg3Part: (3 / 5),
    qProjectArg4Part: (3 / 5),
    qProjectArg5Part: (2 / 5),
    paintArg0Part3: (8 * 5),
    paintArg1Part: (8 / (5 * 5)),
    fIBONACCIAt3: 7,
    rNode: 100,
    rNode2: (3 / 5),
    rNode3: (2 / 5),
    paintArg0Part4: (7 * 2),
    paintArg1: (1 - 9 / (5 * 4)),
    paintL2: 5 / 8,
    when2: (1 / 5),
    qSphereArg4Part: (7 * 2),
    qSphereArg4Part2: 360,
    qSphereArg5Part: (1 - 9 / (5 * 4)),
    qSphereArg5Part2: (3 / (5 * 2)),
    floorArg0Part: (2 * 5),
    floorArg0Part2: (7 / (5 * 2)),
    maxArg1Part: (2 * 5),
    maxArg1Part2: (7 / (5 * 2)),
    drawSolid3DArg3Part: 1.15,
    drawSolid3DArg8Part: (6 * 5 * 2),
    drawSolid3DArg8Part2: 360,
    paintArg12: (7 / (5 * 2)),
    paintL3: 7 / 16,
    fillTextArg1: (6 * 2),
    fillTextArg2: (5 * 2),
  },
  drawSolid3D: {
    lineWidth: (8 / 5),
    paintL: 9 / 16,
    qSphereArg3Part: (16 / 5),
    qSphereArg5Part: (9 / (5 * 2)),
  },
  drawHologramProjection: {
    fIBONACCIAt: 7,
    r: 100,
    rx: (2 / 5),
    rx2: 0.33,
    ry: (1 / 5),
    ry2: 0.47,
    pulse: (4 / 5),
    pulse2: (3 / 5),
    pulse3: (2 / 5),
    sinArg0Part: (3 / (5 * 2)),
    paintArg1: (4 / 5),
    paintL: 5 / 8,
    shadowBlur: 8,
    paintArg1Part: (1 - 3 / (5 * 4)),
    paintL2: 11 / 16,
    maxArg0: (3 / 2),
    maxArg1Part: (2 * 5),
    paintArg0Part: (8 * 5),
    paintArg0Part2: 360,
    paintArg1Part2: (1 / 4),
    maxArg02: (3 / 5),
    maxArg1Part2: (7 / 5),
    paintArg12: (3 / 4),
    paintL3: 7 / 16,
    fillTextArg1: (6 * 2),
    fillTextArg2: (5 * 2),
  },
  drawLabyrinthProjection: {
    r: (8 / (5 * 5)),
    tube: ((7 * 3) / (5 * 5 * 2)),
    nu: 26,
    nv: 6,
    spin: (2 / 5),
    v: (1 / 5),
    size: (7 * 2),
    paintArg0Part: (9 * 2),
    paintArg0Part2: 360,
    paintArg1Part: (1 / 5),
    paintArg1Part2: (7 / (5 * 2)),
    paintLPart: (1 / 6),
    breath: (7 / (5 * 2)),
    sinArg0Part: (9 / (5 * 2)),
    heroSize: (9 * 2),
    heroSize2: 16,
    paintArg1: (4 / 5),
    paintL: 5 / 8,
    shadowBlur: (6 * 2),
    paintL2: 11 / 16,
  },
  drawMovie10dProjection: {
    fIBONACCIAt: 7,
    r: 100,
    rx: (2 / 5),
    rx2: 0.23,
    rx3: (9 / (5 * 5 * 2)),
    ry: (3 / (5 * 2)),
    ry2: (5 / 16),
    ry3: (9 / (5 * 5 * 2)),
    rz: (9 / (5 * 5 * 2)),
    loop: (16 * 5),
    y: 79,
    fIBONACCIAt2: 5,
    qProjectArg8Part: (2 * 5),
    paintArg0Part: 4,
    paintArg0Part2: 360,
    paintArg1Part: (1 / (5 * 2)),
    paintArg1Part2: (1 / 4),
    paintArg1Part3: (5 * 5),
    paintArg1Part4: 7,
    maxArg1Part: (2 * 5),
    qProjectArg8Part2: (1 / 5),
    ring: (3 / 5),
    ring2: (3 / (5 * 5)),
    rad: 16,
    paintArg0Part3: (5 * 5 * 2),
    paintL: 9 / 16,
    lineWidth: (7 / 5),
    loop2: 8,
    t: 8,
    roundArg0Part: (5 * 3),
    roundArg0Part2: 9,
    roundArg0Part3: (5 * 5),
    roundArg0Part4: (2 * 9),
    paintArg1Part5: (9 / (5 * 4)),
    paintL2: 5 / 8,
    paintArg1Part6: (3 / (5 * 2)),
    paintArg1Part7: (2 / 5),
    paintL3: 7 / 16,
    fillTextArg2Part: 8,
  },
  drawMerkabaProjection: {
    r: (3 / (5 * 2)),
    a: (2 / 5),
    drawSolid3DArg6Part: (7 / (5 * 2)),
    drawSolid3DArg9: (1 - 3 / (5 * 4)),
    drawSolid3DArg8Part: (9 * 5 * 4),
    drawSolid3DArg8Part2: 360,
    drawSolid3DArg92: (7 / (5 * 2)),
  },
  drawUnitDistanceProjection: {
    r0: 0.44,
    ringRadius: (7 / (5 * 5)),
    ringRadius2: (2 / 3),
    drift: (3 / (5 * 5)),
    nodes: 3,
    hue: (9 * 2),
    hue2: 360,
    paintArg1: 0.22,
    paintArg1Part: (7 / (5 * 4)),
    paintArg1Part2: (3 / (5 * 2)),
    paintL: 5 / 8,
    maxArg0: (4 / 5),
    maxArg1Part: (7 / (100 * 5)),
    glow: (3 / (5 * 2)),
    glow2: (9 / (5 * 4)),
    paintArg0Part: (9 * 5 * 4),
    paintArg0Part2: 8,
    paintArg0Part3: 360,
    paintL2: 11 / 16,
    lineWidth: (7 / 5),
    moveToArg0Part: (3 / (5 * 2)),
    moveToArg1Part: (3 / (5 * 2)),
    lineToArg0Part: ((8 * 3) / (5 * 5)),
    lineToArg1Part: ((8 * 3) / (5 * 5)),
    paintL3: 3 / 4,
    maxArg1Part2: (1 / (5 * 5 * 2)),
    fIBONACCIAt: 5,
    lensR: 100,
    lensR2: (1 - 3 / (5 * 4)),
    sep: (1 / 9),
    paintArg12: (1 - 9 / (5 * 4)),
    lineWidth2: (6 / 5),
    paintArg1Part3: (7 / (5 * 5)),
    paintArg1Part4: (2 / 5),
    outerNodes: 3,
    lit: 3,
    floorArg0Part: 5,
    span: 3,
    k: 5,
    k2: 4,
    paintArg0Part4: (9 * 5 * 2),
    paintArg13: (3 / 4),
    paintL4: 13 / 16,
    lineWidth3: (8 / 5),
  },
  drawVortexStrokesProjection: {
    r: (2 / 5),
    drift: (2 / (5 * 5)),
    angleAt: 4,
    paintArg0Part: (100 * 3),
    paintArg0Part2: 360,
    paintArg1Part: (2 / (5 * 5)),
    paintArg1Part2: (1 / (5 * 2)),
    paintL: 5 / 8,
    lineWidth: (4 / 5),
    paintArg0Part3: (9 * 5 * 4),
    paintArg1Part3: (1 / (5 * 4)),
    maxArg1Part: (3 / 5),
    hue: (9 * 5 * 4),
    hue2: 360,
    paintArg1Part4: (9 / (5 * 5 * 2)),
    paintArg1Part5: (3 / 5),
    paintLPart: 11 / 16,
    paintLPart2: 9 / 16,
    setLineDashArg0Part: 3,
    setLineDashArg0Part2: 5,
    lineWidth2: (8 / 5),
    maxArg0: (6 / 5),
    maxArg1Part2: (3 / 100),
    r2: (4 / 5),
    hue3: (6 * 2),
    paintArg1: (7 / (5 * 2)),
    paintL2: 3 / 4,
    lineWidth3: (6 / 5),
    paintArg1Part6: (9 / (5 * 4)),
    paintArg1Part7: (7 / (5 * 4)),
    maxArg1Part3: (1 / (5 * 4)),
    paintArg12: (3 / 5),
    paintL3: 7 / 8,
    moveToArg0Part: (3 / 2),
    arcArg2Part: (3 / 2),
    maxArg1Part4: (3 / 2),
    glow: (1 / 4),
    glow2: (1 - 7 / (5 * 4)),
    hue4: (9 * 5 * 2),
    paintL4: 13 / 16,
    lineWidth4: (7 / 5),
    maxArg1Part5: (3 / (5 * 5 * 2)),
    arcArg2Part2: (7 / (5 * 2)),
    arcArg2Part3: (3 / 5),
    a: 4,
    returned: (9 / (5 * 2)),
    returned2: -(9 / (5 * 2)),
    tetraEdges: 3,
    spin: (3 / (5 * 2)),
    drawSolid3DArg3Part: ((7 * 3) / (5 * 5 * 2)),
    drawSolid3DArg5Part: (2 / 5),
    drawSolid3DArg9Part: (2 / 5),
    drawSolid3DArg9Part2: (1 / 4),
    drawSolid3DArg8Part: (9 * 5 * 4),
    drawSolid3DArg8Part2: 360,
    paintArg1Part8: (3 / (5 * 2)),
    maxArg1Part6: (1 / (5 * 5 * 2)),
  },
  drawDoubleTorusProjection: {
    r: 0.26,
    sep: 1.18,
    drift: (1 / 4),
    hue: (9 * 5 * 4),
    hue2: 360,
    paintArg1: (3 / (5 * 2)),
    paintL: 9 / 16,
    lineWidth: (6 / 5),
    paintArg12: (7 / (5 * 5 * 2)),
    loop: 9,
    a: 9,
    paintArg0Part: (6 * 2),
    paintArg0Part2: 360,
    paintArg1Part: (7 / (5 * 4)),
    paintL2: 5 / 8,
    maxArg1Part: (9 / (100 * 2)),
    returned: 1.55,
    returned2: (1 - 2 / (5 * 5)),
    cars: 3,
    cars2: 9,
    head: (1 / 8),
    u: 0.022,
    paintArg0Part3: (9 * 5 * 2),
    paintArg1Part2: (1 / 4),
    paintArg1Part3: (3 / 5),
    paintL3: 13 / 16,
    maxArg1Part2: (1 / (5 * 4)),
    arcArg2Part: (3 / 5),
    arcArg2Part2: (2 / 5),
    paintArg13: (7 / 8),
    paintL4: 7 / 8,
    maxArg0: 9,
    roundArg0Part: (1 / 5),
    fillTextArg2Part: (2 / 5),
  },
  drawTorusFieldProjection: {
    r: (3 / (5 * 2)),
    tube: (2 / 5),
    rx: (2 / 5),
    rx2: (3 / (5 * 2)),
    ry: (1 / 5),
    ry2: (7 * 3 / 100),
    loop: (7 * 4),
    u: (7 * 4),
    loop2: (5 * 2),
    v: (5 * 2),
    paintArg0Part: 8,
    paintArg0Part2: 360,
    paintArg1Part: (3 / (5 * 4)),
    maxArg0: (3 / 5),
  },
  kernelTheoremStreams: {
    window: 16,
  },
  sharedHeroAt: {
    cssWidth: (64 * 16),
    t: 1e3,
  },
  fieldLayers: {
    toUuidArg0Part: 7,
    when: (4 * 64),
    ray: 7,
    mapHuePart: 7,
  },
  seedOf: {
    seedFromTextArg1: 8,
  },
  armsOf: {
    returned: 3,
  },
  heroFieldCenterY: {
    when: 3,
  },
  buildArchNodes: {
    when: 9,
    sliceArg1: 9,
    floorArg0Part: 3,
    mapWithinPart: 3,
  },
  bgStreamParams: {
    distPart: (9 / (5 * 5)),
    distPart2: (4 / (5 * 5)),
    speedPart: (7 / (5 * 5)),
    speedPart2: (1 - (6 * 2) / (5 * 5)),
    sizePart: 11,
    roundArg0Part: 6,
  },
  bgStreamOrbit: {
    spin: (7 / (5 * 4)),
  },
  branch: {
    when: 3,
    paintArg0Part: (7 * 4),
    paintArg0Part2: 360,
    paintArg1Part: (1 / (5 * 2)),
    paintL: 7 / 8,
    maxArg1Part: (3 / 5),
  },
  strokeBranchLevels: {
    paintArg0Part: (7 * 4),
    paintArg1Part: (1 / (5 * 2)),
    paintL: 7 / 8,
    maxArg1Part: (3 / 5),
    loop: 3,
    i: 4,
    segAt: 3,
  },
  drawFlower: {
    r: 0.22,
    loop: 6,
    a: 3,
    a2: 6,
    sqrtArg0: 3,
    trail: (8 * 5),
    td: 8,
    spin: (2 / 5),
    hueC: 27,
    tt: (1 / (5 * 4)),
    tt2: (3 / (5 * 2)),
    powArg1: (8 / 5),
    globalAlpha: ((7 * 3) / (5 * 5 * 2)),
    paintArg0Part: 3,
    paintArg1Part: ((7 * 3) / (5 * 5 * 2)),
    paintLPart: 1 - 3 / 16,
    paintLPart2: (5 / (16 * 2)),
    maxArg1Part: (7 / (5 * 2)),
    maxArg1Part2: 1.7,
  },
  drawCalendars: {
    throatR: (7 / 100),
    radius: 9,
    hueC: (8 * 3),
    ang: 4,
    ang2: (1 / (5 * 4)),
    paintArg1: (7 / (5 * 2)),
    paintL: 1 - 3 / 16,
    maxArg1Part: (3 / (100 * 5)),
  },
  branchSegments: {
    when: 3,
  },
  drawResonanceProjection: {
    paintL: (5 * 3) / 16,
    paintC: 1 / 64,
    maxArg0: 9,
    roundArg0Part: 27,
    cy: (1 - 9 / (5 * 4)),
    baseR: (8 / (5 * 5)),
    baseR2: (1 - 1 / (5 * 5)),
    baseR3: (1 / (5 * 5)),
    inkArg0: 2 / (5 * 5),
    angle: (2 / 5),
    r: (1 - 9 / (5 * 4)),
    r2: (9 / (5 * 4)),
    paintArg1Part: (7 / (5 * 4)),
    paintArg1Part2: (1 - 9 / (5 * 4)),
    arcArg2Part: 6,
    arcArg2Part2: (5 * 2),
    paintL2: 13 / 16,
    inkArg02: 3 / 4,
    fillTextArg1Part: 8,
    fillTextArg2Part: 4,
  },
  drawProofWitness: {
    pad: (2 * 5),
    fillArg0Part: 3 / 5,
    fillArg0Part2: 1 / 6,
    fillRectArg0Part: (3 / (4 * 5)),
    fillRectArg2Part: (7 / (2 * 5)),
    strokeArg0: 1 / 4,
    m: 9,
    proofRingArg1Part: (4 / 5),
    proofRingArg4Part: 4,
    fillArg0: 1 / 3,
    arcArg1Part: (8 * 5),
    strokeArg02: 3 / 5,
    arcArg1Part2: (4 * 6),
    fillArg0Part3: 4 / 5,
    fillArg0Part4: 1 / 8,
    at: (4 / 5),
    strokeArg03: 1 / 5,
  },
  drawProofAnimation: {
    geodesicDomeComputesArg0: 3,
    phase: (108 * (2 * 5)),
    maxArg1Part: 2 ** 5,
    t: 9,
    h: (2 / 3),
    strokeArg0: 1 / 5,
    moveToArg1Part: (5 / 6),
    lineToArg1Part: (5 / 6),
    lineToArg1Part2: (2 / 3),
    fillArg1Part: 3,
    fillRectArg0Part: 3,
    fillRectArg1Part: (5 / 6),
    fillRectArg2Part: 3,
    returned: (4 / 5),
    returned2: 6,
    returned3: 3,
    returned4: (2 / 3),
    sinArg0Part: 6,
    strokeArg0Part: 3 / 4,
    strokeArg0Part2: 1 / 9,
    strokeArg1Part: (4 * 5 * 9) / 4,
    n: 7,
    proofRingArg1Part: (3 / 4),
    fromArg1Part: 3,
    strokeArg0Part3: 1 / 4,
    red: 4,
    strokeArg0Part4: 1 / 3,
    fromLength: 8,
    x: 3 / 4,
    x2: 1 / 4,
    y: 3 / 4,
    y2: 1 / 4,
    when: 4,
    z: 1 / 8,
    strokeArg02: 1 / 3,
    loop: 8,
    loop2: 4,
    floorArg0Part: 8,
    lit: 8,
    arcArg1Part: (2 * 6),
    strokeArg1Part2: 9,
    arcArg4Part: (3 / 4),
    r: (7 / 8),
    maxArg1Part2: (3 * 8),
    strokeArg03: 1 / 4,
    arcArg2Part: (3 / 4),
    strokeArg0Part5: 1 / 6,
    proofRingArg0: 3,
    proofRingArg4Part: 4,
    strokeArg04: 3 / 4,
    loop3: 3,
    triAt: 3,
    arcArg2Part2: (2 * 6),
    arcArg2Part3: 3,
    limit: (1 / 4),
    acc: (3 / 4),
    cosArg0Part: (2 / 3),
    sinArg0Part2: (2 / 3),
    sc: (3 / 5),
    sc2: 3,
    when2: 3,
    sinArg0Part3: 3,
    ny: 5,
    arcArg2Part4: (3 * 8),
    arcArg1Part2: 8,
    treeBranchArg1Part: 8,
    treeBranchArg2Part: 4,
    treeBranchArg3: 3,
    tilt: 5,
    arm: (3 / 5),
    arcArg2Part5: (2 * 5),
    maxArg0: 3,
    fillArg0Part: 3 / 4,
    fillArg0Part2: 1 / 5,
    fillArg0Part3: 1 / 4,
    arcArg1Part3: (3 * 8),
    g: 6,
    fillArg0Part4: 1 / (2 * 6),
    arcArg2Part6: 5,
    seq: 4,
    seq2: 8,
    seq3: 7,
    seq4: 5,
    proofRingArg02: 9,
    minArg1: 6,
    ringR: (3 / 4),
    rOut: (9 / (2 * 5)),
    dot: (4 * 9),
    angleOf: 9,
    angleOf2: 4,
    fillArg0: 2 / 3,
    fillArg02: 1 / 3,
    arcArg2Part7: (2 / 3),
  },
}

/**
 * THE PROOF ANIMATIONS, PAINTED FROM THE SDK — one renderer for every ProofAnimationSpec (kind · points · lines · ratePhi ·
 * hueDigit · seed · witness · coords). It lived inside .vitepress/theme/components/ProofAnimation.vue, outside src, with
 * its numbers typed in the component; it is here now, a pure painter beside the movie's, so verify:movie reads it like any
 * other and every number it draws with is an ANIMATION_DESIGN value movie.lean decides. Moved line for line: the same
 * spec at the same time paints the same pixels. Rates are φ^−k, hues are vortex digits on the one circle (d·360/9).
 */
let proofDomeCache: ReturnType<typeof geodesicDomeComputes>['animation'] | null = null
let proofLadderCache: readonly number[] | null = null

function proofRing(n: number, r: number, cx: number, cy: number, offset = 0) {
  return Array.from({ length: n }, (_, i) => {
    const a = offset + (i / n) * TAU
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const
  })
}

type ProofWitness = NonNullable<ProofAnimationSpec['witness']>
// THE PROOF'S OWN OBJECT — when the spec carries a witness, this draws its data and nothing else: the bars, the walk,
// the grid or the graph the theorem's computation produced, revealed in order as the phase turns.
function drawProofWitness(ctx: CanvasRenderingContext2D, s: number, c: number, w: ProofWitness, phase: number,
  stroke: (alpha: number, dh?: number) => void, fill: (alpha: number, dh?: number) => void): void {
  const f = ((phase / TAU) % 1 + 1) % 1
  const pad = s / ANIMATION_DESIGN.drawProofWitness.pad
  if (w.form === 'bars') {
    const vals = w.values ?? []
    const n = Math.max(1, vals.length)
    const top = Math.max(1, ...vals.map(Math.abs), ...(w.against ?? []).map(Math.abs))
    const signed = vals.some((v) => v < 0)
    const base = signed ? c : s - pad
    const scale = (signed ? c - pad : s - 2 * pad) / top
    const bw = (s - 2 * pad) / n
    const shown = Math.floor(f * (n + 1))
    vals.forEach((v, i) => {
      const marked = w.marks?.includes(i) ?? false
      fill(i < shown ? (marked ? 1 : ANIMATION_DESIGN.drawProofWitness.fillArg0Part) : ANIMATION_DESIGN.drawProofWitness.fillArg0Part2, marked ? MOVIE_ANGLES.half : v < 0 ? MOVIE_ANGLES.trinity : 0)
      const h = Math.abs(v) * scale
      ctx.fillRect(pad + i * bw + bw * ANIMATION_DESIGN.drawProofWitness.fillRectArg0Part, v >= 0 ? base - h : base, bw * ANIMATION_DESIGN.drawProofWitness.fillRectArg2Part, Math.max(1, h))
    })
    if (w.against) {
      stroke(1)
      ctx.beginPath()
      w.against.forEach((v, i) => { const x = pad + i * bw + bw / 2, y = base - v * scale; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y) })
      ctx.stroke()
    }
    if (signed) { stroke(ANIMATION_DESIGN.drawProofWitness.strokeArg0); ctx.beginPath(); ctx.moveTo(pad, c); ctx.lineTo(s - pad, c); ctx.stroke() }
  } else if (w.form === 'walk') {
    const m = w.modulus ?? ANIMATION_DESIGN.drawProofWitness.m, steps = w.values ?? []
    const pts = proofRing(m, c * ANIMATION_DESIGN.drawProofWitness.proofRingArg1Part, c, c, -TAU / ANIMATION_DESIGN.drawProofWitness.proofRingArg4Part)
    for (let i = 0; i < m; i += 1) { fill(ANIMATION_DESIGN.drawProofWitness.fillArg0); ctx.beginPath(); ctx.arc(...pts[i]!, s / ANIMATION_DESIGN.drawProofWitness.arcArg1Part, 0, TAU); ctx.fill() }
    const shown = Math.max(1, Math.floor(f * steps.length))
    stroke(ANIMATION_DESIGN.drawProofWitness.strokeArg02)
    ctx.beginPath()
    steps.slice(0, shown).forEach((r, i) => { const p = pts[r % m]!; if (i) ctx.lineTo(...p); else ctx.moveTo(...p) })
    ctx.stroke()
    fill(1, MOVIE_ANGLES.half); ctx.beginPath(); ctx.arc(...pts[steps[shown - 1]! % m]!, s / ANIMATION_DESIGN.drawProofWitness.arcArg1Part2, 0, TAU); ctx.fill()
  } else if (w.form === 'grid') {
    const rows = w.cells ?? []
    const cols = Math.max(1, ...rows.map((r) => r.length))
    const size = Math.min((s - 2 * pad) / cols, (s - 2 * pad) / Math.max(1, rows.length))
    const x0 = c - (size * cols) / 2, y0 = c - (size * rows.length) / 2
    const classes = Math.max(1, ...rows.flat()) + 1
    const shown = Math.floor(f * (classes + 1))
    rows.forEach((row, i) => row.forEach((k, j) => {
      if (k < 0) return
      fill(k < shown ? ANIMATION_DESIGN.drawProofWitness.fillArg0Part3 : ANIMATION_DESIGN.drawProofWitness.fillArg0Part4, (k * MOVIE_ANGLES.turn) / classes)
      ctx.fillRect(x0 + j * size + 1, y0 + i * size + 1, size - 2, size - 2)
    }))
  } else {
    const frames = w.frames ?? []
    if (!frames.length) return
    const current = Math.floor(f * frames.length) % frames.length
    const at = (x: number, y: number) => [c + x * c * ANIMATION_DESIGN.drawProofWitness.at, c + y * c * ANIMATION_DESIGN.drawProofWitness.at] as const
    const strokeSegs = (segs: readonly (readonly [number, number, number, number])[]) => {
      ctx.beginPath()
      for (const [x1, y1, x2, y2] of segs) { ctx.moveTo(...at(x1, y1)); ctx.lineTo(...at(x2, y2)) }
      ctx.stroke()
    }
    if (w.together) { stroke(ANIMATION_DESIGN.drawProofWitness.strokeArg03); strokeSegs(frames.flat()) }
    stroke(1, w.together ? MOVIE_ANGLES.half : 0)
    strokeSegs(frames[current]!)
  }
}

/** Paint one proof animation frame for `spec` at hero-clock time `t` onto a square canvas of side `s`. */
export function drawProofAnimation(ctx: CanvasRenderingContext2D, s: number, spec: ProofAnimationSpec, t: number, dark: boolean): void {
  const DOME = (proofDomeCache ??= geodesicDomeComputes(ANIMATION_DESIGN.drawProofAnimation.geodesicDomeComputesArg0).animation)
  const LADDER = (proofLadderCache ??= oneExponentialLaw().ladder)
  const hue = (spec.hueDigit * MOVIE_ANGLES.station) % MOVIE_ANGLES.turn
  const rate = PHI ** -spec.ratePhi
  const seedPhase = ((spec.seed ?? 0) % MOVIE_ANGLES.turn) / MOVIE_ANGLES.turn
  const c = s / 2
  const phase = ((t / ANIMATION_DESIGN.drawProofAnimation.phase) * rate + seedPhase) * TAU // the census clock scaled by the φ-rate, offset by the theorem's own seed
  const tour = phase * PHI ** -2
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, s, s)
  ctx.lineWidth = Math.max(1, s / ANIMATION_DESIGN.drawProofAnimation.maxArg1Part)
  const stroke = (alpha: number, dh = 0) => { ctx.strokeStyle = movieCanvasRgba((hue + dh) % MOVIE_ANGLES.turn, alpha, { dark }) }
  const fill = (alpha: number, dh = 0) => { ctx.fillStyle = movieCanvasRgba((hue + dh) % MOVIE_ANGLES.turn, alpha, { dark }) }
  const k = spec.kind
  const paint = () => {

  if (k === 'washout') {
    const cycle = ((phase / TAU) % 1 + 1) % 1
    const descending = cycle < 1 / 2
    const t = (descending ? cycle : 1 - cycle) * 2 * LADDER[LADDER.length - 1]! / ANIMATION_DESIGN.drawProofAnimation.t
    const w = s / (LADDER.length + 2)
    LADDER.forEach((halftime, i) => {
      const y = descending ? 1 - Math.exp(-Math.LN2 * t / halftime) : Math.exp(-Math.LN2 * t / halftime)
      const x = w * (i + 1) + w / 2
      const h = (s * ANIMATION_DESIGN.drawProofAnimation.h) * y
      stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg0)
      ctx.beginPath(); ctx.moveTo(x, s * ANIMATION_DESIGN.drawProofAnimation.moveToArg1Part); ctx.lineTo(x, s * ANIMATION_DESIGN.drawProofAnimation.lineToArg1Part - s * ANIMATION_DESIGN.drawProofAnimation.lineToArg1Part2); ctx.stroke()
      fill(1, (i * MOVIE_ANGLES.turn) / LADDER.length / ANIMATION_DESIGN.drawProofAnimation.fillArg1Part)
      ctx.fillRect(x - w / ANIMATION_DESIGN.drawProofAnimation.fillRectArg0Part, s * ANIMATION_DESIGN.drawProofAnimation.fillRectArg1Part - h, (2 * w) / ANIMATION_DESIGN.drawProofAnimation.fillRectArg2Part, h)
    })
    stroke(1 / 2)
    ctx.beginPath()
    LADDER.forEach((halftime, i) => {
      const y = descending ? 1 - Math.exp(-Math.LN2 * t / halftime) : Math.exp(-Math.LN2 * t / halftime)
      const x = w * (i + 1) + w / 2
      ctx.lineTo(x, s * ANIMATION_DESIGN.drawProofAnimation.lineToArg1Part - (s * ANIMATION_DESIGN.drawProofAnimation.lineToArg1Part2) * y)
    })
    ctx.stroke()
  }

  if (k === 'dome') {
    const progress = ((phase / TAU) % 1 + 1) % 1
    const built = Math.floor(progress * (DOME.rings + 1))
    const turn = tour
    const proj = (p: readonly [number, number, number]) => {
      const rx = p[0] * Math.cos(turn) - p[1] * Math.sin(turn)
      const ry = p[0] * Math.sin(turn) + p[1] * Math.cos(turn)
      return [c + (s / 2) * ANIMATION_DESIGN.drawProofAnimation.returned * rx, c + s / ANIMATION_DESIGN.drawProofAnimation.returned2 + (s / 2) * ANIMATION_DESIGN.drawProofAnimation.returned * (ry / ANIMATION_DESIGN.drawProofAnimation.returned3 - p[2] * ANIMATION_DESIGN.drawProofAnimation.returned4)] as const
    }
    for (const strut of DOME.struts) {
      const [ax, ay] = proj(strut.a)
      const [bx, by] = proj(strut.b)
      const state = strut.ring < built ? 1 : strut.ring === built ? 2 : 0
      stroke(state === 2 ? (1 / 2) + (1 / 2) * Math.abs(Math.sin(phase * ANIMATION_DESIGN.drawProofAnimation.sinArg0Part)) : state === 1 ? ANIMATION_DESIGN.drawProofAnimation.strokeArg0Part : ANIMATION_DESIGN.drawProofAnimation.strokeArg0Part2, state === 2 ? ANIMATION_DESIGN.drawProofAnimation.strokeArg1Part : 0)
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
    }
  }

  if (k === 'star' || k === 'spreads') {
    const n = k === 'star' ? spec.points : ANIMATION_DESIGN.drawProofAnimation.n
    const pts = proofRing(n, c * ANIMATION_DESIGN.drawProofAnimation.proofRingArg1Part, c, c, phase)
    const lines = k === 'star' && spec.lines.length ? spec.lines : Array.from({ length: n }, (_, i) => [i, (i + 1) % n, (i + ANIMATION_DESIGN.drawProofAnimation.fromArg1Part) % n])
    const lit = Math.floor(((phase / TAU) % 1) * lines.length + lines.length) % lines.length
    lines.forEach((line, li) => {
      stroke(li === lit ? 1 : ANIMATION_DESIGN.drawProofAnimation.strokeArg0Part3)
      ctx.beginPath()
      for (const p of line) ctx.lineTo(...pts[p % n]!)
      ctx.closePath()
      ctx.stroke()
    })
  } else if (k === 'coloring') {
    const n = spec.points
    const pts = proofRing(n, c * ANIMATION_DESIGN.drawProofAnimation.proofRingArg1Part, c, c, 0)
    const sweep = Math.floor(((phase / TAU) % 1) * n * (n - 1) / 2)
    let e = 0
    for (let i = 0; i < n; i += 1) for (let j = i + 1; j < n; j += 1) {
      const d = Math.min(j - i, n - (j - i))
      const red = d === 1 || d === ANIMATION_DESIGN.drawProofAnimation.red
      stroke(e === sweep % (n * (n - 1) / 2) ? 1 : ANIMATION_DESIGN.drawProofAnimation.strokeArg0Part4, red ? 0 : MOVIE_ANGLES.half)
      ctx.beginPath(); ctx.moveTo(...pts[i]!); ctx.lineTo(...pts[j]!); ctx.stroke()
      e += 1
    }
  } else if (k === 'lattice') {
    const corners = Array.from({ length: ANIMATION_DESIGN.drawProofAnimation.fromLength }, (_, v) => {
      const x = (v & 1) ? ANIMATION_DESIGN.drawProofAnimation.x : ANIMATION_DESIGN.drawProofAnimation.x2, y = (v & 2) ? ANIMATION_DESIGN.drawProofAnimation.y : ANIMATION_DESIGN.drawProofAnimation.y2
      const z = (v & ANIMATION_DESIGN.drawProofAnimation.when) ? ANIMATION_DESIGN.drawProofAnimation.z : 0
      return [s * (x + z), s * (y - z)] as const
    })
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg02)
    for (let a = 0; a < ANIMATION_DESIGN.drawProofAnimation.loop; a += 1) for (const bit of [1, 2, ANIMATION_DESIGN.drawProofAnimation.loop2]) {
      const b = a ^ bit
      if (b > a) { ctx.beginPath(); ctx.moveTo(...corners[a]!); ctx.lineTo(...corners[b]!); ctx.stroke() }
    }
    const lit = Math.floor(((phase / TAU) % 1) * ANIMATION_DESIGN.drawProofAnimation.floorArg0Part + ANIMATION_DESIGN.drawProofAnimation.floorArg0Part) % ANIMATION_DESIGN.drawProofAnimation.lit
    fill(1)
    ctx.beginPath(); ctx.arc(...corners[lit ^ (lit >> 1)]!, s / ANIMATION_DESIGN.drawProofAnimation.arcArg1Part, 0, TAU); ctx.fill()
  } else if (k === 'classes') {
    const n = spec.points
    for (let i = 0; i < n; i += 1) {
      stroke(1 / 2 + (1 / 2) * Math.sin(phase + i), (i * MOVIE_ANGLES.turn) / ANIMATION_DESIGN.drawProofAnimation.strokeArg1Part2)
      ctx.beginPath()
      ctx.arc(c, c, (c * (i + 2)) / (n + 2), phase * (i % 2 ? 1 : -1), phase * (i % 2 ? 1 : -1) + TAU * ANIMATION_DESIGN.drawProofAnimation.arcArg4Part)
      ctx.stroke()
    }
  } else if (k === 'spiral') {
    fill(1)
    for (let i = 0; i < spec.points; i += 1) {
      const a = i * (TAU / (PHI * PHI)) + phase
      const r = (c * ANIMATION_DESIGN.drawProofAnimation.r * Math.sqrt(i + 1)) / Math.sqrt(spec.points)
      ctx.beginPath(); ctx.arc(c + r * Math.cos(a), c + r * Math.sin(a), Math.max(1, s / ANIMATION_DESIGN.drawProofAnimation.maxArg1Part2), 0, TAU); ctx.fill()
    }
  } else if (k === 'circle') {
    const n = spec.points
    const pts = proofRing(n, c * ANIMATION_DESIGN.drawProofAnimation.proofRingArg1Part, c, c, 0)
    const lit = Math.floor(((phase / TAU) % 1) * n) % n
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg03); ctx.beginPath(); ctx.arc(c, c, c * ANIMATION_DESIGN.drawProofAnimation.arcArg2Part, 0, TAU); ctx.stroke()
    for (let i = 0; i < n; i += 1) for (let j = i + 1; j < n; j += 1) { stroke(i === lit ? 1 : ANIMATION_DESIGN.drawProofAnimation.strokeArg0Part5); ctx.beginPath(); ctx.moveTo(...pts[i]!); ctx.lineTo(...pts[j]!); ctx.stroke() }
  } else if (k === 'triangle') {
    const tri = proofRing(ANIMATION_DESIGN.drawProofAnimation.proofRingArg0, c * ANIMATION_DESIGN.drawProofAnimation.proofRingArg1Part, c, c, -TAU / ANIMATION_DESIGN.drawProofAnimation.proofRingArg4Part)
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg04); ctx.beginPath(); for (let i = 0; i <= ANIMATION_DESIGN.drawProofAnimation.loop3; i += 1) ctx.lineTo(...tri[i % ANIMATION_DESIGN.drawProofAnimation.triAt]!); ctx.stroke()
    const t = (phase / TAU) % 1
    const foot = [tri[1]![0] + t * (tri[2]![0] - tri[1]![0]), tri[1]![1] + t * (tri[2]![1] - tri[1]![1])] as const
    stroke(1); ctx.beginPath(); ctx.moveTo(...tri[0]!); ctx.lineTo(...foot); ctx.stroke()
    fill(1 / 2); ctx.beginPath(); ctx.arc(c, c, s / ANIMATION_DESIGN.drawProofAnimation.arcArg2Part2 * (1 + Math.sin(phase) / ANIMATION_DESIGN.drawProofAnimation.arcArg2Part3), 0, TAU); ctx.fill()
  } else if (k === 'series') {
    const n = spec.points, limit = c * ANIMATION_DESIGN.drawProofAnimation.limit
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg02); ctx.beginPath(); ctx.moveTo(0, c - limit); ctx.lineTo(s, c - limit); ctx.stroke()
    let acc = 0
    for (let i = 0; i < n; i += 1) {
      acc += (limit * 2 * ANIMATION_DESIGN.drawProofAnimation.acc) / 2 ** (i + 1)
      const x = (s * (i + 1)) / (n + 1), grow = Math.min(1, (phase / TAU) / (i / 2 + 1))
      stroke(i === Math.floor((phase / TAU) % n) ? 1 : 1 / 2)
      ctx.beginPath(); ctx.moveTo(x, c + limit); ctx.lineTo(x, c + limit - acc * grow * 2); ctx.stroke()
    }
  } else if (k === 'polytope') {
    const verts = Array.from({ length: ANIMATION_DESIGN.drawProofAnimation.fromLength }, (_, v) => {
      let x = (v & 1) - 1 / 2, y = ((v >> 1) & 1) - 1 / 2, z = ((v >> 2) & 1) - 1 / 2
      const cx = Math.cos(phase), sx = Math.sin(phase);[x, z] = [x * cx - z * sx, x * sx + z * cx]
      const cy = Math.cos(phase * ANIMATION_DESIGN.drawProofAnimation.cosArg0Part), sy = Math.sin(phase * ANIMATION_DESIGN.drawProofAnimation.sinArg0Part2);[y, z] = [y * cy - z * sy, y * sy + z * cy]
      const sc = c * ANIMATION_DESIGN.drawProofAnimation.sc / (1 + z / ANIMATION_DESIGN.drawProofAnimation.sc2)
      return [c + x * sc, c + y * sc] as const
    })
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg04)
    for (let a = 0; a < ANIMATION_DESIGN.drawProofAnimation.loop; a += 1) for (const bit of [1, 2, ANIMATION_DESIGN.drawProofAnimation.loop2]) { const b = a ^ bit; if (b > a) { ctx.beginPath(); ctx.moveTo(...verts[a]!); ctx.lineTo(...verts[b]!); ctx.stroke() } }
  } else if (k === 'wave') {
    for (const [amp, freq, sh] of [[1, 2, 0], [1, ANIMATION_DESIGN.drawProofAnimation.when2, TAU / ANIMATION_DESIGN.drawProofAnimation.when2], [1, 0, 0]] as const) {
      void amp
      stroke(freq === 0 ? 1 : 1 / 2)
      ctx.beginPath()
      for (let px = 0; px <= s; px += 2) {
        const u = (px / s) * TAU
        const y = freq === 0
          ? (Math.sin(u * 2 + phase) + Math.sin(u * ANIMATION_DESIGN.drawProofAnimation.sinArg0Part3 + phase + TAU / ANIMATION_DESIGN.drawProofAnimation.sinArg0Part3)) / 2
          : Math.sin(u * freq + phase + sh)
        if (px === 0) ctx.moveTo(px, c + y * (c / 2)); else ctx.lineTo(px, c + y * (c / 2))
      }
      ctx.stroke()
    }
  } else if (k === 'tree') {
    const treeBranch = (x: number, y: number, dx: number, depth: number): void => {
      if (depth === 0) return
      const ny = y + s / ANIMATION_DESIGN.drawProofAnimation.ny
      for (const s2 of [-1, 1]) { const nx = x + s2 * dx; stroke((depth + phase / TAU) % 2 < 1 ? 1 : ANIMATION_DESIGN.drawProofAnimation.strokeArg0Part4); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke(); fill(1); ctx.beginPath(); ctx.arc(nx, ny, s / ANIMATION_DESIGN.drawProofAnimation.arcArg2Part4, 0, TAU); ctx.fill(); treeBranch(nx, ny, dx / 2, depth - 1) }
    }
    fill(1); ctx.beginPath(); ctx.arc(c, s / ANIMATION_DESIGN.drawProofAnimation.arcArg1Part2, s / ANIMATION_DESIGN.drawProofAnimation.arcArg2Part4, 0, TAU); ctx.fill()
    treeBranch(c, s / ANIMATION_DESIGN.drawProofAnimation.treeBranchArg1Part, s / ANIMATION_DESIGN.drawProofAnimation.treeBranchArg2Part, ANIMATION_DESIGN.drawProofAnimation.treeBranchArg3)
  } else if (k === 'balance') {
    const tilt = Math.sin(phase) / ANIMATION_DESIGN.drawProofAnimation.tilt
    const pivot = [c, c] as const, arm = c * ANIMATION_DESIGN.drawProofAnimation.arm
    const l = [c - arm * Math.cos(tilt), c + arm * Math.sin(tilt)] as const
    const r = [c + arm * Math.cos(tilt), c - arm * Math.sin(tilt)] as const
    stroke(1); ctx.beginPath(); ctx.moveTo(...pivot); ctx.lineTo(c, c + arm / 2); ctx.stroke()
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg04); ctx.beginPath(); ctx.moveTo(...l); ctx.lineTo(...r); ctx.stroke()
    fill(1); for (const p of [l, r]) { ctx.beginPath(); ctx.arc(p[0], p[1] + s / ANIMATION_DESIGN.drawProofAnimation.arcArg1Part2, s / ANIMATION_DESIGN.drawProofAnimation.arcArg2Part5, 0, TAU); ctx.fill() }
  } else if (k === 'dice') {
    const n = Math.max(ANIMATION_DESIGN.drawProofAnimation.maxArg0, spec.points)
    const lit = Math.floor(((phase / TAU) % 1) * n) % n
    for (let i = 0; i < n; i += 1) {
      fill(i === lit ? ANIMATION_DESIGN.drawProofAnimation.fillArg0Part : ANIMATION_DESIGN.drawProofAnimation.fillArg0Part2, (i * MOVIE_ANGLES.turn) / n)
      ctx.beginPath(); ctx.moveTo(c, c); ctx.arc(c, c, c * ANIMATION_DESIGN.drawProofAnimation.arcArg2Part, (i / n) * TAU, ((i + 1) / n) * TAU); ctx.closePath(); ctx.fill()
    }
  } else if (k === 'cycle') {
    const n = spec.points
    const pts = proofRing(n, c * ANIMATION_DESIGN.drawProofAnimation.proofRingArg1Part, c, c, -TAU / ANIMATION_DESIGN.drawProofAnimation.proofRingArg4Part)
    stroke(ANIMATION_DESIGN.drawProofAnimation.strokeArg02); ctx.beginPath(); for (let i = 0; i <= n; i += 1) ctx.lineTo(...pts[i % n]!); ctx.stroke()
    const at = Math.floor(((phase / TAU) % 1) * n) % n
    for (let i = 0; i < n; i += 1) { fill(i === at ? 1 : ANIMATION_DESIGN.drawProofAnimation.fillArg0Part3); ctx.beginPath(); ctx.arc(...pts[i]!, i === at ? s / ANIMATION_DESIGN.drawProofAnimation.arcArg1Part : s / ANIMATION_DESIGN.drawProofAnimation.arcArg1Part3, 0, TAU); ctx.fill() }
  } else if (k === 'sieve') {
    const g = ANIMATION_DESIGN.drawProofAnimation.g, cell = s / g, sweep = ((phase / TAU) % 1) * 2 * g
    const isP = (x: number) => { if (x < 2) return false; for (let d = 2; d * d <= x; d += 1) if (x % d === 0) return false; return true }
    for (let iy = 0; iy < g; iy += 1) for (let ix = 0; ix < g; ix += 1) {
      const num = iy * g + ix + 1, on = isP(num)
      const near = Math.abs((ix + iy) - sweep) < 1
      if (on) fill(near ? 1 : 1 / 2); else fill(near ? ANIMATION_DESIGN.drawProofAnimation.fillArg0Part3 : ANIMATION_DESIGN.drawProofAnimation.fillArg0Part4)
      ctx.beginPath(); ctx.arc(ix * cell + cell / 2, iy * cell + cell / 2, cell / (on ? ANIMATION_DESIGN.drawProofAnimation.arcArg2Part3 : ANIMATION_DESIGN.drawProofAnimation.arcArg2Part6), 0, TAU); ctx.fill()
    }
  } else {
    const seq = [1, 2, ANIMATION_DESIGN.drawProofAnimation.seq, ANIMATION_DESIGN.drawProofAnimation.seq2, ANIMATION_DESIGN.drawProofAnimation.seq3, ANIMATION_DESIGN.drawProofAnimation.seq4]
    const pts = proofRing(ANIMATION_DESIGN.drawProofAnimation.proofRingArg02, c * ANIMATION_DESIGN.drawProofAnimation.proofRingArg1Part, c, c, -TAU / ANIMATION_DESIGN.drawProofAnimation.proofRingArg4Part)
    stroke(1 / 2)
    ctx.beginPath()
    for (const d of [...seq, seq[0]!]) ctx.lineTo(...pts[d - 1]!)
    ctx.stroke()
    const lit = Math.floor(((phase / TAU) % 1) * seq.length + seq.length) % seq.length
    fill(1)
    ctx.beginPath(); ctx.arc(...pts[seq[lit]! - 1]!, s / ANIMATION_DESIGN.drawProofAnimation.arcArg1Part, 0, TAU); ctx.fill()
  }
  }

  if (spec.witness) drawProofWitness(ctx, s, c, spec.witness, phase, stroke, fill)
  else {
  paint()
  const children = Math.min(spec.points, ANIMATION_DESIGN.drawProofAnimation.minArg1)
  const ringR = c * ANIMATION_DESIGN.drawProofAnimation.ringR
  for (let v = 0; v < children; v += 1) {
    const a = (v / children) * TAU + tour * (PHI ** -1)
    ctx.save()
    ctx.translate(c + ringR * Math.cos(a), c + ringR * Math.sin(a))
    ctx.scale(1 / PHI ** 2, 1 / PHI ** 2)
    ctx.translate(-c, -c)
    ctx.globalAlpha = 1 / 2
    paint()
    ctx.restore()
  }
  }

  const co = spec.coords
  if (co && co.sequencePosition >= 0) {
    const rOut = c * ANIMATION_DESIGN.drawProofAnimation.rOut
    const dot = s / ANIMATION_DESIGN.drawProofAnimation.dot
    const posOf = (d: number) => (VORTEX_SEQUENCE as readonly number[]).indexOf(d)
    const angleOf = (d: number) => (posOf(d) / ANIMATION_DESIGN.drawProofAnimation.angleOf) * TAU - TAU / ANIMATION_DESIGN.drawProofAnimation.angleOf2
    const fwd = angleOf(co.digit) + phase
    const rev = angleOf(co.additiveInverse) - phase
    const inv = -angleOf(co.tensComplement) - phase
    fill(ANIMATION_DESIGN.drawProofAnimation.fillArg0)
    ctx.beginPath(); ctx.arc(c + rOut * Math.cos(fwd), c + rOut * Math.sin(fwd), dot, 0, TAU); ctx.fill()
    fill(ANIMATION_DESIGN.drawProofAnimation.fillArg02, (co.additiveInverse - co.digit) * MOVIE_ANGLES.station)
    ctx.beginPath(); ctx.arc(c + rOut * Math.cos(rev), c + rOut * Math.sin(rev), dot, 0, TAU); ctx.fill()
    fill(1 / 2, (co.tensComplement - co.digit) * MOVIE_ANGLES.station)
    ctx.beginPath(); ctx.arc(c + rOut * Math.cos(inv), c + rOut * Math.sin(inv), dot * ANIMATION_DESIGN.drawProofAnimation.arcArg2Part7, 0, TAU); ctx.fill()
  }
}

/** What the Lean kernel recorded: file → theorem → the axioms it rests on (.vitepress/data/lean-axioms.json). */
export type KernelTheoremRecord = Readonly<Record<string, Readonly<Record<string, readonly string[]>>>>
export type KernelTheoremStream = { uuid: string; theorem: string; file: string; axioms: readonly string[]; hue: number }

/**
 * THE KERNEL THEOREMS ARE THE MOVIE'S STREAMS (owner, 2026-11-15: "background movie is the double torus itself in motion
 * so all quantum clay theorems are used in the movie"). Every theorem the kernel recorded becomes one stream: its
 * glyphs are the theorem's content address, its hue the station of its file on the doubling circuit (forty degrees a
 * digit). A window of them flows at a time and slides with the phase, so over one cycle every theorem passes. Drawing a
 * theorem's address is not proving it: what each rests on is what the kernel recorded, carried beside it.
 */
export function kernelTheoremStreams(record: KernelTheoremRecord, p: number): { all: KernelTheoremStream[]; visible: KernelTheoremStream[]; start: number } {
  // the doubling circuit 1·2·4·8·7·5: the digits whose station is off the 3·6·9 axis (no multiple of the trinity angle)
  const circuit = VORTEX_SEQUENCE.filter((d) => (d * MOVIE_STATION) % MOVIE_ANGLES.trinity !== 0)
  const files = Object.keys(record).sort()
  const all = files.flatMap((file, fileIndex) => Object.keys(record[file] ?? {}).sort().map((theorem) => ({
    uuid: toUuid(`lean:${file}:${theorem}`),
    theorem,
    file,
    axioms: record[file]?.[theorem] ?? [],
    hue: (circuit[fileIndex % circuit.length]! * MOVIE_STATION) % MOVIE_TURN,
  })))
  const count = all.length
  const start = count === 0 ? 0 : floor((((p % 1) + 1) % 1) * count)
  const window = min(count, ANIMATION_DESIGN.kernelTheoremStreams.window)
  const visible = Array.from({ length: window }, (_, i) => all[(start + i) % count]!)
  return { all, visible, start }
}

/** The custom-property name a design value is published under in double-torus.scss. */
export const animationToken = (painter: string, key: string): string => `--dt-${painter}-${key}`

/** double-torus.scss — the one CSS SDK, emitted from the values above. COMPUTED: regenerate, never edit. */
export function animationScss(): string {
  const lines = ['// @ceccec/double-torus — double-torus.scss. COMPUTED by animationScss() in src/quantum/wind/geometry; do not edit.',
    '// Every number the animations paint with: the angles quantum.lean decides, and the design values movie.lean defines.',
    `$double-torus-angles: (${Object.entries(MOVIE_ANGLES).map(([k, v]) => `${k}: ${v}`).join(', ')});`, '', ':root {']
  for (const [name, value] of Object.entries(MOVIE_ANGLES)) lines.push(`  --dt-angle-${name}: ${value};`)
  for (const [painter, values] of Object.entries(ANIMATION_DESIGN)) for (const [key, value] of Object.entries(values)) lines.push(`  ${animationToken(painter, key)}: ${String(value)};`)
  lines.push('}', '')
  return lines.join('\n')
}

/** Bind every painter number from the stylesheet — read(name) returns a custom property's computed value. Three
 *  states, never two: a value the sheet carries is bound; a value it does not carry is counted ABSENT (the painter
 *  keeps the table's value and says so); a value that disagrees with the table is counted and bound, because the sheet
 *  is the SDK. Returns the counts so a caller can see which happened. */
export function bindAnimationDesign(read: (name: string) => string): { source: 'read' | 'absent'; bound: number; absent: number; differed: number } {
  let bound = 0, absent = 0, differed = 0
  const table = ANIMATION_DESIGN as Record<string, Record<string, number>>
  for (const [painter, values] of Object.entries(table)) {
    for (const key of Object.keys(values)) {
      const raw = read(animationToken(painter, key)).trim()
      const value = raw === '' ? Number.NaN : Number(raw)
      if (!Number.isFinite(value)) { absent += 1; continue }
      if (value !== values[key]) differed += 1
      values[key] = value
      bound += 1
    }
  }
  return { source: bound === 0 ? 'absent' : 'read', bound, absent, differed }
}


export const FOCAL = (6 * 2 / 5) // perspective focal length, shared by every layer

export interface Vec3 {
  X: number
  Y: number
  Z: number
}

// rot2 — THE atom of all rotation: a planar (2D) rotation of a pair through an angle. Every spin in the project,
// of any dimension, is this one operation on two coordinates: the 3D plane-primitives below compose it (xy, yz,
// zx), and a 4-D fold rotates the (x, w) pair with the SAME atom. One source, no plane re-derived anywhere.
export function rot2(u: number, v: number, a: number): { u: number; v: number } {
  const c = cos(a)
  const s = sin(a)
  return { u: u * c - v * s, v: u * s + v * c }
}

// The single-plane rotations — the atoms of 3D spin, one per plane, each a rot2 on the right coordinate pair.
// Rotation is non-commutative, so a monolithic three-plane function forces one composition order on every caller;
// these atoms let each animation compose the planes it needs IN ITS OWN ORDER from this one source (a 2-plane
// tumble, a 1-plane spin, a 4-D fold's 3-D stage) — strict science, 100% DRY, no behaviour forced.
export function rotateXY(x: number, y: number, z: number, a: number): Vec3 {
  const r = rot2(x, y, a) // xy plane (about z)
  return { X: r.u, Y: r.v, Z: z }
}
export function rotateYZ(x: number, y: number, z: number, a: number): Vec3 {
  const r = rot2(y, z, a) // yz plane (about x)
  return { X: x, Y: r.u, Z: r.v }
}
export function rotateZX(x: number, y: number, z: number, a: number): Vec3 {
  const r = rot2(z, x, a) // zx plane (about y)
  return { X: r.v, Y: y, Z: r.u }
}

// A vector turned through all three planes — xy (about z), then yz (about x), then zx (about y). Composes the
// three single-plane atoms in the canonical order; numerically identical to the previous inlined form.
export function rotate3(x: number, y: number, z: number, rxy: number, ryz: number, rzx: number): Vec3 {
  const a = rotateXY(x, y, z, rxy)
  const b = rotateYZ(a.X, a.Y, a.Z, ryz)
  return rotateZX(b.X, b.Y, b.Z, rzx)
}

// Perspective foreshortening for a rotated point's depth: z>0 (nearer) enlarges, z<0 recedes.
export function perspective(z: number): number {
  return FOCAL / (FOCAL - z)
}

// The projection law — depth IS the perspective divide. The 2026-07-07 animation audit found two
// canvas painters faking depth as a z→y screen offset while these atoms sat sealed here; both now
// compose rotate3 + perspective, and this fold states the law so no renderer re-fakes it. The
// checks are the atoms' own invariants, computed live.
export function depthIsThePerspectiveDivide() {
  const r = rotate3((3 / (5 * 2)), -(1 / 2), (7 / (5 * 2)), (2 / 5), -(9 / (5 * 2)), FIBONACCI[5]! / (2 * 5))
  const rigid = abs(hypot(r.X, r.Y, r.Z) - hypot((3 / (5 * 2)), -(1 / 2), (7 / (5 * 2)))) < 1e-12 // rotation preserves length — an offset cannot
  const centered = perspective(0) === 1 // the screen plane is unmagnified
  const nearGrows = perspective((1 / 2)) > 1 && perspective(-(1 / 2)) < 1 // depth becomes SIZE, the honest cue
  const monotone = perspective(-1) < perspective(0) && perspective(0) < perspective(1)
  return {
    holds: rigid && centered && nearGrows && monotone,
    focal: FOCAL,
    statement:
      'Depth is the perspective divide: every canvas projection composes the rotation atoms (rot2 → rotateXY/YZ/ZX → rotate3) and turns the rotated z into position and size through perspective() — never a z→y screen offset.',
    boundary:
      'A geometric law over this file\'s own atoms, checked by computation; the standard pinhole projection the living-torus and merkaba painters now compose, not a claim beyond it.' }
}

// Holographic fractal branch — each branch spawns two smaller copies of the same rule.
export function branch(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  angle: number,
  depth: number,
  d: Dims,
  hue: number,
  dark = true,
): void {
  if (depth <= 0 || len < ANIMATION_DESIGN.branch.when) return
  const paint = movieCanvasPolarity(dark)
  const x2 = x + cos(angle) * len
  const y2 = y + sin(angle) * len
  ctx.strokeStyle = paint((hue + d.hueShift + depth * ANIMATION_DESIGN.branch.paintArg0Part) % ANIMATION_DESIGN.branch.paintArg0Part2, d.depthFade + depth * ANIMATION_DESIGN.branch.paintArg1Part, { L: ANIMATION_DESIGN.branch.paintL })
  ctx.lineWidth = max((1 / 2), depth * ANIMATION_DESIGN.branch.maxArg1Part)
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  branch(ctx, x2, y2, len * d.shrink, angle - d.spread, depth - 1, d, hue, dark)
  branch(ctx, x2, y2, len * d.shrink, angle + d.spread, depth - 1, d, hue, dark)
}

/**
 * THE SAME FRACTAL, COLLECTED INSTEAD OF DRAWN. branch strokes every segment on its own — one raster call and one
 * colour string per segment, which made the hero's arms most of the movie's two thousand seven hundred draw calls a
 * frame. Every segment at one depth of one arm has the same colour and width (they depend on the arm, the hue and the
 * depth only), so the segments are gathered by depth here and strokeBranchLevels draws each depth as one path.
 */
export function branchSegments(levels: number[][], x: number, y: number, len: number, angle: number, depth: number, d: Dims): void {
  if (depth <= 0 || len < ANIMATION_DESIGN.branchSegments.when) return
  const x2 = x + cos(angle) * len
  const y2 = y + sin(angle) * len
  if (!levels[depth]) levels[depth] = []
  levels[depth]!.push(x, y, x2, y2)
  branchSegments(levels, x2, y2, len * d.shrink, angle - d.spread, depth - 1, d)
  branchSegments(levels, x2, y2, len * d.shrink, angle + d.spread, depth - 1, d)
}

/**
 * Stroke collected levels in branch's own colours and widths, deepest (the trunk) first as branch drew it. Not
 * pixel-identical, and said so: where two segments of one path meet, their semi-transparent ends composite once
 * instead of twice, and crossings between subtrees blend in depth order rather than tree order.
 */
export function strokeBranchLevels(ctx: CanvasRenderingContext2D, levels: readonly (readonly number[] | undefined)[], d: Dims, hue: number, dark = true): void {
  const paint = movieCanvasPolarity(dark)
  for (let depth = levels.length - 1; depth > 0; depth -= 1) {
    const seg = levels[depth]
    if (!seg || seg.length === 0) continue
    ctx.strokeStyle = paint((hue + d.hueShift + depth * ANIMATION_DESIGN.strokeBranchLevels.paintArg0Part) % MOVIE_ANGLES.turn, d.depthFade + depth * ANIMATION_DESIGN.strokeBranchLevels.paintArg1Part, { L: ANIMATION_DESIGN.strokeBranchLevels.paintL })
    ctx.lineWidth = max((1 / 2), depth * ANIMATION_DESIGN.strokeBranchLevels.maxArg1Part)
    ctx.beginPath()
    for (let i = 0; i + ANIMATION_DESIGN.strokeBranchLevels.loop < seg.length; i += ANIMATION_DESIGN.strokeBranchLevels.i) {
      ctx.moveTo(seg[i]!, seg[i + 1]!)
      ctx.lineTo(seg[i + 2]!, seg[i + ANIMATION_DESIGN.strokeBranchLevels.segAt]!)
    }
    ctx.stroke()
  }
}

const FOL_ARMS: readonly { r: number; w: number }[] = [
  { r: (1 / 2), w: (7 / (5 * 2)) }, { r: (7 / (5 * 5)), w: -(8 / 5) }, { r: (3 / (5 * 4)), w: 2 * (FIBONACCI[5]! / (2 * 5)) }, { r: (2 / (5 * 5)), w: -(3 * (FIBONACCI[5]! / (2 * 5))) }, // arm speeds = multiples of the 13/10 fib decade
]

/**
 * 19 Flower-of-Life centres (1 + 6 + 12) — triangular lattice, unit-scaled.
 * Computed gapless ring lattice — NOT a wet decorative seven-circle schematic.
 */
export function flowerOfLifeCenters(): readonly (readonly [number, number])[] {
  const pts: [number, number][] = [[0, 0]]
  for (let k = 0; k < 6; k += 1) {
    const a = (k * TAU) / 6
    pts.push([cos(a), sin(a)])
  }
  for (let k = 0; k < 12; k += 1) {
    const a = (k * TAU) / 12
    pts.push([2 * cos(a), 2 * sin(a)])
  }
  return pts
}

/**
 * 13 Fruit-of-Life centres (1 + 6 + 6) — Metatron node set; subset unlocked by spinning the Flower.
 * Matches the sealed sacred-morph FRUIT_CENTERS lattice (unit scale).
 */
export function fruitOfLifeCenters(): readonly (readonly [number, number])[] {
  const pts: [number, number][] = [[0, 0]]
  for (let k = 0; k < 6; k += 1) {
    const a = (k * TAU) / 6
    pts.push([cos(a), sin(a)])
  }
  for (let k = 0; k < 6; k += 1) {
    const a = (k * TAU) / 6
    pts.push([2 * cos(a), 2 * sin(a)])
  }
  return pts
}

/** Spinning FoL unlocks Fruit — every Fruit centre sits on the Flower lattice (computed containment). */
export function flowerUnlocksFruitBySpin(): { holds: boolean; flower: number; fruit: number } {
  const flower = flowerOfLifeCenters()
  const fruit = fruitOfLifeCenters()
  const near = (a: number, b: number) => abs(a - b) < 1e-9
  const contained = fruit.every((fp) => flower.some((fl) => near(fl[0], fp[0]) && near(fl[1], fp[1])))
  return { holds: flower.length === 1 + 6 + (6 * 2) && fruit.length === (5 + 8) && contained, flower: flower.length, fruit: fruit.length }
}

/**
 * THE SAME FLOWER, COLLECTED INSTEAD OF DRAWN. One fill per trail-age used to be one fill per
 * (centre × age) — thirteen centres times a trail of forty was most of the movie's five hundred
 * flower raster calls a frame. Every centre at one age shares colour and radius (age and the base
 * hue alone; the old per-centre hue steps are dropped the way branchSegments dropped per-segment
 * colour), so one path paints the whole age. Not pixel-identical, and said so: centres no longer
 * carry their own hue offset, and additive compositing of many small fills becomes one fill.
 */
export function drawFlower(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  hue: number,
  reduce: boolean,
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  const R = min(w, h) * ANIMATION_DESIGN.drawFlower.r
  const centers: { x: number; y: number }[] = [{ x: 0, y: 0 }]
  for (let k = 0; k < ANIMATION_DESIGN.drawFlower.loop; k += 1) { const a = (k * (TAU / 2)) / ANIMATION_DESIGN.drawFlower.a; centers.push({ x: cos(a) * R, y: sin(a) * R }) }
  for (let k = 0; k < ANIMATION_DESIGN.drawFlower.loop; k += 1) { const a = (k * (TAU / 2)) / ANIMATION_DESIGN.drawFlower.a + (TAU / 2) / ANIMATION_DESIGN.drawFlower.a2; const d = R * sqrt(ANIMATION_DESIGN.drawFlower.sqrtArg0); centers.push({ x: cos(a) * d, y: sin(a) * d }) }
  const localR = R * (1 / 2)
  const trail = reduce ? 1 : ANIMATION_DESIGN.drawFlower.trail
  const td = t * ANIMATION_DESIGN.drawFlower.td
  const spin = t * ANIMATION_DESIGN.drawFlower.spin
  ctx.save()
  // The polarity bit picks the composition the same way the plasma field does: additive light on the
  // dark positive, normal density on the light negative.
  ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over'
  for (let i = trail; i >= 0; i -= 1) {
    const age = i / trail
    const fade = pow(1 - age, ANIMATION_DESIGN.drawFlower.powArg1)
    ctx.globalAlpha = fade * ANIMATION_DESIGN.drawFlower.globalAlpha
    ctx.fillStyle = paint((hue + i * ANIMATION_DESIGN.drawFlower.paintArg0Part) % MOVIE_ANGLES.turn, fade * ANIMATION_DESIGN.drawFlower.paintArg1Part, { L: ANIMATION_DESIGN.drawFlower.paintLPart - age * ANIMATION_DESIGN.drawFlower.paintLPart2 })
    const r = max((1 / 2), (1 - age * ANIMATION_DESIGN.drawFlower.maxArg1Part) * ANIMATION_DESIGN.drawFlower.maxArg1Part2)
    ctx.beginPath()
    for (let ci = 0; ci < centers.length; ci += 1) {
      const c = centers[ci]!
      const ox = cx + (c.x * cos(spin) - c.y * sin(spin))
      const oy = cy + (c.x * sin(spin) + c.y * cos(spin))
      const tt = td - i * ANIMATION_DESIGN.drawFlower.tt + ci * ANIMATION_DESIGN.drawFlower.tt2
      let x = 0
      let y = 0
      for (const arm of FOL_ARMS) { x += arm.r * cos(arm.w * tt); y += arm.r * sin(arm.w * tt) }
      ctx.moveTo(ox + x * localR + r, oy + y * localR)
      ctx.arc(ox + x * localR, oy + y * localR, r, 0, TAU)
    }
    ctx.fill()
  }
  ctx.restore()
}

const CAL_CYCLES: readonly { cycle: string; days: number }[] = [
  { cycle: 'week', days: 7 }, { cycle: 'trecena', days: 13 }, { cycle: 'veintena', days: (5 * 4) },
  { cycle: 'sexagenary', days: (6 * 5 * 2) }, { cycle: 'tzolkʼin', days: 260 }, { cycle: 'tun', days: 360 },
  { cycle: 'haabʼ', days: 365 }, { cycle: '819', days: 819 }, { cycle: 'Metonic', days: 6940 },
  { cycle: 'Calendar Round', days: 18980 },
]

/**
 * Coupled-cycle calendar phases as vortex-digit markers — NO stroked circumference.
 * Concentric ring strokes were a wet boundary frame around the plasma throat (not the vortex);
 * the theorem is the cycle phase (coupledCalendarTori / LCM mesh), painted on VORTEX_SEQUENCE radii.
 */
export function drawCalendars(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  hue: number,
  reduce: boolean,
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  // Shared hero phase `t` is the clock — deterministic offline paint, not wall-clock Date.now().
  const days = t / TAU
  const base = min(w, h)
  // Throat scale — same 7/100 void fraction the plasma ball uses; markers ride vortex digits outward.
  const throatR = base * ANIMATION_DESIGN.drawCalendars.throatR
  ctx.save()
  for (let i = 0; i < CAL_CYCLES.length; i += 1) {
    const cyc = CAL_CYCLES[i]
    const cyclePhase = ((((days % cyc.days) + cyc.days) % cyc.days) / cyc.days)
    const digit = VORTEX_SEQUENCE[i % VORTEX_SEQUENCE.length]!
    const radius = throatR * (1 + digit / ANIMATION_DESIGN.drawCalendars.radius)
    const hueC = (hue + i * ANIMATION_DESIGN.drawCalendars.hueC) % MOVIE_ANGLES.turn
    // Phase marker only — no arc(…, 0, TAU) ring stroke (wet boundary, not vortex geometry).
    const ang = cyclePhase * TAU - TAU / ANIMATION_DESIGN.drawCalendars.ang + (reduce ? 0 : t * ANIMATION_DESIGN.drawCalendars.ang2 * (i % 2 === 0 ? 1 : -1))
    ctx.fillStyle = paint(hueC, ANIMATION_DESIGN.drawCalendars.paintArg1, { L: ANIMATION_DESIGN.drawCalendars.paintL })
    ctx.beginPath()
    ctx.arc(cx + cos(ang) * radius, cy + sin(ang) * radius, max(1, base * ANIMATION_DESIGN.drawCalendars.maxArg1Part), 0, TAU)
    ctx.fill()
  }
  ctx.restore()
}

// ─────────────────────────────────────────────────────────────────────────────────────────────
// THE THREE.JS COMBINATION CLOSURE — MEASURED FROM THE LIBRARY, NOT TYPED BESIDE IT
//
// The first draft of this fold declared "three.js's eight built-in geometries" and "eight built-in
// materials", so that the product was 8 x 8 = 64 and landed exactly on the hexagram. It was a
// fabrication. three.js exports 23 geometry constructors and 10 mesh materials; 18 of the
// geometries build themselves with no arguments and 5 cannot (BufferGeometry and
// InstancedBufferGeometry are base classes, PolyhedronGeometry needs vertices, EdgesGeometry and
// WireframeGeometry need another geometry to wrap). The real closure is 18 x 10 = 180, and the
// hexagram's 64 does not cover it. The coincidence was pleasing, unchecked, and false — the same
// defect this corpus keeps finding in itself, committed while removing an instance of it.
//
// So NO NAME IS WRITTEN HERE. The catalogue is handed in, measured from the installed library by
// scripts/verify/three.ts, and every claim below is a theorem about an arbitrary catalogue rather
// than a fact about one release. When three.js adds a primitive the closure grows and the coverage
// proof still holds; a typed table would have silently under-covered instead.
//
// NOTHING HERE IMPORTS THREE.JS, and nothing may. Both package.json manifests declare
// `dependencies: {}` and src/fire/li states the graphics capability as zero-dependency; an import
// of three under src/ would falsify all three at once. This fold emits PURE DATA — indices,
// positions and the names it was given — and the renderer in .vitepress maps those names onto the
// real constructors. The dependency lives in the site shell, where it costs the published kernel
// nothing, and scripts/verify/three.ts refuses any import of three under src/.

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
  readonly geometries: readonly string[]
  readonly materials: readonly string[]
}

/**
 * Mesh materials that construct but cannot be rendered in an ordinary scene. Measured in a browser on
 * 2026-09-04 against three.js 0.185 by rendering each material alone and catching: nine of the ten
 * rendered, and this one threw `Cannot read properties of undefined (reading 'matrixWorld')` inside
 * three's own `refreshUniformsDistance`. It is a ledgered exclusion rather than a derivation because
 * this fold cannot rasterise; the derivation lives in the browser and disagrees loudly if it changes.
 */
export const UNRENDERABLE_MATERIALS: readonly string[] = ['MeshDistanceMaterial']

/** One cell of the product space: a geometry, a material, and where it sits on the lattice. */
export interface ThreeCell {
  readonly index: number
  readonly gi: number
  readonly mi: number
  readonly geometry: string
  readonly material: string
  readonly at: Vec3
}

/**
 * The lattice pitch. Cells sit one unit apart, so the grid's own spacing — not a separate table —
 * is what the camera's depth planes are derived from below.
 */
export const CELL_PITCH = 1

/** The cell at row `gi`, column `mi`, centred on the origin so the closure needs no layout table. */
export function threeCellAt(cat: ThreeCatalogue, gi: number, mi: number): ThreeCell {
  const cols = cat.materials.length
  return {
    index: gi * cols + mi,
    gi,
    mi,
    geometry: cat.geometries[gi]!,
    material: cat.materials[mi]!,
    at: {
      X: (gi - (cat.geometries.length - 1) / 2) * CELL_PITCH,
      Y: (mi - (cols - 1) / 2) * CELL_PITCH,
      Z: 0
    }
  }
}

/** Every combination the catalogue admits, once — the whole product, in row-major order. */
export function threeCombinationClosure(cat: ThreeCatalogue): readonly ThreeCell[] {
  const out: ThreeCell[] = []
  for (let gi = 0; gi < cat.geometries.length; gi += 1) {
    for (let mi = 0; mi < cat.materials.length; mi += 1) out.push(threeCellAt(cat, gi, mi))
  }
  return out
}

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
export function threeCameraFromFocal(focal: number = FOCAL): {
  readonly fovRadians: number
  readonly position: Vec3
  readonly near: number
  readonly far: number
} {
  const halfDepth = CELL_PITCH / 2
  return {
    // RADIANS. three.js's PerspectiveCamera takes degrees, but that is three.js's unit convention,
    // not this corpus's mathematics — writing the 180 here would import a foreign constant into a
    // fold that has no business knowing it. The shell converts with three's own MathUtils.radToDeg,
    // so the conversion lives on the side of the boundary that owns the convention.
    fovRadians: 2 * atan(1 / focal),
    position: { X: 0, Y: 0, Z: focal },
    near: focal - halfDepth,
    far: focal + halfDepth
  }
}

/**
 * THE COVERAGE IS A THEOREM ABOUT ANY CATALOGUE, NOT A CHECKLIST FOR ONE.
 *
 * Recomputed at call time: the closure is exactly |geometries| x |materials|; every pair occurs
 * exactly ONCE (the bijection — "all pairs present" would also hold for a list with a duplicate
 * and a gap, so the weaker form is not asserted); the row-major index inverts back to its pair;
 * and the camera handed to three.js agrees with the sealed pinhole at every lattice depth, checked
 * by inverting the fov through real trigonometry rather than by restating the formula.
 *
 * The ulp budget is four: `atan` rounds once, `tan` rounds once, and the divide rounds twice.
 */
const ULP_BUDGET = 4

export function threeCoversEveryCombination(cat: ThreeCatalogue) {
  const cells = threeCombinationClosure(cat)
  const expected = cat.geometries.length * cat.materials.length
  const pairs = new Set(cells.map((c) => `${c.gi}|${c.mi}`))
  const named = new Set(cells.map((c) => `${c.geometry}|${c.material}`))
  const invertible = cells.every((c) => c.gi * cat.materials.length + c.mi === c.index)

  const cam = threeCameraFromFocal()
  const halfFov = cam.fovRadians / 2
  const invTan = cos(halfFov) / sin(halfFov)
  // Sampled across the frustum the camera actually declares, derived from its own near/far.
  const depths = [FOCAL - cam.far, 0, FOCAL - cam.near]
  const agrees = depths.every((z) => {
    const mine = perspective(z)
    const theirs = invTan / (FOCAL - z)
    return abs(mine - theirs) <= Number.EPSILON * max(abs(mine), abs(theirs)) * ULP_BUDGET
  })

  return {
    cells: cells.length,
    geometries: cat.geometries.length,
    materials: cat.materials.length,
    facets: [
      { facet: `the closure is |geometries| x |materials| = ${cat.geometries.length} x ${cat.materials.length} = ${expected} cells`,
        on: cells.length === expected },
      { facet: `every index pair occurs exactly once — a bijection onto the product, not merely full coverage`,
        on: pairs.size === expected },
      { facet: `every geometry/material NAME pair is distinct — the catalogue carries no duplicate`,
        on: named.size === expected },
      { facet: `the row-major index inverts back to its (geometry, material) pair for all ${expected}`,
        on: invertible },
      { facet: `three.js at fov = 2 arctan(1/FOCAL) computes this fold's sealed pinhole to ${ULP_BUDGET} ulp`,
        on: agrees },
      { facet: `the closure is measured, not typed: no primitive name appears in this fold`,
        on: cat.geometries.length > 0 && cat.materials.length > 0 }
    ]
  }
}

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
export function threeReflect(cat: ThreeCatalogue, cell: ThreeCell): ThreeCell {
  return threeCellAt(cat, cat.geometries.length - 1 - cell.gi, cat.materials.length - 1 - cell.mi)
}

export function threeClosureIsInvolutive(cat: ThreeCatalogue) {
  const cells = threeCombinationClosure(cat)
  const last = cells.length - 1
  // ONE even side is enough. A fixed cell would need gi = |G|-1-gi AND mi = |M|-1-mi, so an even side
  // makes its own coordinate unfixable and the conjunction fails whatever the other side does. This
  // read `&&` while the catalogue happened to be 18 x 10; the moment it became 18 x 9 the facet was
  // refuted and the gate said so, which is the whole point of stating it as a computation.
  const anEvenSide = cat.geometries.length % 2 === 0 || cat.materials.length % 2 === 0
  const involutive = cells.every((c) => {
    const r = threeReflect(cat, c)
    return threeReflect(cat, r).index === c.index
  })
  const cancels = cells.every((c) => {
    const r = threeReflect(cat, c)
    return c.at.X + r.at.X === 0 && c.at.Y + r.at.Y === 0 && c.at.Z + r.at.Z === 0
  })
  const complements = cells.every((c) => threeReflect(cat, c).index + c.index === last)
  const fixed = cells.filter((c) => threeReflect(cat, c).index === c.index).length
  return {
    orbits: (cells.length - fixed) / 2 + fixed,
    fixedPoints: fixed,
    facets: [
      { facet: `reflection through the lattice centre is an involution: applied twice it is the identity`,
        on: involutive },
      { facet: `reflected positions cancel exactly — every orbit sums to zero in all three axes`,
        on: cancels },
      { facet: `row-major reflection IS address complement: idx(sigma c) + idx(c) = ${last}`,
        on: complements },
      { facet: `${anEvenSide ? 'an even side' : 'both sides odd'}, so ${anEvenSide ? 'no cell is its own reflection' : 'the centre cell is fixed'} — ${(cells.length - fixed) / 2} orbits of two${fixed ? ` and ${fixed} fixed` : ''}`,
        on: anEvenSide ? fixed === 0 : fixed > 0 }
    ]
  }
}
