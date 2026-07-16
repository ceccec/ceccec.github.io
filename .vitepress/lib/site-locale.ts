// Browser-safe locale + display copy — thin re-exports of the ONE copies (no src/site barrel:
// avoids the mind/movie graph on client bootstrap). Path primitives + en→bg translator live at
// station src/1/9; the display fns live beside toGlagolitic in quantum/heaven/library. The former
// mirror drifted three ways before it was dissolved — an import cannot drift.
export { localePath, localeFromRoute } from '../../src/1/9'
export type { LocaleName } from '../../src/1/9'
export { pickLocale, localizeMonolingual as displayText } from '../../src/quantum/heaven/library'
