// Resolve the public URL for a VitePress page from relativePath + route params (not [page] literals).
export function universalRoutePath(
  relativePath: string,
  locale: 'gla' | 'en' | 'bg',
  params: Record<string, unknown> = {},
): string {
  const prefix = locale === 'gla' ? '' : `/${locale}`
  const norm = relativePath.replace(/\\/g, '/')

  const join = (...parts: string[]) => {
    const path = parts.filter(Boolean).join('/').replace(/\/+/g, '/')
    return path.startsWith('/') ? path : `/${path}`
  }

  if (norm.endsWith('[page].md')) {
    const slug = typeof params.page === 'string' ? params.page : typeof params.title === 'string' ? params.title : ''
    return slug ? join(prefix, slug) : join(prefix) || '/'
  }

  if (norm.endsWith('[path].md')) {
    const slug =
      typeof params.path === 'string' ? params.path : typeof params.page === 'string' ? params.page : ''
    return slug ? join(prefix, slug) : join(prefix) || '/'
  }

  for (const kind of ['papers'] as const) {
    if (norm.includes(`${kind}/[id].md`)) {
      const id = typeof params.id === 'string' ? params.id : typeof params.index === 'string' ? params.index : ''
      return id ? join(prefix, kind, id) : join(prefix, kind)
    }
    if (norm.endsWith(`${kind}/index.md`) || norm.endsWith(`${kind}/index.md/`)) {
      return join(prefix, kind)
    }
  }

  for (const kind of ['references', 'diamonds'] as const) {
    if (norm.endsWith(`${kind}/index.md`) || norm.endsWith(`${kind}/index.md/`)) {
      return join(prefix, kind)
    }
  }

  return join(
    '/',
    norm.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, ''),
  )
}
