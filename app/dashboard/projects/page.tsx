import React, { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'

async function getData() {
  'use server'
  const supabase = createClient()
  const { data: projects, error } = await supabase.from('projects').select('*')

  if (error) {
    throw new Error(error.message)
  }

  return { product: projects }
}

async function ProjectsPage() {
  const data = await getData()
  console.log(data)
  return (
    <Suspense fallback={'Loading'}>
      <div>Projects Page</div>
      {data?.product?.map((item: { name: string }) => {
        return <p key={item.name}>{item.name}</p>
      })}
    </Suspense>
  )
}

export default ProjectsPage
