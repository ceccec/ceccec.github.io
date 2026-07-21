// Thin theme mount — status badge kinds from src/0 (cycle-free leaf).
// Prefer this over deep earth/architecture imports from .vue panels.
export {
  STATUS_BADGE_KINDS,
  type StatusBadgeKind,
} from '../../src/0/index.ts'

import { STATUS_BADGE_KINDS, type StatusBadgeKind } from '../../src/0/index.ts'

/** Map coverage / boolean / keyword → status kind for UiBadge. */
export function statusBadgeKind(
  input: boolean | 'covered' | 'partial' | 'gap' | 'ready' | 'ok' | 'warn' | 'error' | 'refused' | 'ci' | 'open' | 'closed' | string,
): StatusBadgeKind {
  if (input === true || input === 'ready' || input === 'covered' || input === 'closed') return 'ready'
  if (input === 'ok') return 'ok'
  if (input === 'partial') return 'partial'
  if (input === 'warn' || input === 'open') return 'warn'
  if (input === 'error') return 'error'
  if (input === 'refused') return 'refused'
  if (input === 'ci') return 'ci'
  if (input === false || input === 'gap') return 'gap'
  const lower = String(input).toLowerCase()
  if ((STATUS_BADGE_KINDS as readonly string[]).includes(lower)) return lower as StatusBadgeKind
  if (/refus|reject|fail|denied/.test(lower)) return 'refused'
  if (/error|broken|hard/.test(lower)) return 'error'
  if (/warn|open/.test(lower)) return 'warn'
  if (/partial/.test(lower)) return 'partial'
  if (/ci.?only|node|stdio/.test(lower)) return 'ci'
  if (/ready|ok|closed|pass|covered|✓/.test(lower)) return 'ready'
  return 'gap'
}

/** Reusable status→CSS-var surface for panels/UX. */
export function statusBadgeTokens(kind: StatusBadgeKind = 'ready') {
  const k = (STATUS_BADGE_KINDS as readonly string[]).includes(kind) ? kind : 'gap'
  return {
    kind: k as StatusBadgeKind,
    fill: `var(--status-${k})`,
    fg: `var(--status-${k}-fg)`,
    soft: `var(--status-${k}-soft)`,
    className: `ui-badge--status-${k}`,
    kinds: STATUS_BADGE_KINDS,
  }
}

/** Full palette table — every kind’s CSS vars. */
export function statusBadgePalette() {
  return STATUS_BADGE_KINDS.map((kind) => statusBadgeTokens(kind))
}
