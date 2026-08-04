// Stakeholder Management — role-based access control for funding operations
// Who can approve, sign, resolve, audit

import { toUuid } from '../../../0'

export type StakeholderRole = 'oracle' | 'auditor' | 'treasurer' | 'arbitrator' | 'admin'

export interface Stakeholder {
  stakeholder_id: string
  name: string
  email: string
  role: StakeholderRole
  permissions: Set<string>
  active: boolean
  added_at: string
  added_by: string
}

export interface RolePermissions {
  oracle: string[]
  auditor: string[]
  treasurer: string[]
  arbitrator: string[]
  admin: string[]
}

class StakeholderManager {
  private managerId: string
  private stakeholders: Map<string, Stakeholder> = new Map()
  private rolePermissions: RolePermissions = {
    oracle: ['verify_theorems', 'gate_funds', 'sign_releases'],
    auditor: ['audit_compliance', 'review_appeals', 'flag_fraud'],
    treasurer: ['approve_payments', 'execute_transfers', 'recover_funds'],
    arbitrator: ['resolve_appeals', 'overturn_decisions', 'escalate_disputes'],
    admin: ['manage_stakeholders', 'configure_thresholds', 'audit_ledger']
  }

  constructor() {
    this.managerId = toUuid('manager:stakeholder-access')
  }

  // Register stakeholder
  registerStakeholder(
    name: string,
    email: string,
    role: StakeholderRole,
    addedBy: string
  ): Stakeholder {
    const stakeholderId = toUuid(`stakeholder:${email}:${role}`)
    const permissions = new Set(this.rolePermissions[role] || [])

    const stakeholder: Stakeholder = {
      stakeholder_id: stakeholderId,
      name,
      email,
      role,
      permissions,
      active: true,
      added_at: new Date().toISOString(),
      added_by: addedBy
    }

    this.stakeholders.set(stakeholderId, stakeholder)
    return stakeholder
  }

  // Check permission
  hasPermission(stakeholderId: string, permission: string): boolean {
    const stakeholder = this.stakeholders.get(stakeholderId)
    if (!stakeholder || !stakeholder.active) return false
    return stakeholder.permissions.has(permission)
  }

  // Get stakeholder
  getStakeholder(stakeholderId: string): Stakeholder | undefined {
    return this.stakeholders.get(stakeholderId)
  }

  // Get stakeholders by role
  getByRole(role: StakeholderRole): Stakeholder[] {
    return Array.from(this.stakeholders.values()).filter(s => s.role === role && s.active)
  }

  // Deactivate stakeholder
  deactivate(stakeholderId: string): boolean {
    const stakeholder = this.stakeholders.get(stakeholderId)
    if (!stakeholder) return false
    stakeholder.active = false
    return true
  }

  // Get summary
  getSummary(): Record<StakeholderRole, number> {
    const summary: Record<StakeholderRole, number> = {
      oracle: 0,
      auditor: 0,
      treasurer: 0,
      arbitrator: 0,
      admin: 0
    }

    for (const stakeholder of this.stakeholders.values()) {
      if (stakeholder.active) {
        summary[stakeholder.role]++
      }
    }

    return summary
  }

  getId(): string {
    return this.managerId
  }
}

let stakeholderManager: StakeholderManager | null = null

export function initializeStakeholderManager(): StakeholderManager {
  if (!stakeholderManager) {
    stakeholderManager = new StakeholderManager()
  }
  return stakeholderManager
}

export function getStakeholderManager(): StakeholderManager | null {
  return stakeholderManager
}

export const stakeholder = {
  initialize: initializeStakeholderManager,
  get: getStakeholderManager
}
