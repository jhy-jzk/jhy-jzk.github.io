import { supabase } from "./SupabaseConfig";

export async function uploadFile(bucket, path, fileBody) {
    // const avatarFile = event.target.files[0]
    const { data, error } = await supabase
        .storage
        .from(bucket)
        .upload(path, fileBody, {
            cacheControl: '3600',
            upsert: false
        })
    if (data) {
        console.log(data);
    }
    if (error) {
        console.log(error)
    }
}