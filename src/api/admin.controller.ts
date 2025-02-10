import axios from "axios"
import { endpoint_api  } from "./auth.controller"

interface mentor_add_interface {
    username : string,
    email : string,
    password : string
}

const token = localStorage.getItem("usertoken") || ""


export const addusermentor = async (userdata : mentor_add_interface) => {
    try {
       const data = await axios.post(endpoint_api + "/admin/mentor",{
            username : userdata.username,
            user_email : userdata.email,
            user_password : userdata.password
        }, {
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })

        return data.status
    } catch (error : any) {
        return error.response.data.message
    }
}

export const getusermentor = async () =>{
    try {
        const data = await axios.get(endpoint_api + "/admin/mentors?skip=0&take=10",{
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })
        return data.data.data
    } catch(error) {
        console.log(error)
    }
}