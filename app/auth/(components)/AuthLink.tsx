'use client'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthLink() {
  const pathname = usePathname()
  const inLoginPage = pathname === '/auth/login'
  return (
    <Link
      href={inLoginPage ? '/auth/sign' : '/auth/login'}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8',
      )}
    >
      {inLoginPage ? '注册' : '登录'}
    </Link>
  )
}
