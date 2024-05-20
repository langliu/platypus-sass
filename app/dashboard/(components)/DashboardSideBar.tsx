'use client'

import Link from 'next/link'
import NavList from './NavList'

export default function DashboardSideBar() {
  return (
    <div className='lg:block hidden border-r h-full'>
      <div className='flex h-full max-h-screen flex-col gap-2 '>
        <div className='flex h-[55px] items-center justify-between border-b px-3 w-full'>
          <Link className='flex items-center gap-2 font-semibold ml-1' href='/'>
            <span className=''>Platypus Sass</span>
          </Link>
        </div>
        <NavList />
      </div>
    </div>
  )
}
