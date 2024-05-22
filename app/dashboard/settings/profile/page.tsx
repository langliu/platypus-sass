import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@/lib/supabase/server'

async function getUser() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export default async function Settings() {
  const user = await getUser()
  return (
    <div className='flex justify-start items-center flex-wrap px-4 pt-5 gap-4'>
      <div>
        <h3 className='text-lg font-medium'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className='flex flex-col gap-6 mb-[5rem] w-full max-w-[700px]'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
            <Label>邮件地址</Label>
            <Input disabled defaultValue={user?.email} />
          </div>
        </div>
      </div>
    </div>
  )
}
