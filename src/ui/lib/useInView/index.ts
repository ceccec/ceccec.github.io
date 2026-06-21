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
