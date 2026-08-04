// Multi-Sig Gates — distributed verification before fund release
// Requires N-of-M signatures for large/sensitive transfers

import { toUuid, merkleFold } from '../../../0'

export interface Signer {
  signer_id: string
  name: string
  role: 'oracle' | 'auditor' | 'treasurer'
  public_key: string
}

export interface MultiSigSignature {
  transaction_id: string
  signer_id: string
  timestamp: string
  signature: string
}

export interface MultiSigGate {
  gate_id: string
  transaction_id: string
  amount_usd: number
  required_signatures: number
  signers: Signer[]
  signatures: Map<string, MultiSigSignature>
  gate_seal: string
  status: 'open' | 'approved' | 'rejected'
}

// Multi-sig authority state
class MultiSigAuthority {
  private authorityId: string
  private signers: Map<string, Signer> = new Map()
  private gates: Map<string, MultiSigGate> = new Map()
  private signatureThresholds: Map<string, number> = new Map() // amount -> required sigs

  constructor() {
    this.authorityId = toUuid('authority:multi-sig-gates')

    // Initialize thresholds: higher amounts require more signatures
    this.signatureThresholds.set('small', 1) // < 100K
    this.signatureThresholds.set('medium', 2) // 100K - 500K
    this.signatureThresholds.set('large', 3) // > 500K
  }

  // Register signer
  registerSigner(name: string, role: 'oracle' | 'auditor' | 'treasurer'): Signer {
    const signerId = toUuid(`signer:${name}:${role}`)
    const signer: Signer = {
      signer_id: signerId,
      name,
      role,
      public_key: toUuid(`pubkey:${signerId}`)
    }

    this.signers.set(signer.signer_id, signer)
    return signer
  }

  // Get required signatures for amount
  getRequiredSignatures(amountUsd: number): number {
    if (amountUsd < 100000) return 1 // small: 1 sig
    if (amountUsd < 500000) return 2 // medium: 2 sigs
    return 3 // large: 3 sigs
  }

  // Create multi-sig gate for transaction
  createGate(transactionId: string, amountUsd: number): MultiSigGate {
    const requiredSigs = this.getRequiredSignatures(amountUsd)
    const signers = Array.from(this.signers.values()).slice(0, Math.max(requiredSigs, 3))

    const gate: MultiSigGate = {
      gate_id: toUuid(`gate:${transactionId}:multisig`),
      transaction_id: transactionId,
      amount_usd: amountUsd,
      required_signatures: requiredSigs,
      signers,
      signatures: new Map(),
      gate_seal: toUuid(`seal:${transactionId}`),
      status: 'open'
    }

    this.gates.set(gate.gate_id, gate)
    return gate
  }

  // Collect signature
  collectSignature(
    gateId: string,
    signerId: string,
    signatureValue: string
  ): boolean {
    const gate = this.gates.get(gateId)
    if (!gate || gate.status !== 'open') return false

    const signer = this.signers.get(signerId)
    if (!signer) return false

    // Check if signer is authorized for this gate
    if (!gate.signers.find(s => s.signer_id === signerId)) return false

    const sig: MultiSigSignature = {
      transaction_id: gate.transaction_id,
      signer_id: signerId,
      timestamp: new Date().toISOString(),
      signature: signatureValue
    }

    gate.signatures.set(signerId, sig)

    // Check if we have enough signatures
    if (gate.signatures.size >= gate.required_signatures) {
      gate.status = 'approved'
    }

    return true
  }

  // Check if gate is approved
  isApproved(gateId: string): boolean {
    const gate = this.gates.get(gateId)
    return gate?.status === 'approved'
  }

  // Reject gate
  rejectGate(gateId: string): boolean {
    const gate = this.gates.get(gateId)
    if (!gate) return false

    gate.status = 'rejected'
    return true
  }

  // Get gate
  getGate(gateId: string): MultiSigGate | undefined {
    return this.gates.get(gateId)
  }

  // Get all open gates
  getOpenGates(): MultiSigGate[] {
    return Array.from(this.gates.values()).filter(g => g.status === 'open')
  }

  // Get all gates
  getAllGates(): MultiSigGate[] {
    return Array.from(this.gates.values())
  }

  // Compute multi-sig ledger root
  getLedgerRoot(): string {
    const gateRoots = Array.from(this.gates.values()).map(g =>
      toUuid(`${g.gate_id}:${g.status}:${g.signatures.size}/${g.required_signatures}`)
    )
    return merkleFold(gateRoots)
  }

  // Get summary
  getSummary(): {
    total_gates: number
    open: number
    approved: number
    rejected: number
    signers_registered: number
  } {
    const gates = this.getAllGates()
    return {
      total_gates: gates.length,
      open: gates.filter(g => g.status === 'open').length,
      approved: gates.filter(g => g.status === 'approved').length,
      rejected: gates.filter(g => g.status === 'rejected').length,
      signers_registered: this.signers.size
    }
  }

  // Get authority ID
  getId(): string {
    return this.authorityId
  }
}

// Global multi-sig authority
let multiSigAuthority: MultiSigAuthority | null = null

export function initializeMultiSigAuthority(): MultiSigAuthority {
  if (!multiSigAuthority) {
    multiSigAuthority = new MultiSigAuthority()
  }
  return multiSigAuthority
}

export function getMultiSigAuthority(): MultiSigAuthority | null {
  return multiSigAuthority
}

export const multisig = {
  initialize: initializeMultiSigAuthority,
  get: getMultiSigAuthority
}
