'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export const logout = async () => {
  'use server'

  const supabase = createClient()

  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error)
  }
  revalidatePath('/dashboard', 'layout')
}
