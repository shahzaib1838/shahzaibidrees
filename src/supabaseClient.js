import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dummy.supabase.co'
const supabaseAnonKey = 'dummy-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)