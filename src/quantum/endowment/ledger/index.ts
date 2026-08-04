// Immutable Ledger — permanent record of all funding transactions
// Every event sealed and chained for auditability

import { toUuid, merkleFold } from '../../../0'

export type LedgerEventType =
  | 'allocation_created'
  | 'verification_passed'
  | 'verification_failed'
  | 'compliance_checked'
  | 'payment_initiated'
  | 'payment_confirmed'
  | 'payment_failed'
  | 'appeal_filed'
  | 'appeal_resolved'
  | 'clawback_requested'
  | 'clawback_executed'
  | 'fraud_flag_raised'

export interface LedgerEntry {
  entry_id: string
  sequence_number: number
  event_type: LedgerEventType
  theorem_id: string
  researcher_id?: string
  amount_usd?: number
  status: string
  timestamp: string
  parent_hash: string // hash of previous entry (blockchain-style)
  entry_hash: string // this entry's content hash
  details: Record<string, string | number | boolean>
}

export interface LedgerPage {
  page_number: number
  start_sequence: number
  end_sequence: number
  page_root: string // merkle root of all entries in this page
  entries_count: number
  page_hash: string
}

// Immutable ledger
class ImmutableLedger {
  private ledgerId: string
  private entries: LedgerEntry[] = []
  private pages: Map<number, LedgerPage> = new Map()
  private lastHash: string = toUuid('genesis:ledger-start')
  private entriesPerPage: number = 1000

  constructor() {
    this.ledgerId = toUuid('ledger:immutable-funding-record')
  }

  // Record event (create ledger entry)
  recordEvent(
    eventType: LedgerEventType,
    theoremId: string,
    status: string,
    details: Record<string, string | number | boolean>,
    researcherId?: string,
    amountUsd?: number
  ): LedgerEntry {
    const sequenceNumber = this.entries.length + 1
    const timestamp = new Date().toISOString()

    // Compute entry hash (deterministic content-addressed)
    const entryData = `${sequenceNumber}:${eventType}:${theoremId}:${timestamp}:${JSON.stringify(details)}`
    const entryHash = toUuid(entryData)

    const entry: LedgerEntry = {
      entry_id: toUuid(`entry:${sequenceNumber}:${eventType}`),
      sequence_number: sequenceNumber,
      event_type: eventType,
      theorem_id: theoremId,
      researcher_id: researcherId,
      amount_usd: amountUsd,
      status,
      timestamp,
      parent_hash: this.lastHash,
      entry_hash: entryHash,
      details
    }

    this.entries.push(entry)
    this.lastHash = entryHash

    // Check if we need to create a new page
    if (this.entries.length % this.entriesPerPage === 0) {
      this.createPage(Math.floor(this.entries.length / this.entriesPerPage))
    }

    return entry
  }

  // Create a page (sealed batch of entries)
  private createPage(pageNumber: number): void {
    const startSeq = (pageNumber - 1) * this.entriesPerPage + 1
    const endSeq = Math.min(pageNumber * this.entriesPerPage, this.entries.length)
    const pageEntries = this.entries.slice(startSeq - 1, endSeq)

    // Compute page root
    const pageRoots = pageEntries.map(e => e.entry_hash)
    const pageRoot = merkleFold(pageRoots)
    const pageHash = toUuid(`page:${pageNumber}:${pageRoot}`)

    const page: LedgerPage = {
      page_number: pageNumber,
      start_sequence: startSeq,
      end_sequence: endSeq,
      page_root: pageRoot,
      entries_count: pageEntries.length,
      page_hash: pageHash
    }

    this.pages.set(pageNumber, page)
  }

  // Get entry by sequence number
  getEntry(sequenceNumber: number): LedgerEntry | undefined {
    return this.entries[sequenceNumber - 1]
  }

  // Get entries for theorem
  getEntriesForTheorem(theoremId: string): LedgerEntry[] {
    return this.entries.filter(e => e.theorem_id === theoremId)
  }

  // Get entries for researcher
  getEntriesForResearcher(researcherId: string): LedgerEntry[] {
    return this.entries.filter(e => e.researcher_id === researcherId)
  }

  // Get all entries
  getAllEntries(): LedgerEntry[] {
    return this.entries
  }

  // Get page
  getPage(pageNumber: number): LedgerPage | undefined {
    return this.pages.get(pageNumber)
  }

  // Verify entry integrity (check parent hash chain)
  verifyEntry(sequenceNumber: number): boolean {
    const entry = this.getEntry(sequenceNumber)
    if (!entry) return false

    if (sequenceNumber === 1) {
      return entry.parent_hash === this.ledgerId
    }

    const prevEntry = this.getEntry(sequenceNumber - 1)
    if (!prevEntry) return false

    return entry.parent_hash === prevEntry.entry_hash
  }

  // Get ledger root (merkle root of all entries)
  getRoot(): string {
    if (this.entries.length === 0) return this.ledgerId

    const pageRoots = Array.from(this.pages.values()).map(p => p.page_hash)
    return merkleFold([...pageRoots, this.lastHash])
  }

  // Get ledger stats
  getStats(): {
    total_entries: number
    total_pages: number
    last_entry_timestamp: string
    event_types: Record<string, number>
  } {
    const eventTypes: Record<string, number> = {}
    for (const entry of this.entries) {
      eventTypes[entry.event_type] = (eventTypes[entry.event_type] || 0) + 1
    }

    return {
      total_entries: this.entries.length,
      total_pages: this.pages.size,
      last_entry_timestamp: this.entries.length > 0 ? this.entries[this.entries.length - 1].timestamp : '',
      event_types: eventTypes
    }
  }

  // Export entries as JSON (for backup/audit)
  exportEntries(startSeq: number = 1, endSeq?: number): LedgerEntry[] {
    const end = endSeq || this.entries.length
    return this.entries.slice(startSeq - 1, end)
  }

  // Get ledger ID
  getId(): string {
    return this.ledgerId
  }
}

// Global immutable ledger
let immutableLedger: ImmutableLedger | null = null

export function initializeImmutableLedger(): ImmutableLedger {
  if (!immutableLedger) {
    immutableLedger = new ImmutableLedger()
  }
  return immutableLedger
}

export function getImmutableLedger(): ImmutableLedger | null {
  return immutableLedger
}

export const ledger = {
  initialize: initializeImmutableLedger,
  get: getImmutableLedger
}
