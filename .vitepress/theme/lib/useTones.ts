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

export function useTones() {
  const playing = ref(false)
  let ctx: AudioContext | null = null
  let active: { osc: OscillatorNode; gain: GainNode }[] = []
  let timer: ReturnType<typeof setTimeout> | null = null

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
    for (const note of notes) {
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
      when += length + gap
    }
    timer = setTimeout(finish, (when - audio.currentTime) * 1000 + 200)
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
  return { playing, playSequence, playChord, stop }
}
