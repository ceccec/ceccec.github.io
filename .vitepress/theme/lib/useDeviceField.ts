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
