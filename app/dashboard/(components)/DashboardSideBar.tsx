'use client'

import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'
import { Folder, HomeIcon, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

function NavLink({
  title,
  icon,
  href,
}: {
  title: ReactNode
  icon: ReactNode
  href: string
}) {
  const pathname = usePathname()
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-white dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800',
        {
          'flex items-center gap-2 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50':
            pathname === href,
        },
      )}
      href={href}
    >
      {icon}
      {title}
    </Link>
  )
}

export default function DashboardSideBar() {
  const pathname = usePathname()

  return (
    <div className='lg:block hidden border-r h-full'>
      <div className='flex h-full max-h-screen flex-col gap-2 '>
        <div className='flex h-[55px] items-center justify-between border-b px-3 w-full'>
          <Link className='flex items-center gap-2 font-semibold ml-1' href='/'>
            <span className=''>Platypus Sass</span>
          </Link>
        </div>
        <div className='flex-1 overflow-auto py-2 '>
          <nav className='grid px-2 items-start text-sm font-medium'>
            <NavLink icon={<HomeIcon className='size-4' />} title='Home' href='/dashboard' />
            <NavLink
              icon={<Folder className='size-4' />}
              title='Projects'
              href='/dashboard/projects'
            />
            <NavLink
              icon={<Folder className='size-4' />}
              title='Finance'
              href='/dashboard/finance'
            />
          </nav>
          <Separator className='my-3' />
          <nav className='grid px-2 items-start text-sm font-medium'>
            <NavLink
              icon={<Settings className='size-4' />}
              title='Settings'
              href='/dashboard/settings'
            />
          </nav>
        </div>
      </div>
    </div>
  )
}
