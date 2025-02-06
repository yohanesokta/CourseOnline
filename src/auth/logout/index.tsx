import { useEffect } from "react"
import { userLogout } from "../../api/auth.controller"

export const Logout = () => {
  useEffect(() => {
    userLogout();
  }, [])
  return (
    <div>PleaseWait</div>
  )
}
