// One hero clock + canvas resize/paint — background movie, card movies, subtitles (DRY mount).
import { nextTick, onMounted, onUnmounted, ref, shallowRef, type Ref } from 'vue'
import { subscribeHeroClock } from './hero-movie'

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
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
}

/** Hero-clock canvas with document- or intersection-gated paint. */
export function useVisibleMovieCanvas(options: VisibleMovieCanvasOptions) {
  const cssWidth = ref(1024)
  let visible = options.visibility === 'document'
  let observer: IntersectionObserver | null = null
  let onVisibility: (() => void) | null = null

  function paintFrame(time: number): void {
    if (!visible) return
    const el = options.canvas.value
    if (!el) return
    const { w, h } = options.measure()
    if (w < 1 || h < 1) return
    const ctx = resizeCanvas2d(el, w, h)
    if (!ctx) return
    cssWidth.value = w
    options.paint(ctx, w, h, time)
  }

  const { at } = useHeroClock(paintFrame)

  function repaint(): void {
    paintFrame(at.value)
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
    repaint()
  })

  onUnmounted(() => {
    if (onVisibility) document.removeEventListener('visibilitychange', onVisibility)
    observer?.disconnect()
    observer = null
    window.removeEventListener('resize', repaint)
  })

  return { at, cssWidth, repaint }
}

export function viewportSize(): { w: number; h: number } {
  if (typeof window === 'undefined') return { w: 1024, h: 768 }
  return { w: window.innerWidth, h: window.innerHeight }
}
