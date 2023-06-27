import { supabase } from "./SupabaseConfig";

export async function fetchAllTravels() {
    const { data, error } = await supabase
        .from('travel')
        .select();
    return data;
}

export async function fetchAllMapRecords() {
    const { data, error } = await supabase
        .from('records')
        .select();
    if (error) {
        console.log(error);
    }
    return data;
}

export async function uploadNewTravel() {

}