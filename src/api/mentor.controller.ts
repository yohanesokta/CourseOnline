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
        return false
    }
}

export async function addCategoryClass(name:string, description:string){
    try {
        await axios.post(endpoint_api + "/mentor/class/category",{ name, description },
            {
                headers : {
                    "Authorization": `Bearer ${token}`
                }
            })
        return {
            status : true,
            message : ""
        }
    } catch (error : any) {
        return {
            status : false,
            message : error["response"]["data"]["message"] || "action error"
        }
    }
}

export interface Class {
    name : string,
    description : string
    category_id : number,
    requerement : string,
    price : number,
    duration : number
}

export async function addClass(data: Class) {
    try {
        const response = await axios.post(endpoint_api + "/mentor/class", data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return {
            status: true,
            message: response.data.message
        };
    } catch (error: any) {
        return {
            status: false,
            message: error["response"]?.data?.message || "action error"
        };
    }
}