import axios from "axios"

interface userdata_sign {
    username: any,
    email: any,
    password: any
    repassword: any
}

export const endpoint_api = import.meta.env.VITE_API_URL
export const endpoint_app = import.meta.env.VITE_APP_URL

export const userSign = async (userdata: userdata_sign) => {
    if (userdata.username && userdata.email && userdata.password && userdata.password == userdata.repassword) {

        const data = await axios.post(endpoint_api + "/auth/register",{
                username: userdata.username,
                user_email: userdata.email,
                user_password: userdata.password
            })
        return data
    }
}

