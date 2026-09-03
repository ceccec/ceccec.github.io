import type { MindMatrix } from '../../types';
export type TestCase = {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    /** Inputs only. The expected answer is whatever these inputs already determine. */
    readonly input: Record<string, number | boolean | string>;
    readonly receipt: string;
};
export type BenchmarkResult = {
    readonly algorithmName: string;
    readonly inputSize: number;
    /** Oracle/gate invocations actually performed — deterministic, unlike wall-clock. */
    readonly queryCount: number;
    /** classicalQueries / queryCount, derived from the run. */
    readonly speedup: number;
    /** Measured from the final state, not asserted. */
    readonly successRate: number;
    /** False when no runnable implementation exists at this layer — no number is invented. */
    readonly executed: boolean;
    readonly receipt: string;
};
export type VerificationReport = {
    readonly testsRun: number;
    readonly testsPassed: number;
    readonly testsFailed: number;
    readonly passRate: number;
    readonly benchmarksExecuted: number;
    readonly benchmarksSkipped: number;
    readonly integrationPassed: boolean;
    readonly report: string;
    readonly receipt: string;
};
/**
 * Test cases: INPUTS ONLY. Nothing here states an answer, so nothing here can
 * agree with itself. Each case is discharged by running the implementation.
 */
export declare function quantumAlgorithmTests(): TestCase[];
/**
 * Benchmarks by execution. queryCount and successRate are read off real runs;
 * speedup is the ratio of classical queries to the queries actually performed.
 * Algorithms with no runnable implementation here are reported executed:false
 * with zeroed metrics rather than plausible-looking invented ones.
 */
export declare function quantumAlgorithmBenchmarks(): BenchmarkResult[];
/** Integration test: build a circuit, run it, and check the state is normalised. */
export declare function quantumIntegrationTest(): {
    readonly name: string;
    readonly stages: string[];
    readonly passed: boolean;
    readonly report: string;
};
/** Run every test and report what actually happened. */
export declare function quantumTestFramework(matrix?: MindMatrix): VerificationReport;
/**
 * Complexity classes from the literature — reference data, not a measurement of
 * this codebase. `known` says the algorithm is in the table; it does NOT assert
 * that this repository achieves the bound. The previous field was called
 * `verified`, which claimed exactly that.
 */
export declare function verifyAlgorithm(algorithmName: string): {
    readonly algorithm: string;
    readonly quantumComplexity: string;
    readonly classicalComplexity: string;
    readonly advantage: string;
    readonly known: boolean;
    readonly source: string;
};
/** Benchmark a real circuit run of the requested width. */
export declare function benchmarkCircuit(circuitSize: number, gateCount: number): BenchmarkResult;
export type IntegrationTestCase = {
    readonly id: string;
    readonly name: string;
    readonly algorithm: string;
    readonly provider: string;
    readonly steps: string[];
    readonly passed: boolean;
    readonly receipt: string;
};
export type TestSuite = {
    readonly name: string;
    readonly tests: IntegrationTestCase[];
    readonly passed: number;
    readonly failed: number;
    readonly coverage: number;
    readonly statement: string;
    readonly receipt: string;
};
/**
 * Test: Simon's Algorithm End-to-End
 * Prepare → Compile → Submit → Poll → Validate
 */
export declare function testSimonsAlgorithmE2E(): IntegrationTestCase;
/**
 * Test: VQE on Local Simulator
 * Initialize ansatz → Optimize → Converge
 */
export declare function testVQEEndToEnd(): IntegrationTestCase;
/**
 * Test: QAOA MaxCut on Graph
 * Problem → Circuit → Optimize → Validate
 */
export declare function testQAOAEndToEnd(): IntegrationTestCase;
/**
 * Test: Credential Loading
 * Load from environment → Validate → Mask
 */
export declare function testCredentialManagement(): IntegrationTestCase;
/**
 * Test: Job Submission & Polling
 * Submit → Poll → Wait → Retrieve
 */
export declare function testJobQueueEndToEnd(): IntegrationTestCase;
/**
 * Test: Device Discovery & Validation
 * Query → Capabilities → Compatibility Check
 */
export declare function testDeviceDiscoveryEndToEnd(): IntegrationTestCase;
/**
 * Test: Result Validation & Quality Assessment
 * Retrieve → Validate → Analyze → Assess
 */
export declare function testResultValidationEndToEnd(): IntegrationTestCase;
/**
 * Test: Full Pipeline Integration
 * Algorithm → Compilation → Submission → Polling → Validation
 */
export declare function testFullPipelineEndToEnd(): IntegrationTestCase;
/**
 * Run full integration test suite
 */
export declare function quantumIntegrationTestSuite(matrix?: MindMatrix): TestSuite;
export type UnitTest = {
    readonly module: string;
    readonly test: string;
    readonly passed: boolean;
    readonly message: string;
    readonly receipt: string;
};
export type UnitTestReport = {
    readonly total: number;
    readonly passed: number;
    readonly failed: number;
    readonly coverage: number;
    readonly statement: string;
    readonly receipt: string;
};
/**
 * Unit tests for quantum/credentials
 */
export declare function testCredentialsModule(): UnitTest[];
/**
 * Unit tests for quantum/jobqueue
 */
export declare function testJobqueueModule(): UnitTest[];
/**
 * Unit tests for quantum/devices
 */
export declare function testDevicesModule(): UnitTest[];
/**
 * Unit tests for quantum/validation
 */
export declare function testValidationModule(): UnitTest[];
/**
 * Run all unit tests
 */
export declare function quantumUnitTestSuite(matrix?: MindMatrix): UnitTestReport;
