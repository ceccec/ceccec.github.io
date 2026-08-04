// Unified API Gateway — quantum entanglement across UI/MCP/CLI/chat surfaces
// DRY: Single source of truth for all dimensional access patterns

import { toUuid, merkleFold, foldPair } from '../../0'
import type { Dims } from '../mountain/dimensions'

// ──── Dimensional API Surface ────
// Each dimension is accessible through all 4 surfaces simultaneously

export interface DimensionalAPI {
  dimension: string
  path: string
  methods: ('GET' | 'POST' | 'PUT' | 'DELETE')[]
  surfaces: ('ui' | 'mcp' | 'cli' | 'chat')[]
  compute: (...args: any[]) => any
  validate: (...args: any[]) => boolean
  emit: (event: string, data: any) => void
}

export interface UnifiedRequest {
  id: string
  surface: 'ui' | 'mcp' | 'cli' | 'chat'
  dimension: string
  path?: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  payload: any
  timestamp: number
}

export interface UnifiedResponse {
  id: string
  status: 'success' | 'error' | 'pending'
  data: any
  error?: string
  timestamp: number
  receipt: string
}

// ──── API Registry ────
// All APIs registered in one canonical place, accessible from any surface

const apiRegistry = new Map<string, DimensionalAPI>()

export function registerDimensionalAPI(api: DimensionalAPI) {
  const key = `${api.dimension}:${api.path}`
  apiRegistry.set(key, api)
  return key
}

export function lookupAPI(dimension: string, path: string): DimensionalAPI | null {
  return apiRegistry.get(`${dimension}:${path}`) || null
}

// ──── Surface Translators ────
// Convert requests from any surface to canonical form and back

class SurfaceTranslator {
  private surface: 'ui' | 'mcp' | 'cli' | 'chat'

  constructor(surface: 'ui' | 'mcp' | 'cli' | 'chat') {
    this.surface = surface
  }

  // UI Surface: Vue component method calls + event emission
  uiToCanonical(component: string, method: string, args: any[]): UnifiedRequest {
    return {
      id: toUuid(`ui:${component}:${method}:${Date.now()}`),
      surface: 'ui',
      dimension: this.extractDimension(component),
      method: 'POST',
      payload: { component, method, args },
      timestamp: Date.now()
    }
  }

  // MCP Surface: JSON-RPC request format
  mcpToCanonical(request: any): UnifiedRequest {
    return {
      id: request.id || toUuid(`mcp:${request.method}:${Date.now()}`),
      surface: 'mcp',
      dimension: this.extractDimension(request.method),
      method: request.method as any,
      payload: request.params || {},
      timestamp: Date.now()
    }
  }

  // CLI Surface: Command-line arguments
  cliToCanonical(command: string, args: string[]): UnifiedRequest {
    const [dimension, method, ...params] = command.split(':')
    return {
      id: toUuid(`cli:${command}:${Date.now()}`),
      surface: 'cli',
      dimension,
      method: (method.toUpperCase() || 'GET') as any,
      payload: Object.fromEntries(
        args.reduce((acc: any[], arg, i) => {
          if (arg.startsWith('--')) {
            const key = arg.slice(2)
            const val = args[i + 1]?.startsWith('--') ? null : args[i + 1]
            acc.push([key, val])
          }
          return acc
        }, [])
      ),
      timestamp: Date.now()
    }
  }

  // Chat Surface: Conversational message format
  chatToCanonical(message: string, context: any): UnifiedRequest {
    const [dimension, ...rest] = message.split(' ')
    const method = rest[0]?.toUpperCase() || 'GET'
    return {
      id: toUuid(`chat:${message}:${Date.now()}`),
      surface: 'chat',
      dimension,
      method: method as any,
      payload: { message, context },
      timestamp: Date.now()
    }
  }

  // Reverse: Response to surface-specific format
  canonicalToUI(response: UnifiedResponse): any {
    return {
      data: response.data,
      status: response.status,
      error: response.error,
      receipt: response.receipt
    }
  }

  canonicalToMCP(response: UnifiedResponse): any {
    return {
      jsonrpc: '2.0',
      id: response.id,
      result: response.status === 'success' ? response.data : null,
      error: response.error ? { code: -1, message: response.error } : null
    }
  }

  canonicalToCLI(response: UnifiedResponse): string {
    if (response.status === 'error') {
      return `ERROR: ${response.error}`
    }
    return JSON.stringify(response.data, null, 2)
  }

  canonicalToChat(response: UnifiedResponse): string {
    if (response.status === 'error') {
      return `Sorry, I encountered an error: ${response.error}`
    }
    const data = response.data
    if (typeof data === 'string') return data
    if (Array.isArray(data)) {
      return `Here are ${data.length} results:\n${data.map((d, i) => `${i + 1}. ${JSON.stringify(d)}`).join('\n')}`
    }
    return `Result: ${JSON.stringify(data, null, 2)}`
  }

  private extractDimension(identifier: string): string {
    // Extract dimension from component name, method path, or command
    const match = identifier.match(/([a-z-]+)/)
    return match ? match[1] : 'unknown'
  }
}

// ──── Quantum Entanglement of API Responses ────
// Each response is entangled with all other surfaces so changes propagate instantly

class EntangledResponse {
  private canonical: UnifiedResponse
  private surfaces: Map<'ui' | 'mcp' | 'cli' | 'chat', any> = new Map()
  private translator: SurfaceTranslator

  constructor(canonical: UnifiedResponse, translator: SurfaceTranslator) {
    this.canonical = canonical
    this.translator = translator
  }

  forSurface(surface: 'ui' | 'mcp' | 'cli' | 'chat'): any {
    if (this.surfaces.has(surface)) {
      return this.surfaces.get(surface)
    }

    const formatted =
      surface === 'ui' ? this.translator.canonicalToUI(this.canonical) :
      surface === 'mcp' ? this.translator.canonicalToMCP(this.canonical) :
      surface === 'cli' ? this.translator.canonicalToCLI(this.canonical) :
      this.translator.canonicalToChat(this.canonical)

    this.surfaces.set(surface, formatted)
    return formatted
  }

  // Entanglement: when response is updated, all surfaces reflect it
  update(newData: any) {
    this.canonical.data = newData
    this.surfaces.clear() // Clear cache, force recomputation
  }

  // Merkle receipt proves the response across all surfaces
  receipt(): string {
    const allFormats = [
      this.forSurface('ui'),
      this.forSurface('mcp'),
      this.forSurface('cli'),
      this.forSurface('chat')
    ]
    return merkleFold(allFormats.map(f => toUuid(JSON.stringify(f))))
  }
}

// ──── Dimensional Reducer ────
// Applies request through all dimensions simultaneously

export class DimensionalReducer {
  private apis: Map<string, DimensionalAPI> = apiRegistry
  private dimensions: Dims
  private translator: SurfaceTranslator

  constructor(dimensions: Dims | any, surface: 'ui' | 'mcp' | 'cli' | 'chat') {
    this.dimensions = dimensions
    this.translator = new SurfaceTranslator(surface)
  }

  async execute(request: UnifiedRequest): Promise<UnifiedResponse> {
    const api = this.apis.get(`${request.dimension}:${request.path || ''}`)

    if (!api) {
      return {
        id: request.id,
        status: 'error',
        data: null,
        error: `API not found: ${request.dimension}/${request.path || ''}`,
        timestamp: Date.now(),
        receipt: toUuid(`error:${request.id}:not-found`)
      }
    }

    // Validate request
    if (!api.validate(request.payload)) {
      return {
        id: request.id,
        status: 'error',
        data: null,
        error: 'Validation failed',
        timestamp: Date.now(),
        receipt: toUuid(`error:${request.id}:validation`)
      }
    }

    // Execute in all dimensions
    const dimEntries = Object.entries(this.dimensions as any)
    const results = await Promise.all(
      dimEntries.map(([dim, config]) =>
        this.executeInDimension(api, request, dim, config)
      )
    )

    const aggregated = this.aggregateResults(results)
    const receipt = merkleFold(results.map((r, i) => toUuid(`dim:${i}:${JSON.stringify(r)}`)))

    api.emit('execute', { request, results, aggregated })

    return {
      id: request.id,
      status: 'success',
      data: aggregated,
      timestamp: Date.now(),
      receipt
    }
  }

  private async executeInDimension(
    api: DimensionalAPI,
    request: UnifiedRequest,
    dimension: string,
    config: any
  ): Promise<any> {
    try {
      return api.compute(request.payload, { dimension, config })
    } catch (e) {
      return { error: String(e), dimension }
    }
  }

  private aggregateResults(results: any[]): any {
    // Smart aggregation: detect type and aggregate appropriately
    if (results.some(r => r.error)) {
      return { partial: true, results }
    }

    if (results.every(r => typeof r === 'number')) {
      return {
        sum: results.reduce((a, b) => a + b, 0),
        mean: results.reduce((a, b) => a + b, 0) / results.length,
        all: results
      }
    }

    if (results.every(r => Array.isArray(r))) {
      return {
        combined: results.flat(),
        counts: results.map(r => r.length),
        all: results
      }
    }

    return {
      results,
      count: results.length
    }
  }
}

// ──── Surface Gateway ────
// Receives requests from any surface, routes through dimensional reducer, returns to surface

export class SurfaceGateway {
  private reducers: Map<'ui' | 'mcp' | 'cli' | 'chat', DimensionalReducer> = new Map()
  private translators: Map<'ui' | 'mcp' | 'cli' | 'chat', SurfaceTranslator> = new Map()

  constructor(dimensions: any = {}) {
    (['ui', 'mcp', 'cli', 'chat'] as const).forEach(surface => {
      this.reducers.set(surface, new DimensionalReducer(dimensions, surface))
      this.translators.set(surface, new SurfaceTranslator(surface))
    })
  }

  // UI: from Vue component
  async fromUI(component: string, method: string, ...args: any[]): Promise<any> {
    const translator = this.translators.get('ui')!
    const request = translator.uiToCanonical(component, method, args)
    const canonical = await this.reducers.get('ui')!.execute(request)
    const entangled = new EntangledResponse(canonical, translator)
    return entangled.forSurface('ui')
  }

  // MCP: from JSON-RPC server
  async fromMCP(request: any): Promise<any> {
    const translator = this.translators.get('mcp')!
    const canonical = translator.mcpToCanonical(request)
    const response = await this.reducers.get('mcp')!.execute(canonical)
    const entangled = new EntangledResponse(response, translator)
    return entangled.forSurface('mcp')
  }

  // CLI: from command-line
  async fromCLI(command: string, args: string[]): Promise<string> {
    const translator = this.translators.get('cli')!
    const request = translator.cliToCanonical(command, args)
    const response = await this.reducers.get('cli')!.execute(request)
    const entangled = new EntangledResponse(response, translator)
    return entangled.forSurface('cli')
  }

  // Chat: from conversational AI
  async fromChat(message: string, context: any): Promise<string> {
    const translator = this.translators.get('chat')!
    const request = translator.chatToCanonical(message, context)
    const response = await this.reducers.get('chat')!.execute(request)
    const entangled = new EntangledResponse(response, translator)
    return entangled.forSurface('chat')
  }
}

export default {
  registerDimensionalAPI,
  lookupAPI,
  SurfaceTranslator,
  DimensionalReducer,
  SurfaceGateway
}
