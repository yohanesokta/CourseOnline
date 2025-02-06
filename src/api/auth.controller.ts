import axios from "axios"

interface userdata_sign {
    username: any,
    email: any,
    password: any
    repassword: any
}

interface userdata_login {
    email: any,
    password: any,
}

export const endpoint_api = import.meta.env.VITE_API_URL
export const endpoint_app = import.meta.env.VITE_APP_URL

export const userSign = async (userdata: userdata_sign) => {
    if (userdata.username && userdata.email && userdata.password && userdata.password == userdata.repassword) {

        const data = await axios.post(endpoint_api + "/auth/register", {
            username: userdata.username,
            user_email: userdata.email,
            user_password: userdata.password
        })
        return data
    }
}

export const userLogin = async (userdata: userdata_login) => {
    if (userdata.password && userdata.email) {
        const data = await axios.post(endpoint_api + "/auth/login", {
            user_email: userdata.email,
            user_password: userdata.password
        })
        localStorage.setItem("usertoken", data.data.data.token)
        return data
    }

}

export const getuserdata = async (token: string) => {
    if (token) {
        try {
            const data = await axios.get(endpoint_api + "/user", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return data.data.data
        } catch (error: any) {
            if (error.status == 401) {
                localStorage.clear()
                window.location.href = "/auth/login"
            }
        }
    }
}

export const userLogout = async () => {
    const token = localStorage.getItem("usertoken");
    if (token) {
        try {
            await axios.post(endpoint_api + "/auth/logout",{}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        } finally {
            localStorage.clear()
            window.location.href = "/"
        }
    } else {
        window.location.href = "/"
    }
}