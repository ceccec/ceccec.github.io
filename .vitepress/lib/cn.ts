import { type ClassValue, clsx } from 'clsx'

/**
 * shadcn cn() — theme mount; sealed graph references lake/widgets at call time only.
 *
 * NO twMerge. tailwind-merge shipped 86 KB of Tailwind conflict tables — every utility group it
 * knows, with its JSDoc retained because the build does not minify — into the entry chunk of a
 * repository that HAS NO TAILWIND: no `tailwindcss` dependency, no tailwind.config, no postcss
 * config. Every call site passes this project's own BEM classes (`cn('ui-card', props.class)`) or a
 * cva variant function, and twMerge only ever collapses conflicting TAILWIND utilities — so on
 * these inputs it was an identity function with a table behind it. Measured: the app chunk stood at
 * 773 KB against a 649 KB floor, and this was 86 KB of it, doing nothing.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
