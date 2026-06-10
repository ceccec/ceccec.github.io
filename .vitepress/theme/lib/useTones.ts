import { onUnmounted, ref } from 'vue'

// One audio engine for every player. Each player used to re-resolve the
// AudioContext, rebuild the same ADSR oscillator loop, and manage its own
// playing flag — and most could neither stop nor clean up their context. This
// composable owns all of it: resolve once, play a melody (playSequence) or a
// sustained chord (playChord), stop with a soft fade, and close the context on
// unmount so nothing leaks. Web Audio only, client-side, on user gesture.
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

export function useTones() {
  const playing = ref(false)
  // The playhead: the index of the note sounding right now, or -1 when idle.
  // Players read it to highlight what is currently playing.
  const current = ref(-1)
  let ctx: AudioContext | null = null
  let active: { osc: OscillatorNode; gain: GainNode }[] = []
  let timer: ReturnType<typeof setTimeout> | null = null
  let marks: ReturnType<typeof setTimeout>[] = []
  let blipCtx: AudioContext | null = null

  function open(): AudioContext | null {
    if (typeof window === 'undefined') return null
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return null
    return new Ctx()
  }

  // A melody: notes one after another, each with a short attack/release.
  function playSequence(notes: readonly Tone[], options: SequenceOptions = {}) {
    if (playing.value || notes.length === 0) return
    const audio = open()
    if (!audio) return
    const { type = 'sine', duration = 0.32, peak = 0.18, gap = 0, lead = 0.05 } = options
    ctx = audio
    playing.value = true
    let when = audio.currentTime + lead
    notes.forEach((note, index) => {
      const length = note.duration ?? duration
      const osc = audio.createOscillator()
      const gain = audio.createGain()
      osc.type = note.type ?? type
      osc.frequency.value = note.frequency
      gain.gain.setValueAtTime(0.0001, when)
      gain.gain.exponentialRampToValueAtTime(note.gain ?? peak, when + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, when + length)
      osc.connect(gain)
      gain.connect(audio.destination)
      osc.start(when)
      osc.stop(when + length)
      active.push({ osc, gain })
      // Advance the playhead when this note begins.
      marks.push(setTimeout(() => (current.value = index), Math.max(0, (when - audio.currentTime) * 1000)))
      when += length + gap
    })
    timer = setTimeout(finish, (when - audio.currentTime) * 1000 + 200)
  }

  // A one-shot tone: fire and forget, on a single reused context. For rapid,
  // interaction-driven blips that must not be blocked by the playing guard.
  function blip(frequency: number, options: BlipOptions = {}) {
    if (typeof window === 'undefined') return
    if (!blipCtx) blipCtx = open()
    if (!blipCtx) return
    const audio = blipCtx
    const { type = 'sine', peak = 0.08, duration = 0.16, attack = 0.012 } = options
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = type
    osc.frequency.value = frequency
    gain.gain.setValueAtTime(0.0001, audio.currentTime)
    gain.gain.exponentialRampToValueAtTime(peak, audio.currentTime + attack)
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration)
    osc.connect(gain)
    gain.connect(audio.destination)
    osc.start()
    osc.stop(audio.currentTime + duration + 0.02)
  }

  // A chord/drone: all tones together, sustained until stop() is called.
  function playChord(tones: readonly Tone[], options: ChordOptions = {}) {
    if (playing.value || tones.length === 0) return
    const audio = open()
    if (!audio) return
    const { type = 'sine', attack = 0.6, gain: peak = 0.12 } = options
    ctx = audio
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

  // Stop now: fade the active nodes out and close the context shortly after.
  function stop() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    for (const mark of marks) clearTimeout(mark)
    marks = []
    current.value = -1
    try {
      blipCtx?.close()
    } catch {
      /* already closed */
    }
    blipCtx = null
    const now = ctx?.currentTime ?? 0
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
    const closing = ctx
    ctx = null
    playing.value = false
    setTimeout(() => {
      try {
        closing?.close()
      } catch {
        /* already closed */
      }
    }, 300)
  }

  // A scheduled sequence finished on its own: just close and reset.
  function finish() {
    timer = null
    for (const mark of marks) clearTimeout(mark)
    marks = []
    current.value = -1
    active = []
    const closing = ctx
    ctx = null
    playing.value = false
    try {
      closing?.close()
    } catch {
      /* already closed */
    }
  }

  onUnmounted(stop)
  return { playing, current, playSequence, playChord, blip, stop }
}
