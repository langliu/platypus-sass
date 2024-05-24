import type { Metadata } from 'next'
import { UserAuthForm } from './(components)/user-auth-form'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
  return (
    <>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>登录</h1>
        <p className='text-sm text-muted-foreground'>在下方输入你的账号密码进行登录</p>
      </div>
      <UserAuthForm />
    </>
  )
}
