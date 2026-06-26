// Hero page copy — avoids mounts.ts ↔ hero-movie.ts cycle on BackgroundMovie bootstrap.
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { movieTextFromCopy, type SharedHeroCopy } from './hero-movie-paint'
import { displayText, localeFromRoute } from './site-locale'

export function useHeroCopy() {
  const route = useRoute()
  const { frontmatter, title, description } = useData()
  const locale = computed(() => localeFromRoute(route.path))
  const t = (text?: string) => (text ? displayText(locale.value, text) : text)

  const copy = computed((): SharedHeroCopy => {
    const hero = frontmatter.value.hero as { tagline?: string } | undefined
    return {
      title: t((frontmatter.value.title as string | undefined) || title.value),
      description: t(description.value),
      tagline: t(hero?.tagline),
      keywords: (frontmatter.value.keywords as string[] | undefined)?.map(
        (keyword) => t(keyword) ?? keyword,
      ),
    }
  })

  const movieText = computed(() => movieTextFromCopy(copy.value) || route.path)
  return { route, copy, movieText }
}
