import axios from "axios"
import { endpoint_api } from "./auth.controller"
const token = localStorage.getItem("usertoken") || ""

export async function findMentorCategory(){
    try {
        const {data} = await axios.get(endpoint_api + "/mentor/class/category",{
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(data)
        return data.data
    } catch (error) {
        console.log(error)
    }
}