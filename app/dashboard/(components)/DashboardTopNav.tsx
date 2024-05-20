'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Profile } from '@/components/profile'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import NavList from './NavList'

export default function DashboardTopNav({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col'>
      <header className='flex h-14 lg:h-[55px] items-center gap-4 border-b px-6'>
        <Sheet>
          <SheetTrigger className='min-[1024px]:hidden p-2 transition'>
            <Menu className='size-4' />
            <span className='sr-only'>Home</span>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader className='mb-2'>
              <Link className='flex items-center gap-2 font-semibold ml-1' href='/'>
                <SheetTitle>Platypus Sass</SheetTitle>
              </Link>
            </SheetHeader>
            <NavList inSheet />
          </SheetContent>
        </Sheet>
        <div className='flex justify-center items-center gap-3 ml-auto'>
          <Profile />
          <ModeToggle />
        </div>
      </header>
      {children}
    </div>
  )
}
