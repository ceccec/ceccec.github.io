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
    if (typeof nav.getBattery === 'function') {
      nav
        .getBattery()
        .then((raw) => {
          const battery = raw as EventTarget & { level: number; charging: boolean }
          const onBattery = () => {
            batteryLevel.value = battery.level
            charging.value = battery.charging
            recompute()
          }
          battery.addEventListener('levelchange', onBattery)
          battery.addEventListener('chargingchange', onBattery)
          onBattery()
          onUnmounted(() => {
            battery.removeEventListener('levelchange', onBattery)
            battery.removeEventListener('chargingchange', onBattery)
          })
        })
        .catch(() => {
          /* Battery API unavailable or blocked: spend normally. */
        })
    }

    onUnmounted(() => document.removeEventListener('visibilitychange', onVisibility))
    recompute()
  }

  return { saveEnergy, batteryLevel, charging, visible, reducedMotion }
}
