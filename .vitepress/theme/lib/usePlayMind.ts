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
