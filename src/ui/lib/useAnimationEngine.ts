import { onMounted, onUnmounted, watch, type Ref } from 'vue'
import { createAnimationEngine, type AnimationEngine } from './quantumMind'
import { useDeviceEnergy } from './useDeviceEnergy'
import { useInView } from './useInView'

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
