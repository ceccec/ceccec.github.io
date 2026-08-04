// Integration Hub — connect to external academic & funding databases
// Sync theorem data, researcher profiles, publication records

import { toUuid } from '../../../0'

export interface ExternalDatabase {
  db_id: string
  name: string
  type: 'academic' | 'funding' | 'institutional'
  url: string
  api_key_encrypted: string
  last_sync: string
  status: 'connected' | 'disconnected' | 'error'
  data_categories: string[]
}

export interface SyncRecord {
  sync_id: string
  database_id: string
  entity_type: string // 'theorem' | 'researcher' | 'publication'
  external_id: string
  internal_id: string
  last_synced: string
  status: 'synced' | 'pending' | 'error'
  record_count: number
}

export interface DataMapping {
  mapping_id: string
  from_database: string
  from_field: string
  to_model: string
  to_field: string
  transform_fn: string // function name for transformation
  active: boolean
}

class IntegrationHub {
  private hubId: string
  private databases: Map<string, ExternalDatabase> = new Map()
  private syncRecords: Map<string, SyncRecord> = new Map()
  private dataMappings: Map<string, DataMapping> = new Map()

  constructor() {
    this.hubId = toUuid('hub:external-integration')
    this.initializeDefaultDatabases()
  }

  // Initialize default external databases
  private initializeDefaultDatabases(): void {
    this.registerDatabase(
      'arxiv-api',
      'arXiv',
      'academic',
      'https://api.arxiv.org',
      'public',
      ['theorems', 'publications', 'preprints']
    )

    this.registerDatabase(
      'orcid-api',
      'ORCID',
      'institutional',
      'https://orcid.org/oauth/authorize',
      'oauth',
      ['researchers', 'publications', 'affiliations']
    )

    this.registerDatabase(
      'pubmed-api',
      'PubMed',
      'academic',
      'https://www.ncbi.nlm.nih.gov/api/v1',
      'public',
      ['publications', 'citations', 'metadata']
    )

    this.registerDatabase(
      'crossref-api',
      'Crossref',
      'academic',
      'https://api.crossref.org',
      'public',
      ['publications', 'citations', 'references']
    )

    this.registerDatabase(
      'scopus-api',
      'Scopus',
      'academic',
      'https://api.elsevier.com/content/search/scopus',
      'apikey',
      ['publications', 'citations', 'metrics']
    )

    this.registerDatabase(
      'nih-grants',
      'NIH Grants Database',
      'funding',
      'https://api.nih.gov/grants',
      'apikey',
      ['funding_sources', 'grant_history', 'recipients']
    )
  }

  // Register external database
  private registerDatabase(
    id: string,
    name: string,
    type: 'academic' | 'funding' | 'institutional',
    url: string,
    authType: string,
    categories: string[]
  ): void {
    const database: ExternalDatabase = {
      db_id: toUuid(`db:${id}`),
      name,
      type,
      url,
      api_key_encrypted: toUuid(`key:${id}:${Date.now()}`), // Placeholder for encrypted key
      last_sync: '',
      status: 'disconnected',
      data_categories: categories
    }

    this.databases.set(id, database)
  }

  // Connect to database
  connectDatabase(dbId: string, apiKeyEncrypted: string): boolean {
    const database = Array.from(this.databases.values()).find(d => d.db_id === dbId)
    if (!database) return false

    database.api_key_encrypted = apiKeyEncrypted
    database.status = 'connected'
    database.last_sync = new Date().toISOString()

    return true
  }

  // Sync data from database
  syncData(
    databaseId: string,
    entityType: string,
    externalIds: string[],
    internalIds: string[]
  ): SyncRecord {
    const syncId = toUuid(`sync:${databaseId}:${entityType}:${Date.now()}`)

    const syncRecord: SyncRecord = {
      sync_id: syncId,
      database_id: databaseId,
      entity_type: entityType,
      external_id: externalIds.join(','),
      internal_id: internalIds.join(','),
      last_synced: new Date().toISOString(),
      status: 'synced',
      record_count: Math.min(externalIds.length, internalIds.length)
    }

    this.syncRecords.set(syncId, syncRecord)
    return syncRecord
  }

  // Define data mapping
  defineMapping(
    fromDb: string,
    fromField: string,
    toModel: string,
    toField: string,
    transformFn: string
  ): DataMapping {
    const mappingId = toUuid(`mapping:${fromDb}:${fromField}:${toModel}`)

    const mapping: DataMapping = {
      mapping_id: mappingId,
      from_database: fromDb,
      from_field: fromField,
      to_model: toModel,
      to_field: toField,
      transform_fn: transformFn,
      active: true
    }

    this.dataMappings.set(mappingId, mapping)
    return mapping
  }

  // Get database
  getDatabase(id: string): ExternalDatabase | undefined {
    return Array.from(this.databases.values()).find(d => d.db_id === id || d.name === id)
  }

  // Get all databases
  getAllDatabases(): ExternalDatabase[] {
    return Array.from(this.databases.values())
  }

  // Get connected databases
  getConnectedDatabases(): ExternalDatabase[] {
    return Array.from(this.databases.values()).filter(d => d.status === 'connected')
  }

  // Get sync records
  getSyncRecords(databaseId?: string): SyncRecord[] {
    if (!databaseId) {
      return Array.from(this.syncRecords.values())
    }

    return Array.from(this.syncRecords.values()).filter(
      s => s.database_id === databaseId
    )
  }

  // Get data mappings
  getDataMappings(fromDb?: string): DataMapping[] {
    if (!fromDb) {
      return Array.from(this.dataMappings.values())
    }

    return Array.from(this.dataMappings.values()).filter(m => m.from_database === fromDb)
  }

  // Get integration status
  getStatus(): {
    total_databases: number
    connected: number
    last_sync: string
    sync_count: number
    mapping_count: number
  } {
    const allDbs = this.getAllDatabases()
    const connected = allDbs.filter(d => d.status === 'connected').length
    const allSyncs = Array.from(this.syncRecords.values())
    const lastSync =
      allSyncs.length > 0
        ? allSyncs.reduce((latest, current) =>
            new Date(current.last_synced) > new Date(latest.last_synced) ? current : latest
          ).last_synced
        : ''

    return {
      total_databases: allDbs.length,
      connected,
      last_sync: lastSync,
      sync_count: allSyncs.length,
      mapping_count: Array.from(this.dataMappings.values()).length
    }
  }

  getId(): string {
    return this.hubId
  }
}

let integrationHub: IntegrationHub | null = null

export function initializeIntegrationHub(): IntegrationHub {
  if (!integrationHub) {
    integrationHub = new IntegrationHub()
  }
  return integrationHub
}

export function getIntegrationHub(): IntegrationHub | null {
  return integrationHub
}

export const integration = {
  initialize: initializeIntegrationHub,
  get: getIntegrationHub
}
