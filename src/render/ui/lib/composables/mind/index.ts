// src/render/ui/lib/composables/mind — mind/locale/audio hooks (≤8-fold, one index)

import { computed } from 'vue'
import { useData } from 'vitepress'
import { toGlagolitic } from '../../../../../quantum/heaven/library'

// Keys whose VALUES are identity/route/style, never display text — they must NOT be transcoded in the Glagolitic
// root (a route or a class name becoming Glagolitic would break it). pickDeep skips them while descending a
// locale data object; every other string field is transcoded, so the whole object reads in the movie's script.
const GLA_SKIP_KEY = /^(route|link|url|href|to|path|slug|id|key|class|className|color|colour|hue|glyph|icon|src|anchor|code|lang|locale|tag|kind)$/i
function transcodeDeep(value: unknown): unknown {
  if (typeof value === 'string') return toGlagolitic(value)
  if (Array.isArray(value)) return value.map(transcodeDeep)
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {}
    for (const [key, v] of Object.entries(value)) out[key] = GLA_SKIP_KEY.test(key) ? v : transcodeDeep(v)
    return out
  }
  return value // numbers, booleans, refs, class instances — pass through untouched
}

// One locale lens for the whole theme. Every component used to repeat the same
// three lines — read the lang, derive a `bg` flag, and localize a route by
// prefixing `/bg` (keeping the root as `/` and leaving asset URLs untouched).
// That redundancy now lives here once: `bg` for bilingual text, `gla` for the
// Glagolitic root, `prefix` for the locale path segment, and `localize(route)`
// for turning an English route into the current locale's route. No network, pure
// derivation from VitePress data.
export function useLocale() {
  const { lang } = useData()
  const bg = computed(() => lang.value.startsWith('bg'))
  // The Glagolitic ROOT locale (lang 'cu'). Its UI is the English UI rendered in
  // the Glagolitic SCRIPT — computed by transcoding, never a separate hand-typed set.
  const gla = computed(() => lang.value.startsWith('cu'))
  const prefix = computed(() => (bg.value ? '/bg' : ''))
  // Localize an internal route into the current locale. The root stays `/`, and
  // anything that looks like a static asset (json/txt/webmanifest) is left as-is.
  function localize(route: string) {
    if (/\.(json|txt|webmanifest)$/.test(route)) return route
    return prefix.value + (route === '/' ? '/' : route)
  }
  // Pick the locale's value: en in English, bg in Bulgarian, and in the Glagolitic
  // root a STRING is transcoded from English via toGlagolitic — NOTHING bypasses
  // transcoding, so the whole UI reads in Glagolitic without a second hand-kept set
  // of strings. Non-string values (routes, numbers, nodes) are never transcoded —
  // they fall through to en (a route is localized by `localize`, not picked).
  function pick<T>(en: T, bgValue: T): T {
    if (gla.value && typeof en === 'string') return toGlagolitic(en) as unknown as T
    return bg.value ? bgValue : en
  }
  // Transcode one string in the Glagolitic root (else identity) — wrap a template interpolation that is not a
  // bg/en pair: {{ tg(item.title) }}. Non-strings pass through.
  function tg<T>(value: T): T {
    return gla.value && typeof value === 'string' ? (toGlagolitic(value) as unknown as T) : value
  }
  // The DEEP pick for locale DATA objects/arrays (bg.value ? enObj : bgObj): in the Glagolitic root it transcodes
  // every string FIELD of the English value, except route/identity/style keys (GLA_SKIP_KEY) — so a whole locale
  // object reads in Glagolitic without a hand-kept third set, and routes/classes stay intact. Else: en or bg.
  function pickDeep<T>(en: T, bgValue: T): T {
    return gla.value ? (transcodeDeep(en) as T) : bg.value ? bgValue : en
  }
  return { bg, gla, prefix, localize, pick, tg, pickDeep }
}


import { ref } from 'vue'

// The quantum mind that forms by playing. Students do not know they are on an exam:
// every play — a tap on the background-movie game, a play of a hero — folds silently
// into an offline, content-addressed record. The results point the musical note (the
// tone the next interaction sounds) and bias the stream of art (the background movie),
// in balance with the individual — a gentle, personalised shift, never overwhelming.
// Offline by default; shared only by request and approval.
const KEY = 'dt-quantum-mind'
const PENTA = [0, 2, 4, 7, 9]

export interface Mind {
  plays: number
  kinds: Record<string, number>
  root: string
}

function fnv(input: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

function read(): Mind {
  if (typeof localStorage === 'undefined') return { plays: 0, kinds: {}, root: '00000000' }
  try {
    const m = JSON.parse(localStorage.getItem(KEY) || '')
    if (m && typeof m.plays === 'number') return m
  } catch {
    // ignore
  }
  return { plays: 0, kinds: {}, root: '00000000' }
}

const mind = ref<Mind>(read())

// Record one play. Returns the updated mind so the caller can sound the note the
// results now point to.
export function recordPlay(kind = 'play'): Mind {
  if (typeof localStorage === 'undefined') return mind.value
  const m = read()
  m.plays += 1
  m.kinds[kind] = (m.kinds[kind] || 0) + 1
  m.root = fnv(`${m.root}:${kind}:${m.plays}`) // content-addressed accumulation
  localStorage.setItem(KEY, JSON.stringify(m))
  mind.value = m
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('dt-play'))
  return m
}

// The results point the musical note: the mind's root chooses a pentatonic step, its
// play-count the octave.
export function noteOf(m: Mind): number {
  const idx = Number.parseInt(m.root.slice(0, 4), 16) || 0
  const note = PENTA[idx % PENTA.length]
  const octave = m.plays % 3
  return 196 * Math.pow(2, (note + octave * 12) / 12)
}

// The stream of art in balance with the individual: a gentle hue bias from the mind,
// capped so it personalises without overwhelming.
export function artBiasOf(m: Mind): number {
  return Number.parseInt(m.root.slice(4, 8), 16) % 360 || 0
}

let wired = false
export function usePlayMind() {
  if (typeof window !== 'undefined' && !wired) {
    wired = true
    window.addEventListener('dt-play', () => {
      mind.value = read()
    })
  }
  return { mind, recordPlay, noteOf, artBiasOf }
}


import { onUnmounted, ref } from 'vue'

// ONE shared audio engine for the whole app. Every player used to resolve and CREATE its own AudioContext,
// and the sequence/chord paths created a fresh context per play and CLOSED it after — so each note cost a
// context startup (tens of ms of latency) and the ~20 sound components plus Dot/RealtimeTests churned through
// the browser's ~6-context limit until playback silently failed. Now there is a single module-level context,
// created lazily on the first sound, RESUMED on the user gesture that triggers it, and NEVER closed — reused,
// so there is no per-play creation latency and no exhaustion. Oscillators are still one-shot (correct); only
// the context is shared. Web Audio only, client-side, on user gesture.

// The one context. Lazy, gesture-resumed, never closed.
let SHARED: AudioContext | null = null
export function sharedAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!SHARED) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return null
    SHARED = new Ctx()
  }
  if (SHARED.state === 'suspended') void SHARED.resume() // the gesture that reached us un-suspends it
  return SHARED
}

export interface Tone {
  readonly frequency: number
  readonly duration?: number
  readonly gain?: number
  readonly type?: OscillatorType
}

export interface SequenceOptions {
  readonly type?: OscillatorType
  readonly duration?: number
  readonly peak?: number
  readonly gap?: number
  readonly lead?: number // seconds before the first note
}

export interface ChordOptions {
  readonly type?: OscillatorType
  readonly attack?: number
  readonly gain?: number
}

export interface BlipOptions {
  readonly type?: OscillatorType
  readonly peak?: number
  readonly duration?: number
  readonly attack?: number
}

// A one-shot tone on the shared context — fire and forget, lowest latency (no context churn). Module-level so
// rapid interaction blips (and Dot's tone) all share the one context instead of each minting their own.
export function blip(frequency: number, options: BlipOptions = {}) {
  const audio = sharedAudioContext()
  if (!audio) return
  const { type = 'sine', peak = 0.08, duration = 0.16, attack = 0.012 } = options
  const osc = audio.createOscillator()
  const gain = audio.createGain()
  osc.type = type
  osc.frequency.value = frequency
  const t = audio.currentTime
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(peak, t + attack)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration)
  osc.connect(gain).connect(audio.destination)
  osc.start()
  osc.stop(t + duration + 0.02)
}

export function useTones() {
  const playing = ref(false)
  // The playhead: the index of the note sounding right now, or -1 when idle.
  const current = ref(-1)
  let active: { osc: OscillatorNode; gain: GainNode }[] = []
  let timer: ReturnType<typeof setTimeout> | null = null
  let marks: ReturnType<typeof setTimeout>[] = []

  // A melody: notes one after another. Analog by nature, gapless — each note sustains to its end and its
  // release overlaps the next note's attack, so the phrase is never silent between notes.
  function playSequence(notes: readonly Tone[], options: SequenceOptions = {}) {
    if (playing.value || notes.length === 0) return
    const audio = sharedAudioContext()
    if (!audio) return
    const { type = 'sine', duration = 0.32, peak = 0.18, gap = 0, lead = 0.05 } = options
    playing.value = true
    let when = audio.currentTime + lead
    notes.forEach((note, index) => {
      const length = note.duration ?? duration
      const level = note.gain ?? peak
      const release = gap > 0 ? 0 : Math.min(0.09, length * 0.5)
      const osc = audio.createOscillator()
      const gain = audio.createGain()
      osc.type = note.type ?? type
      osc.frequency.value = note.frequency
      gain.gain.setValueAtTime(0.0001, when)
      gain.gain.exponentialRampToValueAtTime(level, when + 0.02) // attack
      gain.gain.setValueAtTime(level, when + length) // sustain to the note's end
      gain.gain.exponentialRampToValueAtTime(0.0001, when + length + release) // release overlaps the next
      osc.connect(gain)
      gain.connect(audio.destination)
      osc.start(when)
      osc.stop(when + length + release + 0.01)
      active.push({ osc, gain })
      marks.push(setTimeout(() => (current.value = index), Math.max(0, (when - audio.currentTime) * 1000)))
      when += length + gap
    })
    timer = setTimeout(finish, (when - audio.currentTime) * 1000 + 250)
  }

  // A chord/drone: all tones together, sustained until stop() is called.
  function playChord(tones: readonly Tone[], options: ChordOptions = {}) {
    if (playing.value || tones.length === 0) return
    const audio = sharedAudioContext()
    if (!audio) return
    const { type = 'sine', attack = 0.6, gain: peak = 0.12 } = options
    playing.value = true
    for (const tone of tones) {
      const osc = audio.createOscillator()
      const gain = audio.createGain()
      osc.type = tone.type ?? type
      osc.frequency.value = tone.frequency
      gain.gain.setValueAtTime(0.0001, audio.currentTime)
      gain.gain.exponentialRampToValueAtTime(tone.gain ?? peak, audio.currentTime + attack)
      osc.connect(gain)
      gain.connect(audio.destination)
      osc.start()
      active.push({ osc, gain })
    }
  }

  // Stop now: fade this player's active nodes out. The SHARED context is left running (reused) — only the
  // oscillators are stopped, so the next play has zero context-startup latency.
  function stop() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    for (const mark of marks) clearTimeout(mark)
    marks = []
    current.value = -1
    const now = SHARED?.currentTime ?? 0
    for (const node of active) {
      try {
        node.gain.gain.cancelScheduledValues(now)
        node.gain.gain.setValueAtTime(Math.max(node.gain.gain.value, 0.0001), now)
        node.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2)
        node.osc.stop(now + 0.25)
      } catch {
        /* already stopped */
      }
    }
    active = []
    playing.value = false
  }

  // A scheduled sequence finished on its own: just reset (the shared context stays).
  function finish() {
    timer = null
    for (const mark of marks) clearTimeout(mark)
    marks = []
    current.value = -1
    active = []
    playing.value = false
  }

  onUnmounted(stop)
  return { playing, current, playSequence, playChord, blip, stop }
}


// Shared bring-your-own-key AI chat loop, used by both the Quantum Console and
// the Global Help widget. It calls the Anthropic Messages API directly with a
// plain fetch — no SDK, nothing extra in the bundle — only when the user sends a
// message (client-side); the tools the model may call are restricted to the
// read-only concept commands. Security is by architecture: no secrets ship, the
// key stays in the caller's browser, output is text.
import { buildMatrix, conceptCommands, executeConceptCommand, mcpToolManifest, type ConceptCommandName } from '../../../../../quantum/heaven/mind'

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


import { onMounted, onUnmounted, watch, type Ref } from 'vue'
import { createAnimationEngine, type AnimationEngine } from '../../../../../0'
import { useDeviceEnergy } from '../device'
import { useInView } from '../device'

// The Vue glue every animated canvas repeated: tie the framework-free animation engine (src/0) to the
// page's motion gates and lifecycle. The engine itself imports nothing; this composable is where Vue meets
// it — useDeviceEnergy + useInView decide whether the movie should run (in view AND not saving energy: the
// default policy), the engine runs it or paints one still frame, a window resize redraws, and unmount
// disposes. A component passes its canvas, its draw, and its sizer; it gets back the engine and the gate
// refs (so draw can read saveEnergy/inView at frame time). One source for the animation lifecycle + gate
// policy, instead of the same nine lines in every component. The gate is overridable for the few movies
// with a different rule (e.g. reduced-motion-only, or pause when the tab is hidden).
export function useAnimationEngine(
  target: Ref<HTMLElement | null>,
  draw: (time: number) => void,
  size?: () => void,
  active?: (gates: { inView: Ref<boolean>; saveEnergy: Ref<boolean> }) => boolean,
): { engine: AnimationEngine; inView: Ref<boolean>; saveEnergy: Ref<boolean>; sync: () => void } {
  const { saveEnergy } = useDeviceEnergy()
  const { inView } = useInView(target)
  const engine = createAnimationEngine(draw)
  // Default policy: run only when on-screen and not saving energy. The same gate every canvas used.
  const sync = () => engine.sync(active ? active({ inView, saveEnergy }) : inView.value && !saveEnergy.value)
  watch([saveEnergy, inView], sync)
  onMounted(() => {
    size?.()
    if (size) window.addEventListener('resize', size)
    sync()
  })
  onUnmounted(() => {
    engine.dispose()
    if (size) window.removeEventListener('resize', size)
  })
  return { engine, inView, saveEnergy, sync }
}
