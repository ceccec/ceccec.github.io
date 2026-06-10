---
outline: deep
description: "Quantum Console: a free, client-side terminal, realtime search, and chat over the double-torus portal — with optional bring-your-own-key external AI."
head:
  - - meta
    - property: og:title
      content: "Quantum Console | Double Torus"
  - - meta
    - property: og:description
      content: "A free, client-side terminal, realtime search, and chat. The architecture is the intelligence; external AI is an optional bring-your-own-key augment."
---

# Quantum Console

A terminal, a realtime search, and a chat — all **client-side at no cost**. The
architecture itself is the intelligence: the chat routes your question to the
portal's own computed tools and local search and answers from receipts, with
**zero network calls**. External AI is an optional bring-your-own-key augment.

<QuantumConsole />

<SelfConsult />

<RealtimeChat />

## Security by architecture

- **No secrets ship in the repo or the bundle.** The terminal, search, and the
  default (local) chat make **zero network calls**.
- The terminal runs only an **allowlist** of read-only concept commands — no
  `eval`, no arbitrary code, no side effects.
- The optional external AI uses a key **you** supply, kept **only in your
  browser** and sent directly to the provider over HTTPS. The tools it may call
  are restricted to the same read-only concept commands; anything else is
  refused client-side.
- External AI and web-search output are treated as untrusted and rendered as
  text only.

The cost is the architecture, not an API bill.
