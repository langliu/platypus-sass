import type { ReactNode } from 'react'
import { Suspense } from 'react'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={'Loading Projects'}>{children}</Suspense>
}
