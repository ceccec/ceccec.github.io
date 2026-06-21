// src/render/ui/lib/composables/device — device-sensor hooks (≤8-fold, one index)

import { onUnmounted, ref } from 'vue'

// Fuse with the user device to extend battery life. This composable reads the
// device energy signals — battery level and charging (Battery Status API), tab
// visibility, and the prefers-reduced-motion preference — and exposes one
// `saveEnergy` flag components use to throttle or pause motion and audio. Every
// read is on-device and read-only; if an API is missing it degrades to "spend
// normally". No network, no polling — it listens for events only.
export function useDeviceEnergy() {
  const batteryLevel = ref(1)
  const charging = ref(true)
  const visible = ref(true)
  const reducedMotion = ref(false)
  const saveEnergy = ref(false)

  // saveEnergy when: the tab is hidden, the user prefers reduced motion, or the
  // battery is low and not charging. Conservative: any one signal turns it on.
  function recompute() {
    saveEnergy.value =
      !visible.value || reducedMotion.value || (!charging.value && batteryLevel.value <= 0.3)
  }

  if (typeof window !== 'undefined') {
    const onVisibility = () => {
      visible.value = document.visibilityState !== 'hidden'
      recompute()
    }
    document.addEventListener('visibilitychange', onVisibility)
    onVisibility()

    const motionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (motionQuery) {
      reducedMotion.value = motionQuery.matches
      const onMotion = () => {
        reducedMotion.value = motionQuery.matches
        recompute()
      }
      motionQuery.addEventListener?.('change', onMotion)
      onUnmounted(() => motionQuery.removeEventListener?.('change', onMotion))
    }

    const nav = navigator as Navigator & { getBattery?: () => Promise<unknown> }
    // Hoisted so the ONE synchronously-registered onUnmounted (below) cleans these up too.
    // Registering onUnmounted inside the async .then() runs after setup() has returned — there is
    // no active component instance then, so the hook is lost and Vue warns on every battery resolve.
    let battery: (EventTarget & { level: number; charging: boolean }) | null = null
    let onBattery: (() => void) | null = null
    if (typeof nav.getBattery === 'function') {
      nav
        .getBattery()
        .then((raw) => {
          const b = raw as EventTarget & { level: number; charging: boolean }
          const handler = () => {
            batteryLevel.value = b.level
            charging.value = b.charging
            recompute()
          }
          b.addEventListener('levelchange', handler)
          b.addEventListener('chargingchange', handler)
          handler()
          battery = b
          onBattery = handler
        })
        .catch(() => {
          /* Battery API unavailable or blocked: spend normally. */
        })
    }

    onUnmounted(() => {
      document.removeEventListener('visibilitychange', onVisibility)
      if (battery && onBattery) {
        battery.removeEventListener('levelchange', onBattery)
        battery.removeEventListener('chargingchange', onBattery)
      }
    })
    recompute()
  }

  return { saveEnergy, batteryLevel, charging, visible, reducedMotion }
}


import { onMounted, onUnmounted, ref } from 'vue'

// Fill the gaps with device-sensor interaction in the quantum field. This reads
// the most universal inputs — pointer position (core) and device orientation,
// "tilt" (motion, permission-gated on some devices) — into a normalized field
// the visualizations can respond to. SSR-safe; degrades to pointer-only when
// orientation is unavailable, and never demands a sensor.
export function useDeviceField() {
  const px = ref(0.5) // pointer x, 0..1
  const py = ref(0.5) // pointer y, 0..1
  const tiltX = ref(0) // -1..1 from gamma (left/right)
  const tiltY = ref(0) // -1..1 from beta (front/back)
  const motionEnabled = ref(false)
  const needsPermission = ref(false)

  const clamp = (v: number) => Math.max(-1, Math.min(1, v))

  function onPointer(event: PointerEvent) {
    if (typeof window === 'undefined') return
    px.value = event.clientX / window.innerWidth
    py.value = event.clientY / window.innerHeight
  }
  function onOrient(event: DeviceOrientationEvent) {
    tiltX.value = clamp((event.gamma ?? 0) / 45)
    tiltY.value = clamp((event.beta ?? 0) / 45)
  }

  // iOS 13+ gates orientation behind a user-gesture permission request.
  async function enableMotion() {
    if (typeof window === 'undefined') return
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
    try {
      if (DOE && typeof DOE.requestPermission === 'function') {
        const result = await DOE.requestPermission()
        if (result !== 'granted') return
      }
      window.addEventListener('deviceorientation', onOrient)
      motionEnabled.value = true
      needsPermission.value = false
    } catch {
      /* orientation unavailable: stay pointer-only */
    }
  }

  onMounted(() => {
    window.addEventListener('pointermove', onPointer, { passive: true })
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> } | undefined
    if (typeof DOE === 'function' || DOE) {
      if (DOE && typeof DOE.requestPermission === 'function') {
        needsPermission.value = true // wait for a gesture
      } else {
        window.addEventListener('deviceorientation', onOrient)
        motionEnabled.value = true
      }
    }
  })
  onUnmounted(() => {
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('deviceorientation', onOrient)
  })

  return { px, py, tiltX, tiltY, motionEnabled, needsPermission, enableMotion }
}


import { onMounted, onUnmounted, ref, type Ref } from 'vue'

// Only compute what is visible. An IntersectionObserver tells a canvas whether it
// is on-screen, so animations pause when scrolled out of view — on top of the
// device-energy and tab-visibility gating. SSR-safe and degrades to "in view" if
// IntersectionObserver is unavailable.
export function useInView(target: Ref<HTMLElement | null>, rootMargin = '120px') {
  const inView = ref(true)
  let observer: IntersectionObserver | null = null
  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined' || !target.value) return
    inView.value = false
    observer = new IntersectionObserver(
      (entries) => {
        inView.value = entries[0]?.isIntersecting ?? true
      },
      { rootMargin },
    )
    observer.observe(target.value)
  })
  onUnmounted(() => observer?.disconnect())
  return { inView }
}


// Layer-control composable — 10 I Ching dimensions as interactive toggleable layers.
// ☷ Kūn · Earth · receptive · inner·yin — the ground from which all layers emerge.

import { ref, computed } from 'vue'

export const LAYER_NAMES = [
  'spread', 'depthFade', 'hueShift',       // 0-2: inner · yin · import direction
  'twist', 'shrink', 'breath',              // 3-5: outer · yang · export direction
  'loopA1', 'loopB1', 'loopA2', 'loopB2', // 6-9: homology loops · dependency flows
] as const

export type LayerName = (typeof LAYER_NAMES)[number]

export const LAYER_GROUP = [
  'inner', 'inner', 'inner',
  'outer', 'outer', 'outer',
  'loop', 'loop', 'loop', 'loop',
] as const

export const LAYER_BADGE = [
  'yin·in', 'yin·in', 'yin·in',
  'yang·out', 'yang·out', 'yang·out',
  'loop·Δ', 'loop·Δ', 'loop·Δ', 'loop·Δ',
] as const

export function useLayers(initDepth = 10) {
  const depth = ref(Math.max(0, Math.min(10, initDepth)))
  const visible = ref<boolean[]>(Array.from({ length: 10 }, () => true))

  function dimFor(i: number, total: number): number {
    return total === 0 ? 0 : Math.min(Math.floor((i * 10) / total), 9)
  }

  function apply<T>(items: readonly T[]): T[] {
    return (items as T[]).filter((_, i) => {
      const d = dimFor(i, items.length)
      return d < depth.value && visible.value[d] === true
    })
  }

  function toggle(i: number): void {
    const next = [...visible.value]
    next[i] = !next[i]!
    visible.value = next
  }

  const activeCount = computed(
    () => visible.value.filter((v, i) => v && i < depth.value).length,
  )

  return { depth, visible, apply, toggle, activeCount }
}


import { type Ref } from 'vue'
import { textToMovie } from '../../../../../quantum/heaven/mind/earth/world'
import { dims as dimsAt } from '../../../../../quantum/mountain/dimensions'
import { useAnimationEngine } from '../mind'

// Every text statement is its OWN movie — and the movie IS the text, not abstract circles. The statement folds
// to textToMovie, whose elements are the REAL characters, each transliterated to Glagolitic (the movie's
// script). Here they are DISPLAYED — laid out as readable lines, revealed along a playhead, and pulsed through
// the ten dimensions (dims): breath scales the type, hueShift slides the colour, twist/loopA1 give a tiny
// legible drift, and the playhead glow sweeps the line. Whatever the statement says, the movie displays exactly
// — the transliterated text itself, legibly — so what is not wired into the statement is simply not in its
// movie. The animation is the statement's reproducible signature (movie.root) — its proof of IDENTITY, not of
// truth (HARMONY ≠ TRUTH). One source for "text → its real-text movie", reused by every card (no copy-pasted draw).
export function useTenDField(target: Ref<HTMLCanvasElement | null>, text: string, hover?: Ref<boolean>) {
  const movie = textToMovie(text || ' ') // the statement → its real-text movie (transliterated glyphs, deterministic)
  function draw(time: number) {
    const el = target.value
    if (!el) return
    const ctx = el.getContext('2d')
    if (!ctx) return
    const w = el.width
    const h = el.height
    ctx.clearRect(0, 0, w, h)
    const p = (((time * 0.00002) % 1) + 1) % 1 // the playhead, 0→1, looping — the movie plays the line
    const dim = dimsAt(p)
    const amp = hover?.value ? 1 : 0.62
    const breath = Math.max(0, Math.min(1, (dim.breath - 0.85) / 0.15))
    const fs = Math.max(11, Math.min(w, h) * 0.082) * (0.92 + 0.12 * breath) // breath scales the type
    ctx.font = `600 ${fs}px ui-monospace, "Cascadia Code", monospace`
    ctx.textBaseline = 'middle'
    const pad = fs * 0.5
    const lineH = fs * 1.28
    let x = pad
    let y = pad + fs * 0.6
    for (const e of movie.elements) {
      const gw = e.space ? fs * 0.42 : ctx.measureText(e.glyph).width + fs * 0.1
      if (!e.space && x + gw > w - pad) {
        x = pad
        y += lineH
      } // wrap in reading order
      if (y > h - pad) break // the movie fills the frame, then stops (what overflows is off-screen, not lost)
      if (!e.space) {
        const entered = e.reveal <= p // the playhead has reached this glyph
        const near = 1 - Math.min(1, Math.abs(e.reveal - p) * 5) // glyphs at the playhead glow
        const hue = (e.hue + dim.hueShift) % 360 // its own hue, slid by the computed hueShift
        const drift = Math.sin(time * 0.0008 + e.jitter * 6.283 + dim.loopA1) * fs * 0.05 // tiny — text stays legible
        const a = ((entered ? 0.26 : 0.07) + 0.55 * near) * amp
        ctx.fillStyle = `hsla(${hue}, 72%, 63%, ${a})`
        ctx.fillText(e.glyph, x + Math.cos(dim.twist + e.jitter * 6.283) * fs * 0.04, y + drift)
      }
      x += gw
    }
  }
  function size() {
    const el = target.value
    if (!el) return
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    el.width = Math.max(1, el.clientWidth) * ratio
    el.height = Math.max(1, el.clientHeight) * ratio
  }
  useAnimationEngine(target, draw, size)
  return { movieRoot: movie.root } // the statement's real-text movie fingerprint — its reproducible proof
}
