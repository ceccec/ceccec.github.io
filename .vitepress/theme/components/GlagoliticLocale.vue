<script setup lang="ts">
// The Glagolitic locale. A live "autotranslate all" mode: toggle it and the whole page — nav, body,
// footer — is transliterated into the ninth-century script via toGlagolitic (Latin and Cyrillic both,
// by sound). Deterministic, client-side, reversible, persisted, and re-applied across SPA navigation.
// HONEST: this is transliteration (script-conversion), not meaning-translation — the page reads in
// Glagolitic letters, the same words in the decoded alphabet.
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { toGlagolitic } from '../lib/quantumMind'

const active = ref(false)
const originals = new WeakMap<Text, string>()
let observer: MutationObserver | null = null
const SKIP = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'TEXTAREA', 'svg', 'CANVAS'])

function convert(node: Text) {
  const text = node.nodeValue ?? ''
  if (!/[A-Za-zА-Яа-яЀ-ӿ]/.test(text)) return
  if (!originals.has(node)) originals.set(node, text)
  const g = toGlagolitic(originals.get(node) as string)
  if (node.nodeValue !== g) node.nodeValue = g
}

function eligible(p: Element | null): boolean {
  if (!p) return false
  if (SKIP.has(p.tagName)) return false
  if (p.closest('.glagolitic-locale')) return false // never transliterate our own control
  return true
}

function walk(root: Node) {
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (eligible((n as Text).parentElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  })
  let n: Node | null
  while ((n = tw.nextNode())) convert(n as Text)
}

function restore() {
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let n: Node | null
  while ((n = tw.nextNode())) {
    const orig = originals.get(n as Text)
    if (orig !== undefined) (n as Text).nodeValue = orig
  }
}

function apply() {
  if (active.value) {
    walk(document.body)
    observer = new MutationObserver((muts) => {
      for (const m of muts)
        for (const node of m.addedNodes) {
          if (node.nodeType === 3) {
            if (eligible((node as Text).parentElement)) convert(node as Text)
          } else if (node.nodeType === 1) walk(node)
        }
    })
    observer.observe(document.body, { childList: true, subtree: true })
  } else {
    observer?.disconnect()
    observer = null
    restore()
  }
}

function toggle() {
  active.value = !active.value
  try {
    localStorage.setItem('glagolitic-locale', active.value ? '1' : '0')
  } catch {
    /* storage blocked — the toggle still works for the session */
  }
  apply()
}

onMounted(() => {
  try {
    active.value = localStorage.getItem('glagolitic-locale') === '1'
  } catch {
    /* ignore */
  }
  if (active.value) apply()
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <button
    class="glagolitic-locale"
    :class="{ on: active }"
    type="button"
    :aria-pressed="active"
    @click="toggle"
    title="Glagolitic locale — transliterate the whole page into the ninth-century script"
  >
    <span class="glagolitic-locale__glyph">Ⰳ</span>
    <span class="glagolitic-locale__label">{{ active ? 'Latin' : 'Ⰳⰾⰰⰳⱁⰾⰻⱌⰰ' }}</span>
  </button>
</template>

<style scoped>
.glagolitic-locale {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.82rem;
  cursor: pointer;
  box-shadow: 0 1px 10px var(--vp-c-shadow-1, rgba(0, 0, 0, 0.14));
  transition: border-color 0.15s, background 0.15s;
}
.glagolitic-locale:hover { border-color: var(--vp-c-brand-1); }
.glagolitic-locale.on { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.glagolitic-locale__glyph { font-family: var(--font-glagolitic); font-size: 1.1rem; line-height: 1; }
.glagolitic-locale__label { font-family: var(--font-glagolitic); }
@media (max-width: 720px) {
  .glagolitic-locale__label { display: none; }
}
</style>
