import { ref } from 'vue'

// Simple ⇄ Rich. One shared, persisted flag for the whole theme: simple mode
// shows the essentials, rich mode reveals the full depth. The flag is written to
// the <html> element as data-mode so global CSS can hide .rich-only (or reveal
// .simple-only) anywhere, and any component can read `simple` to adapt. Persisted
// in localStorage; no network, no tracking.
const simple = ref(false)
let initialized = false

function apply() {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.mode = simple.value ? 'simple' : 'rich'
  }
}

export function useSimpleMode() {
  if (typeof window !== 'undefined' && !initialized) {
    initialized = true
    try {
      simple.value = window.localStorage.getItem('dt-mode') === 'simple'
    } catch {
      /* storage blocked: default to rich */
    }
    apply()
  }
  function toggle() {
    simple.value = !simple.value
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem('dt-mode', simple.value ? 'simple' : 'rich')
    } catch {
      /* storage blocked: still applies for this session */
    }
    apply()
  }
  return { simple, toggle }
}
