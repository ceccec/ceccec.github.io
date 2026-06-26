// Thin VitePress dev-server bind — zero src/ imports; config.mts consumes this instead of src/site.
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../..', import.meta.url))

const HERO_WARMUP_CLIENT_FILES = [
  '.vitepress/theme/components/BackgroundMovie.vue',
  '.vitepress/lib/hero-movie-paint.ts',
  '.vitepress/lib/hero-copy.ts',
  '.vitepress/lib/movie-canvas.ts',
  '.vitepress/theme/Layout.vue',
  'src/quantum/index.ts',
  'src/plasma/ball/index.ts',
] as const

/** Dev bind — VitePress defaults to IPv6 ::1; tools hitting 127.0.0.1 appear hung. */
export function vitepressDevServerBind() {
  return {
    host: '127.0.0.1' as const,
    port: 5173,
    strictPort: false,
    warmup: {
      clientFiles: HERO_WARMUP_CLIENT_FILES.map((rel) => join(projectRoot, rel)),
    },
    watch: {
      ignored: [
        '**/.vitepress/cache/**',
        '**/node_modules/**',
        join(projectRoot, '.vitepress/cache/**'),
        join(projectRoot, 'node_modules/**'),
      ],
      awaitWriteFinish: { stabilityThreshold: 100, pollInterval: 50 },
    },
  }
}

/** Pre-bundle hero paint deps on dev start — first /en/ navigation must not wait on cold transform. */
export function vitepressDevOptimizeDeps() {
  return {
    include: [
      'vue',
      'vitepress > @vueuse/core',
      'vitepress > @vueuse/integrations/useFocusTrap',
    ],
  }
}
