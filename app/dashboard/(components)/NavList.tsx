'use client'
import { Separator } from '@/components/ui/separator'
import { SheetClose } from '@/components/ui/sheet'
import clsx from 'clsx'
import { Folder, HomeIcon, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { type ReactNode } from 'react'

function NavLink({
  title,
  icon,
  href,
  inSheet,
}: {
  title: ReactNode
  icon: ReactNode
  href: string
  inSheet?: boolean
}) {
  const pathname = usePathname()
  console.log('pathname', pathname, pathname === href)
  const link = (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-white dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800',
        {
          'flex items-center gap-2 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50 bg-gray-100 dark:bg-gray-800':
            pathname === href,
        },
      )}
      href={href}
    >
      {icon}
      {title}
    </Link>
  )
  if (inSheet) {
    return <SheetClose asChild>{link}</SheetClose>
  }
  return link
}

export default function NavList({ inSheet = false }: { inSheet?: boolean }) {
  return (
    <div className='flex-1 overflow-auto py-1.5 '>
      <nav className='grid px-2 items-start text-sm font-medium gap-1.5'>
        <NavLink
          icon={<HomeIcon className='size-4' />}
          title='Home'
          href='/dashboard'
          inSheet={inSheet}
        />
        <NavLink
          icon={<Folder className='size-4' />}
          title='Projects'
          href='/dashboard/projects'
          inSheet={inSheet}
        />
        <NavLink
          icon={<Folder className='size-4' />}
          title='Finance'
          href='/dashboard/finance'
          inSheet={inSheet}
        />
      </nav>
      <Separator className='my-3' />
      <nav className='grid px-2 items-start text-sm font-medium gap-1.5'>
        <NavLink
          icon={<Settings className='size-4' />}
          title='Settings'
          href='/dashboard/settings'
          inSheet={inSheet}
        />
      </nav>
    </div>
  )
}
