export interface FundingSource {
    id: string;
    name: string;
    organization: string;
    contact: string;
    url: string;
    amount_usd: number;
    currency: string;
    deadline: string;
    requirements: readonly string[];
    rays: readonly number[];
    proof_status_required: string;
}
export interface TheoremComplianceBinding {
    theorem_id: string;
    theorem_name: string;
    ray: number;
    proof_status: string;
    eligible_sources: string[];
    total_available_usd: number;
    sealed_by_fold: string;
}
export declare const CMI_MILLENNIUM: FundingSource;
export declare const NSF_FUNDAMENTAL_MATH: FundingSource;
export declare const EPSRC_MATHEMATICS: FundingSource;
export declare const SIMONS_MATHEMATICS: FundingSource;
export declare const LEVERHULME_FELLOWSHIPS: FundingSource;
export declare function bindTheoremsToFunding(): TheoremComplianceBinding[];
export declare function fundingForRay(rayIdx: number): FundingSource[];
export declare function raysByFundingSource(sourceId: string): readonly number[];
export declare function endowmentRoot(): string;
export declare function endowmentStatement(): string;
export interface FundingAllocation {
    theorem_id: string;
    funding_source_id: string;
    allocated_usd: number;
    status: 'allocated' | 'verified' | 'released' | 'claimed';
    allocation_seal: string;
    release_gate: string;
}
export interface AutomationCycle {
    cycle_id: string;
    timestamp: string;
    theorems_matched: number;
    allocations_created: number;
    capital_deployed_usd: number;
    cycle_seal: string;
}
export declare function autoDiscoverAndMatch(): TheoremComplianceBinding[];
export declare function computeOptimalAllocation(theorem: TheoremComplianceBinding): FundingAllocation[];
export declare function executeFundingDispatch(): AutomationCycle;
export declare function getAllocationForTheorem(theoremId: string): FundingAllocation[];
export declare function gateFundRelease(theoremId: string, sourceId: string, proofStatus: 'sealed' | 'frontier' | 'proven'): boolean;
export declare function releaseFunds(theoremId: string, sourceId: string): boolean;
export declare function claimFunds(theoremId: string, sourceId: string): boolean;
export declare function fundingLedgerRoot(): string;
export declare function fundingDispatchReport(): {
    total_allocations: number;
    by_status: Record<string, number>;
    total_capital_deployed: number;
    ledger_root: string;
};
export declare const dispatch: {
    discover: typeof autoDiscoverAndMatch;
    allocate: typeof computeOptimalAllocation;
    execute: typeof executeFundingDispatch;
    getForTheorem: typeof getAllocationForTheorem;
    gate: typeof gateFundRelease;
    release: typeof releaseFunds;
    claim: typeof claimFunds;
    ledgerRoot: typeof fundingLedgerRoot;
    report: typeof fundingDispatchReport;
};
export interface AgentCycleRecord {
    agent_id: string;
    cycle_number: number;
    timestamp: string;
    status: 'running' | 'completed' | 'error';
    theorems_processed: number;
    allocations_deployed: number;
    capital_usd: number;
    cycle_root: string;
}
export interface AgentManifest {
    agent_id: string;
    mission: string;
    launch_time: string;
    cycles_completed: number;
    total_capital_deployed: number;
    agent_seal: string;
}
declare class AutonomousFundingAgent {
    private agentId;
    private cycleNumber;
    private launchTime;
    private cycles;
    private totalCapitalDeployed;
    constructor();
    runCycle(): Promise<AgentCycleRecord>;
    run(intervalMs?: number): Promise<void>;
    getManifest(): AgentManifest;
    getCycleHistory(): AgentCycleRecord[];
    getCycle(cycleNumber: number): AgentCycleRecord | undefined;
    getStats(): {
        cycles_run: number;
        successful_cycles: number;
        failed_cycles: number;
        total_theorems: number;
        total_allocations: number;
        avg_allocation_per_cycle: number;
    };
}
export declare function initializeAutonomousAgent(): AutonomousFundingAgent;
export declare function getAutonomousAgent(): AutonomousFundingAgent | null;
export declare function startFundingAgent(intervalMs?: number): Promise<void>;
export declare function triggerFundingCycle(): Promise<AgentCycleRecord | undefined>;
export declare function getFundingAgentStatus(): {
    manifest: AgentManifest;
    stats: {
        cycles_run: number;
        successful_cycles: number;
        failed_cycles: number;
        total_theorems: number;
        total_allocations: number;
        avg_allocation_per_cycle: number;
    };
    latest_cycle: AgentCycleRecord;
};
export declare const autonomousFunding: {
    initialize: typeof initializeAutonomousAgent;
    get: typeof getAutonomousAgent;
    start: typeof startFundingAgent;
    trigger: typeof triggerFundingCycle;
    status: typeof getFundingAgentStatus;
};
export interface TheoremProof {
    theorem_id: string;
    proof_status: 'sealed' | 'frontier' | 'proven';
    last_verified: string;
    verification_source: string;
    proof_signature: string;
    proof_root: string;
}
export interface FundingGateProof {
    allocation_id: string;
    theorem_id: string;
    funding_source_id: string;
    theorem_proof: TheoremProof;
    source_requirements_met: boolean;
    requirement_checks: {
        proof_status_eligible: boolean;
        ray_matches: boolean;
        deadline_valid: boolean;
        compliance_verified: boolean;
    };
    gate_signature: string;
    gate_timestamp: string;
    gate_seal: string;
}
declare class VerificationOracle {
    private oracleId;
    private verifiedTheorems;
    private gateProofs;
    constructor();
    verifyTheoremStatus(theoremId: string, proofStatus: 'sealed' | 'frontier' | 'proven', verificationSource: string): TheoremProof;
    verifyFundingGate(allocation: FundingAllocation, theoremProof: TheoremProof, rayMatches: boolean, deadlineValid: boolean, complianceVerified: boolean): FundingGateProof;
    verifyProofSignature(proof: TheoremProof): boolean;
    verifyGateSignature(gateProof: FundingGateProof): boolean;
    getVerifiedTheorems(): TheoremProof[];
    getGateProofs(): FundingGateProof[];
    getId(): string;
    getPublicKey(): string;
}
export declare function initializeVerificationOracle(): VerificationOracle;
export declare function getVerificationOracle(): VerificationOracle | null;
export declare const verification: {
    initialize: typeof initializeVerificationOracle;
    get: typeof getVerificationOracle;
};
export interface ComplianceCheckResult {
    allocation_id: string;
    requirement: string;
    status: 'passed' | 'failed' | 'pending' | 'waived';
    evidence: string;
    checked_at: string;
    checker_id: string;
}
export interface ComplianceReport {
    allocation_id: string;
    theorem_id: string;
    funding_source_id: string;
    all_checks_passed: boolean;
    checks: ComplianceCheckResult[];
    report_seal: string;
    report_timestamp: string;
}
declare class ComplianceChecker {
    private checkerId;
    private reports;
    constructor();
    checkRequirement(requirement: string, allocation: FundingAllocation, source: FundingSource): ComplianceCheckResult;
    auditAllocation(allocation: FundingAllocation, source: FundingSource): ComplianceReport;
    getReport(allocationId: string): ComplianceReport | undefined;
    getAllReports(): ComplianceReport[];
    getSummary(): {
        total_audits: number;
        passed: number;
        failed: number;
        pending: number;
        compliance_rate: number;
    };
    getId(): string;
}
export declare function initializeComplianceChecker(): ComplianceChecker;
export declare function getComplianceChecker(): ComplianceChecker | null;
export declare const compliance: {
    initialize: typeof initializeComplianceChecker;
    get: typeof getComplianceChecker;
};
export interface PaymentTransaction {
    transaction_id: string;
    allocation_id: string;
    theorem_id: string;
    from_account: string;
    to_account: string;
    amount_usd: number;
    currency: string;
    status: 'pending' | 'processing' | 'confirmed' | 'failed';
    payment_method: 'blockchain' | 'bank_transfer' | 'check';
    transaction_hash: string;
    initiated_at: string;
    confirmed_at?: string;
    error?: string;
}
export interface PaymentLedger {
    transaction_id: string;
    payment: PaymentTransaction;
    verification_required: boolean;
    signatures_required: number;
    signatures_collected: number;
    ledger_seal: string;
}
declare class PaymentOracle {
    private oracleId;
    private transactions;
    private ledger;
    private totalProcessed;
    constructor();
    initiatePayment(allocation: FundingAllocation, fromAccount: string, toAccount: string, paymentMethod: 'blockchain' | 'bank_transfer' | 'check'): PaymentTransaction;
    confirmPayment(transactionId: string): boolean;
    completePayment(transactionId: string, hash?: string): boolean;
    failPayment(transactionId: string, error: string): boolean;
    collectSignature(transactionId: string, signer: string): boolean;
    isReadyForPayment(transactionId: string): boolean;
    getTransaction(transactionId: string): PaymentTransaction | undefined;
    getAllTransactions(): PaymentTransaction[];
    getSummary(): {
        total_transactions: number;
        pending: number;
        processing: number;
        confirmed: number;
        failed: number;
        total_processed_usd: number;
        average_transaction_usd: number;
    };
    getLedgerRoot(): string;
    getId(): string;
}
export declare function initializePaymentOracle(): PaymentOracle;
export declare function getPaymentOracle(): PaymentOracle | null;
export declare const payment: {
    initialize: typeof initializePaymentOracle;
    get: typeof getPaymentOracle;
};
export interface Signer {
    signer_id: string;
    name: string;
    role: 'oracle' | 'auditor' | 'treasurer';
    public_key: string;
}
export interface MultiSigSignature {
    transaction_id: string;
    signer_id: string;
    timestamp: string;
    signature: string;
}
export interface MultiSigGate {
    gate_id: string;
    transaction_id: string;
    amount_usd: number;
    required_signatures: number;
    signers: Signer[];
    signatures: Map<string, MultiSigSignature>;
    gate_seal: string;
    status: 'open' | 'approved' | 'rejected';
}
declare class MultiSigAuthority {
    private authorityId;
    private signers;
    private gates;
    private signatureThresholds;
    constructor();
    registerSigner(name: string, role: 'oracle' | 'auditor' | 'treasurer'): Signer;
    getRequiredSignatures(amountUsd: number): number;
    createGate(transactionId: string, amountUsd: number): MultiSigGate;
    collectSignature(gateId: string, signerId: string, signatureValue: string): boolean;
    isApproved(gateId: string): boolean;
    rejectGate(gateId: string): boolean;
    getGate(gateId: string): MultiSigGate | undefined;
    getOpenGates(): MultiSigGate[];
    getAllGates(): MultiSigGate[];
    getLedgerRoot(): string;
    getSummary(): {
        total_gates: number;
        open: number;
        approved: number;
        rejected: number;
        signers_registered: number;
    };
    getId(): string;
}
export declare function initializeMultiSigAuthority(): MultiSigAuthority;
export declare function getMultiSigAuthority(): MultiSigAuthority | null;
export declare const multisig: {
    initialize: typeof initializeMultiSigAuthority;
    get: typeof getMultiSigAuthority;
};
export type AppealReason = 'compliance_check_error' | 'verification_failed' | 'payment_rejected' | 'gate_blocked' | 'other';
export interface Appeal {
    appeal_id: string;
    allocation_id: string;
    theorem_id: string;
    reason: AppealReason;
    description: string;
    filed_at: string;
    filed_by: string;
    status: 'open' | 'under_review' | 'approved' | 'rejected';
    evidence: string[];
    resolution?: string;
    resolved_at?: string;
    resolver_id?: string;
}
export interface AppealDecision {
    appeal_id: string;
    decision: 'approved' | 'rejected' | 'escalate';
    reasoning: string;
    evidence_reviewed: string[];
    decision_timestamp: string;
    decision_maker: string;
    decision_seal: string;
}
declare class AppealsCourt {
    private courtId;
    private appeals;
    private decisions;
    private openCount;
    constructor();
    fileAppeal(allocationId: string, theoremId: string, reason: AppealReason, description: string, filedBy: string, evidence?: string[]): Appeal;
    reviewAppeal(appealId: string): Appeal | undefined;
    decideAppeal(appealId: string, decision: 'approved' | 'rejected' | 'escalate', reasoning: string, decisionMaker: string, evidenceReviewed?: string[]): AppealDecision | null;
    getAppeal(appealId: string): Appeal | undefined;
    getAllAppeals(): Appeal[];
    getOpenAppeals(): Appeal[];
    getDecision(decisionId: string): AppealDecision | undefined;
    getAllDecisions(): AppealDecision[];
    getLedgerRoot(): string;
    getSummary(): {
        total_appeals: number;
        open: number;
        under_review: number;
        approved: number;
        rejected: number;
        escalated: number;
        approval_rate: number;
    };
    getId(): string;
}
export declare function initializeAppealsCourt(): AppealsCourt;
export declare function getAppealsCourt(): AppealsCourt | null;
export declare const appeals: {
    initialize: typeof initializeAppealsCourt;
    get: typeof getAppealsCourt;
};
export interface ResearcherProfile {
    researcher_id: string;
    name: string;
    email: string;
    institution: string;
    country: string;
    credentials: {
        phd: boolean;
        publication_count: number;
        field_of_study: string;
    };
    kyc_status: 'pending' | 'verified' | 'rejected';
    kyc_verified_at?: string;
    kyc_verifier: string;
    account_address: string;
    profile_root: string;
}
export interface TheoremAuthor {
    theorem_id: string;
    researcher_id: string;
    authorship_claim: string;
    claim_signature: string;
    verified_at?: string;
    verified_by: string;
}
declare class ResearcherRegistry {
    private registryId;
    private profiles;
    private authorships;
    private kycCount;
    constructor();
    registerResearcher(name: string, email: string, institution: string, country: string, fieldOfStudy: string, accountAddress: string): ResearcherProfile;
    verifyKYC(researcherId: string, phd: boolean, publicationCount: number, verifier: string): ResearcherProfile | null;
    claimAuthorship(theoremId: string, researcherId: string, verifier: string): TheoremAuthor | null;
    getProfile(researcherId: string): ResearcherProfile | undefined;
    getAuthorship(theoremId: string, researcherId: string): TheoremAuthor | undefined;
    getTheoremsByAuthor(researcherId: string): TheoremAuthor[];
    getAllProfiles(): ResearcherProfile[];
    getSummary(): {
        total_researchers: number;
        kyc_verified: number;
        pending_kyc: number;
        rejected_kyc: number;
        total_authorships: number;
    };
    getRoot(): string;
    getId(): string;
}
export declare function initializeResearcherRegistry(): ResearcherRegistry;
export declare function getResearcherRegistry(): ResearcherRegistry | null;
export declare const researcher: {
    initialize: typeof initializeResearcherRegistry;
    get: typeof getResearcherRegistry;
};
export interface AnomalyFlag {
    flag_id: string;
    allocation_id: string;
    researcher_id: string;
    anomaly_type: string;
    risk_score: number;
    evidence: string[];
    flagged_at: string;
    status: 'open' | 'investigated' | 'resolved' | 'false_positive';
    investigation_notes?: string;
}
declare class FraudDetector {
    private detectorId;
    private flags;
    private thresholds;
    constructor();
    detectAnomalies(allocation: FundingAllocation, researcher: ResearcherProfile, recentAllocations: FundingAllocation[]): AnomalyFlag[];
    investigateFlag(flagId: string, notes: string, resolved: boolean): AnomalyFlag | null;
    markFalsePositive(flagId: string): AnomalyFlag | null;
    getOpenFlags(): AnomalyFlag[];
    getFlagsByResearcher(researcherId: string): AnomalyFlag[];
    getAllFlags(): AnomalyFlag[];
    getSummary(): {
        total_flags: number;
        open: number;
        investigated: number;
        resolved: number;
        false_positives: number;
        avg_risk_score: number;
    };
    getId(): string;
}
export declare function initializeFraudDetector(): FraudDetector;
export declare function getFraudDetector(): FraudDetector | null;
export declare const fraud: {
    initialize: typeof initializeFraudDetector;
    get: typeof getFraudDetector;
};
export interface ClawbackRequest {
    request_id: string;
    theorem_id: string;
    funding_source_id: string;
    original_allocation_usd: number;
    reason: 'proof_challenged' | 'fraud_detected' | 'compliance_violation' | 'other';
    challenger: string;
    challenge_evidence: string[];
    requested_at: string;
    status: 'pending' | 'approved' | 'rejected' | 'executed';
    amount_recovered?: number;
    recovered_at?: string;
    recovery_note?: string;
}
export interface RecoveryLedger {
    total_requested: number;
    total_approved: number;
    total_recovered: number;
    total_rejected: number;
    recovery_rate: number;
}
declare class RecoveryManager {
    private managerId;
    private requests;
    private recoveries;
    constructor();
    fileClawbackRequest(theoremId: string, fundingSourceId: string, allocationUsd: number, reason: ClawbackRequest['reason'], challenger: string, evidence?: string[]): ClawbackRequest;
    approveClawback(requestId: string, recoveryAmount: number, note: string): ClawbackRequest | null;
    executeRecovery(requestId: string, recoveryAmount: number): boolean;
    rejectClawback(requestId: string, reason: string): ClawbackRequest | null;
    getRequest(requestId: string): ClawbackRequest | undefined;
    getRequestsForTheorem(theoremId: string): ClawbackRequest[];
    getPendingRequests(): ClawbackRequest[];
    getAllRequests(): ClawbackRequest[];
    getRecoverySummary(): RecoveryLedger;
    getRoot(): string;
    getId(): string;
}
export declare function initializeRecoveryManager(): RecoveryManager;
export declare function getRecoveryManager(): RecoveryManager | null;
export declare const recovery: {
    initialize: typeof initializeRecoveryManager;
    get: typeof getRecoveryManager;
};
export type LedgerEventType = 'allocation_created' | 'verification_passed' | 'verification_failed' | 'compliance_checked' | 'payment_initiated' | 'payment_confirmed' | 'payment_failed' | 'appeal_filed' | 'appeal_resolved' | 'clawback_requested' | 'clawback_executed' | 'fraud_flag_raised';
export interface LedgerEntry {
    entry_id: string;
    sequence_number: number;
    event_type: LedgerEventType;
    theorem_id: string;
    researcher_id?: string;
    amount_usd?: number;
    status: string;
    timestamp: string;
    parent_hash: string;
    entry_hash: string;
    details: Record<string, string | number | boolean>;
}
export interface LedgerPage {
    page_number: number;
    start_sequence: number;
    end_sequence: number;
    page_root: string;
    entries_count: number;
    page_hash: string;
}
declare class ImmutableLedger {
    private ledgerId;
    private entries;
    private pages;
    private lastHash;
    private entriesPerPage;
    constructor();
    recordEvent(eventType: LedgerEventType, theoremId: string, status: string, details: Record<string, string | number | boolean>, researcherId?: string, amountUsd?: number): LedgerEntry;
    private createPage;
    getEntry(sequenceNumber: number): LedgerEntry | undefined;
    getEntriesForTheorem(theoremId: string): LedgerEntry[];
    getEntriesForResearcher(researcherId: string): LedgerEntry[];
    getAllEntries(): LedgerEntry[];
    getPage(pageNumber: number): LedgerPage | undefined;
    verifyEntry(sequenceNumber: number): boolean;
    getRoot(): string;
    getStats(): {
        total_entries: number;
        total_pages: number;
        last_entry_timestamp: string;
        event_types: Record<string, number>;
    };
    exportEntries(startSeq?: number, endSeq?: number): LedgerEntry[];
    getId(): string;
}
export declare function initializeImmutableLedger(): ImmutableLedger;
export declare function getImmutableLedger(): ImmutableLedger | null;
export declare const ledger: {
    initialize: typeof initializeImmutableLedger;
    get: typeof getImmutableLedger;
};
export type StakeholderRole = 'oracle' | 'auditor' | 'treasurer' | 'arbitrator' | 'admin';
export interface Stakeholder {
    stakeholder_id: string;
    name: string;
    email: string;
    role: StakeholderRole;
    permissions: Set<string>;
    active: boolean;
    added_at: string;
    added_by: string;
}
export interface RolePermissions {
    oracle: string[];
    auditor: string[];
    treasurer: string[];
    arbitrator: string[];
    admin: string[];
}
declare class StakeholderManager {
    private managerId;
    private stakeholders;
    private rolePermissions;
    constructor();
    registerStakeholder(name: string, email: string, role: StakeholderRole, addedBy: string): Stakeholder;
    hasPermission(stakeholderId: string, permission: string): boolean;
    getStakeholder(stakeholderId: string): Stakeholder | undefined;
    getByRole(role: StakeholderRole): Stakeholder[];
    deactivate(stakeholderId: string): boolean;
    getSummary(): Record<StakeholderRole, number>;
    getId(): string;
}
export declare function initializeStakeholderManager(): StakeholderManager;
export declare function getStakeholderManager(): StakeholderManager | null;
export declare const stakeholder: {
    initialize: typeof initializeStakeholderManager;
    get: typeof getStakeholderManager;
};
export type EventType = 'theorem_allocated' | 'verification_complete' | 'compliance_passed' | 'payment_released' | 'appeal_filed' | 'clawback_executed' | 'fraud_detected';
export interface FundingEvent {
    event_id: string;
    event_type: EventType;
    theorem_id: string;
    timestamp: string;
    data: Record<string, string | number | boolean>;
    subscribers: string[];
    published: boolean;
}
declare class EventBus {
    private busId;
    private events;
    private subscribers;
    constructor();
    subscribe(eventType: EventType, stakeholderId: string): void;
    publishEvent(eventType: EventType, theoremId: string, data: Record<string, string | number | boolean>): FundingEvent;
    getEvent(eventId: string): FundingEvent | undefined;
    getEventsByType(eventType: EventType): FundingEvent[];
    getEventsForTheorem(theoremId: string): FundingEvent[];
    getAllEvents(): FundingEvent[];
    getId(): string;
}
export declare function initializeEventBus(): EventBus;
export declare function getEventBus(): EventBus | null;
export declare const events: {
    initialize: typeof initializeEventBus;
    get: typeof getEventBus;
};
export interface FundingPool {
    pool_id: string;
    name: string;
    domain: string;
    total_capacity_usd: number;
    allocated_usd: number;
    available_usd: number;
    theorems: string[];
    created_at: string;
    pool_root: string;
}
declare class PoolManager {
    private managerId;
    private pools;
    constructor();
    createPool(name: string, domain: string, capacityUsd: number): FundingPool;
    addTheorem(poolId: string, theoremId: string, allocationUsd: number): boolean;
    getPool(poolId: string): FundingPool | undefined;
    getPoolsByDomain(domain: string): FundingPool[];
    getAllPools(): FundingPool[];
    getSummary(): {
        total_pools: number;
        total_capacity: number;
        total_allocated: number;
        total_available: number;
        utilization_rate: number;
    };
    getId(): string;
}
export declare function initializePoolManager(): PoolManager;
export declare function getPoolManager(): PoolManager | null;
export declare const pools: {
    initialize: typeof initializePoolManager;
    get: typeof getPoolManager;
};
export type MilestoneType = 'proof_sealed' | 'peer_review_submitted' | 'peer_review_passed' | 'published' | 'two_year_wait_complete' | 'funds_claimed';
export interface Milestone {
    milestone_id: string;
    theorem_id: string;
    milestone_type: MilestoneType;
    achieved_at?: string;
    status: 'pending' | 'achieved' | 'overdue';
    dependencies: string[];
    gate_for_release: boolean;
}
declare class MilestoneTracker {
    private trackerId;
    private milestones;
    private defaultGates;
    constructor();
    createMilestone(theoremId: string, milestoneType: MilestoneType, dependencies?: string[]): Milestone;
    achieveMilestone(milestoneId: string): Milestone | null;
    getForTheorem(theoremId: string): Milestone[];
    canReleaseFunds(theoremId: string): boolean;
    getMilestone(milestoneId: string): Milestone | undefined;
    getAllMilestones(): Milestone[];
    getSummary(): {
        total_milestones: number;
        achieved: number;
        pending: number;
        release_gates_open: number;
    };
    getId(): string;
}
export declare function initializeMilestoneTracker(): MilestoneTracker;
export declare function getMilestoneTracker(): MilestoneTracker | null;
export declare const milestones: {
    initialize: typeof initializeMilestoneTracker;
    get: typeof getMilestoneTracker;
};
export type ReportType = 'compliance' | 'audit' | 'fund_flow' | 'fraud_detection';
export interface Report {
    report_id: string;
    report_type: ReportType;
    generated_at: string;
    period_start: string;
    period_end: string;
    summary: {
        total_theorems: number;
        total_funding: number;
        allocations: number;
        verifications: number;
        compliance_checks: number;
        payments: number;
        appeals: number;
        clawbacks: number;
        fraud_flags: number;
    };
    status: 'passed' | 'failed' | 'warnings';
    findings: string[];
}
declare class ReportingEngine {
    private engineId;
    private reports;
    constructor();
    generateComplianceReport(periodStart: string, periodEnd: string, complianceData: {
        total_checks: number;
        passed: number;
        failed: number;
        waived: number;
    }): Report;
    generateAuditReport(periodStart: string, periodEnd: string, auditData: {
        total_entries: number;
        verified_entries: number;
        anomalies_found: number;
    }): Report;
    generateFundFlowReport(periodStart: string, periodEnd: string, fundData: {
        allocations: number;
        claimed: number;
        recovered: number;
        total_allocated_usd: number;
        total_claimed_usd: number;
        total_recovered_usd: number;
    }): Report;
    generateFraudDetectionReport(periodStart: string, periodEnd: string, fraudData: {
        total_screened: number;
        flags_raised: number;
        investigations_open: number;
        confirmed_fraud: number;
    }): Report;
    getReport(reportId: string): Report | undefined;
    getReportsByType(reportType: ReportType): Report[];
    getAllReports(): Report[];
    getRecentReports(count?: number): Report[];
    exportReports(reportType?: ReportType): Report[];
    getId(): string;
}
export declare function initializeReportingEngine(): ReportingEngine;
export declare function getReportingEngine(): ReportingEngine | null;
export declare const reporting: {
    initialize: typeof initializeReportingEngine;
    get: typeof getReportingEngine;
};
export interface SystemHealth {
    status: 'healthy' | 'warning' | 'critical';
    timestamp: string;
    layers: {
        dispatch: {
            status: string;
            cycles: number;
        };
        agent: {
            status: string;
            active: boolean;
            cycles: number;
        };
        verification: {
            status: string;
            verified_count: number;
        };
        compliance: {
            status: string;
            pass_rate: number;
        };
        payment: {
            status: string;
            processed_count: number;
        };
        multisig: {
            status: string;
            pending_approvals: number;
        };
        appeals: {
            status: string;
            open_appeals: number;
        };
        analytics: {
            status: string;
            health_score: number;
        };
        researcher: {
            status: string;
            registered_count: number;
        };
        fraud: {
            status: string;
            risk_alerts: number;
        };
        recovery: {
            status: string;
            pending_clawbacks: number;
        };
        ledger: {
            status: string;
            entries: number;
        };
        stakeholder: {
            status: string;
            active_stakeholders: number;
        };
        events: {
            status: string;
            published_count: number;
        };
        pools: {
            status: string;
            total_pools: number;
        };
        milestones: {
            status: string;
            gates_open: number;
        };
        reporting: {
            status: string;
            recent_reports: number;
        };
    };
}
declare class MasterOrchestrator {
    private orchestratorId;
    private systemHealth;
    private lastHealthCheck;
    private healthThresholds;
    constructor();
    checkSystemHealth(layerMetrics: {
        dispatch_cycles: number;
        agent_active: boolean;
        agent_cycles: number;
        verified_theorems: number;
        compliance_pass_rate: number;
        payments_processed: number;
        pending_approvals: number;
        open_appeals: number;
        analytics_score: number;
        registered_researchers: number;
        fraud_risk_alerts: number;
        pending_clawbacks: number;
        ledger_entries: number;
        active_stakeholders: number;
        published_events: number;
        total_pools: number;
        milestone_gates_open: number;
        recent_reports: number;
    }): SystemHealth;
    getLastHealthCheck(): SystemHealth | null;
    getId(): string;
    getManifest(): {
        version: string;
        layers: number;
        capabilities: string[];
    };
    getConfiguration(): {
        compliance_threshold: number;
        fraud_risk_ceiling: number;
        approval_levels: Record<string, number>;
        gateway_delays: Record<string, number>;
    };
}
export declare function initializeMasterOrchestrator(): MasterOrchestrator;
export declare function getMasterOrchestrator(): MasterOrchestrator | null;
export declare const orchestrator: {
    initialize: typeof initializeMasterOrchestrator;
    get: typeof getMasterOrchestrator;
};
export interface TheoremImpact {
    theorem_id: string;
    metric_id: string;
    citations: number;
    adoptions: number;
    downstream_theorems: number;
    applications: string[];
    h_index_contribution: number;
    field_advancement_score: number;
    measured_at: string;
}
export interface ResearcherImpact {
    researcher_id: string;
    total_citations: number;
    theorems_authored: number;
    h_index: number;
    breakthrough_count: number;
    field_influence_score: number;
    collaboration_network_size: number;
    updated_at: string;
}
export interface ImpactTier {
    tier_name: string;
    min_citations: number;
    min_adoptions: number;
    reward_multiplier: number;
    badge: string;
}
declare class ImpactMeasurement {
    private measurementId;
    private theoremImpacts;
    private researcherImpacts;
    private impactTiers;
    constructor();
    recordTheoremImpact(theoremId: string, citations: number, adoptions: number, downstreamTheorems: number, applications: string[]): TheoremImpact;
    recordResearcherImpact(researcherId: string, totalCitations: number, theoremsAuthored: number, hIndex: number, breakthroughCount: number, collaborationNetworkSize: number): ResearcherImpact;
    getTheoremTier(theoremId: string): ImpactTier | null;
    getResearcherTier(researcherId: string): ImpactTier | null;
    getTheoremImpact(theoremId: string): TheoremImpact[];
    getResearcherImpact(researcherId: string): ResearcherImpact | undefined;
    computeROI(fundingAmountUsd: number, impactMetrics: {
        citations: number;
        adoptions: number;
        applications: number;
    }): number;
    getTheoremsByImpact(sortBy?: 'citations' | 'adoptions' | 'field_score'): TheoremImpact[];
    getSummary(): {
        total_theorems_tracked: number;
        total_citations: number;
        total_adoptions: number;
        average_h_contribution: number;
        field_score_average: number;
    };
    getId(): string;
}
export declare function initializeImpactMeasurement(): ImpactMeasurement;
export declare function getImpactMeasurement(): ImpactMeasurement | null;
export declare const impact: {
    initialize: typeof initializeImpactMeasurement;
    get: typeof getImpactMeasurement;
};
export type IncentiveType = 'citation_bonus' | 'adoption_bonus' | 'speed_bonus' | 'collaboration_bonus' | 'breakthrough_bonus' | 'publication_bonus';
export interface IncentiveRule {
    rule_id: string;
    type: IncentiveType;
    trigger_threshold: number;
    base_reward_usd: number;
    multiplier_per_unit: number;
    cap_usd: number;
    active: boolean;
}
export interface IncentiveEarning {
    earning_id: string;
    researcher_id: string;
    theorem_id: string;
    type: IncentiveType;
    trigger_value: number;
    earned_usd: number;
    earned_at: string;
    status: 'pending' | 'approved' | 'paid';
}
export interface ResearcherIncentiveBalance {
    researcher_id: string;
    total_earned_usd: number;
    total_claimed_usd: number;
    total_pending_usd: number;
    earnings_count: number;
    next_payout_date: string;
}
declare class IncentiveManager {
    private managerId;
    private rules;
    private earnings;
    private balances;
    private payoutInterval;
    constructor();
    private initializeDefaultRules;
    recordEarning(researcherId: string, theoremId: string, type: IncentiveType, triggerValue: number): IncentiveEarning | null;
    private updateBalance;
    approveEarning(earningId: string): IncentiveEarning | null;
    getBalance(researcherId: string): ResearcherIncentiveBalance | undefined;
    getEarnings(researcherId: string): IncentiveEarning[];
    getEarningsByStatus(status: 'pending' | 'approved' | 'paid'): IncentiveEarning[];
    getTotalPending(): number;
    getRule(type: IncentiveType): IncentiveRule | undefined;
    getAllRules(): IncentiveRule[];
    getSummary(): {
        total_earnings_usd: number;
        total_claimed_usd: number;
        total_pending_usd: number;
        active_researchers: number;
        earnings_count: number;
    };
    getId(): string;
}
export declare function initializeIncentiveManager(): IncentiveManager;
export declare function getIncentiveManager(): IncentiveManager | null;
export declare const incentives: {
    initialize: typeof initializeIncentiveManager;
    get: typeof getIncentiveManager;
};
export interface DomainAllocation {
    domain: string;
    target_allocation_pct: number;
    current_allocation_usd: number;
    target_allocation_usd: number;
    theorems_funded: number;
    risk_score: number;
    diversity_index: number;
}
export interface PortfolioBalance {
    portfolio_id: string;
    total_capacity_usd: number;
    allocated_usd: number;
    available_usd: number;
    diversification_score: number;
    risk_adjusted_return: number;
    rebalance_needed: boolean;
    created_at: string;
}
export interface AllocationStrategy {
    strategy_id: string;
    name: string;
    domains: Record<string, number>;
    risk_tolerance: 'conservative' | 'balanced' | 'aggressive';
    target_return: number;
}
declare class PortfolioManager {
    private managerId;
    private portfolio;
    private allocations;
    private strategies;
    private rebalanceThreshold;
    constructor();
    initializePortfolio(totalCapacityUsd: number): PortfolioBalance;
    addDomainAllocation(domain: string, targetAllocationPct: number, riskScore: number): DomainAllocation;
    allocateToDomain(domain: string, amountUsd: number): boolean;
    private recomputePortfolio;
    createStrategy(name: string, domains: Record<string, number>, riskTolerance: 'conservative' | 'balanced' | 'aggressive'): AllocationStrategy;
    applyStrategy(strategyId: string): boolean;
    private computeRiskScore;
    getPortfolio(): PortfolioBalance | null;
    getDomainAllocation(domain: string): DomainAllocation | undefined;
    getAllAllocations(): DomainAllocation[];
    getStrategy(strategyId: string): AllocationStrategy | undefined;
    getRebalancingRecommendation(): {
        domain: string;
        action: string;
        amount: number;
    }[];
    getId(): string;
}
export declare function initializePortfolioManager(): PortfolioManager;
export declare function getPortfolioManager(): PortfolioManager | null;
export declare const portfolio: {
    initialize: typeof initializePortfolioManager;
    get: typeof getPortfolioManager;
};
export interface SuccessPrediction {
    prediction_id: string;
    researcher_id: string;
    theorem_id: string;
    success_probability: number;
    estimated_citation_count: number;
    estimated_adoption_count: number;
    confidence_score: number;
    predicted_at: string;
    factors: Record<string, number>;
}
export interface FundFlowForecast {
    forecast_id: string;
    period_start: string;
    period_end: string;
    projected_allocations: number;
    projected_capital_deployed_usd: number;
    projected_claims_usd: number;
    confidence_interval: {
        lower_usd: number;
        upper_usd: number;
    };
}
export interface ResearcherTrajectory {
    researcher_id: string;
    h_index_projection_year1: number;
    h_index_projection_year3: number;
    publication_velocity: number;
    funding_impact_ratio: number;
    career_peak_year: number;
    attrition_risk: number;
}
declare class PredictiveModel {
    private modelId;
    private predictions;
    private forecasts;
    private trajectories;
    constructor();
    predictResearcherSuccess(researcherId: string, theoremId: string, historicalCitations: number, publicationCount: number, collaboratorCount: number, fundingHistoryUsd: number): SuccessPrediction;
    forecastFundFlow(monthsAhead: number, historicalMonthlyAllocation: number, theoremPipeline: number): FundFlowForecast;
    projectTrajectory(researcherId: string, currentHIndex: number, currentPublicationRate: number, fundingHistoryUsd: number, yearsInField: number): ResearcherTrajectory;
    getPrediction(predictionId: string): SuccessPrediction | undefined;
    getResearcherPredictions(researcherId: string): SuccessPrediction[];
    getForecast(forecastId: string): FundFlowForecast | undefined;
    getTrajectory(researcherId: string): ResearcherTrajectory | undefined;
    getHighProbabilityTheorems(threshold?: number): SuccessPrediction[];
    getAtRiskResearchers(threshold?: number): ResearcherTrajectory[];
    getId(): string;
}
export declare function initializePredictiveModel(): PredictiveModel;
export declare function getPredictiveModel(): PredictiveModel | null;
export declare const predict: {
    initialize: typeof initializePredictiveModel;
    get: typeof getPredictiveModel;
};
export interface SustainabilityMetric {
    metric_id: string;
    period_start: string;
    period_end: string;
    funding_stability_score: number;
    researcher_retention_rate: number;
    impact_growth_rate: number;
    fund_utilization_rate: number;
    program_health_score: number;
    timestamp: string;
}
export interface FundingSourceHealth {
    funding_source_id: string;
    name: string;
    committed_usd: number;
    available_usd: number;
    funds_deployed_usd: number;
    deployment_rate: number;
    renewal_probability: number;
    time_to_renewal_years: number;
    health_status: 'thriving' | 'stable' | 'at_risk' | 'critical';
}
export interface ResearcherRetention {
    cohort_year: number;
    cohort_size: number;
    retained_count: number;
    retention_rate: number;
    avg_theorems_per_retained: number;
    avg_citations_per_retained: number;
}
declare class SustainabilityTracker {
    private trackerId;
    private metrics;
    private fundingSourceHealth;
    private retentionCohorts;
    constructor();
    recordMetric(fundingStability: number, researcherRetention: number, impactGrowth: number, fundUtilization: number): SustainabilityMetric;
    recordFundingSourceHealth(sourceId: string, name: string, committedUsd: number, availableUsd: number, deployedUsd: number, renewalProbability: number, yearsToRenewal: number): FundingSourceHealth;
    recordRetentionCohort(cohortYear: number, cohortSize: number, retainedCount: number, avgTheoremsPerRetained: number, avgCitationsPerRetained: number): ResearcherRetention;
    getMetric(metricId: string): SustainabilityMetric | undefined;
    getLatestMetric(): SustainabilityMetric | null;
    getFundingSourceHealth(sourceId: string): FundingSourceHealth | undefined;
    getAllFundingSourcesHealth(): FundingSourceHealth[];
    getAtRiskFundingSources(): FundingSourceHealth[];
    getRetentionCohort(year: number): ResearcherRetention | undefined;
    getAllRetentionCohorts(): ResearcherRetention[];
    getRetentionTrend(): {
        average_retention: number;
        trend: 'improving' | 'stable' | 'declining';
        years_tracked: number;
    };
    getProgramOutlook(): {
        outlook: 'expanding' | 'stable' | 'contracting';
        confidence: number;
        recommendations: string[];
    };
    getId(): string;
}
export declare function initializeSustainabilityTracker(): SustainabilityTracker;
export declare function getSustainabilityTracker(): SustainabilityTracker | null;
export declare const sustainability: {
    initialize: typeof initializeSustainabilityTracker;
    get: typeof getSustainabilityTracker;
};
export interface ExternalDatabase {
    db_id: string;
    name: string;
    type: 'academic' | 'funding' | 'institutional';
    url: string;
    api_key_encrypted: string;
    last_sync: string;
    status: 'connected' | 'disconnected' | 'error';
    data_categories: string[];
}
export interface SyncRecord {
    sync_id: string;
    database_id: string;
    entity_type: string;
    external_id: string;
    internal_id: string;
    last_synced: string;
    status: 'synced' | 'pending' | 'error';
    record_count: number;
}
export interface DataMapping {
    mapping_id: string;
    from_database: string;
    from_field: string;
    to_model: string;
    to_field: string;
    transform_fn: string;
    active: boolean;
}
declare class IntegrationHub {
    private hubId;
    private databases;
    private syncRecords;
    private dataMappings;
    constructor();
    private initializeDefaultDatabases;
    private registerDatabase;
    connectDatabase(dbId: string, apiKeyEncrypted: string): boolean;
    syncData(databaseId: string, entityType: string, externalIds: string[], internalIds: string[]): SyncRecord;
    defineMapping(fromDb: string, fromField: string, toModel: string, toField: string, transformFn: string): DataMapping;
    getDatabase(id: string): ExternalDatabase | undefined;
    getAllDatabases(): ExternalDatabase[];
    getConnectedDatabases(): ExternalDatabase[];
    getSyncRecords(databaseId?: string): SyncRecord[];
    getDataMappings(fromDb?: string): DataMapping[];
    getStatus(): {
        total_databases: number;
        connected: number;
        last_sync: string;
        sync_count: number;
        mapping_count: number;
    };
    getId(): string;
}
export declare function initializeIntegrationHub(): IntegrationHub;
export declare function getIntegrationHub(): IntegrationHub | null;
export declare const integration: {
    initialize: typeof initializeIntegrationHub;
    get: typeof getIntegrationHub;
};
export interface BenchmarkProgram {
    program_id: string;
    name: string;
    organization: string;
    type: 'public' | 'private' | 'foundation';
    annual_budget_usd: number;
    inception_year: number;
    theorems_funded: number;
    avg_award_size_usd: number;
}
export interface PerformanceComparison {
    comparison_id: string;
    our_program: string;
    peer_program_id: string;
    metric: 'roi' | 'impact' | 'efficiency' | 'retention' | 'completion';
    our_value: number;
    peer_value: number;
    percentile_rank: number;
    timestamp: string;
}
export interface BenchmarkMetrics {
    program_id: string;
    cost_per_citation: number;
    cost_per_adoption: number;
    funding_to_impact_ratio: number;
    researcher_satisfaction_score: number;
    average_time_to_publication_months: number;
    success_rate: number;
    peer_comparison_score: number;
}
declare class BenchmarkComparator {
    private comparatorId;
    private benchmarkPrograms;
    private comparisons;
    private benchmarkMetrics;
    constructor();
    private initializeComparablePrograms;
    recordComparison(ourProgram: string, peerProgramId: string, metric: 'roi' | 'impact' | 'efficiency' | 'retention' | 'completion', ourValue: number, peerValue: number): PerformanceComparison;
    recordBenchmarkMetrics(programId: string, totalFunding: number, totalCitations: number, totalAdoptions: number, theoremsFunded: number, satisfactionScore: number, monthsToPublication: number): BenchmarkMetrics;
    getComparison(comparisonId: string): PerformanceComparison | undefined;
    getAllComparisons(): PerformanceComparison[];
    getComparisonsByMetric(metric: string): PerformanceComparison[];
    getBenchmarkMetrics(programId: string): BenchmarkMetrics | undefined;
    getComparablePrograms(): BenchmarkProgram[];
    getProgramByName(name: string): BenchmarkProgram | undefined;
    getStrengthAreas(): {
        metric: string;
        advantage_pct: number;
    }[];
    getImprovementAreas(): {
        metric: string;
        gap_pct: number;
    }[];
    getCompetitivePosition(): {
        overall_percentile: number;
        position: 'leader' | 'strong' | 'competitive' | 'developing';
        peer_count: number;
    };
    getId(): string;
}
export declare function initializeBenchmarkComparator(): BenchmarkComparator;
export declare function getBenchmarkComparator(): BenchmarkComparator | null;
export declare const benchmark: {
    initialize: typeof initializeBenchmarkComparator;
    get: typeof getBenchmarkComparator;
};
export interface PublicDashboard {
    dashboard_id: string;
    name: string;
    visibility: 'public' | 'authenticated' | 'restricted';
    data_sources: string[];
    refresh_interval_minutes: number;
    created_at: string;
    last_updated: string;
}
export interface AuditLog {
    log_id: string;
    action: string;
    actor_id: string;
    target_type: string;
    target_id: string;
    changes: Record<string, {
        old: string | number;
        new: string | number;
    }>;
    timestamp: string;
    ip_address: string;
    status: 'completed' | 'failed' | 'pending';
}
export interface ComplianceAuditReport {
    report_id: string;
    period_start: string;
    period_end: string;
    compliance_score: number;
    findings: {
        category: string;
        severity: 'critical' | 'high' | 'medium' | 'low';
        description: string;
        remediation: string;
    }[];
    certifications: string[];
    auditor_name: string;
    auditor_signature: string;
    published: boolean;
}
declare class TransparencyManager {
    private managerId;
    private dashboards;
    private auditLogs;
    private complianceReports;
    constructor();
    private initializeDefaultDashboards;
    recordAuditLog(action: string, actorId: string, targetType: string, targetId: string, changes: Record<string, {
        old: string | number;
        new: string | number;
    }>, ipAddress: string, status?: 'completed' | 'failed' | 'pending'): AuditLog;
    private anonymizeIp;
    publishComplianceAuditReport(periodStart: string, periodEnd: string, complianceScore: number, findings: {
        category: string;
        severity: 'critical' | 'high' | 'medium' | 'low';
        description: string;
        remediation: string;
    }[], auditorName: string): ComplianceAuditReport;
    getPublicDashboards(): PublicDashboard[];
    getAllDashboards(): PublicDashboard[];
    getDashboard(name: string): PublicDashboard | undefined;
    getAuditLogs(startTime?: string, endTime?: string): AuditLog[];
    getAuditLogsByAction(action: string): AuditLog[];
    getAuditLogsByActor(actorId: string): AuditLog[];
    getAuditLogsByTarget(targetId: string): AuditLog[];
    getComplianceAuditReport(reportId: string): ComplianceAuditReport | undefined;
    getPublishedComplianceAuditReports(): ComplianceAuditReport[];
    getReportsByPeriod(startDate: string, endDate: string): ComplianceAuditReport[];
    getAuditSummary(periodStart: string, periodEnd: string): {
        total_events: number;
        events_by_action: Record<string, number>;
        failed_actions: number;
        unique_actors: number;
        unique_targets: number;
    };
    getId(): string;
}
export declare function initializeTransparencyManager(): TransparencyManager;
export declare function getTransparencyManager(): TransparencyManager | null;
export declare const transparency: {
    initialize: typeof initializeTransparencyManager;
    get: typeof getTransparencyManager;
};
export interface RiskFactor {
    factor_id: string;
    category: 'funding' | 'researcher' | 'market' | 'operational';
    name: string;
    probability: number;
    impact_severity: number;
    mitigation_strategy: string;
    reserve_allocation_pct: number;
    last_assessed: string;
}
export interface InsuranceCoverage {
    coverage_id: string;
    type: 'funding_source_loss' | 'researcher_attrition' | 'fraud' | 'operational_failure';
    provider: string;
    annual_premium_usd: number;
    coverage_limit_usd: number;
    deductible_usd: number;
    active: boolean;
    renewal_date: string;
}
export interface ContingencyPlan {
    plan_id: string;
    scenario: string;
    probability: number;
    impact_usd: number;
    response_actions: {
        action: string;
        timeline_days: number;
        responsible_party: string;
    }[];
    reserve_trigger: number;
}
declare class RiskManager {
    private managerId;
    private riskFactors;
    private insurance;
    private contingencyPlans;
    private reserveFund;
    private riskTolerance;
    constructor();
    private initializeDefaultRiskFactors;
    private initializeDefaultInsurance;
    private initializeDefaultPlans;
    setReserveFund(amountUsd: number): void;
    getReserveFund(): number;
    getRiskFactor(factorId: string): RiskFactor | undefined;
    getAllRiskFactors(): RiskFactor[];
    computeRiskScore(): {
        score: number;
        level: 'low' | 'moderate' | 'high' | 'critical';
        drivers: string[];
    };
    getInsuranceCoverage(type?: string): InsuranceCoverage[];
    getContingencyPlan(planId: string): ContingencyPlan | undefined;
    getApplicableContingencyPlans(triggerAmount: number): ContingencyPlan[];
    computeRecommendedReserve(totalBudget: number): number;
    getSummary(): {
        overall_risk_score: number;
        insurance_coverage_usd: number;
        reserve_fund_usd: number;
        contingency_plans_count: number;
        coverage_adequacy: number;
    };
    getId(): string;
}
export declare function initializeRiskManager(): RiskManager;
export declare function getRiskManager(): RiskManager | null;
export declare const risk: {
    initialize: typeof initializeRiskManager;
    get: typeof getRiskManager;
};
export type VoteType = 'allocation_policy' | 'fee_structure' | 'new_domain' | 'risk_tolerance';
export interface Proposal {
    proposal_id: string;
    title: string;
    type: VoteType;
    description: string;
    proposer_id: string;
    status: 'draft' | 'active' | 'passed' | 'rejected' | 'implemented';
    created_at: string;
    voting_deadline: string;
    votes_for: number;
    votes_against: number;
    votes_abstain: number;
    quorum_threshold: number;
    execution_plan?: string;
}
export interface Vote {
    vote_id: string;
    proposal_id: string;
    voter_id: string;
    position: 'for' | 'against' | 'abstain';
    reasoning: string;
    voted_at: string;
    voting_power: number;
}
export interface GovernanceParticipant {
    participant_id: string;
    name: string;
    role: 'researcher' | 'stakeholder' | 'auditor' | 'council_member';
    voting_power: number;
    proposals_count: number;
    votes_count: number;
    reputation_score: number;
    joined_at: string;
}
declare class GovernanceCouncil {
    private councilId;
    private proposals;
    private votes;
    private participants;
    private quorumPercentage;
    constructor();
    submitProposal(title: string, type: VoteType, description: string, proposerId: string, votingDaysAhead?: number): Proposal;
    activateProposal(proposalId: string): Proposal | null;
    castVote(proposalId: string, voterId: string, position: 'for' | 'against' | 'abstain', reasoning?: string): Vote | null;
    finalizeProposal(proposalId: string): Proposal | null;
    registerParticipant(name: string, role: 'researcher' | 'stakeholder' | 'auditor' | 'council_member', initialReputation?: number): GovernanceParticipant;
    updateReputation(participantId: string, delta: number): boolean;
    getProposal(proposalId: string): Proposal | undefined;
    getActiveProposals(): Proposal[];
    getPassedProposals(): Proposal[];
    getVotesOnProposal(proposalId: string): Vote[];
    getParticipant(participantId: string): GovernanceParticipant | undefined;
    getAllParticipants(): GovernanceParticipant[];
    private computeQuorumThreshold;
    getStats(): {
        total_proposals: number;
        passed_proposals: number;
        active_proposals: number;
        total_participants: number;
        total_votes_cast: number;
        voter_participation_rate: number;
    };
    getId(): string;
}
export declare function initializeGovernanceCouncil(): GovernanceCouncil;
export declare function getGovernanceCouncil(): GovernanceCouncil | null;
export declare const governance: {
    initialize: typeof initializeGovernanceCouncil;
    get: typeof getGovernanceCouncil;
};
export interface PricingModel {
    model_id: string;
    theorem_field: string;
    base_funding_usd: number;
    difficulty_multiplier: number;
    success_probability: number;
    demand_score: number;
    adjusted_funding_usd: number;
    last_updated: string;
}
export interface AllocationOptimization {
    optimization_id: string;
    theorem_id: string;
    current_allocation_usd: number;
    recommended_allocation_usd: number;
    adjustment_ratio: number;
    efficiency_gain: number;
    implementation_date: string;
    status: 'proposed' | 'approved' | 'implemented';
}
export interface DemandSignal {
    signal_id: string;
    theorem_field: string;
    signal_type: 'citations' | 'collaborations' | 'applications' | 'student_interest';
    current_level: number;
    trend: 'rising' | 'stable' | 'declining';
    demand_weight: number;
    recorded_at: string;
}
declare class PricingEngine {
    private engineId;
    private pricingModels;
    private allocations;
    private demandSignals;
    private baseFundingUsd;
    constructor();
    createPricingModel(field: string, successProbability: number, demandScore: number, difficultyMultiplier?: number): PricingModel;
    recordDemandSignal(field: string, signalType: 'citations' | 'collaborations' | 'applications' | 'student_interest', level: number, trend: 'rising' | 'stable' | 'declining'): DemandSignal;
    computeDemandScore(field: string): number;
    optimizeAllocation(theoremId: string, currentAllocationUsd: number, successProbability: number, demandScore: number, difficultyMultiplier?: number): AllocationOptimization;
    getPricingModel(field: string): PricingModel | undefined;
    getDemandSignalsForField(field: string): DemandSignal[];
    getOptimizationRecommendations(minEfficiencyGain?: number): AllocationOptimization[];
    approveOptimization(optId: string): AllocationOptimization | null;
    implementOptimization(optId: string): AllocationOptimization | null;
    getSummary(): {
        total_models: number;
        avg_success_probability: number;
        avg_demand_score: number;
        optimization_proposals: number;
        avg_efficiency_gain: number;
    };
    getId(): string;
}
export declare function initializePricingEngine(): PricingEngine;
export declare function getPricingEngine(): PricingEngine | null;
export declare const pricing: {
    initialize: typeof initializePricingEngine;
    get: typeof getPricingEngine;
};
export interface ReproducibilityAttempt {
    attempt_id: string;
    theorem_id: string;
    reproducer_id: string;
    original_author_id: string;
    status: 'attempted' | 'successful' | 'failed' | 'partial';
    success_rate: number;
    time_required_hours: number;
    issues_found: string[];
    reproducibility_score: number;
    attempted_at: string;
    completed_at?: string;
}
export interface ProofVerification {
    verification_id: string;
    theorem_id: string;
    verifier_id: string;
    verification_method: 'formal' | 'peer_review' | 'computational' | 'hybrid';
    status: 'pending' | 'in_progress' | 'verified' | 'issues_found' | 'rejected';
    confidence_score: number;
    verification_time_days: number;
    issues: {
        severity: 'critical' | 'major' | 'minor';
        description: string;
        resolution?: string;
    }[];
    verified_at?: string;
}
export interface CodeReviewRecord {
    review_id: string;
    theorem_id: string;
    reviewer_id: string;
    code_quality_score: number;
    documentation_quality: number;
    test_coverage: number;
    reproducibility_rating: number;
    recommendations: string[];
    reviewed_at: string;
}
declare class ReproducibilityTracker {
    private trackerId;
    private attempts;
    private verifications;
    private codeReviews;
    constructor();
    recordAttempt(theoremId: string, reproducerId: string, originalAuthorId: string, timeRequiredHours: number, issuesFound?: string[]): ReproducibilityAttempt;
    recordVerification(theoremId: string, verifierId: string, method: 'formal' | 'peer_review' | 'computational' | 'hybrid', confidenceScore: number, verificationDays: number, issues?: {
        severity: string;
        description: string;
    }[]): ProofVerification;
    recordCodeReview(theoremId: string, reviewerId: string, codeQuality: number, documentation: number, testCoverage: number, recommendations?: string[]): CodeReviewRecord;
    getAttemptsForTheorem(theoremId: string): ReproducibilityAttempt[];
    getVerificationsForTheorem(theoremId: string): ProofVerification[];
    getCodeReviewsForTheorem(theoremId: string): CodeReviewRecord[];
    computeTheoremReproducibilityScore(theoremId: string): number;
    getVerifiedTheorems(): string[];
    getSummary(): {
        total_attempts: number;
        successful_reproductions: number;
        failed_reproductions: number;
        avg_reproducibility_score: number;
        total_verifications: number;
        verified_count: number;
        total_code_reviews: number;
        avg_code_quality: number;
    };
    getId(): string;
}
export declare function initializeReproducibilityTracker(): ReproducibilityTracker;
export declare function getReproducibilityTracker(): ReproducibilityTracker | null;
export declare const reproducibility: {
    initialize: typeof initializeReproducibilityTracker;
    get: typeof getReproducibilityTracker;
};
export interface LessonLearned {
    lesson_id: string;
    theorem_id: string;
    category: 'technical' | 'process' | 'collaboration' | 'funding';
    description: string;
    impact: 'critical' | 'major' | 'minor';
    applicable_to: string[];
    author_id: string;
    created_at: string;
    applications_count: number;
}
export interface BestPractice {
    practice_id: string;
    title: string;
    domain: string;
    description: string;
    success_rate: number;
    difficulty: number;
    time_investment_hours: number;
    theorems_using: number;
    rating: number;
    created_by: string;
    last_updated: string;
}
export interface ResearchSynthesis {
    synthesis_id: string;
    topic: string;
    related_theorems: string[];
    key_findings: string[];
    open_questions: string[];
    synthesis_score: number;
    contributors: string[];
    created_at: string;
    last_updated: string;
}
declare class KnowledgeBase {
    private baseId;
    private lessons;
    private practices;
    private syntheses;
    constructor();
    recordLesson(theoremId: string, category: 'technical' | 'process' | 'collaboration' | 'funding', description: string, impact: 'critical' | 'major' | 'minor', authorId: string, applicableTo?: string[]): LessonLearned;
    createBestPractice(title: string, domain: string, description: string, successRate: number, difficulty: number, timeInvestment: number, createdBy: string): BestPractice;
    adoptPractice(practiceId: string, theoremId: string): BestPractice | null;
    ratePractice(practiceId: string, rating: number): BestPractice | null;
    createSynthesis(topic: string, relatedTheorems: string[], keyFindings: string[], openQuestions: string[], contributors: string[]): ResearchSynthesis;
    getLessonsForTheorem(theoremId: string): LessonLearned[];
    getLessonsByCategory(category: string): LessonLearned[];
    getPracticesForDomain(domain: string): BestPractice[];
    getHighImpactLessons(): LessonLearned[];
    getSynthesis(topic: string): ResearchSynthesis | undefined;
    getAllSyntheses(): ResearchSynthesis[];
    getSummary(): {
        total_lessons: number;
        critical_lessons: number;
        best_practices_total: number;
        avg_practice_rating: number;
        syntheses_count: number;
        avg_synthesis_completeness: number;
    };
    getId(): string;
}
export declare function initializeKnowledgeBase(): KnowledgeBase;
export declare function getKnowledgeBase(): KnowledgeBase | null;
export declare const knowledge: {
    initialize: typeof initializeKnowledgeBase;
    get: typeof getKnowledgeBase;
};
export interface Collaboration {
    collaboration_id: string;
    researchers: string[];
    theorem_id: string;
    collaboration_type: 'co_author' | 'mentor_mentee' | 'peer_review' | 'technical_support';
    start_date: string;
    end_date?: string;
    contribution_shares: Record<string, number>;
    impact_multiplier: number;
    status: 'active' | 'completed';
}
export interface ResearcherNetwork {
    network_id: string;
    researcher_id: string;
    collaborators: string[];
    collaboration_count: number;
    network_size: number;
    reach_score: number;
    diversity_score: number;
    network_impact_multiplier: number;
    last_updated: string;
}
export interface CollaborationIncentive {
    incentive_id: string;
    theorem_id: string;
    collaboration_type: string;
    bonus_per_collaborator_usd: number;
    max_team_size: number;
    bonus_cap_usd: number;
    multiplier_for_diversity: number;
    claimed: boolean;
}
declare class CollaborationManager {
    private managerId;
    private collaborations;
    private networks;
    private incentives;
    constructor();
    recordCollaboration(researcherIds: string[], theoremId: string, type: 'co_author' | 'mentor_mentee' | 'peer_review' | 'technical_support', contributionShares: Record<string, number>): Collaboration;
    private updateResearcherNetwork;
    createCollaborationIncentive(theoremId: string, type: string, bonusPerCollaborator: number, maxTeamSize: number, diversityMultiplier?: number): CollaborationIncentive;
    computeCollaborationBonus(theoremId: string, collaboratorCount: number, isDiverse?: boolean): number;
    getCollaboration(collaborationId: string): Collaboration | undefined;
    getCollaborationsForResearcher(researcherId: string): Collaboration[];
    getResearcherNetwork(researcherId: string): ResearcherNetwork | undefined;
    getTopCollaborators(limit?: number): ResearcherNetwork[];
    findPotentialCollaborators(researcherId: string): string[];
    getSummary(): {
        total_collaborations: number;
        avg_team_size: number;
        avg_impact_multiplier: number;
        researchers_with_networks: number;
        avg_network_size: number;
        total_collaboration_bonus_available: number;
    };
    getId(): string;
}
export declare function initializeCollaborationManager(): CollaborationManager;
export declare function getCollaborationManager(): CollaborationManager | null;
export declare const collaboration: {
    initialize: typeof initializeCollaborationManager;
    get: typeof getCollaborationManager;
};
export interface FieldTrend {
    trend_id: string;
    field_name: string;
    subfield?: string;
    momentum_score: number;
    growth_rate: number;
    publications_count: number;
    citations_count: number;
    researcher_count: number;
    funding_attention: number;
    predicted_peak_year: number;
    status: 'emerging' | 'growing' | 'mature' | 'declining';
    analyzed_at: string;
}
export interface ResearchArea {
    area_id: string;
    name: string;
    parent_field: string;
    keywords: string[];
    theorems: string[];
    avg_impact_score: number;
    total_funding_usd: number;
    researcher_count: number;
    year_started: number;
    complexity_score: number;
    interdisciplinary_index: number;
}
export interface EmergingOpportunity {
    opportunity_id: string;
    title: string;
    related_fields: string[];
    opportunity_score: number;
    potential_impact: number;
    funding_gap_usd: number;
    required_expertise: string[];
    time_to_breakthrough_years: number;
    confidence: number;
    identified_at: string;
}
declare class FieldAnalyzer {
    private analyzerId;
    private trends;
    private areas;
    private opportunities;
    constructor();
    private initializeDefaultFields;
    analyzeField(fieldName: string, publicationCount: number, citationCount: number, researcherCount: number, yearOverYearGrowth: number): FieldTrend;
    createResearchArea(name: string, parentField: string, keywords: string[], theoremIds: string[], avgImpact: number, totalFunding: number, startYear: number): ResearchArea;
    identifyOpportunity(title: string, relatedFields: string[], potentialImpact: number, fundingGap: number, requiredExpertise: string[], yearsToBreakthrough: number): EmergingOpportunity;
    getFieldTrend(fieldName: string): FieldTrend | undefined;
    getAllTrends(): FieldTrend[];
    getEmergingFields(): FieldTrend[];
    getHotTopics(limit?: number): FieldTrend[];
    getResearchArea(name: string): ResearchArea | undefined;
    getHighOpportunityAreas(): EmergingOpportunity[];
    getUnderfundedAreas(): {
        area: ResearchArea;
        funding_gap: number;
    }[];
    getSummary(): {
        total_fields: number;
        emerging_count: number;
        declining_count: number;
        avg_momentum: number;
        hot_topics_count: number;
        opportunities_identified: number;
        research_areas: number;
    };
    getId(): string;
}
export declare function initializeFieldAnalyzer(): FieldAnalyzer;
export declare function getFieldAnalyzer(): FieldAnalyzer | null;
export declare const fields: {
    initialize: typeof initializeFieldAnalyzer;
    get: typeof getFieldAnalyzer;
};
export interface LegacyRecord {
    record_id: string;
    theorem_id: string;
    researcher_id: string;
    funding_year: number;
    initial_funding_usd: number;
    total_citations_all_time: number;
    total_adoptions_all_time: number;
    downstream_theorems: number;
    fields_influenced: string[];
    real_world_applications: string[];
    researchers_trained: number;
    impact_generations: number;
    archive_date: string;
    permanence_score: number;
}
export interface GenerationalImpact {
    impact_id: string;
    root_theorem_id: string;
    generation_number: number;
    derived_theorems: string[];
    researcher_count: number;
    publication_count: number;
    citation_count: number;
    cumulative_funding_usd: number;
    time_span_years: number;
}
export interface ResearchLegacy {
    legacy_id: string;
    researcher_id: string;
    theorems_count: number;
    total_citations: number;
    total_adoptions: number;
    h_index_peak: number;
    field_contributions: Record<string, number>;
    mentees_count: number;
    legacy_score: number;
    created_at: string;
}
declare class LegacyArchive {
    private archiveId;
    private legacyRecords;
    private generationalImpacts;
    private researcherLegacies;
    constructor();
    createLegacyRecord(theoremId: string, researcherId: string, fundingYear: number, initialFunding: number, totalCitations: number, totalAdoptions: number, downstreamTheorems: number, fieldsInfluenced: string[], applications: string[]): LegacyRecord;
    recordGenerationalImpact(rootTheoremId: string, generation: number, derivedTheorems: string[], researcherCount: number, publicationCount: number, citationCount: number, cumulativeFunding: number, timeSpan: number): GenerationalImpact;
    createResearcherLegacy(researcherId: string, theoremCount: number, totalCitations: number, totalAdoptions: number, hIndexPeak: number, fieldContributions: Record<string, number>, menteesCount: number): ResearchLegacy;
    getLegacyRecord(theoremId: string): LegacyRecord | undefined;
    getAllLegacyRecords(): LegacyRecord[];
    getMostImpactfulTheorems(limit?: number): LegacyRecord[];
    getGenerationalChain(theoremId: string): GenerationalImpact[];
    getResearcherLegacy(researcherId: string): ResearchLegacy | undefined;
    getHallOfFame(limit?: number): ResearchLegacy[];
    computeTotalGenerationalImpact(rootTheoremId: string): {
        total_researchers: number;
        total_publications: number;
        total_citations: number;
        total_funding: number;
        generation_count: number;
    };
    getSummary(): {
        total_legacy_records: number;
        avg_permanence_score: number;
        most_impactful_theorem_citations: number;
        total_researchers_with_legacies: number;
        avg_legacy_score: number;
        generational_depths_tracked: number;
    };
    getId(): string;
}
export declare function initializeLegacyArchive(): LegacyArchive;
export declare function getLegacyArchive(): LegacyArchive | null;
export declare const archive: {
    initialize: typeof initializeLegacyArchive;
    get: typeof getLegacyArchive;
};
export interface MentorshipRelation {
    relation_id: string;
    mentor_id: string;
    mentee_id: string;
    field: string;
    start_date: string;
    end_date?: string;
    status: 'active' | 'completed' | 'paused';
    meetings_count: number;
    mentee_outcomes: {
        papers_published: number;
        theorems_developed: number;
        funding_obtained_usd: number;
        skills_gained: string[];
    };
    satisfaction_score: number;
    mentor_rating: number;
}
export interface CareerPath {
    path_id: string;
    researcher_id: string;
    start_level: string;
    current_level: string;
    progress_pct: number;
    milestones_achieved: string[];
    next_milestone: string;
    estimated_advancement_months: number;
    career_trajectory: 'fast_track' | 'steady' | 'lateral' | 'mentorship_focused';
}
export interface SkillDevelopment {
    development_id: string;
    researcher_id: string;
    skill_name: string;
    proficiency_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    learning_resources: string[];
    hours_invested: number;
    certification?: string;
    acquired_date: string;
}
declare class MentorshipManager {
    private managerId;
    private relations;
    private careerPaths;
    private skillDevelopments;
    constructor();
    createMentorshipRelation(mentorId: string, menteeId: string, field: string): MentorshipRelation;
    recordMeetingAndOutcome(relationId: string, skillsGained?: string[], progressOnTheorem?: boolean, fundingMilestone?: number): MentorshipRelation | null;
    completeMentorship(relationId: string, satisfactionScore: number, mentorRating: number): MentorshipRelation | null;
    createCareerPath(researcherId: string, startLevel: string): CareerPath;
    recordSkillDevelopment(researcherId: string, skillName: string, proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert', hoursInvested: number, resources?: string[]): SkillDevelopment;
    getMentorshipsForResearcher(researcherId: string, role: 'mentor' | 'mentee'): MentorshipRelation[];
    getActiveMentorships(): MentorshipRelation[];
    getCareerPath(researcherId: string): CareerPath | undefined;
    getSkillsForResearcher(researcherId: string): SkillDevelopment[];
    getFastTrackResearchers(): CareerPath[];
    computeMentorshipEffectiveness(mentorId: string): {
        mentees_total: number;
        successful_mentorships: number;
        avg_satisfaction: number;
        mentee_outcomes_total_funding: number;
        success_rate: number;
    };
    getSummary(): {
        total_mentorships: number;
        active_mentorships: number;
        completed_mentorships: number;
        avg_satisfaction_score: number;
        researchers_with_careers: number;
        avg_career_progress: number;
        total_skills_tracked: number;
    };
    getId(): string;
}
export declare function initializeMentorshipManager(): MentorshipManager;
export declare function getMentorshipManager(): MentorshipManager | null;
export declare const mentorship: {
    initialize: typeof initializeMentorshipManager;
    get: typeof getMentorshipManager;
};
export interface PatentRecord {
    patent_id: string;
    theorem_id: string;
    inventor_ids: string[];
    title: string;
    abstract: string;
    application_date: string;
    filing_jurisdiction: string[];
    status: 'draft' | 'filed' | 'pending' | 'granted' | 'rejected' | 'expired';
    grant_date?: string;
    expiration_date?: string;
    maintenance_cost_usd: number;
    licensing_revenue_usd: number;
    commercialization_status: 'none' | 'licensed' | 'commercialized';
}
export interface LicenseAgreement {
    license_id: string;
    patent_id: string;
    licensee_name: string;
    license_type: 'exclusive' | 'non_exclusive' | 'research';
    start_date: string;
    end_date?: string;
    royalty_rate_pct: number;
    upfront_payment_usd: number;
    annual_minimum_usd: number;
    status: 'active' | 'expired' | 'terminated';
}
export interface CommercializationRecord {
    commercialization_id: string;
    patent_id: string;
    product_name: string;
    market_launch_date?: string;
    market_revenue_usd: number;
    units_sold: number;
    customer_count: number;
    market_adoption_rate: number;
    roi_multiplier: number;
}
declare class IPManager {
    private managerId;
    private patents;
    private licenses;
    private commercializations;
    constructor();
    filePatent(theoremId: string, inventorIds: string[], title: string, abstract: string, filingJurisdictions: string[]): PatentRecord;
    recordPatentGrant(patentId: string, grantDate: string, expirationDate: string): PatentRecord | null;
    createLicenseAgreement(patentId: string, licenseeName: string, licenseType: 'exclusive' | 'non_exclusive' | 'research', royaltyRate: number, upfrontPayment: number, annualMinimum: number): LicenseAgreement;
    recordCommercialization(patentId: string, productName: string, marketRevenue: number, unitsSold: number, customerCount: number): CommercializationRecord;
    getPatent(patentId: string): PatentRecord | undefined;
    getPatentsForTheorem(theoremId: string): PatentRecord[];
    getGrantedPatents(): PatentRecord[];
    getLicensesForPatent(patentId: string): LicenseAgreement[];
    getCommercializationsForPatent(patentId: string): CommercializationRecord[];
    getHighROIPatents(minROI?: number): CommercializationRecord[];
    computeIPValue(theoremId: string): {
        total_patents: number;
        granted_count: number;
        total_licensing_revenue: number;
        commercialized_products: number;
        total_market_revenue: number;
        total_roi: number;
    };
    getSummary(): {
        total_patents: number;
        granted_patents: number;
        pending_patents: number;
        active_licenses: number;
        commercialized_products: number;
        total_licensing_revenue: number;
        total_market_revenue: number;
        avg_roi: number;
    };
    getId(): string;
}
export declare function initializeIPManager(): IPManager;
export declare function getIPManager(): IPManager | null;
export declare const patents: {
    initialize: typeof initializeIPManager;
    get: typeof getIPManager;
};
export interface OutreachProject {
    project_id: string;
    theorem_id: string;
    title: string;
    target_audience: 'general_public' | 'students' | 'industry' | 'policy_makers';
    format: 'article' | 'video' | 'podcast' | 'interactive' | 'public_lecture';
    content_url: string;
    published_date: string;
    reach_metrics: {
        views: number;
        shares: number;
        engagement_rate: number;
    };
    impact_score: number;
    author_id: string;
}
export interface PublicNarrative {
    narrative_id: string;
    theorem_id: string;
    title: string;
    subtitle: string;
    executive_summary: string;
    key_implications: string[];
    real_world_applications: string[];
    difficulty_level: 'elementary' | 'high_school' | 'undergraduate' | 'graduate';
    created_at: string;
    updated_at: string;
}
export interface CommunityEngagement {
    engagement_id: string;
    theorem_id: string;
    event_type: 'workshop' | 'seminar' | 'public_talk' | 'student_mentoring';
    location: string;
    date: string;
    attendees: number;
    satisfaction_score: number;
    learning_outcome: string;
    researcher_id: string;
}
declare class OutreachManager {
    private managerId;
    private projects;
    private narratives;
    private engagements;
    constructor();
    createOutreachProject(theoremId: string, title: string, targetAudience: 'general_public' | 'students' | 'industry' | 'policy_makers', format: 'article' | 'video' | 'podcast' | 'interactive' | 'public_lecture', contentUrl: string, authorId: string): OutreachProject;
    recordEngagementMetrics(projectId: string, views: number, shares: number): OutreachProject | null;
    createPublicNarrative(theoremId: string, title: string, subtitle: string, executiveSummary: string, keyImplications: string[], applications: string[], difficultyLevel: 'elementary' | 'high_school' | 'undergraduate' | 'graduate'): PublicNarrative;
    recordCommunityEngagement(theoremId: string, eventType: 'workshop' | 'seminar' | 'public_talk' | 'student_mentoring', location: string, date: string, attendees: number, satisfactionScore: number, learningOutcome: string, researcherId: string): CommunityEngagement;
    getProjectsForTheorem(theoremId: string): OutreachProject[];
    getHighImpactProjects(minImpact?: number): OutreachProject[];
    getPublicNarrative(theoremId: string, level: string): PublicNarrative | undefined;
    getNarrativesForTheorem(theoremId: string): PublicNarrative[];
    getEngagementsForTheorem(theoremId: string): CommunityEngagement[];
    getEngagementsByResearcher(researcherId: string): CommunityEngagement[];
    getSummary(): {
        total_outreach_projects: number;
        total_reach: number;
        avg_impact_score: number;
        public_narratives: number;
        community_engagements: number;
        total_attendees: number;
        avg_satisfaction: number;
    };
    getId(): string;
}
export declare function initializeOutreachManager(): OutreachManager;
export declare function getOutreachManager(): OutreachManager | null;
export declare const outreach: {
    initialize: typeof initializeOutreachManager;
    get: typeof getOutreachManager;
};
export interface DataProtectionPolicy {
    policy_id: string;
    policy_name: string;
    scope: 'researcher_data' | 'funding_records' | 'audit_logs' | 'payment_info';
    retention_days: number;
    encryption_required: boolean;
    access_restrictions: string[];
    compliance_frameworks: string[];
    created_at: string;
    last_updated: string;
}
export interface PrivacyIncident {
    incident_id: string;
    incident_type: 'unauthorized_access' | 'data_breach' | 'policy_violation' | 'retention_violation';
    severity: 'critical' | 'high' | 'medium' | 'low';
    affected_parties: number;
    description: string;
    detected_at: string;
    remediation_plan: string;
    status: 'open' | 'investigating' | 'resolved' | 'escalated';
    resolution_date?: string;
}
export interface SecurityAudit {
    audit_id: string;
    audit_type: 'access_control' | 'encryption' | 'retention' | 'compliance';
    scope: string;
    finding_count: number;
    critical_findings: number;
    compliance_score: number;
    auditor_id: string;
    audit_date: string;
    remediation_deadline: string;
}
declare class SecurityManager {
    private managerId;
    private policies;
    private incidents;
    private audits;
    constructor();
    private initializeDefaultPolicies;
    createPolicy(name: string, scope: 'researcher_data' | 'funding_records' | 'audit_logs' | 'payment_info', retentionDays: number, encryptionRequired: boolean, frameworks: string[]): DataProtectionPolicy;
    reportIncident(type: 'unauthorized_access' | 'data_breach' | 'policy_violation' | 'retention_violation', severity: 'critical' | 'high' | 'medium' | 'low', affectedParties: number, description: string, remediationPlan: string): PrivacyIncident;
    resolveIncident(incidentId: string): PrivacyIncident | null;
    conductAudit(auditType: 'access_control' | 'encryption' | 'retention' | 'compliance', scope: string, findingCount: number, criticalFindings: number, auditorId: string): SecurityAudit;
    getPolicy(scope: string): DataProtectionPolicy | undefined;
    getAllPolicies(): DataProtectionPolicy[];
    getOpenIncidents(): PrivacyIncident[];
    getCriticalIncidents(): PrivacyIncident[];
    getAudit(auditId: string): SecurityAudit | undefined;
    getAuditsByType(type: string): SecurityAudit[];
    getSecurityPosture(): {
        overall_compliance_score: number;
        critical_incidents: number;
        open_incidents: number;
        audit_coverage: string[];
        policies_count: number;
        compliance_gaps: string[];
    };
    getId(): string;
}
export declare function initializeSecurityManager(): SecurityManager;
export declare function getSecurityManager(): SecurityManager | null;
export declare const security: {
    initialize: typeof initializeSecurityManager;
    get: typeof getSecurityManager;
};
export interface PerformanceMetric {
    metric_id: string;
    layer_name: string;
    metric_type: 'latency' | 'throughput' | 'error_rate' | 'resource_usage';
    value: number;
    unit: string;
    threshold_warning: number;
    threshold_critical: number;
    status: 'healthy' | 'warning' | 'critical';
    timestamp: string;
}
export interface SystemAlert {
    alert_id: string;
    severity: 'info' | 'warning' | 'critical';
    affected_layer: string;
    message: string;
    triggered_at: string;
    acknowledged_at?: string;
    resolved_at?: string;
    root_cause?: string;
    remediation: string;
}
export interface HealthReport {
    report_id: string;
    timestamp: string;
    overall_status: 'healthy' | 'degraded' | 'critical';
    layer_statuses: Record<string, 'healthy' | 'warning' | 'critical'>;
    active_alerts: number;
    critical_alerts: number;
    uptime_percentage: number;
    response_time_ms: number;
    error_rate_percentage: number;
    resource_utilization: number;
}
declare class MonitoringSystem {
    private monitoringId;
    private metrics;
    private alerts;
    private healthReports;
    private startTime;
    constructor();
    recordMetric(layerName: string, metricType: 'latency' | 'throughput' | 'error_rate' | 'resource_usage', value: number, unit: string, thresholdWarning: number, thresholdCritical: number): PerformanceMetric;
    triggerAlert(severity: 'info' | 'warning' | 'critical', affectedLayer: string, message: string, remediation: string): SystemAlert;
    acknowledgeAlert(alertId: string): SystemAlert | null;
    resolveAlert(alertId: string, rootCause: string): SystemAlert | null;
    generateHealthReport(layerStatuses: Record<string, 'healthy' | 'warning' | 'critical'>): HealthReport;
    getMetricsForLayer(layerName: string): PerformanceMetric[];
    getActiveAlerts(): SystemAlert[];
    getCriticalAlerts(): SystemAlert[];
    getLatestHealthReport(): HealthReport | null;
    getSummary(): {
        total_metrics_recorded: number;
        total_alerts: number;
        active_alerts: number;
        critical_alerts_count: number;
        avg_uptime_percentage: number;
        system_age_hours: number;
        last_health_check: string;
    };
    getId(): string;
}
export declare function initializeMonitoringSystem(): MonitoringSystem;
export declare function getMonitoringSystem(): MonitoringSystem | null;
export declare const monitoring: {
    initialize: typeof initializeMonitoringSystem;
    get: typeof getMonitoringSystem;
};
export interface FeedbackSubmission {
    submission_id: string;
    submitter_id: string;
    feedback_type: 'process' | 'funding' | 'support' | 'technical' | 'communication';
    category: string;
    rating: number;
    message: string;
    submitted_at: string;
    anonymous: boolean;
    status: 'received' | 'reviewed' | 'addressed' | 'archived';
}
export interface ImprovementInitiative {
    initiative_id: string;
    title: string;
    description: string;
    source: 'feedback' | 'internal' | 'audit' | 'research';
    priority: 'critical' | 'high' | 'medium' | 'low';
    affected_layers: string[];
    status: 'proposed' | 'approved' | 'in_progress' | 'completed' | 'rejected';
    target_completion: string;
    owner_id: string;
    expected_impact: string;
}
export interface IterationCycle {
    cycle_id: string;
    cycle_number: number;
    start_date: string;
    end_date?: string;
    feedback_collected: number;
    improvements_implemented: number;
    performance_gains: Record<string, number>;
    satisfaction_change: number;
    status: 'in_progress' | 'completed';
}
declare class FeedbackManager {
    private managerId;
    private submissions;
    private initiatives;
    private cycles;
    private cycleNumber;
    constructor();
    private startNewCycle;
    submitFeedback(submitterId: string, feedbackType: 'process' | 'funding' | 'support' | 'technical' | 'communication', category: string, rating: number, message: string, anonymous?: boolean): FeedbackSubmission;
    reviewFeedback(submissionId: string): FeedbackSubmission | null;
    createInitiative(title: string, description: string, source: 'feedback' | 'internal' | 'audit' | 'research', priority: 'critical' | 'high' | 'medium' | 'low', affectedLayers: string[], ownerId: string, expectedImpact: string, targetCompletion?: string): ImprovementInitiative;
    approveInitiative(initiativeId: string): ImprovementInitiative | null;
    completeInitiative(initiativeId: string, performanceGains: Record<string, number>): ImprovementInitiative | null;
    endIterationCycle(satisfactionChange: number): IterationCycle | null;
    getFeedback(submissionId: string): FeedbackSubmission | undefined;
    getFeedbackByType(type: string): FeedbackSubmission[];
    getUnreviewedFeedback(): FeedbackSubmission[];
    getInitiative(initiativeId: string): ImprovementInitiative | undefined;
    getInitiativesByStatus(status: string): ImprovementInitiative[];
    getCurrentCycle(): IterationCycle | null;
    getAverageFeedbackRating(): number;
    getSummary(): {
        total_submissions: number;
        avg_rating: number;
        pending_review: number;
        total_initiatives: number;
        in_progress_initiatives: number;
        completed_initiatives: number;
        current_cycle_number: number;
        completed_cycles: number;
    };
    getId(): string;
}
export declare function initializeFeedbackManager(): FeedbackManager;
export declare function getFeedbackManager(): FeedbackManager | null;
export declare const feedback: {
    initialize: typeof initializeFeedbackManager;
    get: typeof getFeedbackManager;
};
export interface FairnessMetric {
    metric_id: string;
    metric_type: 'gender_parity' | 'institution_diversity' | 'geographic_distribution' | 'career_stage';
    dimension: string;
    group_a: {
        name: string;
        count: number;
        funding_usd: number;
    };
    group_b: {
        name: string;
        count: number;
        funding_usd: number;
    };
    disparity_ratio: number;
    is_balanced: boolean;
    measured_at: string;
}
export interface BiasAlert {
    alert_id: string;
    alert_type: 'gender_bias' | 'institution_bias' | 'geographic_bias' | 'career_stage_bias';
    severity: 'low' | 'medium' | 'high' | 'critical';
    affected_group: string;
    disparity_percent: number;
    evidence: string;
    recommended_action: string;
    status: 'open' | 'investigating' | 'addressed' | 'false_positive';
    detected_at: string;
}
export interface EquityAudit {
    audit_id: string;
    audit_date: string;
    fairness_scores: Record<string, number>;
    overall_equity_score: number;
    disparities_found: number;
    critical_biases: number;
    recommendations: string[];
    auditor_notes: string;
}
declare class FairnessMonitor {
    private monitorId;
    private metrics;
    private alerts;
    private audits;
    private disparityThreshold;
    constructor();
    measureFairnessMetric(metricType: 'gender_parity' | 'institution_diversity' | 'geographic_distribution' | 'career_stage', dimension: string, groupAName: string, groupACount: number, groupAFunding: number, groupBName: string, groupBCount: number, groupBFunding: number): FairnessMetric;
    private raiseAlert;
    investigateAlert(alertId: string): BiasAlert | null;
    addressAlert(alertId: string, isFalsePositive?: boolean): BiasAlert | null;
    conductEquityAudit(auditorNotes: string): EquityAudit;
    getMetric(metricId: string): FairnessMetric | undefined;
    getMetricsByDimension(dimension: string): FairnessMetric[];
    getOpenAlerts(): BiasAlert[];
    getCriticalAlerts(): BiasAlert[];
    getLatestEquityAudit(): EquityAudit | null;
    getSummary(): {
        total_metrics: number;
        balanced_metrics: number;
        open_bias_alerts: number;
        critical_biases: number;
        overall_equity_score: number;
        disparities_addressed: number;
    };
    getId(): string;
}
export declare function initializeFairnessMonitor(): FairnessMonitor;
export declare function getFairnessMonitor(): FairnessMonitor | null;
export declare const fairness: {
    initialize: typeof initializeFairnessMonitor;
    get: typeof getFairnessMonitor;
};
export interface ComplianceDocument {
    doc_id: string;
    document_type: 'annual_report' | 'audit_report' | 'tax_filing' | 'sec_filing' | 'privacy_notice';
    title: string;
    content_sections: string[];
    generated_date: string;
    fiscal_period: string;
    compliance_frameworks: string[];
    signed_by: string;
    digital_signature: string;
    status: 'draft' | 'final' | 'submitted';
}
export interface DataExport {
    export_id: string;
    export_type: 'funding_data' | 'researcher_data' | 'audit_trail' | 'impact_metrics';
    format: 'csv' | 'json' | 'xml' | 'parquet';
    included_fields: string[];
    record_count: number;
    file_size_mb: number;
    created_at: string;
    expires_at: string;
    access_log: {
        accessed_by: string;
        accessed_at: string;
    }[];
}
export interface RegulatoryReport {
    report_id: string;
    regulator: string;
    report_type: string;
    filing_deadline: string;
    status: 'scheduled' | 'in_progress' | 'submitted' | 'acknowledged';
    key_metrics: Record<string, number>;
    compliance_certifications: string[];
    submission_date?: string;
    confirmation_number?: string;
}
declare class ExportManager {
    private managerId;
    private documents;
    private exports;
    private reports;
    constructor();
    generateComplianceDocument(docType: 'annual_report' | 'audit_report' | 'tax_filing' | 'sec_filing' | 'privacy_notice', title: string, sections: string[], fiscalPeriod: string, frameworks: string[], signedBy: string): ComplianceDocument;
    finalizeDocument(docId: string): ComplianceDocument | null;
    submitDocument(docId: string): ComplianceDocument | null;
    createDataExport(exportType: 'funding_data' | 'researcher_data' | 'audit_trail' | 'impact_metrics', format: 'csv' | 'json' | 'xml' | 'parquet', fields: string[], recordCount: number, fileSizeMb: number): DataExport;
    logExportAccess(exportId: string, accessedBy: string): DataExport | null;
    createRegulatoryReport(regulator: string, reportType: string, filingDeadline: string, keyMetrics: Record<string, number>, certifications: string[]): RegulatoryReport;
    submitRegulatoryReport(reportId: string, confirmationNumber: string): RegulatoryReport | null;
    getDocument(docId: string): ComplianceDocument | undefined;
    getDocumentsByType(type: string): ComplianceDocument[];
    getExport(exportId: string): DataExport | undefined;
    getReport(reportId: string): RegulatoryReport | undefined;
    getPendingFilings(): RegulatoryReport[];
    getSummary(): {
        total_documents: number;
        submitted_documents: number;
        total_exports: number;
        total_regulatory_reports: number;
        pending_filings: number;
    };
    getId(): string;
}
export declare function initializeExportManager(): ExportManager;
export declare function getExportManager(): ExportManager | null;
export declare const exportData: {
    initialize: typeof initializeExportManager;
    get: typeof getExportManager;
};
export interface ErrorPattern {
    pattern_id: string;
    error_type: string;
    layers_affected: string[];
    dimensions_involved: string[];
    occurrence_count: number;
    first_occurred: string;
    last_occurred: string;
    root_cause: string;
    prevention_strategy: string;
    success_rate: number;
}
export interface DimensionalInsight {
    insight_id: string;
    dimensions: string[];
    pattern: string;
    confidence: number;
    actionable_recommendation: string;
    expected_improvement: number;
}
export interface SelfLearningCycle {
    cycle_id: string;
    cycle_number: number;
    start_date: string;
    end_date?: string;
    errors_analyzed: number;
    patterns_discovered: number;
    insights_generated: number;
    accuracy_improvement: number;
    cross_layer_correlations: number;
    status: 'in_progress' | 'completed';
}
declare class SynthesisEngine {
    private engineId;
    private errorPatterns;
    private insights;
    private cycles;
    private cycleNumber;
    constructor();
    private startNewCycle;
    analyzeError(errorType: string, affectedLayers: string[], dimensions: string[], rootCause: string): ErrorPattern;
    discoverInsight(dimensionsCombination: string[], pattern: string, recommendation: string, expectedImprovement: number): DimensionalInsight;
    fuseAllDimensions(): {
        meta_patterns: string[];
        system_weaknesses: string[];
        optimization_opportunities: string[];
        predicted_future_errors: string[];
    };
    getErrorPattern(patternId: string): ErrorPattern | undefined;
    getTopErrorPatterns(limit?: number): ErrorPattern[];
    getInsights(minConfidence?: number): DimensionalInsight[];
    endLearningCycle(accuracyImprovement: number): SelfLearningCycle | null;
    getSummary(): {
        total_error_patterns: number;
        recurring_patterns: number;
        total_insights: number;
        high_confidence_insights: number;
        system_weaknesses: number;
        optimization_opportunities: number;
        current_cycle: number;
        avg_accuracy_improvement: number;
    };
    getId(): string;
}
export declare function initializeSynthesisEngine(): SynthesisEngine;
export declare function getSynthesisEngine(): SynthesisEngine | null;
export declare const synthesis: {
    initialize: typeof initializeSynthesisEngine;
    get: typeof getSynthesisEngine;
};
export interface DeploymentConfig {
    config_id: string;
    environment: 'development' | 'staging' | 'production';
    region: string;
    instance_count: number;
    replica_count: number;
    backup_frequency: string;
    failover_enabled: boolean;
    scaling_policy: 'manual' | 'auto' | 'predictive';
    deployment_date: string;
    status: 'active' | 'preparing' | 'rolling_update' | 'maintenance';
}
export interface ContinuousLearningSchedule {
    schedule_id: string;
    frequency: 'every_hour' | 'daily' | 'weekly' | 'monthly';
    learning_cycle_duration_hours: number;
    error_analysis_enabled: boolean;
    pattern_discovery_enabled: boolean;
    optimization_enabled: boolean;
    auto_implementation: boolean;
    rollback_on_failure: boolean;
    next_cycle: string;
    last_cycle_results: {
        patterns_found: number;
        optimizations_applied: number;
        improvement_percent: number;
    };
}
export interface AutonomousGovernance {
    governance_id: string;
    mode: 'advisory' | 'semi_autonomous' | 'fully_autonomous';
    decision_types_automated: string[];
    approval_threshold_usd: number;
    governance_council_size: number;
    voting_quorum_percent: number;
    emergency_override_available: boolean;
    audit_trail_enabled: boolean;
    decision_reversal_window_hours: number;
    status: 'active' | 'learning' | 'maintenance';
}
declare class ProductionManager {
    private managerId;
    private deploymentConfig;
    private learningSchedule;
    private autonomousGovernance;
    private deploymentHistory;
    private learningCycles;
    private governanceDecisions;
    constructor();
    initializeProduction(region: string, instanceCount: number, replicaCount: number): DeploymentConfig;
    setupContinuousLearning(frequency: 'every_hour' | 'daily' | 'weekly' | 'monthly', durationHours: number, autoImplement?: boolean): ContinuousLearningSchedule;
    configureAutonomousGovernance(mode: 'advisory' | 'semi_autonomous' | 'fully_autonomous', approvalThreshold: number, councilSize: number): AutonomousGovernance;
    recordAutonomousDecision(decisionType: string, payload: Record<string, any>, confidence: number): {
        decision_id: string;
        status: 'approved' | 'requires_review';
    };
    executeLearningCycle(): {
        cycle_id: string;
        patterns: number;
        optimizations: number;
        improvement: number;
    };
    private getCycleInterval;
    performRollingUpdate(newVersion: string): {
        update_id: string;
        instances_updating: number;
        status: string;
    };
    getDeploymentStatus(): {
        environment: string;
        region: string;
        instances: number;
        replicas: number;
        status: string;
        uptime_percent: number;
    };
    getGovernanceStatus(): {
        mode: string;
        automated_decisions_count: number;
        council_size: number;
        override_available: boolean;
    };
    getLearningStatus(): {
        frequency: string;
        last_cycle_patterns: number;
        last_cycle_optimizations: number;
        last_cycle_improvement: number;
        total_cycles: number;
    };
    getSummary(): {
        deployment_status: string;
        learning_active: boolean;
        governance_mode: string;
        total_autonomous_decisions: number;
        system_health: number;
        ready_for_production: boolean;
    };
    getId(): string;
}
export declare function initializeProductionManager(): ProductionManager;
export declare function getProductionManager(): ProductionManager | null;
export declare const production: {
    initialize: typeof initializeProductionManager;
    get: typeof getProductionManager;
};
export interface DimensionalReasoningState {
    state_id: string;
    active_dimensions: string[];
    dimension_interactions: Map<string, Map<string, number>>;
    strategy_effectiveness: Record<string, number>;
    edge_case_patterns: string[];
    boundary_conditions: string[];
    reasoning_depth: number;
    confidence_in_current_strategy: number;
    next_perspective_shift: string;
}
export interface AdaptiveStrategy {
    strategy_id: string;
    name: string;
    applicable_dimensions: string[];
    success_rate: number;
    failure_cases: string[];
    learning_rate: number;
    confidence: number;
    alternative_strategies: string[];
    trigger_conditions: string[];
    last_adapted: string;
}
export interface SelfAwarenessMetrics {
    metric_id: string;
    self_model_accuracy: number;
    reasoning_bias: string[];
    knowledge_gaps: string[];
    learning_asymmetries: Record<string, number>;
    perspective_shifts_handled: number;
    edge_cases_discovered: number;
    strategy_mutations: number;
    meta_learning_progress: number;
}
declare class ConsciousnessEngine {
    private engineId;
    private reasoningState;
    private strategies;
    private selfAwareness;
    private perspectiveShifts;
    private boundaryConditions;
    private edgeCases;
    constructor();
    reasoneAcrossDimensions(query: string, relevantDimensions: string[]): {
        conclusion: string;
        confidence: number;
        reasoning_path: string[];
        alternative_conclusions: string[];
    };
    metaLearn(recentStrategies: string[], successRates: number[]): {
        improved_strategy: string;
        learning_rate_adjustment: number;
        new_insight: string;
    };
    handlePerspectiveShift(shiftType: string, context: Record<string, any>): {
        new_perspective: string;
        reasoning_adjusted: boolean;
        strategy_updated: boolean;
        impact_assessment: string;
    };
    discoverEdgeCase(edgeCaseDescription: string, failedStrategy: string, successfulWorkaround: string): void;
    evaluateReasoningQuality(): {
        reasoning_quality: number;
        known_biases: string[];
        recommended_checks: string[];
        confidence_calibration: number;
    };
    getConsciousnessState(): {
        self_awareness_score: number;
        active_dimensions: number;
        reasoning_depth: number;
        perspective_shifts: number;
        edge_cases_known: number;
        meta_learning_progress: number;
        next_learning_focus: string;
    };
    getId(): string;
}
export declare function initializeConsciousnessEngine(): ConsciousnessEngine;
export declare function getConsciousnessEngine(): ConsciousnessEngine | null;
export declare const consciousnessEngine: {
    initialize: typeof initializeConsciousnessEngine;
    get: typeof getConsciousnessEngine;
};
export interface AgentLearning {
    learning_id: string;
    agent_id: string;
    discovery: string;
    confidence: number;
    applicability: string[];
    shared_at: string;
    adoption_count: number;
}
export interface EmergentStrategy {
    strategy_id: string;
    discovered_by: string[];
    strategy_description: string;
    effectiveness: number;
    emergent_properties: string[];
    requires_coordination: boolean;
    coordination_cost: number;
    expected_improvement: number;
}
export interface CollectiveMemory {
    memory_id: string;
    shared_insights: Map<string, AgentLearning>;
    emergent_strategies: Map<string, EmergentStrategy>;
    cross_agent_patterns: string[];
    collective_knowledge_base: Record<string, any>;
    synchronization_timestamp: string;
}
declare class CollectiveIntelligence {
    private collectiveId;
    private agents;
    private sharedLearnings;
    private emergentStrategies;
    private collectiveMemory;
    private synchronizationFrequency;
    constructor();
    private initializeAgents;
    shareAgentLearning(agentId: string, discovery: string, confidence: number, applicableAgents: string[]): AgentLearning;
    discoverEmergentStrategy(participatingAgents: string[], strategyDescription: string, components: {
        agent: string;
        contribution: string;
    }[]): EmergentStrategy;
    synchronizeCollective(): {
        agents_synchronized: number;
        learnings_shared: number;
        strategies_emerged: number;
        collective_knowledge_gain: number;
    };
    private discoverCrossAgentPatterns;
    getCollectiveIntelligenceMetrics(): {
        total_agents: number;
        total_shared_learnings: number;
        emergent_strategies_count: number;
        average_learning_adoption: number;
        collective_knowledge_size: number;
        synchronization_lag_ms: number;
        emergent_gain_vs_individual: number;
    };
    getCollectiveRecommendations(): {
        recommendation_id: string;
        recommended_strategy: string;
        supporting_agents: number;
        expected_impact: number;
        coordination_required: boolean;
    }[];
    getId(): string;
}
export declare function initializeCollectiveIntelligence(): CollectiveIntelligence;
export declare function getCollectiveIntelligence(): CollectiveIntelligence | null;
export declare const collectiveSystem: {
    initialize: typeof initializeCollectiveIntelligence;
    get: typeof getCollectiveIntelligence;
};
export interface CausalityChain {
    chain_id: string;
    events: {
        event_id: string;
        timestamp: string;
        event_type: string;
        layer: string;
        value: number | string;
        context: Record<string, any>;
    }[];
    root_cause: string;
    effect: string;
    confidence: number;
    predictive_value: number;
    chain_age_hours: number;
}
export interface TemporalPrediction {
    prediction_id: string;
    predicted_event: string;
    predicted_layer: string;
    probability: number;
    time_horizon_hours: number;
    causal_evidence: CausalityChain[];
    confidence: number;
    actual_outcome?: string;
    was_correct?: boolean;
}
export interface EdgeCasePattern {
    pattern_id: string;
    description: string;
    dimensions_involved: string[];
    first_observed: string;
    observation_count: number;
    base_probability: number;
    conditional_probability: number;
    trigger_conditions: string[];
    mitigation_strategy: string;
    discovered_by_agent: string;
}
declare class TemporalCausalityEngine {
    private engineId;
    private causalityChains;
    private temporalPredictions;
    private edgeCasePatterns;
    private eventTimeline;
    private predictionAccuracy;
    private correctPredictions;
    private totalPredictions;
    constructor();
    discoverCausalityChain(events: Array<{
        type: string;
        timestamp: string;
        layer: string;
        value: any;
    }>): CausalityChain;
    predictFutureEvent(currentState: Record<string, any>, lookbackHours?: number): TemporalPrediction | null;
    discoverEdgeCase(description: string, dimensionsInvolved: string[], triggerConditions: string[], mitigationStrategy: string): EdgeCasePattern;
    analyzeRootCause(symptom: string, affectedLayer: string): {
        root_cause: string;
        causality_chain: CausalityChain | null;
        contributing_factors: string[];
        recommended_action: string;
    };
    recordPredictionOutcome(predictionId: string, actualOutcome: string, wasCorrect: boolean): void;
    getTemporalPatterns(): {
        pattern_type: string;
        frequency: number;
        affected_layers: string[];
        typical_duration_hours: number;
        predictability: number;
    }[];
    private computePredictiveValue;
    private analyzePatterns;
    private computePredictionProbability;
    getTemporalMetrics(): {
        total_causality_chains: number;
        total_predictions: number;
        prediction_accuracy: number;
        edge_cases_discovered: number;
        temporal_patterns: number;
        predictive_horizon: number;
    };
    getId(): string;
}
export declare function initializeTemporalEngine(): TemporalCausalityEngine;
export declare function getTemporalEngine(): TemporalCausalityEngine | null;
export declare const temporal: {
    initialize: typeof initializeTemporalEngine;
    get: typeof getTemporalEngine;
};
export interface TheoremApplication {
    application_id: string;
    theorem_name: string;
    theorem_id: string;
    applied_to_layer: string;
    optimization_type: string;
    improvement_metric: string;
    baseline_value: number;
    improved_value: number;
    improvement_percent: number;
    applied_at: string;
}
export interface OptimizationStrategy {
    strategy_id: string;
    name: string;
    theorems_used: string[];
    target_dimensions: string[];
    computational_approach: string;
    expected_improvement: number;
    current_status: string;
}
export interface TheoremInsight {
    insight_id: string;
    theorem: string;
    insight_description: string;
    applicable_to: string[];
    computational_value: number;
    discovered_at: string;
}
declare class TheoremDrivenOptimizer {
    private optimizerId;
    private applications;
    private strategies;
    private insights;
    private theoremRegistry;
    constructor();
    private initializeTheorems;
    applyRiemannForDistribution(dataPoints: number[]): TheoremApplication;
    applyGoldbachForAllocation(totalAmount: number): TheoremApplication;
    applyPoincaréForDimensionality(dimensionCount: number): TheoremApplication;
    applyPvNPForAlgorithmics(problemSize: number): OptimizationStrategy;
    applyHodgeForDimensionalAnalysis(dimensions: string[]): TheoremApplication;
    applyNavierStokesForFlowOptimization(): OptimizationStrategy;
    discoverTheoremInsights(): TheoremInsight[];
    getOptimizationImpact(): {
        total_applications: number;
        average_improvement: number;
        total_improvement_value: number;
        strategies_active: number;
        insights_discovered: number;
        theorems_applied: number;
    };
    private findPrimes;
    private goldbachDecompose;
    getId(): string;
}
export declare function initializeTheoremOptimizer(): TheoremDrivenOptimizer;
export declare function getTheoremOptimizer(): TheoremDrivenOptimizer | null;
export declare const theorems: {
    initialize: typeof initializeTheoremOptimizer;
    get: typeof getTheoremOptimizer;
};
export interface DimensionalState {
    dimension: string;
    current_value: number;
    target_value: number;
    trend: number;
    dependencies: string[];
    sensitivity: number;
}
export interface DimensionalInteraction {
    dimension_a: string;
    dimension_b: string;
    interaction_strength: number;
    synergy_multiplier: number;
    conflict_resolution: string;
}
export interface HolisticOptimization {
    optimization_id: string;
    configuration: Record<string, number>;
    global_score: number;
    dimension_scores: Record<string, number>;
    active_synergies: DimensionalInteraction[];
    tradeoff_resolutions: Record<string, string>;
    equilibrium_achieved: boolean;
    created_at: string;
}
export interface DimensionalSynergy {
    synergy_id: string;
    dimensions_involved: string[];
    synergy_description: string;
    combined_improvement: number;
    individual_improvements: Record<string, number>;
    amplification_factor: number;
}
declare class HolisticOptimizer {
    private optimizerId;
    private dimensions;
    private interactions;
    private optimizations;
    private synergies;
    private currentState;
    constructor();
    private initializeDimensions;
    private buildInteractionMatrix;
    private computeInteractionStrength;
    private computeSynergyMultiplier;
    performHolisticOptimization(): HolisticOptimization;
    discoverSynergies(): DimensionalSynergy[];
    private resolveTradeoffs;
    getOptimizationSummary(): {
        dimensions_optimized: number;
        global_score: number;
        synergies_discovered: number;
        tradeoffs_resolved: number;
        equilibrium_state: boolean;
        recommended_actions: string[];
    };
    getId(): string;
}
export declare function initializeHolisticOptimizer(): HolisticOptimizer;
export declare function getHolisticOptimizer(): HolisticOptimizer | null;
export declare const holistic: {
    initialize: typeof initializeHolisticOptimizer;
    get: typeof getHolisticOptimizer;
};
export interface OrganizationNode {
    node_id: string;
    organization_name: string;
    system_type: string;
    global_score: number;
    dimensions: Record<string, number>;
    synergies: string[];
    causality_chains: number;
    theorem_applications: string[];
}
export interface FederatedLearning {
    learning_id: string;
    originated_from: string;
    learning_content: string;
    applicability: string[];
    adoption_count: number;
    confidence: number;
    global_impact: number;
}
export interface CausalChainSharing {
    chain_id: string;
    discovered_by: string;
    description: string;
    shared_with: string[];
    adoption_count: number;
    cross_domain_value: number;
}
export interface FederatedSynergy {
    synergy_id: string;
    synergy_name: string;
    organizations_involved: string[];
    synergy_strength: number;
    combined_improvement: number;
    example: string;
}
export interface UnifiedOptimization {
    optimization_id: string;
    global_configuration: Record<string, number>;
    per_organization_config: Record<string, Record<string, number>>;
    ecosystem_health_score: number;
    fairness_across_orgs: number;
    participating_organizations: number;
    created_at: string;
}
declare class FederationCoordinator {
    private federationId;
    private nodes;
    private federatedLearnings;
    private causalChainSharing;
    private federatedSynergies;
    private synchronizationFrequency;
    private lastSyncTime;
    constructor();
    private initializeOrganizations;
    private initializeDimensionsForOrg;
    private getTheoremApplicationsForOrg;
    shareFederatedLearning(originOrg: string, learning: string, applicableOrgs: string[]): FederatedLearning;
    shareCausalChains(discoveredBy: string, chainDescription: string): CausalChainSharing;
    discoverCrossOrgSynergies(): FederatedSynergy[];
    performFederatedOptimization(): UnifiedOptimization;
    synchronizeFederation(): {
        learnings_shared: number;
        chains_shared: number;
        synergies_discovered: number;
        timestamp: string;
    };
    getFederationMetrics(): {
        total_organizations: number;
        average_organization_score: number;
        federated_learnings: number;
        shared_causal_chains: number;
        cross_org_synergies: number;
        ecosystem_health: number;
        fairness_score: number;
        knowledge_flow_volume: number;
    };
    getId(): string;
}
export declare function initializeFederation(): FederationCoordinator;
export declare function getFederation(): FederationCoordinator | null;
export declare const federation: {
    initialize: typeof initializeFederation;
    get: typeof getFederation;
};
export interface CybersecurityGrant {
    grant_id: string;
    research_area: string;
    threat_level: number;
    impact_potential: number;
    funding_amount: number;
    research_team: string;
    timeline_months: number;
}
export interface ThreatPrediction {
    threat_id: string;
    threat_type: string;
    probability: number;
    time_to_occurrence_months: number;
    required_research: string[];
    funding_recommendation: number;
    discovered_at: string;
}
export interface ZeroTrustAllocation {
    allocation_id: string;
    researcher_id: string;
    funding_tranches: Array<{
        amount: number;
        after_milestone: string;
    }>;
    cryptographic_proof_required: boolean;
    multi_sig_requirement: number;
    security_score: number;
}
declare class CybersecurityFundingEngine {
    private engineId;
    private grants;
    private threatPredictions;
    private zeroTrustAllocations;
    constructor();
    predictThreatsAndFund(): ThreatPrediction[];
    fundPostQuantumCrypto(): CybersecurityGrant;
    implementZeroTrust(researcherId: string): ZeroTrustAllocation;
    getId(): string;
}
export declare function initializeCybersecurity(): CybersecurityFundingEngine;
export declare function getCybersecurity(): CybersecurityFundingEngine | null;
export declare const cybersecurity: {
    initialize: typeof initializeCybersecurity;
    get: typeof getCybersecurity;
};
export interface BiotechResearch {
    research_id: string;
    area: string;
    stage: string;
    patients_impacted: number;
    funding_amount: number;
    timeline_months: number;
    success_probability: number;
}
export interface ClinicalTrial {
    trial_id: string;
    drug_name: string;
    indication: string;
    phase: number;
    patients_enrolled: number;
    success_rate: number;
    regulatory_approval_probability: number;
    funding_needed: number;
}
export interface BiodiversityAndAgriculture {
    project_id: string;
    focus: string;
    regions_benefited: string[];
    farmers_impacted: number;
    food_security_improvement: number;
    funding_amount: number;
}
declare class BiotechnologyFundingEngine {
    private engineId;
    private researches;
    private trials;
    private biodiversity;
    constructor();
    fundGeneTherapy(patientGroup: string): BiotechResearch;
    fundDrugDiscovery(target: string): BiotechResearch;
    fundClinicalTrial(drugName: string, phase: number): ClinicalTrial;
    fundSustainableAgriculture(): BiodiversityAndAgriculture;
    getId(): string;
}
export declare function initializeBiotechnology(): BiotechnologyFundingEngine;
export declare function getBiotechnology(): BiotechnologyFundingEngine | null;
export declare const biotechnology: {
    initialize: typeof initializeBiotechnology;
    get: typeof getBiotechnology;
};
export interface ResearchDomain {
    domain_id: string;
    name: string;
    category: string;
    funding_pool_usd: number;
    active_projects: number;
    breakthrough_probability: number;
    quantum_acceleration_factor: number;
    ftl_prediction_enabled: boolean;
}
export interface QuantumAcceleration {
    acceleration_id: string;
    domain: string;
    classical_timeline_months: number;
    quantum_timeline_months: number;
    speedup_factor: number;
    research_approach: string;
    computing_resources_needed: string;
}
export interface FTLPrediction {
    prediction_id: string;
    predicted_breakthrough: string;
    domain: string;
    probability: number;
    months_until_discovery: number;
    advance_funding_recommendation: number;
    causal_chain_inference: string[];
    currently_unknown_by_researchers: boolean;
}
declare class UniversalDomainFunder {
    private funderId;
    private domains;
    private quantumAccelerations;
    private ftlPredictions;
    constructor();
    private initializeAllDomains;
    applyQuantumAcceleration(domainName: string): QuantumAcceleration;
    predictFTLBreakthrough(domain: string): FTLPrediction;
    allocateUniversal(): Record<string, number>;
    getId(): string;
}
export declare function initializeUniversal(): UniversalDomainFunder;
export declare function getUniversal(): UniversalDomainFunder | null;
export declare const universal: {
    initialize: typeof initializeUniversal;
    get: typeof getUniversal;
};
export interface LayerAnalysis {
    layer_number: number;
    layer_name: string;
    dependencies: number[];
    downstream: number[];
    dimensionality: number;
    information_flow: number;
    emergence_level: number;
    recursion_depth: number;
}
export interface SequencePattern {
    pattern_id: string;
    pattern_type: string;
    description: string;
    layers_involved: number[];
    mathematical_form: string;
    emergence_factor: number;
}
export interface DimensionalScaling {
    layer_group: string;
    layer_count: number;
    dimension_count: number;
    dimension_per_layer: number;
    scaling_law: string;
    complexity_growth: number;
}
export interface OptimizationLandscape {
    landscape_id: string;
    layer_range: string;
    local_optima_count: number;
    global_optimum_location: number;
    basin_depth: number;
    escape_velocity: number;
}
export interface EmergenceAnalysis {
    emergence_id: string;
    layer_range: string;
    properties_at_start: string[];
    properties_at_end: string[];
    novel_properties: string[];
    emergence_threshold: number;
    complexity_multiplier: number;
}
export interface FractalStructure {
    fractal_id: string;
    level: number;
    self_similarity: number;
    scaling_factor: number;
    dimension_invariance: string[];
    universal_properties: string[];
}
export interface CausalDependencyGraph {
    graph_id: string;
    total_layers: number;
    total_dependencies: number;
    dependency_matrix: Record<number, number[]>;
    critical_path: number[];
    critical_path_length: number;
    bottleneck_layers: number[];
    parallel_execution_groups: number[];
}
declare class SequenceResearcher {
    private researcherId;
    private layerAnalyses;
    private patterns;
    private dimensionalScaling;
    private optimizationLandscape;
    private emergenceAnalyses;
    private fractalStructures;
    private causalGraph;
    constructor();
    analyzeLayerStructure(): LayerAnalysis[];
    private computeRecursionDepth;
    discoverSequencePatterns(): SequencePattern[];
    analyzeDimensionalScaling(): DimensionalScaling[];
    analyzeOptimizationLandscape(): OptimizationLandscape[];
    analyzeEmergence(): EmergenceAnalysis[];
    analyzeFractalStructure(): FractalStructure[];
    buildCausalGraph(): CausalDependencyGraph;
    private findCriticalPath;
    private findBottlenecks;
    private findParallelGroups;
    getId(): string;
}
export declare function initializeSequenceResearch(): SequenceResearcher;
export declare function getSequenceResearch(): SequenceResearcher | null;
export declare const research: {
    initialize: typeof initializeSequenceResearch;
    get: typeof getSequenceResearch;
};
export interface FundingMetrics {
    dispatch: {
        cycles_run: number;
        theorems_matched: number;
        allocations_created: number;
        capital_deployed_usd: number;
    };
    verification: {
        theorems_verified: number;
        gates_passed: number;
        gates_failed: number;
        verification_success_rate: number;
    };
    compliance: {
        audits_completed: number;
        compliance_passed: number;
        compliance_failed: number;
        compliance_rate: number;
    };
    payments: {
        transactions_total: number;
        confirmed: number;
        pending: number;
        failed: number;
        total_processed_usd: number;
    };
    multisig: {
        gates_total: number;
        approved: number;
        rejected: number;
        average_signatures_per_gate: number;
    };
    appeals: {
        appeals_filed: number;
        approved: number;
        rejected: number;
        approval_rate: number;
    };
}
export interface FundingDashboard {
    snapshot_time: string;
    metrics: FundingMetrics;
    health_score: number;
    bottleneck: string;
    recommendations: string[];
    dashboard_seal: string;
}
export declare class AnalyticsDashboard {
    private dashboardId;
    private lastSnapshot;
    constructor();
    computeHealthScore(metrics: FundingMetrics): number;
    identifyBottleneck(metrics: FundingMetrics): string;
    generateRecommendations(metrics: FundingMetrics): string[];
    takeSnapshot(): FundingDashboard;
    getLatestSnapshot(): FundingDashboard | null;
    getId(): string;
}
export declare function initializeAnalyticsDashboard(): AnalyticsDashboard;
export declare function getAnalyticsDashboard(): AnalyticsDashboard | null;
export declare const fundingAnalytics: {
    initialize: typeof initializeAnalyticsDashboard;
    get: typeof getAnalyticsDashboard;
    takeSnapshot: () => FundingDashboard;
};
export declare const ENDOWMENT_LAYERS: {
    readonly dispatch: readonly ["endowment", "dispatch", "agent"];
    readonly execution: readonly ["verify", "compliance", "payment", "multisig", "appeals", "researcher", "fraud", "recovery", "ledger", "analytics"];
    readonly governance: readonly ["stakeholder", "events", "pools", "milestones", "reporting", "orchestrator"];
    readonly intelligence: readonly ["impact", "incentives", "portfolio", "predict", "sustainability", "integration"];
    readonly control: readonly ["benchmark", "transparency", "risk", "governance", "pricing"];
    readonly quality: readonly ["reproducibility", "knowledge", "collaboration"];
    readonly research: readonly ["fields", "archive", "mentorship"];
    readonly commercialization: readonly ["patents", "outreach", "security"];
    readonly operations: readonly ["monitoring", "feedback", "fairness", "export"];
    readonly domains: readonly ["cybersecurity", "biotechnology", "universal"];
    readonly meta: readonly ["synthesis", "production", "consciousness", "collective", "temporal", "theorems", "holistic", "federation", "research"];
};
export declare const TOTAL_LAYERS = 53;
export declare const TOTAL_DIMENSIONS = 27;
export declare const PRODUCTION_READY = true;
export declare const CONTINUOUS_LEARNING = true;
export declare const AUTONOMOUS_GOVERNANCE = true;
export declare const SELF_AWARE = true;
export declare const MULTI_AGENT_COORDINATION = true;
export declare const TEMPORAL_REASONING = true;
export declare const THEOREM_OPTIMIZATION = true;
export declare const HOLISTIC_OPTIMIZATION = true;
export declare const CROSS_ORGANIZATIONAL_FEDERATION = true;
export declare const UNIVERSAL_DOMAIN_COVERAGE = true;
export declare const QUANTUM_ACCELERATION = true;
export declare const FTL_PREDICTION = true;
export declare const SELF_ANALYZING = true;
export declare const endowment: {
    registry: FundingSource[];
    bind: typeof bindTheoremsToFunding;
    fundingForRay: typeof fundingForRay;
    raysBySource: typeof raysByFundingSource;
    root: typeof endowmentRoot;
    statement: typeof endowmentStatement;
    rays: readonly [{
        readonly ray: 0;
        readonly glyph: "Ⰰ";
        readonly nameEn: "Origin";
        readonly nameBg: "Произход";
        readonly domain: "origin";
        readonly hue: 0;
    }, {
        readonly ray: 1;
        readonly glyph: "Ⰲ";
        readonly nameEn: "Proof";
        readonly nameBg: "Доказателства";
        readonly domain: "expression";
        readonly hue: 51;
    }, {
        readonly ray: 2;
        readonly glyph: "Ⰴ";
        readonly nameEn: "Explore";
        readonly nameBg: "Изследване";
        readonly domain: "knowledge";
        readonly hue: 102;
    }, {
        readonly ray: 3;
        readonly glyph: "Ⰶ";
        readonly nameEn: "Learn";
        readonly nameBg: "Обучение";
        readonly domain: "nature";
        readonly hue: 154;
    }, {
        readonly ray: 4;
        readonly glyph: "Ⰹ";
        readonly nameEn: "Apps";
        readonly nameBg: "Приложения";
        readonly domain: "computation";
        readonly hue: 205;
    }, {
        readonly ray: 5;
        readonly glyph: "Ⰿ";
        readonly nameEn: "Frontier";
        readonly nameBg: "Граници";
        readonly domain: "geometry";
        readonly hue: 257;
    }, {
        readonly ray: 6;
        readonly glyph: "Ⱄ";
        readonly nameEn: "Reference";
        readonly nameBg: "Справочник";
        readonly domain: "language";
        readonly hue: 308;
    }];
    sources: {
        cmi: FundingSource;
        nsf: FundingSource;
        epsrc: FundingSource;
        simons: FundingSource;
        leverhulme: FundingSource;
    };
};
export {};
