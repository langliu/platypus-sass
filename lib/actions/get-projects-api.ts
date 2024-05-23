'use server'
import { createClient } from '@/lib/supabase/server'

export const getAllArticlesApi = async () => {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from('projects').select('*')

    if (error?.code)
      return {
        error,
      }

    return data
  } catch (error) {
    return error
  }
}
