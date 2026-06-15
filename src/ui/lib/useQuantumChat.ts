// Shared bring-your-own-key AI chat loop, used by both the Quantum Console and
// the Global Help widget. It calls the Anthropic Messages API directly with a
// plain fetch — no SDK, nothing extra in the bundle — only when the user sends a
// message (client-side); the tools the model may call are restricted to the
// read-only concept commands. Security is by architecture: no secrets ship, the
// key stays in the caller's browser, output is text.
import { buildMatrix, conceptCommands, executeConceptCommand, mcpToolManifest, type ConceptCommandName } from './quantumMind'

const ANTHROPIC_MESSAGES_URL = 'https://api.anthropic.com/v1/messages'

const matrix = buildMatrix()
const manifest = mcpToolManifest(matrix)
const allowlist = new Set(conceptCommands.map((command) => command.name))

export interface ChatLabels {
  readonly tool: string
  readonly web: string
}

export type EmitLine = (role: 'assistant' | 'note', text: string) => void

export async function runAiChat(apiKey: string, text: string, emit: EmitLine, labels: ChatLabels): Promise<void> {
  const tools = [
    { type: 'web_search_20260209', name: 'web_search' },
    ...manifest.tools.map((tool) => ({ name: tool.name, description: tool.description, input_schema: tool.inputSchema })),
  ]
  const messages: any[] = [{ role: 'user', content: text }]
  for (let step = 0; step < 6; step += 1) {
    const httpResponse = await fetch(ANTHROPIC_MESSAGES_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({ model: 'claude-opus-4-8', max_tokens: 4096, thinking: { type: 'adaptive' }, tools, messages }),
    })
    const response: any = await httpResponse.json()
    if (!httpResponse.ok || response?.type === 'error') {
      emit('note', `· ${response?.error?.message ?? `request failed (${httpResponse.status})`}`)
      return
    }
    messages.push({ role: 'assistant', content: response.content })
    for (const block of response.content) {
      if (block.type === 'text' && block.text.trim()) emit('assistant', block.text)
      else if (block.type === 'server_tool_use') emit('note', `· ${labels.web}`)
    }
    if (response.stop_reason === 'pause_turn') continue
    const toolUses = response.content.filter((block: any) => block.type === 'tool_use')
    if (toolUses.length === 0) break
    const results: any[] = []
    for (const toolUse of toolUses) {
      if (!allowlist.has(toolUse.name)) {
        results.push({ type: 'tool_result', tool_use_id: toolUse.id, content: 'refused: not in allowlist', is_error: true })
        continue
      }
      emit('note', `· ${labels.tool}: ${toolUse.name}`)
      const out = executeConceptCommand(toolUse.name as ConceptCommandName, { atom: toolUse.input?.atom }, matrix)
      results.push({ type: 'tool_result', tool_use_id: toolUse.id, content: JSON.stringify(out).slice(0, 6000) })
    }
    messages.push({ role: 'user', content: results })
  }
}
