import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** shadcn cn() — theme mount; sealed graph references lake/widgets at call time only. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
