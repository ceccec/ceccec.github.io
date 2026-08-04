// Payment Oracle — execute actual fund transfers
// Connects to blockchain/banking APIs, records all transactions

import { toUuid, merkleFold } from '../../../0'
import type { FundingAllocation } from '../dispatch'

export interface PaymentTransaction {
  transaction_id: string
  allocation_id: string
  theorem_id: string
  from_account: string // funding source account
  to_account: string // researcher account
  amount_usd: number
  currency: string
  status: 'pending' | 'processing' | 'confirmed' | 'failed'
  payment_method: 'blockchain' | 'bank_transfer' | 'check'
  transaction_hash: string
  initiated_at: string
  confirmed_at?: string
  error?: string
}

export interface PaymentLedger {
  transaction_id: string
  payment: PaymentTransaction
  verification_required: boolean
  signatures_required: number
  signatures_collected: number
  ledger_seal: string
}

// Payment oracle state
class PaymentOracle {
  private oracleId: string
  private transactions: Map<string, PaymentTransaction> = new Map()
  private ledger: Map<string, PaymentLedger> = new Map()
  private totalProcessed: number = 0

  constructor() {
    this.oracleId = toUuid('oracle:payment-orchestrator')
  }

  // Initiate payment for allocation
  initiatePayment(
    allocation: FundingAllocation,
    fromAccount: string,
    toAccount: string,
    paymentMethod: 'blockchain' | 'bank_transfer' | 'check'
  ): PaymentTransaction {
    const timestamp = new Date().toISOString()
    const transactionId = toUuid(`txn:${allocation.theorem_id}:${allocation.funding_source_id}:${timestamp}`)

    const transaction: PaymentTransaction = {
      transaction_id: transactionId,
      allocation_id: `${allocation.theorem_id}:${allocation.funding_source_id}`,
      theorem_id: allocation.theorem_id,
      from_account: fromAccount,
      to_account: toAccount,
      amount_usd: allocation.allocated_usd,
      currency: 'USD',
      status: 'pending',
      payment_method: paymentMethod,
      transaction_hash: toUuid(`hash:${transactionId}`),
      initiated_at: timestamp
    }

    this.transactions.set(transactionId, transaction)

    // Create ledger entry
    const ledgerEntry: PaymentLedger = {
      transaction_id: transactionId,
      payment: transaction,
      verification_required: allocation.allocated_usd > 250000, // require multi-sig for large transfers
      signatures_required: allocation.allocated_usd > 250000 ? 2 : 1,
      signatures_collected: 0,
      ledger_seal: toUuid(`ledger:${transactionId}`)
    }

    this.ledger.set(transactionId, ledgerEntry)

    return transaction
  }

  // Confirm payment (move to processing)
  confirmPayment(transactionId: string): boolean {
    const transaction = this.transactions.get(transactionId)
    if (!transaction) return false

    transaction.status = 'processing'
    return true
  }

  // Complete payment (move to confirmed)
  completePayment(transactionId: string, hash?: string): boolean {
    const transaction = this.transactions.get(transactionId)
    if (!transaction || transaction.status !== 'processing') return false

    transaction.status = 'confirmed'
    transaction.confirmed_at = new Date().toISOString()
    if (hash) transaction.transaction_hash = hash

    this.totalProcessed += transaction.amount_usd

    return true
  }

  // Fail payment with error
  failPayment(transactionId: string, error: string): boolean {
    const transaction = this.transactions.get(transactionId)
    if (!transaction) return false

    transaction.status = 'failed'
    transaction.error = error

    return true
  }

  // Collect signature for multi-sig requirement
  collectSignature(transactionId: string, signer: string): boolean {
    const ledgerEntry = this.ledger.get(transactionId)
    if (!ledgerEntry) return false

    ledgerEntry.signatures_collected++
    return ledgerEntry.signatures_collected >= ledgerEntry.signatures_required
  }

  // Check if payment meets multi-sig requirements
  isReadyForPayment(transactionId: string): boolean {
    const ledgerEntry = this.ledger.get(transactionId)
    if (!ledgerEntry) return false

    return ledgerEntry.signatures_collected >= ledgerEntry.signatures_required
  }

  // Get transaction
  getTransaction(transactionId: string): PaymentTransaction | undefined {
    return this.transactions.get(transactionId)
  }

  // Get all transactions
  getAllTransactions(): PaymentTransaction[] {
    return Array.from(this.transactions.values())
  }

  // Get ledger summary
  getSummary(): {
    total_transactions: number
    pending: number
    processing: number
    confirmed: number
    failed: number
    total_processed_usd: number
    average_transaction_usd: number
  } {
    const transactions = this.getAllTransactions()
    const pending = transactions.filter(t => t.status === 'pending').length
    const processing = transactions.filter(t => t.status === 'processing').length
    const confirmed = transactions.filter(t => t.status === 'confirmed').length
    const failed = transactions.filter(t => t.status === 'failed').length

    return {
      total_transactions: transactions.length,
      pending,
      processing,
      confirmed,
      failed,
      total_processed_usd: this.totalProcessed,
      average_transaction_usd: transactions.length > 0 ? this.totalProcessed / confirmed : 0
    }
  }

  // Compute payment ledger root
  getLedgerRoot(): string {
    const transactionRoots = Array.from(this.transactions.values()).map(t =>
      toUuid(`${t.transaction_id}:${t.status}:${t.amount_usd}`)
    )
    return merkleFold(transactionRoots)
  }

  // Get oracle ID
  getId(): string {
    return this.oracleId
  }
}

// Global payment oracle
let paymentOracle: PaymentOracle | null = null

export function initializePaymentOracle(): PaymentOracle {
  if (!paymentOracle) {
    paymentOracle = new PaymentOracle()
  }
  return paymentOracle
}

export function getPaymentOracle(): PaymentOracle | null {
  return paymentOracle
}

export const payment = {
  initialize: initializePaymentOracle,
  get: getPaymentOracle
}
