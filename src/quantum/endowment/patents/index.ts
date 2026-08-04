// Patent & IP Management — track intellectual property from funded research
// Monitor patent applications, grants, licensing, and commercialization

import { toUuid } from '../../../0'

export interface PatentRecord {
  patent_id: string
  theorem_id: string
  inventor_ids: string[]
  title: string
  abstract: string
  application_date: string
  filing_jurisdiction: string[]
  status: 'draft' | 'filed' | 'pending' | 'granted' | 'rejected' | 'expired'
  grant_date?: string
  expiration_date?: string
  maintenance_cost_usd: number
  licensing_revenue_usd: number
  commercialization_status: 'none' | 'licensed' | 'commercialized'
}

export interface LicenseAgreement {
  license_id: string
  patent_id: string
  licensee_name: string
  license_type: 'exclusive' | 'non_exclusive' | 'research'
  start_date: string
  end_date?: string
  royalty_rate_pct: number
  upfront_payment_usd: number
  annual_minimum_usd: number
  status: 'active' | 'expired' | 'terminated'
}

export interface CommercializationRecord {
  commercialization_id: string
  patent_id: string
  product_name: string
  market_launch_date?: string
  market_revenue_usd: number
  units_sold: number
  customer_count: number
  market_adoption_rate: number // 0-100
  roi_multiplier: number // revenue / patent cost
}

class IPManager {
  private managerId: string
  private patents: Map<string, PatentRecord> = new Map()
  private licenses: Map<string, LicenseAgreement> = new Map()
  private commercializations: Map<string, CommercializationRecord> = new Map()

  constructor() {
    this.managerId = toUuid('manager:intellectual-property')
  }

  // File patent
  filePatent(
    theoremId: string,
    inventorIds: string[],
    title: string,
    abstract: string,
    filingJurisdictions: string[]
  ): PatentRecord {
    const patentId = toUuid(`patent:${theoremId}:${Date.now()}`)

    const patent: PatentRecord = {
      patent_id: patentId,
      theorem_id: theoremId,
      inventor_ids: inventorIds,
      title,
      abstract,
      application_date: new Date().toISOString(),
      filing_jurisdiction: filingJurisdictions,
      status: 'filed',
      maintenance_cost_usd: filingJurisdictions.length * 5000,
      licensing_revenue_usd: 0,
      commercialization_status: 'none'
    }

    this.patents.set(patentId, patent)
    return patent
  }

  // Record patent grant
  recordPatentGrant(
    patentId: string,
    grantDate: string,
    expirationDate: string
  ): PatentRecord | null {
    const patent = this.patents.get(patentId)
    if (!patent) return null

    patent.status = 'granted'
    patent.grant_date = grantDate
    patent.expiration_date = expirationDate

    return patent
  }

  // Create license agreement
  createLicenseAgreement(
    patentId: string,
    licenseeName: string,
    licenseType: 'exclusive' | 'non_exclusive' | 'research',
    royaltyRate: number,
    upfrontPayment: number,
    annualMinimum: number
  ): LicenseAgreement {
    const licenseId = toUuid(`license:${patentId}:${licenseeName}`)

    const license: LicenseAgreement = {
      license_id: licenseId,
      patent_id: patentId,
      licensee_name: licenseeName,
      license_type: licenseType,
      start_date: new Date().toISOString(),
      royalty_rate_pct: royaltyRate,
      upfront_payment_usd: upfrontPayment,
      annual_minimum_usd: annualMinimum,
      status: 'active'
    }

    this.licenses.set(licenseId, license)

    // Update patent licensing revenue
    const patent = this.patents.get(patentId)
    if (patent) {
      patent.licensing_revenue_usd += upfrontPayment
      patent.commercialization_status = 'licensed'
    }

    return license
  }

  // Record commercialization
  recordCommercialization(
    patentId: string,
    productName: string,
    marketRevenue: number,
    unitsSold: number,
    customerCount: number
  ): CommercializationRecord {
    const commercializationId = toUuid(`commercialization:${patentId}:${productName}`)

    // Compute adoption rate (customers per potential market size)
    const estimatedMarketSize = Math.max(1000, unitsSold * 10)
    const adoptionRate = (customerCount / estimatedMarketSize) * 100

    const patent = this.patents.get(patentId)
    const patentCost = patent ? patent.maintenance_cost_usd : 50000

    const commercialization: CommercializationRecord = {
      commercialization_id: commercializationId,
      patent_id: patentId,
      product_name: productName,
      market_launch_date: new Date().toISOString(),
      market_revenue_usd: marketRevenue,
      units_sold: unitsSold,
      customer_count: customerCount,
      market_adoption_rate: adoptionRate,
      roi_multiplier: marketRevenue / patentCost
    }

    this.commercializations.set(commercializationId, commercialization)

    if (patent) {
      patent.commercialization_status = 'commercialized'
      patent.licensing_revenue_usd += marketRevenue * 0.1 // 10% back to funding program
    }

    return commercialization
  }

  // Get patent
  getPatent(patentId: string): PatentRecord | undefined {
    return this.patents.get(patentId)
  }

  // Get patents for theorem
  getPatentsForTheorem(theoremId: string): PatentRecord[] {
    return Array.from(this.patents.values()).filter(p => p.theorem_id === theoremId)
  }

  // Get granted patents
  getGrantedPatents(): PatentRecord[] {
    return Array.from(this.patents.values()).filter(p => p.status === 'granted')
  }

  // Get licenses
  getLicensesForPatent(patentId: string): LicenseAgreement[] {
    return Array.from(this.licenses.values()).filter(l => l.patent_id === patentId)
  }

  // Get commercializations
  getCommercializationsForPatent(patentId: string): CommercializationRecord[] {
    return Array.from(this.commercializations.values()).filter(
      c => c.patent_id === patentId
    )
  }

  // Get high-ROI patents
  getHighROIPatents(minROI: number = 5): CommercializationRecord[] {
    return Array.from(this.commercializations.values())
      .filter(c => c.roi_multiplier >= minROI)
      .sort((a, b) => b.roi_multiplier - a.roi_multiplier)
  }

  // Compute IP value
  computeIPValue(theoremId: string): {
    total_patents: number
    granted_count: number
    total_licensing_revenue: number
    commercialized_products: number
    total_market_revenue: number
    total_roi: number
  } {
    const patents = this.getPatentsForTheorem(theoremId)
    const granted = patents.filter(p => p.status === 'granted').length
    const totalLicensingRevenue = patents.reduce((sum, p) => sum + p.licensing_revenue_usd, 0)

    const commercializations = patents.flatMap(p =>
      this.getCommercializationsForPatent(p.patent_id)
    )

    const totalMarketRevenue = commercializations.reduce((sum, c) => sum + c.market_revenue_usd, 0)
    const totalPatentCost = patents.reduce((sum, p) => sum + p.maintenance_cost_usd, 0)
    const totalROI = totalPatentCost > 0 ? (totalLicensingRevenue + totalMarketRevenue) / totalPatentCost : 0

    return {
      total_patents: patents.length,
      granted_count: granted,
      total_licensing_revenue: totalLicensingRevenue,
      commercialized_products: commercializations.length,
      total_market_revenue: totalMarketRevenue,
      total_roi: totalROI
    }
  }

  // Get IP summary
  getSummary(): {
    total_patents: number
    granted_patents: number
    pending_patents: number
    active_licenses: number
    commercialized_products: number
    total_licensing_revenue: number
    total_market_revenue: number
    avg_roi: number
  } {
    const patents = Array.from(this.patents.values())
    const granted = patents.filter(p => p.status === 'granted').length
    const pending = patents.filter(p => p.status === 'pending' || p.status === 'filed').length

    const licenses = Array.from(this.licenses.values()).filter(l => l.status === 'active')
    const commercializations = Array.from(this.commercializations.values())

    const totalLicensingRevenue = patents.reduce((sum, p) => sum + p.licensing_revenue_usd, 0)
    const totalMarketRevenue = commercializations.reduce((sum, c) => sum + c.market_revenue_usd, 0)

    const avgROI = commercializations.length > 0
      ? commercializations.reduce((sum, c) => sum + c.roi_multiplier, 0) / commercializations.length
      : 0

    return {
      total_patents: patents.length,
      granted_patents: granted,
      pending_patents: pending,
      active_licenses: licenses.length,
      commercialized_products: commercializations.length,
      total_licensing_revenue: totalLicensingRevenue,
      total_market_revenue: totalMarketRevenue,
      avg_roi: avgROI
    }
  }

  getId(): string {
    return this.managerId
  }
}

let ipManager: IPManager | null = null

export function initializeIPManager(): IPManager {
  if (!ipManager) {
    ipManager = new IPManager()
  }
  return ipManager
}

export function getIPManager(): IPManager | null {
  return ipManager
}

export const patents = {
  initialize: initializeIPManager,
  get: getIPManager
}
