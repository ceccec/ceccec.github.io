// VitePress requires the custom theme entry at .vitepress/theme/index.ts. The UI render layer — every
// component, composable, the styles and the registration logic — now lives in src/ui, so ALL logic
// (model AND UI) sits under src/. This file is the thin shell VitePress loads: it re-exports the theme
// assembled in src/render/ui/index.ts. The path here is the framework handle; the source is in src/.
export { default } from '../../src/render/ui/index.ts'
