// Offline availability for the portal — the quantum PWA, active in ALL environments. Same-origin GET only,
// stale-while-revalidate: pages and assets are served from cache and refreshed in the background, so the
// double torus, the collective mind and every visited page work offline by default. The app shell and key
// artifacts are precached on install. No external origins are touched (the optional AI chat is left to the
// network); this is purely a local cache.
//
// IMPORTANT: the service worker must NEVER intercept the dev server's own machinery — Vite modules, HMR,
// optimized deps and versioned/transformed requests. If it caches those, it serves stale or null modules
// and breaks the dev server (504 / "respondWith returned null"). Those URLs do not exist in a production
// build, so skipping them is a no-op in production and essential in development — one SW, every environment.
// v4: navigations are NETWORK-FIRST (a deploy shows immediately when online — stale-while-revalidate
// made every page one visit stale, the "why do I still see old content" defect), and pages the server
// now 404s (the theorem-science lens removed them) are EVICTED from the cache instead of resurrected.
// Assets keep stale-while-revalidate. The version bump purges every visitor's v3 store on activation.
const CACHE = 'double-torus-v4'
const PRECACHE = ['/', '/site.webmanifest', '/icon.svg', '/mcp.json', '/skills.json', '/llms.txt']

// True for any request that belongs to the bundler/dev pipeline rather than the app's own content.
function isDevPipeline(url) {
  return (
    url.pathname.startsWith('/@') || // /@vite/client, /@id/, /@fs/, /@vitepress/ ...
    url.pathname.startsWith('/.vitepress/') || // dev cache (optimized deps) + theme source
    url.pathname.includes('/node_modules/') ||
    url.search.includes('import') || // ?import — Vite module requests
    url.searchParams.has('v') || // ?v=<hash> — optimized deps
    url.searchParams.has('t') // ?t=<ts> — HMR transforms
  )
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // Tolerant precache: a single missing URL must not fail the whole install.
      Promise.allSettled(PRECACHE.map((url) => cache.add(url))),
    ).then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (isDevPipeline(url)) return // let the dev server / bundler serve its own modules, untouched
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request)
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            cache.put(request, response.clone())
          } else if (response && (response.status === 404 || response.status === 410)) {
            // The server says this page no longer exists (removed by the theorem-science lens) —
            // evict it so the cache can never resurrect a removed page.
            cache.delete(request)
          }
          return response
        })
        // Offline: fall back to the cached copy, then the app shell for navigations.
        .catch(async () => {
          if (cached) return cached
          if (request.mode === 'navigate') {
            const shell = await cache.match('/')
            if (shell) return shell
          }
          return Response.error()
        })
      // NAVIGATIONS ARE NETWORK-FIRST: fresh HTML the moment a deploy lands (offline falls back to
      // cache/shell above). Assets stay stale-while-revalidate — they are content-hashed anyway.
      if (request.mode === 'navigate') return network
      return cached || network
    }),
  )
})
