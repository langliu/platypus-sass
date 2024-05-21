import { Button } from '@/components/ui/button'
// import { useTheme } from 'next-themes'
import { headers } from 'next/headers'
import { login, signup } from './actions'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  // const supabase = createClient()
  const origin = headers().get('origin')
  // const origin = window.origin
  // const { theme } = useTheme()
  console.log('them', origin)

  const signIn = async () => {
    'use server'

    // 1. Create a Supabase client
    const supabase = createClient()
    const origin = headers().get('origin')
    // 2. Sign in with GitHub
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.log(error)
    } else {
      return redirect(data.url)
    }
    // 3. Redirect to landing page
  }

  return (
    <form className='flex flex-col gap-4'>
      <div>
        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='email' required />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input id='password' name='password' type='password' required />
      </div>
      <div className='flex gap-4'>
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
      </div>
    </form>
    // <div className='w-[400px] border border-gray-200 rounded-2xl p-8'>
    //   <h1 className='text-center text-2xl font-bold'>Platypus Sass</h1>
    //   <Auth
    //     supabaseClient={supabase}
    //     appearance={{
    //       theme: ThemeSupa,
    //     }}
    //     localization={{
    //       variables: {
    //         sign_in: {
    //           email_label: '邮件地址',
    //           email_input_placeholder: '请输入你的邮件地址',
    //           password_label: '登录密码',
    //           password_input_placeholder: '请输入你的登录密码',
    //           button_label: '登录',
    //           link_text: '已有账号？立即登录',
    //         },
    //         sign_up: {
    //           link_text: '没有账号？立即注册',
    //           email_label: '邮件地址',
    //           email_input_placeholder: '请输入你的邮件地址',
    //           password_label: '登录密码',
    //           password_input_placeholder: '请输入你的登录密码',
    //           button_label: '注册',
    //           confirmation_text: '查看您邮件里的确认链接',
    //         },
    //         forgotten_password: {
    //           link_text: '忘记密码？',
    //           email_label: '邮件地址',
    //           email_input_placeholder: '请输入你的邮件地址',
    //           button_label: '发送重置密码说明',
    //         },
    //       },
    //     }}
    //     redirectTo={`${origin}/auth/callback`}
    //     theme={'dark'}
    //   />
    // </div>
  )
}
