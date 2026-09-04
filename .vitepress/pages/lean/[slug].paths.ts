// Lean catch-all — one canonical page per kernel-checked theorem; slugs computed from the sealed
// .lean sources at build, so a page exists for every proposition the kernel decided and for no other.
import { leanPagePaths } from '../../render'

export default { paths: () => leanPagePaths() }
