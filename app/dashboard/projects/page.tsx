import React, { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'

async function getData() {
  const res = await fetch('http://localhost:3001/api/projects', { cache: 'no-cache' })
  const supabase = createClient()

  const { data: projects, error } = await supabase.from('projects').select('*')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return { product: projects }
}

async function ProjectsPage() {
  const data = await getData()
  console.log(data)
  return (
    <Suspense fallback={'Loading'}>
      <div>ProjectsPage</div>
      {data?.product?.map((item: { name: string }) => {
        return <p key={item.name}>{item.name}</p>
      })}
    </Suspense>
  )
}

export default ProjectsPage
