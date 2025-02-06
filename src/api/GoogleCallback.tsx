import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router"

export const GoogleCallback = () => {
    const [SearchParams] = useSearchParams()
    const navigate = useNavigate()
    const token = SearchParams.get("token")

    useEffect(()=>{
        if (token) {
            localStorage.setItem("usertoken",token!)
            navigate("/")
        }
    },[])
    return (<>
           <p>Please wait</p>
    </>
    )
}
