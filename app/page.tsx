import { ModeToggle } from '@/components/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24 gap-4'>
      <Link href={'/dashboard'} className={buttonVariants({ variant: 'default' })}>
        Dashboard
      </Link>

      <Link href={'/login'} className={buttonVariants({ variant: 'default' })}>
        Login
      </Link>
      <ModeToggle />
    </main>
  )
}
