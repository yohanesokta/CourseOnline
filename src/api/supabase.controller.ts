import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { endpoint_api } from "./auth.controller";

const SupabaseURL = import.meta.env.VITE_SUPABASE_URL
const SupabaseANON = import.meta.env.VITE_SUPABASE_ANON

export const supabase = createClient(SupabaseURL!,SupabaseANON!)

const token = localStorage.getItem("usertoken");

export const supabase_get_bucket = async (file : any,user_id : any) => {
    try{
        const upload = await supabase.storage.from("course").upload("public/" + user_id + ".png",file,{
            cacheControl : "10",
            upsert : true,
        })
        const getURL = supabase.storage.from("course").getPublicUrl(upload.data!.path)

        
        await axios.put(endpoint_api + "/admin/mentor",{
            "user_id" : user_id,
            "profile_picture_url" : getURL.data.publicUrl!
        },{
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }

} 