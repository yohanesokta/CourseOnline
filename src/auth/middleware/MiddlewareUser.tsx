import { ComponentType, useEffect } from "react"
import { getuserdata } from "../../api/auth.controller";
import { useDispatch } from "react-redux";
import { setdata } from "../../utility/slice";


export const MiddlewareUser = (Component : ComponentType) => {
    const localToken = localStorage.getItem("usertoken");

    const distpatch = useDispatch()
    useEffect(()=>{
        if (localToken) {
            getuserdata(String(localToken)).then((element) => {
                distpatch(setdata(element))            
            })
        }
    },[])
    
  return (
    <Component/>
  )
}
