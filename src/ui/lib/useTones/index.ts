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
