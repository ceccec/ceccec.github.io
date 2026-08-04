// Event System — publish events for all state changes
// Notify stakeholders of key funding milestones

import { toUuid } from '../../../0'

export type EventType =
  | 'theorem_allocated'
  | 'verification_complete'
  | 'compliance_passed'
  | 'payment_released'
  | 'appeal_filed'
  | 'clawback_executed'
  | 'fraud_detected'

export interface FundingEvent {
  event_id: string
  event_type: EventType
  theorem_id: string
  timestamp: string
  data: Record<string, string | number | boolean>
  subscribers: string[] // stakeholder IDs
  published: boolean
}

class EventBus {
  private busId: string
  private events: Map<string, FundingEvent> = new Map()
  private subscribers: Map<string, string[]> = new Map() // event_type -> stakeholder_ids

  constructor() {
    this.busId = toUuid('bus:funding-events')
  }

  // Subscribe to event type
  subscribe(eventType: EventType, stakeholderId: string): void {
    if (!this.subscribers.has(eventType)) {
      this.subscribers.set(eventType, [])
    }
    const subs = this.subscribers.get(eventType)!
    if (!subs.includes(stakeholderId)) {
      subs.push(stakeholderId)
    }
  }

  // Publish event
  publishEvent(
    eventType: EventType,
    theoremId: string,
    data: Record<string, string | number | boolean>
  ): FundingEvent {
    const eventId = toUuid(`event:${eventType}:${theoremId}:${Date.now()}`)
    const subscribers = this.subscribers.get(eventType) || []

    const event: FundingEvent = {
      event_id: eventId,
      event_type: eventType,
      theorem_id: theoremId,
      timestamp: new Date().toISOString(),
      data,
      subscribers,
      published: true
    }

    this.events.set(eventId, event)
    return event
  }

  // Get event
  getEvent(eventId: string): FundingEvent | undefined {
    return this.events.get(eventId)
  }

  // Get events by type
  getEventsByType(eventType: EventType): FundingEvent[] {
    return Array.from(this.events.values()).filter(e => e.event_type === eventType)
  }

  // Get events for theorem
  getEventsForTheorem(theoremId: string): FundingEvent[] {
    return Array.from(this.events.values()).filter(e => e.theorem_id === theoremId)
  }

  // Get all events
  getAllEvents(): FundingEvent[] {
    return Array.from(this.events.values())
  }

  getId(): string {
    return this.busId
  }
}

let eventBus: EventBus | null = null

export function initializeEventBus(): EventBus {
  if (!eventBus) {
    eventBus = new EventBus()
  }
  return eventBus
}

export function getEventBus(): EventBus | null {
  return eventBus
}

export const events = {
  initialize: initializeEventBus,
  get: getEventBus
}
