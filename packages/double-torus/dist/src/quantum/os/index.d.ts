import type { MindMatrix } from '../../types/index.ts';
import type { CircuitOp, CircuitResult } from '../../0/index.ts';
import { type QuantumAppEntry } from '../apps/index.ts';
/** [55, 34, 21, 13] — consecutive-Fibonacci census rhythm, descending; sum = 123 (the QPU-inclusive 4th band). */
export declare const CENSUS_FIBONACCI: readonly [number, number, number, number];
export type QuantumUiDesignTokens = {
    /** a432 harmonic + VORTEX_SEQUENCE slot → hue wheel (deg 0–360). */
    readonly hue: number;
    /** digital-root accent hue offset by the golden angle. */
    readonly accentHue: number;
    /** φ + Fibonacci (55/34/21) spacing scale in rem, ascending. */
    readonly spaceScale: readonly number[];
    /** hero clock phase 0–1 (merkaba counter-rotation + Schumann folded in). */
    readonly motionPhase: number;
    /** ten-D form weights + merkaba up/down spin → elevation/depth layers. */
    readonly elevation: readonly number[];
    /** quantum-dynamics amplitude × gold-fusion aggregate → progress/badge intensity 0–1. */
    readonly variantIntensity: number;
    readonly root: string;
    readonly statement: string;
};
export type QuantumUiDesign = QuantumUiDesignTokens & {
    readonly designed: boolean;
    readonly at: number;
    readonly authority: 'quantum/heaven/mind';
    readonly motionMs: number;
    readonly merkabaUpSpinDeg: number;
    readonly merkabaDownSpinDeg: number;
    readonly schumannPhase: number;
    readonly cssVars: Readonly<Record<string, string>>;
    readonly wallpaper: {
        readonly id: 'hero-movie';
        readonly screensaver: boolean;
        readonly hue: number;
    };
    readonly boundary: string;
};
/**
 * quantumMathDesignsTheUi — the design authority. Every UI token is COMPUTED from sealed
 * quantum math at `at`, never hand-authored:
 *   hue       ← a432 harmonic (fire/li) + VORTEX_SEQUENCE [1,2,4,8,7,5,3,6,9] slot → hue wheel
 *   accentHue ← digital root of the hue, offset by the golden angle
 *   spaceScale← golden ratio φ + Fibonacci census rhythm (55/34/21) from src/0
 *   motionPhase← hero clock phase + bothEarthsRotateWithinEachOther merkaba + schumannPhaseAt
 *   elevation ← ten-D form weights (allFormsAreTenDimensionalOrPurged) + merkaba up/down spin
 *   variantIntensity ← quantum dynamics amplitude bars × gold fusion aggregate score
 */
export declare function quantumMathDesignsTheUi(at?: number, matrix?: MindMatrix): QuantumUiDesign;
export type QuantumOsDriverRow = {
    readonly id: string;
    readonly label: string;
    readonly tier: string;
    readonly receipt: string;
};
export type QuantumOsShellState = {
    readonly at: number;
    readonly wallpaper: 'hero-movie';
    readonly activeAppId: string | null;
    readonly drivers: readonly QuantumOsDriverRow[];
    readonly dockAppIds: readonly string[];
    readonly design: QuantumUiDesign;
    readonly receipt: string;
};
export declare function quantumOsResearch(matrix?: MindMatrix, at?: number): any;
export declare function quantumOsShell(at?: number, matrix?: MindMatrix, activeAppId?: string | null): QuantumOsShellState;
export declare function quantumOsComputes(matrix?: MindMatrix, at?: number): any;
export type QuantumRegisterAllocation = {
    readonly id: string;
    readonly qubits: number;
    readonly capacityAmplitudes: number;
    readonly receipt: string;
};
/** OS service — allocate an n-qubit register: the OS owns the 2ⁿ amplitude state space (capped at 10 qubits). */
export declare function quantumOsAllocateRegister(qubits: number): QuantumRegisterAllocation;
/** OS service — schedule + run an ordered gate list on a register; state is content-addressed by CircuitResult.root. */
export declare function quantumOsRunCircuit(spec: {
    n: number;
    ops: readonly CircuitOp[];
    shots?: number;
    seed?: string;
}): CircuitResult;
/**
 * The OS's quantum-computer driver — the surface that exposes the simulator: register allocation, gate
 * scheduling (palette + ordered ops → runQuantumCircuit), measurement (seeded shots), content-addressed
 * state (the circuit root), and the proven honest verdict (faithful classical simulator, no speedup).
 */
export declare function quantumComputerDriverComputes(matrix?: MindMatrix, at?: number): {
    exposes: boolean;
    register: QuantumRegisterAllocation;
    run: CircuitResult;
    honest: {
        faithfulSimulator: boolean;
        noSpeedup: boolean;
        verdict: string;
        claim: string;
        bloch: {
            faithful: boolean;
            checks: {
                gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                init: string;
                agree: boolean;
                receipt: string;
            }[];
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        cost: {
            proven: boolean;
            rows: import("../science/index.ts").DimensionCostRow[];
            crossover: number;
            asymptoticallyInsufficient: boolean;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        bench: {
            separated: boolean;
            tracksClassical: boolean;
            faithful: boolean;
            physicalQpuWouldSeparate: boolean;
            verdict: string;
            rows: import("../science/index.ts").BenchmarkRow[];
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        root: string;
        boundary: string;
    };
    palette: readonly [{
        readonly gate: "H";
        readonly arity: 1;
        readonly params: 0;
        readonly label: "Hadamard";
    }, {
        readonly gate: "X";
        readonly arity: 1;
        readonly params: 0;
        readonly label: "Pauli-X";
    }, {
        readonly gate: "Y";
        readonly arity: 1;
        readonly params: 0;
        readonly label: "Pauli-Y";
    }, {
        readonly gate: "Z";
        readonly arity: 1;
        readonly params: 0;
        readonly label: "Pauli-Z";
    }, {
        readonly gate: "S";
        readonly arity: 1;
        readonly params: 0;
        readonly label: "Phase S";
    }, {
        readonly gate: "T";
        readonly arity: 1;
        readonly params: 0;
        readonly label: "T";
    }, {
        readonly gate: "RX";
        readonly arity: 1;
        readonly params: 1;
        readonly label: "Rx(θ)";
    }, {
        readonly gate: "RY";
        readonly arity: 1;
        readonly params: 1;
        readonly label: "Ry(θ)";
    }, {
        readonly gate: "RZ";
        readonly arity: 1;
        readonly params: 1;
        readonly label: "Rz(θ)";
    }, {
        readonly gate: "CNOT";
        readonly arity: 2;
        readonly params: 0;
        readonly label: "CNOT";
    }, {
        readonly gate: "CZ";
        readonly arity: 2;
        readonly params: 0;
        readonly label: "CZ";
    }, {
        readonly gate: "SWAP";
        readonly arity: 2;
        readonly params: 0;
        readonly label: "SWAP";
    }, {
        readonly gate: "TOFFOLI";
        readonly arity: 3;
        readonly params: 0;
        readonly label: "Toffoli";
    }];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumOsPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: any;
    capstone: any;
    shell: any;
    drivers: any;
    apps: QuantumAppEntry[];
    dockAppIds: any;
    design: any;
    cssVars: any;
    root: any;
    statement: any;
    boundary: any;
};
