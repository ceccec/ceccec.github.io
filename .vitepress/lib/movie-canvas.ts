// One hero clock + canvas resize/paint — background movie, card movies, subtitles (DRY mount).
import { computed, nextTick, onMounted, onUnmounted, ref, shallowRef, type Ref } from 'vue'
import {
  HERO_CYCLE_MS,
  SCREENSAVER_IDLE_MS,
  pointerInteraction,
  sharedHeroAt,
  subscribeHeroClock,
  type PointerInteraction,
  type SharedHeroCopy,
  type SharedHeroState,
} from './hero-movie-paint'
import {
  WATCH_MS_STORAGE_KEY,
  encodeWatchMsPersist,
  parseWatchMsPersist,
  attunementTier,
} from '../../src/lake/music/index'

export type MovieIntensity = 'full' | 'soft' | 'whisper'

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ── The ONE A432 audio engine (browser side) ───────────────────────────────────────────────────────────
// All sound across every animation derives from the single A432 source: the Hz comes from sealed
// pointerInteraction → proseToTone (f = 432·2^(s/12)); this only OPENS the oscillator on the user gesture.
// One module-level AudioContext (lazy, gesture-resumed, never closed), feature-detected — a no-op under SSR
// or where Web Audio is unavailable, so the Node/VitePress build never touches it.
let sharedAudio: AudioContext | null = null

function sharedAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return null
  if (!sharedAudio) {
    try {
      sharedAudio = new Ctor()
    } catch {
      return null
    }
  }
  return sharedAudio
}

/** Play one A432-sourced tone with a soft rise/fall envelope (no click). hz MUST come from the sealed A432
 *  source (proseToTone / a432NoteHz). Tied to a user gesture by the caller, so it respects autoplay policy. */
export function playA432Tone(hz: number, durationMs = (16 * 5 * 3)): void {
  const ctx = sharedAudioContext()
  if (!ctx || !(hz > 0)) return
  if (ctx.state === 'suspended') void ctx.resume()
  const now = ctx.currentTime
  const dur = Math.max((1 / (5 * 5)), durationMs / (100 * 5 * 2))
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(hz, now)
  gain.gain.setValueAtTime((1 / (100 * 100)), now)
  gain.gain.exponentialRampToValueAtTime((3 / (5 * 5)), now + (3 / (5 * 5 * 5 * 2))) // rise
  gain.gain.exponentialRampToValueAtTime((1 / (100 * 100)), now + dur) // fall
  osc.connect(gain).connect(ctx.destination)
  osc.start(now)
  osc.stop(now + dur)
}

/** Haptic vibration, feature-detected and reduced-motion-aware — no-op on desktop / iOS Safari / when reduced. */
function vibrate(pattern: readonly number[], reduce: boolean): void {
  if (reduce || typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return
  try {
    navigator.vibrate([...pattern])
  } catch {
    /* unsupported — graceful no-op */
  }
}

/** Shared RAF phase clock — one loop for page hero, card plasma, and subtitle cues. */
export function useHeroClock(onTick?: (at: number) => void) {
  const at = shallowRef(typeof performance !== 'undefined' ? performance.now() : 0)
  let off: (() => void) | null = null

  onMounted(() => {
    off = subscribeHeroClock((time) => {
      at.value = time
      onTick?.(time)
    })
  })

  onUnmounted(() => {
    off?.()
    off = null
  })

  return { at }
}

/**
 * One hub for BackgroundMovie · card previews · LinkedHeroCard phase — pairs `hero/card` · `hero/anim`.
 * Wraps `sharedHeroAt` on the ONE hero clock (subscribeHeroClock); CardBackgroundMovie + hero layer
 * share phase `p` / root — no private rAF. HONEST: neuroscience/computation field — not physical QM.
 */
export function useSharedHero(
  route: () => string,
  copy: () => SharedHeroCopy,
  opts: { reduce?: () => boolean; dark?: () => boolean; cssWidth?: () => number } = {},
) {
  const { at } = useHeroClock()
  const shared = computed<SharedHeroState>(() =>
    sharedHeroAt(
      route(),
      copy(),
      at.value,
      opts.cssWidth?.() ?? (64 * 16),
      opts.reduce?.() ?? false,
      opts.dark?.() ?? true,
    ),
  )
  return { at, shared }
}

export function resizeCanvas2d(
  canvas: HTMLCanvasElement,
  w: number,
  h: number,
): CanvasRenderingContext2D | null {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1
  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`
  canvas.width = Math.floor(w * dpr)
  canvas.height = Math.floor(h * dpr)
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  return ctx
}

type VisibleMovieCanvasOptions = {
  canvas: Ref<HTMLCanvasElement | null>
  root?: Ref<HTMLElement | null>
  measure: () => { w: number; h: number }
  paint: (ctx: CanvasRenderingContext2D, w: number, h: number, at: number) => void
  visibility: 'document' | 'intersection'
  /**
   * Make this animation TOUCH-responsive, A432-SOUNDING and HAPTIC. When set, pointer/touch events on the
   * canvas drive the sealed `pointerInteraction` mapping: the pointer position scrubs the one phase clock (so
   * `paint` receives a scrubbed `at`), the fold's content-address plays an A432-sourced tone, and the SAME
   * vortex math vibrates the device. Feature-detected (PointerEvent / AudioContext / navigator.vibrate) and
   * reduced-motion-aware; the base animation still plays without any interaction (keyboard/no-touch fallback).
   */
  interactive?: {
    /** Content-address seed for the tone + haptic pattern — typically the movie/route path. */
    seed: () => string
    /** Receives each pointer interaction (scrub, hz, vibrate pattern) for optional consumer use. */
    onInteract?: (interaction: PointerInteraction) => void
  }
}

/** Hero-clock canvas with document- or intersection-gated paint. */
export function useVisibleMovieCanvas(options: VisibleMovieCanvasOptions) {
  const cssWidth = ref((64 * 16))
  let visible = options.visibility === 'document'
  let observer: IntersectionObserver | null = null
  let onVisibility: (() => void) | null = null
  let lastW = 0
  let lastH = 0
  let ctx: CanvasRenderingContext2D | null = null
  // Touch scrub of the one phase clock — pointer x → an offset added to the hero clock time, so the same
  // deterministic phase math (sharedHeroAt) renders the scrubbed frame. 0 (no behaviour change) until touched.
  let scrubMs = 0
  const reduceMotion = prefersReducedMotion()

  function paintFrame(time: number): void {
    if (!visible) return
    const el = options.canvas.value
    if (!el) return
    const { w, h } = options.measure()
    if (w < 1 || h < 1) return
    if (w !== lastW || h !== lastH) {
      ctx = resizeCanvas2d(el, w, h)
      lastW = w
      lastH = h
      cssWidth.value = w
    } else if (!ctx) {
      ctx = el.getContext('2d')
      if (ctx && typeof window !== 'undefined') {
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }
    if (!ctx) return
    options.paint(ctx, w, h, time + scrubMs)
  }

  const { at } = useHeroClock(paintFrame)

  function repaint(): void {
    paintFrame(at.value)
  }

  // ── Multi-sensory interaction surface (touch · A432 sound · haptic vibration) ──────────────────────────
  // Implemented ONCE here so every animation that mounts through this composable inherits it. All three
  // modalities derive from the SAME sealed mapping (pointerInteraction): position → clock scrub, fold → A432
  // tone, fold → vortex haptic. Feature-detected and SSR-guarded — absent APIs degrade to a no-op.
  let pressing = false
  let detachInteraction: (() => void) | null = null

  function interactAt(ev: PointerEvent, sound: boolean): void {
    const el = options.canvas.value
    const seed = options.interactive?.seed
    if (!el || !seed) return
    const rect = el.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return
    const it = pointerInteraction(seed(), ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height, HERO_CYCLE_MS)
    scrubMs = it.scrubMs
    if (sound) {
      playA432Tone(it.hz) // A432-sourced (proseToTone), opened on this gesture — respects autoplay policy
      vibrate(it.vibrate, reduceMotion) // the same vortex math as haptics
    }
    options.interactive?.onInteract?.(it)
    repaint()
  }

  function attachInteraction(): void {
    const el = options.canvas.value
    if (!el || !options.interactive || typeof window === 'undefined' || !('PointerEvent' in window)) return
    const onDown = (ev: PointerEvent): void => {
      pressing = true
      // No pointer capture and no preventDefault: a tap still bubbles to a wrapping link/button (navigation
      // and sound coexist), and drag-scrub works while the pointer stays over the canvas.
      interactAt(ev, true)
    }
    const onMove = (ev: PointerEvent): void => {
      if (pressing) interactAt(ev, false) // scrub while dragging; tone only on the initiating gesture
    }
    const onUp = (): void => {
      pressing = false
    }
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('pointerleave', onUp)
    detachInteraction = (): void => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      el.removeEventListener('pointerleave', onUp)
    }
  }

  onMounted(async () => {
    await nextTick()
    if (options.visibility === 'document') {
      onVisibility = (): void => {
        visible = typeof document !== 'undefined' ? !document.hidden : true
        repaint()
      }
      document.addEventListener('visibilitychange', onVisibility)
      onVisibility()
    } else if (options.root?.value) {
      visible = false
      observer = new IntersectionObserver(
        (entries) => {
          visible = entries.some((entry) => entry.isIntersecting)
          if (visible) repaint()
        },
        { rootMargin: '64px' },
      )
      observer.observe(options.root.value)
    }
    window.addEventListener('resize', repaint)
    attachInteraction()
    repaint()
  })

  onUnmounted(() => {
    if (onVisibility) document.removeEventListener('visibilitychange', onVisibility)
    observer?.disconnect()
    observer = null
    window.removeEventListener('resize', repaint)
    detachInteraction?.()
    detachInteraction = null
    ctx = null
    lastW = 0
    lastH = 0
  })

  return { at, cssWidth, repaint }
}


/** Coherent watch-time — accumulates on the EXISTING hero-clock tick (call `onHeroTick` from paint).
 *  Gates: document visible · not idle (screensaver / SCREENSAVER_IDLE_MS) · not reduce-motion.
 *  Persist key `ceccec:watch-ms` as `{ ms, root }`. Tier = attunementTier(watchMs) at call time.
 *  HONEST: progressive disclosure of model depth — not cognitive capacity / brain measurement.
 */
export function useCoherentWatchTime() {
  const watchMs = ref(0)
  const idle = ref(false)
  const visible = ref(true)
  let persistedBase = 0
  let sessionDelta = 0
  let lastAt: number | null = null
  let lastPersistAt = 0
  let lastActivityAt = typeof performance !== 'undefined' ? performance.now() : 0
  const reduce = prefersReducedMotion()
  let detachActivity: (() => void) | null = null

  function loadPersisted(): number {
    if (typeof localStorage === 'undefined') return 0
    return parseWatchMsPersist(localStorage.getItem(WATCH_MS_STORAGE_KEY))
  }

  function persist(ms: number): void {
    if (typeof localStorage === 'undefined') return
    try {
      localStorage.setItem(WATCH_MS_STORAGE_KEY, encodeWatchMsPersist(ms))
    } catch {
      /* quota / private mode — keep session-only */
    }
  }

  function noteActivity(): void {
    lastActivityAt = typeof performance !== 'undefined' ? performance.now() : Date.now()
  }

  function computeIdle(now: number): boolean {
    if (typeof document !== 'undefined' && document.documentElement.classList.contains('vp-hero-screensaver')) {
      return true
    }
    return now - lastActivityAt >= SCREENSAVER_IDLE_MS
  }

  function computeVisible(): boolean {
    return typeof document === 'undefined' ? false : !document.hidden
  }

  /** Call from the one hero-clock paint path — no second rAF. */
  function onHeroTick(at: number): void {
    const vis = computeVisible()
    const idl = computeIdle(at)
    visible.value = vis
    idle.value = idl
    if (vis && !idl && !reduce && lastAt !== null) {
      const d = Math.max(0, Math.min(at - lastAt, HERO_CYCLE_MS / (9 * 2)))
      sessionDelta += d
      watchMs.value = persistedBase + sessionDelta
    }
    lastAt = at
    // Throttle persist ~6 s (hero fractal breath step)
    if (at - lastPersistAt >= HERO_CYCLE_MS / (9 * 2)) {
      lastPersistAt = at
      persist(watchMs.value)
      persistedBase = watchMs.value
      sessionDelta = 0
    }
  }

  onMounted(() => {
    persistedBase = loadPersisted()
    sessionDelta = 0
    watchMs.value = persistedBase
    noteActivity()
    if (typeof window === 'undefined') return
    const events = ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart'] as const
    for (const ev of events) window.addEventListener(ev, noteActivity, { passive: true })
    detachActivity = (): void => {
      for (const ev of events) window.removeEventListener(ev, noteActivity)
    }
  })

  onUnmounted(() => {
    persist(watchMs.value)
    detachActivity?.()
    detachActivity = null
  })

  function tierAt() {
    return attunementTier(watchMs.value)
  }

  return { watchMs, idle, visible, onHeroTick, tierAt, reduce }
}


export function viewportSize(): { w: number; h: number } {
  if (typeof window === 'undefined') return { w: (64 * 16), h: (64 * 6 * 2) }
  return { w: window.innerWidth, h: window.innerHeight }
}
