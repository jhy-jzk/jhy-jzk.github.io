import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://xbfeyaujopdgelbnxymu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZmV5YXVqb3BkZ2VsYm54eW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0Mzg1OTEsImV4cCI6MjAwMTAxNDU5MX0.HvPaWZjyMubWaQanl-n8lNGimo4WKLJoKLixGB4rmQQ')

// export async function fetchAllTravels() {
//     return await supabase
//         .from('Travel')
//         .select()
// }